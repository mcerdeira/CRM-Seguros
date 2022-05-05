var PRODUCTOANTERIOR = null;

function ButtonContinue(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.data.save().then(function () { ButtonContinueSave(executionContext) });
}

function ButtonContinueSave(executionContext) {
    /*
        // Estas son las funciones que llama RAMO: en el onchange
        cambiarProducto(executionContext);
        ocultarTab(executionContext);
        saveFormOnChange(executionContext);
        ramoOnchange(executionContext);
    */
    // Estas son las funciones que llama en el ONLOAD
    NombreOnChange(executionContext);
    inicializarFormularioOportunidades(executionContext);
    mostrarTabs(executionContext);
    seguroTecnicoOnLoad(executionContext);
    sepelioOnLoad(executionContext);
    APOnload(executionContext);
    roboOnLoad(executionContext);
    armadoComercialOnLoad(executionContext);
    bloquearCampos(executionContext);
    ramoOnLoad(executionContext);
    var formContext = executionContext.getFormContext();
    formContext.data.save();
}

inicializarFormularioOportunidades = function (executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.ui.getFormType() == 2) {
        if (formContext.getAttribute("axx_partido").getValue() == null) {
            if (formContext.getControl("axx_partido")) {
                formContext.getControl("axx_partido").setVisible(false);
            }
            if (formContext.getControl("axx_partido1")) {
                formContext.getControl("axx_partido1").setVisible(false);
            }
        }
    }

    if (formContext.ui.getFormType() != 1) { // Si no es modo Create, oculto el botón de continuar
        var control = formContext.ui.controls.get("WebResource_ButtonContinuar");
        if (control) {
            control.setVisible(false);
        }
    }

    if (formContext.getAttribute("axx_ramo").getValue() != null) {
        PRODUCTOANTERIOR = formContext.getAttribute("axx_ramo").getValue()[0].id;
    }

    //ocultarTab(executionContext);
    //cambiarProducto(executionContext);
    // mostrarTabs(executionContext);
}
var RAMO = null;
ramoOnchange = function (executionContext) {

    var formContext = executionContext.getFormContext();
   

    if (formContext.getAttribute("axx_ramo").getValue() != null) {
        RAMO = formContext.getAttribute("axx_ramo").getValue()[0].name;

        formContext.getAttribute("axx_ramotexto").setValue(RAMO);
    }
    if (RAMO == "INCENDIO") {
        formContext.getAttribute("axx_masunriesgo").setRequiredLevel("required");
        incendioOnChange(executionContext);
    }
    else if (RAMO == "INTEGRALES") {
        formContext.getAttribute("axx_masunriesgo").setRequiredLevel("required");
        integralesOnChange(executionContext);
    }
    else if (RAMO == "AUTOMOTOR") {
        formContext.getAttribute("axx_comisionauto").setRequiredLevel("required");
        formContext.getAttribute("axx_renovacion").setRequiredLevel("required");
        formContext.getAttribute("axx_vigenciaauto").setRequiredLevel("required");
        if (
            formContext.getAttribute("axx_renovacion").getValue() == false &&
            formContext.getAttribute("axx_archivoautoflota").getValue() == null) { formContext.ui.setFormNotification("Complete campos obligatorios(*). Guarde el formulario. Luego, adjunte flota.", "WARNING", "id2020"); }
//        if (formContext.getAttribute("axx_cotizadacomercial").getValue() == true) {
//        formContext.getAttribute("axx_rebajaauto").setRequiredLevel("optional");
//        formContext.getAttribute("estimatedvalue").setRequiredLevel("required");
//            }
//        else if (formContext.getAttribute("axx_cotizadacomercial").getValue() == false){
//            formContext.getAttribute("axx_rebajaauto").setRequiredLevel("required");
//            formContext.getAttribute("estimatedvalue").setRequiredLevel("optional");
//            }
    }
}

ramoOnLoad = function (executionContext) {

    var formContext = executionContext.getFormContext();


    //formContext.getAttribute("axx_nroticket").fireOnChange();

    if (formContext.getAttribute("axx_ramo").getValue() != null) {
        RAMO = formContext.getAttribute("axx_ramo").getValue()[0].name;
    }
    if (RAMO == "INCENDIO") {
        formContext.getAttribute("axx_masunriesgo").setRequiredLevel("none");
        //formContext.getControl("axx_masunriesgo").setDisabled(true);
        incendioOnLoad(executionContext);
    }
    else if (RAMO == "INTEGRALES") {
        formContext.getAttribute("axx_masunriesgo").setRequiredLevel("none");
        //formContext.getControl("axx_masunriesgo").setDisabled(true);
        integralesOnChange(executionContext);
    }
    else if (RAMO == "AUTOMOTOR") {
        formContext.getAttribute("axx_comisionauto").setRequiredLevel("required");
        formContext.getAttribute("axx_renovacion").setRequiredLevel("required");
        formContext.getAttribute("axx_vigenciaauto").setRequiredLevel("required");
        //formContext.getAttribute("axx_archivoflotaautorequerido").setRequiredLevel("required");
        if (formContext.getAttribute("axx_renovacion").getValue() == false && formContext.getAttribute("axx_archivoautoflota").getValue() == null && formContext.ui.getFormType() != 1) {
            formContext.ui.setFormNotification("Adjunte la flota, por favor.", "WARNING", "id2020");
        }
        if (formContext.getAttribute("axx_cotizadacomercial").getValue() == true) {
                formContext.getAttribute("axx_rebajaauto").setRequiredLevel("none");
                formContext.getAttribute("estimatedvalue").setRequiredLevel("required");
                    }
            else if (formContext.getAttribute("axx_cotizadacomercial").getValue() == false){
                    formContext.getAttribute("axx_rebajaauto").setRequiredLevel("required");
                    formContext.getAttribute("estimatedvalue").setRequiredLevel("none");
                    }
    }
    else if (RAMO == "ACCIDENTES PERSONALES") {
        formContext.getControl("axx_ap").setDisabled(true);
    }
}

