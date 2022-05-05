provinciaSeguros.CasosModales.inicializarServicios = function(){

    provinciaSeguros.CasosModales.servicios.obtenerRegistro = function(clientURL, url, succesCallback){

        var req = new XMLHttpRequest();
        req.open("GET", clientURL + url, true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");

        req.onreadystatechange = function() {

            if (this.readyState === 4) {

                req.onreadystatechange = null;

                if (this.status === 200) {

                    var result = JSON.parse(this.response);
                    succesCallback(result);

                } else {

                    alert(this.statusText);
                }
            }
        };
        req.send();
    }
}