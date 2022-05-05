provinciaSeguros.CasosModales.inicializarSiniestros = function(aseguradoId){    
    
    provinciaSeguros.CasosModales.inicializarServicios();
    provinciaSeguros.posicionConsolidada.siniestros.inicializarServicios();

    provinciaSeguros.CasosModales.servicios.obtenerRegistro(
        parent.window.Alert.getCrmWindow().Xrm.Page.context.getClientUrl(),
        "/api/data/v8.2/accounts(" + aseguradoId + ")?$select=axx_idrector",
        function(account){

            provinciaSeguros.CasosModales.idRector = account["axx_idrector"];
            
            // Obtener siniestros
            provinciaSeguros.posicionConsolidada.siniestros.obtenerSiniestros(            
                provinciaSeguros.CasosModales.idRector,
                function(siniestros){
                
                    vm.siniestros = siniestros;
                    vm.siniestros.siniestros.forEach(function (element){
                        
                        element.siniestrosBehaviour = function(){
                        
                            vm.seleccionarSiniestro(element.numero);
                        }
                        
                    });
                    vm.informacionSiniestros(vm.siniestros.siniestros);
                    
                    vm.mostrarContenido();
                }
            );
        }
    );

    var vm = {};

    vm.loaderVisible = ko.observable(true);
    vm.contenidoVisible = ko.observable(false);
    
    vm.loaderURL = "https://" + window.location.hostname + "/_imgs/processing_loader.gif";

    vm.siniestro = ko.observable();
    vm.informacionSiniestros = ko.observableArray([]);

    vm.informacionSiniestrosPaginaActual = ko.observable(0);       //Pagina que se esta mostrando en pantalla
    vm.informacionSiniestrosPorPagina = ko.observable(10);    //Cantidad de polizas por pagina

    //Separa la lista en paginas de un tamaño definido
    vm.informacionSiniestrosListaPaginada = ko.dependentObservable(function () {
        var size = vm.informacionSiniestrosPorPagina();
        var start = vm.informacionSiniestrosPaginaActual() * size;
        return vm.informacionSiniestros.slice(start, start + size);
    });

    //Maximo numero de paginas
    vm.informacionSiniestrosMaximoPaginas = ko.dependentObservable(function () {
        return Math.ceil(vm.informacionSiniestros().length/vm.informacionSiniestrosPorPagina())-1;
    });

    //Salta a la pagina anterior
    vm.informacionSiniestrosPaginaAnterior = function () {
        if (vm.informacionSiniestrosPaginaActual() > 0) {
            vm.informacionSiniestrosPaginaActual(vm.informacionSiniestrosPaginaActual() - 1);
        }
    };

    //Salta a la pagina siguiente
    vm.informacionSiniestrosPaginaSiguiente = function () {
        if (vm.informacionSiniestrosPaginaActual() < vm.informacionSiniestrosMaximoPaginas()) {
            vm.informacionSiniestrosPaginaActual(vm.informacionSiniestrosPaginaActual() + 1);
        }
    };

    //Devuelve la lista de las paginas para mostrar en el foreach
    vm.informacionSiniestrosTodasLasPaginas = ko.dependentObservable(function () {
        var paginas = [];
        for (i = 0; i <= vm.informacionSiniestrosMaximoPaginas() ; i++) {
            paginas.push({ numeroPagina: (i + 1) });
        }
        return paginas;
    });
    
    //Salta a cualquier pagina
    vm.informacionSiniestrosIrAPagina = function (indice) {
        vm.informacionSiniestrosPaginaActual(indice);
    };
    
    

    vm.seleccionarSiniestro = function(numero_siniestro){
        var siniestroSeleccionado = numero_siniestro;
        parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_nrodesiniestro").setValue(siniestroSeleccionado);
        top.window.Alert.hide();
    }    

    vm.mostrarLoader = function(){
        vm.contenidoVisible(false);
        vm.loaderVisible(true);
    }

    vm.mostrarContenido = function(){
        vm.contenidoVisible(true);
        vm.loaderVisible(false);
    }

    ko.applyBindings(vm);
}