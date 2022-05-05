var forecastpageapi =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/*! exports provided: defaultMemoize, createSelectorCreator, createSelector, createStructuredSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorCreator", function() { return createSelectorCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStructuredSelector", function() { return createStructuredSelector; });
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "./node_modules/wait-for-expect/lib/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/wait-for-expect/lib/helpers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetTimeoutFn = getSetTimeoutFn;

/* eslint-disable import/prefer-default-export */

/* eslint-env jest */
// Used to avoid using Jest's fake timers and Date.now mocks
// See https://github.com/TheBrainFamily/wait-for-expect/issues/4 and
// https://github.com/TheBrainFamily/wait-for-expect/issues/12 for more info
var globalObj = typeof window === "undefined" ? global : window; // Currently this fn only supports jest timers, but it could support other test runners in the future.

function runWithRealTimers(callback) {
  var usingJestFakeTimers = // eslint-disable-next-line no-underscore-dangle
  globalObj.setTimeout._isMockFunction && typeof jest !== "undefined";

  if (usingJestFakeTimers) {
    jest.useRealTimers();
  }

  var callbackReturnValue = callback();

  if (usingJestFakeTimers) {
    jest.useFakeTimers();
  }

  return callbackReturnValue;
}

function getSetTimeoutFn() {
  return runWithRealTimers(function () {
    return globalObj.setTimeout;
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/wait-for-expect/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/wait-for-expect/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/wait-for-expect/lib/helpers.js");

var defaults = {
  timeout: 4500,
  interval: 50
};
/**
 * Waits for the expectation to pass and returns a Promise
 *
 * @param  expectation  Function  Expectation that has to complete without throwing
 * @param  timeout  Number  Maximum wait interval, 4500ms by default
 * @param  interval  Number  Wait-between-retries interval, 50ms by default
 * @return  Promise  Promise to return a callback result
 */

var waitForExpect = function waitForExpect(expectation) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults.timeout;
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaults.interval;
  var setTimeout = (0, _helpers.getSetTimeoutFn)(); // eslint-disable-next-line no-param-reassign

  if (interval < 1) interval = 1;
  var maxTries = Math.ceil(timeout / interval);
  var tries = 0;
  return new Promise(function (resolve, reject) {
    var rejectOrRerun = function rejectOrRerun(error) {
      if (tries > maxTries) {
        reject(error);
        return;
      } // eslint-disable-next-line no-use-before-define


      setTimeout(runExpectation, interval);
    };

    function runExpectation() {
      tries += 1;

      try {
        Promise.resolve(expectation()).then(function () {
          return resolve();
        }).catch(rejectOrRerun);
      } catch (error) {
        rejectOrRerun(error);
      }
    }

    setTimeout(runExpectation, 0);
  });
};

waitForExpect.defaults = defaults;
var _default = waitForExpect;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/ForecastPageUiApi/common/baseUiApi.ts":
/*!***************************************************!*\
  !*** ./src/ForecastPageUiApi/common/baseUiApi.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var guidUtils_1 = __webpack_require__(/*! ../../Utility/guidUtils */ "./src/Utility/guidUtils.ts");
var BaseUiApi = (function () {
    function BaseUiApi(context, fullApi) {
        this.context = context;
        this.fullApi = fullApi;
        this.logger = context.forecastServices.logger;
    }
    BaseUiApi.prototype.isCurrentFR = function (frId) {
        return this.context.stateManager.fcFr.getActiveFrId() == frId;
    };
    BaseUiApi.prototype.isCurrentSnapshot = function (snapId) {
        if (!this.fullApi.fiSnapshot.isSnapshotFiGridPageActive())
            return true;
        return this.context.stateManager.snapshot.getActiveSnapshotInFIGridId().id === snapId;
    };
    BaseUiApi.prototype.normalizeID = function (id) {
        return id.replace("_agg", "");
    };
    BaseUiApi.prototype.determineFiColumnType = function (id) {
        var isAgg = id.endsWith("_agg");
        if (isAgg) {
            return "AggregatedColumns";
        }
        return "RolledUpColumns";
    };
    BaseUiApi.prototype.getBaseCurrencyFormattedValue = function (value) {
        var symbol = this.context.stateManager.global.getBaseCurrencySymbol();
        return this.context.forecastServices.crmDataFormatter.formatCurrency(value, symbol);
    };
    BaseUiApi.prototype.getNumberFormattedValue = function (value, precision) {
        return this.context.forecastServices.crmDataFormatter.formatNumber(value, precision);
    };
    BaseUiApi.prototype.getDateFormattedValue = function (date, includeTime) {
        if (date.toDateString().toLocaleLowerCase() === new Date('0001-01-01T00:00:00Z').toDateString().toLocaleLowerCase())
            return "";
        return this.context.forecastServices.crmDataFormatter.formatDate(date, includeTime, true);
    };
    BaseUiApi.prototype.getFiFromFiId = function (fiId) {
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        var fiListState = this.context.stateManager.fiGrid.getState().fiGrid.fiListByFr[frId];
        if (!fiListState)
            return undefined;
        return fiListState.byId[this.normalizeID(fiId)];
    };
    BaseUiApi.prototype.isFiIdPresentInGrid = function (fiId) {
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        var fiListState = this.context.stateManager.fiGrid.getState().fiGrid.fiListByFr[frId];
        if (!fiListState)
            return false;
        var fi = fiListState.byId[this.normalizeID(fiId)];
        if (!fi) {
            return false;
        }
        return true;
    };
    BaseUiApi.prototype.getColumnInfoFromId = function (colId) {
        var fc = this.fullApi.fcfrManager.getActiveFC();
        if (!fc)
            return undefined;
        var col = fc.gridMetadata.columnDefinitions.find(function (c) { return c.id == colId; });
        return col;
    };
    BaseUiApi.prototype.logCategory = function (logLevel, component, message, args, action, methodName, featurerName) {
        if (args === void 0) { args = {}; }
        if (this.logger.logLevel <= logLevel)
            this.logger.logCategory(logLevel, component, message, args, action, methodName, featurerName);
    };
    BaseUiApi.prototype.logInfo = function (component, message, args, action, methodName, featurerName) {
        if (args === void 0) { args = {}; }
        this.logCategory(forecastPageTypes_1.ILogLevel.Info, component, message, args, action, methodName, featurerName);
    };
    BaseUiApi.prototype.logDebug = function (component, message, args, action, methodName, featurerName) {
        if (args === void 0) { args = {}; }
        this.logCategory(forecastPageTypes_1.ILogLevel.Debug, component, message, args, action, methodName, featurerName);
    };
    BaseUiApi.prototype.logError = function (component, error, suggestion, args, action, methodName, featurerName) {
        if (args === void 0) { args = {}; }
        this.logger.logError(component, error, suggestion, args, action, methodName, featurerName);
    };
    BaseUiApi.prototype.logWarning = function (component, message, args, action, methodName, featurerName) {
        if (args === void 0) { args = {}; }
        this.logCategory(forecastPageTypes_1.ILogLevel.Warning, component, message, args, action, methodName, featurerName);
    };
    BaseUiApi.prototype.logUsage = function (component, event, args, action, methodName, featurerName) {
        if (args === void 0) { args = {}; }
        this.logCategory(forecastPageTypes_1.ILogLevel.Usage, component, event, args, action, methodName, featurerName);
    };
    BaseUiApi.prototype.addMessageBarNotification = function (msgType, notificationMessage) {
        var notifObj = {
            messageType: msgType,
            message: notificationMessage,
            isButtonRequired: false,
            buttonName: "",
            handler: ""
        };
        this.context.stateManager.nrt.setMessageBarNotification(notifObj);
    };
    BaseUiApi.prototype.createNewContext = function (triggerSource) {
        if (triggerSource === void 0) { triggerSource = "page-init"; }
        return {
            correlationId: guidUtils_1.GuidUtils.NewGuid(),
            triggerSource: triggerSource
        };
    };
    BaseUiApi.prototype.checkIfPredictiveColumnIsVisible = function (fc) {
        var predCol = fc.gridMetadata.columnDefinitions.find(function (c) { return c.forecastColumnType === forecastPageTypes_1.ForecastColumnType.Predictive; });
        var isPredictiveColumnVisible = false;
        if (predCol) {
            isPredictiveColumnVisible = predCol.isVisible;
        }
        return isPredictiveColumnVisible;
    };
    return BaseUiApi;
}());
exports.BaseUiApi = BaseUiApi;


/***/ }),

/***/ "./src/ForecastPageUiApi/common/constants.ts":
/*!***************************************************!*\
  !*** ./src/ForecastPageUiApi/common/constants.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MANUAL_ADJUST_FEATURE_NAME = "Forecast Manual Adjustment";
exports.FIGRID_ADJUST_FEATURE_NAME = "Forecast instance grid";
exports.FISNAPSHOT_FEATURE_NAME = "Forecast snapshot";
exports.DEALFLOW_FEATURE_NAME = "Dealflow";
exports.PREDICTIVE_FEATURE_NAME = "Predictive forecasting";
exports.FCFR_FEATURE_NAME = "FC-FR Manager";
exports.PARTICIPAATING_RECORDS_FEATURE_NAME = "Forecast instance participating records";
exports.CLICK_ACTION = "Click";
exports.DISMISS_ACTION = "Dismiss";


/***/ }),

/***/ "./src/ForecastPageUiApi/editWithHistoryApi/editWithHistoryApi.ts":
/*!************************************************************************!*\
  !*** ./src/ForecastPageUiApi/editWithHistoryApi/editWithHistoryApi.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var types_1 = __webpack_require__(/*! ../fiGridApi/types */ "./src/ForecastPageUiApi/fiGridApi/types.ts");
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var EditWithHistoryApiImpl = (function (_super) {
    __extends(EditWithHistoryApiImpl, _super);
    function EditWithHistoryApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.fiGrid;
        return _this;
    }
    EditWithHistoryApiImpl.prototype.isEditDialogType = function () {
        return (this.stateManager.getCalloutDialogType() == forecastPageTypes_1.DialogType.Edit);
    };
    EditWithHistoryApiImpl.prototype.onHistoryClick = function (rowId, colId) {
        this.logUsage("History icon", "", { rowId: rowId, colId: colId }, constants_1.CLICK_ACTION, "EditWithHistoryApiImpl.onHistoryClick", constants_1.MANUAL_ADJUST_FEATURE_NAME);
        this.updateCalloutCell(rowId, colId);
        this.stateManager.setCalloutDialogType(forecastPageTypes_1.DialogType.History);
        this.updateHistoryData([]);
        this.triggerAdjustmentHistoryFetch();
    };
    EditWithHistoryApiImpl.prototype.onEditClick = function (rowId, colId) {
        this.logUsage("Edit icon", "", { rowId: rowId, colId: colId }, constants_1.CLICK_ACTION, "EditWithHistoryApiImpl.onEditClick", constants_1.MANUAL_ADJUST_FEATURE_NAME);
        this.updateCalloutCell(rowId, colId);
        this.stateManager.setCalloutDialogType(forecastPageTypes_1.DialogType.Edit);
        this._updateCellWithErrorMessage({ cellId: types_1.NULL_CELLINFO, errorMessage: "" });
        this.updateHistoryData([]);
        this.triggerAdjustmentHistoryFetch();
    };
    EditWithHistoryApiImpl.prototype.onCalloutDismiss = function () {
        this.logUsage("Callout", "", {}, constants_1.DISMISS_ACTION, "EditWithHistoryApiImpl.onCalloutDismiss", constants_1.MANUAL_ADJUST_FEATURE_NAME);
        var cell = this.context.stateManager.fiGrid.getCalloutCell();
        this.updateCalloutCell("", "");
        this.setFocusBackToGrid(cell);
    };
    EditWithHistoryApiImpl.prototype.setFocusBackToGrid = function (cell) {
        var dataid = cell.rowId + "_" + cell.colId;
        var focusElement = document.querySelector('[data-id="' + dataid + '"]');
        if (focusElement) {
            focusElement.focus();
        }
    };
    EditWithHistoryApiImpl.prototype.getTitle = function () {
        var outP = {
            ownerName: "",
            colTitle: ""
        };
        var cell = this.context.stateManager.fiGrid.getCalloutCell();
        if (!cell.rowId)
            return outP;
        var fi = this.getFiFromFiId(cell.rowId);
        if (!fi)
            return outP;
        var hierarchyPrimaryColumnId = this.context.stateManager.fcFr.getActiveFc().gridMetadata.columnDefinitions.find(function (i) { return i.forecastColumnType == __1.ForecastColumnType.HierarchyPrimary; });
        outP.ownerName = fi.AggregateColumnData[hierarchyPrimaryColumnId.id].displayValue;
        var col = this.getColumnInfoFromId(cell.colId);
        if (!col)
            return outP;
        outP.colTitle = col.localizedHeaderTitle;
        return outP;
    };
    EditWithHistoryApiImpl.prototype.getAdjustmentValues = function () {
        var outP = {
            adjustments: [],
            canRevert: false,
        };
        var cell = this.context.stateManager.fiGrid.getCalloutCell();
        if (!cell.rowId)
            return outP;
        var fi = this.getFiFromFiId(cell.rowId);
        if (!fi)
            return outP;
        var fiColumnData = (this.determineFiColumnType(cell.rowId) == "AggregatedColumns") ? fi.AggregateColumnData : fi.RollUpColumnData;
        var cellData = fiColumnData[cell.colId];
        if (!cellData)
            return outP;
        if (cellData.isManualAdjusted) {
            var directAdjustmentRow = {
                iconName: "edit",
                adjustmentType: __1.AdjustmentType.Direct,
                adjustmentValue: this.getBaseCurrencyFormattedValue(cellData.directAdjustedValue),
            };
            outP.canRevert = true;
            outP.adjustments.push(directAdjustmentRow);
        }
        if (cellData.isRollupAdjusted) {
            var inDirectAdjustmentRow = {
                iconName: "edit",
                adjustmentType: __1.AdjustmentType.Indirect,
                adjustmentValue: this.getBaseCurrencyFormattedValue(cellData.rollupAdjustedValue),
            };
            outP.adjustments.push(inDirectAdjustmentRow);
        }
        var calculatedAdjustmentRow = {
            iconName: "calculator",
            adjustmentType: __1.AdjustmentType.Calculated,
            adjustmentValue: this.getBaseCurrencyFormattedValue(cellData.originalValue),
        };
        outP.adjustments.push(calculatedAdjustmentRow);
        return outP;
    };
    EditWithHistoryApiImpl.prototype.isHistoryLoading = function () {
        return this.stateManager.getIsHistoryLoading();
    };
    EditWithHistoryApiImpl.prototype.getAdjustmentHistory = function () {
        return this.stateManager.getHistoryData();
    };
    EditWithHistoryApiImpl.prototype.triggerAdjustmentHistoryFetch = function () {
        var _this = this;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        var cell = this.context.stateManager.fiGrid.getCalloutCell();
        var PageInfo = {
            SortingAttribute: "",
            SortingOrder: "",
            Count: 0,
            Skip: 0,
        };
        var maHistoryReq = {
            ForecastConfigurationId: fcId,
            ForecastInstanceId: this.normalizeID(cell.rowId),
            ForecastConfigurationColumnId: cell.colId,
            ColumnGroupType: __1.ColumnGroupType.RolledUp,
            PageInfo: PageInfo,
        };
        maHistoryReq.ColumnGroupType = (this.determineFiColumnType(cell.rowId) == "AggregatedColumns") ? __1.ColumnGroupType.Aggregated : __1.ColumnGroupType.RolledUp;
        this.logInfo("MAGetAdjustmentHistory", "start");
        this.logDebug("MAGetAdjustmentHistory", "request value", { maHistoryReq: maHistoryReq });
        this.context.forecastServices.forecastDataAccess.ManualAdjustHistory(maHistoryReq).then(function (historyList) {
            _this.logInfo("MAGetAdjustmentHistory", "completed");
            _this.logDebug("MAGetAdjustmentHistory", "Response value", { historyList: historyList });
            var openedCell = _this.context.stateManager.fiGrid.getCalloutCell();
            if (openedCell.rowId != "" && openedCell.colId != "" && cell.rowId == openedCell.rowId && cell.colId == openedCell.colId) {
                _this.updateHistoryLoading(false);
                var UIData = _this._convertToDisplayData(historyList);
                _this.updateHistoryData(UIData);
            }
        }).catch(function (error) {
            _this.logError("MAGetAdjustmentHistory request failed", error, '');
            _this.updateHistoryLoading(false);
        });
        this.updateHistoryLoading(true);
    };
    EditWithHistoryApiImpl.prototype._convertToDisplayData = function (historyList) {
        var _this = this;
        var outP = [];
        if (historyList == null)
            return outP;
        historyList.map(function (data) {
            outP.push({
                IsReset: data.IsReset,
                FromValue: _this.getBaseCurrencyFormattedValue(data.From),
                ToValue: _this.getBaseCurrencyFormattedValue(data.To),
                AdjustedByName: data.AdjustedByName,
                Notes: data.Notes,
                TimeAgo: data.AdjustedOn
            });
        });
        return outP.reverse();
    };
    EditWithHistoryApiImpl.prototype.onManualAdjustmentClick = function (newValue, notes) {
        var _this = this;
        var context = this.createNewContext("fi-grid-manual-adjust");
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        var cell = this.context.stateManager.fiGrid.getCalloutCell();
        var manualAdjReq = {
            ForecastInstanceId: this.normalizeID(cell.rowId),
            ForecastConfigurationColumnId: cell.colId,
            Value: newValue == null ? null : Number(newValue),
            ForecastConfigurationId: fcId,
            Notes: notes,
            ColumnType: __1.ForecastColumnType.Rollup,
            UpdatedColumnAttribute: this.determineFiColumnType(cell.rowId)
        };
        this.logInfo("ManAdjustRequest", "start", __assign({}, context));
        this.logDebug("ManAdjustRequest", "request value", { manualAdjReq: manualAdjReq });
        this.context.forecastServices.forecastDataAccess.ManuallyAdjustRow(manualAdjReq).then(function (newFiList) {
            _this.logInfo("ManAdjustRequest", "completed", __assign({}, context));
            _this.logDebug("ManAdjustRequest", "Response value", { newFiList: newFiList });
            _this.updateLoadingCell("", "");
            _this.noteChangedCellsForHighlight({ frId: frId, newFiList: newFiList });
            _this.updateAdjustedFiData({ frId: frId, newFiList: newFiList }, false);
        }).catch(function (error) {
            _this.logError("ManualAdjustment request failed", error, '');
            _this.updateLoadingCell("", "");
            var errorCellInfo = { cellId: cell, errorMessage: error.meesage ? error.meesage : _this.context.forecastServices.stringsProvider.getLocalizedString(sharedEnums_1.MA_REQUEST_FAILED) };
            _this._updateCellWithErrorMessage(errorCellInfo);
        });
        this.updateLoadingCell(cell.rowId, cell.colId);
        this.updateCalloutCell("", "");
        this.stateManager.setAdjustedValue(newValue);
        this.setFocusBackToGrid(cell);
    };
    EditWithHistoryApiImpl.prototype.noteChangedCellsForHighlight = function (_a) {
        var _this = this;
        var frId = _a.frId, newFiList = _a.newFiList;
        this.context.stateManager.fiGrid.recordChangedCells(frId, newFiList);
        setTimeout(function () {
            _this.logDebug("ManAdjustRequest", "Clear highlight cell animation", { newFiList: newFiList });
            _this.context.stateManager.fiGrid.clearChangedCells(newFiList);
        }, 6000);
    };
    EditWithHistoryApiImpl.prototype.updateAdjustedFiData = function (_a, updateHistoryFlags) {
        var frId = _a.frId, newFiList = _a.newFiList;
        this.context.stateManager.fiGrid.updateFIRollupData(frId, newFiList, updateHistoryFlags);
    };
    EditWithHistoryApiImpl.prototype.updateCalloutCell = function (rowId, colId) {
        this.stateManager.setCalloutCell({ rowId: rowId, colId: colId });
    };
    EditWithHistoryApiImpl.prototype.updateHistoryLoading = function (state) {
        this.stateManager.setIsHistoryLoading(state);
    };
    EditWithHistoryApiImpl.prototype.updateLoadingCell = function (rowId, colId) {
        this.stateManager.setLoadingCell({ rowId: rowId, colId: colId });
    };
    EditWithHistoryApiImpl.prototype.updateHistoryData = function (data) {
        this.stateManager.updateHistoryData(data);
    };
    EditWithHistoryApiImpl.prototype._updateCellWithErrorMessage = function (errorCell) {
        this.stateManager.setCellWithError({ cellId: errorCell.cellId, errorMessage: errorCell.errorMessage });
    };
    return EditWithHistoryApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.EditWithHistoryApiImpl = EditWithHistoryApiImpl;


/***/ }),

/***/ "./src/ForecastPageUiApi/fcCharts/fcChartsApiImpl.ts":
/*!***********************************************************!*\
  !*** ./src/ForecastPageUiApi/fcCharts/fcChartsApiImpl.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var FCChartsApiImpl = (function (_super) {
    __extends(FCChartsApiImpl, _super);
    function FCChartsApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.fcCharts;
        return _this;
    }
    FCChartsApiImpl.prototype.isCumulativeChartLoading = function () {
        return this.stateManager.getIsCumulativeChartLoading();
    };
    FCChartsApiImpl.prototype.isWaterfallChartLoading = function () {
        return this.stateManager.getIsWaterfallChartLoading();
    };
    FCChartsApiImpl.prototype.getForecastCumulativeTrendLineSeries = function () {
        return this.stateManager.getCummulativeTrendChartData();
    };
    FCChartsApiImpl.prototype.getLatestPredictedResultSplit = function () {
        return this.stateManager.getWaterFallTrendChartData();
    };
    FCChartsApiImpl.prototype.isSelectedCellPredictive = function (colId) {
        var colInfo = this.getColumnInfoFromId(colId);
        return (colInfo != undefined && colInfo.forecastColumnType == forecastPageTypes_1.ForecastColumnType.Predictive);
    };
    FCChartsApiImpl.prototype.SetIsWaterFallPanelOpen = function (arg0) {
        this.stateManager.setIsWaterFallPanelOpen(arg0);
    };
    FCChartsApiImpl.prototype.IsWaterFallPanelOpen = function () {
        return !this.fullApi.fiSnapshot.isSnapshotFiGridPageActive() && this.stateManager.IsWaterFallPanelOpen();
    };
    FCChartsApiImpl.prototype.getExpandedChartType = function () {
        return this.stateManager.getExpandedChartType();
    };
    FCChartsApiImpl.prototype.setExpandedChartTpe = function (chartType) {
        this.stateManager.setExpandedChartTpe(chartType);
    };
    FCChartsApiImpl.prototype.getForecastChartType = function () {
        return this.stateManager.getForecastChartType();
    };
    FCChartsApiImpl.prototype.setForecastChartTpe = function (chartType) {
        this.stateManager.setForecastChartTpe(chartType);
    };
    FCChartsApiImpl.prototype._onCellSelect = function (fcId, frId, rowId, context) {
        context = context || this.createNewContext("fccharts-row-select");
        this.logUsage("Charts Fi row", "", __assign({ rowId: rowId }, context), "Select", "", constants_1.PREDICTIVE_FEATURE_NAME);
        var isRollUp = !rowId.endsWith("_agg");
        var fiId = rowId.replace("_agg", "");
        this.stateManager.resetChartData();
        var requestId = new Date().getTime();
        this.stateManager.setCompositeChartRequestId(requestId);
        this.fetchTrendChartData(fcId, frId, fiId, isRollUp, requestId, context);
    };
    FCChartsApiImpl.prototype._onPredictiveCellSelect = function (fcId, frId, rowId, context) {
        context = context || this.createNewContext("predictive-cell-select");
        this.logUsage("Predictive cell", "", __assign({ rowId: rowId }, context), "Select", "", constants_1.PREDICTIVE_FEATURE_NAME);
        if (this.fullApi.global.getSIPackageInstalled()) {
            var isRollUp = !rowId.endsWith("_agg");
            var fiId = rowId.replace("_agg", "");
            this.stateManager.resetChartData();
            this.SetIsWaterFallPanelOpen(true);
            this.fetchAndUpdatelatestPredictiveResultSplit(fcId, frId, rowId, fiId, isRollUp, context);
        }
        this.fullApi.partRecordViewer.onCloseClick();
    };
    FCChartsApiImpl.prototype._onFcChange = function (newId, oldId) {
        if (oldId != newId)
            this.SetIsWaterFallPanelOpen(false);
    };
    FCChartsApiImpl.prototype._onFrChange = function (args) {
        if (args && args.newId != args.oldFrId) {
            this.SetIsWaterFallPanelOpen(false);
        }
    };
    FCChartsApiImpl.prototype.fetchAndUpdateCumulativeTrendChartData = function (fcId, frId, fiId, isRollUp, requestId) {
        return __awaiter(this, void 0, void 0, function () {
            var cummulativeTrendChartData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.context.forecastServices.forecastDataAccess.fetchForecastCumulativeTrendForAllCategories(fcId, frId, fiId, isRollUp)];
                    case 1:
                        cummulativeTrendChartData = _a.sent();
                        if (this.stateManager.getCompositeChartRequestId() == requestId) {
                            this.processAndUpdateFCChartData(cummulativeTrendChartData);
                        }
                        return [3, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.context.errorHandler.handleError("Error while fetching forecast trend chart data", 3, e_1);
                        throw e_1;
                    case 3: return [2];
                }
            });
        });
    };
    FCChartsApiImpl.prototype.fetchAndUpdateLatestPredictiveTrendChartData = function (fcId, frId, fiId, isRollUp, requestId) {
        return __awaiter(this, void 0, void 0, function () {
            var latestPredictiveTrendChartData, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.context.forecastServices.forecastDataAccess.fetchLatestPredictiveTrend(fcId, frId, fiId, isRollUp)];
                    case 1:
                        latestPredictiveTrendChartData = _a.sent();
                        if (this.stateManager.getCompositeChartRequestId() == requestId) {
                            this.processAndUpdateFCChartData(latestPredictiveTrendChartData, true);
                        }
                        return [3, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.context.errorHandler.handleError("Error while fetching latest predictive trend chart data", 3, e_2);
                        throw e_2;
                    case 3: return [2];
                }
            });
        });
    };
    FCChartsApiImpl.prototype.fetchAndUpdatelatestPredictiveResultSplit = function (fcId, frId, rowId, fiId, isRollUp, context) {
        return __awaiter(this, void 0, void 0, function () {
            var latestPredictiveResultSplit, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.context.forecastServices.forecastDataAccess.fetchLatestPredictedResultSplit(fcId, frId, fiId, isRollUp)];
                    case 1:
                        latestPredictiveResultSplit = _a.sent();
                        this.logInfo("fcChartsFetcher", "", __assign({}, context), "fetch-fccharts-success");
                        if (this.fullApi.fiGrid.getSelectedCell().rowId == rowId) {
                            this.stateManager.setWaterFallTrendChartData(latestPredictiveResultSplit);
                        }
                        return [3, 3];
                    case 2:
                        e_3 = _a.sent();
                        this.context.errorHandler.handleError("Error while fetching  predictive result split chart data", 3, e_3);
                        throw e_3;
                    case 3: return [2];
                }
            });
        });
    };
    FCChartsApiImpl.prototype.fetchPredictionStatusForFC = function (fcId) {
        return __awaiter(this, void 0, void 0, function () {
            var licenseStatus, predictionStatus, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        licenseStatus = this.stateManager.getSILicenseStatusForOrg();
                        if (!(licenseStatus && licenseStatus.response && licenseStatus.response.toLowerCase() == "true")) return [3, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.context.forecastServices.forecastDataAccess.fetchPredictionStatusForFC(fcId)];
                    case 2:
                        predictionStatus = _a.sent();
                        this.stateManager.setPredictionStatusForFC(predictionStatus);
                        return [3, 4];
                    case 3:
                        e_4 = _a.sent();
                        this.logError("FcChartsApi", e_4, "Error fetching prediction status for FC");
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    FCChartsApiImpl.prototype.fetchTrendChartData = function (fcId, frId, fiId, isRollUp, requestId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var trendChartData, promises, trendDataPromise, predictionPromise, e_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        trendChartData = {};
                        promises = [];
                        trendDataPromise = this.context.forecastServices.forecastDataAccess.fetchForecastCumulativeTrendForAllCategories(fcId, frId, fiId, isRollUp);
                        promises = promises.concat(trendDataPromise);
                        if (this.isPredictiveEnabled()) {
                            predictionPromise = this.context.forecastServices.forecastDataAccess.fetchLatestPredictiveTrend(fcId, frId, fiId, isRollUp);
                            promises = promises.concat(predictionPromise);
                        }
                        return [4, Promise.all(promises).then(function (result) {
                                _this.logInfo("TrendChartDataFetcher", "", __assign({}, context), "fetch-trendChartData-success");
                                trendChartData = result[0];
                                if (result.length > 1) {
                                    trendChartData.series = trendChartData.series.concat(result[1].series);
                                }
                            })
                                .catch(function (error) {
                                _this.logError("FcChartsApi", error, "Error fetching chart data", __assign({}, context));
                            })];
                    case 1:
                        _a.sent();
                        if (this.stateManager.getCompositeChartRequestId() == requestId) {
                            this.processAndUpdateFCChartData(trendChartData, false);
                        }
                        return [3, 3];
                    case 2:
                        e_5 = _a.sent();
                        this.context.errorHandler.handleError("Error while fetching forecast trend chart data.", 3, e_5);
                        throw e_5;
                    case 3: return [2];
                }
            });
        });
    };
    FCChartsApiImpl.prototype.processAndUpdateFCChartData = function (trendChartData, isPreditiveLatestTrendResponse) {
        if (isPreditiveLatestTrendResponse === void 0) { isPreditiveLatestTrendResponse = false; }
        return __awaiter(this, void 0, void 0, function () {
            var existingChartData, MilliSecondsInADay, recurrenceType, recurrenceStartDate, recurrenceEndDate, tickIntervalValue, minorTickIntervalValue, quotaLineSeries, xAxis1, lineSeriesChartData;
            return __generator(this, function (_a) {
                existingChartData = this.stateManager.getCummulativeTrendChartData();
                if (Object.keys(existingChartData).length == 0) {
                    MilliSecondsInADay = 24 * 3600 * 1000;
                    recurrenceType = trendChartData.info.recurrenceType;
                    recurrenceStartDate = trendChartData.info.startDate;
                    recurrenceEndDate = trendChartData.info.endDate;
                    tickIntervalValue = 7 * MilliSecondsInADay;
                    minorTickIntervalValue = 1 * MilliSecondsInADay;
                    if (recurrenceType == forecastPageTypes_1.RecurrenceType.Montly) {
                        tickIntervalValue = 7 * MilliSecondsInADay;
                        minorTickIntervalValue = 1 * MilliSecondsInADay;
                    }
                    else if (recurrenceType == forecastPageTypes_1.RecurrenceType.Quarterly) {
                        tickIntervalValue = 30 * MilliSecondsInADay;
                        minorTickIntervalValue = 7 * MilliSecondsInADay;
                    }
                    quotaLineSeries = {
                        id: "quota",
                        name: trendChartData.info.quota.Label ? trendChartData.info.quota.Label : "Quota",
                        data: [[recurrenceStartDate, trendChartData.info.quota.Value]],
                        dashStyle: "ShortDash",
                        visible: trendChartData.info.quota.Value > 0 ? true : false,
                        marker: { enabled: false },
                        color: trendChartData.info.quota.Color,
                        enableMouseTracking: false,
                        showInLegend: trendChartData.info.quota.Value > 0 ? true : false
                    };
                    trendChartData.series.push(quotaLineSeries);
                    xAxis1 = [{
                            type: 'datetime',
                            tickInterval: minorTickIntervalValue,
                            gridLineWidth: 0,
                            startOnTick: true,
                            endOnTick: true,
                            minPadding: 0,
                            maxPadding: 0,
                            showLastLabel: true,
                            min: recurrenceStartDate,
                            max: recurrenceEndDate
                        }, {
                            linkedTo: 0,
                            startOnTick: true,
                            endOnTick: true,
                            gridLineWidth: 1,
                            type: 'datetime',
                            tickInterval: tickIntervalValue,
                            opposite: true,
                            min: recurrenceStartDate,
                            max: recurrenceEndDate
                        }];
                    lineSeriesChartData = {
                        xAxis: xAxis1,
                        lineseries: trendChartData.series,
                        tooltip: {
                            xDateFormat: '%Y-%m-%d'
                        }
                    };
                    this.stateManager.setCummulativeTrendChartData(lineSeriesChartData);
                }
                else {
                    existingChartData.lineseries = existingChartData.lineseries.concat(trendChartData.series);
                    this.stateManager.setCummulativeTrendChartData(existingChartData);
                }
                return [2];
            });
        });
    };
    FCChartsApiImpl.prototype.isPredictiveEnabled = function () {
        var isPredictiveEnabled = false;
        this.fullApi.fcfrManager.getActiveFC().gridMetadata.columnDefinitions.forEach(function (val) {
            if (val.forecastColumnType == forecastPageTypes_1.ForecastColumnType.Predictive && val.isVisible == true) {
                isPredictiveEnabled = true;
            }
        });
        return isPredictiveEnabled;
    };
    return FCChartsApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.FCChartsApiImpl = FCChartsApiImpl;


/***/ }),

