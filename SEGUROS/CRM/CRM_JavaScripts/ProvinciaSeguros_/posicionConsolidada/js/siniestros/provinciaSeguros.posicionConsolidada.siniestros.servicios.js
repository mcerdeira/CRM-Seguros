var serviceUrl = '';

function logicaCliente(data){
    			console.log(data);
}

provinciaSeguros.environments = {};
provinciaSeguros.environments.QA = "ENVIRONMENT_QA";
provinciaSeguros.environments.DESA = "ENVIRONMENT_DESA";
provinciaSeguros.environments.PRODUCCION = "ENVIRONMENT_PRODUCCION";

provinciaSeguros.posicionConsolidada.siniestros.inicializarServicios = function (){
    
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
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerValor = function(clave, successCallback, errorCallback)  {

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

    provinciaSeguros.posicionConsolidada.siniestros.inicializar = function(successCallback, errorCallback) {

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
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerToken = function (successCallback, errorCallback) {
    
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
        
        provinciaSeguros.posicionConsolidada.siniestros.obtenerValor('POLIZAS_USUARIO_SERVICIOS', function (usuario) {
            
            req.send('{"password": "' + usuario.split('|')[1] + '","username": "' + usuario.split('|')[0] + '"}');
        });
    }

    /*---------------------------------------------------------------------------------*/
        
    provinciaSeguros.posicionConsolidada.siniestros.getServicioSiniestros = function(url, successCallback, errorCallback){
    
        provinciaSeguros.posicionConsolidada.siniestros.obtenerToken( function (token) {
            
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
                        successCallback({"siniestros":[]});
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

    provinciaSeguros.posicionConsolidada.siniestros.obtenerSiniestros = function(nroPersona, successCallback, errorCallback){
        
        if (nroPersona) {
        
            provinciaSeguros.posicionConsolidada.siniestros.inicializar(function (url) {
                    
                    serviceUrl = url;

                    var relativeUrl =  '/personas/' + nroPersona + '/siniestros';
                    
                    provinciaSeguros.posicionConsolidada.siniestros.getServicioSiniestros(serviceUrl + relativeUrl, function (siniestros) {
                        
                            successCallback(siniestros);
                            
                        }, function () { 
                        
                            // errorCallback();
                    });
            });
        } 
    }

    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerBeneficiarios = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

        var relativeUrl =  '/personas/' + nroPersona +  '/siniestros/' + nroSiniestro + '/ramo/' + nroRamo + '/beneficiarios';
                
        provinciaSeguros.posicionConsolidada.siniestros.getServicioSiniestros(serviceUrl + relativeUrl, function (siniestros) {
            
                successCallback(siniestros);
                
            }, function () { 
            
                // errorCallback();
        });
    }

    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerDetallesDeSiniestros = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

        var relativeUrl =  '/personas/' + nroPersona +  '/siniestros/' + nroSiniestro + '/ramo/' + nroRamo;
                
        provinciaSeguros.posicionConsolidada.siniestros.getServicioSiniestros(serviceUrl + relativeUrl, function (siniestros) {
            
                successCallback(siniestros);
                
            }, function () { 
            
                // errorCallback();
        });
    }          

    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerTerceros = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){
        
        var relativeUrl =  '/personas/' + nroPersona +  '/terceros/' + nroSiniestro + '/ramo/' + nroRamo + '/terceros';
                
        provinciaSeguros.posicionConsolidada.siniestros.getServicioSiniestros(serviceUrl + relativeUrl, function (siniestros) {
            
                successCallback(siniestros);
                
            }, function () { 
            
                // errorCallback();
        });
    }


    /*---------------------------------------------------------------------------------*/
        
    provinciaSeguros.posicionConsolidada.siniestros.obtenerNotas = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

        
        var relativeUrl =  '/personas/' + nroPersona +  '/siniestros/' + nroSiniestro + '/ramo/' + nroRamo + '/notas';
                
        provinciaSeguros.posicionConsolidada.siniestros.getServicioSiniestros(serviceUrl + relativeUrl, function (siniestros) {
            
                successCallback(siniestros);
                
            }, function () { 
            
                // errorCallback();
        });
    }
  

    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerLiquidaciones = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

       var relativeUrl =  '/personas/' + nroPersona +  '/siniestros/' + nroSiniestro + '/ramo/' + nroRamo + '/liquidaciones';
                
        provinciaSeguros.posicionConsolidada.siniestros.getServicioSiniestros(serviceUrl + relativeUrl, function (siniestros) {
            
                successCallback(siniestros);
                
            }, function () { 
            
                // errorCallback();
        });
    }

    /*---------------------------------------------------------------------------------*/

}