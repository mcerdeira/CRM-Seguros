using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Ventas.Excepciones
{
    public class ProductorPotencialConAgendaException: Exception
    {
        public ProductorPotencialConAgendaException()
        {
        }

        public ProductorPotencialConAgendaException(string message)
            : base(message)
        {
        }

        public ProductorPotencialConAgendaException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
