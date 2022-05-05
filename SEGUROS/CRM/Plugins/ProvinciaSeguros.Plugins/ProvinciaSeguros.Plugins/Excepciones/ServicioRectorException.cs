using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Excepciones
{
    public class ServicioRectorException : Exception
    {
        public ServicioRectorException()
        {
        }

        public ServicioRectorException(string message)
            : base(message)
        {
        }

        public ServicioRectorException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
