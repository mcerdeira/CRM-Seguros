using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Fabricas
{
    public class FabricaPersonas : Fabrica
    {
        public override IEntidadRector Fabricar(Entity entidadCrm, string usuario)
        {
            var persona = new PersonaRector();

            persona.axx_apellido = entidadCrm.Contains(CamposPersona.APELLIDO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.APELLIDO]).ToUpper() : "";
            persona.axx_Actividad = entidadCrm.Contains(CamposPersona.ACTIVIDAD) ? CamposPersona.LOOKUP_ACTIVIDADES + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.ACTIVIDAD]) + ")" : "";
            persona.axx_cuit = entidadCrm.Contains(CamposPersona.CUIT) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.CUIT]) : "";
            persona.axx_esproductor = entidadCrm.Contains(CamposPersona.ES_PRODUCTOR) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.ES_PRODUCTOR]) : "";
            persona.axx_estadocivil = entidadCrm.Contains(CamposPersona.ESTADO_CIVIL) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.ESTADO_CIVIL]) : "";
            persona.axx_fechanacimiento = entidadCrm.Contains(CamposPersona.FECHA_NACIMIENO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.FECHA_NACIMIENO]) : "";
            persona.axx_genero = entidadCrm.Contains(CamposPersona.GENERO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.GENERO]) : "";
            persona.axx_guid = CamposPersona.LOOKUP_PERSONA_RECTOR + "(" +  entidadCrm.Id.ToString() + ")";
            persona.axx_idrector = entidadCrm.Contains(CamposPersona.IDRECTOR) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.IDRECTOR]) : "";
            persona.axx_Nacionalidad = entidadCrm.Contains(CamposPersona.NACIONALIDAD) ? CamposPersona.LOOKUP_NACIONALIDAD + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.NACIONALIDAD]) + ")" : "";
            persona.axx_nombre = entidadCrm.Contains(CamposPersona.NOMBRE) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.NOMBRE]).ToUpper() : "";
            persona.axx_numerodocumento = entidadCrm.Contains(CamposPersona.NUMERO_DOCUMENTO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.NUMERO_DOCUMENTO]) : "";
            persona.axx_pep = entidadCrm.Contains(CamposPersona.PEP) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.PEP]) : "";
            persona.axx_Profesion = entidadCrm.Contains(CamposPersona.PROFESION) ? CamposPersona.LOOKUP_PROFESION + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.PROFESION]) + ")" : "";
            persona.axx_razonsocial = entidadCrm.Contains(CamposPersona.RAZON_SOCIAL) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.RAZON_SOCIAL]).ToUpper() : "";
            persona.axx_sujetoobligado = entidadCrm.Contains(CamposPersona.SUJETO_OBLIGADO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.SUJETO_OBLIGADO]) : "";
            persona.axx_tipodocumento = entidadCrm.Contains(CamposPersona.TIPO_DOCUMENTO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TIPO_DOCUMENTO]) : "";
            persona.axx_TipoOrganismo = entidadCrm.Contains(CamposPersona.TIPO_ORGANISMO) ? CamposPersona.LOOKUP_TIPOORGANISMO + "(" + ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TIPO_ORGANISMO]) + ")" : "";
            persona.axx_tipopersona = entidadCrm.Contains(CamposPersona.TIPO_PERSONA) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TIPO_PERSONA]) : "";
            persona.axx_usuarioultimamodificacion = usuario;
            persona.name = entidadCrm.Contains(CamposPersona.NAME) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.NAME]).ToUpper() : "";
            persona.statecode = entidadCrm.Contains(CamposPersona.STATE_CODE) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.STATE_CODE]) : "";
            persona.telephone1 = entidadCrm.Contains(CamposPersona.TELEFONO) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.TELEFONO]) : "";

            persona.name = persona.axx_tipopersona == CamposPersona.OPTION_TIPOPERSONA_FISICA ? persona.axx_nombre + " " + persona.axx_apellido : persona.axx_razonsocial;

            // En RECTOR no existe el género OTRO. Se deinió que si en CRM hay OTRO, a RECTOR debemos pasar el género masculino.
            persona.axx_genero = persona.axx_genero == CamposPersona.OPTION_GENERO_OTRO ? CamposPersona.OPTION_GENERO_MASCULINO : persona.axx_genero;

            // En CRM no se dan de alta productores.
            persona.axx_esproductor = "false";

            persona.axx_existeenrector = entidadCrm.Attributes.Contains(CamposPersona.EXISTERECTOR) ? ObtenerValorComoString(entidadCrm.Attributes[CamposPersona.EXISTERECTOR]) : "";
            
            return persona;
        }

        public override IEntidadRector Fabricar(Entity entidadCrm)
        {
            throw new NotImplementedException();
        }
    }
}
