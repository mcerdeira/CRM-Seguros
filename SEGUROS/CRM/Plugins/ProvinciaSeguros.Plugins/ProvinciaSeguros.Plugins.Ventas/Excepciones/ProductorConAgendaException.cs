using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Ventas.Excepciones
{
    public class ProductorExistenteConAgendaException: Exception
    {
        public ProductorExistenteConAgendaException()
        {
        }

        public ProductorExistenteConAgendaException(string message)
            : base(message)
        {
        }

        public ProductorExistenteConAgendaException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
