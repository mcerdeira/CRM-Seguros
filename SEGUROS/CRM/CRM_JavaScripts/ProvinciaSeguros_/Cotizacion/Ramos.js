var PRODUCTOANTERIOR = null;

inicializarFormularioOportunidades = function(executionContext){

        var formContext = executionContext.getFormContext();

    if(formContext.getAttribute("ps_tipodecotizacion").getValue() != null){
        PRODUCTOANTERIOR = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].id;
        }
    
    mostrarTabs(executionContext);
    bloquearCampos(executionContext);
    
}


function bloquearCampos(executionContext) {
    
    var formContext = executionContext.getFormContext();

    if (formContext.getAttribute('name').getValue()) {
    
        formContext.getControl('name').setDisabled(true);
        formContext.getControl('parentaccountid').setDisabled(true);
        formContext.getControl('ps_productorid').setDisabled(true);
        formContext.getControl('ps_tipodecotizacion').setDisabled(true);
        formContext.getControl('ps_procesocomercial').setDisabled(true);
        formContext.getControl('ps_fechapreslic').setDisabled(true);
        formContext.getControl('ps_costo').setDisabled(true);
        formContext.getControl('ps_divisa').setDisabled(true);
    }

}


function cambiarProducto(executionContext){
            
                var formContext = executionContext.getFormContext();

                var  cliente = formContext.getAttribute("parentaccountid").getValue();
                var productor = formContext.getAttribute("ps_productorid").getValue();
    
    if(formContext.getAttribute("ps_tipodecotizacion").getValue() != null && cliente != null && productor != null){
    
        var producto = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].id;
        var productoGuid = producto.substring(1, producto.length-1);
        
        var partidoQuery = "products?$filter=productid%20eq%20%27" + productoGuid + "%27&$select=productnumber";
        


        MakeRequest(partidoQuery,
            function(result){

                var idProducto = result.value[0].productnumber;
/*-------------------------------------------------------------------------------------------
                var  cliente = formContext.getAttribute("parentaccountid").getValue();
                var productor = formContext.getAttribute("ps_productorid").getValue();
if (cliente != null && productor != null){
                formContext.ui.tabs.get(idProducto).setVisible(true);
}
-------------------------------------------------------------------------------------------*/
               formContext.ui.tabs.get(idProducto).setVisible(true);
                
                /*ocultarTab(executionContext);*/
                
                PRODUCTOANTERIOR = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].id;
            }
        );
        
    }
}



function mostrarTabs(executionContext){
        
            var formContext = executionContext.getFormContext();

                var  cliente = formContext.getAttribute("parentaccountid").getValue();
                var productor = formContext.getAttribute("ps_productorid").getValue();
    
    if(formContext.getAttribute("ps_tipodecotizacion").getValue() != null && cliente != null && productor != null){
               
        var formContext = executionContext.getFormContext();

        var producto = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].id;
        var productoGuid = producto.substring(1, producto.length-1);
        
        var partidoQuery = "products?$filter=productid%20eq%20%27" + productoGuid + "%27&$select=productnumber";
        


        MakeRequest(partidoQuery,
            function(result){

                var idProducto = result.value[0].productnumber;
                
                formContext.ui.tabs.get(idProducto).setVisible(true);

            }
        );
    }
}


function ocultarTab(executionContext){

debugger;
        var formContext = executionContext.getFormContext();


    if(PRODUCTOANTERIOR != null){
    
        var productoGuid = PRODUCTOANTERIOR.substring(1, PRODUCTOANTERIOR.length-1);
        
        var partidoQuery = "products?$filter=productid%20eq%20%27" + productoGuid + "%27&$select=productnumber";
        
        var formContext = executionContext.getFormContext();
    


        MakeRequest(partidoQuery,
            function(result){

                var idProducto = result.value[0].productnumber;

                formContext.ui.tabs.get(idProducto).setVisible(false);
            }
        );
    }
}


function MakeRequest(query, successCallback) {

    var req = new XMLHttpRequest();
        
    req.open("GET", 'https://' + window.location.hostname + "/api/data/v8.2/" + query, true);
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
                successCallback(result);
                
            } 
            else {
                
                alert("Error Call");
            }
        }
    };
    
    req.send();
}

