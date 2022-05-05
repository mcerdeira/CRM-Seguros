using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Ventas.Contantes;
using ProvinciaSeguros.Plugins.Ventas.Excepciones;
using ProvinciaSeguros.Plugins.Ventas.Servicios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Ventas
{
    public class AgendaComercialPlugin: IPlugin
    {
        #region - Atributos Privados -

        IPluginExecutionContext _context;
        ITracingService _tracingService;
        IOrganizationService _organizationService;
        IOrganizationServiceFactory _serviceFactory;
        IServicioCRM _servicioCRM;
        IServicioExcepciones _servicioExcepciones;

        #endregion - Atributos Privados -

        #region - Métodos Públicos -

        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                InicializarServicios(serviceProvider);

                if (_context.InputParameters.Contains("Target") && _context.InputParameters["Target"] is Entity)
                {
                    // Obtengo el GUID de Productor
                    var entidadCRM = _context.InputParameters["Target"] as Entity;

                    var guidProductor = entidadCRM.Contains(CamposAgendaComercial.PRODUCTOREXISTENTE) ? entidadCRM.Attributes[CamposAgendaComercial.PRODUCTOREXISTENTE] as EntityReference : null;
                    var guidProductorPotencial = entidadCRM.Contains(CamposAgendaComercial.PRODUCTORPOTENCIAL) ? entidadCRM.Attributes[CamposAgendaComercial.PRODUCTORPOTENCIAL] as EntityReference : null;

                    if (guidProductor != null)
                    {
                        var agendasComerciales = _servicioCRM.ObtenerAgendasComercialesPorProductorExistente(guidProductor);

                        if (agendasComerciales.Count > 0) throw new ProductorExistenteConAgendaException();
                        
                    }

                    if (guidProductorPotencial != null)
                    {
                        var agendasComerciales = _servicioCRM.ObtenerAgendasComercialesPorProductorPotencial(guidProductorPotencial);

                        if (agendasComerciales.Count > 0) throw new ProductorPotencialConAgendaException();
                    }
                }
            }
            catch (Exception ex)
            {
                _servicioExcepciones.Atender(ex);
            }
        }

        #endregion - Métodos Públicos -

        #region - Métodos Privados -

        private void InicializarServicios(IServiceProvider serviceProvider)
        {
            _tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            _serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            _organizationService = _serviceFactory.CreateOrganizationService(_context.UserId);

            _servicioCRM = new ServicioCRM(_organizationService);
            _servicioExcepciones = new ServicioExcepciones();

            if (_tracingService == null) throw new ArgumentNullException("_tracingService es nulo");
            if (_context == null) throw new ArgumentNullException("_context es nulo");
            if (_serviceFactory == null) throw new ArgumentNullException("_serviceFactory es nulo");
            if (_organizationService == null) throw new ArgumentNullException("_service es nulo");
        }

        #endregion - Métodos Privados -
    }
}
