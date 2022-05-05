/*
{
  "_axx_campanaorigen_value": "95c074da-2503-eb11-a813-000d3ac1703e",
  "axx_0km": "N",
  "axx_anofabricacion": "2013",
  "axx_apellido": "PAREDES",
  "axx_canal": 282270001,
  "axx_celular": "111553874915",
  "axx_codigodeventa_text": "8642",
  "axx_codigopostal": "1804",
  "axx_cotizacion": "76767875",
  "axx_documento": "36308462",
  "axx_email": "paredespablo29@gmail.com",
  "axx_fecha": "2022-01-10T13:50:32.0000000Z",
  "axx_marca": "VWV VOLKSWAGEN",
  "axx_modelo": "046651 GOL 1.4 3 P POWER",
  "axx_nombre": "PABLO",
  "axx_patente": "NBK240",
  "axx_planseleccionado": "22",
  "axx_procesocontrol": "OK",
  "axx_telefono": "1153874915",
  "_axx_estadovd_value": "5add1e2a-62e1-e911-a812-000d3ac1703e",
  "_axx_persona_value": "60be95c7-e14d-eb11-a812-000d3ac1703e\",\"da92ae45-2749-eb11-a812-0022483616ec",
  "_ownerid_type": "",
  "_axx_ramo1_value": "2fe9edc2-06f1-e811-a97f-000d3ac094dc",
  "_axx_resultado_value": "e8e3739b-a935-ec11-8c64-00224837d6ec",
  "_axx_unidaddenegocios_value": "ba41d2c0-8b01-ea11-a811-000d3ac1703e"
}
*/

var entity = {};
entity.axx_CampanaOrigen = {
    Id: "95c074da-2503-eb11-a813-000d3ac1703e",
    LogicalName: "campaign"
};
entity.axx_0KM = "N";
entity.axx_AnoFabricacion = "2013";
entity.axx_Apellido = "PAREDES";
entity.axx_canal = {
    Value: 282270001
};
entity.axx_Celular = "111553874915";
entity.axx_codigodeventa_text = "8642";
entity.axx_CodigoPostal = "1804";
entity.axx_Cotizacion = "76767875";
entity.axx_Documento = "36308462";
entity.axx_Email = "paredespablo29@gmail.com";
entity.axx_Fecha = new Date("01/10/2022 13:50:00").toLocaleString();
entity.axx_Marca = "VWV VOLKSWAGEN";
entity.axx_Modelo = "046651 GOL 1.4 3 P POWER";
entity.axx_Nombre = "PABLO";
entity.axx_Patente = "NBK240";
entity.axx_PlanSeleccionado = "22";
entity.axx_ProcesoControl = "OK";
entity.axx_Telefono = "1153874915";
entity.axx_EstadoVD = {
    Id: "5add1e2a-62e1-e911-a812-000d3ac1703e",
    LogicalName: "axx_estadoventadirecta"
};
entity.axx_Ramo1 = {
    Id: "2fe9edc2-06f1-e811-a97f-000d3ac094dc",
    LogicalName: "axx_ramo"
};
entity.axx_Resultado = {
    Id: "e8e3739b-a935-ec11-8c64-00224837d6ec",
    LogicalName: "axx_resultadosventadirecta"
};
entity.axx_unidaddenegocios = {
    Id: "ba41d2c0-8b01-ea11-a811-000d3ac1703e",
    LogicalName: "businessunit"
};

var req = new XMLHttpRequest();
req.open("POST", encodeURI(Xrm.Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/axx_ventadirectaSet"), true);
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        this.onreadystatechange = null;
        if (this.status === 201) {
            var result = JSON.parse(this.responseText).d;
            var newEntityId = result.axx_ventadirectaId;
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send(JSON.stringify(entity));