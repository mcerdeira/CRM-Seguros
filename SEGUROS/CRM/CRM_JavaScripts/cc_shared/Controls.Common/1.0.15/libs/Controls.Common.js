var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var ConsoleLogger = (function () {
                function ConsoleLogger() {
                }
                ConsoleLogger.prototype.log = function (traceLevel, eventName, parameters) {
                    var serialized = JSON.stringify(parameters);
                    switch (traceLevel) {
                        case Common.TraceLevel.Info:
                        case Common.TraceLevel.Verbose:
                            console.log(eventName, serialized);
                            break;
                        case Common.TraceLevel.Warning:
                            console.warn(eventName, serialized);
                            break;
                        case Common.TraceLevel.Error:
                            console.error(eventName, serialized);
                            break;
                        default:
                            console.log(eventName, serialized);
                    }
                };
                ConsoleLogger.prototype.getPerfToken = function () {
                    return { timestampInMillisUtc: new Date().getTime() };
                };
                ConsoleLogger.prototype.logPerf = function (traceLevel, eventName, perfToken, parameters) {
                    var dateNow = new Date();
                    var elapsedMilliseconds = dateNow.getTime() - perfToken.timestampInMillisUtc;
                    if (Common.Object.isNullOrUndefined(parameters)) {
                        parameters = new Common.Dictionary();
                    }
                    parameters.addOrUpdate("ElapsedMilliseconds", elapsedMilliseconds);
                    this.log(elapsedMilliseconds < ConsoleLogger.warningTreshold ? traceLevel : Common.TraceLevel.Warning, eventName, parameters);
                };
                ConsoleLogger.prototype.logException = function (traceLevel, eventName, error, parameters) {
                    if (Common.Object.isNullOrUndefined(parameters)) {
                        parameters = new Common.Dictionary();
                    }
                    var traceDump = Common.Object.isNullOrUndefined(error.stack) ? error.message : error.stack;
                    parameters.addOrUpdate(Common.ParameterKeys.LoggerError, traceDump);
                    this.log(traceLevel, eventName, parameters);
                };
                ConsoleLogger.prototype.logMarker = function (name, collectionName, correlationId) {
                };
                ConsoleLogger.prototype.completeCollection = function (collection, correlationId) {
                };
                /**
                * Threshold time to log a warning.
                */
                ConsoleLogger.warningTreshold = 25;
                return ConsoleLogger;
            }());
            Common.ConsoleLogger = ConsoleLogger;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            (function (TraceLevel) {
                TraceLevel[TraceLevel["Error"] = 0] = "Error";
                TraceLevel[TraceLevel["Warning"] = 1] = "Warning";
                TraceLevel[TraceLevel["Info"] = 2] = "Info";
                TraceLevel[TraceLevel["Verbose"] = 3] = "Verbose";
            })(Common.TraceLevel || (Common.TraceLevel = {}));
            var TraceLevel = Common.TraceLevel;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * A wrapper class for ajax calls
            */
            var AjaxCall = (function () {
                function AjaxCall() {
                }
                AjaxCall.prototype.getJson = function (path) {
                    return $.getJSON(path);
                };
                return AjaxCall;
            }());
            Common.AjaxCall = AjaxCall;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * The localization provider
            */
            var LabelsProvider = (function () {
                /**
                 * Creates a provider that will query external source for labels
                 * @param languageCode Requested language of the labels
                 * @param ajaxCall Ajax call
                 * @param logger logger to print errors.
                 * @param controlCdnPaths Paths to the labels files. Ordered, first being the most general, i.e. least significant.
                 */
                function LabelsProvider(languageCode, ajaxCall, logger) {
                    var controlCdnPaths = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        controlCdnPaths[_i - 3] = arguments[_i];
                    }
                    this.languageCode = languageCode;
                    this.ajaxCall = ajaxCall;
                    this.logger = logger;
                    this.localizationFileExtension = ".txt";
                    this.controlCdnPaths = controlCdnPaths;
                }
                LabelsProvider.prototype.setLocalizationFileExtension = function (extension) {
                    this.localizationFileExtension = extension;
                };
                /**
                * Get the list of dictionaries with labels for a specific language from a cdn
                */
                LabelsProvider.prototype.getLabels = function () {
                    var _this = this;
                    var labelsPromises = this.getLocalizationFilesPaths().map(function (path) {
                        var perfToken = _this.logger.getPerfToken();
                        var logData = new Common.Dictionary({ "Url": path, "Method": "GET" });
                        var logEventName = "MktSvc.Controls.Common.LabelsProvider.getLabels";
                        return _this.ajaxCall.getJson(path)
                            .then(function (data) {
                            logData.addOrUpdate(Common.ParameterKeys.ResponseStatusKey, "success");
                            logData.addOrUpdate(Common.ParameterKeys.ReponseLengthKey, data.length);
                            _this.logger.logPerf(Common.TraceLevel.Verbose, logEventName, perfToken, logData);
                            var labels = {};
                            $.each(data, function (key, val) {
                                labels[key] = val.Value;
                            });
                            return labels;
                        })
                            .fail(function () {
                            logData.addOrUpdate(Common.ParameterKeys.ResponseStatusKey, "failed");
                            _this.logger.logPerf(Common.TraceLevel.Verbose, logEventName, perfToken, logData);
                            return {};
                        });
                    });
                    var labels = {};
                    var result = $.Deferred();
                    $.when.apply($, labelsPromises)
                        .always(function () {
                        for (var i = 0; i < arguments.length; i++) {
                            $.extend(labels, arguments[i]);
                        }
                        result.resolve(labels);
                    });
                    return result;
                };
                LabelsProvider.prototype.getLocalizationFilesPaths = function () {
                    var _this = this;
                    return this.controlCdnPaths.map(function (path) { return path + "/Localization/" + _this.languageCode + _this.localizationFileExtension; });
                };
                return LabelsProvider;
            }());
            Common.LabelsProvider = LabelsProvider;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /*
            Gets the localized string
            */
            var LocalizationProvider = (function () {
                function LocalizationProvider(labels, localeId, isRtl, logger) {
                    if (isRtl === void 0) { isRtl = false; }
                    this.labels = labels;
                    this.localeId = localeId;
                    this.rtl = isRtl;
                    this.logger = logger;
                }
                LocalizationProvider.prototype.registerLabels = function (localizations) {
                    $.extend(this.labels, localizations);
                };
                /*
                Gets the localized string
                */
                LocalizationProvider.prototype.getLocalizedString = function (key, formatItems) {
                    var localizedString = key;
                    if (key in this.labels) {
                        localizedString = this.labels[key];
                    }
                    else if (this.logger) {
                        var logEventName = "MktSvc.Controls.Common.LocalizationProvider.getLocalizedString";
                        var logData = new Common.Dictionary({ Key: key, LocaleId: this.localeId });
                        this.logger.log(Common.TraceLevel.Warning, logEventName, logData);
                    }
                    if (formatItems) {
                        localizedString = this.stringFormatItems(localizedString, formatItems);
                    }
                    return localizedString;
                };
                /*
                Get string like string.Format.
                stringFormatItems("Item {0} is missing", [1]) -> produces "Item 1 is missing"
                */
                LocalizationProvider.prototype.stringFormatItems = function (template, replaces) {
                    var index = replaces.length;
                    while (index--) {
                        template = template.replace(new RegExp('\\{' + index + '\\}', 'gm'), replaces[index]);
                    }
                    return template;
                };
                /*
                Gets the locale id for the language assigned by Microsoft. For example, for English - United States it should returns 1033.
                */
                LocalizationProvider.prototype.getLocaleId = function () {
                    return this.localeId;
                };
                /*
                Gets the information whether the language is right to left.
                */
                LocalizationProvider.prototype.isRtl = function () {
                    return this.rtl;
                };
                return LocalizationProvider;
            }());
            Common.LocalizationProvider = LocalizationProvider;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var ArrayQuery = (function () {
                function ArrayQuery(data) {
                    this.data = data;
                }
                ArrayQuery.prototype.add = function (element) {
                    this.data.push(element);
                    return this;
                };
                ArrayQuery.prototype.addAt = function (element, index) {
                    this.data.splice(index, 0, element);
                    return this;
                };
                ArrayQuery.prototype.remove = function (element) {
                    var hasMoreElements = true;
                    while (hasMoreElements) {
                        var index = this.data.indexOf(element);
                        if (index > -1) {
                            this.data.splice(index, 1);
                        }
                        else {
                            hasMoreElements = false;
                        }
                    }
                    return this;
                };
                ArrayQuery.prototype.select = function (selector) {
                    var temp = [];
                    for (var i = 0; i < this.data.length; i++) {
                        var value = selector(this.data[i], i);
                        temp.push(value);
                    }
                    return new ArrayQuery(temp);
                };
                ArrayQuery.prototype.reverseEach = function (delegate) {
                    for (var i = this.data.length - 1; i >= 0; i--) {
                        delegate(this.data[i], i);
                    }
                    return this;
                };
                ArrayQuery.prototype.each = function (delegate) {
                    for (var i = 0; i < this.data.length; i++) {
                        delegate(this.data[i], i);
                    }
                    return this;
                };
                ArrayQuery.prototype.where = function (selector) {
                    var temp = [];
                    for (var i = 0; i < this.data.length; i++) {
                        if (selector(this.data[i])) {
                            temp.push(this.data[i]);
                        }
                    }
                    return new ArrayQuery(temp);
                };
                ArrayQuery.prototype.firstOrDefault = function (selector) {
                    if (Common.Object.isNullOrUndefined(selector)) {
                        if (this.items().length > 0) {
                            return this.items()[0];
                        }
                        else {
                            return null;
                        }
                    }
                    var list = this.where(selector).items();
                    if (list.length > 0) {
                        return list[0];
                    }
                    return null;
                };
                ArrayQuery.prototype.contains = function (selector) {
                    return this.firstOrDefault(selector) != null;
                };
                ArrayQuery.prototype.items = function () {
                    return this.data;
                };
                ArrayQuery.prototype.count = function () {
                    return this.data.length;
                };
                ArrayQuery.prototype.distinct = function (comparer) {
                    var temp = [];
                    for (var i = 0; i < this.data.length; i++) {
                        var isDuplicate = false;
                        for (var j = 0; j < temp.length; j++) {
                            if (comparer(this.data[i], temp[j])) {
                                isDuplicate = true;
                                break;
                            }
                        }
                        if (!isDuplicate) {
                            temp.push(this.data[i]);
                        }
                    }
                    return new ArrayQuery(temp);
                };
                ArrayQuery.prototype.clone = function () {
                    return new ArrayQuery(this.data.slice(0));
                };
                return ArrayQuery;
            }());
            Common.ArrayQuery = ArrayQuery;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * Dictionary <key: string, value: T>
            * @typeparam T
            */
            var Dictionary = (function () {
                /**
                 * Creates an instance of Dictionary.
                 * @param elements A map of key value pairs.
                 */
                function Dictionary(elements) {
                    this.dictionary = {};
                    if (!Common.Object.isNullOrUndefined(elements)) {
                        this.dictionary = elements;
                    }
                }
                /**
                 * Adds or updates a dictionary entry.
                 * @param key Dictionary key.
                 * @param value Dictionary value.
                 */
                Dictionary.prototype.addOrUpdate = function (key, value) {
                    this.dictionary[key] = value;
                };
                /**
                 * Gets a value from dictionary corresponding to one key.
                 * @param key Dictionary key.
                 */
                Dictionary.prototype.get = function (key) {
                    return this.dictionary[key];
                };
                /**
                 * Gets all keys within dictionary.
                 */
                Dictionary.prototype.getKeys = function () {
                    var keys = new Common.ArrayQuery([]);
                    for (var key in this.dictionary) {
                        keys.add(key);
                    }
                    return keys;
                };
                /**
                 * Get all values within dictionary.
                 */
                Dictionary.prototype.getValues = function () {
                    var values = new Common.ArrayQuery([]);
                    for (var key in this.dictionary) {
                        values.add(this.dictionary[key]);
                    }
                    return values;
                };
                /**
                 * Gets a value that determines whether a key exist.
                 * @param key Dictionary key.
                 */
                Dictionary.prototype.hasKey = function (key) {
                    return this.dictionary.hasOwnProperty(key);
                };
                /**
                 * Removes the key from the dictionary.
                 * @param key Dictionary key.
                 */
                Dictionary.prototype.remove = function (key) {
                    delete this.dictionary[key];
                };
                /**
                 * Combine current dictionary with another dictionary creating a new dictionary instance.
                 * @param otherDictionary Other dictionary to combine with.
                 */
                Dictionary.prototype.concat = function (otherDictionary) {
                    var clonedDictionary = this.clone();
                    if (otherDictionary) {
                        otherDictionary.getKeys().items().forEach(function (key) {
                            clonedDictionary.addOrUpdate(key, otherDictionary.get(key));
                        });
                    }
                    return clonedDictionary;
                };
                /**
                 * Clone dictionary.
                 */
                Dictionary.prototype.clone = function () {
                    var _this = this;
                    var clonedDictionary = new Dictionary();
                    this.getKeys().items().forEach(function (key) {
                        clonedDictionary.addOrUpdate(key, _this.get(key));
                    });
                    return clonedDictionary;
                };
                /**
                 * Serializes dictionary to JSON string
                 */
                Dictionary.prototype.toJsonString = function () {
                    return JSON.stringify(this.dictionary);
                };
                return Dictionary;
            }());
            Common.Dictionary = Dictionary;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * Object helper methods.
            */
            var Object = (function () {
                function Object() {
                }
                Object.isNullOrUndefined = function (object) {
                    return typeof (object) == "undefined" || object == null;
                };
                return Object;
            }());
            Common.Object = Object;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * String helper methods.
            */
            var String = (function () {
                function String() {
                }
                String.isNullOrEmpty = function (s) {
                    return s == null || s.length === 0;
                };
                String.isNullOrWhitespace = function (s) {
                    return s == null || s.trim().length === 0;
                };
                String.isNullUndefinedOrWhitespace = function (s) {
                    return s == null || s == undefined || s.trim().length === 0;
                };
                /**
                * @remarks Limited functionality implemented
                * @returns a formatted string, similar to string.Format in C#.
                */
                String.Format = function (format) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var returnValue = format;
                    for (var i = 1; i < arguments.length; i++) {
                        var actualValue = typeof (arguments[i]) == "undefined" || arguments[i] == null ? "" : arguments[i].toString();
                        returnValue = returnValue.replace(new RegExp("\\{" + (i - 1) + "\\}", 'g'), actualValue);
                    }
                    return returnValue;
                };
                /**
                 * Replaces all accurences of the specified string
                 * @param string The string
                 * @param search The search string
                 * @param replace The replace by string
                 */
                String.Replace = function (string, search, replace) {
                    return string.replace(new RegExp(search, 'g'), replace);
                };
                String.Empty = "";
                return String;
            }());
            Common.String = String;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * UniqueId helper class.
            */
            var UniqueId = (function () {
                function UniqueId() {
                }
                /**
                 * Generates a unique id.
                 * @param prefix The prefix for the generated id if needed.
                 * @returns Unique string id.
                 */
                UniqueId.generate = function (prefix) {
                    if (Common.Object.isNullOrUndefined(prefix)) {
                        prefix = Common.String.Empty;
                    }
                    return Common.String.Format("{0}{1}{2}", prefix, Math.random().toString(16).substring(2), (new Date()).getTime());
                };
                return UniqueId;
            }());
            Common.UniqueId = UniqueId;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * Resources helper methods.
            */
            var Resources = (function () {
                function Resources() {
                }
                /**
                 * Loads the css from the url and resolve the promise on load
                 * @param id the styles id
                 * @param url the url for the css
                 * @param doc the document, which contain the container with a control
                 * @param promise the onload promise
                 */
                Resources.loadCssFromUrl = function (id, url, doc, promise) {
                    $("<link/>", {
                        rel: "stylesheet",
                        type: "text/css",
                        id: id,
                        href: url
                    }).load(function () {
                        promise.resolve();
                    }).appendTo(doc.body);
                };
                /**
                 * Loads the scripts from the url and resolve the promise on load
                 * @param id the script id
                 * @param url the url for the script
                 * @param doc the document, which contain the container with a control
                 * @param promise the onload promise
                 */
                Resources.loadLibsFromUrl = function (id, url, doc, promise) {
                    var script = document.createElement("script");
                    script.id = id;
                    script.type = "text/javascript";
                    script.src = url;
                    script.onload = function () {
                        promise.resolve();
                    };
                    doc.body.appendChild(script);
                };
                return Resources;
            }());
            Common.Resources = Resources;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * A type to represent event data.
            */
            var EventData = (function () {
                /**
                * Constructor.
                */
                function EventData(eventName, eventData) {
                    this.eventName = eventName;
                    this.eventData = eventData;
                }
                return EventData;
            }());
            var EventBroker = (function () {
                function EventBroker(logger) {
                    this.logger = logger;
                    this.listeners = new Common.Dictionary();
                    this.queue = new Common.Queue([]);
                }
                EventBroker.prototype.subscribe = function (eventName, delegate) {
                    if (Common.Object.isNullOrUndefined(delegate)) {
                        throw new Error("Error subscribing to event '" + eventName + "'. Delegate is null or undefined");
                    }
                    if (Common.Object.isNullOrUndefined(this.listeners.get(eventName))) {
                        this.listeners.addOrUpdate(eventName, new Common.ArrayQuery([delegate]));
                    }
                    else {
                        this.listeners.get(eventName).add(delegate);
                    }
                    return delegate;
                };
                EventBroker.prototype.unsubscribe = function (eventName, delegate) {
                    if (!Common.Object.isNullOrUndefined(this.listeners.get(eventName))) {
                        this.listeners.get(eventName).remove(delegate);
                    }
                };
                EventBroker.prototype.notify = function (eventName, eventArgs) {
                    this.queue.push(new EventData(eventName, eventArgs));
                    this.process();
                };
                EventBroker.prototype.process = function () {
                    var event = null;
                    while (event = this.queue.pop()) {
                        var data = new Common.Dictionary({ "EventName": event.eventName });
                        this.logger.log(Common.TraceLevel.Verbose, "MktSvc.Controls.Common.EventBroker.process", data);
                        var logToken = this.logger.getPerfToken();
                        this.processEvent(event.eventName, event.eventData);
                        this.logger.logPerf(Common.TraceLevel.Verbose, "MktSvc.Controls.Common.EventBroker.process", logToken, data);
                    }
                };
                EventBroker.prototype.processEvent = function (eventName, eventArgs) {
                    if (Common.Object.isNullOrUndefined(this.listeners)) {
                        // Noone is listening
                        return;
                    }
                    var listenerDelegates = this.listeners.get(eventName);
                    if (Common.Object.isNullOrUndefined(listenerDelegates) || listenerDelegates.count() === 0) {
                        return;
                    }
                    // listenerDelegates collection can be changed, iterating on a copy
                    var copyOfListenerDelegates = new Common.ArrayQuery([]);
                    listenerDelegates.each(function (delegate) {
                        copyOfListenerDelegates.add(delegate);
                    });
                    copyOfListenerDelegates.each(function (delegate) {
                        if (Common.Object.isNullOrUndefined(eventArgs)) {
                            delegate();
                        }
                        else {
                            delegate(eventArgs);
                        }
                    });
                };
                EventBroker.prototype.dispose = function () {
                    this.listeners = null;
                };
                return EventBroker;
            }());
            Common.EventBroker = EventBroker;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
             * Postponable timer used for change tracking
             */
            var DelayScheduler = (function () {
                /** Initializes a new instance of type ChangeTimer
                * @param eventBroker - the event broker
                */
                function DelayScheduler(eventBroker, propagationStopEventName, propagationStartEventName) {
                    var _this = this;
                    this.timerStopped = true;
                    this.nonEventPropagationMode = false;
                    this.delay = DelayScheduler.defaultSchedulerDelay;
                    this.eventBroker = eventBroker;
                    this.propagationStopEventName = propagationStopEventName;
                    this.propagationStartEventName = propagationStartEventName;
                    if (!Common.Object.isNullOrUndefined(this.propagationStopEventName)) {
                        this.eventBroker.subscribe(this.propagationStopEventName, this.onNonEventPropagationStart = function () { _this.nonEventPropagationMode = true; });
                    }
                    if (!Common.Object.isNullOrUndefined(this.propagationStartEventName)) {
                        this.eventBroker.subscribe(this.propagationStartEventName, this.onNonEventPropagationEnd = function () { _this.nonEventPropagationMode = false; });
                    }
                }
                /** Initializes the Timer
                * @param action - the action to delay for the specified interval
                * @param interval - delay interval
                */
                DelayScheduler.prototype.init = function (action, delay) {
                    if (delay) {
                        this.delay = delay;
                    }
                    this.action = action;
                };
                /** Triggers the timer - start or postpone */
                DelayScheduler.prototype.schedule = function () {
                    var _this = this;
                    if (this.timerId) {
                        clearTimeout(this.timerId);
                    }
                    this.timerStopped = false;
                    this.timerId = setTimeout(function () {
                        _this.stop();
                    }, this.delay);
                };
                /** Stops the timer */
                DelayScheduler.prototype.stop = function (cancel) {
                    if (this.timerStopped) {
                        return;
                    }
                    clearTimeout(this.timerId);
                    this.timerId = null;
                    // By default we execute the operation, if the flag is provided, we just cancel
                    var executeOperation = Common.Object.isNullOrUndefined(cancel) || cancel === false;
                    if (executeOperation && !this.nonEventPropagationMode) {
                        this.action();
                    }
                    this.timerStopped = true;
                    this.eventBroker.notify(DelayScheduler.delaySchedulerTimerStopped);
                };
                /** Get the delay */
                DelayScheduler.prototype.getDelay = function () {
                    return this.delay;
                };
                /**
                 * Disposes the scheduler.
                 */
                DelayScheduler.prototype.dispose = function () {
                    if (!Common.Object.isNullOrUndefined(this.propagationStopEventName)) {
                        this.eventBroker.unsubscribe(this.propagationStopEventName, this.onNonEventPropagationStart);
                    }
                    if (!Common.Object.isNullOrUndefined(this.propagationStartEventName)) {
                        this.eventBroker.unsubscribe(this.propagationStartEventName, this.onNonEventPropagationEnd);
                    }
                };
                /* The number of milliseconds to wait before scheduling the operation*/
                DelayScheduler.defaultSchedulerDelay = 1000;
                DelayScheduler.delaySchedulerTimerStopped = "delaySchedulerTimerStopped";
                return DelayScheduler;
            }());
            Common.DelayScheduler = DelayScheduler;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var UrlBuilder = (function () {
                function UrlBuilder(baseUrl) {
                    this.paths = [];
                    this.baseUrl = this.trimCharacter(baseUrl, "/");
                    this.valueParameters = new Common.Dictionary();
                }
                UrlBuilder.getBaseWindowUrl = function () {
                    var protocol = location.protocol;
                    var hostName = location.hostname;
                    var port = location.port ? ':' + location.port : '';
                    return protocol + '//' + hostName + port;
                };
                UrlBuilder.prototype.trimCharacter = function (url, character) {
                    var start = 0;
                    var end = url.length - 1;
                    while (start < url.length && url.charAt(start) === character) {
                        start++;
                    }
                    while (end >= 0 && url.charAt(end) === character) {
                        end--;
                    }
                    if (start <= end) {
                        return url.substring(start, end + 1);
                    }
                    else {
                        return "";
                    }
                };
                UrlBuilder.prototype.setFormatParameter = function (key, value) {
                    this.valueParameters.addOrUpdate(key, value);
                    return this;
                };
                UrlBuilder.prototype.setQueryString = function (queryString) {
                    this.queryString = queryString;
                    return this;
                };
                UrlBuilder.prototype.appendSubPath = function (path) {
                    if (!Common.String.isNullUndefinedOrWhitespace(path)) {
                        path = this.trimCharacter(path, "/");
                        this.paths.push(path);
                    }
                    return this;
                };
                UrlBuilder.prototype.build = function () {
                    var url = this.baseUrl + "/";
                    for (var i = 0; i < this.paths.length; i++) {
                        url += this.paths[i] + "/";
                    }
                    for (var _i = 0, _a = this.valueParameters.getKeys().items(); _i < _a.length; _i++) {
                        var key = _a[_i];
                        url = url.replace(key, this.valueParameters.get(key));
                    }
                    url = this.trimCharacter(url, "/");
                    if (!Common.String.isNullUndefinedOrWhitespace(this.queryString)) {
                        url = url + "?" + this.queryString;
                    }
                    return encodeURI(url);
                };
                return UrlBuilder;
            }());
            Common.UrlBuilder = UrlBuilder;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var ServiceClient = (function () {
                function ServiceClient(logger) {
                    this.logger = logger;
                }
                ServiceClient.prototype.createXmlHttpRequest = function () {
                    return new XMLHttpRequest();
                };
                ServiceClient.prototype.createRequest = function (method, url, successCallback, failedCallBack) {
                    var _this = this;
                    var self = this;
                    var logEventName = "MktSvc.Controls.Common.ServiceClient.createRequest";
                    var logData = new Common.Dictionary({ "Url": url, "Method": method });
                    var request = this.createXmlHttpRequest();
                    request.open(method, url, true);
                    this.setDefaultHeader(request);
                    var logToken = this.logger.getPerfToken();
                    request.onreadystatechange = function (event) {
                        var currentRequest = event.target;
                        if (currentRequest.readyState === 4 /* complete */) {
                            logData.addOrUpdate(Common.ParameterKeys.ResponseStatusKey, currentRequest.status);
                            logData.addOrUpdate(Common.ParameterKeys.ReponseLengthKey, currentRequest.responseText.length);
                            _this.logger.logPerf(Common.TraceLevel.Verbose, logEventName, logToken, logData);
                            if (self.isSuccess(currentRequest.status)) {
                                successCallback(currentRequest.responseText);
                            }
                            else {
                                failedCallBack(currentRequest.responseText, currentRequest.status);
                            }
                        }
                    };
                    return request;
                };
                ServiceClient.prototype.setDefaultHeader = function (request) {
                    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    request.setRequestHeader("Accept", "application/json");
                };
                ServiceClient.prototype.postData = function (url, requestData) {
                    var deferred = $.Deferred();
                    var req = this.createRequest("POST", url, function (response) {
                        deferred.resolve(response);
                    }, function (response, status) {
                        deferred.reject(response, status);
                    });
                    req.send(JSON.stringify(requestData));
                    return deferred.promise();
                };
                ServiceClient.prototype.getData = function (url) {
                    var deferred = $.Deferred();
                    var req = this.createRequest("GET", url, function (response) {
                        deferred.resolve(response);
                    }, function (response, status) {
                        deferred.reject(response, status);
                    });
                    req.send();
                    return deferred.promise();
                };
                ServiceClient.prototype.isSuccess = function (status) {
                    return status > 199 && status < 300;
                };
                return ServiceClient;
            }());
            Common.ServiceClient = ServiceClient;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var ODataServiceClient = (function (_super) {
                __extends(ODataServiceClient, _super);
                function ODataServiceClient(logger, includeAnnotations) {
                    if (includeAnnotations === void 0) { includeAnnotations = false; }
                    _super.call(this, logger);
                    this.includeAnnotations = includeAnnotations;
                }
                ODataServiceClient.prototype.setDefaultHeader = function (request) {
                    _super.prototype.setDefaultHeader.call(this, request);
                    request.setRequestHeader("OData-MaxVersion", "4.0");
                    request.setRequestHeader("OData-Version", "4.0");
                    if (this.includeAnnotations) {
                        request.setRequestHeader("Prefer", 'odata.include-annotations="*"');
                    }
                };
                return ODataServiceClient;
            }(Common.ServiceClient));
            Common.ODataServiceClient = ODataServiceClient;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
