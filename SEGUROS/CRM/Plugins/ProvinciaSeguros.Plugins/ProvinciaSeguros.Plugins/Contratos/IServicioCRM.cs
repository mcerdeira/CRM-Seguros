using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Servicios
{
    /// <summary>
    /// Interfáz que contiene todas las firmas relacionadas a interacciones con CRM.
    /// </summary>
    public interface IServicioCRM
    {
        /// <summary>
        /// Alta o modificación de un teléfono según corresponda:
        /// </summary>
        /// <param name="entidadCRM"></param>
        /// <returns></returns>
        Entity AltaTelefono(Entity entidadCRM);

        /// <summary>
        /// Alta o modificación de un correo electóronico según corresponda.
        /// </summary>
        /// <param name="entidadCRM"></param>
        /// <returns></returns>
        Entity AltaCorreoElectronico(Entity entidadCRM);

        /// <summary>
        /// Alta o modificación de un domicilio según corresponda.
        /// </summary>
        /// <param name="entidadCRM"></param>
        /// <returns></returns>
        Entity AltaDomicilio(Entity entidadCRM);

        /// <summary>
        /// Alta de una persona según corresponda.
        /// </summary>
        /// <param name="entidadCRM"></param>
        /// <returns></returns>
        Entity EsAltaPersona(Entity entidadCRM, bool ForceCreate);
        
        /// <summary>
        /// Modificiacion de una persona según corresponda.
        /// </summary>
        /// <param name="entidadCRM"></param>
        /// <returns></returns>
        Entity ModificacionPersona(Entity entidadCRM, Entity preImagen);

        /// <summary>
        /// Modificación de domicilio según corresponda.
        /// </summary>
        /// <param name="domicilio"></param>
        /// <param name="preImagen"></param>
        /// <returns></returns>
        Entity ModificacionDomicilio(Entity domicilio, Entity preImagen);

        /// <summary>
        /// Modificación de teléfono según corresponda.
        /// </summary>
        /// <param name="telefono"></param>
        /// <param name="preImagen"></param>
        /// <returns></returns>
        Entity ModificacionTelefono(Entity telefono, Entity preImagen);

        /// <summary>
        /// Modificación de correo electrónico según corresponda.
        /// </summary>
        /// <param name="correo"></param>
        /// <param name="preImagen"></param>
        /// <returns></returns>
        Entity ModificacionCorreoElectronico(Entity correo, Entity preImagen);

        /// <summary>
        /// Elimina la entidad. Es utilizado en caso de falla en rector.
        /// </summary>
        /// <param name="entidadCRM"></param>
        /// <returns></returns>
        void EliminarEntidad(Entity entidadCRM);

        /// <summary>
        /// A partir de un apellido y un documento, busca una persona.
        /// </summary>
        /// <param name="nombre"></param>
        /// <param name="apellido"></param>
        /// <param name="documento"></param>
        /// <returns></returns>
        Entity BuscarPersona(Entity persona);

        /// <summary>
        /// A partir de una clave obtiene el valor de la configuración desarrollo.
        /// </summary>
        /// <param name="clave"></param>
        /// <returns></returns>
        string ObtenerConfiguracionDesarrollo(string clave);

        /// <summary>
        /// A partir de un ID de localidad se obtiene la entidad propiamente dicha.
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        Entity ObtenerLocalidad(EntityReference guid);

        /// <summary>
        /// A partir del guid de un usuario se obtiene el nombre.
        /// </summary>
        /// <param name="userGuid"></param>
        /// <returns></returns>
        string GetUserName(Guid userGuid);
    }
}
