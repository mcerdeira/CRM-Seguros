var AppCommon;!function(t){var e=function(){function t(t,e){this.name=t,this.value=e}return t.prototype.Name=function(){return this.name},t.prototype.Value=function(){return this.value},t}();t.EventParameter=e}(AppCommon||(AppCommon={}));var AppCommon;!function(t){var e=function(){function t(){}return t.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)})},t.GetTimeStamp=function(){var t=new Date;return t.getUTCFullYear()+"-"+("00"+(t.getUTCMonth()+1)).slice(-2)+"-"+("00"+t.getUTCDate()).slice(-2)+" "+("00"+t.getUTCHours()).slice(-2)+":"+("00"+t.getUTCMinutes()).slice(-2)+":"+("00"+t.getUTCSeconds()).slice(-2)},t}();t.Utility=e}(AppCommon||(AppCommon={}));var AppCommon;!function(t){var e=function(){function e(t,e){this.activityId=t,null!=this.activityId&&""!=this.activityId||(this.activityId=this.GetCurrentActivityId()),this.eventName=e,this.eventParameters=[],this.AddEventParameter("Module","Sales")}return e.prototype.AddEventParameter=function(e,n){this.eventParameters.push(new t.EventParameter(e,n))},e.prototype.ToJson=function(){var t={};t.ActivityId=this.activityId,t.EventName=this.eventName;for(var e={},n=0;n<this.eventParameters.length;n++)e[this.eventParameters[n].Name()]=this.eventParameters[n].Value();return t.EventValues=e,t},e.prototype.GetCurrentActivityId=function(){return Xrm.Page.applicationContext&&Xrm.Page.applicationContext.EventManager&&Xrm.Page.applicationContext.EventManager.getActivityId?Xrm.Page.applicationContext.EventManager.getActivityId():e.defaultActivityId},e.prototype.ActivityId=function(){return this.activityId},e.prototype.SolutionName=function(){return this.solutionName},e.prototype.EventName=function(){return this.eventName},e.prototype.EventParameters=function(){return this.eventParameters},e}();e.defaultActivityId=t.Utility.newGuid(),t.TelemetryEvent=e}(AppCommon||(AppCommon={}));var AppCommon;!function(t){var e=function(){function e(){this.eventStartMarkers={}}return e.prototype.AddTelemetryEventImmediately=function(t){this.AddTelemetryEvent(t)},e.prototype.AddTelemetryEvent=function(t){!e.DISABLE_XRM_REPORTING&&Xrm.Reporting&&Xrm.Reporting.reportEvent&&Xrm.Reporting.reportEvent(t)},e.prototype.PostStartMarker=function(t,e,n,r,i){var a=this.CreateTelemetryEvent(t,e,n,null,r,i),o=e+"_"+n;this.eventStartMarkers[o]=window.performance.now(),this.AddTelemetryEventImmediately(a)},e.prototype.PostEndMarker=function(t,e,n,r,i,a){void 0===a&&(a=!1);var o=window.performance.now(),m=this.CreateTelemetryEvent(t,e,n,null,r,i,a),u=e+"_"+n,d=this.eventStartMarkers[u];if(null!=d&&!isNaN(d)){var s=Math.round(o-d);m.AddEventParameter("executionTime",s)}this.AddTelemetryEventImmediately(m)},e.prototype.CreateTelemetryEvent=function(e,n,r,i,a,o,m){void 0===m&&(m=!1);var u=new t.TelemetryEvent("",e);return u.AddEventParameter("webResourceName",n),u.AddEventParameter("functionName",r),null==i||isNaN(i)||u.AddEventParameter("executionTime",i),u.AddEventParameter("async",m),u.AddEventParameter("currentId",a),o&&""!=o&&u.AddEventParameter("parentId",o),ClientUtility.DataUtil.isNullOrUndefined(Xrm.Page.context)||(ClientUtility.DataUtil.isNullOrUndefined(Xrm.Page.context.organizationSettings)||ClientUtility.DataUtil.isNullOrUndefined(Xrm.Page.context.organizationSettings.organizationId)||u.AddEventParameter("organizationId","{"+Xrm.Page.context.organizationSettings.organizationId.toUpperCase()+"}"),ClientUtility.DataUtil.isNullOrUndefined(Xrm.Page.context.userSettings)||ClientUtility.DataUtil.isNullOrUndefined(Xrm.Page.context.userSettings.userId)||u.AddEventParameter("userId",Xrm.Page.context.userSettings.userId)),u},e.Instance=function(){return ClientUtility.DataUtil.isNullOrUndefined(e.instance)&&(e.instance=new e),e.instance},e}();e.DISABLE_XRM_REPORTING=!1,t.TelemetryReporter=e}(AppCommon||(AppCommon={}));
//# sourceMappingURL=G:\Agents\BA5951\_wap\4\s\target\retail\AnyCPU\AppCommonWebResources\MinifiedWebResources\Telemetry\TelemetryLibrary.js.map