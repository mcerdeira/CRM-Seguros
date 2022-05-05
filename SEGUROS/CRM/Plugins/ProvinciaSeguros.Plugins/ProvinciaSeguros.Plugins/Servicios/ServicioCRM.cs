using System;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ProvinciaSeguros.Plugins.Constantes;
using System.Linq;
using Microsoft.Xrm.Sdk.Messages;
using ProvinciaSeguros.Plugins.Excepciones;
using System.Collections.Generic;
using ProvinciaSeguros.Plugins.Enums;

namespace ProvinciaSeguros.Plugins.Servicios
{
    public class ServicioCRM : IServicioCRM
    {
        #region - Atributos privados -

        private IOrganizationService _organizationService;
        ITracingService _tracingService;

        #endregion - Atributos privados -

        #region - Métodos públicos -

        public ServicioCRM(IOrganizationService organizationService, ITracingService tracingService)
        {
            _organizationService = organizationService;
            _tracingService = tracingService;
        }

        public string GetUserName(Guid userGuid)
        {

            try
            {
                var user = _organizationService.Retrieve("systemuser", userGuid, new ColumnSet("domainname"));

                if (user.Attributes["domainname"] == null) return string.Empty;

                return user.Attributes["domainname"].ToString();
            }
            catch (System.ServiceModel.FaultException)
            {
                return string.Empty;
            }

        }

        public Entity AltaTelefono(Entity entidadCRM)
        {
            try
            {
                BuscarPersona(((EntityReference)entidadCRM.Attributes[CamposTelefono.PERSONAID]).Id);

                var personaId = entidadCRM.Attributes[CamposTelefono.PERSONAID] as EntityReference;

                EntityCollection telefonos = ObtenerTelefonosPorPersona(personaId);

                var telefonoNormalizado = (entidadCRM.Attributes.Contains(CamposTelefono.DDI) ? entidadCRM.Attributes[CamposTelefono.DDI].ToString() + " " : " ") +
                    (entidadCRM.Attributes.Contains(CamposTelefono.DDN) ? entidadCRM.Attributes[CamposTelefono.DDN].ToString() + " " : " ") +
                    (entidadCRM.Attributes.Contains(CamposTelefono.CARACTERISTICA) ? entidadCRM.Attributes[CamposTelefono.CARACTERISTICA].ToString() + " " : " ") +
                    (entidadCRM.Attributes.Contains(CamposTelefono.NUMERO) ? entidadCRM.Attributes[CamposTelefono.NUMERO].ToString() + " " : " ");


                if (entidadCRM.Contains(CamposTelefono.TELEFONONORMALIZADO)) entidadCRM.Attributes[CamposTelefono.TELEFONONORMALIZADO] = telefonoNormalizado;
                else entidadCRM.Attributes.Add(CamposTelefono.TELEFONONORMALIZADO, telefonoNormalizado);

                var existeTipoTelefonoParaLaPersona = ExisteTipo(entidadCRM, telefonos.Entities, CamposTelefono.TIPOTELEFONO);

                switch (existeTipoTelefonoParaLaPersona)
                {
                    case EnumExisteTipo.Exite: throw new NegocioException("El tipo de teléfono ingresado ya existe para la persona, por favor modifique el existente.");
                    case EnumExisteTipo.Vacio: throw new NegocioException("Para crear un teléfono, debe asignar un tipo de teléfono al ya existente para la persona.");
                }

                var telefonoPrincipal = ExisteTelefonoPrincipal(entidadCRM, telefonos.Entities);

                var hayPrincipal = telefonoPrincipal != null;
                var elActualEsPrincipal = (entidadCRM.Attributes[CamposTelefono.ESPRINCIPAL] as OptionSetValue).Value.ToString().Equals(CamposTelefono.OPTION_ESPRINCIPAL_SI);

                if ((hayPrincipal) && (elActualEsPrincipal))
                {
                    throw new NegocioException("Ya existe un teléfono marcado como principal, por favor verifique el teléfono principal.");
                }

                return entidadCRM;

            } catch (Exception ex)
            {
                throw new ServicioCRMException("AltaTelefono", ex);
            }
        }

