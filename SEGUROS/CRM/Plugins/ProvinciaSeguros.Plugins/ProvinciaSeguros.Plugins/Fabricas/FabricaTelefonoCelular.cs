using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;

namespace ProvinciaSeguros.Plugins.Fabricas
{
    public class FabricaTelefonoCelular : Fabrica
    {
        public override IEntidadRector Fabricar(Entity entidadCrm, string userMail)
        {
            string tipoTelefono = "282270000";
            string guidPersona = ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.ACCOUNT_ID].ToString().Replace("{", "").Replace("}", ""));

            var telefono = new TelefonoRector();

            telefono.axx_caracteristica = entidadCrm.Contains(CamposPersona.CELULAR_CARACTERISTICA) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.CELULAR_CARACTERISTICA]) : "";
            telefono.axx_ddi = entidadCrm.Contains(CamposPersona.CELULAR_DDI) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.CELULAR_DDI]) : "";
            telefono.axx_ddn = entidadCrm.Contains(CamposPersona.CELULAR_DDN) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.CELULAR_DDN]) : "";
            telefono.axx_esprincipal = entidadCrm.Contains(CamposPersona.TELEFONO_PRINCIPAL) && ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TELEFONO_PRINCIPAL]) == tipoTelefono ? "282270001" : "282270000";
            telefono.axx_name = "Movil";
            telefono.axx_numero = entidadCrm.Contains(CamposPersona.CELULAR_NUMERO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.CELULAR_NUMERO]) : "";
            telefono.axx_prefijo = entidadCrm.Contains(CamposPersona.CELULAR_PREFIJO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.CELULAR_PREFIJO]) : "";
            telefono.axx_tipotelefono = tipoTelefono;
            telefono.axx_guid = CamposTelefono.LOOKUP_TELEFONO_RECTOR + "(" + guidPersona + ")M";
            telefono.axx_telefononormalizado = telefono.axx_ddi + telefono.axx_ddn + telefono.axx_caracteristica + telefono.axx_numero;
            telefono.axx_Personaid = CamposTelefono.LOOKUP_PERSONA + "(" + guidPersona + ")";

            telefono.axx_usuarioultimamodificacion = userMail;

            return telefono;
        }

        public override IEntidadRector Fabricar(Entity entidadCrm)
        {
            throw new System.NotImplementedException();
        }
    }
}
