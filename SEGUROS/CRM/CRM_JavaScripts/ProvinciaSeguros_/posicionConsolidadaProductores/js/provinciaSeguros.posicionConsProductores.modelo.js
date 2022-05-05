provinciaSeguros.posicionConsProductores.inicializarModelo = function ()
{
    provinciaSeguros.posicionConsProductores.nroProductor = parent.Xrm.Page.getAttribute("axx_numeroproductor").getValue();
    provinciaSeguros.posicionConsProductores.idRamo = "";
    provinciaSeguros.posicionConsProductores.numeroPoliza;
    provinciaSeguros.posicionConsProductores.numeroCertificado

    var vm = {};
    
    vm.loaderURL = "https://" + window.location.hostname + "/_imgs/processing_loader.gif";
    vm.volverURL = "https://" + window.location.hostname + "//WebResources/axx_botonPosicionConsolidadaVolver";
	
    //Variables de visibilidad
    vm.loaderVisible = ko.observable(true);                     //Visibilidad del loader.
    vm.ramosVisible = ko.observable(false);                     //Visibilidad de la pantalla de ramos.
    vm.detalleVisible = ko.observable(false);                   //Visibilidad de la pantalla de detalle.
    vm.mensajeSinPolizasVisible = ko.observable(false);   
      
    
    //Variables inicializadas del knockout
    vm.ramos = ko.observable();                                 //Guarda la informacion traida del servicio de ramos
    vm.cantidadPolizas = ko.observable();                       //Guarda información traída del servicio de detalle.
    vm.cantidadClientes = ko.observable();                      //Guarda información traída del servicio de detalle.
    vm.premio = ko.observable();                                //Guarda información traída del servicio de detalle.
    vm.deudaExigible = ko.observable();                         //Guarda información traída del servicio de detalle.
    vm.contribucionMarginal = ko.observable();                  //Guarda información traída del servicio de detalle.    
    vm.cantidadCertificados = ko.observable();                  //Guarda información traída del servicio de detalle.
	vm.porcentaje =ko.observable(); 							//Guarda información traída del servicio de detalle.
	vm.fecha_ultima_actualizacion =ko.observable(); 			//Guarda información traída del servicio de detalle.
    vm.nombreRamo = ko.observable();                            //Guarda información del ramo seleccionado.

    
    //Arreglos inicializados del knockout
    vm.informacionRamos = ko.observableArray([]);               //Guarda el arreglo de los ramos
    
    /*---------------------------------------------------------------------------------*/

    //Activa la pantalla de ramos
    vm.mostrarRamos = function (){
        
        //Reset variables
        provinciaSeguros.posicionConsProductores.idRamo = "";
        
        vm.ramosVisible(true);
        vm.detalleVisible(false);
        vm.loaderVisible(false);
        
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Obtener los ramos
	provinciaSeguros.posicionConsProductores.servicios.obtenerRamos(
    
        provinciaSeguros.posicionConsProductores.nroProductor,
        function (ramos) {
                
            vm.ramos(ramos);
            vm.mensajeSinPolizasVisible(ramos.ramos.length == 0);

            ramos.ramos.forEach(
                function (element){

                    element.imgUrl = document.location.protocol + '//' +   document.location.hostname + '/WebResources/axx_ramo_' + element.id_ramo;
                    element.ramosBehaviour = function (){

                        provinciaSeguros.posicionConsProductores.idRamo = element.id_ramo;

                        vm.abrirDetalle(element.id_ramo, element.nombre_ramo);
                    }
                }
            );
            
            vm.informacionRamos(ramos.ramos);
            
            vm.mostrarRamos();
        }
    );

    /*---------------------------------------------------------------------------------*/
    
    //Activa la pantalla de detalle
    vm.abrirDetalle = function (nroRamo, nombreRamo) {
        
        vm.mostrarLoader(vm);
        
        //Obtener polizas
		provinciaSeguros.posicionConsProductores.servicios.obtenerDetalle(            
            provinciaSeguros.posicionConsProductores.nroProductor,
            provinciaSeguros.posicionConsProductores.idRamo,
            function(detalle){
            
                vm.mostrarDetalle(detalle, nombreRamo);
            }
        );
    }

    /*---------------------------------------------------------------------------------*/
    
    //Activa la pantalla de detalle
    vm.mostrarDetalle = function (detalle, nombreRamo){
        
        vm.nombreRamo(nombreRamo);
        vm.cantidadPolizas(detalle.cantidad_polizas);
        vm.cantidadClientes(detalle.cantidad_clientes);
        vm.premio(ponerComas(detalle.premio));
        vm.deudaExigible(ponerComas(detalle.deuda_exigible));
        vm.contribucionMarginal(ponerComas(detalle.contribucion_marginal));
        vm.cantidadCertificados(detalle.cantidad_certificados);
        vm.porcentaje(ponerComas(detalle.porcentaje));
		vm.fecha_ultima_actualizacion(formatearFecha(detalle.fecha_ultima_modificacion));
		
        vm.ramosVisible(false);
        vm.detalleVisible(true);
        vm.loaderVisible(false);
    }
    
     /*---------------------------------------------------------------------------------*/

    //Activa el loader
    vm.mostrarLoader = function (){
        
        vm.loaderVisible(true);
        vm.ramosVisible(false);
        vm.detalleVisible(false);
    }
    
   /*---------------------------------------------------------------------------------*/
   
    function ponerComas(numero) {
        
        var nuevoNumero = numero.replace(".","#");
        
        return nuevoNumero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace("#",",");
    }
 
   /*---------------------------------------------------------------------------------*/
    
	function formatearFecha(sFec)
	{
		var fec = new Date(sFec);

		var dd = fec.getDate();
		var mm = fec.getMonth() + 1; 
		var yyyy = fec.getFullYear();

		if(dd<10) 
			dd='0'+dd;

		if(mm<10) 
			mm='0'+mm;
			
	     return dd + '/' + mm +'/' +yyyy;
	}

    ko.applyBindings(vm);
}