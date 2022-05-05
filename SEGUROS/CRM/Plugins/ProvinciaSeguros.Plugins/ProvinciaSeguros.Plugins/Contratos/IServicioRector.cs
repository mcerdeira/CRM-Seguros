using ProvinciaSeguros.Plugins.Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Interfaces
{
    /// <summary>
    /// La interfáz contiene las firmas de las integraciones con los servicios de RECTOR.
    /// </summary>
    public interface IServicioRector
    {
        /// <summary>
        /// Alta de un teléfono en RECTOR. Devuelve ID_RECTOR.
        /// </summary>
        RectorDTO AltaTelefono(IEntidadRector telefono);

        /// <summary>
        /// Alta de un domicilio en RECTOR. Devuelve ID_RECTOR.
        /// </summary>
        RectorDTO AltaDomicilio(IEntidadRector domicilio);

        /// <summary>
        /// Alta de un correo electrónico en RECTOR. Devuelve ID_RECTOR.
        /// </summary>
        RectorDTO AltaCorreoElectronico(IEntidadRector correoElectronico);

        /// <summary>
        /// Alta de una Persona en RECTOR. Devuelve ID_RECTOR.
        /// </summary>
        RectorDTO AltaPersona(IEntidadRector persona);

        /// <summary>
        /// Se modifica la persona en RECTOR.
        /// </summary>
        /// <param name="persona"></param>
        /// <returns></returns>
        RectorDTO ActualizacionPersona(IEntidadRector persona);

        /// <summary>
        /// Método para obtener tokens.
        /// </summary>
        /// <returns></returns>
        string GetToken();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="nombre"></param>
        /// <param name="apellido"></param>
        /// <param name="dni"></param>
        /// <returns></returns>
        ExistePersonaDTO ExistePersona(string nombre, string apellido, string dni);

        /// <summary>
        /// Una vez dado el alta en CRM se informa el Guid a RECTOR.
        /// </summary>
        /// <param name="idRector"></param>
        /// <param name="guid"></param>
        RectorDTO InformarGuid(string idRector, string guid);
    }
}
