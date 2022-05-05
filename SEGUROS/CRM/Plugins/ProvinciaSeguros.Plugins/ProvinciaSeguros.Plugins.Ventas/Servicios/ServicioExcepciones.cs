using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Ventas.Excepciones;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Ventas.Servicios
{
    public class ServicioExcepciones : IServicioExcepciones
    {
        public void Atender(Exception ex)
        {
            if (ex is ProductorExistenteConAgendaException)
            {
                throw new InvalidPluginExecutionException("El productor existente ya tiene una agenda comercial, por favor utilice la existente.");
            }

            if (ex is ProductorPotencialConAgendaException)
            {
                throw new InvalidPluginExecutionException("El productor / cliente potencial ya tiene una agenda comercial, por favor utilice la existente.");
            }

            throw new InvalidPluginExecutionException("Error técnico, por favor contacte al administrador.");
        }
    }
}
