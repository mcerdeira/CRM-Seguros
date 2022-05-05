using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Dominio
{
    [DataContract]
    public class DomicilioRector: IEntidadRector
    {
        [DataMember]
        public string axx_name;

        [DataMember(Name = "axx_Partido@odata.bind")]
        public string axx_Partido;

        [DataMember(Name = "axx_Localidad@odata.bind")]
        public string axx_Localidad;

        [DataMember(Name = "axx_CodigoPostal@odata.bind")]
        public string axx_codigoPostal;

        [DataMember(Name = "axx_Provincia@odata.bind")]
        public string axx_Provincia;

        [DataMember(Name = "axx_Pais@odata.bind")]
        public string axx_Pais;

        [DataMember(Name = "axx_PersonaId@odata.bind")]
        public string axx_PersonaId;

        [DataMember]
        public string axx_domicilionormalizado;

        [DataMember]
        public string axx_esprincipal;

        [DataMember]
        public string axx_piso;

        [DataMember]
        public string axx_codigopostal_1;

        [DataMember]
        public string axx_departamento;

        [DataMember]
        public string axx_codigodomicilio;

        [DataMember]
        public string axx_tipodomicilio;

        [DataMember]
        public string axx_calle;

        [DataMember]
        public string axx_numero;

        [DataMember]
        public string axx_entrecalle2;

        [DataMember]
        public string axx_entrecalle1;

        [DataMember]
        public string axx_iddomicilio;

        [DataMember]
        public string axx_guid;
        [DataMember]
        public string axx_usuarioultimamodificacion { get; set; }
        public bool EsValido { get { return true; } set { } }
    }
}
