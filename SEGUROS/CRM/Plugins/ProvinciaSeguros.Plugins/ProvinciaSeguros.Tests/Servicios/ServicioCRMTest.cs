using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Servicios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Tests
{
    [TestClass]
    public class ServicioCRMTest
    {
        [TestMethod]
        public void SERVICIOCRM_No_deberia_existir_tipo_correo_electronico()
        {
            var context = new XrmFakedContext();

            #region - Inicializacion del contexto -

            Entity tipoPersonal = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO,Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_PERSONAL;

            Entity tipoComercial = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoComercial.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_COMRCIAL;

            Entity tipoCorporativo = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoCorporativo.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_CORPORATIVO;

            context.Initialize(new List<Entity> { tipoPersonal, tipoComercial, tipoCorporativo } );

            Entity correoComercial = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoComercial.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);

            Entity correoCorporativo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoCorporativo.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoCorporativo.Id);

            #endregion - Inicializacion del contexto -

            //ServicioCRM servicio = new ServicioCRM(context.GetOrganizationService());

            //Entity correoElectronicoNuevoPersonal = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            //correoElectronicoNuevoPersonal.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoPersonal.Id);

            //var resultado = true;//servicio.ExisteTipoCorreoElectronico(correoElectronicoNuevoPersonal, new DataCollection<Entity> { correoComercial, correoCorporativo });

            //Assert.IsFalse(resultado);
        }

        [TestMethod]
        public void SERVICIOCRM_Deberia_existir_tipo_correo_electronico()
        {
            var context = new XrmFakedContext();

            #region - Inicializacion del contexto -

            Entity tipoPersonal = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_PERSONAL;

            Entity tipoComercial = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_COMRCIAL;

            Entity tipoCorporativo = new Entity(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, Guid.NewGuid());
            tipoPersonal.Attributes[CamposTipoCorreoElectronico.NAME] = CamposTipoCorreoElectronico.TIPO_CORPORATIVO;

            context.Initialize(new List<Entity> { tipoPersonal, tipoComercial, tipoCorporativo });

            Entity correoComercial = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoComercial.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);

            Entity correoCorporativo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());
            correoCorporativo.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoCorporativo.Id);

            #endregion - Inicializacion del contexto -

            //ServicioCRM servicio = new ServicioCRM(context.GetOrganizationService());

            //Entity correoElectronicoNuevoPersonal = new Entity();
            //correoElectronicoNuevoPersonal.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference(CamposTipoCorreoElectronico.ENT_TIPOSCORREOELECTRONICO, tipoComercial.Id);

            //var resultado = true; //servicio.ExisteTipoCorreoElectronico(correoElectronicoNuevoPersonal, new List<Entity>() { correoComercial, correoCorporativo });

            //Assert.IsTrue(resultado);
        }

        [TestMethod]
        public void SERVICIOCRM_No_deberia_existir_persona()
        {
            var context = new XrmFakedContext();

            Entity personaExistente = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());

            personaExistente.Attributes[CamposPersona.IDRECTOR] = "1234";
            personaExistente.Attributes[CamposPersona.NOMBRE] = "Santiago";
            personaExistente.Attributes[CamposPersona.APELLIDO] = "Molina";
            personaExistente.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "34145746";
            personaExistente.Attributes[CamposPersona.FECHA_NACIMIENO] = Convert.ToDateTime("09/10/1988");

            Entity personaNueva = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());
            
            personaExistente.Attributes[CamposPersona.NOMBRE] = "Santiago";
            personaExistente.Attributes[CamposPersona.APELLIDO] = "Molina";
            personaExistente.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "34145746";

            //var servicio = new ServicioCRM(context.GetOrganizationService());

            //context.Initialize(new List<Entity>());

            //var resultado = servicio.BuscarPersona(personaNueva);

            //Assert.IsNull(resultado);
        }

        [TestMethod]
        public void SERVICIOCRM_Deberia_existir_persona()
        {
            var context = new XrmFakedContext();

            Entity personaExistente = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());

            personaExistente.Attributes[CamposPersona.IDRECTOR] = "1234";
            personaExistente.Attributes[CamposPersona.NOMBRE] = "Santiago";
            personaExistente.Attributes[CamposPersona.APELLIDO] = "Molina";
            personaExistente.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "34145746";
            personaExistente.Attributes[CamposPersona.FECHA_NACIMIENO] = Convert.ToDateTime("09/10/1988");

            Entity personaNueva = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());
            
            personaNueva.Attributes[CamposPersona.NOMBRE] = "Santiago";
            personaNueva.Attributes[CamposPersona.APELLIDO] = "Molina";
            personaNueva.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "34145746";

            context.Initialize(new List<Entity>{ personaExistente });

            //var servicio = new ServicioCRM(context.GetOrganizationService());

            //var resultado = servicio.BuscarPersona(personaNueva);

            //Assert.IsNotNull(resultado);
        }

        [TestMethod]
        public void SERVICIOCRM_No_deberia_existir_persona_distinto_apellido()
        {
            var context = new XrmFakedContext();

            Entity personaExistente = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());

            personaExistente.Attributes[CamposPersona.IDRECTOR] = "1234";
            personaExistente.Attributes[CamposPersona.NOMBRE] = "Santiago";
            personaExistente.Attributes[CamposPersona.APELLIDO] = "Molina";
            personaExistente.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "34145746";
            personaExistente.Attributes[CamposPersona.FECHA_NACIMIENO] = Convert.ToDateTime("09/10/1988");

            context.Initialize(new List<Entity> { personaExistente });

            Entity personaNueva = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());
            
            personaExistente.Attributes[CamposPersona.NOMBRE] = "Federico";
            personaExistente.Attributes[CamposPersona.APELLIDO] = "Torrico";
            personaExistente.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "34145746";

            //var servicio = new ServicioCRM(context.GetOrganizationService());

            //var resultado = servicio.BuscarPersona(personaNueva);

            //Assert.IsNull(resultado);
        }

        [TestMethod]
        public void SERVICIOCRM_No_deberia_existir_persona_distinto_documento()
        {
            var context = new XrmFakedContext();

            Entity personaExistente = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());

            personaExistente.Attributes[CamposPersona.IDRECTOR] = "1234";
            personaExistente.Attributes[CamposPersona.NOMBRE] = "Santiago";
            personaExistente.Attributes[CamposPersona.APELLIDO] = "Molina";
            personaExistente.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "34145746";
            personaExistente.Attributes[CamposPersona.FECHA_NACIMIENO] = Convert.ToDateTime("09/10/1988");

            context.Initialize(new List<Entity> { personaExistente });

            Entity personaNueva = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());

            personaNueva.Attributes[CamposPersona.NOMBRE] = "Santiago";
            personaNueva.Attributes[CamposPersona.APELLIDO] = "Molina";
            personaNueva.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "11";

            //var servicio = new ServicioCRM(context.GetOrganizationService());

            //var resultado = servicio.BuscarPersona(personaNueva);

            //Assert.IsNull(resultado);
        }

        [TestMethod]
        public void SERVICIOCRM_Obtener_parametrizacion_desarrollo()
        {
            var clave = "POLIZAS_URL";
            var valor = "https://apps.provinciaseguros.com.ar/crm/api";
            var context = new XrmFakedContext();

            var parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = clave;
            parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = valor;

            context.Initialize(new List<Entity> { parametrizacionDesarrollo });

            //ServicioCRM servicio = new ServicioCRM(context.GetOrganizationService());

            //var parametrizacion = servicio.ObtenerConfiguracionDesarrollo(clave);

            //Assert.AreEqual(parametrizacion, valor);
        }
    }
}