        public Entity AltaCorreoElectronico(Entity entidadCRM)
        {
            try
            {
                BuscarPersona(((EntityReference)entidadCRM.Attributes[CamposCorreoElectronico.PERSONAID]).Id);

                var personaId = entidadCRM.Attributes[CamposTelefono.PERSONAID] as EntityReference;

                EntityCollection correosElectronicos = ObtenerCorreosElectronicosPorPersona(personaId);

                var hayPrincipal = ExisteCorreoElectronicoPrincipal(entidadCRM, correosElectronicos.Entities);

                if (hayPrincipal && (entidadCRM.Attributes[CamposCorreoElectronico.ESPRINCIPAL] as OptionSetValue).Value.ToString().Equals(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI))
                {
                    throw new NegocioException("Ya existe un correo electronico marcado como principal.");
                }

                var existeTipoCorreoParaLaPersona = ExisteTipo(entidadCRM, correosElectronicos.Entities, CamposCorreoElectronico.TIPOCORREO);

                switch (existeTipoCorreoParaLaPersona)
                {
                    case EnumExisteTipo.Exite: throw new NegocioException("El tipo de correo ingresado ya existe para la persona, por favor modifique el existente.");
                    case EnumExisteTipo.Vacio: throw new NegocioException("Para crear un correo, debe asignar un tipo de correo al ya existente para la persona.");
                }

                return entidadCRM;

            } catch (Exception ex)
            {
                throw new ServicioCRMException("AltaCorreoElectronico", ex);
            }
        }

        public Entity AltaDomicilio(Entity entidadCRM)
        {
            try
            {
                BuscarPersona(((EntityReference)entidadCRM.Attributes[CamposDomicilio.PERSONAID]).Id);

                var personaId = entidadCRM.Attributes[CamposDomicilio.PERSONAID] as EntityReference;

                EntityCollection domicilios = ObtenerDomicilioPorPersona(personaId);

                entidadCRM.Attributes.Add(CamposDomicilio.DOMICILIONORMALIZADO,
                    (entidadCRM.Attributes.Contains(CamposDomicilio.CALLE) ? entidadCRM.Attributes[CamposDomicilio.CALLE].ToString() + " " : " ") +
                    (entidadCRM.Attributes.Contains(CamposDomicilio.NUMERO) ? entidadCRM.Attributes[CamposDomicilio.NUMERO].ToString() + " " : " ") +
                    (entidadCRM.Attributes.Contains(CamposDomicilio.PISO) ? entidadCRM.Attributes[CamposDomicilio.PISO].ToString() + " " : " ") +
                    (entidadCRM.Attributes.Contains(CamposDomicilio.DEPARTAMENTO) ? entidadCRM.Attributes[CamposDomicilio.DEPARTAMENTO].ToString() + " " : " ")
                    );

                var hayPrincipal = ExisteDomicilioPrincipal(entidadCRM, domicilios.Entities.ToList());

                if ((hayPrincipal) && (entidadCRM.Attributes[CamposDomicilio.ESPRINCIPAL] as OptionSetValue).Value.ToString().Equals(CamposDomicilio.OPTION_ESPRINCIPAL_SI))
                {
                    throw new NegocioException("Ya existe un domicilio marcado como principal.");
                }

                var existeTipoDomicilioParaLaPersona = ExisteTipo(entidadCRM, domicilios.Entities, CamposDomicilio.TIPODOMICILIO);

                switch (existeTipoDomicilioParaLaPersona)
                {
                    case EnumExisteTipo.Exite: throw new NegocioException("El tipo de domicilio ingresado ya existe para la persona, por favor modifique el existente.");
                    case EnumExisteTipo.Vacio: throw new NegocioException("Para crear un domicilio, debe asignar un tipo de domicilio al ya existente para la persona.");
                }

                return entidadCRM;

            } catch (Exception ex)
            {
                throw new ServicioCRMException("AltaDomicilio", ex);
            }
        }

