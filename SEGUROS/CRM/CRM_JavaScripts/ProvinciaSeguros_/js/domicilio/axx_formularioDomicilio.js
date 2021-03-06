var ES_PRINCIPAL = "282270001";

inicializarFormularioDomicilio = function(executionContext){

}

function llenarCamposAPartirDeLocalidad(executionContext){

    var formContext = executionContext.getFormContext();

    if(formContext.getAttribute("axx_localidad").getValue() == null){

        formContext.getAttribute("axx_partido").setValue(null);
        formContext.getAttribute("axx_provincia").setValue(null);
        formContext.getAttribute("axx_pais").setValue(null);
        formContext.getAttribute("axx_calle").setValue(null);
        formContext.ui.controls.get("axx_partido").setVisible(true);
        formContext.ui.controls.get("axx_calle").setDisabled(false);
        formContext.getAttribute("axx_partido").setRequiredLevel("required");
        return;
    }
    
    var formContext = executionContext.getFormContext();
    var localidadString = formContext.getAttribute("axx_localidad").getValue()[0].id;
    var localidadGuid = localidadString.substring(1, localidadString.length-1);
    var localidadName = formContext.getAttribute("axx_localidad").getValue()[0].name;
    var partidoGuid;
    var localidadCP;

    var localidadQuery = "axx_localidads?$filter=axx_localidadid%20eq%20%27" + localidadGuid + "%27&$select=_axx_partido_value,axx_codigopostal";

    MakeRequest(localidadQuery,
        function(result){

            partidoGuid = result.value[0]._axx_partido_value;
            localidadCP = result.value[0].axx_codigopostal;
            
            if(localidadCP > 1600){
                formContext.ui.controls.get("axx_partido").setVisible(true);
                formContext.ui.controls.get("axx_calle").setDisabled(false);
                formContext.getAttribute("axx_partido").setRequiredLevel("required");
                llenarPartido(partidoGuid);
            } else{
                // 
                formContext.ui.controls.get("axx_partido").setVisible(false);
                
                llenarProvinciaCapital(executionContext);
               
                // Lleno Calle y bloqueo el campo
                formContext.ui.controls.get("axx_calle").setDisabled(true);
                formContext.getAttribute("axx_calle").setValue(localidadName);
                formContext.getAttribute("axx_partido").setRequiredLevel("none");
            }
        }
    );    
}

llenarPartido = function(executionContext, partidoGuid){
        var formContext = executionContext.getFormContext();

    if(partidoGuid == null){

        return;
    }
    
    var formContext = executionContext.getFormContext();
    var partidoQuery = "axx_partidos?$filter=axx_partidoid%20eq%20%27" + partidoGuid + "%27&$select=axx_name,_axx_provincia_value";
    MakeRequest(partidoQuery,
        function(result){
            
            var provinciaGuid = result.value[0]._axx_provincia_value;

            var partidoLookUp = new Array();
            partidoLookUp[0] = new Object();
            partidoLookUp[0].id = partidoGuid;
            partidoLookUp[0].name = result.value[0].axx_name;
            partidoLookUp[0].entityType = "axx_partido";

            formContext.getAttribute("axx_partido").setValue(partidoLookUp);
            llenarProvincia(provinciaGuid, executionContext);
        }
    );
}


llenarProvinciaCapital = function (executionContext){
    
    var formContext = executionContext.getFormContext();
    // Se filtra por axx_codigoprovincia = 1, para toda localidad de capital (CP < 1600)
    var provinciaQuery = "axx_provincias?$filter=axx_codigoprovincia%20eq%20%271%20%27";

    MakeRequest(provinciaQuery,
        function(result){
        

            var paisGuid = result.value[0]._axx_pais_value;

            var provinciaLookUp = new Array();
            provinciaLookUp[0] = new Object();
            provinciaLookUp[0].id = result.value[0].axx_provinciaid;
            provinciaLookUp[0].name = result.value[0].axx_name;
            provinciaLookUp[0].entityType = "axx_provincia";

            formContext.getAttribute("axx_provincia").setValue(provinciaLookUp);
            llenarPais(paisGuid, executionContext);
            formContext.getAttribute("axx_partido").setRequiredLevel("none");
        }
    );
}


llenarProvincia = function(provinciaGuid, executionContext){

    var formContext = executionContext.getFormContext();

    var provinciaQuery = "axx_provincias?$filter=axx_provinciaid%20eq%20%27" + provinciaGuid + "%27&$select=axx_name,_axx_pais_value";

    MakeRequest(provinciaQuery,
        function(result){
            
            var formContext = executionContext.getFormContext();

            var paisGuid = result.value[0]._axx_pais_value;

            var provinciaLookUp = new Array();
            provinciaLookUp[0] = new Object();
            provinciaLookUp[0].id = provinciaGuid;
            provinciaLookUp[0].name = result.value[0].axx_name;
            provinciaLookUp[0].entityType = "axx_provincia";

            formContext.getAttribute("axx_provincia").setValue(provinciaLookUp);
            llenarPais(paisGuid);
        }
    );
}

