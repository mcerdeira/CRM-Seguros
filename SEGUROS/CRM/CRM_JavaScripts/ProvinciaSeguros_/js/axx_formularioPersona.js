function inicializarFormPersona(executionContext) {

    redireccionar(executionContext);
    mostrarProductores(executionContext);
    deshabilitarCamposSiEsProductor(executionContext);

}

/*--------------------------------------------------------------------------------------------------------*/

// En base al tipo de persona (jurídica o física) muestra un formulario u otro.

function redireccionar(executionContext) {
    

    var formContext = executionContext.getFormContext();
    var items = formContext.ui.formSelector.items;
    var opcionPersona = formContext.data.entity.attributes.get("axx_tipopersona").getSelectedOption();
    

    if (opcionPersona) {
    
        

        var tipoDePersona = opcionPersona.text;
        
        var currentForm = formContext.ui.formSelector.getCurrentItem();
        
        var length = items.getAll().length;
        
        for (index = 0; index < length; index++) { 
        
            var form = items.get(index);
        
            if ((form.getLabel() == tipoDePersona) && (currentForm.getLabel() != form.getLabel())) {
            
                form.navigate();
            }
        }
    }
}

function deshabilitarCamposSiEsProductor(executionContext) {
        
        var formContext = executionContext.getFormContext();        
        var  esProductor =  formContext.ui.controls.get("axx_esproductor").getAttribute().getValue(); 
        
        if (esProductor) {
        
        // formContext.ui.controls._collectionItem.Domicilios._gridControl._isEditable = "false";
        // formContext.ui.controls._collectionItem.Domicilios._gridControl.setDisabled = "true";
        
        
            formContext.ui.controls.forEach(function (control, i) {
                if (control && control.getDisabled && !control.getDisabled()) {
                    control.setDisabled(true);
                }
            });
        
        }
}

/*--------------------------------------------------------------------------------------------------------*/

// En caso de que la persona NO sea un productor, se ocultará el tab de productores.

function mostrarProductores(executionContext) {

    var formContext = executionContext.getFormContext();
    var  esProductor =  formContext.ui.controls.get("axx_esproductor").getAttribute().getValue();

    if (formContext.ui.tabs.get("misNumerosDeProductor")) {
        
        formContext.ui.tabs.get("misNumerosDeProductor").setVisible(esProductor);
    }
}

/*--------------------------------------------------------------------------------------------------------*/

function cambiarVisibilidadCampo(executionContext,nombreCampo,visible) {
    
    var control = formContext.getControl(nombreCampo);
    
    control.setVisible(visible);
}