        public Entity EsAltaPersona(Entity persona, bool ForceCreate)
        {
            try
            {

                var resultado = BuscarPersona(persona);
               // _tracingService.Trace("Despues de buscar persona" );

                if (resultado != null && !ForceCreate) throw new NegocioException("La persona ya existe en CRM.");

                //_tracingService.Trace("No Existe tal persona");

                if (persona != null)
                {
                    _tracingService.Trace("La persona no es nula");
                    if (!persona.Attributes.Contains(CamposPersona.NAME) )
                    {
                        _tracingService.Trace("Antes de concatenar");

                        persona.Attributes.Add(CamposPersona.NAME, ConcatenarNombrePersona(persona));
                    }
                    //_tracingService.Trace("Persona buscada " + persona.Attributes[CamposPersona.NAME].ToString());
                }
                return persona;

            } catch (Exception ex)
            {
                //_tracingService.Trace("Error :" + ex.Message);

                throw new ServicioCRMException("AltaPersona", ex);
            }
        }

        public Entity ModificacionDomicilio(Entity domicilio, Entity preImagen)
        {
            try
            {
                BuscarPersona(((EntityReference)preImagen.Attributes[CamposDomicilio.PERSONAID]).Id);

                EntityCollection domicilios = ObtenerDomicilioPorPersona(((EntityReference)preImagen.Attributes[CamposDomicilio.PERSONAID]));
                
                var tienePrincipal = domicilios.Entities.Where(d =>
                                        ((OptionSetValue)d.Attributes[CamposDomicilio.ESPRINCIPAL]).Value.ToString() == CamposDomicilio.OPTION_ESPRINCIPAL_SI
                                        ).FirstOrDefault();

                if (domicilio.Attributes.Contains(CamposDomicilio.ESPRINCIPAL))
                { 
                    if (((OptionSetValue)domicilio[CamposDomicilio.ESPRINCIPAL]).Value.ToString() == CamposDomicilio.OPTION_ESPRINCIPAL_SI
                        && tienePrincipal != null)
                    {
                        if (tienePrincipal.Id != preImagen.Id)
                        {
                            throw new NegocioException("Ya existe un domicilio marcado como principal.");
                        }
                    }
                }

                Entity nuevoDomicilio = GenerarNuevaEntidad(CamposDomicilio.ENT_DOMICILIO, domicilio, preImagen);

                var existeTipoDomicilioParaLaPersona = ExisteTipo(domicilio, domicilios.Entities, CamposDomicilio.TIPODOMICILIO);

                switch (existeTipoDomicilioParaLaPersona)
                {
                    case EnumExisteTipo.Exite: throw new NegocioException("El tipo de domicilio ingresado ya existe para la persona, por favor modifique el existente.");
                }

                return nuevoDomicilio;

            } catch (Exception ex)
            {
                throw new ServicioCRMException("ModificacionDomicilio", ex);
            }
        }

