using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Excepciones;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Servicios
{
    public class ServicioExcepciones: IServicioExcepciones
    {
        private ITracingService _tracingService;

        public ServicioExcepciones(ITracingService tracingService)
        {
            _tracingService = tracingService;
        }

        public void Atender(Exception ex, string json, RectorDTO dto)
        {
            if (ex is ErrorDeServicioException)
            {
                _tracingService.Trace("ErrorDeServicioException");
                _tracingService.Trace("Json enviado: " + json);
                _tracingService.Trace(ex.Message);
                _tracingService.Trace("Inner exception: " + ex.InnerException.Message);

                throw new InvalidPluginExecutionException("Error al guardar en RECTOR: " + ex.InnerException.Message);
            }

            if (ex is ServicioRectorException)
            {
                _tracingService.Trace("ServicioRectorException.");
                _tracingService.Trace("Json enviado: " + json + "\r\n");
                _tracingService.Trace("status: " + dto.status_code + "\r\n");
                _tracingService.Trace("error: " + dto.mensaje_error + "\r\n");

                throw new InvalidPluginExecutionException("Error al guardar en RECTOR. El error obtenido fué: " + dto.mensaje_error, ex);
            }

            if (ex is ServicioCRMException)
            {
                _tracingService.Trace("ServicioCRMException");
                _tracingService.Trace(ex.Message);
                _tracingService.Trace("----------------------------------------");
                _tracingService.Trace(ex.InnerException.Message);

                var message = "";

                message = ex.InnerException is NegocioException ? ex.InnerException.Message : "Error técnico. Por favor consulte con su administrador.";

                throw new InvalidPluginExecutionException(message);
            }

            if (ex is NegocioException)
            {
                _tracingService.Trace("NegocioException");

                throw new InvalidPluginExecutionException(ex.Message);
            }

            if (ex is SerializationException)
            {
                _tracingService.Trace("SerializationException.");
                _tracingService.Trace("Json enviado: " + json + "\r\n");
                _tracingService.Trace("status: " + dto.status_code + "\r\n");
                _tracingService.Trace("error: " + dto.mensaje_error + "\r\n");

                throw new InvalidPluginExecutionException("Error al guardar en RECTOR. El error obtenido fué: " + dto.mensaje_error);
            }

            if (ex is Exception)
            {

                _tracingService.Trace("Exception.");
                _tracingService.Trace("Json: " + json);
                _tracingService.Trace(ex.Message, ex.StackTrace);
                _tracingService.Trace(ex.StackTrace);

                throw new InvalidPluginExecutionException(ex.Message);
            }
        }
    }
}
