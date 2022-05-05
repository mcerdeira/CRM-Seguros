using ProvinciaSeguros.Plugins.Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Servicios
{
    public interface IServicioExcepciones
    {
        /// <summary>
        /// Brinda servicios para atender excepciones a capas superiores.
        /// </summary>
        /// <param name="ex"></param>
        /// <param name="json"></param>
        /// <param name="dto"></param>
        void Atender(Exception ex, string json, RectorDTO dto);
    }
}
