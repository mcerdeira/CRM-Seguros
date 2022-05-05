//Todo: reference the CustomerExperienceSurveyUtil class directly from app common through nupkg
//https://dynamicscrm.visualstudio.com/OneCRM/_git/CRM.Solutions.ApplicationCommon?path=%2Fsolutions%2FClientUtility%2FClient%2FCustomerExperienceSurvey%2FCustomerExperienceSurvey.ts&_a=contents&version=GBv9.0_patch

var __assign =
    (this && this.__assign) ||
    Object.assign ||
    function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

var ClientUtility;
(function (ClientUtility) {
    var CustomerExperienceSurveyUtil = (function () {
        function CustomerExperienceSurveyUtil() {}
        CustomerExperienceSurveyUtil.ImportEmbedResources = function () {
            if (!CustomerExperienceSurveyUtil.HasResourcesImported) {
                var embedCSS = document.createElement('link');
                embedCSS.rel = 'stylesheet';
                embedCSS.type = 'text/css';
                embedCSS.href = 'https://mfpembedcdnmsit.azureedge.net/mfpembedcontmsit/Embed.css';
                var embedJS = document.createElement('script');
                embedJS.type = 'text/javascript';
                embedJS.src = 'https://mfpembedcdnmsit.azureedge.net/mfpembedcontmsit/Embed.js';
                window.top.document.head.appendChild(embedCSS);
                window.top.document.head.appendChild(embedJS);
                CustomerExperienceSurveyUtil.HasResourcesImported = true;
            }
        };
        /* Triggers the given event, checks for eligibility of the survey and renders the form if eligible */
        CustomerExperienceSurveyUtil.TriggerEventAndHandleSurvey = function (
            teamName,
            eventName,
            surveyName,
            optionalParameters
        ) {
            if (optionalParameters === void 0) {
                optionalParameters = {};
            }
            var param = {
                TeamName: teamName,
                EventName: eventName,
                SurveyName: surveyName,
                CallType: 'triggerandvalidateeligibility'
            };
            var eventParamArray = new Array();
            eventParamArray.push({ name: 'SurveyName', value: surveyName });
            eventParamArray.push({ name: 'TeamName', value: teamName });
            eventParamArray.push({ name: 'TriggeringEvent', value: eventName });
            CustomerExperienceSurveyUtil.HandlePromise(
                CustomerExperienceSurveyUtil.HandleCESAction(param),
                optionalParameters,
                eventParamArray
            );
        };
        CustomerExperienceSurveyUtil.HandleCESAction = function (param) {
            return new Promise(function (resolve, reject) {
                var baseUrl = window.location.origin;
                var cesUrl = baseUrl + '/api/data/v9.0/CustomerExperienceSurveysService';
                var jsonData = JSON.stringify(param);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            var crmResponse = JSON.parse(this.responseText);
                            if (crmResponse.IsSuccess == 'True') {
                                var cesResultString = crmResponse.CESResult;
                                var cesResult = JSON.parse(cesResultString);
                                if (cesResult.Eligibility && cesResult.FormsProId != null) {
                                    resolve(cesResult);
                                }
                            } else {
                                resolve(null);
                            }
                        } else {
                            reject(this.status + ': ' + this.responseText);
                        }
                    }
                };
                xhttp.open('POST', cesUrl, true);
                xhttp.setRequestHeader('Content-Type', 'application/json');
                xhttp.send(jsonData);
            });
        };
        CustomerExperienceSurveyUtil.HandlePromise = function (
            CESActionPromise,
            optionalParameters,
            telemetryEventParamArray
        ) {
            var _this = this;
            CESActionPromise.then(function (cesResult) {
                if (cesResult) {
                    try {
                        var formsProId = cesResult['FormsProId'];
                        var se = new window.top.SurveyEmbed(
                            formsProId,
                            'https://customervoice.microsoft.com/',
                            'https://mfpembedcdnmsit.azureedge.net/mfpembedcontmsit/',
                            'true'
                        );
                        if (optionalParameters.renderDimensions)
                            se.renderPopup(
                                CustomerExperienceSurveyUtil.GenerateFormContext(
                                    cesResult['AADID'],
                                    optionalParameters
                                ),
                                optionalParameters.renderDimensions.width,
                                optionalParameters.renderDimensions.height
                            );
                        else
                            se.renderPopup(
                                CustomerExperienceSurveyUtil.GenerateFormContext(cesResult['AADID'], optionalParameters)
                            );
                        telemetryEventParamArray.push({ name: 'Survey Rendered', value: true });
                        telemetryEventParamArray.push({ name: 'AADID', value: cesResult['AADID'] });
                        telemetryEventParamArray.push({ name: 'FormsProID', value: formsProId });
                        Xrm.Reporting.reportSuccess(_this.componentName, telemetryEventParamArray);
                    } catch (e) {
                        Xrm.Reporting.reportFailure(
                            _this.componentName,
                            { name: 'Failed to Render Survey', message: e.message },
                            undefined,
                            telemetryEventParamArray
                        );
                    }
                }
            }).catch(function (reason) {
                Xrm.Reporting.reportFailure(
                    _this.componentName,
                    { name: 'CESService Rejected', message: reason },
                    undefined,
                    telemetryEventParamArray
                );
            });
        };
        CustomerExperienceSurveyUtil.GenerateFormContext = function (AADID, optionalParameters) {
            var context;
            if (!optionalParameters.context) context = Xrm.Utility.getGlobalContext();
            else context = optionalParameters.context;
            var deviceName = '';
            if (context && context.client && context.client.userAgent) {
                var userAgent = context.client.userAgent;
                if (userAgent.isWin) {
                    deviceName = 'Windows';
                } else if (userAgent.isAndroidModern || userAgent.isAndroid) {
                    deviceName = 'Android';
                } else if (userAgent.isIos) {
                    deviceName = 'iOS';
                }
            } else {
                var userAgent = window.navigator.userAgent;
                if (userAgent.indexOf('Win') > -1) {
                    deviceName = 'Windows';
                } else if (userAgent.indexOf('Android') > -1) {
                    deviceName = 'Android';
                } else if (userAgent.indexOf('IPhone') > -1 || userAgent.indexOf('IPad') > -1) {
                    deviceName = 'iOS';
                }
            }
            var userId = AADID;
            var languageCode = 'en-US';
            if (context) {
                languageCode = CustomerExperienceSurveyUtil.GetLocale(context.getUserLcid());
            }
            var orgId = '';
            if (context && context.organizationSettings && context.organizationSettings.organizationId) {
                orgId = context.organizationSettings.organizationId;
            }
            var tenantId = '';
            if (context && context.organizationSettings && context.organizationSettings.organizationTenant) {
                tenantId = context.organizationSettings.organizationTenant;
            }
            var formscontext = {
                locale: languageCode,
                UserId: userId,
                OrganizationId: orgId,
                Culture: languageCode,
                UrlReferrer: window.location.href,
                DeviceType: deviceName,
                UserTenantId: tenantId,
                ProductContext: optionalParameters.productContext || ''
            };
            if (optionalParameters.formContextParameters) {
                var result = __assign({}, formscontext, optionalParameters.formContextParameters);
                return result;
            }
            return formscontext;
        };
        CustomerExperienceSurveyUtil.GetLocale = function (langCode) {
            var locale = 'en-US';
            switch (langCode) {
                case 1025:
                    locale = 'ar';
                    break;
                case 1028:
                    locale = 'zh-Hant';
                    break;
                case 1030:
                    locale = 'da';
                    break;
                case 1031:
                    locale = 'de';
                    break;
                case 1034:
                    locale = 'es-ES';
                    break;
                case 1035:
                    locale = 'fi';
                    break;
                case 1036:
                    locale = 'fr-FR';
                    break;
                case 1037:
                    locale = 'he';
                    break;
                case 1040:
                    locale = 'it';
                    break;
                case 1041:
                    locale = 'ja';
                    break;
                case 1043:
                    locale = 'nl';
                    break;
                case 1044:
                    locale = 'nb-no';
                    break;
                case 1045:
                    locale = 'pl';
                    break;
                case 1046:
                    locale = 'pt-br';
                    break;
                case 1053:
                    locale = 'sv';
                    break;
                case 1054:
                    locale = 'th';
                    break;
                case 1055:
                    locale = 'tr';
                    break;
                case 2052:
                    locale = 'zh-Hans';
                    break;
                case 2068:
                    locale = 'nn-no';
                    break;
                case 2070:
                    locale = 'pt-pt';
                    break;
            }
            return locale;
        };
        return CustomerExperienceSurveyUtil;
    })();
    CustomerExperienceSurveyUtil.HasResourcesImported = false;
    CustomerExperienceSurveyUtil.componentName = 'CustomerExperienceSurveyUtil';
    ClientUtility.CustomerExperienceSurveyUtil = CustomerExperienceSurveyUtil;
})(ClientUtility || (ClientUtility = {}));
//# sourceMappingURL=CustomerExperienceSurvey.js.map
