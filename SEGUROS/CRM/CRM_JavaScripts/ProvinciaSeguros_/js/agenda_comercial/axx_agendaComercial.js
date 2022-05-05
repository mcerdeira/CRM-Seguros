function bloquearCampos(executionContext) {

    var formContext = executionContext.getFormContext();
    
    if (formContext.getControl('axx_name').getValue()) {
    
        formContext.getControl('axx_name').setDisabled(true);
        formContext.getControl('axx_elproductorexiste').setDisabled(true);
        formContext.getControl('axx_productorpotencial').setDisabled(true);
        formContext.getControl('axx_productorexistente').setDisabled(true);
        formContext.getControl('axx_productorpotencial').setDisabled(true);
        formContext.getControl('axx_fechadesde').setDisabled(true);
        formContext.getControl('axx_hastafecha').setDisabled(true);
        formContext.getControl('axx_lugar').setDisabled(true);
        formContext.getControl('axx_participantes').setDisabled(true);
        formContext.getControl('axx_acciones').setDisabled(true);
        formContext.getControl('axx_resultado').setDisabled(true);
        
    }
}