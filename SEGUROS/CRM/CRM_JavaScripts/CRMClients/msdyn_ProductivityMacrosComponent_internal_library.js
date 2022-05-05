var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for (var i in a)
            (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(this, function () {
    return (function (modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports;
            }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/ 
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/
        /******/ // identity function for calling harmony imports with the correct context
        /******/ __webpack_require__.i = function (value) { return value; };
        /******/
        /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function (exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, {
                    /******/ configurable: false,
                    /******/ enumerable: true,
                    /******/ get: getter
                });
            }
            /******/ 
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function (module) {
            /******/ var getter = module && module.__esModule ?
                /******/ function getDefault() { return module['default']; } :
                /******/ function getModuleExports() { return module; };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
            /******/ 
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 30);
        /******/ 
    })([
        /* 0 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * Enums.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2018
            * File containing the enums.
            */
            /**
             * The AWTPropertyType enumeration contains a set of values that specify types of properties.
             * @enum {number}
             */
            var AWTPropertyType;
            (function (AWTPropertyType) {
                /**
                 * Property type is unspecified.
                 */
                AWTPropertyType[AWTPropertyType["Unspecified"] = 0] = "Unspecified";
                /**
                 * A string.
                 */
                AWTPropertyType[AWTPropertyType["String"] = 1] = "String";
                /**
                 * A 64-bit integer.
                 */
                AWTPropertyType[AWTPropertyType["Int64"] = 2] = "Int64";
                /**
                 * A double.
                 */
                AWTPropertyType[AWTPropertyType["Double"] = 3] = "Double";
                /**
                 * A boolean.
                 */
                AWTPropertyType[AWTPropertyType["Boolean"] = 4] = "Boolean";
                /**
                 * A date.
                 */
                AWTPropertyType[AWTPropertyType["Date"] = 5] = "Date";
            })(AWTPropertyType = exports.AWTPropertyType || (exports.AWTPropertyType = {}));
            /**
             * The AWTPiiKind enumeration contains a set of values that specify the kind of PII (Personal Identifiable Information).
             * @enum {number}
             */
            var AWTPiiKind;
            (function (AWTPiiKind) {
                /**
                 * No kind.
                 */
                AWTPiiKind[AWTPiiKind["NotSet"] = 0] = "NotSet";
                /**
                 * An LDAP distinguished name. For example, CN=Jeff Smith,OU=Sales,DC=Fabrikam,DC=COM.
                 */
                AWTPiiKind[AWTPiiKind["DistinguishedName"] = 1] = "DistinguishedName";
                /**
                 * Generic information.
                 */
                AWTPiiKind[AWTPiiKind["GenericData"] = 2] = "GenericData";
                /**
                 * An IPV4 Internet address. For example, 192.0.2.1.
                 */
                AWTPiiKind[AWTPiiKind["IPV4Address"] = 3] = "IPV4Address";
                /**
                 * An IPV6 Internet address. For example, 2001:0db8:85a3:0000:0000:8a2e:0370:7334.
                 */
                AWTPiiKind[AWTPiiKind["IPv6Address"] = 4] = "IPv6Address";
                /**
                 * The Subject of an e-mail message.
                 */
                AWTPiiKind[AWTPiiKind["MailSubject"] = 5] = "MailSubject";
                /**
                 * A telephone number.
                 */
                AWTPiiKind[AWTPiiKind["PhoneNumber"] = 6] = "PhoneNumber";
                /**
                 * A query string.
                 */
                AWTPiiKind[AWTPiiKind["QueryString"] = 7] = "QueryString";
                /**
                 * An SIP (Session Internet Protocol) address.
                 */
                AWTPiiKind[AWTPiiKind["SipAddress"] = 8] = "SipAddress";
                /**
                 * An e-mail address.
                 */
                AWTPiiKind[AWTPiiKind["SmtpAddress"] = 9] = "SmtpAddress";
                /**
                 * An user ID.
                 */
                AWTPiiKind[AWTPiiKind["Identity"] = 10] = "Identity";
                /**
                 * A URI (Uniform Resource Identifier).
                 */
                AWTPiiKind[AWTPiiKind["Uri"] = 11] = "Uri";
                /**
                 * The fully-qualified domain name.
                 */
                AWTPiiKind[AWTPiiKind["Fqdn"] = 12] = "Fqdn";
                /**
                 * Scrubs the last octet in a IPV4 Internet address.
                 * For example: 10.121.227.147 becomes 10.121.227.*
                 */
                AWTPiiKind[AWTPiiKind["IPV4AddressLegacy"] = 13] = "IPV4AddressLegacy";
            })(AWTPiiKind = exports.AWTPiiKind || (exports.AWTPiiKind = {}));
            /**
             * The AWTCustomerContentKind enumeration contains a set of values that specify the kind of customer content.
             * @enum {number}
             */
            var AWTCustomerContentKind;
            (function (AWTCustomerContentKind) {
                /**
                 * No kind.
                 */
                AWTCustomerContentKind[AWTCustomerContentKind["NotSet"] = 0] = "NotSet";
                /**
                 * Generic content.
                 */
                AWTCustomerContentKind[AWTCustomerContentKind["GenericContent"] = 1] = "GenericContent";
            })(AWTCustomerContentKind = exports.AWTCustomerContentKind || (exports.AWTCustomerContentKind = {}));
            /**
             * The AWTEventPriority enumeration contains a set of values that specify an event's priority.
             * @enum {number}
             */
            var AWTEventPriority;
            (function (AWTEventPriority) {
                /**
                 * Low priority.
                 */
                AWTEventPriority[AWTEventPriority["Low"] = 1] = "Low";
                /**
                 * Normal priority.
                 */
                AWTEventPriority[AWTEventPriority["Normal"] = 2] = "Normal";
                /**
                 * High priority.
                 */
                AWTEventPriority[AWTEventPriority["High"] = 3] = "High";
                /**
                 * Immediate_sync priority (Events are sent sync immediately).
                 */
                AWTEventPriority[AWTEventPriority["Immediate_sync"] = 5] = "Immediate_sync";
            })(AWTEventPriority = exports.AWTEventPriority || (exports.AWTEventPriority = {}));
            /**
             * The AWTEventsDroppedReason enumeration contains a set of values that specify the reason for dropping an event.
             * @enum {number}
             */
            var AWTEventsDroppedReason;
            (function (AWTEventsDroppedReason) {
                /**
                 * Status set to non-retryable.
                 */
                AWTEventsDroppedReason[AWTEventsDroppedReason["NonRetryableStatus"] = 1] = "NonRetryableStatus";
                /**
                 * The event queue is full.
                 */
                AWTEventsDroppedReason[AWTEventsDroppedReason["QueueFull"] = 3] = "QueueFull";
            })(AWTEventsDroppedReason = exports.AWTEventsDroppedReason || (exports.AWTEventsDroppedReason = {}));
            /**
             * The AWTEventsRejectedReason enumeration contains a set of values that specify the reason for rejecting an event.
             * @enum {number}
             */
            var AWTEventsRejectedReason;
            (function (AWTEventsRejectedReason) {
                /**
                 * The event is invalid.
                 */
                AWTEventsRejectedReason[AWTEventsRejectedReason["InvalidEvent"] = 1] = "InvalidEvent";
                /**
                 * The size of the event is too large.
                 */
                AWTEventsRejectedReason[AWTEventsRejectedReason["SizeLimitExceeded"] = 2] = "SizeLimitExceeded";
                /**
                 * The server is not accepting events from this token.
                 */
                AWTEventsRejectedReason[AWTEventsRejectedReason["KillSwitch"] = 3] = "KillSwitch";
            })(AWTEventsRejectedReason = exports.AWTEventsRejectedReason || (exports.AWTEventsRejectedReason = {}));
            /***/ 
        }),
        /* 1 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * Utils.ts
            * @author  Brent Erickson (brericks) and Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            * File containing utility functions.
            */
            var microsoft_bond_primitives_1 = __webpack_require__(4);
            var Enums_1 = __webpack_require__(0);
            var GuidRegex = /[xy]/g;
            var MSTillUnixEpoch = 62135596800000;
            var MSToTicksMultiplier = 10000;
            var NullValue = null;
            exports.EventNameAndTypeRegex = /^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/;
            exports.EventNameDotRegex = /\./g;
            exports.PropertyNameRegex = /^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/;
            exports.StatsApiKey = 'a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238';
            var beaconsSupported = NullValue;
            var uInt8ArraySupported = NullValue;
            var useXDR = NullValue;
            /**
             * Converts a number to Bond Int64.
             * @param {number} value - The number to be converted.
             * @return {object} The Int64 value for the passed number.
             */
            function numberToBondInt64(value) {
                // Construct bond timestamp for aria
                var bond_value = new microsoft_bond_primitives_1.Int64('0');
                bond_value.low = value & 0xffffffff;
                bond_value.high = Math.floor(value / 0x100000000);
                return bond_value;
            }
            exports.numberToBondInt64 = numberToBondInt64;
            /**
             * Creates a new GUID.
             * @return {string} A GUID.
             */
            function newGuid() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(GuidRegex, function (c) {
                    var r = (Math.random() * 16 | 0), v = (c === 'x' ? r : r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }
            exports.newGuid = newGuid;
            /**
             * Checks if the type of value is a string.
             * @param {any} value - Value to be checked.
             * @return {boolean} True if the value is a string, false otherwise.
             */
            function isString(value) {
                return typeof value === 'string';
            }
            exports.isString = isString;
            /**
             * Checks if the type of value is a number.
             * @param {any} value - Value to be checked.
             * @return {boolean} True if the value is a number, false otherwise.
             */
            function isNumber(value) {
                return typeof value === 'number';
            }
            exports.isNumber = isNumber;
            /**
             * Checks if the type of value is a boolean.
             * @param {any} value - Value to be checked.
             * @return {boolean} True if the value is a boolean, false otherwise.
             */
            function isBoolean(value) {
                return typeof value === 'boolean';
            }
            exports.isBoolean = isBoolean;
            /**
             * Check if the type of value is a date.
             * @param {any} value - Value to be checked.
             * @return {boolean} True if the value is a date, false otherwise.
             */
            function isDate(value) {
                return value instanceof Date;
            }
            exports.isDate = isDate;
            /**
             * Converts milliseconds to ticks since 00:00:00 Jan 1, 0001.
             * @param {number} msToTicks - The milliseconds value to be converted.
             * @return {number} The value of the milliseconds in .Net Ticks.
             */
            function msToTicks(timeInMs) {
                return (timeInMs + MSTillUnixEpoch) * MSToTicksMultiplier;
            }
            exports.msToTicks = msToTicks;
            /**
             * Gets the tenant id from the tenant token.
             * @param {string} apiKey - The token from which the tenant id is to be extracted.
             * @return {string} The tenant id.
             */
            function getTenantId(apiKey) {
                var indexTenantId = apiKey.indexOf('-');
                if (indexTenantId > -1) {
                    return apiKey.substring(0, indexTenantId);
                }
                return '';
            }
            exports.getTenantId = getTenantId;
            /**
             * Checks if HTML5 Beacons are supported in the current environment.
             * @return {boolean} True if supported, false otherwise.
             */
            function isBeaconsSupported() {
                if (beaconsSupported === NullValue) {
                    beaconsSupported = typeof navigator !== 'undefined' && Boolean(navigator.sendBeacon);
                }
                return beaconsSupported;
            }
            exports.isBeaconsSupported = isBeaconsSupported;
            /**
             * Checks if Uint8Array are available in the current environment. Safari and Firefox along with
             * ReactNative are known to not support Uint8Array properly.
             * @return {boolean} True if available, false otherwise.
             */
            function isUint8ArrayAvailable() {
                if (uInt8ArraySupported === NullValue) {
                    uInt8ArraySupported = typeof Uint8Array !== 'undefined' && !isSafariOrFirefox() && !isReactNative();
                }
                return uInt8ArraySupported;
            }
            exports.isUint8ArrayAvailable = isUint8ArrayAvailable;
            /**
             * Checks if the value is an AWTEventPriority.
             * @param {enum} value - The value that needs to be checked.
             * @return {boolean} True if the value is in AWTEventPriority, false otherwise.
             */
            function isPriority(value) {
                if (isNumber(value) && ((value >= 1 && value <= 3) || value === 5)) {
                    return true;
                }
                return false;
            }
            exports.isPriority = isPriority;
            /**
             * Sanitizes the Property. It checks the that the property name and value are valid. It also
             * checks/populates the correct type and pii of the property value.
             * @param {string} name                                - The property name.
             * @param {string|number|boolean|Date|object} property - The property value or an AWTEventProperty containing value,
             * type ,pii and customer content.
             * @return {object} AWTEventProperty containing valid name, value, pii and type or null if invalid.
             */
            function sanitizeProperty(name, property) {
                //Check that property is valid
                if (!exports.PropertyNameRegex.test(name) || isNotDefined(property)) {
                    return NullValue;
                }
                //Check if type is AWTEventProperty. If not convert to AWTEventProperty
                if (isNotDefined(property.value)) {
                    property = { value: property, type: Enums_1.AWTPropertyType.Unspecified };
                }
                property.type = sanitizePropertyType(property.value, property.type);
                if (!property.type) {
                    return NullValue;
                }
                //If value is date. Then convert to number in Ticks.
                if (isDate(property.value)) {
                    property.value = msToTicks(property.value.getTime());
                }
                //Ensure that only one of pii or customer content can be set
                if (property.pii > 0 && property.cc > 0) {
                    return NullValue;
                }
                //If pii is set we need to validate its enum value.
                if (property.pii) {
                    return isPii(property.pii) ? property : NullValue;
                }
                //If cc is set we need to validate its enum value.
                if (property.cc) {
                    return isCustomerContent(property.cc) ? property : NullValue;
                }
                return property;
            }
            exports.sanitizeProperty = sanitizeProperty;
            /**
             * Converts a date object into an ISO string. This is needed because not all browsers support ISO string format
             * on the date.
             * @param {object} date - The date which needs to be converted to ISO format.
             * @return {string} The date in ISO format.
             */
            function getISOString(date) {
                return date.getUTCFullYear() + '-' +
                    twoDigit(date.getUTCMonth() + 1) + '-' +
                    twoDigit(date.getUTCDate()) + 'T' +
                    twoDigit(date.getUTCHours()) + ':' +
                    twoDigit(date.getUTCMinutes()) + ':' +
                    twoDigit(date.getUTCSeconds()) + '.' +
                    threeDigit(date.getUTCMilliseconds()) + 'Z';
            }
            exports.getISOString = getISOString;
            function useXDomainRequest() {
                if (useXDR === NullValue) {
                    var conn = new XMLHttpRequest();
                    if (typeof conn.withCredentials === 'undefined' &&
                        typeof XDomainRequest !== 'undefined') {
                        useXDR = true;
                    }
                    else {
                        useXDR = false;
                    }
                }
                return useXDR;
            }
            exports.useXDomainRequest = useXDomainRequest;
            function isReactNative() {
                // If running in React Native, navigator.product will be populated
                if (typeof navigator !== 'undefined' && navigator.product) {
                    return navigator.product === 'ReactNative';
                }
                return false;
            }
            exports.isReactNative = isReactNative;
            function twoDigit(n) {
                // Format integers to have at least two digits.
                return n < 10 ? '0' + n : n.toString();
            }
            function threeDigit(n) {
                // Format integers to have at least three digits.
                if (n < 10) {
                    return '00' + n;
                }
                else if (n < 100) {
                    return '0' + n;
                }
                return n.toString();
            }
            function sanitizePropertyType(value, type) {
                type = !isPropertyType(type) ? Enums_1.AWTPropertyType.Unspecified : type;
                switch (type) {
                    case Enums_1.AWTPropertyType.Unspecified:
                        return getCorrectType(value);
                    case Enums_1.AWTPropertyType.String:
                        return isString(value) ? type : NullValue;
                    case Enums_1.AWTPropertyType.Boolean:
                        return isBoolean(value) ? type : NullValue;
                    case Enums_1.AWTPropertyType.Date:
                        return isDate(value) && value.getTime() !== NaN ? type : NullValue;
                    case Enums_1.AWTPropertyType.Int64:
                        return isNumber(value) && value % 1 === 0 ? type : NullValue;
                    case Enums_1.AWTPropertyType.Double:
                        return isNumber(value) ? type : NullValue;
                }
                return NullValue;
            }
            function getCorrectType(value) {
                switch (typeof value) {
                    case 'string':
                        return Enums_1.AWTPropertyType.String;
                    case 'boolean':
                        return Enums_1.AWTPropertyType.Boolean;
                    case 'number':
                        return Enums_1.AWTPropertyType.Double;
                    case 'object':
                        return isDate(value) ? Enums_1.AWTPropertyType.Date : NullValue;
                }
                return NullValue;
            }
            function isPii(value) {
                if (isNumber(value) && value >= 0 && value <= 13) {
                    return true;
                }
                return false;
            }
            function isCustomerContent(value) {
                if (isNumber(value) && value >= 0 && value <= 1) {
                    return true;
                }
                return false;
            }
            function isPropertyType(value) {
                if (isNumber(value) && value >= 0 && value <= 4) {
                    return true;
                }
                return false;
            }
            function isSafariOrFirefox() {
                // If non-browser navigator will be undefined
                if (typeof navigator !== 'undefined' && navigator.userAgent) {
                    var ua = navigator.userAgent.toLowerCase();
                    if ((ua.indexOf('safari') >= 0 || ua.indexOf('firefox') >= 0) && ua.indexOf('chrome') < 0) {
                        return true;
                    }
                }
                return false;
            }
            function isNotDefined(value) {
                return value === undefined || value === NullValue || value === '';
            }
            /***/ 
        }),
        /* 2 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
             * Class to manage sending notifications to all the listeners.
             */
            var AWTNotificationManager = (function () {
                function AWTNotificationManager() {
                }
                /**
                 * Adds a notification listener.
                 * @param {object} listener - The notification listener to be added.
                 */
                AWTNotificationManager.addNotificationListener = function (listener) {
                    this.listeners.push(listener);
                };
                /**
                 * Removes all instances of the listener.
                 * @param {object} listener - AWTNotificationListener to remove.
                 */
                AWTNotificationManager.removeNotificationListener = function (listener) {
                    var index = this.listeners.indexOf(listener);
                    while (index > -1) {
                        this.listeners.splice(index, 1);
                        index = this.listeners.indexOf(listener);
                    }
                };
                /**
                 * Notification for events sent.
                 * @param {object[]} events - The array of events that have been sent.
                 */
                AWTNotificationManager.eventsSent = function (events) {
                    var _this = this;
                    var _loop_1 = function (i) {
                        if (this_1.listeners[i].eventsSent) {
                            setTimeout(function () { return _this.listeners[i].eventsSent(events); }, 0);
                        }
                    };
                    var this_1 = this;
                    for (var i = 0; i < this.listeners.length; ++i) {
                        _loop_1(i);
                    }
                };
                /**
                 * Notification for events being dropped.
                 * @param {object[]} events - The array of events that have been dropped.
                 * @param {enum} reason     - The reason for which the SDK dropped the events.
                 */
                AWTNotificationManager.eventsDropped = function (events, reason) {
                    var _this = this;
                    var _loop_2 = function (i) {
                        if (this_2.listeners[i].eventsDropped) {
                            setTimeout(function () { return _this.listeners[i].eventsDropped(events, reason); }, 0);
                        }
                    };
                    var this_2 = this;
                    for (var i = 0; i < this.listeners.length; ++i) {
                        _loop_2(i);
                    }
                };
                /**
                 * Notification for events being retried when the request failed with a retryable status.
                 * @param {object[]} events - The array of events that are being retried.
                 */
                AWTNotificationManager.eventsRetrying = function (events) {
                    var _this = this;
                    var _loop_3 = function (i) {
                        if (this_3.listeners[i].eventsRetrying) {
                            setTimeout(function () { return _this.listeners[i].eventsRetrying(events); }, 0);
                        }
                    };
                    var this_3 = this;
                    for (var i = 0; i < this.listeners.length; ++i) {
                        _loop_3(i);
                    }
                };
                /**
                 * Notification for events being rejected.
                 * @param {object[]} events - The array of events that have been rejected.
                 * @param {enum} reason     - The reason for which the SDK rejeceted the events.
                 */
                AWTNotificationManager.eventsRejected = function (events, reason) {
                    var _this = this;
                    var _loop_4 = function (i) {
                        if (this_4.listeners[i].eventsRejected) {
                            setTimeout(function () { return _this.listeners[i].eventsRejected(events, reason); }, 0);
                        }
                    };
                    var this_4 = this;
                    for (var i = 0; i < this.listeners.length; ++i) {
                        _loop_4(i);
                    }
                };
                AWTNotificationManager.listeners = [];
                return AWTNotificationManager;
            }());
            exports.default = AWTNotificationManager;
            /***/ 
        }),
        /* 3 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTTransmissionManagerCore.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            */
            var DataModels_1 = __webpack_require__(14);
            var Enums_1 = __webpack_require__(0);
            var AWTQueueManager_1 = __webpack_require__(28);
            var AWTStatsManager_1 = __webpack_require__(10);
            var AWTEventProperties_1 = __webpack_require__(5);
            var AWTLogManager_1 = __webpack_require__(11);
            var Utils = __webpack_require__(1);
            var MaxBackoffCount = 4;
            var MinDurationBetweenUploadNow = 30000; //30 sec
            var StatName = 'awt_stats';
            /**
             * Class that manages the timers for when to send events. It also
             * handles flush and flushAndTeardown. This class also allows setting
             * new event handlers. The default event handler is the Inbound Queue Manager.
             */
            var AWTTransmissionManagerCore = (function () {
                function AWTTransmissionManagerCore() {
                }
                /**
                 * Sets the event handler to be used by the tranmission manager.
                 * The default event handler is the Inbound queue manager. This handler
                 * is used to batch and send events to Aria. If you intend to send events
                 * to Aria please make sure your event handler forwards events to the Inbound
                 * Queue Manager. You can retrieve the Inbound Queue Manager by calling
                 * getEventsHandler before you set your handler.
                 * @param {object} eventsHandler - The new events handler to be used by the tranmission
                 * manager.
                 */
                AWTTransmissionManagerCore.setEventsHandler = function (eventsHandler) {
                    this._eventHandler = eventsHandler;
                };
                /**
                 * Gets the current event handler used by the tranmission manager.
                 * @return {object} The event handler currently used by the tranmission manager.
                 */
                AWTTransmissionManagerCore.getEventsHandler = function () {
                    return this._eventHandler;
                };
                /**
                 * Try to schedule the timer after which events will be sent. If there are
                 * no events to be sent, or there is already a timer scheduled, or the
                 * http manager doesn't have any idle connections this method is no-op.
                 */
                AWTTransmissionManagerCore.scheduleTimer = function () {
                    var _this = this;
                    var timer = this._profiles[this._currentProfile][2];
                    if (this._timeout < 0 && timer >= 0 && !this._paused) {
                        if (this._eventHandler.hasEvents()) {
                            //If the transmission is backed off make the timer atleast 1 sec to allow for backoff.
                            if (timer === 0 && this._currentBackoffCount > 0) {
                                timer = 1;
                            }
                            this._timeout = setTimeout(function () { return _this._batchAndSendEvents(); }, timer * (1 << this._currentBackoffCount) * 1000);
                        }
                        else {
                            this._timerCount = 0;
                        }
                    }
                };
                /**
                 * Initialize the transmission manager. After this method is called events are
                 * accepted for tranmission.
                 * @param {object} config - The configuration passed during AWTLogManager initialize.
                 */
                AWTTransmissionManagerCore.initialize = function (config) {
                    var _this = this;
                    this._newEventsAllowed = true;
                    this._config = config;
                    this._eventHandler = new AWTQueueManager_1.default(config.collectorUri, config.cacheMemorySizeLimitInNumberOfEvents, config.httpXHROverride, config.clockSkewRefreshDurationInMins);
                    this._initializeProfiles();
                    AWTStatsManager_1.default.initialize(function (stats, tenantId) {
                        if (_this._config.canSendStatEvent(StatName)) {
                            var event_1 = new AWTEventProperties_1.default(StatName);
                            event_1.setEventPriority(Enums_1.AWTEventPriority.High);
                            event_1.setProperty('TenantId', tenantId);
                            for (var statKey in stats) {
                                if (stats.hasOwnProperty(statKey)) {
                                    event_1.setProperty(statKey, stats[statKey].toString());
                                }
                            }
                            AWTLogManager_1.default.getLogger(Utils.StatsApiKey).logEvent(event_1);
                        }
                    });
                };
                /**
                 * Set the transmit profile to be used. This will change the tranmission timers
                 * based on the transmit profile.
                 * @param {string} profileName - The name of the transmit profile to be used.
                 */
                AWTTransmissionManagerCore.setTransmitProfile = function (profileName) {
                    if (this._currentProfile !== profileName && this._profiles[profileName] !== undefined) {
                        this.clearTimeout();
                        this._currentProfile = profileName;
                        this.scheduleTimer();
                    }
                };
                /**
                 * Load custom tranmission profiles. Each profile should have timers for
                 * high, normal and low.  Each profile should make sure
                 * that a each priority timer is a multiple of the priority higher than it.
                 * Setting the timer value to -1 means that the events for that priority will
                 * not be sent. Note that once a priority has been set to not send, all priorities
                 * below it will also not be sent. The timers should be in the form of [low, normal, high].
                 * e.g Custom: [30,10,5]
                 * This also removes any previously loaded custom profiles.
                 * @param {object} profiles - A dictionary containing the transmit profiles.
                 */
                AWTTransmissionManagerCore.loadTransmitProfiles = function (profiles) {
                    this._resetTransmitProfiles();
                    for (var profileName in profiles) {
                        if (profiles.hasOwnProperty(profileName)) {
                            if (profiles[profileName].length !== 3) {
                                continue;
                            }
                            //Make sure if a higher priority is set to not send then dont send lower priority
                            for (var i = 2; i >= 0; --i) {
                                if (profiles[profileName][i] < 0) {
                                    for (var j = i; j >= 0; --j) {
                                        profiles[profileName][j] = -1;
                                    }
                                    break;
                                }
                            }
                            //Make sure each priority is multiple of the priority higher then it. If not a multiple
                            //we round up so that it becomes a multiple.
                            for (var i = 2; i > 0; --i) {
                                if (profiles[profileName][i] > 0 && profiles[profileName][i - 1] > 0) {
                                    var timerMultiplier = profiles[profileName][i - 1] / profiles[profileName][i];
                                    profiles[profileName][i - 1] = Math.ceil(timerMultiplier) * profiles[profileName][i];
                                }
                            }
                            this._profiles[profileName] = profiles[profileName];
                        }
                    }
                };
                /**
                 * Pass the event to the event handler and try to schedule the timer.
                 * @param {object} event - The event to be sent.
                 */
                AWTTransmissionManagerCore.sendEvent = function (event) {
                    if (this._newEventsAllowed) {
                        //If the transmission is backed off then do not send synchronous events.
                        //We will convert these events to High priority instead.
                        if (this._currentBackoffCount > 0 && event.priority === Enums_1.AWTEventPriority.Immediate_sync) {
                            event.priority = Enums_1.AWTEventPriority.High;
                        }
                        this._eventHandler.addEvent(event);
                        this.scheduleTimer();
                    }
                };
                /**
                 * Sends events for all priority for the current inbound queue.
                 * This method adds new inbound queues to which new events will be added.
                 * Note: If LogManager is paused or flush is called again in less than 30 sec
                 * then flush will be no-op and the callback will not be called.
                 * @param {function} callback - The function to be called when flush is finished.
                 */
                AWTTransmissionManagerCore.flush = function (callback) {
                    var currentTime = (new Date()).getTime();
                    if (!this._paused && this._lastUploadNowCall + MinDurationBetweenUploadNow < currentTime) {
                        this._lastUploadNowCall = currentTime;
                        if (this._timeout > -1) {
                            clearTimeout(this._timeout);
                            this._timeout = -1;
                        }
                        this._eventHandler.uploadNow(callback);
                    }
                };
                /**
                 * Pauses transmission. It pauses the http manager and also clears timers.
                 */
                AWTTransmissionManagerCore.pauseTransmission = function () {
                    if (!this._paused) {
                        this.clearTimeout();
                        this._eventHandler.pauseTransmission();
                        this._paused = true;
                    }
                };
                /**
                 * Resumes tranmission. It resumes the http manager and tries to schedule the timer.
                 */
                AWTTransmissionManagerCore.resumeTransmision = function () {
                    if (this._paused) {
                        this._paused = false;
                        this._eventHandler.resumeTransmission();
                        this.scheduleTimer();
                    }
                };
                /**
                 * Stops allowing new events being added for tranmission. It also batches all
                 * events currently in the queue and creates requests from them to be sent.
                 */
                AWTTransmissionManagerCore.flushAndTeardown = function () {
                    AWTStatsManager_1.default.teardown();
                    this._newEventsAllowed = false;
                    this.clearTimeout();
                    //No op if offline storage is added
                    this._eventHandler.teardown();
                };
                /**
                 * Backs off tranmission. This exponentially increases all the timers.
                 */
                AWTTransmissionManagerCore.backOffTransmission = function () {
                    if (this._currentBackoffCount < MaxBackoffCount) {
                        this._currentBackoffCount++;
                        this.clearTimeout();
                        this.scheduleTimer();
                    }
                };
                /**
                 * Clears backoff for tranmission.
                 */
                AWTTransmissionManagerCore.clearBackOff = function () {
                    if (this._currentBackoffCount > 0) {
                        this._currentBackoffCount = 0;
                        this.clearTimeout();
                        this.scheduleTimer();
                    }
                };
                /**
                 * Resets the transmit profiles to the default profiles of Real Time, Near Real Time
                 * and Best Effort. This removes all the custom profiles that were loaded.
                 */
                AWTTransmissionManagerCore._resetTransmitProfiles = function () {
                    this.clearTimeout();
                    this._initializeProfiles();
                    this._currentProfile = DataModels_1.AWT_REAL_TIME;
                    this.scheduleTimer();
                };
                AWTTransmissionManagerCore.clearTimeout = function () {
                    if (this._timeout > 0) {
                        clearTimeout(this._timeout);
                        this._timeout = -1;
                        this._timerCount = 0;
                    }
                };
                AWTTransmissionManagerCore._batchAndSendEvents = function () {
                    var priority = Enums_1.AWTEventPriority.High;
                    this._timerCount++;
                    if (this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][0]) {
                        priority = Enums_1.AWTEventPriority.Low;
                        this._timerCount = 0;
                    }
                    else if (this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][1]) {
                        priority = Enums_1.AWTEventPriority.Normal;
                    }
                    this._eventHandler.sendEventsForPriorityAndAbove(priority);
                    this._timeout = -1;
                    this.scheduleTimer();
                };
                AWTTransmissionManagerCore._initializeProfiles = function () {
                    this._profiles = {};
                    this._profiles[DataModels_1.AWT_REAL_TIME] = [4, 2, 1];
                    this._profiles[DataModels_1.AWT_NEAR_REAL_TIME] = [12, 6, 3];
                    this._profiles[DataModels_1.AWT_BEST_EFFORT] = [36, 18, 9];
                };
                AWTTransmissionManagerCore._newEventsAllowed = false;
                AWTTransmissionManagerCore._currentProfile = DataModels_1.AWT_REAL_TIME;
                AWTTransmissionManagerCore._timeout = -1;
                AWTTransmissionManagerCore._currentBackoffCount = 0;
                AWTTransmissionManagerCore._paused = false;
                AWTTransmissionManagerCore._timerCount = 0;
                AWTTransmissionManagerCore._lastUploadNowCall = 0;
                return AWTTransmissionManagerCore;
            }());
            exports.default = AWTTransmissionManagerCore;
            /***/ 
        }),
        /* 4 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            /**
            * microsoft.bond.primitives.ts
            * Copyright: Microsoft 2016
            */
            Object.defineProperty(exports, "__esModule", { value: true });
            var Int64 = (function () {
                function Int64(numberStr) {
                    this.low = 0;
                    this.high = 0;
                    this.low = parseInt(numberStr, 10);
                    if (this.low < 0) {
                        this.high = -1;
                    }
                }
                Int64.prototype._Equals = function (numberStr) {
                    var tmp = new Int64(numberStr);
                    return this.low === tmp.low && this.high === tmp.high;
                };
                return Int64;
            }());
            exports.Int64 = Int64;
            var UInt64 = (function () {
                function UInt64(numberStr) {
                    this.low = 0;
                    this.high = 0;
                    this.low = parseInt(numberStr, 10);
                }
                UInt64.prototype._Equals = function (numberStr) {
                    var tmp = new UInt64(numberStr);
                    return this.low === tmp.low && this.high === tmp.high;
                };
                return UInt64;
            }());
            exports.UInt64 = UInt64;
            var Number = (function () {
                function Number() {
                }
                Number._ToByte = function (value) {
                    return this._ToUInt8(value);
                };
                Number._ToUInt8 = function (value) {
                    return value & 0xff;
                };
                Number._ToInt32 = function (value) {
                    var signMask = (value & 0x80000000);
                    return (value & 0x7fffffff) | signMask;
                };
                Number._ToUInt32 = function (value) {
                    return value & 0xffffffff;
                };
                return Number;
            }());
            exports.Number = Number;
            /***/ 
        }),
        /* 5 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTEventProperties.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2018
            */
            var Utils = __webpack_require__(1);
            var Enums_1 = __webpack_require__(0);
            /**
            * The AWTEventProperties class is used for creating an event.
            */
            var AWTEventProperties = (function () {
                /**
                 * The AWTEventProperties class constructor.
                 * @constructor
                 * @param {string} - [Optional] The name of the event.
                 */
                function AWTEventProperties(name) {
                    this._event = { name: '', properties: {} };
                    if (name) {
                        this.setName(name);
                    }
                }
                /**
                 * Sets the name of the event.
                 * @param {string} name - The name of the event.
                 */
                AWTEventProperties.prototype.setName = function (name) {
                    this._event.name = name;
                };
                /**
                 * Gets the name of the event.
                 * @return {string|undefined} - The name of the event, or undefined if the name has not been set.
                 */
                AWTEventProperties.prototype.getName = function () {
                    return this._event.name;
                };
                /**
                 * Sets the base type of the event.
                 * @param {string} type - The base type of the event.
                 */
                AWTEventProperties.prototype.setType = function (type) {
                    this._event.type = type;
                };
                /**
                 * Gets the base type of the event.
                 * @return {string|undefined} The base type of the event, or undefined if the base type has not been set.
                 */
                AWTEventProperties.prototype.getType = function () {
                    return this._event.type;
                };
                /**
                 * Sets the timestamp for the event.
                 * @param {number} timestampInEpochMillis - The timestamp (in milliseconds) since UNIX Epoch.
                 */
                AWTEventProperties.prototype.setTimestamp = function (timestampInEpochMillis) {
                    this._event.timestamp = timestampInEpochMillis;
                };
                /**
                 * Gets the timestamp for the event.
                 * @return {number|undefined} The timestamp for the event, or undefined if it has not been set.
                 */
                AWTEventProperties.prototype.getTimestamp = function () {
                    return this._event.timestamp;
                };
                /**
                 * Sets the priority for sending the event. The default priority
                 * of the event is Normal.
                 * @param {enum} priority - An AWTEventPriority enumeration value that specifies the priority of the event.
                 */
                AWTEventProperties.prototype.setEventPriority = function (priority) {
                    this._event.priority = priority;
                };
                /**
                 * Gets the priority for the event.
                 * @return {AWTEventPriority} - An AWTEventPriority enumeration value that specifies the priority of the event.
                 */
                AWTEventProperties.prototype.getEventPriority = function () {
                    return this._event.priority;
                };
                /**
                 * Sets a property with a name and value. Optionally sets the property type.
                 * @param {string} name                      - The name of the property.
                 * @param {string|number|boolean|Date} value - The property's value.
                 * @param {enum} type                        - [Optional] One of the AWTPropertyType enumeration values that specifies
                 * the type for the property.
                 */
                AWTEventProperties.prototype.setProperty = function (name, value, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    var property = { value: value, type: type, pii: Enums_1.AWTPiiKind.NotSet, cc: Enums_1.AWTCustomerContentKind.NotSet };
                    property = Utils.sanitizeProperty(name, property);
                    if (property === null) {
                        delete this._event.properties[name];
                        return;
                    }
                    this._event.properties[name] = property;
                };
                /**
                 * Sets a property with a name, a value, and a PII. Optionally sets the property type.
                 * @param {string} name                      - The name of the property.
                 * @param {string|number|boolean|Date} value - The property's value.
                 * @param {enum} pii                         - The kind of PII for the property.
                 * @param {enum} type                        - [Optional] One of the AWTPropertyType enumeration values that specifies
                 * the type for the property.
                 */
                AWTEventProperties.prototype.setPropertyWithPii = function (name, value, pii, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    var property = { value: value, type: type, pii: pii, cc: Enums_1.AWTCustomerContentKind.NotSet };
                    property = Utils.sanitizeProperty(name, property);
                    if (property === null) {
                        delete this._event.properties[name];
                        return;
                    }
                    this._event.properties[name] = property;
                };
                /**
                 * Sets a property with name, value and customer content. Optionally set the property type of the value.
                 * @param {string} name                      - The name of the property.
                 * @param {string|number|boolean|Date} value - The property's value.
                 * @param {enum} customerContent             - The customer content kind for the property.
                 * @param {enum} type                        - [Optional] One of the AWTPropertyType enumeration values that specifies
                 * the type for the property.
                 */
                AWTEventProperties.prototype.setPropertyWithCustomerContent = function (name, value, customerContent, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    var property = { value: value, type: type, pii: Enums_1.AWTPiiKind.NotSet, cc: customerContent };
                    property = Utils.sanitizeProperty(name, property);
                    if (property === null) {
                        delete this._event.properties[name];
                        return;
                    }
                    this._event.properties[name] = property;
                };
                /**
                 * Gets the properties currently added to the event.
                 * @return {object} A Map<string, AWTEventProperty> containing the current properties.
                 */
                AWTEventProperties.prototype.getPropertyMap = function () {
                    return this._event.properties;
                };
                /**
                 * Gets the event from this event properties object.
                 * @return {object} The event properties compiled into AWTEventData.
                 */
                AWTEventProperties.prototype.getEvent = function () {
                    return this._event;
                };
                return AWTEventProperties;
            }());
            exports.default = AWTEventProperties;
            /***/ 
        }),
        /* 6 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * Enums.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            * File containing the enums.
            */
            /**
             * The AWTUserIdType enumeration contains a set of values that specify the type of user ID.
             * @enum {number}
             */
            var AWTUserIdType;
            (function (AWTUserIdType) {
                /**
                 * The user ID type is unknown.
                 */
                AWTUserIdType[AWTUserIdType["Unknown"] = 0] = "Unknown";
                /**
                 * Microsoft Account ID.
                 */
                AWTUserIdType[AWTUserIdType["MSACID"] = 1] = "MSACID";
                /**
                 * Microsoft .NET Passport Unique ID.
                 */
                AWTUserIdType[AWTUserIdType["MSAPUID"] = 2] = "MSAPUID";
                /**
                 * Anonymous user ID.
                 */
                AWTUserIdType[AWTUserIdType["ANID"] = 3] = "ANID";
                /**
                 * Organization customer ID.
                 */
                AWTUserIdType[AWTUserIdType["OrgIdCID"] = 4] = "OrgIdCID";
                /**
                 * Microsoft Exchange Passport ID.
                 */
                AWTUserIdType[AWTUserIdType["OrgIdPUID"] = 5] = "OrgIdPUID";
                /**
                 * User object ID.
                 */
                AWTUserIdType[AWTUserIdType["UserObjectId"] = 6] = "UserObjectId";
                /**
                 * Skype ID.
                 */
                AWTUserIdType[AWTUserIdType["Skype"] = 7] = "Skype";
                /**
                 * Yammer ID.
                 */
                AWTUserIdType[AWTUserIdType["Yammer"] = 8] = "Yammer";
                /**
                 * E-mail address.
                 */
                AWTUserIdType[AWTUserIdType["EmailAddress"] = 9] = "EmailAddress";
                /**
                 * Telephone number.
                 */
                AWTUserIdType[AWTUserIdType["PhoneNumber"] = 10] = "PhoneNumber";
                /**
                 * SIP address.
                 */
                AWTUserIdType[AWTUserIdType["SipAddress"] = 11] = "SipAddress";
                /**
                 * Multiple unit identity.
                 */
                AWTUserIdType[AWTUserIdType["MUID"] = 12] = "MUID";
            })(AWTUserIdType = exports.AWTUserIdType || (exports.AWTUserIdType = {}));
            /**
             * The AWTSessionState enumeration contains a set of values that indicate the session state.
             * @enum {number}
             */
            var AWTSessionState;
            (function (AWTSessionState) {
                /**
                 * Session started.
                 */
                AWTSessionState[AWTSessionState["Started"] = 0] = "Started";
                /**
                 * Session ended.
                 */
                AWTSessionState[AWTSessionState["Ended"] = 1] = "Ended";
            })(AWTSessionState = exports.AWTSessionState || (exports.AWTSessionState = {}));
            /***/ 
        }),
        /* 7 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTAutoCollection.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2018
            */
            var Utils = __webpack_require__(1);
            var DEVICE_ID_COOKIE = 'MicrosoftApplicationsTelemetryDeviceId';
            var FIRSTLAUNCHTIME_COOKIE = 'MicrosoftApplicationsTelemetryFirstLaunchTime';
            var BROWSERS = {
                MSIE: 'MSIE',
                CHROME: 'Chrome',
                FIREFOX: 'Firefox',
                SAFARI: 'Safari',
                EDGE: 'Edge',
                ELECTRON: 'Electron',
                SKYPE_SHELL: 'SkypeShell',
                PHANTOMJS: 'PhantomJS',
                OPERA: 'Opera'
            };
            var OPERATING_SYSTEMS = {
                WINDOWS: 'Windows',
                MACOSX: 'Mac OS X',
                WINDOWS_PHONE: 'Windows Phone',
                WINDOWS_RT: 'Windows RT',
                IOS: 'iOS',
                ANDROID: 'Android',
                LINUX: 'Linux',
                CROS: 'Chrome OS',
                UNKNOWN: 'Unknown'
            };
            var OSNAMEREGEX = {
                WIN: /(windows|win32)/i,
                WINRT: / arm;/i,
                WINPHONE: /windows\sphone\s\d+\.\d+/i,
                OSX: /(macintosh|mac os x)/i,
                IOS: /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,
                LINUX: /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
                ANDROID: /android/i,
                CROS: /CrOS/i
            };
            var VERSION_MAPPINGS = {
                '5.1': 'XP',
                '6.0': 'Vista',
                '6.1': '7',
                '6.2': '8',
                '6.3': '8.1',
                '10.0': '10'
            };
            var REGEX_VERSION = '([\\d,.]+)';
            var REGEX_VERSION_MAC = '([\\d,_,.]+)';
            var UNKNOWN = 'Unknown';
            var UNDEFINED = 'undefined';
            /**
             * Class that stores semantic properties.
             */
            var AWTAutoCollection = (function () {
                function AWTAutoCollection() {
                }
                /**
                 * Add a property storage override to override the usage of document.cookie to store
                 * properties. The property storage object should implement both getProperty and setProperty, otherwise
                 * it will be rejected.
                 * @param {object} propertyStorage - Property storage object which is used for storing SDK properties.
                 * @return {boolean} True if the property storage override was accepted, false otherwise.
                 */
                AWTAutoCollection.addPropertyStorageOverride = function (propertyStorage) {
                    if (propertyStorage) {
                        this._propertyStorage = propertyStorage;
                        return true;
                    }
                    return false;
                };
                /**
                 * Auto collect semantic context properties.
                 * @param {object} semantContext   - The semantic context to use to set auto collected information.
                 * @param {boolean} disableCookies - Determines if setting cookies is disabled.
                 * @param {object} userAgent       - UserAgent string to be used for auto collection of semantic properties.
                 */
                AWTAutoCollection.autoCollect = function (semanticContext, disableCookies, userAgent) {
                    this._semanticContext = semanticContext;
                    this._disableCookies = disableCookies;
                    this._autoCollect();
                    if (!userAgent && typeof navigator !== UNDEFINED) {
                        userAgent = navigator.userAgent || '';
                    }
                    this._autoCollectFromUserAgent(userAgent);
                    if (this._disableCookies && !this._propertyStorage) {
                        this._deleteCookie(DEVICE_ID_COOKIE);
                        this._deleteCookie(FIRSTLAUNCHTIME_COOKIE);
                        return;
                    }
                    //Only collect device id if it can be stored
                    if (this._propertyStorage || (this._areCookiesAvailable && !this._disableCookies)) {
                        this._autoCollectDeviceId();
                    }
                };
                /**
                 * Checks if the device id stored is the same as the new device id. If they are not,
                 * store the new id and store a new first launch time.
                 * @param {string} deviceId - The new device id.
                 */
                AWTAutoCollection.checkAndSaveDeviceId = function (deviceId) {
                    if (deviceId) {
                        var oldDeviceId = this._getData(DEVICE_ID_COOKIE);
                        var flt = this._getData(FIRSTLAUNCHTIME_COOKIE);
                        if (oldDeviceId !== deviceId) {
                            flt = Utils.getISOString(new Date());
                        }
                        this._saveData(DEVICE_ID_COOKIE, deviceId);
                        this._saveData(FIRSTLAUNCHTIME_COOKIE, flt);
                        this._setFirstLaunchTime(flt);
                    }
                };
                /**
                 * Auto collect the device SDK Id.
                 */
                AWTAutoCollection._autoCollectDeviceId = function () {
                    var deviceId = this._getData(DEVICE_ID_COOKIE);
                    if (!deviceId) {
                        deviceId = Utils.newGuid();
                    }
                    this._semanticContext.setDeviceId(deviceId);
                };
                AWTAutoCollection._autoCollect = function () {
                    //Get app language
                    if (typeof document !== UNDEFINED && document.documentElement) {
                        this._semanticContext.setAppLanguage(document.documentElement.lang);
                    }
                    //Get user language
                    if (typeof navigator !== UNDEFINED) {
                        this._semanticContext.setUserLanguage(navigator.userLanguage || navigator.language);
                    }
                    //Get time zone
                    var timeZone = new Date().getTimezoneOffset();
                    var minutes = timeZone % 60;
                    var hours = (timeZone - minutes) / 60;
                    var timeZonePrefix = '+';
                    if (hours > 0) {
                        timeZonePrefix = '-';
                    }
                    hours = Math.abs(hours);
                    minutes = Math.abs(minutes);
                    this._semanticContext.setUserTimeZone(timeZonePrefix + (hours < 10 ? '0' + hours : hours.toString()) + ':'
                        + (minutes < 10 ? '0' + minutes : minutes.toString()));
                };
                AWTAutoCollection._autoCollectFromUserAgent = function (userAgent) {
                    if (userAgent) {
                        var browserName = this._getBrowserName(userAgent);
                        this._semanticContext.setDeviceBrowserName(browserName);
                        this._semanticContext.setDeviceBrowserVersion(this._getBrowserVersion(userAgent, browserName));
                        var osName = this._getOsName(userAgent);
                        this._semanticContext.setDeviceOsName(osName);
                        this._semanticContext.setDeviceOsVersion(this._getOsVersion(userAgent, osName));
                    }
                };
                AWTAutoCollection._getBrowserName = function (userAgent) {
                    //Check for Opera first        
                    if (this._userAgentContainsString('OPR/', userAgent)) {
                        return BROWSERS.OPERA;
                    }
                    //Check for Phantom JS
                    if (this._userAgentContainsString(BROWSERS.PHANTOMJS, userAgent)) {
                        return BROWSERS.PHANTOMJS;
                    }
                    //Check for Edge
                    if (this._userAgentContainsString(BROWSERS.EDGE, userAgent)) {
                        return BROWSERS.EDGE;
                    }
                    //Check for Electron
                    if (this._userAgentContainsString(BROWSERS.ELECTRON, userAgent)) {
                        return BROWSERS.ELECTRON;
                    }
                    //Check for Chrome
                    if (this._userAgentContainsString(BROWSERS.CHROME, userAgent)) {
                        return BROWSERS.CHROME;
                    }
                    //Check for Internet Explorer
                    if (this._userAgentContainsString('Trident', userAgent)) {
                        return BROWSERS.MSIE;
                    }
                    //Check for Firefox
                    if (this._userAgentContainsString(BROWSERS.FIREFOX, userAgent)) {
                        return BROWSERS.FIREFOX;
                    }
                    //Check for Safari
                    if (this._userAgentContainsString(BROWSERS.SAFARI, userAgent)) {
                        return BROWSERS.SAFARI;
                    }
                    //Check for Skype shell
                    if (this._userAgentContainsString(BROWSERS.SKYPE_SHELL, userAgent)) {
                        return BROWSERS.SKYPE_SHELL;
                    }
                    return UNKNOWN;
                };
                AWTAutoCollection._setFirstLaunchTime = function (flt) {
                    if (!isNaN(flt)) {
                        var fltDate = new Date();
                        fltDate.setTime(parseInt(flt, 10));
                        flt = Utils.getISOString(fltDate);
                    }
                    this.firstLaunchTime = flt;
                };
                AWTAutoCollection._userAgentContainsString = function (searchString, userAgent) {
                    return userAgent.indexOf(searchString) > -1;
                };
                AWTAutoCollection._getBrowserVersion = function (userAgent, browserName) {
                    if (browserName === BROWSERS.MSIE) {
                        return this._getIeVersion(userAgent);
                    }
                    else {
                        return this._getOtherVersion(browserName, userAgent);
                    }
                };
                AWTAutoCollection._getIeVersion = function (userAgent) {
                    var classicIeVersionMatches = userAgent.match(new RegExp(BROWSERS.MSIE + ' ' + REGEX_VERSION));
                    if (classicIeVersionMatches) {
                        return classicIeVersionMatches[1];
                    }
                    else {
                        var ieVersionMatches = userAgent.match(new RegExp('rv:' + REGEX_VERSION));
                        if (ieVersionMatches) {
                            return ieVersionMatches[1];
                        }
                    }
                };
                AWTAutoCollection._getOtherVersion = function (browserString, userAgent) {
                    if (browserString === BROWSERS.SAFARI) {
                        browserString = 'Version';
                    }
                    var matches = userAgent.match(new RegExp(browserString + '/' + REGEX_VERSION));
                    if (matches) {
                        return matches[1];
                    }
                    return UNKNOWN;
                };
                AWTAutoCollection._getOsName = function (userAgent) {
                    if (userAgent.match(OSNAMEREGEX.WINPHONE)) {
                        return OPERATING_SYSTEMS.WINDOWS_PHONE;
                    }
                    if (userAgent.match(OSNAMEREGEX.WINRT)) {
                        return OPERATING_SYSTEMS.WINDOWS_RT;
                    }
                    if (userAgent.match(OSNAMEREGEX.IOS)) {
                        return OPERATING_SYSTEMS.IOS;
                    }
                    if (userAgent.match(OSNAMEREGEX.ANDROID)) {
                        return OPERATING_SYSTEMS.ANDROID;
                    }
                    if (userAgent.match(OSNAMEREGEX.LINUX)) {
                        return OPERATING_SYSTEMS.LINUX;
                    }
                    if (userAgent.match(OSNAMEREGEX.OSX)) {
                        return OPERATING_SYSTEMS.MACOSX;
                    }
                    if (userAgent.match(OSNAMEREGEX.WIN)) {
                        return OPERATING_SYSTEMS.WINDOWS;
                    }
                    if (userAgent.match(OSNAMEREGEX.CROS)) {
                        return OPERATING_SYSTEMS.CROS;
                    }
                    return UNKNOWN;
                };
                AWTAutoCollection._getOsVersion = function (userAgent, osName) {
                    if (osName === OPERATING_SYSTEMS.WINDOWS) {
                        return this._getGenericOsVersion(userAgent, 'Windows NT');
                    }
                    if (osName === OPERATING_SYSTEMS.ANDROID) {
                        return this._getGenericOsVersion(userAgent, osName);
                    }
                    if (osName === OPERATING_SYSTEMS.MACOSX) {
                        return this._getMacOsxVersion(userAgent);
                    }
                    return UNKNOWN;
                };
                AWTAutoCollection._getGenericOsVersion = function (userAgent, osName) {
                    var ntVersionMatches = userAgent.match(new RegExp(osName + ' ' + REGEX_VERSION));
                    if (ntVersionMatches) {
                        if (VERSION_MAPPINGS[ntVersionMatches[1]]) {
                            return VERSION_MAPPINGS[ntVersionMatches[1]];
                        }
                        return ntVersionMatches[1];
                    }
                    return UNKNOWN;
                };
                AWTAutoCollection._getMacOsxVersion = function (userAgent) {
                    var macOsxVersionInUserAgentMatches = userAgent.match(new RegExp(OPERATING_SYSTEMS.MACOSX + ' ' + REGEX_VERSION_MAC));
                    if (macOsxVersionInUserAgentMatches) {
                        var versionString = macOsxVersionInUserAgentMatches[1].replace(/_/g, '.');
                        if (versionString) {
                            var delimiter = this._getDelimiter(versionString);
                            if (delimiter) {
                                var components = versionString.split(delimiter);
                                return components[0];
                            }
                            else {
                                return versionString;
                            }
                        }
                    }
                    return UNKNOWN;
                };
                AWTAutoCollection._getDelimiter = function (versionString) {
                    if (versionString.indexOf('.') > -1) {
                        return '.';
                    }
                    if (versionString.indexOf('_') > -1) {
                        return '_';
                    }
                    return null;
                };
                AWTAutoCollection._saveData = function (name, value) {
                    if (this._propertyStorage) {
                        this._propertyStorage.setProperty(name, value);
                    }
                    else if (this._areCookiesAvailable) {
                        //Expires in 365 days
                        var date = new Date();
                        date.setTime(date.getTime() + 31536000000 /*365 days in milliseconds*/);
                        var expires = 'expires=' + date.toUTCString();
                        document.cookie = name + '=' + value + '; ' + expires;
                    }
                };
                AWTAutoCollection._getData = function (name) {
                    if (this._propertyStorage) {
                        return this._propertyStorage.getProperty(name) || '';
                    }
                    else if (this._areCookiesAvailable) {
                        name = name + '=';
                        var ca = document.cookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            var j = 0;
                            while (c.charAt(j) === ' ') {
                                j++;
                            }
                            c = c.substring(j);
                            if (c.indexOf(name) === 0) {
                                return c.substring(name.length, c.length);
                            }
                        }
                    }
                    return '';
                };
                AWTAutoCollection._deleteCookie = function (name) {
                    if (this._areCookiesAvailable) {
                        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    }
                };
                AWTAutoCollection._disableCookies = false;
                AWTAutoCollection._areCookiesAvailable = typeof document !== UNDEFINED && typeof document.cookie !== UNDEFINED;
                return AWTAutoCollection;
            }());
            exports.default = AWTAutoCollection;
            /***/ 
        }),
        /* 8 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var AWTAutoCollection_1 = __webpack_require__(7);
            var Enums_1 = __webpack_require__(0);
            var Enums_2 = __webpack_require__(6);
            var UI_IDTYPE = 'UserInfo.IdType';
            /**
             *  Class to allow users to set semantic context properties.
             */
            var AWTSemanticContext = (function () {
                /**
                 * @constructor
                 * @param {boolean} _allowDeviceFields - Allow setting of device semantic context.
                 * @param {object} _properties         - The event properties where to add the semantic context.
                 */
                function AWTSemanticContext(_allowDeviceFields, _properties) {
                    this._allowDeviceFields = _allowDeviceFields;
                    this._properties = _properties;
                }
                /**
                 * Sets the field AppInfo.Id with the given value.
                 * @param {string} appId  - The Id uniquely identifies the App from this this event originated.
                 * In the multi-tenant Aria Platform, this is the Application Id of the
                 * registered Application. Example, "735d47645f7c4de69964e2c01888d6b6".
                 */
                AWTSemanticContext.prototype.setAppId = function (appId) {
                    this._addContext('AppInfo.Id', appId);
                };
                /**
                 * Sets the field AppInfo.Version with the given value.
                 * @param {string} appVersion  - The version of the App, retrieved programmatically where possible. This
                 * is app/platform dependent. Examples such as "7.0.0.100" for Skype,
                 * or "12.0.30723.00 Update 3" for Microsoft Visual Studio Ultimate 2013
                 */
                AWTSemanticContext.prototype.setAppVersion = function (appVersion) {
                    this._addContext('AppInfo.Version', appVersion);
                };
                /**
                 * Sets the field AppInfo.Language with the given value.
                 * @param {string} appLanguage  - Language of the App in IETF language tag format, as described in RFC 4646.
                 * Examples of acceptable values include "en", "pt-BR" and "zh-Hant-CN".
                 */
                AWTSemanticContext.prototype.setAppLanguage = function (appLanguage) {
                    this._addContext('AppInfo.Language', appLanguage);
                };
                /**
                 * Sets the field DeviceInfo.Id with the given value.
                 * @param {string} deviceId  - The device Id uniquely identifies the physical device, using platform
                 * available API's. This allows correlation against Aria Hardware Inventory.
                 */
                AWTSemanticContext.prototype.setDeviceId = function (deviceId) {
                    if (this._allowDeviceFields) {
                        AWTAutoCollection_1.default.checkAndSaveDeviceId(deviceId);
                        this._addContext('DeviceInfo.Id', deviceId);
                    }
                };
                /**
                 * Sets the field DeviceInfo.OsName with the given value.
                 * @param {string} deviceOsName  - The name of the OS. The SDK should ensure this is a limited normalized
                 * set. Asimov is using very high level value e.g. Windows/Android/iOS.
                 * Examples such as "iOS" or "Windows Phone".
                 */
                AWTSemanticContext.prototype.setDeviceOsName = function (deviceOsName) {
                    if (this._allowDeviceFields) {
                        this._addContext('DeviceInfo.OsName', deviceOsName);
                    }
                };
                /**
                 * Sets the field DeviceInfo.OsVersion with the given value.
                 * @param {string} deviceOsVersion  - The version of the OS, retrieved programmatically, which can be used
                 * for aggregation or filtering for scenarios like real time monitoring
                 * or metrics reporting. Flurry and GA provide aggregation at this level.
                 * Examples such as "8.1.2" for iOS, or "8.1" for Windows Phone.
                 */
                AWTSemanticContext.prototype.setDeviceOsVersion = function (deviceOsVersion) {
                    if (this._allowDeviceFields) {
                        this._addContext('DeviceInfo.OsVersion', deviceOsVersion);
                    }
                };
                /**
                 * Sets the field DeviceInfo.Id with the given value.
                 * @param {string} deviceBrowserName  - he name of the OS. The SDK should ensure this is a limited normalized set.
                 * Examples such as "Chrome" or "Edge".
                 */
                AWTSemanticContext.prototype.setDeviceBrowserName = function (deviceBrowserName) {
                    if (this._allowDeviceFields) {
                        this._addContext('DeviceInfo.BrowserName', deviceBrowserName);
                    }
                };
                /**
                 * Sets the field DeviceInfo.Id with the given value.
                 * @param {string} deviceBrowserVersion  - The version of the browser, retrieved programmatically, which can be used
                 * for aggregation or filtering for scenarios like real time monitoring or metrics reporting.
                 * Examples such as "57.0.2987.133" for Chrome, or "15.15063" for Edge.
                 */
                AWTSemanticContext.prototype.setDeviceBrowserVersion = function (deviceBrowserVersion) {
                    if (this._allowDeviceFields) {
                        this._addContext('DeviceInfo.BrowserVersion', deviceBrowserVersion);
                    }
                };
                /**
                 * Set the device manufacturer context information of telemetry event.
                 * Can only be set at the LogManager level. Setting it via the object obtained from ILogger
                 * will be no-op.
                 * @param {string} deviceMake The manufacturer of the device, retrieved
                 *            programmatically where possible and is app/platform specific
                 */
                AWTSemanticContext.prototype.setDeviceMake = function (deviceMake) {
                    if (this._allowDeviceFields) {
                        this._addContext('DeviceInfo.Make', deviceMake);
                    }
                };
                /**
                 * Set the device model context information of telemetry event.
                 * Can only be set at the LogManager level. Setting it via the object obtained from ILogger
                 * will be no-op.
                 * @param {string} deviceModel The model of the device, retrieved programmatically
                 *            where possible and is app/platform specific
                 */
                AWTSemanticContext.prototype.setDeviceModel = function (deviceModel) {
                    if (this._allowDeviceFields) {
                        this._addContext('DeviceInfo.Model', deviceModel);
                    }
                };
                /**
                 * Sets the field UserInfo.Id with the given value.
                 * @param {string} userId     - The id uniquely identifies the user in an application-specific
                 * user namespace, such as a Skype ID in the Skype App. This may be empty for Apps
                 * which do not require user sign-in.
                 * @param {enum} pii        - Optional pii type for the user id.
                 * @param {enum} userIdType - Optional id type for the user id.
                 */
                AWTSemanticContext.prototype.setUserId = function (userId, pii, userIdType) {
                    if (!isNaN(userIdType) && userIdType !== null && userIdType >= 0 && userIdType <= 12) {
                        this._addContext(UI_IDTYPE, userIdType.toString());
                    }
                    else {
                        var inferredUserIdType = void 0;
                        switch (pii) {
                            case Enums_1.AWTPiiKind.SipAddress:
                                inferredUserIdType = Enums_2.AWTUserIdType.SipAddress;
                                break;
                            case Enums_1.AWTPiiKind.PhoneNumber:
                                inferredUserIdType = Enums_2.AWTUserIdType.PhoneNumber;
                                break;
                            case Enums_1.AWTPiiKind.SmtpAddress:
                                inferredUserIdType = Enums_2.AWTUserIdType.EmailAddress;
                                break;
                            default:
                                inferredUserIdType = Enums_2.AWTUserIdType.Unknown;
                                break;
                        }
                        this._addContext(UI_IDTYPE, inferredUserIdType.toString());
                    }
                    if (isNaN(pii) || pii === null || pii === Enums_1.AWTPiiKind.NotSet || pii > 13) {
                        switch (userIdType) {
                            case Enums_2.AWTUserIdType.Skype:
                                pii = Enums_1.AWTPiiKind.Identity;
                                break;
                            case Enums_2.AWTUserIdType.EmailAddress:
                                pii = Enums_1.AWTPiiKind.SmtpAddress;
                                break;
                            case Enums_2.AWTUserIdType.PhoneNumber:
                                pii = Enums_1.AWTPiiKind.PhoneNumber;
                                break;
                            case Enums_2.AWTUserIdType.SipAddress:
                                pii = Enums_1.AWTPiiKind.SipAddress;
                                break;
                            default:
                                pii = Enums_1.AWTPiiKind.NotSet;
                                break;
                        }
                    }
                    this._addContextWithPii('UserInfo.Id', userId, pii);
                };
                /**
                 * Sets the field UserInfo.AdvertisingId with the given value.
                 * @param {string} userAdvertisingId  - The AdvertisingId is the user-specific device id obtainable through
                 * platform API's. This may not be available if users choose to opt-out
                 * of this id, or if the underlying platform does not support it.
                 */
                AWTSemanticContext.prototype.setUserAdvertisingId = function (userAdvertisingId) {
                    this._addContext('UserInfo.AdvertisingId', userAdvertisingId);
                };
                /**
                 * Sets the field UserInfo.TimeZone with the given value.
                 * @param {string} userTimeZone  - The user's time zone relative to UTC, in ISO 8601 time zone format.
                 * Examples of acceptable values include "+00", "+07:00", and "-1130".
                 */
                AWTSemanticContext.prototype.setUserTimeZone = function (userTimeZone) {
                    this._addContext('UserInfo.TimeZone', userTimeZone);
                };
                /**
                 * Sets the field UserInfo.Language with the given value.
                 * @param {string} userLanguage  - The user's language in IETF language tag format, as described in RFC 4646.
                 * Examples of acceptable values include "en", "pt-BR" and "zh-Hant-CN".
                 */
                AWTSemanticContext.prototype.setUserLanguage = function (userLanguage) {
                    this._addContext('UserInfo.Language', userLanguage);
                };
                AWTSemanticContext.prototype._addContext = function (key, value) {
                    if (typeof value === 'string') {
                        this._properties.setProperty(key, value);
                    }
                };
                AWTSemanticContext.prototype._addContextWithPii = function (key, value, pii) {
                    if (typeof value === 'string') {
                        this._properties.setPropertyWithPii(key, value, pii);
                    }
                };
                return AWTSemanticContext;
            }());
            exports.default = AWTSemanticContext;
            /***/ 
        }),
        /* 9 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTSerializer.ts
            * @author Brent Erickson (brericks) and Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            */
            var Bond = __webpack_require__(21);
            var Enums_1 = __webpack_require__(0);
            var AWTNotificationManager_1 = __webpack_require__(2);
            var Utils = __webpack_require__(1);
            var RequestSizeLimitBytes = 2936012; //approx 2.8 Mb
            /**
            * Class to handle serialization of event and request.
            * Currently uses Bond for serialization. Please note that this may be subject to change.
            */
            var AWTSerializer = (function () {
                function AWTSerializer() {
                }
                /**
                 * Serialies a request using Bond.
                 * @param {object} requestDictionary - A dictionary containing the token to event mapping.
                 * @param {number} tokenCount        - Number of tenant tokens to be sent in the request.
                 * @return {number[]} The serialized bond request.
                 */
                AWTSerializer.getPayloadBlob = function (requestDictionary, tokenCount) {
                    var requestFull = false;
                    var remainingRequest;
                    var stream = new Bond.IO.MemoryStream();
                    var writer = new Bond.CompactBinaryProtocolWriter(stream);
                    //Write TokenToDataPackagesMap
                    writer._WriteFieldBegin(Bond._BondDataType._BT_MAP, 3, null);
                    writer._WriteMapContainerBegin(tokenCount, Bond._BondDataType._BT_STRING, Bond._BondDataType._BT_LIST);
                    for (var token in requestDictionary) {
                        if (!requestFull) {
                            if (requestDictionary.hasOwnProperty(token)) {
                                //write token
                                writer._WriteString(token);
                                var dataPackage = requestDictionary[token];
                                // Write list of DataPackages
                                writer._WriteContainerBegin(1, Bond._BondDataType._BT_STRUCT);
                                // Source
                                writer._WriteFieldBegin(Bond._BondDataType._BT_STRING, 2, null);
                                writer._WriteString('act_default_source');
                                // DataPackageId
                                writer._WriteFieldBegin(Bond._BondDataType._BT_STRING, 5, null);
                                writer._WriteString(Utils.newGuid());
                                // Timestamp
                                writer._WriteFieldBegin(Bond._BondDataType._BT_INT64, 6, null);
                                writer._WriteInt64(Utils.numberToBondInt64(Date.now()));
                                // Records
                                writer._WriteFieldBegin(Bond._BondDataType._BT_LIST, 8, null);
                                //Advance position by 1 for the elementy type which is always struct
                                var dpSizePos = stream._GetBuffer().length + 1;
                                writer._WriteContainerBegin(requestDictionary[token].length, Bond._BondDataType._BT_STRUCT);
                                var dpSizeSerialized = stream._GetBuffer().length - dpSizePos;
                                for (var i = 0; i < dataPackage.length; ++i) {
                                    var currentStreamPos = stream._GetBuffer().length;
                                    this.writeEvent(dataPackage[i], writer);
                                    if (stream._GetBuffer().length - currentStreamPos > RequestSizeLimitBytes) {
                                        //single event too big
                                        AWTNotificationManager_1.default.eventsRejected([dataPackage[i]], Enums_1.AWTEventsRejectedReason.SizeLimitExceeded);
                                        //move i one place back so that we can evaluate the next element once we delete the current element at pos i
                                        dataPackage.splice(i--, 1);
                                        stream._GetBuffer().splice(currentStreamPos);
                                        //Bond serialization to change the datapackage length since we couldnt send this event
                                        this._addNewDataPackageSize(dataPackage.length, stream, dpSizeSerialized, dpSizePos);
                                        continue;
                                    }
                                    if (stream._GetBuffer().length > RequestSizeLimitBytes) {
                                        //Adding this event exceeded the max request size. We should rever this event and send the serialized request.
                                        //The remaining events should be returned to send in a separate request.
                                        stream._GetBuffer().splice(currentStreamPos);
                                        if (!remainingRequest) {
                                            remainingRequest = {};
                                        }
                                        requestDictionary[token] = dataPackage.splice(0, i);
                                        remainingRequest[token] = dataPackage;
                                        this._addNewDataPackageSize(requestDictionary[token].length, stream, dpSizeSerialized, dpSizePos);
                                        requestFull = true;
                                        break;
                                    }
                                }
                                writer._WriteStructEnd(false);
                            }
                        }
                        else {
                            if (!remainingRequest) {
                                remainingRequest = {};
                            }
                            remainingRequest[token] = requestDictionary[token];
                            delete requestDictionary[token];
                        }
                    }
                    // End ClientCollector
                    writer._WriteStructEnd(false);
                    return { payloadBlob: stream._GetBuffer(), remainingRequest: remainingRequest };
                };
                AWTSerializer._addNewDataPackageSize = function (size, stream, oldDpSize, streamPos) {
                    //Bond serialization to change the datapackage length since we couldnt send everything
                    var newRecordCountSerialized = Bond._Encoding._Varint_GetBytes(Bond.Number._ToUInt32(size));
                    for (var j = 0; j < oldDpSize; ++j) {
                        if (j < newRecordCountSerialized.length) {
                            stream._GetBuffer()[streamPos + j] = newRecordCountSerialized[j];
                        }
                        else {
                            stream._GetBuffer().slice(streamPos + j, oldDpSize - j);
                            break;
                        }
                    }
                };
                /**
                 * Bond serialize the event.
                 * @param {object} eventData - The event that needs to be serialized.
                 * @return {number[]} The serialized bond event.
                 */
                AWTSerializer.writeEvent = function (eventData, writer) {
                    // ID
                    writer._WriteFieldBegin(Bond._BondDataType._BT_STRING, 1, null);
                    writer._WriteString(eventData.id);
                    // Timestamp
                    writer._WriteFieldBegin(Bond._BondDataType._BT_INT64, 3, null);
                    writer._WriteInt64(Utils.numberToBondInt64(eventData.timestamp));
                    // Type
                    writer._WriteFieldBegin(Bond._BondDataType._BT_STRING, 5, null);
                    writer._WriteString(eventData.type);
                    // Event Type
                    writer._WriteFieldBegin(Bond._BondDataType._BT_STRING, 6, null);
                    writer._WriteString(eventData.name);
                    var propsString = {};
                    var propStringCount = 0;
                    var propsInt64 = {};
                    var propInt64Count = 0;
                    var propsDouble = {};
                    var propDoubleCount = 0;
                    var propsBool = {};
                    var propBoolCount = 0;
                    var propsDate = {};
                    var propDateCount = 0;
                    var piiProps = {};
                    var piiPropCount = 0;
                    var ccProps = {};
                    var ccPropCount = 0;
                    // Iterate across event data properties and separate based on pii
                    for (var key in eventData.properties) {
                        if (eventData.properties.hasOwnProperty(key)) {
                            var property = eventData.properties[key];
                            if (property.cc > 0) {
                                ccProps[key] = property;
                                ccPropCount++;
                            }
                            else if (property.pii > 0) {
                                piiProps[key] = property;
                                piiPropCount++;
                            }
                            else {
                                switch (property.type) {
                                    case Enums_1.AWTPropertyType.String:
                                        propsString[key] = property.value;
                                        propStringCount++;
                                        break;
                                    case Enums_1.AWTPropertyType.Int64:
                                        propsInt64[key] = property.value;
                                        propInt64Count++;
                                        break;
                                    case Enums_1.AWTPropertyType.Double:
                                        propsDouble[key] = property.value;
                                        propDoubleCount++;
                                        break;
                                    case Enums_1.AWTPropertyType.Boolean:
                                        propsBool[key] = property.value;
                                        propBoolCount++;
                                        break;
                                    case Enums_1.AWTPropertyType.Date:
                                        propsDate[key] = property.value;
                                        propDateCount++;
                                        break;
                                }
                            }
                        }
                    }
                    //Extension map
                    if (propStringCount) {
                        writer._WriteFieldBegin(Bond._BondDataType._BT_MAP, 13, null);
                        writer._WriteMapContainerBegin(propStringCount, Bond._BondDataType._BT_STRING, Bond._BondDataType._BT_STRING);
                        for (var key in propsString) {
                            if (propsString.hasOwnProperty(key)) {
                                var value = propsString[key];
                                writer._WriteString(key);
                                writer._WriteString(value.toString());
                            }
                        }
                    }
                    // Pii
                    if (piiPropCount) {
                        writer._WriteFieldBegin(Bond._BondDataType._BT_MAP, 30, null);
                        writer._WriteMapContainerBegin(piiPropCount, Bond._BondDataType._BT_STRING, Bond._BondDataType._BT_STRUCT);
                        for (var key in piiProps) {
                            if (piiProps.hasOwnProperty(key)) {
                                var property = piiProps[key];
                                writer._WriteString(key);
                                // PII Data
                                // O365 scrubber type
                                writer._WriteFieldBegin(Bond._BondDataType._BT_INT32, 1, null);
                                writer._WriteInt32(1);
                                // PII Kind
                                writer._WriteFieldBegin(Bond._BondDataType._BT_INT32, 2, null);
                                writer._WriteInt32(property.pii);
                                // Value
                                writer._WriteFieldBegin(Bond._BondDataType._BT_STRING, 3, null);
                                writer._WriteString(property.value.toString());
                                writer._WriteStructEnd(false);
                            }
                        }
                    }
                    // TypedExtensionBoolean map
                    if (propBoolCount) {
                        writer._WriteFieldBegin(Bond._BondDataType._BT_MAP, 31, null);
                        writer._WriteMapContainerBegin(propBoolCount, Bond._BondDataType._BT_STRING, Bond._BondDataType._BT_BOOL);
                        for (var key in propsBool) {
                            if (propsBool.hasOwnProperty(key)) {
                                var value = propsBool[key];
                                writer._WriteString(key);
                                writer._WriteBool(value);
                            }
                        }
                    }
                    //TypedExtensionDateTime map
                    if (propDateCount) {
                        writer._WriteFieldBegin(Bond._BondDataType._BT_MAP, 32, null);
                        writer._WriteMapContainerBegin(propDateCount, Bond._BondDataType._BT_STRING, Bond._BondDataType._BT_INT64);
                        for (var key in propsDate) {
                            if (propsDate.hasOwnProperty(key)) {
                                var value = propsDate[key];
                                writer._WriteString(key);
                                writer._WriteInt64(Utils.numberToBondInt64(value));
                            }
                        }
                    }
                    //TypedExtensionInt64 map
                    if (propInt64Count) {
                        writer._WriteFieldBegin(Bond._BondDataType._BT_MAP, 33, null);
                        writer._WriteMapContainerBegin(propInt64Count, Bond._BondDataType._BT_STRING, Bond._BondDataType._BT_INT64);
                        for (var key in propsInt64) {
                            if (propsInt64.hasOwnProperty(key)) {
                                var value = propsInt64[key];
                                writer._WriteString(key);
                                writer._WriteInt64(Utils.numberToBondInt64(value));
                            }
                        }
                    }
                    //TypedExtensionDouble map
                    if (propDoubleCount) {
                        writer._WriteFieldBegin(Bond._BondDataType._BT_MAP, 34, null);
                        writer._WriteMapContainerBegin(propDoubleCount, Bond._BondDataType._BT_STRING, Bond._BondDataType._BT_DOUBLE);
                        for (var key in propsDouble) {
                            if (propsDouble.hasOwnProperty(key)) {
                                var value = propsDouble[key];
                                writer._WriteString(key);
                                writer._WriteDouble(value);
                            }
                        }
                    }
                    //CustomerContentExtensions map
                    if (ccPropCount) {
                        writer._WriteFieldBegin(Bond._BondDataType._BT_MAP, 36, null);
                        writer._WriteMapContainerBegin(ccPropCount, Bond._BondDataType._BT_STRING, Bond._BondDataType._BT_STRUCT);
                        for (var key in ccProps) {
                            if (ccProps.hasOwnProperty(key)) {
                                var property = ccProps[key];
                                writer._WriteString(key);
                                // CustomerContent Data
                                // CustomerContentKind
                                writer._WriteFieldBegin(Bond._BondDataType._BT_INT32, 1, null);
                                writer._WriteInt32(property.cc);
                                // RawContent
                                writer._WriteFieldBegin(Bond._BondDataType._BT_STRING, 2, null);
                                writer._WriteString(property.value.toString());
                                writer._WriteStructEnd(false);
                            }
                        }
                    }
                    writer._WriteStructEnd(false);
                };
                /**
                 * Base64 encode the given number[].
                 * @param {number[]} data - The data to be base64 encoded.
                 * @return {string} The base64 encoded data.
                 */
                AWTSerializer.base64Encode = function (data) {
                    return Bond._Encoding._Base64_GetString(data);
                };
                return AWTSerializer;
            }());
            exports.default = AWTSerializer;
            /***/ 
        }),
        /* 10 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTStatsManager.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            */
            var Utils = __webpack_require__(1);
            var AWTNotificationManager_1 = __webpack_require__(2);
            var Enums_1 = __webpack_require__(0);
            var StatsTimer = 60000;
            /**
            * Class that manages the stats.
            */
            var AWTStatsManager = (function () {
                function AWTStatsManager() {
                }
                /**
                 * Intiailizes the stats collection.
                 * @param {function} sendStats - The function to call when the stats are ready to be sent.
                 */
                AWTStatsManager.initialize = function (sendStats) {
                    var _this = this;
                    this._sendStats = sendStats;
                    this._isInitalized = true;
                    AWTNotificationManager_1.default.addNotificationListener({
                        eventsSent: function (events) {
                            _this._addStat('records_sent_count', events.length, events[0].apiKey);
                        },
                        eventsDropped: function (events, reason) {
                            switch (reason) {
                                case Enums_1.AWTEventsDroppedReason.NonRetryableStatus:
                                    _this._addStat('d_send_fail', events.length, events[0].apiKey);
                                    _this._addStat('records_dropped_count', events.length, events[0].apiKey);
                                    break;
                                case Enums_1.AWTEventsDroppedReason.QueueFull:
                                    _this._addStat('d_queue_full', events.length, events[0].apiKey);
                                    break;
                            }
                        },
                        eventsRejected: function (events, reason) {
                            switch (reason) {
                                case Enums_1.AWTEventsRejectedReason.InvalidEvent:
                                    _this._addStat('r_inv', events.length, events[0].apiKey);
                                    break;
                                case Enums_1.AWTEventsRejectedReason.KillSwitch:
                                    _this._addStat('r_kl', events.length, events[0].apiKey);
                                    break;
                                case Enums_1.AWTEventsRejectedReason.SizeLimitExceeded:
                                    _this._addStat('r_size', events.length, events[0].apiKey);
                                    break;
                            }
                            _this._addStat('r_count', events.length, events[0].apiKey);
                        },
                        eventsRetrying: null
                    });
                    setTimeout(function () { return _this.flush(); }, StatsTimer);
                };
                /**
                 * Flush the current stats and stop the stats collection.
                 */
                AWTStatsManager.teardown = function () {
                    if (this._isInitalized) {
                        this.flush();
                        this._isInitalized = false;
                    }
                };
                /**
                 * Increments the stat for event received.
                 * @param {string} apiKey - The apiKey for which the event was received
                 */
                AWTStatsManager.eventReceived = function (apiKey) {
                    AWTStatsManager._addStat('records_received_count', 1, apiKey);
                };
                /**
                 * Creates an event for each tenant token which had a stat and calls the
                 * sendStats for that token.
                 */
                AWTStatsManager.flush = function () {
                    var _this = this;
                    if (this._isInitalized) {
                        for (var tenantId in this._stats) {
                            if (this._stats.hasOwnProperty(tenantId)) {
                                this._sendStats(this._stats[tenantId], tenantId);
                            }
                        }
                        this._stats = {};
                        setTimeout(function () { return _this.flush(); }, StatsTimer);
                    }
                };
                AWTStatsManager._addStat = function (statName, value, apiKey) {
                    if (this._isInitalized && apiKey !== Utils.StatsApiKey) {
                        var tenantId = Utils.getTenantId(apiKey);
                        if (!this._stats[tenantId]) {
                            this._stats[tenantId] = {};
                        }
                        if (!this._stats[tenantId][statName]) {
                            this._stats[tenantId][statName] = value;
                        }
                        else {
                            this._stats[tenantId][statName] = this._stats[tenantId][statName] + value;
                        }
                    }
                };
                AWTStatsManager._isInitalized = false;
                AWTStatsManager._stats = {};
                return AWTStatsManager;
            }());
            exports.default = AWTStatsManager;
            /***/ 
        }),
        /* 11 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var Enums_1 = __webpack_require__(0);
            var Enums_2 = __webpack_require__(6);
            var AWTLogManagerSettings_1 = __webpack_require__(12);
            var AWTLogger_1 = __webpack_require__(13);
            var AWTTransmissionManagerCore_1 = __webpack_require__(3);
            var AWTNotificationManager_1 = __webpack_require__(2);
            var AWTAutoCollection_1 = __webpack_require__(7);
            /**
            * The AWTLogManager class manages the Aria SDK.
            */
            var AWTLogManager = (function () {
                function AWTLogManager() {
                }
                /**
                * Initializes the log manager. After this method is called, events are
                * accepted for transmission.
                * @param {string} tenantToken - A string that contains the default tenant token.
                * @param {object} config      - [Optional] Configuration settings for initialize, as an AWTLogConfiguration object.
                */
                AWTLogManager.initialize = function (tenantToken, configuration) {
                    if (configuration === void 0) {
                        configuration = {};
                    }
                    if (this._isInitialized) {
                        return;
                    }
                    this._isInitialized = true;
                    AWTLogManagerSettings_1.default.defaultTenantToken = tenantToken;
                    this._overrideValuesFromConfig(configuration);
                    if (this._config.disableCookiesUsage && !this._config.propertyStorageOverride) {
                        AWTLogManagerSettings_1.default.sessionEnabled = false;
                    }
                    AWTAutoCollection_1.default.addPropertyStorageOverride(this._config.propertyStorageOverride);
                    AWTAutoCollection_1.default.autoCollect(AWTLogManagerSettings_1.default.semanticContext, this._config.disableCookiesUsage, this._config.userAgent);
                    //Create sender
                    AWTTransmissionManagerCore_1.default.initialize(this._config);
                    AWTLogManagerSettings_1.default.loggingEnabled = true;
                    //Autolog session events for browsers
                    if (this._config.enableAutoUserSession) {
                        this.getLogger().logSession(Enums_2.AWTSessionState.Started);
                        window.addEventListener('beforeunload', this.flushAndTeardown);
                    }
                    return this.getLogger();
                };
                /**
                 * Gets the global semantic context.
                 *
                 * @return A AWTSemanticContext object, through which you can set common semantic properties.
                 */
                AWTLogManager.getSemanticContext = function () {
                    return AWTLogManagerSettings_1.default.semanticContext;
                };
                /**
                 * Asynchronously sends events currently in the queue. New events added
                 * are sent after the current flush finishes. The passed callback is
                 * called when flush finishes. <b>Note:</b> If LogManager is paused, or if
                 * flush is called again in less than 30 seconds, then flush is no-op, and
                 * the callback is not called.
                 * @param {function} callback - The function that is called when flush finishes.
                 */
                AWTLogManager.flush = function (callback) {
                    if (this._isInitialized && !this._isDestroyed) {
                        AWTTransmissionManagerCore_1.default.flush(callback);
                    }
                };
                /**
                 * Prevents new events from being added for transmission. It also batches all
                 * events currently in the queue, and creates requests for them to be sent. If
                 * HTML5 Beacons are supported, then they will be used.
                 */
                AWTLogManager.flushAndTeardown = function () {
                    if (this._isInitialized && !this._isDestroyed) {
                        if (this._config.enableAutoUserSession) {
                            this.getLogger().logSession(Enums_2.AWTSessionState.Ended);
                        }
                        AWTTransmissionManagerCore_1.default.flushAndTeardown();
                        AWTLogManagerSettings_1.default.loggingEnabled = false;
                        this._isDestroyed = true;
                    }
                };
                /**
                 * Pasues the transmission of events.
                 */
                AWTLogManager.pauseTransmission = function () {
                    if (this._isInitialized && !this._isDestroyed) {
                        AWTTransmissionManagerCore_1.default.pauseTransmission();
                    }
                };
                /**
                 * Resumes the tranmission of events.
                 */
                AWTLogManager.resumeTransmision = function () {
                    if (this._isInitialized && !this._isDestroyed) {
                        AWTTransmissionManagerCore_1.default.resumeTransmision();
                    }
                };
                /**
                 * Sets the transmit profile. This changes the transmission timers
                 * based on the transmit profile.
                 * @param {string} profileName - A string that contains the name of the transmit profile.
                 */
                AWTLogManager.setTransmitProfile = function (profileName) {
                    if (this._isInitialized && !this._isDestroyed) {
                        AWTTransmissionManagerCore_1.default.setTransmitProfile(profileName);
                    }
                };
                /**
                 * Loads custom transmission profiles. Each profile should have timers for
                 * high, normal, and low. Each profile should make sure
                 * that a each priority timer is a multiple of the priority higher than it.
                 * Setting the timer value to <i>-1</i> means the events for that priority will
                 * not be sent. Note that once a priority has been set to <i>not send</i>, then all priorities
                 * below it will also not be sent. The timers should be in the form of [low, normal, high].
                 * E.g, <i>Custom: [30,10,5]</i>.
                 * This method removes any previously loaded custom profiles.
                 * @param {object} profiles - A dictionary that contains the transmit profiles.
                 */
                AWTLogManager.loadTransmitProfiles = function (profiles) {
                    if (this._isInitialized && !this._isDestroyed) {
                        AWTTransmissionManagerCore_1.default.loadTransmitProfiles(profiles);
                    }
                };
                /**
                 * Sets the context sent with every event.
                 * @param {string} name                 - A string that contains the name of the context property.
                 * @param {string|number|boolean} value - The value of the context property.
                 * @param {enum} type                   - [Optional] The type for the context property value, as one of the
                 * AWTPropertyType enumeration values.
                 */
                AWTLogManager.setContext = function (name, value, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    AWTLogManagerSettings_1.default.logManagerContext.setProperty(name, value, type);
                };
                /**
                 * Sets the context sents with every event, and tags it as PII.
                 * @param {string} name                 - A string that contains the name of the context property.
                 * @param {string|number|boolean} value - The value of the context property.
                 * @param {enum} pii                    - The kind of PII for the context property.
                 * @param {enum} type                   - [Optional] The type for the context property value, as one of the
                 * AWTPropertyType enumeration values.
                 */
                AWTLogManager.setContextWithPii = function (name, value, pii, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    AWTLogManagerSettings_1.default.logManagerContext.setPropertyWithPii(name, value, pii, type);
                };
                /**
                 * Sets the context sent with every event from this logger, and tags it as <i>customer content</i>.
                 * @param {string} name                 - A string that contains the name of the context property.
                 * @param {string|number|boolean} value - The value of the context property.
                 * @param {enum} customerContent        - The kind of customer content for the context property, as one of the
                 * AWTCustomerContentKind enumeration values.
                 * @param {enum} type                   - [Optional] The type for the context property value, as one of the
                 * AWTPropertyType enumeration values.
                 */
                AWTLogManager.setContextWithCustomerContent = function (name, value, customerContent, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    AWTLogManagerSettings_1.default.logManagerContext.setPropertyWithCustomerContent(name, value, customerContent, type);
                };
                /**
                 * Gets the logger for the specified tenant token.
                 * @param {string} tenantToken - A string that contains the tenant token.
                 * @return An AWTLogger object which sends data with the specified tenant token. If the tenant token is
                 * undefined, or null, or empty, then undefined is returned.
                 */
                AWTLogManager.getLogger = function (tenantToken) {
                    var key = tenantToken;
                    if (!key || key === AWTLogManagerSettings_1.default.defaultTenantToken) {
                        key = '';
                    }
                    if (!this._loggers[key]) {
                        this._loggers[key] = new AWTLogger_1.default(key);
                    }
                    return this._loggers[key];
                };
                /**
                 * Adds a notification listener. The Aria SDK calls methods on the listener
                 * when an appropriate notification is raised.
                 * @param {object} listener - An AWTNotificationListener object.
                 */
                AWTLogManager.addNotificationListener = function (listener) {
                    AWTNotificationManager_1.default.addNotificationListener(listener);
                };
                /**
                 * Removes all instances of the listener.
                 * @param {object} listener - AWTNotificationListener to remove.
                 */
                AWTLogManager.removeNotificationListener = function (listener) {
                    AWTNotificationManager_1.default.removeNotificationListener(listener);
                };
                AWTLogManager._overrideValuesFromConfig = function (config) {
                    if (config.collectorUri) {
                        this._config.collectorUri = config.collectorUri;
                    }
                    if (config.cacheMemorySizeLimitInNumberOfEvents > 0) {
                        this._config.cacheMemorySizeLimitInNumberOfEvents = config.cacheMemorySizeLimitInNumberOfEvents;
                    }
                    if (config.httpXHROverride && config.httpXHROverride.sendPOST) {
                        this._config.httpXHROverride = config.httpXHROverride;
                    }
                    if (config.propertyStorageOverride && config.propertyStorageOverride.getProperty &&
                        config.propertyStorageOverride.setProperty) {
                        this._config.propertyStorageOverride = config.propertyStorageOverride;
                    }
                    if (config.userAgent) {
                        this._config.userAgent = config.userAgent;
                    }
                    if (config.disableCookiesUsage) {
                        this._config.disableCookiesUsage = config.disableCookiesUsage;
                    }
                    if (config.canSendStatEvent) {
                        this._config.canSendStatEvent = config.canSendStatEvent;
                    }
                    if (config.enableAutoUserSession && typeof window !== 'undefined' && window.addEventListener) {
                        this._config.enableAutoUserSession = config.enableAutoUserSession;
                    }
                    if (config.clockSkewRefreshDurationInMins > 0) {
                        this._config.clockSkewRefreshDurationInMins = config.clockSkewRefreshDurationInMins;
                    }
                };
                AWTLogManager._loggers = {};
                AWTLogManager._isInitialized = false;
                AWTLogManager._isDestroyed = false;
                AWTLogManager._config = {
                    collectorUri: 'https://browser.pipe.aria.microsoft.com/Collector/3.0/',
                    cacheMemorySizeLimitInNumberOfEvents: 10000,
                    disableCookiesUsage: false,
                    canSendStatEvent: function (eventName) { return true; },
                    clockSkewRefreshDurationInMins: 0
                };
                return AWTLogManager;
            }());
            exports.default = AWTLogManager;
            /***/ 
        }),
        /* 12 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTLogManagerSettings.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            */
            var AWTEventProperties_1 = __webpack_require__(5);
            var AWTSemanticContext_1 = __webpack_require__(8);
            /**
            * Class that stores LogManagers context.
            */
            var AWTLogManagerSettings = (function () {
                function AWTLogManagerSettings() {
                }
                AWTLogManagerSettings.logManagerContext = new AWTEventProperties_1.default();
                AWTLogManagerSettings.sessionEnabled = true;
                AWTLogManagerSettings.loggingEnabled = false;
                AWTLogManagerSettings.defaultTenantToken = '';
                AWTLogManagerSettings.semanticContext = new AWTSemanticContext_1.default(true, AWTLogManagerSettings.logManagerContext);
                return AWTLogManagerSettings;
            }());
            exports.default = AWTLogManagerSettings;
            /***/ 
        }),
        /* 13 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTLogger.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            */
            var Enums_1 = __webpack_require__(0);
            var Enums_2 = __webpack_require__(6);
            var AWTEventProperties_1 = __webpack_require__(5);
            var Utils = __webpack_require__(1);
            var AWTStatsManager_1 = __webpack_require__(10);
            var AWTNotificationManager_1 = __webpack_require__(2);
            var AWTTransmissionManagerCore_1 = __webpack_require__(3);
            var AWTLogManagerSettings_1 = __webpack_require__(12);
            var Version = __webpack_require__(15);
            var AWTSemanticContext_1 = __webpack_require__(8);
            var AWTAutoCollection_1 = __webpack_require__(7);
            /**
            * The AWTLogger class defines a logger.
            */
            var AWTLogger = (function () {
                /**
                 * The AWTLogger class constructor.
                 * @constructor
                 * @param {string} _apiKey - The API key (also known as application key, and tenant token).
                 */
                function AWTLogger(_apiKey) {
                    this._apiKey = _apiKey;
                    this._contextProperties = new AWTEventProperties_1.default();
                    this._semanticContext = new AWTSemanticContext_1.default(false, this._contextProperties);
                    this._sessionStartTime = 0;
                    this._createInitId();
                }
                /**
                 * Sets the context sent with every event from this logger.
                 * @param {string} name                 - The name of the context property.
                 * @param {string|number|boolean} value - The context property's value.
                 * @param {enum} type                   - [Optional] The type of context property, as one of the AWTPropertyType enumeration values.
                 */
                AWTLogger.prototype.setContext = function (name, value, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    this._contextProperties.setProperty(name, value, type);
                };
                /**
                 * Sets context that will be sent with every event from this logger, and tags it as PII.
                 * @param {string} name                 - The name of the context property.
                 * @param {string|number|boolean} value - The context property's value.
                 * @param {enum} pii                    - The kind of PII for the context property, as one of the AWTPiiKind enumeration values.
                 * @param {enum} type                   - [Optional] The type of context property, as one of the AWTPropertyType enumeration values.
                 */
                AWTLogger.prototype.setContextWithPii = function (name, value, pii, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    this._contextProperties.setPropertyWithPii(name, value, pii, type);
                };
                /**
                 * Sets the context that sent with every event from this logger, and tags it as customer content.
                 * @param {string} name                 - The name of the context property.
                 * @param {string|number|boolean} value - The context property's value.
                 * @param {enum} customerContent        - The customer content kind, as one of the AWTCustomerContentKind enumeration values.
                 * @param {enum} type                   - [Optional] The type of context property, as one of the AWTPropertyType enumeration values.
                 */
                AWTLogger.prototype.setContextWithCustomerContent = function (name, value, customerContent, type) {
                    if (type === void 0) {
                        type = Enums_1.AWTPropertyType.Unspecified;
                    }
                    this._contextProperties.setPropertyWithCustomerContent(name, value, customerContent, type);
                };
                /**
                 * Gets the logger semantic context.
                 * <b>Note:</b> Device properties are not permitted at the logger level, but you can set them
                 * at the global level using the AWTLogManager class.
                 *
                 * @return A AWTSemanticContext object that you can use to set common semantic properties.
                 */
                AWTLogger.prototype.getSemanticContext = function () {
                    return this._semanticContext;
                };
                /**
                 * Logs a custom event with the specified name and fields - to track information
                 * such as how a particular feature is used.
                 * @param {Object} event - Can be either an AWTEventProperties object or an AWTEventData object or an event name.
                 */
                AWTLogger.prototype.logEvent = function (event) {
                    if (AWTLogManagerSettings_1.default.loggingEnabled) {
                        if (!this._apiKey) {
                            this._apiKey = AWTLogManagerSettings_1.default.defaultTenantToken;
                            this._createInitId();
                        }
                        var sanitizeProperties = true;
                        if (Utils.isString(event)) {
                            event = {
                                name: event
                            };
                        }
                        else if (event instanceof AWTEventProperties_1.default) {
                            event = event.getEvent();
                            //AWTEventProperties will already sanitize properties
                            sanitizeProperties = false;
                        }
                        AWTStatsManager_1.default.eventReceived(this._apiKey);
                        AWTLogger._logEvent(AWTLogger._getInternalEvent(event, this._apiKey, sanitizeProperties), this._contextProperties);
                    }
                };
                /**
                 * Logs the session state.
                 * <b>Note:</b> Calling Logging session <i>start</i> while a session already exists will produce a no-op. Similarly, calling logging
                 * session <i>end</i> while a session does not exist will also produce a no-op.
                 * @param {enum} state         - The session's state.
                 * @param {obbject} properties - [Optional] Properties of the session event as either a AWTEventProperties object,
                 * or a AWTEventData object.
                 */
                AWTLogger.prototype.logSession = function (state, properties) {
                    if (AWTLogManagerSettings_1.default.sessionEnabled) {
                        var sessionEvent = {
                            name: 'session',
                            type: 'session',
                            properties: {}
                        };
                        AWTLogger._addPropertiesToEvent(sessionEvent, properties);
                        sessionEvent.priority = Enums_1.AWTEventPriority.High;
                        if (state === Enums_2.AWTSessionState.Started) {
                            if (this._sessionStartTime > 0) {
                                //Session start called out of order. Session start time being non zero indicates an ongoing session.
                                return;
                            }
                            this._sessionStartTime = (new Date()).getTime();
                            this._sessionId = Utils.newGuid();
                            this.setContext('Session.Id', this._sessionId);
                            sessionEvent.properties['Session.State'] = 'Started';
                        }
                        else if (state === Enums_2.AWTSessionState.Ended) {
                            if (this._sessionStartTime === 0) {
                                //Session end called out of order. Session start time being zero indicates no ongoing session.
                                return;
                            }
                            var sessionDurationSec = Math.floor(((new Date()).getTime() - this._sessionStartTime) / 1000);
                            sessionEvent.properties['Session.Id'] = this._sessionId;
                            sessionEvent.properties['Session.State'] = 'Ended';
                            sessionEvent.properties['Session.Duration'] = sessionDurationSec.toString();
                            sessionEvent.properties['Session.DurationBucket'] =
                                AWTLogger._getSessionDurationFromTime(sessionDurationSec);
                            this._sessionStartTime = 0;
                            this.setContext('Session.Id', null);
                            this._sessionId = undefined;
                        }
                        else {
                            return;
                        }
                        sessionEvent.properties['Session.FirstLaunchTime'] = AWTAutoCollection_1.default.firstLaunchTime;
                        this.logEvent(sessionEvent);
                    }
                };
                /**
                 * Gets the session ID for the ongoing session.
                 * @return {string} A string that contains the session ID for the ongoing session. Returns undefined if there is
                 * no ongoing session.
                 */
                AWTLogger.prototype.getSessionId = function () {
                    return this._sessionId;
                };
                /**
                 * Logs a failure event, such as an application exception.
                 * @param {string} signature  - A string that identifies the bucket of the failure.
                 * @param {string} detail     - A string that contains the a description of the failure.
                 * @param {string} category   - [Optional] A string that identifies the category of the failure, such as an application error,
                 * a hang, or a crash.
                 * @param {string} id         - [Optional] A string that that uniquely identifies this failure.
                 * @param {object} properties - [Optional] Properties of the failure event, as either an AWTEventProperties object or an
                 * AWTEventData object. This value can also be null.
                 */
                AWTLogger.prototype.logFailure = function (signature, detail, category, id, properties) {
                    if (!signature || !detail) {
                        return;
                    }
                    var failureEvent = {
                        name: 'failure',
                        type: 'failure',
                        properties: {}
                    };
                    AWTLogger._addPropertiesToEvent(failureEvent, properties);
                    failureEvent.properties['Failure.Signature'] = signature;
                    failureEvent.properties['Failure.Detail'] = detail;
                    if (category) {
                        failureEvent.properties['Failure.Category'] = category;
                    }
                    if (id) {
                        failureEvent.properties['Failure.Id'] = id;
                    }
                    failureEvent.priority = Enums_1.AWTEventPriority.High;
                    this.logEvent(failureEvent);
                };
                /**
                 * Logs a page view event which is normally a result of a user action on a UI page - such as search query,
                 * a content request, or a page navigation.
                 *
                 * @param {string} id          - A string that uniquely identifies this page.
                 * @param {string} pageName    - The name of the page.
                 * @param {string} category    - [Optional] A string that contains the category to which this page belongs.
                 * @param {string} uri         - [Optional] A string that contains the URI of this page.
                 * @param {string} referrerUri - [Optional] A string that contains the URI that refers to this page.
                 * @param {object} properties  - [Optional] Properties of the page view event, as an AWTEventProperties object.
                 * This value can also be null.
                 */
                AWTLogger.prototype.logPageView = function (id, pageName, category, uri, referrerUri, properties) {
                    if (!id || !pageName) {
                        return;
                    }
                    var pageViewEvent = {
                        name: 'pageview',
                        type: 'pageview',
                        properties: {}
                    };
                    AWTLogger._addPropertiesToEvent(pageViewEvent, properties);
                    pageViewEvent.properties['PageView.Id'] = id;
                    pageViewEvent.properties['PageView.Name'] = pageName;
                    if (category) {
                        pageViewEvent.properties['PageView.Category'] = category;
                    }
                    if (uri) {
                        pageViewEvent.properties['PageView.Uri'] = uri;
                    }
                    if (referrerUri) {
                        pageViewEvent.properties['PageView.ReferrerUri'] = referrerUri;
                    }
                    this.logEvent(pageViewEvent);
                };
                AWTLogger.prototype._createInitId = function () {
                    // If no init ID for this tenant token exists, create one
                    if (!AWTLogger._initIdMap[this._apiKey] && this._apiKey) {
                        AWTLogger._initIdMap[this._apiKey] = Utils.newGuid();
                    }
                };
                AWTLogger._addPropertiesToEvent = function (event, propertiesEvent) {
                    if (propertiesEvent) {
                        if (propertiesEvent instanceof AWTEventProperties_1.default) {
                            propertiesEvent = propertiesEvent.getEvent();
                        }
                        if (propertiesEvent.name) {
                            event.name = propertiesEvent.name;
                        }
                        if (propertiesEvent.priority) {
                            event.priority = propertiesEvent.priority;
                        }
                        for (var name_1 in propertiesEvent.properties) {
                            if (propertiesEvent.properties.hasOwnProperty(name_1)) {
                                event.properties[name_1] = propertiesEvent.properties[name_1];
                            }
                        }
                    }
                };
                AWTLogger._getSessionDurationFromTime = function (timeInSec) {
                    if (timeInSec < 0) {
                        return 'Undefined';
                    }
                    else if (timeInSec <= 3) {
                        return 'UpTo3Sec';
                    }
                    else if (timeInSec <= 10) {
                        return 'UpTo10Sec';
                    }
                    else if (timeInSec <= 30) {
                        return 'UpTo30Sec';
                    }
                    else if (timeInSec <= 60) {
                        return 'UpTo60Sec';
                    }
                    else if (timeInSec <= 180) {
                        return 'UpTo3Min';
                    }
                    else if (timeInSec <= 600) {
                        return 'UpTo10Min';
                    }
                    else if (timeInSec <= 1800) {
                        return 'UpTo30Min';
                    }
                    return 'Above30Min';
                };
                AWTLogger._logEvent = function (eventWithMetaData, contextProperties) {
                    if (!eventWithMetaData.name || !Utils.isString(eventWithMetaData.name)) {
                        AWTNotificationManager_1.default.eventsRejected([eventWithMetaData], Enums_1.AWTEventsRejectedReason.InvalidEvent);
                        return;
                    }
                    eventWithMetaData.name = eventWithMetaData.name.toLowerCase();
                    //Check if name is a string and replace . with _ if it is. Drop otherwise.
                    eventWithMetaData.name = eventWithMetaData.name.replace(Utils.EventNameDotRegex, '_');
                    if (!eventWithMetaData.type || !Utils.isString(eventWithMetaData.type)) {
                        eventWithMetaData.type = 'custom';
                    }
                    else {
                        eventWithMetaData.type = eventWithMetaData.type.toLowerCase();
                    }
                    //Validate name and type and drop if invalid
                    if (!Utils.EventNameAndTypeRegex.test(eventWithMetaData.name) || !Utils.EventNameAndTypeRegex.test(eventWithMetaData.type)) {
                        AWTNotificationManager_1.default.eventsRejected([eventWithMetaData], Enums_1.AWTEventsRejectedReason.InvalidEvent);
                        return;
                    }
                    //Add the timestamp if the timestamp is not set or is negative.
                    if (!Utils.isNumber(eventWithMetaData.timestamp) || eventWithMetaData.timestamp < 0) {
                        eventWithMetaData.timestamp = (new Date()).getTime();
                    }
                    //If no properties create one for EventInfo and context 
                    if (!eventWithMetaData.properties) {
                        eventWithMetaData.properties = {};
                    }
                    // Logger ContextProperties
                    this._addContextIfAbsent(eventWithMetaData, contextProperties.getPropertyMap());
                    // LogManager ContextProperties
                    this._addContextIfAbsent(eventWithMetaData, AWTLogManagerSettings_1.default.logManagerContext.getPropertyMap());
                    //Add event info
                    this._setDefaultProperty(eventWithMetaData, 'EventInfo.InitId', this._getInitId(eventWithMetaData.apiKey));
                    this._setDefaultProperty(eventWithMetaData, 'EventInfo.Sequence', this._getSequenceId(eventWithMetaData.apiKey));
                    this._setDefaultProperty(eventWithMetaData, 'EventInfo.SdkVersion', Version.FullVersionString);
                    this._setDefaultProperty(eventWithMetaData, 'EventInfo.Name', eventWithMetaData.name);
                    this._setDefaultProperty(eventWithMetaData, 'EventInfo.Time', (new Date(eventWithMetaData.timestamp)).toISOString());
                    if (!Utils.isPriority(eventWithMetaData.priority)) {
                        eventWithMetaData.priority = Enums_1.AWTEventPriority.Normal;
                    }
                    this._sendEvent(eventWithMetaData);
                };
                AWTLogger._addContextIfAbsent = function (event, contextProperties) {
                    if (contextProperties) {
                        for (var name_2 in contextProperties) {
                            if (contextProperties.hasOwnProperty(name_2)) {
                                if (!event.properties[name_2]) {
                                    event.properties[name_2] = contextProperties[name_2];
                                }
                            }
                        }
                    }
                };
                AWTLogger._setDefaultProperty = function (event, name, value) {
                    event.properties[name] = { value: value, pii: Enums_1.AWTPiiKind.NotSet, type: Enums_1.AWTPropertyType.String };
                };
                AWTLogger._sendEvent = function (event) {
                    AWTTransmissionManagerCore_1.default.sendEvent(event);
                };
                AWTLogger._getInternalEvent = function (event, apiKey, sanitizeProperties) {
                    event.properties = event.properties || {};
                    if (sanitizeProperties) {
                        // Event Properties 
                        for (var name_3 in event.properties) {
                            if (event.properties.hasOwnProperty(name_3)) {
                                event.properties[name_3] = Utils.sanitizeProperty(name_3, event.properties[name_3]);
                                if (event.properties[name_3] === null) {
                                    delete event.properties[name_3];
                                }
                            }
                        }
                    }
                    var internalEvent = event;
                    internalEvent.id = Utils.newGuid();
                    internalEvent.apiKey = apiKey;
                    return internalEvent;
                };
                AWTLogger._getInitId = function (apiKey) {
                    return AWTLogger._initIdMap[apiKey];
                };
                AWTLogger._getSequenceId = function (apiKey) {
                    if (AWTLogger._sequenceIdMap[apiKey] === undefined) {
                        AWTLogger._sequenceIdMap[apiKey] = 0;
                    }
                    return (++AWTLogger._sequenceIdMap[apiKey]).toString();
                };
                AWTLogger._sequenceIdMap = {};
                AWTLogger._initIdMap = {};
                return AWTLogger;
            }());
            exports.default = AWTLogger;
            /***/ 
        }),
        /* 14 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            exports.AWT_REAL_TIME = 'REAL_TIME';
            exports.AWT_NEAR_REAL_TIME = 'NEAR_REAL_TIME';
            exports.AWT_BEST_EFFORT = 'BEST_EFFORT';
            /***/ 
        }),
        /* 15 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * Version.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2018
            * File for SDK version.
            */
            exports.Version = '1.8.3';
            exports.FullVersionString = 'AWT-Web-JS-' + exports.Version;
            /***/ 
        }),
        /* 16 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AriaSDK.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            * File to export public classes, interfaces and enums.
            */
            var Enums_1 = __webpack_require__(0);
            exports.AWTPropertyType = Enums_1.AWTPropertyType;
            exports.AWTPiiKind = Enums_1.AWTPiiKind;
            exports.AWTEventPriority = Enums_1.AWTEventPriority;
            exports.AWTEventsDroppedReason = Enums_1.AWTEventsDroppedReason;
            exports.AWTEventsRejectedReason = Enums_1.AWTEventsRejectedReason;
            exports.AWTCustomerContentKind = Enums_1.AWTCustomerContentKind;
            var Enums_2 = __webpack_require__(6);
            exports.AWTUserIdType = Enums_2.AWTUserIdType;
            exports.AWTSessionState = Enums_2.AWTSessionState;
            var DataModels_1 = __webpack_require__(14);
            exports.AWT_BEST_EFFORT = DataModels_1.AWT_BEST_EFFORT;
            exports.AWT_NEAR_REAL_TIME = DataModels_1.AWT_NEAR_REAL_TIME;
            exports.AWT_REAL_TIME = DataModels_1.AWT_REAL_TIME;
            var AWTEventProperties_1 = __webpack_require__(5);
            exports.AWTEventProperties = AWTEventProperties_1.default;
            var AWTLogger_1 = __webpack_require__(13);
            exports.AWTLogger = AWTLogger_1.default;
            var AWTLogManager_1 = __webpack_require__(11);
            exports.AWTLogManager = AWTLogManager_1.default;
            var AWTTransmissionManager_1 = __webpack_require__(29);
            exports.AWTTransmissionManager = AWTTransmissionManager_1.default;
            var AWTSerializer_1 = __webpack_require__(9);
            exports.AWTSerializer = AWTSerializer_1.default;
            var AWTSemanticContext_1 = __webpack_require__(8);
            exports.AWTSemanticContext = AWTSemanticContext_1.default;
            exports.AWT_COLLECTOR_URL_UNITED_STATES = 'https://us.pipe.aria.microsoft.com/Collector/3.0/';
            exports.AWT_COLLECTOR_URL_GERMANY = 'https://de.pipe.aria.microsoft.com/Collector/3.0/';
            exports.AWT_COLLECTOR_URL_JAPAN = 'https://jp.pipe.aria.microsoft.com/Collector/3.0/';
            exports.AWT_COLLECTOR_URL_AUSTRALIA = 'https://au.pipe.aria.microsoft.com/Collector/3.0/';
            exports.AWT_COLLECTOR_URL_EUROPE = 'https://eu.pipe.aria.microsoft.com/Collector/3.0/';
            exports.AWT_COLLECTOR_URL_USGOV_DOD = 'https://pf.pipe.aria.microsoft.com/Collector/3.0';
            exports.AWT_COLLECTOR_URL_USGOV_DOJ = 'https://tb.pipe.aria.microsoft.com/Collector/3.0';
            /***/ 
        }),
        /* 17 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            /**
            * bond_const.ts
            * Copyright: Microsoft 2016
            */
            Object.defineProperty(exports, "__esModule", { value: true });
            //------------------------------------------------------------------------------
            // <auto-generated>
            //     This code was generated by a tool.
            //
            //     Tool     : bondc, Version=3.0.1, Build=bond-git.debug.not
            //     Template : Microsoft.Bond.Rules.dll#TypeScript.tt
            //     File     : bond_const.ts
            //
            //     Changes to this file may cause incorrect behavior and will be lost when
            //     the code is regenerated.
            // </auto-generated>
            //------------------------------------------------------------------------------
            var _BondDataType;
            (function (_BondDataType) {
                _BondDataType[_BondDataType["_BT_STOP"] = 0] = "_BT_STOP";
                _BondDataType[_BondDataType["_BT_STOP_BASE"] = 1] = "_BT_STOP_BASE";
                _BondDataType[_BondDataType["_BT_BOOL"] = 2] = "_BT_BOOL";
                _BondDataType[_BondDataType["_BT_DOUBLE"] = 8] = "_BT_DOUBLE";
                _BondDataType[_BondDataType["_BT_STRING"] = 9] = "_BT_STRING";
                _BondDataType[_BondDataType["_BT_STRUCT"] = 10] = "_BT_STRUCT";
                _BondDataType[_BondDataType["_BT_LIST"] = 11] = "_BT_LIST";
                _BondDataType[_BondDataType["_BT_MAP"] = 13] = "_BT_MAP";
                _BondDataType[_BondDataType["_BT_INT32"] = 16] = "_BT_INT32";
                _BondDataType[_BondDataType["_BT_INT64"] = 17] = "_BT_INT64";
            })(_BondDataType = exports._BondDataType || (exports._BondDataType = {}));
            /***/ 
        }),
        /* 18 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            /**
            * microsoft.bond.encoding.ts
            * Copyright: Microsoft 2016
            */
            Object.defineProperty(exports, "__esModule", { value: true });
            var microsoft_bond_primitives_1 = __webpack_require__(4);
            var microsoft_bond_floatutils_1 = __webpack_require__(19);
            var microsoft_bond_utils_1 = __webpack_require__(22);
            function _Utf8_GetBytes(value) {
                var array = [];
                for (var i = 0; i < value.length; ++i) {
                    var char = value.charCodeAt(i);
                    if (char < 0x80) {
                        array.push(char);
                    }
                    else if (char < 0x800) {
                        array.push(0xc0 | (char >> 6), 0x80 | (char & 0x3f));
                    }
                    else if (char < 0xd800 || char >= 0xe000) {
                        array.push(0xe0 | (char >> 12), 0x80 | ((char >> 6) & 0x3f), 0x80 | (char & 0x3f));
                    }
                    else {
                        char = 0x10000 + (((char & 0x3ff) << 10) | (value.charCodeAt(++i) & 0x3ff));
                        array.push(0xf0 | (char >> 18), 0x80 | ((char >> 12) & 0x3f), 0x80 | ((char >> 6) & 0x3f), 0x80 | (char & 0x3f));
                    }
                }
                return array;
            }
            exports._Utf8_GetBytes = _Utf8_GetBytes;
            function _Base64_GetString(inArray) {
                var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var output = [];
                var paddingBytes = inArray.length % 3;
                var toBase64 = function (num) {
                    return [lookup.charAt((num >> 18) & 0x3F),
                        lookup.charAt((num >> 12) & 0x3F),
                        lookup.charAt((num >> 6) & 0x3F),
                        lookup.charAt(num & 0x3F)].join('');
                };
                for (var i = 0, length_1 = inArray.length - paddingBytes; i < length_1; i += 3) {
                    var temp = (inArray[i] << 16) + (inArray[i + 1] << 8) + (inArray[i + 2]);
                    output.push(toBase64(temp));
                }
                switch (paddingBytes) {
                    case 1:
                        var temp = inArray[inArray.length - 1];
                        output.push(lookup.charAt(temp >> 2));
                        output.push(lookup.charAt((temp << 4) & 0x3F));
                        output.push('==');
                        break;
                    case 2:
                        var temp2 = (inArray[inArray.length - 2] << 8) + (inArray[inArray.length - 1]);
                        output.push(lookup.charAt(temp2 >> 10));
                        output.push(lookup.charAt((temp2 >> 4) & 0x3F));
                        output.push(lookup.charAt((temp2 << 2) & 0x3F));
                        output.push('=');
                        break;
                }
                return output.join('');
            }
            exports._Base64_GetString = _Base64_GetString;
            function _Varint_GetBytes(value) {
                var array = [];
                while (value & 0xffffff80) {
                    array.push((value & 0x7f) | 0x80);
                    value >>>= 7;
                }
                array.push(value & 0x7f);
                return array;
            }
            exports._Varint_GetBytes = _Varint_GetBytes;
            function _Varint64_GetBytes(value) {
                var low = value.low;
                var high = value.high;
                var array = [];
                while (high || (0xffffff80 & low)) {
                    array.push((low & 0x7f) | 0x80);
                    low = ((high & 0x7f) << 25) | (low >>> 7);
                    high >>>= 7;
                }
                array.push(low & 0x7f);
                return array;
            }
            exports._Varint64_GetBytes = _Varint64_GetBytes;
            // Note: see notes of Float.
            function _Double_GetBytes(value) {
                if (microsoft_bond_utils_1.BrowserChecker._IsDataViewSupport()) {
                    var view = new DataView(new ArrayBuffer(8));
                    view.setFloat64(0, value, true /*littleEndian*/);
                    var array = [];
                    for (var i = 0; i < 8; ++i) {
                        array.push(view.getUint8(i));
                    }
                    return array;
                }
                else {
                    return microsoft_bond_floatutils_1.FloatUtils._ConvertNumberToArray(value, true /*isDouble*/);
                }
            }
            exports._Double_GetBytes = _Double_GetBytes;
            function _Zigzag_EncodeZigzag32(value) {
                value = microsoft_bond_primitives_1.Number._ToInt32(value);
                return ((value << 1) ^ (value >> (4 /*sizeof(int)*/ * 8 - 1)));
            }
            exports._Zigzag_EncodeZigzag32 = _Zigzag_EncodeZigzag32;
            function _Zigzag_EncodeZigzag64(value) {
                var low = value.low;
                var high = value.high;
                var tmpH = (high << 1) | (low >>> 31);
                var tmpL = low << 1;
                if (high & 0x80000000) {
                    tmpH = ~tmpH;
                    tmpL = ~tmpL;
                }
                var res = new microsoft_bond_primitives_1.UInt64('0');
                res.low = tmpL;
                res.high = tmpH;
                return res;
            }
            exports._Zigzag_EncodeZigzag64 = _Zigzag_EncodeZigzag64;
            /***/ 
        }),
        /* 19 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * microsoft.bond.floatutils.ts
            * Copyright: Microsoft 2016
            *
            * This class will be used to convert float/double to byte array on browsers which don't support html5.
            *
            * Format: IEEE-754, littleEndian, http://en.wikipedia.org/wiki/IEEE_754-1985
            *
            *  \note
            * 1. Don't have negative zero. All zero will be positive zero.
            * 2. If the buffer array passed to ConvertArrayToFloat() is actual NaN or Inifinity value,
            *    exception will be raised.
            */
            var FloatUtils = (function () {
                function FloatUtils() {
                }
                FloatUtils._ConvertNumberToArray = function (num, isDouble) {
                    if (!num) {
                        return isDouble ? this._doubleZero : this._floatZero;
                    }
                    var exponentBits = isDouble ? 11 : 8;
                    var precisionBits = isDouble ? 52 : 23;
                    // follow IEEE-754, exponent bias is 2^(k-1)-1 where k is the number of bits
                    // in the exponent: http://en.wikipedia.org/wiki/Exponent_bias
                    var bias = (1 << (exponentBits - 1)) - 1;
                    var minExponent = 1 - bias;
                    var maxExponent = bias;
                    var sign = num < 0 ? 1 : 0;
                    num = Math.abs(num);
                    var intPart = Math.floor(num);
                    var floatPart = num - intPart;
                    var len = 2 * (bias + 2) + precisionBits;
                    var buffer = new Array(len);
                    var i = 0;
                    while (i < len) {
                        buffer[i++] = 0;
                    }
                    // caculate the intPart
                    i = bias + 2;
                    while (i && intPart) {
                        buffer[--i] = intPart % 2;
                        intPart = Math.floor(intPart / 2);
                    }
                    // caculate the floatPart
                    i = bias + 1;
                    while (i < len - 1 && floatPart > 0) {
                        floatPart *= 2;
                        if (floatPart >= 1) {
                            buffer[++i] = 1;
                            --floatPart;
                        }
                        else {
                            buffer[++i] = 0;
                        }
                    }
                    // find the first 1
                    var firstBit = 0;
                    while (firstBit < len && !buffer[firstBit]) {
                        firstBit++;
                    }
                    // caculate exponent
                    var exponent = bias + 1 - firstBit;
                    // caculate round
                    var lastBit = firstBit + precisionBits;
                    if (buffer[lastBit + 1]) {
                        for (i = lastBit; i > firstBit; --i) {
                            buffer[i] = 1 - buffer[i];
                            if (buffer) {
                                break;
                            }
                        }
                        if (i === firstBit) {
                            ++exponent;
                        }
                    }
                    // check overflow
                    if (exponent > maxExponent || intPart) {
                        if (sign) {
                            return isDouble ? this._doubleNegInifinity : this._floatNegInifinity;
                        }
                        else {
                            return isDouble ? this._doubleInifinity : this._floatInifinity;
                        }
                    }
                    else if (exponent < minExponent) {
                        return isDouble ? this._doubleZero : this._floatZero;
                    }
                    // caculate the result
                    if (isDouble) {
                        var high = 0;
                        for (i = 0; i < 20; ++i) {
                            high = (high << 1) | buffer[++firstBit];
                        }
                        var low = 0;
                        for (; i < 52; ++i) {
                            low = (low << 1) | buffer[++firstBit];
                        }
                        high |= (exponent + bias) << 20;
                        high = (sign << 31) | (high & 0x7FFFFFFF);
                        var resArray = [low & 0xff, (low >> 8) & 0xff, (low >> 16) & 0xff, low >>> 24,
                            high & 0xff, (high >> 8) & 0xff, (high >> 16) & 0xff, high >>> 24];
                        return resArray;
                    }
                    else {
                        var result = 0;
                        for (i = 0; i < 23; ++i) {
                            result = (result << 1) | buffer[++firstBit];
                        }
                        result |= (exponent + bias) << 23;
                        result = (sign << 31) | (result & 0x7FFFFFFF);
                        var resArray = [result & 0xff, (result >> 8) & 0xff, (result >> 16) & 0xff, result >>> 24];
                        return resArray;
                    }
                };
                FloatUtils._floatZero = [0x00, 0x00, 0x00, 0x00];
                FloatUtils._doubleZero = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
                FloatUtils._floatInifinity = [0x00, 0x00, 0x80, 0x7F];
                FloatUtils._floatNegInifinity = [0x00, 0x00, 0x80, 0xFF];
                FloatUtils._doubleInifinity = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x7f];
                FloatUtils._doubleNegInifinity = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0xff];
                return FloatUtils;
            }());
            exports.FloatUtils = FloatUtils;
            /***/ 
        }),
        /* 20 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * microsoft.bond.io.ts
            * Copyright: Microsoft 2016
            */
            var microsoft_bond_primitives_1 = __webpack_require__(4);
            var MemoryStream = (function () {
                function MemoryStream() {
                    this._buffer = [];
                }
                /*override*/
                MemoryStream.prototype._WriteByte = function (byte) {
                    this._buffer.push(microsoft_bond_primitives_1.Number._ToByte(byte));
                };
                /*override*/
                MemoryStream.prototype._Write = function (buffer, offset, count) {
                    while (count--) {
                        this._WriteByte(buffer[offset++]);
                    }
                };
                /**
                 * Returns the array of unsigned bytes from which this stream was created.
                 */
                MemoryStream.prototype._GetBuffer = function () {
                    return this._buffer;
                };
                return MemoryStream;
            }());
            exports.MemoryStream = MemoryStream;
            /***/ 
        }),
        /* 21 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            /**
            * microsoft.bond.ts
            * Copyright: Microsoft 2016
            */
            Object.defineProperty(exports, "__esModule", { value: true });
            var bond_const_1 = __webpack_require__(17);
            exports._BondDataType = bond_const_1._BondDataType;
            var _Encoding = __webpack_require__(18);
            exports._Encoding = _Encoding;
            var IO = __webpack_require__(20);
            exports.IO = IO;
            var microsoft_bond_primitives_1 = __webpack_require__(4);
            exports.Int64 = microsoft_bond_primitives_1.Int64;
            exports.UInt64 = microsoft_bond_primitives_1.UInt64;
            exports.Number = microsoft_bond_primitives_1.Number;
            var CompactBinaryProtocolWriter = (function () {
                function CompactBinaryProtocolWriter(stream) {
                    this._stream = stream;
                }
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteBlob = function (blob) {
                    this._stream._Write(blob, 0, blob.length);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteBool = function (value) {
                    this._stream._WriteByte(value ? 1 : 0);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteContainerBegin = function (size, elementType) {
                    this._WriteUInt8(elementType);
                    this._WriteUInt32(size);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteMapContainerBegin = function (size, keyType, valueType) {
                    this._WriteUInt8(keyType);
                    this._WriteUInt8(valueType);
                    this._WriteUInt32(size);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteDouble = function (value) {
                    var array = _Encoding._Double_GetBytes(value);
                    this._stream._Write(array, 0, array.length);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteFieldBegin = function (type, id, metadata) {
                    if (id <= 5) {
                        this._stream._WriteByte(type | (id << 5));
                    }
                    else if (id <= 0xff) {
                        this._stream._WriteByte(type | (6 << 5));
                        this._stream._WriteByte(id);
                    }
                    else {
                        this._stream._WriteByte(type | (7 << 5));
                        this._stream._WriteByte(id);
                        this._stream._WriteByte(id >> 8);
                    }
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteInt32 = function (value) {
                    value = _Encoding._Zigzag_EncodeZigzag32(value);
                    this._WriteUInt32(value);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteInt64 = function (value) {
                    this._WriteUInt64(_Encoding._Zigzag_EncodeZigzag64(value));
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteString = function (value) {
                    if (value === '') {
                        this._WriteUInt32(0 /*length*/);
                    }
                    else {
                        var array = _Encoding._Utf8_GetBytes(value);
                        this._WriteUInt32(array.length);
                        this._stream._Write(array, 0, array.length);
                    }
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteStructEnd = function (isBase) {
                    this._WriteUInt8(isBase ? bond_const_1._BondDataType._BT_STOP_BASE : bond_const_1._BondDataType._BT_STOP);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteUInt32 = function (value) {
                    var array = _Encoding._Varint_GetBytes(microsoft_bond_primitives_1.Number._ToUInt32(value));
                    this._stream._Write(array, 0, array.length);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteUInt64 = function (value) {
                    var array = _Encoding._Varint64_GetBytes(value);
                    this._stream._Write(array, 0, array.length);
                };
                /*override*/
                CompactBinaryProtocolWriter.prototype._WriteUInt8 = function (value) {
                    this._stream._WriteByte(microsoft_bond_primitives_1.Number._ToUInt8(value));
                };
                return CompactBinaryProtocolWriter;
            }());
            exports.CompactBinaryProtocolWriter = CompactBinaryProtocolWriter;
            /***/ 
        }),
        /* 22 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            /**
            * microsoft.bond.utils.ts
            * Copyright: Microsoft 2016
            */
            Object.defineProperty(exports, "__esModule", { value: true });
            var BrowserChecker = (function () {
                function BrowserChecker() {
                }
                BrowserChecker._IsDataViewSupport = function () {
                    return typeof ArrayBuffer !== 'undefined' &&
                        typeof DataView !== 'undefined';
                };
                return BrowserChecker;
            }());
            exports.BrowserChecker = BrowserChecker;
            /***/ 
        }),
        /* 23 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTClockSkewManager.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            */
            /**
            * Class to manage clock skew correction.
            */
            var AWTClockSkewManager = (function () {
                function AWTClockSkewManager(clockSkewRefreshDurationInMins) {
                    this.clockSkewRefreshDurationInMins = clockSkewRefreshDurationInMins;
                    this._reset();
                }
                /**
                 * Determine if the request can be sent.
                 * @return {boolean} True if requests can be sent, false otherwise.
                 */
                AWTClockSkewManager.prototype.allowRequestSending = function () {
                    if (this._isFirstRequest && !this._clockSkewSet) {
                        this._isFirstRequest = false;
                        this._allowRequestSending = false;
                        return true;
                    }
                    return this._allowRequestSending;
                };
                /**
                 * Determine if clock skew headers should be added to the request.
                 * @return {boolean} True if clock skew headers should be added, false otherwise.
                 */
                AWTClockSkewManager.prototype.shouldAddClockSkewHeaders = function () {
                    return this._shouldAddClockSkewHeaders;
                };
                /**
                 * Gets the clock skew header value.
                 * @return {string} The clock skew header value.
                 */
                AWTClockSkewManager.prototype.getClockSkewHeaderValue = function () {
                    return this._clockSkewHeaderValue;
                };
                /**
                 * Sets the clock skew header value. Once clock skew is set this method
                 * is no-op.
                 * @param {string} timeDeltaInMillis - Time delta to be saved as the clock skew header value.
                 */
                AWTClockSkewManager.prototype.setClockSkew = function (timeDeltaInMillis) {
                    if (!this._clockSkewSet) {
                        if (timeDeltaInMillis) {
                            this._clockSkewHeaderValue = timeDeltaInMillis;
                        }
                        else {
                            this._shouldAddClockSkewHeaders = false;
                        }
                        this._clockSkewSet = true;
                        this._allowRequestSending = true;
                    }
                };
                AWTClockSkewManager.prototype._reset = function () {
                    var _this = this;
                    this._isFirstRequest = true;
                    this._clockSkewSet = false;
                    this._allowRequestSending = true;
                    this._shouldAddClockSkewHeaders = true;
                    this._clockSkewHeaderValue = 'use-collector-delta';
                    if (this.clockSkewRefreshDurationInMins > 0) {
                        setTimeout(function () { return _this._reset(); }, this.clockSkewRefreshDurationInMins * 60000);
                    }
                };
                return AWTClockSkewManager;
            }());
            exports.default = AWTClockSkewManager;
            /***/ 
        }),
        /* 24 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            /**
            * AWTKillSwitch.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            */
            Object.defineProperty(exports, "__esModule", { value: true });
            var SecToMsMultiplier = 1000;
            /**
            * Class to stop certain tenants sending events.
            */
            var AWTKillSwitch = (function () {
                function AWTKillSwitch() {
                    this._killedTokenDictionary = {};
                }
                /**
                 * Set the tenants that are to be killed along with the duration. If the duration is
                 * a special value identifying that the tokens are too be killed for only this request, then
                 * a array of tokens is returned.
                 * @param {string} killedTokens - Tokens that are too be marked to be killed.
                 * @param {string} killDuration - The duration for which the tokens are to be killed.
                 * @return {string[]} The tokens that are killed only for this given request.
                 */
                AWTKillSwitch.prototype.setKillSwitchTenants = function (killTokens, killDuration) {
                    if (killTokens && killDuration) {
                        try {
                            var killedTokens = killTokens.split(',');
                            if (killDuration === 'this-request-only') {
                                return killedTokens;
                            }
                            var durationMs = parseInt(killDuration, 10) * SecToMsMultiplier;
                            for (var i = 0; i < killedTokens.length; ++i) {
                                this._killedTokenDictionary[killedTokens[i]] = Date.now() + durationMs;
                            }
                        }
                        catch (ex) {
                            return [];
                        }
                    }
                    return [];
                };
                /**
                 * Determing if the given tenant token has been killed for the moment.
                 * @param {string} tenantToken - The token to be checked.
                 * @return {boolean} True if token has been killed, false otherwise.
                 */
                AWTKillSwitch.prototype.isTenantKilled = function (tenantToken) {
                    if (this._killedTokenDictionary[tenantToken] !== undefined && this._killedTokenDictionary[tenantToken] > Date.now()) {
                        return true;
                    }
                    delete this._killedTokenDictionary[tenantToken];
                    return false;
                };
                return AWTKillSwitch;
            }());
            exports.default = AWTKillSwitch;
            /***/ 
        }),
        /* 25 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var Enums_1 = __webpack_require__(0);
            /**
            * Class to batch events.
            */
            var AWTRecordBatcher = (function () {
                function AWTRecordBatcher(_outboundQueue, _maxNumberOfEvents) {
                    this._outboundQueue = _outboundQueue;
                    this._maxNumberOfEvents = _maxNumberOfEvents;
                    this._currentBatch = {};
                    this._currentNumEventsInBatch = 0;
                }
                /**
                 * Add an event to the current batch.
                 * If the priority of the event is synchronous, it will also return the batch containing only the synchronous event.
                 * @param {object} event - The event that needs to be batched.
                 * @return {object} If the priority of the event is synchronous, it will also return the batch containing only the synchronous event.
                 * Otherwise returns null.
                 */
                AWTRecordBatcher.prototype.addEventToBatch = function (event) {
                    if (event.priority === Enums_1.AWTEventPriority.Immediate_sync) {
                        //batch immediate priority into its own batch
                        var immediateBatch = {};
                        immediateBatch[event.apiKey] = [event];
                        return immediateBatch;
                    }
                    else {
                        if (this._currentNumEventsInBatch >= this._maxNumberOfEvents) {
                            this.flushBatch();
                        }
                        if (this._currentBatch[event.apiKey] === undefined) {
                            this._currentBatch[event.apiKey] = [];
                        }
                        this._currentBatch[event.apiKey].push(event);
                        this._currentNumEventsInBatch++;
                    }
                    return null;
                };
                /**
                 * Flush the current batch so that it is added to the outbound queue.
                 */
                AWTRecordBatcher.prototype.flushBatch = function () {
                    if (this._currentNumEventsInBatch > 0) {
                        this._outboundQueue.push(this._currentBatch);
                        this._currentBatch = {};
                        this._currentNumEventsInBatch = 0;
                    }
                };
                /**
                 * Check if there is a batch that contains events.
                 */
                AWTRecordBatcher.prototype.hasBatch = function () {
                    return this._currentNumEventsInBatch > 0;
                };
                return AWTRecordBatcher;
            }());
            exports.default = AWTRecordBatcher;
            /***/ 
        }),
        /* 26 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
            * AWTRetryPolicy.ts
            * @author Abhilash Panwar (abpanwar)
            * @copyright Microsoft 2017
            */
            var RandomizationLowerThreshold = 0.8;
            var RandomizationUpperThreshold = 1.2;
            var BaseBackoff = 3000;
            var MaxBackoff = 120000;
            /**
            * Class for retry policy.
            */
            var AWTRetryPolicy = (function () {
                function AWTRetryPolicy() {
                }
                /**
                 * Determine if the request should be retried for the given status code.
                 * The below expression reads that we should only retry for:
                 *      - HttpStatusCodes that are smaller than 300.
                 *      - HttpStatusCodes greater or equal to 500 (except for 501-NotImplement
                 *        and 505-HttpVersionNotSupport).
                 *      - HttpStatusCode 408-RequestTimeout.
                 * This is based on Microsoft.WindowsAzure.Storage.RetryPolicies.ExponentialRetry class
                 * @param {number} httpStatusCode - The status code returned for the request.
                 * @return {boolean} True if request should be retried, false otherwise.
                 */
                AWTRetryPolicy.shouldRetryForStatus = function (httpStatusCode) {
                    /* */
                    return !((httpStatusCode >= 300 && httpStatusCode < 500 && httpStatusCode !== 408)
                        || (httpStatusCode === 501)
                        || (httpStatusCode === 505));
                };
                /**
                 * Gets the number of milliseconds to back off before retrying the request. The
                 * back off duration is exponentially scaled based on the number of retries already
                 * done for the request.
                 * @param {number} retriesSoFar - The number of times the request has already been retried.
                 * @return {number} The back off duration for the request before it can be retried.
                 */
                AWTRetryPolicy.getMillisToBackoffForRetry = function (retriesSoFar) {
                    var waitDuration = 0;
                    var minBackoff = BaseBackoff * RandomizationLowerThreshold;
                    var maxBackoff = BaseBackoff * RandomizationUpperThreshold;
                    var randomBackoff = Math.floor(Math.random() * (maxBackoff - minBackoff)) + minBackoff;
                    waitDuration = Math.pow(4, retriesSoFar) * randomBackoff;
                    return Math.min(waitDuration, MaxBackoff);
                };
                return AWTRetryPolicy;
            }());
            exports.default = AWTRetryPolicy;
            /***/ 
        }),
        /* 27 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var Enums_1 = __webpack_require__(0);
            var AWTSerializer_1 = __webpack_require__(9);
            var AWTRetryPolicy_1 = __webpack_require__(26);
            var AWTKillSwitch_1 = __webpack_require__(24);
            var AWTClockSkewManager_1 = __webpack_require__(23);
            var Version = __webpack_require__(15);
            var Utils = __webpack_require__(1);
            var AWTNotificationManager_1 = __webpack_require__(2);
            var AWTTransmissionManagerCore_1 = __webpack_require__(3);
            var MaxConnections = 2;
            var MaxRetries = 1;
            var Method = 'POST';
            /**
             * Class managing the sending of requests.
             */
            var AWTHttpManager = (function () {
                /**
                 * @constructor
                 * @param {object} requestQueue   - The queue that contains the requests to be sent.
                 * @param {string} collectorUrl   - The collector url to which the requests must be sent.
                 * @param {object} _queueManager  - The queue manager that we should add requests back to if needed.
                 * @param {object} _httpInterface - The http interface that should be used to send HTTP requests.
                 */
                function AWTHttpManager(_requestQueue, collectorUrl, _queueManager, _httpInterface, clockSkewRefreshDurationInMins) {
                    var _this = this;
                    this._requestQueue = _requestQueue;
                    this._queueManager = _queueManager;
                    this._httpInterface = _httpInterface;
                    this._urlString = '?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version='
                        + Version.FullVersionString;
                    this._killSwitch = new AWTKillSwitch_1.default();
                    this._paused = false;
                    this._useBeacons = false;
                    this._activeConnections = 0;
                    this._clockSkewManager = new AWTClockSkewManager_1.default(clockSkewRefreshDurationInMins);
                    if (!Utils.isUint8ArrayAvailable()) {
                        this._urlString += '&content-encoding=base64';
                    }
                    this._urlString = collectorUrl + this._urlString;
                    if (!this._httpInterface) {
                        this._useBeacons = !Utils.isReactNative(); //Only use beacons if not running in React Native
                        this._httpInterface = {
                            sendPOST: function (urlString, data, ontimeout, onerror, onload, sync) {
                                try {
                                    if (Utils.useXDomainRequest()) {
                                        var xdr = new XDomainRequest();
                                        xdr.open(Method, urlString);
                                        //can't get the status code in xdr.
                                        xdr.onload = function () {
                                            // we will assume onload means the request succeeded.
                                            onload(200, null);
                                        };
                                        xdr.onerror = function () {
                                            // we will assume onerror means we need to drop the events.
                                            onerror(400, null);
                                        };
                                        xdr.ontimeout = function () {
                                            // we will assume ontimeout means we need to retry the events.
                                            ontimeout(500, null);
                                        };
                                        xdr.send(data);
                                    }
                                    else if (Utils.isReactNative()) {
                                        //Use the fetch API to send events in React Native
                                        fetch(urlString, {
                                            body: data,
                                            method: Method
                                        }).then(function (response) {
                                            var headerMap = {};
                                            if (response.headers) {
                                                response.headers.forEach(function (value, name) {
                                                    headerMap[name] = value;
                                                });
                                            }
                                            onload(response.status, headerMap);
                                        }).catch(function (error) {
                                            //In case there is an error in the request. Set the status to 0
                                            //so that the events can be retried later.
                                            onerror(0, {});
                                        });
                                    }
                                    else {
                                        var xhr_1 = new XMLHttpRequest();
                                        xhr_1.open(Method, urlString, !sync);
                                        xhr_1.onload = function () {
                                            onload(xhr_1.status, _this._convertAllHeadersToMap(xhr_1.getAllResponseHeaders()));
                                        };
                                        xhr_1.onerror = function () {
                                            onerror(xhr_1.status, _this._convertAllHeadersToMap(xhr_1.getAllResponseHeaders()));
                                        };
                                        xhr_1.ontimeout = function () {
                                            ontimeout(xhr_1.status, _this._convertAllHeadersToMap(xhr_1.getAllResponseHeaders()));
                                        };
                                        xhr_1.send(data);
                                    }
                                }
                                catch (e) {
                                    // we will assume exception means we need to drop the events.
                                    onerror(400, null);
                                }
                            }
                        };
                    }
                }
                /**
                 * Check if there is an idle connection overwhich we can send a request.
                 * @return {boolean} True if there is an idle connection, false otherwise.
                 */
                AWTHttpManager.prototype.hasIdleConnection = function () {
                    return this._activeConnections < MaxConnections;
                };
                /**
                 * Send requests in the request queue up if there is an idle connection, sending is
                 * not pause and clock skew manager allows sending request.
                 */
                AWTHttpManager.prototype.sendQueuedRequests = function () {
                    while (this.hasIdleConnection() && !this._paused && this._requestQueue.length > 0
                        && this._clockSkewManager.allowRequestSending()) {
                        this._activeConnections++;
                        this._sendRequest(this._requestQueue.shift(), 0, false);
                    }
                    //No more requests to send, tell TPM to try to schedule timer
                    //in case it was waiting for idle connections
                    if (this.hasIdleConnection()) {
                        AWTTransmissionManagerCore_1.default.scheduleTimer();
                    }
                };
                /**
                 * Check if there are no active requests being sent.
                 * @return {boolean} True if idle, false otherwise.
                 */
                AWTHttpManager.prototype.isCompletelyIdle = function () {
                    return this._activeConnections === 0;
                };
                /**
                 * Queue all the remaning requests to be sent. The requests will be
                 * sent using HTML5 Beacons if they are available.
                 */
                AWTHttpManager.prototype.teardown = function () {
                    while (this._requestQueue.length > 0) {
                        this._sendRequest(this._requestQueue.shift(), 0, true);
                    }
                };
                /**
                 * Pause the sending of requests. No new requests will be sent.
                 */
                AWTHttpManager.prototype.pause = function () {
                    this._paused = true;
                };
                /**
                 * Resume the sending of requests.
                 */
                AWTHttpManager.prototype.resume = function () {
                    this._paused = false;
                    this.sendQueuedRequests();
                };
                /**
                 * Removes any pending requests to be sent.
                 */
                AWTHttpManager.prototype.removeQueuedRequests = function () {
                    this._requestQueue.length = 0;
                };
                /**
                 * Sends a request synchronously to the Aria collector. This api is used to send
                 * a request containing a single immediate event.
                 *
                 * @param request - The request to be sent.
                 * @param token   - The token used to send the request.
                 */
                AWTHttpManager.prototype.sendSynchronousRequest = function (request, token) {
                    //This will not take into account the max connections restriction. Since this is sync, we can 
                    //only send one of this request at a time and thus should not worry about multiple connections 
                    //being used to send synchronoush events.
                    if (this._paused) {
                        //If paused then convert to High priority. It will be added back to queue in _sendRequest
                        request[token][0].priority = Enums_1.AWTEventPriority.High;
                    }
                    //Increment active connection since we are still going to use a connection to send the request.
                    this._activeConnections++;
                    //For sync requests we will not wait for the clock skew. 
                    this._sendRequest(request, 0, false, true);
                };
                AWTHttpManager.prototype._sendRequest = function (request, retryCount, isTeardown, isSynchronous) {
                    var _this = this;
                    if (isSynchronous === void 0) {
                        isSynchronous = false;
                    }
                    try {
                        if (this._paused) {
                            this._activeConnections--;
                            this._queueManager.addBackRequest(request);
                            return;
                        }
                        var tokenCount_1 = 0;
                        var apikey_1 = '';
                        for (var token in request) {
                            if (request.hasOwnProperty(token)) {
                                if (!this._killSwitch.isTenantKilled(token)) {
                                    if (apikey_1.length > 0) {
                                        apikey_1 += ',';
                                    }
                                    apikey_1 += token;
                                    tokenCount_1++;
                                }
                                else {
                                    AWTNotificationManager_1.default.eventsRejected(request[token], Enums_1.AWTEventsRejectedReason.KillSwitch);
                                    delete request[token];
                                }
                            }
                        }
                        if (tokenCount_1 > 0) {
                            var payloadResult = AWTSerializer_1.default.getPayloadBlob(request, tokenCount_1);
                            if (payloadResult.remainingRequest) {
                                this._requestQueue.push(payloadResult.remainingRequest);
                            }
                            var urlString = this._urlString + '&x-apikey=' + apikey_1 + '&client-time-epoch-millis='
                                + Date.now().toString();
                            if (this._clockSkewManager.shouldAddClockSkewHeaders()) {
                                urlString = urlString + '&time-delta-to-apply-millis=' + this._clockSkewManager.getClockSkewHeaderValue();
                            }
                            var data = void 0;
                            if (!Utils.isUint8ArrayAvailable()) {
                                data = AWTSerializer_1.default.base64Encode(payloadResult.payloadBlob);
                            }
                            else {
                                data = new Uint8Array(payloadResult.payloadBlob);
                            }
                            for (var token in request) {
                                if (request.hasOwnProperty(token)) {
                                    //Increment the send attempt count
                                    for (var i = 0; i < request[token].length; ++i) {
                                        request[token][i].sendAttempt > 0 ? request[token][i].sendAttempt++ : request[token][i].sendAttempt = 1;
                                    }
                                }
                            }
                            //beacons will not be used if an http interface was passed by the customer
                            if (this._useBeacons && isTeardown && Utils.isBeaconsSupported()) {
                                if (navigator.sendBeacon(urlString, data)) {
                                    //Request sent via beacon.
                                    return;
                                }
                            }
                            //Send sync requests if the request is immediate or we are tearing down telemetry.
                            this._httpInterface.sendPOST(urlString, data, function (status, headers) {
                                _this._retryRequestIfNeeded(status, headers, request, tokenCount_1, apikey_1, retryCount, isTeardown, isSynchronous);
                            }, function (status, headers) {
                                _this._retryRequestIfNeeded(status, headers, request, tokenCount_1, apikey_1, retryCount, isTeardown, isSynchronous);
                            }, function (status, headers) {
                                _this._retryRequestIfNeeded(status, headers, request, tokenCount_1, apikey_1, retryCount, isTeardown, isSynchronous);
                            }, isTeardown || isSynchronous);
                        }
                        else if (!isTeardown) {
                            this._handleRequestFinished(false, {}, isTeardown, isSynchronous);
                        }
                    }
                    catch (e) {
                        //If we catch any error while sending the request, drop the request.
                        this._handleRequestFinished(false, {}, isTeardown, isSynchronous);
                    }
                };
                AWTHttpManager.prototype._retryRequestIfNeeded = function (status, headers, request, tokenCount, apikey, retryCount, isTeardown, isSynchronous) {
                    var _this = this;
                    var shouldRetry = true;
                    if (typeof status !== 'undefined') {
                        if (headers) {
                            var killedTokens = this._killSwitch.setKillSwitchTenants(headers['kill-tokens'], headers['kill-duration-seconds']);
                            this._clockSkewManager.setClockSkew(headers['time-delta-millis']);
                            for (var i = 0; i < killedTokens.length; ++i) {
                                AWTNotificationManager_1.default.eventsRejected(request[killedTokens[i]], Enums_1.AWTEventsRejectedReason.KillSwitch);
                                delete request[killedTokens[i]];
                                tokenCount--;
                            }
                        }
                        else {
                            this._clockSkewManager.setClockSkew(null);
                        }
                        if (status === 200) {
                            this._handleRequestFinished(true, request, isTeardown, isSynchronous);
                            return;
                        }
                        if (!AWTRetryPolicy_1.default.shouldRetryForStatus(status) || tokenCount <= 0) {
                            shouldRetry = false;
                        }
                    }
                    if (shouldRetry) {
                        if (isSynchronous) {
                            //Synchronous events only contain a single event so the apiKey is equal to the token for that event.
                            //Convert the event to High priority and add back to queue to be sent as High event.
                            this._activeConnections--;
                            request[apikey][0].priority = Enums_1.AWTEventPriority.High;
                            this._queueManager.addBackRequest(request);
                        }
                        else if (retryCount < MaxRetries) {
                            for (var token in request) {
                                if (request.hasOwnProperty(token)) {
                                    AWTNotificationManager_1.default.eventsRetrying(request[token]);
                                }
                            }
                            setTimeout(function () { return _this._sendRequest(request, retryCount + 1, false); }, AWTRetryPolicy_1.default.getMillisToBackoffForRetry(retryCount));
                        }
                        else {
                            this._activeConnections--;
                            AWTTransmissionManagerCore_1.default.backOffTransmission();
                            this._queueManager.addBackRequest(request);
                        }
                    }
                    else {
                        this._handleRequestFinished(false, request, isTeardown, isSynchronous);
                    }
                };
                AWTHttpManager.prototype._handleRequestFinished = function (success, request, isTeardown, isSynchronous) {
                    if (success) {
                        AWTTransmissionManagerCore_1.default.clearBackOff();
                    }
                    for (var token in request) {
                        if (request.hasOwnProperty(token)) {
                            if (success) {
                                AWTNotificationManager_1.default.eventsSent(request[token]);
                            }
                            else {
                                AWTNotificationManager_1.default.eventsDropped(request[token], Enums_1.AWTEventsDroppedReason.NonRetryableStatus);
                            }
                        }
                    }
                    this._activeConnections--;
                    if (!isSynchronous && !isTeardown) {
                        //Only continue sending more requests as long as the current request was not an synchronous request or sent
                        //during teardown. We want to return after just sending this one sync request.
                        this.sendQueuedRequests();
                    }
                };
                /**
                 * Converts the XHR getAllResponseHeaders to a map containing the header key and value.
                 */
                AWTHttpManager.prototype._convertAllHeadersToMap = function (headersString) {
                    var headers = {};
                    if (headersString) {
                        var headersArray = headersString.split('\n');
                        for (var i = 0; i < headersArray.length; ++i) {
                            var header = headersArray[i].split(': ');
                            headers[header[0]] = header[1];
                        }
                    }
                    return headers;
                };
                return AWTHttpManager;
            }());
            exports.default = AWTHttpManager;
            /***/ 
        }),
        /* 28 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var Enums_1 = __webpack_require__(0);
            var AWTHttpManager_1 = __webpack_require__(27);
            var AWTTransmissionManagerCore_1 = __webpack_require__(3);
            var AWTRecordBatcher_1 = __webpack_require__(25);
            var AWTNotificationManager_1 = __webpack_require__(2);
            var Utils = __webpack_require__(1);
            var UploadNowCheckTimer = 250;
            var MaxNumberEventPerBatch = 500;
            var MaxSendAttempts = 6;
            /**
             * Class that manages adding events to inbound queues and batching of events
             * into requests.
             */
            var AWTQueueManager = (function () {
                /**
                 * @constructor
                 * @param {string} collectorUrl - The collector url to which the requests must be sent.
                 */
                function AWTQueueManager(collectorUrl, _queueSizeLimit, xhrOverride, clockSkewRefreshDurationInMins) {
                    this._queueSizeLimit = _queueSizeLimit;
                    this._isCurrentlyUploadingNow = false;
                    this._uploadNowQueue = [];
                    this._shouldDropEventsOnPause = false;
                    this._paused = false;
                    this._queueSize = 0;
                    this._outboundQueue = [];
                    this._inboundQueues = {};
                    this._inboundQueues[Enums_1.AWTEventPriority.High] = [];
                    this._inboundQueues[Enums_1.AWTEventPriority.Normal] = [];
                    this._inboundQueues[Enums_1.AWTEventPriority.Low] = [];
                    this._addEmptyQueues();
                    this._batcher = new AWTRecordBatcher_1.default(this._outboundQueue, MaxNumberEventPerBatch);
                    this._httpManager = new AWTHttpManager_1.default(this._outboundQueue, collectorUrl, this, xhrOverride, clockSkewRefreshDurationInMins);
                }
                /**
                 * Add an event to the appropriate inbound queue based on its priority.
                 * @param {object} event - The event to be added to the queue.
                 */
                AWTQueueManager.prototype.addEvent = function (event) {
                    if (!Utils.isPriority(event.priority)) {
                        //If invalid priority, then send it with normal priority
                        event.priority = Enums_1.AWTEventPriority.Normal;
                    }
                    if (event.priority === Enums_1.AWTEventPriority.Immediate_sync) {
                        //Log event synchronously
                        this._httpManager.sendSynchronousRequest(this._batcher.addEventToBatch(event), event.apiKey);
                    }
                    else if (this._queueSize < this._queueSizeLimit) {
                        this._addEventToProperQueue(event);
                    }
                    else {
                        //Drop old event from lower or equal priority
                        if (this._dropEventWithPriorityOrLess(event.priority)) {
                            this._addEventToProperQueue(event);
                        }
                        else {
                            //Can't drop events from current queues because the all the slots are taken by queues that are being flushed.
                            AWTNotificationManager_1.default.eventsDropped([event], Enums_1.AWTEventsDroppedReason.QueueFull);
                        }
                    }
                };
                /**
                 * Batch and send events currently in the queue for the given priority.
                 * @param {enum} priority - Priority for which to send events.
                 */
                AWTQueueManager.prototype.sendEventsForPriorityAndAbove = function (priority) {
                    this._batchEvents(priority);
                    this._httpManager.sendQueuedRequests();
                };
                /**
                 * Check if the inbound queues or batcher has any events that can be sent presently.
                 * @return {boolean} True if there are events, false otherwise.
                 */
                AWTQueueManager.prototype.hasEvents = function () {
                    return (this._inboundQueues[Enums_1.AWTEventPriority.High][0].length > 0 || this._inboundQueues[Enums_1.AWTEventPriority.Normal][0].length > 0
                        || this._inboundQueues[Enums_1.AWTEventPriority.Low][0].length > 0 || this._batcher.hasBatch())
                        && this._httpManager.hasIdleConnection();
                };
                /**
                 * Add back the events from a failed request back to the queue.
                 * @param {object} request - The request whose events need to be added back to the batcher.
                 */
                AWTQueueManager.prototype.addBackRequest = function (request) {
                    if (!this._paused || !this._shouldDropEventsOnPause) {
                        for (var token in request) {
                            if (request.hasOwnProperty(token)) {
                                for (var i = 0; i < request[token].length; ++i) {
                                    if (request[token][i].sendAttempt < MaxSendAttempts) {
                                        this.addEvent(request[token][i]);
                                    }
                                    else {
                                        AWTNotificationManager_1.default.eventsDropped([request[token][i]], Enums_1.AWTEventsDroppedReason.NonRetryableStatus);
                                    }
                                }
                            }
                        }
                        AWTTransmissionManagerCore_1.default.scheduleTimer();
                    }
                };
                /**
                 * Batch all current events in the queues and send them.
                 */
                AWTQueueManager.prototype.teardown = function () {
                    if (!this._paused) {
                        this._batchEvents(Enums_1.AWTEventPriority.Low);
                        this._httpManager.teardown();
                    }
                };
                /**
                 * Sends events for all priority for the current inbound queue.
                 * This method adds new inbound queues to which new events will be added.
                 * @param {function} callback - The function to be called when uploadNow is finished.
                 */
                AWTQueueManager.prototype.uploadNow = function (callback) {
                    var _this = this;
                    this._addEmptyQueues();
                    if (!this._isCurrentlyUploadingNow) {
                        this._isCurrentlyUploadingNow = true;
                        setTimeout(function () { return _this._uploadNow(callback); }, 0);
                    }
                    else {
                        this._uploadNowQueue.push(callback);
                    }
                };
                /**
                 * Pause the tranmission of any requests
                 */
                AWTQueueManager.prototype.pauseTransmission = function () {
                    this._paused = true;
                    this._httpManager.pause();
                    if (this.shouldDropEventsOnPause) {
                        this._queueSize -= (this._inboundQueues[Enums_1.AWTEventPriority.High][0].length +
                            this._inboundQueues[Enums_1.AWTEventPriority.Normal][0].length + this._inboundQueues[Enums_1.AWTEventPriority.Low][0].length);
                        this._inboundQueues[Enums_1.AWTEventPriority.High][0] = [];
                        this._inboundQueues[Enums_1.AWTEventPriority.Normal][0] = [];
                        this._inboundQueues[Enums_1.AWTEventPriority.Low][0] = [];
                        this._httpManager.removeQueuedRequests();
                    }
                };
                /**
                 * Resumes transmission of events.
                 */
                AWTQueueManager.prototype.resumeTransmission = function () {
                    this._paused = false;
                    this._httpManager.resume();
                };
                /**
                 * Determines whether events in the queues should be dropped when transmission is paused.
                 */
                AWTQueueManager.prototype.shouldDropEventsOnPause = function (shouldDropEventsOnPause) {
                    this._shouldDropEventsOnPause = shouldDropEventsOnPause;
                };
                /**
                 * Remove the first queues for all priorities in the inbound queues map. This is called
                 * when transmission manager has finished flushing the events in the old queues. We now make
                 * the next queue the primary queue.
                 */
                AWTQueueManager.prototype._removeFirstQueues = function () {
                    this._inboundQueues[Enums_1.AWTEventPriority.High].shift();
                    this._inboundQueues[Enums_1.AWTEventPriority.Normal].shift();
                    this._inboundQueues[Enums_1.AWTEventPriority.Low].shift();
                };
                /**
                 * Add empty queues for all priorities in the inbound queues map. This is called
                 * when Transmission Manager is being flushed. This ensures that new events added
                 * after flush are stored separately till we flush the current events.
                 */
                AWTQueueManager.prototype._addEmptyQueues = function () {
                    this._inboundQueues[Enums_1.AWTEventPriority.High].push([]);
                    this._inboundQueues[Enums_1.AWTEventPriority.Normal].push([]);
                    this._inboundQueues[Enums_1.AWTEventPriority.Low].push([]);
                };
                AWTQueueManager.prototype._addEventToProperQueue = function (event) {
                    if (!this._paused || !this._shouldDropEventsOnPause) {
                        this._queueSize++;
                        this._inboundQueues[event.priority][this._inboundQueues[event.priority].length - 1].push(event);
                    }
                };
                AWTQueueManager.prototype._dropEventWithPriorityOrLess = function (priority) {
                    var currentPriority = Enums_1.AWTEventPriority.Low;
                    while (currentPriority <= priority) {
                        if (this._inboundQueues[currentPriority][this._inboundQueues[currentPriority].length - 1].length > 0) {
                            //Dropped oldest event from lowest possible priority
                            AWTNotificationManager_1.default.eventsDropped([this._inboundQueues[currentPriority][this._inboundQueues[currentPriority].length - 1].shift()], Enums_1.AWTEventsDroppedReason.QueueFull);
                            return true;
                        }
                        currentPriority++;
                    }
                    return false;
                };
                AWTQueueManager.prototype._batchEvents = function (priority) {
                    var priorityToProcess = Enums_1.AWTEventPriority.High;
                    while (priorityToProcess >= priority) {
                        while (this._inboundQueues[priorityToProcess][0].length > 0) {
                            var event_1 = this._inboundQueues[priorityToProcess][0].pop();
                            this._queueSize--;
                            this._batcher.addEventToBatch(event_1);
                        }
                        priorityToProcess--;
                    }
                    this._batcher.flushBatch();
                };
                AWTQueueManager.prototype._uploadNow = function (callback) {
                    var _this = this;
                    if (this.hasEvents()) {
                        this.sendEventsForPriorityAndAbove(Enums_1.AWTEventPriority.Low);
                    }
                    this._checkOutboundQueueEmptyAndSent(function () {
                        //Move the next queues to be primary
                        _this._removeFirstQueues();
                        if (callback !== null && callback !== undefined) {
                            callback();
                        }
                        if (_this._uploadNowQueue.length > 0) {
                            setTimeout(function () { return _this._uploadNow(_this._uploadNowQueue.shift()); }, 0);
                        }
                        else {
                            _this._isCurrentlyUploadingNow = false;
                            if (_this.hasEvents()) {
                                AWTTransmissionManagerCore_1.default.scheduleTimer();
                            }
                        }
                    });
                };
                AWTQueueManager.prototype._checkOutboundQueueEmptyAndSent = function (callback) {
                    var _this = this;
                    if (this._httpManager.isCompletelyIdle()) {
                        callback();
                    }
                    else {
                        setTimeout(function () { return _this._checkOutboundQueueEmptyAndSent(callback); }, UploadNowCheckTimer);
                    }
                };
                return AWTQueueManager;
            }());
            exports.default = AWTQueueManager;
            /***/ 
        }),
        /* 29 */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var AWTTransmissionManagerCore_1 = __webpack_require__(3);
            /**
             * The AWTTransmissionManager calss is a wrapper class that exposes some of the
             * Transmission functionality needed by other Aria modules.
             */
            var AWTTransmissionManager = (function () {
                function AWTTransmissionManager() {
                }
                /**
                 * Sets the event handler used by the tranmission manager.
                 * The default event handler is the Inbound queue manager. This handler
                 * is used to batch and send events to Aria. If you intend to send events
                 * to Aria please make sure that your event handler forwards events to the Inbound
                 * Queue Manager. You can retrieve the Inbound Queue Manager by calling
                 * getEventsHandler before you set your handler.
                 * @param {object} eventsHandler - An AWTEventHandler event handler used by the tranmission
                 * manager.
                 */
                AWTTransmissionManager.setEventsHandler = function (eventsHandler) {
                    AWTTransmissionManagerCore_1.default.setEventsHandler(eventsHandler);
                };
                /**
                 * Gets the current event handler used by the tranmission manager.
                 * @return {object} An AWTEventHandler event handler used by the tranmission manager.
                 */
                AWTTransmissionManager.getEventsHandler = function () {
                    return AWTTransmissionManagerCore_1.default.getEventsHandler();
                };
                /**
                 * The scheduleTimer method tries to schedule the waiting period after which events are sent. If there are
                 * no events to be sent, or if there is already a timer scheduled, or if the
                 * http manager doesn't have any idle connections, then this method is no-op.
                 */
                AWTTransmissionManager.scheduleTimer = function () {
                    AWTTransmissionManagerCore_1.default.scheduleTimer();
                };
                return AWTTransmissionManager;
            }());
            exports.default = AWTTransmissionManager;
            /***/ 
        }),
        /* 30 */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(16);
            /***/ 
        })
    ]);
});
//# sourceMappingURL=aria-webjs-sdk-1.8.3.js.map 
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Constants = (function () {
            function Constants() {
            }
            return Constants;
        }());
        Constants.AppName = "appName";
        Constants.ClientUrl = "clientUrl";
        Constants.AppUrl = "appUrl";
        Constants.OrgLcid = "orgLcid";
        Constants.OrgUniqueName = "orgUniqueName";
        Constants.UserId = "userId";
        Constants.UserLcid = "userLcid";
        Constants.UserName = "username";
        Constants.UserRoles = "userRoles";
        Constants.OrgId = "orgId";
        Constants.crmVersion = "crmVersion";
        Constants.SuffixTabId = ".TabId";
        Constants.SuffixEntityName = ".EntityName";
        Constants.SuffixEntityId = ".EntityId";
        Constants.SuffixFlowId = ".flowId";
        Constants.SuffixPageType = ".PageType";
        Constants.SuffixPrimaryNameAttributeValue = ".PrimaryNameAttributeValue";
        Constants.OutputResult = "result";
        Constants.StatusSucceded = "Succeeded";
        Constants.StatusFailed = "Failed";
        Constants.StatusSkipped = "Skipped";
        Constants.ActionSuccessfull = "Action performed successfully";
        Constants.SplitByDot = ".";
        Constants.typeOfExecution = "Microsoft.Logic/workflows/runs";
        Constants.typeOfDefinition = "Microsoft.Logic/workflows/versions";
        Constants.DIALOG_FLOW_ID = "flow_id";
        Constants.DIALOG_FLOWS_ENVIRONMENT_ID = "environment_id";
        Constants.DIALOG_ORG_UNIQUE_NAME = "org_unique_name";
        Constants.DIALOG_ENTITY_LOGICAL_COLLECTION_NAME = "entity_logical_collection_name";
        Constants.DIALOG_ENTITY_LOGICAL_NAME = "entity_logical_name";
        Constants.DIALOG_DYNAMICS365_ACCESS_TOKEN = "dynamics365_access_token";
        Constants.DIALOG_FLOWS_AUTHENTICATION_STRING = "flows_authentication_string";
        Constants.DIALOG_DYNAMICS_365_ACCESS_TOKEN = "dynamics365_access_token";
        Constants.DIALOG_FLOWS_DESTINATION_URL = "flows_destination_url";
        Constants.DIALOG_FLOWS_FPI_SITE_URL = "flows_fpi_site_url";
        Constants.DIALOG_FLOWS_ENABLE_WIDGET_V2 = "flows_enable_widget_v2";
        Constants.FLOW_DESTINATION_URL = "MicrosoftFlowDestinationUrl";
        Constants.FLOW_FPI_URL = "MicrosoftFlowFirstPartyIntegrationSiteUrl";
        Constants.FLOW_FPI_URL_ENABLE_WIDGET_V2_PARAMETER = "&flowsEnableWidgetV2=true";
        Constants.DIALOG_HEIGHT = 600;
        Constants.DIALOG_WIDTH = 600;
        Constants.MICROSOFT_FLOWS_DIALOG = "MicrosoftFlowsDialog";
        Constants.FLOW_ENV_ID = "Flow_Env_Id";
        Constants.ENTITIES_ID = "entity_ids";
        Constants.POST_REQUEST = "POST";
        Constants.ENTITY_LOGICAL_NAME = "entityLogicalName";
        Constants.ENTITY_LOGICAL_COLLECTION_NAME = "entityLogicalCollectionName";
        Constants.FLOW_ID = "flowId";
        ProductivityMacros.Constants = Constants;
        var ActionTypes = (function () {
            function ActionTypes() {
            }
            return ActionTypes;
        }());
        ActionTypes.CREATE_NEW = "Create_New";
        ActionTypes.OPEN_FORM = "Open_Form";
        ActionTypes.OPEN_GRID = "Open_Grid";
        ActionTypes.OPEN_KNOWLEDGE_SEARCH = "Open_knowledge_search";
        ActionTypes.SEARCH_KNOWLEDGE_BASE = "Search_knowledge_base";
        ActionTypes.SEARCH_BY_RELEVANCE = "Search_by_relevance";
        ActionTypes.UPDATE_RECORD = "Update_Record";
        ActionTypes.OPEN_ASSOCIATED = "Open_Associated";
        ActionTypes.DRAFT_EMAIL = "Draft_Email";
        ActionTypes.GET_ENVIRONMENT = "Get_Environment";
        ActionTypes.RESOLVE_INCIDENT = "Resolve_Case";
        //P2
        ActionTypes.OPEN_DASHBOARD = "Open_Dashboard";
        ActionTypes.LIST_FLOWS = "List_Flows";
        ProductivityMacros.ActionTypes = ActionTypes;
        var Attributes = (function () {
            function Attributes() {
            }
            return Attributes;
        }());
        Attributes.commmonAttributes = ["modifiedby", "createdby", "createdonbehalfby", "createdon", "statuscode", "statecode", "ownerid", "modifiedon", "owningbusinessunit", "FormattedValue", "owninguser"];
        ProductivityMacros.Attributes = Attributes;
        var SlugPrefix = (function () {
            function SlugPrefix() {
            }
            return SlugPrefix;
        }());
        SlugPrefix.SPLIT_BY_OPENING_BRACKET = "(";
        SlugPrefix.SPLIT_BY_DOT = ".";
        SlugPrefix.SPLIT_BY_COMMA = ",";
        SlugPrefix.SPLIT_BY_DOLLAR = "$";
        ProductivityMacros.SlugPrefix = SlugPrefix;
        var EntityName = (function () {
            function EntityName() {
            }
            return EntityName;
        }());
        EntityName.ActionTemplateEntityName = "msdyn_productivitymacroactiontemplate";
        EntityName.ConnectorEntityName = "msdyn_productivitymacroconnector";
        EntityName.RunHistoryEntity = "msdyn_macrosession";
        EntityName.WorkflowEntity = "workflow";
        ProductivityMacros.EntityName = EntityName;
        var OpenAppTabType = (function () {
            function OpenAppTabType() {
            }
            return OpenAppTabType;
        }());
        OpenAppTabType.Data = "data";
        OpenAppTabType.Url = "url";
        OpenAppTabType.Relationship = "relationship";
        OpenAppTabType.CreateFromEntity = "createfromentity";
        OpenAppTabType.SearchType = "searchtype";
        OpenAppTabType.CustomControlInputString = "customcontrol";
        OpenAppTabType.ThirdPartyWebsiteInputString = "websiteurl";
        OpenAppTabType.ThirdPartyWebsiteInputString1 = "thirdpartywebsite";
        OpenAppTabType.EntityViewInputString = "entityview";
        OpenAppTabType.DashboardInputString = "dashboard";
        OpenAppTabType.EntityRecordInputString = "entityrecord";
        OpenAppTabType.EntitySearchInputString = "entitysearch";
        OpenAppTabType.WebResourceInputString = "webresource";
        OpenAppTabType.Control = "control";
        OpenAppTabType.Dashboard = "dashboard";
        OpenAppTabType.Entitylist = "entitylist";
        OpenAppTabType.Entityrecord = "entityrecord";
        OpenAppTabType.Search = "search";
        OpenAppTabType.Webresource = "webresource";
        OpenAppTabType.ThirdPartyWebsite = "webresource"; //ThirdPartyWebsite
        OpenAppTabType.Custom = "custom";
        ProductivityMacros.OpenAppTabType = OpenAppTabType;
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="../../TypeDefinitions/msdyn_MacrosDataLayer.d.ts" />
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="Constants.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            var FPIHelper = (function () {
                function FPIHelper() {
                    this.instanceIdentifier = Date.now().toString();
                    this.MacrosDataLayer = window.top.Microsoft.ProductivityMacros.MacrosDataLayer;
                }
                FPIHelper.prototype.isNullUndefinedorEmpty = function (variable) {
                    if (variable === null || variable === undefined || variable === "") {
                        return true;
                    }
                    return false;
                };
                /**
                    * Initialize Fpi Helper Lib instance and register consumer
                    */
                FPIHelper.prototype.initializeFpiHelper = function () {
                    if (FPIHelper.isFpiHelperInitialized) {
                        return;
                    }
                    FPIHelper.dataHelper = this.MacrosDataLayer.DataHelper.getInstance();
                    this.MacrosDataLayer.DataHelper.registerConsumer(this.instanceIdentifier);
                    FPIHelper.isFpiHelperInitialized = true;
                };
                FPIHelper.prototype.fetchFlowsEnvId = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var requestContent;
                        return __generator(this, function (_a) {
                            if (FPIHelper.isFpiHelperInitialized == false) {
                                this.initializeFpiHelper();
                            }
                            requestContent = new this.MacrosDataLayer.FlowRequestContext(this.instanceIdentifier, this.getRandomString());
                            return [2 /*return*/, FPIHelper.dataHelper.FlowClient.getEnvironment(requestContent)];
                        });
                    });
                };
                /**
                    * Generates random string
                    */
                FPIHelper.prototype.getRandomString = function () {
                    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                };
                return FPIHelper;
            }());
            FPIHelper.dataHelper = null;
            //Fpi helper library reference      
            FPIHelper.isFpiHelperInitialized = false;
            Internal.FPIHelper = FPIHelper;
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="../Libraries/requirejs/require.d.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            var ProductivityMacroOperation = (function () {
                function ProductivityMacroOperation() {
                }
                ProductivityMacroOperation.InitMacroActionTemplates = function () {
                    return new Promise(function (resolve, reject) {
                        if (ProductivityMacroOperation.macroActionTemplates.size > 0 && ProductivityMacroOperation.isWebResourceLoaded == true) {
                            return resolve(true);
                        }
                        var mPromises = [];
                        mPromises.push(Xrm.WebApi.retrieveMultipleRecords(ProductivityMacros.EntityName.ActionTemplateEntityName, "?$select=msdyn_name,msdyn_title,msdyn_runtimeapi"));
                        mPromises.push(Xrm.WebApi.retrieveMultipleRecords(ProductivityMacros.EntityName.ConnectorEntityName, "?$select=msdyn_prefix,msdyn_callback,msdyn_webresourcename"));
                        Promise.all(mPromises).then(function (results) {
                            results[0].entities.forEach(function (value) {
                                ProductivityMacroOperation.macroActionTemplates.set(value["msdyn_name"], new ProductivityMacroActionTemplate(value["msdyn_productivitymacroactiontemplateid"], value["msdyn_name"], value["msdyn_title"], value["msdyn_runtimeapi"]));
                            });
                            results[1].entities.forEach(function (value) {
                                ProductivityMacroOperation.macroConnectorTemplates.set(value["msdyn_prefix"].toLowerCase(), new ProductivityMacroConnector(value["msdyn_prefix"].toLowerCase(), value["msdyn_callback"], value["msdyn_webresourcename"]));
                            });
                            loadWebResource().then(function (result) {
                                ProductivityMacroOperation.isWebResourceLoaded = true;
                                return resolve(true);
                            }, function (error) {
                                return reject(error);
                            });
                        }, function (error) {
                            return reject(error);
                        });
                    });
                };
                return ProductivityMacroOperation;
            }());
            ProductivityMacroOperation.macroActionTemplates = new Map();
            ProductivityMacroOperation.macroConnectorTemplates = new Map();
            ProductivityMacroOperation.isWebResourceLoaded = false;
            Internal.ProductivityMacroOperation = ProductivityMacroOperation;
            var ProductivityMacroActionTemplate = (function () {
                function ProductivityMacroActionTemplate(templateId, actionName, actionTitle, actionRuntimeAPI) {
                    this._templateId = templateId;
                    this._name = actionName;
                    this._title = actionTitle;
                    this._runtimeAPI = actionRuntimeAPI;
                }
                Object.defineProperty(ProductivityMacroActionTemplate.prototype, "runtimeAPI", {
                    get: function () {
                        return this._runtimeAPI;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ProductivityMacroActionTemplate;
            }());
            Internal.ProductivityMacroActionTemplate = ProductivityMacroActionTemplate;
            var ProductivityMacroConnector = (function () {
                function ProductivityMacroConnector(prefix, callback, webresourceName) {
                    this._prefix = prefix;
                    this._callback = callback;
                    this._webresourceName = webresourceName;
                }
                Object.defineProperty(ProductivityMacroConnector.prototype, "callback", {
                    get: function () {
                        return this._callback;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProductivityMacroConnector.prototype, "webresourceName", {
                    get: function () {
                        return this._webresourceName;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ProductivityMacroConnector;
            }());
            Internal.ProductivityMacroConnector = ProductivityMacroConnector;
            function loadWebResource() {
                return new Promise(function (resolve, reject) {
                    var webresources = {};
                    var resources = [];
                    if (Internal.ProductivityMacroOperation.macroConnectorTemplates.size === 0) {
                        return resolve(true);
                    }
                    var serverUrl = ((window.top).Xrm).Page.context.getClientUrl();
                    if (serverUrl.match(/\/$/)) {
                        serverUrl = serverUrl.substring(0, serverUrl.length - 1);
                    }
                    Internal.ProductivityMacroOperation.macroConnectorTemplates.forEach(function (value, key, map) {
                        var webresourcename = value.webresourceName;
                        if (!Internal.isNullOrUndefined(webresourcename)) {
                            webresources[webresourcename] = false;
                        }
                    });
                    var promises = [];
                    if (Object.keys(webresources).length > 0) {
                        Object.keys(webresources).forEach(function (key) {
                            promises.push(findDepedency(key, webresources));
                        });
                    }
                    else {
                        return resolve("success");
                    }
                    Promise.all(promises).then(function (results) {
                        Object.keys(webresources).forEach(function (key) {
                            resources.push(serverUrl + "/webresources/" + key);
                        });
                        require(resources, function (library) {
                            return resolve("success");
                        });
                        requirejs.onError = function (err) {
                            return reject(err);
                        };
                    }, function (error) {
                        return reject(error);
                    });
                });
            }
            function findDepedency(webresourcename, webresources) {
                if (webresources[webresourcename] == false) {
                    webresources[webresourcename] = true;
                    return new Promise(function (resolve, reject) {
                        Xrm.WebApi.retrieveMultipleRecords("webresource", "?$select=name,dependencyxml,webresourceid&$filter=name%20eq%20%27" + webresourcename + "%27").then(function (result) {
                            if (result.entities.length > 0) {
                                result.entities.forEach(function (value, index, array) {
                                    var dependencyResources = getDependendency(value["dependencyxml"]);
                                    if (dependencyResources.length > 0) {
                                        var promises_1 = [];
                                        dependencyResources.forEach(function (value, index, array) {
                                            if (!(value in webresources)) {
                                                if (isResx(value)) {
                                                    webresources[value] = true;
                                                }
                                                else {
                                                    webresources[value] = false;
                                                    promises_1.push(findDepedency(value, webresources));
                                                }
                                            }
                                            else if (webresources[value] == false) {
                                                promises_1.push(findDepedency(value, webresources));
                                            }
                                        });
                                        Promise.all(promises_1).then(function (results) {
                                            resolve("success");
                                        }, function (error) {
                                            return reject(error);
                                        });
                                    }
                                    else {
                                        resolve("success");
                                    }
                                });
                            }
                            else {
                                console.log("Failed to find " + webresourcename);
                                resolve("success"); //Resolving as success here as error as this point won't be caught in run history
                            }
                        }, function (error) {
                            reject(error);
                        });
                    });
                }
            }
            function getDependendency(dependencyxml) {
                var dependentResources = [];
                var parsedXml = window.top.$.parseXML(dependencyxml);
                var dependencyElement = parsedXml.documentElement.getElementsByTagName("Dependency");
                for (var i = 0; i < dependencyElement.length; i++) {
                    var libraries = dependencyElement[i].getElementsByTagName("Library");
                    for (var l = 0; l < libraries.length; l++) {
                        var webresourceName = libraries[l].getAttribute("name");
                        if (!Internal.isNullOrUndefined(webresourceName)) {
                            dependentResources.push(webresourceName);
                        }
                    }
                }
                return dependentResources;
            }
            function isResx(resourceName) {
                var type = resourceName.substring(resourceName.length - 4);
                if (type === "resx") {
                    return true;
                }
                else {
                    return false;
                }
            }
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            /**
             * All Constants related to Telemetry should go here
            */
            var TelemetryConstants;
            (function (TelemetryConstants) {
                TelemetryConstants.macroVersion = "MacrosSolVersion";
                TelemetryConstants.macroActionName = "ActionName";
                TelemetryConstants.macroActionResult = "ActionResult";
                TelemetryConstants.appId = "AppId";
                TelemetryConstants.clientType = "ClientType";
                TelemetryConstants.crmVersion = "CrmVersion";
                TelemetryConstants.orgId = "OrganizationId";
                TelemetryConstants.orgName = "OrganizationName";
                TelemetryConstants.startTime = "StartTime";
                TelemetryConstants.timeTaken = "TimeTaken";
                TelemetryConstants.telemetryData = "APIPerfMarkers";
                TelemetryConstants.isError = "IsError";
                TelemetryConstants.errorMessage = "ErrorMessage";
                TelemetryConstants.errorType = "ErrorType";
                TelemetryConstants.errorReportTime = "ErrorReportTime";
                TelemetryConstants.errorFunction = "ErrorFunction";
                TelemetryConstants.macrosRuntimeTable = "D365_Macros_Runtime";
                TelemetryConstants.macrosAdminTable = "D365_Macros_Admin";
                TelemetryConstants.userId = "UserID";
                TelemetryConstants.navigationType = "NavType";
                TelemetryConstants.multiSession = "Multi Session";
                TelemetryConstants.singleSession = "Single Session";
                TelemetryConstants.correlationId = "CorrelationId";
                TelemetryConstants.adminDesignerInstanceId = "designerInstanceId";
                TelemetryConstants.adminEventName = "eventName";
                TelemetryConstants.adminEventCorrelationId = "eventCorrelationId";
                TelemetryConstants.adminMessage = "message";
                TelemetryConstants.adminEventData = "eventData";
                TelemetryConstants.adminEventTimeStamp = "eventTimeStamp";
                TelemetryConstants.adminEventType = "eventType";
                TelemetryConstants.adminLevel = "level";
                TelemetryConstants.adminException = "exception";
                TelemetryConstants.adminEventId = "eventId";
            })(TelemetryConstants = Internal.TelemetryConstants || (Internal.TelemetryConstants = {}));
            var errorTypes;
            (function (errorTypes) {
                errorTypes[errorTypes["InvalidParams"] = 0] = "InvalidParams";
                errorTypes[errorTypes["TimeOut"] = 1] = "TimeOut";
                errorTypes[errorTypes["XrmApiError"] = 2] = "XrmApiError";
                errorTypes[errorTypes["GenericError"] = 3] = "GenericError";
            })(errorTypes = Internal.errorTypes || (Internal.errorTypes = {}));
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="TelemetryConstants.ts" />
/// <reference path="CRMClients/aria-webjs-sdk-1.8.3.d.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            Internal.crmVersion = "";
            Internal.orgId = "";
            var prodIngestionKey = "15742b0e58eb4711bc046acff53e7165-1bfb5a4d-2ecc-4c51-8271-a773c63f58de-6809";
            var devIngestionKey = "22fdf28125b2493787078364a7ffe42e-28bf5791-b218-4f89-8d06-8135775da123-7269";
            var GERMANY_ENDPOINT = "https://de.pipe.aria.microsoft.com/Collector/3.0/";
            var GCCH_ENDPOINT = "https://tb.pipe.aria.microsoft.com/Collector/3.0/";
            var DOD_ENDPOINT = "https://pf.pipe.aria.microsoft.com/Collector/3.0";
            var EUROPE_ENDPOINT = "https://eu.pipe.aria.microsoft.com/Collector/3.0/";
            var MOONCAKE_ENDPOINT = ""; // Add MoonCake ARIA Endpoint whenever available
            function initializeTelemetry() {
                var domain = getDomain();
                var logConfig = getConfiguration(domain);
                if (domain == "Dev") {
                    macrosLogger = AWTLogManager.initialize(devIngestionKey, logConfig);
                }
                else {
                    macrosLogger = AWTLogManager.initialize(prodIngestionKey, logConfig);
                }
                AWTLogManager.addNotificationListener({
                    eventsSent: function (events) {
                        console.log("CIF Telemetry - Number of Events Sent: " + events.length);
                    },
                    eventsDropped: function (events, reason) {
                        console.log("CIF Telemetry - Number of Events Dropped: " + events.length);
                    }
                });
            }
            Internal.initializeTelemetry = initializeTelemetry;
            // Returns the Host Name
            function getHost() {
                var hostValue = window.location.host;
                if (!hostValue) {
                    hostValue = window.parent.location.host;
                }
                return hostValue;
            }
            // Returns the Domain of the Org
            function getDomain() {
                var hostValue = getHost();
                // Need to add checks for MoonCake(China) and Europe Orgs, if needed
                if (hostValue.endsWith("dod-crm.microsoftdynamics.us"))
                    return "DoD";
                else if (hostValue.endsWith("crm9.dynamics.com") || hostValue.endsWith("crm.microsoftdynamics.us"))
                    return "GCCHigh";
                else if (hostValue.endsWith("crm.microsoftdynamics.de"))
                    return "BlackForest";
                else if (hostValue.endsWith("crm.dynamics.cn"))
                    return "MoonCake";
                else if (hostValue.endsWith("crm4.dynamics.com"))
                    return "Europe";
                else if (hostValue.endsWith("extest.microsoft.com") || hostValue.endsWith("crm10.dynamics.com") || hostValue.endsWith("crm.crmlivetie.com")
                    || hostValue.endsWith("crm2.crmlivetie.com") || hostValue.endsWith("contoso.com:444") || hostValue.endsWith("microsoft.com")
                    || hostValue.endsWith("msmecrm.com") || hostValue.endsWith("crm.crmlivetoday.com") || hostValue.endsWith("crm.1boxtest.com")
                    || hostValue.endsWith("crm.crmifd.com") || hostValue.endsWith("msmecrm.com:444") || hostValue.search("localhost") == 0)
                    return "Dev";
                else
                    return "Public";
            }
            // Returns the ARIA configuration for the environment type
            function getConfiguration(domain) {
                var logConfiguration = {};
                // Disables the logging of Device ID
                logConfiguration.disableCookiesUsage = true;
                switch (domain) {
                    case "GCCHigh":
                        logConfiguration.collectorUri = GCCH_ENDPOINT;
                        break;
                    case "DoD":
                        logConfiguration.collectorUri = DOD_ENDPOINT;
                        break;
                    case "BlackForest":
                        logConfiguration.collectorUri = GERMANY_ENDPOINT;
                        break;
                    case "Europe":
                        logConfiguration.collectorUri = EUROPE_ENDPOINT;
                        break;
                }
                return logConfiguration;
            }
            function getNavigationType() {
                return Internal.TelemetryConstants.multiSession;
            }
            function getAppId() {
                return top.location.search.split('appid=')[1].split('&')[0];
            }
            function getMacroVersion() {
                var MacrosVersion = "";
                window.top.Xrm.WebApi.retrieveMultipleRecords("msdyn_productivitymacrosolutionconfiguration", "?$top=1").then(function (result) {
                    if (result && result.entities) {
                        MacrosVersion = result.entities[0].msdyn_macrosversion;
                    }
                });
                return MacrosVersion;
            }
            function getClientType() {
                return window.top.Xrm.Utility.getGlobalContext().client.getClient();
            }
            function getCrmVersion() {
                return window.top.Xrm.Utility.getGlobalContext().getVersion();
            }
            function getOrgId() {
                return window.top.Xrm.Utility.getGlobalContext().organizationSettings.organizationId;
            }
            function getOrgName() {
                return window.top.Xrm.Utility.getGlobalContext().organizationSettings.uniqueName;
            }
            function getUserId() {
                return window.top.Xrm.Utility.getGlobalContext().userSettings.userId;
            }
            // API for Error Telemetry
            function logFailure(actionName, errorObject, correlationid) {
                var usageData = new UsageTelemetryData(actionName, "Failure", {}, correlationid, true, errorObject);
                setMacrosRuntimeData(usageData);
            }
            Internal.logFailure = logFailure;
            // Generates the IErrorHandler for logging purpose
            function generateErrorObject(error, sourceFunction, errorType) {
                var errorData = {};
                try {
                    errorData.errorMsg = error.get("message");
                }
                catch (e) {
                    errorData.errorMsg = error.message;
                }
                errorData.sourceFunc = sourceFunction;
                errorData.errorType = errorType;
                errorData.reportTime = new Date().toUTCString();
                return errorData;
            }
            Internal.generateErrorObject = generateErrorObject;
            function logNestedApiData(telemetryData, startTime, timetaken, apiName, additionalData) {
                var ApiData = new Object();
                ApiData["StartTime"] = startTime.toUTCString();
                ApiData["TimeTaken"] = timetaken;
                if (additionalData) {
                    ApiData["AdditionalDetails"] = additionalData;
                }
                if (telemetryData) {
                    telemetryData[apiName] = ApiData;
                }
            }
            Internal.logNestedApiData = logNestedApiData;
            // API to log Success Scenario
            function logSuccess(actionName, correlationId, telemetryData) {
                if (!telemetryData)
                    telemetryData = {};
                var usageData = new UsageTelemetryData(actionName, "Success", telemetryData, correlationId, false);
                setMacrosRuntimeData(usageData);
            }
            Internal.logSuccess = logSuccess;
            function setMacrosAdminData(data) {
                var AdminTelemetry = new AWTEventProperties();
                AdminTelemetry.setName(Internal.TelemetryConstants.macrosAdminTable);
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminDesignerInstanceId, data.designerInstanceId ? data.designerInstanceId : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventName, data.eventName ? data.eventName : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventCorrelationId, data.eventCorrelationId ? data.eventCorrelationId : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminMessage, data.message ? data.message : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventData, data.eventData ? data.eventData : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventId, data.eventId ? data.eventId : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventTimeStamp, data.eventTimeStamp ? data.eventTimeStamp : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminEventType, data.eventType ? data.eventType : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminLevel, data.level ? data.level : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.adminException, data.exception ? data.exception : "");
                AdminTelemetry.setProperty(Internal.TelemetryConstants.macroVersion, getMacroVersion());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.appId, getAppId());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.clientType, getClientType());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, getCrmVersion());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.orgId, getOrgId());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.orgName, getOrgName());
                AdminTelemetry.setProperty(Internal.TelemetryConstants.userId, getUserId());
                macrosLogger.logEvent(AdminTelemetry);
            }
            Internal.setMacrosAdminData = setMacrosAdminData;
            // Function to populate the Macros Runtime Data Telemetry
            function setMacrosRuntimeData(data) {
                var RuntimeTelemetry = new AWTEventProperties();
                RuntimeTelemetry.setName(Internal.TelemetryConstants.macrosRuntimeTable);
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.macroActionName, data.MacrosActionName);
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.macroActionResult, data.MacrosActionResult);
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.telemetryData, data.TelemetryData ? JSON.stringify(data.TelemetryData) : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.isError, data.IsError ? data.IsError : false);
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.errorFunction, data.ErrorObject ? data.ErrorObject.sourceFunc : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.errorMessage, data.ErrorObject ? data.ErrorObject.errorMsg : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.errorType, data.ErrorObject ? Internal.errorTypes[data.ErrorObject.errorType] : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.errorReportTime, data.ErrorObject ? data.ErrorObject.reportTime : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.correlationId, data.CorrelationId ? data.CorrelationId : "");
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.macroVersion, getMacroVersion());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.appId, getAppId());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.navigationType, getNavigationType());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.clientType, getClientType());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.crmVersion, getCrmVersion());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.orgId, getOrgId());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.orgName, getOrgName());
                RuntimeTelemetry.setProperty(Internal.TelemetryConstants.userId, getUserId());
                macrosLogger.logEvent(RuntimeTelemetry);
            }
            var UsageTelemetryData = (function () {
                function UsageTelemetryData(MacrosActionName, MacrosActionResult, TelemetryData, CorrelationId, IsError, errorObject) {
                    this.MacrosActionName = MacrosActionName ? MacrosActionName : "";
                    this.MacrosActionResult = MacrosActionResult ? MacrosActionResult : "";
                    this.TelemetryData = TelemetryData ? TelemetryData : {};
                    this.CorrelationId = CorrelationId ? CorrelationId : "";
                    this.IsError = IsError ? IsError : false;
                    this.ErrorObject = errorObject ? errorObject : {};
                }
                return UsageTelemetryData;
            }());
            Internal.UsageTelemetryData = UsageTelemetryData;
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="../Interfaces.ts" />
/// <reference path="../LogicAppExecutor.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        var IfAction = (function () {
            function IfAction() {
            }
            Object.defineProperty(IfAction, "Instance", {
                get: function () {
                    if (!IfAction._instance) {
                        IfAction._instance = new IfAction();
                    }
                    return IfAction._instance;
                },
                enumerable: true,
                configurable: true
            });
            IfAction.prototype.ExecuteAction = function (action, state, runHistoryData) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var expressions = action.expression;
                    var startTime = new Date().toISOString();
                    var outputs = {};
                    _this.evaluateExpression(expressions, state).then(function (result) {
                        var innerActions;
                        if (result) {
                            innerActions = action.actions;
                            status = Microsoft.ProductivityMacros.Constants.StatusSucceded;
                            var trueInput = {
                                "expressionResult": true
                            };
                            Microsoft.ProductivityMacros.RunHistory.setActionStatus(runHistoryData, status, startTime, outputs, action.name, trueInput);
                        }
                        else {
                            if (action.else) {
                                innerActions = action.else.actions;
                            }
                            status = Microsoft.ProductivityMacros.Constants.StatusFailed;
                            var falseInput = {
                                "expressionResult": false
                            };
                            Microsoft.ProductivityMacros.RunHistory.setActionStatus(runHistoryData, status, startTime, outputs, action.name, falseInput);
                        }
                        var executeActionPromise = LogicAppExecutor.ExecuteActions(innerActions, state, runHistoryData).then(function (result) {
                            return (result);
                        }, function (error) {
                            reject(error);
                        });
                        executeActionPromise.then(function (success) {
                            console.log(success);
                            resolve(success);
                        }, function (error) {
                            reject(error);
                        });
                    }, function (error) {
                        reject(error);
                    });
                });
            };
            IfAction.prototype.evaluateExpression = function (expressions, state) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var _loop_1 = function (expression) {
                        var operator = expression;
                        switch (operator) {
                            case "and":
                                var innerExpressions = expressions[expression];
                                promises = [];
                                for (var exp in innerExpressions) {
                                    promiseResult = _this.evaluateExpression(innerExpressions[exp], state).then(function (result) {
                                        if (!result) {
                                            return resolve(result);
                                        }
                                    }, function (error) {
                                        reject(error);
                                    });
                                    promises.push(promiseResult);
                                }
                                Promise.all(promises).then(function (success) {
                                    return resolve(true);
                                }, function (error) {
                                    reject(error);
                                });
                                break;
                            case "or":
                                var innerExprs = expressions[expression];
                                orPromises = [];
                                for (var exp in innerExprs) {
                                    promiseResult = _this.evaluateExpression(innerExprs[exp], state).then(function (result) {
                                        if (result) {
                                            return resolve(result);
                                        }
                                    }, function (error) {
                                        reject(error);
                                    });
                                    orPromises.push(promiseResult);
                                }
                                Promise.all(orPromises).then(function (success) {
                                    return resolve(false);
                                }, function (error) {
                                    reject(error);
                                });
                                break;
                            case "not":
                                _this.evaluateExpression(expressions[expression], state).then(function (success) {
                                    console.log(success);
                                    return resolve(!success);
                                }, function (error) {
                                    reject(error);
                                });
                                break;
                            default:
                                slugPromises = [];
                                slugPromises.push(LogicAppExecutor.resolveSlug(expressions[expression][0], state.stateParams).then(function (lhs) {
                                    try {
                                        console.log("LHS : " + lhs);
                                        lhsValue = lhs;
                                    }
                                    catch (ex) {
                                        console.log(ex);
                                        reject(ex);
                                    }
                                }.bind(_this), function (error) {
                                    reject(error);
                                }));
                                slugPromises.push(LogicAppExecutor.resolveSlug(expressions[expression][1], state.stateParams).then(function (rhs) {
                                    try {
                                        console.log("RHS : " + rhs);
                                        rhsValue = rhs;
                                    }
                                    catch (ex) {
                                        console.log(ex);
                                        reject(ex);
                                    }
                                }.bind(_this), function (error) {
                                    reject(error);
                                }));
                                Promise.all(slugPromises).then(function (result) {
                                    return resolve(this.evaluateOperation(lhsValue, rhsValue, operator));
                                }.bind(_this), function (error) {
                                    reject(error);
                                });
                        }
                    };
                    var promises, promiseResult, orPromises, promiseResult, slugPromises, lhsValue, rhsValue;
                    for (var expression in expressions) {
                        _loop_1(expression);
                    }
                });
            };
            IfAction.prototype.evaluateOperation = function (lhs, rhs, operator) {
                try {
                    switch (operator) {
                        case "greater":
                            return (lhs > rhs);
                        case "less":
                            return (lhs < rhs);
                        case "equals":
                            return (lhs == rhs);
                        case "greaterOrEquals":
                            return (lhs >= rhs);
                        case "lessOrEquals":
                            return (lhs <= rhs);
                        case "startsWith":
                            return lhs.toString().startsWith(rhs.toString());
                        case "endsWith":
                            return lhs.toString().endsWith(rhs.toString());
                        case "contains":
                            return lhs.toString().includes(rhs.toString());
                    }
                }
                catch (ex) {
                    console.log(ex);
                    throw ex;
                }
            };
            return IfAction;
        }());
        IfAction._instance = null;
        LogicAppExecutor.IfAction = IfAction;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="../Interfaces.ts" />
