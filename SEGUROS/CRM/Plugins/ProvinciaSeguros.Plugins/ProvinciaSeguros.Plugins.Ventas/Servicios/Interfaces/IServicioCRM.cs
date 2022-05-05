using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Ventas.Servicios
{
    public interface IServicioCRM
    {
        /// <summary>
        /// A partir de un guid de productor devuelve las agendas comerciales disponibles.
        /// </summary>
        /// <param name="entityReference"></param>
        /// <returns></returns>
        List<Entity> ObtenerAgendasComercialesPorProductorExistente(EntityReference entityReference);

        /// <summary>
        /// A partir de un guid de productor, busca las agendas comerciales para el productor.
        /// </summary>
        /// <param name="entityReference"></param>
        /// <returns></returns>
        List<Entity> ObtenerAgendasComercialesPorProductorPotencial(EntityReference entityReference);
    }
}