function vistaNombreCuenta(executionContext) {

    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("parentaccountid").getValue() != null) {
        var cuenta = formContext.getAttribute("parentaccountid").getValue()[0].name;

        formContext.getAttribute("axx_cuentatexto").setValue(cuenta);
    }

}

function ValidateDates(formContext) {
    formContext.getControl("axx_fechadesde").clearNotification("1");
    formContext.getControl("axx_fechahasta").clearNotification("2");
    var axx_fechadesde = formContext.getAttribute("axx_fechadesde").getValue();
    var axx_fechahasta = formContext.getAttribute("axx_fechahasta").getValue();

    if (axx_fechadesde && axx_fechahasta) {
        if (axx_fechadesde > axx_fechahasta) {
            formContext.getControl("axx_fechadesde").setNotification("La fecha Desde debe ser menor a la fecha Hasta", "1");
            formContext.getControl("axx_fechahasta").setNotification("La fecha Desde debe ser menor a la fecha Hasta", "2");
        }
    }
}

function INCENDIO_VigenciaDesde(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("axx_ramo").getValue() != null) {
        RAMO = formContext.getAttribute("axx_ramo").getValue()[0].name;
    }
    if (RAMO == "INCENDIO") {
        ValidateDates(formContext);
    }
}

function INCENDIO_VigenciaHasta(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("axx_ramo").getValue() != null) {
        RAMO = formContext.getAttribute("axx_ramo").getValue()[0].name;
    }
    if (RAMO == "INCENDIO") {
        ValidateDates(formContext);
    }
}

function vistaNombreProd(executionContext) {

    var formContext = executionContext.getFormContext();

    if (formContext.getAttribute("axx_productorid").getValue() != null) {
        var productor = formContext.getAttribute("axx_productorid").getValue()[0].name;

        formContext.getAttribute("axx_productortexto").setValue(productor);
    }
}


function archivoCoti(executionContext) {

    var control = executionContext.getFormContext();
    setTimeout(function () {
        value = control.getAttribute("axx_archivocotizacion").getValue();

        if (value != null) {
            var result_text = Object.values(value);
            let arr = [];
            for (item in result_text) {
                arr.push(result_text[item]);
            }
            // return arr[3]; // Filename is the 4th element
            control.getAttribute("axx_archivocotizaciontxt").setValue(arr[3]);
        }
        else {
            control.getAttribute("axx_archivocotizaciontxt").setValue(null);
            return ""
        };
    }, 5000);
}

function renovacionIfTrue(executionContext) {

    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("axx_renovacion").getValue() == false && formContext.getAttribute("axx_archivoautoflota").getValue() == null) {
        archivoAutoFlota(executionContext);

    }
    else {
        formContext.ui.clearFormNotification("id2020");
    }

}

function mensajeAdjFlota(executionContext) {
    var formContext = executionContext.getFormContext();
    archivoAutoFlota(executionContext);
}

archivoAutoFlota = function (executionContext) {

    var control = executionContext.getFormContext();

    value = control.getAttribute("axx_archivoautoflota").getValue();

    if (value != null) {

        var result_text = Object.values(value);
        let arr = [];
        for (item in result_text) {
            arr.push(result_text[item]);
        }
        // return arr[3]; // Filename is the 4th element
        control.ui.clearFormNotification("id2020");
        //control.getAttribute("axx_archivoflotaautorequerido").setValue(arr[3]);
        //control.getAttribute("axx_archivoflotaautorequerido").setRequiredLevel("none");
        //control.getAttribute("axx_archivoflotaautorequerido").fireOnChange();


    }
    else {
        if (control.ui.getFormType() == 1) {
            control.ui.setFormNotification("Complete campos obligatorios(*). Guarde el formulario. Luego, adjunte flota.", "WARNING", "id2020");
        }
        else {
            control.ui.setFormNotification("Adjunte la flota, por favor.", "WARNING", "id2020");
        }
        //control.getAttribute("axx_archivoflotaautorequerido").setRequiredLevel("required");
        //control.getAttribute("axx_archivoflotaautorequerido").setValue(null);
        //control.getAttribute("axx_archivoflotaautorequerido").fireOnChange();
        return ""
    };

}


