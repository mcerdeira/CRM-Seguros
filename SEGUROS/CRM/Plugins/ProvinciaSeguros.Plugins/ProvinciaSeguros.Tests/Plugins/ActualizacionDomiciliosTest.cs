using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins;
using ProvinciaSeguros.Plugins.Constantes;

namespace ProvinciaSeguros.Tests
{
    [TestClass]
    public class ActualizacionDomiciliosTest
    {
        [TestMethod]
        public void DOMICILIOS_crm_sin_domicilios_deberia_agregar_domicilio()
        {
            var context = new XrmFakedContext();

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };
            var parametrizacionUsuario = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };
            var parametrizacionEnvironment = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://tkmt.provinciaseguros.com.ar:5443/crm/api";

            parametrizacionUsuario.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_USUARIO_SERVICIOS";
            parametrizacionUsuario.Attributes[CamposParametrizacionDesarrollo.VALOR] = "dynamicsprod|dyna80micsprod";

            parametrizacionEnvironment.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_ENVIRONMENT";
            parametrizacionEnvironment.Attributes[CamposParametrizacionDesarrollo.VALOR] = "ENVIRONMENT_DESA";

            context.Initialize(new List<Entity> { parametrizacionDesarrollo, parametrizacionEnvironment, parametrizacionUsuario });

            var target = new Entity(CamposDomicilio.ENT_DOMICILIO) { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.PERSONAID] = new EntityReference(CamposPersona.ENT_PERSONA, Guid.NewGuid());
            target.Attributes[CamposDomicilio.TIPODOMICILIO] = new OptionSetValue(int.Parse(CamposDomicilio.OPTION_DOMICILIO_POSTAL));

            try
            {
                context.ExecutePluginWithTarget<ActualizacionDomiciliosPlugin>(target);

                Assert.IsTrue(true);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }

        [TestMethod]
        public void DOMICILIOS_no_deberia_agregar_domicilio_postal()
        {
            var guidPersona = Guid.NewGuid();

            var context = new XrmFakedContext();

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            var domicilioPostal = new Entity(CamposDomicilio.ENT_DOMICILIO) { Id = Guid.NewGuid() };

            domicilioPostal.Attributes[CamposDomicilio.TIPODOMICILIO] = new OptionSetValue(int.Parse(CamposDomicilio.OPTION_DOMICILIO_POSTAL));
            domicilioPostal.Attributes[CamposDomicilio.PERSONAID] = new EntityReference(CamposDomicilio.PERSONAID, guidPersona);

            var persona = new Entity(CamposPersona.ENT_PERSONA, guidPersona);

            context.Initialize(new List<Entity> { parametrizacionDesarrollo, domicilioPostal, persona });

            var target = new Entity(CamposDomicilio.ENT_DOMICILIO) { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.PERSONAID] = domicilioPostal.Attributes[CamposDomicilio.PERSONAID];
            target.Attributes[CamposDomicilio.TIPODOMICILIO] = new OptionSetValue(int.Parse(CamposDomicilio.OPTION_DOMICILIO_POSTAL));

            try
            {
                context.ExecutePluginWithTarget<ActualizacionDomiciliosPlugin>(target);

                Assert.IsTrue(false);
            }
            catch (Exception ex)
            {
                Assert.IsTrue(true);
            }
        }

        [TestMethod]
        public void DOMICILIOS_no_deberia_agregar_domicilio_principal()
        {
            var context = new XrmFakedContext();

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://apps.provinciaseguros.com.ar/crm/api";

            var domicilioPostal = new Entity(CamposDomicilio.ENT_DOMICILIO) { Id = Guid.NewGuid() };

            domicilioPostal.Attributes[CamposDomicilio.TIPODOMICILIO] = new OptionSetValue(int.Parse(CamposDomicilio.OPTION_DOMICILIO_POSTAL));
            domicilioPostal.Attributes[CamposDomicilio.PERSONAID] = new EntityReference(CamposDomicilio.PERSONAID, Guid.NewGuid());
            domicilioPostal.Attributes[CamposDomicilio.ESPRINCIPAL] = new OptionSetValue(int.Parse(CamposDomicilio.OPTION_ESPRINCIPAL_SI));

            context.Initialize(new List<Entity> { parametrizacionDesarrollo, domicilioPostal });

            var target = new Entity(CamposDomicilio.ENT_DOMICILIO) { Id = Guid.NewGuid() };

            target.Attributes[CamposTelefono.PERSONAID] = domicilioPostal.Attributes[CamposDomicilio.PERSONAID];
            target.Attributes[CamposDomicilio.TIPODOMICILIO] = new OptionSetValue(int.Parse(CamposDomicilio.OPTION_DOMICILIO_POSTAL));
            target.Attributes[CamposDomicilio.TIPODOMICILIO] = new OptionSetValue(int.Parse(CamposDomicilio.OPTION_ESPRINCIPAL_SI));

            try
            {
                context.ExecutePluginWithTarget<ActualizacionDomiciliosPlugin>(target);

                Assert.IsTrue(false);
            }
            catch (Exception ex)
            {
                Assert.IsTrue(true);
            }
        }
    }
}
