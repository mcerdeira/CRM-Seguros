using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Dominio
{
    [DataContract]
    public class CorreoElectronicoRector : IEntidadRector
    {
        #region - Atributos privados -

        #endregion - Atributos privados -

        #region - Propiedades públicas -

        // Microsoft recomienda que los nombres de las propiedades empiecen con mayúscula.
        // Cuando transformemos el Json para enviar a RECTOR, el servicio espera los nombres con minúsculas, por eso
        // es que tomé la decisión de empezar con minúscula.
        [DataMember(Name = "axx_PersonaId@odata.bind")]
        public string axx_Personaid { get; set; }
        [DataMember]
        public string axx_correoelectronico1 { get; set; }
        [DataMember(Name = "axx_TipoCorreoElectronico@odata.bind")]
        public string axx_TipoCorreoElectronico { get; set; }
        [DataMember]
        public string axx_esprincipal { get; set; }
        [DataMember]
        public string axx_name { get; set; }
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
