function inicializarFormPersonaJuridica(executionContext) {
   
    mostrarCampoTipoOrganismo(executionContext);
    obligatoriedadCampos(executionContext);
}   

/*------------------------------------------------------------------------------------------*/

function mostrarCampoTipoOrganismo(executionContext) {
    
    var formContext = executionContext.getFormContext();
    var tipoOrganismo = (formContext.getAttribute("axx_tipoorganismo").getValue() != null) ? true : false;
    var control = formContext.getControl("axx_tipoorganismo");
    
    control.setVisible(tipoOrganismo);
}

/*------------------------------------------------------------------------------------------*/

function obligatoriedadCampos(executionContext) {

    var formContext = executionContext.getFormContext();
    var controls = ["axx_actividad"];
    var name = formContext.getAttribute("name").getValue();

        formContext.getAttribute("axx_numerodocumento").setRequiredLevel("required");
        formContext.getAttribute("axx_cuit").setRequiredLevel("required");
    
   if(name!=null)
        {
           controls.forEach(function(element){
                formContext.getAttribute(element).setRequiredLevel("required");
            });
        }
        
}
