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
        var ramos = {
            "ramos": [
                    {"id_ramo": "8", "nombre_ramo": "Instegrales"},
                    {"id_ramo": "4", "nombre_ramo": "Automotores"},
                    {"id_ramo": "18", "nombre_ramo": "Cascos"}
            ],  
            "cantidad_riesgos": "10"  
        }     
 
        setTimeout(
            function(){ 
            successCallback(ramos); 
        }, 
        1500
        );
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerPolizas = function(nroPersona, nroRamo, successCallback, errorCallback){

        provinciaSeguros.posicionConsolidada.servicios.inicializar(function (url) {
            
            var polizas = {
                "posicion_consolidada":[
                {"ramo":"Automotor","poliza":"8765567","certificado":"0","moneda":"$","saldo_mo":"1400","saldo":"1400"},
                {"ramo":"Combinado","poliza":"2109876","certificado":"0","moneda":"U$S","saldo_mo":"400","saldo":"16000"}],
                "fecha":"10/09/2018",
                "deuda_total":"17400"
               } 
     
             setTimeout(
             function(){ 
                 successCallback(polizas);
                }, 
            1500
            );
        });
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerDetallePoliza = function(nroPersona, nroRamo, nroPoliza, nroCertificado, successCallback, errorCallback){
            
        var detalles = {   
            "detalle": {
                "numero_poliza": "1", 
                "prima": "123", 
                "premio": "420", 
                "desde_tecnica": "09/03/2018",   
                "hasta_tecnica": "19/03/2018", 
                "desde_refacturacion": "19/03/2018", 
                "hasta_refacturacion": "19/03/2018",   
                "forma_pago": "Débito",   
                "tiene_acreedor": "true",  
                "es_tomador": "true",  
                "tipo_acreedor": "Banco Provincia",   
                "numero_tarjeta": "**** **** **** **** 4322",  
                "CBU": "2131238217324892374908723",  
                "productor_asociado": "Daniel Marquez",  
                "esquema_pago": "7 días",  
                "deuda_exigible": "123",  
                "estado": "Vigente",   
                "cantidad_certificados": "392",  
                "tipo_riesgo": "patente", 
                "id_siguiente": "22",   
                "id_anterior": "43"  
            },  
            "cantidad_riesgos": "10"  
    }
    
    setTimeout(
        function(){ 
            successCallback(detalles);
        }, 
        1500
    );
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerPolizaSiguiente = function(nroPersona, nroRamo, nroPoliza, successCallback, errorCallback){
            
        var siguiente = {  
            "detalle": {   
                "numero_poliza": "2",   
                "prima": "1234", 
                "premio": "423554640",   
                "desde_tecnica": "12/06/2018",   
                "hasta_tecnica": "12/07/2018",   
                "desde_refacturacion": "22/06/2018",   
                "hasta_refacturacion": "22/07/2018",   
                "forma_pago": "Credito",  
                "tiene_acreedor": "true",  
                "es_tomador": "true",  
                "tipo_acreedor": "Banco Provincia",   
                "numero_tarjeta": "**** **** **** **** 4322",  
                "CBU": "2131238217324892374908723",  
                "productor_asociado": "Juan Garcia",  
                "esquema_pago": "7 días",  
                "deuda_exigible": "45656", 
                "estado": "Vigente",
                "cantidad_certificados": "367892",
                "tipo_riesgo": "patente", 
                "id_siguiente": "",  
                "id_anterior": "40"           
            },      
            "cantidad_riesgos": "20"      
    }   
    
    setTimeout(
        function(){ 
            successCallback(siguiente);
        }, 
        1500
    );
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerPolizaAnterior = function(nroPersona, nroRamo, nroPoliza, successCallback, errorCallback){
            
        var anterior = {  
            "detalle": {   
                "numero_poliza": "5",   
                "prima": "5456", 
                "premio": "798789",   
                "desde_tecnica": "01/06/2018",   
                "hasta_tecnica": "01/07/2018",   
                "desde_refacturacion": "05/06/2018",   
                "hasta_refacturacion": "05/07/2018",   
                "forma_pago": "Debito",  
                "tiene_acreedor": "true",  
                "es_tomador": "true",  
                "tipo_acreedor": "Sanander Rio",   
                "numero_tarjeta": "**** **** **** **** 4322",  
                "CBU": "2131238217324892374908723",  
                "productor_asociado": "Yenny Cali",  
                "esquema_pago": "7 días",  
                "deuda_exigible": "6776", 
                "estado": "Vigente",
                "cantidad_certificados": "2",
                "tipo_riesgo": "patente", 
                "id_siguiente": "32",  
                "id_anterior": ""           
            },      
            "cantidad_riesgos": "15"      
    }  
    
    setTimeout(
        function(){ 
            successCallback(anterior);
        }, 
        1500
    );
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosPoliza = function(nroPersona, nroRamo, nroPoliza, nroCertificado, nroPagina, successCallback, errorCallback){  
        var certificados = {  
            "cantidad_paginas": "5",        
            "numero_pagina": "5",        
            "certificados": [        
               {"descripcion": "Auto", "plan": "Bronce", "riesgo": "AKP-458", "estado": "Activo", "numero_certificado": "21312"},        
               {"descripcion": "Auto", "plan": "Silver", "riesgo": "AKP-777", "estado": "Activo", "numero_certificado": "213"}         
            ]                
    }
    successCallback(certificados); 
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerCertificadosFiltrados = function(nroPersona, nroRamo, nroPoliza, campoFiltro, valorFiltro, successCallback, errorCallback){
            
        var certificados = {  
            "certificados": [      
                {"descripcion": "Auto", "plan": "Silver", "riesgo": "AKP-777", "estado": "Activo", "numero_certificado": "213", "tipo_riesgo": "patente"},  
                {"descripcion": "Auto", "plan": "Silver", "riesgo": "AKP-777", "estado": "Activo", "numero_certificado": "213", "tipo_riesgo": "patente"}     
            ]      
    }

        setTimeout(
            function(){ 
                successCallback(certificados);
            }, 
            1500
    );
    }

    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerCoberturas = function(nroPersona, nroRamo, nroPoliza, nroCertificado, successCallback, errorCallback){
            
        var coberturas = {  

            "coberturas": [  
                    {"detalle": "CONTRA TERCEROS COMPLETO", "suma_cobertura": "150000", "adicionales": "HVCT, Terremoto, Granizo", "suma_adicionales": ""},  
                    {"detalle": "TODO RIESGO", "suma_cobertura": "150000", "adicionales": "", "suma_adicionales": ""}
            ]      
        } 
        
        setTimeout(
            function(){ 
                successCallback(coberturas);
            }, 
            1500
        );
    }
/*---------------------------------------------------------------------------------*/
    provinciaSeguros.posicionConsolidada.servicios.obtenerSiniestros = function(nroPersona, successCallback, errorCallback){
            
        var siniestros = { 

            "siniestros": [ 
                    {"numero": "12345", "nombre_ramo": "Automotor", "id_ramo": "2", "poliza": "1231", 
                    "certificados": "3", "fecha": "24/04/2018",  "tipo_siniestro": " Daño total", "riesgo_cubierto": "BHA-345"}, 
                    {"numero": "12347", "ramo": "Motovehículo", "nombre_ramo": "Automotor", "id_ramo": "2", "poliza": "54321",
                    "certificados": "35", "fecha": "20/04/2018", "tipo_siniestro": " Daño parcial", "riesgo_cubierto": "098-IKL"} 
            ] 
        } 
        
        setTimeout(
            function(){ 
                successCallback(siniestros);
            }, 
            1500
        );
    }
/*---------------------------------------------------------------------------------*/
    
    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.servicios.obtenerNids = function(nroPersona, numeroDocumento, successCallback, errorCallback){
            
        
        var nids = { 
            "nids": [
                {"numero_nid": "282270001", "denominación_ramo": "Automotor", "numero_endoso": "4",               
                "fecha_emision": "10/04/2018", "numero_cotizacion": "12312", "estado": "Cotizado",                
                "fecha_alta": "10/03/2018", "area_destino": "Siniestro", "transaccion": "Transacción 1",               
                "poliza_asociada": "1112", "certificado": "12312", "nombre_apellido": "Juan Pérez"},               
                {"numero_nid": "282270004", "denominación_ramo": "Automotor", "numero_endoso": "4",               
                "fecha_emision": "10/04/2018", "numero_cotizacion": "12312", "estado": "Cotizado",                
                "fecha_alta": "10/03/2018", "area_destino": "Siniestro", "transaccion": "Transacción 1",                
                "poliza_asociada": "1112", "certificado": "12312", "nombre_apellido": "Juan Pérez"}               
            ]              
        }
        
        setTimeout(
            function(){ 
                successCallback(nids);
            }, 
            1500
        );
    }
    
    /*---------------------------------------------------------------------------------*/
}