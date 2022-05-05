var PER_FISICA = '282270000';
var PER_JURIDICA = '282270001';

function inicializarFormClientePotencial(executionContext) {
    mostrarCamposDependientesTipoPersona(executionContext);
}
//alert (PER_FISICA);
/*------------------------------------------------------------------------------------------*/

function mostrarCamposDependientesTipoPersona(executionContext){
 
        var formContext = executionContext.getFormContext();        
   
   // Guardo en una variable local el rol seleccionado, para reducir las invocaciones a formContext cada vez que necesito ese valor.
    
    // Defino constantes para que sea más legible el código.
    
    var TipoDePersonaSeleccionado = formContext.getAttribute("axx_tipodepersona").getValue();
    
        mostrarCamposSegunTipoDePersona(TipoDePersonaSeleccionado, executionContext);
    
}

/*------------------------------------------------------------------------------------------*/

function mostrarCamposSegunTipoDePersona(TipoDePersonaSeleccionado, executionContext) {

        var formContext = executionContext.getFormContext();        

    // Guardo los campos en variables locales por una cuestión de performance (MS recomienda no acceder al  formContext cada vez que se usan).

    var seccionPersonaJuridicaControl = formContext.ui.tabs.get('Summary').sections.get('company');
    var seccionPersonaFisicaControl = formContext.ui.tabs.get('Summary').sections.get('Contact');

   
    // Defino las reglas negocio de ocultamiento de cada campo.
    
    var mostrarPersonaFisca =  (TipoDePersonaSeleccionado == PER_FISICA);
                            
    var mostrarPersonaJuridica =  (TipoDePersonaSeleccionado == PER_JURIDICA);
    // Oculto los campos según el valor de las reglas de negocio.
    
    seccionPersonaFisicaControl.setVisible(mostrarPersonaFisca);
    seccionPersonaJuridicaControl.setVisible(mostrarPersonaJuridica);
}


/*------------------------------------------------------------------------------------------*/
