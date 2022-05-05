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
    /// Tipo correo electronico - Es principal  - Deberia agregarlo
    /// -------------------------------------------------
    /// COMERCIAL               - SI            - SI---
    /// COMERCIAL               - SI            - NO---
    /// PERSONAL                - SI            - NO---
    /// PERSONAL                - NO            - SI---
    /// PERSONAL                - NO            - NO---
    /// CORPORATIVO             - SI            - NO---
    /// CORPORATIVO             - NO            - SI---
    /// </summary>

    [TestClass]
    public class ActualizacionCorreoElectronicoTest
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
        public void CORREO_SinComercialPrincipal_Nuevo_ComericialPrincipal_DeberiaAgregar()
        {
            var context = new XrmFakedContext();

            var persona = new Entity("account") { Id = Guid.NewGuid() };
            var tipoCorreo = new Entity("axx_tipodecorreoelectronico") { Id = Guid.NewGuid() };

            context.Initialize(new List<Entity> { tipoCorreo, persona });

            var target = new Entity("axx_correoelectronico") { Id = Guid.NewGuid() };

            target.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference("axx_tipodecorreoelectronico", tipoCorreo.Id);
            target.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionCorreoElectronicoPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(false);

                return;
            }

            Assert.IsTrue(true);
        }

        [TestMethod]
        public void CORREO_ConComercialPrincipal_Nuevo_ComercialPrincipal_NoDeberiaAgregar()
        {
            var context = new XrmFakedContext();

            Entity persona = new Entity("account") { Id = Guid.NewGuid() };

            Entity tipoComercial = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_COMRCIAL;

            Entity correoElectronico = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoElectronico.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);
            correoElectronico.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            correoElectronico.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, tipoComercial, correoElectronico });

            Entity target = new Entity("axx_correoelectronico") { Id = Guid.NewGuid() };
            target.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);
            target.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            target.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionCorreoElectronicoPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }

        [TestMethod]
        public void CORREO_ConComercialPrincipal_SinPersonalPrincipal_Nuevo_PersonalPrincipal_NoDeberiaAgregar()
        {
            var context = new XrmFakedContext();

            Entity persona = new Entity("account") { Id = Guid.NewGuid() };

            Entity tipoPersonal = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_PERSONAL;

            Entity tipoComercial = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_COMRCIAL;

            Entity correoElectronico = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoElectronico.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);
            correoElectronico.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            correoElectronico.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, tipoComercial, correoElectronico });

            Entity target = new Entity("axx_correoelectronico") { Id = Guid.NewGuid() };
            target.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoPersonal.Id);
            target.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            target.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionCorreoElectronicoPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }

        [TestMethod]
        public void CORREO_ConComercialPrincipal_SinPersonalPrincipal_Nuevo_PersonalNoPrincipal_DeberiaAgregar()
        {
            var context = new XrmFakedContext();

            Entity persona = new Entity("account") { Id = Guid.NewGuid() };

            Entity tipoPersonal = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_PERSONAL;

            Entity tipoComercial = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_COMRCIAL;

            Entity correoElectronico = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoElectronico.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);
            correoElectronico.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            correoElectronico.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, tipoComercial, correoElectronico });

            Entity target = new Entity("axx_correoelectronico") { Id = Guid.NewGuid() };
            target.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoPersonal.Id);
            target.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionCorreoElectronicoPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(false);

                return;
            }

            Assert.IsTrue(true);
        }

        [TestMethod]
        public void CORREO_ConComercialPrincipal_ConPersonalNoPrincipal_Nuevo_PersonalNoPrincipal_NoDeberiaAgregar()
        {
            var context = new XrmFakedContext();

            Entity persona = new Entity("account") { Id = Guid.NewGuid() };

            Entity tipoPersonal = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_PERSONAL;

            Entity tipoComercial = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_COMRCIAL;

            Entity correoComercial = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoComercial.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);
            correoComercial.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            correoComercial.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            Entity correoPersonal = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoPersonal.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoPersonal.Id);
            correoPersonal.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO));
            correoPersonal.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, tipoComercial, tipoPersonal, correoComercial, correoPersonal });

            Entity target = new Entity("axx_correoelectronico") { Id = Guid.NewGuid() };
            target.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoPersonal.Id);
            target.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionCorreoElectronicoPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }

        [TestMethod]
        public void CORREO_ConComercialPrincipal_ConPersonalNoPrincipal_Nuevo_CorporativoPrincipal_NoDeberiaAgregar()
        {
            var context = new XrmFakedContext();

            Entity persona = new Entity("account") { Id = Guid.NewGuid() };

            Entity tipoPersonal = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_PERSONAL;

            Entity tipoComercial = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_COMRCIAL;

            Entity tipoCorporativo = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_CORPORATIVO;

            Entity correoComercial = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoComercial.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);
            correoComercial.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            correoComercial.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            Entity correoPersonal = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoPersonal.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoPersonal.Id);
            correoPersonal.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO));
            correoPersonal.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, tipoComercial, tipoPersonal, tipoCorporativo, correoComercial, correoPersonal });

            Entity target = new Entity("axx_correoelectronico") { Id = Guid.NewGuid() };
            target.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoCorporativo.Id);
            target.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            target.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionCorreoElectronicoPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(true);

                return;
            }

            Assert.IsTrue(false);
        }

        [TestMethod]
        public void CORREO_ConComercialPrincipal_ConPersonalNoPrincipal_Nuevo_CorporativoNoPrincipal_DeberiaAgregar()
        {
            var context = new XrmFakedContext();

            Entity persona = new Entity("account") { Id = Guid.NewGuid() };

            Entity tipoPersonal = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_PERSONAL;

            Entity tipoComercial = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_COMRCIAL;

            Entity tipoCorporativo = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_CORPORATIVO;

            Entity correoComercial = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoComercial.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);
            correoComercial.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI));
            correoComercial.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            Entity correoPersonal = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoPersonal.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoPersonal.Id);
            correoPersonal.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO));
            correoPersonal.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            context.Initialize(new List<Entity> { persona, tipoComercial, tipoPersonal, tipoCorporativo, correoComercial, correoPersonal });

            Entity target = new Entity("axx_correoelectronico") { Id = Guid.NewGuid() };
            target.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoCorporativo.Id);
            target.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO));
            target.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("account", persona.Id);

            try
            {
                var fakedPlugin = context.ExecutePluginWithTarget<ActualizacionCorreoElectronicoPlugin>(target);
            }
            catch (InvalidPluginExecutionException ex)
            {
                Assert.IsTrue(false);

                return;
            }

            Assert.IsTrue(true);
        }
    }
}