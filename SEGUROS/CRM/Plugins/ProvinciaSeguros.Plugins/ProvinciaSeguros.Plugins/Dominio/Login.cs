using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Plugins.Dominio
{
    [DataContract]
    public class LoginRector
    {
        [DataMember]
        public string password;

        [DataMember]
        public string username;
    }
}
