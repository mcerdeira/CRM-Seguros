var serviceUrl = '';
var environment = '';

provinciaSeguros.environments = {};
provinciaSeguros.environments.QA = "ENVIRONMENT_QA";
provinciaSeguros.environments.DESA = "ENVIRONMENT_DESA";
provinciaSeguros.environments.PRODUCCION = "ENVIRONMENT_PRODUCCION";

function logicaCliente(data){
    			console.log(data);
}

provinciaSeguros.posicionConsolidada.Cobranzas.inicializarServicios = function (){

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
    provinciaSeguros.posicionConsolidada.Cobranzas.servicios.inicializar = function(successCallback, errorCallback) {

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
    provinciaSeguros.posicionConsolidada.Cobranzas.servicios.obtenerToken = function (successCallback, errorCallback) {
    
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
    provinciaSeguros.posicionConsolidada.Cobranzas.servicios.obtenerCobranzas = function(nroPersona, nroRamo, successCallback, errorCallback){

        if (nroPersona) {

            provinciaSeguros.posicionConsolidada.servicios.inicializar(function (url) {
                
                serviceUrl = url;
                
                var relativeUrl = '/personas/' + nroPersona + '/composiciondeuda';
                
                provinciaSeguros.posicionConsolidada.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
                    
                        successCallback(polizas)
                        
                    }, function () { 
                    
                        // errorCallback();
                
                });
            });
        } else successCallback({"posicion_consolidada":[],"fecha": "","deuda_total": ""});
    }

    /*---------------------------------------------------------------------------------*/
    provinciaSeguros.posicionConsolidada.Cobranzas.servicios.obtenerDetalleCobranza = function(nroPersona, nroRamo,nroPoliza,nroCertificado, successCallback, errorCallback){

        var relativeUrl = '/personas/' + nroPersona + '/ramos/' + nroRamo + '/poliza/' + nroPoliza + '/certificado/' + nroCertificado + '/estadodeuda';
        
        provinciaSeguros.posicionConsolidada.Cobranzas.servicios.getServicioPolizas(serviceUrl + relativeUrl, function (polizas) {
            
                successCallback(polizas);
                
            }, function () { 
            
                // errorCallback();
        
        });
    }



    /*---------------------------------------------------------------------------------*/
    provinciaSeguros.posicionConsolidada.Cobranzas.servicios.getServicioPolizas = function(url, successCallback, errorCallback) {      
        
        provinciaSeguros.posicionConsolidada.Cobranzas.servicios.obtenerToken( function (token) {
            
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


}