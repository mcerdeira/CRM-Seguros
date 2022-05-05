using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Excepciones;
using ProvinciaSeguros.Plugins.Fabricas;
using ProvinciaSeguros.Plugins.Interfaces;
using ProvinciaSeguros.Plugins.Servicios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins
{
    public class ActualizacionDomiciliosPlugin: IPlugin
    {
        #region - Atributos Privados -
        private readonly string _messageCreate = "CREATE";
        private readonly string _messageUpdate = "UPDATE";

        IServicioRector _servicioRector;
        ITracingService _tracingService;
        IPluginExecutionContext _context;
        IOrganizationService _organizationService;
        IOrganizationServiceFactory _serviceFactory;
        IServicioCRM _servicioCRM;
        IServicioExcepciones _servicioExcepciones;

        Fabrica _fabrica;

        #endregion - Atributos Privados -

        #region - Métodos Públicos -

        public void Execute(IServiceProvider serviceProvider)
        {
            RectorDTO dto = new RectorDTO();
            var json = "";
            bool cancelarAltaEnRector = false;
            try
            {
                InicializarServicios(serviceProvider);

                if (_context.InputParameters.Contains("Target") && _context.InputParameters["Target"] is Entity)
                {
                    var domicilioCRM = _context.InputParameters["Target"] as Entity;
                    Entity domicilio = new Entity();

                    cancelarAltaEnRector =  (domicilioCRM.Attributes.Count == 2 && domicilioCRM.Contains(CamposDomicilio.NAME)) ||
                                            (domicilioCRM.Attributes.Count == 2 && domicilioCRM.Contains(CamposDomicilio.ESPRINCIPAL)) ||
                                            (domicilioCRM.Attributes.Count == 1 && domicilioCRM.Contains(CamposDomicilio.GUID_DOMICILIO));

                    if (domicilioCRM.LogicalName.Equals(CamposDomicilio.ENT_DOMICILIO))
                    {
                        var userMail = _servicioCRM.GetUserName(_context.InitiatingUserId);

                        // Chequeo que el usuario no sea el usuario d e servicios.
                        if (!userMail.Contains("dynamics"))
                        {
                            if (_context.MessageName.ToUpper().Equals(_messageCreate))
                            {
                                // Guardo en CRM.
                                domicilio = _servicioCRM.AltaDomicilio(domicilioCRM);
                            }
                            // UPDATE
                            else if (_context.MessageName.ToUpper().Equals(_messageUpdate))
                            {
                                // Pre imagen del cambio
                                if (_context.PreEntityImages.Contains("DomicilioPreImagen") && _context.PreEntityImages["DomicilioPreImagen"] is Entity)
                                {
                                    Entity preImagen = (Entity)_context.PreEntityImages["DomicilioPreImagen"];


                                    domicilio = _servicioCRM.ModificacionDomicilio(domicilioCRM, preImagen);
                                    domicilio.Id = domicilioCRM.Id;
                                }
                            }

                            if (!cancelarAltaEnRector)
                            {
                                // Hago el mapeo de campos con la entidad que va a viajar a RECTOR.
                                var domicilioRector = _fabrica.Fabricar(domicilio, userMail);

                                json = ServicioRector.To<DomicilioRector>((DomicilioRector)domicilioRector);

                                // Guardo en RECTOR.
                                dto = _servicioRector.AltaDomicilio(domicilioRector);

                                if (dto.status_code.Equals("200")) domicilioCRM.Attributes[CamposDomicilio.IDDOMICILIO] = dto.id_rector;

                                else throw new Exception(dto.mensaje_error);

                                _tracingService.Trace("id_rector: " + dto.id_rector);
                            }
                        }
                        else _tracingService.Trace("Dado de alta por Dynamics CRM WebAPI: " + domicilioCRM.Id);
                    }
                }
            }
            catch (Exception ex)
            {
                _servicioExcepciones.Atender(ex, json, dto);
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
            
            _servicioCRM = new ServicioCRM(_organizationService, _tracingService);
            _fabrica = new FabricaDomicilios(_servicioCRM);
            _servicioRector = new ServicioRector(_servicioCRM, _tracingService);
            _servicioExcepciones = new ServicioExcepciones(_tracingService);

            if (_servicioRector == null) throw new ArgumentNullException("Servicio rector es nulo");
            if (_tracingService == null) throw new ArgumentNullException("_tracingService es nulo");
            if (_context == null) throw new ArgumentNullException("_context es nulo");
            if (_serviceFactory == null) throw new ArgumentNullException("_serviceFactory es nulo");
            if (_organizationService == null) throw new ArgumentNullException("_service es nulo");
        }

        #endregion - Métodos Privados -
    }
}
