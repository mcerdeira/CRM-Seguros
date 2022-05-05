using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Excepciones
{
    public class ErrorDeSerializacionException: Exception
    {
        public ErrorDeSerializacionException()
        {
        }

        public ErrorDeSerializacionException(string message)
            : base(message)
        {
        }

        public ErrorDeSerializacionException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
