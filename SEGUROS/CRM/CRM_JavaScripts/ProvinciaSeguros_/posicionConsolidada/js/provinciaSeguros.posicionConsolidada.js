var provinciaSeguros = {};
provinciaSeguros.posicionConsolidada = {};
provinciaSeguros.posicionConsolidada.siniestros = {};
provinciaSeguros.posicionConsolidada.Cobranzas = {};

provinciaSeguros.posicionConsolidada.inicializar = function () {
    
    // Ejecucion Bootstrap
//    window.app = new Vue({
//        el: "#app",
//        data: {
//            name: ''
//        },
//        computed: {
//            showAlert() {
//                return this.name.length > 4 ? true : false;
//            }
//        }
//    });

    var vm = {};
    
    // Creacion de los Objetos
    provinciaSeguros.posicionConsolidada.servicios = {};
    provinciaSeguros.posicionConsolidada.inicializarServicios();
    provinciaSeguros.posicionConsolidada.modelo = {};
    provinciaSeguros.posicionConsolidada.inicializarModelo(vm);

//Inicializacion del modulo de Cobranzas
    provinciaSeguros.posicionConsolidada.Cobranzas.servicios = {};
    provinciaSeguros.posicionConsolidada.Cobranzas.inicializarServicios();
    provinciaSeguros.posicionConsolidada.Cobranzas.modelo = {};
    provinciaSeguros.posicionConsolidada.Cobranzas.inicializarModelo(vm);


    //Inicializacion del modulo de siniestros
    provinciaSeguros.posicionConsolidada.siniestros.servicios = {};    
    provinciaSeguros.posicionConsolidada.siniestros.inicializarServicios();
    provinciaSeguros.posicionConsolidada.siniestros.modelo = {};
    provinciaSeguros.posicionConsolidada.siniestros.inicializarModelo(vm);
    
    

}