function fechaHoraActualDerivacion(executionContext){
    
var formContext = executionContext.getFormContext();
    var estadoIgualDerivado = formContext.getAttribute("statuscode").getValue();
    var fechaDerivacion = formContext.getAttribute("ps_fechadederivacion").getValue();
    var currentDateTime = new Date();
 
    
        if (estadoIgualDerivado == 282270002 && fechaDerivacion == null){
        formContext.getAttribute("ps_fechadederivacion").setValue(currentDateTime);
		formContext.data.entity.save();
        }
        else if(estadoIgualDerivado == 282270002){
        formContext.ui.tabs.get("tab_SLA").setVisible(true);
}
    
}

function flotaAuto(executionContext){

    var formContext = executionContext.getFormContext();
    var auto = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name;    
    var flota = formContext.getAttribute("ps_flota").getValue();
   
        if ((auto  == "AUTOMOTOR") && flota == true){
        formContext.ui.tabs.get("4").sections.get("PropuestaComercial").setVisible(true);
        formContext.ui.tabs.get("4").sections.get("resSuscripcion").setVisible(true);
        formContext.ui.tabs.get("4").sections.get("obsSuscr").setVisible(true);
        formContext.ui.tabs.get("4").sections.get("antecedentes").setVisible(true);
        formContext.ui.tabs.get("4").sections.get("individualAuto").setVisible(false);
        clearTabSection("4", "individualAuto", formContext);
        formContext.getAttribute("ps_comisionauto").setRequiredLevel("required");
        formContext.getAttribute("ps_rebajaauto").setRequiredLevel("required");
        formContext.getAttribute("ps_costoesperado").setRequiredLevel("required");
        }
        else if ((auto  == "AUTOMOTOR") && flota == false){
        formContext.ui.tabs.get("4").sections.get("PropuestaComercial").setVisible(false);
        formContext.ui.tabs.get("4").sections.get("resSuscripcion").setVisible(false);
        formContext.ui.tabs.get("4").sections.get("obsSuscr").setVisible(false);
        formContext.ui.tabs.get("4").sections.get("antecedentes").setVisible(false);
        formContext.ui.tabs.get("4").sections.get("individualAuto").setVisible(true);
        formContext.ui.tabs.get("4").sections.get("obsSuscr").setVisible(true); 
        clearTabSection("4", "PropuestaComercial", formContext); 
        clearTabSection("4", "resSuscripcion", formContext);
        clearTabSection("4", "obsSuscr", formContext);        
        clearTabSection("4", "antecedentes", formContext);        
        clearTabSection("4", "obsSuscr", formContext);
        //setRequiereNoneTabSection("4", "PropuestaComercial");
        formContext.getAttribute("ps_comisionauto").setRequiredLevel("none");
        formContext.getAttribute("ps_rebajaauto").setRequiredLevel("none");
        formContext.getAttribute("ps_costoesperado").setRequiredLevel("none");
        }
    
}


function sepelio(executionContext){
    
    var formContext = executionContext.getFormContext();
    var tipoCot = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name;    
    var sepelio = formContext.getAttribute("ps_sepelio").getValue();
   
   //Colectivo
        if ((tipoCot  == "SEPELIO") && sepelio == false){
        formContext.ui.tabs.get("9").sections.get("sepelio_Individual").setVisible(true);
        formContext.ui.tabs.get("9").sections.get("sepelio_Colectivo").setVisible(false);
       // clearTabSection("9", "sepelio_Colectivo");
        //formContext.getAttribute("").setRequiredLevel("required");
        
        }
        //Individual
        else if ((tipoCot  == "SEPELIO") && sepelio == true){
        formContext.ui.tabs.get("9").sections.get("sepelio_Individual").setVisible(false);
        formContext.ui.tabs.get("9").sections.get("sepelio_Colectivo").setVisible(true);
        clearTabSection("9", "sepelio_Individual", formContext);
        //formContext.getAttribute("").setRequiredLevel("required");
        }
    
}
function sepelioOnLoad(executionContext){

    var formContext = executionContext.getFormContext();
    var sepelio = formContext.getAttribute("ps_sepelio").getValue();
    var tipo = formContext.getAttribute("ps_tipodecotizacion").getValue();

    if(tipo != null){
        var tipoCot = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name;
   //Indivuidual= false
        if ((tipoCot  == "SEPELIO") && sepelio == false){
        formContext.ui.tabs.get("9").sections.get("sepelio_Individual").setVisible(true);
        formContext.ui.tabs.get("9").sections.get("sepelio_Colectivo").setVisible(false);
        //clearTabSection("9", "sepelio_Colectivo");
        //formContext.getAttribute("").setRequiredLevel("required");
        }
        else if ((tipoCot  == "SEPELIO") && sepelio == true){
        formContext.ui.tabs.get("9").sections.get("sepelio_Individual").setVisible(false);
        formContext.ui.tabs.get("9").sections.get("sepelio_Colectivo").setVisible(true);
        clearTabSection("9", "sepelio_Individual", formContext);
        //formContext.getAttribute("").setRequiredLevel("required");
        }
    }
}

