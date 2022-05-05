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

namespace ProvinciaSeguros.Plugins
{
    public class ActualizacionCorreoElectronicoPlugin : IPlugin
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
        IServicioExcepciones _servicioExceptiones;
        IServicioValidaciones _servicioValidaciones;

        Fabrica _fabrica;

        #endregion - Atributos Privados -

        #region - Métodos Públicos -

        public void Execute(IServiceProvider serviceProvider)
        {
            var dto = new RectorDTO();
            var json = string.Empty;
            Entity correo = new Entity();
            bool cancelarAltaEnRector = false;

            try
            {
                InicializarServicios(serviceProvider);

                if (_context.InputParameters.Contains("Target") && _context.InputParameters["Target"] is Entity)
                {
                    var correoElectronicoCRM = _context.InputParameters["Target"] as Entity;

                    cancelarAltaEnRector =  (correoElectronicoCRM.Attributes.Count == 2 && correoElectronicoCRM.Contains(CamposCorreoElectronico.NAME)) ||
                                            (correoElectronicoCRM.Attributes.Count == 2 && correoElectronicoCRM.Contains(CamposCorreoElectronico.ESPRINCIPAL)) ||
                                            (correoElectronicoCRM.Attributes.Count == 1 && correoElectronicoCRM.Contains(CamposCorreoElectronico.GUID_CORREOELECTRONICO));

                    if (correoElectronicoCRM.LogicalName.Equals(CamposCorreoElectronico.ENT_CORREOELECTRONICO))
                    {
                        var userMail = _servicioCRM.GetUserName(_context.InitiatingUserId);

                        // Chequeo que el usuario no sea el usuario d e servicios.
                        if (!userMail.Contains("dynamics"))
                        {
                            if (_context.MessageName.ToUpper().Equals(_messageCreate))
                            {
                                // Guardo en CRM.
                                correo = _servicioCRM.AltaCorreoElectronico(correoElectronicoCRM);
                            }
                            else if (_context.MessageName.ToUpper().Equals(_messageUpdate))
                            {
                                // Pre imagen del cambio
                                if (_context.PreEntityImages.Contains("CorreoPreImagen") && _context.PreEntityImages["CorreoPreImagen"] is Entity)
                                {
                                    Entity preImagen = (Entity)_context.PreEntityImages["CorreoPreImagen"];

                                    correo = _servicioCRM.ModificacionCorreoElectronico(correoElectronicoCRM, preImagen);
                                    correo.Id = correoElectronicoCRM.Id;
                                }
                            }

                            if(!cancelarAltaEnRector)
                            { 
                                // Hago el mapeo de campos con la entidad que va a viajar a RECTOR.
                                var correoElectronicoRector = _fabrica.Fabricar(correo, userMail);

                                _servicioValidaciones.ValidarCorreo((CorreoElectronicoRector)correoElectronicoRector);

                                json = ServicioRector.To<CorreoElectronicoRector>((CorreoElectronicoRector)correoElectronicoRector);

                                // Guardo en RECTOR.
                                dto = _servicioRector.AltaCorreoElectronico(correoElectronicoRector);

                                if (dto.status_code.Equals("200")) correoElectronicoCRM.Attributes[CamposCorreoElectronico.IDCORREO] = dto.id_rector;

                                else throw new Exception(dto.mensaje_error);

                                _tracingService.Trace("id_rector: " + dto.id_rector);
                                _tracingService.Trace("Json enviado: " + json);
                            }
                        }
                        else _tracingService.Trace("Dado de alta por Dynamics CRM WebAPI: " + correoElectronicoCRM.Id);
                    }
                }
            }
            catch (Exception ex)
            {
                _servicioExceptiones.Atender(ex, json, dto);
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
            _servicioValidaciones = new ServicioValidaciones();
            
            _fabrica = new FabricaCorreosElectronicos();
            _servicioCRM = new ServicioCRM(_organizationService, _tracingService);
            _servicioRector = new ServicioRector(_servicioCRM, _tracingService);
            _servicioExceptiones = new ServicioExcepciones(_tracingService);

            if (_servicioRector == null) throw new ArgumentNullException("_servicioRector es nulo");
            if (_tracingService == null) throw new ArgumentNullException("_tracingService es nulo");
            if (_context == null) throw new ArgumentNullException("_context es nulo");
            if (_serviceFactory == null) throw new ArgumentNullException("_serviceFactory es nulo");
            if (_organizationService == null) throw new ArgumentNullException("_organizationService es nulo");
            if (_servicioExceptiones == null) throw new ArgumentNullException("_servicioExceptiones es nulo");
        }

        #endregion - Métodos Privados -
    }
}
