using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Constantes
{
    public static class CamposTelefono
    {
        // Nombre de la entidad teléfono.
        public static string ENT_TELEFONO = "axx_telefono";

        // Campos de la entidad teléfono.
        public static string PERSONAID = "axx_personaid";
        public static string TIPOTELEFONO = "axx_tipotelefono";
        public static string CARACTERISTICA = "axx_caracteristica";
        public static string TELEFONONORMALIZADO = "axx_telefononormalizado";
        public static string NUMERO = "axx_numero";
        public static string DDN = "axx_ddn";
        public static string DDI = "axx_ddi";
        public static string ESPRINCIPAL = "axx_esprincipal";
        public static string NAME = "axx_name";
        public static string PREFIJO = "axx_prefijo";
        public static string IDTELEFONO = "axx_idtelefono";
        public static string GUID_TELEFONO = "axx_telefonoid";
        public static string INTERNO = "axx_interno";

        // Valores para el OptionSetValue es principal.
        public static string OPTION_ESPRINCIPAL_SI = "282270001";
        public static string OPTION_ESPRINCIPAL_NO = "282270000";

        // Valores para el OptionSetValue es principal.
        public static string OPTION_MOVIL = "282270000";
        public static string OPTION_PARTICULAR = "282270001";
        public static string OPTION_COMERCIAL = "282270002";

        public static string LOOKUP_PERSONA = "accounts";
        public static string LOOKUP_TELEFONO_RECTOR = "axx_telefonos";
    }
}