/***/ "./src/ForecastPageUiApi/fcFrManager/fcFrManager.ts":
/*!**********************************************************!*\
  !*** ./src/ForecastPageUiApi/fcFrManager/fcFrManager.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var FcFrManager = (function (_super) {
    __extends(FcFrManager, _super);
    function FcFrManager(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.fcListItemSelector = reselect_1.createSelector(function (allFcs) { return allFcs; }, function (allFCs) { return allFCs.map(function (fc) {
            return {
                id: fc.id,
                title: fc.name,
                isActive: fc.stateCode == 0
            };
        }); });
        _this.frListItemSelector = reselect_1.createSelector(function (allFcs) { return allFcs; }, function (allFRs) {
            var currDate = new Date();
            return allFRs.map(function (fr) {
                var outP = {
                    id: fr.id,
                    title: fr.name,
                    daysLeft: 0,
                    periodExpiryStatus: forecastPageTypes_1.FrPeriodExpiryStatus.Current
                };
                var _a = _this.getFRDatesFromFR(fr), validFromDate = _a[0], validToDate = _a[1];
                if ((validFromDate <= currDate) && (validToDate >= currDate)) {
                    var timeDiff = Number(validToDate) - Number(currDate);
                    var days = timeDiff / (1000 * 60 * 60 * 24);
                    outP.daysLeft = Math.floor(days);
                    outP.periodExpiryStatus = forecastPageTypes_1.FrPeriodExpiryStatus.Current;
                }
                else {
                    if (currDate > validToDate) {
                        outP.periodExpiryStatus = forecastPageTypes_1.FrPeriodExpiryStatus.Ended;
                    }
                    if (currDate < validFromDate) {
                        outP.periodExpiryStatus = forecastPageTypes_1.FrPeriodExpiryStatus.NotStarted;
                    }
                }
                return outP;
            });
        });
        _this.fcFetchCompleteAndNoneFound = false;
        _this.stateManager = _this.context.stateManager.fcFr;
        return _this;
    }
    FcFrManager.prototype.getFCList = function () {
        return this.fcListItemSelector(this.stateManager.getFcList());
    };
    FcFrManager.prototype.getFRDatesFromFR = function (fr) {
        var validFromDate = new Date(fr.validFrom);
        var serverValidToDate = new Date(fr.validTo);
        var validToDate = new Date(Date.UTC(serverValidToDate.getUTCFullYear(), serverValidToDate.getUTCMonth(), serverValidToDate.getUTCDate(), 23, 59, 59));
        return [validFromDate, validToDate];
    };
    FcFrManager.prototype.getFRList = function () {
        return this.frListItemSelector(this.stateManager.getFrList());
    };
    FcFrManager.prototype.getActiveFCId = function () {
        return this.stateManager.getActiveFcId();
    };
    FcFrManager.prototype.getActiveFRId = function () {
        return this.stateManager.getActiveFrId();
    };
    FcFrManager.prototype.onFcChange = function (newId) {
        this._onFcChange(newId, undefined, this.createNewContext("on-fc-change"));
    };
    FcFrManager.prototype._onFcChange = function (newId, mruFrID, context) {
        var oldFcId = this.getActiveFCId();
        this.fullApi.fcCharts.fetchPredictionStatusForFC(newId);
        this.context.forecastServices.mruInfoProvider.setMRU_ID("msdyn_forecastconfiguration", newId);
        this.updateActiveFcIdInState({ newId: newId });
        this.selectInitFrFromList(mruFrID, context);
        this.logFcDetails(newId, context);
        this.fullApi.partRecordGrid._onFcChange(newId, oldFcId);
        this.fullApi.fcCharts._onFcChange(newId, oldFcId);
    };
    FcFrManager.prototype.logFcDetails = function (newId, context) {
        var fc = this.getActiveFC();
        var telemInfo = this.getForecastConfigTelemetryInfo(fc);
        this.logUsage("FC selector", "", __assign(__assign({ newId: newId }, context), telemInfo), "Change", "FcFrManager.onFcChange", constants_1.FCFR_FEATURE_NAME);
    };
    FcFrManager.prototype.getForecastConfigTelemetryInfo = function (fc) {
        var IsPredictiveColumnVisible = this.checkIfPredictiveColumnIsVisible(fc);
        var NumberOfRollupColumns = fc.gridMetadata.columnDefinitions.filter(function (c) { return c.forecastColumnType === forecastPageTypes_1.ForecastColumnType.Rollup; }).length;
        var NumberOfCalculatedColumns = fc.gridMetadata.columnDefinitions.filter(function (c) { return c.forecastColumnType === forecastPageTypes_1.ForecastColumnType.Calculated; }).length;
        var NumberOfHierarchySecondaryColumns = fc.gridMetadata.columnDefinitions.filter(function (c) { return c.forecastColumnType === forecastPageTypes_1.ForecastColumnType.HierarchySecondary; }).length;
        var NumberOfSimpleColumns = fc.gridMetadata.columnDefinitions.filter(function (c) { return c.forecastColumnType === forecastPageTypes_1.ForecastColumnType.Simple; }).length;
        var NumberOfEditableColumns = fc.gridMetadata.columnDefinitions.filter(function (c) { return c.isEditable == true; }).length;
        var NumberOfShowProgressColumns = fc.gridMetadata.columnDefinitions.filter(function (c) { return c.showProgressComparedToQuota == true; }).length;
        return {
            IsPredictiveColumnVisible: IsPredictiveColumnVisible,
            NumberOfCalculatedColumns: NumberOfCalculatedColumns,
            NumberOfEditableColumns: NumberOfEditableColumns,
            NumberOfHierarchySecondaryColumns: NumberOfHierarchySecondaryColumns,
            NumberOfRollupColumns: NumberOfRollupColumns,
            NumberOfShowProgressColumns: NumberOfShowProgressColumns,
            NumberOfSimpleColumns: NumberOfSimpleColumns,
            HierarchyRelationship: fc.hierarchyRelationship,
            StateCode: fc.stateCode
        };
    };
    FcFrManager.prototype.selectInitFrFromList = function (mruID, context) {
        var _this = this;
        var frList = this.stateManager.getFrList();
        if (frList.length > 0) {
            var currDate_1 = new Date();
            var index = frList.findIndex(function (fr) {
                var _a = _this.getFRDatesFromFR(fr), validFromDate = _a[0], validToDate = _a[1];
                if ((validFromDate <= currDate_1) && (validToDate >= currDate_1))
                    return true;
            });
            if (index == -1)
                index = 0;
            var mruFR = mruID && frList.find(function (f) { return f.id === mruID; });
            var toChangeFRID = (mruFR && mruFR.id) || frList[index].id;
            this.onFrChange(toChangeFRID, context);
        }
    };
    FcFrManager.prototype.updateActiveFcIdInState = function (_a) {
        var newId = _a.newId;
        this.stateManager.updateActiveFcId(newId);
    };
    FcFrManager.prototype.updateActiveFrIdInState = function (_a) {
        var newId = _a.newId;
        this.stateManager.updateActiveFrId(newId);
    };
    FcFrManager.prototype.onFrChange = function (newId, context) {
        context = context || this.createNewContext("on-fr-change");
        this.logUsage("FR selector", "", __assign({ newId: newId }, context), "Change", "FcFrManager.onFrChange", constants_1.FCFR_FEATURE_NAME);
        var oldFrId = this.getActiveFRId();
        this.context.forecastServices.mruInfoProvider.setMRU_ID("msdyn_forecastrecurrence", newId);
        this._onFrChange({ newId: newId, oldFrId: oldFrId });
        this.fullApi.nearRealTime._onFrChange({ newId: newId, oldFrId: oldFrId, context: context });
        this.fullApi.snapshots._onFrChange({ newId: newId, oldFrId: oldFrId, context: context });
        this.fullApi.fiGrid._onFrChange({ newId: newId, oldFrId: oldFrId, context: context });
        this.fullApi.partRecordViewer._onFrChange({ newId: newId, oldFrId: oldFrId });
        this.fullApi.partRecordGrid._onFrChange({ newId: newId, oldFrId: oldFrId });
        this.fullApi.fcCharts._onFrChange({ newId: newId, oldFrId: oldFrId });
    };
    FcFrManager.prototype.getActiveFC = function () {
        return this.stateManager.getActiveFc();
    };
    FcFrManager.prototype.selectInitialFcFromList = function (_a) {
        var fcs = _a.fcs, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var mruFCID, mruFC, toChangeFCID, mruFRID;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.context.forecastServices.mruInfoProvider.getMRU_ID("msdyn_forecastconfiguration")];
                    case 1:
                        mruFCID = _b.sent();
                        mruFC = mruFCID && fcs.find(function (f) { return f.id === mruFCID; });
                        toChangeFCID = mruFC ? mruFCID : fcs[0].id;
                        return [4, this.context.forecastServices.mruInfoProvider.getMRU_ID("msdyn_forecastrecurrence")];
                    case 2:
                        mruFRID = _b.sent();
                        this._onFcChange(toChangeFCID, mruFRID, context);
                        return [2];
                }
            });
        });
    };
    FcFrManager.prototype.storeFcListInState = function (_a) {
        var fcs = _a.fcs;
        this.stateManager.updateFcList(fcs);
    };
    FcFrManager.prototype.getActiveFR = function () {
        var fc = this.getActiveFC();
        if (!fc)
            return generateEmptyFR();
        var frId = this.getActiveFRId();
        var fr = fc.recurrences.find(function (frr) { return frr.id == frId; });
        if (!fr)
            return generateEmptyFR();
        return fr;
    };
    FcFrManager.prototype._fetchForecastConfigs = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var fcs, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.stateManager.all.global.setIsFullPageLoading(true);
                        return [4, this.context.forecastServices.forecastDataAccess.fetchForecastConfigurationWithRecurrences()];
                    case 1:
                        fcs = _a.sent();
                        this.stateManager.all.global.setIsFullPageLoading(false);
                        this.logInfo("FcFrManager", "fcfr fetch complete", __assign({}, context), "fetch_end_success", "FcFrManager._fetchForecastConfigs");
                        if (fcs.length > 0) {
                            this.validateRetrievedFCs(fcs);
                            this.storeFcListInState({ fcs: fcs });
                            this.selectInitialFcFromList({ fcs: fcs, context: context });
                        }
                        else {
                            this.fcFetchCompleteAndNoneFound = true;
                        }
                        return [3, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.context.errorHandler.handleError("Error while loading forecast configurations", 1, e_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    FcFrManager.prototype._onFrChange = function (args) {
        this.updateActiveFrIdInState(args);
    };
    FcFrManager.prototype.validateRetrievedFCs = function (fcs) {
        var _this = this;
        fcs.map(function (fc) {
            _this.validateFCAndLogWarnings(fc);
        });
    };
    FcFrManager.prototype.validateFCAndLogWarnings = function (fc) {
        if (!fc.forecastCategoryAttribute)
            this.logVarMissingWarning("forecastCategoryAttribute", fc.id);
        if (!fc.hierarchyRelationship || !fc.hierarchyRelationship.Relationship || !fc.hierarchyRelationship.Relationship.RelatedFrom)
            this.logVarMissingWarning("hierarchyRelationship", fc.id);
    };
    FcFrManager.prototype.logVarMissingWarning = function (varName, id) {
        this.logWarning("ForecastConfigFetcher", "Missing - " + varName + " from fc with ID " + id);
    };
    return FcFrManager;
}(baseUiApi_1.BaseUiApi));
exports.FcFrManager = FcFrManager;
function generateEmptyFR() {
    return {
        id: "",
        name: "",
        lastRecalculatedDateTime: "",
        lastRecalculatedStatus: 0,
        rootForecastInstanceId: "",
        validFrom: "",
        validTo: ""
    };
}
exports.generateEmptyFR = generateEmptyFR;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/fiColumnsSelector.ts":
/*!**************************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/fiColumnsSelector.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
var fiGridCommon_1 = __webpack_require__(/*! ./fiGridCommon */ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var FiColumnsSelector = (function (_super) {
    __extends(FiColumnsSelector, _super);
    function FiColumnsSelector(context, fullApi) {
        return _super.call(this, context, fullApi) || this;
    }
    FiColumnsSelector.prototype.getFiColumns = function () {
        var _this = this;
        var fc = this.fullApi.fcfrManager.getActiveFC();
        if (!fc)
            return [];
        if (this.fullApi.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.FIGrid) {
            return this.getVisibleColumnDefinitions(fc).map(function (c) { return _this.getFiGridColumnFromFCColumnDefinition(c); });
        }
        else {
            return this.getHierarchyPrimaryColumnDefinitions(fc).map(function (c) { return _this.getFiGridColumnFromFCColumnDefinition(c); });
        }
    };
    FiColumnsSelector.prototype.getFiGridColumnFromFCColumnDefinition = function (c) {
        var fiGridColumn = {};
        fiGridColumn.id = c.id;
        fiGridColumn.headerText = c.localizedHeaderTitle;
        fiGridColumn.columnType = this.convertToGridColumnType(c);
        if (c.forecastColumnType == __1.ForecastColumnType.Predictive) {
            this.updateGridColumnsForPredictiveColumnType(fiGridColumn);
        }
        else {
            fiGridColumn.iconProps = {
                iconAriaLabel: c.columnDescription,
                iconName: "Info"
            };
        }
        fiGridColumn.hasShowOpportunityContextMenu = c.forecastColumnType == __1.ForecastColumnType.Rollup || c.forecastColumnType == __1.ForecastColumnType.Predictive;
        return fiGridColumn;
    };
    FiColumnsSelector.prototype.updateGridColumnsForPredictiveColumnType = function (fiGridColumn) {
        var predictionStatus = this.context.stateManager.fcCharts.getPredictionStatusForFC();
        var iconProps = {};
        if (predictionStatus && predictionStatus.PredictionOn) {
            var formattedPredictionOnDate = this.getDateFormattedValue(new Date(predictionStatus.PredictionOn));
            if (formattedPredictionOnDate) {
                iconProps.iconName = 'Info';
                iconProps.iconAriaLabel = this.context.forecastServices.stringsProvider.getLocalizedString(sharedEnums_1.PREDICTION_STATE_LAST_PREDICTED_MESSAGE) + " " + formattedPredictionOnDate;
            }
        }
        fiGridColumn.iconProps = iconProps;
    };
    FiColumnsSelector.prototype.convertToGridColumnType = function (col) {
        if (col.forecastColumnType == __1.ForecastColumnType.HierarchyPrimary) {
            return __1.FiGridColumnType.Hierarchial;
        }
        if (col.isEditable) {
            return __1.FiGridColumnType.Editable;
        }
        return __1.FiGridColumnType.Readonly;
    };
    return FiColumnsSelector;
}(fiGridCommon_1.FiGridCommon));
exports.FiColumnsSelector = FiColumnsSelector;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/fiFetcher.ts":
/*!******************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/fiFetcher.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
var fiGridCommon_1 = __webpack_require__(/*! ./fiGridCommon */ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts");
var FiFetcher = (function (_super) {
    __extends(FiFetcher, _super);
    function FiFetcher(context, fullApi) {
        return _super.call(this, context, fullApi) || this;
    }
    FiFetcher.prototype.fetchRootFI = function (_a) {
        var _this = this;
        var newId = _a.newId, context = _a.context;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var pageInfos = this.createPageInfoDict("", 1);
        this.logInfo("FiFetch - root", "started", { newId: newId });
        this.stateManager.setIsFiGridLoading(true);
        this.stateManager.resetPageInfoDict();
        var snapId = this.getSnapshotIdForFiRequest();
        this.stateManager.setFiFetchErrorMessage(undefined);
        this.fullApi.global.clearMesssageBarNotificationObject();
        this.context.forecastServices.forecastDataAccess.fetchForecastInstances(newId, fcId, [""], pageInfos, snapId).then(function (fiResponse) {
            if (_this.isCurrentFR(newId) && _this.isCurrentSnapshot(snapId)) {
                _this.logFiRootSuccess(context, fcId);
                _this.fullApi.fiGrid.fiHierarchy.updateRootFiInState({ frId: newId, fiResponse: fiResponse });
                _this.fullApi.fiGrid.fiHierarchy.expandRootFiNode({ fiResponse: fiResponse, context: context });
                _this.fullApi.fiGrid.updateForecastRecurrence({ frId: newId, fiResponse: fiResponse });
            }
            _this.stateManager.setIsFiGridLoading(false);
            _this.fullApi.fiGrid.onPivotChange(context);
        }).catch(function (e) {
            _this.logError("FiFetcher.fetchRootFi", e, '');
            _this.stateManager.setFiFetchErrorMessage((e && e.message) || "Error");
            _this.addMessageBarNotification("error", "Error while fetching FIs");
            _this.stateManager.setIsFiGridLoading(false);
            _this.fullApi.fiGrid.onPivotChange(context);
        });
    };
    FiFetcher.prototype.logFiRootSuccess = function (context, fcId) {
        this.logInfo("FiFetch - root", "complete", __assign(__assign({}, context), { fcId: fcId }), "fetchRootFi-success");
    };
    FiFetcher.prototype.fetchChildRows = function (_a) {
        var rowId = _a.rowId, context = _a.context;
        var pageNo = 1;
        this.fetchChildFiForParentAndPageNo(rowId, pageNo, context);
    };
    FiFetcher.prototype.fetchNextPageForChildRows = function (_a) {
        var rowId = _a.rowId, pageNo = _a.pageNo, context = _a.context;
        this.fetchChildFiForParentAndPageNo(rowId, pageNo, context);
    };
    FiFetcher.prototype.fetchChildFiForParentAndPageNo = function (rowId, pageNo, context) {
        var _this = this;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        var pageInfos = this.createPageInfoDict(rowId, pageNo);
        this.logInfo("FiFetch", "started", __assign({ rowId: rowId, pageNo: pageNo }, context));
        var snapId = this.getSnapshotIdForFiRequest();
        this.stateManager.setFiFetchErrorMessage(undefined);
        this.context.forecastServices.forecastDataAccess.fetchForecastInstances(frId, fcId, [rowId], pageInfos, snapId).then(function (fiResponse) {
            _this.logInfo("FiFetch", "complete", __assign(__assign({}, context), { fcId: fcId }), "fiChildFetch-success");
            _this.logDebug("FiFetch", "respones value", { fiResponse: fiResponse });
            if (_this.isCurrentFR(frId)) {
                _this.fullApi.fiGrid.fiHierarchy.updateChildFiRecordsInState({ frId: frId, fiResponse: fiResponse });
                _this.fullApi.fiGrid.fiHierarchy.markChildRecordsFetchComplete({ rowId: rowId });
                _this.fullApi.fiGrid.updateFIPagingInfoInState({ frId: frId, fiResponse: fiResponse, rowId: rowId, pageNo: pageNo });
                _this.fullApi.fiGrid.updateForecastRecurrence({ frId: frId, fiResponse: fiResponse });
                _this.fullApi.fiGrid.fiHierarchy.expandPreviouslyExpandedRows({ fiResponse: fiResponse, context: context });
            }
        }).catch(function (e) {
            _this.stateManager.setFiFetchErrorMessage((e && e.message) || "Error");
            _this.addMessageBarNotification("error", "Error while fetching FIs");
            _this.logError("FiFetcher.fetchChildRows", e, '');
        });
    };
    FiFetcher.prototype.createPageInfoDict = function (rowId, pageNo) {
        var _a;
        return _a = {},
            _a[rowId] = {
                pageNo: pageNo,
                pageSize: __1.PAGE_SIZE,
                sortByAttribute: "HierarchyEntityRecord.RecordId",
                sortOrderByAscending: true
            },
            _a;
    };
    FiFetcher.prototype.getSnapshotIdForFiRequest = function () {
        if (!this.fullApi.fiSnapshot.isSnapshotFiGridPageActive())
            return __1.EMPTY_GUID;
        return this.fullApi.fiSnapshot.getActiveSnapshotInfo().id;
    };
    return FiFetcher;
}(fiGridCommon_1.FiGridCommon));
exports.FiFetcher = FiFetcher;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/fiGridApi.ts":
/*!******************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/fiGridApi.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var fiFetcher_1 = __webpack_require__(/*! ./fiFetcher */ "./src/ForecastPageUiApi/fiGridApi/fiFetcher.ts");
var manualAdjustmentManager_1 = __webpack_require__(/*! ./manualAdjustmentManager */ "./src/ForecastPageUiApi/fiGridApi/manualAdjustmentManager.ts");
var fiGridCommon_1 = __webpack_require__(/*! ./fiGridCommon */ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts");
var fiRowsSelector_1 = __webpack_require__(/*! ./fiRowsSelector */ "./src/ForecastPageUiApi/fiGridApi/fiRowsSelector.ts");
var hierarchyManagement_1 = __webpack_require__(/*! ./hierarchyManagement */ "./src/ForecastPageUiApi/fiGridApi/hierarchyManagement.ts");
var fiColumnsSelector_1 = __webpack_require__(/*! ./fiColumnsSelector */ "./src/ForecastPageUiApi/fiGridApi/fiColumnsSelector.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/ForecastPageUiApi/fiGridApi/types.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var FiGridApiImpl = (function (_super) {
    __extends(FiGridApiImpl, _super);
    function FiGridApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.fiRowsSelector = new fiRowsSelector_1.FiRowsSelector(context, fullApi);
        _this.fiColumnsSelector = new fiColumnsSelector_1.FiColumnsSelector(context, fullApi);
        _this.fiHierarchy = new hierarchyManagement_1.HierarchyManagementApi(context, fullApi);
        _this.manualAdjustment = new manualAdjustmentManager_1.ManualAdjustmentManager(context, fullApi);
        _this.fiDataFetcher = new fiFetcher_1.FiFetcher(context, fullApi);
        return _this;
    }
    FiGridApiImpl.prototype.getFiRows = function () {
        return this.fiRowsSelector.getFiRows();
    };
    FiGridApiImpl.prototype.isGridLoading = function () {
        return this.stateManager.getIsFiGridLoading();
    };
    FiGridApiImpl.prototype.getFiColumns = function () {
        return this.fiColumnsSelector.getFiColumns();
    };
    FiGridApiImpl.prototype.getSelectedCell = function () {
        return this.stateManager.getSelectedCell();
    };
    FiGridApiImpl.prototype.onExpandClick = function (rowId) {
        var isAlreadyExpanded = this.isFiExpanded(rowId);
        var context = this.createNewContext("fi-grid-hierarchy-expand");
        this.logUsage("Hierarchy expand icon", "", __assign({ rowId: rowId, isAlreadyExpanded: isAlreadyExpanded }, context), "Click", "FiGridApiImpl.onExpandClick", constants_1.FIGRID_ADJUST_FEATURE_NAME);
        if (isAlreadyExpanded) {
            this.fiHierarchy.collapseFiInState({ rowId: rowId });
        }
        else {
            if (this.stateManager.fiChildrenAlreadyFetchedForParent(rowId)) {
                this.fiHierarchy.expandFiInState({ rowId: rowId });
            }
            else {
                this.fiHierarchy.expandUnfetchedRow({ rowId: rowId, context: context });
            }
        }
    };
    FiGridApiImpl.prototype.onLazyLoadTrigger = function (parentId, pageNo) {
        var context = this.createNewContext("fi-grid-lazy-load");
        this.logUsage("Lazy loader", "", __assign({ parentId: parentId, pageNo: pageNo }, context), "Click", "FiGridApiImpl.onLazyLoadTrigger", constants_1.FIGRID_ADJUST_FEATURE_NAME);
        this.fiDataFetcher.fetchNextPageForChildRows({ rowId: parentId, pageNo: pageNo, context: context });
    };
    FiGridApiImpl.prototype.onEdit = function (rowId, colId, newValue) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.manualAdjustment.triggerManualAdjustRequest({ rowId: rowId, colId: colId, newValue: newValue, resolve: resolve, reject: reject });
        });
    };
    FiGridApiImpl.prototype.onEditIconButtonClick = function (buttonId, rowId, colId) {
        if (buttonId == 'onEdit') {
            this.fullApi.editWithHistory.onEditClick(rowId, colId);
        }
        else if (buttonId == 'onHistory') {
            this.fullApi.editWithHistory.onHistoryClick(rowId, colId);
        }
    };
    FiGridApiImpl.prototype.onCellSelect = function (rowId, colId, context) {
        if (!this.isCellValidForSelect(colId))
            return;
        this.fullApi.fcCharts.SetIsWaterFallPanelOpen(false);
        this.stateManager.setSelectedCell({ rowId: rowId, colId: colId });
        this.stateManager.setFocusedCell({ rowId: rowId, colId: colId });
        if (colId == "") {
            this.fullApi.partRecordViewer._onCellSelect(rowId, colId, context);
        }
        else {
            var colInfo = this.getColumnInfoFromId(colId);
            if (this.fullApi.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.FIGrid) {
                if (colInfo != undefined && colInfo.forecastColumnType != forecastPageTypes_1.ForecastColumnType.Predictive) {
                    this.fullApi.partRecordViewer._onCellSelect(rowId, colId, context);
                }
                else {
                    this.fullApi.fcCharts._onPredictiveCellSelect(this.fullApi.fcfrManager.getActiveFCId(), this.fullApi.fcfrManager.getActiveFRId(), rowId, context);
                }
            }
            else if (this.fullApi.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.DealFlow) {
                this.fullApi.snapshots._onCellSelect(rowId, context);
                this.fullApi.partRecordViewer.onCloseClickForDealFlowViewer();
            }
            else if (this.fullApi.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.ForecastCharts) {
                this.fullApi.fcCharts._onCellSelect(this.fullApi.fcfrManager.getActiveFCId(), this.fullApi.fcfrManager.getActiveFRId(), rowId, context);
            }
        }
    };
    FiGridApiImpl.prototype.onCellFocus = function (rowId, colId) {
        this.logUsage("Grid cell", "", { rowId: rowId, colId: colId }, "Focus", "FiGridApiImpl.onCellFocus", constants_1.FIGRID_ADJUST_FEATURE_NAME);
        if (this.isCellValidForSelect(colId))
            this.stateManager.setFocusedCell({ rowId: rowId, colId: colId });
    };
    FiGridApiImpl.prototype.isCellValidForSelect = function (colId) {
        var colInfo = this.getColumnInfoFromId(colId);
        if (!colInfo)
            return false;
        return colInfo.forecastColumnType === forecastPageTypes_1.ForecastColumnType.Rollup || colInfo.forecastColumnType === forecastPageTypes_1.ForecastColumnType.HierarchyPrimary || colInfo.forecastColumnType === forecastPageTypes_1.ForecastColumnType.Predictive;
    };
    FiGridApiImpl.prototype.onShowOpportunities = function (rowId, colId) {
        var isAgg = rowId.endsWith("_agg");
        var rowType = isAgg ? "" + sharedEnums_1.ForecastInstanceColumnGroupType.Aggregated : "" + sharedEnums_1.ForecastInstanceColumnGroupType.RolledUp;
        var fc = this.context.stateManager.fcFr.getActiveFc();
        this.context.forecastServices.forecastDialogsManager.ShowOpportunities(this.normalizeID(rowId), colId, fc.rollupEntity, rowType);
    };
    FiGridApiImpl.prototype.onRefresh = function () {
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        this.fullApi.fcfrManager.onFrChange(frId, this.createNewContext("fi-grid-refresh"));
        this.context.forecastServices.nrtToastNotificationsManager.clearNotifications();
    };
    FiGridApiImpl.prototype.onForecastRecurrenceUpdate = function (fr) {
        this.context.stateManager.fcFr.updateFr(fr);
    };
    FiGridApiImpl.prototype.getFiGridError = function () {
        return this.stateManager.getFiFetchErrorMessage();
    };
    FiGridApiImpl.prototype.updateForecastRecurrence = function (_a) {
        var fiResponse = _a.fiResponse, frId = _a.frId;
        this.context.stateManager.fcFr.updateFr(fiResponse.forecastRecurrence);
    };
    FiGridApiImpl.prototype.updateFIPagingInfoInState = function (_a) {
        var fiResponse = _a.fiResponse, frId = _a.frId, rowId = _a.rowId, pageNo = _a.pageNo;
        this.stateManager.updateFIPageInfo(rowId, pageNo, fiResponse.hasMoreChildren);
    };
    FiGridApiImpl.prototype.clearFiListForFr = function (_a) {
        var newId = _a.newId;
        this.stateManager.clearFiListForFR(newId);
    };
    FiGridApiImpl.prototype._reloadFiGrid = function (args) {
        this.clearFiListForFr(args);
        this.fiDataFetcher.fetchRootFI(args);
        this.fiHierarchy.resetChildRecordsFetchStatusDict();
    };
    FiGridApiImpl.prototype._onFrChange = function (args) {
        if (args && args.newId !== args.oldFrId) {
            this.stateManager.setSelectedCell(types_1.NULL_CELLINFO);
        }
        this._reloadFiGrid(args);
    };
    return FiGridApiImpl;
}(fiGridCommon_1.FiGridCommon));
exports.FiGridApiImpl = FiGridApiImpl;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts":
/*!*********************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/ForecastPageUiApi/fiGridApi/types.ts");
var FiGridCommon = (function (_super) {
    __extends(FiGridCommon, _super);
    function FiGridCommon(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.fiGrid;
        return _this;
    }
    FiGridCommon.prototype.getIsExpandedDict = function () {
        return this.stateManager.getState().fiGrid.expandedRows;
    };
    FiGridCommon.prototype.isFiExpanded = function (rowId) {
        return this.getIsExpandedDict()[rowId];
    };
    FiGridCommon.prototype.getCurrentFIListState = function () {
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        var fiListState = this.stateManager.getState().fiGrid.fiListByFr[frId];
        return fiListState;
    };
    FiGridCommon.prototype.getVisibleColumnDefinitions = function (fc) {
        return fc.gridMetadata.columnDefinitions
            .filter(function (c) { return c.isVisible; });
    };
    FiGridCommon.prototype.getHierarchyPrimaryColumnDefinitions = function (fc) {
        return fc.gridMetadata.columnDefinitions
            .filter(function (c) { return c.forecastColumnType == forecastPageTypes_1.ForecastColumnType.HierarchyPrimary; });
    };
    FiGridCommon.prototype.onPivotChange = function (context) {
        if (this.fullApi.global.getForecastPageMode() != forecastPageTypes_1.ForecastPageMode.FIGrid) {
            if (this.fullApi.global.getForecastPageMode() === forecastPageTypes_1.ForecastPageMode.DealFlow) {
                if (!this.fullApi.snapshots.isDealFlowChartVisible()) {
                    this.fullApi.snapshots.initializeDataFetchStatus();
                    this.fullApi.snapshots.fetchSnapshotListforFR(context);
                }
                else if (this.fullApi.snapshots.getActiveForecastInstanctId() == this.stateManager.getSelectedCell().rowId &&
                    this.stateManager.getSelectedCell().rowId != types_1.NULL_CELLINFO.rowId) {
                    return;
                }
            }
            this.onPivotChangeRetainSelectedCell(context);
        }
    };
    FiGridCommon.prototype.onPivotChangeRetainSelectedCell = function (context) {
        var selectedCell = this.stateManager.getSelectedCell();
        if (selectedCell.rowId == types_1.NULL_CELLINFO.rowId
            && selectedCell.colId == types_1.NULL_CELLINFO.colId) {
            var rowId = "";
            var colId = "";
            if (this.fullApi.fiGrid.getFiRows().length != 0 && this.fullApi.fiGrid.getFiColumns().length != 0) {
                rowId = this.fullApi.fiGrid.getFiRows()[0].id;
                colId = this.fullApi.fiGrid.getFiColumns()[0].id;
            }
            this.fullApi.fiGrid.onCellSelect(rowId, colId, context);
        }
        else {
            this.fullApi.fiGrid.onCellSelect(selectedCell.rowId, this.fullApi.fiGrid.getFiColumns()[0].id, context);
        }
    };
    return FiGridCommon;
}(baseUiApi_1.BaseUiApi));
exports.FiGridCommon = FiGridCommon;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/fiRowsSelector.ts":
/*!***********************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/fiRowsSelector.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
var fiGridCommon_1 = __webpack_require__(/*! ./fiGridCommon */ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts");
var treeListFlattener_1 = __webpack_require__(/*! ./treeListFlattener */ "./src/ForecastPageUiApi/fiGridApi/treeListFlattener.ts");
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var FiRowsSelector = (function (_super) {
    __extends(FiRowsSelector, _super);
    function FiRowsSelector(context, fullApi) {
        return _super.call(this, context, fullApi) || this;
    }
    FiRowsSelector.prototype.getFiRows = function () {
        var _this = this;
        var fc = this.fullApi.fcfrManager.getActiveFC();
        if (!fc)
            return [];
        var fiListState = this.getCurrentFIListState();
        if (!fiListState)
            return [];
        var fiListOutp = [];
        var flattenedFiIdList = this.addChildRowsBelowExpandedRows();
        var quotaColumnId = this.stateManager.getQuotaColumnIdForCurrentFC();
        var isFiSnapshotModeEnabled = this.fullApi.fiSnapshot.isSnapshotFiGridPageActive();
        flattenedFiIdList.map(function (_a) {
            var id = _a.id, indentationLevel = _a.indentationLevel, hasMoreChildren = _a.hasMoreChildren, nextPageNo = _a.nextPageNo;
            var fi = fiListState.byId[id];
            var outP = _this.getFiGridRowFromFI(fi, fc, false, indentationLevel, quotaColumnId, isFiSnapshotModeEnabled);
            outP.shouldAddLazyLoadCue = hasMoreChildren;
            outP.lazyLoadNextPageNumber = nextPageNo;
            fiListOutp.push(outP);
            if (_this.shouldAddChildAggregateNode(fi)) {
                var outP_1 = _this.getFiGridRowFromFI(fi, fc, true, indentationLevel + 1, quotaColumnId, isFiSnapshotModeEnabled);
                fiListOutp.push(outP_1);
            }
        });
        this.checkAndAddHighlightedCells(fiListOutp);
        this.checkAndAddSelectedCell(fiListOutp);
        this.checkAndAddCalloutCell(fiListOutp);
        return fiListOutp;
    };
    FiRowsSelector.prototype.checkAndAddHighlightedCells = function (fiListOutp) {
        var highlightedCells = this.stateManager.getChangedCells();
        highlightedCells.map(function (cell) {
            var id = cell.isAgg ? cell.rowId + "_agg" : cell.rowId;
            var fi = fiListOutp.find(function (f) { return f.id == id; });
            if (fi) {
                var colData = fi.cellData && fi.cellData[cell.colId];
                if (colData)
                    colData.shouldStartHighlightAnimation = true;
            }
        });
    };
    FiRowsSelector.prototype.checkAndAddCalloutCell = function (fiListOutp) {
        var calloutCell = this.stateManager.getCalloutCell();
        if (calloutCell.rowId != "" && calloutCell.colId != "") {
            var row = fiListOutp.find(function (r) { return r.id == calloutCell.rowId; });
            if (row) {
                var cell = row.cellData[calloutCell.colId];
                if (cell) {
                    cell.showCallout = true;
                }
            }
        }
    };
    FiRowsSelector.prototype.checkAndAddSelectedCell = function (fiListOutp) {
        var selectedCell = this.stateManager.getFocusedCell();
        if (selectedCell.rowId != "" && selectedCell.colId != "") {
            var row = fiListOutp.find(function (r) { return r.id == selectedCell.rowId; });
            if (row) {
                var cell = row.cellData[selectedCell.colId];
                if (cell) {
                    cell.isCellSelected = true;
                }
                var fc = this.fullApi.fcfrManager.getActiveFC();
                var col = fc.gridMetadata.columnDefinitions.find(function (c) { return c.id == selectedCell.colId; });
                if (col) {
                    if (col.forecastColumnType === __1.ForecastColumnType.HierarchyPrimary) {
                        row.isRowSelected = true;
                    }
                }
            }
        }
    };
    FiRowsSelector.prototype.shouldAddChildAggregateNode = function (fi) {
        return fi.hasSelfAggregateNode && this.isFiExpanded(fi.id) && this.stateManager.fiChildrenAlreadyFetchedForParent(fi.id);
    };
    FiRowsSelector.prototype.getFiGridRowFromFI = function (fi, fc, isChildAggregateNode, indendationLevel, quotaColId, isFiSnapshotModeEnabled) {
        if (isChildAggregateNode === void 0) { isChildAggregateNode = false; }
        var isExpandedDict = this.getIsExpandedDict();
        var pickColumnDataFromAggregateColumnData = !fi.hasSelfAggregateNode || isChildAggregateNode;
        var shouldRenderShimmerBelow = isExpandedDict[fi.id] && this.stateManager.isChildFiDataBeingFetchForParent(fi.id);
        var outP = {
            id: fi.id + (pickColumnDataFromAggregateColumnData ? "_agg" : ""),
            parentId: isChildAggregateNode ? fi.id : fi.parentId,
            cellData: {},
            isExpanded: isExpandedDict[fi.id] ? true : false,
            showExpandIcon: !isChildAggregateNode && fi.hasSelfAggregateNode == true,
            indendationLevel: indendationLevel,
            shouldRenderShimmerBelow: shouldRenderShimmerBelow
        };
        var fiColumnData = pickColumnDataFromAggregateColumnData ? fi.AggregateColumnData : fi.RollUpColumnData;
        this.populateCellDataToFiGridRow(fc, outP, fi, fiColumnData, quotaColId, isFiSnapshotModeEnabled);
        return outP;
    };
    FiRowsSelector.prototype.populateCellDataToFiGridRow = function (fc, outP, fi, fiColumnData, quotaColId, isFiSnapshotModeEnabled) {
        var _this = this;
        this.getVisibleColumnDefinitions(fc).map(function (col) {
            switch (col.dataType) {
                case forecastPageTypes_1.ForecastColumnDataType.Old:
                    if (col.forecastColumnType == __1.ForecastColumnType.HierarchyPrimary || col.forecastColumnType == __1.ForecastColumnType.HierarchySecondary) {
                        outP.cellData[col.id] = {
                            displayValue: (fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].displayValue)
                        };
                    }
                    else {
                        outP.cellData[col.id] = {
                            displayValue: fiColumnData && fiColumnData[col.id] && _this.getBaseCurrencyFormattedValue(fiColumnData[col.id].rawValue),
                            rawValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].rawValue,
                        };
                    }
                    break;
                case forecastPageTypes_1.ForecastColumnDataType.Currency:
                    {
                        outP.cellData[col.id] = {
                            displayValue: fiColumnData && fiColumnData[col.id] && _this.getBaseCurrencyFormattedValue(fiColumnData[col.id].rawValue),
                            rawValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].rawValue,
                        };
                        break;
                    }
                case forecastPageTypes_1.ForecastColumnDataType.Decimal:
                    {
                        outP.cellData[col.id] = {
                            displayValue: fiColumnData && fiColumnData[col.id] && _this.getNumberFormattedValue(fiColumnData[col.id].rawValue, 2),
                            rawValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].rawValue,
                        };
                        break;
                    }
                case forecastPageTypes_1.ForecastColumnDataType.SingleLineOfText:
                    {
                        outP.cellData[col.id] = {
                            displayValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].displayValue,
                            rawValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].rawValue,
                        };
                        break;
                    }
            }
            switch (col.forecastColumnType) {
                case __1.ForecastColumnType.Predictive:
                case __1.ForecastColumnType.Calculated:
                case __1.ForecastColumnType.Rollup:
                    {
                        if (fiColumnData[col.id] && fiColumnData[col.id].isEditable && !isFiSnapshotModeEnabled) {
                            var loadingCell = _this.stateManager.getLoadingCell();
                            if (loadingCell.rowId != "" && loadingCell.colId != "" && outP.id == loadingCell.rowId && col.id == loadingCell.colId) {
                                outP.cellData[col.id].showEditSpinner = true;
                                outP.cellData[col.id].showEditButton = false;
                                if (_this.stateManager.getAdjustedValue() != "") {
                                    outP.cellData[col.id].displayValue = _this.getBaseCurrencyFormattedValue(Number(_this.stateManager.getAdjustedValue()));
                                    outP.cellData[col.id].rawValue = Number(_this.stateManager.getAdjustedValue());
                                }
                                else {
                                    var oldValue = fiColumnData[col.id].originalValue;
                                    outP.cellData[col.id].displayValue = _this.getBaseCurrencyFormattedValue(oldValue);
                                    outP.cellData[col.id].rawValue = oldValue;
                                }
                            }
                            else {
                                var errorCell = _this.stateManager.getCellWithError() != null ? _this.stateManager.getCellWithError().cellId : null;
                                if (errorCell && errorCell.rowId != "" && errorCell.colId != "" && outP.id == errorCell.rowId && col.id == errorCell.colId) {
                                    outP.cellData[col.id].showEditError = true;
                                    outP.cellData[col.id].editErrorMesssage = _this.stateManager.getCellWithError().errorMessage;
                                }
                                outP.cellData[col.id].showEditButton = true;
                                outP.cellData[col.id].showEditSpinner = false;
                            }
                        }
                        else if (fiColumnData[col.id].showHistory && !isFiSnapshotModeEnabled) {
                            outP.cellData[col.id].showHistoryButton = true;
                        }
                        if (fiColumnData && fiColumnData[col.id] && (fiColumnData[col.id].isManualAdjusted || fiColumnData[col.id].isRollupAdjusted)) {
                            if (fiColumnData[col.id].isManualAdjusted) {
                                outP.cellData[col.id].strikethroughHoverText = _this.context.forecastServices.stringsProvider.getLocalizedString(sharedEnums_1.MA_DIRECT_VALUE_HOVERTEXT);
                            }
                            else if (fiColumnData[col.id].isRollupAdjusted) {
                                outP.cellData[col.id].strikethroughHoverText = _this.context.forecastServices.stringsProvider.getLocalizedString(sharedEnums_1.MA_INDIRECT_VALUE_HOVERTEXT);
                            }
                            if (fiColumnData[col.id].originalValue != null) {
                                outP.cellData[col.id].strikethroughValue = _this.getBaseCurrencyFormattedValue(fiColumnData[col.id].originalValue);
                            }
                        }
                        break;
                    }
            }
            if (col.dataType == forecastPageTypes_1.ForecastColumnDataType.Currency && col.showProgressComparedToQuota && fiColumnData && fiColumnData[col.id]) {
                outP.cellData[col.id].progressBarValue = _this.calculateProgressBarValue(fi, fiColumnData, col.id, quotaColId);
            }
        });
    };
    FiRowsSelector.prototype.calculateProgressBarValue = function (fi, fiCellData, colId, quotaColId) {
        var quotaVal = fiCellData[quotaColId] && fiCellData[quotaColId].rawValue;
        var rawVal = fiCellData[colId] && fiCellData[colId].rawValue;
        if (!quotaVal || (rawVal === undefined) || !quotaColId)
            return undefined;
        return rawVal / quotaVal;
    };
    FiRowsSelector.prototype.addChildRowsBelowExpandedRows = function () {
        var fiListState = this.getCurrentFIListState();
        var isExpandDict = this.getIsExpandedDict();
        var childDict = fiListState.childrenDict;
        var pageInfoDict = this.stateManager.getFIPageInfoDict();
        var results = [];
        treeListFlattener_1.resetTraverseComplete();
        childDict[""] && childDict[""].map(function (fiId) {
            treeListFlattener_1.flattenListHelper(fiId, 0, results, isExpandDict, childDict, pageInfoDict);
        });
        return results;
    };
    return FiRowsSelector;
}(fiGridCommon_1.FiGridCommon));
exports.FiRowsSelector = FiRowsSelector;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/hierarchyManagement.ts":
/*!****************************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/hierarchyManagement.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fiGridCommon_1 = __webpack_require__(/*! ./fiGridCommon */ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts");
var HierarchyManagementApi = (function (_super) {
    __extends(HierarchyManagementApi, _super);
    function HierarchyManagementApi(context, fullApi) {
        return _super.call(this, context, fullApi) || this;
    }
    HierarchyManagementApi.prototype.resetChildRecordsFetchStatusDict = function () {
        this.stateManager.resetChildRecordsFetchStatusDict();
    };
    HierarchyManagementApi.prototype.expandPreviouslyExpandedRows = function (_a) {
        var _this = this;
        var fiResponse = _a.fiResponse, context = _a.context;
        var isExpandDict = this.getIsExpandedDict();
        fiResponse.forecastInstances.map(function (fi) {
            if (isExpandDict[fi.id]) {
                _this.expandUnfetchedRow({ rowId: fi.id, context: context });
            }
        });
    };
    HierarchyManagementApi.prototype.expandRootFiNode = function (_a) {
        var fiResponse = _a.fiResponse, context = _a.context;
        if (fiResponse.forecastInstances && fiResponse.forecastInstances.length > 0)
            this.expandUnfetchedRow({ rowId: fiResponse.forecastInstances[0].id, context: context });
    };
    HierarchyManagementApi.prototype.expandUnfetchedRow = function (args) {
        this.expandFiInState(args);
        this.fullApi.fiGrid.fiDataFetcher.fetchChildRows(args);
        this.markChildRecordsFetching(args);
    };
    HierarchyManagementApi.prototype.expandFiInState = function (_a) {
        var rowId = _a.rowId;
        this.stateManager.updateOnExpandDictToValue(rowId, true);
    };
    HierarchyManagementApi.prototype.updateChildFiRecordsInState = function (_a) {
        var fiResponse = _a.fiResponse, frId = _a.frId;
        this.stateManager.updateFIList(frId, fiResponse.forecastInstances, false);
    };
    HierarchyManagementApi.prototype.markChildRecordsFetching = function (_a) {
        var rowId = _a.rowId;
        this.stateManager.updateIsChildDataFetchingStatus(rowId, true);
    };
    HierarchyManagementApi.prototype.markChildRecordsFetchComplete = function (_a) {
        var rowId = _a.rowId;
        this.stateManager.updateIsChildDataFetchingStatus(rowId, false);
    };
    HierarchyManagementApi.prototype.collapseFiInState = function (_a) {
        var rowId = _a.rowId;
        this.stateManager.updateOnExpandDictToValue(rowId, false);
    };
    HierarchyManagementApi.prototype.updateRootFiInState = function (_a) {
        var fiResponse = _a.fiResponse, frId = _a.frId;
        this.stateManager.updateFIList(frId, fiResponse.forecastInstances.map(function (fi) {
            return __assign(__assign({}, fi), { parentId: "" });
        }), false);
    };
    return HierarchyManagementApi;
}(fiGridCommon_1.FiGridCommon));
exports.HierarchyManagementApi = HierarchyManagementApi;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/manualAdjustmentManager.ts":
/*!********************************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/manualAdjustmentManager.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
var fiGridCommon_1 = __webpack_require__(/*! ./fiGridCommon */ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts");
var ManualAdjustmentManager = (function (_super) {
    __extends(ManualAdjustmentManager, _super);
    function ManualAdjustmentManager(context, fullApi) {
        return _super.call(this, context, fullApi) || this;
    }
    ManualAdjustmentManager.prototype.triggerManualAdjustRequest = function (_a) {
        var _this = this;
        var rowId = _a.rowId, colId = _a.colId, newValue = _a.newValue, resolve = _a.resolve, reject = _a.reject;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        var manualAdjReq = {
            ForecastInstanceId: this.normalizeID(rowId),
            ForecastConfigurationColumnId: colId,
            Value: Number(newValue),
            ForecastConfigurationId: fcId,
            Notes: "",
            ColumnType: __1.ForecastColumnType.Rollup,
            UpdatedColumnAttribute: this.determineFiColumnType(rowId)
        };
        this.logInfo("ManAdjustRequest", "start");
        this.logDebug("ManAdjustRequest", "request value", { manualAdjReq: manualAdjReq });
        this.context.forecastServices.forecastDataAccess.ManuallyAdjustRow(manualAdjReq).then(function (newFiList) {
            _this.logInfo("ManAdjustRequest", "completed");
            _this.logDebug("ManAdjustRequest", "Response value", { newFiList: newFiList });
            _this.noteChangedCellsForHighlight({ frId: frId, newFiList: newFiList });
            _this.updateAdjustedFiData({ frId: frId, newFiList: newFiList });
            resolve();
        }).catch(function (error) {
            _this.logError("ManualAdjustment request failed", error, '');
            reject(error);
        });
    };
    ManualAdjustmentManager.prototype.noteChangedCellsForHighlight = function (_a) {
        var _this = this;
        var frId = _a.frId, newFiList = _a.newFiList;
        this.stateManager.recordChangedCells(frId, newFiList);
        setTimeout(function () {
            _this.logDebug("ManAdjustRequest", "Clear highlight cell animation", { newFiList: newFiList });
            _this.stateManager.clearChangedCells(newFiList);
        }, 6000);
    };
    ManualAdjustmentManager.prototype.updateAdjustedFiData = function (_a) {
        var frId = _a.frId, newFiList = _a.newFiList;
        this.stateManager.updateFIRollupData(frId, newFiList);
    };
    return ManualAdjustmentManager;
}(fiGridCommon_1.FiGridCommon));
exports.ManualAdjustmentManager = ManualAdjustmentManager;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/treeListFlattener.ts":
/*!**************************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/treeListFlattener.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTraversingComplete = false;
function resetTraverseComplete() {
    exports.isTraversingComplete = false;
}
exports.resetTraverseComplete = resetTraverseComplete;
function flattenListHelper(current, depth, results, isExpandedDict, childrenDict, pageInfoDict) {
    if (exports.isTraversingComplete)
        return;
    results.push({
        id: current,
        indentationLevel: depth,
        nextPageNo: -1,
        hasMoreChildren: false
    });
    if (isExpandedDict[current]) {
        childrenDict[current] && childrenDict[current].map(function (childId) {
            flattenListHelper(childId, depth + 1, results, isExpandedDict, childrenDict, pageInfoDict);
        });
        var pInfo = pageInfoDict[current];
        if (pInfo && pInfo.hasMoreChildren) {
            exports.isTraversingComplete = true;
            results[results.length - 1].hasMoreChildren = true;
            results[results.length - 1].nextPageNo = pInfo.pageNo + 1;
        }
    }
}
exports.flattenListHelper = flattenListHelper;


/***/ }),

