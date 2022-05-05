var provinciaSeguros = {};

var ROL_ASEGURADO = '282270000';
var ROL_PRODUCTOR = '282270001'; 
var ROL_BENEFICIARIO = '282270002';
var ROL_ABOGADO = '282270003';
var ROL_TALLERISTA = '282270004';
var ROL_GESTIONADOR = '282270005'; 
var ROL_TERCERO = '282270006';
var ROL_EMPLEADOBPBA = '282270007';

provinciaSeguros.posicionConsolidada = {};
provinciaSeguros.posicionConsolidada.servicios = {};
provinciaSeguros.posicionConsolidada.siniestros = {};
provinciaSeguros.posicionConsolidada.siniestros.servicios = {};

provinciaSeguros.CasosModales = {};
provinciaSeguros.CasosModales.aseguradoId;
provinciaSeguros.CasosModales.idRector;
provinciaSeguros.CasosModales.ramoGuid;
provinciaSeguros.CasosModales.ramo;
provinciaSeguros.CasosModales.servicios = {};

provinciaSeguros.CasosModales.inicializarCasosModales = function () {
    
    provinciaSeguros.CasosModales.clientURL = Xrm.Utility.getGlobalContext().getClientUrl();
}

// Mostrar modales

var manualmente = false;
var certificadoManualmente = false;
var siniestroManualmente = false;
var ultimaPersonaElegida = null;
var ultimoRamoElegido = null;

showAlertPolizas = function(ExecutionContext){
    
    var personaNula = ExecutionContext.getFormContext().getAttribute('axx_quiensecontacta').getValue() == null;
    
    var ramoNulo = ExecutionContext.getFormContext().getAttribute('axx_ramo').getValue() == null;

    var cambioLaPersona = (!personaNula) && 
                          (ultimaPersonaElegida != ExecutionContext.getFormContext().getAttribute('axx_quiensecontacta').getValue()[0].id)

    if (ramoNulo) return;

    var cambioElRamo = (!ramoNulo) && 
                       (ultimoRamoElegido != ExecutionContext.getFormContext().getAttribute('axx_ramo').getValue()[0].id)

    ultimoRamoElegido = ExecutionContext.getFormContext().getAttribute('axx_ramo').getValue()[0].id;
    //ultimaPersonaElegida = ExecutionContext.getFormContext().getAttribute('axx_quiensecontacta').getValue()[0].id;

    if ((!manualmente) || (cambioLaPersona) || (cambioElRamo)) {

        manualmente = false;

        if((ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue() == null && (ExecutionContext.getFormContext().getAttribute("axx_empleadobpbaid").getValue() == null)) || 
            ExecutionContext.getFormContext().getAttribute("axx_ramo").getValue() == null){
            return;
        }

        var aseguradoIdString =  getAseguradoId(ExecutionContext);
        
        provinciaSeguros.CasosModales.aseguradoId = aseguradoIdString.substring(1, aseguradoIdString.length - 1);  

        var ramoString = ExecutionContext.getFormContext().getAttribute("axx_ramo").getValue()[0].id;
        
        provinciaSeguros.CasosModales.ramoGuid = ramoString.substring(1, ramoString.length - 1);

        Alert.showWebResource(
            "provinciaSeguros_/casosModales/vistas/casosModales.vistas.nroDePoliza.htm?Data=" + encodeURIComponent("aseguradoId=" + provinciaSeguros.CasosModales.aseguradoId +"&ramoGuid=" + provinciaSeguros.CasosModales.ramoGuid),
            1000,
            500,
            "",
            [
                new Alert.Button(
                    "Ingresar póliza manualmente", 
                    function(){
                        
                        manualmente = true;
                        
                        //ExecutionContext.getFormContext().getAttribute("axx_nrodepoliza").setValue(""); 
                        Alert.hide();
                    }, 
                    false, 
                    true
                ),
                new Alert.Button(
                    "Cerrar", 
                    function(){
                        
                        ExecutionContext.getFormContext().getAttribute("axx_nrodepoliza").setValue("");
                        ExecutionContext.getFormContext().getAttribute("axx_productorasociado").setValue("");
                        Alert.hide();
                    }, 
                    false, 
                    true
                )
            ],
            Xrm.Utility.getGlobalContext().getClientUrl(),  
            false, 
            20
        )
    }
}

getAseguradoId = function (ExecutionContext) {

    var rolSeleccionado = ExecutionContext.getFormContext().getAttribute("axx_rol").getValue();
    
    ExecutionContext.getFormContext().getAttribute('axx_ramo').getValue()[0].id;

    if (rolSeleccionado == ROL_EMPLEADOBPBA) 
        
        return ExecutionContext.getFormContext().getAttribute('axx_empleadobpbaid').getValue()[0].id;
        
    else return ExecutionContext.getFormContext().getAttribute('axx_aseguradoid').getValue()[0].id;
    debugger
}


