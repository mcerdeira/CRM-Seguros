using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Discovery;
using Microsoft.Xrm.Sdk.Query;
using ProvinciaSeguros.Plugins;
using ProvinciaSeguros.Plugins.Constantes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Tests
{
    [TestClass]
    public class ActualizacionPersonasTest
    {

        private List<Entity>  setParametrizacion(Guid iUserId)
        {

            var parametrizacionDesarrollo1 = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo1.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo1.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://tkmt.provinciaseguros.com.ar:5443/crm/api";

            var parametrizacionDesarrollo2 = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo2.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_ENVIRONMENT";
            parametrizacionDesarrollo2.Attributes[CamposParametrizacionDesarrollo.VALOR] = "ENVIRONMENT_DESA";

            var parametrizacionDesarrollo3 = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo3.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_USUARIO_SERVICIOS";
            parametrizacionDesarrollo3.Attributes[CamposParametrizacionDesarrollo.VALOR] = "dynamicsprod|dyna80micsprod";

            var usuario = new Entity("systemuser") {Id= iUserId};
            usuario.Attributes["domainname"] = "noyam@pseguros.com.ar";

            return new List<Entity> { parametrizacionDesarrollo1, parametrizacionDesarrollo2, parametrizacionDesarrollo3, usuario };

        }

        [TestMethod]
        public void PERSONAS_sin_personas_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            XrmFakedPluginExecutionContext excont = context.GetDefaultPluginContext();

            
            context.Initialize(setParametrizacion(excont.InitiatingUserId));

            var target = new Entity("account") { Id = excont.InitiatingUserId };

            target.Attributes[CamposPersona.APELLIDO] = "Molina";
            target.Attributes[CamposPersona.NOMBRE] = "Santiago";
            target.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "31111222";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsTrue(true);

            } catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }

        [TestMethod]
        public void PERSONAS_con_personas_distintas_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            var persona1 = new Entity("account") { Id = Guid.NewGuid() };

            persona1.Attributes[CamposPersona.IDRECTOR] = "1231";
            persona1.Attributes[CamposPersona.APELLIDO] = "Molina";
            persona1.Attributes[CamposPersona.NOMBRE] = "Santiago";
            persona1.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "33212333";

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { persona1, parametrizacionDesarrollo });

            var target = new Entity(CamposPersona.ENT_PERSONA);

            target.Attributes[CamposPersona.NOMBRE] = "Santiago";
            target.Attributes[CamposPersona.APELLIDO] = "Molina";
            target.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "33212322";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsTrue(true);

            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }

        [TestMethod]
        public void PERSONAS_persona_existente_no_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            var persona1 = new Entity("account") { Id = Guid.NewGuid() };

            persona1.Attributes[CamposPersona.IDRECTOR] = "1231";
            persona1.Attributes[CamposPersona.NOMBRE] = "Santiago";
            persona1.Attributes[CamposPersona.APELLIDO] = "Molina";
            persona1.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "33212333";

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { persona1, parametrizacionDesarrollo });

            var target = new Entity(CamposPersona.ENT_PERSONA);

            target.Attributes[CamposPersona.IDRECTOR] = "1231";
            target.Attributes[CamposPersona.NOMBRE] = "Santiago";
            target.Attributes[CamposPersona.APELLIDO] = "Molina";
            target.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "33212333";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsFalse(true);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(false);
            }
        }

        [TestMethod]
        public void PERSONAS_persona_mismo_documento_distinto_apellido_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            var persona1 = new Entity("account") { Id = Guid.NewGuid() };

            persona1.Attributes[CamposPersona.IDRECTOR] = "1231";
            persona1.Attributes[CamposPersona.APELLIDO] = "Molina";
            persona1.Attributes[CamposPersona.NOMBRE] = "Santiago";
            persona1.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "33212333";

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { persona1, parametrizacionDesarrollo });

            var target = new Entity(CamposPersona.ENT_PERSONA);

            target.Attributes[CamposPersona.IDRECTOR] = "1231";
            target.Attributes[CamposPersona.APELLIDO] = "Molina";
            target.Attributes[CamposPersona.NOMBRE] = "Santiago";
            target.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "111";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsFalse(false);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }

        [TestMethod]
        public void PERSONAS_persona_mismo_apellido_distinto_documento_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            var persona1 = new Entity("account") { Id = Guid.NewGuid() };

            persona1.Attributes[CamposPersona.IDRECTOR] = "1231";
            persona1.Attributes[CamposPersona.APELLIDO] = "Molina";
            persona1.Attributes[CamposPersona.NOMBRE] = "Santiago";
            persona1.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "33212333";

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { persona1, parametrizacionDesarrollo });

            var target = new Entity(CamposPersona.ENT_PERSONA);

            target.Attributes[CamposPersona.IDRECTOR] = "1231";
            target.Attributes[CamposPersona.APELLIDO] = "Torrico";
            target.Attributes[CamposPersona.NOMBRE] = "Santiago";
            target.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "33212333";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsFalse(false);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }

        [TestMethod]
        public void PERSONAS_sin_persona_juridica_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { parametrizacionDesarrollo });

            var target = new Entity("account") { Id = Guid.NewGuid() };

            target.Attributes[CamposPersona.RAZON_SOCIAL] = "Jose Inc";
            target.Attributes[CamposPersona.CUIT] = "31111222";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsTrue(true);

            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }

        [TestMethod]
        public void PERSONAS_persona_juridica_existente_no_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            var persona1 = new Entity("account") { Id = Guid.NewGuid() };

            persona1.Attributes[CamposPersona.RAZON_SOCIAL] = "Jose Inc";
            persona1.Attributes[CamposPersona.CUIT] = "33212333";

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { persona1, parametrizacionDesarrollo });

            var target = new Entity(CamposPersona.ENT_PERSONA);

            target.Attributes[CamposPersona.RAZON_SOCIAL] = "Jose Inc";
            target.Attributes[CamposPersona.CUIT] = "33212333";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsFalse(true);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(false);
            }
        }

        [TestMethod]
        public void PERSONAS_persona_juridica_misma_razon_social_distinto_cuit_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            var persona1 = new Entity("account") { Id = Guid.NewGuid() };

            persona1.Attributes[CamposPersona.RAZON_SOCIAL] = "Jose Inc";
            persona1.Attributes[CamposPersona.CUIT] = "33212333";

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { persona1, parametrizacionDesarrollo });

            var target = new Entity(CamposPersona.ENT_PERSONA);

            target.Attributes[CamposPersona.RAZON_SOCIAL] = "Jose Inc";
            target.Attributes[CamposPersona.CUIT] = "2536473";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsFalse(false);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }

        [TestMethod]
        public void PERSONAS_persona_juridica_mismo_cuit_distinta_razon_social_deberia_agregar_persona_nueva()
        {
            var context = new XrmFakedContext();

            var persona1 = new Entity("account") { Id = Guid.NewGuid() };

            persona1.Attributes[CamposPersona.RAZON_SOCIAL] = "Jose Inc";
            persona1.Attributes[CamposPersona.CUIT] = "33212333";

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { persona1, parametrizacionDesarrollo });

            var target = new Entity(CamposPersona.ENT_PERSONA);

            target.Attributes[CamposPersona.RAZON_SOCIAL] = "Santiago Inc";
            target.Attributes[CamposPersona.CUIT] = "33212333";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsFalse(false);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }

        [TestMethod]
        public void PERSONAS_deberia_modificar_una_persona()
        {
            var context = new XrmFakedContext();

            var persona1 = new Entity("account") { Id = Guid.NewGuid() };

            persona1.Attributes[CamposPersona.RAZON_SOCIAL] = "Jose Inc";
            persona1.Attributes[CamposPersona.CUIT] = "33212333";

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            context.Initialize(new List<Entity> { persona1, parametrizacionDesarrollo });

            var target = new Entity(CamposPersona.ENT_PERSONA);

            target.Attributes[CamposPersona.RAZON_SOCIAL] = "Santiago Inc";
            target.Attributes[CamposPersona.CUIT] = "33212333";

            try
            {
                context.ExecutePluginWithTarget<ActualizacionPersonasPlugin>(target);

                Assert.IsFalse(false);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }
    }
}
