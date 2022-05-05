"use strict";
var scenarioStartResult, SITraceBIEventName = "SITraceBIEvent", SITraceCIEventName = "SITraceCIEvent", SITraceEventName = "SITraceEvent", Telemetry = function () {
    function i() { }
    var t = i.prototype;
    return t.reportInfo = function (t) {
        i.reportLog(SITraceBIEventName, t)
    }
        ,
        t.ReportInfo = function (t) {
            this.reportInfo(t)
        }
        ,
        t.reportUserAction = function (t) {
            i.reportLog(SITraceCIEventName, t)
        }
        ,
        t.ReportUserAction = function (t) {
            this.reportUserAction(t)
        }
        ,
        t.reportWarning = function (t) {
            i.reportLog(SITraceEventName, t, 2)
        }
        ,
        t.ReportWarning = function (t) {
            this.reportWarning(t)
        }
        ,
        t.reportError = function (t) {
            i.reportLog(SITraceEventName, t, 1)
        }
        ,
        i.reportLog = function (e, r, n) {
            try {
                var t, a = r && r.context && r.context.reporting ? r.context.reporting : window.Xrm && Xrm.Reporting ? Xrm.Reporting : null, o = this.getXrmGlobalContext();
                o && o.getCurrentAppName ? o.getCurrentAppName().then(function (t) {
                    t = new SIEventImpl(r.source, o && o.organizationSettings && o.organizationSettings.attributes && o.organizationSettings.attributes.organizationId, r.area, e, t, r.action, r.actionOn, r.methodName, r.message, r.data, i.getCustomControlId(r), n);
                    a && a.reportEvent && a.reportEvent(t)
                }) : r && r.context && (t = (t = r.context.client.orgSettings) && t.organizationId && t.organizationId.substring(1, t.organizationId.length - 1),
                    t = new SIEventImpl(r.source, t, r.area, e, "", r.action, r.actionOn, r.methodName, r.message, r.data, i.getCustomControlId(r), n),
                    a && a.reportEvent && a.reportEvent(t))
            } catch (t) {
                console.error(t)
            }
        }
        ,
        i.getXrmGlobalContext = function () {
            var t = null;
            try {
                t = window.Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext()
            } catch (t) { }
            return t
        }
        ,
        i.getCustomControlId = function (t) {
            try {
                return t && t.context && t.context.client && t.context.client._customControlProperties.manifest.CustomControlId
            } catch (t) {
                return ""
            }
        }
        ,
        t.getEventParams = function (t, e, r, n, a, o, i, c) {
            return {
                area: e,
                context: t,
                methodName: r,
                source: n,
                action: i,
                actionOn: c,
                data: o,
                message: a
            }
        }
        ,
        t.GetEventParams = function (t, e, r, n, a, o, i, c) {
            return this.getEventParams(t, e, r, n, a, o, i, c)
        }
        ,
        i
}(), SIEventImpl = function () {
    function t(t, e, r, n, a, o, i, c, s, m, u, l) {
        this.eventParameters = [],
            this.eventName = n,
            t && this.addEventParameter("Source", t),
            e && this.addEventParameter("OrgId", e),
            r && this.addEventParameter("Area", r),
            a && this.addEventParameter("appName", a),
            o && this.addEventParameter("Action", o),
            i && this.addEventParameter("ActionOn", i),
            c && this.addEventParameter("MethodName", c),
            s && this.addEventParameter("Message", s),
            m && this.addEventParameter("Data", this.SafeJsonStringify(m)),
            u && this.addEventParameter("CustomControlId", u),
            l && this.addEventParameter("Level", l)
    }
    var e = t.prototype;
    return e.addEventParameter = function (t, e) {
        e = {
            name: t,
            value: e
        };
        this.eventParameters.push(e)
    }
        ,
        e.SafeJsonStringify = function (t) {
            try {
                return JSON.stringify(t)
            } catch (t) {
                return console.error(t),
                    ""
            }
        }
        ,
        t
}();
!function (t) {
    t[t.StartedTracking = 0] = "StartedTracking",
        t[t.IgnoredDuplicate = 1] = "IgnoredDuplicate"
}(scenarioStartResult = scenarioStartResult || {});
var PerfUtil = function () {
    function o() { }
    var t = o.prototype;
    return t.scenarioStart = function (t, e, r, n) {
        void 0 === n && (n = !0);
        var a = t + "_" + e;
        if (o.trackedStopWatches[a])
            return scenarioStartResult.IgnoredDuplicate;
        var n = r.performance.createPerformanceStopwatch(e, {
            area: t
        }, n);
        return o.trackedStopWatches[a] = {
            area: t,
            scenario: e,
            stopwatchCallback: n,
            start: null == (n = performance) ? void 0 : n.now(),
            context: r
        },
            scenarioStartResult.StartedTracking
    }
        ,
        t.scenarioEnd = function (t, e, r) {
            void 0 === r && (r = {});
            var n = t + "_" + e
                , a = o.trackedStopWatches[n];
            a && (a.stopwatchCallback(r),
                a.start && (r = new Telemetry).reportInfo(r.getEventParams(a.context, t, "scenarioEnd", "PerfUtil", "", {
                    n: e,
                    s: a.start,
                    d: (null == (t = performance) ? void 0 : t.now()) - a.start
                }, e))),
                o.trackedStopWatches[n] = null
        }
        ,
        t.componentStart = function (t, e) {
            try {
                performance && t && e && performance.mark(this.getCompStartMark(t, e))
            } catch (t) {
                console.error(t)
            }
        }
        ,
        t.componentEnd = function (t, e) {
            try {
                var r;
                performance && t && e && 1 < t.length && 0 < e.length && (r = this.getCompStartMark(t, e),
                    this.safeMeasure(this.getAreaPrefix(t) + e, r))
            } catch (t) {
                console.error(t)
            }
        }
        ,
        t.loadStart = function (t) {
            performance && t && performance.mark(this.getLoadStartMark(t))
        }
        ,
        t.loadEnd = function (t, e) {
            if (performance && t && 1 < t.length)
                try {
                    var r = this.getAreaPrefix(t);
                    this.safeMeasure(r + "AllComp", this.getLoadStartMark(t));
                    var n = performance.getEntriesByType("measure").filter(function (t) {
                        return t.name.startsWith(r)
                    }).map(function (t) {
                        return performance.clearMeasures(t.name),
                        {
                            n: t.name.replace(r, ""),
                            s: t.startTime,
                            d: t.duration
                        }
                    })
                        , a = new Telemetry;
                    a.reportInfo(a.getEventParams(e, t, "loadEnd", "PerfUtil", "", n, "Load"))
                } catch (t) {
                    console.error(t)
                }
        }
        ,
        t.safeMeasure = function (t, e) {
            performance.getEntriesByType("mark").find(function (t) {
                return t.name == e
            }) && (performance.measure(t, e),
                performance.clearMarks(e))
        }
        ,
        t.getLoadStartMark = function (t) {
            return "l_s_" + t
        }
        ,
        t.getCompStartMark = function (t, e) {
            return "c_s_" + t + "_" + e
        }
        ,
        t.getAreaPrefix = function (t) {
            return "m_" + t
        }
        ,
        o
}();
PerfUtil.trackedStopWatches = {};
var SIClientUtilityLogger = function () { };
SIClientUtilityLogger.Telemetry = new Telemetry,
    SIClientUtilityLogger.PerfUtil = new PerfUtil,
    exports.SIClientUtilityLogger = SIClientUtilityLogger;