/// <reference path="../LogicAppExecutor.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        var SetDefaultCallScriptAction = (function () {
            function SetDefaultCallScriptAction() {
            }
            Object.defineProperty(SetDefaultCallScriptAction, "Instance", {
                get: function () {
                    if (!SetDefaultCallScriptAction._instance) {
                        SetDefaultCallScriptAction._instance = new SetDefaultCallScriptAction();
                    }
                    return SetDefaultCallScriptAction._instance;
                },
                enumerable: true,
                configurable: true
            });
            SetDefaultCallScriptAction.prototype.ExecuteAction = function (action, state, runHistoryData) {
                return new Promise(function (resolve, reject) {
                    console.log(action.inputs);
                    return resolve(action.inputs.callscriptId);
                });
            };
            return SetDefaultCallScriptAction;
        }());
        SetDefaultCallScriptAction._instance = null;
        LogicAppExecutor.SetDefaultCallScriptAction = SetDefaultCallScriptAction;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="Constants.ts" />
/// <reference path="LogicAppExecutor/Interfaces.ts" />
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var RunHistory;
        (function (RunHistory) {
            function newGuid() {
                return (getRandomGuidSubstr(null) +
                    getRandomGuidSubstr(true) +
                    getRandomGuidSubstr(true) +
                    getRandomGuidSubstr(null));
            }
            function getRandomGuidSubstr(s) {
                var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
            }
            function initializeRunHistoryJSON(data, inputJSONstring, macroName) {
                data.id = newGuid();
                data.startTime = new Date().toISOString();
                data.waitEndTime = data.startTime;
                data.type = Microsoft.ProductivityMacros.Constants.typeOfExecution;
                data.name = macroName;
                data.definition = {};
                data.definition.triggers = JSON.parse(inputJSONstring).definition.triggers;
                //data.definition.triggers.status = "Succeeded" // TODO: What to do if trigger can also execute
                data.trigger = {
                    "name": Object.keys(data.definition.triggers)[0],
                    "startTime": data.startTime,
                    "status": Microsoft.ProductivityMacros.Constants.StatusSucceded,
                    "scheduledTime": data.startTime,
                    "endTime": data.startTime
                };
                data.definition.contentVersion = JSON.parse(inputJSONstring).definition.contentVersion;
                data.definition.id = newGuid();
                data.definition.version = data.definition.id;
                data.definition.name = data.definition.id;
                data.definition.type = Microsoft.ProductivityMacros.Constants.typeOfDefinition;
                data.definition.$schema = JSON.parse(inputJSONstring).definition.$schema;
                return data;
            }
            RunHistory.initializeRunHistoryJSON = initializeRunHistoryJSON;
            function initializeDefinition(data, result) {
                data.definition = {};
                data.definition.createdTime = result.entities[0].createdon;
                data.definition.changedTime = result.entities[0].modifiedon;
            }
            RunHistory.initializeDefinition = initializeDefinition;
            function setActionsInConditionJSON(data, sessionID) {
                var keys = Object.keys(data);
                for (var i = 0; i < keys.length; i++) {
                    if (keys[i].startsWith("Condition")) {
                        data[keys[i]] = {
                            id: sessionID + "/actions/" + keys[i],
                            name: keys[i],
                            type: data[keys[i]].type,
                            runAfter: data[keys[i]].runAfter,
                            status: Microsoft.ProductivityMacros.Constants.StatusSkipped,
                            actions: data[keys[i]].actions,
                            else: data[keys[i]].else,
                            expression: data[keys[i]].expression,
                            inputs: data[keys[i]].inputs
                        };
                        data[keys[i]].actions = setActionsInConditionJSON(data[keys[i]].actions, sessionID);
                        if (data[keys[i]].else) {
                            data[keys[i]].else.actions = setActionsInConditionJSON(data[keys[i]].else.actions, sessionID);
                        }
                    }
                    else {
                        data[keys[i]] = {
                            id: sessionID + "/actions/" + keys[i],
                            name: keys[i],
                            type: data[keys[i]].type,
                            runAfter: data[keys[i]].runAfter,
                            status: Microsoft.ProductivityMacros.Constants.StatusSkipped,
                            inputs: data[keys[i]].inputs
                        };
                    }
                }
                return data;
            }
            function setActionsInJSON(data, actions, sessionID) {
                for (var i = 0; i < actions.length; i++) {
                    if (actions[i].name.startsWith("Condition")) {
                        data[actions[i].name] = {
                            id: sessionID + "/actions/" + actions[i].name,
                            name: actions[i].name,
                            type: actions[i].type,
                            runAfter: actions[i].runAfter,
                            status: Microsoft.ProductivityMacros.Constants.StatusSkipped,
                            actions: actions[i].actions,
                            else: actions[i].else,
                            expression: actions[i].expression,
                            inputs: actions[i].inputs
                        };
                        data[actions[i].name].actions = setActionsInConditionJSON(data[actions[i].name].actions, sessionID);
                        if (data[actions[i].name].else) {
                            data[actions[i].name].else.actions = setActionsInConditionJSON(data[actions[i].name].else.actions, sessionID);
                        }
                    }
                    else {
                        data[actions[i].name] = {
                            id: sessionID + "/actions/" + actions[i].name,
                            name: actions[i].name,
                            type: actions[i].type,
                            runAfter: actions[i].runAfter,
                            status: Microsoft.ProductivityMacros.Constants.StatusSkipped,
                            inputs: actions[i].inputs
                        };
                    }
                }
                return data;
            }
            RunHistory.setActionsInJSON = setActionsInJSON;
            function createRunHistoryRecord(data, status, macroName) {
                data.endTime = new Date().toISOString();
                data.status = status;
                var entityLogicalName = Microsoft.ProductivityMacros.EntityName.RunHistoryEntity;
                var workflowid;
                Xrm.WebApi.retrieveMultipleRecords(Microsoft.ProductivityMacros.EntityName.WorkflowEntity, "?$select=workflowid" + "&$filter=name eq '" + macroName + "' and (category eq 6 or category eq 9000)").then(function success(result) {
                    workflowid = result.entities[0]["workflowid"];
                    data.macroid = workflowid;
                    var finalData = {
                        "createdon": data.startTime,
                        "msdyn_macrosessionid": "{" + data.id + "}",
                        "msdyn_macroname@odata.bind": "workflows(" + workflowid + ")",
                        "msdyn_executioncontext": JSON.stringify(data),
                        "msdyn_status": data.status,
                        "msdyn_name": macroName
                    };
                    createRecord(entityLogicalName, finalData);
                }, function (error) {
                    console.log(error.message + " - Could not retrieve Macro ID");
                    workflowid = "error";
                });
            }
            RunHistory.createRunHistoryRecord = createRunHistoryRecord;
            function createRecord(entityLogicalName, data) {
                Xrm.WebApi.createRecord(entityLogicalName, data).then(function success(result) {
                    console.log("Macro Run created");
                }, function (error) {
                    console.log(error.message + " - Error creating entity record");
                });
            }
            function setActionStatus(data, status, startTime, outputs, actionName, actionInputs) {
                if (Object.keys(data).length !== 0) {
                    data.definition.actions = setActionStatusRecursively(data.definition.actions, status, startTime, outputs, actionName, actionInputs);
                }
                return data;
            }
            RunHistory.setActionStatus = setActionStatus;
            function setActionStatusRecursively(parent, status, startTime, outputs, actionName, actionInputs) {
                var endTime = new Date().toISOString();
                var keys = Object.keys(parent);
                for (var i = 0; i < keys.length; i++) {
                    if (actionName == keys[i]) {
                        parent[actionName].inputs = { "body": actionInputs };
                        parent[actionName].outputs = { "body": outputs };
                        parent[actionName].startTime = startTime;
                        parent[actionName].status = status;
                        parent[actionName].endTime = endTime;
                        break;
                    }
                    else if (keys[i].startsWith("Condition")) {
                        parent[keys[i]].actions = setActionStatusRecursively(parent[keys[i]].actions, status, startTime, outputs, actionName, actionInputs);
                        parent[keys[i]].status = status;
                        if (parent[keys[i]].else) {
                            parent[keys[i]].else.actions = setActionStatusRecursively(parent[keys[i]].else.actions, status, startTime, outputs, actionName, actionInputs);
                        }
                    }
                }
                return parent;
            }
        })(RunHistory = ProductivityMacros.RunHistory || (ProductivityMacros.RunHistory = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            var ProductivityMacroState = (function () {
                function ProductivityMacroState(stateParams) {
                    this._stateParams = stateParams || {};
                }
                Object.defineProperty(ProductivityMacroState.prototype, "stateParams", {
                    get: function () {
                        return this._stateParams;
                    },
                    enumerable: true,
                    configurable: true
                });
                ProductivityMacroState.prototype.setStateParams = function (input) {
                    for (var key in input) {
                        this._stateParams[key] = input[key];
                    }
                };
                ProductivityMacroState.prototype.removeStateParams = function (input) {
                    for (var i = 0; i < input.length; i++) {
                        delete this._stateParams[input[i]];
                    }
                };
                return ProductivityMacroState;
            }());
            Internal.ProductivityMacroState = ProductivityMacroState;
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="../Interfaces.ts" />
/// <reference path="../LogicAppExecutor.ts" />
/// <reference path="../../ProductivityMacrosRunHistory.ts" />
/// <reference path="../../ProductivityMacroState.ts" />
/// <reference path="../../Constants.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        var MacroAction = (function () {
            function MacroAction() {
            }
            Object.defineProperty(MacroAction, "Instance", {
                get: function () {
                    if (!MacroAction._instance) {
                        MacroAction._instance = new MacroAction();
                    }
                    return MacroAction._instance;
                },
                enumerable: true,
                configurable: true
            });
            MacroAction.prototype.ExecuteAction = function (action, state, runHistoryData) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var executeActionsPromise = _this.resolveParamsAndExecuteMacroAction(action.type, action.inputs, action.name, state, runHistoryData);
                    executeActionsPromise.then(function (success) {
                        resolve(Microsoft.ProductivityMacros.Constants.ActionSuccessfull);
                    }.bind(_this), function (error) {
                        reject(error);
                    }.bind(_this));
                });
            };
            MacroAction.prototype.resolveParamsAndExecuteMacroAction = function (actionType, actionInputs, actionName, macroState, runHistoryData) {
                return new Promise(function (resolve, reject) {
                    var result = {};
                    this.resolveParams(actionType, JSON.stringify(actionInputs), macroState, result).then(function (response) {
                        Promise.all([this.resolveListFlowsActionParams(actionType, response), this.updateSolutionFlowsId(response)]).then(function (response) {
                            this.executeMacroAction(actionType, response[0], actionName, macroState, runHistoryData).then(function (response) {
                                resolve(response);
                            }.bind(this), function (error) {
                                reject(error);
                            });
                        }.bind(this), function (error) {
                            reject(error);
                        });
                    }.bind(this));
                }.bind(this));
            };
            MacroAction.prototype.resolveParams = function (actionType, actionInputs, macroState, result) {
                return new Promise(function (resolve, reject) {
                    var stringResolversInputs = [];
                    var resolvedInputs = {};
                    if (!actionInputs) {
                        resolve("");
                    }
                    var inputs = JSON.parse(actionInputs);
                    var _loop_2 = function () {
                        if (typeof inputs[input] === 'object') {
                            var val_1 = inputs[input];
                            resolvedInputs[input] = val_1;
                            Object.keys(val_1).forEach(function (propName) {
                                stringResolversInputs.push(this.resolveParams(actionType, JSON.stringify(val_1[propName]), macroState, result).then(function (response) {
                                    resolvedInputs[input][propName] = response;
                                }.bind(this)));
                            }.bind(this_1));
                        }
                        else if (Array.isArray(inputs[input])) {
                            arrayInput = inputs[input];
                            resolvedInputs[input] = arrayInput;
                            for (var i = 0; i < arrayInput.length; i++) {
                                stringResolversInputs.push(this_1.resolveParams(actionType, arrayInput[i], macroState, result).then(function (response) {
                                    resolvedInputs[input][i] = response;
                                }.bind(this_1), function (error) {
                                }));
                            }
                        }
                        else if (typeof inputs[input] === 'string' || inputs[input] instanceof String) {
                            if (inputs[input].startsWith("@outputs")) {
                                inputs[input] = LogicAppExecutor.resolveActionInputFromPrevActionOutput(inputs[input]);
                            }
                            stringResolversInputs.push(Microsoft.ProductivityMacros.Internal.resolveTemplateString(inputs[input], macroState.stateParams, "").then(function (indexObj, result) {
                                resolvedInputs[indexObj] = result;
                                Promise.resolve(resolvedInputs);
                            }.bind(this_1, input), function (error) {
                                return Promise.reject("Error");
                            }));
                        }
                        else {
                            resolvedInputs[input] = inputs[input];
                            Promise.resolve(resolvedInputs);
                        }
                    };
                    var this_1 = this, arrayInput;
                    for (var input in inputs) {
                        _loop_2();
                    }
                    Promise.all(stringResolversInputs).then(function (response) {
                        return resolve(resolvedInputs);
                    }.bind(this), function (error) {
                        return reject(error);
                    });
                }.bind(this));
            };
            MacroAction.prototype.resolveListFlowsActionParams = function (actionType, inputs) {
                return new Promise(function (resolve) {
                    try {
                        // the entityLogicalName in workflow entity is actually entity's LogicalCollectionName.
                        // it is used to fetch the flows from api.flow.microsoft.com
                        // but flow execution need entity's LogicalName
                        // resolveEntityLogicalName method is used to replace the LogicalCollectionName to LogicalName
                        var entityCollectionName_1 = inputs[Microsoft.ProductivityMacros.Constants.ENTITY_LOGICAL_NAME];
                        if (actionType !== Microsoft.ProductivityMacros.ActionTypes.LIST_FLOWS || !entityCollectionName_1) {
                            return resolve(inputs);
                        }
                        var queryString = "/api/data/v9.0/EntityDefinitions?$filter=LogicalCollectionName%20eq%20%27" + entityCollectionName_1 + "%27&$select=LogicalName";
                        var req = new XMLHttpRequest();
                        req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + queryString, false);
                        req.setRequestHeader("OData-MaxVersion", "4.0");
                        req.setRequestHeader("OData-Version", "4.0");
                        req.setRequestHeader("Accept", "application/json");
                        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                        req.onreadystatechange = function () {
                            if (req.readyState === 4) {
                                req.onreadystatechange = null;
                                if (req.status === 200) {
                                    var entity = JSON.parse(req.response);
                                    if (entity && entity.value && entity.value.length == 1) {
                                        inputs[Microsoft.ProductivityMacros.Constants.ENTITY_LOGICAL_NAME] = entity.value[0].LogicalName;
                                        inputs[Microsoft.ProductivityMacros.Constants.ENTITY_LOGICAL_COLLECTION_NAME] = entityCollectionName_1;
                                    }
                                    return resolve(inputs);
                                }
                            }
                        };
                        req.send();
                    }
                    catch (error) {
                        return resolve(inputs);
                    }
                });
            };
            MacroAction.prototype.updateSolutionFlowsId = function (inputs) {
                return new Promise(function (resolve) {
                    try {
                        // For flows within imported solution, flowId retrieved from inputs is workflowid of the flow,
                        // which cannot be used to identify flow by the execution method
                        // Need to retrieve workflowidunique of the flow to allow execution method idenfity the flow
                        var workFlowId = inputs[Microsoft.ProductivityMacros.Constants.FLOW_ID];
                        if (!workFlowId) {
                            return resolve(inputs);
                        }
                        var queryString = "/api/data/v9.0/workflows?$filter=workflowid%20eq%20%27" + workFlowId + "%27&$select=workflowidunique";
                        var req = new XMLHttpRequest();
                        req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + queryString, false);
                        req.setRequestHeader("OData-MaxVersion", "4.0");
                        req.setRequestHeader("OData-Version", "4.0");
                        req.setRequestHeader("Accept", "application/json");
                        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                        req.onreadystatechange = function () {
                            if (req.readyState === 4) {
                                req.onreadystatechange = null;
                                if (req.status === 200) {
                                    var entity = JSON.parse(req.response);
                                    if (entity && entity.value && entity.value.length == 1) {
                                        inputs[Microsoft.ProductivityMacros.Constants.FLOW_ID] = entity.value[0].workflowidunique;
                                    }
                                    return resolve(inputs);
                                }
                            }
                        };
                        req.send();
                    }
                    catch (error) {
                        return resolve(inputs);
                    }
                });
            };
            MacroAction.prototype.executeMacroAction = function (actionType, actionInputs, actionName, macroState, runHistoryData) {
                var _this = this;
                var exectuableMethod = Microsoft.ProductivityMacros.Internal.ProductivityMacroOperation.macroActionTemplates.get(actionType)["_runtimeAPI"];
                var status, outputs = {}, startTime = new Date().toISOString();
                return new Promise(function (resolve, reject) {
                    eval(exectuableMethod).then(function (success) {
                        LogicAppExecutor.updateActionOutputInSessionContext(success, macroState);
                        status = Microsoft.ProductivityMacros.Constants.StatusSucceded;
                        outputs = this.generateOutputJSON(success[Microsoft.ProductivityMacros.Constants.OutputResult]);
                        Microsoft.ProductivityMacros.RunHistory.setActionStatus(runHistoryData, status, startTime, outputs, actionName, actionInputs);
                        resolve(success);
                    }.bind(_this), function (error) {
                        status = Microsoft.ProductivityMacros.Constants.StatusFailed;
                        outputs = {};
                        Microsoft.ProductivityMacros.RunHistory.setActionStatus(runHistoryData, status, startTime, outputs, actionName, actionInputs);
                        reject(error);
                    });
                });
            };
            MacroAction.prototype.generateOutputJSON = function (output) {
                var keys = Object.keys(output);
                var finalOutput = {};
                for (var i = 0; i < keys.length; i++) {
                    var newKey = keys[i].split(Microsoft.ProductivityMacros.Constants.SplitByDot, 2)[1];
                    finalOutput[newKey] = output[keys[i]];
                }
                return finalOutput;
            };
            return MacroAction;
        }());
        MacroAction._instance = null;
        LogicAppExecutor.MacroAction = MacroAction;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="Constants.ts" />
