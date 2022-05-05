using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Constantes
{
    public static class CamposCorreoElectronico
    {
        // Nombre de la entidad teléfono.
        public static string ENT_CORREOELECTRONICO = "axx_correoelectronico";

        // Campos de la entidad teléfono.
        public static string PERSONAID = "axx_personaid";
        public static string TIPOCORREO = "axx_tipocorreoelectronico";
        public static string IDCORREO = "axx_idcorreoelectronico";
        public static string ESPRINCIPAL = "axx_esprincipal";
        public static string NAME = "axx_name";
        public static string DIRECCION = "axx_correoelectronico";
        public static string GUID_CORREOELECTRONICO = "axx_correoelectronicoid";

        // Valores para el OptionSetValue es principal.
        public static string OPTION_ESPRINCIPAL_SI = "282270001";
        public static string OPTION_ESPRINCIPAL_NO = "282270000";

        public static string LOOKUP_PERSONA = "accounts";
        public static string LOOKUP_TIPOCORREOELECTRONICO = "axx_tipodecorreoelectronicos";
        public static string LOOKUP_CORREOELECTRONICO_RECTOR = "axx_correoelectronicos";
    }
}
