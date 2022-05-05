provinciaSeguros.posicionConsolidada.Cobranzas.inicializarModelo = function (vm)
{
    provinciaSeguros.posicionConsolidada.Cobranzas.idRector = parent.Xrm.Page.getAttribute("axx_idrector").getValue();
    provinciaSeguros.posicionConsolidada.Cobranzas.idRamo;
    provinciaSeguros.posicionConsolidada.Cobranzas.numeroPoliza;
    provinciaSeguros.posicionConsolidada.Cobranzas.numeroCertificado

    vm.loaderURL = "https://" + window.location.hostname + "/_imgs/processing_loader.gif";
    vm.volverURL = "https://" + window.location.hostname + "//WebResources/axx_botonPosicionConsolidadaVolver";
    
    //Variables de visibilidad
    vm.loaderVisible = ko.observable(false);                     //Visibilidad del loader
    vm.contenidoVisible = ko.observable(false);                 //Visibilidad de la app
    vm.cobranzaVisible = ko.observable(false);                 //Visibilidad de cobranzas
    vm.cobranzasDetalleVisible = ko.observable(false);          //Visibilidad detalle de cobranza

    //Variables inicializadas del knockout
    vm.cobranzas = ko.observable();                             //Guarda la informacion traida del servicio de cobrazas
    vm.detalleCobranza = ko.observable();
    vm.saldomo = ko.observable();
    vm.saldop = ko.observable();
    
    //Arreglos inicializados del knockout
    vm.informacionCobranzas = ko.observableArray([]);                //Guardo el arreglo de cobranzas
    vm.informacionDetalleCobranza =ko.observableArray([]);  
    
    //Detalles de poliza
    vm.polizaFecha = ko.observable();
    vm.polizaDeuda = ko.observable();
    vm.cobranzasUltimoPago = ko.observable();
    vm.cobranzasDeuda = ko.observable();
    vm.cobranzasMoneda = ko.observable();
    
    //Paginación Cobranzas----------------------------------------------------------------------------------
    vm.informacionCobranzasPaginaActual = ko.observable(0);       //Pagina que se esta mostrando en pantalla
    vm.informacionCobranzasItemsPorPagina = ko.observable(10);    //Cantidad de polizas por pagina
    
    //Separa la lista en paginas de un tamaño definido
    vm.informacionCobranzasListaPaginada = ko.dependentObservable(function () {
        var size = vm.informacionCobranzasItemsPorPagina();
        var start = vm.informacionCobranzasPaginaActual() * size;
        return vm.informacionCobranzas.slice(start, start + size);
    });

    //Maximo numero de paginas
    vm.informacionCobranzasMaximoPaginas = ko.dependentObservable(function () {
        return Math.ceil(vm.informacionCobranzas().length/vm.informacionCobranzasItemsPorPagina())-1;
    });

    //Salta a la pagina anterior
    vm.informacionCobranzasPaginaAnterior = function () {
        if (vm.informacionCobranzasPaginaActual() > 0) {
            vm.informacionCobranzasPaginaActual(vm.informacionCobranzasPaginaActual() - 1);
        }
    };

    //Salta a la pagina siguiente
    vm.informacionCobranzasPaginaSiguiente = function () {
        if (vm.informacionCobranzasPaginaActual() < vm.informacionCobranzasMaximoPaginas()) {
            vm.informacionCobranzasPaginaActual(vm.informacionCobranzasPaginaActual() + 1);
        }
    };

    //Devuelve la lista de las paginas para mostrar en el foreach
    vm.informacionCobranzasTodasLasPaginas = ko.dependentObservable(function () {
        var paginas = [];
        for (i = 0; i <= vm.informacionCobranzasMaximoPaginas() ; i++) {
            paginas.push({ numeroPagina: (i + 1) });
        }
        return paginas;
    });
    
    //Salta a cualquier pagina
    vm.informacionCobranzasIrAPagina = function (indice) {
        vm.informacionCobranzasPaginaActual(indice);
    };

    //Funciones inicializada del knockout
    vm.llamarCobranzasSiguiente = function(){};                //Trae la poliza siguiente
    vm.llamarCobranzasAnterior = function(){};                 //Trae la poliza anterior
    
    //Paginación Detalle ----------------------------------------------------------------------------------
    vm.informacionDetallesCobranzasPaginaActual = ko.observable(0);       //Pagina que se esta mostrando en pantalla
    vm.informacionDetallesCobranzasItemsPorPagina = ko.observable(10);    //Cantidad de polizas por pagina
    
    //Separa la lista en paginas de un tamaño definido
    vm.informacionDetallesCobranzasListaPaginada = ko.dependentObservable(function () {
        var size = vm.informacionDetallesCobranzasItemsPorPagina();
        var start = vm.informacionDetallesCobranzasPaginaActual() * size;
        return vm.informacionDetalleCobranza.slice(start, start + size);
    });

    //Maximo numero de paginas
    vm.informacionDetallesCobranzasMaximoPaginas = ko.dependentObservable(function () {
        return Math.ceil(vm.informacionDetalleCobranza().length/vm.informacionDetallesCobranzasItemsPorPagina())-1;
    });

    //Salta a la pagina anterior
    vm.informacionDetallesCobranzasPaginaAnterior = function () {
        if (vm.informacionDetallesCobranzasPaginaActual() > 0) {
            vm.informacionDetallesCobranzasPaginaActual(vm.informacionDetallesCobranzasPaginaActual() - 1);
        }
    };

    //Salta a la pagina siguiente
    vm.informacionDetallesCobranzasPaginaSiguiente = function () {
        if (vm.informacionDetallesCobranzasPaginaActual() < vm.informacionDetallesCobranzasMaximoPaginas()) {
            vm.informacionDetallesCobranzasPaginaActual(vm.informacionDetallesCobranzasPaginaActual() + 1);
        }
    };

    //Devuelve la lista de las paginas para mostrar en el foreach
    vm.informacionDetallesCobranzasTodasLasPaginas = ko.dependentObservable(function () {
        var paginas = [];
        for (i = 0; i <= vm.informacionDetallesCobranzasMaximoPaginas() ; i++) {
            paginas.push({ numeroPagina: (i + 1) });
        }
        return paginas;
    });
    
    //Salta a cualquier pagina
    vm.informacionDetallesCobranzasIrAPagina = function (indice) {
        vm.informacionDetallesCobranzasPaginaActual(indice);
    };

    // ????
    // vm.informacionCertificados = ko.observableArray([]);    //Guarda el arreglo de los certificados
    // vm.informacionCoberturas = ko.observableArray([]);      //Guarda el arreglo de las coberturas
    
    //Funciones inicializada del knockout
    vm.llamarDetallesCobranzasSiguiente = function(){};                //Trae la poliza siguiente
    vm.llamarDetallesCobranzasAnterior = function(){};                 //Trae la poliza anterior
    
    /*----------------------------- VISIBILIDAD --------------------------------*/
    
    vm.mostrarCobranzas = function (){
        vm.cobranzaVisible(true);
        vm.cobranzasDetalleVisible(false);
        vm.loaderVisible(false);
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Obtener los cobranzas
    
    vm.loaderVisible(true);
    
	provinciaSeguros.posicionConsolidada.Cobranzas.servicios.obtenerCobranzas(
                 provinciaSeguros.posicionConsolidada.Cobranzas.idRector,
                 provinciaSeguros.posicionConsolidada.Cobranzas.idRamo,
            function(polizas){
            
                vm.loaderVisible(false);
            
                vm.cobranzas = polizas;
                
                if (vm.cobranzas.posicion_consolidada) {
                
                    vm.cobranzas.posicion_consolidada.forEach(function (element){
                        
                        vm.saldomo = ponerComas(element.saldo_mo);
                        vm.saldop = ponerComas(element.saldop);
                        
                        element.cobranzaBehaviour = function(){
                            vm.abrirDetallesCobranzas(element.poliza, element.certificado, element.id_ramo);
                        }
                    });
                    vm.polizaFecha(vm.cobranzas.fecha);
                    vm.polizaDeuda(ponerComas(vm.cobranzas.deuda_total));
                    
                    vm.informacionCobranzas(vm.cobranzas.posicion_consolidada);
                    
                }
                
                vm.mostrarCobranzas();
            }
            
    );
    
    /*---------------------------------------------------------------------------------*/
    
    vm.mostrarDetalleCobranzas = function(){
        
        vm.cobranzaVisible(false);
        vm.cobranzasDetalleVisible(true);
        vm.loaderVisible(false);
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Activa el loader
    vm.mostrarLoader = function (){
        
        vm.cobranzaVisible(false);
        vm.cobranzasDetalleVisible(false);
        vm.loaderVisible(true);
    }
    
    /*----------------------------- FIN VISIBILIDAD ----------------------------*/
    
    
    //Vuelve a la pantalla de polizas
    vm.volverCobranzas = function(){

        vm.abrirCobranzas(provinciaSeguros.posicionConsolidada.Cobranzas.idRector);
    }
    
    /*---------------------------------------------------------------------------------*/

    //Maneja los datos de los detalles de poliza
    vm.abrirDetallesCobranzas = function (nroPoliza, nroCertificado, ramo){
    
        //Set loading visible
        vm.mostrarLoader();
        
        //Set Variable continua
        provinciaSeguros.posicionConsolidada.Cobranzas.numeroPoliza = nroPoliza;
        provinciaSeguros.posicionConsolidada.Cobranzas.numeroCertificado = nroCertificado;
        provinciaSeguros.posicionConsolidada.Cobranzas.idRamo = ramo;
        //Obtiene detalle de poliza especifica
        provinciaSeguros.posicionConsolidada.Cobranzas.servicios.obtenerDetalleCobranza(
            provinciaSeguros.posicionConsolidada.Cobranzas.idRector,
            provinciaSeguros.posicionConsolidada.Cobranzas.idRamo,
            provinciaSeguros.posicionConsolidada.Cobranzas.numeroPoliza,
            provinciaSeguros.posicionConsolidada.Cobranzas.numeroCertificado,
            function(result){
                
                vm.detalleCobranza = result;
                vm.cobranzasUltimoPago(vm.detalleCobranza.fecha_ultimo_pago);
                vm.cobranzasDeuda(vm.detalleCobranza.deuda_total);
                vm.cobranzasMoneda(vm.detalleCobranza.moneda);
    
                
                vm.informacionDetalleCobranza(vm.detalleCobranza.estado_deuda);

                vm.mostrarDetalleCobranzas();
            }
        );
    }
    
    /*---------------------------------------------------------------------------------*/
     
    function ponerComas(numero) {
        
        if (numero) {
        
            var nuevoNumero = numero.replace(".","#");
            
            return nuevoNumero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace("#",",");
        
        } else return "";
    }
 
   /*---------------------------------------------------------------------------------*/
    
}