        public Entity ModificacionTelefono(Entity telefono, Entity preImagen)
        {

            try
            {
                BuscarPersona(((EntityReference)preImagen.Attributes[CamposTelefono.PERSONAID]).Id);

                EntityCollection telefonos = ObtenerTelefonosPorPersona(((EntityReference)preImagen.Attributes[CamposTelefono.PERSONAID]));

                var tienePrincipal = telefonos.Entities.Where(t => 
                                        ((OptionSetValue)t.Attributes[CamposTelefono.ESPRINCIPAL]).Value.ToString() == CamposTelefono.OPTION_ESPRINCIPAL_SI
                                        ).FirstOrDefault();

                if(telefono.Attributes.Contains(CamposTelefono.ESPRINCIPAL))
                { 
                    if (((OptionSetValue)telefono[CamposTelefono.ESPRINCIPAL]).Value.ToString() == CamposTelefono.OPTION_ESPRINCIPAL_SI
                        && tienePrincipal != null)
                    {
                        if (tienePrincipal.Id != preImagen.Id)
                        {
                            throw new NegocioException("Ya existe un teléfono marcado como principal, por favor verifique el teléfono principal.");
                        }
                    }
                }

                Entity nuevoTelefono = GenerarNuevaEntidad(CamposTelefono.ENT_TELEFONO, telefono, preImagen);
                
                var tipoTelefono = ExisteTipo(telefono, telefonos.Entities, CamposTelefono.TIPOTELEFONO);

                if (tipoTelefono == EnumExisteTipo.Exite)
                {
                    throw new NegocioException("El tipo de teléfono ingresado ya existe para la persona, por favor modifique el existente.");
                }

                return nuevoTelefono;

            } catch (Exception ex)
            {
                throw new ServicioCRMException("ModificacionTelefono", ex);
            }
        }

        public Entity ModificacionCorreoElectronico(Entity correo, Entity preImagen)
        {
            try
            {
                BuscarPersona(((EntityReference)preImagen.Attributes[CamposCorreoElectronico.PERSONAID]).Id);

                EntityCollection correos = ObtenerCorreosElectronicosPorPersona(((EntityReference)preImagen.Attributes[CamposCorreoElectronico.PERSONAID]));

                var tienePrincipal = correos.Entities.Where(c =>
                                        ((OptionSetValue)c.Attributes[CamposCorreoElectronico.ESPRINCIPAL]).Value.ToString() == CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI
                                        ).FirstOrDefault();

                if(correo.Attributes.Contains(CamposCorreoElectronico.ESPRINCIPAL))
                { 
                    if (((OptionSetValue)correo[CamposCorreoElectronico.ESPRINCIPAL]).Value.ToString() == CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI
                        && tienePrincipal != null)
                    {
                        if (tienePrincipal.Id != preImagen.Id)
                        {
                            throw new NegocioException("Ya existe un correo electronico marcado como principal.");
                        }
                    }
                }

                Entity nuevoCorreo = GenerarNuevaEntidad(CamposCorreoElectronico.ENT_CORREOELECTRONICO, correo, preImagen);

                var existeTipoCorreoParaLaPersona = ExisteTipo(correo, correos.Entities, CamposCorreoElectronico.TIPOCORREO);

                switch (existeTipoCorreoParaLaPersona)
                {
                    case EnumExisteTipo.Exite: throw new NegocioException("El tipo de correo ingresado ya existe para la persona, por favor modifique el existente.");
                }


                return nuevoCorreo;

            } catch (Exception ex)
            {
                throw new ServicioCRMException("ModificacionCorreoElectronico", ex);
            }
        }

        public Entity ModificacionPersona(Entity persona, Entity preImagen)
        {
            try
            {

                var resultado = BuscarPersona(persona);
                if (resultado != null) throw new NegocioException("La persona ya existe en CRM.");

                Entity personaModificada = new Entity(CamposPersona.ENT_PERSONA);

                foreach (string attribute in persona.Attributes.Keys)
                {
                    personaModificada.Attributes.Add(attribute, persona.Attributes[attribute]);
                }

                foreach (string attribute in preImagen.Attributes.Keys)
                {
                    if (personaModificada.Attributes.Contains(attribute))
                    {
                        continue;
                    }
                    personaModificada.Attributes.Add(attribute, preImagen.Attributes[attribute]);
                }

                personaModificada.Attributes[CamposPersona.NAME] = ConcatenarNombrePersona(personaModificada);
                personaModificada.Id = persona.Id;

                return personaModificada;

            } catch (Exception ex)
            {
                throw new ServicioCRMException("ModificacionPersona", ex);
            }
        }