/***/ "./src/ForecastPageUiApi/fiGridApi/types.ts":
/*!**************************************************!*\
  !*** ./src/ForecastPageUiApi/fiGridApi/types.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NULL_CELLINFO = {
    rowId: "",
    colId: ""
};


/***/ }),

/***/ "./src/ForecastPageUiApi/forecastPageUiApi.ts":
/*!****************************************************!*\
  !*** ./src/ForecastPageUiApi/forecastPageUiApi.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fcFrManager_1 = __webpack_require__(/*! ./fcFrManager/fcFrManager */ "./src/ForecastPageUiApi/fcFrManager/fcFrManager.ts");
var globalManager_1 = __webpack_require__(/*! ./globalManager/globalManager */ "./src/ForecastPageUiApi/globalManager/globalManager.ts");
var simpleStateManager_1 = __webpack_require__(/*! ../StateManager/simpleStateManager */ "./src/StateManager/simpleStateManager.ts");
var nearRealTimeApi_1 = __webpack_require__(/*! ./nearRealTimeApi/nearRealTimeApi */ "./src/ForecastPageUiApi/nearRealTimeApi/nearRealTimeApi.ts");
var ribbonApiImpl_1 = __webpack_require__(/*! ./ribbon/ribbonApiImpl */ "./src/ForecastPageUiApi/ribbon/ribbonApiImpl.ts");
var fiGridApi_1 = __webpack_require__(/*! ./fiGridApi/fiGridApi */ "./src/ForecastPageUiApi/fiGridApi/fiGridApi.ts");
var snapshotApiImpl_1 = __webpack_require__(/*! ./snapshots/snapshotApiImpl */ "./src/ForecastPageUiApi/snapshots/snapshotApiImpl.ts");
var partRecordViewerApiImpl_1 = __webpack_require__(/*! ./partRecordViewer/partRecordViewerApiImpl */ "./src/ForecastPageUiApi/partRecordViewer/partRecordViewerApiImpl.ts");
var kanbanApiImpl_1 = __webpack_require__(/*! ./kanban/kanbanApiImpl */ "./src/ForecastPageUiApi/kanban/kanbanApiImpl.ts");
var partRecordGridApiImpl_1 = __webpack_require__(/*! ./partRecordGrid/partRecordGridApiImpl */ "./src/ForecastPageUiApi/partRecordGrid/partRecordGridApiImpl.ts");
var CrmErrorDialogBasedHandler_1 = __webpack_require__(/*! ../Utility/ErrorHandling/CrmErrorDialogBasedHandler */ "./src/Utility/ErrorHandling/CrmErrorDialogBasedHandler.ts");
var SurveyHandler_1 = __webpack_require__(/*! ../Utility/Survey/SurveyHandler */ "./src/Utility/Survey/SurveyHandler.ts");
var editWithHistoryApi_1 = __webpack_require__(/*! ./editWithHistoryApi/editWithHistoryApi */ "./src/ForecastPageUiApi/editWithHistoryApi/editWithHistoryApi.ts");
var fcChartsApiImpl_1 = __webpack_require__(/*! ./fcCharts/fcChartsApiImpl */ "./src/ForecastPageUiApi/fcCharts/fcChartsApiImpl.ts");
var snapshotFiGridApiImpl_1 = __webpack_require__(/*! ./snapshots/snapshotFiGridApiImpl */ "./src/ForecastPageUiApi/snapshots/snapshotFiGridApiImpl.ts");
var ForecastPageUiApi = (function () {
    function ForecastPageUiApi(contextServices, onReRender, stateManager) {
        var stateManager2 = stateManager != undefined ? stateManager : new simpleStateManager_1.SimpleStateManager(onReRender);
        var context = {
            stateManager: stateManager2,
            forecastServices: contextServices,
            errorHandler: new CrmErrorDialogBasedHandler_1.CrmErrorDialogBasedHandler(contextServices.forecastDialogsManager),
            surveyHandler: new SurveyHandler_1.SurveyHandler(contextServices.logger)
        };
        this.global = new globalManager_1.GlobalStateManager(context, this);
        this.fcfrManager = new fcFrManager_1.FcFrManager(context, this);
        this.nearRealTime = new nearRealTimeApi_1.NearRealTimeApiImpl(context, this);
        this.mainRibbon = new ribbonApiImpl_1.RibbonApiImpl(context, this);
        this.fiGrid = new fiGridApi_1.FiGridApiImpl(context, this);
        this.snapshots = new snapshotApiImpl_1.SnapshotApiImpl(context, this);
        this.partRecordViewer = new partRecordViewerApiImpl_1.PartRecordViewerApiImpl(context, this);
        this.kanban = new kanbanApiImpl_1.KanbanApiImpl(context, this);
        this.partRecordGrid = new partRecordGridApiImpl_1.PartRecordGridApiImpl(context, this);
        this.editWithHistory = new editWithHistoryApi_1.EditWithHistoryApiImpl(context, this);
        this.fcCharts = new fcChartsApiImpl_1.FCChartsApiImpl(context, this);
        this.fiSnapshot = new snapshotFiGridApiImpl_1.SnapshotFiGridApiImpl(context, this);
        this.initLogging();
    }
    ForecastPageUiApi.prototype.initLogging = function () {
        if (window && window.Xrm || (window && window.STORYBOOK_ENV)) {
        }
    };
    return ForecastPageUiApi;
}());
exports.ForecastPageUiApi = ForecastPageUiApi;


/***/ }),

/***/ "./src/ForecastPageUiApi/globalManager/globalManager.ts":
/*!**************************************************************!*\
  !*** ./src/ForecastPageUiApi/globalManager/globalManager.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var forecastPageTypes_2 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var GlobalStateManager = (function (_super) {
    __extends(GlobalStateManager, _super);
    function GlobalStateManager(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.global;
        return _this;
    }
    GlobalStateManager.prototype.initializePage = function () {
        var context = this.createNewContext();
        this.logInfo("GlobalStateManager", "initializePage called", __assign({}, context), "initialize", "GlobalStateManager.initializePage");
        this.fullApi.fcfrManager._fetchForecastConfigs(context);
        this._fetchBaseCurrency();
        this._fetchIsInsightsLicenseAvailable();
        this._fetchIsInsightsPackageAvailable();
        this._fetchGeoFeatureState();
    };
    GlobalStateManager.prototype.invokeSurveyHandler = function (surveyApiType, surveyType, triggerSource) {
        switch (surveyApiType) {
            case forecastPageTypes_1.ForecastingSurveyApiRequestType.TriggerEvent:
                this.context.surveyHandler.callTriggerEvent(surveyType, triggerSource);
                break;
            case forecastPageTypes_1.ForecastingSurveyApiRequestType.TriggerEventAndValidateEligibility:
                this.context.surveyHandler.callTriggerAndValidateEligibility(surveyType, triggerSource);
                break;
            case forecastPageTypes_1.ForecastingSurveyApiRequestType.ValidateEligibility:
                this.context.surveyHandler.validateEligibility(surveyType, triggerSource);
                break;
        }
    };
    GlobalStateManager.prototype.shouldRenderNoFcsMessage = function () {
        return this.fullApi.fcfrManager.fcFetchCompleteAndNoneFound;
    };
    GlobalStateManager.prototype.shouldRenderGridWithFcFrSnapshotSelectors = function () {
        return !this.shouldRenderNoFcsMessage();
    };
    GlobalStateManager.prototype.getMessagebarNotificationObject = function () {
        return this.context.stateManager.nrt.getState().messageBarNotificationState.notificationObj;
    };
    GlobalStateManager.prototype.clearMesssageBarNotificationObject = function () {
        this.context.stateManager.nrt.setMessageBarNotification(null);
    };
    GlobalStateManager.prototype.addOnStateChangeListener = function (listener) {
        this.context.stateManager.addOnStateChangeListener(listener);
    };
    GlobalStateManager.prototype.isFullPageLoading = function () {
        return this.stateManager.getIsFullPageLoading();
    };
    GlobalStateManager.prototype.getLogger = function () {
        return this.context.forecastServices.logger;
    };
    GlobalStateManager.prototype.getForecastPageMode = function () {
        return this.stateManager.getForecastPageMode();
    };
    GlobalStateManager.prototype.getBaseCurrencySymbol = function () {
        return this.stateManager.getBaseCurrencySymbol();
    };
    GlobalStateManager.prototype.getBaseCurrencyFormattedValueWrapper = function (value) {
        return this.getBaseCurrencyFormattedValue(value);
    };
    GlobalStateManager.prototype.setForecastPageMode = function (arg0) {
        var context = this.createNewContext("pivot-click");
        this.logUsage("FiPage-Pivot", "", __assign({ arg0: arg0 }, context), "Click");
        if (this.getForecastPageMode() !== arg0 && this.getForecastPageMode() == forecastPageTypes_2.ForecastPageMode.DealFlow) {
            this.context.surveyHandler.validateEligibility(forecastPageTypes_1.ForecastingSurveyType.DealFlow, "DealFlowTab");
        }
        this.stateManager.setForecastPageMode(arg0);
        this.fullApi.fiGrid.onPivotChange(context);
    };
    GlobalStateManager.prototype.getInsightsFeaturesVisible = function () {
        return this.stateManager.getInsightsFeaturesVisibile();
    };
    GlobalStateManager.prototype.getSIPackageInstalled = function () {
        return this.stateManager.getIsSIPackageInstalled();
    };
    GlobalStateManager.prototype.getPredictiveForecastFeatureEnabled = function () {
        return this.stateManager.getPredictiveForecastFeatureEnabled();
    };
    GlobalStateManager.prototype.getManualForecastFeatureEnabled = function () {
        return this.stateManager.getManualForecastFeatureEnabled();
    };
    GlobalStateManager.prototype.getSnapshotFeatureEnabled = function () {
        return this.stateManager.getSnapshotFeatureEnabled();
    };
    GlobalStateManager.prototype.getIsRTLEnabled = function () {
        if (window.Xrm != undefined) {
            var userContext = window.Xrm.Utility.getGlobalContext().userSettings;
            return userContext.isRTL;
        }
        return false;
    };
    GlobalStateManager.prototype._fetchBaseCurrency = function () {
        return __awaiter(this, void 0, void 0, function () {
            var curSymbol;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.context.forecastServices.crmDataFormatter.getOrgBaseCurrencyIdSymbol()];
                    case 1:
                        curSymbol = _a.sent();
                        this.stateManager.updateBaseCurrencySymbol(curSymbol);
                        return [2];
                }
            });
        });
    };
    GlobalStateManager.prototype._fetchIsInsightsLicenseAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var siLicenseStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.context.forecastServices.forecastDataAccess.fetchSILicenseStatus()];
                    case 1:
                        siLicenseStatus = _a.sent();
                        this.context.stateManager.fcCharts.setSILicenseStatusForOrg(siLicenseStatus);
                        if (siLicenseStatus && siLicenseStatus.response && siLicenseStatus.response.toLowerCase() == "true") {
                            this.stateManager.setInsightsFeaturesVisibility(true);
                        }
                        else {
                            this.stateManager.setInsightsFeaturesVisibility(false);
                        }
                        return [2];
                }
            });
        });
    };
    GlobalStateManager.prototype._fetchIsInsightsPackageAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var siPackage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.context.forecastServices.forecastDataAccess.fetchSIPackageStatus()];
                    case 1:
                        siPackage = _a.sent();
                        this.stateManager.setIsSIPackageInstalled(siPackage);
                        return [2];
                }
            });
        });
    };
    GlobalStateManager.prototype._fetchGeoFeatureState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var featureState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.context.forecastServices.forecastDataAccess.fetchFeatureState()];
                    case 1:
                        featureState = _a.sent();
                        if (featureState) {
                            this.stateManager.setManualForecastFeatureEnabled(featureState.isManualForecastEnabled);
                            this.stateManager.setPredictiveForecastFeatureEnabled(featureState.isPredictiveEnabled);
                            this.stateManager.setSnapshotFeatureEnabled(featureState.isSnapshotEnabled);
                        }
                        return [2];
                }
            });
        });
    };
    GlobalStateManager.prototype.getForecastServices = function () {
        return this.context.forecastServices;
    };
    return GlobalStateManager;
}(baseUiApi_1.BaseUiApi));
exports.GlobalStateManager = GlobalStateManager;


/***/ }),

/***/ "./src/ForecastPageUiApi/kanban/kanbanApiImpl.ts":
/*!*******************************************************!*\
  !*** ./src/ForecastPageUiApi/kanban/kanbanApiImpl.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var kanbanWrapper_1 = __webpack_require__(/*! ./kanbanWrapper */ "./src/ForecastPageUiApi/kanban/kanbanWrapper.ts");
var fcFrStateManager_1 = __webpack_require__(/*! ../../StateManager/fcFrStateManager */ "./src/StateManager/fcFrStateManager.ts");
var KanbanApiImpl = (function (_super) {
    __extends(KanbanApiImpl, _super);
    function KanbanApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.memoProps = {};
        _this.stateManager = context.stateManager.partRecordViewer;
        _this.containerWrapper = new kanbanWrapper_1.KanbanWrapperContainer(__assign({ hostIdentifier: "Kanban" }, _this.context.forecastServices.hostContext));
        return _this;
    }
    KanbanApiImpl.prototype.getKanbanProps = function () {
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        if (this.memoProps[cell.rowId])
            return this.memoProps[cell.rowId];
        this.memoProps = {};
        var kanbanInfo = {
            OwnerId: this.getOwnerIdFromFI(cell.rowId),
            FiId: cell.rowId,
            PipelineRecordsFetchXmlResponse: this.stateManager.getFetchXmlResponse()
        };
        var fc = this.fullApi.fcfrManager.getActiveFC();
        var kanbanProps = this.containerWrapper.getKanbanProps(kanbanInfo, fc);
        this.memoProps[cell.rowId] = kanbanProps;
        kanbanProps.eventHandlerCallbacks = this.getEventHandlerCallbacks(fc);
        return kanbanProps;
    };
    KanbanApiImpl.prototype.getEventHandlerCallbacks = function (forecastConfigInfo) {
        var _this = this;
        return {
            onKanbanLaneUpdated: function (recordId, values, prevLaneId, curLaneId) {
                var updatedValues = new Map();
                updatedValues.set(forecastConfigInfo.forecastCategoryAttribute, Number(curLaneId));
                return updatedValues;
            },
            onDataRecordSaved: function (recordId, values, attributesSaved, curLaneId) {
                var attrHierarchy = fcFrStateManager_1.getActiveHierarchyLinkedAttributeNameFromFC(forecastConfigInfo);
                var hierarchyValId = values.get(attrHierarchy) && values.get(attrHierarchy).id;
                var changedValsMap = new Map();
                attributesSaved.forEach(function (val, key) {
                    changedValsMap.set(key, { peviousValue: val, newValue: values.get(key) });
                });
                _this.fullApi.partRecordViewer._onParticipatingRecordSaved(recordId, hierarchyValId, Number(curLaneId), changedValsMap, _this.createNewContext("kanban-record-edit"));
            }
        };
    };
    KanbanApiImpl.prototype.isKanbanLoading = function () {
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        if (!cell.rowId)
            return true;
        if (!this.isFiIdPresentInGrid(cell.rowId))
            return true;
        return !this.stateManager.getIsPartRecFetchXmlLoaded();
    };
    KanbanApiImpl.prototype.getComponentKey = function () {
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        return cell.rowId;
    };
    KanbanApiImpl.prototype._onFrChange = function (_a) {
        var newId = _a.newId;
    };
    KanbanApiImpl.prototype.getOwnerIdFromFI = function (fiId) {
        var fi = this.getFiFromFiId(fiId);
        if (!fi || !fi.HierarchyEntityData) {
            return "";
        }
        return fi.HierarchyEntityData.id;
    };
    return KanbanApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.KanbanApiImpl = KanbanApiImpl;


/***/ }),

/***/ "./src/ForecastPageUiApi/kanban/kanbanWrapper.ts":
/*!*******************************************************!*\
  !*** ./src/ForecastPageUiApi/kanban/kanbanWrapper.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fcFrStateManager_1 = __webpack_require__(/*! ../../StateManager/fcFrStateManager */ "./src/StateManager/fcFrStateManager.ts");
var KanbanConstants = (function () {
    function KanbanConstants() {
    }
    KanbanConstants.Heirarchy_Operator = '_heirarchyoperator_';
    KanbanConstants.Heirarchy_Node_Identifier = '_agg';
    KanbanConstants.colors = ["#118DFF", "#750985", "#C83D95", "#E66C37", "#009EB3", "#18A03C", "#3A4BC6", "#E04854", "#835DD0", "#BD8608", "#8CBD18"];
    return KanbanConstants;
}());
exports.KanbanConstants = KanbanConstants;
var KanbanWrapperContainer = (function () {
    function KanbanWrapperContainer(hostContext) {
        this.hostContext = hostContext;
    }
    KanbanWrapperContainer.prototype.getKanbanProps = function (kanbanBoardInfo, forecastConfigInfo) {
        var _this = this;
        if (!this.IsKanbanInfoValid(kanbanBoardInfo, forecastConfigInfo)) {
        }
        var ownerId = kanbanBoardInfo.OwnerId;
        var fiId = kanbanBoardInfo.FiId;
        var pipelineRecordsFetchXmlResponse = kanbanBoardInfo.PipelineRecordsFetchXmlResponse;
        var kanbanProps = {
            entityName: "",
            lanes: [],
            hostContext: this.hostContext
        };
        kanbanProps.entityName = pipelineRecordsFetchXmlResponse.EntityName;
        var laneSet = new Set();
        pipelineRecordsFetchXmlResponse.ForecastConfigurationColumns.forEach(function (item, index) {
            if (!_this.IsForecastConfigColumnInfoValid(item)) {
            }
            if (!laneSet.has(item.ColumnOptionSetValue)) {
                var fetchXmlUpdated = item.FetchXml.replace("_recordid_", ownerId);
                if (!fiId.endsWith(KanbanConstants.Heirarchy_Node_Identifier)) {
                    fetchXmlUpdated = fetchXmlUpdated.replace(KanbanConstants.Heirarchy_Operator, "eq-or-under");
                }
                else {
                    fetchXmlUpdated = fetchXmlUpdated.replace(KanbanConstants.Heirarchy_Operator, "eq");
                }
                var itemFieldsDict_1 = item.Fields;
                var laneFields_1 = [];
                var hierarchyLinkAttributeName = fcFrStateManager_1.getActiveHierarchyLinkedAttributeNameFromFC(forecastConfigInfo);
                laneFields_1.push({
                    attributeName: hierarchyLinkAttributeName,
                    isVisible: true
                });
                if (hierarchyLinkAttributeName !== "ownerid" && forecastConfigInfo.rollupEntity === "opportunity") {
                    laneFields_1.push({
                        attributeName: "ownerid",
                        isVisible: true
                    });
                }
                laneFields_1.push({
                    attributeName: forecastConfigInfo.forecastCategoryAttribute,
                    isVisible: false
                });
                Object.keys(itemFieldsDict_1).forEach(function (laneField) {
                    laneFields_1.push({
                        attributeName: laneField,
                        isVisible: itemFieldsDict_1[laneField]
                    });
                });
                kanbanProps.lanes.push({
                    laneId: item.ColumnOptionSetValue,
                    laneDisplayName: item.ColumnName,
                    fields: laneFields_1,
                    fetchXml: fetchXmlUpdated,
                    laneIdentifyingColor: KanbanConstants.colors[index % KanbanConstants.colors.length],
                    aggregateProps: {
                        showAggregatedValue: true,
                        type: "sum",
                        attribute: item.AggregatingAttribute
                    },
                    isDropDisabled: forecastConfigInfo.forecastCategoryAttribute === "msdyn_forecastcategory" && (item.ColumnOptionSetValue === "100000005" || item.ColumnOptionSetValue === "100000006"),
                    resultCountProps: {
                        showTotalRecordsCount: true
                    }
                });
                laneSet.add(item.ColumnOptionSetValue);
            }
            ;
        });
        return kanbanProps;
    };
    KanbanWrapperContainer.prototype.validateAllKanbanProps = function (kanbanBoardInfo, forecastConfigInfo) {
        var _this = this;
        var outP = true;
        var pipelineRecordsFetchXmlResponse = kanbanBoardInfo.PipelineRecordsFetchXmlResponse;
        pipelineRecordsFetchXmlResponse.ForecastConfigurationColumns.forEach(function (item, index) {
            outP = outP && _this.IsForecastConfigColumnInfoValid(item);
        });
        return this.IsKanbanInfoValid(kanbanBoardInfo, forecastConfigInfo) && outP;
    };
    KanbanWrapperContainer.prototype.getEventHandlerCallbacks = function (forecastConfigInfo) {
        return {
            onKanbanLaneUpdated: function (recordId, values, prevLaneId, curLaneId) {
                var updatedValues = new Map();
                updatedValues.set(forecastConfigInfo.forecastCategoryAttribute, Number(curLaneId));
                return updatedValues;
            },
            onDataRecordUpdated: function (recordId, values, curLaneId) {
                return values;
            },
            onDataRecordSaved: function (recordId, values, curLaneId) {
                return values;
            }
        };
    };
    KanbanWrapperContainer.prototype.IsKanbanInfoValid = function (kanbanBoardInfo, forecastConfigInfo) {
        if (!forecastConfigInfo || !forecastConfigInfo.forecastCategoryAttribute) {
            return false;
        }
        if (!kanbanBoardInfo || !kanbanBoardInfo.OwnerId || !kanbanBoardInfo.FiId) {
            return false;
        }
        var fetchXmlResponse = kanbanBoardInfo.PipelineRecordsFetchXmlResponse;
        if (!fetchXmlResponse || !fetchXmlResponse.EntityName || !fetchXmlResponse.ForecastConfigurationColumns || fetchXmlResponse.ForecastConfigurationColumns.length <= 0) {
            return false;
        }
        return true;
    };
    KanbanWrapperContainer.prototype.IsForecastConfigColumnInfoValid = function (columnInfo) {
        if (!columnInfo || !columnInfo.ColumnOptionSetValue || !columnInfo.AggregatingAttribute || !columnInfo.ColumnName || !columnInfo.FetchXml) {
            return false;
        }
        return true;
    };
    return KanbanWrapperContainer;
}());
exports.KanbanWrapperContainer = KanbanWrapperContainer;


/***/ }),

/***/ "./src/ForecastPageUiApi/nearRealTimeApi/nearRealTimeApi.ts":
/*!******************************************************************!*\
  !*** ./src/ForecastPageUiApi/nearRealTimeApi/nearRealTimeApi.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var NearRealTimeApiImpl = (function (_super) {
    __extends(NearRealTimeApiImpl, _super);
    function NearRealTimeApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.isGridPage = true;
        _this.wasRecomputeTriggeredByCurrentUser = false;
        _this.logContext = undefined;
        _this.context.forecastServices.forecastNavigationManager.listenToPageUnloadEvent(_this.onPageUnload.bind(_this));
        _this.stateManager = context.stateManager.nrt;
        return _this;
    }
    NearRealTimeApiImpl.prototype._onFrChange = function (args) {
        this.logContext = args.context;
        this.showPlainRibbon();
        this._InvokeRecomputeValidation(args);
        this._InvokeSignalRSubscribe(args);
    };
    NearRealTimeApiImpl.prototype._InvokeSignalRSubscribe = function (_a) {
        var newId = _a.newId, oldFrId = _a.oldFrId, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.context.forecastServices.recomputeNotificationsProvider.unsubscribeOldAndsubscribeNew(oldFrId, newId, this.onNotificationRecieved.bind(this))];
                    case 1:
                        _b.sent();
                        this.logInfo("NRT", "", __assign({}, context), "nrt-signalr-subscribe-success");
                        return [2];
                }
            });
        });
    };
    NearRealTimeApiImpl.prototype._InvokeRecomputeValidation = function (_a) {
        var newId = _a.newId, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var fcId, recomputeStatus;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        return [4, this.context.forecastServices.forecastDataAccess.invokeRecomputeValidator(fcId, newId)];
                    case 1:
                        recomputeStatus = _b.sent();
                        this.logInfo("NRT", "Recompute status recieved", __assign({ newId: newId, recomputeStatus: recomputeStatus }, context));
                        if (recomputeStatus == sharedEnums_1.RECOMPUTE_INPROGRESS_STATUSCODE) {
                            this._showInprogressToast();
                            this.showInProgressRibbon();
                            this.wasRecomputeTriggeredByCurrentUser = true;
                        }
                        else {
                        }
                        return [2];
                }
            });
        });
    };
    NearRealTimeApiImpl.prototype._showInprogressToast = function () {
        this.context.forecastServices.nrtToastNotificationsManager.addInProgressNotification();
    };
    NearRealTimeApiImpl.prototype.showPlainRibbon = function () {
        this.stateManager.setRibbonConfig(sharedEnums_1.RealtimeNotificationTypes.Initial);
    };
    NearRealTimeApiImpl.prototype.showFreshDataRibbon = function () {
        this.stateManager.setRibbonConfig(sharedEnums_1.RealtimeNotificationTypes.FreshDataNotification);
    };
    NearRealTimeApiImpl.prototype.showInProgressRibbon = function () {
        this.stateManager.setRibbonConfig(sharedEnums_1.RealtimeNotificationTypes.InProgressNotification);
    };
    NearRealTimeApiImpl.prototype.onRecomputeClick = function (context) {
        this._InvokeManualRecalculate(context);
    };
    NearRealTimeApiImpl.prototype._InvokeManualRecalculate = function (context) {
        var _this = this;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        this._showInprogressToast();
        this.showInProgressRibbon();
        this.logInfo("NRT", "FR recalculate request start", { fcId: fcId, frId: frId });
        this.logContext = context;
        this.context.forecastServices.forecastDataAccess.recalculateHierarchy(fcId, [frId]).then(function () {
            _this.wasRecomputeTriggeredByCurrentUser = true;
            _this.logInfo("NRT", "FR recalculate request complete", __assign({ fcId: fcId, frId: frId }, context));
        }).catch(function (error) {
            _this.logError("NRT.FrRecalculateRequest", error, "Please contact D365 Sales Forecasting team.");
            _this.context.forecastServices.forecastDialogsManager.openRecalculateErrorMessageDialog();
            _this.showPlainRibbon();
        });
    };
    NearRealTimeApiImpl.prototype.onNotificationRecieved = function (message) {
        this.logInfo("NRT", "Recompute notification message recieved", __assign(__assign({}, message), this.logContext), "signalr-notification-recv");
        if (message.recomputeStatus == sharedEnums_1.RECOMPUTE_COMPLETE_STATUSCODE) {
            this.showFreshDataRibbon();
            if (this.isGridPage) {
                this.showInGridSuccessToast();
            }
            else {
                this.ShowOutsideGridSuccessToast();
            }
        }
        else if (message.messageType == sharedEnums_1.NotificationMessageType.ERROR) {
            this.showPlainRibbon();
            if (this.wasRecomputeTriggeredByCurrentUser) {
                if (!this.isGridPage) {
                    this.showOutsideGridErrorToast();
                }
                else {
                    this.setMessageBarErrorNotification();
                }
            }
        }
        this.wasRecomputeTriggeredByCurrentUser = false;
    };
    NearRealTimeApiImpl.prototype.showOutsideGridErrorToast = function () {
        this.context.forecastServices.nrtToastNotificationsManager.addOutsideGridErrorNotification(this.onRedirectClickedFromToast.bind(this));
    };
    NearRealTimeApiImpl.prototype.ShowOutsideGridSuccessToast = function () {
        this.context.forecastServices.nrtToastNotificationsManager.addOutsideGridSuccessNotification(this.onRedirectClickedFromToast.bind(this));
    };
    NearRealTimeApiImpl.prototype.showInGridSuccessToast = function () {
        this.context.forecastServices.nrtToastNotificationsManager.addInGridSuccessNotification(this.onRefreshClickedFromToast.bind(this));
    };
    NearRealTimeApiImpl.prototype.setMessageBarErrorNotification = function () {
        var notificationMessage = this.context.forecastServices.stringsProvider.getLocalizedString(sharedEnums_1.FORCERECOMPUTE_FAILURE_MESSAGE);
        var msgType = "error";
        this.addMessageBarNotification(msgType, notificationMessage);
    };
    NearRealTimeApiImpl.prototype.onRefreshClickedFromToast = function () {
        this.logUsage("Toast refresh button", "", {}, "Click", "NearRealTimeApiImpl.onRefreshClickedFromToast", constants_1.FIGRID_ADJUST_FEATURE_NAME);
        this.fullApi.fiGrid.onRefresh();
    };
    NearRealTimeApiImpl.prototype.onRedirectClickedFromToast = function () {
        this.logUsage("Toast redirect button", "", {}, "Click", "NearRealTimeApiImpl.onRedirectClickedFromToast", constants_1.FIGRID_ADJUST_FEATURE_NAME);
        this.context.forecastServices.forecastNavigationManager.navigateToForecastGridPage();
    };
    NearRealTimeApiImpl.prototype.onPageUnload = function () {
        this.logInfo("NRT", "Forecast grid page exited");
        this.isGridPage = false;
    };
    return NearRealTimeApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.NearRealTimeApiImpl = NearRealTimeApiImpl;


/***/ }),

