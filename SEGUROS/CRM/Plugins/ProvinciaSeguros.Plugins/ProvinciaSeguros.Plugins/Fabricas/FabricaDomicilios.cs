using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Servicios;

namespace ProvinciaSeguros.Plugins.Fabricas
{
    public class FabricaDomicilios : Fabrica
    {
        private IServicioCRM _servicioCRM;

        public FabricaDomicilios(IServicioCRM servicioCRM)
        {
            _servicioCRM = servicioCRM;
        }

        public override IEntidadRector Fabricar(Entity entidadCrm, string usuario)
        {
            var domicilio = new DomicilioRector();

            domicilio.axx_calle = entidadCrm.Contains(CamposDomicilio.CALLE) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.CALLE]) : "";
            domicilio.axx_codigodomicilio = entidadCrm.Contains(CamposDomicilio.CODIGODOMICILIO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.CODIGODOMICILIO]) : "";
            domicilio.axx_domicilionormalizado = entidadCrm.Contains(CamposDomicilio.DOMICILIONORMALIZADO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.DOMICILIONORMALIZADO]) : "";
            domicilio.axx_entrecalle1 = entidadCrm.Contains(CamposDomicilio.ENTRECALLE1) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.ENTRECALLE1]) : "";
            domicilio.axx_entrecalle2 = entidadCrm.Contains(CamposDomicilio.ENTRECALLE2) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.ENTRECALLE2]) : "";
            domicilio.axx_esprincipal = entidadCrm.Contains(CamposDomicilio.ESPRINCIPAL) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.ESPRINCIPAL]) : "";
            domicilio.axx_guid = CamposDomicilio.LOOKUP_DECIMICILIO_RECTOR + "(" + entidadCrm.Id.ToString() + ")";
            domicilio.axx_iddomicilio = entidadCrm.Contains(CamposDomicilio.IDDOMICILIO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.IDDOMICILIO]) : "";
            domicilio.axx_Localidad = entidadCrm.Contains(CamposDomicilio.LOCALIDAD) ? CamposDomicilio.LOOKUP_LOCALIDAD + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.LOCALIDAD]) + ")" : "";
            domicilio.axx_name = entidadCrm.Contains(CamposDomicilio.NAME) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.NAME]) : "";
            domicilio.axx_numero = entidadCrm.Contains(CamposDomicilio.NUMERO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.NUMERO]) : "";
            domicilio.axx_Pais = entidadCrm.Contains(CamposDomicilio.PAIS) ? CamposDomicilio.LOOKUP_PAIS + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.PAIS]) + ")" : "";
            domicilio.axx_Partido = GetPartido(entidadCrm);
            domicilio.axx_PersonaId = entidadCrm.Contains(CamposDomicilio.PERSONAID) ? CamposDomicilio.LOOKUP_PERSONA + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.PERSONAID]) + ")" + "" : "";
            domicilio.axx_piso = entidadCrm.Contains(CamposDomicilio.PISO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.PISO]) : "";
            domicilio.axx_Provincia = entidadCrm.Contains(CamposDomicilio.PROVINCIA) ? CamposDomicilio.LOOKUP_PROVINCIA + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.PROVINCIA]) + ")" : "";
            domicilio.axx_tipodomicilio = entidadCrm.Contains(CamposDomicilio.TIPODOMICILIO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.TIPODOMICILIO]) : "";
            domicilio.axx_departamento = entidadCrm.Contains(CamposDomicilio.DEPARTAMENTO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.DEPARTAMENTO]) : "";
            domicilio.axx_domicilionormalizado = domicilio.axx_calle + " " + domicilio.axx_numero + " " + domicilio.axx_piso + " " + domicilio.axx_departamento;
            domicilio.axx_usuarioultimamodificacion = usuario;

            // Campos provenientes del lookup de localidad.
            var idLocalidad = (entidadCrm.Attributes[CamposDomicilio.LOCALIDAD] as EntityReference);
            var localidad = _servicioCRM.ObtenerLocalidad(idLocalidad);

            domicilio.axx_codigopostal_1 = localidad.Contains(CamposLocalidad.CODIGOPOSTAL) ? ObtenerValorComoString(localidad.Attributes[CamposDomicilio.CODIGOPOSTAL]) : "";
            domicilio.axx_codigoPostal = localidad.Contains(CamposLocalidad.CODIGOPOSTAL) ? CamposLocalidad.LOOKUP_LOCALIDAD + "(" + localidad.Id + ")" : "";

            return domicilio;
        }

        public override IEntidadRector Fabricar(Entity entidadCrm)
        {
            throw new NotImplementedException();
        }

        public string GetPartido(Entity entidadCrm)
        {
            var result = entidadCrm.Contains(CamposDomicilio.PARTIDO) ? CamposDomicilio.LOOKUP_PARTIDO + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposDomicilio.PARTIDO]) + ")" : "";

            if (result.Contains("()")) return "";
            else return result;
        }
    }
}
