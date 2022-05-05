function tipoPersona(executionContext){
    
    var formContext = executionContext.getFormContext();
    var personaFisica = formContext.getAttribute("axx_tipopersona").getValue("282270000");
    var personaJuridica = formContext.getAttribute("axx_tipopersona").getValue("282270001");

        if (personaFisica){
        formContext.getAttribute("axx_razonsocial").setVisible(false);
        formContext.getAttribute("axx_razonsocial").setRequiredLevel(none);
        formContext.getAttribute("axx_CUIT").setRequiredLevel(none);
        formContext.getAttribute("axx_CUIT").setVisible(false);
        formContext.getAttribute("axx_nombre").setRequiredLevel("required");
        formContext.getAttribute("axx_apellido").setRequiredLevel("required");
        formContext.getAttribute("axx_genero").setRequiredLevel("required");
        formContext.getAttribute("axx_tipodocumento").setRequiredLevel("required");
        formContext.getAttribute("axx_numerodocumento").setRequiredLevel("required");
        formContext.getAttribute("axx_nombre").setVisible(true);
        formContext.getAttribute("axx_apellido").setVisible(true);        
        formContext.getAttribute("axx_genero").setVisible(true);
        formContext.getAttribute("axx_tipodocumento").setVisible(true);
        formContext.getAttribute("axx_numerodocumento").setVisible(true);
        formContext.getAttribute("axx_cargartelefono").setVisible(true);
        formContext.getAttribute("axx_cargarcorreoelectrnico").setVisible(true);
        }
        else if (personaJuridica){
        formContext.getAttribute("axx_razonsocial").setVisible(true);
        formContext.getAttribute("axx_razonsocial").setRequiredLevel("required");
        formContext.getAttribute("axx_CUIT").setRequiredLevel("required");
        formContext.getAttribute("axx_CUIT").setVisible(true);
        formContext.getAttribute("axx_nombre").setRequiredLevel("none");
        formContext.getAttribute("axx_apellido").setnoneLevel("none");
        formContext.getAttribute("axx_genero").setnoneLevel("none");
        formContext.getAttribute("axx_tipodocumento").setnoneLevel("none");
        formContext.getAttribute("axx_numerodocumento").setnoneLevel("none");
        formContext.getAttribute("axx_nombre").setVisible(false);
        formContext.getAttribute("axx_apellido").setVisible(false);        
        formContext.getAttribute("axx_genero").setVisible(false);
        formContext.getAttribute("axx_tipodocumento").setVisible(false);
        formContext.getAttribute("axx_numerodocumento").setVisible(false);
        formContext.getAttribute("axx_cargartelefono").setVisible(true);
        formContext.getAttribute("axx_cargarcorreoelectrnico").setVisible(true);
        }
    
}