showAlertCertificado = function(ExecutionContext){

    if(ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue() == null || ExecutionContext.getFormContext().getAttribute("axx_ramo").getValue() == null){
        return;
    }

    var aseguradoIdString = ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue()[0].id;
    provinciaSeguros.CasosModales.aseguradoId = aseguradoIdString.substring(1, aseguradoIdString.length - 1);  

    var ramoString = ExecutionContext.getFormContext().getAttribute("axx_ramo").getValue()[0].id;
    provinciaSeguros.CasosModales.ramoGuid = ramoString.substring(1, ramoString.length - 1);

    var nroPoliza = ExecutionContext.getFormContext().getAttribute("axx_nrodepoliza").getValue();

    if (!certificadoManualmente) {

        certificadoManualmente = false;

        Alert.showWebResource(
            "provinciaSeguros_/casosModales/vistas/casosModales.vistas.certificados.htm?Data=" + 
            encodeURIComponent(
                "aseguradoId=" + provinciaSeguros.CasosModales.aseguradoId + 
                "&ramoGuid=" + provinciaSeguros.CasosModales.ramoGuid + 
                "&nroPoliza=" + nroPoliza
                ),
            1000,
            500,
            "",
            [
                new Alert.Button(
                        "Ingresar certificado manualmente", 
                        function(){
                            
                            certificadoManualmente = true;
                            
                            //ExecutionContext.getFormContext().getAttribute("axx_nrodepoliza").setValue(""); 
                            Alert.hide();
                        }, 
                        false, 
                        true
                ),
                new Alert.Button(
                    "Cerrar", 
                    function(){
                    
                        ExecutionContext.getFormContext().getAttribute("axx_nrodecertificado").setValue(""); 
                        Alert.hide();
                    }, 
                    false, 
                    true
                )
            ],
            Xrm.Utility.getGlobalContext().getClientUrl(),  
            false, 
            20
        )
    }
}

polizaDetalleProdAsoc = function(ExecutionContext){

    if(ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue() == null || ExecutionContext.getFormContext().getAttribute("axx_ramo").getValue() == null){
        return;
    }

    var aseguradoIdString = ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue()[0].id;
    provinciaSeguros.CasosModales.aseguradoId = aseguradoIdString.substring(1, aseguradoIdString.length - 1);  

    var ramoString = ExecutionContext.getFormContext().getAttribute("axx_ramo").getValue()[0].id;
    provinciaSeguros.CasosModales.ramoGuid = ramoString.substring(1, ramoString.length - 1);

    var nroPoliza = ExecutionContext.getFormContext().getAttribute("axx_nrodepoliza").getValue();

 //Obtener detalle polizas

              provinciaSeguros.posicionConsolidada.servicios.obtenerDetallePoliza
                  (
                    provinciaSeguros.CasosModales.idRector,
                    provinciaSeguros.CasosModales.ramo,
                    nroPoliza,
                    numeroCertificadoPolizaSeleccionada,
                    
                    function(detallesPoliza)
                          {
                        detallesPoliza = detallesPoliza;
                        
                        productorAsociado = detallesPoliza.detalle.productor_asociado;
                           
                        mostrarDetallePoliza();
                           }                                           
                    );
              
        ExecutionContext.getFormContext().getAttribute("axx_productorasociado").setValue(productorAsociado);
}
showAlertNID = function(ExecutionContext){

    if(ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue() == null){
        return;
    }

    var aseguradoIdString = ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue()[0].id;
    provinciaSeguros.CasosModales.aseguradoId = aseguradoIdString.substring(1, aseguradoIdString.length - 1);  

    Alert.showWebResource(
        "provinciaSeguros_/casosModales/vistas/casosModales.vistas.nid.htm?Data=" + 
        encodeURIComponent(
            "aseguradoId=" + provinciaSeguros.CasosModales.aseguradoId
        ),
        1000,
        500,
        "",
        [
            new Alert.Button(
                "Cerrar", 
                function(){
                    
                    ExecutionContext.getFormContext().getAttribute("axx_nid").setValue(""); 
                    Alert.hide();
                }, 
                false, 
                true
            )
        ],
        Xrm.Utility.getGlobalContext().getClientUrl(),  
        false, 
        20
    )
}

showAlertSiniestros = function(ExecutionContext){

    if(ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue() == null){
        return;
    }

    var aseguradoIdString = ExecutionContext.getFormContext().getAttribute("axx_aseguradoid").getValue()[0].id;
    provinciaSeguros.CasosModales.aseguradoId = aseguradoIdString.substring(1, aseguradoIdString.length - 1);  

     if (!siniestroManualmente) {

        Alert.showWebResource(
            "provinciaSeguros_/casosModales/vistas/casosModales.vistas.siniestro.htm?Data=" + 
            encodeURIComponent(
                "aseguradoId=" + provinciaSeguros.CasosModales.aseguradoId
            ),
            1000,
            500,
            "",
            [
                new Alert.Button(
                        "Ingresar siniestro manualmente", 
                        function(){
                            
                            siniestroManualmente = true;
                            
                            //ExecutionContext.getFormContext().getAttribute("axx_nrodepoliza").setValue(""); 
                            Alert.hide();
                        }, 
                        false, 
                        true
                    ),
                new Alert.Button(
                    "Cerrar", 
                    function(){
                        
                        ExecutionContext.getFormContext().getAttribute("axx_nrodesiniestro").setValue(""); 
                        Alert.hide();
                    }, 
                    false, 
                    true
                )
            ],
            Xrm.Utility.getGlobalContext().getClientUrl(),  
            false, 
            20
        )
    }
}