using System;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Casos.Constantes;

namespace ProvinciaSeguros.Plugins.Casos.Servicios
{
    

    public class ServicioCRM : IServicioCRM
    {
        #region - Atributos privados -

        private IOrganizationService _organizationService;

        #endregion - Atributos privados -

        #region - Metodos Publicos

        public ServicioCRM(IOrganizationService organizationService)
        {
            _organizationService = organizationService;
        }

        public void ActualizarEmailAdress(Guid personaId, string correo)
        {
            var persona = new Entity(CamposPersona.ENT_PERSONA);
            persona.Attributes.Add(CamposPersona.EMAILADRESS1, correo);
            persona.Id = personaId;

            _organizationService.Update(persona);
        }

        public EntityCollection ObtenerCorreos(Guid personaId)
        {
            var fetchData = new
            {
                axx_personaid = personaId.ToString()
            };
            var fetchXml = $@"
            <fetch>
              <entity name='axx_correoelectronico'>
                <attribute name='axx_esprincipal' />
                <attribute name='axx_correoelectronico' />
                <filter>
                  <condition attribute='axx_personaid' operator='eq' value='{fetchData.axx_personaid}'/>
                </filter>
              </entity>
            </fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetchXml));
        }

        public string ObtenerEmailAdress(Guid PersonaId)
        {
            var persona = _organizationService.Retrieve(CamposPersona.ENT_PERSONA, PersonaId, new ColumnSet(true));

            return persona.Contains(CamposPersona.EMAILADRESS1) ? persona[CamposPersona.EMAILADRESS1].ToString() : String.Empty;
        }
        #endregion
    }
}
