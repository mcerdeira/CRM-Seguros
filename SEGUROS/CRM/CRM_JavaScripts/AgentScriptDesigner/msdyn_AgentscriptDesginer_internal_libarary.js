/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
var Microsoft;
(function (Microsoft) {
    var AgentScript;
    (function (AgentScript) {
        var Utility;
        (function (Utility) {
            // Handler Function for the MDD OnLoad to pass the RecordID from MDD to the IFrame Control
            function agentScriptDialogOnLoadHandler(eventContext) {
                var formContext = eventContext.getFormContext();
                var designerControl = formContext.getControl(Microsoft.AgentScript.Constants.DesignerID);
                var appUrl = new URL(Xrm.Utility.getGlobalContext().getCurrentAppUrl());
                var iframeUrl = appUrl.origin + "/WebResources/AgentScriptDesigner/msdyn_agentScriptDesigner.html";
                var input = formContext.data.attributes.getByName(Microsoft.AgentScript.Constants.RecordIdParam).getValue();
                if (input == null) {
                    designerControl.setSrc(iframeUrl);
                }
                else {
                    designerControl.setSrc(iframeUrl + "?id=" + input);
                }
            }
            Utility.agentScriptDialogOnLoadHandler = agentScriptDialogOnLoadHandler;
        })(Utility = AgentScript.Utility || (AgentScript.Utility = {}));
    })(AgentScript = Microsoft.AgentScript || (Microsoft.AgentScript = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var Microsoft;
(function (Microsoft) {
    var AgentScript;
    (function (AgentScript) {
        var Constants = (function () {
            function Constants() {
            }
            return Constants;
        }());
        Constants.DesignerID = "designer_id";
        Constants.RecordIdParam = "record_Id";
        AgentScript.Constants = Constants;
    })(AgentScript = Microsoft.AgentScript || (Microsoft.AgentScript = {}));
})(Microsoft || (Microsoft = {}));
