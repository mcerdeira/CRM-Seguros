using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Dominio
{
    [DataContract]
    public class TelefonoRector : IEntidadRector
    {
        #region - Atributos privados -

        #endregion - Atributos privados -

        #region - Propiedades públicas -

        // Microsoft recomienda que los nombres de las propiedades empiecen con mayúscula.
        // Cuando transformemos el Json para enviar a RECTOR, el servicio espera los nombres con minúsculas, por eso
        // es que tomé la decisión de empezar con minúscula.
        [DataMember(Name = "axx_Personaid@odata.bind")]
        public string axx_Personaid { get; set; }

        [DataMember]
        public string axx_tipotelefono { get; set; }
        [DataMember]
        public string axx_caracteristica { get; set; }
        [DataMember]
        public string axx_telefononormalizado { get; set; }
        [DataMember]
        public string axx_numero { get; set; }
        [DataMember]
        public string axx_ddn { get; set; }
        [DataMember]
        public string axx_ddi { get; set; }
        [DataMember]
        public string axx_esprincipal { get; set; }
        [DataMember]
        public string axx_name { get; set; }
        [DataMember]
        public string axx_prefijo { get; set; }
        [DataMember]
        public string axx_idtelefono { get; set; }
        [DataMember]
        public string axx_guid { get; set; }
        [DataMember]
        public string axx_usuarioultimamodificacion { get; set; }

        #endregion - Propiedades públicas -

        #region - Métodos públicos -

        public bool EsValido
        {
            get { return Validar(); }
            set { throw new NotImplementedException(); }
        }

        #endregion - Métodos públicos -

        #region - Métodos privados -

        private bool Validar()
        {
            return true;
        }

        #endregion - Métodos privados -
    }
}
