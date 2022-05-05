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
    
    
    provinciaSeguros.posicionConsolidada.Cobranzas.servicios.obtenerCobranzas = function(nroPersona, nroRamo, successCallback, errorCallback){
            
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
    }

    /*---------------------------------------------------------------------------------*/
    
    
        provinciaSeguros.posicionConsolidada.Cobranzas.servicios.obtenerDetalleCobranza = function(nroPersona, nroRamo,nroPoliza,nroCertificado,successCallback, errorCallback){
            
            var certificados = {  
                    "estado_deuda":[  
                        {"nrocertificado":"0","fecha_vto":"10/06/2018","estado":"Vencida","premio":"721.00","saldo_exigible":"0.00"},
                        {"nrocertificado":"1","fecha_vto":"10/07/2018","estado":"Vencida","premio":"721.00","saldo_exigible":"300.00"},
                        {"nrocertificado":"2","fecha_vto":"10/08/2018","estado":"Vencida","premio":"721.00","saldo_exigible":"721.00"}
                    ],
                    "fecha_ultimo_pago":"08/07/2018",
                    "deuda_total":"1021.00",
                    "moneda":"$"
                }
             setTimeout(
             function(){ 
                 successCallback(certificados);
                }, 
            1500
            
        );
    }
}