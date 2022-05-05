using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Dominio
{
    [DataContract]
    public class PersonaRector : IEntidadRector
    {
        #region - Propiedades -

        public bool EsValido { get { return true;  } set { } }

        // Microsoft recomienda que los nombres de las propiedades empiecen con mayúscula.
        // Cuando transformemos el Json para enviar a RECTOR, el servicio espera los nombres con minúsculas, por eso
        // es que tomé la decisión de empezar con minúscula.
        [DataMember]
        public string axx_sujetoobligado { get; set; }
        [DataMember]
        public string name { get; set; }
        //[DataMember]
        public string statecode { get; set; }
        [DataMember]
        public string axx_cuit { get; set; }
        [DataMember]
        public string axx_esproductor { get; set; }
        [DataMember(Name = "axx_Actividad@odata.bind")]
        public string axx_Actividad  { get; set; }
        [DataMember(Name = "axx_Nacionalidad@odata.bind")]
        public string axx_Nacionalidad  { get; set; }
        [DataMember(Name = "axx_Profesion@odata.bind")]
        public string axx_Profesion  { get; set; }
        [DataMember(Name = "axx_TipoOrganismo@odata.bind")]
        public string axx_TipoOrganismo  { get; set; }
        [DataMember]
        public string axx_razonsocial { get; set; }
        [DataMember]
        public string telephone1 { get; set; }
        [DataMember]
        public string axx_idrector { get; set; }
        [DataMember]
        public string axx_pep { get; set; }
        [DataMember]
        public string axx_tipodocumento { get; set; }
        [DataMember]
        public string axx_tipopersona { get; set; }
        [DataMember]
        public string axx_apellido { get; set; }
        [DataMember]
        public string axx_fechanacimiento { get; set; }
        [DataMember(Name ="axx_genero")]
        public string axx_genero { get; set; }
        [DataMember]
        public string axx_estadocivil { get; set; }
        [DataMember]
        public string axx_nombre  { get; set; }
        [DataMember]
        public string axx_guid { get; set; }
        [DataMember]
        public string axx_numerodocumento { get; set; }
        [DataMember]
        public string axx_usuarioultimamodificacion { get; set; }
        [DataMember]
        public string axx_existeenrector { get; set; }
        //[DataMember]
        //public string modifiedby { get; set; }
        //[DataMember]
        //public string modifiedon { get; set; }
        //modifiedby
        //modifiedon
        //createdby
        //createdon
        #endregion - Propiedades -

    }
}