/***/ "./src/ForecastPageUiApi/partRecordGrid/partRecordGridApiImpl.ts":
/*!***********************************************************************!*\
  !*** ./src/ForecastPageUiApi/partRecordGrid/partRecordGridApiImpl.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var PartRecordGridApiImpl = (function (_super) {
    __extends(PartRecordGridApiImpl, _super);
    function PartRecordGridApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.partRecordViewer;
        return _this;
    }
    PartRecordGridApiImpl.prototype.getCrmGridDatasetInfo = function () {
        var _this = this;
        var outP = __assign({}, NullCrmDatasetInfo);
        var fc = this.fullApi.fcfrManager.getActiveFC();
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        var viewDef = this.stateManager.getViewDefsList(fc.rollupEntity).find(function (v) { return v.id == _this.getActiveViewId(); });
        if (viewDef) {
            outP.layoutXml = viewDef.layoutXml;
            outP.entityName = fc.rollupEntity;
            outP.fetchXml = this.stateManager.getIsPartRecFetchXml(cell.rowId, cell.colId, this.getActiveViewId());
            outP.linkedAttributeName = this.context.stateManager.fcFr.getActiveHierarchyLinkedAttributeName();
            outP.optionSetAttributeName = fc.forecastCategoryAttribute;
            outP.context = this.stateManager.getLogContext();
        }
        return outP;
    };
    PartRecordGridApiImpl.prototype.isLoading = function () {
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        if (!this.isFiIdPresentInGrid(cell.rowId))
            return true;
        return this.stateManager.getIsPartEditGridLoadingDict(cell.rowId, cell.colId, this.getActiveViewId());
    };
    PartRecordGridApiImpl.prototype.getViewsList = function () {
        var fc = this.fullApi.fcfrManager.getActiveFC();
        if (!fc || !fc.rollupEntity)
            return [];
        return this.stateManager.getViewDefsList(fc.rollupEntity);
    };
    PartRecordGridApiImpl.prototype.getActiveViewId = function () {
        return this.stateManager.getActiveViewId();
    };
    PartRecordGridApiImpl.prototype.onViewChange = function (viewId) {
        this.stateManager.setActiveViewId(viewId);
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        this._onCellSelect(cell.rowId, cell.colId, this.createNewContext("part-record-view-change"));
    };
    PartRecordGridApiImpl.prototype.onRecordSaved = function (recordId, hierarchyLinkedAtttributeId, optionSetValue, changes, context) {
        this.fullApi.partRecordViewer._onParticipatingRecordSaved(recordId, hierarchyLinkedAtttributeId, optionSetValue, changes, context);
    };
    PartRecordGridApiImpl.prototype._onCellSelect = function (rowId, colId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var fc, activeViewId, isAgg, rowType, fiId, colInfo, colIdForFetch, viewD, isPersonalView, viewFetchXml, partFetchXml, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!rowId || !colId)
                            return [2];
                        this.context.surveyHandler.callTriggerAndValidateEligibility(forecastPageTypes_1.ForecastingSurveyType.ForecastingGrid, "ForecastGridPage");
                        fc = this.fullApi.fcfrManager.getActiveFC();
                        if (!this.shouldFetchViewDefinitions(fc)) return [3, 2];
                        return [4, this.fetchViewDefinitionsForCurrentRollupEntity()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        activeViewId = this.getActiveViewId();
                        if (!activeViewId) return [3, 6];
                        this.stateManager.setIsPartEditGridLoadingDict(rowId, colId, activeViewId, true);
                        isAgg = rowId.endsWith("_agg");
                        rowType = isAgg ? "" + forecastPageTypes_1.ForecastInstanceColumnGroupType.Aggregated : "" + forecastPageTypes_1.ForecastInstanceColumnGroupType.RolledUp;
                        fiId = this.normalizeID(rowId);
                        colInfo = this.getColumnInfoFromId(colId);
                        colIdForFetch = colInfo && colInfo.forecastColumnType == forecastPageTypes_1.ForecastColumnType.Rollup ? colId : forecastPageTypes_1.EMPTY_GUID;
                        viewD = this.getViewsList().find(function (v) { return v.id == activeViewId; });
                        isPersonalView = viewD ? viewD.isPersonal : false;
                        viewFetchXml = viewD ? viewD.fetchXml : "";
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4, this.context.forecastServices.forecastDataAccess.ParticipatingRecordsFetchXml(fiId, colIdForFetch, activeViewId, rowType, isPersonalView, viewFetchXml)];
                    case 4:
                        partFetchXml = _a.sent();
                        this.stateManager.setLogContext(context);
                        this.logInfo("PartRecordFetchXmlFetcher", "fetchXml fetch complete", __assign({}, context), "partrec-fetchxml-fetch-success");
                        this.stateManager.setIsPartRecFetchXml(rowId, colId, activeViewId, partFetchXml);
                        this.stateManager.setIsPartEditGridLoadingDict(rowId, colId, activeViewId, false);
                        return [3, 6];
                    case 5:
                        e_1 = _a.sent();
                        this.context.errorHandler.handleError("Error while fetching participating records fetchXml", 4, e_1);
                        this.logError("PartRecordFetchXmlFetcher", e_1, "");
                        throw e_1;
                    case 6: return [2];
                }
            });
        });
    };
    PartRecordGridApiImpl.prototype.getPartRecordColumnId = function () {
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        var colInfo = this.getColumnInfoFromId(cell.colId);
        var colIdForFetch = colInfo && colInfo.forecastColumnType == forecastPageTypes_1.ForecastColumnType.Rollup ? cell.colId : forecastPageTypes_1.EMPTY_GUID;
        return colIdForFetch;
    };
    PartRecordGridApiImpl.prototype.isViewSelectorLoading = function () {
        return this.stateManager.getIsViewSelectorLoading();
    };
    PartRecordGridApiImpl.prototype._onFrChange = function (_a) {
        var newId = _a.newId, oldFrId = _a.oldFrId;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.fetchViewDefinitionsForCurrentRollupEntity()];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    PartRecordGridApiImpl.prototype._onFcChange = function (newId, oldId) {
        if (oldId != newId)
            this.setPreselectedView();
    };
    PartRecordGridApiImpl.prototype.fetchViewDefinitionsForCurrentRollupEntity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fc, fcList, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fc = this.fullApi.fcfrManager.getActiveFC();
                        if (!this.shouldFetchViewDefinitions(fc)) return [3, 4];
                        this.stateManager.setIsViewSelectorLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.context.forecastServices.crmMetadataAccess.getGridViewDefinitions(fc.rollupEntity)];
                    case 2:
                        fcList = _a.sent();
                        this.stateManager.setIsViewSelectorLoading(false);
                        this.stateManager.setViewDefsList(fc.rollupEntity, fcList);
                        this.setPreselectedView();
                        return [3, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.context.errorHandler.handleError("Error while fetching view definitions", 3, e_2);
                        this.logError("PartRecordViewsFetcher", e_2, "");
                        throw e_2;
                    case 4: return [2];
                }
            });
        });
    };
    PartRecordGridApiImpl.prototype.setPreselectedView = function () {
        var viewList = this.getViewsList();
        if (viewList && viewList.length > 0) {
            var defaultViewId_1 = this.fullApi.fcfrManager.getActiveFC().defaultPartRecordViewId;
            if (defaultViewId_1 && viewList.find(function (v) { return v.id == defaultViewId_1; })) {
                this.stateManager.setActiveViewId(defaultViewId_1);
            }
            else {
                this.stateManager.setActiveViewId(viewList[0].id);
            }
        }
    };
    PartRecordGridApiImpl.prototype.shouldFetchViewDefinitions = function (fc) {
        return fc && fc.rollupEntity && this.stateManager.getViewDefsList(fc.rollupEntity).length == 0;
    };
    return PartRecordGridApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.PartRecordGridApiImpl = PartRecordGridApiImpl;
var NullCrmDatasetInfo = {
    fetchXml: "",
    layoutXml: "",
    entityName: "",
    linkedAttributeName: "",
    optionSetAttributeName: ""
};


/***/ }),

/***/ "./src/ForecastPageUiApi/partRecordViewer/partRecordViewerApiImpl.ts":
/*!***************************************************************************!*\
  !*** ./src/ForecastPageUiApi/partRecordViewer/partRecordViewerApiImpl.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var forecastPageTypes_1 = __webpack_require__(/*! ./../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var kanbanWrapper_1 = __webpack_require__(/*! ../kanban/kanbanWrapper */ "./src/ForecastPageUiApi/kanban/kanbanWrapper.ts");
var fcFrStateManager_1 = __webpack_require__(/*! ../../StateManager/fcFrStateManager */ "./src/StateManager/fcFrStateManager.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var PartRecordViewerApiImpl = (function (_super) {
    __extends(PartRecordViewerApiImpl, _super);
    function PartRecordViewerApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.numActiveDeltaRecomputeCalls = 0;
        _this.didAnyDeltaRecomputeCallFailed = false;
        _this.stateManager = context.stateManager.partRecordViewer;
        _this.containerWrapper = new kanbanWrapper_1.KanbanWrapperContainer(_this.context.forecastServices.hostContext);
        return _this;
    }
    PartRecordViewerApiImpl.prototype.isViewerOpened = function () {
        return this.stateManager.getIsOpened();
    };
    PartRecordViewerApiImpl.prototype.isInKanbanMode = function () {
        return !this.context.stateManager.snapshot.isInDFMode() && !this.fullApi.fiSnapshot.isSnapshotFiGridPageActive()
            && this.stateManager.getIsKanbanMode();
    };
    PartRecordViewerApiImpl.prototype.isDealFlowModeViewer = function () {
        return this.stateManager.getDealFlowModeViewer();
    };
    PartRecordViewerApiImpl.prototype.isExpanded = function () {
        return this.stateManager.getIsExpanded();
    };
    PartRecordViewerApiImpl.prototype.isDealFlowModeViewerExpanded = function () {
        return this.stateManager.getIsDealFlowViewerExpanded();
    };
    PartRecordViewerApiImpl.prototype.getViewerTitle = function () {
        var isDealFlowPageMode = this.context.stateManager.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.DealFlow;
        var outP = {
            ownerName: "",
            formattedAmount: "",
            recordsTypeTitle: ""
        };
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        if (!cell.rowId)
            return outP;
        var fi = this.getFiFromFiId(cell.rowId);
        if (!fi)
            return outP;
        var hierarchyPrimaryColumnId = this.context.stateManager.fcFr.getActiveFc().gridMetadata.columnDefinitions.find(function (i) { return i.forecastColumnType == sharedEnums_1.ForecastColumnType.HierarchyPrimary; });
        outP.ownerName = fi.AggregateColumnData[hierarchyPrimaryColumnId.id].displayValue;
        if (isDealFlowPageMode) {
            var nodeInfo = this.context.stateManager.snapshot.getNodeInfo();
            var edgeInfo = this.context.stateManager.snapshot.getEdgeInfo();
            if (nodeInfo.CategoryId !== forecastPageTypes_1.EMPTY_GUID && edgeInfo.SourceCategoryId === forecastPageTypes_1.EMPTY_GUID) {
                outP.recordsTypeTitle = nodeInfo.SnapshotName + " " + nodeInfo.CategoryName + " ";
            }
            if (edgeInfo.SourceCategoryId !== forecastPageTypes_1.EMPTY_GUID && nodeInfo.CategoryId === forecastPageTypes_1.EMPTY_GUID) {
                outP.recordsTypeTitle = edgeInfo.SourceCategoryName + " " + "TO_PLACEHOLDER" + " " + edgeInfo.DestinationCategoryName + " ";
            }
        }
        else {
            var col = this.getColumnInfoFromId(cell.colId);
            if (col && col.forecastColumnType == sharedEnums_1.ForecastColumnType.Rollup) {
                var cellData = fi.RollUpColumnData;
                if (this.determineFiColumnType(cell.rowId) == "AggregatedColumns")
                    cellData = fi.AggregateColumnData;
                if (cellData && cellData[cell.colId]) {
                    outP.formattedAmount = this.getBaseCurrencyFormattedValue(Number(cellData[cell.colId].originalValue));
                }
                outP.recordsTypeTitle = col.localizedHeaderTitle;
            }
        }
        return outP;
    };
    PartRecordViewerApiImpl.prototype.getOwnerTitle = function () {
        var cell = this.context.stateManager.fiGrid.getSelectedCell();
        if (!cell.rowId)
            return "";
        var fi = this.getFiFromFiId(cell.rowId);
        if (!fi)
            return "";
        return fi.HierarchyEntityData.recordName;
    };
    PartRecordViewerApiImpl.prototype.getRecordsTypeTitle = function () {
        throw new Error("Method not implemented.");
    };
    PartRecordViewerApiImpl.prototype.getFormattedAmount = function () {
        throw new Error("Method not implemented.");
    };
    PartRecordViewerApiImpl.prototype.onSwitchModeClick = function () {
        var targetModeName = this.isInKanbanMode() ? "table" : "kanban";
        this.logUsage("PartRecordViewer show as " + targetModeName + " button", "", {}, "Click", "PartRecordViewerApiImpl.onSwitchModeClick", constants_1.PARTICIPAATING_RECORDS_FEATURE_NAME);
        this.stateManager.setIsKanbanMode(!this.isInKanbanMode());
    };
    PartRecordViewerApiImpl.prototype.onCloseClick = function () {
        this.logUsage("PartRecordViewer close button", "", {}, "Click", "PartRecordViewerApiImpl.onCloseClick", constants_1.PARTICIPAATING_RECORDS_FEATURE_NAME);
        if (this.fullApi.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.FIGrid) {
            this.stateManager.setIsOpened(false);
            this.stateManager.setIsExpanded(false);
        }
        if (this.fullApi.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.DealFlow) {
            this.onCloseClickForDealFlowViewer();
        }
    };
    PartRecordViewerApiImpl.prototype.onCloseClickForDealFlowViewer = function () {
        this.stateManager.setDealFlowModeViewer(false);
        this.stateManager.setIsDealFlowViewerExpanded(false);
    };
    PartRecordViewerApiImpl.prototype.onExpandCollapseClick = function () {
        this.logUsage("PartRecordViewer expand-collapse button", "", {}, "Click", "PartRecordViewerApiImpl.onExpandCollapseClick", constants_1.PARTICIPAATING_RECORDS_FEATURE_NAME);
        if (this.fullApi.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.FIGrid) {
            this.stateManager.setIsExpanded(!this.isExpanded());
        }
        if (this.fullApi.global.getForecastPageMode() == forecastPageTypes_1.ForecastPageMode.DealFlow) {
            this.stateManager.setIsDealFlowViewerExpanded(!this.isDealFlowModeViewerExpanded());
        }
    };
    PartRecordViewerApiImpl.prototype.getSelectedCellId = function () {
        return this.context.stateManager.fiGrid.getSelectedCell();
    };
    PartRecordViewerApiImpl.prototype._onCellSelect = function (rowId, colId, context) {
        context = context || this.createNewContext("fi-cell-select");
        this.logUsage("Grid cell", "", __assign(__assign({ rowId: rowId, colId: colId }, context), { isSnapshotMode: this.fullApi.fiSnapshot.isSnapshotFiGridPageActive() }), "Select", "", constants_1.FIGRID_ADJUST_FEATURE_NAME);
        if (!rowId)
            this.stateManager.setIsOpened(false);
        if (!this.isValidColumnForPartRecordViewing(colId))
            return;
        this.stateManager.setIsOpened(true);
        this.fullApi.partRecordGrid._onCellSelect(rowId, colId, context);
    };
    PartRecordViewerApiImpl.prototype._onFrChange = function (_a) {
        var newId = _a.newId, oldFrId = _a.oldFrId;
        if (newId) {
            this.stateManager.setIsPartRecFetchXmlLoaded(false);
            this.fetchPartFetchXMLs(newId);
            this.fullApi.kanban._onFrChange({ newId: newId, oldFrId: oldFrId });
        }
        if (newId != oldFrId) {
            this.fullApi.fiGrid.onCellSelect("", "");
            this.onCloseClick();
        }
    };
    PartRecordViewerApiImpl.prototype._onParticipatingRecordUpdated = function (fiId, values) {
        this.context.stateManager.nrt.setRibbonConfig(forecastPageTypes_1.RealtimeNotificationTypes.TableHasChanged);
    };
    PartRecordViewerApiImpl.prototype._onParticipatingRecordSaved = function (recordId, hierarchyLinkedAtttributeId, optionSetValue, changes, context) {
        return __awaiter(this, void 0, void 0, function () {
            var fcId, frId, _a, colIDs, hierarchyLinkedAtttributeIds, newFiList, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        frId = this.fullApi.fcfrManager.getActiveFRId();
                        _a = this.deriveDeltaRecomputeColumnIdsAndHierarchyIDs(optionSetValue, hierarchyLinkedAtttributeId, changes), colIDs = _a.colIDs, hierarchyLinkedAtttributeIds = _a.hierarchyLinkedAtttributeIds;
                        if (colIDs.length === 0 || hierarchyLinkedAtttributeIds.length === 0) {
                            this.logError("ParticipatingRecordsSavedHandler", new Error("Cannot deduce FC columns on which to trigger delta recompute"), "", { optionSetValue: optionSetValue, hierarchyLinkedAtttributeId: hierarchyLinkedAtttributeId });
                            return [2];
                        }
                        this.context.stateManager.nrt.setRibbonConfig(forecastPageTypes_1.RealtimeNotificationTypes.UpdatingRecords);
                        this.numActiveDeltaRecomputeCalls++;
                        return [4, this.context.forecastServices.forecastDataAccess.triggerDeltaRecompute(fcId, frId, colIDs, hierarchyLinkedAtttributeIds)];
                    case 1:
                        newFiList = _b.sent();
                        this.logInfo("DeltaRecomputeCallComplete", "completed", __assign({}, context), "delta-recompute-success");
                        this.onDeltaRecomputeCallSuccess(newFiList, frId);
                        return [3, 3];
                    case 2:
                        e_1 = _b.sent();
                        this.logError("DeltaRecompute request failed", e_1, '');
                        this.onDeltaRecomputeCallFailed();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    PartRecordViewerApiImpl.prototype.onDeltaRecomputeCallFailed = function () {
        this.numActiveDeltaRecomputeCalls--;
        this.didAnyDeltaRecomputeCallFailed = true;
        this.checkIfAllCallsCompleted();
    };
    PartRecordViewerApiImpl.prototype.onDeltaRecomputeCallSuccess = function (newFiList, frId) {
        this.numActiveDeltaRecomputeCalls--;
        this.noteChangedCellsForHighlight({ frId: frId, newFiList: newFiList });
        this.updateAdjustedFiData({ frId: frId, newFiList: newFiList }, false);
        this.checkIfAllCallsCompleted();
    };
    PartRecordViewerApiImpl.prototype.getFcColFromOptionSetValue = function (optionSetValue) {
        var fc = this.context.stateManager.fcFr.getActiveFc();
        var col = fc.gridMetadata.columnDefinitions.find(function (col) { return (col.optionSetValue === optionSetValue && col.forecastColumnType === sharedEnums_1.ForecastColumnType.Rollup); });
        return col;
    };
    PartRecordViewerApiImpl.prototype.deriveDeltaRecomputeColumnIdsAndHierarchyIDs = function (optionSetValue, hierarchyLinkedAtttributeId, changes) {
        var _this = this;
        var fc = this.context.stateManager.fcFr.getActiveFc();
        var col = this.getFcColFromOptionSetValue(optionSetValue);
        var colIDs = col ? [col.id] : [];
        var hierarchyLinkedAtttributeIds = hierarchyLinkedAtttributeId ? [hierarchyLinkedAtttributeId] : [];
        var attrHierarchy = fcFrStateManager_1.getActiveHierarchyLinkedAttributeNameFromFC(fc);
        var attrOptionSet = fc.forecastCategoryAttribute;
        changes.forEach(function (val, key) {
            if (key === attrOptionSet) {
                if (optionSetValue !== val.peviousValue) {
                    var col_1 = _this.getFcColFromOptionSetValue(val.peviousValue);
                    col_1 && colIDs.push(col_1.id);
                }
            }
            if (key === attrHierarchy) {
                if (val.peviousValue && hierarchyLinkedAtttributeId !== val.peviousValue.id) {
                    hierarchyLinkedAtttributeIds.push(val.peviousValue.id);
                }
            }
        });
        return { colIDs: colIDs, hierarchyLinkedAtttributeIds: hierarchyLinkedAtttributeIds };
    };
    PartRecordViewerApiImpl.prototype.checkIfAllCallsCompleted = function () {
        if (this.numActiveDeltaRecomputeCalls <= 0) {
            if (this.didAnyDeltaRecomputeCallFailed)
                this.context.stateManager.nrt.setRibbonConfig(forecastPageTypes_1.RealtimeNotificationTypes.SomeChangesWerentCalc);
            else
                this.context.stateManager.nrt.setRibbonConfig(forecastPageTypes_1.RealtimeNotificationTypes.Initial);
            this.didAnyDeltaRecomputeCallFailed = false;
        }
    };
    PartRecordViewerApiImpl.prototype.noteChangedCellsForHighlight = function (_a) {
        var _this = this;
        var frId = _a.frId, newFiList = _a.newFiList;
        this.context.stateManager.fiGrid.recordChangedCells(frId, newFiList);
        setTimeout(function () {
            _this.logDebug("DeltaRecomputeRequest", "Clear highlight cell animation", { newFiList: newFiList });
            _this.context.stateManager.fiGrid.clearChangedCells(newFiList);
        }, 6000);
    };
    PartRecordViewerApiImpl.prototype.updateAdjustedFiData = function (_a, updateHistoryFlags) {
        var frId = _a.frId, newFiList = _a.newFiList;
        this.context.stateManager.fiGrid.updateFIRollupData(frId, newFiList, updateHistoryFlags);
    };
    PartRecordViewerApiImpl.prototype.fetchPartFetchXMLs = function (frId) {
        return __awaiter(this, void 0, void 0, function () {
            var fcId, resp, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        return [4, this.context.forecastServices.forecastDataAccess.GetPipelineRecordsMetadata(fcId, frId)];
                    case 1:
                        resp = _a.sent();
                        this.isCurrentFR(frId);
                        this.stateManager.setFetchXmlResponse(resp);
                        this.stateManager.setIsPartRecFetchXmlLoaded(true);
                        return [3, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.context.errorHandler.handleError("Error while loading Kanban fetchXml template. Kanban control might not load.", 2, e_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    PartRecordViewerApiImpl.prototype.isValidColumnForPartRecordViewing = function (colId) {
        return colId != "";
    };
    return PartRecordViewerApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.PartRecordViewerApiImpl = PartRecordViewerApiImpl;


/***/ }),

/***/ "./src/ForecastPageUiApi/ribbon/ribbonApiImpl.ts":
/*!*******************************************************!*\
  !*** ./src/ForecastPageUiApi/ribbon/ribbonApiImpl.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var fiGridCommon_1 = __webpack_require__(/*! ../fiGridApi/fiGridCommon */ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var RibbonApiImpl = (function (_super) {
    __extends(RibbonApiImpl, _super);
    function RibbonApiImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RibbonApiImpl.prototype.getRibbonConfiguration = function () {
        return this.context.stateManager.nrt.getRibbonConfig();
    };
    RibbonApiImpl.prototype.getLastRecalculateTimeForCurrentFR = function () {
        var fr = this.fullApi.fcfrManager.getActiveFR();
        return fr.lastRecalculatedDateTime;
    };
    RibbonApiImpl.prototype.onRibbonRefreshClick = function () {
        this.logUsage("Ribbon refresh button", "", {}, "Click", "RibbonApiImpl.onRibbonRefreshClick", constants_1.FIGRID_ADJUST_FEATURE_NAME);
        this.fullApi.fiGrid.onRefresh();
    };
    RibbonApiImpl.prototype.onRibbonRecomputeClick = function () {
        var context = this.createNewContext("fi-ribbon-recompute");
        this.logUsage("Ribbon recompute button", "", __assign({}, context), "Click", "RibbonApiImpl.onRibbonRecomputeClick", constants_1.FIGRID_ADJUST_FEATURE_NAME);
        this.fullApi.nearRealTime.onRecomputeClick(context);
    };
    RibbonApiImpl.prototype.onCreateSnapshot = function () {
        var _this = this;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        this.context.forecastServices.forecastDataAccess.createSnapshot(frId, fcId).then(function (result) {
            var notificationMessage;
            if (result != null) {
                if (result.snapshotID == sharedEnums_1.EMPTY_GUID) {
                    notificationMessage = "You cannot take snapshot right now. Please wait for some time and then try again.";
                }
                else {
                    notificationMessage = "The snapshot creation is in progress. Please refresh the page after sometime.";
                }
                _this.context.forecastServices.nrtToastNotificationsManager.addCreateSnapshotToast(notificationMessage);
            }
        });
    };
    return RibbonApiImpl;
}(fiGridCommon_1.FiGridCommon));
exports.RibbonApiImpl = RibbonApiImpl;


/***/ }),

/***/ "./src/ForecastPageUiApi/snapshots/snapshotApiImpl.ts":
/*!************************************************************!*\
  !*** ./src/ForecastPageUiApi/snapshots/snapshotApiImpl.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var snapshotsStateManager_1 = __webpack_require__(/*! ../../StateManager/snapshotsStateManager */ "./src/StateManager/snapshotsStateManager.ts");
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var stringUtility_1 = __webpack_require__(/*! ../../Utility/stringUtility */ "./src/Utility/stringUtility.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var SnapshotApiImpl = (function (_super) {
    __extends(SnapshotApiImpl, _super);
    function SnapshotApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.SNAPSHOT_DROP_DOWN_SELECTOR_TEXT = "SnapshotDropDownSelectorText";
        _this.stateManager = context.stateManager.snapshot;
        return _this;
    }
    SnapshotApiImpl.prototype._onCellSelect = function (rowId, context) {
        context = context || this.createNewContext("dealflow-row-select");
        this.logUsage("Dealflow row", "", __assign({ rowId: rowId }, context), "Select", "", constants_1.DEALFLOW_FEATURE_NAME);
        this.stateManager.setChartData({ Nodes: [], Edges: [], AggregateData: [], RollupEntityName: "" });
        this.stateManager.setActiveForecastInstanceId(rowId);
        if (this.isDealFlowChartVisible() && !this.isSelectionChanged()) {
            this.fetchAndUpdateDealFlowChartData(context);
        }
        else {
            this.setChartDataFetchStatus(forecastPageTypes_1.Status.Init);
        }
    };
    SnapshotApiImpl.prototype.fetchAndUpdateDealFlowChartData = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var rowId, isAgg, rowType, fiId;
            return __generator(this, function (_a) {
                this.setChartDataFetchStatus(forecastPageTypes_1.Status.InProgress);
                rowId = this.stateManager.getActiveForecastInstanceId();
                isAgg = rowId.endsWith("_agg");
                rowType = isAgg ? "" + forecastPageTypes_1.ForecastInstanceColumnGroupType.Aggregated : "" + forecastPageTypes_1.ForecastInstanceColumnGroupType.RolledUp;
                fiId = this.normalizeID(rowId);
                this._triggerChartDataFetch(fiId, rowType, context);
                return [2];
            });
        });
    };
    SnapshotApiImpl.prototype.getMainSnapshotList = function () {
        var allSnaps = this.stateManager.getSnapshotList();
        var snList = allSnaps.map(function (sn) {
            return {
                id: sn.snapshotID,
                title: sn.snapshotName
            };
        });
        return __spreadArrays([{ id: "", title: this.context.forecastServices.stringsProvider.getLocalizedString(this.SNAPSHOT_DROP_DOWN_SELECTOR_TEXT) }], snList);
    };
    SnapshotApiImpl.prototype.getSecondSnapshotList = function () {
        var outP = [];
        var mainList = this.getMainSnapshotList();
        var activeId = this.getActiveMainSnapshotId();
        if (activeId) {
            var firstSnapIdx = mainList.findIndex(function (ele) { return ele.id == activeId; });
            outP = mainList.slice(0, firstSnapIdx);
            return outP;
        }
        return [{ id: "", title: this.context.forecastServices.stringsProvider.getLocalizedString(this.SNAPSHOT_DROP_DOWN_SELECTOR_TEXT) }];
    };
    SnapshotApiImpl.prototype.getActiveMainSnapshotId = function () {
        return this.stateManager.getActiveMainSnapshotId();
    };
    SnapshotApiImpl.prototype.getActiveSecondSnapshotId = function () {
        return this.stateManager.getSecondSnapshotId();
    };
    SnapshotApiImpl.prototype.getActiveForecastInstanctId = function () {
        return this.stateManager.getActiveForecastInstanceId();
    };
    SnapshotApiImpl.prototype.isSelectionChanged = function () {
        return this.stateManager.isSelectionChanged();
    };
    SnapshotApiImpl.prototype.isInDealFlowMode = function () {
        return this.stateManager.isInDFMode();
    };
    SnapshotApiImpl.prototype.getDealFlowChartData = function () {
        var chartData = this.stateManager.getChartData();
        return chartData;
    };
    SnapshotApiImpl.prototype.getDealFlowGridRows = function () {
        var _this = this;
        return this.stateManager.getDfGridData().map(function (row) {
            return __assign(__assign({}, row), { S1DataValue: _this.getBaseCurrencyFormattedValue(row.S1DataValue), S2DataValue: _this.getBaseCurrencyFormattedValue(row.S2DataValue), S1TargetDate: row.S1TargetDate && _this.getDateFormattedValue(new Date(row.S1TargetDate)), S2TargetDate: row.S2TargetDate && _this.getDateFormattedValue(new Date(row.S2TargetDate)) });
        });
    };
    SnapshotApiImpl.prototype.getCurrentEdgeInfo = function () {
        return this.stateManager.getEdgeInfo();
    };
    SnapshotApiImpl.prototype.getCurrentNodeInfo = function () {
        return this.stateManager.getNodeInfo();
    };
    SnapshotApiImpl.prototype.getDFDataFetchStatus = function () {
        return this.stateManager.getDFDataFetchStatus();
    };
    SnapshotApiImpl.prototype.initializeDataFetchStatus = function () {
        this.stateManager.setDFDataFetchStatus(snapshotsStateManager_1.initDFDataFetchStatus);
    };
    SnapshotApiImpl.prototype.setSnapshotDataFetchStatus = function (status) {
        var dfDataFetchStatus = this.stateManager.getDFDataFetchStatus();
        dfDataFetchStatus.SnapshotFetchStatus = status;
        this.stateManager.setDFDataFetchStatus(dfDataFetchStatus);
    };
    SnapshotApiImpl.prototype.setChartDataFetchStatus = function (status) {
        var dfDataFetchStatus = this.stateManager.getDFDataFetchStatus();
        dfDataFetchStatus.ChartDataFetchStatus = status;
        this.stateManager.setDFDataFetchStatus(dfDataFetchStatus);
    };
    SnapshotApiImpl.prototype.setGridDataFetchStatus = function (status) {
        var dfDataFetchStatus = this.stateManager.getDFDataFetchStatus();
        dfDataFetchStatus.GridDataFetchStatus = status;
        this.stateManager.setDFDataFetchStatus(dfDataFetchStatus);
    };
    SnapshotApiImpl.prototype.onMainSnapshotChange = function (newId) {
        if (this.stateManager.getActiveMainSnapshotId() !== newId) {
            this.stateManager.setSelectionChanged(true);
            this.stateManager.setActiveMainSnapShot(newId);
            this.stateManager.set2ndSnapshotId("");
        }
    };
    SnapshotApiImpl.prototype.onSecondSnapshotChange = function (newId) {
        if (this.stateManager.getSecondSnapshotId() !== newId) {
            this.stateManager.setSelectionChanged(true);
            this.stateManager.set2ndSnapshotId(newId);
            this.stateManager.setEdgeInfo(snapshotsStateManager_1.nullEdgeInfo);
            this.stateManager.setCurrentPage(-1);
        }
    };
    SnapshotApiImpl.prototype.onSnapshotFeatureChange = function () {
        this.stateManager.toggleDFMode();
        if (!this.isInDealFlowMode()) {
            this.onMainSnapshotChange("");
        }
    };
    SnapshotApiImpl.prototype.onRunButtonClick = function () {
        var context = this.createNewContext("deal-flow-run-click");
        this.logUsage("DealFlowRun", "", __assign({}, context), "Click", "", constants_1.DEALFLOW_FEATURE_NAME);
        this.fetchAndUpdateDealFlowChartData(context);
        this.stateManager.setSelectionChanged(false);
    };
    SnapshotApiImpl.prototype.onDealFlowLinkClick = function (edgeInfo) {
        var context = this.createNewContext("dealFlowLinkClick");
        this.logUsage("DealFlowLink", "", __assign({}, context), "Click", "", constants_1.DEALFLOW_FEATURE_NAME);
        try {
            this.context.stateManager.partRecordViewer.setDealFlowModeViewer(true);
            this.stateManager.setEdgeInfo(edgeInfo);
            this.stateManager.setNodeInfo(snapshotsStateManager_1.nullNodeInfo);
            this.stateManager.setCurrentPage(-1);
            this._triggerGridDataFetch(0, context);
            this.setGridDataFetchStatus(forecastPageTypes_1.Status.Success);
        }
        catch (e) {
            this.logError("SnapshotApi", e, "Error fetching grid data on edge click");
            this.setGridDataFetchStatus(forecastPageTypes_1.Status.Error);
        }
    };
    SnapshotApiImpl.prototype.onDealFlowNodeClick = function (node, isSourceSnapshotNode) {
        var context = this.createNewContext("dealFlowNodeClick");
        this.logUsage("DealFlowNode", "", __assign({}, context), "Click", "", constants_1.DEALFLOW_FEATURE_NAME);
        try {
            this.context.stateManager.partRecordViewer.setDealFlowModeViewer(true);
            var nodeInfo = {
                CategoryId: node.key,
                CategoryName: node.name,
                SnapshotId: node.snapshotId,
                SnapshotName: node.snapshotName,
                isSourceSnapshotNode: isSourceSnapshotNode
            };
            this.stateManager.setNodeInfo(nodeInfo);
            this.stateManager.setEdgeInfo(snapshotsStateManager_1.nullEdgeInfo);
            this.stateManager.setCurrentPage(-1);
            this._triggerGridDataFetch(0, context);
            this.setGridDataFetchStatus(forecastPageTypes_1.Status.Success);
        }
        catch (e) {
            this.logError("SnapshotApi", e, "Error fetching grid data on node click");
            this.setGridDataFetchStatus(forecastPageTypes_1.Status.Error);
        }
    };
    SnapshotApiImpl.prototype.isDealFlowChartVisible = function () {
        return this.getActiveMainSnapshotId() != "" && this.getActiveSecondSnapshotId() != "";
    };
    SnapshotApiImpl.prototype.getNextLazyLoadPageNo = function () {
        return this.stateManager.getCurrentPage() + 1;
    };
    SnapshotApiImpl.prototype.onLazyLoadRequest = function (pageNo) {
        this._triggerGridDataFetch(pageNo);
    };
    SnapshotApiImpl.prototype.shouldAddLazyLoader = function () {
        return this.stateManager.getGridHasMorePages();
    };
    SnapshotApiImpl.prototype.fetchSnapshotListforFR = function (context) {
        this.setSnapshotDataFetchStatus(forecastPageTypes_1.Status.InProgress);
        this.fetchSnapshotList(context);
    };
    SnapshotApiImpl.prototype.setDefaultSnapshotSelection = function (context) {
        var snapshotList = this.stateManager.getSnapshotList();
        if (this.stateManager.getActiveForecastInstanceId() !== "" && snapshotList.length >= 2 && this.stateManager.getActiveMainSnapshotId() === "" && this.stateManager.getSecondSnapshotId() === "") {
            var mainSnapshotId = snapshotList[1].snapshotID;
            var secondSnapshotId = snapshotList[0].snapshotID;
            this.stateManager.setActiveMainSnapShot(mainSnapshotId);
            this.stateManager.set2ndSnapshotId(secondSnapshotId);
            this.stateManager.setEdgeInfo(snapshotsStateManager_1.nullEdgeInfo);
            this.stateManager.setCurrentPage(-1);
            this.fetchAndUpdateDealFlowChartData(context);
        }
    };
    SnapshotApiImpl.prototype._onFrChange = function (_a) {
        var newId = _a.newId, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var fcId, snapshots, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        this.stateManager.setActiveMainSnapShot("");
                        this.stateManager.set2ndSnapshotId("");
                        this.stateManager.updateSnapshots([]);
                        if (this.fullApi.global.getForecastPageMode() !== forecastPageTypes_1.ForecastPageMode.FIGrid)
                            this.fullApi.fiGrid.onPivotChangeRetainSelectedCell();
                        this.setSnapshotDataFetchStatus(forecastPageTypes_1.Status.Init);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, this.context.forecastServices.forecastDataAccess.fetchSnapshotList("", fcId)];
                    case 2:
                        snapshots = _b.sent();
                        this.logInfo("SnapshotFetcher", "", __assign({}, context), "fetch-snapshotlist-success");
                        this.stateManager.setSnapshotHistoryList(snapshots);
                        this.stateManager.updateSnapshots(snapshots.filter(function (snap) { return snap.frId === newId; }));
                        this.setSnapshotDataFetchStatus(forecastPageTypes_1.Status.Success);
                        return [3, 4];
                    case 3:
                        e_1 = _b.sent();
                        this.onSnapFetchError(e_1);
                        this.logError("SnapshotApi", e_1, "Error fetching snapshotlist.", { fcId: fcId, frId: newId });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    SnapshotApiImpl.prototype.fetchSnapshotList = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var fcId, frId, snapshots, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        frId = this.fullApi.fcfrManager.getActiveFRId();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.stateManager.setActiveMainSnapShot("");
                        this.stateManager.set2ndSnapshotId("");
                        this.stateManager.updateSnapshots([]);
                        this.stateManager.setActiveForecastInstanceId("");
                        return [4, this.context.forecastServices.forecastDataAccess.fetchSnapshotList(frId, fcId)];
                    case 2:
                        snapshots = _a.sent();
                        this.logInfo("SnapshotFetcher", "", __assign({}, context), "fetch-snapshotlist-success");
                        this.stateManager.updateSnapshots(snapshots);
                        this.setSnapshotDataFetchStatus(forecastPageTypes_1.Status.Success);
                        this.setDefaultSnapshotSelection(context);
                        return [3, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.onSnapFetchError(e_2);
                        this.logError("SnapshotApi", e_2, "Error fetching snapshotlist.", { fcId: fcId, frId: frId });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    SnapshotApiImpl.prototype._triggerChartDataFetch = function (fiId, forecastInstanceGroupType, context) {
        return __awaiter(this, void 0, void 0, function () {
            var forecastConfig, fcId, frId, mainSnapId, secondSnapId, baseCurrencySymbol_1, chartData, e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        forecastConfig = this.fullApi.fcfrManager.getActiveFC();
                        fcId = forecastConfig.id;
                        frId = this.fullApi.fcfrManager.getActiveFRId();
                        mainSnapId = this.getActiveMainSnapshotId();
                        secondSnapId = this.getActiveSecondSnapshotId();
                        baseCurrencySymbol_1 = this.context.stateManager.global.getBaseCurrencySymbol();
                        this.stateManager.setChartData({ Nodes: [], Edges: [], AggregateData: [], RollupEntityName: forecastConfig.rollupEntity });
                        return [4, this.context.forecastServices.forecastDataAccess.fetchDeaFlowData(frId, fcId, mainSnapId, secondSnapId, fiId, forecastInstanceGroupType)];
                    case 1:
                        chartData = _a.sent();
                        this.logInfo("DealFlowFetcher", "", __assign({}, context), "fetch-dealflowdata-success", "", constants_1.DEALFLOW_FEATURE_NAME);
                        chartData.Nodes.forEach(function (node) {
                            var abbreviatedValue = stringUtility_1.abbreviateNumber(Number(node.value), 1, baseCurrencySymbol_1);
                            node.abbreviatedValue = abbreviatedValue ? abbreviatedValue : node.value.toString();
                            node.formattedValue = _this.getBaseCurrencyFormattedValue(Number(node.value));
                        });
                        chartData.Edges.forEach(function (edge) {
                            var abbreviatedValue = stringUtility_1.abbreviateNumber(edge.value, 1, baseCurrencySymbol_1);
                            edge.abbreviatedValue = abbreviatedValue ? abbreviatedValue : edge.value.toString();
                        });
                        chartData.AggregateData.forEach(function (aggregateNode) {
                            var abbreviatedValue = stringUtility_1.abbreviateNumber(Number(aggregateNode.value), 1, baseCurrencySymbol_1);
                            aggregateNode.abbreviatedValue = abbreviatedValue ? abbreviatedValue : aggregateNode.value;
                            aggregateNode.value = _this.getBaseCurrencyFormattedValue(Number(aggregateNode.value));
                        });
                        chartData.RollupEntityName = forecastConfig.rollupEntityPluralName;
                        this.stateManager.setChartData(chartData);
                        this.setChartDataFetchStatus(forecastPageTypes_1.Status.Success);
                        return [3, 3];
                    case 2:
                        e_3 = _a.sent();
                        this.logError("SnapshotApi", e_3, "Error fetching deal flow chart data.");
                        this.setChartDataFetchStatus(forecastPageTypes_1.Status.Error);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    SnapshotApiImpl.prototype._triggerGridDataFetch = function (pageOffset, context) {
        if (pageOffset === void 0) { pageOffset = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var fcId, mainSnapId, secondSnapId, nodeInfo, edgeInfo, isNodeDatFetch, pageInfo, srcCategoryDetails, destCategoryDetails, dfEntityDataRequest, fiId, isAgg, rowType, gridData, expectedCurrentSize, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        mainSnapId = this.getActiveMainSnapshotId();
                        secondSnapId = this.getActiveSecondSnapshotId();
                        nodeInfo = this.stateManager.getNodeInfo();
                        edgeInfo = this.stateManager.getEdgeInfo();
                        isNodeDatFetch = false;
                        if (edgeInfo.SourceCategoryId === forecastPageTypes_1.EMPTY_GUID && nodeInfo.CategoryId === forecastPageTypes_1.EMPTY_GUID)
                            return [2];
                        if (edgeInfo.SourceCategoryId === forecastPageTypes_1.EMPTY_GUID) {
                            edgeInfo = {
                                SourceCategoryName: nodeInfo.isSourceSnapshotNode ? nodeInfo.CategoryName : "",
                                SourceCategoryId: nodeInfo.isSourceSnapshotNode ? nodeInfo.CategoryId : forecastPageTypes_1.EMPTY_GUID,
                                DestinationCategoryName: nodeInfo.isSourceSnapshotNode ? "" : nodeInfo.CategoryName,
                                DestinationCategoryId: nodeInfo.isSourceSnapshotNode ? forecastPageTypes_1.EMPTY_GUID : nodeInfo.CategoryId
                            };
                            isNodeDatFetch = true;
                        }
                        pageInfo = {
                            "PageOffset": pageOffset,
                            "OrderByAsc": 1,
                            "PageSize": sharedEnums_1.DEALFLOW_PAGE_SIZE,
                        };
                        srcCategoryDetails = {
                            "SnapshotId": mainSnapId,
                            "CategoryName": edgeInfo.SourceCategoryName,
                            "CategoryId": edgeInfo.SourceCategoryId
                        };
                        destCategoryDetails = {
                            "SnapshotId": secondSnapId,
                            "CategoryName": edgeInfo.DestinationCategoryName,
                            "CategoryId": edgeInfo.DestinationCategoryId
                        };
                        dfEntityDataRequest = {
                            "DealFlowPipeSource": srcCategoryDetails,
                            "DealFlowPipeDestination": destCategoryDetails,
                            "PageInfo": pageInfo,
                        };
                        if (pageOffset == 0) {
                            this.stateManager.setDfGridData([]);
                            this.stateManager.setIsDFGridLoading(true);
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        fiId = this.stateManager.getActiveForecastInstanceId();
                        isAgg = fiId.endsWith("_agg");
                        rowType = isAgg ? "" + forecastPageTypes_1.ForecastInstanceColumnGroupType.Aggregated : "" + forecastPageTypes_1.ForecastInstanceColumnGroupType.RolledUp;
                        return [4, this.context.forecastServices.forecastDataAccess.fetchCategoryDealFlowData(fcId, this.normalizeID(fiId), rowType, dfEntityDataRequest)];
                    case 2:
                        gridData = _b.sent();
                        this.logInfo("Dealflowgriddatafetcher", "", __assign({}, context), "fetch-dealFlowPartRecord-success", "", constants_1.DEALFLOW_FEATURE_NAME);
                        expectedCurrentSize = (pageOffset) * sharedEnums_1.DEALFLOW_PAGE_SIZE;
                        if (expectedCurrentSize !== this.stateManager.getDfGridData().length
                            || (edgeInfo !== this.stateManager.getEdgeInfo() && isNodeDatFetch == false)) {
                            return [2];
                        }
                        this.stateManager.appendDfGridData(gridData);
                        this.stateManager.setCurrentPage(pageOffset);
                        if (gridData && gridData.length == sharedEnums_1.DEALFLOW_PAGE_SIZE) {
                            this.stateManager.setGridHasMorePages(true);
                        }
                        else {
                            this.stateManager.setGridHasMorePages(false);
                        }
                        this.stateManager.setIsDFGridLoading(false);
                        this.setGridDataFetchStatus(forecastPageTypes_1.Status.Success);
                        return [3, 4];
                    case 3:
                        _a = _b.sent();
                        this.stateManager.setIsDFGridLoading(false);
                        this.setGridDataFetchStatus(forecastPageTypes_1.Status.Error);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    SnapshotApiImpl.prototype.isDealFlowGridLoading = function () {
        return this.stateManager.isDFGridLoading();
    };
    SnapshotApiImpl.prototype.onIncludedRecordClick = function (entityId) {
        this.logUsage("SnapshotPartRecord-link", "", {}, "Click", "", constants_1.DEALFLOW_FEATURE_NAME);
        try {
            var forecastConfig = this.fullApi.fcfrManager.getActiveFC();
            var entityFormOptions = {
                entityName: forecastConfig.rollupEntity.toLowerCase(),
                entityId: entityId,
                openInNewWindow: true,
            };
            this.context.forecastServices.hostContext.navigation.openForm(entityFormOptions);
        }
        catch (err) {
            this.logError("SnapshotApi", err, "Error opening the record. Either record was deleted or does not exist.");
        }
    };
    SnapshotApiImpl.prototype.onSnapFetchError = function (e) {
        this.setSnapshotDataFetchStatus(forecastPageTypes_1.Status.Error);
        this.stateManager.setSnapFetchErrorMessage(e.message);
    };
    return SnapshotApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.SnapshotApiImpl = SnapshotApiImpl;


/***/ }),

/***/ "./src/ForecastPageUiApi/snapshots/snapshotFiGridApiImpl.ts":
/*!******************************************************************!*\
  !*** ./src/ForecastPageUiApi/snapshots/snapshotFiGridApiImpl.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/ForecastPageUiApi/common/constants.ts");
var SnapshotFiGridApiImpl = (function (_super) {
    __extends(SnapshotFiGridApiImpl, _super);
    function SnapshotFiGridApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.SNAPSHOT_DROP_DOWN_SELECTOR_TEXT = "SnapshotDropDownSelectorText";
        _this.stateManager = context.stateManager.snapshot;
        return _this;
    }
    SnapshotFiGridApiImpl.prototype.getParticipatingRecordsForSnapshotRequestInput = function () {
        var snapId = this.getActiveSnapshotInfo().id;
        var cell = this.fullApi.partRecordViewer.getSelectedCellId();
        var fiId = this.normalizeID(cell.rowId);
        var colId = this.fullApi.partRecordGrid.getPartRecordColumnId();
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var isRollupNode = this.determineFiColumnType(cell.rowId) === "RolledUpColumns";
        return {
            forecastConfigId: fcId,
            snapshotId: snapId,
            forecastInstanceId: fiId,
            isRollupNode: isRollupNode,
            categoryColumnId: colId
        };
    };
    SnapshotFiGridApiImpl.prototype.getActiveSnapshotInfo = function () {
        return this.stateManager.getActiveSnapshotInFIGridId();
    };
    SnapshotFiGridApiImpl.prototype.onBackToForecastClick = function () {
        var context = this.createNewContext("onBackToForecastClick");
        this.logUsage("Back to forecast button", "", __assign({}, context), "Click", "SnapshotFiGridApiImpl.onBackToForecastClick", constants_1.FISNAPSHOT_FEATURE_NAME);
        this.stateManager.setIsSnapFiGridActive(false);
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        this.context.stateManager.partRecordViewer.setIsOpened(false);
        this.fullApi.fiGrid._reloadFiGrid({ newId: frId, oldFrId: frId, context: context });
    };
    SnapshotFiGridApiImpl.prototype.onSnapRowClick = function (snapId) {
        var context = this.createNewContext("snapshotRowClick");
        this.logUsage("Snapshot row", "", __assign({ snapId: snapId }, context), "Click", "SnapshotFiGridApiImpl.onSnapRowClick", constants_1.FISNAPSHOT_FEATURE_NAME);
        var snaps = this.getSnapGridRows();
        var snap = snaps.find(function (s) { return s.id === snapId; });
        if (!snap)
            return;
        this.context.stateManager.global.setForecastPageMode(forecastPageTypes_1.ForecastPageMode.FIGrid);
        this.stateManager.setIsSnapHistPanelOpen(false);
        this.stateManager.setIsSnapFiGridActive(true);
        this.stateManager.setActiveSnapshotInFIGridId(snap);
        this.context.stateManager.partRecordViewer.setIsOpened(false);
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        this.fullApi.fiGrid._reloadFiGrid({ newId: frId, oldFrId: frId, context: context });
    };
    SnapshotFiGridApiImpl.prototype.onPanelCloseClick = function () {
        this.logUsage("Snapshot panel close button", "", {}, "Click", "SnapshotFiGridApiImpl.onPanelCloseClick", constants_1.FISNAPSHOT_FEATURE_NAME);
        this.stateManager.setIsSnapHistPanelOpen(false);
    };
    SnapshotFiGridApiImpl.prototype.onRibbonButtonClick = function () {
        this.logUsage("Snapshot history ribbon button", "", {}, "Click", "SnapshotFiGridApiImpl.onRibbonButtonClick", constants_1.FISNAPSHOT_FEATURE_NAME);
        this.stateManager.setIsSnapHistPanelOpen(true);
    };
    SnapshotFiGridApiImpl.prototype.isRibbonButtonVisible = function () {
        return this.fullApi.global.getSnapshotFeatureEnabled();
    };
    SnapshotFiGridApiImpl.prototype.isSnapGridPanelVisible = function () {
        return this.stateManager.getIsSnapHistPanelOpen();
    };
    SnapshotFiGridApiImpl.prototype.isSnapGridLoading = function () {
        var stat = this.stateManager.getDFDataFetchStatus().SnapshotFetchStatus;
        return stat === forecastPageTypes_1.Status.Init || stat === forecastPageTypes_1.Status.InProgress;
    };
    SnapshotFiGridApiImpl.prototype.getSnapGridRows = function () {
        var _this = this;
        var snaps = this.stateManager.getSnapshotHistoryList();
        return snaps.map(function (s) {
            return {
                id: s.snapshotID,
                name: s.snapshotName,
                frId: s.frId,
                ownerName: s.ownerName,
                createdOn: _this.getDateFormattedValue(new Date(s.createdOn), true)
            };
        });
    };
    SnapshotFiGridApiImpl.prototype.getSnapGridError = function () {
        var stat = this.stateManager.getDFDataFetchStatus().SnapshotFetchStatus;
        if (stat == forecastPageTypes_1.Status.Error) {
            return this.stateManager.getSnapFetchErrorMessage();
        }
        return "";
    };
    SnapshotFiGridApiImpl.prototype.isSnapshotFiGridPageActive = function () {
        return this.stateManager.getIsSnapFiGridActive();
    };
    SnapshotFiGridApiImpl.prototype.getFIGridError = function () {
        throw new Error("Method not implemented.");
    };
    return SnapshotFiGridApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.SnapshotFiGridApiImpl = SnapshotFiGridApiImpl;


/***/ }),

/***/ "./src/Interface/forecastPageTypes.ts":
/*!********************************************!*\
  !*** ./src/Interface/forecastPageTypes.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ForecastColumnType;
(function (ForecastColumnType) {
    ForecastColumnType[ForecastColumnType["Rollup"] = 0] = "Rollup";
    ForecastColumnType[ForecastColumnType["Calculated"] = 1] = "Calculated";
    ForecastColumnType[ForecastColumnType["Simple"] = 2] = "Simple";
    ForecastColumnType[ForecastColumnType["Predictive"] = 3] = "Predictive";
    ForecastColumnType[ForecastColumnType["HierarchyPrimary"] = 4] = "HierarchyPrimary";
    ForecastColumnType[ForecastColumnType["HierarchySecondary"] = 5] = "HierarchySecondary";
})(ForecastColumnType = exports.ForecastColumnType || (exports.ForecastColumnType = {}));
var ForecastColumnDataType;
(function (ForecastColumnDataType) {
    ForecastColumnDataType[ForecastColumnDataType["Old"] = 0] = "Old";
    ForecastColumnDataType[ForecastColumnDataType["Currency"] = 1] = "Currency";
    ForecastColumnDataType[ForecastColumnDataType["Decimal"] = 2] = "Decimal";
    ForecastColumnDataType[ForecastColumnDataType["SingleLineOfText"] = 3] = "SingleLineOfText";
})(ForecastColumnDataType = exports.ForecastColumnDataType || (exports.ForecastColumnDataType = {}));
var ColumnGroupType;
(function (ColumnGroupType) {
    ColumnGroupType[ColumnGroupType["None"] = 0] = "None";
    ColumnGroupType[ColumnGroupType["Aggregated"] = 10] = "Aggregated";
    ColumnGroupType[ColumnGroupType["RolledUp"] = 20] = "RolledUp";
})(ColumnGroupType = exports.ColumnGroupType || (exports.ColumnGroupType = {}));
var SnapshotFeatureId;
(function (SnapshotFeatureId) {
    SnapshotFeatureId[SnapshotFeatureId["FORECASTING_FEATURE_ID"] = 1] = "FORECASTING_FEATURE_ID";
    SnapshotFeatureId[SnapshotFeatureId["DEALFLOW_ANALYSIS_ID"] = 2] = "DEALFLOW_ANALYSIS_ID";
})(SnapshotFeatureId = exports.SnapshotFeatureId || (exports.SnapshotFeatureId = {}));
var RecurrenceType;
(function (RecurrenceType) {
    RecurrenceType[RecurrenceType["Montly"] = 0] = "Montly";
    RecurrenceType[RecurrenceType["Quarterly"] = 1] = "Quarterly";
})(RecurrenceType = exports.RecurrenceType || (exports.RecurrenceType = {}));
;
var FCChartType;
(function (FCChartType) {
    FCChartType[FCChartType["TrendChart"] = 0] = "TrendChart";
    FCChartType[FCChartType["FCWaterfallChart"] = 1] = "FCWaterfallChart";
    FCChartType[FCChartType["PredictiveWaterfallChart"] = 2] = "PredictiveWaterfallChart";
})(FCChartType = exports.FCChartType || (exports.FCChartType = {}));
var ChartType;
(function (ChartType) {
    ChartType[ChartType["Waterfall"] = 0] = "Waterfall";
    ChartType[ChartType["Column"] = 1] = "Column";
})(ChartType = exports.ChartType || (exports.ChartType = {}));
var FrPeriodExpiryStatus;
(function (FrPeriodExpiryStatus) {
    FrPeriodExpiryStatus[FrPeriodExpiryStatus["Ended"] = 0] = "Ended";
    FrPeriodExpiryStatus[FrPeriodExpiryStatus["Current"] = 1] = "Current";
    FrPeriodExpiryStatus[FrPeriodExpiryStatus["NotStarted"] = 2] = "NotStarted";
})(FrPeriodExpiryStatus = exports.FrPeriodExpiryStatus || (exports.FrPeriodExpiryStatus = {}));
var RealtimeNotificationTypes;
(function (RealtimeNotificationTypes) {
    RealtimeNotificationTypes[RealtimeNotificationTypes["None"] = 1] = "None";
    RealtimeNotificationTypes[RealtimeNotificationTypes["Initial"] = 2] = "Initial";
    RealtimeNotificationTypes[RealtimeNotificationTypes["InProgressNotification"] = 3] = "InProgressNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["FreshDataNotification"] = 4] = "FreshDataNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["ServerErrorNotification"] = 5] = "ServerErrorNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["TableHasChanged"] = 6] = "TableHasChanged";
    RealtimeNotificationTypes[RealtimeNotificationTypes["UpdatingRecords"] = 7] = "UpdatingRecords";
    RealtimeNotificationTypes[RealtimeNotificationTypes["RecordsWereChanged"] = 8] = "RecordsWereChanged";
    RealtimeNotificationTypes[RealtimeNotificationTypes["SomeChangesWerentCalc"] = 9] = "SomeChangesWerentCalc";
})(RealtimeNotificationTypes = exports.RealtimeNotificationTypes || (exports.RealtimeNotificationTypes = {}));
var ForecastPageMode;
(function (ForecastPageMode) {
    ForecastPageMode[ForecastPageMode["FIGrid"] = 0] = "FIGrid";
    ForecastPageMode[ForecastPageMode["DealFlow"] = 1] = "DealFlow";
    ForecastPageMode[ForecastPageMode["ForecastCharts"] = 2] = "ForecastCharts";
})(ForecastPageMode = exports.ForecastPageMode || (exports.ForecastPageMode = {}));
var NotificationMessageType;
(function (NotificationMessageType) {
    NotificationMessageType[NotificationMessageType["INFORMATION"] = 0] = "INFORMATION";
    NotificationMessageType[NotificationMessageType["WARNING"] = 1] = "WARNING";
    NotificationMessageType[NotificationMessageType["ERROR"] = 2] = "ERROR";
})(NotificationMessageType = exports.NotificationMessageType || (exports.NotificationMessageType = {}));
var FiGridColumnType;
(function (FiGridColumnType) {
    FiGridColumnType[FiGridColumnType["Hierarchial"] = 0] = "Hierarchial";
    FiGridColumnType[FiGridColumnType["Editable"] = 1] = "Editable";
    FiGridColumnType[FiGridColumnType["Readonly"] = 2] = "Readonly";
})(FiGridColumnType = exports.FiGridColumnType || (exports.FiGridColumnType = {}));
var AdjustmentType;
(function (AdjustmentType) {
    AdjustmentType[AdjustmentType["Direct"] = 0] = "Direct";
    AdjustmentType[AdjustmentType["Indirect"] = 1] = "Indirect";
    AdjustmentType[AdjustmentType["Calculated"] = 2] = "Calculated";
})(AdjustmentType = exports.AdjustmentType || (exports.AdjustmentType = {}));
var DialogType;
(function (DialogType) {
    DialogType[DialogType["History"] = 0] = "History";
    DialogType[DialogType["Edit"] = 1] = "Edit";
})(DialogType = exports.DialogType || (exports.DialogType = {}));
var ILogLevel;
(function (ILogLevel) {
    ILogLevel[ILogLevel["Debug"] = 0] = "Debug";
    ILogLevel[ILogLevel["Info"] = 1] = "Info";
    ILogLevel[ILogLevel["Warning"] = 2] = "Warning";
    ILogLevel[ILogLevel["Usage"] = 3] = "Usage";
    ILogLevel[ILogLevel["Error"] = 4] = "Error";
})(ILogLevel = exports.ILogLevel || (exports.ILogLevel = {}));
var Status;
(function (Status) {
    Status[Status["Init"] = 0] = "Init";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Success"] = 2] = "Success";
    Status[Status["Error"] = 3] = "Error";
})(Status = exports.Status || (exports.Status = {}));
;
var ForecastingSurveyType;
(function (ForecastingSurveyType) {
    ForecastingSurveyType[ForecastingSurveyType["ForecastingGrid"] = 0] = "ForecastingGrid";
    ForecastingSurveyType[ForecastingSurveyType["DealFlow"] = 1] = "DealFlow";
    ForecastingSurveyType[ForecastingSurveyType["Predictive"] = 2] = "Predictive";
})(ForecastingSurveyType = exports.ForecastingSurveyType || (exports.ForecastingSurveyType = {}));
var ForecastingSurveyApiRequestType;
(function (ForecastingSurveyApiRequestType) {
    ForecastingSurveyApiRequestType[ForecastingSurveyApiRequestType["ValidateEligibility"] = 0] = "ValidateEligibility";
    ForecastingSurveyApiRequestType[ForecastingSurveyApiRequestType["TriggerEvent"] = 1] = "TriggerEvent";
    ForecastingSurveyApiRequestType[ForecastingSurveyApiRequestType["TriggerEventAndValidateEligibility"] = 2] = "TriggerEventAndValidateEligibility";
})(ForecastingSurveyApiRequestType = exports.ForecastingSurveyApiRequestType || (exports.ForecastingSurveyApiRequestType = {}));
exports.RECOMPUTE_COMPLETE_STATUSCODE = 30;
exports.RECOMPUTE_INPROGRESS_STATUSCODE = 10;
exports.FORCERECOMPUTE_FAILURE_MESSAGE = "ForceRecompute_Failure_Message";
exports.PAGE_SIZE = 50;
exports.DEALFLOW_PAGE_SIZE = 25;
var ForecastInstanceColumnGroupType;
(function (ForecastInstanceColumnGroupType) {
    ForecastInstanceColumnGroupType[ForecastInstanceColumnGroupType["None"] = 0] = "None";
    ForecastInstanceColumnGroupType[ForecastInstanceColumnGroupType["Aggregated"] = 10] = "Aggregated";
    ForecastInstanceColumnGroupType[ForecastInstanceColumnGroupType["RolledUp"] = 20] = "RolledUp";
})(ForecastInstanceColumnGroupType = exports.ForecastInstanceColumnGroupType || (exports.ForecastInstanceColumnGroupType = {}));
exports.EMPTY_GUID = "00000000-0000-0000-0000-000000000000";


/***/ }),

/***/ "./src/Interface/logging.ts":
/*!**********************************!*\
  !*** ./src/Interface/logging.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ILogLevel;
(function (ILogLevel) {
    ILogLevel[ILogLevel["Debug"] = 0] = "Debug";
    ILogLevel[ILogLevel["Info"] = 1] = "Info";
    ILogLevel[ILogLevel["Warning"] = 2] = "Warning";
    ILogLevel[ILogLevel["Usage"] = 3] = "Usage";
    ILogLevel[ILogLevel["Error"] = 4] = "Error";
})(ILogLevel = exports.ILogLevel || (exports.ILogLevel = {}));


/***/ }),

