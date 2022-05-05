provinciaSeguros.CasosModales.detallePoliza = function( aseguradoId, ramoGuid, nroPoliza){    
    
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
                    
                    // Trae el detalle de la poliza seleccionada
                    provinciaSeguros.posicionConsolidada.servicios.obtenerPolizas(            
                        provinciaSeguros.CasosModales.idRector,
                        provinciaSeguros.CasosModales.ramo, 
                        function(polizas){
                        
                            polizas;
                            
                            if (polizas.poliza) 
                             {
                                polizas.poliza.forEach(
                                    function (element){
                                      if(element.numero_poliza == nroPoliza)
										{
                                         var numeroCertificadoPolizaSeleccionada = element.numero_certificado;
                                         
                                              provinciaSeguros.posicionConsolidada.servicios.obtenerDetallePoliza
                                                  (
                                                    provinciaSeguros.CasosModales.idRector,
                                                    provinciaSeguros.CasosModales.ramo,
                                                    nroPoliza,
                                                    numeroCertificadoPolizaSeleccionada,
                                                    
                                                    function(detallesPoliza)
                                                          {
                                                        vm.detallesPoliza = detallesPoliza;
                                                        
                                                        vm.numeroPoliza = detallesPoliza.detalle.numero_poliza;
                                                        vm.productorAsociado(detallesPoliza.detalle.productor_asociado);
                                                            
                                                        vm.mostrarDetallePoliza();
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

    vm.detallesPoliza = ko.observable(); 
    vm.productorAsociado = ko.observable();

    vm.seleccionarDetallePoliza = function(){

        var productorSeleccionado = vm.productorAsociado();
        parent.window.Alert.getCrmWindow().Xrm.Page.getAttribute("axx_productorasociado").setValue(productorSeleccionado);
        top.window.Alert.hide();        
    }
    
    vm.mostrarLoader = function(){
        vm.contenidoVisible(false);
        vm.loaderVisible(true);
    }
    vm.mostrarDetallePoliza = function (){
        
        vm.loaderVisible(false);
        vm.contenidoVisible(true);

    }
   
    ko.applyBindings(vm);
}