        public Entity ObtenerLocalidad(EntityReference guid)
        {
            try { 

                return ObtenerLocalidadCRM(guid);

            } catch (Exception ex)
            {
                throw new ServicioCRMException("ModificacionPersona", ex);
            }
        }

        public void EliminarEntidad(Entity entidadCRM)
        {
            try {
                
                _organizationService.Delete(entidadCRM.LogicalName, entidadCRM.Id);

            } catch (Exception ex)
            {
                throw new ServicioCRMException("EliminarEntidad", ex);
            }
        }

        #endregion - Métodos públicos -

        #region - Métodos privados -
        
        private Entity GenerarNuevaEntidad(string entityName, Entity oldEntity, Entity preImage)
        {
            Entity newEntity = new Entity(entityName);

            foreach (string attribute in oldEntity.Attributes.Keys)
            {
                newEntity.Attributes.Add(attribute, oldEntity.Attributes[attribute]);
            }

            foreach (string attribute in preImage.Attributes.Keys)
            {
                if (newEntity.Attributes.Contains(attribute))
                {
                    continue;
                }
                newEntity.Attributes.Add(attribute, preImage.Attributes[attribute]);
            }

            newEntity.Id = oldEntity.Id;

            return newEntity;
        }

        private Entity BuscarTelefono(Entity telefono)
        {
            string fetch = "<fetch top = \"1\" >" +
                              "<entity name =\"" + CamposTelefono.ENT_TELEFONO + "\" >" +
                                    "<all-attributes />" +
                                     "<filter>" +
                                       "<condition attribute=\"" + CamposTelefono.GUID_TELEFONO + "\" operator=\"eq\" value=\"" + telefono.Id + "\" />" +
                                    "</filter>" +
                                "</entity>" +
                           "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch)).Entities.FirstOrDefault();
        }

        private Entity BuscarCorreo(Entity correo)
        {
            string fetch = "<fetch top = \"1\" >" +
                              "<entity name =\"" + CamposCorreoElectronico.ENT_CORREOELECTRONICO + "\" >" +
                                    "<all-attributes />" +
                                     "<filter>" +
                                       "<condition attribute=\"" + CamposCorreoElectronico.GUID_CORREOELECTRONICO + "\" operator=\"eq\" value=\"" + correo.Id + "\" />" +
                                    "</filter>" +
                                "</entity>" +
                           "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch)).Entities.FirstOrDefault();
        }

        private Entity BuscarDomicilio(Entity domicilio)
        {
            string fetch = "<fetch top = \"1\" >" +
                              "<entity name =\"" + CamposDomicilio.ENT_DOMICILIO + "\" >" +
                                    "<all-attributes />" +
                                     "<filter>" +
                                       "<condition attribute=\"" + CamposDomicilio.GUID_DOMICILIO + "\" operator=\"eq\" value=\"" + domicilio.Id + "\" />" +
                                    "</filter>" +
                                "</entity>" +
                           "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch)).Entities.FirstOrDefault();
        }

        private EnumExisteTipo ExisteTipo(Entity entidadCRM, DataCollection<Entity> listEntidades, String campo)
        {
            if (listEntidades == null) return EnumExisteTipo.Ok;

            if(entidadCRM.Attributes.Contains(campo))
            {
                foreach (Entity t in listEntidades)
                {
                    if(!t.Attributes.Contains(campo))
                    {
                        return EnumExisteTipo.Vacio;
                    }
                    else if(t.Attributes[campo] == null)
                    {
                        return EnumExisteTipo.Vacio;
                    }
                    else
                    {
                        if (entidadCRM.LogicalName.Equals(CamposCorreoElectronico.ENT_CORREOELECTRONICO))
                        {
                            var tipoCorreo = (entidadCRM.Attributes[campo] as EntityReference).Id;

                            if((t.Attributes[campo] as EntityReference).Id == tipoCorreo)
                            {
                                return EnumExisteTipo.Exite;
                            }
                        }
                        else
                        {
                            var tipoTelDir = (entidadCRM.Attributes[campo] as OptionSetValue).Value;

                            if (((OptionSetValue)t.Attributes[campo]).Value == tipoTelDir && t.Id != entidadCRM.Id)
                            {
                                return EnumExisteTipo.Exite;
                            }
                        }
                    }

                }
            }
            return EnumExisteTipo.Ok;
        }

