provinciaSeguros.CasosModales.inicializarNroDePoliza = function( aseguradoId, ramoGuid){    
    
    provinciaSeguros.CasosModales.inicializarServicios();
    provinciaSeguros.posicionConsolidada.inicializarServicios();

    provinciaSeguros.CasosModales.servicios.obtenerRegistro(
	
        parent.window.Alert.getCrmWindow().Xrm.Page.context.getClientUrl(),
        "/api/data/v8.2/accounts(" + aseguradoId + ")?$select=axx_idrector",
        function(account){

            provinciaSeguros.CasosModales.idRector = account["axx_idrector"];
            
            var clientUrl = parent.window.Alert.getCrmWindow().Xrm.Page.context.getClientUrl();
            
            provinciaSeguros.CasosModales.servicios.obtenerRegistro(
                clientUrl,
                "/api/data/v8.2/axx_ramos(" + ramoGuid + ")?$select=axx_codigo",
                function(ramo){

                        provinciaSeguros.CasosModales.ramo = ramo["axx_codigo"];
                        
                        //Obtener polizas
                        provinciaSeguros.posicionConsolidada.servicios.obtenerPolizas(            
                            provinciaSeguros.CasosModales.idRector,
                            provinciaSeguros.CasosModales.ramo, 
                            function(polizas){
                            
                                vm.polizas = polizas;
                                
                                if (polizas.cantidad_riesgos > 0) {
                                
                                    vm.polizas.poliza.forEach(function (element){
                                        
                                        element.polizaBehaviour = function(){
                                        
        //                                    vm.seleccionarPoliza(element.numero_poliza);
                                            vm.seleccionarProductor(element.numero_poliza, element.numero_certificado);
                                            
                                        }
                                        
                                        
                                    });
                                    
                                    vm.informacionPolizas(vm.polizas.poliza);
                                }
                                
                                vm.mostrarContenido();
                            }
                        );
                    }
                );
            
        }
    );


 

    var vm = {};

    vm.loaderVisible = ko.observable(true);
    vm.contenidoVisible = ko.observable(false);
    
    vm.loaderURL = "https://" + window.location.hostname + "/_imgs/processing_loader.gif";

    vm.polizas = ko.observable();
    vm.informacionPolizas = ko.observableArray([]);
    


    vm.informacionPolizasPaginaActual = ko.observable(0);       //Pagina que se esta mostrando en pantalla
    vm.informacionPolizasItemsPorPagina = ko.observable(10);    //Cantidad de polizas por pagina

    //Separa la lista en paginas de un tamaño definido
    vm.informacionPolizasListaPaginada = ko.dependentObservable(function () {
        var size = vm.informacionPolizasItemsPorPagina();
        var start = vm.informacionPolizasPaginaActual() * size;
        return vm.informacionPolizas.slice(start, start + size);
    });

    //Maximo numero de paginas
    vm.informacionPolizasMaximoPaginas = ko.dependentObservable(function () {
        return Math.ceil(vm.informacionPolizas().length/vm.informacionPolizasItemsPorPagina())-1;
    });

    //Salta a la pagina anterior
    vm.informacionPolizasPaginaAnterior = function () {
        if (vm.informacionPolizasPaginaActual() > 0) {
            vm.informacionPolizasPaginaActual(vm.informacionPolizasPaginaActual() - 1);
        }
    };

    //Salta a la pagina siguiente
    vm.informacionPolizasPaginaSiguiente = function () {
        if (vm.informacionPolizasPaginaActual() < vm.informacionPolizasMaximoPaginas()) {
            vm.informacionPolizasPaginaActual(vm.informacionPolizasPaginaActual() + 1);
        }
    };

    //Devuelve la lista de las paginas para mostrar en el foreach
    vm.informacionPolizasTodasLasPaginas = ko.dependentObservable(function () {
        var paginas = [];
        for (i = 0; i <= vm.informacionPolizasMaximoPaginas() ; i++) {
            paginas.push({ numeroPagina: (i + 1) });
        }
        return paginas;
    });
    
    //Salta a cualquier pagina
    vm.informacionPolizasIrAPagina = function (indice) {
        vm.informacionPolizasPaginaActual(indice);
    };
    vm.detallesPoliza = ko.observable(); 
    vm.productorAsociado = ko.observable();
    
//    vm.seleccionarPoliza = function(numero_poliza){
//
//        var polizaSeleccionada = numero_poliza;
//        parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_nrodepoliza").setValue(polizaSeleccionada);
//        //top.window.Alert.hide();
//        parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_nrodecertificado").setValue("");
//         alert('La Poliza seleccionada es la numero' + polizaSeleccionada + 'y el productor' + vm.productorAsociado);
//        }
    
    vm.seleccionarProductor = function(numero_poliza, numero_certificado){
    
    var polizaSeleccionada = numero_poliza;
     parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_nrodepoliza").setValue(polizaSeleccionada);
     var numeroCertificadoPolizaSeleccionada = numero_certificado;
     
          provinciaSeguros.posicionConsolidada.servicios.obtenerDetallePoliza
              (
                provinciaSeguros.CasosModales.idRector,
                provinciaSeguros.CasosModales.ramo,
                polizaSeleccionada,
                numeroCertificadoPolizaSeleccionada,
                
                function(detallesPoliza)
                      {
                    vm.detallesPoliza = detallesPoliza;
                    
                    //vm.numeroPoliza = detallesPoliza.detalle.numero_poliza;
                    vm.productorAsociado = detallesPoliza.detalle.productor_asociado;
                       
                    vm.mostrarDetallePoliza();
                       }                                           
                );
      
    //Fin Detalle Poliza

    //top.window.Alert.hide();
    parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_nrodecertificado").setValue("");
    //alert('La Poliza seleccionada es la numero' + polizaSeleccionada + 'y el productor' + vm.productorAsociado)
    setTimeout(function(){
    parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_productorasociado").setValue(vm.productorAsociado);
    }, 1000);
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
        
    vm.mostrarDetallePoliza = function (){
        
        vm.loaderVisible(false);
        vm.contenidoVisible(true);

    }

    ko.applyBindings(vm);
}