/***/ "./src/Interface/sharedEnums.ts":
/*!**************************************!*\
  !*** ./src/Interface/sharedEnums.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RealtimeNotificationTypes;
(function (RealtimeNotificationTypes) {
    RealtimeNotificationTypes[RealtimeNotificationTypes["None"] = 1] = "None";
    RealtimeNotificationTypes[RealtimeNotificationTypes["Initial"] = 2] = "Initial";
    RealtimeNotificationTypes[RealtimeNotificationTypes["InProgressNotification"] = 3] = "InProgressNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["FreshDataNotification"] = 4] = "FreshDataNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["ServerErrorNotification"] = 5] = "ServerErrorNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["TableHasChanged"] = 6] = "TableHasChanged";
    RealtimeNotificationTypes[RealtimeNotificationTypes["UpdatingRecords"] = 7] = "UpdatingRecords";
    RealtimeNotificationTypes[RealtimeNotificationTypes["RecordsWereChanged"] = 8] = "RecordsWereChanged";
    RealtimeNotificationTypes[RealtimeNotificationTypes["SomeChangesWerentCalc"] = 9] = "SomeChangesWerentCalc";
})(RealtimeNotificationTypes = exports.RealtimeNotificationTypes || (exports.RealtimeNotificationTypes = {}));
exports.RECOMPUTE_COMPLETE_STATUSCODE = 30;
exports.RECOMPUTE_INPROGRESS_STATUSCODE = 10;
var NotificationMessageType;
(function (NotificationMessageType) {
    NotificationMessageType[NotificationMessageType["INFORMATION"] = 0] = "INFORMATION";
    NotificationMessageType[NotificationMessageType["WARNING"] = 1] = "WARNING";
    NotificationMessageType[NotificationMessageType["ERROR"] = 2] = "ERROR";
})(NotificationMessageType = exports.NotificationMessageType || (exports.NotificationMessageType = {}));
exports.FORCERECOMPUTE_FAILURE_MESSAGE = "ForceRecompute_Failure_Message";
exports.MA_REQUEST_FAILED = "MARequestFailed";
exports.MA_INDIRECT_VALUE_HOVERTEXT = "MAIndirectValueHoverText";
exports.MA_DIRECT_VALUE_HOVERTEXT = "MADirectValueHoverText";
exports.PREDICTION_STATE_INPROGRESS_MESSAGE = "PredictionState_Inprogress_Message";
exports.PREDICTION_STATE_LAST_PREDICTED_MESSAGE = "PredictionState_LastPredictedOn_Message";
exports.PREDICTION_STATE_FAILED_MESSAGE = "PredictionState_Failed_Message";
exports.CURRENTRECURRENCE = "CurrentRecurrence";
exports.APPENDWITHSPACE = "AppendWithSpace";
var ForecastColumnType;
(function (ForecastColumnType) {
    ForecastColumnType[ForecastColumnType["Rollup"] = 0] = "Rollup";
    ForecastColumnType[ForecastColumnType["Calculated"] = 1] = "Calculated";
    ForecastColumnType[ForecastColumnType["Simple"] = 2] = "Simple";
    ForecastColumnType[ForecastColumnType["Predictive"] = 3] = "Predictive";
    ForecastColumnType[ForecastColumnType["HierarchyPrimary"] = 4] = "HierarchyPrimary";
    ForecastColumnType[ForecastColumnType["HierarchySecondary"] = 5] = "HierarchySecondary";
})(ForecastColumnType = exports.ForecastColumnType || (exports.ForecastColumnType = {}));
var FiGridColumnType;
(function (FiGridColumnType) {
    FiGridColumnType[FiGridColumnType["Hierarchial"] = 0] = "Hierarchial";
    FiGridColumnType[FiGridColumnType["Editable"] = 1] = "Editable";
    FiGridColumnType[FiGridColumnType["Readonly"] = 2] = "Readonly";
})(FiGridColumnType = exports.FiGridColumnType || (exports.FiGridColumnType = {}));
exports.PAGE_SIZE = 50;
exports.DEALFLOW_PAGE_SIZE = 25;
var ForecastInstanceColumnGroupType;
(function (ForecastInstanceColumnGroupType) {
    ForecastInstanceColumnGroupType[ForecastInstanceColumnGroupType["None"] = 0] = "None";
    ForecastInstanceColumnGroupType[ForecastInstanceColumnGroupType["Aggregated"] = 10] = "Aggregated";
    ForecastInstanceColumnGroupType[ForecastInstanceColumnGroupType["RolledUp"] = 20] = "RolledUp";
})(ForecastInstanceColumnGroupType = exports.ForecastInstanceColumnGroupType || (exports.ForecastInstanceColumnGroupType = {}));
var SnapshotFeatureId;
(function (SnapshotFeatureId) {
    SnapshotFeatureId[SnapshotFeatureId["FORECASTING_FEATURE_ID"] = 1] = "FORECASTING_FEATURE_ID";
    SnapshotFeatureId[SnapshotFeatureId["DEALFLOW_ANALYSIS_ID"] = 2] = "DEALFLOW_ANALYSIS_ID";
})(SnapshotFeatureId = exports.SnapshotFeatureId || (exports.SnapshotFeatureId = {}));
exports.EMPTY_GUID = "00000000-0000-0000-0000-000000000000";


/***/ }),

/***/ "./src/StateManager/baseStateManager.ts":
/*!**********************************************!*\
  !*** ./src/StateManager/baseStateManager.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialState_1 = __webpack_require__(/*! ./initialState */ "./src/StateManager/initialState.ts");
var BaseStateManager = (function () {
    function BaseStateManager(onReRender, all) {
        this.onReRender = onReRender;
        this.all = all;
        this.state = initialState_1.InitialAppState;
    }
    BaseStateManager.prototype.reRender = function () {
        this.onReRender();
    };
    BaseStateManager.prototype.getState = function () {
        return this.state;
    };
    BaseStateManager.prototype.setState = function (newState) {
        this.state = __assign(__assign({}, this.state), newState);
        this.reRender();
    };
    return BaseStateManager;
}());
exports.BaseStateManager = BaseStateManager;


/***/ }),

/***/ "./src/StateManager/fcChartsStateManager.ts":
/*!**************************************************!*\
  !*** ./src/StateManager/fcChartsStateManager.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseStateManager_1 = __webpack_require__(/*! ./baseStateManager */ "./src/StateManager/baseStateManager.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var FCChartsStateManager = (function (_super) {
    __extends(FCChartsStateManager, _super);
    function FCChartsStateManager(onReRender, all) {
        var _this = _super.call(this, onReRender, all) || this;
        _this.all = all;
        _this.isCumulativeChartLoading = true;
        _this.isWaterfallChartLoading = true;
        _this.cumulativeTrendChartData = {};
        _this.waterFallChartData = {};
        _this.isWaterFallChartPanelOpened = false;
        _this.expandedChartType = forecastPageTypes_1.FCChartType.TrendChart;
        _this.forecastChartType = forecastPageTypes_1.ChartType.Column;
        _this.compositeChartRequestId = new Date().getTime();
        _this.predictionStatusForFC = {};
        _this.siLicenseStatus = {};
        return _this;
    }
    FCChartsStateManager.prototype.resetChartData = function () {
        this.isWaterFallChartPanelOpened = false;
        this.isCumulativeChartLoading = true;
        this.isWaterfallChartLoading = true;
        this.cumulativeTrendChartData = {};
        this.waterFallChartData = {};
        this.siLicenseStatus = {};
    };
    FCChartsStateManager.prototype.setIsCumulativeChartLoading = function (arg0) {
        this.isCumulativeChartLoading = arg0;
        this.reRender();
    };
    FCChartsStateManager.prototype.getIsCumulativeChartLoading = function () {
        return this.isCumulativeChartLoading;
    };
    FCChartsStateManager.prototype.setIsWaterfallChartLoading = function (arg0) {
        this.isWaterfallChartLoading = arg0;
        this.reRender();
    };
    FCChartsStateManager.prototype.getIsWaterfallChartLoading = function () {
        return this.isWaterfallChartLoading;
    };
    FCChartsStateManager.prototype.setCummulativeTrendChartData = function (chartData) {
        this.cumulativeTrendChartData = chartData;
        this.setIsCumulativeChartLoading(false);
    };
    FCChartsStateManager.prototype.getCummulativeTrendChartData = function () {
        return this.cumulativeTrendChartData;
    };
    FCChartsStateManager.prototype.setWaterFallTrendChartData = function (chartData) {
        this.waterFallChartData = chartData;
        this.setIsWaterfallChartLoading(false);
    };
    FCChartsStateManager.prototype.setPredictionStatusForFC = function (predictionStatus) {
        this.predictionStatusForFC = predictionStatus;
        this.reRender();
    };
    FCChartsStateManager.prototype.setSILicenseStatusForOrg = function (siLicenseStatus) {
        this.siLicenseStatus = siLicenseStatus;
    };
    FCChartsStateManager.prototype.getSILicenseStatusForOrg = function () {
        return this.siLicenseStatus;
    };
    FCChartsStateManager.prototype.getPredictionStatusForFC = function () {
        return this.predictionStatusForFC;
    };
    FCChartsStateManager.prototype.getWaterFallTrendChartData = function () {
        return this.waterFallChartData;
    };
    FCChartsStateManager.prototype.setIsWaterFallPanelOpen = function (arg0) {
        this.isWaterFallChartPanelOpened = arg0;
        this.reRender();
    };
    FCChartsStateManager.prototype.IsWaterFallPanelOpen = function () {
        return this.isWaterFallChartPanelOpened;
    };
    FCChartsStateManager.prototype.getExpandedChartType = function () {
        return this.expandedChartType;
    };
    FCChartsStateManager.prototype.setExpandedChartTpe = function (chartType) {
        this.expandedChartType = chartType;
        this.reRender();
    };
    FCChartsStateManager.prototype.getForecastChartType = function () {
        return this.forecastChartType;
    };
    FCChartsStateManager.prototype.setForecastChartTpe = function (chartType) {
        this.forecastChartType = chartType;
        this.reRender();
    };
    FCChartsStateManager.prototype.getCompositeChartRequestId = function () {
        return this.compositeChartRequestId;
    };
    FCChartsStateManager.prototype.setCompositeChartRequestId = function (arg0) {
        this.compositeChartRequestId = arg0;
    };
    return FCChartsStateManager;
}(baseStateManager_1.BaseStateManager));
exports.FCChartsStateManager = FCChartsStateManager;


/***/ }),

/***/ "./src/StateManager/fcFrStateManager.ts":
/*!**********************************************!*\
  !*** ./src/StateManager/fcFrStateManager.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseStateManager_1 = __webpack_require__(/*! ./baseStateManager */ "./src/StateManager/baseStateManager.ts");
var FcFrStateManager = (function (_super) {
    __extends(FcFrStateManager, _super);
    function FcFrStateManager(onReRender, all) {
        var _this = _super.call(this, onReRender, all) || this;
        _this.all = all;
        _this.forecastConfigurations = { byId: {}, allIds: [] };
        _this.activeFrId = "";
        _this.activeFcId = "";
        return _this;
    }
    FcFrStateManager.prototype.updateFcList = function (fcs) {
        var _this = this;
        this.forecastConfigurations = __assign({}, this.forecastConfigurations);
        fcs.map(function (fc) {
            _this.forecastConfigurations.byId[fc.id] = fc;
            _this.forecastConfigurations.allIds.push(fc.id);
        });
        this.reRender();
    };
    FcFrStateManager.prototype.getFcList = function () {
        var _this = this;
        return this.forecastConfigurations.allIds.map(function (id) { return _this.forecastConfigurations.byId[id]; });
    };
    FcFrStateManager.prototype.getFrList = function () {
        var activeFc = this.getActiveFc();
        if (!activeFc)
            return [];
        return activeFc.recurrences;
    };
    FcFrStateManager.prototype.updateActiveFcId = function (id) {
        this.activeFcId = id;
        this.reRender();
    };
    FcFrStateManager.prototype.updateActiveFrId = function (id) {
        this.activeFrId = id;
        this.reRender();
    };
    FcFrStateManager.prototype.getActiveFcId = function () {
        return this.activeFcId;
    };
    FcFrStateManager.prototype.getActiveFrId = function () {
        return this.activeFrId;
    };
    FcFrStateManager.prototype.updateFr = function (fr) {
        var _a;
        var fc = this.getActiveFc();
        var frs = fc.recurrences;
        var index = fc.recurrences.findIndex(function (f) { return (f.id === fr.id); });
        if (index >= 0) {
            frs = JSON.parse(JSON.stringify(fc.recurrences));
            frs[index] = fr;
        }
        else {
            frs = fc.recurrences.filter(function (frr) { return frr.id != fr.id; });
            frs.push(fr);
        }
        var newFc = __assign(__assign({}, fc), { recurrences: frs });
        this.forecastConfigurations = __assign(__assign({}, this.forecastConfigurations), { byId: __assign(__assign({}, this.forecastConfigurations.byId), (_a = {}, _a[fc.id] = newFc, _a)) });
        this.reRender();
    };
    FcFrStateManager.prototype.getActiveFc = function () {
        var fcId = this.getActiveFcId();
        return this.forecastConfigurations.byId[fcId];
    };
    FcFrStateManager.prototype.getActiveHierarchyLinkedAttributeName = function () {
        var fc = this.getActiveFc();
        return getActiveHierarchyLinkedAttributeNameFromFC(fc);
    };
    return FcFrStateManager;
}(baseStateManager_1.BaseStateManager));
exports.FcFrStateManager = FcFrStateManager;
function getActiveHierarchyLinkedAttributeNameFromFC(fc) {
    return fc.hierarchyRelationship && fc.hierarchyRelationship.Relationship ? fc.hierarchyRelationship.Relationship.RelatedFrom : "";
}
exports.getActiveHierarchyLinkedAttributeNameFromFC = getActiveHierarchyLinkedAttributeNameFromFC;


/***/ }),