        private EntityCollection ObtenerTelefonosPorPersona(EntityReference personaId)
        {
            string fetch = "<fetch top = \"50\" >" +
                              "<entity name =\"" + CamposTelefono.ENT_TELEFONO + "\" >" +
                                    "<all-attributes />" +
                                     "<filter>" +
                                            "<condition attribute=\"" + CamposTelefono.PERSONAID + "\" operator=\"eq\" value=\"" + personaId.Id + "\" />" +
                                        "</filter>" +
                                "</entity>" +
                           "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch));
        }

        private Entity ObtenerLocalidadCRM(EntityReference localidadId)
        {
            string fetch = "<fetch top=\"1\">" +
                                "<entity name=\"" + CamposLocalidad.ENT_LOCALIDAD + "\">" +
                                    "<filter>" +
                                        "<condition attribute=\"" + CamposLocalidad.LOCALIDADID + "\" operator=\"eq\" value=\"" + localidadId.Id + "\"/>" +
                                    "</filter>" +
                                "</entity>" +
                            "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch)).Entities.FirstOrDefault();
        }

        private EntityCollection ObtenerDomicilioPorPersona(EntityReference personaId)
        {
            string fetch = "<fetch top = \"50\" >" +
                              "<entity name =\"" + CamposDomicilio.ENT_DOMICILIO + "\" >" +
                                    "<all-attributes />" +
                                     "<filter>" +
                                       "<condition attribute=\"" + CamposDomicilio.PERSONAID + "\" operator=\"eq\" value=\"" + personaId.Id + "\" />" +
                                    "</filter>" +
                                "</entity>" +
                           "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch));
        }

        private bool ExisteDomicilioPrincipal(Entity domicilioNuevo, List<Entity> domicilios)
        {
            var domicilioExistente = domicilios.Where(t => (t.Attributes[CamposTelefono.ESPRINCIPAL] as OptionSetValue)
                                                   .Value
                                                   .ToString()
                                                   .Equals(CamposDomicilio.OPTION_ESPRINCIPAL_SI) &&
                                                   t.Id != domicilioNuevo.Id).ToList().FirstOrDefault();

            return domicilioExistente != null;
        }

        private Entity ExisteTelefonoPrincipal(Entity telefonoNuevo, DataCollection<Entity> telefonos)
        {

            var telefonoExistente = telefonos.Where(t => (t.Attributes[CamposTelefono.ESPRINCIPAL] as OptionSetValue)
                                                    .Value
                                                    .ToString()
                                                    .Equals(CamposTelefono.OPTION_ESPRINCIPAL_SI) && 
                                                    t.Id != telefonoNuevo.Id).ToList().FirstOrDefault();

            return telefonoExistente;
        }

        private EntityCollection ObtenerCorreosElectronicosPorPersona(EntityReference personaId)
        {
            string fetch = "<fetch top = \"50\" >" +
                              "<entity name =\"" + CamposCorreoElectronico.ENT_CORREOELECTRONICO + "\" >" +
                                    "<all-attributes />" +
                                     "<filter>" +
                                       "<condition attribute=\"" + CamposCorreoElectronico.PERSONAID + "\" operator=\"eq\" value=\"" + personaId.Id + "\" />" +
                                    "</filter>" +
                                "</entity>" +
                           "</fetch>";

            return _organizationService.RetrieveMultiple(new FetchExpression(fetch));
        }

