var OPTION_BROKER = '282270000'

function inicializarFormProductor(executionContext) {

    mostrarCategoriaProductor(executionContext);
}

/*------------------------------------------------------------------------------------------------*/

// Se mostrarán la sección de cartera de productores (con el campo categoría seteado en 'Broker').
function mostrarCategoriaProductor(executionContext) {

   var formContext = executionContext.getFormContext();
    var categoriaProductor = (formContext.getAttribute("axx_categoria").getValue() == OPTION_BROKER) ? true : false;
    var grillaCarteraDeProductores = formContext.ui.tabs.get("CarteraDeProductores");
    
    grillaCarteraDeProductores.setVisible(categoriaProductor);
}
