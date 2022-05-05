using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Enums;
using ProvinciaSeguros.Plugins.Excepciones;
using ProvinciaSeguros.Plugins.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Servicios
{
    public class ServicioRector : IServicioRector
    {
        #region - Atributos privados -

        private readonly string _endpointPersonas = "/personas";
        private readonly string _endpointTelefonos = "/telefonos";
        private readonly string _endpointDomicilios = "/domicilios";
        private readonly string _endpointCorreos = "/correoselectronicos";
        private readonly string _endpointExistePersona = "/personas";
        private readonly string _endpointLogin = "/authentication";
        private readonly string _configuracionDesarrollo = "POLIZAS_URL";
        private readonly string _parametrizacionUsuarioServicios = "POLIZAS_USUARIO_SERVICIOS";
        private readonly string _parametrizacionPasswordUsuarioServicios = "POLIZAS_PASSWORD_USUARIO_SERVICIOS";
        private readonly string _parametrizacionEnvironment = "POLIZAS_ENVIRONMENT";
        private readonly string _polizasUrl = "";
        private readonly string _headerValue = "";
        private readonly IServicioCRM _servicioCRM;
        ITracingService _tracingService;

        private readonly string ERROR_RECTOR = "";

        #endregion - Atributos privados -

        #region - Métodos públicos -

        public ServicioRector(IServicioCRM servicioCRM, ITracingService tracingService)
        {
            _tracingService = tracingService;

            _servicioCRM = servicioCRM;

            _polizasUrl = _servicioCRM.ObtenerConfiguracionDesarrollo(_configuracionDesarrollo);
            _headerValue = _servicioCRM.ObtenerConfiguracionDesarrollo(_parametrizacionEnvironment);

            //_tracingService.Trace("Configuracion rector Obtenida: " + _polizasUrl + " " + _headerValue);
 
        }

        public string GetToken()
        {
            try
            {
                string usuario = _servicioCRM.ObtenerConfiguracionDesarrollo(_parametrizacionUsuarioServicios).Split('|')[0];
                string  password = _servicioCRM.ObtenerConfiguracionDesarrollo(_parametrizacionUsuarioServicios).Split('|')[1];
                _tracingService.Trace("GetToken usr: {0} pwd: {1}", usuario, password);

                string json = To<LoginRector>(new LoginRector { password = password, username = usuario });

                _tracingService.Trace("GetToken url: {0} json: {1}", _polizasUrl + _endpointLogin, json);

                return Post(_polizasUrl + _endpointLogin, json);

            } catch (Exception ex)
            {

                throw new ErrorDeServicioException("GetToken - Error al obtener el token de autenticación de los servicios de RECTOR. ", ex);
            }
        }

        public RectorDTO AltaCorreoElectronico(IEntidadRector correoElectronico)
        {
            try
            {
                var json = To(correoElectronico as CorreoElectronicoRector);

                var token = GetToken();

                var result = Post(_polizasUrl + _endpointCorreos, json, token);

                return From<RectorDTO>(result);

            } catch (Exception ex)
            {
                throw new ErrorDeServicioException("AltaCorreoElectronico - Error al realizar la transacción con RECTOR.\r\n" +
                    "                               Json enviado: " + To<CorreoElectronicoRector>(correoElectronico as CorreoElectronicoRector) + "\r\n"
                                                    , ex);
            }
        }

        public RectorDTO AltaDomicilio(IEntidadRector domicilio)
        {
            try
            {
                var json = To(domicilio as DomicilioRector);

                var token = GetToken();

                var result = Post(_polizasUrl + _endpointDomicilios, json, token);

                return From<RectorDTO>(result);

            } catch (Exception ex)
            {
                throw new ErrorDeServicioException("AltaDomicilio - Error al realizar la transacción con RECTOR.\r\n" +
                                                    "Json enviado: " + To<DomicilioRector>(domicilio as DomicilioRector) + "\r\n", ex);
            }
        }

        public ExistePersonaDTO ExistePersona(string nombre, string apellido, string dni)
        {
            try
            {
                string token = GetToken();
                _tracingService.Trace("gettoken {0}", token);
                
                var result = Get(_polizasUrl + _endpointExistePersona + "/" + nombre + "/" + apellido + "/" + dni, token);
                _tracingService.Trace("get realizado");

                if (result.Equals("")) return new ExistePersonaDTO { EnumPersona = EnumPersona.NoExisteEnRector };

                var dto = From<ExistePersonaDTO>(result);

                dto.EnumPersona = dto.axx_existeenrector.Equals("False") ? EnumPersona.ExisteEnRector : EnumPersona.ExisteConProblemas;
                
                return dto;
            }
            catch (WebException ex)
            {
                if (ex.Status == WebExceptionStatus.ProtocolError)
                {
                    var response = ex.Response as HttpWebResponse;

                    if (response.StatusCode == HttpStatusCode.NotFound) return null; 
                }

                throw new ErrorDeServicioException("ExistePersona - Error al realizar la transacción con RECTOR.\r\nGET Endpoint: " + _polizasUrl + _endpointExistePersona + "/" + nombre + "/" + apellido + "/" + dni, ex);
            }
            catch (Exception ex)
            {
                throw new ErrorDeServicioException("ExistePersona - Error al realizar la transacción con RECTOR.\r\nGET Endpoint: " + _polizasUrl + _endpointExistePersona + "/" + nombre + "/" + apellido + "/" + dni, ex);
            }
        }

        public RectorDTO InformarGuid(string idRector, string guid)
        {
            var token = GetToken();

            var result = Post(_polizasUrl + _endpointPersonas + "/" + idRector + "/" + guid.ToString(), "", token);

            return From<RectorDTO>(result);
        }

        public RectorDTO AltaTelefono(IEntidadRector telefono)
        {
            try
            {
                var json = To(telefono as TelefonoRector);

                var token = GetToken();

                var result = Post(_polizasUrl + _endpointTelefonos, json, token);

                return From<RectorDTO>(result);

            }
            catch (Exception ex)
            {
                throw new ErrorDeServicioException("AltaTelefono - Error al realizar la transacción con RECTOR.\r\n" +
                                                    "Json enviado: " + To<TelefonoRector>(telefono as TelefonoRector) + "\r\n", ex);
            }
        }

        public RectorDTO AltaPersona(IEntidadRector persona)
        {
            try
            {
                var json = To(persona as PersonaRector);

                var token = GetToken();

                var result = Post(_polizasUrl + _endpointPersonas, json, token);

                return From<RectorDTO>(result);

            } catch (Exception ex)
            {
                throw new ErrorDeServicioException("AltaPersona - Error al realizar la transacción con RECTOR.\r\n" +
                                                    "Json enviado: " + To<PersonaRector>(persona as PersonaRector) + "\r\n", ex);
            }
        }

        public RectorDTO ActualizacionPersona(IEntidadRector persona)
        {
            try
            {

                _tracingService.Trace("ActualizacionPersona - PUT");

                var personaRector = persona as PersonaRector;

                var json = To(personaRector as PersonaRector);

                var token = GetToken();

                _tracingService.Trace("LOG:" + _polizasUrl + _endpointPersonas + "/" + personaRector.axx_idrector);

                var result = Put(_polizasUrl + _endpointPersonas + "/" + personaRector.axx_idrector, json, token);

                return From<RectorDTO>(result);

            } catch (Exception ex)
            {
                throw new ErrorDeServicioException("AltaPersona - Error al realizar la transacción con RECTOR.\r\n" +
                                                    "Json enviado: " + To<PersonaRector>(persona as PersonaRector) + "\r\n", ex);
            }
        }

        public string Post(string uri, string jsonData, string token)
        {
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] byte1 = encoding.GetBytes(jsonData);

            var request = (HttpWebRequest)WebRequest.Create(uri);

            request.Method = WebRequestMethods.Http.Post;
            request.ContentType = "application/json";
            request.Headers.Add("environment", _headerValue);
            request.Headers.Add("authorization", token);
            request.ContentLength = byte1.Length;

            Stream dataStream = request.GetRequestStream();
            dataStream.Write(byte1, 0, byte1.Length);
            dataStream.Close();

            var webResponse = request.GetResponse();
            var response = "";

            using (StreamReader sr = new StreamReader(webResponse.GetResponseStream()))
            {
                response += sr.ReadToEnd();
            }

            return response;
        }

        public string Post(string uri, string jsonData)
        {   try
            {
                ASCIIEncoding encoding = new ASCIIEncoding();
                byte[] byte1 = encoding.GetBytes(jsonData);

                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);

                request.Method = WebRequestMethods.Http.Post;
                request.ContentType = "application/json";
                // request.Headers.Add("environment", _headerValue);
                request.ContentLength = byte1.Length;

                Stream dataStream = request.GetRequestStream();
                dataStream.Write(byte1, 0, byte1.Length);
                dataStream.Close();
                _tracingService.Trace("Post Antes del response");
                WebResponse webResponse = request.GetResponse();
                _tracingService.Trace("Despues del response");

                if (webResponse == null ||
                    webResponse.Headers.Count == 0 ||
                    webResponse.Headers["authorization"] == null)
                    return string.Empty;
                _tracingService.Trace("El token no es nulo");

                return webResponse.Headers["authorization"];

            } catch (WebException ex)
            {
                _tracingService.Trace("Post error: {0}", ex.Message);
                throw;
            }
        }

        public string Put(string uri, string jsonData, string token)
        {
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] byte1 = encoding.GetBytes(jsonData);

            var request = (HttpWebRequest)WebRequest.Create(uri);

            request.Method = WebRequestMethods.Http.Put;
            request.ContentType = "application/json";
            request.Headers.Add("environment", _headerValue);
            request.Headers.Add("authorization", token);
            request.ContentLength = byte1.Length;

            Stream dataStream = request.GetRequestStream();
            dataStream.Write(byte1, 0, byte1.Length);
            dataStream.Close();

            var response = "";

            var webResponse = request.GetResponse();

            using (StreamReader sr = new StreamReader(webResponse.GetResponseStream()))
            {
                response += sr.ReadToEnd();
            }

            return response;
        }

        public string Get(string url, string token)
        {
            ASCIIEncoding encoding = new ASCIIEncoding();

            var request = (HttpWebRequest)WebRequest.Create(url);

            request.Method = WebRequestMethods.Http.Get;
            request.ContentType = "application/json";
            request.Headers.Add("environment", _headerValue);
            request.Headers.Add("authorization", token);

            var response = "";

            var webResponse = request.GetResponse();

            using (StreamReader sr = new StreamReader(webResponse.GetResponseStream()))
            {
                response += sr.ReadToEnd();
            }

            return response;
        }

        #endregion - Métodos públicos -

        #region - Métodos privados -

        public static string To<T>(T obj)
        {
            try
            { 
                string retVal = null;

                DataContractJsonSerializer serializer = new DataContractJsonSerializer(obj.GetType());

                using (MemoryStream ms = new MemoryStream())
                {
                    serializer.WriteObject(ms, obj);
                    retVal = Encoding.Default.GetString(ms.ToArray());
                }

                return retVal;

            } catch (Exception ex)
            {
                throw new ErrorDeSerializacionException("Error al serializar");
            }
        }

        public static T From<T>(string json)
        {
            try
            {
                T obj = Activator.CreateInstance<T>();
                using (MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(json)))
                {
                    System.Runtime.Serialization.Json.DataContractJsonSerializer serializer = new System.Runtime.Serialization.Json.DataContractJsonSerializer(obj.GetType());
                    obj = (T)serializer.ReadObject(ms);
                }

                return obj;

            } catch (Exception ex)
            {
                throw new ErrorDeSerializacionException("Error al deserializar el siguiente json: " + json);
            }
        }

        #endregion - Métodos privados -
    }

}