        private bool ExisteCorreoElectronicoPrincipal(Entity cElectronicoNuevo, DataCollection<Entity> cElectronicos)
        {

            var cElectronicoExistente = cElectronicos.Where(t => 
                (t.Attributes[CamposCorreoElectronico.ESPRINCIPAL] as OptionSetValue).Value.ToString().Equals(CamposCorreoElectronico.OPTION_ESPRINCIPAL_SI) &&
                                                    t.Id != cElectronicoNuevo.Id).ToList().FirstOrDefault();

            return cElectronicoExistente != null;
        }

        public Entity BuscarPersona(Entity persona)
        {
            // Verificacion de persona natural
            if (persona.Attributes.Contains(CamposPersona.NUMERO_DOCUMENTO)
                && persona.Attributes.Contains(CamposPersona.NOMBRE)
                && persona.Attributes.Contains(CamposPersona.APELLIDO))
            {

                var documento = persona.Attributes[CamposPersona.NUMERO_DOCUMENTO] != null ? persona.Attributes[CamposPersona.NUMERO_DOCUMENTO] as string : "";
                var nombre = persona.Attributes[CamposPersona.NOMBRE] != null ? persona.Attributes[CamposPersona.NOMBRE] as string : "";
                var apellido = persona.Attributes[CamposPersona.APELLIDO] != null ? persona.Attributes[CamposPersona.APELLIDO] as string : "";

                //_tracingService.Trace("Busca persona física: " + documento.ToString() + " " + nombre.ToString() + " " + apellido.ToString());

                var condicionDocumento = new ConditionExpression();
                condicionDocumento.AttributeName = CamposPersona.NUMERO_DOCUMENTO;
                condicionDocumento.Operator = ConditionOperator.Equal;
                condicionDocumento.Values.Add(documento);

                var condicionNombre = new ConditionExpression();
                condicionNombre.AttributeName = CamposPersona.NOMBRE;
                condicionNombre.Operator = ConditionOperator.Equal;
                condicionNombre.Values.Add(nombre);

                var condicionApellido = new ConditionExpression();
                condicionApellido.AttributeName = CamposPersona.APELLIDO;
                condicionApellido.Operator = ConditionOperator.Equal;
                condicionApellido.Values.Add(apellido);

                var filtro = new FilterExpression();

                filtro.Conditions.Add(condicionApellido);
                filtro.Conditions.Add(condicionDocumento);
                filtro.Conditions.Add(condicionNombre);

                QueryExpression query = new QueryExpression(CamposPersona.ENT_PERSONA);
                query.ColumnSet.AddColumns(CamposPersona.NOMBRE);
                query.Criteria.AddFilter(filtro);
                //_tracingService.Trace("query completado: " + query.ToString());

                EntityCollection results = new EntityCollection();
                try
                {
                    results = _organizationService.RetrieveMultiple(query);
                }
                catch (Exception ex)
                {
                    _tracingService.Trace("Error al recuperar persona: " + ex.Message);
                    throw;
                } 
                //string txt = (results == null ? "result Nulo" : (results.Entities.Count==0 ? "Count=0" : "Con datos"));
                //_tracingService.Trace("Persona: " + txt);

                if (results == null || results.Entities.Count == 0)
                    return null;

                //_tracingService.Trace("devolviendo persona");


                return results.Entities.FirstOrDefault();
            }
            // Verificcion de persona juridica
            else if (persona.Attributes.Contains(CamposPersona.RAZON_SOCIAL) && persona.Attributes.Contains(CamposPersona.CUIT))
            {
                var razonSocial = persona.Attributes[CamposPersona.RAZON_SOCIAL] != null ? persona.Attributes[CamposPersona.RAZON_SOCIAL] as string : "";
                var cuit = persona.Attributes[CamposPersona.CUIT] != null ? persona.Attributes[CamposPersona.CUIT] as string : "";

                var condicionRazonSocial = new ConditionExpression();
                condicionRazonSocial.AttributeName = CamposPersona.RAZON_SOCIAL;
                condicionRazonSocial.Operator = ConditionOperator.Equal;
                condicionRazonSocial.Values.Add(razonSocial);

                var condicionCuit = new ConditionExpression();
                condicionCuit.AttributeName = CamposPersona.CUIT;
                condicionCuit.Operator = ConditionOperator.Equal;
                condicionCuit.Values.Add(cuit);

                var filtro = new FilterExpression();

                filtro.Conditions.Add(condicionRazonSocial);
                filtro.Conditions.Add(condicionCuit);

                var query = new QueryExpression(CamposPersona.ENT_PERSONA);
                query.ColumnSet.AddColumns(CamposPersona.RAZON_SOCIAL);
                query.Criteria.AddFilter(filtro);

                var results = _organizationService.RetrieveMultiple(query);

                return results.Entities.FirstOrDefault();
            }
            return null;
        }