/***/ "./src/StateManager/fiGridStateManager.ts":
/*!************************************************!*\
  !*** ./src/StateManager/fiGridStateManager.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var stringUtility_1 = __webpack_require__(/*! ../Utility/stringUtility */ "./src/Utility/stringUtility.ts");
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
var baseStateManager_1 = __webpack_require__(/*! ./baseStateManager */ "./src/StateManager/baseStateManager.ts");
var types_1 = __webpack_require__(/*! ../ForecastPageUiApi/fiGridApi/types */ "./src/ForecastPageUiApi/fiGridApi/types.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var FiGridStateManager = (function (_super) {
    __extends(FiGridStateManager, _super);
    function FiGridStateManager(onReRender, all) {
        var _this = _super.call(this, onReRender, all) || this;
        _this.all = all;
        _this.selectedCell = types_1.NULL_CELLINFO;
        _this.focusedCell = types_1.NULL_CELLINFO;
        _this.isFetchingDict = {};
        _this.pageInfoDict = {};
        _this.isGridLoading = false;
        _this.highlightCells = [];
        _this.calloutCellId = types_1.NULL_CELLINFO;
        _this.loadingCellId = types_1.NULL_CELLINFO;
        _this.calloutDialogType = forecastPageTypes_1.DialogType.Edit;
        _this.cellIdWithError = { cellId: types_1.NULL_CELLINFO, errorMessage: "" };
        _this.newlyAdjustedValue = "";
        _this.isHistoryLoading = false;
        _this.cellHistory = [];
        _this.FiFetchErrorMessage = undefined;
        return _this;
    }
    FiGridStateManager.prototype.setSelectedCell = function (selectedCell) {
        this.selectedCell = selectedCell;
        this.reRender();
    };
    FiGridStateManager.prototype.getSelectedCell = function () {
        return this.selectedCell;
    };
    FiGridStateManager.prototype.setFocusedCell = function (cell) {
        this.focusedCell = cell;
        this.reRender();
    };
    FiGridStateManager.prototype.getFocusedCell = function () {
        return this.focusedCell;
    };
    FiGridStateManager.prototype.updateFIList = function (frId, forecastInstances, clearExisting) {
        var _a;
        var curState = this.getState().fiGrid;
        var fiListState = this.createFiListState(forecastInstances, curState.fiListByFr[frId], clearExisting);
        var fiListByFr = __assign(__assign({}, curState.fiListByFr), (_a = {}, _a[frId] = fiListState, _a));
        var fiGrid = __assign(__assign({}, curState), { fiListByFr: fiListByFr });
        this.setState({ fiGrid: fiGrid });
    };
    FiGridStateManager.prototype.createFiListState = function (forecastInstances, curState, clearExisting) {
        var byId = curState && !clearExisting ? __assign({}, curState.byId) : {};
        var allIds = curState && !clearExisting ? __spreadArrays(curState.allIds) : [];
        var childrenDict = curState && !clearExisting ? __assign({}, curState.childrenDict) : {};
        forecastInstances.map(function (fi) {
            var id = stringUtility_1.normalizeGuid(fi.id);
            var parId = stringUtility_1.normalizeGuid(fi.parentId);
            byId[id] = __assign(__assign({}, fi), { id: id, parentId: parId });
            if (allIds.indexOf(id) == -1)
                allIds.push(id);
            if (!childrenDict[parId])
                childrenDict[parId] = [];
            if (childrenDict[parId].indexOf(id) == -1)
                childrenDict[parId].push(id);
        });
        return {
            byId: byId,
            allIds: allIds,
            childrenDict: childrenDict
        };
    };
    FiGridStateManager.prototype.updateOnExpandDict = function (rowId) {
        var isExpand = this.getState().fiGrid.expandedRows[rowId];
        var newExpand = isExpand ? false : true;
        this.updateOnExpandDictToValue(rowId, newExpand);
    };
    FiGridStateManager.prototype.updateOnExpandDictToValue = function (rowId, isExpand) {
        var _a;
        var fiGrid = __assign(__assign({}, this.getState().fiGrid), { expandedRows: __assign(__assign({}, this.getState().fiGrid.expandedRows), (_a = {}, _a[rowId] = isExpand, _a)) });
        this.setState({ fiGrid: fiGrid });
    };
    FiGridStateManager.prototype.fiChildrenAlreadyFetchedForParent = function (rowId) {
        var frId = this.all.fcFr.getActiveFrId();
        var gridState = this.getState().fiGrid.fiListByFr[frId];
        if (!gridState)
            return false;
        var childList = gridState.childrenDict[rowId];
        return childList && childList.length > 0;
    };
    FiGridStateManager.prototype.clearFiListForFR = function (newId) {
        this.updateFIList(newId, [], true);
    };
    FiGridStateManager.prototype.isChildFiDataBeingFetchForParent = function (rowId) {
        return this.isFetchingDict[rowId];
    };
    FiGridStateManager.prototype.updateIsChildDataFetchingStatus = function (rowId, isFetching) {
        this.isFetchingDict[rowId] = isFetching;
        this.reRender();
    };
    FiGridStateManager.prototype.resetChildRecordsFetchStatusDict = function () {
        this.isFetchingDict = {};
    };
    FiGridStateManager.prototype.updateFIPageInfo = function (rowId, pageNo, hasMoreChildren) {
        this.pageInfoDict[rowId] = { pageNo: pageNo, hasMoreChildren: hasMoreChildren };
    };
    FiGridStateManager.prototype.getFIPageInfoDict = function () {
        return this.pageInfoDict;
    };
    FiGridStateManager.prototype.resetPageInfoDict = function () {
        this.pageInfoDict = {};
    };
    FiGridStateManager.prototype.setIsFiGridLoading = function (arg0) {
        this.isGridLoading = arg0;
        this.reRender();
    };
    FiGridStateManager.prototype.getIsFiGridLoading = function () {
        return this.isGridLoading;
    };
    FiGridStateManager.prototype.getChangedCells = function () {
        return this.highlightCells;
    };
    FiGridStateManager.prototype.recordChangedCells = function (frId, newFiList) {
        var curState = this.getState().fiGrid;
        var byId = curState.fiListByFr[frId].byId;
        var cells = [];
        newFiList.map(function (newFi) {
            var id = stringUtility_1.normalizeGuid(newFi.id);
            var fi = byId[id];
            if (!fi) {
                return;
            }
            Object.keys(fi.AggregateColumnData).map(function (cid) {
                if (newFi.AggregateColumnData[cid] && fi.AggregateColumnData[cid]) {
                    if (newFi.AggregateColumnData[cid].rawValue != fi.AggregateColumnData[cid].rawValue || newFi.AggregateColumnData[cid].originalValue != fi.AggregateColumnData[cid].originalValue) {
                        cells.push({ rowId: id, colId: cid, isAgg: true });
                    }
                }
                if (fi.RollUpColumnData && newFi.RollUpColumnData && newFi.RollUpColumnData[cid] && fi.RollUpColumnData[cid]) {
                    if (newFi.RollUpColumnData[cid].rawValue != fi.RollUpColumnData[cid].rawValue || newFi.RollUpColumnData[cid].originalValue != fi.RollUpColumnData[cid].originalValue) {
                        cells.push({ rowId: id, colId: cid, isAgg: false });
                    }
                }
            });
        });
        this.highlightCells = __spreadArrays(cells);
        this.reRender();
    };
    FiGridStateManager.prototype.clearChangedCells = function (newFiList) {
        this.highlightCells = this.highlightCells.filter(function (c) {
            return !newFiList.find(function (f) { return f.id == c.rowId; });
        });
        this.reRender();
    };
    FiGridStateManager.prototype.updateFIRollupData = function (frId, newFiList, updateHistoryFlags) {
        var _a;
        var _this = this;
        if (updateHistoryFlags === void 0) { updateHistoryFlags = true; }
        var curState = this.getState().fiGrid;
        var newById = __assign({}, curState.fiListByFr[frId].byId);
        newFiList.map(function (newFi) {
            var _a, _b;
            var id = stringUtility_1.normalizeGuid(newFi.id);
            if (!newById[id])
                return;
            var newMergedAggData;
            var newMergedRollUpData;
            var colDefDataMap = {};
            _this.all.fcFr.getActiveFc().gridMetadata.columnDefinitions
                .filter(function (i) { return i.forecastColumnType == __1.ForecastColumnType.HierarchyPrimary || i.forecastColumnType == __1.ForecastColumnType.HierarchySecondary; })
                .forEach(function (colDef) {
                colDefDataMap[colDef.id] = true;
            });
            if (updateHistoryFlags) {
                newMergedAggData = _this._getHierarchyColumnsDataFromPrevious(newById[id].AggregateColumnData, newFi.AggregateColumnData, colDefDataMap);
                newMergedRollUpData = _this._getHierarchyColumnsDataFromPrevious(newById[id].RollUpColumnData, newFi.RollUpColumnData, colDefDataMap);
            }
            else {
                newMergedAggData = _this._getUpdatedDataWithHistoryFlags(newById[id].AggregateColumnData, newFi.AggregateColumnData);
                newMergedRollUpData = _this._getUpdatedDataWithHistoryFlags(newById[id].RollUpColumnData, newFi.RollUpColumnData);
                newMergedAggData = _this._getHierarchyColumnsDataFromPrevious(newById[id].AggregateColumnData, newMergedAggData, colDefDataMap);
                newMergedRollUpData = _this._getHierarchyColumnsDataFromPrevious(newById[id].RollUpColumnData, newMergedRollUpData, colDefDataMap);
            }
            newById = __assign(__assign({}, newById), (_a = {}, _a[id] = __assign(__assign({}, newById[id]), { RollUpColumnData: newMergedRollUpData }), _a));
            newById = __assign(__assign({}, newById), (_b = {}, _b[id] = __assign(__assign({}, newById[id]), { AggregateColumnData: newMergedAggData }), _b));
        });
        var fiListByFr = __assign(__assign({}, curState.fiListByFr), (_a = {}, _a[frId] = __assign(__assign({}, curState.fiListByFr[frId]), { byId: newById }), _a));
        var fiGrid = __assign(__assign({}, curState), { fiListByFr: fiListByFr });
        this.setState({ fiGrid: fiGrid });
    };
    FiGridStateManager.prototype._getUpdatedDataWithHistoryFlags = function (stateRollupData, newRollupData) {
        if (!newRollupData)
            return newRollupData;
        Object.keys(newRollupData).map(function (colIdData) {
            newRollupData[colIdData] = __assign(__assign({}, newRollupData[colIdData]), { isEditable: stateRollupData[colIdData].isEditable, showHistory: stateRollupData[colIdData].showHistory });
        });
        return newRollupData;
    };
    FiGridStateManager.prototype._getHierarchyColumnsDataFromPrevious = function (stateColumnData, newColumnData, colDefDataMap) {
        if (!newColumnData) {
            return newColumnData;
        }
        Object.keys(newColumnData).map(function (colId) {
            if (colDefDataMap[colId]) {
                newColumnData[colId] = stateColumnData[colId];
            }
        });
        return newColumnData;
    };
    FiGridStateManager.prototype.clearExpandedDict = function () {
        var fiGrid = __assign(__assign({}, this.getState().fiGrid), { expandedRows: {} });
        this.setState({ fiGrid: fiGrid });
    };
    FiGridStateManager.prototype.getQuotaColumnIdForCurrentFC = function () {
        var fc = this.all.fcFr.getActiveFc();
        var col = fc.gridMetadata.columnDefinitions.find(function (c) { return c.uniqueName === "quota"; });
        if (!col)
            return "";
        else
            return col.id;
    };
    FiGridStateManager.prototype.setCalloutCell = function (calloutCellId) {
        this.calloutCellId = calloutCellId;
        this.reRender();
    };
    FiGridStateManager.prototype.getCalloutCell = function () {
        return this.calloutCellId;
    };
    FiGridStateManager.prototype.setLoadingCell = function (loadingCellId) {
        this.loadingCellId = loadingCellId;
        this.reRender();
    };
    FiGridStateManager.prototype.getLoadingCell = function () {
        return this.loadingCellId;
    };
    FiGridStateManager.prototype.setCalloutDialogType = function (type) {
        this.calloutDialogType = type;
    };
    FiGridStateManager.prototype.getCalloutDialogType = function () {
        return this.calloutDialogType;
    };
    FiGridStateManager.prototype.setCellWithError = function (input) {
        this.cellIdWithError = { cellId: input.cellId, errorMessage: input.errorMessage };
        this.reRender();
    };
    FiGridStateManager.prototype.getCellWithError = function () {
        return this.cellIdWithError;
    };
    FiGridStateManager.prototype.setAdjustedValue = function (value) {
        this.newlyAdjustedValue = (value == null) ? "" : value;
        this.reRender();
    };
    FiGridStateManager.prototype.getAdjustedValue = function () {
        return this.newlyAdjustedValue;
    };
    FiGridStateManager.prototype.setIsHistoryLoading = function (state) {
        this.isHistoryLoading = state;
        this.reRender();
    };
    FiGridStateManager.prototype.getIsHistoryLoading = function () {
        return this.isHistoryLoading;
    };
    FiGridStateManager.prototype.updateHistoryData = function (data) {
        this.cellHistory = data;
        this.reRender();
    };
    FiGridStateManager.prototype.getHistoryData = function () {
        return this.cellHistory;
    };
    FiGridStateManager.prototype.setFiFetchErrorMessage = function (arg0) {
        this.FiFetchErrorMessage = arg0;
        this.reRender();
    };
    FiGridStateManager.prototype.getFiFetchErrorMessage = function () {
        return this.FiFetchErrorMessage;
    };
    return FiGridStateManager;
}(baseStateManager_1.BaseStateManager));
exports.FiGridStateManager = FiGridStateManager;


/***/ }),

/***/ "./src/StateManager/globalStateManager.ts":
/*!************************************************!*\
  !*** ./src/StateManager/globalStateManager.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseStateManager_1 = __webpack_require__(/*! ./baseStateManager */ "./src/StateManager/baseStateManager.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var GlobalStateManager = (function (_super) {
    __extends(GlobalStateManager, _super);
    function GlobalStateManager(onReRender, all) {
        var _this = _super.call(this, onReRender, all) || this;
        _this.all = all;
        _this.baseCurrencySymbol = "";
        _this.forecastPageMode = forecastPageTypes_1.ForecastPageMode.FIGrid;
        _this.insightsFeaturesVisible = false;
        _this.isSIPackageInstalled = false;
        _this.manualForecastFeatureEnabled = true;
        _this.predictiveForecastFeatureEnabled = false;
        _this.snapshotFeatureEnabled = false;
        _this.isGridPageLoading = true;
        return _this;
    }
    GlobalStateManager.prototype.updateBaseCurrencySymbol = function (curSymbol) {
        this.baseCurrencySymbol = curSymbol;
        this.reRender();
    };
    GlobalStateManager.prototype.getBaseCurrencySymbol = function () {
        return this.baseCurrencySymbol;
    };
    GlobalStateManager.prototype.setIsFullPageLoading = function (arg0) {
        this.isGridPageLoading = arg0;
        this.reRender();
    };
    GlobalStateManager.prototype.getIsFullPageLoading = function () {
        return this.isGridPageLoading;
    };
    GlobalStateManager.prototype.getForecastPageMode = function () {
        return this.forecastPageMode;
    };
    GlobalStateManager.prototype.setForecastPageMode = function (arg0) {
        this.forecastPageMode = arg0;
        this.reRender();
    };
    GlobalStateManager.prototype.getInsightsFeaturesVisibile = function () {
        return this.insightsFeaturesVisible;
    };
    GlobalStateManager.prototype.setInsightsFeaturesVisibility = function (arg0) {
        this.insightsFeaturesVisible = arg0;
        this.reRender();
    };
    GlobalStateManager.prototype.getIsSIPackageInstalled = function () {
        return this.isSIPackageInstalled;
    };
    GlobalStateManager.prototype.setIsSIPackageInstalled = function (arg) {
        this.isSIPackageInstalled = arg;
        this.reRender();
    };
    GlobalStateManager.prototype.getManualForecastFeatureEnabled = function () {
        return this.manualForecastFeatureEnabled;
    };
    GlobalStateManager.prototype.setManualForecastFeatureEnabled = function (arg0) {
        this.manualForecastFeatureEnabled = arg0;
        this.reRender();
    };
    GlobalStateManager.prototype.getPredictiveForecastFeatureEnabled = function () {
        return this.predictiveForecastFeatureEnabled;
    };
    GlobalStateManager.prototype.setPredictiveForecastFeatureEnabled = function (arg0) {
        this.predictiveForecastFeatureEnabled = arg0;
        this.reRender();
    };
    GlobalStateManager.prototype.getSnapshotFeatureEnabled = function () {
        return this.snapshotFeatureEnabled;
    };
    GlobalStateManager.prototype.setSnapshotFeatureEnabled = function (arg0) {
        this.snapshotFeatureEnabled = arg0;
        this.reRender();
    };
    return GlobalStateManager;
}(baseStateManager_1.BaseStateManager));
exports.GlobalStateManager = GlobalStateManager;


/***/ }),

/***/ "./src/StateManager/initialState.ts":
/*!******************************************!*\
  !*** ./src/StateManager/initialState.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
exports.InitialAppState = {
    orgSettings: {
        baseCurrencySymbol: ""
    },
    ribbon: {
        ribbonConfiguration: sharedEnums_1.RealtimeNotificationTypes.None
    },
    messageBarNotificationState: {
        notificationObj: null
    },
    fiGrid: {
        gridRefreshCounter: 0,
        fiListByFr: {},
        expandedRows: {}
    },
};


/***/ }),

/***/ "./src/StateManager/nrtStateManager.ts":
/*!*********************************************!*\
  !*** ./src/StateManager/nrtStateManager.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseStateManager_1 = __webpack_require__(/*! ./baseStateManager */ "./src/StateManager/baseStateManager.ts");
var NrtStateManager = (function (_super) {
    __extends(NrtStateManager, _super);
    function NrtStateManager(onReRender, all) {
        var _this = _super.call(this, onReRender, all) || this;
        _this.all = all;
        return _this;
    }
    NrtStateManager.prototype.getRibbonConfig = function () {
        return this.getState().ribbon.ribbonConfiguration;
    };
    NrtStateManager.prototype.setRibbonConfig = function (config) {
        var ribbon = __assign(__assign({}, this.getState().ribbon), { ribbonConfiguration: config });
        this.setState({ ribbon: ribbon });
    };
    NrtStateManager.prototype.setMessageBarNotification = function (notifObj) {
        var messageBarNotificationState = __assign(__assign({}, this.getState().messageBarNotificationState), { notificationObj: notifObj });
        this.setState({ messageBarNotificationState: messageBarNotificationState });
    };
    return NrtStateManager;
}(baseStateManager_1.BaseStateManager));
exports.NrtStateManager = NrtStateManager;


/***/ }),

/***/ "./src/StateManager/partRecordStateManager.ts":
/*!****************************************************!*\
  !*** ./src/StateManager/partRecordStateManager.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseStateManager_1 = __webpack_require__(/*! ./baseStateManager */ "./src/StateManager/baseStateManager.ts");
