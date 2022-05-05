using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Excepciones
{
    public class ErrorDeServicioException : Exception
    {
        public ErrorDeServicioException()
        {
        }

        public ErrorDeServicioException(string message)
            : base(message)
        {
        }

        public ErrorDeServicioException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
