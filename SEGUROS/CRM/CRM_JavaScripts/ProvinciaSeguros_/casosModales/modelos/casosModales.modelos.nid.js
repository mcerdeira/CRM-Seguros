provinciaSeguros.CasosModales.inicializarNid = function(aseguradoId){    
    
    provinciaSeguros.CasosModales.inicializarServicios();
    provinciaSeguros.posicionConsolidada.inicializarServicios();

    var idRector;
    var numeroDocumento;

    provinciaSeguros.CasosModales.servicios.obtenerRegistro(
        parent.window.Alert.getCrmWindow().Xrm.Page.context.getClientUrl(),
        "/api/data/v8.2/accounts(" + aseguradoId + ")?$select=axx_numerodocumento,axx_idrector",
        function(account){

            idRector = account["axx_idrector"];
            numeroDocumento = account["axx_numerodocumento"];
            
            //Obtener nids
            provinciaSeguros.posicionConsolidada.servicios.obtenerNids(idRector, numeroDocumento,
                function(nids){
                
                    if ((nids.nids) && (nids.nids.length > 0)) {
                    
                        vm.nids = nids;
                        vm.nids.nids.forEach(function (element){
                            
                            element.nidsBehaviour = function(){
                            
                                vm.seleccionarNid(element.numero_nid);
                            }
                            
                        });
                        vm.informacionNids(vm.nids.nids);
                    
                    }
                    
                    vm.mostrarContenido();
                }
            );
        }
    );

    var vm = {};

    vm.loaderVisible = ko.observable(true);
    vm.contenidoVisible = ko.observable(false);
    
    vm.loaderURL = "https://" + window.location.hostname + "/_imgs/processing_loader.gif";

    vm.nids = ko.observable();
    vm.informacionNids = ko.observableArray([]);

    vm.informacionNidsPaginaActual = ko.observable(0);       //Pagina que se esta mostrando en pantalla
    vm.informacionNidsItemsPorPagina = ko.observable(10);    //Cantidad de nids por pagina

    //Separa la lista en paginas de un tamaño definido
    vm.informacionNidsListaPaginada = ko.dependentObservable(function () {
        var size = vm.informacionNidsItemsPorPagina();
        var start = vm.informacionNidsPaginaActual() * size;
        return vm.informacionNids.slice(start, start + size);
    });

    //Maximo numero de paginas
    vm.informacionNidsMaximoPaginas = ko.dependentObservable(function () {
        return Math.ceil(vm.informacionNids().length/vm.informacionNidsItemsPorPagina())-1;
    });

    //Salta a la pagina anterior
    vm.informacionNidsPaginaAnterior = function () {
        if (vm.informacionNidsPaginaActual() > 0) {
            vm.informacionNidsPaginaActual(vm.informacionNidsPaginaActual() - 1);
        }
    };

    //Salta a la pagina siguiente
    vm.informacionNidsPaginaSiguiente = function () {
        if (vm.informacionNidsPaginaActual() < vm.informacionNidsMaximoPaginas()) {
            vm.informacionNidsPaginaActual(vm.informacionNidsPaginaActual() + 1);
        }
    };

    //Devuelve la lista de las paginas para mostrar en el foreach
    vm.informacionNidsTodasLasPaginas = ko.dependentObservable(function () {
        var paginas = [];
        for (i = 0; i <= vm.informacionNidsMaximoPaginas() ; i++) {
            paginas.push({ numeroPagina: (i + 1) });
        }
        return paginas;
    });
    
    //Salta a cualquier pagina
    vm.informacionNidsIrAPagina = function (indice) {
        vm.informacionNidsPaginaActual(indice);
    };
    
    

    vm.seleccionarNid = function(numero_nid){
        var nidSeleccionada = numero_nid;
        parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_nid").setValue(nidSeleccionada);
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