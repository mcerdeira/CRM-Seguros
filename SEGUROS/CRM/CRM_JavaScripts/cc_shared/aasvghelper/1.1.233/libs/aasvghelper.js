var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="privatereferences.ts"/>
var MsdynControls;
(function (MsdynControls) {
    var AAUtils;
    (function (AAUtils) {
        'use strict';
        var WidgetStatusControl;
        (function (WidgetStatusControl) {
            WidgetStatusControl[WidgetStatusControl["Initialize"] = 0] = "Initialize";
            WidgetStatusControl[WidgetStatusControl["RequestInProgress"] = 1] = "RequestInProgress";
            WidgetStatusControl[WidgetStatusControl["RequestCompeleted"] = 2] = "RequestCompeleted";
            WidgetStatusControl[WidgetStatusControl["DataAvailableForAllKpi"] = 3] = "DataAvailableForAllKpi";
            WidgetStatusControl[WidgetStatusControl["DataAvailableForAnyKpi"] = 4] = "DataAvailableForAnyKpi";
            WidgetStatusControl[WidgetStatusControl["ErrorOccured"] = 5] = "ErrorOccured";
            WidgetStatusControl[WidgetStatusControl["NoKpiValueAvailable"] = 6] = "NoKpiValueAvailable";
        })(WidgetStatusControl = AAUtils.WidgetStatusControl || (AAUtils.WidgetStatusControl = {}));
        var SvgHelper = (function () {
            function SvgHelper(id, errorMsg, waitingMsg, strokeWidth, width, height) {
                this.baseId = id;
                this.errorMsg = errorMsg;
                this.warningMsg = waitingMsg;
                this.strokeWidth = strokeWidth;
                this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                this.svg.setAttributeNS(null, "width", "" + width);
                this.svg.setAttributeNS(null, "height", "" + height);
                this.svg.setAttribute("id", id);
                this.svg.setAttributeNS(null, "version", "1.1");
                this.svg.setAttribute("aria-labelledby", id + "AriaTitle");
                this.svg.setAttribute("aria-describedby", id + "AriaDesc");
                this.svg.setAttribute("tabindex", "0");
            }
            SvgHelper.remToPx = function (isWebClient, value) {
                return isWebClient ? AAUtils.WidgetConstants.remToPxWeb * value : AAUtils.WidgetConstants.remToPxUci * value;
            };
            SvgHelper.prototype.getRootSvg = function () {
                return this.svg;
            };
            SvgHelper.prototype.setTitle = function (title) {
                this.title = title;
                var node = SvgHelper.newToolTipNode(title);
                node.setAttribute("id", this.baseId + "AriaTitle");
                this.svg.appendChild(node);
            };
            SvgHelper.prototype.errorMessageSplit = function (msg) {
                var lines = msg.split('.');
                for (var i = 0; i < lines.length; i++) {
                    lines[i] = lines[i].concat('.');
                }
                return lines;
            };
            SvgHelper.prototype.setDescription = function (description) {
                var descElement = document.createElementNS("http://www.w3.org/2000/svg", "desc");
                descElement.textContent = description;
                descElement.setAttribute("id", this.baseId + "AriaDesc");
                this.svg.appendChild(descElement);
            };
            SvgHelper.prototype.setTabOrder = function (order) {
                this.svg.setAttribute("tabindex", "" + order);
            };
            SvgHelper.prototype.addWaitingMessage = function (position) {
                return SvgHelper.addMessageText(position, "wait" + this.baseId, [this.warningMsg], this.svg);
            };
            SvgHelper.prototype.addErrorMessage = function (position) {
                var errorMessageLines = this.errorMessageSplit(this.errorMsg);
                return SvgHelper.addMessageText(position, "err" + this.baseId, errorMessageLines, this.svg);
            };
            /**
             * Adds a circle at the given position and with given radius.
             * @param center center of the circle
             * @param radius radius of the circle
             * @param color color of the stroke.
             */
            SvgHelper.prototype.addCircle = function (center, radius, color, toolTip) {
                var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttributeNS(null, "cx", "" + center.x);
                circle.setAttributeNS(null, "cy", "" + center.y);
                circle.setAttributeNS(null, "r", "" + radius);
                circle.setAttributeNS(null, "fill", "none");
                circle.setAttributeNS(null, "stroke", color);
                circle.setAttributeNS(null, "stroke-width", this.strokeWidth + "px");
                circle.appendChild(SvgHelper.newToolTipNode(toolTip));
                this.svg.appendChild(circle);
                return circle;
            };
            /**
             * Renders an arc (of mainColor) rendered on top of a circle of (lightColor).
             * the length of arc is (percentage * circumference of circle)/100.
             * @param center center of the circle
             * @param radius radius of the circle
             * @param percentage percentage of the circumference the arc should occupy
             * @param mainColor color of the arc
             * @param lightColor color of the circle underneath.
             */
            SvgHelper.prototype.arcWithLightCircle = function (center, radius, percentage, mainColor, lightColor, toolTip) {
                this.addCircle(center, radius, lightColor, toolTip);
                var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttributeNS(null, "fill", "none");
                path.setAttributeNS(null, "stroke", mainColor);
                path.setAttributeNS(null, "stroke-width", this.strokeWidth + "px");
                path.setAttributeNS(null, "d", SvgHelper.arcDefinition(center, radius, percentage));
                path.appendChild(SvgHelper.newToolTipNode(toolTip));
                this.svg.appendChild(path);
                return path;
            };
            /**
             * draw a line with given cordinate(x1,y1) and (x2,y2)
             * @param startX
             * @param startY
             * @param endX
             * @param endY
             * @param svg
             * @param stroke
             * @param strokeWidth
             */
            SvgHelper.prototype.addLine = function (startX, startY, endX, endY, stroke, strokeWidth) {
                var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttributeNS(null, "x1", "" + startX);
                line.setAttributeNS(null, "y1", "" + startY);
                line.setAttributeNS(null, "x2", "" + endX);
                line.setAttributeNS(null, "y2", "" + endY);
                line.setAttributeNS(null, "stroke", "" + stroke);
                line.setAttributeNS(null, "stroke-width", "" + strokeWidth);
                this.svg.appendChild(line);
                return line;
            };
            /**
             * Creates a donut chart with a title and an optional second title
             * @param center
             * @param radius
             * @param percentage
             * @param mainColor
             * @param lightColor
             * @param title1
             * @param title2
             * @param toolTip
             */
            SvgHelper.prototype.donutChart = function (center, radius, percentage, mainColor, lightColor, title1, title2, toolTip) {
                var labelFontSize = '1em';
                var path = this.arcWithLightCircle(center, radius, percentage, mainColor, lightColor, toolTip);
                var percentageText = document.createElementNS("http://www.w3.org/2000/svg", "text");
                percentageText.setAttributeNS(null, "x", "" + center.x);
                percentageText.setAttributeNS(null, "y", "" + center.y);
                percentageText.setAttributeNS(null, "text-anchor", "middle");
                percentageText.setAttributeNS(null, "font-family", "Segoe UI");
                var fontSize = "1.25em";
                // Just for Iphone5
                if (radius <= 25) {
                    fontSize = "1.0em";
                }
                percentageText.setAttributeNS(null, "style", "font-size:" + ("" + fontSize));
                percentageText.setAttributeNS(null, "dy", "0.3em");
                var pcTextValue = document.createTextNode(percentage + "%");
                percentageText.appendChild(pcTextValue);
                this.svg.appendChild(percentageText);
                var label1Y = center.y + radius + (AAUtils.WidgetConstants.circlePaddingInPx) / 2;
                var groupElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
                groupElem.setAttributeNS(null, "transform", "translate(" + center.x + " " + label1Y + ")");
                var label = document.createElementNS("http://www.w3.org/2000/svg", "text");
                label.setAttributeNS(null, "text-anchor", "middle");
                label.setAttributeNS(null, "font-family", "Segoe UI");
                label.setAttributeNS(null, "style", "font-size:" + labelFontSize + ";font-weight:bold;");
                label.setAttributeNS(null, "dy", "1em");
                var tspan1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                var title1TextNode = document.createTextNode(title1);
                tspan1.appendChild(title1TextNode);
                tspan1.setAttributeNS(null, "x", "0");
                tspan1.setAttributeNS(null, "dy", "1em");
                label.appendChild(tspan1);
                if (title2 != null && title2 != undefined) {
                    var tspan2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                    var title2TextNode = document.createTextNode(title2);
                    tspan2.appendChild(title2TextNode);
                    tspan2.setAttributeNS(null, "x", "0");
                    tspan2.setAttributeNS(null, "dy", "1em");
                    label.appendChild(tspan2);
                }
                groupElem.appendChild(label);
                this.svg.appendChild(groupElem);
                return path;
            };
            SvgHelper.prototype.addTitle = function (margin, height, title, rtl) {
                var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.id = "svgTitleId";
                text.setAttributeNS(null, "direction", rtl);
                text.setAttributeNS(null, "x", "" + margin);
                text.setAttributeNS(null, "y", "" + height);
                text.setAttributeNS(null, "font-family", '"SegoeUI-Semibold", "Segoe UI Semibold" , "Segoe UI Regular", "Segoe UI"');
                var fontSize = "1rem";
                text.setAttributeNS(null, "font-size", fontSize);
                text.setAttributeNS(null, "style", "color:" + "#333333");
                text.setAttributeNS(null, "style", "font-weight:" + "600");
                text.setAttributeNS(null, "dx", "0.5em");
                var textNode = document.createTextNode(title);
                text.appendChild(textNode);
                this.svg.appendChild(text);
                return text;
            };
            SvgHelper.prototype.addToContainer = function (container) {
                var oldNode = document.getElementById(this.baseId);
                if (oldNode == null || oldNode == undefined) {
                    container.appendChild(this.svg);
                }
                else {
                    container.replaceChild(this.svg, oldNode);
                }
            };
            SvgHelper.polarToCartesian = function (center, radius, angleInDegrees) {
                var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
                return new AAUtils.Position(center.x + (radius * Math.cos(angleInRadians)), center.y + (radius * Math.sin(angleInRadians)));
            };
            SvgHelper.addMessageText = function (position, id, msg, svg) {
                var labelFontSize = 12;
                var label = document.createElementNS("http://www.w3.org/2000/svg", "text");
                label.setAttributeNS(null, "x", "" + position.x);
                label.setAttributeNS(null, "y", "" + position.y);
                label.setAttributeNS(null, "text-anchor", "middle");
                label.setAttributeNS(null, "font-family", "Segoe UI");
                label.setAttribute("id", "" + id);
                label.setAttributeNS(null, "style", "font-size:" + ("" + labelFontSize) + "px");
                label.setAttributeNS(null, "dy", "1em");
                var msg1 = msg[0];
                if (msg.length > 1) {
                    var msg2 = msg[1];
                }
                var tspan1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                var title1TextNode = document.createTextNode(msg1);
                tspan1.appendChild(title1TextNode);
                tspan1.setAttributeNS(null, "x", "" + position.x);
                tspan1.setAttributeNS(null, "dy", "1em");
                label.appendChild(tspan1);
                if (msg2) {
                    var tspan2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                    var title2TextNode = document.createTextNode(msg2);
                    tspan2.appendChild(title2TextNode);
                    tspan2.setAttributeNS(null, "x", "" + position.x);
                    tspan2.setAttributeNS(null, "dy", "1.35em");
                    label.appendChild(tspan2);
                }
                svg.appendChild(label);
                return label;
            };
            /**
            *  The path definition (the 'd' attribute of the path element) for a given percentage of circle.
            * @param center center of the circle of which the resultant arc is a part.
            * @param radius radius of the circle of which the resultant arc is a part.
            * @param percentage  percentage of the circle to be covered.
            */
            SvgHelper.arcDefinition = function (center, radius, percentage) {
                var startAngle = 0;
                var endAngle = (percentage > 99) ? 359 : 360 * (percentage / 100);
                var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
                var start = SvgHelper.polarToCartesian(center, radius, endAngle);
                var end = SvgHelper.polarToCartesian(center, radius, startAngle);
                var dvalues = ["M", start.x, start.y,
                    "A", radius, radius, 0, arcSweep, 0, end.x, end.y];
                if (percentage > 99) {
                    dvalues.push("z");
                }
                return dvalues.join(" ");
            };
            SvgHelper.newToolTipNode = function (toolTip) {
                var title = document.createElementNS("http://www.w3.org/2000/svg", "title");
                title.textContent = toolTip;
                return title;
            };
            /**
             * a common code for getting width from context
             * @param context
             * @param isWebClient
             */
            SvgHelper.containerWidth = function (context, isWebClient) {
                var width = context.client.allocatedWidth;
                if (isWebClient) {
                    //if (width <= 0) {
                    // on webclient trackContainerResize is not honored.
                    var node = $("#RELATIONSHIP_ANALYTICS_TAB_content");
                    var tabWidth = context.utils.isNullOrUndefined(node) ? 0 : node.width();
                    if (!context.utils.isNullOrUndefined(tabWidth) && tabWidth > 0) {
                        width = tabWidth;
                    }
                }
                else {
                    if (width < 0) {
                        var node = $('[data-id="RICONTAINER_CHARTS"]');
                        var containerWidth = context.utils.isNullOrUndefined(node) ? 0 : node.width();
                        width = containerWidth;
                    }
                }
                return width;
            };
            SvgHelper.convertMinutesToRequiredTime = function (time, isWebClient, context) {
                var calcTime = time;
                var calcUnit = context.resources.getString("Msdyn.AAControls.Minute");
                var result = [];
                if (time >= 60) {
                    calcTime = time / 60;
                    calcUnit = context.resources.getString("Msdyn.AAControls.Hour");
                }
                if (time >= 1440) {
                    calcTime = time / 1440;
                    calcUnit = context.resources.getString("Msdyn.AAControls.Day");
                }
                if (time >= 10080) {
                    calcTime = time / 10080;
                    calcUnit = context.resources.getString("Msdyn.AAControls.Week");
                }
                if (time >= 43200) {
                    calcTime = time / 43200;
                    calcUnit = context.resources.getString("Msdyn.AAControls.Month");
                }
                if (time >= 525600) {
                    calcTime = time / 525600;
                    calcUnit = context.resources.getString("Msdyn.AAControls.Year");
                }
                result.push(calcTime);
                result.push(calcUnit);
                return result;
            };
            SvgHelper.getWidgetWidth = function (context, isWebClient) {
                var width = SvgHelper.containerWidth(context, isWebClient);
                if (width < 1) {
                    return width;
                }
                var columnCount = SvgHelper.columnCount(width);
                if (columnCount == 1) {
                    return width - 2; //2 left and right 1px border for widgets
                }
                width = width - 2 * SvgHelper.padding;
                columnCount = SvgHelper.columnCount(width);
                var availableWidth = (width - (columnCount * 2 * SvgHelper.margin)) - 40;
                //if (columnCount == 1) {
                //    availableWidth = (width - (columnCount * 2 * SvgHelper.margin));    
                //}
                if (isWebClient) {
                    var border = 1, borderMargin = 10;
                    return (availableWidth / columnCount) - (2 * border + 2 * borderMargin) - 4;
                }
                return (availableWidth / columnCount);
            };
            SvgHelper.getHeight = function (context, isWebClient) {
                var height = context.client.allocatedHeight;
                if (context.utils.isNullOrUndefined(height) || height < 1) {
                    height = 250;
                }
                return height;
            };
            SvgHelper.columnCount = function (width) {
                if (width > 1000)
                    return 3;
                if (width > 500)
                    return 2;
                return 1;
            };
            SvgHelper.IsInHighContrastMode = function () {
                var isHighContrastEnabed = false;
                var highContrastMediaFeatue = "(-ms-high-contrast:white-on-black)";
                var mediaQuery = window.matchMedia(highContrastMediaFeatue);
                if (mediaQuery.matches)
                    return true;
                var htmlTag = document.getElementsByTagName("html");
                isHighContrastEnabed = (htmlTag[0].getAttribute("hc") != null);
                return isHighContrastEnabed;
            };
            return SvgHelper;
        }());
        SvgHelper.margin = 10;
        SvgHelper.padding = 10;
        AAUtils.SvgHelper = SvgHelper;
    })(AAUtils = MsdynControls.AAUtils || (MsdynControls.AAUtils = {}));
})(MsdynControls || (MsdynControls = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
var MsdynControls;
(function (MsdynControls) {
    var AAUtils;
    (function (AAUtils) {
        'use strict';
        var Position = (function () {
            function Position(x, y) {
                this.x = x;
                this.y = y;
            }
            return Position;
        }());
        AAUtils.Position = Position;
    })(AAUtils = MsdynControls.AAUtils || (MsdynControls.AAUtils = {}));
})(MsdynControls || (MsdynControls = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="SvgHelper.ts" />
/// <reference path="Position.ts" />
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="../../../../jsreferences/internal/TypeDefinitions/mscrm.d.ts" />
/// <reference path="../../../../jsreferences/internal/TypeDefinitions/XrmClientApi.d.ts" />
/// <reference path="../../../../jsreferences/external/TypeDefinitions/jquery.d.ts" />
/// <reference path="CommonReferences.ts" />
/// <reference path="privatereferences.ts"/>
var MsdynControls;
(function (MsdynControls) {
    var AAUtils;
    (function (AAUtils) {
        var ActivityAnalysisTraceInfo = "ActivityAnalysisTraceInfo";
        AAUtils.EventTypeInfo = 1;
        AAUtils.EventTypeError = 2;
        var ActivityAnalysisTraceEvent = (function () {
            function ActivityAnalysisTraceEvent(EventData, EventType) {
                this.eventParameters = [];
                this.eventName = ActivityAnalysisTraceInfo;
                this.addEventParameter("EventData", JSON.stringify(EventData));
                this.addEventParameter("EventType", EventType);
            }
            ActivityAnalysisTraceEvent.prototype.addEventParameter = function (name, value) {
                var event = new ActivityAnalysisTraceEventParameter(name, value);
                this.eventParameters.push(event);
            };
            return ActivityAnalysisTraceEvent;
        }());
        AAUtils.ActivityAnalysisTraceEvent = ActivityAnalysisTraceEvent;
        var ActivityAnalysisTraceEventParameter = (function () {
            function ActivityAnalysisTraceEventParameter(name, value) {
                this.name = name;
                this.value = value;
            }
            return ActivityAnalysisTraceEventParameter;
        }());
        AAUtils.ActivityAnalysisTraceEventParameter = ActivityAnalysisTraceEventParameter;
        var ActivityAnalysisTraceEventData = (function () {
            function ActivityAnalysisTraceEventData(ControlName, Event) {
                this.ControlName = ControlName;
                this.Event = Event;
            }
            return ActivityAnalysisTraceEventData;
        }());
        AAUtils.ActivityAnalysisTraceEventData = ActivityAnalysisTraceEventData;
        var ActivityAnalysisControlInitEventData = (function (_super) {
            __extends(ActivityAnalysisControlInitEventData, _super);
            function ActivityAnalysisControlInitEventData(ControlName) {
                return _super.call(this, ControlName, "Init") || this;
            }
            return ActivityAnalysisControlInitEventData;
        }(ActivityAnalysisTraceEventData));
        AAUtils.ActivityAnalysisControlInitEventData = ActivityAnalysisControlInitEventData;
    })(AAUtils = MsdynControls.AAUtils || (MsdynControls.AAUtils = {}));
})(MsdynControls || (MsdynControls = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="privatereferences.ts"/>
var MsdynControls;
(function (MsdynControls) {
    var AAUtils;
    (function (AAUtils) {
        'use strict';
        var WidgetConstants = (function () {
            function WidgetConstants() {
            }
            return WidgetConstants;
        }());
        WidgetConstants.titleYSpaceInRem = 2.75;
        WidgetConstants.remToPxWeb = 12;
        WidgetConstants.remToPxUci = 14;
        WidgetConstants.titleFontSize = 20;
        WidgetConstants.titleXMargin = 7;
        WidgetConstants.bottomTitleMargin = 10;
        WidgetConstants.bottomBorderLinePadding = 10;
        WidgetConstants.toolTipFontSize = 20;
        WidgetConstants.verticalSpaceForBottomToolTipPercent = 15;
        WidgetConstants.topMarginVerticalSpaceForBottomToolTip = 10;
        WidgetConstants.circleBottomMargin = 10;
        WidgetConstants.circleDiaInPx = 100;
        WidgetConstants.circlePaddingInPx = 24;
        WidgetConstants.fontSizeInEm = 1;
        AAUtils.WidgetConstants = WidgetConstants;
    })(AAUtils = MsdynControls.AAUtils || (MsdynControls.AAUtils = {}));
})(MsdynControls || (MsdynControls = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="privatereferences.ts"/>
var MsdynControls;
(function (MsdynControls) {
    var AAUtils;
    (function (AAUtils) {
        'use strict';
        var FetchKpiValuesRequest = (function () {
            function FetchKpiValuesRequest() {
            }
            FetchKpiValuesRequest.prototype.getMetadata = function () {
                var metadata = {
                    boundParameter: null,
                    operationName: "msdyn_FetchKPIValues",
                    operationType: 0,
                    parameterTypes: {
                        "CrmRecord": {
                            typeName: "Microsoft.Dynamics.CRM.crmbaseentity",
                            structuralProperty: 5 /* EntityType */
                        },
                        "KPINames": {
                            typeName: "Edm.String",
                            structuralProperty: 1 /* PrimitiveType */
                        }
                    }
                };
                return metadata;
            };
            /**
            * Fetches KPI values using msdyn_FetchKPIValues sdk message.
            * @param context custom control context.
            * @param kpiNames names of the kpis whose values are to be fetched.
            * @param onSuccess callback for success of the request.
            * @param onError call back if the request fails.
            */
            FetchKpiValuesRequest.fetchData = function (context, kpiNames, onSuccess, onError) {
                var request = new FetchKpiValuesRequest();
                var entityRef = {
                    id: context.page.entityId,
                    entityType: context.page.entityTypeName
                };
                request.CrmRecord = entityRef;
                request.KPINames = JSON.stringify(kpiNames);
                context.webAPI.execute(request).then(function (response) {
                    response.json().then(function (value) {
                        var errorList = null;
                        var kpiValues = null;
                        if (!context.utils.isNullOrUndefined(value["ErrorList"])) {
                            errorList = JSON.parse(value["ErrorList"]);
                        }
                        if (!context.utils.isNullOrUndefined(value["KPIValues"])) {
                            kpiValues = value["KPIValues"];
                        }
                        onSuccess(kpiValues, errorList);
                        context.utils.requestRender();
                    });
                }, function (err) {
                    onError(err);
                    context.utils.requestRender();
                });
            };
            return FetchKpiValuesRequest;
        }());
        AAUtils.FetchKpiValuesRequest = FetchKpiValuesRequest;
    })(AAUtils = MsdynControls.AAUtils || (MsdynControls.AAUtils = {}));
})(MsdynControls || (MsdynControls = {}));
//# sourceMappingURL=SvgHelper.js.map