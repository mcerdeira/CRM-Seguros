provinciaSeguros.CasosModales.inicializarCertificado = function( aseguradoId, ramoGuid, nroPoliza){    
    
    provinciaSeguros.CasosModales.inicializarServicios();
    provinciaSeguros.posicionConsolidada.inicializarServicios();

    provinciaSeguros.CasosModales.servicios.obtenerRegistro(
        parent.window.Alert.getCrmWindow().Xrm.Page.context.getClientUrl(),
        "/api/data/v8.2/accounts(" + aseguradoId + ")?$select=axx_idrector",
        
        function(account){

            provinciaSeguros.CasosModales.idRector = account["axx_idrector"];
            
            provinciaSeguros.CasosModales.servicios.obtenerRegistro(
                
                parent.window.Alert.getCrmWindow().Xrm.Page.context.getClientUrl(),
                "/api/data/v8.2/axx_ramos(" + ramoGuid + ")?$select=axx_codigo",
                function(ramo){

                    provinciaSeguros.CasosModales.ramo = ramo["axx_codigo"];
                    
                    // Trae el numero de certificado de la poliza seleccionada
                    provinciaSeguros.posicionConsolidada.servicios.obtenerPolizas(            
                        provinciaSeguros.CasosModales.idRector,
                        provinciaSeguros.CasosModales.ramo, 
                        function(polizas){
                        
                            polizas;
                            
                            if (polizas.poliza) {
                            
                                polizas.poliza.forEach(function (element){
                                    
                                        if(element.numero_poliza == nroPoliza){

                                            var numeroCertificadoPolizaSeleccionada = element.numero_certificado;

                                            provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosPoliza(
                                                provinciaSeguros.CasosModales.idRector,
                                                provinciaSeguros.CasosModales.ramo, 
                                                nroPoliza, 
                                                numeroCertificadoPolizaSeleccionada, 
                                                "1", 
                                                function(certificados){
                                        
                                                    vm.certificados = certificados;
                                                    vm.certificados.certificados.forEach(
                                                        function (element){
                                                    
                                                            element.certificadoBehaviour = function(){
                                                            
                                                                vm.seleccionarCertificado(element.numero_certificado);
                                                            }
                                                        }
                                                    );
                                                            
                                                    vm.informacionCertificados(vm.certificados.certificados);
                                                    
                                                    vm.mostrarContenido();
                                                }
                                            );
                                        }                
                                    });
							}
                            
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

    vm.certificados = ko.observable();
    vm.informacionCertificados = ko.observableArray([]);

    vm.informacionCertificadosPaginaActual = ko.observable(0);       //Pagina que se esta mostrando en pantalla
    vm.informacionCertificadosPorPagina = ko.observable(10);    //Cantidad de polizas por pagina

    //Separa la lista en paginas de un tamaño definido
    vm.informacionCertificadosListaPaginada = ko.dependentObservable(function () {
        var size = vm.informacionCertificadosPorPagina();
        var start = vm.informacionCertificadosPaginaActual() * size;
        return vm.informacionCertificados.slice(start, start + size);
    });

    //Maximo numero de paginas
    vm.informacionCertificadosMaximoPaginas = ko.dependentObservable(function () {
        return Math.ceil(vm.informacionCertificados().length/vm.informacionCertificadosPorPagina())-1;
    });

    //Salta a la pagina anterior
    vm.informacionCertificadosPaginaAnterior = function () {
        if (vm.informacionCertificadosPaginaActual() > 0) {
            vm.informacionCertificadosPaginaActual(vm.informacionCertificadosPaginaActual() - 1);
        }
    };

    //Salta a la pagina siguiente
    vm.informacionCertificadosPaginaSiguiente = function () {
        if (vm.informacionCertificadosPaginaActual() < vm.informacionCertificadosMaximoPaginas()) {
            vm.informacionCertificadosPaginaActual(vm.informacionCertificadosPaginaActual() + 1);
        }
    };

    //Devuelve la lista de las paginas para mostrar en el foreach
    vm.informacionCertificadosTodasLasPaginas = ko.dependentObservable(function () {
        var paginas = [];
        for (i = 0; i <= vm.informacionCertificadosMaximoPaginas() ; i++) {
            paginas.push({ numeroPagina: (i + 1) });
        }
        return paginas;
    });
    
    //Salta a cualquier pagina
    vm.informacionCertificadosIrAPagina = function (indice) {
        vm.informacionCertificadosPaginaActual(indice);
    };

    

    vm.seleccionarCertificado = function(numero_certificado){
        var certificadoSeleccionado = numero_certificado;
        parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_nrodecertificado").setValue(certificadoSeleccionado);
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