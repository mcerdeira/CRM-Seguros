using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GetFirstCodVenta
{
    public class Run : CodeActivity
    {
        [Input("CP"), RequiredArgument]
        public InArgument<String> InCP
        {
            get;
            set;
        }
        [Output("Cod Venta")]
        public OutArgument<String> OutCodVenta
        {
            get;
            set;
        }

        [Output("Unidad de Negocios")]
        [ReferenceTarget("businessunit")]
        public OutArgument<EntityReference> OutBU
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

            string cp = InCP.Get<String>(executionContext);
            ResultSet res = getCodVentaFromCP(mycontext, cp);

            OutCodVenta.Set(executionContext, res.axx_coddeventa);
            OutBU.Set(executionContext, res.axx_unidaddenegocios);
        }

        private ResultSet getCodVentaFromCP(OrganizationServiceContext mycontext, string CP)
        {
            ResultSet result = new ResultSet();
            string step = "0";
            try
            {
                Entity e = (from axx_codigosventa in mycontext.CreateQuery("axx_codigosventa")
                            where (String)axx_codigosventa["axx_codigopostal"] == CP
                            select axx_codigosventa).FirstOrDefault();
                step = "1";

                if (e != null)
                {
                    result.axx_coddeventa = e.Attributes["axx_coddeventa"].ToString();
                    step = "2";
                    result.axx_unidaddenegocios = (EntityReference)e.Attributes["axx_unidadnegocio"];
                    step = "3";
                }
            } catch(Exception ex) {
                throw new Exception(ex.Message + " " + step);
            }
            return result;
        }

        public class ResultSet
        {
            public string axx_coddeventa { get; set; }
            public EntityReference axx_unidaddenegocios { get; set; }
        }
    }
}