function cambiarProducto(executionContext) {

    var formContext = executionContext.getFormContext();
    var cliente = formContext.getAttribute("parentaccountid").getValue();
    var productor = formContext.getAttribute("axx_productorid").getValue();

    if (formContext.getAttribute("axx_ramo").getValue() != null && cliente != null && productor != null) {

        var producto = formContext.getAttribute("axx_ramo").getValue()[0].id;
        var productoGuid = producto.substring(1, producto.length - 1);

        var partidoQuery = "axx_ramos?$filter=axx_ramoid%20eq%20%27" + productoGuid + "%27&$select=axx_codigo";



        MakeRequest(partidoQuery,
            function (result) {

                var idProducto = result.value[0].axx_codigo;
                formContext.ui.tabs.get(idProducto).setVisible(true);
                //me traigo el mismo tab para otro ramo por que requiere los mismos campos.
                if (idProducto == "21") {
                    formContext.ui.tabs.get("17").setVisible(true);
                }
                formContext.ui.tabs.get(idProducto).setFocus();

                ocultarTab(executionContext);

                PRODUCTOANTERIOR = formContext.getAttribute("axx_ramo").getValue()[0].id;

            }
        );

    }
}



function mostrarTabs(executionContext) {

    var formContext = executionContext.getFormContext();

    var cliente = formContext.getAttribute("parentaccountid").getValue();
    var productor = formContext.getAttribute("axx_productorid").getValue();

    if (formContext.getAttribute("axx_ramo").getValue() != null && cliente != null && productor != null) {

        var producto = formContext.getAttribute("axx_ramo").getValue()[0].id;
        var productoGuid = producto.substring(1, producto.length - 1);

        var partidoQuery = "axx_ramos?$filter=axx_ramoid%20eq%20%27" + productoGuid + "%27&$select=axx_codigo";

        //alert("Id: "+productoGuid +" Query: "+ partidoQuery)

        MakeRequest(partidoQuery,
            function (result) {

                var idProducto = result.value[0].axx_codigo;
                // alert(idProducto);
                //me traigo el mismo tab para otro ramo por que requiere los mismos campos.
                if (idProducto == "21") {
                    formContext.ui.tabs.get("17").setVisible(true);
                }
                formContext.ui.tabs.get(idProducto).setVisible(true);
                formContext.ui.tabs.get(idProducto).setFocus();

            }
        );
    }
}


