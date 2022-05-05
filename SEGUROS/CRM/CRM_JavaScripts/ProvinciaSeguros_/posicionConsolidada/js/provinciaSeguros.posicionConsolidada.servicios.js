var serviceUrl = '';
var environment = '';

provinciaSeguros.environments = {};
provinciaSeguros.environments.QA = "ENVIRONMENT_QA";
provinciaSeguros.environments.DESA = "ENVIRONMENT_DESA";
provinciaSeguros.environments.PRODUCCION = "ENVIRONMENT_PRODUCCION";

function logicaCliente(data){
    			console.log(data);
}

provinciaSeguros.posicionConsolidada.inicializarServicios = function (){
    
    if(window.location.hostname == "psegurosd.crm2.dynamics.com"){

        environment = provinciaSeguros.environments.DESA;
    }
    else if(window.location.hostname == "psegurost.crm2.dynamics.com"){

        environment = provinciaSeguros.environments.QA;
    }
    else if(window.location.hostname == "pseguros.crm2.dynamics.com"){

        environment = provinciaSeguros.environments.PRODUCCION;
    }
    
    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.servicios.obtenerValor = function(clave, successCallback, errorCallback)  {

        var req = new XMLHttpRequest();
        
        req.open("GET", 'https://' + window.location.hostname + "/api/data/v8.2/axx_parametrizaciondesarrollos()?$select=axx_valor&$filter=axx_clave%20eq%20%27" + clave + "%27", true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        
        req.onreadystatechange = function() {
            
            if (this.readyState === 4) {
                
                req.onreadystatechange = null;
                
                if (this.status === 200) {

                    var result = JSON.parse(this.response);
                    var axx_valor = result.value[0]["axx_valor"];
                    
                    successCallback(axx_valor);
                    
                } else {
                    
                    errorCallback();
                }
            }
        };
        
        req.send();
    }
    
    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.inicializar = function(successCallback, errorCallback) {

        var req = new XMLHttpRequest();
        
        req.open("GET", 'https://' + window.location.hostname + "/api/data/v8.2/axx_parametrizaciondesarrollos()?$select=axx_valor&$filter=axx_clave%20eq%20%27POLIZAS_URL%27", true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        
        req.onreadystatechange = function() {
            
            if (this.readyState === 4) {
                
                req.onreadystatechange = null;
                
                if (this.status === 200) {

                    var result = JSON.parse(this.response);
                    var axx_valor = result.value[0]["axx_valor"];
                    
                    successCallback(axx_valor);
                    
                } else {
                    
                    errorCallback();
                }
            }
        };
        
        req.send();
    }
           
    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.servicios.obtenerToken = function (successCallback, errorCallback) {
    
        var req = new XMLHttpRequest();
        
        req.open("POST", serviceUrl + "/authentication", true);

        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader('Access-Control-Expose-Headers', 'Authorization');
        
        req.onreadystatechange = function() {

            if (this.readyState === 4) {
                
                req.onreadystatechange = null;
                
                if (this.status === 200) {

                    successCallback(this.getResponseHeader('Authorization'));
                    
                } else {
                    
                    errorCallback();
                }
            }
        };
        
        provinciaSeguros.posicionConsolidada.servicios.obtenerValor('POLIZAS_USUARIO_SERVICIOS', function (usuario) {
            
            req.send('{"password": "' + usuario.split('|')[1] + '","username": "' + usuario.split('|')[0] + '"}');
        });
        
        
        

    }
            
    /*---------------------------------------------------------------------------------*/
        
    provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas = function(url, successCallback, errorCallback) {      
        
        provinciaSeguros.posicionConsolidada.servicios.obtenerToken( function (token) {
            
            // Using YQL and JSONP
            $.ajax({
                headers: { 
                    'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Credentials': true,
                    'Environment': environment,
                    'Accept': 'application/json',
                    'Authorization': token
                },
                type: 'GET',
                url: url,          
                datatype: "json",  
                crossDomain: true,
                statusCode: {
                    404: function() {

                      successCallback({"ramos":[],"cantidad_riesgos": "0"});
                    }
                },
                success: 
                    function(response) {
                        
                        successCallback(response);
                        
                    },
                error:
                    function (xhr, status, exception) {

                        if ((xhr.status != 404) && ((xhr.status != 200)))
                            alert("Ha habido un error al intentar obtener la informacion proveniente de rector.");
                        
                        // errorCallback(exception);
                    }
                });
        });
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerRamos = function(nroPersona, successCallback, errorCallback){
        
        if (nroPersona) {
        
            provinciaSeguros.posicionConsolidada.servicios.inicializar(function (url) {
                
                serviceUrl = url;

                var relativeUrl =  '/personas/' + nroPersona + '/ramos';
                
                provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (ramos) {
                    
                    successCallback(ramos)
                    
                }, function () { 
                
                    errorCallback();

                
                });
            });
        } else successCallback({"ramos":[],"cantidad_riesgos": "0"});
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerPolizas = function(nroPersona, nroRamo, successCallback, errorCallback){

        provinciaSeguros.posicionConsolidada.servicios.inicializar(function (url) {
            
            serviceUrl = url;
        
            var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/polizas';
            
            provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
                
                    successCallback(polizas)
                    
                }, function () { 
                
                    // errorCallback();
            
            });
        });
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerDetallePoliza = function(nroPersona, nroRamo, nroPoliza, nroCertificado, successCallback, errorCallback){
            
        var relativeUrl = '';

        if(nroCertificado == 0){

            var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/polizas/' + nroPoliza + '/detalle';
        }
        else{

            var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/polizas/' + nroPoliza + '/' + nroCertificado + '/detalle';
        }
        
        provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
            
                successCallback(polizas);
                
            }, function () { 
            
                // errorCallback();
        
        });
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerPolizaSiguiente = function(nroPersona, nroRamo, nroPoliza, successCallback, errorCallback){
            
        var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/polizasiguiente/' + nroPoliza;
        
        provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
            
                successCallback(polizas);
                
            }, function () { 
            
                // errorCallback();
        
        });
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerPolizaAnterior = function(nroPersona, nroRamo, nroPoliza, successCallback, errorCallback){
            
        var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/polizaanterior/' + nroPoliza;
        
        provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
            
                successCallback(polizas)
                
            }, function () { 
            
                // errorCallback();
        
        });
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosPoliza = function(nroPersona, nroRamo, nroPoliza, nroCertificado, nroPagina, successCallback, errorCallback){
            
        var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/polizas/' + nroPoliza + '/certificados/' + nroCertificado + '/pagina/' + nroPagina;
        
        provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
            
                successCallback(polizas);
                
            }, function () { 
            
                // errorCallback();
        
        });
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosFiltrados = function(nroPersona, nroRamo, nroPoliza, campoFiltro, valorFiltro, successCallback, errorCallback){
            
        var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/polizas/' + nroPoliza + '/certificados?filtro=' + valorFiltro;
        
        provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
            
                successCallback(polizas);
                
            }, function () { 
            
                // errorCallback();
        
        });
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerCoberturas = function(nroPersona, nroRamo, nroPoliza, nroCertificado, successCallback, errorCallback){
            
        var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/polizas/' + nroPoliza + '/certificados/' + nroCertificado + '/coberturas';
        
        provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
            
                successCallback(polizas);
                
            }, function () { 
            
                // errorCallback();
        
        });
    }
    
    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerNids = function(nroPersona, numeroDocumento, successCallback, errorCallback){
            
        
        provinciaSeguros.posicionConsolidada.servicios.inicializar(function (url) {
            
            serviceUrl = url;
        
            var relativeUrl = '/personas/' + nroPersona + '/documento/' + numeroDocumento + '/nid/';

            provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
                
                    successCallback(polizas);
                    
                }, function () { 
                
                    // errorCallback();
            
            });
        });
    }
    
    /*---------------------------------------------------------------------------------*/
}


