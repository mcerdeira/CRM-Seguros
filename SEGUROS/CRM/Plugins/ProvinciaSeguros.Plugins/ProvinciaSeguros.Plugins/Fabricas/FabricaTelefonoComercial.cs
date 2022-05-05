using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;

namespace ProvinciaSeguros.Plugins.Fabricas
{
    public class FabricaTelefonoComercial : Fabrica
    {
        public override IEntidadRector Fabricar(Entity entidadCrm, string userMail)
        {
            string tipoTelefono = "282270002";
            string guidPersona = ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.ACCOUNT_ID].ToString().Replace("{", "").Replace("}", ""));

            var telefono = new TelefonoRector();

            telefono.axx_caracteristica = entidadCrm.Contains(CamposPersona.TELEFONOCOMERCIAL_CARACTERISTICA) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TELEFONOCOMERCIAL_CARACTERISTICA]) : "";
            telefono.axx_ddi = entidadCrm.Contains(CamposPersona.TELEFONOCOMERCIAL_DDI) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TELEFONOCOMERCIAL_DDI]) : "";
            telefono.axx_ddn = entidadCrm.Contains(CamposPersona.TELEFONOCOMERCIAL_DDN) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TELEFONOCOMERCIAL_DDN]) : "";
            telefono.axx_esprincipal = entidadCrm.Contains(CamposPersona.TELEFONO_PRINCIPAL) && ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TELEFONO_PRINCIPAL]) == tipoTelefono ? "282270001" : "282270000";
            telefono.axx_name = "Comercial";
            telefono.axx_numero = entidadCrm.Contains(CamposPersona.TELEFONOCOMERCIAL_NUMERO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TELEFONOCOMERCIAL_NUMERO]) : "";
            telefono.axx_prefijo = entidadCrm.Contains(CamposPersona.TELEFONOCOMERCIAL_PREFIJO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TELEFONOCOMERCIAL_PREFIJO]) : "";
            telefono.axx_tipotelefono = tipoTelefono;
            telefono.axx_guid = CamposTelefono.LOOKUP_TELEFONO_RECTOR + "(" + guidPersona + ")C";
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
