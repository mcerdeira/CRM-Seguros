/*------------------------------------------------------------------------------------------*/
/*-------Nueva Version formContext-----*/
/*------------------------------------------------------------------------------------------*/

function inicializarFormPersonaFisica(executionContext) {
         obligatoriedadCampos(executionContext)
         
    var formContext = executionContext.getFormContext();
    var formPersonaFisica = "Persona Física";
    var formPersonaJuridica = "Persona Jurídica";
    var idRector = formContext.getAttribute("axx_idrector").getValue();
    var cuit = formContext.getAttribute("axx_cuit").getValue();
    var formName = formContext.ui.formSelector.getCurrentItem().getLabel();
    
    if(formName == formPersonaFisica){
        formContext.getAttribute("axx_numerodocumento").setRequiredLevel("required");
        formContext.getAttribute("axx_cuit").setRequiredLevel("none");
        
        if(idRector != "" && idRector != null){
            formContext.ui.controls.get("axx_numerodocumento").setDisabled(true);
            /*if(cuit != "" && cuit != null){
                formContext.ui.controls.get("axx_cuit").setDisabled(true);
            }*/
        }
        
    }
    else{
        formContext.getAttribute("axx_cuit").setRequiredLevel("required");
    }
}

/*------------------------------------------------------------------------------------------*/
function obligatoriedadCampos(executionContext) {

    var formContext = executionContext.getFormContext();
    var controls = ["axx_fechanacimiento","axx_estadocivil","axx_profesion","axx_nacionalidad","axx_pep","axx_sujetoobligado","axx_cuit"];
    var name = formContext.getAttribute("name").getValue();
    
    
   if(true || name != null)
        {
           controls.forEach(function(element){
                formContext.getAttribute(element).setRequiredLevel("required");
            });
        }      
}
