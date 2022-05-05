using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Excepciones;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Servicios
{
    public class ServicioValidaciones : IServicioValidaciones
    {
        #region - Private Attributes -

        private List<string> _mensajesValidacion;

        #endregion - Private Attributes -

        #region - Public Methods -

        public ServicioValidaciones()
        {
            _mensajesValidacion = new List<string>();
        }

        public bool ValidarPersona(PersonaRector personaRector)
        {
            // En caso de ser persona juridica no se realizan las validaciones normales
            if(String.IsNullOrEmpty(personaRector.axx_razonsocial))
            { 
                if (!FechaNacimientoValida(personaRector.axx_fechanacimiento)) _mensajesValidacion.Add("La edad de la persona debe ser menor a 111 años.");
                if (!EsNumerico(personaRector.axx_numerodocumento)) _mensajesValidacion.Add("El DNI contiene letras, debe ser un número.");
                if (!CUILCorrespondeADNI(personaRector.axx_cuit, personaRector.axx_numerodocumento)) _mensajesValidacion.Add("El CUIT ingresado no corresponde al DNI.");
                if (!TextoNoNumerico(personaRector.axx_nombre)) _mensajesValidacion.Add("El nombre de la persona debe contener solo letras");
                if (!TextoNoNumerico(personaRector.axx_apellido)) _mensajesValidacion.Add("El apellido de la persona debe contener solo letras");
            }
            if (!CUILValido(personaRector.axx_cuit)) _mensajesValidacion.Add("El CUIT ingresado es inválido.");
            if (_mensajesValidacion.Count > 0)
            {
                var validaciones = "";

                foreach (var mensaje in _mensajesValidacion)
                {
                    validaciones += mensaje + "\r\n";
                }

                throw new NegocioException(validaciones);
            }

            return true;
        }

        public bool ValidarTelefono(TelefonoRector telefonoRecotor)
        {
            if (!EsNumericoOVacio(telefonoRecotor.axx_ddi)) _mensajesValidacion.Add("El DDI ingresado debe ser númerico.");
            if (!EsNumericoOVacio(telefonoRecotor.axx_ddn)) _mensajesValidacion.Add("El DDN ingresado debe ser númerico.");
            if (!EsNumerico(telefonoRecotor.axx_numero)) _mensajesValidacion.Add("El número de teléfono ingresado debe ser númerico.");
            if (!EsNumerico(telefonoRecotor.axx_caracteristica)) _mensajesValidacion.Add("La característica ingresada debe ser númerica.");

            if (_mensajesValidacion.Count > 0)
            {
                var validaciones = "";

                foreach (var mensaje in _mensajesValidacion)
                {
                    validaciones += mensaje + "\r\n";
                }

                throw new NegocioException(validaciones);
            }

            return true;
        }

        public bool ValidarCorreo(CorreoElectronicoRector correo)
        {
            if (!EmailValido(correo.axx_correoelectronico1))
            {
                throw new NegocioException("El correo electrónico ingresado no es válido.");
            }

            return true;
        }


        #endregion - Public Methods - 

        #region - Private Methods -

        private bool TextoNoNumerico(string texto)
        {
            texto = texto.Replace(" ", string.Empty);
            return Regex.IsMatch(texto, @"^[a-zA-Z]+$");
        }

        private Boolean EmailValido(String email)
        {
            String expresion;
            expresion = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
            if (Regex.IsMatch(email, expresion))
            {
                if (Regex.Replace(email, expresion, String.Empty).Length == 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }


        private bool EsNumerico(string dato)
        {
            int val;

            if (int.TryParse(dato, out val))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private bool EsNumericoOVacio(string dato)
        {
            int val;

            if (int.TryParse(dato, out val) || String.IsNullOrEmpty(dato))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private int CalcularDigitoCuit(string cuit)
        {
            int[] mult = new[] { 5, 4, 3, 2, 7, 6, 5, 4, 3, 2 };
            char[] nums = cuit.ToCharArray();
            int total = 0;
            for (int i = 0; i < mult.Length; i++)
            {
                total += int.Parse(nums[i].ToString()) * mult[i];
            }
            var resto = total % 11;
            return resto == 0 ? 0 : resto == 1 ? 9 : 11 - resto;
        }

        private bool CUILValido(string cuit)
        {
            if ((cuit == null) || (cuit.Equals(string.Empty))) return true;

            //Quito los guiones, el cuit resultante debe tener 11 caracteres.
            cuit = cuit.Replace("-", string.Empty);

            if (cuit.Length != 11) return false;
            else
            {
                int calculado = CalcularDigitoCuit(cuit);
                int digito = int.Parse(cuit.Substring(10));
                return calculado == digito;
            }
        }

        private bool CUILCorrespondeADNI(string cuit, string dni)
        {
            if ((cuit == null) || (cuit.Equals(string.Empty))) return true;

            return cuit.Contains(dni);
        }

        private bool FechaNacimientoValida(string strFechaNacimiento)
        {
            if (!strFechaNacimiento.Equals(""))
            {
                var anio = int.Parse(strFechaNacimiento.Split('-')[0]);

                var anios = DateTime.Now.Year - anio;

                return anios < 111;
            }
            else return true;
        }

        #endregion - Private Methods -
    }
}