var PartRecordStateManager = (function (_super) {
    __extends(PartRecordStateManager, _super);
    function PartRecordStateManager(onReRender, all) {
        var _this = _super.call(this, onReRender, all) || this;
        _this.all = all;
        _this.fetchXmlDict = {};
        _this.fetchXmlResp = { EntityName: "", ForecastConfigurationColumns: [] };
        _this.IsExpanded = false;
        _this.IsDealFlowViewerExpanded = false;
        _this.IsOpened = false;
        _this.IsKanbanMode = false;
        _this.IsDealFlowModeViewer = false;
        _this.IsPartRecFetchXmlLoaded = false;
        _this.ActiveViewId = "";
        _this.ViewDefsList = {};
        _this.IsPartEditGridLoadingDict = {};
        _this.IsViewSelectorLoading = false;
        _this.LogContext = undefined;
        return _this;
    }
    PartRecordStateManager.prototype.getKey = function (rowId, colId, viewId) {
        return rowId + "_" + colId + "_" + viewId;
    };
    PartRecordStateManager.prototype.getIsPartRecFetchXml = function (rowId, colId, viewId) {
        var k = this.getKey(rowId, colId, viewId);
        return this.fetchXmlDict[k];
    };
    PartRecordStateManager.prototype.setIsPartRecFetchXml = function (rowId, colId, viewId, partFetchXml) {
        var k = this.getKey(rowId, colId, viewId);
        this.fetchXmlDict[k] = partFetchXml;
    };
    PartRecordStateManager.prototype.setFetchXmlResponse = function (resp) {
        this.fetchXmlResp = resp;
    };
    PartRecordStateManager.prototype.getFetchXmlResponse = function () {
        return this.fetchXmlResp;
    };
    PartRecordStateManager.prototype.getIsExpanded = function () {
        return this.IsExpanded;
    };
    PartRecordStateManager.prototype.setIsExpanded = function (arg) {
        this.IsExpanded = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getIsDealFlowViewerExpanded = function () {
        return this.IsDealFlowViewerExpanded;
    };
    PartRecordStateManager.prototype.setIsDealFlowViewerExpanded = function (arg) {
        this.IsDealFlowViewerExpanded = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getIsOpened = function () {
        return this.IsOpened;
    };
    PartRecordStateManager.prototype.setIsOpened = function (arg) {
        this.IsOpened = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getIsKanbanMode = function () {
        return this.IsKanbanMode;
    };
    PartRecordStateManager.prototype.setIsKanbanMode = function (arg) {
        this.IsKanbanMode = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getDealFlowModeViewer = function () {
        return this.IsDealFlowModeViewer;
    };
    PartRecordStateManager.prototype.setDealFlowModeViewer = function (arg) {
        this.IsDealFlowModeViewer = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getIsPartRecFetchXmlLoaded = function () {
        return this.IsPartRecFetchXmlLoaded;
    };
    PartRecordStateManager.prototype.setIsPartRecFetchXmlLoaded = function (arg) {
        this.IsPartRecFetchXmlLoaded = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getActiveViewId = function () {
        return this.ActiveViewId;
    };
    PartRecordStateManager.prototype.setActiveViewId = function (arg) {
        this.ActiveViewId = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getViewDefsList = function (entity) {
        return this.ViewDefsList[entity] || [];
    };
    PartRecordStateManager.prototype.setViewDefsList = function (entity, arg) {
        this.ViewDefsList[entity] = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getIsPartEditGridLoadingDict = function (rowId, colId, viewId) {
        var k = this.getKey(rowId, colId, viewId);
        return this.IsPartEditGridLoadingDict[k];
    };
    PartRecordStateManager.prototype.setIsPartEditGridLoadingDict = function (rowId, colId, viewId, arg) {
        var k = this.getKey(rowId, colId, viewId);
        this.IsPartEditGridLoadingDict[k] = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.getIsViewSelectorLoading = function () {
        return this.IsViewSelectorLoading;
    };
    PartRecordStateManager.prototype.setIsViewSelectorLoading = function (arg) {
        this.IsViewSelectorLoading = arg;
        this.reRender();
    };
    PartRecordStateManager.prototype.setLogContext = function (arg0) {
        this.LogContext = arg0;
    };
    PartRecordStateManager.prototype.getLogContext = function () {
        return this.LogContext;
    };
    return PartRecordStateManager;
}(baseStateManager_1.BaseStateManager));
exports.PartRecordStateManager = PartRecordStateManager;


/***/ }),

/***/ "./src/StateManager/simpleStateManager.ts":
/*!************************************************!*\
  !*** ./src/StateManager/simpleStateManager.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fcFrStateManager_1 = __webpack_require__(/*! ./fcFrStateManager */ "./src/StateManager/fcFrStateManager.ts");
var fiGridStateManager_1 = __webpack_require__(/*! ./fiGridStateManager */ "./src/StateManager/fiGridStateManager.ts");
var nrtStateManager_1 = __webpack_require__(/*! ./nrtStateManager */ "./src/StateManager/nrtStateManager.ts");
var globalStateManager_1 = __webpack_require__(/*! ./globalStateManager */ "./src/StateManager/globalStateManager.ts");
var snapshotsStateManager_1 = __webpack_require__(/*! ./snapshotsStateManager */ "./src/StateManager/snapshotsStateManager.ts");
var partRecordStateManager_1 = __webpack_require__(/*! ./partRecordStateManager */ "./src/StateManager/partRecordStateManager.ts");
var fcChartsStateManager_1 = __webpack_require__(/*! ./fcChartsStateManager */ "./src/StateManager/fcChartsStateManager.ts");
var SimpleStateManager = (function () {
    function SimpleStateManager(onReRender) {
        this.onReRender = onReRender;
        this.stateChangeListeners = [];
        this.fcFr = new fcFrStateManager_1.FcFrStateManager(this.reRender.bind(this), this);
        this.fiGrid = new fiGridStateManager_1.FiGridStateManager(this.reRender.bind(this), this);
        this.nrt = new nrtStateManager_1.NrtStateManager(this.reRender.bind(this), this);
        this.global = new globalStateManager_1.GlobalStateManager(this.reRender.bind(this), this);
        this.snapshot = new snapshotsStateManager_1.SnapshotsStateManager(this.reRender.bind(this), this);
        this.partRecordViewer = new partRecordStateManager_1.PartRecordStateManager(this.reRender.bind(this), this);
        this.fcCharts = new fcChartsStateManager_1.FCChartsStateManager(this.reRender.bind(this), this);
        if (onReRender)
            this.stateChangeListeners.push(onReRender);
    }
    SimpleStateManager.prototype.addOnStateChangeListener = function (listener) {
        this.stateChangeListeners.push(listener);
    };
    SimpleStateManager.prototype.reRender = function () {
        this.stateChangeListeners.map(function (l) {
            l && l();
        });
    };
    return SimpleStateManager;
}());
exports.SimpleStateManager = SimpleStateManager;


/***/ }),

/***/ "./src/StateManager/snapshotsStateManager.ts":
/*!***************************************************!*\
  !*** ./src/StateManager/snapshotsStateManager.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseStateManager_1 = __webpack_require__(/*! ./baseStateManager */ "./src/StateManager/baseStateManager.ts");
var sharedEnums_1 = __webpack_require__(/*! ../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
exports.nullEdgeInfo = {
    SourceCategoryId: sharedEnums_1.EMPTY_GUID,
    DestinationCategoryId: sharedEnums_1.EMPTY_GUID,
    SourceCategoryName: "",
    DestinationCategoryName: ""
};
exports.nullNodeInfo = {
    CategoryId: sharedEnums_1.EMPTY_GUID,
    CategoryName: "",
    SnapshotId: sharedEnums_1.EMPTY_GUID,
    SnapshotName: "",
    isSourceSnapshotNode: false
};
exports.initDFDataFetchStatus = {
    SnapshotFetchStatus: forecastPageTypes_1.Status.Init,
    ChartDataFetchStatus: forecastPageTypes_1.Status.Init,
    GridDataFetchStatus: forecastPageTypes_1.Status.Init
};
var SnapshotsStateManager = (function (_super) {
    __extends(SnapshotsStateManager, _super);
    function SnapshotsStateManager(onReRender, all) {
        var _this = _super.call(this, onReRender, all) || this;
        _this.all = all;
        _this.gridHasMorePages = false;
        _this.currentPage = -1;
        _this.isGridLoading = false;
        _this.gridData = [];
        _this.chartData = { Nodes: [], Edges: [], AggregateData: [], RollupEntityName: "" };
        _this.dFDataFetchStatus = exports.initDFDataFetchStatus;
        _this.selectedEdge = exports.nullEdgeInfo;
        _this.selectedNode = exports.nullNodeInfo;
        _this.secondSnapshotId = "";
        _this.selectionChanged = false;
        _this.isDFMode = false;
        _this.mainSnapshotId = "";
        _this.snapshots = [];
        _this.SnapshotHistoryList = [];
        _this.activeForecastInstanceId = "";
        _this.baseCurrencySymbol = "";
        _this.isSnapHistPanelOpen = false;
        _this.IsSnapFiGridActive = false;
        _this.ActiveSnapshotInFIGridId = {
            name: '',
            id: sharedEnums_1.EMPTY_GUID,
            ownerName: '',
            createdOn: '',
            frId: ''
        };
        _this.SnapFetchErrorMessage = "";
        return _this;
    }
    SnapshotsStateManager.prototype.setGridHasMorePages = function (arg0) {
        this.gridHasMorePages = arg0;
    };
    SnapshotsStateManager.prototype.getGridHasMorePages = function () {
        return this.gridHasMorePages;
    };
    SnapshotsStateManager.prototype.setCurrentPage = function (page) {
        this.currentPage = page;
    };
    SnapshotsStateManager.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    SnapshotsStateManager.prototype.setIsDFGridLoading = function (arg0) {
        this.isGridLoading = arg0;
        this.reRender();
    };
    SnapshotsStateManager.prototype.isDFGridLoading = function () {
        return this.isGridLoading;
    };
    SnapshotsStateManager.prototype.setDfGridData = function (gridData) {
        this.gridData = gridData;
        this.reRender();
    };
    SnapshotsStateManager.prototype.appendDfGridData = function (gridData) {
        this.gridData = __spreadArrays(this.gridData, gridData);
        this.reRender();
    };
    SnapshotsStateManager.prototype.getDfGridData = function () {
        return this.gridData;
    };
    SnapshotsStateManager.prototype.setChartData = function (chartData) {
        this.chartData = chartData;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getChartData = function () {
        return this.chartData;
    };
    SnapshotsStateManager.prototype.setDFDataFetchStatus = function (arg0) {
        this.dFDataFetchStatus = arg0;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getDFDataFetchStatus = function () {
        return this.dFDataFetchStatus;
    };
    SnapshotsStateManager.prototype.setEdgeInfo = function (edge) {
        this.selectedEdge = edge;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getEdgeInfo = function () {
        return this.selectedEdge;
    };
    SnapshotsStateManager.prototype.setNodeInfo = function (newNode) {
        this.selectedNode = newNode;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getNodeInfo = function () {
        return this.selectedNode;
    };
    SnapshotsStateManager.prototype.set2ndSnapshotId = function (newId) {
        this.secondSnapshotId = newId;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getSecondSnapshotId = function () {
        return this.secondSnapshotId;
    };
    SnapshotsStateManager.prototype.setActiveMainSnapShot = function (newId) {
        this.mainSnapshotId = newId;
        this.reRender();
    };
    SnapshotsStateManager.prototype.isSelectionChanged = function () {
        return this.selectionChanged;
    };
    SnapshotsStateManager.prototype.setSelectionChanged = function (changed) {
        this.selectionChanged = changed;
        this.reRender();
    };
    SnapshotsStateManager.prototype.isInDFMode = function () {
        return this.isDFMode;
    };
    SnapshotsStateManager.prototype.toggleDFMode = function () {
        this.isDFMode = !this.isDFMode;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getActiveMainSnapshotId = function () {
        return this.mainSnapshotId;
    };
    SnapshotsStateManager.prototype.updateSnapshots = function (snapshots) {
        this.snapshots = snapshots;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getSnapshotList = function () {
        return this.snapshots;
    };
    SnapshotsStateManager.prototype.setSnapshotHistoryList = function (arg0) {
        this.SnapshotHistoryList = arg0;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getSnapshotHistoryList = function () {
        return this.SnapshotHistoryList;
    };
    SnapshotsStateManager.prototype.setActiveForecastInstanceId = function (newFiId) {
        this.activeForecastInstanceId = newFiId;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getActiveForecastInstanceId = function () {
        return this.activeForecastInstanceId;
    };
    SnapshotsStateManager.prototype.setIsSnapHistPanelOpen = function (arg0) {
        this.isSnapHistPanelOpen = arg0;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getIsSnapHistPanelOpen = function () {
        return this.isSnapHistPanelOpen;
    };
    SnapshotsStateManager.prototype.setIsSnapFiGridActive = function (arg0) {
        this.IsSnapFiGridActive = arg0;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getIsSnapFiGridActive = function () {
        return this.IsSnapFiGridActive;
    };
    SnapshotsStateManager.prototype.setActiveSnapshotInFIGridId = function (arg0) {
        this.ActiveSnapshotInFIGridId = arg0;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getActiveSnapshotInFIGridId = function () {
        return this.ActiveSnapshotInFIGridId;
    };
    SnapshotsStateManager.prototype.setSnapFetchErrorMessage = function (arg0) {
        this.SnapFetchErrorMessage = arg0;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getSnapFetchErrorMessage = function () {
        return this.SnapFetchErrorMessage;
    };
    return SnapshotsStateManager;
}(baseStateManager_1.BaseStateManager));
exports.SnapshotsStateManager = SnapshotsStateManager;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeContextServicesFactory.ts":
/*!****************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeContextServicesFactory.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fakeForecastDataAccess_1 = __webpack_require__(/*! ./fakeForecastDataAccess */ "./src/Testing/fakeServices/fakeForecastDataAccess.ts");
var fakeServiceConfig_1 = __webpack_require__(/*! ./fakeServiceConfig */ "./src/Testing/fakeServices/fakeServiceConfig.ts");
var fakeRecomputeNotificationsProvider_1 = __webpack_require__(/*! ./fakeRecomputeNotificationsProvider */ "./src/Testing/fakeServices/fakeRecomputeNotificationsProvider.ts");
var fakeForecastToastNotificationManager_1 = __webpack_require__(/*! ./fakeForecastToastNotificationManager */ "./src/Testing/fakeServices/fakeForecastToastNotificationManager.ts");
var fakeNavigationHandler_1 = __webpack_require__(/*! ./fakeNavigationHandler */ "./src/Testing/fakeServices/fakeNavigationHandler.ts");
var fakeStringsProvider_1 = __webpack_require__(/*! ./fakeStringsProvider */ "./src/Testing/fakeServices/fakeStringsProvider.ts");
var fakeFcastDialogManager_1 = __webpack_require__(/*! ./fakeFcastDialogManager */ "./src/Testing/fakeServices/fakeFcastDialogManager.ts");
var fakeCrmDataFormatter_1 = __webpack_require__(/*! ./fakeCrmDataFormatter */ "./src/Testing/fakeServices/fakeCrmDataFormatter.ts");
var fakeFeatureSwitchProvider_1 = __webpack_require__(/*! ./fakeFeatureSwitchProvider */ "./src/Testing/fakeServices/fakeFeatureSwitchProvider.ts");
var fakeCrmMetadataAccess_1 = __webpack_require__(/*! ./fakeCrmMetadataAccess */ "./src/Testing/fakeServices/fakeCrmMetadataAccess.ts");
var NullLogger_1 = __webpack_require__(/*! ../../Utility/Logging/NullLogger */ "./src/Utility/Logging/NullLogger.ts");
var consoleLogger_1 = __webpack_require__(/*! ../../Utility/Logging/consoleLogger */ "./src/Utility/Logging/consoleLogger.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var fakeMRUInfoProvider_1 = __webpack_require__(/*! ./fakeMRUInfoProvider */ "./src/Testing/fakeServices/fakeMRUInfoProvider.ts");
function getFakeContextServices(config) {
    if (config === void 0) { config = {}; }
    var finalConfig = __assign(__assign({}, fakeServiceConfig_1.DefaultFakeServiceConfig), config);
    var logger = new NullLogger_1.NullLogger();
    if (window && window.Xrm || (window && window.STORYBOOK_ENV)) {
        logger = new consoleLogger_1.ConsoleLogger(forecastPageTypes_1.ILogLevel.Debug);
    }
    return {
        forecastDataAccess: new fakeForecastDataAccess_1.FakeForecastDataAccess(finalConfig),
        recomputeNotificationsProvider: new fakeRecomputeNotificationsProvider_1.FakeRecomputeNotificationsProvider(finalConfig),
        nrtToastNotificationsManager: new fakeForecastToastNotificationManager_1.FakeNrtToastNotificationManager(finalConfig),
        forecastNavigationManager: new fakeNavigationHandler_1.FakeNavigationHandler(finalConfig),
        stringsProvider: new fakeStringsProvider_1.FakeStringsProvider(finalConfig),
        forecastDialogsManager: new fakeFcastDialogManager_1.FakeFcastDialogManager(finalConfig),
        crmDataFormatter: new fakeCrmDataFormatter_1.FakeCrmDataFormatter(finalConfig),
        featureSwtichProvider: new fakeFeatureSwitchProvider_1.FakeFeatureSwitchProvider(finalConfig),
        crmMetadataAccess: new fakeCrmMetadataAccess_1.FakeCrmMetadataAccess(finalConfig),
        logger: logger,
        mruInfoProvider: new fakeMRUInfoProvider_1.FakeMRUInfoProvider(finalConfig)
    };
}
exports.getFakeContextServices = getFakeContextServices;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeCrmDataFormatter.ts":
/*!**********************************************************!*\
  !*** ./src/Testing/fakeServices/fakeCrmDataFormatter.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FakeCrmDataFormatter = (function () {
    function FakeCrmDataFormatter(config) {
        this.config = config;
        try {
            this.getOrgBaseSymbolSPY = jest.fn();
        }
        catch (_a) { }
    }
    FakeCrmDataFormatter.prototype.getOrgBaseCurrencyIdSymbol = function () {
        var _this = this;
        this.getOrgBaseSymbolSPY && this.getOrgBaseSymbolSPY();
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("$");
            }, _this.config.networkDelay);
        });
    };
    FakeCrmDataFormatter.prototype.formatCurrency = function (value, currencySymbol) {
        return "" + currencySymbol + value.toFixed(2);
    };
    FakeCrmDataFormatter.prototype.formatNumber = function (value, precision) {
        return "" + value.toFixed(precision);
    };
    FakeCrmDataFormatter.prototype.formatDate = function (dateValue) {
        return dateValue.toString();
    };
    return FakeCrmDataFormatter;
}());
exports.FakeCrmDataFormatter = FakeCrmDataFormatter;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeCrmMetadataAccess.ts":
/*!***********************************************************!*\
  !*** ./src/Testing/fakeServices/fakeCrmMetadataAccess.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptyAdvFindFetchXml_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/FetchXMLs/OptyAdvFindFetchXml */ "./src/Testing/fakeServices/fakeDataAccessHelpers/FetchXMLs/OptyAdvFindFetchXml.ts");
var OptyAdvFindLayoutXml_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/LayoutXMLs/OptyAdvFindLayoutXml */ "./src/Testing/fakeServices/fakeDataAccessHelpers/LayoutXMLs/OptyAdvFindLayoutXml.ts");
var OptyOnlyNameLayoutXml_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/LayoutXMLs/OptyOnlyNameLayoutXml */ "./src/Testing/fakeServices/fakeDataAccessHelpers/LayoutXMLs/OptyOnlyNameLayoutXml.ts");
var FakeCrmMetadataAccess = (function () {
    function FakeCrmMetadataAccess(config) {
        this.config = config;
        try {
            this.spy = jest.fn();
        }
        catch (_a) { }
    }
    FakeCrmMetadataAccess.prototype.getGridViewDefinitions = function (entityName) {
        var _this = this;
        this.spy && this.spy("getGridViewDefinitions", entityName);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.getFakeDefinitions());
            }, _this.config.networkDelay);
        });
    };
    FakeCrmMetadataAccess.prototype.getFakeDefinitions = function () {
        var outP = [];
        outP.push({
            fetchXml: OptyAdvFindFetchXml_1.OptyAdvFindFetchXml,
            layoutXml: OptyAdvFindLayoutXml_1.OptyAdvFindLayoutXml,
            title: "Advanced find",
            isPersonal: false,
            id: "advancedFind"
        });
        outP.push({
            fetchXml: OptyAdvFindFetchXml_1.OptyAdvFindFetchXml,
            layoutXml: OptyOnlyNameLayoutXml_1.OptyOnlyNameLayoutXml,
            title: "Only name",
            isPersonal: false,
            id: "onlyName"
        });
        outP.push({
            fetchXml: OptyAdvFindFetchXml_1.OptyAdvFindFetchXml,
            layoutXml: OptyOnlyNameLayoutXml_1.OptyOnlyNameLayoutXml,
            title: "Only name - 2",
            id: "onlyName2",
            isPersonal: true,
        });
        return outP;
    };
    return FakeCrmMetadataAccess;
}());
exports.FakeCrmMetadataAccess = FakeCrmMetadataAccess;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/FCcolumnGenerator.ts":
/*!*****************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/FCcolumnGenerator.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
function createFakeFCColumns(fcid, shouldAddColumnsForDataType) {
    if (shouldAddColumnsForDataType === void 0) { shouldAddColumnsForDataType = false; }
    var outP = [];
    addColumnToFC(outP, fcid, "User", sharedEnums_1.ForecastColumnType.HierarchyPrimary, forecastPageTypes_1.ForecastColumnDataType.SingleLineOfText, "user");
    addColumnToFC(outP, fcid, "Quota", sharedEnums_1.ForecastColumnType.Simple, forecastPageTypes_1.ForecastColumnDataType.Currency, "quota");
    addColumnToFC(outP, fcid, "Won", sharedEnums_1.ForecastColumnType.Rollup, forecastPageTypes_1.ForecastColumnDataType.Currency, "won", false, true, true);
    addColumnToFC(outP, fcid, "Bestcase", sharedEnums_1.ForecastColumnType.Rollup, forecastPageTypes_1.ForecastColumnDataType.Currency, "bestcase", true, true, false, 100000001);
    addColumnToFC(outP, fcid, "Pipeline", sharedEnums_1.ForecastColumnType.Rollup, forecastPageTypes_1.ForecastColumnDataType.Currency, "pipeline", true, true, false, 100000002);
    addColumnToFC(outP, fcid, "Omitted", sharedEnums_1.ForecastColumnType.Rollup, forecastPageTypes_1.ForecastColumnDataType.Currency, "omitted", true, false);
    addColumnToFC(outP, fcid, "Manager", sharedEnums_1.ForecastColumnType.HierarchySecondary, forecastPageTypes_1.ForecastColumnDataType.SingleLineOfText, "manager", false, true);
    addColumnToFC(outP, fcid, "Sum", sharedEnums_1.ForecastColumnType.Calculated, forecastPageTypes_1.ForecastColumnDataType.Currency, "sum", false, true);
    addColumnToFC(outP, fcid, "Predictive", sharedEnums_1.ForecastColumnType.Predictive, forecastPageTypes_1.ForecastColumnDataType.Currency, "predictive", false, true, true);
    if (shouldAddColumnsForDataType) {
        addColumnToFC(outP, fcid, "QuotaRatio", sharedEnums_1.ForecastColumnType.Calculated, forecastPageTypes_1.ForecastColumnDataType.Decimal, "quotaratio", false, true);
        addColumnToFC(outP, fcid, "SimpleText", sharedEnums_1.ForecastColumnType.Simple, forecastPageTypes_1.ForecastColumnDataType.SingleLineOfText, "simpletext", false, true);
        addColumnToFC(outP, fcid, "SimpleMoney", sharedEnums_1.ForecastColumnType.Simple, forecastPageTypes_1.ForecastColumnDataType.Currency, "simplemoney", false, true);
        addColumnToFC(outP, fcid, "HierarchySecondaryMoney", sharedEnums_1.ForecastColumnType.HierarchySecondary, forecastPageTypes_1.ForecastColumnDataType.Currency, "hierarchysecondarymoney", false, true);
    }
    return outP;
}
exports.createFakeFCColumns = createFakeFCColumns;
function addColumnToFC(outP, fcid, title, type, dataType, uniqueName, isEditable, isVisible, showProg, opSetVal) {
    if (isVisible === void 0) { isVisible = true; }
    if (showProg === void 0) { showProg = false; }
    outP.push(__assign(__assign({}, emptyFCC()), { id: fcid + "_" + title.toLocaleLowerCase(), localizedHeaderTitle: fcid + "_" + title, forecastColumnType: type, dataType: dataType, isEditable: isEditable, isVisible: isVisible, showProgressComparedToQuota: showProg, uniqueName: uniqueName, columnDescription: fcid + "_" + title + "_Description", optionSetValue: opSetVal }));
}
function emptyFCC() {
    return {
        id: "",
        localizedHeaderTitle: "",
        forecastColumnType: sharedEnums_1.ForecastColumnType.Rollup,
        dataType: forecastPageTypes_1.ForecastColumnDataType.Currency,
        isVisible: true,
        uniqueName: "",
        columnDescription: ""
    };
}


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/FcFrGenerator.ts":
/*!*************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/FcFrGenerator.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FCcolumnGenerator_1 = __webpack_require__(/*! ./FCcolumnGenerator */ "./src/Testing/fakeServices/fakeDataAccessHelpers/FCcolumnGenerator.ts");
function GetFakeForecastConfigList(num, numFr, _this) {
    if (num === void 0) { num = 1; }
    if (numFr === void 0) { numFr = 3; }
    var outP = [];
    for (var j = 0; j < num; j++) {
        outP.push(CreateForecastConfigWithRecurrences(j, numFr, _this.shouldAddColumnsForDataType));
    }
    return outP;
}
exports.GetFakeForecastConfigList = GetFakeForecastConfigList;
function CreateForecastConfigWithRecurrences(i, num, shouldAddColumnsForDataType) {
    if (num === void 0) { num = 2; }
    if (shouldAddColumnsForDataType === void 0) { shouldAddColumnsForDataType = false; }
    var recurrences = [];
    var fcid = "fc_" + i;
    for (var j = 0; j < num; j++) {
        recurrences.push(CreateForecastRecurrence(j, fcid));
    }
    var outP = {
        id: fcid,
        name: "ForecastConfig_" + i,
        rollupEntity: "opportunity",
        rollupEntityPluralName: "opportunities",
        forecastCategoryAttribute: "msdyn_forecastcategory",
        recurrences: recurrences,
        gridMetadata: {
            columnDefinitions: FCcolumnGenerator_1.createFakeFCColumns(fcid, shouldAddColumnsForDataType)
        },
        hierarchyRelationship: getOrgChartRelationship(),
        stateCode: 0
    };
    return outP;
}
function getOrgChartRelationship() {
    return {
        EntityInfo: { EntityLogicalName: "opportunity", PrimaryIdAttribute: "opportunityid", PrimaryNameAttribute: "name", EntitySetName: "opportunities", HierarchyAttribute: null },
        Relationship: {
            EntityInfo: {
                EntityLogicalName: "systemuser",
                PrimaryIdAttribute: "systemuserid",
                PrimaryNameAttribute: "fullname",
                EntitySetName: "systemusers",
                HierarchyAttribute: "parentsystemuserid"
            },
            RelatedFrom: "ownerid",
        }
    };
}
function CreateForecastRecurrence(i, fcId) {
    var outP = {
        id: fcId + "_fr_" + i,
        name: "ForecastRecurrence_" + i + "_" + fcId,
        rootForecastInstanceId: "",
        lastRecalculatedDateTime: "2019-10-22T00:00:00.0Z",
        lastRecalculatedStatus: 0,
        validFrom: "2019-07-01T00:00:00.0Z",
        validTo: "2019-09-30T00:00:00.0Z"
    };
    if (i === 1) {
        outP.validFrom = "2019-10-01T00:00:00.0Z";
        outP.validTo = "2019-12-31T00:00:00.0Z";
    }
    if (i === 2) {
        outP.validFrom = "2019-04-01T00:00:00.0Z";
        outP.validTo = "2019-06-30T00:00:00.0Z";
    }
    return outP;
}
function CreateForecastRecurrenceWithId(id) {
    var outP = {
        id: "" + id,
        name: "ForecastRecurrence_" + id,
        rootForecastInstanceId: "",
        lastRecalculatedDateTime: "2019-10-22T00:00:00.0Z",
        lastRecalculatedStatus: 0,
        validFrom: "2019-07-01T00:00:00.0Z",
        validTo: "2019-09-30T00:00:00.0Z"
    };
    if (id[id.length - 1] == "0") {
        var currDate = new Date();
        var currYear = currDate.getUTCFullYear();
        var currMonth = currDate.getUTCMonth() + 1;
        var monthEndDate = new Date(currYear, currMonth, 0).getDate().toString();
        outP.validFrom = outP.validFrom.replace("2019", currYear.toString()).replace("07", ("0" + currMonth.toString()).slice(-2));
        outP.validTo = outP.validTo.replace("2019", currYear.toString()).replace("09", ("0" + currMonth.toString()).slice(-2)).replace("30", monthEndDate);
    }
    return outP;
}
exports.CreateForecastRecurrenceWithId = CreateForecastRecurrenceWithId;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/FetchXMLs/OptyAdvFindFetchXml.ts":
/*!*****************************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/FetchXMLs/OptyAdvFindFetchXml.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptyAdvFindFetchXml = "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\"><entity name=\"opportunity\"><attribute name=\"name\" /><attribute name=\"customerid\" /><attribute name=\"estimatedvalue\" /><attribute name=\"statuscode\" /><attribute name=\"opportunityid\" /><order attribute=\"name\" descending=\"false\" /></entity></fetch>";


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/FiGenerator.ts":
/*!***********************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/FiGenerator.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FakeFIGenerator = (function () {
    function FakeFIGenerator(config, frId, fcId, updateDb, snapNo) {
        if (snapNo === void 0) { snapNo = -1; }
        this.config = config;
        this.frId = frId;
        this.fcId = fcId;
        this.updateDb = updateDb;
        this.snapNo = snapNo;
        this.editableColumns = ["bestcase", "pipeline"];
        this.historyColumns = ["bestcase", "pipeline"];
    }
    FakeFIGenerator.prototype.createFakeFI = function (title, parentId, hasAggregateData, isEditable, showHistory) {
        if (hasAggregateData === void 0) { hasAggregateData = true; }
        if (isEditable === void 0) { isEditable = true; }
        if (showHistory === void 0) { showHistory = true; }
        var outP = {
            id: this.createId(title),
            parentId: this.createId(parentId),
            HierarchyEntityData: {
                id: "" + title.toLocaleLowerCase(),
                recordName: this.frId + "_" + title + (this.snapNo != -1 ? "_snap" + this.snapNo : ""),
                numberOfChildren: 2,
                entityType: "systemuser"
            },
            RollUpColumnData: hasAggregateData ? this.createRollupData(false, isEditable, showHistory, title) : null,
            AggregateColumnData: this.createRollupData(true, isEditable, showHistory, title),
            hasSelfAggregateNode: hasAggregateData
        };
        this.updateDb && this.updateDb(outP);
        return outP;
    };
    FakeFIGenerator.prototype.createRollupData = function (isAgg, isEditable, showHistory, title) {
        if (isAgg === void 0) { isAgg = false; }
        if (isEditable === void 0) { isEditable = true; }
        if (showHistory === void 0) { showHistory = true; }
        var dF = isAgg ? 2 : 1;
        var outP = {};
        this.addCellInfo(outP, "user", "" + (this.snapNo != -1 ? "_snap" + this.snapNo : this.createTitle(title)), isEditable, showHistory);
        this.addCellInfo(outP, "bestcase", 20 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "won", 30 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "pipeline", 40 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "quota", 100 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "manager", "Manager_X", isEditable, showHistory);
        this.addCellInfo(outP, "sum", 1000 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "quotaratio", 1000 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "simpletext", "123", isEditable, showHistory);
        this.addCellInfo(outP, "simplemoney", 1000 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "hierarchysecondarymoney", 1000 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "hierarchysecondarymoney", 1000 / dF, isEditable, showHistory);
        this.addCellInfo(outP, "predictive", 70 / dF, isEditable, showHistory);
        return outP;
    };
    FakeFIGenerator.prototype.addCellInfo = function (outP, colId, rawValue, isEditable, showHistory) {
        if (isEditable === void 0) { isEditable = true; }
        if (showHistory === void 0) { showHistory = true; }
        var cid = this.createColId(colId);
        outP[cid] = {
            displayValue: "" + rawValue,
            isManualAdjusted: false,
            isRollupAdjusted: false,
            rawValue: typeof rawValue != "number" ? 0 : rawValue,
            originalValue: typeof rawValue != "number" ? 0 : rawValue,
            isEditable: this.editableColumns.includes(colId) && isEditable ? true : false,
            showHistory: this.historyColumns.includes(colId) && showHistory ? true : false,
            directAdjustedValue: null,
            rollupAdjustedValue: null
        };
    };
    FakeFIGenerator.prototype.createColId = function (id) {
        return this.fcId + "_" + id.toLocaleLowerCase();
    };
    FakeFIGenerator.prototype.createId = function (id) {
        return this.frId + "_" + id.toLocaleLowerCase();
    };
    FakeFIGenerator.prototype.createTitle = function (id) {
        return this.frId + "_" + id;
    };
    return FakeFIGenerator;
}());
exports.FakeFIGenerator = FakeFIGenerator;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/LayoutXMLs/OptyAdvFindLayoutXml.ts":
/*!*******************************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/LayoutXMLs/OptyAdvFindLayoutXml.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptyAdvFindLayoutXml = "<grid name=\"resultset\" object=\"3\" jump=\"name\" select=\"1\" icon=\"1\" preview=\"1\"><row name=\"result\" id=\"opportunityid\"><cell name=\"name\" width=\"300\" /><cell name=\"ownerid\" width=\"150\" /><cell name=\"estimatedvalue\" width=\"100\" /><cell name=\"estimatedclosedate\" width=\"100\" /><cell name=\"statecode\" width=\"100\" /></row></grid>";


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/LayoutXMLs/OptyOnlyNameLayoutXml.ts":
/*!********************************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/LayoutXMLs/OptyOnlyNameLayoutXml.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptyOnlyNameLayoutXml = "<grid name=\"resultset\" object=\"3\" jump=\"name\" select=\"1\" icon=\"1\" preview=\"1\"><row name=\"result\" id=\"opportunityid\"><cell name=\"name\" width=\"300\" /></row></grid>";


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/dealFlowDataGen.ts":
/*!***************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/dealFlowDataGen.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dfData = {
    Nodes: [
        { name: "Best case", color: "#3049AD", key: "42d408cc-8c83-4d3c-b745-f53605a71ba6", value: 12332, formattedValue: "", snapshotId: "s1", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Committed", color: "#118DFF", key: "6760f59f-0464-428a-8c0d-e901a64b320c", value: 12332, formattedValue: "", snapshotId: "s1", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Lost", color: "#C83D95", key: "5f35c872-cd78-4cee-98c5-837db0c086db", value: 12332, formattedValue: "", snapshotId: "s1", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Pipeline", color: "#E04854", key: "ffdbc5ea-7624-4ea9-b711-11aa7c3aa54c", value: 12332, formattedValue: "", snapshotId: "s1", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Won", color: "#FFADC1", key: "da233e18-379d-4aef-a66d-4a355ab0c9f7", value: 12332, formattedValue: "", snapshotId: "s1", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Best case", color: "#3049AD", key: "42d408cc-8c83-4d3c-b745-f53605a71ba6", value: 12332, formattedValue: "", snapshotId: "s2", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Committed", color: "#118DFF", key: "6760f59f-0464-428a-8c0d-e901a64b320c", value: 12332, formattedValue: "", snapshotId: "s2", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Lost", color: "#C83D95", key: "5f35c872-cd78-4cee-98c5-837db0c086db", value: 12332, formattedValue: "", snapshotId: "s2", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Pipeline", color: "#E04854", key: "ffdbc5ea-7624-4ea9-b711-11aa7c3aa54c", value: 12332, formattedValue: "", snapshotId: "s2", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 },
        { name: "Won", color: "#FFADC1", key: "da233e18-379d-4aef-a66d-4a355ab0c9f7", value: 12332, formattedValue: "", snapshotId: "s2", snapshotName: "", abbreviatedValue: "", participatingRecordsCount: 5 }
    ],
    Edges: [
        { source: 0, target: 5, value: 37912570, recordsCount: 5, abbreviatedValue: "" },
        { source: 3, target: 8, value: 37294340, recordsCount: 4, abbreviatedValue: "" },
        { source: 1, target: 6, value: 60549016, recordsCount: 3, abbreviatedValue: "" },
        { source: 4, target: 9, value: 26445640, recordsCount: 2, abbreviatedValue: "" },
        { source: 2, target: 7, value: 21900000, recordsCount: 1, abbreviatedValue: "" }
    ],
    AggregateData: [
        {
            snapshotId: "s1",
            snapshotName: "Snap1",
            value: "",
            recordsCount: 1,
            abbreviatedValue: "2"
        },
        {
            snapshotId: "s2",
            snapshotName: "Snap2",
            value: "",
            recordsCount: 1,
            abbreviatedValue: "2"
        }
    ],
    RollupEntityName: "Opportunity"
};
exports.dfGridData = [
    { Name: "Power Vineyard Traders Opportunity - 60 Opportunity - 1", Owner: "David Thompson", Snapshot1Amount: 13520, Snapshot2Amount: 13520 },
    { Name: "Light Baldwin Proseware Monitor LCD19", Owner: "David Thompson", Snapshot1Amount: 13520, Snapshot2Amount: 13520 },
    { Name: "Light Baldwin Fabrikam Laptop M9000", Owner: "David Thompson", Snapshot1Amount: 13520, Snapshot2Amount: 13520 },
    { Name: "Insurance Traders Vineyard Fabrikam Laptop M9000", Owner: "David Thompson", Snapshot1Amount: 13520, Snapshot2Amount: 13520 },
    { Name: "Messenger Margie Awesome Fabrikam Laptop M9000", Owner: "David Thompson", Snapshot1Amount: 13520, Snapshot2Amount: 13520 },
    { Name: "Humongous Coho Insurance Fabrikam Laptop M9000", Owner: "David Thompson", Snapshot1Amount: 13520, Snapshot2Amount: 13520 },
    { Name: "Consolidated Parnell Toys Proseware Monitor LCD19", Owner: "David Thompson", Snapshot1Amount: 13520, Snapshot2Amount: 13520 },
    { Name: "Design Baldwin Travel Proseware Mobile 1520", Owner: "Claudio Makalele", Snapshot1Amount: 13520, Snapshot2Amount: 13520 },
    { Name: "Seventh Winery School Opportunity - 4", Owner: "Claudio Makalele", Snapshot1Amount: 13520, Snapshot2Amount: 13520 }
];
function createDFGridRow(idx, stId, enId, cat1, cat2) {
    var id1 = stId.slice(-1);
    var id2 = enId.slice(-2);
    return {
        RecordId: "" + idx,
        Name: idx + " - SN " + id1 + " to SN " + id2 + ", " + cat1 + ":" + cat2,
        S1DataValue: 100,
        S2DataValue: 300,
        S1CategoryName: "Pipeline",
        S2CategoryName: "Pipeline",
        S1TargetDate: "",
        S2TargetDate: "",
        S1OwnerName: "Owner1",
        S2OwnerName: "Owner3"
    };
}
exports.createDFGridRow = createDFGridRow;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/fcChartsDataGen.ts":
/*!***************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/fcChartsDataGen.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var testutils_1 = __webpack_require__(/*! ../../testutils */ "./src/Testing/testutils.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
function generateFakeLatestPredictiveTrendData() {
    var today = new Date();
    var recurrenceStartDate = testutils_1.SubtractDays(45);
    var recurrenceEndDate = testutils_1.AddDays(45);
    var lineSeries1 = {
        name: "Closed Won",
        id: "materialized",
        visible: true,
        color: "green",
        marker: { enabled: false },
        data: [
            [
                testutils_1.SubtractDays(100),
                0
            ],
            [
                testutils_1.SubtractDays(30),
                7537
            ],
            [
                testutils_1.SubtractDays(20),
                14000
            ],
            [
                testutils_1.SubtractDays(10),
                18000
            ],
            [
                today.getTime(),
                29000
            ],
        ]
    };
    var lineSeries2 = {
        name: "Predictive",
        id: "predictiveforecast",
        visible: true,
        dashStyle: "ShortDash",
        color: "blue",
        marker: { enabled: false },
        data: [
            [
                today.getTime(),
                30000
            ],
            [
                testutils_1.AddDays(1),
                35000
            ],
            [
                testutils_1.AddDays(3),
                40000
            ],
            [
                testutils_1.AddDays(5),
                45000
            ],
        ]
    };
    var quotaData = {
        Id: "quota",
        Label: "quota",
        Color: "#18A03C",
        Value: 48600
    };
    var response = {
        series: [lineSeries1, lineSeries2],
        info: {
            startDate: recurrenceStartDate,
            endDate: recurrenceEndDate,
            recurrenceType: forecastPageTypes_1.RecurrenceType.Quarterly,
            quota: quotaData
        }
    };
    return response;
}
exports.generateFakeLatestPredictiveTrendData = generateFakeLatestPredictiveTrendData;
function generateForecastCumulativeTrendForAllCategories() {
    var lineSeries1 = {
        name: "Won",
        visible: true,
        color: "green",
        marker: { enabled: false },
        data: [
            [
                testutils_1.SubtractDays(100),
                0
            ],
            [
                testutils_1.SubtractDays(30),
                6000
            ],
            [
                testutils_1.SubtractDays(20),
                8000
            ],
            [
                testutils_1.SubtractDays(10),
                10000
            ],
            [
                testutils_1.AddDays(0),
                12000
            ],
        ]
    };
    var lineSeries2 = {
        name: "Commited",
        visible: true,
        color: "lightgreen",
        marker: { enabled: false },
        data: [
            [
                testutils_1.SubtractDays(100),
                0
            ],
            [
                testutils_1.SubtractDays(30),
                4000
            ],
            [
                testutils_1.SubtractDays(20),
                4500
            ],
            [
                testutils_1.SubtractDays(10),
                5000
            ],
            [
                testutils_1.AddDays(0),
                5500
            ],
        ]
    };
    var lineSeries3 = {
        name: "Best Case",
        visible: true,
        color: "purple",
        marker: { enabled: false },
        data: [
            [
                testutils_1.SubtractDays(100),
                0
            ],
            [
                testutils_1.SubtractDays(30),
                5537
            ],
            [
                testutils_1.SubtractDays(20),
                6000
            ],
            [
                testutils_1.SubtractDays(10),
                7000
            ],
            [
                testutils_1.AddDays(0),
                7500
            ],
        ]
    };
    var lineSeries4 = {
        name: "Pipeline",
        visible: true,
        color: "blue",
        marker: { enabled: false },
        data: [
            [
                testutils_1.SubtractDays(100),
                0
            ],
            [
                testutils_1.SubtractDays(30),
                3000
            ],
            [
                testutils_1.SubtractDays(20),
                4000
            ],
            [
                testutils_1.SubtractDays(10),
                8000
            ],
            [
                testutils_1.AddDays(0),
                9000
            ],
        ]
    };
    var lineSeries5 = {
        name: "Predictive",
        id: "predictive",
        visible: true,
        dashStyle: "Dot",
        color: "lightblue",
        marker: { enabled: true },
        data: [
            [
                testutils_1.SubtractDays(100),
                41000,
            ],
            [
                testutils_1.SubtractDays(30),
                43000,
            ],
            [
                testutils_1.SubtractDays(20),
                42000,
            ],
            [
                testutils_1.SubtractDays(10),
                40000
            ],
            [
                testutils_1.AddDays(0),
                45000
            ],
        ]
    };
    var lineSeries6 = {
        name: "Lost",
        visible: true,
        color: "red",
        marker: { enabled: false },
        data: [
            [
                testutils_1.SubtractDays(100),
                0
            ],
            [
                testutils_1.SubtractDays(30),
                1000
            ],
            [
                testutils_1.SubtractDays(20),
                2000
            ],
            [
                testutils_1.SubtractDays(10),
                3000
            ],
            [
                testutils_1.AddDays(0),
                4000
            ],
        ]
    };
    var recurrenceStartDate = testutils_1.SubtractDays(45);
    var recurrenceEndDate = testutils_1.AddDays(45);
    var recurrenceType = forecastPageTypes_1.RecurrenceType.Quarterly;
    var quotaData = {
        Id: "quota",
        Label: "quota",
        Color: "#18A03C",
        Value: 48600
    };
    var response = {
        series: [lineSeries1, lineSeries2, lineSeries3, lineSeries4, lineSeries5, lineSeries6],
        info: {
            startDate: recurrenceStartDate,
            endDate: recurrenceEndDate,
            recurrenceType: recurrenceType,
            quota: quotaData
        }
    };
    return response;
}
exports.generateForecastCumulativeTrendForAllCategories = generateForecastCumulativeTrendForAllCategories;
function generateLatestPredictedResultSplit() {
    var response = {
        data: [{
                name: "Closed Won",
                y: 82001001.45
            }, {
                name: "From Existing",
                y: 0
            }, {
                name: "From new Deals",
                y: 23100112.12
            }, {
                name: 'Total Prediction',
                isIntermediateSum: true
            }]
    };
    return response;
}
exports.generateLatestPredictedResultSplit = generateLatestPredictedResultSplit;
function generatePredictionStatus() {
    var response = {
        PredictionOn: "20/1/2020",
        PredictionStatus: "Completed",
        ErrorCode: "",
        ErrorDetails: "",
        ModifiedOn: ""
    };
    return response;
}
exports.generatePredictionStatus = generatePredictionStatus;
function generateSILicenseStatus() {
    var response = {
        response: "True"
    };
    return response;
}
exports.generateSILicenseStatus = generateSILicenseStatus;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/pipelineRecordsFetchxmlGen.ts":
/*!**************************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/pipelineRecordsFetchxmlGen.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.partFetchXmlResp = {
    EntityName: "opportunity",
    ForecastConfigurationColumns: [
        {
            ColumnId: "ea9842c9-fbd5-49a2-93d5-dea1329940b0",
            ColumnName: "Best case",
            ColumnOptionSetValue: "100000001",
            AggregatingAttribute: "estimatedvalue_base",
            FetchXml: '<fetch version="1.0" mapping="logical" distinct="true"><entity name="opportunity"><filter type="and"><condition attribute="estimatedclosedate" operator="between"><value>7/1/2019 12:00:00 AM</value><value>9/30/2019 12:00:00 AM</value></condition><condition attribute="msdyn_forecastcategory" operator="eq" value="100000002" /></filter><attribute name="estimatedvalue_base" /><attribute name="estimatedclosedate" /><attribute name="opportunityid" /><attribute name="name" /><link-entity name="systemuser" from="systemuserid" to="ownerid" link-type="inner"><attribute name="systemuserid" /><filter type="and"><condition attribute="systemuserid" operator="_heirarchyoperator_" value="_recordid_" /></filter></link-entity></entity></fetch>',
            Fields: { estimatedvalue_base: true, estimatedclosedate: true, opportunityid: false, name: false }
        },
        {
            ColumnId: "8fdddb58-6d8a-474f-9cfd-e09a3cf96d97",
            ColumnName: "Committed",
            ColumnOptionSetValue: "100000002",
            AggregatingAttribute: "estimatedvalue_base",
            FetchXml: '<fetch version="1.0" mapping="logical" distinct="true"><entity name="opportunity"><filter type="and"><condition attribute="estimatedclosedate" operator="between"><value>7/1/2019 12:00:00 AM</value><value>9/30/2019 12:00:00 AM</value></condition><condition attribute="msdyn_forecastcategory" operator="eq" value="100000003" /></filter><attribute name="estimatedvalue_base" /><attribute name="estimatedclosedate" /><attribute name="opportunityid" /><attribute name="name" /><link-entity name="systemuser" from="systemuserid" to="ownerid" link-type="inner"><attribute name="systemuserid" /><filter type="and"><condition attribute="systemuserid" operator="_heirarchyoperator_" value="_recordid_" /></filter></link-entity></entity></fetch>',
            Fields: { estimatedvalue_base: true, estimatedclosedate: true, opportunityid: false, name: false }
        },
        {
            ColumnId: "d8ec04f0-fc7f-45d3-bd3a-52c5921a4829",
            ColumnName: "Omitted",
            ColumnOptionSetValue: "100000003",
            AggregatingAttribute: "estimatedvalue_base",
            FetchXml: '<fetch version="1.0" mapping="logical" distinct="true"><entity name="opportunity"><filter type="and"><condition attribute="estimatedclosedate" operator="between"><value>7/1/2019 12:00:00 AM</value><value>9/30/2019 12:00:00 AM</value></condition><condition attribute="msdyn_forecastcategory" operator="eq" value="100000004" /></filter><attribute name="estimatedvalue_base" /><attribute name="estimatedclosedate" /><attribute name="opportunityid" /><attribute name="name" /><link-entity name="systemuser" from="systemuserid" to="ownerid" link-type="inner"><attribute name="systemuserid" /><filter type="and"><condition attribute="systemuserid" operator="_heirarchyoperator_" value="_recordid_" /></filter></link-entity></entity></fetch>',
            Fields: { estimatedvalue_base: true, estimatedclosedate: true, opportunityid: false, name: false }
        },
        {
            ColumnId: "ea5bdbe6-9e12-4c6f-a942-5ab34dd0b759",
            ColumnName: "Pipeline",
            ColumnOptionSetValue: "100000004",
            AggregatingAttribute: "estimatedvalue_base",
            FetchXml: '<fetch version="1.0" mapping="logical" distinct="true"><entity name="opportunity"><filter type="and"><condition attribute="estimatedclosedate" operator="between"><value>7/1/2019 12:00:00 AM</value><value>9/30/2019 12:00:00 AM</value></condition><condition attribute="msdyn_forecastcategory" operator="eq" value="100000001" /></filter><attribute name="estimatedvalue_base" /><attribute name="estimatedclosedate" /><attribute name="opportunityid" /><attribute name="name" /><link-entity name="systemuser" from="systemuserid" to="ownerid" link-type="inner"><attribute name="systemuserid" /><filter type="and"><condition attribute="systemuserid" operator="_heirarchyoperator_" value="_recordid_" /></filter></link-entity></entity></fetch>',
            Fields: { estimatedvalue_base: true, estimatedclosedate: true, opportunityid: false, name: false }
        },
        {
            ColumnId: "21b8f05c-a051-441c-9839-4461d0053dd5",
            ColumnName: "Won",
            ColumnOptionSetValue: "100000005",
            AggregatingAttribute: "estimatedvalue_base",
            FetchXml: '<fetch version="1.0" mapping="logical" distinct="true"><entity name="opportunity"><filter type="and"><condition attribute="estimatedclosedate" operator="between"><value>7/1/2019 12:00:00 AM</value><value>9/30/2019 12:00:00 AM</value></condition><condition attribute="msdyn_forecastcategory" operator="eq" value="100000001" /></filter><attribute name="estimatedvalue_base" /><attribute name="estimatedclosedate" /><attribute name="opportunityid" /><attribute name="name" /><link-entity name="systemuser" from="systemuserid" to="ownerid" link-type="inner"><attribute name="systemuserid" /><filter type="and"><condition attribute="systemuserid" operator="_heirarchyoperator_" value="_recordid_" /></filter></link-entity></entity></fetch>',
            Fields: { estimatedvalue_base: true, estimatedclosedate: true, opportunityid: false, name: false }
        },
        {
            ColumnId: "dca5c91f-a91e-4361-98b7-3fa6d21135e1",
            ColumnName: "Lost",
            ColumnOptionSetValue: "100000006",
            AggregatingAttribute: "estimatedvalue_base",
            FetchXml: '<fetch version="1.0" mapping="logical" distinct="true"><entity name="opportunity"><filter type="and"><condition attribute="estimatedclosedate" operator="between"><value>7/1/2019 12:00:00 AM</value><value>9/30/2019 12:00:00 AM</value></condition><condition attribute="msdyn_forecastcategory" operator="eq" value="100000001" /></filter><attribute name="estimatedvalue_base" /><attribute name="estimatedclosedate" /><attribute name="opportunityid" /><attribute name="name" /><link-entity name="systemuser" from="systemuserid" to="ownerid" link-type="inner"><attribute name="systemuserid" /><filter type="and"><condition attribute="systemuserid" operator="_heirarchyoperator_" value="_recordid_" /></filter></link-entity></entity></fetch>',
            Fields: { estimatedvalue_base: true, estimatedclosedate: true, opportunityid: false, name: false }
        }
    ]
};


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/snapPartRecordGen.ts":
/*!*****************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/snapPartRecordGen.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createSnapshotPartRecordGridRow(idx, stId, fiId, cat1) {
    var id1 = stId.slice(-1);
    return {
        id: "" + idx,
        title: idx + " - SN " + id1 + ", Fi " + fiId + ", " + cat1,
        data: 100 + idx,
        categoryName: "Pipeline",
        targetDate: "2020-01-28T00:00:00",
        ownerName: "Owner1",
    };
}
exports.createSnapshotPartRecordGridRow = createSnapshotPartRecordGridRow;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeDataAccessHelpers/snaphotGenerators.ts":
/*!*****************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeDataAccessHelpers/snaphotGenerators.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createSnapshotList(frId, numSnaps) {
    if (numSnaps === void 0) { numSnaps = 5; }
    var outP = [];
    for (var i = 0; i < numSnaps; i++) {
        var fRID = frId || "fc_0_fr_" + i % 3;
        var name_1 = generateSnapName(fRID, i);
        outP.push({
            snapshotID: name_1.toLowerCase(),
            snapshotName: name_1,
            createdOn: "2020-02-1" + i + "T10:32:23.62",
            frId: fRID,
            ownerName: "Owner_" + i,
            ownerId: "owner_" + i
        });
    }
    return outP;
}
exports.createSnapshotList = createSnapshotList;
function generateSnapName(frId, i) {
    return "Snap_" + frId + "_" + i;
}


/***/ }),