function AP(executionContext){
    
    var formContext = executionContext.getFormContext();
    var tipoCot = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name;    
    var ap = formContext.getAttribute("ps_ap").getValue();
   
   //Colectivo
        if ((tipoCot  == "ACCIDENTES PERSONALES") && ap == true){
        formContext.ui.tabs.get("16").sections.get("apIndividual").setVisible(true);
        formContext.ui.tabs.get("16").sections.get("apColectivo").setVisible(false);
        //clearTabSection("16", "apColectivo");
        //formContext.getAttribute("").setRequiredLevel("required");
        
        }
        //Individual
        else if ((tipoCot  == "ACCIDENTES PERSONALES") && ap == false){
        formContext.ui.tabs.get("16").sections.get("apIndividual").setVisible(false);
        formContext.ui.tabs.get("16").sections.get("apColectivo").setVisible(true);
        //clearTabSection("16", "apIndividual");
        //formContext.getAttribute("").setRequiredLevel("required");
        }
    
}
function APOnload(executionContext){
    
    var formContext = executionContext.getFormContext();
    var tipo = formContext.getAttribute("ps_tipodecotizacion").getValue();
    var ap = formContext.getAttribute("ps_ap").getValue();
   
       if(tipo != null){
      var tipoCot = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name;

   //Colectivo
        if ((tipoCot  == "ACCIDENTES PERSONALES") && ap == true){
        formContext.ui.tabs.get("16").sections.get("apIndividual").setVisible(true);
        formContext.ui.tabs.get("16").sections.get("apColectivo").setVisible(false);
            clearTabSection("16", "apColectivo", executionContext);
        //formContext.getAttribute("").setRequiredLevel("required");
        
        }
        //Individual
        else if ((tipoCot  == "ACCIDENTES PERSONALES") && ap == false){
        formContext.ui.tabs.get("16").sections.get("apIndividual").setVisible(false);
        formContext.ui.tabs.get("16").sections.get("apColectivo").setVisible(true);
        clearTabSection("16", "apColectivo", executionContext);

        //formContext.getAttribute("").setRequiredLevel("required");
        }
    }
}
function seguroTecnico(executionContext)
{
    var formContext = executionContext.getFormContext();
    var ramo = formContext.getAttribute("ps_productosst").getValue();
    var tipo = formContext.getAttribute("ps_tipodecotizacion").getValue();

    if(ramo != null && tipo != null){        
        var productoST = formContext.getAttribute("ps_productosst").getValue()[0].name;
        var tipoCot = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name; 

        if ((tipoCot  == "SEGURO TECNICO") && productoST == "Equipo Contratista" )
        {
        clearTabSection("13", "corrienteDebil", formContext);
        clearTabSection("13", "roturaMaquinaria", formContext);
        clearTabSection("13", "riesgoConstruccion", formContext);
        clearTabSection("13", "riesgoMontaje", formContext);
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(true);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
        formContext.getAttribute("ps_actividad").setRequiredLevel("none")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot  == "SEGURO TECNICO" ) && productoST == "Corriente Débil")
        {
        clearTabSection("13", "equipoContratista", formContext);
        clearTabSection("13", "roturaMaquinaria", formContext);
        clearTabSection("13", "riesgoConstruccion", formContext);
        clearTabSection("13", "riesgoMontaje", formContext);
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(true);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
        formContext.getAttribute("ps_actividad").setRequiredLevel("none")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot  == "SEGURO TECNICO") && productoST == "Rotura de Maquinaria")
        {
        clearTabSection("13", "equipoContratista", formContext);
        clearTabSection("13", "corrienteDebil", formContext);
        clearTabSection("13", "riesgoConstruccion", formContext);
        clearTabSection("13", "riesgoMontaje", formContext);
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(true);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
        formContext.getAttribute("ps_actividad").setRequiredLevel("required")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot  == "SEGURO TECNICO") && productoST == "Todo Riesgo Construcción")
        {
        clearTabSection("13", "equipoContratista", formContext);
        clearTabSection("13", "corrienteDebil", formContext);
        clearTabSection("13", "roturaMaquinaria", formContext);
        clearTabSection("13", "riesgoMontaje", formContext);
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(true);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
        formContext.getAttribute("ps_actividad").setRequiredLevel("none")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot  == "SEGURO TECNICO") && productoST == "Todo Riesgo Montaje")
        {
        clearTabSection("13", "equipoContratista", formContext);
        clearTabSection("13", "corrienteDebil", formContext);
        clearTabSection("13", "roturaMaquinaria", formContext);
        clearTabSection("13", "riesgoConstruccion", formContext);
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(true);
        formContext.getAttribute("ps_actividad").setRequiredLevel("none")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
    }
}