        private void BuscarPersona(Guid guid)
        {
            var persona = _organizationService.Retrieve(CamposPersona.ENT_PERSONA, guid, new ColumnSet(true));

            if (persona.Attributes.Contains(CamposPersona.ES_PRODUCTOR))
            {
                if (persona[CamposPersona.ES_PRODUCTOR].ToString().ToUpper() == CamposPersona.OPTION_ES_PRODUCTOR_SI.ToUpper())
                {
                    throw new NegocioException("No se pueden modificar los datos de contacto de un productor.");
                }
            }
        }

        public string ObtenerConfiguracionDesarrollo(string clave)
        {
            string fetch = "<fetch top = \"50\" >" +
                              "<entity name =\"" + CamposParametrizacionDesarrollo.ENT_PARAMETRIZACIONDESARROLLO + "\" >" +
                                    "<all-attributes />" +
                                     "<filter>" +
                                       "<condition attribute=\"" + CamposParametrizacionDesarrollo.CLAVE + "\" operator=\"eq\" value=\"" + clave + "\" />" +
                                    "</filter>" +
                                "</entity>" +
                           "</fetch>";


            var result = _organizationService.RetrieveMultiple(new FetchExpression(fetch));

            if (result == null ||
                result.Entities.Count == 0 ||
                result.Entities[0].Attributes[CamposParametrizacionDesarrollo.VALOR] == null)
                return string.Empty;

            return result.Entities[0].Attributes[CamposParametrizacionDesarrollo.VALOR] as string;

        }

        private string ConcatenarNombrePersona(Entity persona)
        {
            //_tracingService.Trace("Concatenar");

            string rtn = string.Empty;
            // Si la persona es juridica
            if (persona.Attributes.Contains(CamposPersona.RAZON_SOCIAL)
                && persona.Attributes[CamposPersona.RAZON_SOCIAL] != null)
            {
                // _tracingService.Trace("Concatenar Nombre Persona jurídica");
                rtn = persona.Attributes[CamposPersona.RAZON_SOCIAL].ToString().ToUpper();
            }
            else   // Si la persona es natural
            {
                //_tracingService.Trace("Concatenar Nombre Persona física");
                rtn = persona.Attributes.Contains(CamposPersona.APELLIDO)
                    && persona.Attributes[CamposPersona.APELLIDO] != null
                    ? persona.Attributes[CamposPersona.APELLIDO].ToString().ToUpper() + " "
                    : string.Empty;

                rtn += persona.Attributes.Contains(CamposPersona.NOMBRE)
                      && persona.Attributes[CamposPersona.NOMBRE] != null
                      ? persona.Attributes[CamposPersona.NOMBRE].ToString().ToUpper()
                      : string.Empty;
            }

            return rtn;
        }

        private void ActualizarIdRector(string entidad, string campo, Guid id)
        {
            string idRector = ""; // Aca busco el valor de rector para la entidad solicitada

            Entity entidadCRM = new Entity(entidad);
            entidadCRM.Id = id;
            entidadCRM.Attributes[campo] = idRector;

            _organizationService.Update(entidadCRM);
        }
        
        #endregion - Métodos privados -
    }
}
