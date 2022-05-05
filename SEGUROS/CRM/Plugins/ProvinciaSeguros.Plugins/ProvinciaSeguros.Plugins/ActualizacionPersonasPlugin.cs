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
    public class ActualizacionPersonasPlugin : IPlugin
    {
        #region - Atributos Privados -

        private readonly string _messageCreate = "CREATE";
        private readonly string _messageUpdate = "UPDATE";

        private bool _informoGuid = false;

        IServicioRector _servicioRector;
        ITracingService _tracingService;
        IPluginExecutionContext _context;
        IOrganizationService _organizationService;
        IOrganizationServiceFactory _serviceFactory;
        IServicioCRM _servicioCRM;
        IServicioExcepciones _servicioExcepciones;
        IServicioValidaciones _servicioValidaciones;

        Fabrica _fabrica;
        Fabrica _fabricaTelefonoCelular;
        Fabrica _fabricaTelefonoParticular;
        Fabrica _fabricaTelefonoComercial;

        #endregion - Atributos Privados -

        #region - Métodos Públicos -

        public void Execute(IServiceProvider serviceProvider)
        {

            //_tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            //_tracingService.Trace("Hola");

            RectorDTO dto = new RectorDTO();
            string json = "";

            try
            {
                //_tracingService.Trace("Servicios por inicializar");
                InicializarServicios(serviceProvider);
                //_tracingService.Trace("Servicios inicializados");

                if (_context.InputParameters.Contains("Target") && _context.InputParameters["Target"] is Entity)
                {
                    var entidadCRM = _context.InputParameters["Target"] as Entity;
                    Entity persona = new Entity();
                    //_tracingService.Trace("Contexto obtenido");
                    if (entidadCRM.LogicalName.Equals(CamposPersona.ENT_PERSONA))
                    {
                        //_tracingService.Trace("Obtener Username para :" + _context.InitiatingUserId.ToString());
                        var userMail = _servicioCRM.GetUserName(_context.InitiatingUserId);
                        PersonaRector personaRector = null;
                        bool ForceCreate = false;

                        //_tracingService.Trace("Username obtenido :" + userMail.ToString());
                        // Chequeo que el usuario no sea el usuario d e servicios.

                        if (_context.MessageName.ToUpper().Equals(_messageUpdate))
                        {
                            if (_context.PreEntityImages.Contains("PersonasPreImagen") && _context.PreEntityImages["PersonasPreImagen"] is Entity)
                            {
                                Entity preImagen = (Entity)_context.PreEntityImages["PersonasPreImagen"];
                                persona = _servicioCRM.ModificacionPersona(entidadCRM, preImagen);
                                personaRector = _fabrica.Fabricar(persona, userMail) as PersonaRector;
                                if (String.IsNullOrEmpty(personaRector.axx_idrector))
                                {
                                    _tracingService.Trace("Era UPDATE de CRM, pero forzamos CREATE.");
                                    ForceCreate = true;
                                }
                            }
                        }

                        if (!userMail.Contains("dynamics"))
                        {
                            // CREATE
                            if (ForceCreate || _context.MessageName.ToUpper().Equals(_messageCreate))
                            {
                                _tracingService.Trace("Create");
                                _tracingService.Trace("Verificar flag de Enviar a Rector 1" + CamposPersona.CANCELARECTOR);

                                if (entidadCRM.Attributes.Contains(CamposPersona.CANCELARECTOR) && (bool)entidadCRM.Attributes[CamposPersona.CANCELARECTOR])
                                {
                                    // Si el tilde está en si, nos vamos...
                                    _tracingService.Trace("Flag en verdadero, salir...");
                                    return;
                                }

                                if (ForceCreate)
                                {
                                    // Si se fuerza CREATE, tomamos la entidad desde la imagen para tener los campos
                                    entidadCRM = (Entity)_context.PreEntityImages["PersonasPreImagen"];
                                }

                                var en = _context.InputParameters["Target"] as Entity;
                                _tracingService.Trace(en.Attributes.Contains(CamposPersona.NUMERO_DOCUMENTO).ToString());

                                var fabrica = new FabricaEstrategias(_servicioCRM, _servicioRector, _tracingService, userMail);
                                //_tracingService.Trace("fabrica obtenida");
                                var estrategia = fabrica.Fabricar(entidadCRM, ForceCreate, en);
                                _tracingService.Trace("Estrategia obtenida: " + estrategia.GetType());
                                _tracingService.Trace("Ejecutar estrategia");
                                if (ForceCreate)
                                {
                                    // Si se fuerza CREATE, volvemos a poner como objeto base el Target
                                    var entidadCRMREAL = _context.InputParameters["Target"] as Entity;

                                    MatchFields(entidadCRMREAL, entidadCRM);

                                    personaRector = estrategia.Ejecutar(entidadCRMREAL);
                                    if (entidadCRMREAL.Attributes.Contains(CamposPersona.EXISTERECTOR)) entidadCRMREAL.Attributes.Remove(CamposPersona.EXISTERECTOR);
                                }
                                else
                                {
                                    personaRector = estrategia.Ejecutar(entidadCRM);
                                }
                                _tracingService.Trace("ID Obtenido: " + personaRector.axx_idrector);
                                _tracingService.Trace("Estrategia ejecutada para cuit: " + personaRector.axx_cuit);
                            }

                            // UPDATE
                            else if (_context.MessageName.ToUpper().Equals(_messageUpdate))
                            {
                                // Pre imagen del cambio
                                if (_context.PreEntityImages.Contains("PersonasPreImagen") && _context.PreEntityImages["PersonasPreImagen"] is Entity)
                                {
                                    _tracingService.Trace("Update!");
                                    Entity preImagen = (Entity)_context.PreEntityImages["PersonasPreImagen"];

                                    persona = _servicioCRM.ModificacionPersona(entidadCRM, preImagen);

                                    personaRector = _fabrica.Fabricar(persona, userMail) as PersonaRector;

                                    _servicioRector.ActualizacionPersona(personaRector);

                                    ActualizarCampoName(entidadCRM, personaRector);
                                }
                            }

                            _tracingService.Trace("Validar persona");
                            _servicioValidaciones.ValidarPersona(personaRector);
                            _tracingService.Trace("Persona validada");

                            json = ServicioRector.To<PersonaRector>(personaRector as PersonaRector);

                            _tracingService.Trace("id_rector: " + dto.id_rector);
                            _tracingService.Trace("Json enviado: " + json);

                            if (entidadCRM.Attributes.Contains(CamposPersona.EXISTERECTOR)) entidadCRM.Attributes.Remove(CamposPersona.EXISTERECTOR);
                        }

                        if (entidadCRM.Contains(CamposPersona.CELULAR_NUMERO))
                        {
                            var atributosCelular = entidadCRM.Attributes.Where(at => at.Key.Contains("CELULAR")).ToList();
                            
                            if (true) //REVISAR
                            {

                                // Hago el mapeo de campos con la entidad que va a viajar a RECTOR.
                                var telefonoRector = (TelefonoRector)_fabricaTelefonoCelular.Fabricar(entidadCRM, userMail);

                                json = ServicioRector.To<TelefonoRector>((TelefonoRector)telefonoRector);

                                // Guardo en RECTOR.
                                dto = _servicioRector.AltaTelefono(telefonoRector);

                                if (dto.status_code.Equals("200")) entidadCRM.Attributes[CamposPersona.CELULAR_IDTELEFONO] = dto.id_rector;

                                else throw new Exception(dto.mensaje_error);

                                _tracingService.Trace("id_rector: " + dto.id_rector);
                            }

                        }
                        if (entidadCRM.Contains(CamposPersona.TELEFONOCOMERCIAL_NUMERO))
                        {
                            var atributosTelCom = entidadCRM.Attributes.Where(at => at.Key.Contains("TELEFONOCOMERCIAL")).ToList();

                            if (true)
                            {

                                // Hago el mapeo de campos con la entidad que va a viajar a RECTOR.
                                var telefonoRector = (TelefonoRector)_fabricaTelefonoComercial.Fabricar(entidadCRM, userMail);

                                json = ServicioRector.To<TelefonoRector>((TelefonoRector)telefonoRector);

                                // Guardo en RECTOR.
                                dto = _servicioRector.AltaTelefono(telefonoRector);

                                //if (dto.status_code.Equals("200")) entidadCRM.Attributes[CamposPersona.TELEFONOCOMERCIAL_IDTELEFONO] = dto.id_rector;
                                if (dto.status_code.Equals("200")) Console.WriteLine("exito");

                                else throw new Exception(dto.mensaje_error);

                                _tracingService.Trace("id_rector: " + dto.id_rector);
                            }

                        }
                        if (entidadCRM.Contains(CamposPersona.TELEPHONE1_NUMERO))
                        {
                            var atributosTelephone = entidadCRM.Attributes.Where(at => at.Key.Contains("TELEPHONE1")).ToList();

                            
                            if (true)
                            {

                                // Hago el mapeo de campos con la entidad que va a viajar a RECTOR.
                                var telefonoRector = (TelefonoRector)_fabricaTelefonoParticular.Fabricar(entidadCRM, userMail);

                                json = ServicioRector.To<TelefonoRector>((TelefonoRector)telefonoRector);

                                // Guardo en RECTOR.
                                dto = _servicioRector.AltaTelefono(telefonoRector);

                                if (dto.status_code.Equals("200")) entidadCRM.Attributes[CamposPersona.TELEPHONE1_IDTELEFONO] = dto.id_rector;

                                else throw new Exception(dto.mensaje_error);

                                _tracingService.Trace("id_rector: " + dto.id_rector);
                            }

                        }
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

        private void MatchFields(Entity entidadCRMREAL, Entity entidadCRM)
        {
            foreach (var atr in entidadCRM.Attributes)
            {
                if (atr.Key != CamposPersona.EXISTERECTOR && !entidadCRMREAL.Attributes.Contains(atr.Key))
                {
                    entidadCRMREAL.Attributes.Add(atr.Key, false);
                }
                entidadCRMREAL.Attributes[atr.Key] = entidadCRM.Attributes[atr.Key];
            }
        }

        private void InicializarServicios(IServiceProvider serviceProvider)
        {
            _tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            _serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            _organizationService = _serviceFactory.CreateOrganizationService(_context.UserId);

            _fabrica = new FabricaPersonas();
            _fabricaTelefonoCelular = new FabricaTelefonoCelular();
            _fabricaTelefonoParticular = new FabricaTelefonoParticular();
            _fabricaTelefonoComercial = new FabricaTelefonoComercial();
            _servicioCRM = new ServicioCRM(_organizationService, _tracingService);


            _servicioRector = new ServicioRector(_servicioCRM, _tracingService);
            _servicioExcepciones = new ServicioExcepciones(_tracingService);
            _servicioValidaciones = new ServicioValidaciones();

            _informoGuid = false;

            if (_servicioRector == null) throw new ArgumentNullException("Servicio rector es nulo");
            if (_tracingService == null) throw new ArgumentNullException("_tracingService es nulo");
            if (_context == null) throw new ArgumentNullException("_context es nulo");
            if (_serviceFactory == null) throw new ArgumentNullException("_serviceFactory es nulo");
            if (_organizationService == null) throw new ArgumentNullException("_service es nulo");
            if (_servicioValidaciones == null) throw new ArgumentNullException("_servicioValidaciones es nulo");
        }

        private void ActualizarCampoName(Entity entidadCRM, PersonaRector personaRector)
        {
            if (personaRector.axx_tipopersona.Equals(CamposPersona.OPTION_TIPOPERSONA_FISICA)) entidadCRM.Attributes[CamposPersona.NAME] = personaRector.axx_apellido + " " + personaRector.axx_nombre;
            else entidadCRM.Attributes[CamposPersona.NAME] = personaRector.axx_razonsocial;
        }

        #endregion - Métodos Privados -
    }
}
