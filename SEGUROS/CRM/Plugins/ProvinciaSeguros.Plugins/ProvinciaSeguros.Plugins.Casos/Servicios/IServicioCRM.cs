using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Casos.Servicios
{
    /// <summary>
    /// Interfáz que contiene todas las firmas relacionadas a interacciones con CRM.
    /// </summary>
    public interface IServicioCRM
    {
        /// <summary>
        /// Devuelve los correos asociados a la persona
        /// </summary>
        /// <param name="personaId"></param>
        /// <returns></returns>
        EntityCollection ObtenerCorreos(Guid personaId);

        /// <summary>
        /// Actualiza el campo EmailAdress1 de la persona
        /// </summary>
        /// <param name="personaId"></param>
        /// <param name="correo"></param>
        void ActualizarEmailAdress(Guid personaId, string correo);

        /// <summary>
        /// Obtiene el EmailAdress1 de la persona
        /// </summary>
        /// <param name="PersonaId"></param>
        /// <returns></returns>
        string ObtenerEmailAdress(Guid PersonaId);
    }
}
