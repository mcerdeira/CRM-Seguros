provinciaSeguros.posicionConsolidada.modelo.inicializarRamos = function(vm){

    vm.ramosVisible = ko.observable(false);         //Visibilidad de la pantalla de ramos
    vm.ramos = ko.observable();                     //Guarda la informacion traida del servicio de ramos
    vm.informacionRamos = ko.observableArray([]);   //Guarda el arreglo de los ramos

    //Activa la pantalla de ramos
    vm.mostrarRamos = function (){
        
        //Reset variables
        provinciaSeguros.posicionConsolidada.idRector = "";
        provinciaSeguros.posicionConsolidada.idRamo = "";
        
        vm.loaderVisible(false);
        vm.contenidoVisible(true);
        vm.ramosVisible(true);
        vm.polizasVisible(false);
        vm.detallesPolizaVisible(false);
        vm.certificados(false);
        vm.coberturas(false);  
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Obtener los ramos
	provinciaSeguros.posicionConsolidada.servicios.obtenerRamos(
        provinciaSeguros.posicionConsolidada.idRector,
        function (ramos) {
                
            vm.ramos(ramos);
            vm.riesgos("Cantidad de riesgos: " + ramos.cantidad_riesgos);
            
            ramos.ramos.forEach(
                function (element){

                    element.imgUrl = document.location.protocol + '//' +   document.location.hostname + '/WebResources/axx_' + element.nombre_ramo;
                    element.ramosBehaviour = function (){

                        vm.abrirPolizas(provinciaSeguros.posicionConsolidada.idRector, element.id_ramo);
                    }
                }
            );
            
            vm.informacionRamos(ramos.ramos);
            
            vm.mostrarRamos();
        }
    );
}