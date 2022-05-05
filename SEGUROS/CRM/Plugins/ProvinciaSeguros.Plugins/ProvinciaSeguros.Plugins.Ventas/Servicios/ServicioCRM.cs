using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ProvinciaSeguros.Plugins.Ventas.Contantes;

namespace ProvinciaSeguros.Plugins.Ventas.Servicios
{
    public class ServicioCRM : IServicioCRM
    {
        #region - Atributos privados -

        private IOrganizationService _organizationService;

        #endregion - Atributos privados -

        #region - Métodos públicos -

        public ServicioCRM(IOrganizationService organizationService)
        {
            _organizationService = organizationService;
        }

        public List<Entity> ObtenerAgendasComercialesPorProductorExistente(EntityReference entityReference)
        {
            string fetch = "<fetch top = \"1\" >" +
                              "<entity name =\"" + CamposAgendaComercial.ENT_AGENDACOMERCIAL + "\" >" +
                                    "<all-attributes />" +
                                     "<filter>" +
                                       "<condition attribute=\"" + CamposAgendaComercial.PRODUCTOREXISTENTE + "\" operator=\"eq\" value=\"" + entityReference.Id + "\" />" +
                                    "</filter>" +
                                "</entity>" +
                           "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch)).Entities.ToList();
        }

        public List<Entity> ObtenerAgendasComercialesPorProductorPotencial(EntityReference entityReference)
        {
            string fetch = "<fetch top = \"1\" >" +
                             "<entity name =\"" + CamposAgendaComercial.ENT_AGENDACOMERCIAL + "\" >" +
                                   "<all-attributes />" +
                                    "<filter>" +
                                      "<condition attribute=\"" + CamposAgendaComercial.PRODUCTORPOTENCIAL + "\" operator=\"eq\" value=\"" + entityReference.Id + "\" />" +
                                   "</filter>" +
                               "</entity>" +
                          "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch)).Entities.ToList();
        }

        #endregion - Métodos públicos -
    }
}