function ocultarTab(executionContext) {

    var formContext = executionContext.getFormContext();


    if (PRODUCTOANTERIOR != null) {

        var productoGuid = PRODUCTOANTERIOR.substring(1, PRODUCTOANTERIOR.length - 1);

        var partidoQuery = "axx_ramos?$filter=axx_ramoid%20eq%20%27" + productoGuid + "%27&$select=axx_codigo";

        var formContext = executionContext.getFormContext();
        if (formContext.getAttribute("axx_ramo").getValue() != null) {
            var productoActual = formContext.getAttribute("axx_ramo").getValue()[0].id;
        }

        MakeRequest(partidoQuery,
            function (result) {
                //var formContext = executionContext.getFormContext();
                var idProducto = result.value[0].axx_codigo;
                setRequiereNoneTab(idProducto, formContext);
                formContext.ui.tabs.get(idProducto).setVisible(false);
                //tabGeneral.sections.get(idProducto).setVisible(false);
                //clearTab(idProducto, formContext);
                if (idProducto == 4 && productoActual != 4) {
                    formContext.ui.clearFormNotification("id2020");
                }
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

    req.onreadystatechange = function () {

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


function fechaHoraActualDerivacion(executionContext) {

    var formContext = executionContext.getFormContext();
    var estadoIgualDerivado = formContext.getAttribute("statuscode").getValue();
    var fechaDerivacion = formContext.getAttribute("axx_fechadederivacion").getValue();
    var currentDateTime = new Date();

    if (estadoIgualDerivado == 282270003 && fechaDerivacion == null) {
        formContext.getAttribute("axx_fechadederivacion").setValue(currentDateTime);
        formContext.data.entity.save();
    }

}


function sepelio(executionContext) {

    var formContext = executionContext.getFormContext();
    var tipoCot = formContext.getAttribute("axx_ramo").getValue()[0].name;
    var sepelio = formContext.getAttribute("axx_sepelio").getValue();

    //Colectivo
    if ((tipoCot == "SEPELIO") && sepelio == false) {
        formContext.ui.tabs.get("9").sections.get("sepelio_Individual").setVisible(true);
        formContext.ui.tabs.get("9").sections.get("sepelio_Colectivo").setVisible(false);
        // clearTabSection("9", "sepelio_Colectivo");
        //formContext.getAttribute("").setRequiredLevel("required");

    }
    //Individual
    else if ((tipoCot == "SEPELIO") && sepelio == true) {
        formContext.ui.tabs.get("9").sections.get("sepelio_Individual").setVisible(false);
        formContext.ui.tabs.get("9").sections.get("sepelio_Colectivo").setVisible(true);
        clearTabSection("9", "sepelio_Individual", formContext);
        //formContext.getAttribute("").setRequiredLevel("required");
    }

}
function sepelioOnLoad(executionContext) {

    var formContext = executionContext.getFormContext();
    var sepelio = formContext.getAttribute("axx_sepelio").getValue();
    var tipo = formContext.getAttribute("axx_ramo").getValue();

    if (tipo != null) {
        var tipoCot = formContext.getAttribute("axx_ramo").getValue()[0].name;
        //Indivuidual= false
        if ((tipoCot == "SEPELIO") && sepelio == false) {
            formContext.ui.tabs.get("9").sections.get("sepelio_Individual").setVisible(true);
            formContext.ui.tabs.get("9").sections.get("sepelio_Colectivo").setVisible(false);
            //clearTabSection("9", "sepelio_Colectivo");
            //formContext.getAttribute("").setRequiredLevel("required");
        }
        else if ((tipoCot == "SEPELIO") && sepelio == true) {
            formContext.ui.tabs.get("9").sections.get("sepelio_Individual").setVisible(false);
            formContext.ui.tabs.get("9").sections.get("sepelio_Colectivo").setVisible(true);
            clearTabSection("9", "sepelio_Individual", formContext);
            //formContext.getAttribute("").setRequiredLevel("required");
        }
    }
}

function AP(executionContext) {

    var formContext = executionContext.getFormContext();
    var tipoCot = formContext.getAttribute("axx_ramo").getValue()[0].name;
    var ap = formContext.getAttribute("axx_ap").getValue();

    //Colectivo
    if ((tipoCot == "ACCIDENTES PERSONALES") && ap == true) {
        formContext.ui.tabs.get("16").sections.get("apIndividual").setVisible(true);
        formContext.ui.tabs.get("16").sections.get("apColectivo").setVisible(false);
        //clearTabSection("16", "apColectivo");
        //formContext.getAttribute("").setRequiredLevel("required");

    }
    //Individual
    else if ((tipoCot == "ACCIDENTES PERSONALES") && ap == false) {
        formContext.ui.tabs.get("16").sections.get("apIndividual").setVisible(false);
        formContext.ui.tabs.get("16").sections.get("apColectivo").setVisible(true);
        //clearTabSection("16", "apIndividual");
        //formContext.getAttribute("").setRequiredLevel("required");
    }

}
function APOnload(executionContext) {

    var formContext = executionContext.getFormContext();
    var tipo = formContext.getAttribute("axx_ramo").getValue();
    var ap = formContext.getAttribute("axx_ap").getValue();

    if (tipo != null) {
        var tipoCot = formContext.getAttribute("axx_ramo").getValue()[0].name;

        //Colectivo
        if ((tipoCot == "ACCIDENTES PERSONALES") && ap == true) {
            formContext.ui.tabs.get("16").sections.get("apIndividual").setVisible(true);
            formContext.ui.tabs.get("16").sections.get("apColectivo").setVisible(false);
            //clearTabSection("16", "apColectivo", executionContext);
            //formContext.getAttribute("").setRequiredLevel("required");

        }
        //Individual
        else if ((tipoCot == "ACCIDENTES PERSONALES") && ap == false) {
            formContext.ui.tabs.get("16").sections.get("apIndividual").setVisible(false);
            formContext.ui.tabs.get("16").sections.get("apColectivo").setVisible(true);
            //clearTabSection("16", "apColectivo", executionContext);

            //formContext.getAttribute("").setRequiredLevel("required");
        }
    }
}
function seguroTecnico(executionContext) {
    var formContext = executionContext.getFormContext();
    var ramo = formContext.getAttribute("axx_productosst").getValue();
    var tipo = formContext.getAttribute("axx_ramo").getValue();

    if (ramo != null && tipo != null) {
        var productoST = formContext.getAttribute("axx_productosst").getValue()[0].name;
        var tipoCot = formContext.getAttribute("axx_ramo").getValue()[0].name;

        if ((tipoCot == "SEGURO TECNICO") && productoST == "Equipo Contratista") {
            clearTabSection("13", "corrienteDebil", formContext);
            clearTabSection("13", "roturaMaquinaria", formContext);
            clearTabSection("13", "riesgoConstruccion", formContext);
            clearTabSection("13", "riesgoMontaje", formContext);
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(true);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
            formContext.getAttribute("axx_actividad").setRequiredLevel("none")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot == "SEGURO TECNICO") && productoST == "Corriente Débil") {
            clearTabSection("13", "equipoContratista", formContext);
            clearTabSection("13", "roturaMaquinaria", formContext);
            clearTabSection("13", "riesgoConstruccion", formContext);
            clearTabSection("13", "riesgoMontaje", formContext);
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(true);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
            formContext.getAttribute("axx_actividad").setRequiredLevel("none")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot == "SEGURO TECNICO") && productoST == "Rotura de Maquinaria") {
            clearTabSection("13", "equipoContratista", formContext);
            clearTabSection("13", "corrienteDebil", formContext);
            clearTabSection("13", "riesgoConstruccion", formContext);
            clearTabSection("13", "riesgoMontaje", formContext);
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(true);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
            formContext.getAttribute("axx_actividad").setRequiredLevel("required")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot == "SEGURO TECNICO") && productoST == "Todo Riesgo Construcción") {
            clearTabSection("13", "equipoContratista", formContext);
            clearTabSection("13", "corrienteDebil", formContext);
            clearTabSection("13", "roturaMaquinaria", formContext);
            clearTabSection("13", "riesgoMontaje", formContext);
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(true);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
            formContext.getAttribute("axx_actividad").setRequiredLevel("none")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot == "SEGURO TECNICO") && productoST == "Todo Riesgo Montaje") {
            clearTabSection("13", "equipoContratista", formContext);
            clearTabSection("13", "corrienteDebil", formContext);
            clearTabSection("13", "roturaMaquinaria", formContext);
            clearTabSection("13", "riesgoConstruccion", formContext);
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(true);
            formContext.getAttribute("axx_actividad").setRequiredLevel("none")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
    }
}

function seguroTecnicoOnLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    var ramo = formContext.getAttribute("axx_productosst").getValue();
    var tipo = formContext.getAttribute("axx_ramo").getValue();

    if (ramo != null && tipo != null) {
        var productoST = formContext.getAttribute("axx_productosst").getValue()[0].name;
        var tipoCot = formContext.getAttribute("axx_ramo").getValue()[0].name;

        if ((tipoCot == "SEGURO TECNICO") && productoST == "Equipo Contratista") {
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(true);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
            formContext.getAttribute("axx_actividad").setRequiredLevel("none")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot == "SEGURO TECNICO") && productoST == "Corriente Débil") {
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(true);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
            formContext.getAttribute("axx_actividad").setRequiredLevel("none")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot == "SEGURO TECNICO") && productoST == "Rotura de Maquinaria") {
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(true);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
            formContext.getAttribute("axx_actividad").setRequiredLevel("required")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot == "SEGURO TECNICO") && productoST == "Todo Riesgo Construcción") {
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(true);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(false);
            formContext.getAttribute("axx_actividad").setRequiredLevel("none")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
        else if ((tipoCot == "SEGURO TECNICO") && productoST == "Todo Riesgo Montaje") {
            formContext.ui.tabs.get("13").sections.get("equipoContratista").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("corrienteDebil").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("roturaMaquinaria").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoConstruccion").setVisible(false);
            formContext.ui.tabs.get("13").sections.get("riesgoMontaje").setVisible(true);
            formContext.getAttribute("axx_actividad").setRequiredLevel("none")
            formContext.getAttribute("axx_productosst").setRequiredLevel("required")
        }
    }
}