function seguroTecnicoOnLoad(executionContext)
{
    var formContext = executionContext.getFormContext();
    var ramo = formContext.getAttribute("ps_productosst").getValue();
    var tipo = formContext.getAttribute("ps_tipodecotizacion").getValue();

    if(ramo != null && tipo != null){        
        var productoST = formContext.getAttribute("ps_productosst").getValue()[0].name;
        var tipoCot = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name; 

        if ((tipoCot  == "SEGURO TECNICO") && productoST == "Equipo Contratista" )
        {
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(true);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
        formContext.getAttribute("ps_actividad").setRequiredLevel("none")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot  == "SEGURO TECNICO" ) && productoST == "Corriente Débil")
        {
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(true);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
        formContext.getAttribute("ps_actividad").setRequiredLevel("none")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot  == "SEGURO TECNICO") && productoST == "Rotura de Maquinaria")
        {
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(true);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
        formContext.getAttribute("ps_actividad").setRequiredLevel("required")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot  == "SEGURO TECNICO") && productoST == "Todo Riesgo Construcción")
        {
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(true);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
        formContext.getAttribute("ps_actividad").setRequiredLevel("none")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot  == "SEGURO TECNICO") && productoST == "Todo Riesgo Montaje")
        {
        formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
        formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(true);
        formContext.getAttribute("ps_actividad").setRequiredLevel("none")
        formContext.getAttribute("ps_productosst").setRequiredLevel("required")
        }
    }
}

