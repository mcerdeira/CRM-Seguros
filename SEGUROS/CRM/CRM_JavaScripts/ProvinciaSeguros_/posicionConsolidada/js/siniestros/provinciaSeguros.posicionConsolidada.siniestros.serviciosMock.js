var serviceUrl = '';

function logicaCliente(data){
    			console.log(data);
}

provinciaSeguros.posicionConsolidada.siniestros.inicializarServicios = function (){
    
    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.siniestros.inicializar = function(successCallback, errorCallback) {
   
    }
        
    /*---------------------------------------------------------------------------------*/

    provinciaSeguros.posicionConsolidada.siniestros.obtenerSiniestros = function(nroPersona, successCallback, errorCallback){

        var siniestros = { 
            "siniestros": [            
                {
                "numero": "12345", 
                "nombre_ramo": "Automotor", 
                "id_ramo": "2", 
                "poliza": "1231",             
                "certificados": "3", 
                "fecha": "24/04/2018", 
                "tipo_siniestro": "Daño total",             
                "riesgo_cubierto": "BHA-345", 
                "tiene_subsiniestro": "true", 
                "estado": "Activo"
                },             
                {
                "numero": "12345", 
                "nombre_ramo": "Automotor", 
                "id_ramo": "9", 
                "poliza": "1231", 
                "certificados": "3", 
                "fecha": "24/04/2018", 
                "tipo_siniestro": "Daño total",             
                "riesgo_cubierto": "BHA-345", 
                "tiene_subsiniestro": "false", 
                "estado": "Activo"
                }             
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
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerBeneficiarios = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

        var beneficiarios = { 
            "beneficiarios": [             
                {"nombre": "Juan Pérez", "dni": "321312", "id_rector": "1231"},             
                {"nombre": "Juan Moina", "dni": "23438271", "id_rector": "1232"}             
            ]             
        }

        setTimeout(
        function(){ 
            successCallback(beneficiarios); 
        }, 
        1500
    );
    }
 /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerTerceros = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

        var terceros = { 
            "terceros": [             
                {
                    "tipo_siniestro": "Daño Parcial", 
                    "numero" : "1",
                    "identificacion": "7601476", 
                    "nombre": "Anibal Lopez", 
                    "delegacion": "La Plata",
                    "analista": "Flavia Puyada",
                    "estado": "En liquidación",
                    "cia_tercero": "Rio Uruguay",
                    "patente": "YUI-009",
                    "letrado": "Felipe Espora",
                    "estudio": "Liquidadores Unidos"
                }
            ]             
        }

        setTimeout(
        function(){ 
            successCallback(terceros); 
        }, 
        1500
    );
    }
    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerDetallesDeSiniestros = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

        var detalles = { 
            "campos": [             
                {"etiqueta":"Fecha de inspección", "valor":"20/06/2018"},                         
                {"etiqueta":"Estado", "valor":"Realizado"},             
                {"etiqueta":"Orden de trabajo (MO)", "valor":"$ 40000"},             
                {"etiqueta":"Fecha de Pago a Proveedores", "valor":"20/06/2018"},             
                {"etiqueta":"Ajustador", "valor":"José Feliciano"}             
            ]             
        } 
        
        setTimeout(
            function(){ 
                successCallback(detalles); 
            }, 
            1500
        );
        }            

    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerLiquidaciones = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

        var liquidaciones = { 
            "liquidaciones": [            
                {             
                "numero_compromiso":"321312",             
                "alta":"Delegación Mar de Plata",             
                "tentativa":"07/03/2018",             
                "conformidad":"20/06/2018",             
                "beneficiario":"Juan Marco",             
                "concepto":"Gestoria",             
                "moneda":"$",             
                "monto":"5500",             
                "Estado":"EN OF – Pagado por método electronica"             
                },             
                {             
                "numero_compromiso":"321312",             
                "alta":"Delegación Mar de Plata",             
                "tentativa":"07/03/2018",             
                "conformidad":"20/06/2018",             
                "beneficiario":"Juan Marco",             
                "concepto":"Gestoria",             
                "moneda":"$",             
                "monto":"5500",             
                "Estado":"EN OF – Pagado por método electronica"             
                }        
            ]             
        } 

        setTimeout(
            function(){ 
                successCallback(liquidaciones); 
            }, 
            1500
        );
    }

    /*---------------------------------------------------------------------------------*/
    
    provinciaSeguros.posicionConsolidada.siniestros.obtenerNotas = function(nroPersona, nroSiniestro, nroRamo, successCallback, errorCallback){

        var notas = { 
            "notas": [            
                {             
                "fecha":"10-MAR-2018",             
                "usuario":"Carlos Fiandesio",             
                "contenido":"Contenido de la nota"                       
                },             
                {             
                "fecha":"12-ABR-2018",             
                "usuario":"Flavia Puyada",             
                "contenido":"Contenido de la nota dos"              
                }        
            ]             
        } 

        setTimeout(
            function(){ 
                successCallback(notas); 
            }, 
            1500
        );
    }

}