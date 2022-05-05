using Microsoft.Xrm.Sdk;
using System;
using System.Linq;
using ProvinciaSeguros.Plugins.Casos.Servicios;
using ProvinciaSeguros.Plugins.Casos.Constantes;


namespace ProvinciaSeguros.Plugins.Casos
{
    public class NuevoCasoPlugin : IPlugin
    {
        #region - Atributos privados -

        ITracingService _tracingService;
        IPluginExecutionContext _context;
        IOrganizationService _organizationService;
        IOrganizationServiceFactory _serviceFactory;
        IServicioCRM _servicioCRM;

        #endregion - Atributos privados -
        #region - Métodos Públicos -
        public void Execute(IServiceProvider serviceProvider)
        {
            ITracingService _tracer = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            IPluginExecutionContext _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory _factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService _service = _factory.CreateOrganizationService(_context.UserId);

            try
            {

                InicializarServicios(serviceProvider);

                var entidadCRM = _context.InputParameters["Target"] as Entity;

                if (entidadCRM.Contains("axx_quiensecontacta"))
                {

                    var persona = entidadCRM["axx_quiensecontacta"] as EntityReference;

                    var email = String.Empty;

                    var emailAdress = _servicioCRM.ObtenerEmailAdress(persona.Id);

                    var correos = _servicioCRM.ObtenerCorreos(persona.Id);

                    var correo = correos.Entities
                                                .Where(c => ((OptionSetValue)c.Attributes[CamposCorreo.ESPRINCIPAL]).Value.ToString().Equals(CamposCorreo.OPTION_ESPRINCIPAL_SI))
                                                .FirstOrDefault();

                    if (correo != null)
                    {
                        email = correo.Attributes[CamposCorreo.CORREO].ToString();
                    }
                    else
                    {
                        if (correos.Entities.Any() && String.IsNullOrEmpty(emailAdress))
                        {
                            email = correos.Entities.FirstOrDefault()[CamposCorreo.CORREO].ToString();
                        }
                    }

                    if (!email.Equals(emailAdress) && !String.IsNullOrEmpty(email))
                        _servicioCRM.ActualizarEmailAdress(persona.Id, email);

                }

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion

        #region - Métodos Privados -

        #region - Métodos Privados -

        private void InicializarServicios(IServiceProvider serviceProvider)
        {
            _tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            _serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            _organizationService = _serviceFactory.CreateOrganizationService(_context.UserId);

            _servicioCRM = new ServicioCRM(_organizationService);

            if (_tracingService == null) throw new ArgumentNullException("_tracingService es nulo");
            if (_context == null) throw new ArgumentNullException("_context es nulo");
            if (_serviceFactory == null) throw new ArgumentNullException("_serviceFactory es nulo");
            if (_organizationService == null) throw new ArgumentNullException("_service es nulo");
        }

        #endregion - Métodos Privados -

        #endregion - Métodos Privados -
    }
}