/// <reference path="../../TypeDefinitions/AppRuntimeClientSdk.d.ts" />
/// <reference path="../TelemetryHelper.ts" />
/// <reference path="FPIHelper.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            /**
             * utility func to check whether an object is null or undefined
             */
            function isNullOrUndefined(obj) {
                return (obj == null || typeof obj === "undefined");
            }
            Internal.isNullOrUndefined = isNullOrUndefined;
            function getCustomArray(formInputs) {
                var ret = {};
                if (isNullOrUndefined(formInputs.Custom_Array)) {
                    return ret;
                }
                Object.keys(formInputs.Custom_Array).forEach(function (key) {
                    var attrib = formInputs.Custom_Array[key];
                    ret[attrib.Name] = attrib.Value;
                });
                return ret;
            }
            function consolidateLookupObj(formInput) {
                var ret = {};
                if (isNullOrUndefined(formInput)) {
                    return ret;
                }
                var temp = formInput;
                Object.keys(temp).forEach(function (key) {
                    var attribName = "";
                    var _flag = true;
                    if (key.endsWith("name"))
                        attribName = key.substr(0, key.length - 4);
                    if (key.endsWith("entitytype")) {
                        attribName = key.substr(0, key.length - 10);
                        _flag = false;
                    }
                    if (_flag && key.endsWith("type"))
                        attribName = key.substr(0, key.length - 4);
                    if ((attribName != "") && (attribName in formInput) && (attribName + "name" in formInput) && ((attribName + "entitytype" in formInput) || (attribName + "type" in formInput))) {
                        var lookupValue = new Array();
                        lookupValue[0] = new Object();
                        lookupValue[0].id = formInput[attribName];
                        lookupValue[0].name = formInput[attribName + "name"];
                        lookupValue[0].entityType = (attribName + "type" in formInput) ? formInput[attribName + "type"] : formInput[attribName + "entitytype"];
                        ret[attribName] = lookupValue;
                        delete formInput[attribName];
                        delete formInput[attribName + "name"];
                        attribName + "type" in formInput ? delete formInput[attribName + "type"] : delete formInput[attribName + "entitytype"];
                    }
                    else {
                        if (key in formInput)
                            ret[key] = formInput[key];
                    }
                });
                return ret;
            }
            function getCustomArrayFromEntityCollection(entities) {
                var arrayObj = [];
                entities.forEach(function (item) {
                    var obj = {};
                    obj["Name"] = item.msdyn_name;
                    obj["Value"] = item.msdyn_value;
                    arrayObj.push(obj);
                });
                return arrayObj;
            }
            function focusTab(tabId) {
                if (!(isNullOrUndefined(tabId))) {
                    return new Promise(function (resolve, reject) {
                        var sessionId = getFocusedSessionId();
                        var session = Microsoft.AppRuntime.Sessions.getSession(sessionId);
                        var tab = session.getTab(tabId);
                        tab.focus();
                        resolve("tab in focus");
                    });
                }
                else {
                    return Promise.reject("tabId is null or undefined");
                }
            }
            function refreshTab(tabId) {
                if (!(isNullOrUndefined(tabId))) {
                    return new Promise(function (resolve, reject) {
                        var sessionId = getFocusedSessionId();
                        var session = Microsoft.AppRuntime.Sessions.getSession(sessionId);
                        var tab = session.getTab(tabId);
                        tab.refresh();
                        resolve("tab refreshed");
                    });
                }
                else {
                    return Promise.reject("tabId is null or undefined");
                }
            }
            function openTab(actionName, pageInput, options) {
                return new Promise(function (resolve, reject) {
                    var tabInput = {
                        pageInput: pageInput,
                        options: options
                    };
                    createTab(tabInput).then(function (tabId) {
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ".TabId"] = tabId;
                        sessionContextParams[actionName + ".PageType"] = tabInput.pageInput.pageType;
                        ouputResponse["result"] = sessionContextParams;
                        resolve(ouputResponse);
                    }, function (error) {
                        reject(error.message);
                    });
                });
            }
            function getApplicationTemplate(guid) {
                return new Promise(function (resolve, reject) {
                    var xml = "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\">\n                          <entity name=\"msdyn_templateparameter\">\n                            <attribute name='msdyn_name' />\n                            <attribute name='msdyn_value' />\n                            <order attribute=\"msdyn_name\" descending=\"false\" />\n                            <filter type=\"and\">\n                                <condition attribute='msdyn_applicationtabtemplateid' operator='eq' uitype='msdyn_applicationtabtemplate' value='{" + guid + "}' />\n                            </filter>\n                          </entity>\n                        </fetch>";
                    Xrm.WebApi.retrieveMultipleRecords("msdyn_templateparameter", "?fetchXml=" + encodeURIComponent(xml)).then(function (result) {
                        if (result.entities.length > 0)
                            resolve(result);
                        else
                            reject("No Parameter found for given Applicate Tab Template - openApplicationTamplate");
                    }, function (error) {
                        reject(error);
                    });
                });
            }
            function getApplicationTemplateRecord(guid) {
                return new Promise(function (resolve, reject) {
                    var xml = "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\">\n                          <entity name=\"msdyn_applicationtabtemplate\">\n                            <attribute name='msdyn_title' />\n                            <filter type=\"and\">\n                                <condition attribute='msdyn_applicationtabtemplateid' operator='eq' uitype='msdyn_applicationtabtemplate' value='{" + guid + "}' />\n                            </filter>\n                          </entity>\n                        </fetch>";
                    Xrm.WebApi.retrieveMultipleRecords("msdyn_applicationtabtemplate", "?fetchXml=" + encodeURIComponent(xml)).then(function (result) {
                        if (result.entities.length > 0)
                            resolve(result);
                        else
                            reject("No record found for given application tab template id");
                    }, function (error) {
                        reject(error);
                    });
                });
            }
            function getPageInput(entityData) {
                var pageInput = {};
                var i;
                var AppTabConstant = ProductivityMacros.OpenAppTabType;
                switch (entityData.PageType.replace(/\s/g, "").toLowerCase()) {
                    case AppTabConstant.CustomControlInputString:
                    case AppTabConstant.Control:
                        pageInput.pageType = AppTabConstant.Control;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            try {
                                if (entityData.Custom_Array[i].Value !== undefined) {
                                    pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                                    if (entityData.Custom_Array[i].Name.toLowerCase() == AppTabConstant.Data)
                                        pageInput[entityData.Custom_Array[i].Name] = JSON.parse(entityData.Custom_Array[i].Value);
                                }
                            }
                            catch (e) {
                                continue;
                            }
                        }
                        break;
                    case AppTabConstant.DashboardInputString:
                        pageInput.pageType = AppTabConstant.Dashboard;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            if (entityData.Custom_Array[i].Value !== undefined) {
                                pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                            }
                        }
                        break;
                    case AppTabConstant.EntityViewInputString:
                    case AppTabConstant.Entitylist:
                        pageInput.pageType = AppTabConstant.Entitylist;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            if (entityData.Custom_Array[i].Value !== undefined) {
                                pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                            }
                        }
                        break;
                    case AppTabConstant.EntityRecordInputString:
                        pageInput.pageType = AppTabConstant.Entityrecord;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            try {
                                if (entityData.Custom_Array[i].Value !== undefined) {
                                    switch (entityData.Custom_Array[i].Name.toLowerCase()) {
                                        case AppTabConstant.Relationship:
                                            pageInput.relationship = JSON.parse(entityData.Custom_Array[i].Value);
                                            break;
                                        case AppTabConstant.CreateFromEntity:
                                            pageInput.processInstanceId = JSON.parse(entityData.Custom_Array[i].Value);
                                            break;
                                        case AppTabConstant.Data:
                                            pageInput.data = JSON.parse(entityData.Custom_Array[i].Value);
                                            break;
                                        default:
                                            pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                                    }
                                }
                            }
                            catch (e) {
                                continue;
                            }
                        }
                        break;
                    case AppTabConstant.EntitySearchInputString:
                        pageInput.pageType = AppTabConstant.Search;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            try {
                                if (entityData.Custom_Array[i].Value !== undefined) {
                                    pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                                    if (entityData.Custom_Array[i].Name == AppTabConstant.SearchType)
                                        pageInput[entityData.Custom_Array[i].Name] = parseInt(entityData.Custom_Array[i].Value);
                                }
                            }
                            catch (e) {
                                continue;
                            }
                        }
                        break;
                    case AppTabConstant.WebResourceInputString:
                        pageInput.pageType = AppTabConstant.Webresource;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            if (entityData.Custom_Array[i].Value !== undefined) {
                                pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                            }
                        }
                        break;
                    case AppTabConstant.ThirdPartyWebsiteInputString:
                    case AppTabConstant.ThirdPartyWebsiteInputString1:
                        //keeping thirthpartyWebsite as weresource as currently we are not able to access
                        //CIF public API and we are consuming Microsoft.CIFramework.External.CIFExternalUtilityImpl() to create tab
                        //pageInput.pageType = "ThirdPartyWebsite";
                        var url = entityData.Custom_Array.find(function (element) { return element.Name.trim() === AppTabConstant.Url; });
                        if (url && url.Value) {
                            var data = entityData.Custom_Array.find(function (element) { return element.Name.trim() === AppTabConstant.Data; });
                            var dataString = (data && data.Value) ? data.Value : '';
                            // below dataString check is used to fix issue in current public doc sample
                            // https://docs.microsoft.com/en-us/dynamics365/app-profile-manager/application-tab-templates#third-party-website
                            // we should revisit the sample to improve the user experience
                            if (url.Value.endsWith('/search?') && !dataString.startsWith('q=')) {
                                dataString = 'q=' + dataString;
                            }
                            pageInput.pageType = AppTabConstant.Webresource;
                            pageInput.webresourceName = "msdyn_CECExternalWebPageContainer.html";
                            pageInput.data = "cif_thirdpartyurl" + url.Value + dataString;
                        }
                        break;
                    case AppTabConstant.Custom:
                        pageInput.pageType = AppTabConstant.Custom;
                        for (i = 0; i < entityData.Custom_Array.length; i++) {
                            if (entityData.Custom_Array[i].Value !== undefined) {
                                pageInput[entityData.Custom_Array[i].Name] = entityData.Custom_Array[i].Value;
                            }
                        }
                        break;
                }
                return pageInput;
            }
            function getFocusedSessionId() {
                if (Microsoft.AppRuntime && Microsoft.AppRuntime.Sessions) {
                    return Microsoft.AppRuntime.Sessions.getFocusedSession().sessionId;
                }
                else {
                    return Xrm.App.sessions.getFocusedSession().sessionId;
                }
            }
            function openNewForm(actionName, formInputs) {
                if (!(isNullOrUndefined(formInputs))) {
                    return new Promise(function (resolve, reject) {
                        getNavigationType().then(function (navigationType) {
                            if (navigationType == 1) {
                                var tabInput = {
                                    pageInput: {
                                        pageType: "entityrecord",
                                        entityName: formInputs.EntityName,
                                        data: getCustomArray(formInputs)
                                    },
                                    options: { isFocused: true }
                                };
                                if (!isNullOrUndefined(formInputs.FormId)) {
                                    tabInput.pageInput.formId = formInputs.FormId;
                                }
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ".TabId"] = tabId;
                                    sessionContextParams[actionName + ".EntityName"] = formInputs.EntityName;
                                    sessionContextParams[actionName + ".PageType"] = "entityrecord";
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openNewForm", "");
                                    resolve(ouputResponse);
                                }, function (error) {
                                    var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openNewForm", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openNewForm", errorObject, "");
                                    reject(error.message);
                                });
                            }
                            else {
                                var efo = {
                                    entityName: formInputs.EntityName,
                                    useQuickCreateForm: false
                                };
                                if (!isNullOrUndefined(formInputs.FormId)) {
                                    efo["formId"] = formInputs.FormId;
                                }
                                var parameters = getCustomArray(formInputs);
                                Xrm.Navigation.openForm(efo, parameters).then(function (res) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ".EntityName"] = formInputs.EntityName;
                                    sessionContextParams[actionName + ".PageType"] = "entityrecord";
                                    sessionContextParams[actionName + ".EntityId"] = res.savedEntityReference[0].id;
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    return resolve(ouputResponse);
                                }, function (error) {
                                    var errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                    return reject(errorData);
                                });
                            }
                        });
                    });
                }
                else {
                    var errorObject = {};
                    errorObject.errorMsg = "formInputs is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openNewForm";
                    Internal.logFailure("openNewForm", errorObject, "");
                    return Promise.reject("openNewForm - formInputs is Null or Undefined");
                }
            }
            Internal.openNewForm = openNewForm;
            function openExistingForm(actionName, entityFormOptions) {
                if (!(isNullOrUndefined(entityFormOptions) || entityFormOptions == "")) {
                    return new Promise(function (resolve, reject) {
                        getNavigationType().then(function (navigationType) {
                            if (navigationType == 1) {
                                var tabInput = {
                                    pageInput: {
                                        pageType: "entityrecord",
                                        entityName: entityFormOptions.EntityName,
                                        entityId: entityFormOptions.EntityId,
                                        data: {}
                                    },
                                    options: { isFocused: true }
                                };
                                if (!isNullOrUndefined(entityFormOptions.FormId)) {
                                    tabInput.pageInput.formId = entityFormOptions.FormId;
                                }
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityFormOptions.EntityName;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = entityFormOptions.EntityId;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openExistingForm", "");
                                    resolve(ouputResponse);
                                }, function (error) {
                                    var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openExistingForm", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openExistingForm", errorObject, "");
                                    reject(error.message);
                                });
                            }
                            else {
                                var efo = {
                                    entityName: entityFormOptions.EntityName,
                                    entityId: entityFormOptions.EntityId
                                };
                                if (!isNullOrUndefined(entityFormOptions.FormId)) {
                                    efo["formId"] = entityFormOptions.FormId;
                                }
                                Xrm.Navigation.openForm(efo, null).then(function (res) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = res.savedEntityReference[0].name;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = res.savedEntityReference[0].id;
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    return resolve(ouputResponse);
                                }, function (error) {
                                    var errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                    return reject(errorData);
                                });
                            }
                        });
                    });
                }
                else {
                    var errorObject = {};
                    errorObject.errorMsg = "entityFormOptions is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openExistingForm";
                    Internal.logFailure("openExistingForm", errorObject, "");
                    return Promise.reject("openExistingForm - entityFormOptions is Null or Undefined");
                }
            }
            Internal.openExistingForm = openExistingForm;
            function openKbArticle(actionName, entityFormOptions) {
                if (!(isNullOrUndefined(entityFormOptions) || entityFormOptions == "")) {
                    entityFormOptions.EntityName = "knowledgearticle";
                    return new Promise(function (resolve, reject) {
                        openExistingForm(actionName, entityFormOptions).then(function (result) {
                            return resolve(result);
                        }, function (error) {
                            var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openKbArticle", Internal.errorTypes.GenericError);
                            Internal.logFailure("openKbArticle", errorObject, "");
                            return reject(error.message);
                        });
                    });
                }
            }
            Internal.openKbArticle = openKbArticle;
            function draftEmail(actionName, entityFormData) {
                var _this = this;
                if (!(isNullOrUndefined(entityFormData) || entityFormData == "")) {
                    // Create new array
                    var partylist = new Array();
                    partylist[0] = new Object();
                    partylist[0].id = entityFormData.EntityId;
                    partylist[0].name = entityFormData.PartyListName;
                    partylist[0].entityType = entityFormData.EntityName;
                    var formParameters;
                    if (entityFormData.TemplateId) {
                        return InstantiateEmailTemplate(entityFormData).then(function (result) {
                            if (result && !isNullOrUndefined(result.value[0]) && !isNullOrUndefined(result.value[0].subject)
                                && !isNullOrUndefined(result.value[0].description)) {
                                // Set form paramters
                                formParameters = {
                                    "to": partylist,
                                    "subject": result.value[0].subject,
                                    "description": result.value[0].description
                                };
                                var tabInput = {
                                    pageInput: {
                                        pageType: "entityrecord",
                                        entityName: "email",
                                        data: formParameters
                                    },
                                    options: { isFocused: true }
                                };
                                return new Promise(function (resolve, reject) {
                                    //let createTabAction: Promise<string> = createTab(tabInput);
                                    getNavigationType().then(function (navigationType) {
                                        if (navigationType == 1) {
                                            createTab(tabInput).then(function (tabId) {
                                                var ouputResponse = {};
                                                var sessionContextParams = {};
                                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityFormData.EntityName;
                                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                                Internal.logSuccess("ProductivityMacrosWrapper - draftEmail", "");
                                                return resolve(ouputResponse);
                                            }, function (error) {
                                                var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - draftEmail", Internal.errorTypes.GenericError);
                                                Internal.logFailure("draftEmail", errorObject, "");
                                                reject(error.message);
                                            });
                                        }
                                    });
                                });
                            }
                        });
                    }
                    else {
                        formParameters = {
                            "to": partylist,
                            "subject": entityFormData.subject,
                            "description": entityFormData.description
                        };
                        var tabInput = {
                            pageInput: {
                                pageType: "entityrecord",
                                entityName: "email",
                                data: formParameters
                            },
                            options: { isFocused: true }
                        };
                        return new Promise(function (resolve, reject) {
                            getNavigationType().then(function (navigationType) {
                                if (navigationType == 1) {
                                    createTab(tabInput).then(function (success) {
                                        Internal.logSuccess("ProductivityMacrosWrapper - draftEmail", "");
                                        resolve(success);
                                    }.bind(_this, actionName), function (error) {
                                        var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - draftEmail", Internal.errorTypes.GenericError);
                                        Internal.logFailure("draftEmail", errorObject, "");
                                        reject(error.message);
                                    });
                                }
                            });
                        });
                    }
                }
                else {
                    var errorObject = {};
                    errorObject.errorMsg = "entityFormData is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - draftEmail";
                    Internal.logFailure("draftEmail", errorObject, "");
                    return Promise.reject("draftEmail - entityFormData is Null or Undefined");
                }
            }
            Internal.draftEmail = draftEmail;
            function openGrid(actionName, entityListOptions) {
                var _this = this;
                if (!(isNullOrUndefined(entityListOptions) || entityListOptions == "")) {
                    var tabInput = {
                        pageInput: {
                            pageType: "entitylist",
                            entityName: entityListOptions.EntityName,
                            viewId: entityListOptions.ViewId,
                            viewType: entityListOptions.ViewType
                        },
                        options: { isFocused: true }
                    };
                    return new Promise(function (resolve, reject) {
                        getNavigationType().then(function (navigationType) {
                            if (navigationType == 1) {
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityListOptions.EntityName;
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openGrid", "");
                                    resolve(ouputResponse);
                                }.bind(_this, actionName), function (error) {
                                    var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openGrid", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openGrid", errorObject, "");
                                    reject(error.message);
                                });
                            }
                        });
                    });
                }
                else {
                    var errorObject = {};
                    errorObject.errorMsg = "entityListOptions is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openGrid";
                    Internal.logFailure("openGrid", errorObject, "");
                    return Promise.reject("openGrid - entityListOptions is Null or Undefined");
                }
            }
            Internal.openGrid = openGrid;
            function openDashboard(actionName, dashboardPageOptions) {
                var _this = this;
                if (!(isNullOrUndefined(dashboardPageOptions) || dashboardPageOptions == "")) {
                    var tabInput = {
                        pageInput: {
                            pageType: "dashboard",
                            navigationPath: dashboardPageOptions.navigationPath,
                            dashboardId: dashboardPageOptions.dashboardId,
                            entityType: dashboardPageOptions.entityType,
                            type: dashboardPageOptions.type
                        },
                        options: { isFocused: true }
                    };
                    return new Promise(function (resolve, reject) {
                        getNavigationType().then(function (navigationType) {
                            if (navigationType == 1) {
                                createTab(tabInput).then(function (success) {
                                    Internal.logSuccess("ProductivityMacrosWrapper - openDashboard", "");
                                    resolve(success);
                                }.bind(_this, actionName), function (error) {
                                    var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openDashboard", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openDashboard", errorObject, "");
                                    reject(error.message);
                                });
                            }
                        });
                    });
                }
                else {
                    var errorObject = {};
                    errorObject.errorMsg = "dashboardPageOptions is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openDashboard";
                    Internal.logFailure("openDashboard", errorObject, "");
                    return Promise.reject("openDashboard - dashboardPageOptions is Null or Undefined");
                }
            }
            Internal.openDashboard = openDashboard;
            function openSearchPage(actionName, searchPageOptions) {
                var _this = this;
                if (!(isNullOrUndefined(searchPageOptions) || searchPageOptions == "")) {
                    var tabInput = {
                        pageInput: {
                            pageType: "search",
                            searchText: searchPageOptions.SearchString,
                            searchType: 0 /* RelevanceSearch */,
                            EntityNames: searchPageOptions.EntityNames
                        },
                        options: { isFocused: true }
                    };
                    return new Promise(function (resolve, reject) {
                        getNavigationType().then(function (navigationType) {
                            if (navigationType == 1) {
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openSearchPage", "");
                                    resolve(ouputResponse);
                                }.bind(_this, actionName), function (error) {
                                    var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openSearchPage", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openSearchPage", errorObject, "");
                                    reject(error.message);
                                });
                            }
                        });
                    });
                }
                else {
                    var errorObject = {};
                    errorObject.errorMsg = "searchPageOptions is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openSearchPage";
                    Internal.logFailure("openSearchPage", errorObject, "");
                    return Promise.reject("openSearchPage - searchPageOptions is Null or Undefined");
                }
            }
            Internal.openSearchPage = openSearchPage;
            function openKBSearchControl(actionName, searchPageOptions) {
                var _this = this;
                try {
                    var tabInput = {
                        pageInput: {
                            pageType: "webresource",
                            webresourceName: "msdyn_kbsearchpagehost.html",
                            data: searchPageOptions.SearchString
                        },
                        options: { isFocused: true }
                    };
                    return new Promise(function (resolve, reject) {
                        getNavigationType().then(function (navigationType) {
                            if (navigationType == 1) {
                                createTab(tabInput).then(function (tabId) {
                                    var ouputResponse = {};
                                    var sessionContextParams = {};
                                    sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = tabId;
                                    ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                    Internal.logSuccess("ProductivityMacrosWrapper - openKBSearchControl", "");
                                    resolve(ouputResponse);
                                }.bind(_this, actionName), function (error) {
                                    var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - openKBSearchControl", Internal.errorTypes.GenericError);
                                    Internal.logFailure("openKBSearchControl", errorObject, "");
                                    reject(error.message);
                                });
                            }
                        });
                    });
                }
                catch (error) {
                    var errorObject = {};
                    errorObject.errorMsg = error;
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - openKBSearchControl";
                    Internal.logFailure("openKBSearchControl", errorObject, "");
                    return Promise.reject(error);
                }
            }
            Internal.openKBSearchControl = openKBSearchControl;
            function save(actionName) {
                var telemetryData = new Object();
                return new Promise(function (resolve, reject) {
                    var startTime = new Date();
                    ((window.top).Xrm).Page.data.save().then(function (response) {
                        Internal.logNestedApiData(telemetryData, startTime, Date.now() - startTime.getTime(), "Xrm.Page.data.save");
                        Internal.logSuccess("ProductivityMacrosWrapper - save", "", telemetryData);
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = response.savedEntityReference.entityType;
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = response.savedEntityReference.id;
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPrimaryNameAttributeValue] = response.savedEntityReference.name;
                        ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                        resolve(ouputResponse);
                    }.bind(this), function (errorMessage) {
                        var errorObject = {};
                        errorObject.errorMsg = errorMessage;
                        errorObject.errorType = Internal.errorTypes.XrmApiError;
                        errorObject.reportTime = new Date().toUTCString();
                        errorObject.sourceFunc = "ProductivityMacrosWrapper - save";
                        Internal.logFailure("save", errorObject, "");
                        return reject(errorMessage);
                    });
                });
            }
            Internal.save = save;
            function getEnvironment() {
                //Xrm.Page is deprecated hence definition not available in .d.ts
                //Using eval(...) to avoid compiler error
                var data = new Map();
                try {
                    var telemetryData_1 = new Object();
                    var startTime_1 = new Date();
                    var pageUrl = new URL(eval("window.top.Xrm.Page.getUrl()"));
                    var timeTaken_1 = Date.now() - startTime_1.getTime();
                    Internal.logNestedApiData(telemetryData_1, startTime_1, timeTaken_1, "Xrm.Page.getUrl");
                    for (var _i = 0, _a = pageUrl.searchParams.entries(); _i < _a.length; _i++) {
                        var entry = _a[_i];
                        data.set(entry[0], entry[1]);
                    }
                }
                catch (error) {
                    var errorObject = {};
                    errorObject.errorMsg = "geturl not available on this page";
                    errorObject.errorType = Internal.errorTypes.GenericError;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - getEnvironment";
                    Internal.logFailure("getEnvironment", errorObject, "");
                    return createErrorMap("getUrl not available on this page", "getEnvironment");
                }
                var startTime = new Date();
                var telemetryData = new Object;
                var context = Xrm.Utility.getGlobalContext();
                var timeTaken = Date.now() - startTime.getTime();
                Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.Utility.getGlobalContext");
                data.set(ProductivityMacros.Constants.ClientUrl, context.getClientUrl());
                data.set(ProductivityMacros.Constants.AppUrl, context.getCurrentAppUrl());
                data.set(ProductivityMacros.Constants.OrgLcid, context.organizationSettings.languageId);
                data.set(ProductivityMacros.Constants.OrgUniqueName, context.organizationSettings.uniqueName);
                data.set(ProductivityMacros.Constants.OrgId, context.organizationSettings.organizationId);
                data.set(ProductivityMacros.Constants.UserId, context.userSettings.userId);
                data.set(ProductivityMacros.Constants.UserLcid, context.userSettings.languageId);
                data.set(ProductivityMacros.Constants.UserName, context.userSettings.userName);
                data.set(ProductivityMacros.Constants.UserRoles, context.userSettings.securityRoles);
                data.set(ProductivityMacros.Constants.crmVersion, context.getVersion());
                Internal.logSuccess("ProductivityMacrosWrapper - getEnvironment", "", telemetryData);
                return data;
            }
            Internal.getEnvironment = getEnvironment;
            function getAttributeFromCollection(recordTitle) {
                var windowXrm;
                try {
                    //we are using here windows.top.xrm.page 
                    //this api will work in case of crm forms are focused
                    //if anything else is focused then it will contradict the action it self as this action for cloning a record on crm form. 
                    //in that case we are catching exception and returning as macro triggered for invalide form.  
                    windowXrm = ((window.top).Xrm);
                }
                catch (e) {
                    return Promise.reject(createErrorMap("Macro executed for invalid form", "cloneRecord"));
                }
                var entityObj = {};
                entityObj["attributeObj"] = {};
                //let attributeObj: any = {};
                var col = windowXrm.Page.data.entity.attributes._collection;
                var entityRef = windowXrm.Page.data.entity.getEntityReference();
                entityObj["entityName"] = entityRef.entityType;
                Object.keys(col).forEach(function (key) {
                    entityObj.attributeObj[key] = col[key].getValue();
                });
                entityObj.attributeObj = removeExtraData(entityObj.attributeObj, entityObj.entityName);
                return entityObj;
            }
            function removeExtraData(obj, entityName) {
                var tempObj = obj;
                var tempArray = ProductivityMacros.Attributes.commmonAttributes;
                tempArray.push(entityName + "id");
                tempArray.forEach(function (attrib) {
                    Object.keys(obj).forEach(function (key) {
                        if (key.includes(attrib) || tempObj[key] == null) {
                            delete tempObj[key];
                        }
                    });
                });
                return tempObj;
            }
            function arrangeLookupValue(obj, entityName) {
                var temp = obj;
                var result = {};
                var formatedValue = "_value@OData.Community.Display.V1.FormattedValue";
                var navigationProperty = "_value@Microsoft.Dynamics.CRM.associatednavigationproperty";
                var lookupLogicalName = "_value@Microsoft.Dynamics.CRM.lookuplogicalname";
                var value = "_value";
                var underScor = "_";
                Object.keys(temp).forEach(function (key) {
                    var attribName = "";
                    if (key.endsWith(value))
                        attribName = key.substr(1, key.length - value.length - 1);
                    if (key.endsWith(lookupLogicalName))
                        attribName = key.substr(1, key.length - lookupLogicalName.length - 1);
                    if (key.endsWith(navigationProperty))
                        attribName = key.substr(1, key.length - navigationProperty.length - 1);
                    if (key.endsWith(formatedValue))
                        attribName = key.substr(1, key.length - formatedValue.length - 1);
                    if ((attribName != "") && (underScor + attribName + value in obj) && (underScor + attribName + lookupLogicalName in obj) &&
                        (underScor + attribName + navigationProperty in obj) && (underScor + attribName + formatedValue in obj)) {
                        var lookupValue = new Array();
                        lookupValue[0] = new Object();
                        lookupValue[0].id = obj[underScor + attribName + value];
                        lookupValue[0].name = obj[underScor + attribName + formatedValue];
                        lookupValue[0].entityType = obj[underScor + attribName + lookupLogicalName];
                        result[attribName] = lookupValue;
                        delete obj[underScor + attribName + value];
                        delete obj[underScor + attribName + lookupLogicalName];
                        delete obj[underScor + attribName + navigationProperty];
                        delete obj[underScor + attribName + formatedValue];
                    }
                    else {
                        if (key in obj)
                            result[key] = obj[key];
                    }
                });
                return result;
            }
            function cloneInputRecord(actionName, entityData, telemetryData) {
                var recordTitle = "_copy";
                if (!entityData) {
                    return Promise.reject(createErrorMap("Need values to clone record", "cloneInputRecord"));
                }
                return new Promise(function (resolve, reject) {
                    if (entityData.hasOwnProperty("RecordTitle") && typeof (entityData.RecordTitle) !== "undefined") {
                        recordTitle = entityData.RecordTitle;
                    }
                    getPrimaryNameAttribute(entityData.EntityName).then(function (primaryAttrib) {
                        getRecordToClone(actionName, entityData, primaryAttrib, recordTitle).then(function (dataObj) {
                            cloneRecord_DefaultBehaviour(actionName, entityData.EntityName, dataObj).then(function (outParameter) {
                                resolve(outParameter);
                            }, function (error) {
                                reject(error);
                            });
                        }, function (error) {
                            reject(error);
                        });
                    });
                });
            }
            Internal.cloneInputRecord = cloneInputRecord;
            function cloneFocusedRecord(actionName, entityData, telemetryData) {
                var recordTitle = "_copy";
                if (!entityData) {
                    return Promise.reject(createErrorMap("Need values to clone record", "cloneFocusedRecord"));
                }
                return new Promise(function (resolve, reject) {
                    if (entityData.hasOwnProperty("RecordTitle") && typeof (entityData.RecordTitle) !== "undefined") {
                        recordTitle = entityData.RecordTitle;
                    }
                    var entityObj = getAttributeFromCollection(recordTitle);
                    getPrimaryNameAttribute(entityObj.entityName).then(function (primaryAttrib) {
                        if (primaryAttrib !== "") {
                            if (recordTitle === "_copy")
                                entityObj.attributeObj[primaryAttrib] = entityObj.attributeObj[primaryAttrib] + "_copy";
                            else {
                                entityObj.attributeObj[primaryAttrib] = recordTitle;
                            }
                        }
                        resolve(cloneRecord_DefaultBehaviour(actionName, entityObj.entityName, entityObj.attributeObj));
                    });
                });
            }
            Internal.cloneFocusedRecord = cloneFocusedRecord;
            function getPrimaryNameAttribute(entityName) {
                return new Promise(function (resolve, reject) {
                    var req = new XMLHttpRequest();
                    req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.0/EntityDefinitions(LogicalName='" + entityName + "')/?$select=PrimaryNameAttribute", true);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.onreadystatechange = function () {
                        if (req.readyState === 4) {
                            req.onreadystatechange = null;
                            if (req.status === 200) {
                                var name_1 = JSON.parse(req.response).PrimaryNameAttribute;
                                if (name_1 === undefined) {
                                    name_1 = "";
                                }
                                resolve(name_1);
                            }
                            else {
                                resolve("");
                            }
                        }
                    };
                    req.send();
                });
            }
            function getRecordToClone(actionName, entityData, primaryNameAttribute, recordTitle) {
                return new Promise(function (resolve, reject) {
                    var startTime = new Date();
                    Xrm.WebApi.retrieveRecord(entityData.EntityName, entityData.EntityId).then(function success(result1) {
                        result1 = arrangeLookupValue(result1, entityData.EntityName);
                        result1 = removeExtraData(result1, entityData.EntityName);
                        delete result1["@odata.context"];
                        delete result1["@odata.etag"];
                        if (primaryNameAttribute != "")
                            result1[primaryNameAttribute] = (recordTitle == "_copy") ? result1[primaryNameAttribute] + recordTitle : recordTitle;
                        resolve(result1);
                    }, function (error) {
                        var errorData = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - cloneRecord", Internal.errorTypes.XrmApiError);
                        Internal.logFailure("cloneRecord", errorData, "");
                        reject(error);
                    });
                });
            }
            function cloneRecord_DefaultBehaviour(actionName, entityName, entityData) {
                return new Promise(function (resolve, reject) {
                    getNavigationType().then(function (navigationType) {
                        if (navigationType == 1) {
                            var tabInput = {
                                pageInput: {
                                    pageType: "entityrecord",
                                    entityName: entityName,
                                    data: entityData
                                },
                                options: { isFocused: true }
                            };
                            createTab(tabInput).then(function (tabId) {
                                var ouputResponse = {};
                                var sessionContextParams = {};
                                sessionContextParams[actionName + ".TabId"] = tabId;
                                sessionContextParams[actionName + ".EntityName"] = entityName;
                                sessionContextParams[actionName + ".PageType"] = "entityrecord";
                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                Internal.logSuccess("ProductivityMacrosWrapper - cloneRecord", "");
                                resolve(ouputResponse);
                            }, function (error) {
                                var errorObject = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - cloneRecord", Internal.errorTypes.GenericError);
                                Internal.logFailure("cloneRecord", errorObject, "");
                                reject(error.message);
                            });
                        }
                        else {
                            var efo = {
                                entityName: entityName,
                                useQuickCreateForm: false
                            };
                            var parameters = entityData;
                            Xrm.Navigation.openForm(efo, parameters).then(function (res) {
                                var ouputResponse = {};
                                var sessionContextParams = {};
                                sessionContextParams[actionName + ".EntityName"] = entityName;
                                sessionContextParams[actionName + ".PageType"] = "entityrecord";
                                sessionContextParams[actionName + ".EntityId"] = res.savedEntityReference[0].id;
                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                return resolve(ouputResponse);
                            }, function (error) {
                                var errorData = Internal.generateErrorObject(error, "client.openForm - Xrm.Navigation.openForm", Internal.errorTypes.XrmApiError);
                                return reject(errorData);
                            });
                        }
                    });
                });
            }
            function getPartyListValue(data) {
                try {
                    var partyList = JSON.parse(data);
                    if (Array.isArray(partyList)) {
                        var partylistData_1 = new Array();
                        var i_1 = 0;
                        partyList.forEach(function (item) {
                            if (item.hasOwnProperty("id") && item.hasOwnProperty("name") && (item.hasOwnProperty("entitytype") || item.hasOwnProperty("type"))) {
                                partylistData_1[i_1] = new Object();
                                partylistData_1[i_1].id = item.id;
                                partylistData_1[i_1].name = item.name;
                                partylistData_1[i_1].entityType = item.hasOwnProperty("entitytype") ? item.entitytype : item.type;
                                i_1++;
                            }
                        });
                        return partylistData_1;
                    }
                }
                catch (e) {
                    return data;
                }
                return data;
            }
            function updateFormAttribute(actionName, entityData, telemetryData) {
                if (!entityData) {
                    return Promise.reject(createErrorMap("Need values to Update for updateFormAttribute", "updateFormAttribute")); // should be removed add logrejectanderror mrthod here
                }
                var windowXrm;
                try {
                    //we are using here windows.top.xrm.page and windows.top.xrm.page.ui.formselector
                    //this api will work in case of crm forms are focused
                    //if anything else is focused then it will contradict the action it self as this action for pupulating fields on crm form. 
                    //in that case we are catching exception and returning as macro triggered for invalide form.  
                    windowXrm = ((window.top).Xrm);
                    if (entityData.EntityName != windowXrm.Page.ui.formSelector._entityName) {
                        return Promise.reject(createErrorMap("Macro executed for invalid form", "updateFormAttribute")); // should be removed add logrejectanderror mrthod here
                    }
                }
                catch (e) {
                    return Promise.reject(createErrorMap("Macro executed for invalid form", "updateFormAttribute")); // should be removed add logrejectanderror mrthod here
                }
                return new Promise(function (resolve, reject) {
                    var startTime = new Date();
                    try {
                        var data_1 = consolidateLookupObj(getCustomArray(entityData));
                        Object.keys(data_1).forEach(function (key) {
                            var dataType = windowXrm.Page.getAttribute(key).getAttributeType();
                            try {
                                switch (dataType) {
                                    case "decimal":
                                    case "optionset":
                                    case "integer":
                                        windowXrm.Page.getAttribute(key).setValue(parseInt(data_1[key]));
                                        break;
                                    case "boolean":
                                        windowXrm.Page.getAttribute(key).setValue(Boolean.parse(data_1[key]));
                                        break;
                                    case "double":
                                    case "money":
                                        windowXrm.Page.getAttribute(key).setValue(parseFloat(data_1[key]));
                                        break;
                                    case "datetime":
                                        windowXrm.Page.getAttribute(key).setValue(new Date(data_1[key]));
                                        break;
                                    case "multiselectoptionset":
                                        var tempArray = data_1[key].split(",");
                                        var multiOptionSet_1 = new Array();
                                        tempArray.forEach(function (item) {
                                            multiOptionSet_1.push(parseInt(item));
                                        });
                                        windowXrm.Page.getAttribute(key).setValue(multiOptionSet_1);
                                        break;
                                    case "lookup":
                                        data_1[key] = getPartyListValue(data_1[key]);
                                        windowXrm.Page.getAttribute(key).setValue(data_1[key]);
                                        break;
                                    default:
                                        windowXrm.Page.getAttribute(key).setValue(data_1[key]);
                                }
                            }
                            catch (e) {
                                var errorData = Internal.generateErrorObject(e, "ProductivityMacrosWrapper - updateFormAttribute - unable to parse input parameter " + key + "-" + data_1[key], Internal.errorTypes.InvalidParams);
                                Internal.logFailure("updateFormAttribute", errorData, "");
                            }
                        });
                        var timeTaken = Date.now() - startTime.getTime();
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityData.EntityName;
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixTabId] = windowXrm.App.sessions.getFocusedSession().tabs.getFocusedTab().tabId;
                        ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                        Internal.logSuccess("ProductivityMacrosWrapper - updateFormAttribute", "", telemetryData);
                        resolve(ouputResponse);
                    }
                    catch (e) {
                        var errorData = Internal.generateErrorObject(e, "ProductivityMacrosWrapper - updateFormAttribute", Internal.errorTypes.XrmApiError);
                        Internal.logFailure("updateFormAttribute", errorData, "");
                        reject(e);
                    }
                });
            }
            Internal.updateFormAttribute = updateFormAttribute;
            function updateRecord(actionName, entityData, telemetryData) {
                if (!entityData) {
                    /* let errorData = {} as IErrorHandler;
                    errorData.errorMsg = "Need values to Update for updateRecord";
                    errorData.errorType = errorTypes.InvalidParams;
                    errorData.reportTime = new Date().toUTCString();
                    errorData.sourceFunc = "ProductivityMacros.updateRecord";
                    //return Promise.reject(errorData);
                    */
                    return Promise.reject(createErrorMap("Need values to Update for updateRecord", "updateRecord")); // should be removed add logrejectanderror mrthod here
                }
                var data = getCustomArray(entityData);
                return new Promise(function (resolve, reject) {
                    var startTime = new Date();
                    return Xrm.WebApi.updateRecord(entityData.EntityName, entityData.EntityId, data).then(function (result) {
                        var timeTaken = Date.now() - startTime.getTime();
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = entityData.EntityName;
                        sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = entityData.EntityId;
                        ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                        Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.WebApi.updateRecord");
                        Internal.logSuccess("ProductivityMacrosWrapper - updateRecord", "", telemetryData);
                        return resolve(ouputResponse);
                    }, function (error) {
                        var errorData = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - updateRecord", Internal.errorTypes.XrmApiError);
                        Internal.logFailure("openNewForm", errorData, "");
                        return reject(error);
                    });
                });
            }
            Internal.updateRecord = updateRecord;
            function retrieveRecord(entityData, telemetryData) {
                return new Promise(function (resolve, reject) {
                    var startTime = new Date();
                    return Xrm.WebApi.retrieveRecord(entityData.EntityName, entityData.EntityId, entityData.Query).then(function (result) {
                        var timeTaken = Date.now() - startTime.getTime();
                        Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.WebApi.retrieveRecord");
                        Internal.logSuccess("ProductivityMacrosWrapper - retrieveRecord", "", telemetryData);
                        return resolve(buildMap(result));
                    }, function (error) {
                        var errorData = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - retrieveRecord", Internal.errorTypes.XrmApiError);
                        Internal.logFailure("openNewForm", errorData, "");
                        return reject(error);
                    });
                });
            }
            Internal.retrieveRecord = retrieveRecord;
            function foucsTabAction(actionName, actionInputs) {
                if (!(isNullOrUndefined(actionInputs))) {
                    return new Promise(function (resolve, reject) {
                        var tabId = actionInputs.TabId;
                        focusTab(tabId).then(function (success) {
                            var ouputResponse = {};
                            var sessionContextParams = {};
                            sessionContextParams[actionName + ".TabId"] = tabId;
                            ouputResponse["result"] = sessionContextParams;
                            resolve(ouputResponse);
                        }, function (error) {
                            reject(error);
                        });
                    });
                }
                else {
                    return Promise.reject("foucsTabAction is null or undefined");
                }
            }
            Internal.foucsTabAction = foucsTabAction;
            function getCurrentPageAction(actionName, actionInputs) {
                if (!(isNullOrUndefined(actionInputs))) {
                    return new Promise(function (resolve, reject) {
                        var sessionId = getFocusedSessionId();
                        var session = Microsoft.AppRuntime.Sessions.getSession(sessionId);
                        var tabId = session.getFocusedTab().tabId;
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        sessionContextParams[actionName + ".TabId"] = tabId;
                        ouputResponse["result"] = sessionContextParams;
                        resolve(ouputResponse);
                    });
                }
                else {
                    return Promise.reject("getCurrentPageAction is null or undefined");
                }
            }
            Internal.getCurrentPageAction = getCurrentPageAction;
            function openApplicationTemplate(actionName, entityData) {
                if (!entityData || entityData.PageType === undefined || entityData.ApplicationTemplateId === undefined) {
                    return Promise.reject("Need values to open application template - openApplicationTamplate");
                }
                return new Promise(function (resolve, reject) {
                    var pageInput;
                    var options = { isFocused: true };
                    if (entityData.Custom_Array == undefined) {
                        var promises = [];
                        promises.push(getApplicationTemplate(entityData.ApplicationTemplateId));
                        promises.push(getApplicationTemplateRecord(entityData.ApplicationTemplateId));
                        Promise.all(promises).then(function (result) {
                            entityData.Custom_Array = getCustomArrayFromEntityCollection(result[0].entities);
                            pageInput = getPageInput(entityData);
                            var title = result[1].entities[0].msdyn_title;
                            if (!isNullOrUndefined(title)) {
                                options.title = title;
                            }
                            resolve(openTab(actionName, pageInput, options));
                        }, function (error) {
                            reject(error.message);
                        });
                    }
                    else {
                        pageInput = getPageInput(entityData);
                        resolve(openTab(actionName, pageInput, options));
                    }
                });
            }
            Internal.openApplicationTemplate = openApplicationTemplate;
            function refreshPageAction(actionName, actionInputs) {
                if (!(isNullOrUndefined(actionInputs))) {
                    return new Promise(function (resolve, reject) {
                        var tabId = actionInputs.TabId;
                        refreshTab(tabId).then(function (success) {
                            var ouputResponse = {};
                            var sessionContextParams = {};
                            sessionContextParams[actionName + ".TabId"] = tabId;
                            ouputResponse["result"] = sessionContextParams;
                            resolve(ouputResponse);
                        }, function (error) {
                            reject(error);
                        });
                    });
                }
                else {
                    return Promise.reject("refreshPageAction is null or undefined");
                }
            }
            Internal.refreshPageAction = refreshPageAction;
            function resolveSlug(context, paramName) {
                var _this = this;
                return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var callbackResponse, sessionContext;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                callbackResponse = {};
                                return [4 /*yield*/, Microsoft.AppRuntime.Sessions.getFocusedSession().getContext()];
                            case 1:
                                sessionContext = _a.sent();
                                sessionContext.resolveSlug(paramName).then(function (result) {
                                    callbackResponse["statusCode"] = 200;
                                    callbackResponse["status"] = "succedded";
                                    callbackResponse["result"] = result;
                                    resolve(callbackResponse);
                                }, function (error) {
                                    callbackResponse["statusCode"] = 500;
                                    callbackResponse["status"] = "failed";
                                    callbackResponse["result"] = error;
                                    reject(callbackResponse);
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            Internal.resolveSlug = resolveSlug;
            function createTab(input, telemetryData) {
                if (Microsoft.AppRuntime && Microsoft.AppRuntime.Internal) {
                    return Microsoft.AppRuntime.Internal.createTab(input);
                }
                else {
                    return Xrm.App.sessions.getFocusedSession().tabs.createTab(input);
                }
            }
            /**
             * Given a map, this func returns an equivalent XrmClientApi.WebApi.Entity object for it.
             * @param map Object to build the entity for.
             */
            function buildEntity(map) {
                var entity = {};
                map.forEach(function (value, key) {
                    entity[key] = value;
                });
                return entity;
            }
            /**
             * Given a key-value object, this func returns an equivalent Map object for it.
             * @param dict Object to build the map for.
             */
            function buildMap(dict) {
                if (isError(dict)) {
                    return createErrorMap(dict.message);
                }
                else {
                    var map_1 = new Map();
                    Object.keys(dict).forEach(function (key) {
                        map_1.set(key, dict[key]);
                    });
                    return map_1;
                }
            }
            Internal.buildMap = buildMap;
            /**
             * utility func to create a error map with the error message and optional error code
            */
            function createErrorMap(errorMessage, apiName) {
                return new Map().set("message", errorMessage).set("msdyn_name", apiName);
            }
            Internal.createErrorMap = createErrorMap;
            /**
             * utility func to check whether argument passed if of type Error Object
             * @param arg Object to check whether it is Error or not.
            */
            function isError(arg) {
                return (arg.message !== undefined);
            }
            Internal.isError = isError;
            function resolveIncident(actionName, entityFormData) {
                var telemetryData = new Object();
                return new Promise(function (resolve, reject) {
                    var parameters = {
                        "IncidentId": {
                            "incidentid": entityFormData.IncidentId,
                            "@odata.type": "Microsoft.Dynamics.CRM.incident"
                        },
                        "Status": 5,
                        "BillableTime": entityFormData.BillableTime,
                        "Resolution": entityFormData.Resolution,
                        "Remarks": entityFormData.Remarks
                    };
                    var requestUrl = "/api/data/v9.0/ResolveIncident?tag=abortbpf";
                    var startTime = new Date();
                    var context = Xrm.Utility.getGlobalContext();
                    var timeTaken = Date.now() - startTime.getTime();
                    Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.Utility.getGlobalContext");
                    var req = new XMLHttpRequest();
                    req.open("POST", context.getClientUrl() + requestUrl, true);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.onreadystatechange = function () {
                        if (req.readyState === 4) {
                            req.onreadystatechange = null;
                            if (req.status === 204) {
                                var ouputResponse = {};
                                var sessionContextParams = {};
                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityName] = "incident";
                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixEntityId] = entityFormData.IncidentId;
                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixPageType] = "entityrecord";
                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                Internal.logSuccess("ProductivityMacrosWrapper - resolveIncident", "", telemetryData);
                                resolve(ouputResponse);
                            }
                            else {
                                var errorObject = {};
                                errorObject.errorMsg = req.responseText;
                                errorObject.errorType = Internal.errorTypes.GenericError;
                                errorObject.reportTime = new Date().toUTCString();
                                errorObject.sourceFunc = "ProductivityMacrosWrapper - resolveIncident";
                                Internal.logFailure("resolveIncident", errorObject, "");
                                return reject(req.responseText);
                            }
                        }
                    };
                    req.send(JSON.stringify(parameters));
                });
            }
            Internal.resolveIncident = resolveIncident;
            function InstantiateEmailTemplate(entityFormData) {
                var telemetryData = new Object();
                return new Promise(function (resolve, reject) {
                    var parameters = {
                        "TemplateId": entityFormData.TemplateId,
                        "ObjectType": entityFormData.EntityName,
                        "ObjectId": entityFormData.EntityId //record id for the entity above
                    };
                    var requestUrl = "/api/data/v9.1/InstantiateTemplate";
                    var startTime = new Date();
                    var context = Xrm.Utility.getGlobalContext();
                    var timeTaken = Date.now() - startTime.getTime();
                    Internal.logNestedApiData(telemetryData, startTime, timeTaken, "Xrm.Utility.getGlobalContext");
                    var req = new XMLHttpRequest();
                    req.open("POST", context.getClientUrl() + requestUrl, true);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.onreadystatechange = function () {
                        if (req.readyState === 4) {
                            req.onreadystatechange = null;
                            if (req.status === 200) {
                                var result = JSON.parse(req.response); //template result containing resolved subject and description fields
                                Internal.logSuccess("ProductivityMacrosWrapper - InstantiateEmailTemplate", "", telemetryData);
                                resolve(result);
                            }
                            else {
                                var errorObject = {};
                                errorObject.errorMsg = req.responseText;
                                errorObject.errorType = Internal.errorTypes.GenericError;
                                errorObject.reportTime = new Date().toUTCString();
                                errorObject.sourceFunc = "ProductivityMacrosWrapper - instantiateEmailTemplate";
                                Internal.logFailure("instantiateEmailTemplate", errorObject, "");
                                return reject(req.responseText);
                            }
                        }
                    };
                    req.send(JSON.stringify(parameters));
                });
            }
            function getNavigationType() {
                return new Promise(function (resolve, reject) {
                    var context = Xrm.Utility.getGlobalContext();
                    context.getCurrentAppProperties().then(function (result) {
                        var appId = result.appId;
                        Xrm.WebApi.retrieveRecord("appmodule", appId, "?$select=name,navigationtype").then(function (data) {
                            return resolve(data.navigationtype);
                        }, function (error) {
                            var errorObject = {};
                            errorObject.errorMsg = error;
                            errorObject.errorType = Internal.errorTypes.XrmApiError;
                            errorObject.reportTime = new Date().toUTCString();
                            errorObject.sourceFunc = "ProductivityMacrosWrapper - getNavigationType";
                            Internal.logFailure("getNavigationType", errorObject, "");
                            return reject(error);
                        });
                    });
                });
            }
            function triggerFlow(actionName, actionInputs) {
                if (!(isNullOrUndefined(actionInputs))) {
                    return new Promise(function (resolve, reject) {
                        var ouputResponse = {};
                        var sessionContextParams = {};
                        var fpiHelper = new Internal.FPIHelper();
                        fpiHelper.fetchFlowsEnvId()
                            .then(function (flowEnvIdResponse) {
                            var flowEnvId = flowEnvIdResponse.name;
                            // Build dialog parameters for Flow MDD.
                            var dialogParams = populateFlowDialogParams(actionInputs.flowId, actionInputs.entityLogicalName, actionInputs.entityLogicalCollectionName, actionInputs.entityRecordId, flowEnvId);
                            // Set dialog options
                            var dialogOptions = {};
                            dialogOptions.height = ProductivityMacros.Constants.DIALOG_HEIGHT;
                            dialogOptions.width = ProductivityMacros.Constants.DIALOG_WIDTH;
                            // Open dialog to invoke the Flow
                            return Xrm.Navigation.openDialog(ProductivityMacros.Constants.MICROSOFT_FLOWS_DIALOG, dialogOptions, dialogParams).then(function (result) {
                                sessionContextParams[actionName + ProductivityMacros.Constants.SuffixFlowId] = result.parameters.flow_id;
                                ouputResponse[ProductivityMacros.Constants.OutputResult] = sessionContextParams;
                                return resolve(ouputResponse);
                            }, function (error) {
                                var errorData = Internal.generateErrorObject(error, "ProductivityMacrosWrapper - triggerFlow", Internal.errorTypes.XrmApiError);
                                Internal.logFailure("triggerFlow", errorData, "");
                                return reject(error);
                            });
                        });
                    });
                }
                else {
                    var errorObject = {};
                    errorObject.errorMsg = "formInputs is Null or Undefined";
                    errorObject.errorType = Internal.errorTypes.InvalidParams;
                    errorObject.reportTime = new Date().toUTCString();
                    errorObject.sourceFunc = "ProductivityMacrosWrapper - triggerFlow";
                    Internal.logFailure("triggerFlow", errorObject, "");
                    return Promise.reject("triggerFlow - formInputs is Null or Undefined");
                }
            }
            Internal.triggerFlow = triggerFlow;
            function populateFlowDialogParams(flowId, entityLogicalName, entityCollectionName, entityRecordId, flowEnvId) {
                var dialogParams = {};
                var entityIds = [];
                entityIds.push(entityRecordId);
                var entityId = JSON.stringify(entityIds);
                dialogParams[ProductivityMacros.Constants.ENTITIES_ID] = entityId;
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOW_ID] = flowId;
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_ENVIRONMENT_ID] = flowEnvId;
                dialogParams[ProductivityMacros.Constants.DIALOG_ORG_UNIQUE_NAME] = Xrm.Utility.getGlobalContext().organizationSettings.uniqueName;
                var destinationUrl = Xrm.Utility.getGlobalContext().getAdvancedConfigSetting(ProductivityMacros.Constants.FLOW_DESTINATION_URL);
                dialogParams[ProductivityMacros.Constants.DIALOG_DYNAMICS365_ACCESS_TOKEN] = null;
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_AUTHENTICATION_STRING] = undefined;
                dialogParams[ProductivityMacros.Constants.DIALOG_ENTITY_LOGICAL_NAME] = entityLogicalName;
                dialogParams[ProductivityMacros.Constants.DIALOG_ENTITY_LOGICAL_COLLECTION_NAME] = entityCollectionName;
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_DESTINATION_URL] = destinationUrl;
                var flowFpiUrl = Xrm.Utility.getGlobalContext().getAdvancedConfigSetting(ProductivityMacros.Constants.FLOW_FPI_URL);
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_FPI_SITE_URL] =
                    flowFpiUrl + ProductivityMacros.Constants.FLOW_FPI_URL_ENABLE_WIDGET_V2_PARAMETER;
                // Always load widget v2.
                dialogParams[ProductivityMacros.Constants.DIALOG_FLOWS_ENABLE_WIDGET_V2] = true;
                return dialogParams;
            }
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="Constants.ts" />
/// <reference path="../TelemetryHelper.ts" />
/// <reference path="ProductivityMacrosWrapper.ts" />
/// <reference path="MacroActionTemplatesInfra.ts" />
/** @internal */
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        var Internal;
        (function (Internal) {
            function resolveTemplateString(input, templateParams, scope) {
                return new Promise(function (resolve, reject) {
                    if (Internal.isNullOrUndefined(input)) {
                        return resolve(input);
                    }
                    var paramVals = new Map();
                    var paramResolvers = [];
                    if (input.startsWith(ProductivityMacros.SlugPrefix.SPLIT_BY_DOLLAR)) {
                        input = input.substr(1, input.length - 1);
                    }
                    // Regex has 4 variants (seperated by "|" in regex):
                    // Regular slug matching
                    // 		(Start '{')	|		(slug name string - no special char like {}'")	|	(End '}')
                    // Reg:	\{			|		[^{}\"\']*										|	\\}
                    // Ex:	{			|		anchor.customerId								|	}
                    // Odata format matching
                    //		(Start '{$')	|	('odata' string - no special char like {})	    |	({Slug} string if any)				|	(End '}')
                    // Reg:	\{$				|	[^{}]*				                            |	((\{[^{}]*\})+[^{}]*)*				|	\}
                    // Ex:	{$				|	odata				                            |	...entityid eq '{slug}'&$select...	|	}
                    // Regular slug matching, but with proceeding "$"
                    // 		(Start '${')	|		(slug name string - no special char like {}'")	|	(End '}')
                    // Reg:	$\{			    |		[^{}\"\']*										|	\\}
                    // Ex:	${			    |		anchor.customerId								|	}
                    // Odata format matching, but with proceeding "$"
                    //		(Start '${$')	|	('odata' string - no special char like {})	    |	({Slug} string if any)				|	(End '}')
                    // Reg:	$\{$			|	[^{}]*				                            |	((\{[^{}]*\})+[^{}]*)*				|	\}
                    // Ex:	${$				|	odata				                            |	...entityid eq '{slug}'&$select...	|	}
                    // Use cases mentioned in document: 
                    // ${anchor.<attribute_name>}
                    // ${ReconnectUrl{ReconnectID}}
                    // ${$session.visitorDevice}
                    var matches = input.match(new RegExp("\\{[^{}\"\']*\\}|\\{\\$[^{}]*((\\{[^{}]*\\})+[^{}]*)*\\}|\\$\{[^{}\"\']*\\}|\\$\{\\$[^{}]*((\\{[^{}]*\\})+[^{}]*)*\\}", "g"));
                    var slugCallbacks = [];
                    var _loop_3 = function (index) {
                        var param = matches[index];
                        var paramName;
                        if (param.startsWith(ProductivityMacros.SlugPrefix.SPLIT_BY_DOLLAR)) {
                            paramName = param.substr(2, param.length - 3);
                        }
                        else {
                            paramName = param.substr(1, param.length - 2);
                        }
                        if (paramVals.has(param)) {
                            return "continue";
                        }
                        paramVals.set(param, "");
                        try {
                            var val = "";
                            if (paramName.startsWith(ProductivityMacros.SlugPrefix.SPLIT_BY_DOLLAR) && !(paramName.toLowerCase().startsWith("$odata"))) {
                                var prefixes = paramName.split(ProductivityMacros.SlugPrefix.SPLIT_BY_DOT);
                                if (prefixes.length > 1) {
                                    connector = Internal.ProductivityMacroOperation.macroConnectorTemplates.get(prefixes[0].substr(1).toLowerCase());
                                    if (!Internal.isNullOrUndefined(connector)) {
                                        slugCallbacks.push(connector.callback);
                                        paramName = stripSlugPrefix(paramName);
                                    }
                                }
                            }
                            if (!(paramName.toLowerCase().startsWith("$odata")) && slugCallbacks.length == 0) {
                                buildSlugCallbacks(slugCallbacks);
                            }
                            if (!Internal.isNullOrUndefined(templateParams) && templateParams.hasOwnProperty(scope) && templateParams[scope].hasOwnProperty(paramName)) {
                                val = templateParams[scope][paramName];
                            }
                            else if (!Internal.isNullOrUndefined(templateParams) && templateParams.hasOwnProperty(paramName)) {
                                val = templateParams[paramName];
                            }
                            else if (slugCallbacks.length > 0) {
                                var promise = new Promise(function (resolve, reject) {
                                    var executionpromise = slugCallbacks.reduce(function (accumulatorPromise, nextId) {
                                        return accumulatorPromise.then(function (result) {
                                            if (result === undefined || result === "") {
                                                return Internal.resolveSlugInCallback(nextId, paramName);
                                            }
                                            else {
                                                return Promise.resolve(result);
                                            }
                                        }, function (error) {
                                            return reject(error);
                                        });
                                    }, Promise.resolve(""));
                                    executionpromise.then(function (result) {
                                        paramVals.set(param, result);
                                        return resolve(paramVals.get(param));
                                    }, function (error) {
                                        return reject(error);
                                    });
                                });
                                paramResolvers.push(promise);
                            }
                            if (paramName.toLowerCase().startsWith("$odata")) {
                                //val is assumed to be of the format $odata.<entityLogicalName>.<entityAttributeName>.<query>
                                var queryParts_1 = paramName.split(ProductivityMacros.SlugPrefix.SPLIT_BY_DOT);
                                if (queryParts_1.length < 4) {
                                    return "continue";
                                }
                                var promise = new Promise(function (resolve, reject) {
                                    var qPromises = [];
                                    qPromises.push(resolveTemplateString(queryParts_1[1], templateParams, scope));
                                    qPromises.push(resolveTemplateString(queryParts_1[2], templateParams, scope));
                                    for (var index_1 = 3; index_1 < queryParts_1.length - 1; index_1++) {
                                        queryParts_1[3] += "." + queryParts_1[index_1 + 1];
                                    }
                                    qPromises.push(resolveTemplateString(queryParts_1[3], templateParams, scope));
                                    Promise.all(qPromises).then(function (results) {
                                        Xrm.WebApi.retrieveMultipleRecords(results[0], results[2], 1).then(function (result) {
                                            try {
                                                if (result.entities.length > 0) {
                                                    paramVals.set(param, result.entities[0][results[1]]);
                                                }
                                                else {
                                                    paramVals.set(param, "");
                                                }
                                                console.log("Fullfilled odata for " + param + " got value " + paramVals.get(param));
                                                return resolve(paramVals.get(param));
                                            }
                                            catch (error) {
                                                //TODO: Log telemetry
                                                console.log("Error resolving " + input + " : " + error);
                                                return reject(error);
                                            }
                                        }, function (error) {
                                            //TODO: log telemetry
                                            console.log("Error resolving " + input + " : " + error);
                                            return reject(error);
                                        });
                                    }, function (error) {
                                        console.log("Error resolving " + input + " : " + error);
                                        return reject(error);
                                    });
                                }).catch(function (error) {
                                    console.log("Error resolving " + param + " : " + error);
                                });
                                paramResolvers.push(promise);
                            }
                            else {
                                paramVals.set(param, val);
                            }
                        }
                        catch (error) {
                            //TODO: log telemetry
                            console.log("Error resolving " + input + " : " + error);
                        }
                    };
                    var connector;
                    for (var index in matches) {
                        _loop_3(index);
                    }
                    Promise.all(paramResolvers).then(function (result) {
                        var ret = input;
                        paramVals.forEach(function (val, key, map) {
                            ret = ret.split(key).join(val || "");
                        });
                        return resolve(ret);
                    }, function (error) {
                        //TODO: log telemetry
                        console.log("Error resolving " + input + " : " + error);
                        return reject(error);
                    });
                });
            }
            Internal.resolveTemplateString = resolveTemplateString;
            function isJsonString(str) {
                try {
                    JSON.parse(str);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
            function buildSlugCallbacks(slugCallbacks) {
                var connector = Internal.ProductivityMacroOperation.macroConnectorTemplates.get("oc"); // Default callback
                if (!Internal.isNullOrUndefined(connector)) {
                    slugCallbacks.push(connector.callback);
                }
                Internal.ProductivityMacroOperation.macroConnectorTemplates.forEach(function (value, key) {
                    if (key != "oc" && !Internal.isNullOrUndefined(value.callback)) {
                        slugCallbacks.push(value.callback);
                    }
                });
            }
            function resolveSlugInCallback(callback, paramName) {
                var slugPromise = new Promise(function (resolve, reject) {
                    var callbackParams = stripCallbackParams(callback);
                    if (callbackParams.length == 2) {
                        var callbackFun = new Function(callbackParams[0], callbackParams[1], "return " + callback);
                    }
                    var executionContext = {};
                    callbackFun(executionContext, "{" + paramName + "}").then(function (res) {
                        if (res["statusCode"] == 200) {
                            return resolve(res["result"]);
                        }
                        else {
                            //TODO: log telemetry
                            return resolve("");
                        }
                    }, function (error) {
                        return reject(error);
                    });
                });
                var promiseTimeout = function (ms, promise) {
                    // Create a promise that rejects in <ms> milliseconds
                    var timeout = new Promise(function (resolve, reject) {
                        var id = setTimeout(function () {
                            clearTimeout(id);
                            //TODO: log telemetry
                            resolve("");
                        }, ms);
                    });
                    // Returns a race between our timeout and the passed in promise
                    return Promise.race([
                        promise,
                        timeout
                    ]);
                };
                return promiseTimeout(1000, slugPromise);
            }
            Internal.resolveSlugInCallback = resolveSlugInCallback;
            function stripSlugPrefix(param) {
                var splitTextArray = param.split(ProductivityMacros.SlugPrefix.SPLIT_BY_DOT);
                var slug = splitTextArray[0];
                return param.substr(slug.length + 1);
            }
            function stripCallbackParams(param) {
                var params = param.split(ProductivityMacros.SlugPrefix.SPLIT_BY_OPENING_BRACKET)[1];
                params = params.substr(0, params.length - 1);
                return params.split(ProductivityMacros.SlugPrefix.SPLIT_BY_COMMA);
            }
        })(Internal = ProductivityMacros.Internal || (ProductivityMacros.Internal = {}));
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="Interfaces.ts" />
/// <reference path="Actions/IfAction.ts" />
/// <reference path="Actions/SetDefaultCallScriptAction.ts" />
/// <reference path="Actions/macroAction.ts" />
/// <reference path="../ProductivityMacroSlug.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        function getSortedActionsList(actionList) {
            //let actions = {} as Map<string, IActionItem>;
            var actions = [];
            for (var actionKey in actionList) {
                var action = {};
                action.name = actionKey;
                action.inputs = actionList[actionKey].inputs;
                action.type = actionList[actionKey].type;
                action.runAfter = actionList[actionKey].runAfter;
                action.actions = actionList[actionKey].actions;
                action.else = actionList[actionKey].else;
                action.expression = actionList[actionKey].expression;
                actions.push(action);
            }
            var map = new Map();
            var result = [];
            var visited = new Map();
            var dependecySortObj = {
                objectMap: map,
                visited: visited,
                result: result
            };
            actions.forEach(function (obj) {
                dependecySortObj.objectMap.set(obj.name, obj);
            });
            actions.forEach(function (obj) {
                if (!dependecySortObj.visited.get(obj.name)) {
                    sortUtil(obj, dependecySortObj);
                }
            });
            return dependecySortObj.result;
        }
        LogicAppExecutor.getSortedActionsList = getSortedActionsList;
        function sortUtil(obj, dependecySortObj) {
            dependecySortObj.visited.set(obj.name, true);
            Object.keys(obj.runAfter).forEach(function (action) {
                if (!dependecySortObj.visited.get(action)) {
                    sortUtil(dependecySortObj.objectMap.get(action), dependecySortObj);
                }
            });
            dependecySortObj.result.push(obj);
        }
        function getActionExecutorInstance(actionType) {
            switch (actionType) {
                case "If":
                    return LogicAppExecutor.IfAction.Instance;
                case "setcallscript":
                    return LogicAppExecutor.SetDefaultCallScriptAction.Instance;
                default:
                    return LogicAppExecutor.MacroAction.Instance;
            }
        }
        LogicAppExecutor.getActionExecutorInstance = getActionExecutorInstance;
        function resolveSlug(slug, stateParams) {
            if (typeof slug === 'string' || slug instanceof String) {
                if (slug.startsWith("@outputs")) {
                    slug = resolveActionInputFromPrevActionOutput(slug);
                }
                return Microsoft.ProductivityMacros.Internal.resolveTemplateString(slug, stateParams, "");
            }
            else {
                return Promise.resolve(slug);
            }
        }
        LogicAppExecutor.resolveSlug = resolveSlug;
        function resolveActionInputFromPrevActionOutput(input) {
            var matches = input.match(new RegExp("'(.*?)'", "g"));
            var prefix = matches[0];
            var attribute = matches[1];
            prefix = prefix.substr(1, prefix.length - 2);
            attribute = attribute.substr(1, attribute.length - 2);
            var inputSlug = "${" + prefix + "." + attribute + "}";
            return inputSlug;
        }
        LogicAppExecutor.resolveActionInputFromPrevActionOutput = resolveActionInputFromPrevActionOutput;
        function updateActionOutputInSessionContext(output, state) {
            if (output && output[Microsoft.ProductivityMacros.Constants.OutputResult]) {
                state.setStateParams(output[Microsoft.ProductivityMacros.Constants.OutputResult]);
            }
        }
        LogicAppExecutor.updateActionOutputInSessionContext = updateActionOutputInSessionContext;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="Interfaces.ts" />
/// <reference path="LogicAppExecutorUtils.ts" />
/// <reference path="../MacroActionTemplatesInfra.ts" />
var Microsoft;
(function (Microsoft) {
    var LogicAppExecutor;
    (function (LogicAppExecutor) {
        function ExecuteLogicApp(logicAppJSONstring, sourceName) {
            return new Promise(function (resolve, reject) {
                Microsoft.ProductivityMacros.Internal.ProductivityMacroOperation.InitMacroActionTemplates().then(function (templates) {
                    var parsedJson = JSON.parse(logicAppJSONstring);
                    var actions = parsedJson.definition.actions;
                    var state = new Microsoft.ProductivityMacros.Internal.ProductivityMacroState();
                    var runHistoryData = {};
                    if (!Microsoft.ProductivityMacros.Internal.isNullOrUndefined(sourceName)) {
                        Microsoft.ProductivityMacros.RunHistory.initializeRunHistoryJSON(runHistoryData, logicAppJSONstring, sourceName);
                    }
                    var executeActionsPromise = ExecuteActions(actions, state, runHistoryData).then(function (result) {
                        console.log(result);
                        return (result);
                    }, function (error) {
                        reject(error);
                    });
                    executeActionsPromise.then(function (success) {
                        if (!Microsoft.ProductivityMacros.Internal.isNullOrUndefined(sourceName)) {
                            var status = Microsoft.ProductivityMacros.Constants.StatusSucceded;
                            if (Microsoft.ProductivityMacros.Internal.isNullOrUndefined(success)) {
                                status = Microsoft.ProductivityMacros.Constants.StatusFailed;
                            }
                            Microsoft.ProductivityMacros.RunHistory.createRunHistoryRecord(runHistoryData, status, sourceName);
                        }
                        console.log(success);
                        resolve(success);
                    }, function (error) {
                        if (!Microsoft.ProductivityMacros.Internal.isNullOrUndefined(sourceName)) {
                            var status = Microsoft.ProductivityMacros.Constants.StatusFailed;
                            Microsoft.ProductivityMacros.RunHistory.createRunHistoryRecord(runHistoryData, status, sourceName);
                        }
                        reject(error);
                    });
                }, function (error) {
                    reject(error);
                });
            });
        }
        LogicAppExecutor.ExecuteLogicApp = ExecuteLogicApp;
        function ExecuteActions(actions, state, runHistoryData) {
            return new Promise(function (resolve, reject) {
                var sortedActions = LogicAppExecutor.getSortedActionsList(actions);
                if (!Microsoft.ProductivityMacros.Internal.isNullOrUndefined(runHistoryData.id) && Microsoft.ProductivityMacros.Internal.isNullOrUndefined(runHistoryData.definition.actions)) {
                    runHistoryData.definition.actions = {};
                    Microsoft.ProductivityMacros.RunHistory.setActionsInJSON(runHistoryData.definition.actions, sortedActions, runHistoryData.id);
                }
                var executeActionsPromise = sortedActions.reduce(function (accumulatorPromise, nextId) {
                    return accumulatorPromise.then(function (result) {
                        return LogicAppExecutor.getActionExecutorInstance(nextId.type).ExecuteAction(nextId, state, runHistoryData);
                    }, function (error) {
                        reject(error);
                    });
                }, Promise.resolve());
                executeActionsPromise.then(function (success) {
                    return resolve(success);
                }, function (error) {
                    reject(error);
                });
            });
        }
        LogicAppExecutor.ExecuteActions = ExecuteActions;
    })(LogicAppExecutor = Microsoft.LogicAppExecutor || (Microsoft.LogicAppExecutor = {}));
})(Microsoft || (Microsoft = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
/// <reference path="../../../../references/external/TypeDefinitions/lib.es6.d.ts" />
/// <reference path="../../../../Packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApiInternal.d.ts" />
/// <reference path="../TelemetryHelper.ts" />
/// <reference path="./LogicAppExecutor/LogicAppExecutor.ts" />
var Microsoft;
(function (Microsoft) {
    var ProductivityMacros;
    (function (ProductivityMacros) {
        function initializeMacrosRuntime() {
            Microsoft.ProductivityMacros.Internal.initializeTelemetry();
        }
        ProductivityMacros.initializeMacrosRuntime = initializeMacrosRuntime;
        function runMacro(macroName, params) {
            return new Promise(function (resolve, reject) {
                getMacroInputJSON(macroName).then(function (inputJSONstring) {
                    var logicAppJSON = JSON.parse(inputJSONstring).properties;
                    Microsoft.LogicAppExecutor.ExecuteLogicApp(JSON.stringify(logicAppJSON), macroName).then(function (success) {
                        resolve(success);
                    }, function (error) {
                        reject(error);
                    });
                }, function (error) {
                    reject(error);
                });
            });
        }
        ProductivityMacros.runMacro = runMacro;
        /** @internal */
        function getMacroInputJSON(macroName) {
            return new Promise(function (resolve, reject) {
                var entityName = "workflow";
                var query = "?$select=name,clientdata" + "&$filter=name eq '" + macroName + "' and (category eq 6 or category eq 9000) and statecode eq 1 and statuscode eq 2";
                Xrm.WebApi.retrieveMultipleRecords(entityName, query).then(function (result) {
                    if (ProductivityMacros.Internal.isNullOrUndefined(result.entities) || result.entities.length <= 0 || (ProductivityMacros.Internal.isNullOrUndefined(result.entities[0].clientdata))) {
                        reject("Macro not found");
                    }
                    else {
                        resolve(result.entities[0].clientdata);
                    }
                }, function (error) {
                    reject(error);
                });
            });
        }
        initializeMacrosRuntime();
    })(ProductivityMacros = Microsoft.ProductivityMacros || (Microsoft.ProductivityMacros = {}));
})(Microsoft || (Microsoft = {}));
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */
var requirejs, require, define;
(function (global, setTimeout) {
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = '2.3.6', commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/mg, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document), isWebWorker = !isBrowser && typeof importScripts !== 'undefined', 
    //PS3 indicates loaded and complete, but need to wait for complete
    //specifically. Sequence is 'loading', 'loaded', execution,
    // then 'complete'. The UA check is unfortunate, but not sure how
    //to feature test w/o causing perf issues.
    readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
        /^complete$/ : /^(complete|loaded)$/, defContextName = '_', 
    //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
    isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]', contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = false;
    //Could match something like ')//comment', do not lose the prefix to comment.
    function commentReplace(match, singlePrefix) {
        return singlePrefix || '';
    }
    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }
    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }
    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }
    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }
    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }
    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }
    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }
    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {
                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    }
                    else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }
    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }
    function scripts() {
        return document.getElementsByTagName('script');
    }
    function defaultOnError(err) {
        throw err;
    }
    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }
    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttps://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }
    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }
    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }
    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }
    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers, checkLoadedTimeoutId, config = {
            //Defaults. Do not set a default for map
            //config to speed up normalize(), which
            //will run faster if there is no default.
            waitSeconds: 7,
            baseUrl: './',
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, registry = {}, 
        //registry of just enabled modules, to speed
        //cycle breaking code when lots of modules
        //are registered, but not activated.
        enabledRegistry = {}, undefEvents = {}, defQueue = [], defined = {}, urlFetched = {}, bundlesMap = {}, requireCounter = 1, unnormalizedCounter = 1;
        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                }
                else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    }
                    else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }
        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex, foundMap, foundI, foundStarMap, starI, normalizedBaseParts, baseParts = (baseName && baseName.split('/')), map = config.map, starMap = map && map['*'];
            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;
                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }
                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }
                trimDots(name);
                name = name.join('/');
            }
            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');
                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');
                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));
                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }
                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }
                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }
                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }
            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);
            return pkgMain ? pkgMain : name;
        }
        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                        scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }
        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);
                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);
                return true;
            }
        }
        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix, index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }
        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts, prefix = null, parentName = parentModuleMap ? parentModuleMap.name : null, originalName = name, isDefine = true, normalizedName = '';
            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }
            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];
            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }
            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (isNormalized) {
                        normalizedName = name;
                    }
                    else if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    }
                    else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                            normalize(name, parentName, applyMap) :
                            name;
                    }
                }
                else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);
                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;
                    url = context.nameToUrl(normalizedName);
                }
            }
            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                '_unnormalized' + (unnormalizedCounter += 1) :
                '';
            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                    prefix + '!' + normalizedName :
                    normalizedName) + suffix
            };
        }
        function getModule(depMap) {
            var id = depMap.id, mod = getOwn(registry, id);
            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }
            return mod;
        }
        function on(depMap, name, fn) {
            var id = depMap.id, mod = getOwn(registry, id);
            if (hasProp(defined, id) &&
                (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            }
            else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                }
                else {
                    mod.on(name, fn);
                }
            }
        }
        function onError(err, errback) {
            var ids = err.requireModules, notified = false;
            if (errback) {
                errback(err);
            }
            else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });
                if (!notified) {
                    req.onError(err);
                }
            }
        }
        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                each(globalDefQueue, function (queueItem) {
                    var id = queueItem[0];
                    if (typeof id === 'string') {
                        context.defQueueMap[id] = true;
                    }
                    defQueue.push(queueItem);
                });
                globalDefQueue = [];
            }
        }
        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                }
                else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    }
                    else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                }
                else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };
        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }
        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;
            if (mod.error) {
                mod.emit('error', mod.error);
            }
            else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id, dep = getOwn(registry, depId);
                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        }
                        else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }
        function checkLoaded() {
            var err, usingPathFallback, waitInterval = config.waitSeconds * 1000, 
            //It is possible to disable the wait interval by using waitSeconds of 0.
            expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(), noLoads = [], reqCalls = [], stillLoading = false, needCycleCheck = true;
            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }
            inCheckLoaded = true;
            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map, modId = map.id;
                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }
                if (!map.isDefine) {
                    reqCalls.push(mod);
                }
                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        }
                        else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    }
                    else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });
            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }
            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }
            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }
            inCheckLoaded = false;
        }
        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;
            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };
        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};
                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }
                this.factory = factory;
                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                }
                else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }
                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);
                this.errback = errback;
                //Indicate this module has be initialized
                this.inited = true;
                this.ignore = options.ignore;
                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                }
                else {
                    this.check();
                }
            },
            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },
            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;
                context.startTime = (new Date()).getTime();
                var map = this.map;
                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                }
                else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },
            load: function () {
                var url = this.map.url;
                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },
            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }
                var err, cjsModule, id = this.map.id, depExports = this.depExports, exports = this.exports, factory = this.factory;
                if (!this.inited) {
                    // Only fetch if not already in the defQueue.
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch();
                    }
                }
                else if (this.error) {
                    this.emit('error', this.error);
                }
                else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;
                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                }
                                catch (e) {
                                    err = e;
                                }
                            }
                            else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }
                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                }
                                else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }
                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }
                        }
                        else {
                            //Just a literal value
                            exports = factory;
                        }
                        this.exports = exports;
                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;
                            if (req.onResourceLoad) {
                                var resLoadMaps = [];
                                each(this.depMaps, function (depMap) {
                                    resLoadMaps.push(depMap.normalizedMap || depMap);
                                });
                                req.onResourceLoad(context, this.map, resLoadMaps);
                            }
                        }
                        //Clean up
                        cleanRegistry(id);
                        this.defined = true;
                    }
                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;
                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }
                }
            },
            callPlugin: function () {
                var map = this.map, id = map.id, 
                //Map already normalized the prefix.
                pluginMap = makeModuleMap(map.prefix);
                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);
                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod, bundleId = getOwn(bundlesMap, this.map.id), name = this.map.name, parentName = this.map.parentMap ? this.map.parentMap.name : null, localRequire = context.makeRequire(map.parentMap, {
                        enableBuildCallback: true
                    });
                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }
                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name, this.map.parentMap, true);
                        on(normalizedMap, 'defined', bind(this, function (value) {
                            this.map.normalizedMap = normalizedMap;
                            this.init([], function () { return value; }, null, {
                                enabled: true,
                                ignore: true
                            });
                        }));
                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);
                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }
                        return;
                    }
                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }
                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });
                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];
                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });
                        onError(err);
                    });
                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name, moduleMap = makeModuleMap(moduleName), hasInteractive = useInteractive;
                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }
                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }
                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);
                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }
                        try {
                            req.exec(text);
                        }
                        catch (e) {
                            return onError(makeError('fromtexteval', 'fromText eval for ' + id +
                                ' failed: ' + e, e, [id]));
                        }
                        if (hasInteractive) {
                            useInteractive = true;
                        }
                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);
                        //Support anonymous modules.
                        context.completeLoad(moduleName);
                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });
                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));
                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },
            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;
                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;
                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;
                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap, (this.map.isDefine ? this.map : this.map.parentMap), false, !this.skipMap);
                        this.depMaps[i] = depMap;
                        handler = getOwn(handlers, depMap.id);
                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }
                        this.depCount += 1;
                        on(depMap, 'defined', bind(this, function (depExports) {
                            if (this.undefed) {
                                return;
                            }
                            this.defineDep(i, depExports);
                            this.check();
                        }));
                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        }
                        else if (this.events.error) {
                            // No direct errback on this module, but something
                            // else is listening for errors, so be sure to
                            // propagate the error correctly.
                            on(depMap, 'error', bind(this, function (err) {
                                this.emit('error', err);
                            }));
                        }
                    }
                    id = depMap.id;
                    mod = registry[id];
                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));
                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));
                this.enabling = false;
                this.check();
            },
            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },
            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };
        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }
        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            }
            else {
                node.removeEventListener(name, func, false);
            }
        }
        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;
            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');
            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }
        function intakeDefines() {
            var args;
            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();
            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
                        args[args.length - 1]));
                }
                else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
            context.defQueueMap = {};
        }
        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,
            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }
                // Convert old style urlArgs string to a function.
                if (typeof cfg.urlArgs === 'string') {
                    var urlArgs = cfg.urlArgs;
                    cfg.urlArgs = function (id, url) {
                        return (url.indexOf('?') === -1 ? '?' : '&') + urlArgs;
                    };
                }
                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim, objs = {
                    paths: true,
                    bundles: true,
                    config: true,
                    map: true
                };
                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    }
                    else {
                        config[prop] = value;
                    }
                });
                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }
                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }
                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;
                        pkgObj = typeof pkgObj === 'string' ? { name: pkgObj } : pkgObj;
                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }
                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                            .replace(currDirRegExp, '')
                            .replace(jsSuffixRegExp, '');
                    });
                }
                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true);
                    }
                });
                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },
            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },
            makeRequire: function (relMap, options) {
                options = options || {};
                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;
                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }
                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }
                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }
                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }
                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;
                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                id +
                                '" has not been loaded yet for context: ' +
                                contextName +
                                (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }
                    //Grab defines waiting in the global queue.
                    intakeDefines();
                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();
                        requireMod = getModule(makeModuleMap(null, relMap));
                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;
                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });
                        checkLoaded();
                    });
                    return localRequire;
                }
                mixin(localRequire, {
                    isBrowser: isBrowser,
                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext, index = moduleNamePlusExt.lastIndexOf('.'), segment = moduleNamePlusExt.split('/')[0], isRelative = segment === '.' || segment === '..';
                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }
                        return context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, true), ext, true);
                    },
                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },
                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });
                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();
                        var map = makeModuleMap(id, relMap, true), mod = getOwn(registry, id);
                        mod.undefed = true;
                        removeScript(id);
                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];
                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function (args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });
                        delete context.defQueueMap[id];
                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }
                            cleanRegistry(id);
                        }
                    };
                }
                return localRequire;
            },
            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },
            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod, shim = getOwn(config.shim, moduleName) || {}, shExports = shim.exports;
                takeGlobalQueue();
                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    }
                    else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }
                    callGetModule(args);
                }
                context.defQueueMap = {};
                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);
                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        }
                        else {
                            return onError(makeError('nodefine', 'No define call for ' + moduleName, null, [moduleName]));
                        }
                    }
                    else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }
                checkLoaded();
            },
            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url, parentPath, bundleId, pkgMain = getOwn(config.pkgs, moduleName);
                if (pkgMain) {
                    moduleName = pkgMain;
                }
                bundleId = getOwn(bundlesMap, moduleName);
                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }
                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                }
                else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;
                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');
                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }
                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }
                return config.urlArgs && !/^blob\:/.test(url) ?
                    url + config.urlArgs(moduleName, url) : url;
            },
            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },
            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },
            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                    (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;
                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },
            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    var parents = [];
                    eachProp(registry, function (value, key) {
                        if (key.indexOf('_@r') !== 0) {
                            each(value.depMaps, function (depMap) {
                                if (depMap.id === data.id) {
                                    parents.push(key);
                                    return true;
                                }
                            });
                        }
                    });
                    return onError(makeError('scripterror', 'Script error for "' + data.id +
                        (parents.length ?
                            '", needed by: ' + parents.join(', ') :
                            '"'), evt, [data.id]));
                }
            }
        };
        context.require = context.makeRequire();
        return context;
    }
    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {
        //Find the right context, use default
        var context, config, contextName = defContextName;
        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            }
            else {
                deps = [];
            }
        }
        if (config && config.context) {
            contextName = config.context;
        }
        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }
        if (config) {
            context.configure(config);
        }
        return context.require(deps, callback, errback);
    };
    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };
    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };
    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }
    req.version = version;
    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };
    //Create default context.
    req({});
    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });
    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }
    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;
    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
            document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
            document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };
    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {}, node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);
            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);
            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                //Check if node.attachEvent is artificially added by custom script or
                //natively supported by browser
                //read https://github.com/requirejs/requirejs/issues/187
                //if we can NOT find [native code] then it must NOT natively supported.
                //in IE8, node.attachEvent does not have toString()
                //Note the test for "[native code" with no closing brace, see:
                //https://github.com/requirejs/requirejs/issues/273
                !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;
                node.attachEvent('onreadystatechange', context.onScriptLoad);
            }
            else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;
            //Calling onNodeCreated after all properties on the node have been
            //set, but before it is placed in the DOM.
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url);
            }
            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            }
            else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;
            return node;
        }
        else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation is that a build has been done so
                //that only one script needs to be loaded anyway. This may need
                //to be reevaluated if other use cases become common.
                // Post a task to the event loop to work around a bug in WebKit
                // where the worker gets garbage-collected after calling
                // importScripts(): https://webkit.org/b/153317
                setTimeout(function () { }, 0);
                importScripts(url);
                //Account for anonymous modules
                context.completeLoad(moduleName);
            }
            catch (e) {
                context.onError(makeError('importscripts', 'importScripts failed for ' +
                    moduleName + ' at ' + url, e, [moduleName]));
            }
        }
    };
    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }
        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }
    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }
            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;
                //Set final baseUrl if there is not already an explicit one,
                //but only do so if the data-main value is not a loader plugin
                //module ID.
                if (!cfg.baseUrl && mainScript.indexOf('!') === -1) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/') + '/' : './';
                    cfg.baseUrl = subPath;
                }
                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');
                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }
                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];
                return true;
            }
        });
    }
    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;
        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }
        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }
        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, commentReplace)
                    .replace(cjsRequireRegExp, function (match, dep) {
                    deps.push(dep);
                });
                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }
        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }
        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
            context.defQueue.push([name, deps, callback]);
            context.defQueueMap[name] = true;
        }
        else {
            globalDefQueue.push([name, deps, callback]);
        }
    };
    define.amd = {
        jQuery: true
    };
    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };
    //Set up with config info.
    req(cfg);
}(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var Microsoft;
(function (Microsoft) {
    var Macros;
    (function (Macros) {
        var Constants = (function () {
            function Constants() {
            }
            return Constants;
        }());
        Constants.CreateMacrosDialog = "CreateMacrosMDD_v2";
        Constants.RecordIdParam = "record_Id";
        Constants.DesignerID = "designer_id";
        Constants.MonitorID = "monitor_id";
        Constants.MacrosMonitorDialog = "MacrosMonitorMDD_v2";
        Macros.Constants = Constants;
        var Guids = (function () {
            function Guids() {
            }
            return Guids;
        }());
        Guids.AllMacrosViewGuid = "{012107d2-54d0-e911-a81c-000d3a6e50b0}";
        Guids.ActiveMacrosViewGuid = "{53ab4fc4-2fd9-e911-a81e-000d3af73f4d}";
        Guids.InactiveMacrosViewGuid = "{ddf85356-30d9-e911-a81e-000d3af73f4d}";
        Macros.Guids = Guids;
    })(Macros = Microsoft.Macros || (Microsoft.Macros = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="../../../packages/Crm.ClientApiTypings.1.3.2084/clientapi/XrmClientApi.d.ts" />
/// <reference path="Constants.ts" />
var Microsoft;
(function (Microsoft) {
    var Macros;
    (function (Macros) {
        var Utility;
        (function (Utility) {
            var webresourceName = "Localization/ProductivityMacrosComponent_webresource_strings";
            function getResourceString(key) {
                var value = key;
                if (Xrm && Xrm.Utility && Xrm.Utility.getResourceString) {
                    value = Xrm.Utility.getResourceString(webresourceName, key);
                    if (value === undefined || value === null) {
                        value = key;
                    }
                }
                return value;
            }
            Utility.getResourceString = getResourceString;
            function isMacrosView(viewId) {
                if (viewId === Microsoft.Macros.Guids.AllMacrosViewGuid || viewId === Microsoft.Macros.Guids.ActiveMacrosViewGuid || viewId === Microsoft.Macros.Guids.InactiveMacrosViewGuid) {
                    return true;
                }
                return false;
            }
            Utility.isMacrosView = isMacrosView;
            // Handler Function for Click on a Record in the Grid View
            function openRecordHandler(selectedControlSelectedItemReferences, selectedControl) {
                // Get the Current View ID
                var viewSelector = selectedControl.getViewSelector();
                var viewId = viewSelector.getCurrentView().id.toLowerCase();
                // Get the Currently Selected Record ID
                var selectedRecordGuid = selectedControlSelectedItemReferences[0].Id;
                if (isMacrosView(viewId)) {
                    var vpHeight = window.top.Xrm.Page.ui.getViewPortHeight();
                    var vpWidth = window.top.Xrm.Page.ui.getViewPortWidth();
                    var dialogOptions = {
                        width: vpWidth, height: vpHeight, position: 3 /* inline */
                    };
                    var dialogParams = {};
                    dialogParams[Microsoft.Macros.Constants.RecordIdParam] = selectedRecordGuid;
                    Xrm.Navigation.openDialog(Microsoft.Macros.Constants.CreateMacrosDialog, dialogOptions, dialogParams);
                }
                else {
                    var entityFormOptions = {
                        entityName: "workflow",
                        entityId: selectedRecordGuid
                    };
                    Xrm.Navigation.openForm(entityFormOptions);
                }
            }
            Utility.openRecordHandler = openRecordHandler;
            function openMacrosMonitorRecordHandler(selectedControlSelectedItemReferences, selectedControl) {
                var selectedRecordGuid = selectedControlSelectedItemReferences[0].Id;
                var vpHeight = window.top.Xrm.Page.ui.getViewPortHeight();
                var vpWidth = window.top.Xrm.Page.ui.getViewPortWidth();
                var dialogOptions = {
                    width: vpWidth, height: vpHeight, position: 3 /* inline */
                };
                var dialogParams = {};
                dialogParams[Microsoft.Macros.Constants.RecordIdParam] = selectedRecordGuid;
                Xrm.Navigation.openDialog(Microsoft.Macros.Constants.MacrosMonitorDialog, dialogOptions, dialogParams);
            }
            Utility.openMacrosMonitorRecordHandler = openMacrosMonitorRecordHandler;
            // Enable Function for Click on a Record in the Grid View
            function macrosEnableRule(selectedControlSelectedItemReferences, selectedControl) {
                // Get the Current View ID
                var viewSelector = selectedControl.getViewSelector();
                var viewId = viewSelector.getCurrentView().id.toLowerCase();
                if (isMacrosView(viewId)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            Utility.macrosEnableRule = macrosEnableRule;
            function newRecordHandler(selectedControl) {
                var viewSelector = selectedControl.getViewSelector();
                var viewId = viewSelector.getCurrentView().id.toLowerCase();
                if (isMacrosView(viewId)) {
                    var vpHeight = window.top.Xrm.Page.ui.getViewPortHeight();
                    var vpWidth = window.top.Xrm.Page.ui.getViewPortWidth();
                    var dialogOptions = {
                        width: vpWidth, height: vpHeight, position: 3 /* inline */
                    };
                    Xrm.Navigation.openDialog(Microsoft.Macros.Constants.CreateMacrosDialog, dialogOptions, null);
                }
                else {
                    var entityFormOptions = {
                        entityName: "workflow"
                    };
                    Xrm.Navigation.openForm(entityFormOptions);
                }
            }
            Utility.newRecordHandler = newRecordHandler;
            // Handler Function for the MDD OnLoad to pass the RecordID from MDD to the IFrame Control
            function dialogOnLoadHandler(eventContext) {
                var formContext = eventContext.getFormContext();
                var designerControl = formContext.getControl(Microsoft.Macros.Constants.DesignerID);
                var appUrl = new URL(Xrm.Utility.getGlobalContext().getCurrentAppUrl());
                var iframeUrl = appUrl.origin + "/WebResources/MacroDesigner/msdyn_ProductivityMacrosComponent_macroDesigner.html";
                var input = formContext.data.attributes.getByName(Microsoft.Macros.Constants.RecordIdParam).getValue();
                if (input == null) {
                    designerControl.setSrc(iframeUrl);
                }
                else {
                    designerControl.setSrc(iframeUrl + "?id=" + input);
                }
            }
            Utility.dialogOnLoadHandler = dialogOnLoadHandler;
            function monitorDialogOnLoadHandler(eventContext) {
                var formContext = eventContext.getFormContext();
                var monitorControl = formContext.getControl(Microsoft.Macros.Constants.MonitorID);
                var appUrl = new URL(Xrm.Utility.getGlobalContext().getCurrentAppUrl());
                var iframeUrl = appUrl.origin + "/WebResources/MacroDesigner/msdyn_ProductivityMacrosComponent_macroMonitor.html";
                var input = formContext.data.attributes.getByName(Microsoft.Macros.Constants.RecordIdParam).getValue();
                if (input == null) {
                    monitorControl.setSrc(iframeUrl);
                }
                else {
                    monitorControl.setSrc(iframeUrl + "?id=" + input);
                }
                formContext.getControl("macrosname_id").setFocus();
            }
            Utility.monitorDialogOnLoadHandler = monitorDialogOnLoadHandler;
        })(Utility = Macros.Utility || (Macros.Utility = {}));
    })(Macros = Microsoft.Macros || (Microsoft.Macros = {}));
})(Microsoft || (Microsoft = {}));
//# sourceMappingURL=msdyn_ProductivityMacrosComponent_internal_library.js.map