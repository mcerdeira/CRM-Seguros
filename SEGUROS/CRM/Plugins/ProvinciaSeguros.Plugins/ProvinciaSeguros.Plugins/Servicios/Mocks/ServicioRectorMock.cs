using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Servicios
{
    class ServicioRectorMock : IServicioRector

    {
        public RectorDTO AltaCorreoElectronico(IEntidadRector correoElectronico)
        {
            Task.Delay(300);

            var dto = new RectorDTO();

            dto.id_rector = "111";

            return dto;
        }

        public RectorDTO AltaDomicilio(IEntidadRector domicilio)
        {
            Task.Delay(300).Wait();

            var dto = new RectorDTO();

            dto.id_rector = "111";

            return dto;
        }

        public RectorDTO AltaPersona(IEntidadRector persona)
        {
            Task.Delay(300).Wait();

            var dto = new RectorDTO();

            dto.id_rector = "111";

            return dto;
        }

        public RectorDTO AltaTelefono(IEntidadRector telefono)
        {
            Task.Delay(300).Wait();

            var dto = new RectorDTO();

            dto.id_rector = "111";

            return dto;
        }

        public RectorDTO ActualizacionPersona(IEntidadRector persona)
        {
            Task.Delay(300).Wait();

            var dto = new RectorDTO();

            dto.id_rector = "111";

            return dto;
        }

        public string GetToken()
        {
            Task.Delay(300).Wait();

            return "Bearer salkfjsañdlakfjlñdksfjñlskdajfñlksdajsdfañlkfjds";
        }

        public bool ExistePersona(string nombre, string apellido, string dni)
        {
            throw new NotImplementedException();
        }

        public RectorDTO InformarGuid(string idRector, Guid guid)
        {
            throw new NotImplementedException();
        }

        ExistePersonaDTO IServicioRector.ExistePersona(string nombre, string apellido, string dni)
        {
            throw new NotImplementedException();
        }

        public RectorDTO InformarGuid(string idRector, string guid)
        {
            throw new NotImplementedException();
        }
    }
}
