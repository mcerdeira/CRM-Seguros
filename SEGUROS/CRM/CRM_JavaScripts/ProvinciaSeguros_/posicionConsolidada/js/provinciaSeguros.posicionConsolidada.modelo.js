provinciaSeguros.posicionConsolidada.inicializarModelo = function (vm)
{
    provinciaSeguros.posicionConsolidada.idRector = parent.Xrm.Page.getAttribute("axx_idrector").getValue();
    provinciaSeguros.posicionConsolidada.idRamo;
    provinciaSeguros.posicionConsolidada.numeroPoliza;
    provinciaSeguros.posicionConsolidada.numeroCertificado

    vm.loaderURL = "https://" + window.location.hostname + "/_imgs/processing_loader.gif";
    vm.volverURL = "https://" + window.location.hostname + "//WebResources/axx_botonPosicionConsolidadaVolver";
    vm.anteriorPolizaURL = "https://" + window.location.hostname + "//WebResources/axx_botonPolizaAnterior";
    vm.siguientePolizaURL = "https://" + window.location.hostname + "//WebResources/axx_botonPolizaSiguiente";
	
    //Variables de visibilidad
    vm.loaderVisible = ko.observable(true);                     //Visibilidad del loader
    vm.contenidoVisible = ko.observable(false);                 //Visibilidad de la app
	vm.ramosVisible = ko.observable(false);                     //Visibilidad de la pantalla de ramos
    vm.polizasVisible = ko.observable(false);                   //Visibilidad de la pantalla de polizas
    vm.detallesPolizaVisible = ko.observable(false);            //Visibilidad de la pantalla de detalles de poliza
    vm.coberturaVisible = ko.observable(false);                 //Visibilidad de la pantalla de coberturas
    vm.mensajeSinPolizasVisible = ko.observable(false);
    vm.botonPolizaSiguienteVisible = ko.observable(false);
    vm.botonPolizaAnteriorVisible = ko.observable(false);
    
    //Variables inicializadas del knockout
    vm.ramos = ko.observable();                                 //Guarda la informacion traida del servicio de ramos
    vm.riesgos = ko.observable();                               //Guarda el string que muestra la cantidad de riesgos que viene del servicio de ramos
    vm.polizas = ko.observable();                               //guarda la informacion traida del servicio de polizas
    vm.detallesPoliza = ko.observable();                        //Guarda la informacion traida del servicio de detalles de polizas, poliza anterior y poliza siguiente
    vm.certificados = ko.observable();                          //Guarda la informacion traida del servicio de certificados
    vm.coberturas = ko.observable();                            //Guarda la informacion traida del servicio de coberturas
    
    //Arreglos inicializados del knockout
    vm.informacionRamos = ko.observableArray([]);               //Guarda el arreglo de los ramos
    vm.informacionPolizas = ko.observableArray([]);             //Guarda el arreglo de las polizas
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
    vm.informacionCertificadosPaginaAnterior = function () {
        if (vm.informacionPolizasPaginaActual() > 0) {
            vm.informacionPolizasPaginaActual(vm.informacionPolizasPaginaActual() - 1);
        }
    };

    //Salta a la pagina siguiente
    vm.informacionCertificadosPaginaSiguiente = function () {
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

    vm.informacionCertificados = ko.observableArray([]);    //Guarda el arreglo de los certificados
    vm.informacionCoberturas = ko.observableArray([]);      //Guarda el arreglo de las coberturas
    
    //Funciones inicializada del knockout
    vm.llamarPolizaSiguiente = function(){};                //Trae la poliza siguiente
    vm.llamarPolizaAnterior = function(){};                 //Trae la poliza anterior
    
    //Detalles de poliza    
    vm.numeroPoliza = ko.observable();
    vm.prima = ko.observable();
    vm.premio = ko.observable();
    vm.desdeTecnica = ko.observable();
    vm.hastaTecnica = ko.observable();
    vm.desdeRefacturacion = ko.observable();
    vm.hastaRefacturacion = ko.observable();
    vm.formaPago = ko.observable();
    vm.tieneAcreedor = ko.observable();
    vm.esTomador = ko.observable();
    vm.tipoAcreedor = ko.observable();
    vm.numeroTarjeta = ko.observable();
    vm.vencimientoTarjeta = ko.observable();
    vm.bancoEmisor = ko.observable();
    vm.numeroProductorAsociado = ko.observable();
    vm.promocion = ko.observable();
    vm.cbu = ko.observable();
    vm.productorAsociado = ko.observable();
    vm.esquemaPago = ko.observable();
    vm.deudaExigible = ko.observable();
    vm.estado = ko.observable();
    vm.cantidadCertificados = ko.observable();
    vm.tipoRiesgo = ko.observable();
    vm.idSiguiente = ko.observable();
    vm.idAnterior = ko.observable();
    vm.numeroCertificado = ko.observable();
    
    /*---------------------------------------------------------------------------------*/

    //Activa la pantalla de ramos
    vm.mostrarRamos = function (){
        
        //Reset variables
        provinciaSeguros.posicionConsolidada.idRamo = "";
        
        vm.loaderVisible(false);
        vm.contenidoVisible(true);
        vm.ramosVisible(true);
        vm.polizasVisible(false);
        vm.detallesPolizaVisible(false);
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Obtener los ramos
	provinciaSeguros.posicionConsolidada.servicios.obtenerRamos(
        provinciaSeguros.posicionConsolidada.idRector,
        function (ramos) {
                
            vm.ramos(ramos);
            vm.riesgos("Cantidad de riesgos: " + ramos.cantidad_riesgos);
            
            vm.mensajeSinPolizasVisible(ramos.ramos.length == 0);
            
            ramos.ramos.forEach(
                function (element){

                    element.imgUrl = document.location.protocol + '//' +   document.location.hostname + '/WebResources/axx_ramo_' + element.id_ramo;
                    element.ramosBehaviour = function (){

                        vm.abrirPolizas(element.id_ramo);
                    }
                }
            );
            
            vm.informacionRamos(ramos.ramos);
            
            vm.mostrarRamos();
        }
    );

    /*---------------------------------------------------------------------------------*/
    
    //Vuelve a la pantalla de polizas
    vm.volverPolizas = function(){

        vm.abrirPolizas(provinciaSeguros.posicionConsolidada.idRamo);
    }

    /*---------------------------------------------------------------------------------*/

    //Maneja datos de las polizas
	vm.abrirPolizas = function (nroRamo){ 
        
        //Set loading visible
        vm.mostrarLoader(vm);
        
        //Reset Variables
        vm.informacionPolizas([]);
        provinciaSeguros.posicionConsolidada.numeroPoliza = "";
        
        //Set variable continua
        provinciaSeguros.posicionConsolidada.idRamo = nroRamo;
        
        //Obtener polizas
		provinciaSeguros.posicionConsolidada.servicios.obtenerPolizas(            
            provinciaSeguros.posicionConsolidada.idRector,
            provinciaSeguros.posicionConsolidada.idRamo, 
            function(polizas){
            
                vm.polizas = polizas;
                vm.polizas.poliza.forEach(function (element){
                
                    element.polizaBehaviour = function(){
                    
                        vm.abrirDetallesPoliza(element.numero_poliza, element.numero_certificado);
                    }
                    
                });
                vm.informacionPolizas(vm.polizas.poliza);
                vm.mostrarPolizas();
            },
            function(ramos){
                
            }
        );
	}
    
    /*---------------------------------------------------------------------------------*/

    //Activa pantalla de polizas
    vm.mostrarPolizas = function (){
        
        vm.loaderVisible(false);
        vm.contenidoVisible(true);
        vm.ramosVisible(false);
        vm.polizasVisible(true);
        vm.detallesPolizaVisible(false);
    }

    /*---------------------------------------------------------------------------------*/

    //Maneja los datos de los detalles de poliza
    vm.abrirDetallesPoliza = function (nroPoliza, nroCertificado){
    
        //Set loading visible
        vm.mostrarLoader(vm);
        
        //Set Variable continua
        provinciaSeguros.posicionConsolidada.numeroPoliza = nroPoliza;
        provinciaSeguros.posicionConsolidada.numeroCertificado = nroCertificado;
    
        //Obtiene detalle de poliza especifica
        provinciaSeguros.posicionConsolidada.servicios.obtenerDetallePoliza(
            provinciaSeguros.posicionConsolidada.idRector,
            provinciaSeguros.posicionConsolidada.idRamo,
            provinciaSeguros.posicionConsolidada.numeroPoliza,
            provinciaSeguros.posicionConsolidada.numeroCertificado,
            function(detallesPoliza){
                
                vm.detallesPoliza(detallesPoliza);
                
                vm.numeroPoliza(detallesPoliza.detalle.numero_poliza);
                vm.prima("$" + vm.parsearMoneda(detallesPoliza.detalle.prima));
                vm.premio("$" + vm.parsearMoneda(detallesPoliza.detalle.premio))
                vm.desdeTecnica(detallesPoliza.detalle.desde_tecnica);
                vm.hastaTecnica(detallesPoliza.detalle.hasta_tecnica);
                vm.desdeRefacturacion(detallesPoliza.detalle.desde_refacturacion);
                vm.hastaRefacturacion(detallesPoliza.detalle.hasta_refacturacion);
                vm.formaPago(detallesPoliza.detalle.forma_pago);
                vm.tieneAcreedor((detallesPoliza.detalle.tiene_acreedor == "Si") ? "si" : "no");
                vm.esTomador((detallesPoliza.detalle.es_tomador == "Si") ? "si" : "no");
                vm.tipoAcreedor(detallesPoliza.detalle.tipo_acreedor);
                vm.numeroTarjeta(detallesPoliza.detalle.numero_tarjeta);
                vm.cbu(detallesPoliza.detalle.CBU);
                vm.productorAsociado(detallesPoliza.detalle.productor_asociado);
                vm.esquemaPago(detallesPoliza.detalle.esquema_pago);
                vm.deudaExigible("$" + vm.parsearMoneda(detallesPoliza.detalle.deuda_exigible));
                vm.estado(detallesPoliza.detalle.estado);
                vm.cantidadCertificados(detallesPoliza.detalle.cantidad_certificados);
                vm.tipoRiesgo(detallesPoliza.detalle.tipo_riesgo);
                vm.idSiguiente(detallesPoliza.detalle.id_siguiente);
                vm.idAnterior(detallesPoliza.detalle.id_anterior);
                vm.vencimientoTarjeta(detallesPoliza.detalle.vencimiento_tarjeta);
                vm.bancoEmisor(detallesPoliza.detalle.banco_emisor);
                vm.numeroProductorAsociado(detallesPoliza.detalle.numero_productor_asociado);
                vm.promocion(detallesPoliza.detalle.promocion);
                //vm.numeroCertificado(detallesPoliza.detalle.nro_certificado)

                vm.botonPolizaSiguienteVisible(detallesPoliza.detalle.id_siguiente != "")
                vm.botonPolizaAnteriorVisible(detallesPoliza.detalle.id_anterior != "");
                
                vm.llamarPolizaSiguiente = function(){vm.abrirPolizaSiguiente(detallesPoliza.detalle.id_siguiente)};
                vm.llamarPolizaAnterior = function(){vm.abrirPolizaAnterior(detallesPoliza.detalle.id_anterior)};

                provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosPoliza(
                    provinciaSeguros.posicionConsolidada.idRector, 
                    provinciaSeguros.posicionConsolidada.idRamo, 
                    provinciaSeguros.posicionConsolidada.numeroPoliza, 
                    provinciaSeguros.posicionConsolidada.numeroCertificado, 
                    0,
                    function(certificados){
                        
                        vm.certificados = certificados;
                        
                        if (vm.certificados.certificados) {
                        
                            vm.certificados.certificados.forEach(
                                function (element){
                            
                                    element.certificadoBehaviour = function(){
                                    
                                        vm.abrirCobertura(element.numero_certificado);
                                    }
                                }
                            );
                        }
                        
                        vm.informacionCertificados(vm.certificados.certificados);

                        vm.mostrarDetallePoliza();
                    }
                );                          
            }
        );
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Maneja los datos de los detalles de poliza anterior o siguiente
    vm.abrirPolizaSiguiente = function(){
    
        //Set loading visible
        vm.mostrarLoader(vm);
        
        //Poliza siguiente
        provinciaSeguros.posicionConsolidada.servicios.obtenerPolizaSiguiente(
            provinciaSeguros.posicionConsolidada.idRector,
            provinciaSeguros.posicionConsolidada.idRamo,
            provinciaSeguros.posicionConsolidada.numeroPoliza, 
            function(siguiente){
            
                vm.detallesPoliza(siguiente);
                
                vm.numeroPoliza(siguiente.detalle.numero_poliza);
                vm.prima("$" + vm.parsearMoneda(siguiente.detalle.prima));
                vm.premio("$" + vm.parsearMoneda(siguiente.detalle.premio))
                vm.desdeTecnica(siguiente.detalle.desde_tecnica);
                vm.hastaTecnica(siguiente.detalle.hasta_tecnica);
                vm.desdeRefacturacion(siguiente.detalle.desde_refacturacion);
                vm.hastaRefacturacion(siguiente.detalle.hasta_refacturacion);
                vm.formaPago(siguiente.detalle.forma_pago);
                vm.tieneAcreedor((siguiente.detalle.tiene_acreedor) ? "si" : "no");
                vm.esTomador((siguiente.detalle.es_tomador) ? "si" : "no");
                vm.tipoAcreedor(siguiente.detalle.tipo_acreedor);
                vm.numeroTarjeta(siguiente.detalle.numero_tarjeta);
                vm.cbu(siguiente.detalle.CBU);
                vm.productorAsociado(siguiente.detalle.productor_asociado);
                vm.esquemaPago(siguiente.detalle.esquema_pago);
                vm.deudaExigible("$" + vm.parsearMoneda(siguiente.detalle.deuda_exigible));
                vm.estado(siguiente.detalle.estado);
                vm.cantidadCertificados(siguiente.detalle.cantidad_certificados);
                vm.tipoRiesgo(siguiente.detalle.tipo_riesgo);
                vm.idSiguiente(siguiente.detalle.id_siguiente);
                vm.idAnterior(siguiente.detalle.id_anterior);     
                //vm.numeroCertificado(detallesPoliza.detalle.nro_certificado)
                vm.numeroCertificado = 1;
                
                provinciaSeguros.posicionConsolidada.numeroPoliza = siguiente.detalle.numero_poliza;
                //TODO: modificar para que envie el numero de certificado de la poliza anterior y la siguiente
                provinciaSeguros.posicionConsolidada.numeroCertificado = vm.numeroCertificado;                

                vm.botonPolizaSiguienteVisible(siguiente.detalle.id_siguiente != "")
                vm.botonPolizaAnteriorVisible(siguiente.detalle.id_anterior != "");
                
                vm.llamarPolizaSiguiente = function(){vm.abrirPolizaSiguiente()};
                vm.llamarPolizaAnterior = function(){vm.abrirPolizaAnterior()};
                
                provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosPoliza(
                    provinciaSeguros.posicionConsolidada.idRector, 
                    provinciaSeguros.posicionConsolidada.idRamo, 
                    provinciaSeguros.posicionConsolidada.numeroPoliza, 
                    provinciaSeguros.posicionConsolidada.numeroCertificado, 
                    0,
                    function(certificados){
                        
                        vm.certificados = certificados;
                        vm.certificados.certificados.forEach(
                            function (element){
                        
                                element.certificadoBehaviour = function(){
                                
                                    vm.abrirCobertura(element.numero_certificado);
                                }
                            }
                        );
                        
                        vm.informacionCertificados(vm.certificados.certificados);

                        vm.mostrarDetallePoliza();
                    }
                );    
            }
        );
    }

    /*---------------------------------------------------------------------------------*/
    
    vm.abrirPolizaAnterior = function(){

        //Set loading visible
        vm.mostrarLoader(vm);

        //Poliza anterior
        provinciaSeguros.posicionConsolidada.servicios.obtenerPolizaAnterior(
            provinciaSeguros.posicionConsolidada.idRector,
            provinciaSeguros.posicionConsolidada.idRamo,
            provinciaSeguros.posicionConsolidada.numeroPoliza, 
            function(anterior){
            
                vm.detallesPoliza(anterior);
                
                vm.numeroPoliza(anterior.detalle.numero_poliza);
                vm.prima("$" + vm.parsearMoneda(anterior.detalle.prima));
                vm.premio("$" + vm.parsearMoneda(anterior.detalle.premio))
                vm.desdeTecnica(anterior.detalle.desde_tecnica);
                vm.hastaTecnica(anterior.detalle.hasta_tecnica);
                vm.desdeRefacturacion(anterior.detalle.desde_refacturacion);
                vm.hastaRefacturacion(anterior.detalle.hasta_refacturacion);
                vm.formaPago(anterior.detalle.forma_pago);
                vm.tieneAcreedor((anterior.detalle.tiene_acreedor) ? "si" : "no");
                vm.esTomador((anterior.detalle.es_tomador) ? "si" : "no");
                vm.tipoAcreedor(anterior.detalle.tipo_acreedor);
                vm.numeroTarjeta(anterior.detalle.numero_tarjeta);
                vm.cbu(anterior.detalle.CBU);
                vm.productorAsociado(anterior.detalle.productor_asociado);
                vm.esquemaPago(anterior.detalle.esquema_pago);
                vm.deudaExigible("$" + vm.parsearMoneda(anterior.detalle.deuda_exigible));
                vm.estado(anterior.detalle.estado);
                vm.cantidadCertificados(anterior.detalle.cantidad_certificados);
                vm.tipoRiesgo(anterior.detalle.tipo_riesgo);
                vm.idSiguiente(anterior.detalle.id_siguiente);
                vm.idAnterior(anterior.detalle.id_anterior);     
                //vm.numeroCertificado(detallesPoliza.detalle.nro_certificado)    
                vm.numeroCertificado = 0;
                
                provinciaSeguros.posicionConsolidada.numeroPoliza = anterior.detalle.numero_poliza;
                //TODO: modificar para que envie el numero de certificado de la poliza anterior y la siguiente
                provinciaSeguros.posicionConsolidada.numeroCertificado = vm.numeroCertificado;

                vm.botonPolizaSiguienteVisible(anterior.detalle.id_siguiente != "")
                vm.botonPolizaAnteriorVisible(anterior.detalle.id_anterior != "");
                
                vm.llamarPolizaSiguiente = function(){vm.abrirPolizaSiguiente()};
                vm.llamarPolizaAnterior = function(){vm.abrirPolizaAnterior()};
                
                provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosPoliza(
                    provinciaSeguros.posicionConsolidada.idRector, 
                    provinciaSeguros.posicionConsolidada.idRamo, 
                    provinciaSeguros.posicionConsolidada.numeroPoliza, 
                    provinciaSeguros.posicionConsolidada.numeroCertificado, 
                    0,
                    function(certificados){
                        
                        vm.certificados = certificados;
                        vm.certificados.certificados.forEach(
                            function (element){
                        
                                element.certificadoBehaviour = function(){
                                
                                    vm.abrirCobertura(element.numero_certificado);
                                }
                            }
                        );
                        
                        vm.informacionCertificados(vm.certificados.certificados);

                        vm.mostrarDetallePoliza();
                    }
                );    
            }
        );
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Vuelve a la pantalla de detalle de polizas
    vm.volerDetallepolizas = function(){

        vm.abrirDetallesPoliza(provinciaSeguros.posicionConsolidada.numeroPoliza, provinciaSeguros.posicionConsolidada.numeroCertificado);
    }
    
    /*---------------------------------------------------------------------------------*/
    
    vm.buscarCertificados = function(){

        //Set loading visible
        vm.mostrarLoader(vm);

        var criterioBusqueda = document.getElementById("criterioBusquedaCertificado").value;
        provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosFiltrados(
            provinciaSeguros.posicionConsolidada.idRector, 
            provinciaSeguros.posicionConsolidada.idRamo, 
            provinciaSeguros.posicionConsolidada.numeroPoliza, 
            "patente", 
            criterioBusqueda,
            function(certificados){
                
                vm.certificados = certificados;
                
                if (vm.certificados.cantidad_riesgos != '0') {
                    
                    vm.certificados.certificados.forEach(
                    
                        function (element){
                    
                            element.certificadoBehaviour = function(){
                            
                                vm.abrirCobertura(element.numero_certificado);
                            }
                        }
                    );
                            
                    vm.informacionCertificados(vm.certificados.certificados);

                } else {
                    
                    vm.informacionCertificados(null);
                }

                vm.mostrarDetallePoliza();
            }
        );

    }

    /*---------------------------------------------------------------------------------*/

    //Maneja los datos de las coberturas
    vm.abrirCobertura = function(nroCertificado){

        provinciaSeguros.posicionConsolidada.numeroCertificadoCobertura = nroCertificado;
    
        //Set loading visible
        vm.mostrarLoader(vm);
        
        provinciaSeguros.posicionConsolidada.servicios.obtenerCoberturas(
            provinciaSeguros.posicionConsolidada.idRector, 
            provinciaSeguros.posicionConsolidada.idRamo, 
            provinciaSeguros.posicionConsolidada.numeroPoliza, 
            provinciaSeguros.posicionConsolidada.numeroCertificadoCobertura, 
            function(coberturas){
                
                vm.coberturas(coberturas);
                vm.informacionCoberturas(coberturas.coberturas);

                vm.mostrarCobertura();
            }
        );
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Activa la pantalla de coberturas
    vm.mostrarCobertura = function(){

        vm.loaderVisible(false);
        vm.contenidoVisible(true);
        vm.ramosVisible(false);
        vm.polizasVisible(false);
        vm.detallesPolizaVisible(false);
        vm.coberturaVisible(true);
    }
    
    /*---------------------------------------------------------------------------------*/
    
    //Activa pantalla de detalles de poliza
    vm.mostrarDetallePoliza = function (){
        
        vm.loaderVisible(false);
        vm.contenidoVisible(true);
        vm.ramosVisible(false);
        vm.polizasVisible(false);
        vm.detallesPolizaVisible(true);
        vm.coberturaVisible(false);
    }
    
   /*---------------------------------------------------------------------------------*/

    //Activa el loader
    vm.mostrarLoader = function (){
        
        vm.loaderVisible(true);
        vm.contenidoVisible(false);
    }
    
   /*---------------------------------------------------------------------------------*/
    vm.parsearMoneda = function (dato){
    
        dato = dato.split('.');
        var separados;
        var cif = 3;
        
        if(!dato[1]){
            dato[1] = '00';
        }
        
        if (dato[0].length > cif) {
        var uno = dato[0].length % cif
        if (uno === 0) {
          separados = []
        } else {
          separados = [dato[0].substring(0, uno)]
        }
        var posiciones = parseInt(dato[0].length / cif)
        for (let i = 0; i < posiciones; i++) {
          var pos = ((i * cif) + uno)

          separados.push(dato[0].substring(pos, (pos + 3)))
        }
      } else {
        separados = [dato[0]]
    }

    return separados.join('.') + ',' + dato[1];
    }
}