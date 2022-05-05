using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ProvinciaSeguros.Plugins.Constantes;
using ProvinciaSeguros.Plugins.Dominio;
using ProvinciaSeguros.Plugins.Fabricas;
using ProvinciaSeguros.Plugins.Servicios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ProvinciaSeguros.Tests
{
    [TestClass]
    public class ServicioRectorTest
    {
        private Entity _parametrizacionDesarrollo;
        private Entity _parametrizacuinUsuarioServicio;
        private Entity _parametrizacionEnvironment;
        private Entity _localidad;
        
        public void Initialize()
        {
            try
            {
                _parametrizacionDesarrollo = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };
                _parametrizacuinUsuarioServicio = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };
                _parametrizacionEnvironment = new Entity(CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO) { Id = Guid.NewGuid() };

                _parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_URL";
                _parametrizacionDesarrollo.Attributes[CamposParametrizacionDesarrollo.VALOR] = "https://tkmt.provinciaseguros.com.ar:5443/crm/api";

                _parametrizacuinUsuarioServicio.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_USUARIO_SERVICIOS";
                _parametrizacuinUsuarioServicio.Attributes[CamposParametrizacionDesarrollo.VALOR] = "dynamicsprod|dyna80micsprod";

                _parametrizacionEnvironment.Attributes[CamposParametrizacionDesarrollo.CLAVE] = "POLIZAS_ENVIRONMENT";
                _parametrizacionEnvironment.Attributes[CamposParametrizacionDesarrollo.VALOR] = "ENVIRONMENT_DESA";

                _localidad = new Entity(CamposLocalidad.ENT_LOCALIDAD, new Guid("099fa45f-98c5-e811-a974-000d3ac1b2cd"));
                _localidad.Attributes[CamposLocalidad.CODIGOPOSTAL] = "1428";
                _localidad.Attributes[CamposLocalidad.LOCALIDADID] = "Aaaa";

            }catch (Exception ex)
            {
                throw ex;
            }
        }

        [TestMethod]
        public void SERVICIORECTOR_hacer_request_deberia_funcionar()
        {
            var jsonDataa = "{" +
                                "\"axx_Actividad@odata.bind\":\"\"," +
                                "\"axx_Nacionalidad@odata.bind\":\"axx_nacionalidads(1413289c-f4b5-e811-a96d-000d3ac1bbe7)\"," +
                                "\"axx_Profesion@odata.bind\":\"axx_profesions(a58d6171-769a-e811-a968-000d3ac1b1e6)\"," +
                                "\"axx_TipoOrganismo@odata.bind\":\"\"," +
                                "\"axx_apellido\":\"gimenez\"," +
                                "\"axx_cuit\":\"20202002008\"," +
                                "\"axx_esproductor\":\"False\"," +
                                "\"axx_estadocivil\":\"282270000\"," +
                                "\"axx_fechanacimiento\":\"10\\/15\\/2018 3:00:00 AM\"," +
                                "\"axx_genero\":\"282270000\"," +
                                "\"axx_guid\":\"account(d70b30b3-f7d5-e811-a974-000d3ac1b1e6)\"," +
                                "\"axx_idrector\":\"\"," +
                                "\"axx_nombre\":\"daniel\"," +
                                "\"axx_numerodocumento\":\"20200200\"," +
                                "\"axx_pep\":\"282270000\"," +
                                "\"axx_razonsocial\":\"\"," +
                                "\"axx_sujetoobligado\":\"282270000\"," +
                                "\"axx_tipodocumento\":\"282270001\"," +
                                "\"axx_tipopersona\":\"282270000\"," +
                                "\"name\":\"daniel gimenez\"," +
                                "\"telephone1\":\"\"" +
                            "}";

        var persona = new PersonaRector();
        //var servicioRector = new ServicioRector(new ServicioCRMMock());
        //var token = servicioRector.GetToken();
        //var result = servicioRector.Post("https://tkmt.provinciaseguros.com.ar:5443/crm/api/personas", jsonDataa, token);

        //Assert.IsTrue(result.Contains("id_rector"));
        //Assert.IsTrue(result.Contains("status_code"));
        //Assert.IsTrue(result.Contains("mensaje_error"));
        }

        [TestMethod]
        public void SERVICIORECTOR_alta_de_un_telefono()
        {
            Initialize();

            var context = new XrmFakedContext();

            Entity entidad = new Entity(CamposTelefono.ENT_TELEFONO, Guid.NewGuid());

            entidad.Attributes[CamposTelefono.NUMERO] = "21312312";
            entidad.Attributes[CamposTelefono.PERSONAID] = new EntityReference("accounts", new Guid("564dc45a-cca0-e811-a96e-000d3ac1bf27"));
            entidad.Attributes[CamposTelefono.TIPOTELEFONO] = CamposTelefono.OPTION_PARTICULAR;
            entidad.Attributes[CamposTelefono.ESPRINCIPAL] = CamposTelefono.OPTION_ESPRINCIPAL_SI;

            context.Initialize(new List<Entity> { _parametrizacionDesarrollo, entidad, _parametrizacuinUsuarioServicio, _parametrizacionEnvironment });

            var fabricaPersonas = new FabricaTelefonos();
            var telefono = fabricaPersonas.Fabricar(entidad);
            //var servicioCRM = new ServicioCRM(context.GetOrganizationService());
            //var servicio = new ServicioRector(servicioCRM);
            //var result = servicio.AltaTelefono(telefono);

            //Assert.IsTrue(!result.Equals(string.Empty));
        }

        [TestMethod]
        public void SERVICIORECTOR_alta_de_un_correo()
        {
            Initialize();

            var context = new XrmFakedContext();

            context.Initialize(new List<Entity> { _parametrizacionDesarrollo, _parametrizacuinUsuarioServicio, _parametrizacionEnvironment });

            Entity entidad = new Entity(CamposCorreoElectronico.ENT_CORREOELECTRONICO, Guid.NewGuid());

            entidad.Attributes[CamposCorreoElectronico.DIRECCION] = "ejemplo@ejemplo1.com.ar";
            entidad.Attributes[CamposCorreoElectronico.PERSONAID] = new EntityReference("accounts", new Guid("564dc45a-cca0-e811-a96e-000d3ac1bf27"));
            entidad.Attributes[CamposCorreoElectronico.TIPOCORREO] = new EntityReference("axx_tipodecorreoelectronico", new Guid("7e7dd563-a386-e811-a961-000d3ac1b201"));
            entidad.Attributes[CamposCorreoElectronico.ESPRINCIPAL] = CamposCorreoElectronico.OPTION_ESPRINCIPAL_NO;

            var fabricaPersonas = new FabricaCorreosElectronicos();

            var correo = fabricaPersonas.Fabricar(entidad);

            //var servicioCRM = new ServicioCRM(context.GetOrganizationService());
            //var servicio = new ServicioRector(servicioCRM);

            //var result = servicio.AltaCorreoElectronico(correo);

            //Assert.IsTrue(!result.Equals(string.Empty));
        }

        [TestMethod]
        public void SERvICIORECTOR_alta_de_un_domicilio()
        {
            Initialize();

            var context = new XrmFakedContext();

            context.Initialize(new List<Entity> { _parametrizacionEnvironment, _parametrizacionDesarrollo, _parametrizacuinUsuarioServicio, _localidad });

            Entity entidad = new Entity(CamposDomicilio.ENT_DOMICILIO);

            entidad.Attributes[CamposDomicilio.CALLE] = "Balcarce";
            entidad.Attributes[CamposDomicilio.PAIS] = new EntityReference("axx_pais", new Guid("9613289c-f4b5-e811-a96d-000d3ac1bbe7"));
            entidad.Attributes[CamposDomicilio.TIPODOMICILIO] = CamposDomicilio.OPTION_DOMICILIO_LEGAL;
            entidad.Attributes[CamposDomicilio.ESPRINCIPAL] = CamposDomicilio.OPTION_ESPRINCIPAL_SI;
            entidad.Attributes[CamposDomicilio.LOCALIDAD] = new EntityReference("axx_localidad", new Guid("099fa45f-98c5-e811-a974-000d3ac1b2cd"));
            entidad.Attributes[CamposDomicilio.CODIGOPOSTAL_1] = new EntityReference("axx_localidad", new Guid("099fa45f-98c5-e811-a974-000d3ac1b2cd"));
            entidad.Attributes[CamposDomicilio.CODIGOPOSTAL] = new EntityReference("axx_localidad", new Guid("099fa45f-98c5-e811-a974-000d3ac1b2cd"));
            entidad.Attributes[CamposDomicilio.PROVINCIA] = new EntityReference("axx_provincia", new Guid("5eafee95-f4b5-e811-a96d-000d3ac1bbe7"));
            entidad.Attributes[CamposDomicilio.PERSONAID] = new EntityReference("accounts", new Guid("9271b75e-97b6-e811-a96e-000d3ac1b8d2"));
            entidad.Attributes[CamposDomicilio.PARTIDO] = new EntityReference("axx_partido", new Guid("3ae2104f-81c5-e811-a974-000d3ac1b2cd"));

            var fabricaDomicilios = new FabricaDomicilios(new ServicioCRMMock());

            var domicilio = fabricaDomicilios.Fabricar(entidad);

            //var servicioCRM = new ServicioCRM(context.GetOrganizationService());
            //var servicio = new ServicioRector(servicioCRM);

            //var result = servicio.AltaDomicilio(domicilio);

            //Assert.IsTrue(!result.Equals(string.Empty));
        }

        [TestMethod]
        public void SERVICIORECTOR_actualizacion_de_una_persona()
        {
            Random rnd = new Random();
            var documento = rnd.Next(11111111, 44444444);

            Initialize();

            var context = new XrmFakedContext();

            context.Initialize(new List<Entity> { _parametrizacuinUsuarioServicio, _parametrizacionEnvironment, _parametrizacionDesarrollo });

            Entity entidad = new Entity(CamposPersona.ENT_PERSONA);

            entidad.Id = new Guid("2e5f01f7-2d7c-461a-9406-7fc4bca10be6");
            entidad.Attributes[CamposPersona.NOMBRE] = "Daniel";
            entidad.Attributes[CamposPersona.APELLIDO] = "Gimenez";
            entidad.Attributes[CamposPersona.PEP] = CamposPersona.OPTION_PEP_SI;
            entidad.Attributes[CamposPersona.TIPO_DOCUMENTO] = CamposPersona.OPTION_TIPODOCUMENTO_DNI;
            entidad.Attributes[CamposPersona.TIPO_PERSONA] = CamposPersona.OPTION_TIPOPERSONA_FISICA;
            entidad.Attributes[CamposPersona.SUJETO_OBLIGADO] = CamposPersona.OPTION_SUJETOOBLIGADO_NO;
            entidad.Attributes[CamposPersona.ES_PRODUCTOR] = CamposPersona.OPTION_ES_PRODUCTOR_SI;
            entidad.Attributes[CamposPersona.NACIONALIDAD] = new EntityReference("axx_nacionalidad", new Guid("1413289c-f4b5-e811-a96d-000d3ac1bbe7"));
            entidad.Attributes[CamposPersona.PROFESION] = new EntityReference("axx_profesion", new Guid("a58d6171-769a-e811-a968-000d3ac1b1e6"));
            entidad.Attributes[CamposPersona.FECHA_NACIMIENO] = "2018-10-09";
            entidad.Attributes[CamposPersona.ESTADO_CIVIL] = CamposPersona.OPTION_ESTADOCIVIL_CASADO;
            entidad.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "33145756";
            entidad.Attributes[CamposPersona.GENERO] = CamposPersona.OPTION_GENERO_MASCULINO;
            entidad.Attributes[CamposPersona.IDRECTOR] = "2797759";
            entidad.Attributes[CamposPersona.NUMERO_DOCUMENTO] = documento.ToString();

            var fabricaPersonas = new FabricaPersonas();
            var persona = fabricaPersonas.Fabricar(entidad);

            //var servicioCRM = new ServicioCRM(context.GetOrganizationService());

            //var servicio = new ServicioRector(servicioCRM);

            //var result = servicio.ActualizacionPersona(persona);

            //Assert.IsTrue(!result.Equals(string.Empty));
        }

        [TestMethod]
        public void SERVICIORECTOR_alta_de_una_persona()
        {
            Initialize();

            var context = new XrmFakedContext();

            Random rnd = new Random();
            var documento = rnd.Next(11111111, 44444444);

            context.Initialize(new List<Entity> { _parametrizacionDesarrollo, _parametrizacionEnvironment, _parametrizacuinUsuarioServicio });

            Entity entidad = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());

            entidad.Attributes[CamposPersona.NOMBRE] = "Daniel";
            entidad.Attributes[CamposPersona.APELLIDO] = "Gimenez";
            entidad.Attributes[CamposPersona.PEP] = CamposPersona.OPTION_PEP_SI;
            entidad.Attributes[CamposPersona.TIPO_DOCUMENTO] = CamposPersona.OPTION_TIPODOCUMENTO_DNI;
            entidad.Attributes[CamposPersona.TIPO_PERSONA] = CamposPersona.OPTION_TIPOPERSONA_FISICA;
            entidad.Attributes[CamposPersona.SUJETO_OBLIGADO] = CamposPersona.OPTION_SUJETOOBLIGADO_NO;
            entidad.Attributes[CamposPersona.ES_PRODUCTOR] = CamposPersona.OPTION_ES_PRODUCTOR_SI;
            entidad.Attributes[CamposPersona.NACIONALIDAD] = new EntityReference("axx_nacionalidad", new Guid("1413289c-f4b5-e811-a96d-000d3ac1bbe7"));
            entidad.Attributes[CamposPersona.PROFESION] = new EntityReference("axx_profesion", new Guid("a58d6171-769a-e811-a968-000d3ac1b1e6"));
            entidad.Attributes[CamposPersona.FECHA_NACIMIENO] = "2018-10-09";
            entidad.Attributes[CamposPersona.ESTADO_CIVIL] = CamposPersona.OPTION_ESTADOCIVIL_CASADO;
            entidad.Attributes[CamposPersona.NUMERO_DOCUMENTO] = documento.ToString();
            entidad.Attributes[CamposPersona.GENERO] = CamposPersona.OPTION_GENERO_MASCULINO;

            var fabricaPersonas = new FabricaPersonas();
            var persona = fabricaPersonas.Fabricar(entidad);

            //var servicioCRM = new ServicioCRM(context.GetOrganizationService());

            //var servicio = new ServicioRector(servicioCRM);

            //var result = servicio.AltaPersona(persona);

            //Assert.IsTrue(!result.Equals(string.Empty));
        }

        [TestMethod]
        public void SERVICIORECTOR_deberia_obtener_token()
        {
            Initialize();

            var context = new XrmFakedContext();

            context.Initialize(new List<Entity> { _parametrizacionDesarrollo, _parametrizacionEnvironment, _parametrizacuinUsuarioServicio });

            Entity entidad = new Entity(CamposPersona.ENT_PERSONA);

            entidad.Attributes[CamposPersona.NOMBRE] = "Daniel";
            entidad.Attributes[CamposPersona.APELLIDO] = "Gimenez";

            var fabricaPersonas = new FabricaPersonas();
            var persona = fabricaPersonas.Fabricar(entidad);

            //var servicioCRM = new ServicioCRM(context.GetOrganizationService());

            //var servicio = new ServicioRector(servicioCRM);

            //var token = servicio.GetToken();

            //Assert.IsNotNull(token);
            //Assert.IsTrue(token != string.Empty);
        }

        [TestMethod]
        public void SERVICIORECTOR_no_deberia_existir()
        {
            Initialize();

            var context = new XrmFakedContext();

            Random rnd = new Random();
            var documento = rnd.Next(11111111, 44444444);

            context.Initialize(new List<Entity> { _parametrizacionDesarrollo, _parametrizacionEnvironment, _parametrizacuinUsuarioServicio });

            Entity entidad = new Entity(CamposPersona.ENT_PERSONA, Guid.NewGuid());

            entidad.Attributes[CamposPersona.NOMBRE] = "Daniel";
            entidad.Attributes[CamposPersona.APELLIDO] = "matias";
            entidad.Attributes[CamposPersona.PEP] = CamposPersona.OPTION_PEP_SI;
            entidad.Attributes[CamposPersona.TIPO_DOCUMENTO] = CamposPersona.OPTION_TIPODOCUMENTO_DNI;
            entidad.Attributes[CamposPersona.TIPO_PERSONA] = CamposPersona.OPTION_TIPOPERSONA_FISICA;
            entidad.Attributes[CamposPersona.SUJETO_OBLIGADO] = CamposPersona.OPTION_SUJETOOBLIGADO_NO;
            entidad.Attributes[CamposPersona.ES_PRODUCTOR] = CamposPersona.OPTION_ES_PRODUCTOR_SI;
            entidad.Attributes[CamposPersona.NACIONALIDAD] = new EntityReference("axx_nacionalidad", new Guid("1413289c-f4b5-e811-a96d-000d3ac1bbe7"));
            entidad.Attributes[CamposPersona.PROFESION] = new EntityReference("axx_profesion", new Guid("a58d6171-769a-e811-a968-000d3ac1b1e6"));
            entidad.Attributes[CamposPersona.FECHA_NACIMIENO] = "2018-10-09";
            entidad.Attributes[CamposPersona.ESTADO_CIVIL] = CamposPersona.OPTION_ESTADOCIVIL_CASADO;

            entidad.Attributes[CamposPersona.NUMERO_DOCUMENTO] = "26718280";
            entidad.Attributes[CamposPersona.GENERO] = CamposPersona.OPTION_GENERO_MASCULINO;

            var fabricaPersonas = new FabricaPersonas();
            var persona = fabricaPersonas.Fabricar(entidad);

            //var servicioCRM = new ServicioCRM(context.GetOrganizationService());

            //var servicio = new ServicioRector(servicioCRM);

            //var result = servicio.ExistePersona("daniel", "matias", "26718280");

            //var fabrica = new FabricaEstrategias(servicioCRM, servicio,"");

            //var estrategia = fabrica.Fabricar(entidad);

            //Assert.Equals("AltaPersonaNormal", nameof(result));
        }
    }
}
