Xrm.WebApi.online.retrieveMultipleRecords("axx_respuestasuscripcion", "?$select=axx_respuestasuscripcionid,axx_archivocotizacion&$filter=_axx_solicitudcotizacionid_value eq " + guidactual + "&$orderby=createdon desc").then(
    function success(results) {
        for (var i = 0; i < results.entities.length; i++) {
            let axx_archivocotizacion = results.entities[i]["axx_archivocotizacion"];
            let axx_respuestasuscripcionid = results.entities[i]["axx_respuestasuscripcionid"];
            if(axx_archivocotizacion){
                let link = Xrm.Page.context.getClientUrl() + "/api/data/v9.0/axx_respuestasuscripcions(" + axx_respuestasuscripcionid + ")/axx_archivocotizacion/$value";
            }
        }
    },
    function(error) {
        Xrm.Utility.alertDialog(error.message);
    }
);
