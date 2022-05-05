using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Dominio
{
    [DataContract]
    public class RectorDTO
    {
        [DataMember]
        public string id_rector { get; set; }
        [DataMember]
        public string status_code { get; set; }
        [DataMember]
        public string mensaje_error { get; set; }
    }
}
