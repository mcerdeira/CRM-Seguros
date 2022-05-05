using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins;
using ProvinciaSeguros.Plugins.Constantes;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Reflection;

namespace ProvinciaSeguros.Tests
{
    /// <summary>
    /// Ejecuto los siguientes tests:
    /// Tipo telefono - Es principal - Deberia agregarlo
    /// -------------------------------------------------
    /// COMERCIAL - NO - SI
    /// COMERCIAL - NO - NO
    /// PARTICULAR - NO - SI
    /// COMERCIAL - SI - NO
    /// MOVIL - SI - SI
    /// MOVIL - NO - SI
    /// PARTICULAR - SI - NO
    /// </summary>

    [TestClass]
    public class ActualizacionTelefonosTest
    {
        #region Test Initialization and Cleanup
        // Use ClassInitialize to run code before running the first test in the class
        [ClassInitialize()]
        public static void ClassInitialize(TestContext testContext) { }

        // Use ClassCleanup to run code after all tests in a class have run
        [ClassCleanup()]
        public static void ClassCleanup() { }

        // Use TestInitialize to run code before running each test 
        [TestInitialize()]
        public void TestMethodInitialize() { }

        // Use TestCleanup to run code after each test has run
        [TestCleanup()]
        public void TestMethodCleanup() { }
        #endregion

        [TestMethod]
        public void TELEFONOS_sin_telefonos_deberia_agregar_telefono_nuevo()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid()};

            context.Initialize(new List<Entity> { persona });

            var target = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            target.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            try {

                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionTelefonosPlugin>(target);

            } catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(false);

                return;
            }

            Assert.IsTrue(true);
        }

        [TestMethod]
        public void TELEFONOS_Existe_telefono_comercial_no_deberia_agregar_telefono_nuevo()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid() };
            var telefono = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefono.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            telefono.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefono.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, telefono });

            var target = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            target.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {

                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionTelefonosPlugin>(target);

            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }

        [TestMethod]
        public void TELEFONOS_No_Existe_telefono_particular_deberia_agregar_telefono_nuevo()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid() };
            var telefono = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefono.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            telefono.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefono.Attributes[CamposTelefono.PERSONAID] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            context.Initialize(new List<Entity> { persona, telefono });

            var target = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_PARTICULAR));
            target.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            try
            {

                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionTelefonosPlugin>(target);

            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(false);

                return;
            }

            Assert.IsTrue(true);
        }

        [TestMethod]
        public void TELEFONOS_Existe_telefono_particular_no_deberia_agregar_telefono()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid() };
            var telefonoComercial = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoComercial.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            telefonoComercial.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoComercial.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            var telefonoParticular = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoParticular.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_PARTICULAR));
            telefonoParticular.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoParticular.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, telefonoComercial, telefonoParticular });

            var target = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_PARTICULAR));
            target.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {

                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionTelefonosPlugin>(target);

            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }

        [TestMethod]
        public void TELEFONOS_Existe_telefono_principal_no_deberia_agregar_telefono()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid() };
            var telefonoComercial = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoComercial.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            telefonoComercial.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoComercial.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            var telefonoParticular = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoParticular.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_PARTICULAR));
            telefonoParticular.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoParticular.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, telefonoComercial, telefonoParticular });

            var target = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            target.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_SI));
            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {

                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionTelefonosPlugin>(target);

            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }

        [TestMethod]
        public void TELEFONOS_Agrego_telefono_movil_principal_deberia_agregar_telefono()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid() };
            var telefonoComercial = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoComercial.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            telefonoComercial.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoComercial.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            var telefonoParticular = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoParticular.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_PARTICULAR));
            telefonoParticular.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoParticular.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, telefonoComercial, telefonoParticular });

            var target = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_MOVIL));
            target.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_SI));
            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {

                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionTelefonosPlugin>(target);

            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(false);

                return;
            }

            Assert.IsTrue(true);
        }

        [TestMethod]
        public void TELEFONOS_Agrego_telefono_movil_no_principal_no_deberia_agregar_telefono()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid() };
            var telefonoComercial = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoComercial.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            telefonoComercial.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoComercial.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            var telefonoParticular = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoParticular.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_PARTICULAR));
            telefonoParticular.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoParticular.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            var telefonoMovil = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoMovil.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_MOVIL));
            telefonoMovil.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_SI));
            telefonoMovil.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, telefonoComercial, telefonoParticular, telefonoMovil });

            var target = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_MOVIL));
            target.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionTelefonosPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }

        [TestMethod]
        public void TELEFONOS_Agrego_telefono_particular_no_principal_no_deberia_agregar_telefono()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid() };
            var telefonoComercial = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoComercial.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_COMERCIAL));
            telefonoComercial.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoComercial.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            var telefonoParticular = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoParticular.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_PARTICULAR));
            telefonoParticular.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_NO));
            telefonoParticular.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            var telefonoMovil = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            telefonoMovil.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_MOVIL));
            telefonoMovil.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_SI));
            telefonoMovil.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, telefonoComercial, telefonoParticular, telefonoMovil });

            var target = new Entity("axx_telefono") { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.TIPOTELEFONO] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_PARTICULAR));
            target.Attributes[CamposTelefono.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposTelefono.OPTION_ESPRINCIPAL_SI));
            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionTelefonosPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }
    }
}