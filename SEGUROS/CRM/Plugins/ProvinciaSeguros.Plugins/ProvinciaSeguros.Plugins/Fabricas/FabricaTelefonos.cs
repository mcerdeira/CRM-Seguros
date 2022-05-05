using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;

namespace ProvinciaSeguros.Plugins.Fabricas
{
    public class FabricaTelefonos : Fabrica
    {
        public override IEntidadRector Fabricar(Entity entidadCrm, string userMail)
        {
            var telefono = new TelefonoRector();

            telefono.axx_caracteristica = entidadCrm.Contains(CamposTelefono.CARACTERISTICA) ? ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.CARACTERISTICA]) : "";
            telefono.axx_ddi = entidadCrm.Contains(CamposTelefono.DDI) ? ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.DDI]) : "";
            telefono.axx_ddn = entidadCrm.Contains(CamposTelefono.DDN) ? ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.DDN]) : "";
            telefono.axx_esprincipal = entidadCrm.Contains(CamposTelefono.ESPRINCIPAL) ? ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.ESPRINCIPAL]) : "";
            telefono.axx_name = entidadCrm.Contains(CamposTelefono.NAME) ? ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.NAME]) : "";
            telefono.axx_numero = entidadCrm.Contains(CamposTelefono.NUMERO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.NUMERO]) : "";
            telefono.axx_Personaid = entidadCrm.Contains(CamposTelefono.PERSONAID) ? CamposTelefono.LOOKUP_PERSONA + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.PERSONAID]) + ")" : "";
            telefono.axx_prefijo = entidadCrm.Contains(CamposTelefono.PREFIJO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.PREFIJO]) : "";
            telefono.axx_tipotelefono = entidadCrm.Contains(CamposTelefono.TIPOTELEFONO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposTelefono.TIPOTELEFONO]) : "";
            telefono.axx_guid = CamposTelefono.LOOKUP_TELEFONO_RECTOR + "(" + entidadCrm.Id + ")";
            telefono.axx_telefononormalizado = telefono.axx_ddi + telefono.axx_ddn + telefono.axx_caracteristica + telefono.axx_numero;
            telefono.axx_idtelefono = entidadCrm.Contains(CamposTelefono.IDTELEFONO) ? ObtenerValorComoString(entidadCrm[CamposTelefono.IDTELEFONO]) : "";
            telefono.axx_usuarioultimamodificacion = userMail;

            telefono.axx_telefononormalizado += entidadCrm.Contains(CamposTelefono.INTERNO) ? " int. " + ObtenerValorComoString(entidadCrm[CamposTelefono.INTERNO]) : "";

            return telefono;
        }

        public override IEntidadRector Fabricar(Entity entidadCrm)
        {
            throw new System.NotImplementedException();
        }
    }
}