llenarPais = function(paisGuid, executionContext){
                
        var formContext = executionContext.getFormContext();

    if(paisGuid == null){
        
        return;
    }
    
    var paisQuery = "axx_paises?$filter=axx_paisid%20eq%20%27" + paisGuid + "%27&$select=axx_name";

    MakeRequest(paisQuery,
        function(result){

            var paisLookUp = new Array();
            paisLookUp[0] = new Object();
            paisLookUp[0].id = paisGuid;
            paisLookUp[0].name = result.value[0].axx_name;
            paisLookUp[0].entityType = "axx_pais";

            formContext.getAttribute("axx_pais").setValue(paisLookUp);
        }
    );
}

function MakeRequest(query, successCallback) {

    var req = new XMLHttpRequest();
        
    req.open("GET", 'https://' + window.location.hostname + "/api/data/v8.2/" + query, true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    
    req.onreadystatechange = function() {
        
        if (this.readyState === 4) {
            
            req.onreadystatechange = null;
            
            if (this.status === 200) {

                var result = JSON.parse(this.response);
                successCallback(result);
                
            } 
            else {
                
                alert("Error Call");
            }
        }
    };
    
    req.send();
}



function MakeRequestSync(query) {

    var req = new XMLHttpRequest();
        
    req.open("GET", 'https://' + window.location.hostname + "/api/data/v8.2/" + query, false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    
    req.send();
    
    var result = JSON.parse(req.response);
    
    return result;
}
/*--------------------------------------------------------------------------------------*/
function filtrarLocalidades(executionContext){

    var formContext = executionContext.getFormContext();
    
    if (formContext.getAttribute("axx_partido").getValue())    formContext.getAttribute("axx_partido")    .setValue(null);
    if (formContext.getAttribute("axx_pais").getValue())       formContext.getAttribute("axx_pais")       .setValue(null);
    if (formContext.getAttribute("axx_localidad").getValue())  formContext.getAttribute("axx_localidad")  .setValue(null);
    if (formContext.getAttribute("axx_calle").getValue())      formContext.getAttribute("axx_calle")      .setValue(null);
    
    formContext.ui.controls.get("axx_partido").setVisible(true);
    formContext.ui.controls.get("axx_calle").setDisabled(false);
    formContext.getAttribute("axx_partido").setRequiredLevel("required");

    formContext.getControl("axx_localidad").addPreSearch(getListadoLocalidades);
}

function getListadoLocalidades(executionContext){
    
    var formContext = executionContext.getFormContext();
    if (!formContext.getAttribute("axx_provincia").getValue()) return;
    
    var guidProv = formContext.getAttribute("axx_provincia").getValue()[0].id;
    var localidadGuid = guidProv.substring(1, guidProv.length-1);
    var provId = "";
    var provnciaQuery = "axx_provincias?$filter=axx_provinciaid%20eq%20%27" + localidadGuid + "%27&$select=axx_codigoprovincia";

    var result = MakeRequestSync(provnciaQuery);
    
    provId = result.value[0].axx_codigoprovincia;

    var fetch = "";

    // Armo el fetch
    if(provId != "1"){
    // Si no es CABA traigo las localidades asociadas al partido relacionado con la provincia
        var formContext = executionContext.getFormContext();
        var partidosQuery = "axx_partidos?$filter=_axx_provincia_value%20eq%20" + guidProv + "&$select=axx_partidoid";

        partidos = MakeRequestSync(partidosQuery);

        fetch = "<filter type='and'>"
        fetch += "  <condition attribute='axx_partido' operator='in'>";
        
        for (i = 0; i < partidos.value.length; i++) { 
        
            fetch += "  <value>{" +  partidos.value[i].axx_partidoid + "}</value>";
        }
        
        fetch += "  </condition>";
        fetch += "</filter>";

        formContext.getControl("axx_localidad").addCustomFilter(fetch);
    }
    else{ 
        // Si es CABA el partido de la localidad siempre esta en null
        fetch += "<filter type='and'>";
        fetch += "  <condition attribute='axx_partido' operator='null' />";
        fetch += "</filter>";
    }

    // Cierro el fetch
    //fetch += "</entity></filter>";
    
    
    formContext.getControl("axx_localidad").addCustomFilter(fetch);
}




/* 
    Cancealaci??n de evento Save, no se utiliza
    function crearDomicilio(context){

    var esPrincipal = formContext.getAttribute("axx_esprincipal").getValue();
    var axx_tipodomicilio = formContext.getAttribute("axx_tipodomicilio").getValue();
    var permiteCrear = true;
    var mensajeError;
    var personaGuid = formContext.getAttribute("axx_personaid").getValue()[0].id;

    var domiciliosQuery = "axx_domicilios?$filter=_axx_personaid_value%20eq%20%27" + personaGuid + "%27&$select=axx_tipodomicilio,axx_esprincipal";
    
    MakeRequest(domiciliosQuery,
    
        function(result){

            for( x = 0; x < result.value.length; x++){
                
                // Valido si existe un principal
                if(result.value[x].axx_esprincipal == ES_PRINCIPAL){
                    if(result.value[x].axx_esprincipal == esPrincipal){
                        permiteCrear = false;
                        mensajeError = "El cliente ya posee un domicilio principal.";
                    }
                }
                if(result.value[x].axx_tipodomicilio == axx_tipodomicilio){
                        permiteCrear = false;
                        mensajeError = "El cliente ya posee un domicilio del tipo seleccionado.";
                }
                
                if(!permiteCrear){

                    formContext.getAttribute("axx_name").setValue(null);
                    
                    context.getEventArgs().preventDefault();
                    
                    return false;
                };
            };

        }
    );
}
*/