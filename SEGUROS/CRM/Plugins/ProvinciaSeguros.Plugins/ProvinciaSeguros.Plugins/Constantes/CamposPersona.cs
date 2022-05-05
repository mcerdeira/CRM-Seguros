using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Constantes
{
    public static class CamposPersona
    {
        // Nombre de la entidad teléfono.
        public static string ENT_PERSONA = "account";
        public static string LOOKUP_NACIONALIDAD = "axx_nacionalidads";
        public static string LOOKUP_ACTIVIDADES = "axx_actividads";
        public static string LOOKUP_PROFESION = "axx_profesions";
        public static string LOOKUP_TIPOORGANISMO = "axx_organismosoficialeses";
        public static string LOOKUP_PERSONA_RECTOR = "accounts";

        // Campos de la persona.
        public static string ACCOUNT_ID = "accountid";
        public static string IDRECTOR = "axx_idrector";
        public static string FECHA_NACIMIENO = "axx_fechanacimiento";
        public static string NUMERO_DOCUMENTO = "axx_numerodocumento";
        public static string SUJETO_OBLIGADO = "axx_sujetoobligado";
        public static string NAME = "name";
        public static string STATE_CODE = "statecode";
        public static string CUIT = "axx_cuit";
        public static string ES_PRODUCTOR = "axx_esproductor";
        public static string ACTIVIDAD = "axx_actividad";
        public static string NACIONALIDAD = "axx_nacionalidad";
        public static string PROFESION = "axx_profesion";
        public static string TIPO_ORGANISMO = "axx_TipoOrganismo";
        public static string RAZON_SOCIAL = "axx_razonsocial";
        public static string TELEFONO = "telephone1";
        public static string PEP = "axx_pep";
        public static string TIPO_DOCUMENTO = "axx_tipodocumento";
        public static string TIPO_PERSONA = "axx_tipopersona";
        public static string APELLIDO = "axx_apellido";
        public static string GENERO = "axx_genero";
        public static string ESTADO_CIVIL = "axx_estadocivil";
        public static string NOMBRE = "axx_nombre";
        public static string EMAILADDRESS1 = "emailaddress1";
        public static string EXISTERECTOR = "axx_existeenrector";
        public static string MODIFIEDBY = "modifiedby";
        public static string MODIFIEDON = "modifiedon";
        public static string CANCELARECTOR = "axx_cancelarector";

        public static string EXISTERECTOR_TRUE = "True";
        public static string EXISTERECTOR_FALSE = "False";
        // Valores para el OptionSetValue sujeto obligado.
        public static string OPTION_SUJETOOBLIGADO_SI = "282270000";
        public static string OPTION_SUJETOOBLIGADO_NO = "282270001";
        public static string OPTION_SUJETOOBLIGADO_NOSABE = "282270002";

        // Valores para el OptionSetValue tipo de documento
        public static string OPTION_TIPODOCUMENTO_CI = "282270000";
        public static string OPTION_TIPODOCUMENTO_DNI = "282270001";
        public static string OPTION_TIPODOCUMENTO_LC = "282270002";
        public static string OPTION_TIPODOCUMENTO_LE = "282270003";
        public static string OPTION_TIPODOCUMENTO_PA = "282270004";
        
        // Valores para el OptionSetValue tipo persona.
        public static string OPTION_TIPOPERSONA_FISICA = "282270000";
        public static string OPTION_TIPOPERSONA_JURUDICA = "282270001";

        // Valores para el OptionSetValue género.
        public static string OPTION_GENERO_MASCULINO = "282270000";
        public static string OPTION_GENERO_FEMENINO = "282270001";
        public static string OPTION_GENERO_OTRO = "282270002";

        // Valores para el OptionSetValue pepe.
        public static string OPTION_PEP_SI = "282270000";
        public static string OPTION_PEP_NO = "282270001";
        public static string OPTION_PEP_NOPRESENTAFORMULARIO = "282270002";

        // Valores para el OptionSetValue estado civíl.
        public static string OPTION_ESTADOCIVIL_CASADO = "282270000";
        public static string OPTION_ESTADOCIVIL_DIVORCIADO = "282270001";
        public static string OPTION_ESTADOCIVIL_SOLTERO = "282270002";
        public static string OPTION_ESTADOCIVIL_VIUDO = "282270003";
        public static string OPTION_ESTADOCIVIL_OTRO = "282270004";

        public static string OPTION_ES_PRODUCTOR_SI = "true";
        public static string OPTION_ES_PRODUCTOR_NO = "false";

        //Valores para los campos telefónicos
        public static string CELULAR_CARACTERISTICA = "axx_celular_caracteristica";
        public static string CELULAR_TELEFONONORMALIZADO = "axx_Celular"; 
        public static string CELULAR_NUMERO = "axx_celular_numero";
        public static string CELULAR_DDN = "axx_celular_ddn";
        public static string CELULAR_DDI = "axx_celular_guid";
        public static string CELULAR_PREFIJO = "axx_celular_prefijo";
        public static string CELULAR_IDTELEFONO = "axx_celular_idtelefono";


        public static string TELEPHONE1_CARACTERISTICA = "axx_telephone1_caracteristica";
        public static string TELEPHONE1_TELEFONONORMALIZADO = "Telephone1";
        public static string TELEPHONE1_NUMERO = "axx_telephone1_numero";
        public static string TELEPHONE1_DDN = "axx_telephone1_ddn";
        public static string TELEPHONE1_DDI = "axx_telephone1_ddi";
        public static string TELEPHONE1_PREFIJO = "axx_telephone1_prefijo";
        public static string TELEPHONE1_IDTELEFONO = "axx_telephone1_idtelefono";


        public static string TELEFONOCOMERCIAL_CARACTERISTICA = "axx_telefonocomercial_caracteristica";
        public static string TELEFONOCOMERCIAL_TELEFONONORMALIZADO = "axx_TelefonoComercial";
        public static string TELEFONOCOMERCIAL_NUMERO = "axx_telefonocomercial_numero";
        public static string TELEFONOCOMERCIAL_DDN = "axx_telefonocomercial_ddn";
        public static string TELEFONOCOMERCIAL_DDI = "axx_telefonocomercial_ddi";
        public static string TELEFONOCOMERCIAL_PREFIJO = "axx_telefonocomercial_prefijo";
        public static string TELEFONOCOMERCIAL_IDTELEFONO = "axx_telefonocomercial_idtelefono"; 

        public static string TELEFONO_PRINCIPAL = "axx_telefonoprincipal";
    }
}
        