using ProvinciaSeguros.Plugins.Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Servicios
{
    interface IServicioValidaciones
    {
        /// <summary>
        /// A partir de una persona del dominio de RECTOR, determina si los datos son válidos o no. En caso de no ser válidos, arroja un NegocioException con los errores.
        /// </summary>
        /// <param name="personaRector"></param>
        /// <returns></returns>
        bool ValidarPersona(PersonaRector personaRector);

        /// <summary>
        /// A partir de un telefono del dominio de RECTOR, determina si los datos son válidos o no. En caso de no ser válidos, arroja un NegocioException con los errores.
        /// </summary>
        /// <param name="telefonoRector"></param>
        /// <returns></returns>
        bool ValidarTelefono(TelefonoRector telefonoRector);

        /// <summary>
        /// A partir de un correo del dominio de RECTOR, determina si los datos son válidos o no. En caso de no ser válidos, arroja un NegocioException con los errores.
        /// </summary>
        /// <param name="correo"></param>
        /// <returns></returns>
        bool ValidarCorreo(CorreoElectronicoRector correo);
    }
}
