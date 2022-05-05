using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;

namespace ProvinciaSeguros.Plugins.Servicios
{
    public class ServicioCRMMock : IServicioCRM
    {
        public Entity AltaCorreoElectronico(Entity entidadCRM)
        {
            Task.Delay(600);

            return new Entity();
        }

        public Entity AltaDomicilio(Entity entidadCRM)
        {
            Task.Delay(600);

            return new Entity();
        }

        public Entity EsAltaPersona(Entity entidadCRM, bool ForceCreate)
        {
            Task.Delay(600);

            return new Entity();
        }

        public Entity ModificacionPersona(Entity entidadCRM, Entity preImagen)
        {
            Task.Delay(600);

            return new Entity();
        }

        public Entity AltaTelefono(Entity entidadCRM)
        {
            Task.Delay(600);

            return new Entity();
        }

        public void EliminarEntidad(Entity entidadCRM)
        {
            Task.Delay(600);
        }

        public Entity BuscarPersona(Entity persona)
        {
            Task.Delay(500);

            return new Entity(CamposPersona.ENT_PERSONA);
        }

        public bool ExisteTipoCorreoElectronico(Entity entidadCRM, DataCollection<Entity> correosElectronicos)
        {
            Task.Delay(500);

            return true;
        }

        public string ObtenerConfiguracionDesarrollo(string clave)
        {
            if (clave.Equals("POLIZAS_URL"))
            {
                return "https://tkm.provinciaseguros.com.ar:4443/crm/api";
            }

            if (clave.Equals("POLIZAS_USUARIO_SERVICIOS"))
            {
                return "dynamicsprod|dyna80micsprod";
            }

            return "";

        }

        public Entity ObtenerLocalidad(EntityReference guid)
        {
            var localidad = new Entity(CamposLocalidad.ENT_LOCALIDAD, new Guid("099fa45f-98c5-e811-a974-000d3ac1b2cd"));

            localidad.Attributes[CamposLocalidad.CODIGOPOSTAL] = "1428";
            localidad.Attributes[CamposLocalidad.LOCALIDADID] = "Aaaa";

            return localidad;
        }

        public Entity ModificacionDomicilio(Entity domicilio, Entity preImagen)
        {
            throw new NotImplementedException();
        }

        public Entity ModificacionTelefono(Entity telefono, Entity preImagen)
        {
            throw new NotImplementedException();
        }

        public Entity ModificacionCorreoElectronico(Entity correo, Entity preImagen)
        {
            throw new NotImplementedException();
        }

        public string GetUserName(Guid userGuid)
        {
            throw new NotImplementedException();
        }
    }
}
