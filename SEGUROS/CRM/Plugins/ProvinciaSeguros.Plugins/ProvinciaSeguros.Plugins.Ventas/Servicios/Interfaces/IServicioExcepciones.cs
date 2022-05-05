using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Ventas.Servicios
{
    public interface IServicioExcepciones
    {
        /// <summary>
        /// Atiende las excepciones que suceden dentro del plugin.
        /// </summary>
        /// <param name="ex"></param>
        void Atender(Exception ex);
    }
}
