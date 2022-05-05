using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Enums;
using ProvinciaSeguros.Plugins.Estrategias;
using ProvinciaSeguros.Plugins.Interfaces;
using ProvinciaSeguros.Plugins.Servicios;

namespace ProvinciaSeguros.Plugins.Fabricas
{
    public class FabricaEstrategias 
    {
        private readonly IServicioCRM _servicioCRM;
        private readonly IServicioRector _servicioRector;
        private readonly string _userMail;
        ITracingService _tracingService;

        public FabricaEstrategias(IServicioCRM servicioCRM, IServicioRector servicioRector, ITracingService tracingService, string userMail)
        {
            _tracingService = tracingService;
            _servicioCRM = servicioCRM;
            _servicioRector = servicioRector;
            _userMail = userMail;
        }

        public IEstrategiaAltaPersona Fabricar(Entity entidadCRM, bool ForceCreate, Entity en)
        {
            // Guardo en CRM.
            var persona = _servicioCRM.EsAltaPersona(entidadCRM, ForceCreate);
            _tracingService.Trace("Busqueda de persona realizada");
            IEstrategiaAltaPersona estrategia = null;

            if (persona.Attributes.Contains(CamposPersona.RAZON_SOCIAL)
                && persona.Attributes[CamposPersona.RAZON_SOCIAL] != null)
            {
                _tracingService.Trace("Encontrada Persona jurídica");
                return new PersonaAltaNormal(_servicioRector, _userMail);
            }
           else if ((entidadCRM.Contains(CamposPersona.NOMBRE) && persona.Attributes[CamposPersona.NOMBRE] != null ) ||
                (entidadCRM.Contains(CamposPersona.APELLIDO) && persona.Attributes[CamposPersona.APELLIDO] != null) ||
                (entidadCRM.Contains(CamposPersona.NUMERO_DOCUMENTO) && persona.Attributes[CamposPersona.NUMERO_DOCUMENTO] != null))
            {

                _tracingService.Trace("Encontrada Persona física");

                string nombre = "";
                string apellido = "";
                string dni = "";

                if(persona.Contains(CamposPersona.NOMBRE)) nombre = persona.Attributes[CamposPersona.NOMBRE].ToString().ToUpper();
                if (persona.Contains(CamposPersona.APELLIDO)) apellido = persona.Attributes[CamposPersona.APELLIDO].ToString().ToUpper();
                if (persona.Contains(CamposPersona.NUMERO_DOCUMENTO)) dni = persona.Attributes[CamposPersona.NUMERO_DOCUMENTO].ToString();

                if (dni == "")
                {
                    dni = en.Attributes[CamposPersona.NUMERO_DOCUMENTO].ToString();
                }

                var existeDTO = _servicioRector.ExistePersona(nombre, apellido, dni);

                _tracingService.Trace("Encontrada Persona física POST");

                switch (existeDTO.EnumPersona)
                {
                    case EnumPersona.ExisteConProblemas:
                        _tracingService.Trace("ExisteConProblemas");
                        estrategia = new ExisteConProblemas(_servicioRector, _userMail);
                        break;
                    case EnumPersona.ExisteEnRector:
                        _tracingService.Trace("AltaPersonaExistente");
                        estrategia = new AltaPersonaExistente(_servicioRector, existeDTO.axx_idrector, _userMail);
                        break;
                    case EnumPersona.NoExisteEnRector:
                        _tracingService.Trace("PersonaAltaNormal");
                        estrategia = new PersonaAltaNormal(_servicioRector, _userMail);
                        break;
                }

            }

            return estrategia;
        }
    }
}
