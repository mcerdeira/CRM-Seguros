using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Estrategias
{
    public interface IEstrategiaAltaPersona
    {
        /// <summary>
        /// Ejecución de la estrategia.
        /// </summary>
        /// <param name="p"></param>
        PersonaRector Ejecutar(Entity personal);
    }
}
