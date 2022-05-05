function makeRequest(method, fileName, url, bytes, firstRequest, offset, count, fileBytes) {
   return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open(method, url);
      if (firstRequest)
         request.setRequestHeader("x-ms-transfer-mode", "chunked");
      request.setRequestHeader("x-ms-file-name", fileName);
      if (!firstRequest) {
         request.setRequestHeader("Content-Range", "bytes " + offset + "-" + (offset + count - 1) + "/" + fileBytes.length);
         request.setRequestHeader("Content-Type", "application/octet-stream");
      }
      request.onload = resolve;
      request.onerror = reject;
      if (!firstRequest)
         request.send(bytes);
      else
         request.send();
   });
}
function uploadFile(fieldname) {
   if (Xrm.Page.getAttribute(fieldname).getValue() == null) { // Si el campo de upload está vacío, intentmoas subir el "falso"
      var fileControl = document.getElementById("myFile");
      var reader = new FileReader();
      var files = fileControl.files;
      if (files && files.length > 0) {
         Xrm.Utility.showProgressIndicator("Guardando archivos adjuntos...");
         var fileName = files[0].name;
         var entitySetName = "opportunities";
         var recordId = Xrm.Page.data.entity.getId();
         reader.onload = function () {
            var arrayBuffer = this.result;
            array = new Uint8Array(arrayBuffer);
            var url = parent.Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.1/" + entitySetName + "(" + recordId.replace("}", "").replace("{", "") + ")/" + fieldname;
            // this is the first request. We are passing content as null.
            makeRequest("PATCH", fileName, url, null, true).then(function (s) {
               fileChunckUpload(s, fileName, array, fieldname);
            });
         };
         reader.readAsArrayBuffer(files[0]);
      }
   }
}
async function fileChunckUpload(response, fileName, fileBytes, fieldname) {
   var req = response.target;
   var url = req.getResponseHeader("location");
   var chunkSize = parseInt(req.getResponseHeader("x-ms-chunk-size"));
   var offset = 0;
   while (offset <= fileBytes.length) {
      var count = (offset + chunkSize) > fileBytes.length ? fileBytes.length % chunkSize : chunkSize;
      var content = new Uint8Array(count);
      for (var i = 0; i < count; i++) {
         content[i] = fileBytes[offset + i];
      }
      response = await makeRequest("PATCH", fileName, url, content, false, offset, count, fileBytes);
      req = response.target;
      if (req.status === 206) { // partial content, so please continue. 
         offset += chunkSize;
      }
      else if (req.status === 204) { // request complete.
         break;
      }
      else { // error happened.
         // log error and take necessary action. 
         break;
      }
   }

   Xrm.Page.getAttribute(fieldname).fireOnChange();

   setTimeout(function () {
      Xrm.Utility.closeProgressIndicator();
      if (!Xrm.Page.data.entity.getIsDirty()) {
         window.parent.location.reload();
      }
   }, 1000);
}