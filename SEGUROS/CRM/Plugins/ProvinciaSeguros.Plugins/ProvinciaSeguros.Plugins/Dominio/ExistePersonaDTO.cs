using ProvinciaSeguros.Plugins.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Dominio
{
    [DataContract]
    public class ExistePersonaDTO
    {
        [DataMember]
        public string axx_sujetoobligado { get; set; }
        [DataMember]
        public string name { get; set; }
        [DataMember]
        public string statecode { get; set; }
        [DataMember]
        public string axx_cuit { get; set; }
        [DataMember]
        public string axx_esproductor { get; set; }
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
        [DataMember]
        public string axx_genero { get; set; }
        [DataMember]
        public string axx_estadocivil { get; set; }
        [DataMember]
        public string axx_nombre { get; set; }
        [DataMember]
        public string axx_numerodocumento { get; set; }
        [DataMember]
        public string axx_existeenrector { get; set; }
        [DataMember(Name = "axx_Nacionalidad@odata.bind")]
        public string axx_Nacionalidad { get; set; }
        [DataMember(Name = "axx_Profesion@odata.bind")]
        public string axx_Profesion { get; set; }
        public EnumPersona EnumPersona {get;set;}
    }
}