// -----------------------------------------------------------------------
// <copyright file="CommonReferences.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ----------------------------------------------------------------------- 
/// <reference path="..\..\OpenSource\typings\jquery\jquery.d.ts" />
/// <reference path="logger/consolelogger.ts" />
/// <reference path="logger/ilogger.ts" />
/// <reference path="logger/tracelevel.ts" />
/// <reference path="localization/ajaxcall.ts" />
/// <reference path="localization/ilocalizationprovider.ts" />
/// <reference path="localization/labelsprovider.ts" />
/// <reference path="localization/localizationprovider.ts" />
/// <reference path="utils/arrayquery.ts" />
/// <reference path="utils/dictionary.ts" />
/// <reference path="utils/idictionary.ts" />
/// <reference path="utils/object.ts" />
/// <reference path="utils/string.ts" />
/// <reference path="utils/uniqueid.ts" />
/// <reference path="utils/resources.ts" />
/// <reference path="EventBroker/EventBroker.ts"/>
/// <reference path="DelayScheduler/DelayScheduler.ts"/>
/// <reference path="Service/UrlBuilder.ts" />
/// <reference path="Service/IUrlBuilder.ts" />
/// <reference path="Service/IServiceClient.ts" />
/// <reference path="Service/ServiceClient.ts" />
/// <reference path="Service/ODataServiceClient.ts" /> 
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var KeyboardCommand = (function () {
                function KeyboardCommand(inputKeyCode, modifiers, description, onPressCallback) {
                    this.inputKeyCode = inputKeyCode;
                    this.modifiers = modifiers;
                    this.description = description;
                    this.onPressCallback = onPressCallback;
                }
                KeyboardCommand.prototype.dispose = function () {
                    this.onPressCallback = null;
                };
                return KeyboardCommand;
            }());
            Common.KeyboardCommand = KeyboardCommand;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var KeyboardCommandManager = (function () {
                function KeyboardCommandManager() {
                    this.registeredCommands = [];
                }
                KeyboardCommandManager.prototype.init = function (container) {
                    var _this = this;
                    this.controlContainer = container;
                    this.controlContainer.keydown(function (keyboardEvent) {
                        _this.handleKeyDownEvent(keyboardEvent);
                    });
                };
                KeyboardCommandManager.prototype.registerCommand = function (command) {
                    if (Common.Object.isNullOrUndefined(this.controlContainer)) {
                        return;
                    }
                    if (this.registeredCommands.indexOf(command) == -1) {
                        this.registeredCommands.push(command);
                    }
                };
                KeyboardCommandManager.prototype.unregisterCommand = function (command) {
                    var index = this.registeredCommands.indexOf(command);
                    if (index != -1) {
                        this.registeredCommands.splice(index, 1);
                    }
                };
                KeyboardCommandManager.prototype.registerCommandsInIframe = function (iframe) {
                    var _this = this;
                    $(iframe.contentWindow.document).keydown(function (event) {
                        _this.handleKeyDownEvent(event);
                    });
                };
                KeyboardCommandManager.prototype.unregisterCommandsInIframe = function (iframe) {
                    if (Common.Object.isNullOrUndefined(iframe) || Common.Object.isNullOrUndefined(iframe.contentDocument)) {
                        return;
                    }
                    // Unregister the keydown handler
                    $(iframe.contentDocument).off("keydown");
                    iframe.contentDocument.onkeydown = null;
                };
                KeyboardCommandManager.prototype.dispose = function () {
                    this.controlContainer.off("keydown");
                    this.controlContainer = null;
                    this.registeredCommands.forEach(function (command, index) { command.dispose(); });
                    this.registeredCommands = null;
                };
                KeyboardCommandManager.prototype.handleKeyDownEvent = function (event) {
                    var _this = this;
                    if (Common.Object.isNullOrUndefined(event)) {
                        return null;
                    }
                    this.registeredCommands.forEach(function (command) {
                        if (_this.isCommandTriggered(event, command)) {
                            command.onPressCallback();
                        }
                    });
                };
                KeyboardCommandManager.prototype.isCommandTriggered = function (event, command) {
                    var requiredKeyPressed = (event.which || event.keyCode) == command.inputKeyCode;
                    var altKeyPressed = event.altKey;
                    var controlKeyPressed = event.ctrlKey;
                    var shiftKeyPressed = event.shiftKey;
                    var altKeyRequired = (command.modifiers.indexOf(Common.KeyboardModifierType.Alt) != -1);
                    var shiftKeyRequired = (command.modifiers.indexOf(Common.KeyboardModifierType.Shift) != -1);
                    var controlKeyRequired = (command.modifiers.indexOf(Common.KeyboardModifierType.Control) != -1);
                    if (!requiredKeyPressed || (altKeyRequired && !altKeyPressed) || (shiftKeyRequired && !shiftKeyPressed) || (controlKeyRequired && !controlKeyPressed)
                        || (!altKeyRequired && altKeyPressed) || (!shiftKeyRequired && shiftKeyPressed) || (!controlKeyRequired && controlKeyPressed)) {
                        return false;
                    }
                    return true;
                };
                return KeyboardCommandManager;
            }());
            Common.KeyboardCommandManager = KeyboardCommandManager;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var KeyboardKeyCodes = (function () {
                function KeyboardKeyCodes() {
                }
                KeyboardKeyCodes.escapeKeyCode = 27;
                KeyboardKeyCodes.aKey = 65;
                KeyboardKeyCodes.bKey = 66;
                KeyboardKeyCodes.cKey = 67;
                KeyboardKeyCodes.dKey = 68;
                KeyboardKeyCodes.fKey = 70;
                KeyboardKeyCodes.gKey = 71;
                KeyboardKeyCodes.hKey = 72;
                KeyboardKeyCodes.iKey = 73;
                KeyboardKeyCodes.mKey = 77;
                KeyboardKeyCodes.nKey = 78;
                KeyboardKeyCodes.pKey = 80;
                KeyboardKeyCodes.sKey = 83;
                KeyboardKeyCodes.vKey = 86;
                KeyboardKeyCodes.xKey = 88;
                KeyboardKeyCodes.zKey = 90;
                KeyboardKeyCodes.backspaceKey = 8;
                KeyboardKeyCodes.homeKey = 36;
                KeyboardKeyCodes.deleteKey = 46;
                KeyboardKeyCodes.plusKey = 107;
                KeyboardKeyCodes.minusKey = 189;
                KeyboardKeyCodes.equalKey = 187;
                KeyboardKeyCodes.backslashKey = 220;
                KeyboardKeyCodes.zeroKey = 48;
                KeyboardKeyCodes.oneKey = 49;
                KeyboardKeyCodes.twoKey = 50;
                KeyboardKeyCodes.threeKey = 51;
                KeyboardKeyCodes.fourKey = 52;
                KeyboardKeyCodes.fiveKey = 53;
                KeyboardKeyCodes.sixKey = 54;
                KeyboardKeyCodes.f11Key = 122;
                return KeyboardKeyCodes;
            }());
            Common.KeyboardKeyCodes = KeyboardKeyCodes;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            (function (KeyboardModifierType) {
                KeyboardModifierType[KeyboardModifierType["Shift"] = 0] = "Shift";
                KeyboardModifierType[KeyboardModifierType["Control"] = 1] = "Control";
                KeyboardModifierType[KeyboardModifierType["Alt"] = 2] = "Alt";
            })(Common.KeyboardModifierType || (Common.KeyboardModifierType = {}));
            var KeyboardModifierType = Common.KeyboardModifierType;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            (function (KeyCodes) {
                KeyCodes[KeyCodes["Tab"] = 9] = "Tab";
                KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
                KeyCodes[KeyCodes["Esc"] = 27] = "Esc";
                KeyCodes[KeyCodes["Space"] = 32] = "Space";
                KeyCodes[KeyCodes["Left"] = 37] = "Left";
                KeyCodes[KeyCodes["Up"] = 38] = "Up";
                KeyCodes[KeyCodes["Right"] = 39] = "Right";
                KeyCodes[KeyCodes["Down"] = 40] = "Down";
                KeyCodes[KeyCodes["q"] = 81] = "q";
                KeyCodes[KeyCodes["t"] = 84] = "t";
                KeyCodes[KeyCodes["y"] = 89] = "y";
                KeyCodes[KeyCodes["z"] = 90] = "z";
            })(Common.KeyCodes || (Common.KeyCodes = {}));
            var KeyCodes = Common.KeyCodes;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var CommonConstants = (function () {
                function CommonConstants() {
                }
                //loading modal
                CommonConstants.modalCssClass = "loadingModal";
                CommonConstants.containerLoadingCssClass = "containerLoading";
                return CommonConstants;
            }());
            Common.CommonConstants = CommonConstants;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
             * Creates a Loading Indicator in a container
             */
            var LoadingIndicator = (function () {
                function LoadingIndicator() {
                    this.mainContainerCssClass = "LoadingIndicator-container";
                    this.loadingIndicatorCssClass = "LoadingIndicator";
                }
                /**
                * Appends the Loading Indicator to the container
                 * @param parentContainer The container where the modal is appended
                 * @param bindElement Bind element to DOM method
                 * @param createElement Create UCI Primitive element method
                 * @param indicatorContainerClassName Indicator container CSS class name
                 * @param containerHeight The height of the container
                 * @param indicatorHeight The height of the loading indicator
                 */
                LoadingIndicator.prototype.init = function (parentContainer, bindElement, createElement, indicatorContainerClassName, containerHeight, indicatorHeight) {
                    if (containerHeight === void 0) { containerHeight = "8em"; }
                    if (indicatorHeight === void 0) { indicatorHeight = "4em"; }
                    this.parentContainer = parentContainer;
                    this.bindElement = bindElement;
                    this.createElement = createElement;
                    this.createLoadingContainer(indicatorContainerClassName, containerHeight, indicatorHeight);
                    this.isVisible = false;
                };
                /**
                 * Renders the modal on the current container
                 */
                LoadingIndicator.prototype.show = function () {
                    if (!this.isVisible && !Common.Object.isNullOrUndefined(this.parentContainer)) {
                        this.parentContainer.append(this.loadingContainer);
                        this.isVisible = true;
                    }
                };
                /**
                 * Stops rendering the modal on the current container
                 */
                LoadingIndicator.prototype.hide = function () {
                    if (this.isVisible && !Common.Object.isNullOrUndefined(this.loadingContainer)) {
                        this.loadingContainer.detach();
                        this.isVisible = false;
                    }
                };
                /**
                 * Disposes the modal
                 */
                LoadingIndicator.prototype.dispose = function () {
                    if (!Common.Object.isNullOrUndefined(this.loadingContainer)) {
                        this.loadingContainer.remove();
                    }
                };
                LoadingIndicator.prototype.createLoadingContainer = function (containerClassName, containerHeight, indicatorHeight) {
                    this.loadingContainer = $("<div />").addClass(containerClassName);
                    var progressIndicatorElement = this.createElement("CONTAINER", {
                        key: this.mainContainerCssClass,
                        id: Common.UniqueId.generate(this.mainContainerCssClass),
                        style: {
                            "width": "100%",
                            "display": "block",
                            "overflow": "hidden",
                            "height": containerHeight,
                            "position": "relative",
                            "background-color": "transparent"
                        }
                    }, this.createElement("PROGRESSINDICATOR", {
                        key: this.loadingIndicatorCssClass,
                        id: Common.UniqueId.generate(this.loadingIndicatorCssClass),
                        style: {
                            "width": indicatorHeight,
                            "height": indicatorHeight,
                            "display": "table",
                            "margin": "0 auto"
                        },
                        progressType: "ring",
                        active: true
                    }, []));
                    this.bindElement(progressIndicatorElement, this.loadingContainer[0]);
                };
                return LoadingIndicator;
            }());
            Common.LoadingIndicator = LoadingIndicator;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
             * Allows a container to have a Loading Screen
             */
            var LoadingModal = (function () {
                function LoadingModal(backgroundColorHex) {
                    this.colorHex = Common.String.isNullOrEmpty(backgroundColorHex) ? "#EFEFEF" : backgroundColorHex;
                    this.id = Common.UniqueId.generate(Common.CommonConstants.modalCssClass);
                    this.setBackgroundColor(this.colorHex, 0.8);
                }
                /**
                 * Gets the Loading icon used in the modal
                 */
                LoadingModal.prototype.getLoadingIcon = function () {
                    return "data:image/gif;base64,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";
                };
                /**
                 * Renders the modal on the current container
                 */
                LoadingModal.prototype.show = function () {
                    if (!Common.Object.isNullOrUndefined(this.container)) {
                        this.element.show();
                        this.container.addClass(Common.CommonConstants.containerLoadingCssClass);
                    }
                };
                /**
                 * Stops rendering the modal on the current container
                 */
                LoadingModal.prototype.hide = function () {
                    if (!Common.Object.isNullOrUndefined(this.container)) {
                        this.element.hide();
                        this.container.removeClass(Common.CommonConstants.containerLoadingCssClass);
                        this.eventBroker.notify(Common.EventConstants.loadingCompleted);
                    }
                };
                /*
                 * Returns true if container has class the containerLoadingCssClass
                 */
                LoadingModal.prototype.isVisible = function () {
                    return this.container.hasClass(Common.CommonConstants.containerLoadingCssClass);
                };
                /**
                 * Sets the RGBA for the modal background
                 * @param colorHex The color of the modal background
                 * @param alphaLevel The alpha level - value from 0-1
                 */
                LoadingModal.prototype.setBackgroundColor = function (colorHex, alphaLevel) {
                    this.colorHex = colorHex;
                    this.alphaLevel = this.getValidAlphaLevel(alphaLevel);
                };
                /**
                * Appends the modal to the container
                 * @param container The container where the modal is appended
                 * @param eventBroker The eventBroker.
                 */
                LoadingModal.prototype.init = function (container, eventBroker) {
                    this.container = container;
                    this.addLoadingModal();
                    this.eventBroker = eventBroker;
                };
                LoadingModal.prototype.addLoadingModal = function () {
                    if (!Common.Object.isNullOrUndefined(this.container)) {
                        this.container.css("position", "relative");
                        this.element = this.getHtmlElement();
                        this.element.hide();
                        this.container.append(this.element);
                    }
                };
                /**
                 * Disposes the modal
                 */
                LoadingModal.prototype.dispose = function () {
                    if (!Common.Object.isNullOrUndefined(this.container)) {
                        this.container.find("#" + this.id).remove();
                    }
                };
                LoadingModal.prototype.getHtmlElement = function () {
                    var loadingModal = $("<div>");
                    loadingModal.attr("id", this.id);
                    loadingModal.addClass(Common.CommonConstants.modalCssClass);
                    loadingModal.css("background", this.getCssBackgroundValue());
                    loadingModal.css("opacity", this.alphaLevel);
                    return loadingModal;
                };
                LoadingModal.prototype.getCssBackgroundValue = function () {
                    return Common.String.Format(LoadingModal.cssBackgroundValueFormat, this.colorHex, this.getLoadingIcon());
                };
                LoadingModal.prototype.getValidAlphaLevel = function (colorLevel) {
                    var validColorLevel = colorLevel;
                    if (colorLevel < 0) {
                        validColorLevel = 0;
                    }
                    else if (colorLevel > 1) {
                        validColorLevel = 1;
                    }
                    return validColorLevel;
                };
                LoadingModal.cssBackgroundValueFormat = "{0} url('{1}') 50% 50% no-repeat";
                return LoadingModal;
            }());
            Common.LoadingModal = LoadingModal;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var EventConstants = (function () {
                function EventConstants() {
                }
                EventConstants.loadingCompleted = "LoadingCompleted";
                return EventConstants;
            }());
            Common.EventConstants = EventConstants;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /*
            Gets the localized string
            */
            var ChainedLocalizationProvider = (function (_super) {
                __extends(ChainedLocalizationProvider, _super);
                function ChainedLocalizationProvider(labelsArray, localeId, isRtl, logger) {
                    if (isRtl === void 0) { isRtl = false; }
                    _super.call(this, {}, localeId, isRtl, logger);
                    this.labelsArray = [];
                    this.labelsArray = labelsArray;
                }
                ChainedLocalizationProvider.prototype.registerLabels = function (localizations) {
                    this.labelsArray.push(localizations);
                };
                /*
                Gets the localized string
                */
                ChainedLocalizationProvider.prototype.getLocalizedString = function (key, formatItems) {
                    var localizedString = key;
                    for (var i = this.labelsArray.length - 1; i >= 0; i--) {
                        var labels = this.labelsArray[i];
                        if (key in labels) {
                            localizedString = labels[key];
                            if (formatItems) {
                                localizedString = this.stringFormatItems(localizedString, formatItems);
                            }
                            return localizedString;
                        }
                    }
                    if (this.logger) {
                        var logEventName = "MktSvc.Controls.Common.ChainedLocalizationProvider.getLocalizedString";
                        var logData = new Common.Dictionary({ Key: key, LocaleId: this.localeId });
                        this.logger.log(Common.TraceLevel.Warning, logEventName, logData);
                    }
                    return localizedString;
                };
                return ChainedLocalizationProvider;
            }(Common.LocalizationProvider));
            Common.ChainedLocalizationProvider = ChainedLocalizationProvider;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../commonreferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var LoggerAsserter = (function () {
                function LoggerAsserter(logger, assertEventName, logFixedParameters) {
                    this.logger = logger;
                    this.assertEventName = assertEventName;
                    this.logFixedParameters = logFixedParameters;
                }
                LoggerAsserter.prototype.assert = function (assertKey, expected, actual, logParameters) {
                    if (expected !== actual) {
                        var logParametersCopy = this.logFixedParameters.clone();
                        logParametersCopy.addOrUpdate(LoggerAsserter.AssertMethod, "assert");
                        logParametersCopy.addOrUpdate(LoggerAsserter.AssertKey, assertKey);
                        logParametersCopy.addOrUpdate(LoggerAsserter.Expected, expected);
                        logParametersCopy.addOrUpdate(LoggerAsserter.Actual, actual);
                        if (logParameters) {
                            logParametersCopy = logParametersCopy.concat(logParameters);
                        }
                        this.logger.log(MktSvc.Controls.Common.TraceLevel.Error, this.assertEventName, logParametersCopy);
                        return false;
                    }
                    return true;
                };
                LoggerAsserter.prototype.assertValueDefined = function (assertKey, actual, logParameters) {
                    if (actual === null ||
                        actual === undefined) {
                        var logParametersCopy = this.logFixedParameters.clone();
                        logParametersCopy.addOrUpdate(LoggerAsserter.AssertMethod, "assertDefined");
                        logParametersCopy.addOrUpdate(LoggerAsserter.AssertKey, assertKey);
                        logParametersCopy.addOrUpdate(LoggerAsserter.Actual, actual);
                        if (logParameters) {
                            logParametersCopy = logParametersCopy.concat(logParameters);
                        }
                        this.logger.log(MktSvc.Controls.Common.TraceLevel.Error, this.assertEventName, logParametersCopy);
                        return false;
                    }
                    return true;
                };
                LoggerAsserter.AssertMethod = "AssertMethod";
                LoggerAsserter.AssertKey = "AssertKey";
                LoggerAsserter.Expected = "Expected";
                LoggerAsserter.Actual = "Actual";
                return LoggerAsserter;
            }());
            Common.LoggerAsserter = LoggerAsserter;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var ParameterKeys = (function () {
                function ParameterKeys() {
                }
                ParameterKeys.ReponseLengthKey = "ResponseLength";
                ParameterKeys.ResponseStatusKey = "ResponseStatus";
                ParameterKeys.LoggerError = "LoggerError";
                ParameterKeys.Message = "Message";
                ParameterKeys.ErrorCode = "ErrorCode";
                ParameterKeys.ErrorMessage = "ErrorMessage";
                ParameterKeys.ErrorDetails = "ErrorDetails";
                return ParameterKeys;
            }());
            Common.ParameterKeys = ParameterKeys;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var EntityDefinitionsUrlBuilder = (function (_super) {
                __extends(EntityDefinitionsUrlBuilder, _super);
                function EntityDefinitionsUrlBuilder(baseUrl) {
                    _super.call(this, baseUrl);
                    this.logicalNameKey = "{logicalName}";
                    this.appendSubPath("api/data/v9.0/EntityDefinitions" + this.logicalNameKey);
                    this.setEntityLogicalName(Common.String.Empty);
                }
                EntityDefinitionsUrlBuilder.prototype.setEntityLogicalName = function (entityLogicalName) {
                    var value = Common.String.isNullUndefinedOrWhitespace(entityLogicalName) ? Common.String.Empty : "(LogicalName='" + entityLogicalName + "')";
                    this.setFormatParameter(this.logicalNameKey, value);
                };
                return EntityDefinitionsUrlBuilder;
            }(Common.UrlBuilder));
            Common.EntityDefinitionsUrlBuilder = EntityDefinitionsUrlBuilder;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var EntityRecordUrlBuilder = (function (_super) {
                __extends(EntityRecordUrlBuilder, _super);
                function EntityRecordUrlBuilder(baseUrl, entitySetName) {
                    _super.call(this, baseUrl);
                    this.recordIdKey = "{recordIdKey}";
                    this.appendSubPath("api/data/v8.2/" + entitySetName + this.recordIdKey);
                    this.setRecordId(Common.String.Empty);
                }
                EntityRecordUrlBuilder.prototype.setRecordId = function (recordId) {
                    var value = Common.String.isNullUndefinedOrWhitespace(recordId) ? Common.String.Empty : "(" + recordId + ")";
                    this.setFormatParameter(this.recordIdKey, value);
                };
                EntityRecordUrlBuilder.prototype.setSelectedFields = function (fields) {
                    if (!fields || fields.length == 0) {
                        this.setQueryString(Common.String.Empty);
                    }
                    else {
                        var queryString = "$select=" + fields[0];
                        for (var i = 1; i < fields.length; i++) {
                            queryString += "," + fields[i];
                        }
                        this.setQueryString(queryString);
                    }
                };
                return EntityRecordUrlBuilder;
            }(Common.UrlBuilder));
            Common.EntityRecordUrlBuilder = EntityRecordUrlBuilder;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            var UrlBuilderFactory = (function () {
                function UrlBuilderFactory(baseUrl) {
                    this.baseUrl = baseUrl;
                }
                UrlBuilderFactory.prototype.createEntityRecordUrlBuilder = function (entitySetName) {
                    return new Common.EntityRecordUrlBuilder(this.baseUrl, entitySetName);
                };
                return UrlBuilderFactory;
            }());
            Common.UrlBuilderFactory = UrlBuilderFactory;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * Guid helper methods. Return in XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX
            */
            var Guid = (function () {
                function Guid(guid) {
                    if (typeof guid === "string") {
                        this.guid = guid.replace(/[{()}]/g, "");
                        if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(this.guid)) {
                            this.guid = Guid.GetNullGuid();
                        }
                    }
                    else {
                        this.guid = Guid.GetNullGuid();
                    }
                }
                Guid.prototype.ToStringParentheses = function () {
                    return "(" + this.guid + ")";
                };
                Guid.prototype.ToStringBraces = function () {
                    return "{" + this.guid + "}";
                };
                Guid.prototype.ToString = function () {
                    return this.guid;
                };
                Guid.GetNullGuid = function () {
                    return "00000000-0000-0000-0000-000000000000";
                };
                return Guid;
            }());
            Common.Guid = Guid;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
            * FIFO Queue implementation.
            */
            var Queue = (function (_super) {
                __extends(Queue, _super);
                function Queue() {
                    _super.apply(this, arguments);
                }
                /**
                * Push a new element.
                */
                Queue.prototype.push = function (element) {
                    this.addAt(element, 0);
                };
                /**
                * Get the next one.
                */
                Queue.prototype.pop = function () {
                    return this.data.pop();
                };
                return Queue;
            }(Common.ArrayQuery));
            Common.Queue = Queue;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
// This file was forked from CRM main repository, v8.1 branch
//---------------------------------------------------------------------------------------------------------------
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MktSvc;
(function (MktSvc) {
    var Controls;
    (function (Controls) {
        var Common;
        (function (Common) {
            'use strict';
            /**
             * Control guid generator helper methods.
             */
            var ControlGuidGenerator = (function () {
                function ControlGuidGenerator() {
                }
                ControlGuidGenerator.newGuid = function (controlName) {
                    return controlName + 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                };
                return ControlGuidGenerator;
            }());
            Common.ControlGuidGenerator = ControlGuidGenerator;
        })(Common = Controls.Common || (Controls.Common = {}));
    })(Controls = MktSvc.Controls || (MktSvc.Controls = {}));
})(MktSvc || (MktSvc = {}));
//# sourceMappingURL=Controls.Common.js.map