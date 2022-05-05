using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Casos;
using ProvinciaSeguros.Plugins.Casos.Constantes;
using ProvinciaSeguros.Plugins.Constantes;
using System;
using System.Collections.Generic;

namespace ProvinciaSeguros.Tests.Plugins.Casos
{
    [TestClass]
    public class CuentaNuevoCaso
    {
        [TestMethod]
        public void NUEVOCASO_persona_con_mailadrees_sin_principal()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = Guid.NewGuid() };
            persona.Attributes.Add(CamposPersona.EMAILADDRESS1, "TieneAdress@axxonconsulting.com");

            var correo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO) { Id = Guid.NewGuid() };
            correo.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO;
            correo.Attributes[CamposCorreoElectronico.DIRECCION] = "prueba@axxonconsulting.com";
            correo.Attributes[CamposCorreoElectronico.LOOKUP_PERSONA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            var caso = new Entity(CamposCasos.ENT_CASOS) { Id = Guid.NewGuid() };
            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            context.Initialize(new List<Entity> { persona, caso, correo});

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id, new Microsoft.Xrm.Sdk.Query.ColumnSet(CamposPersona.EMAILADDRESS1));

            Assert.AreNotEqual(entity[CamposPersona.EMAILADDRESS1], "NoHizoNada@axxonconsulting.com");
        }

        [TestMethod]
        public void NUEVOCASO_persona_con_mailadress_con_principal()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = Guid.NewGuid() };
            persona.Attributes.Add(CamposPersona.EMAILADDRESS1, "TieneAdress@axxonconsulting.com");

            var correo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO) { Id = Guid.NewGuid() };
            correo.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI;
            correo.Attributes[CamposCorreoElectronico.DIRECCION] = "prueba@axxonconsulting.com";
            correo.Attributes[CamposCorreoElectronico.LOOKUP_PERSONA] = new EntityReference(CamposPersona.ENT_PERSONA);

            var caso = new Entity(CamposCasos.ENT_CASOS) { Id = Guid.NewGuid() };
            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            context.Initialize(new List<Entity> { persona, caso, correo });

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id, new Microsoft.Xrm.Sdk.Query.ColumnSet(CamposPersona.EMAILADDRESS1));

            Assert.Equals(entity[CamposPersona.EMAILADDRESS1], "NoHizoNada@axxonconsulting.com");
        }

        [TestMethod]
        public void NUEVOCASO_persona_con_mailadrees_sin_correos()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = new Guid() };
            persona.Attributes.Add(CamposPersona.EMAILADDRESS1, "TieneAdress@axxonconsulting.com");

            var caso = new Entity(CamposCasos.ENT_CASOS);
            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            context.Initialize(new List<Entity> { persona, caso });

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id, new Microsoft.Xrm.Sdk.Query.ColumnSet(CamposPersona.EMAILADDRESS1));

            Assert.AreNotEqual(entity[CamposPersona.EMAILADDRESS1], "NoHizoNada@axxonconsulting.com");
        }

        [TestMethod]
        public void NUEVOCASO_persona_sin_mailadrees_sin_correos()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = new Guid() };

            var caso = new Entity(CamposCasos.ENT_CASOS);
            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            context.Initialize(new List<Entity> { persona, caso});

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id, new Microsoft.Xrm.Sdk.Query.ColumnSet(CamposPersona.EMAILADDRESS1));

            Assert.IsNull(entity[CamposPersona.EMAILADDRESS1]);
        }

        [TestMethod]
        public void NUEVOCASO_persona_sin_mailadress_con_principal()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = new Guid() };

            var correo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());

            correo.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI;
            correo.Attributes[CamposCorreoElectronico.DIRECCION] = "prueba@axxonconsulting.com";

            var caso = new Entity(CamposCasos.ENT_CASOS);
            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            context.Initialize(new List<Entity> { persona, caso, correo });

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id, new Microsoft.Xrm.Sdk.Query.ColumnSet(CamposPersona.EMAILADDRESS1));

            Assert.Equals(entity[CamposPersona.EMAILADDRESS1], "prueba@axxonconsulting.com");
        }

        [TestMethod]
        public void NUEVOCASO_persona_sin_mailadress_sin_principal()
        {
            var context = new XrmFakedContext();

            var persona = new Entity(CamposPersona.ENT_PERSONA) { Id = new Guid() };

            var correo = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());

            correo.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO;
            correo.Attributes[CamposCorreoElectronico.DIRECCION] = "prueba@axxonconsulting.com";

            var caso = new Entity(CamposCasos.ENT_CASOS);
            caso.Attributes[CamposCasos.QUIENSECONTACTA] = new EntityReference(CamposPersona.ENT_PERSONA, persona.Id);

            context.Initialize(new List<Entity> { persona, caso, correo });

            var fakedPlugin = context.ExecutePluginWithTarget<NuevoCasoPlugin>(caso);

            var organization = context.GetOrganizationService();

            var entity = organization.Retrieve(CamposPersona.ENT_PERSONA, persona.Id, new Microsoft.Xrm.Sdk.Query.ColumnSet(CamposPersona.EMAILADDRESS1));

            Assert.Equals(entity[CamposPersona.EMAILADDRESS1], "prueba@axxonconsulting.com");
        }
    }
}
