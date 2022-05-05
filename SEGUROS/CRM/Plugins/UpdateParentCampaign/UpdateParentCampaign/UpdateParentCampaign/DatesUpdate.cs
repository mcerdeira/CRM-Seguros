using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Activities;
using Microsoft.Xrm.Sdk.Workflow;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;

namespace UpdateParentCampaign
{
    public class DatesUpdate : CodeActivity
    {
        [Input("Campaña"), RequiredArgument]
        [ReferenceTarget("campaign")]
        public InArgument<EntityReference> InCampaign
        {
            get;
            set;
        }

        [Output("Fecha Actualizacion")]
        public OutArgument<DateTime> OutFechaActualizacion
        {
            get;
            set;
        }

        [Output("Fecha Modificacion")]
        public OutArgument<DateTime> OutFechaModificacion
        {
            get;
            set;
        }

        protected override void Execute(CodeActivityContext executionContext)
        {
            IWorkflowContext context = executionContext.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
            OrganizationServiceContext mycontext = new OrganizationServiceContext(service);

            EntityReference campaign = InCampaign.Get<EntityReference>(executionContext);

            DateTime fecha_actualizacion = GetMaxDate(campaign.Id, mycontext, "createdon");
            DateTime fecha_modificacion = GetMaxDate(campaign.Id, mycontext, "modifiedon"); //axx_fintento

            OutFechaActualizacion.Set(executionContext, fecha_actualizacion);
            OutFechaModificacion.Set(executionContext, fecha_modificacion);
        }

        private DateTime GetMaxDate(Guid campaignID, OrganizationServiceContext mycontext, string fieldname)
        {
            DateTime result = new DateTime(1900, 1, 1);
            string step = "0";

            try
            {

                Entity e = (from axx_ventadirecta in mycontext.CreateQuery("axx_ventadirecta")
                            where ((EntityReference)axx_ventadirecta["axx_campanaorigen"]).Id == campaignID
                            //&& (int)axx_ventadirecta["statecode"] == 0
                            orderby axx_ventadirecta[fieldname] descending
                            select axx_ventadirecta).FirstOrDefault();

                if (e != null && e.Attributes.Contains(fieldname))
                {
                    step = "1";
                    result = (DateTime)e.Attributes[fieldname];
                    step = "2";
                }
            }
            catch (Exception ex)
            {
                throw new Exception(step + " " + fieldname + " " + ex.Message);
            }

            return result;
        }
    }
}
