using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Casos;
using ProvinciaSeguros.Plugins.Casos.Constantes;
using ProvinciaSeguros.Plugins.Constantes;
using System;
using System.Collections.Generic;


namespace ProvinciaSeguros.Tests
{
    [TestClass]
    public class NuevoCasoTest
    {
        [TestMethod]
        void NUEVOCASO_persona_sin_mail_deberia_copiar_mail()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = Guid.NewGuid() };

            persona.Attributes[CamposPersona.EMAILADDRESS1] = null;

            var caso = new Entity(CamposCasos.ENT_CASOS);

            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            var correo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());

            correo.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI;
            correo.Attributes[CamposCorreoElectronico.DIRECCION] = "prueba@axxonconsulting.com";

            context.Initialize(new List<Entity> { persona, caso, correo });

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id,new Microsoft.Xrm.Sdk.Query.ColumnSet());

            Assert.Equals(entity.Attributes[CamposPersona.EMAILADDRESS1], "prueba@axxonconsulting.com");
        }

        [TestMethod]
        void NUEVOCASO_persona_con_mailaddress1_deberia_actualizarlo_mail()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = Guid.NewGuid() };

            persona.Attributes[CamposPersona.EMAILADDRESS1] = "antes@axxonconsulting.com";
            
            var caso = new Entity(CamposCasos.ENT_CASOS);

            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            var correo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());

            correo.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI;
            correo.Attributes[CamposCorreoElectronico.DIRECCION] = "prueba@axxonconsulting.com";

            context.Initialize(new List<Entity> { persona, caso, correo });

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id, new Microsoft.Xrm.Sdk.Query.ColumnSet());

            Assert.Equals(entity.Attributes[CamposPersona.EMAILADDRESS1], "prueba@axxonconsulting.com");
        }

        [TestMethod]
        void NUEVOCASO_persona_sin_mailadress1_deberia_actualizarlo_mail()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = Guid.NewGuid() };

            persona.Attributes[CamposPersona.EMAILADDRESS1] = "antes@axxonconsulting.com";
            
            var caso = new Entity(CamposCasos.ENT_CASOS);

            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            var correo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());

            correo.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI;
            correo.Attributes[CamposCorreoElectronico.DIRECCION] = "prueba@axxonconsulting.com";

            context.Initialize(new List<Entity> { persona, caso, correo });

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id, new Microsoft.Xrm.Sdk.Query.ColumnSet());

            Assert.Equals(entity.Attributes[CamposPersona.EMAILADDRESS1], "prueba@axxonconsulting.com");
        }
    }
}