/***/ "./src/Testing/fakeServices/fakeFcastDialogManager.ts":
/*!************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeFcastDialogManager.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FakeFcastDialogManager = (function () {
    function FakeFcastDialogManager(config) {
        this.config = config;
    }
    FakeFcastDialogManager.prototype.openRecalculateDialog = function (onRecalculateClick) {
        this.onRecalc = onRecalculateClick;
        this.config.onDialogMethodCalled("openRecalculateDialog");
    };
    FakeFcastDialogManager.prototype.openRecalculateErrorMessageDialog = function () {
        this.config.onDialogMethodCalled("openRecalculateErrorMessageDialog");
    };
    FakeFcastDialogManager.prototype.simulateOnRecalcClick = function () {
        this.onRecalc && this.onRecalc();
    };
    FakeFcastDialogManager.prototype.ShowOpportunities = function (fiId, columnId, rollupEntityName, recordsType) {
        this.config.onDialogMethodCalled("ShowOpportunities", fiId, columnId, rollupEntityName, recordsType);
    };
    FakeFcastDialogManager.prototype.ShowErrorDialog = function (message, errorCode, details) {
        this.config.onDialogMethodCalled("ShowErrorDialog", message, errorCode, details);
    };
    return FakeFcastDialogManager;
}());
exports.FakeFcastDialogManager = FakeFcastDialogManager;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeFeatureSwitchProvider.ts":
/*!***************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeFeatureSwitchProvider.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FakeFeatureSwitchProvider = (function () {
    function FakeFeatureSwitchProvider(config) {
        this.config = config;
    }
    FakeFeatureSwitchProvider.prototype.isFeatureEnabled = function (key) {
        return true;
    };
    return FakeFeatureSwitchProvider;
}());
exports.FakeFeatureSwitchProvider = FakeFeatureSwitchProvider;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeForecastDataAccess.ts":
/*!************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeForecastDataAccess.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var FcFrGenerator_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/FcFrGenerator */ "./src/Testing/fakeServices/fakeDataAccessHelpers/FcFrGenerator.ts");
var FiGenerator_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/FiGenerator */ "./src/Testing/fakeServices/fakeDataAccessHelpers/FiGenerator.ts");
var testutils_1 = __webpack_require__(/*! ../testutils */ "./src/Testing/testutils.ts");
var snaphotGenerators_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/snaphotGenerators */ "./src/Testing/fakeServices/fakeDataAccessHelpers/snaphotGenerators.ts");
var dealFlowDataGen_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/dealFlowDataGen */ "./src/Testing/fakeServices/fakeDataAccessHelpers/dealFlowDataGen.ts");
var pipelineRecordsFetchxmlGen_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/pipelineRecordsFetchxmlGen */ "./src/Testing/fakeServices/fakeDataAccessHelpers/pipelineRecordsFetchxmlGen.ts");
var OptyAdvFindFetchXml_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/FetchXMLs/OptyAdvFindFetchXml */ "./src/Testing/fakeServices/fakeDataAccessHelpers/FetchXMLs/OptyAdvFindFetchXml.ts");
var fcChartsDataGen_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/fcChartsDataGen */ "./src/Testing/fakeServices/fakeDataAccessHelpers/fcChartsDataGen.ts");
var snapPartRecordGen_1 = __webpack_require__(/*! ./fakeDataAccessHelpers/snapPartRecordGen */ "./src/Testing/fakeServices/fakeDataAccessHelpers/snapPartRecordGen.ts");
var FakeForecastDataAccess = (function () {
    function FakeForecastDataAccess(config) {
        this.config = config;
        this.recalcShouldFail = false;
        this.extraFiRequestTime = 0;
        this.networkDelay = 0;
        this.shouldAddColumnsForDataType = false;
        this.deltaRecomputeShouldFail = false;
        this.fiFetchRequestShouldFail = false;
        this.isPipelineMetadataCallInstant = false;
        this.isPipelineMetadataCallDone = false;
        this.numCallsCompleted = 0;
        this.callsCompleted = [];
        this.fiDb = {};
        this.fetchCnt = 0;
        this.shouldAddUnexpectedRowToMaResponse = false;
        this.histDict = {};
        this.manuallyAdjustShouldFail = false;
        this.shouldReturnUpperCaseFIIdInManualAdjustResponse = false;
        this.recomputeValidationResponseValue = 0;
        this.maxRecords = 500;
        this.recomputeValidationResponseValue = config.recomputeValidationResponse;
        this.networkDelay = config.networkDelay;
        try {
            this.onFetchFiSPY = jest.fn();
            this.manuallyAdjustRowSPY = jest.fn();
            this.manuallyAdjustHistorySPY = jest.fn();
            this.snapshotsSpy = jest.fn();
            this.snapshotsGridSpy = jest.fn();
            this.partFetchXmlSpy = jest.fn();
            this.deltaRecomputeSpy = jest.fn();
        }
        catch (_a) { }
    }
    FakeForecastDataAccess.prototype.fetchSIPackageStatus = function () {
        var _this = this;
        var response = true;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(response);
                _this.onNetworkCallComplete("fetchSIPackageStatus");
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.fetchFeatureState = function () {
        var response = "{\"ManualForecast\":1,\"Snapshot\":1,\"PredictiveForecast\":1}";
        var featureStateData = JSON.parse(response);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var featureState = {
                    isManualForecastEnabled: (featureStateData.ManualForecast === 1),
                    isPredictiveEnabled: (featureStateData.PredictiveForecast === 1),
                    isSnapshotEnabled: (featureStateData.Snapshot === 1)
                };
                resolve(featureState);
            });
        });
    };
    FakeForecastDataAccess.prototype.fetchLatestPredictiveTrend = function (forecastConfigurationId, forecastRecurrenceId, forecastInstnaceId, isRollup) {
        var _this = this;
        var response = fcChartsDataGen_1.generateFakeLatestPredictiveTrendData();
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(response);
                _this.onNetworkCallComplete("fetchLatestPredictiveTrend");
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.fetchForecastCumulativeTrendForAllCategories = function (forecastConfigurationId, forecastRecurrenceId, forecastInstnaceId, isRollup) {
        var _this = this;
        var response = fcChartsDataGen_1.generateForecastCumulativeTrendForAllCategories();
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(response);
                _this.onNetworkCallComplete("fetchForecastCumulativeTrendForAllCategories");
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.fetchLatestPredictedResultSplit = function (forecastConfigurationId, forecastRecurrenceId, forecastInstnaceId, isRollup) {
        var _this = this;
        var response = fcChartsDataGen_1.generateLatestPredictedResultSplit();
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(response);
                _this.onNetworkCallComplete("fetchLatestPredictedResultSplit");
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.fetchPredictionStatusForFC = function (forecastConfigurationId) {
        var _this = this;
        var response = fcChartsDataGen_1.generatePredictionStatus();
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(response);
                _this.onNetworkCallComplete("fetchPredictionStatusForFC");
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.fetchSILicenseStatus = function () {
        var _this = this;
        var response = fcChartsDataGen_1.generateSILicenseStatus();
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(response);
                _this.onNetworkCallComplete("fetchPredictionStatusForFC");
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.GetPipelineRecordsMetadata = function (forecastConfigurationId, forecastRecurrenceId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isPipelineMetadataCallDone = false;
            setTimeout(function () {
                if (!_this.config.shouldPipelineFetchXmlFail)
                    resolve(pipelineRecordsFetchxmlGen_1.partFetchXmlResp);
                else
                    reject(new Error("Error while fetching participating records fetchXml template"));
                _this.onNetworkCallComplete();
                _this.isPipelineMetadataCallDone = true;
            }, _this.isPipelineMetadataCallInstant ? 0 : _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.fetchForecastConfigurationWithRecurrences = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configs = FcFrGenerator_1.GetFakeForecastConfigList(_this.config.numFCs, _this.config.numFrPerFc, _this);
            setTimeout(function () {
                if (!_this.config.shouldFcFetchFail) {
                    if (configs.length > 0) {
                        configs[1].defaultPartRecordViewId = "onlyName";
                    }
                    resolve(configs);
                }
                else
                    reject(new Error("Error while fetching FCs"));
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.invokeRecomputeValidator = function (fcId, frId) {
        var _this = this;
        this.config.onReomputeInvoke(fcId, frId);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.recomputeValidationResponseValue);
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.recalculateHierarchy = function (fcId, frIds) {
        var _this = this;
        this.config.onFDataAccessRecompute(fcId, frIds[0]);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (_this.config.shouldFDataAccessRecomputeFail || _this.recalcShouldFail)
                    reject();
                else
                    resolve();
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.waitForNetworkCallsToComplete = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, testutils_1.waitFor(function () {
                            expect(_this.numCallsCompleted).toBeGreaterThanOrEqual(num);
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    FakeForecastDataAccess.prototype.waitForSpecificNetworkCallsToComplete = function (list) {
        return __awaiter(this, void 0, void 0, function () {
            var that;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4, testutils_1.waitFor(function () {
                                expect(list.every(function (item) { return that.callsCompleted.indexOf(item) >= 0; })).toBeTruthy();
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    FakeForecastDataAccess.prototype.resetNumNetworkCalls = function () {
        this.numCallsCompleted = 0;
    };
    FakeForecastDataAccess.prototype.resetSpecificNetworkCallsCompleted = function () {
        this.callsCompleted = [];
    };
    FakeForecastDataAccess.prototype.onNetworkCallComplete = function (functionName) {
        if (functionName === void 0) { functionName = ""; }
        this.numCallsCompleted++;
        if (functionName != "") {
            this.callsCompleted.push(functionName);
        }
    };
    FakeForecastDataAccess.prototype.updateFI = function (fi) {
        this.fiDb[fi.id] = fi;
    };
    FakeForecastDataAccess.prototype.fetchForecastInstances = function (forecastRecurrenceId, fcId, parentIds, pagesInfo, snapshotId) {
        var _this = this;
        this.onFetchFiSPY && this.onFetchFiSPY(forecastRecurrenceId, fcId, parentIds[0], pagesInfo[parentIds[0]], snapshotId);
        this.fetchCnt++;
        return new Promise(function (resolve, reject) {
            if (_this.fiFetchRequestShouldFail) {
                _this.onNetworkCallComplete();
                reject(new Error("Fetch forecast failed with a fake error"));
                return;
            }
            var fr = __assign(__assign({}, FcFrGenerator_1.CreateForecastRecurrenceWithId(forecastRecurrenceId)), { lastRecalculatedDateTime: "2019-10-1" + _this.fetchCnt + "T0" + _this.fetchCnt + ":00:00.0Z" });
            var FiGenerator = new FiGenerator_1.FakeFIGenerator(_this.config, forecastRecurrenceId, fcId, _this.updateFI.bind(_this), snapshotId != sharedEnums_1.EMPTY_GUID ? snapshotId.split("_")[5] : -1);
            var parent = parentIds[0];
            var forecastInstances = [];
            var hasMoreChildren = false;
            if (parent == "")
                forecastInstances.push(FiGenerator.createFakeFI("R", "", true, false, true));
            if (parent == forecastRecurrenceId + "_r") {
                forecastInstances.push(FiGenerator.createFakeFI("R.C0", "R", false, true, true));
                forecastInstances.push(FiGenerator.createFakeFI("R.C1", "R", true, true, true));
                forecastInstances.push(FiGenerator.createFakeFI("R.C2", "R", false, true, true));
            }
            if (parent == forecastRecurrenceId + "_r.c1") {
                var pageInfo = pagesInfo[forecastRecurrenceId + "_r.c1"];
                var stIdx = (pageInfo.pageNo - 1) * (pageInfo.pageSize);
                var endIdx = Math.min(stIdx + pageInfo.pageSize, _this.config.numberOfChildrenOf_R_C1);
                for (var i = stIdx; i < endIdx; i++) {
                    var fi4 = FiGenerator.createFakeFI("R.C1.C" + i, "R.C1", false);
                    forecastInstances.push(fi4);
                }
                if (endIdx < _this.config.numberOfChildrenOf_R_C1)
                    hasMoreChildren = true;
            }
            var outP = {
                forecastInstances: forecastInstances,
                forecastRecurrence: fr,
                hasMoreChildren: hasMoreChildren
            };
            setTimeout(function () {
                resolve(outP);
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay + _this.extraFiRequestTime);
        });
    };
    FakeForecastDataAccess.prototype._addManualAdjustmentHistory = function (toValue, fromValue, IsReset, notes, AdjustedByName, AdjustedOn) {
        return {
            Id: "",
            To: toValue == null ? 0 : toValue,
            From: fromValue,
            IsReset: IsReset,
            Notes: notes,
            AdjustedBy: "",
            AdjustedByName: "Same user",
            AdjustedOn: AdjustedOn,
        };
    };
    FakeForecastDataAccess.prototype.ManuallyAdjustRow = function (manualAdjustment) {
        var _this = this;
        this.manuallyAdjustRowSPY && this.manuallyAdjustRowSPY(manualAdjustment.ForecastInstanceId, manualAdjustment.ForecastConfigurationColumnId, manualAdjustment.Value, manualAdjustment.UpdatedColumnAttribute);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (_this.manuallyAdjustShouldFail) {
                    reject(new Error("Manual adjustment failed due to fake failure"));
                    return;
                }
                var outP = [];
                var idToUpdate = manualAdjustment.ForecastInstanceId;
                var newVal = manualAdjustment.Value;
                var _a = _this.createUpdatedFi(idToUpdate, manualAdjustment, newVal, true), diff = _a.diff, fi = _a.fi;
                outP.push(fi);
                if (fi.parentId) {
                    var origVal = _this.fiDb[fi.parentId].RollUpColumnData[manualAdjustment.ForecastConfigurationColumnId].rawValue;
                    var _b = _this.createUpdatedFi(fi.parentId, __assign(__assign({}, manualAdjustment), { UpdatedColumnAttribute: "" }), newVal == null ? null : origVal + diff, false, true), diff2 = _b.diff, fi2 = _b.fi;
                    outP.push(fi2);
                }
                if (_this.shouldAddUnexpectedRowToMaResponse) {
                    outP.push(__assign(__assign({}, fi), { id: "UNEXPECTED_" + fi.id }));
                }
                resolve(outP);
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.ManualAdjustHistory = function (historyReq) {
        var _this = this;
        this.manuallyAdjustHistorySPY && this.manuallyAdjustHistorySPY(historyReq.ForecastInstanceId, historyReq.ForecastConfigurationId, historyReq.ForecastConfigurationColumnId, historyReq.ColumnGroupType, historyReq.PageInfo);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var idToUpdate = historyReq.ForecastInstanceId;
                var fi = JSON.parse(JSON.stringify(_this.fiDb[idToUpdate]));
                var isAgg = historyReq.ColumnGroupType == 10;
                var key = _this._getKey(fi.id, historyReq.ForecastConfigurationColumnId, isAgg);
                resolve(_this.histDict[key]);
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype._getKey = function (rowId, colId, isRollup) {
        return rowId + "_" + colId + "_" + isRollup;
    };
    FakeForecastDataAccess.prototype.createUpdatedFi = function (idToUpdate, manualAdjustment, newVal, isManAdj, isRollupAdj) {
        if (isManAdj === void 0) { isManAdj = false; }
        if (isRollupAdj === void 0) { isRollupAdj = false; }
        var fi = JSON.parse(JSON.stringify(this.fiDb[idToUpdate]));
        var isAgg = manualAdjustment.UpdatedColumnAttribute == "AggregatedColumns";
        var newFi;
        if (isAgg) {
            newFi = fi.AggregateColumnData[manualAdjustment.ForecastConfigurationColumnId];
        }
        else {
            newFi = fi.RollUpColumnData[manualAdjustment.ForecastConfigurationColumnId];
        }
        var diff = (manualAdjustment.Value != null) ? (manualAdjustment.Value - newFi.rawValue) : 0;
        if (isManAdj) {
            var key = this._getKey(fi.id, manualAdjustment.ForecastConfigurationColumnId, isAgg);
            var value = this._addManualAdjustmentHistory(newVal, newFi.rawValue, newVal == null ? true : false, "Notes", "", "");
            if (this.histDict[key]) {
                this.histDict[key].push(value);
            }
            else {
                this.histDict[key] = [value];
            }
            newFi.originalValue = newFi.rawValue;
            newFi.isManualAdjusted = true;
            newFi.directAdjustedValue = newVal;
            if (newVal == null) {
                newFi.isManualAdjusted = false;
                newFi.directAdjustedValue = null;
                newVal = newFi.originalValue;
            }
            newFi.rawValue = newVal;
        }
        if (isRollupAdj) {
            if (newVal == null) {
                newFi.isRollupAdjusted = false;
                newVal = newFi.originalValue;
                newFi.rollupAdjustedValue = newFi.rawValue;
                newFi.rawValue = newFi.originalValue;
                newFi.originalValue = newFi.rawValue;
            }
            else {
                newFi.isRollupAdjusted = true;
                newFi.rollupAdjustedValue = newVal;
                newFi.originalValue = newFi.rawValue;
                newFi.rawValue = newVal;
            }
        }
        newFi.isEditable = false;
        newFi.showHistory = false;
        if (this.shouldReturnUpperCaseFIIdInManualAdjustResponse)
            fi.id = fi.id.toUpperCase();
        return { diff: diff, fi: fi };
    };
    FakeForecastDataAccess.prototype.recalculateRequestShouldFail = function () {
        this.recalcShouldFail = true;
    };
    FakeForecastDataAccess.prototype.createSnapshot = function (forecastRecurrenceId, forecastConfigurationId) {
        this.snapshotsSpy && this.snapshotsSpy("createSnapshot", forecastRecurrenceId, forecastConfigurationId);
        return new Promise(function (resolve, reject) {
        });
    };
    FakeForecastDataAccess.prototype.fetchSnapshotList = function (forecastRecurrenceId, forecastConfigurationId) {
        var _this = this;
        this.snapshotsSpy && this.snapshotsSpy("fetchSnapshotList", forecastRecurrenceId, forecastConfigurationId);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(snaphotGenerators_1.createSnapshotList(forecastRecurrenceId));
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.fetchDeaFlowData = function (forecastRecurrenceId, forecastConfigurationId, firstSnapshotId, secondSnapshotId) {
        var _this = this;
        this.snapshotsSpy && this.snapshotsSpy("fetchDeaFlowData", forecastRecurrenceId, forecastConfigurationId, firstSnapshotId, secondSnapshotId);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(dealFlowDataGen_1.dfData);
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.fetchCategoryDealFlowData = function (forecastConfigurationId, forecastInstanceId, forecastInstanceGroupType, dfEntityDataRequest) {
        var _this = this;
        var maxRecords = this.maxRecords;
        this.snapshotsGridSpy && this.snapshotsGridSpy("fetchCategoryDealFlowData", forecastConfigurationId, dfEntityDataRequest.DealFlowPipeSource.CategoryId, dfEntityDataRequest.DealFlowPipeDestination.CategoryId, dfEntityDataRequest.PageInfo.PageOffset, dfEntityDataRequest.DealFlowPipeSource.SnapshotId, dfEntityDataRequest.DealFlowPipeDestination.SnapshotId);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var outP = [];
                var stIdx = (dfEntityDataRequest.PageInfo.PageOffset) * (dfEntityDataRequest.PageInfo.PageSize);
                var endIdx = Math.min(stIdx + dfEntityDataRequest.PageInfo.PageSize, maxRecords);
                for (var i = stIdx; i < endIdx; i++) {
                    var rec = dealFlowDataGen_1.createDFGridRow(i, dfEntityDataRequest.DealFlowPipeSource.SnapshotId, dfEntityDataRequest.DealFlowPipeDestination.SnapshotId, dfEntityDataRequest.DealFlowPipeSource.CategoryName, dfEntityDataRequest.DealFlowPipeDestination.CategoryName);
                    outP.push(rec);
                }
                resolve(outP);
                _this.onNetworkCallComplete();
            }, _this.config.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.ParticipatingRecordsFetchXml = function (forecastInstanceId, forecastConfigurationColumnId, viewId, recordsType, isPersonalView, viewFetchXml) {
        var _this = this;
        this.partFetchXmlSpy && this.partFetchXmlSpy(forecastInstanceId, forecastConfigurationColumnId, viewId, recordsType, isPersonalView);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(OptyAdvFindFetchXml_1.OptyAdvFindFetchXml);
                _this.onNetworkCallComplete();
            }, _this.networkDelay);
        });
    };
    FakeForecastDataAccess.prototype.triggerDeltaRecompute = function (forecastConfigurationId, forecastRecurrenceId, changedFCColumnIDs, changedHierarchyRecordIDs) {
        var _this = this;
        this.deltaRecomputeSpy && this.deltaRecomputeSpy(forecastConfigurationId, forecastRecurrenceId, changedFCColumnIDs, changedHierarchyRecordIDs);
        return new Promise(function (resolve, reject) {
            var f = function (delay, shouldFail) {
                setTimeout(function () {
                    if (shouldFail) {
                        _this.onNetworkCallComplete("triggerDeltaRecompute");
                        reject(new Error("Delta recompute failed due to fake failure"));
                        return;
                    }
                    var outP = [];
                    var curFi = JSON.parse(JSON.stringify(_this.fiDb["fc_0_fr_0_r"]));
                    curFi.RollUpColumnData[changedFCColumnIDs[0]].rawValue = 777;
                    curFi.AggregateColumnData[changedFCColumnIDs[0]].rawValue = 777;
                    outP.push(curFi);
                    resolve(outP);
                    _this.onNetworkCallComplete("triggerDeltaRecompute");
                }, delay);
            };
            f(_this.networkDelay, _this.deltaRecomputeShouldFail);
        });
    };
    FakeForecastDataAccess.prototype.fetchParticipatingRecordsForSnapshot = function (forecastConfigId, snapshotId, forecastInstanceId, isRollupNode, categoryColumnId, pageInfo) {
        var _this = this;
        this.snapshotsGridSpy && this.snapshotsGridSpy("fetchParticipatingRecordsForSnapshot", forecastConfigId, snapshotId, forecastInstanceId, categoryColumnId);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var outP = [];
                var stIdx = (pageInfo.Skip) * (pageInfo.Count);
                var endIdx = Math.min(stIdx + pageInfo.Count, _this.maxRecords);
                for (var i = stIdx; i < endIdx; i++) {
                    var rec = snapPartRecordGen_1.createSnapshotPartRecordGridRow(i, snapshotId, forecastInstanceId, categoryColumnId);
                    outP.push(rec);
                }
                resolve({ records: outP, hasMorePages: endIdx < _this.maxRecords });
                _this.onNetworkCallComplete("fetchParticipatingRecordsForSnapshot");
            }, _this.config.networkDelay);
        });
    };
    return FakeForecastDataAccess;
}());
exports.FakeForecastDataAccess = FakeForecastDataAccess;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeForecastToastNotificationManager.ts":
/*!**************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeForecastToastNotificationManager.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FakeNotificationTypes;
(function (FakeNotificationTypes) {
    FakeNotificationTypes[FakeNotificationTypes["InGridSuccess"] = 1] = "InGridSuccess";
    FakeNotificationTypes[FakeNotificationTypes["InProgress"] = 2] = "InProgress";
    FakeNotificationTypes[FakeNotificationTypes["OutGridSuccess"] = 3] = "OutGridSuccess";
    FakeNotificationTypes[FakeNotificationTypes["OutGridError"] = 4] = "OutGridError";
    FakeNotificationTypes[FakeNotificationTypes["Clear"] = 5] = "Clear";
    FakeNotificationTypes[FakeNotificationTypes["Recompute"] = 6] = "Recompute";
})(FakeNotificationTypes = exports.FakeNotificationTypes || (exports.FakeNotificationTypes = {}));
var FakeNrtToastNotificationManager = (function () {
    function FakeNrtToastNotificationManager(config) {
        this.config = config;
        this.onRecalculate = function () { };
    }
    FakeNrtToastNotificationManager.prototype.addInGridSuccessNotification = function (onRefreshClick) {
        this.onRefresh = onRefreshClick;
        this.config.onNrtNotificationInvoke(FakeNotificationTypes.InGridSuccess);
        return new Promise(function (resolve, reject) {
        });
    };
    FakeNrtToastNotificationManager.prototype.addOutsideGridSuccessNotification = function (onRedirectClick) {
        this.onRedirect = onRedirectClick;
        this.config.onNrtNotificationInvoke(FakeNotificationTypes.OutGridSuccess);
        return new Promise(function (resolve, reject) {
        });
    };
    FakeNrtToastNotificationManager.prototype.addOutsideGridErrorNotification = function (onRedirectClick) {
        this.onRedirect = onRedirectClick;
        this.config.onNrtNotificationInvoke(FakeNotificationTypes.OutGridError);
        return new Promise(function (resolve, reject) {
        });
    };
    FakeNrtToastNotificationManager.prototype.addRecomputeNotification = function (onRecomputeClick) {
        this.onRecalculate = onRecomputeClick;
        this.config.onNrtNotificationInvoke(FakeNotificationTypes.Recompute);
        return new Promise(function (resolve, reject) {
        });
    };
    FakeNrtToastNotificationManager.prototype.addInProgressNotification = function () {
        this.config.onNrtNotificationInvoke(FakeNotificationTypes.InProgress);
        return new Promise(function (resolve, reject) {
        });
    };
    FakeNrtToastNotificationManager.prototype.clearNotifications = function () {
        this.config.onNrtNotificationInvoke(FakeNotificationTypes.Clear);
    };
    FakeNrtToastNotificationManager.prototype.simulateRefreshClick = function () {
        this.onRefresh && this.onRefresh();
    };
    FakeNrtToastNotificationManager.prototype.simulateRedirectClick = function () {
        this.onRedirect && this.onRedirect();
    };
    FakeNrtToastNotificationManager.prototype.addCreateSnapshotToast = function (msg) {
    };
    return FakeNrtToastNotificationManager;
}());
exports.FakeNrtToastNotificationManager = FakeNrtToastNotificationManager;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeMRUInfoProvider.ts":
/*!*********************************************************!*\
  !*** ./src/Testing/fakeServices/fakeMRUInfoProvider.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FakeMRUInfoProvider = (function () {
    function FakeMRUInfoProvider(config) {
        this.config = config;
        this.cache = {};
        try {
            this.spy = jest.fn();
        }
        catch (_a) { }
    }
    FakeMRUInfoProvider.prototype.setMRU_ID = function (entityName, id) {
        var _this = this;
        this.spy && this.spy("setMRU_ID", entityName, id);
        return new Promise(function (resolve, reject) {
            _this.cache[entityName] = id;
            resolve();
        });
    };
    FakeMRUInfoProvider.prototype.getMRU_ID = function (entityName) {
        var _this = this;
        this.spy && this.spy("getMRU_ID", entityName);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.cache[entityName]);
            }, _this.config.networkDelay);
        });
    };
    return FakeMRUInfoProvider;
}());
exports.FakeMRUInfoProvider = FakeMRUInfoProvider;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeNavigationHandler.ts":
/*!***********************************************************!*\
  !*** ./src/Testing/fakeServices/fakeNavigationHandler.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FakeNavigationHandler = (function () {
    function FakeNavigationHandler(config) {
        this.config = config;
    }
    FakeNavigationHandler.prototype.navigateToForecastGridPage = function () {
        this.config.onNavigateToForecastPage();
    };
    FakeNavigationHandler.prototype.listenToPageUnloadEvent = function (onUnload) {
        this.unload = onUnload;
    };
    FakeNavigationHandler.prototype.triggerPageUnload = function () {
        this.unload && this.unload();
    };
    return FakeNavigationHandler;
}());
exports.FakeNavigationHandler = FakeNavigationHandler;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeRecomputeNotificationsProvider.ts":
/*!************************************************************************!*\
  !*** ./src/Testing/fakeServices/fakeRecomputeNotificationsProvider.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var FakeRecomputeNotificationsProvider = (function () {
    function FakeRecomputeNotificationsProvider(config) {
        this.config = config;
    }
    FakeRecomputeNotificationsProvider.prototype.unsubscribeOldAndsubscribeNew = function (oldFrId, newFrId, onReceiveHandler) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.handler = onReceiveHandler;
            _this.config.onSubscribeOldNewCall(oldFrId, newFrId);
            if (_this.config.autoRecomputeSuccessTimeout >= 0) {
                setTimeout(function () {
                    _this.onSendNotification({ messageType: sharedEnums_1.NotificationMessageType.INFORMATION, messageContent: "", recomputeStatus: sharedEnums_1.RECOMPUTE_COMPLETE_STATUSCODE });
                }, _this.config.autoRecomputeSuccessTimeout);
            }
        });
    };
    FakeRecomputeNotificationsProvider.prototype.unsubscribe = function (frId) {
        return new Promise(function (resolve, reject) { });
    };
    FakeRecomputeNotificationsProvider.prototype.onSendNotification = function (msg) {
        if (this.handler) {
            this.handler(msg);
        }
    };
    FakeRecomputeNotificationsProvider.prototype.sendSuccessNotification = function () {
        if (this.handler) {
            var msg = { messageType: sharedEnums_1.NotificationMessageType.INFORMATION, messageContent: "", recomputeStatus: sharedEnums_1.RECOMPUTE_COMPLETE_STATUSCODE };
            this.handler(msg);
        }
    };
    FakeRecomputeNotificationsProvider.prototype.sendFailNotification = function () {
        if (this.handler) {
            var msg = { messageType: sharedEnums_1.NotificationMessageType.ERROR, messageContent: "", recomputeStatus: 0 };
            this.handler(msg);
        }
    };
    return FakeRecomputeNotificationsProvider;
}());
exports.FakeRecomputeNotificationsProvider = FakeRecomputeNotificationsProvider;


/***/ }),

/***/ "./src/Testing/fakeServices/fakeServiceConfig.ts":
/*!*******************************************************!*\
  !*** ./src/Testing/fakeServices/fakeServiceConfig.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFakeServiceConfig = {
    numFCs: 3,
    networkDelay: 0,
    numFrPerFc: 3,
    onSubscribeOldNewCall: function () { },
    onReomputeInvoke: function () { },
    recomputeValidationResponse: 0,
    autoRecomputeSuccessTimeout: -1,
    onNrtNotificationInvoke: function () { },
    onNavigateToForecastPage: function () { },
    onFDataAccessRecompute: function () { },
    onDialogMethodCalled: function () { },
    shouldFDataAccessRecomputeFail: false,
    shouldFcFetchFail: false,
    shouldPipelineFetchXmlFail: false,
    numberOfChildrenOf_R_C1: 1
};


/***/ }),

/***/ "./src/Testing/fakeServices/fakeStringsProvider.ts":
/*!*********************************************************!*\
  !*** ./src/Testing/fakeServices/fakeStringsProvider.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FakeStringsProvider = (function () {
    function FakeStringsProvider(config) {
        this.config = config;
    }
    FakeStringsProvider.prototype.getLocalizedString = function (key) {
        if (key == "AppendWithSpace")
            return "{0} {1}";
        if (key == "CurrentRecurrence")
            return "(Current)";
        return key;
    };
    return FakeStringsProvider;
}());
exports.FakeStringsProvider = FakeStringsProvider;


/***/ }),

/***/ "./src/Testing/testutils.ts":
/*!**********************************!*\
  !*** ./src/Testing/testutils.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var waitForExpect = __webpack_require__(/*! wait-for-expect */ "./node_modules/wait-for-expect/lib/index.js");
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.sleep = sleep;
function waitFor(fn) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, waitForExpect(function () {
                        fn();
                    })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.waitFor = waitFor;
function AddDays(days, currentTime) {
    if (currentTime === void 0) { currentTime = new Date(); }
    var offset = days * (24 * 60 * 60 * 1000);
    var date = new Date();
    return date.setTime(currentTime.getTime() + offset).valueOf();
}
exports.AddDays = AddDays;
function SubtractDays(days, currentTime) {
    if (currentTime === void 0) { currentTime = new Date(); }
    var offset = days * (24 * 60 * 60 * 1000);
    var date = new Date();
    return date.setTime(currentTime.getTime() - offset).valueOf();
}
exports.SubtractDays = SubtractDays;


/***/ }),

/***/ "./src/Utility/ErrorHandling/CrmErrorDialogBasedHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/Utility/ErrorHandling/CrmErrorDialogBasedHandler.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CrmErrorDialogBasedHandler = (function () {
    function CrmErrorDialogBasedHandler(dialogManager) {
        this.dialogManager = dialogManager;
    }
    CrmErrorDialogBasedHandler.prototype.handleError = function (message, errorCode, detailsObj) {
        var details = detailsObj.stack ? detailsObj.stack : JSON.stringify(detailsObj);
        this.dialogManager.ShowErrorDialog(message, errorCode, details);
    };
    return CrmErrorDialogBasedHandler;
}());
exports.CrmErrorDialogBasedHandler = CrmErrorDialogBasedHandler;


/***/ }),

/***/ "./src/Utility/Logging/NullLogger.ts":
/*!*******************************************!*\
  !*** ./src/Utility/Logging/NullLogger.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __webpack_require__(/*! ../../Interface/logging */ "./src/Interface/logging.ts");
var NullLogger = (function () {
    function NullLogger(logLevel) {
        if (logLevel === void 0) { logLevel = logging_1.ILogLevel.Debug; }
        this.logLevel = logLevel;
    }
    NullLogger.prototype.logCategory = function (category, component, message, args) {
    };
    NullLogger.prototype.logError = function (component, error, suggestion, args) {
    };
    return NullLogger;
}());
exports.NullLogger = NullLogger;


/***/ }),

/***/ "./src/Utility/Logging/consoleLogger.ts":
/*!**********************************************!*\
  !*** ./src/Utility/Logging/consoleLogger.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __webpack_require__(/*! ../../Interface/logging */ "./src/Interface/logging.ts");
var ConsoleLogger = (function () {
    function ConsoleLogger(logLevel) {
        this.logLevel = logLevel;
    }
    ConsoleLogger.prototype.logCategory = function (category, component, message, args) {
        switch (category) {
            case logging_1.ILogLevel.Debug:
                console.info("ForecastPageUIApi [Debug]: " + component + " - " + message + " - " + JSON.stringify(args, null, 2));
                return;
            case logging_1.ILogLevel.Info:
                console.info("ForecastPageUIApi [Info]: " + component + " - " + message + " - " + JSON.stringify(args, null, 2));
                return;
            case logging_1.ILogLevel.Error:
                console.error("ForecastPageUIApi [Error]: " + component + " - " + message + " - " + JSON.stringify(args, null, 2));
                return;
            case logging_1.ILogLevel.Warning:
                console.warn("ForecastPageUIApi [Warning]: " + component + " - " + message + " - " + JSON.stringify(args, null, 2));
                return;
            case logging_1.ILogLevel.Usage:
                console.log("ForecastPageUIApi [Usage]: " + component + " - " + message + " - " + JSON.stringify(args, null, 2));
                return;
            default:
                console.log("ForecastPageUIApi: " + component + " - " + message + " - " + JSON.stringify(args, null, 2));
                return;
        }
    };
    ConsoleLogger.prototype.logError = function (component, error, suggestion, args) {
        console.error("ForecastPageUIApi [Error]: " + component + " - " + error.stack + " - " + JSON.stringify(args, null, 2));
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;


/***/ }),

/***/ "./src/Utility/Survey/SurveyHandler.ts":
/*!*********************************************!*\
  !*** ./src/Utility/Survey/SurveyHandler.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
var SurveyHandler = (function () {
    function SurveyHandler(logger) {
        this.logger = logger;
    }
    SurveyHandler.prototype.callTriggerEvent = function (surveyType, triggerSource) {
        var _this = this;
        var surveyInfo = this.getSurveyDetailsBySurveyType(surveyType);
        var SurveyName = surveyInfo.surveyName;
        var EventName = surveyInfo.eventName;
        var baseurl = window.location.origin;
        var ce = new CesLib(baseurl, SurveyName);
        this.logger.logCategory(forecastPageTypes_1.ILogLevel.Info, "SurveyHandler-callTriggerEvent-start", "Event is triggered", { "TriggerSource": triggerSource });
        ce.callTriggerEventAPI(EventName)
            .then(function (eventid) {
            _this.logger.logCategory(forecastPageTypes_1.ILogLevel.Info, "SurveyHandler-callTriggerEvent-end", "Event is triggered", { "EvendId": eventid });
        })
            .catch(function (error) {
            _this.logger.logError("SurveyHandler-callTriggerEvent-end", error, "Showing survey has encountered an error", {});
        });
    };
    SurveyHandler.prototype.validateEligibility = function (surveyType, triggerSource) {
        var _this = this;
        var surveyInfo = this.getSurveyDetailsBySurveyType(surveyType);
        var SurveyName = surveyInfo.surveyName;
        var baseurl = window.location.origin;
        var ce = new CesLib(baseurl, SurveyName);
        this.logger.logCategory(forecastPageTypes_1.ILogLevel.Info, "SurveyHandler-validateEligibility-start", "Validating eligibility for the survey", { "TriggerSource": triggerSource });
        ce.callValidateEligibilityAPI()
            .then(function (formsid) {
            if (formsid) {
                _this.displayFormsProSurvey(formsid, ce, triggerSource);
                _this.logger.logCategory(forecastPageTypes_1.ILogLevel.Info, "SurveyHandler-validateEligibility-end", "Displayed survey to the user, call completed", {});
            }
            else {
                _this.logger.logCategory(forecastPageTypes_1.ILogLevel.Info, "SurveyHandler-validateEligibility-end", "Validating eligibility for the survey call completed", {});
            }
        })
            .catch(function (error) {
            _this.logger.logError("SurveyHandler-validateEligibility-end", error, "Showing survey has encountered an error", {});
        });
    };
    SurveyHandler.prototype.callTriggerAndValidateEligibility = function (surveyType, triggerSource) {
        var _this = this;
        var surveyInfo = this.getSurveyDetailsBySurveyType(surveyType);
        var SurveyName = surveyInfo.surveyName;
        var EventName = surveyInfo.eventName;
        var baseurl = window.location.origin;
        var ce = new CesLib(baseurl, SurveyName);
        this.logger.logCategory(forecastPageTypes_1.ILogLevel.Info, "SurveyHandler-callTriggerAndValidateEligibility-start", "Triggers Event and Validating eligibility for the survey", { "TriggerSource": triggerSource });
        ce.callTriggerAndValidateEligibilityAPI(EventName)
            .then(function (formsid) {
            if (formsid) {
                var formsContext = _this.displayFormsProSurvey(formsid, ce, triggerSource);
                _this.logger.logCategory(forecastPageTypes_1.ILogLevel.Info, "SurveyHandler-callTriggerAndValidateEligibility-end", "Displayed survey to the user, call completed", { "orgId": formsContext.OrganizationId, "TriggerSource": formsContext.TriggerSource });
            }
            else {
                _this.logger.logCategory(forecastPageTypes_1.ILogLevel.Info, "SurveyHandler-callTriggerAndValidateEligibility-end", "Validating eligibility for the survey call completed", {});
            }
        })
            .catch(function (error) {
            _this.logger.logError("SurveyHandler-callTriggerAndValidateEligibility-end", error, "Showing survey has encountered an error", {});
        });
    };
    SurveyHandler.prototype.displayFormsProSurvey = function (formsid, ce, triggerSource) {
        var se = new SurveyEmbed(formsid, "https://forms.office.com/formspro/", "https://mfpembedcdnmsit.azureedge.net/mfpembedcontmsit/", "true");
        var globalContext = window.Xrm.Utility.getGlobalContext();
        var userId = globalContext.userSettings && globalContext.userSettings.userId && globalContext.userSettings.userId.toString().replace(/[{}]/g, "");
        var productContext = "Forecasting";
        var locale = "";
        if (globalContext && globalContext.userSettings && globalContext.userSettings.languageId) {
            locale = ce.getLanguageCode(globalContext.userSettings.languageId);
        }
        var formscontext = {
            locale: locale,
            UserId: userId,
            OrganizationId: globalContext.organizationSettings.organizationId,
            Culture: locale,
            UrlReferrer: window.location.href,
            ProductContext: productContext,
            TriggerSource: triggerSource
        };
        se.renderPopup(formscontext);
        return formscontext;
    };
    SurveyHandler.prototype.getSurveyDetailsBySurveyType = function (surveyType) {
        var surveyInfo = {};
        switch (surveyType) {
            case forecastPageTypes_1.ForecastingSurveyType.DealFlow:
                surveyInfo.surveyName = "forecastingdealflowsurvey";
                surveyInfo.eventName = "forecastingdealflowpageevent";
                break;
            case forecastPageTypes_1.ForecastingSurveyType.ForecastingGrid:
                surveyInfo.surveyName = "forecastinggridsurvey";
                surveyInfo.eventName = "forecastinggridpageevent";
                break;
            case forecastPageTypes_1.ForecastingSurveyType.Predictive:
                surveyInfo.surveyName = "forecastingpredictivesurvey";
                surveyInfo.eventName = "forecastingpredictivepageevent";
                break;
        }
        return surveyInfo;
    };
    return SurveyHandler;
}());
exports.SurveyHandler = SurveyHandler;


/***/ }),

/***/ "./src/Utility/guidUtils.ts":
/*!**********************************!*\
  !*** ./src/Utility/guidUtils.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GuidUtils = (function () {
    function GuidUtils() {
    }
    GuidUtils.NewGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return GuidUtils;
}());
exports.GuidUtils = GuidUtils;


/***/ }),

/***/ "./src/Utility/stringUtility.ts":
/*!**************************************!*\
  !*** ./src/Utility/stringUtility.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function normalizeGuid(guid) {
    if (!guid)
        return "";
    return guid.toLocaleLowerCase();
}
exports.normalizeGuid = normalizeGuid;
function abbreviateNumber(value, precision, currencySymbol) {
    if (currencySymbol === void 0) { currencySymbol = ""; }
    if (value === null) {
        return null;
    }
    if (value === 0) {
        return currencySymbol + '0';
    }
    precision = (!precision || precision < 0) ? 0 : precision;
    var powerValue = Number(value).toPrecision(1).split("e"), roundedValue = powerValue.length === 1 ? 0 : Math.floor(Math.min(Number(powerValue[1].slice(1)), 14) / 3), shortValue = roundedValue < 1 ? Number(value).toFixed(0 + precision) : Number(value / Math.pow(10, roundedValue * 3)).toFixed(1 + precision), positiveShortValue = Number(shortValue) < 0 ? shortValue : Math.abs(Number(shortValue)), abbrevatedValue = currencySymbol + positiveShortValue + ['', 'K', 'M', 'B', 'T'][roundedValue];
    return abbrevatedValue;
}
exports.abbreviateNumber = abbreviateNumber;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var forecastPageUiApi_1 = __webpack_require__(/*! ./ForecastPageUiApi/forecastPageUiApi */ "./src/ForecastPageUiApi/forecastPageUiApi.ts");
exports.ForecastPageUiApi = forecastPageUiApi_1.ForecastPageUiApi;
var fakeContextServicesFactory_1 = __webpack_require__(/*! ./Testing/fakeServices/fakeContextServicesFactory */ "./src/Testing/fakeServices/fakeContextServicesFactory.ts");
exports.getFakeContextServices = fakeContextServicesFactory_1.getFakeContextServices;
__export(__webpack_require__(/*! ./Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts"));


/***/ })

/******/ });
//# sourceMappingURL=forecastpageapi.js.map