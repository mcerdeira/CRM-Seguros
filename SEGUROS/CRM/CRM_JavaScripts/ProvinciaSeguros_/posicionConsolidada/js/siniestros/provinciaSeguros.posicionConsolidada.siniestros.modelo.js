provinciaSeguros.posicionConsolidada.siniestros.inicializarModelo = function (vm){
    
    provinciaSeguros.posicionConsolidada.siniestros.nroPersona = parent.Xrm.Page.getAttribute("axx_idrector").getValue();
    provinciaSeguros.posicionConsolidada.siniestros.idRamo = "";
    provinciaSeguros.posicionConsolidada.siniestros.numeroSiniestro;

    //Variables de visibilidad
    vm.siniestrosVisible = ko.observable(true);
    vm.detalleDeSiniestrosVisible = ko.observable(false);
    vm.botonLiquidacionesVisible = ko.observable(false);
    vm.botonBeneficiariosVisible = ko.observable(false);
    vm.botonTercerosVisible = ko.observable(false);
    vm.botonNotasVisible = ko.observable(false);
    vm.liquidacionesVisible = ko.observable(false);
    vm.beneficiariosVisible = ko.observable(false);
    vm.tercerosVisible = ko.observable(false);
    vm.notasVisible = ko.observable(false);
    
    //Variables inicializadas del knockout
    vm.siniestros = ko.observable();
    vm.detalleDeSiniestros = ko.observable();
    vm.liquidaciones = ko.observable();
    vm.beneficiarios = ko.observable();
    vm.notas = ko.observable();
    vm.terceros = ko.observable();
    
    //Arreglos inicializados del knockout
    vm.informacionSiniestros = ko.observableArray([]);
    vm.informacionDetalleDeSiniestros = ko.observableArray([]);
    vm.informacionLiquidaciones = ko.observableArray([]);
    vm.informacionBeneficiarios = ko.observableArray([]);
    vm.informacionTerceros = ko.observableArray([]);
    vm.informacionNotas = ko.observableArray([]);
    
    
    vm.tiene_subsniestros_cach = ko.observable(false);
    /*---------------------------------------------------------------------------------*/
    
    //Obtener los siniestro
	provinciaSeguros.posicionConsolidada.siniestros.obtenerSiniestros(    
        provinciaSeguros.posicionConsolidada.siniestros.nroPersona,
        function (siniestros) {
                
            vm.siniestros(siniestros);

            siniestros.siniestros.forEach(
                function (element){

                    element.siniestroBehaviour = function (){

                        provinciaSeguros.posicionConsolidada.siniestros.numeroSiniestro = element.numero;
                        provinciaSeguros.posicionConsolidada.siniestros.idRamo = element.id_ramo;

                        vm.tiene_subsniestros_cach = element.tiene_subsiniestro;
                        vm.abrirDetalleDeSiniestro(element.numero);
                        
                    }
                    
                    element.tiene_subsiniestro = element.tiene_subsiniestro == 'true' ? 'Si' : 'No';
                }
            );
            
            vm.informacionSiniestros(siniestros.siniestros);
            
            vm.mostrarSiniestros();       
        }
    );

    /*---------------------------------------------------------------------------------*/
    
    //Activa la pantalla de detalle
    vm.abrirDetalleDeSiniestro = function (nroRamo) {
        
        vm.mostrarLoader();
        
        //Obtener detalles de siniestros
		provinciaSeguros.posicionConsolidada.siniestros.obtenerDetallesDeSiniestros(            
            provinciaSeguros.posicionConsolidada.siniestros.nroPersona,
            provinciaSeguros.posicionConsolidada.siniestros.numeroSiniestro,
            provinciaSeguros.posicionConsolidada.siniestros.idRamo,
            function(detalle){

                var visibilidadBeneficiarios = provinciaSeguros.posicionConsolidada.siniestros.idRamo == ("9" || "16" || "17" || "21");
                vm.botonBeneficiariosVisible(visibilidadBeneficiarios);                
                vm.botonLiquidacionesVisible(!visibilidadBeneficiarios);
                vm.botonNotasVisible(true);
                vm.botonTercerosVisible(vm.tiene_subsniestros_cach == 'true');
                

                vm.detalleDeSiniestros(detalle);                
                
                vm.informacionDetalleDeSiniestros(detalle.campos)

                vm.mostrarDetalleDeSiniestro();
            }
        );
    };

    /*---------------------------------------------------------------------------------*/

    vm.abrirLiquidaciones = function(){

        vm.mostrarLoader();
        
        //Obtener Liquidaciones
		provinciaSeguros.posicionConsolidada.siniestros.obtenerLiquidaciones(            
            provinciaSeguros.posicionConsolidada.siniestros.nroPersona,
            provinciaSeguros.posicionConsolidada.siniestros.numeroSiniestro,
            provinciaSeguros.posicionConsolidada.siniestros.idRamo,
            function(liquidaciones){

                vm.liquidaciones(liquidaciones);                
                
                vm.informacionLiquidaciones(liquidaciones.liquidaciones)

                vm.mostrarLiquidaciones();
            }
        );
    };

    /*---------------------------------------------------------------------------------*/

    vm.abrirBeneficiarios = function(){

        vm.mostrarLoader();
        
        //Obtener Liquidaciones
		provinciaSeguros.posicionConsolidada.siniestros.obtenerBeneficiarios(            
            provinciaSeguros.posicionConsolidada.siniestros.nroPersona,
            provinciaSeguros.posicionConsolidada.siniestros.numeroSiniestro,
            provinciaSeguros.posicionConsolidada.siniestros.idRamo,
            function(beneficiarios){

                vm.beneficiarios(beneficiarios);                
                
                vm.informacionBeneficiarios(beneficiarios.beneficiarios)

                vm.mostrarBeneficiarios();
            }
        );
    };
     /*---------------------------------------------------------------------------------*/

        vm.abrirNotas = function(){ 

            vm.mostrarLoader();
            
            //Obtener Notas
            provinciaSeguros.posicionConsolidada.siniestros.obtenerNotas(            
                provinciaSeguros.posicionConsolidada.siniestros.nroPersona,
                provinciaSeguros.posicionConsolidada.siniestros.numeroSiniestro,
                provinciaSeguros.posicionConsolidada.siniestros.idRamo,
                function(notas){

                    vm.notas(notas);                
                    
                    vm.informacionNotas(notas.notas)

                    vm.mostrarNotas();
                }
            );
        };

    /*---------------------------------------------------------------------------------*/

    vm.abrirTerceros = function(){

        vm.mostrarLoader();
        
        //Obtener Liquidaciones
		provinciaSeguros.posicionConsolidada.siniestros.obtenerTerceros(            
            provinciaSeguros.posicionConsolidada.siniestros.nroPersona,
            provinciaSeguros.posicionConsolidada.siniestros.numeroSiniestro,
            provinciaSeguros.posicionConsolidada.siniestros.idRamo,
            function(terceros){

                vm.terceros(terceros);                
                
                vm.informacionTerceros(terceros.terceros)

                vm.mostrarTerceros();
            }
        );
    };

    /*---------------------------------------------------------------------------------*/

    vm.volverSiniestros = function(){
        vm.mostrarSiniestros();
    };

    vm.volverDetalleDeSiniestros = function(){
        vm.abrirDetalleDeSiniestro();
    };
    
    /*---------------------------------------------------------------------------------*/

    //Activa la pantalla de siniestros
    vm.mostrarSiniestros = function (){
        
        vm.contenidoVisible(true);
        vm.siniestrosVisible(true);  
        vm.detalleDeSiniestrosVisible(false);
        vm.loaderVisible(false);   
        vm.liquidacionesVisible(false);
        vm.beneficiariosVisible(false);
        vm.tercerosVisible(false);
        vm.notasVisible(false);
        
    };

    /*---------------------------------------------------------------------------------*/
    
    //Activa la pantalla de detalle de siniestros
    vm.mostrarDetalleDeSiniestro = function (){
        
        vm.contenidoVisible(true);
        vm.siniestrosVisible(false);  
        vm.detalleDeSiniestrosVisible(true);
        vm.loaderVisible(false); 
        vm.liquidacionesVisible(false);
        vm.beneficiariosVisible(false);
        vm.tercerosVisible(false);
        vm.notasVisible(false);
    };

    /*---------------------------------------------------------------------------------*/

    //Activa la pantalla de liquidaciones
    vm.mostrarLiquidaciones = function(){

        vm.contenidoVisible(true);
        vm.siniestrosVisible(false);  
        vm.detalleDeSiniestrosVisible(false);
        vm.loaderVisible(false); 
        vm.liquidacionesVisible(true);
        vm.beneficiariosVisible(false);
        vm.tercerosVisible(false);
        vm.notasVisible(false);
    };

    vm.mostrarNotas = function(){        

        vm.contenidoVisible(true);
        vm.siniestrosVisible(false);  
        vm.detalleDeSiniestrosVisible(false);
        vm.loaderVisible(false); 
        vm.liquidacionesVisible(false);
        vm.beneficiariosVisible(false);
        vm.tercerosVisible(false);
        vm.notasVisible(true);
    };


    vm.mostrarBeneficiarios = function(){        

        vm.contenidoVisible(true);
        vm.siniestrosVisible(false);  
        vm.detalleDeSiniestrosVisible(false);
        vm.loaderVisible(false); 
        vm.liquidacionesVisible(false);
        vm.beneficiariosVisible(true);
        vm.tercerosVisible(false);
        vm.notasVisible(false);
    };
    
    vm.mostrarTerceros = function(){        

        vm.contenidoVisible(true);
        vm.siniestrosVisible(false);  
        vm.detalleDeSiniestrosVisible(false);
        vm.loaderVisible(false); 
        vm.liquidacionesVisible(false);
        vm.beneficiariosVisible(false);
        vm.tercerosVisible(true);
        vm.notasVisible(false);
    };
    

   /*---------------------------------------------------------------------------------*/
    
   ko.applyBindings(vm);
}