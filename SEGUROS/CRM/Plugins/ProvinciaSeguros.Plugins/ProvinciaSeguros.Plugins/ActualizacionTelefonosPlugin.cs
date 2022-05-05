using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Excepciones;
using ProvinciaSeguros.Plugins.Fabricas;
using ProvinciaSeguros.Plugins.Interfaces;
using ProvinciaSeguros.Plugins.Servicios;
using System;
using System.Linq;
using System.Collections.Generic;

namespace ProvinciaSeguros.Plugins
{
    public class ActualizacionTelefonosPlugin : IPlugin
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
        IServicioValidaciones _servicioValidaciones;
        Fabrica _fabrica;

        #endregion - Atributos Privados -

        #region - Métodos Públicos -

        public void Execute(IServiceProvider serviceProvider)
        {
            RectorDTO dto = new RectorDTO();
            bool cancelarAltaEnRector = false;
            var json = "";

            try
            {
                InicializarServicios(serviceProvider);

                if (_context.InputParameters.Contains("Target") && _context.InputParameters["Target"] is Entity)
                {
                    var telefonoCRM = _context.InputParameters["Target"] as Entity;
                    Entity telefono = new Entity();

                    cancelarAltaEnRector =
                                            (telefonoCRM.Attributes.Count == 1 && telefonoCRM.Contains(CamposTelefono.GUID_TELEFONO)) ||
                                            (telefonoCRM.Attributes.Count == 2 && telefonoCRM.Contains(CamposTelefono.NAME)) ||
                                            (telefonoCRM.Attributes.Count == 2 && telefonoCRM.Contains(CamposTelefono.ESPRINCIPAL)) ||
                                            (telefonoCRM.Attributes.Count == 2 && telefonoCRM.Contains(CamposTelefono.TELEFONONORMALIZADO)) ||
                                            (telefonoCRM.Attributes.Count == 3 && telefonoCRM.Contains(CamposTelefono.ESPRINCIPAL) && telefonoCRM.Contains(CamposTelefono.TELEFONONORMALIZADO) && telefonoCRM.Contains(CamposTelefono.GUID_TELEFONO));
                                            
                 
                    foreach (var atributo in telefonoCRM.Attributes.ToList())
                    {
                        _tracingService.Trace(atributo.Key.ToString());
                    }

                    foreach (var atributo in telefonoCRM.Attributes.ToList())
                    {
                        _tracingService.Trace(atributo.Value.ToString());
                    }

                    if (telefonoCRM.LogicalName.Equals(CamposTelefono.ENT_TELEFONO))
                    {
                        var userMail = _servicioCRM.GetUserName(_context.InitiatingUserId);

                        // Chequeo que el usuario no sea el usuario d e servicios.
                        if (!userMail.Contains("dynamics"))
                        {

                            if (_context.MessageName.ToUpper().Equals(_messageCreate))
                            {
                                // Guardo en CRM.
                                telefono = _servicioCRM.AltaTelefono(telefonoCRM);
                            }
                            // UPDATE
                            else if (_context.MessageName.ToUpper().Equals(_messageUpdate))
                            {
                                // Pre imagen del cambio
                                if (_context.PreEntityImages.Contains("TelefonoPreImagen") && _context.PreEntityImages["TelefonoPreImagen"] is Entity)
                                {
                                    Entity preImagen = (Entity)_context.PreEntityImages["TelefonoPreImagen"];

                                    telefono = _servicioCRM.ModificacionTelefono(telefonoCRM, preImagen);
                                }
                            }

                            if(!cancelarAltaEnRector)
                            { 
                                //// Hago el mapeo de campos con la entidad que va a viajar a RECTOR.
                                //var telefonoRector = _fabrica.Fabricar(telefono, userMail);

                                //json = ServicioRector.To<TelefonoRector>((TelefonoRector)telefonoRector);

                                ////_servicioValidaciones.ValidarTelefono((TelefonoRector)telefonoRector);
                                //// Guardo en RECTOR.
                                //dto = _servicioRector.AltaTelefono(telefonoRector);

                                //if (dto.status_code.Equals("200")) telefonoCRM.Attributes[CamposTelefono.IDTELEFONO] = dto.id_rector;

                                //else throw new Exception(dto.mensaje_error);

                                //_tracingService.Trace("id_rector: " + dto.id_rector);
                            }
                        }
                        else _tracingService.Trace("Dado de alta por Dynamics CRM WebAPI: " + telefonoCRM.Id);
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
            _servicioValidaciones = new ServicioValidaciones();

            _fabrica = new FabricaTelefonos();
            _servicioCRM = new ServicioCRM(_organizationService, _tracingService);
            _servicioRector = new ServicioRector(_servicioCRM, _tracingService);
            _servicioExcepciones = new ServicioExcepciones(_tracingService);

            if (_servicioRector == null)        throw new ArgumentNullException("Servicio rector es nulo");
            if (_tracingService == null)        throw new ArgumentNullException("_tracingService es nulo");
            if (_context == null)               throw new ArgumentNullException("_context es nulo");
            if (_serviceFactory == null)        throw new ArgumentNullException("_serviceFactory es nulo");
            if (_organizationService == null)   throw new ArgumentNullException("_service es nulo");
            if (_servicioExcepciones == null)   throw new ArgumentNullException("_servicioExcepciones es nulo");
        }

        #endregion - Métodos Privados -
    }
}
