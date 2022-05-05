using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Fabricas;
using ProvinciaSeguros.Plugins.Interfaces;
using ProvinciaSeguros.Plugins.Servicios;

namespace ProvinciaSeguros.Plugins.Estrategias
{
    public class AltaPersonaExistente : IEstrategiaAltaPersona
    {
        private readonly IServicioRector _servicioRector;
        private readonly IServicioValidaciones _servicioValidaciones;
        private readonly Fabrica _fabrica;
        private readonly string _idRector;
        private readonly string _userEmail;

        public AltaPersonaExistente(IServicioRector servicioRector, string idRector, string userEmail)
        {
            _idRector = idRector;
            _servicioRector = servicioRector;
            _fabrica = new FabricaPersonas();
            _servicioValidaciones = new ServicioValidaciones();
            _userEmail = userEmail;
        }

        public PersonaRector Ejecutar(Entity persona)
        {
            persona.Attributes.Add(CamposPersona.EXISTERECTOR, false);

            var personaRector = _fabrica.Fabricar(persona, _userEmail) as PersonaRector;

            _servicioValidaciones.ValidarPersona(personaRector as PersonaRector);

            var dto = _servicioRector.InformarGuid(_idRector, personaRector.axx_guid);

            if (dto.status_code.Equals(RectorConstants.STATUS_OK))
            {
                persona.Attributes[CamposPersona.IDRECTOR] = dto.id_rector;

                return personaRector as PersonaRector;
            }

            else throw new Exception(dto.mensaje_error);

        }
    }
}
