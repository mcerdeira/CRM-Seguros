"use strict"
var CesLib = function()
{
	function e(url, survey)
	{
		this._url = url, this._surveyname = survey
	}
	return e.prototype.renderInline = function (e, t)
	{
		if (!this._url) throw new Error("_url should be provided.")
    },
	e.prototype.callTriggerEventAPI = function (e)
	{
		 return this.callCESAction("triggerevent", e, this._surveyname);
	},
	e.prototype.callValidateEligibilityAPI = function ()
	{
		 return this.callCESAction("validatesurveyeligibility", "NA", this._surveyname);
	},
	e.prototype.callTriggerAndValidateEligibilityAPI = function (e)
	{
		 return this.callCESAction("triggerandvalidateeligibility", e, this._surveyname);
	},
	e.prototype.getLanguageCode = function(langCode) {
        let locale = "en-US";
        switch (langCode) {
            case 1031:
                locale = "de";
                break;
            case 1036:
                locale = "fr";
                break;
            case 1043:
                locale = "nl";
                break;
            case 1040:
                locale = "it";
                break;
            case 1034:
                locale = "es";
                break;
            case 1053:
                locale = "sv";
                break;
            case 1041:
                locale = "ja";
                break;
            case 2052:
                locale = "zh-cn";
                break;
            case 2068:
                locale = "nn-no";
                break;
            case 1035:
                locale = "fi";
                break;
        }
        return locale;
    },
	e.prototype.callCESAction = function(calltype, eventname, surveyname)
	{
		return new Promise((resolve, reject) => {
		var baseurl = this._url;
		var cesurl = baseurl + "/api/data/v9.0/msdyn_cesinvoke";
		var jsondata = '{"CallType":"' + calltype + '","EventName":"' + eventname + '","SurveyName":"' + surveyname + '"} ';
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4)
					if (this.status == 200) {
						var crmresponse = JSON.parse(this.responseText);
						if (crmresponse.IsSuccess == "True") {
							var cesresponse = JSON.parse(crmresponse.CESResult);
							if (cesresponse.Eligibility && cesresponse.FormsProId != null) {
								resolve(cesresponse.FormsProId);
							} else {
								resolve(null);
							}
						}
					} else {
						reject(this.status + ":" + this.responseText);
                    }
			
		};
		xhttp.open("POST", cesurl, true);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send(jsondata);
		});
	},
	e
}();	