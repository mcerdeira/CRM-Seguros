var ES_PRINCIPAL = "282270001";


function inicializarFormularioTelefono(executionContext){
//    crearTelefono();
    mostrarInterno(executionContext);
//    var formContext = executionContext.getFormContext();
//    if (!formContext.getAttribute('axx_ddi').getValue()) formContext.getAttribute('axx_ddi').setValue('54');
}



function crearTelefono(context, executionContext){
    
    var formContext = executionContext.getFormContext();
    var esPrincipal = formContext.getAttribute("axx_esprincipal").getValue();
    var tipoTelefono = formContext.getAttribute("axx_tipotelefono").getValue();
    var permiteCrear = true;
    var mensajeError;
    var personaGuid = formContext.getAttribute("axx_personaid").getValue()[0].id;

    var telefoQuery = "axx_telefonos?$filter=_axx_personaid_value%20eq%20%27" + personaGuid + "%27&$select=axx_tipotelefono,axx_esprincipal,axx_telefononormalizado";
    
    MakeRequest(telefoQuery,
        function(result){

            for( x = 0; x < result.value.length; x++){
                
                // Valido si existe un principal
                if(result.value[x].axx_esprincipal == ES_PRINCIPAL){
                    if(result.value[x].axx_esprincipal == esPrincipal){
                        permiteCrear = false;
                        mensajeError = "El cliente ya posee un teléfono principal.";
                    }
                }
                if(result.value[x].axx_tipotelefono == tipoTelefono){
                        permiteCrear = false;
                        mensajeError = "El cliente ya posee un teléfono del tipo seleccionado.";
                }
                
                if(!permiteCrear){
                    
                    alert(mensajeError);

                    formContext.getAttribute("axx_name").setValue(null);
                    // formContext.getControl("axx_telefonoid").setFocus(true);
                    
                    context.getEventArgs().preventDefault();
                    
                    return false;
                };
            };

        }
    );
    
    

}

function onSave(context) {
    var saveEvent = context.getEventArgs();
    saveEvent.preventDefault();
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

function mostrarInterno(executionContext) {
        var formContext = executionContext.getFormContext();
    var tipoComercial = '282270002';
    
    formContext.ui.controls.get("axx_interno").setVisible(formContext.getAttribute("axx_tipotelefono").getValue() == tipoComercial);
}


function LlenarTelefonoNormalizado(executionContext){

    var formContext = executionContext.getFormContext();
    var normalizado = "";
    var ddi = formContext.getAttribute("axx_ddi").getValue();
    var cod = formContext.getAttribute("axx_codigoarea").getValue();
    var numero = formContext.getAttribute("axx_numero").getValue();
    var inte = formContext.getAttribute("axx_interno").getValue();
    
    if(ddi != null){
        normalizado += " " + ddi;
    }
    if(cod != null){
        normalizado += " " + cod;
    }
    if(numero != null){
        normalizado += " " + numero;
    }
        if(inte != null){
        normalizado += " " + inte;
    }
    
    formContext.getAttribute("axx_telefononormalizado").setValue(normalizado);
}