function robo(executionContext) {
    var formContext = executionContext.getFormContext();
    var tipoRobo = formContext.getAttribute("axx_coberturarobo").getValue();
    var tipoCot = formContext.getAttribute("axx_ramo").getValue();

    if (tipoRobo != null && tipoCot != null) {
        var tipoRoboName = formContext.getAttribute("axx_coberturarobo").getValue()[0].name;
        var tipoCotName = formContext.getAttribute("axx_ramo").getValue()[0].name;

        if ((tipoCotName == "ROBO") && tipoRoboName == "Robo - Casa Familiar") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Robo - Local de Comercio") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Objetos Diversos") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Robo - Caja Fuerte") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Robo - Valores en Tránsito") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Riesgos Combinados") {
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
function roboOnLoad(executionContext) {

    var formContext = executionContext.getFormContext();
    var tipoRobo = formContext.getAttribute("axx_coberturarobo").getValue();
    var tipoCot = formContext.getAttribute("axx_ramo").getValue();

    if (tipoRobo != null && tipoCot != null) {
        var tipoRoboName = formContext.getAttribute("axx_coberturarobo").getValue()[0].name;
        var tipoCotName = formContext.getAttribute("axx_ramo").getValue()[0].name;

        if ((tipoCotName == "ROBO") && tipoRoboName == "Robo - Casa Familiar") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Robo - Local de Comercio") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Objetos Diversos") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Robo - Caja Fuerte") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Robo - Valores en Tránsito") {
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
        else if ((tipoCotName == "ROBO") && tipoRoboName == "Riesgos Combinados") {
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

function incendioOnChange(executionContext) {

    var formContext = executionContext.getFormContext();
    var masUnRiesgo = formContext.getAttribute("axx_masunriesgo").getValue();

    //if (tipoCot != null ){
    //var tipoCotName = formContext.getAttribute("axx_ramo").getValue()[0].name;

    if (masUnRiesgo == false) {
        formContext.ui.tabs.get("1").sections.get("incendioIndividual").setVisible(true);
        formContext.ui.tabs.get("1").sections.get("adjuntosIncendio").setVisible(false);
        formContext.getAttribute("axx_ubicaciondelriesgo").setRequiredLevel("required");
        formContext.getAttribute("axx_actividad").setRequiredLevel("required");
        formContext.getAttribute("axx_productoincendio").setRequiredLevel("required");
        formContext.getAttribute("axx_sumaaseguradamoneda").setRequiredLevel("required");
        formContext.getAttribute("axx_vigenciaincendio").setRequiredLevel("required");
        formContext.getAttribute("axx_localidad").setRequiredLevel("required");
        formContext.getAttribute("axx_provincia").setRequiredLevel("required");
    }
    else if (masUnRiesgo == true) {
        formContext.ui.tabs.get("1").sections.get("incendioIndividual").setVisible(false);
        formContext.ui.tabs.get("1").sections.get("adjuntosIncendio").setVisible(true);
        formContext.getAttribute("axx_ubicaciondelriesgo").setRequiredLevel("none");
        formContext.getAttribute("axx_actividad").setRequiredLevel("none");
        formContext.getAttribute("axx_productoincendio").setRequiredLevel("none");
        formContext.getAttribute("axx_sumaaseguradamoneda").setRequiredLevel("none");
        formContext.getAttribute("axx_vigenciaincendio").setRequiredLevel("none");
        formContext.getAttribute("axx_localidad").setRequiredLevel("none");
        formContext.getAttribute("axx_provincia").setRequiredLevel("none");
    }
    //}
}

function incendioOnLoad(executionContext) {

    var formContext = executionContext.getFormContext();

    var vigencia = formContext.getAttribute("axx_vigenciaincendio").getText();
    var tipoCot = formContext.getAttribute("axx_ramo").getValue();
    var masUnRiesgo = formContext.getAttribute("axx_masunriesgo").getValue();

    if (tipoCot != null) {
        var tipoCotName = formContext.getAttribute("axx_ramo").getValue()[0].name;

        if (tipoCotName == "INCENDIO" && masUnRiesgo == false) {
            formContext.ui.tabs.get("1").sections.get("incendioIndividual").setVisible(true);
            formContext.ui.tabs.get("1").sections.get("adjuntosIncendio").setVisible(false);
            formContext.getAttribute("axx_ubicaciondelriesgo").setRequiredLevel("required");
            formContext.getAttribute("axx_actividad").setRequiredLevel("required");
            formContext.getAttribute("axx_productoincendio").setRequiredLevel("required");
            formContext.getAttribute("axx_sumaaseguradamoneda").setRequiredLevel("required");
            formContext.getAttribute("axx_vigenciaincendio").setRequiredLevel("required");
            formContext.getAttribute("axx_localidad").setRequiredLevel("required");
            formContext.getAttribute("axx_provincia").setRequiredLevel("required");
        }
        else if (tipoCotName == "INCENDIO" && masUnRiesgo == true) {
            formContext.ui.tabs.get("1").sections.get("incendioIndividual").setVisible(false);
            formContext.ui.tabs.get("1").sections.get("adjuntosIncendio").setVisible(true);
            formContext.getAttribute("axx_ubicaciondelriesgo").setRequiredLevel("none");
            formContext.getAttribute("axx_actividad").setRequiredLevel("none");
            formContext.getAttribute("axx_productoincendio").setRequiredLevel("none");
            formContext.getAttribute("axx_sumaaseguradamoneda").setRequiredLevel("none");
            formContext.getAttribute("axx_vigenciaincendio").setRequiredLevel("none");
            formContext.getAttribute("axx_localidad").setRequiredLevel("none");
            formContext.getAttribute("axx_provincia").setRequiredLevel("none");
        }
    }
}
//function vigencia(executionContext){
//    
//    var formContext = executionContext.getFormContext();
//    var vigencia1 = formContext.getAttribute("axx_vigenciaincendio").getText(); 
//
//            if (vigencia1 == "Anual") {
//            formContext.getControl("axx_fechadesde").setVisible(false);
//            formContext.getAttribute("axx_fechadesde").setRequiredLevel("required");
//            }
//            else if (vigencia1 == "Período") {
//            formContext.getControl("axx_fechadesde").setVisible(true);
//            formContext.getAttribute("axx_fechadesde").setRequiredLevel("none");
//            }
//}
function integralesOnChange(executionContext) {
    var formContext = executionContext.getFormContext();
    var masUnRiesgo = formContext.getAttribute("axx_masunriesgo").getValue();

    //       if (tipoCotNull != null){
    //       var tipoCot = formContext.getAttribute("axx_ramo").getValue()[0].name;
    if (masUnRiesgo == false) {
        formContext.ui.tabs.get("8").sections.get("integralesIndividual").setVisible(true);
        formContext.ui.tabs.get("8").sections.get("archivosIntegrales").setVisible(false);
        formContext.getAttribute("axx_ubicaciondelriesgo").setRequiredLevel("required");
        formContext.getAttribute("axx_actividad").setRequiredLevel("required");
        formContext.getAttribute("axx_localidad").setRequiredLevel("required");
        formContext.getAttribute("axx_provincia").setRequiredLevel("required");
        //formContext.data.entity.save();
    }
    else if (masUnRiesgo == true) {
        formContext.ui.tabs.get("8").sections.get("integralesIndividual").setVisible(false);
        formContext.ui.tabs.get("8").sections.get("archivosIntegrales").setVisible(true);
        formContext.getAttribute("axx_ubicaciondelriesgo").setRequiredLevel("none");
        formContext.getAttribute("axx_actividad").setRequiredLevel("none");
        formContext.getAttribute("axx_localidad").setRequiredLevel("none");
        formContext.getAttribute("axx_provincia").setRequiredLevel("none");
    }
    //  }
}
function clearTabSection(tabname, sectionname, formContext) {

    var controls = formContext.ui.tabs.get(tabname).sections.get(sectionname).controls.get();
    var controlsL = controls.length;
    for (var i = 0; i < controlsL; i++) {
        if (controls[i].getAttribute().getAttributeType() == "boolean") {
            controls[i].getAttribute().setValue(false);
        }
        else {
            controls[i].getAttribute().setValue(null);
        }
    }

}


function setRequiereNoneTab(tabname, formContext) {
    var fieldList = new Array();

    var tab = formContext.ui.tabs.get(tabname);

    tab.sections.forEach(function (section, sectionIndex) {
        section.controls.forEach(function (control, controlIndex) {
            switch (control.getControlType()) {
                case "standard":
                case "lookup":
                case "optionset":
                    var attribute = control.getAttribute();

                    if (attribute != null) {
                        fieldList.push(attribute.getName());
                        formContext.getAttribute(attribute.getName()).setRequiredLevel("none");
                    }
                    break;
            }
        });
    });

    return fieldList;

}
function clearTab(tabname, formContext) {
    var formContext = executionContext.getFormContext();
    var controls = formContext.ui.tabs.get(idProducto).controls.get();
    var controlsL = controls.length;
    for (var i = 0; i < controlsL; i++) {
        if (controls[i].getAttribute().getAttributeType() == "boolean") {
            controls[i].getAttribute().setValue(false);
        }
        else {
            controls[i].getAttribute().setValue(null);
        }
    }
}

function setRequiereNoneTabSection(tabname, sectionname, formContext) {
    var formContext = executionContext.getFormContext();
    var controls = formContext.ui.tabs.get(tabname).sections.get(sectionname).controls.get();
    var controlsL = controls.length;
    for (var i = 0; i < controlsL; i++) {
        if (controls[i].getAttribute().getAttributeType() == "boolean") {
            controls[i].getAttribute().setRequiredLevel("none");
        }
        else {
            controls[i].getAttribute().setRequiredLevel("none");
        }
    }
}

//function setRequiereNoneTab(tabname, formContext){
//   // var formContext = executionContext.getFormContext();
//     var controls = formContext.ui.tabs.get(tabname).controls.get();
//     var controlsL = controls.length;
//     for (var i = 0; i < controlsL; i++) {
//         if(controls[i].getAttribute().getAttributeType() == "boolean") {
//            controls[i].getAttribute().setRequiredLevel("none");
//         }
//         else {
//            controls[i].getAttribute().setRequiredLevel("none");
//         }
//     }
//}
//
function setRequiereTrueTabSection(ExecutionContext, tabname, sectionname) {
    var formContext = executionContext.getFormContext();
    var controls = ExecutionContext.getFormContext().ui.tabs.get(tabname).sections.get(sectionname).controls.get();
    var controlsL = controls.length;
    for (var i = 0; i < controlsL; i++) {
        if (controls[i].getAttribute().getAttributeType() == "boolean") {
            controls[i].getAttribute().setRequiredLevel("required");
        }
        else {
            controls[i].getAttribute().setRequiredLevel("required");
        }
    }
}

function saveFormOnChange(executionContext) {
    var formContext = executionContext.getFormContext();
    var tipo = formContext.getAttribute("axx_ramo").getValue();

    if (tipo != null) {
        var producto = formContext.getAttribute("axx_ramo").getValue()[0].name;
        if (producto == "SEPELIO" || producto == "TRANSPORTES") {
            formContext.data.entity.save();
        }
    }
}

function armadoComercialOnLoad(executionContext) {

    var formContext = executionContext.getFormContext();
    var estado = formContext.getAttribute("statuscode").getValue();
    if (estado != 1) {
        formContext.getControl("parentaccountid").setDisabled(true);
        formContext.getControl("axx_productorid").setDisabled(true);
        formContext.getControl("axx_ramo").setDisabled(true);
        //      formContext.getControl("axx_flota").setDisabled(true);
        formContext.getControl("axx_procesocomercial").setDisabled(true);
        //      formContext.getControl("axx_bloqueado").setDisabled(true);
    }
}
function hideTabsOnLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    var Interaccion = executionContext.getFormContext().ui.tabs.get("Interacciones");
    var Archivos = executionContext.getFormContext().ui.tabs.get("Archivos");
}

//en el onchange del campo Id Cotizacion
function NombreOnChange(executionContext) {

    var formContext = executionContext.getFormContext();
    //    var productor = formContext.getAttribute("axx_productorid").getValue();
    //   var ramo = formContext.getAttribute("axx_ramo").getValue();
    //    var cuenta = formContext.getAttribute("parentaccountid").getValue();  
    var numero = formContext.getAttribute("axx_nroticket").getValue();
    if (formContext.getAttribute("createdby").getValue() != null) {
        var autor = formContext.getAttribute("createdby").getValue()[0].name;
    }

    if (numero != null) {
        //   setTimeout(function(){
        //var cobIntName = cobInt[0].name;

        formContext.getAttribute("name").setValue(numero + " - " + autor);
        //formContext.data.entity.save();
        formContext.data.entity.refresh();

        //  }, 2000);
    }
}
function bloquearCampos(executionContext) {
    var formContext = executionContext.getFormContext();
    var temaid = formContext.getAttribute("axx_nroticket").getValue();

    if (temaid != null) {
        formContext.getControl("axx_ramo").setDisabled(true);
        formContext.getControl("parentaccountid").setDisabled(true);
        formContext.getControl("axx_productorid").setDisabled(true);
    }
}

function nuevaPersona(executionContext) {
    var formContext = executionContext.getFormContext();

    Xrm.Navigation.navigateTo({ pageType: "entityrecord", entityName: "account", formType: 2 }, { target: 2, position: 1, width: { value: 95, unit: "%" } });
    formContext.getAttribute("axx_botonnuevapersona").setValue(null);
}

function cuentaControlOnChange(executionContext) {
    var formContext = executionContext.getFormContext();
    var nombreCuenta = formContext.getAttribute("axx_cuentacontrol").getValue();

    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/accounts?$select=name,accountid&$filter=(name%20eq%20%27" + nombreCuenta + "%27)", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var result = JSON.parse(this.response);

                var lookupValue = new Array();
                lookupValue[0] = new Object();
                lookupValue[0].id = result["accountid"]; // GUID of the lookup id
                lookupValue[0].name = result["name"]; // Name of the lookup
                lookupValue[0].entityType = "account"; //Entity Type of the lookup entity
                formContext.getAttribute("parentaccountid").setValue(lookupValue); // You need to replace the lookup field Name..


            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();

}
function cotizadoSus(executionContext) {// onChange campo ass
    var formContext = executionContext.getFormContext();
    var razonEstado = formContext.getAttribute("statuscode").getValue();
    var cotSus = formContext.getAttribute("axx_cotizada").getValue();
    // derivado sus: 282270003, pendiente jefatura: 282270009, cotizada: 282270000


    if (cotSus == true)// || razonEstado == "282270003,282270009")
    {
    //Establecer Premio Suscripción en Necesario para la empresa
    formContext.getAttribute("axx_premiosuscripcion").setRequiredLevel("required");
    //Mostrar campo Premio Suscripción
    formContext.getControl("axx_premiosuscripcion").setVisible(true);   
    //Establecer Cotizada Comercial en "Sí" 
    formContext.getAttribute("axx_cotizadacomercial").setValue(true);    
    //Establecer Premio Cotizado en Premio Suscripción estimatedvalue
    formContext.getAttribute("estimatedvalue").setValue(axx_premiosuscripcion);
    formContext.data.entity.save();
    }
    else if (cotSus == false)// || razonEstado == "282270003,282270009")
    {
    //Borrar Premio Suscripción:
    formContext.getAttribute("axx_premiosuscripcion").setValue(null);   
    //Ocultar campo Premio Suscripción
    formContext.getControl("axx_premiosuscripcion").setVisible(false);
    //Borrar Premio Cotizado
    formContext.getAttribute("estimatedvalue").setValue(null);
    //Establecer Premio Suscripción en No necesario para la empresa
    formContext.getAttribute("axx_premiosuscripcion").setRequiredLevel("none");
    //Establecer Cotizada Comercial en "No"
    formContext.getAttribute("axx_cotizadacomercial").setValue(false);
    formContext.data.entity.save();
    } 
    else if (razonEstado == "282270000")
    {
    //Mostrar campo Premio Suscripción
    formContext.getControl("axx_premiosuscripcion").setVisible(true);
    }
}
function cotizadoCom(executionContext) {// onChange campo ass
    var formContext = executionContext.getFormContext();
    var razonEstado = formContext.getAttribute("statuscode").getValue();
    var cotCom = formContext.getAttribute("axx_cotizadacomercial").getValue();
    // derivado sus: 282270003, pendiente jefatura: 282270009, cotizada: 282270000
if (formContext.ui.getFormType() != 1) {
        if (cotCom == true) {
                formContext.getAttribute("axx_rebajaauto").setRequiredLevel("none");
                formContext.getAttribute("estimatedvalue").setRequiredLevel("required");
                    }
            else if (cotCom == false){
                    formContext.getAttribute("axx_rebajaauto").setRequiredLevel("required");
                    formContext.getAttribute("estimatedvalue").setRequiredLevel("none");
                    }
}
}
