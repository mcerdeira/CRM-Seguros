var serviceUrl = '';

function logicaCliente(data){
    			console.log(data);
}

provinciaSeguros.posicionConsProductores.inicializarServicios = function (){
    
    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsProductores.servicios.inicializar = function(successCallback, errorCallback) {

        
    }
        
    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsProductores.servicios.obtenerRamos = function(nroProductor, successCallback, errorCallback){

        var ramos = {  
                        "ramos": [
                            {  
                                "id_ramo": "1",  
                                "nombre_ramo": "Automotor"
                            },  
                            {  
                                "id_ramo": "2",  
                                "nombre_ramo": "Hogar" 
                            } 
                        ] 
                    }  

         setTimeout(
            function(){ 
                successCallback(ramos); 
            }, 
            1500
        );
    }

    /*---------------------------------------------------------------------------------*/
    
        provinciaSeguros.posicionConsProductores.servicios.obtenerDetalle = function(nroProductor, nroRamo, successCallback, errorCallback){

        var detalle = {  
                         "cantidad_polizas": "3",  
                         "cantidad_clientes": "40",
                         "premio": "852",
                         "deuda_exigible": "5201",
                         "contribución_marginal": "582466",
                         "cantidad_certificados": "2"
                      }  

         setTimeout(
            function(){ 
                successCallback(detalle); 
            }, 
            1500
        );
    }

    /*---------------------------------------------------------------------------------*/

}

