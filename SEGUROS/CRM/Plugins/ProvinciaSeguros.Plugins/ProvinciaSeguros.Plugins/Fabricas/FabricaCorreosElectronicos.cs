using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;

namespace ProvinciaSeguros.Plugins.Fabricas
{
    public class FabricaCorreosElectronicos : Fabrica
    {
        public override IEntidadRector Fabricar(Entity entidadCrm, string usuario)
        {
            var correoElectronico = new CorreoElectronicoRector();

            correoElectronico.axx_Personaid = entidadCrm.Contains(CamposCorreoElectronico.PERSONAID) ? CamposCorreoElectronico.LOOKUP_PERSONA + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposCorreoElectronico.PERSONAID]) + ")" : "";
            correoElectronico.axx_correoelectronico1 = entidadCrm.Contains(CamposCorreoElectronico.DIRECCION) ? ObtenerValorComoString(entidadCrm.Attributes[CamposCorreoElectronico.DIRECCION]) : "";
            correoElectronico.axx_TipoCorreoElectronico = entidadCrm.Contains(CamposCorreoElectronico.TIPOCORREO) ? CamposCorreoElectronico.LOOKUP_TIPOCORREOELECTRONICO + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposCorreoElectronico.TIPOCORREO]) + ")" : "";
            correoElectronico.axx_esprincipal = entidadCrm.Contains(CamposCorreoElectronico.ESPRINCIPAL) ? ObtenerValorComoString(entidadCrm.Attributes[CamposCorreoElectronico.ESPRINCIPAL]) : "";
            correoElectronico.axx_name = entidadCrm.Contains(CamposCorreoElectronico.DIRECCION) ? ObtenerValorComoString(entidadCrm.Attributes[CamposCorreoElectronico.DIRECCION]) : "";
            correoElectronico.axx_guid = CamposCorreoElectronico.ENT_CORREOELECTRONICO + "(" + entidadCrm.Id.ToString() + ")";
            correoElectronico.axx_usuarioultimamodificacion = usuario;

            return correoElectronico;
        }

        public override IEntidadRector Fabricar(Entity entidadCrm)
        {
            throw new System.NotImplementedException();
        }
    }
}
