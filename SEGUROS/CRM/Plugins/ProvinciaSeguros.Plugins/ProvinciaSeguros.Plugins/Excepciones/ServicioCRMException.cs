using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Excepciones
{
    public class ServicioCRMException : Exception
    {
        public ServicioCRMException()
        {
        }

        public ServicioCRMException(string message)
            : base(message)
        {
        }

        public ServicioCRMException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