function robo(executionContext)
{
    var formContext = executionContext.getFormContext();
    var tipoRobo = formContext.getAttribute("ps_coberturarobo").getValue();
    var tipoCot = formContext.getAttribute("ps_tipodecotizacion").getValue();

    if(tipoRobo != null && tipoCot != null){        
        var tipoRoboName = formContext.getAttribute("ps_coberturarobo").getValue()[0].name;
        var tipoCotName = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name; 

        if ((tipoCotName  == "ROBO") && tipoRoboName == "Robo - Casa Familiar" )
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "objetosDiversos", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO" ) && tipoRoboName == "Robo - Local de Comercio")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO") && tipoRoboName == "Objetos Diversos")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO") && tipoRoboName == "Robo - Caja Fuerte")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        clearTabSection("6", "objetosDiversos", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO") && tipoRoboName == "Robo - Valores en Tránsito")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "objetosDiversos", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO") && tipoRoboName == "Riesgos Combinados")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "objetosDiversos", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(true);
        }
    }
}
function roboOnLoad(executionContext){

    var formContext = executionContext.getFormContext();
    var tipoRobo = formContext.getAttribute("ps_coberturarobo").getValue();
    var tipoCot = formContext.getAttribute("ps_tipodecotizacion").getValue();

    if(tipoRobo != null && tipoCot != null){        
        var tipoRoboName = formContext.getAttribute("ps_coberturarobo").getValue()[0].name;
        var tipoCotName = formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name; 

        if ((tipoCotName  == "ROBO") && tipoRoboName == "Robo - Casa Familiar" )
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "objetosDiversos", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO" ) && tipoRoboName == "Robo - Local de Comercio")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO") && tipoRoboName == "Objetos Diversos")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO") && tipoRoboName == "Robo - Caja Fuerte")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        clearTabSection("6", "objetosDiversos", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO") && tipoRoboName == "Robo - Valores en Tránsito")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "objetosDiversos", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        clearTabSection("6", "riesgosCombinados", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(true);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(false);
        }
        else if ((tipoCotName  == "ROBO") && tipoRoboName == "Riesgos Combinados")
        {
        clearTabSection("6", "localComercio", formContext);
        clearTabSection("6", "objetosDiversos", formContext);
        clearTabSection("6", "cajaFuerte", formContext);
        clearTabSection("6", "valoresTransito", formContext);
        clearTabSection("6", "casaFamiliar", formContext);
        formContext.ui.tabs.get("6").sections.get("casaFamiliar").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("localComercio").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("objetosDiversos").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("cajaFuerte").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("valoresTransito").setVisible(false);
        formContext.ui.tabs.get("6").sections.get("riesgosCombinados").setVisible(true);
        }
    }
}

function  clearTabSection(tabname, sectionname, formContext)
{

     var controls = formContext.ui.tabs.get(tabname).sections.get(sectionname).controls.get();
     var controlsL = controls.length;
     for (var i = 0; i < controlsL; i++) {
         if(controls[i].getAttribute().getAttributeType() == "boolean") {
            controls[i].getAttribute().setValue(false);
         }
         else {
            controls[i].getAttribute().setValue(null);
         }
     }
}

function setRequiereNoneTabSection(tabname, sectionname)
{
    var formContext = executionContext.getFormContext();
     var controls = Xrm.Page.ui.tabs.get(tabname).sections.get(sectionname).controls.get();
     var controlsL = controls.length;
     for (var i = 0; i < controlsL; i++) {
         if(controls[i].getAttribute().getAttributeType() == "boolean") {
            controls[i].getAttribute().setRequiredLevel("none");
         }
         else {
            controls[i].getAttribute().setRequiredLevel("none");
         }
     }
}

function setRequiereTrueTabSection(tabname, sectionname)
{
    var formContext = executionContext.getFormContext();
     var controls = Xrm.Page.ui.tabs.get(tabname).sections.get(sectionname).controls.get();
     var controlsL = controls.length;
     for (var i = 0; i < controlsL; i++) {
         if(controls[i].getAttribute().getAttributeType() == "boolean") {
            controls[i].getAttribute().setRequiredLevel("required");
         }
         else {
            controls[i].getAttribute().setRequiredLevel("required");
         }
     }
}

function saveFormOnChange(executionContext)
{
    var formContext = executionContext.getFormContext();
    var tipo = formContext.getAttribute("ps_tipodecotizacion").getValue();
        
    if(tipo != null){  
    var producto= formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name;
                if (producto == "SEPELIO" || producto == "TRANSPORTES" || producto == "INTEGRALES"){
                formContext.data.entity.save();
                    }
    }
}

//function notificacionSepelio(executionContext)
//{
//    var formContext = executionContext.getFormContext();
//    var tipo = formContext.getAttribute("ps_tipodecotizacion").getValue();
//        
//    if(tipo != null){  
//    var producto= formContext.getAttribute("ps_tipodecotizacion").getValue()[0].name;
//                if (producto == "SEPELIO" || producto == "TRANSPORTE"){
//                formContext.ui.setFormNotification("Para cargar el grupo familiar debe Guardar el formulario", INFO, uniqueId);
//                    }
//    }
//}