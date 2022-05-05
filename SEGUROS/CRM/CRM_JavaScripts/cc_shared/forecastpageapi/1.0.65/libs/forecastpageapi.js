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
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var forecastPageTypes_1 = __webpack_require__(/*! ../../Interface/forecastPageTypes */ "./src/Interface/forecastPageTypes.ts");
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
        var toComp = snapId == sharedEnums_1.EMPTY_GUID ? "" : snapId;
        return this.context.stateManager.snapshot.getActiveMainSnapshotId() == toComp;
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
    BaseUiApi.prototype.logCategory = function (logLevel, component, message, args) {
        if (args === void 0) { args = {}; }
        if (this.logger.logLevel <= logLevel)
            this.logger.logCategory(logLevel, component, message, args);
    };
    BaseUiApi.prototype.logInfo = function (component, message, args) {
        if (args === void 0) { args = {}; }
        this.logCategory(forecastPageTypes_1.ILogLevel.Info, component, message, args);
    };
    BaseUiApi.prototype.logDebug = function (component, message, args) {
        if (args === void 0) { args = {}; }
        this.logCategory(forecastPageTypes_1.ILogLevel.Debug, component, message, args);
    };
    BaseUiApi.prototype.logError = function (component, error, suggestion, args) {
        if (args === void 0) { args = {}; }
        this.logger.logError(component, error, suggestion, args);
    };
    BaseUiApi.prototype.logWarning = function (component, message, args) {
        if (args === void 0) { args = {}; }
        this.logCategory(forecastPageTypes_1.ILogLevel.Warning, component, message, args);
    };
    BaseUiApi.prototype.logUsage = function (component, event, args) {
        if (args === void 0) { args = {}; }
        this.logCategory(forecastPageTypes_1.ILogLevel.Usage, component, event, args);
    };
    return BaseUiApi;
}());
exports.BaseUiApi = BaseUiApi;


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
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var types_1 = __webpack_require__(/*! ../fiGridApi/types */ "./src/ForecastPageUiApi/fiGridApi/types.ts");
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var EditWithHistoryApiImpl = (function (_super) {
    __extends(EditWithHistoryApiImpl, _super);
    function EditWithHistoryApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.fiGrid;
        return _this;
    }
    EditWithHistoryApiImpl.prototype.onEditClick = function (rowId, colId) {
        this.logUsage("FI_ManualAdjust", "Edit icon clicked", { rowId: rowId, colId: colId });
        this.updateCalloutCell(rowId, colId);
        this._updateCellWithErrorMessage({ cellId: types_1.NULL_CELLINFO, errorMessage: "" });
        this.updateHistoryData([]);
        this.triggerAdjustmentHistoryFetch();
    };
    EditWithHistoryApiImpl.prototype.onCalloutDismiss = function () {
        this.logUsage("FI_ManualAdjust", "Callout dismissed", {});
        this.updateCalloutCell("", "");
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
        outP.ownerName = fi.HierarchyEntityData.recordName;
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
        this.logInfo("ManAdjustRequest", "start");
        this.logDebug("ManAdjustRequest", "request value", { manualAdjReq: manualAdjReq });
        this.context.forecastServices.forecastDataAccess.ManuallyAdjustRow(manualAdjReq).then(function (newFiList) {
            _this.logInfo("ManAdjustRequest", "completed");
            _this.logDebug("ManAdjustRequest", "Response value", { newFiList: newFiList });
            _this.updateLoadingCell("", "");
            _this.noteChangedCellsForHighlight({ frId: frId, newFiList: newFiList });
            _this.updateAdjustedFiData({ frId: frId, newFiList: newFiList });
        }).catch(function (error) {
            _this.logError("ManualAdjustment request failed", error, '');
            _this.updateLoadingCell("", "");
            var errorCellInfo = { cellId: cell, errorMessage: error.meesage ? error.meesage : _this.context.forecastServices.stringsProvider.getLocalizedString(sharedEnums_1.MA_REQUEST_FAILED) };
            _this._updateCellWithErrorMessage(errorCellInfo);
        });
        this.updateLoadingCell(cell.rowId, cell.colId);
        this.updateCalloutCell("", "");
        this.stateManager.setAdjustedValue(newValue);
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
    EditWithHistoryApiImpl.prototype.updateAdjustedFiData = function (_a) {
        var frId = _a.frId, newFiList = _a.newFiList;
        this.context.stateManager.fiGrid.updateFIRollupData(frId, newFiList);
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
var FcFrManager = (function (_super) {
    __extends(FcFrManager, _super);
    function FcFrManager(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.fcListItemSelector = reselect_1.createSelector(function (allFcs) { return allFcs; }, function (allFCs) { return allFCs.map(function (fc) {
            return {
                id: fc.id,
                title: fc.name
            };
        }); });
        _this.frListItemSelector = reselect_1.createSelector(function (allFcs) { return allFcs; }, function (allFRs) { return allFRs.map(function (fr) {
            return {
                id: fr.id,
                title: fr.name
            };
        }); });
        _this.fcFetchCompleteAndNoneFound = false;
        _this.stateManager = _this.context.stateManager.fcFr;
        return _this;
    }
    FcFrManager.prototype.getFCList = function () {
        return this.fcListItemSelector(this.stateManager.getFcList());
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
        this.updateActiveFcIdInState({ newId: newId });
        this.selectFirstFrFromList({ newId: newId });
    };
    FcFrManager.prototype.selectFirstFrFromList = function (_a) {
        var newId = _a.newId;
        var frList = this.getFRList();
        if (frList.length > 0) {
            this.onFrChange(frList[0].id);
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
    FcFrManager.prototype.onFrChange = function (newId) {
        var oldFrId = this.getActiveFRId();
        this._onFrChange({ newId: newId, oldFrId: oldFrId });
        this.fullApi.nearRealTime._onFrChange({ newId: newId, oldFrId: oldFrId });
        this.fullApi.snapshots._onFrChange({ newId: newId, oldFrId: oldFrId });
        this.fullApi.fiGrid._onFrChange({ newId: newId, oldFrId: oldFrId });
        this.fullApi.partRecordViewer._onFrChange({ newId: newId, oldFrId: oldFrId });
        this.fullApi.partRecordGrid._onFrChange({ newId: newId, oldFrId: oldFrId });
    };
    FcFrManager.prototype.getActiveFC = function () {
        return this.stateManager.getActiveFc();
    };
    FcFrManager.prototype.selectFirstFcFromList = function (_a) {
        var fcs = _a.fcs;
        this.onFcChange(fcs[0].id);
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
    FcFrManager.prototype._fetchForecastConfigs = function () {
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
                        if (fcs.length > 0) {
                            this.storeFcListInState({ fcs: fcs });
                            this.selectFirstFcFromList({ fcs: fcs });
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
    return FcFrManager;
}(baseUiApi_1.BaseUiApi));
exports.FcFrManager = FcFrManager;
function generateEmptyFR() {
    return {
        id: "",
        name: "",
        lastRecalculatedDateTime: "",
        lastRecalculatedStatus: 0,
        rootForecastInstanceId: ""
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
        return this.getVisibleColumnDefinitions(fc).map(function (c) { return _this.getFiGridColumnFromFCColumnDefinition(c); });
    };
    FiColumnsSelector.prototype.getFiGridColumnFromFCColumnDefinition = function (c) {
        return {
            id: c.id,
            headerText: c.localizedHeaderTitle,
            columnType: this.convertToGridColumnType(c),
            hasShowOpportunityContextMenu: c.forecastColumnType == __1.ForecastColumnType.Rollup
        };
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
        var newId = _a.newId;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var pageInfos = this.createPageInfoDict("", 1);
        this.logInfo("FiFetch - root", "started", { newId: newId });
        this.stateManager.setIsFiGridLoading(true);
        this.stateManager.resetPageInfoDict();
        var snapId = this.context.stateManager.snapshot.getActiveMainSnapshotId() || __1.EMPTY_GUID;
        this.context.forecastServices.forecastDataAccess.fetchForecastInstances(newId, fcId, [""], pageInfos, snapId).then(function (fiResponse) {
            _this.logInfo("FiFetch - root", "complete");
            _this.logDebug("FiFetch - root", "respones value", { fiResponse: fiResponse });
            if (_this.isCurrentFR(newId) && _this.isCurrentSnapshot(snapId)) {
                _this.fullApi.fiGrid.fiHierarchy.updateRootFiInState({ frId: newId, fiResponse: fiResponse });
                _this.fullApi.fiGrid.fiHierarchy.expandRootFiNode({ fiResponse: fiResponse });
                _this.fullApi.fiGrid.updateForecastRecurrence({ frId: newId, fiResponse: fiResponse });
            }
        }).catch(function (e) {
            _this.logError("FiFetcher.fetchRootFi", e, '');
        }).finally(function () {
            _this.stateManager.setIsFiGridLoading(false);
        });
    };
    FiFetcher.prototype.fetchChildRows = function (_a) {
        var rowId = _a.rowId;
        var pageNo = 1;
        this.fetchChildFiForParentAndPageNo(rowId, pageNo);
    };
    FiFetcher.prototype.fetchNextPageForChildRows = function (_a) {
        var rowId = _a.rowId, pageNo = _a.pageNo;
        this.fetchChildFiForParentAndPageNo(rowId, pageNo);
    };
    FiFetcher.prototype.fetchChildFiForParentAndPageNo = function (rowId, pageNo) {
        var _this = this;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        var pageInfos = this.createPageInfoDict(rowId, pageNo);
        this.logInfo("FiFetch", "started", { rowId: rowId, pageNo: pageNo });
        var snapId = this.context.stateManager.snapshot.getActiveMainSnapshotId() || __1.EMPTY_GUID;
        this.context.forecastServices.forecastDataAccess.fetchForecastInstances(frId, fcId, [rowId], pageInfos, snapId).then(function (fiResponse) {
            _this.logInfo("FiFetch", "complete");
            _this.logDebug("FiFetch", "respones value", { fiResponse: fiResponse });
            if (_this.isCurrentFR(frId) && _this.isCurrentSnapshot(snapId)) {
                _this.fullApi.fiGrid.fiHierarchy.updateChildFiRecordsInState({ frId: frId, fiResponse: fiResponse });
                _this.fullApi.fiGrid.fiHierarchy.markChildRecordsFetchComplete({ rowId: rowId });
                _this.fullApi.fiGrid.updateFIPagingInfoInState({ frId: frId, fiResponse: fiResponse, rowId: rowId, pageNo: pageNo });
                _this.fullApi.fiGrid.updateForecastRecurrence({ frId: frId, fiResponse: fiResponse });
                _this.fullApi.fiGrid.fiHierarchy.expandPreviouslyExpandedRows({ fiResponse: fiResponse });
            }
        }).catch(function (e) {
            _this.logError("FiFetcher.fetchChildRows", e, '');
        });
    };
    FiFetcher.prototype.createPageInfoDict = function (rowId, pageNo) {
        var _a;
        return _a = {},
            _a[rowId] = {
                pageNo: pageNo,
                pageSize: __1.PAGE_SIZE,
                sortByAttribute: "HierarchyEntityRecord.RecordName",
                sortOrderByAscending: true
            },
            _a;
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
Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var fiFetcher_1 = __webpack_require__(/*! ./fiFetcher */ "./src/ForecastPageUiApi/fiGridApi/fiFetcher.ts");
var manualAdjustmentManager_1 = __webpack_require__(/*! ./manualAdjustmentManager */ "./src/ForecastPageUiApi/fiGridApi/manualAdjustmentManager.ts");
var fiGridCommon_1 = __webpack_require__(/*! ./fiGridCommon */ "./src/ForecastPageUiApi/fiGridApi/fiGridCommon.ts");
var fiRowsSelector_1 = __webpack_require__(/*! ./fiRowsSelector */ "./src/ForecastPageUiApi/fiGridApi/fiRowsSelector.ts");
var hierarchyManagement_1 = __webpack_require__(/*! ./hierarchyManagement */ "./src/ForecastPageUiApi/fiGridApi/hierarchyManagement.ts");
var fiColumnsSelector_1 = __webpack_require__(/*! ./fiColumnsSelector */ "./src/ForecastPageUiApi/fiGridApi/fiColumnsSelector.ts");
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
    FiGridApiImpl.prototype.onExpandClick = function (rowId) {
        this.logUsage("FiGrid", "Hierarchy expand clicked", { rowId: rowId });
        var isAlreadyExpanded = this.isFiExpanded(rowId);
        if (isAlreadyExpanded) {
            this.fiHierarchy.collapseFiInState({ rowId: rowId });
        }
        else {
            if (this.stateManager.fiChildrenAlreadyFetchedForParent(rowId)) {
                this.fiHierarchy.expandFiInState({ rowId: rowId });
            }
            else {
                this.fiHierarchy.expandUnfetchedRow({ rowId: rowId });
            }
        }
    };
    FiGridApiImpl.prototype.onLazyLoadTrigger = function (parentId, pageNo) {
        this.logUsage("FIGrid", "Lazy load called");
        this.logDebug("FIGrid", "Lazy load params", { parentId: parentId, pageNo: pageNo });
        this.fiDataFetcher.fetchNextPageForChildRows({ rowId: parentId, pageNo: pageNo });
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
    };
    FiGridApiImpl.prototype.onCellSelect = function (rowId, colId) {
        this.logUsage("FIGrid", "Cell select called", { rowId: rowId, colId: colId });
        this.stateManager.setSelectedCell({ rowId: rowId, colId: colId });
        this.stateManager.setFocusedCell({ rowId: rowId, colId: colId });
        this.fullApi.partRecordViewer._onCellSelect(rowId, colId);
    };
    FiGridApiImpl.prototype.onCellFocus = function (rowId, colId) {
        this.logUsage("FIGrid", "Cell focus called", { rowId: rowId, colId: colId });
        this.stateManager.setFocusedCell({ rowId: rowId, colId: colId });
    };
    FiGridApiImpl.prototype.onShowOpportunities = function (rowId, colId) {
        var isAgg = rowId.endsWith("_agg");
        var rowType = isAgg ? "" + sharedEnums_1.ForecastInstanceColumnGroupType.Aggregated : "" + sharedEnums_1.ForecastInstanceColumnGroupType.RolledUp;
        var fc = this.context.stateManager.fcFr.getActiveFc();
        this.context.forecastServices.forecastDialogsManager.ShowOpportunities(this.normalizeID(rowId), colId, fc.rollupEntity, rowType);
    };
    FiGridApiImpl.prototype.onRefresh = function () {
        this.logUsage("FIGrid", "Refresh called");
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        this.fullApi.fcfrManager.onFrChange(frId);
        this.context.forecastServices.nrtToastNotificationsManager.clearNotifications();
    };
    FiGridApiImpl.prototype.onForecastRecurrenceUpdate = function (fr) {
        this.context.stateManager.fcFr.updateFr(fr);
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
    FiGridApiImpl.prototype._onFrChange = function (args) {
        this.clearFiListForFr(args);
        this.fiDataFetcher.fetchRootFI(args);
        this.fiHierarchy.resetChildRecordsFetchStatusDict();
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
        flattenedFiIdList.map(function (_a) {
            var id = _a.id, indentationLevel = _a.indentationLevel, hasMoreChildren = _a.hasMoreChildren, nextPageNo = _a.nextPageNo;
            var fi = fiListState.byId[id];
            var outP = _this.getFiGridRowFromFI(fi, fc, false, indentationLevel, quotaColumnId);
            outP.shouldAddLazyLoadCue = hasMoreChildren;
            outP.lazyLoadNextPageNumber = nextPageNo;
            fiListOutp.push(outP);
            if (_this.shouldAddChildAggregateNode(fi)) {
                var outP_1 = _this.getFiGridRowFromFI(fi, fc, true, indentationLevel + 1, quotaColumnId);
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
                    if (col.forecastColumnType !== __1.ForecastColumnType.Rollup) {
                        row.isRowSelected = true;
                    }
                }
            }
        }
    };
    FiRowsSelector.prototype.shouldAddChildAggregateNode = function (fi) {
        return fi.hasSelfAggregateNode && this.isFiExpanded(fi.id) && this.stateManager.fiChildrenAlreadyFetchedForParent(fi.id);
    };
    FiRowsSelector.prototype.getFiGridRowFromFI = function (fi, fc, isChildAggregateNode, indendationLevel, quotaColId) {
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
        this.populateCellDataToFiGridRow(fc, outP, fi, fiColumnData, quotaColId);
        return outP;
    };
    FiRowsSelector.prototype.populateCellDataToFiGridRow = function (fc, outP, fi, fiColumnData, quotaColId) {
        var _this = this;
        this.getVisibleColumnDefinitions(fc).map(function (col) {
            switch (col.forecastColumnType) {
                case __1.ForecastColumnType.HierarchyPrimary:
                    {
                        outP.cellData[col.id] = {
                            displayValue: (fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].displayValue) || fi.HierarchyEntityData.recordName
                        };
                        break;
                    }
                case __1.ForecastColumnType.Quota:
                case __1.ForecastColumnType.Calculated:
                case __1.ForecastColumnType.Predictive:
                case __1.ForecastColumnType.Rollup:
                    {
                        outP.cellData[col.id] = {
                            displayValue: fiColumnData && fiColumnData[col.id] && _this.getBaseCurrencyFormattedValue(fiColumnData[col.id].rawValue),
                            rawValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].rawValue,
                        };
                        if (col.isEditable) {
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
                        if (col.showProgressComparedToQuota && fiColumnData && fiColumnData[col.id]) {
                            outP.cellData[col.id].progressBarValue = _this.calculateProgressBarValue(fi, fiColumnData, col.id, quotaColId);
                        }
                        break;
                    }
                case __1.ForecastColumnType.HierarchySecondary:
                    {
                        outP.cellData[col.id] = {
                            displayValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].displayValue
                        };
                        break;
                    }
                default:
                    {
                        outP.cellData[col.id] = {
                            displayValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].displayValue,
                            rawValue: fiColumnData && fiColumnData[col.id] && fiColumnData[col.id].rawValue,
                        };
                        break;
                    }
            }
        });
    };
    FiRowsSelector.prototype.calculateProgressBarValue = function (fi, fiCellData, colId, quotaColId) {
        var quotaVal = fiCellData[quotaColId] && fiCellData[quotaColId].rawValue;
        var rawVal = fiCellData[colId] && fiCellData[colId].rawValue;
        if (!quotaVal || !rawVal || !quotaColId)
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
        var fiResponse = _a.fiResponse;
        var isExpandDict = this.getIsExpandedDict();
        fiResponse.forecastInstances.map(function (fi) {
            if (isExpandDict[fi.id]) {
                _this.expandUnfetchedRow({ rowId: fi.id });
            }
        });
    };
    HierarchyManagementApi.prototype.expandRootFiNode = function (_a) {
        var fiResponse = _a.fiResponse;
        if (fiResponse.forecastInstances && fiResponse.forecastInstances.length > 0)
            this.expandUnfetchedRow({ rowId: fiResponse.forecastInstances[0].id });
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
var editWithHistoryApi_1 = __webpack_require__(/*! ./editWithHistoryApi/editWithHistoryApi */ "./src/ForecastPageUiApi/editWithHistoryApi/editWithHistoryApi.ts");
var ForecastPageUiApi = (function () {
    function ForecastPageUiApi(contextServices, onReRender, stateManager) {
        var stateManager2 = stateManager != undefined ? stateManager : new simpleStateManager_1.SimpleStateManager(onReRender);
        var context = {
            stateManager: stateManager2,
            forecastServices: contextServices,
            errorHandler: new CrmErrorDialogBasedHandler_1.CrmErrorDialogBasedHandler(contextServices.forecastDialogsManager)
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
var GlobalStateManager = (function (_super) {
    __extends(GlobalStateManager, _super);
    function GlobalStateManager(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.global;
        return _this;
    }
    GlobalStateManager.prototype.initializePage = function () {
        this.logInfo("GlobalStateManager", "initializePage called");
        this.fullApi.fcfrManager._fetchForecastConfigs();
        this._fetchBaseCurrency();
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
Object.defineProperty(exports, "__esModule", { value: true });
var baseUiApi_1 = __webpack_require__(/*! ../common/baseUiApi */ "./src/ForecastPageUiApi/common/baseUiApi.ts");
var kanbanWrapper_1 = __webpack_require__(/*! ./kanbanWrapper */ "./src/ForecastPageUiApi/kanban/kanbanWrapper.ts");
var KanbanApiImpl = (function (_super) {
    __extends(KanbanApiImpl, _super);
    function KanbanApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.memoProps = {};
        _this.stateManager = context.stateManager.partRecordViewer;
        _this.containerWrapper = new kanbanWrapper_1.KanbanWrapperContainer(_this.context.forecastServices.hostContext);
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
            onDataRecordUpdated: function (recordId, values, curLaneId) {
                return values;
            },
            onDataRecordSaved: function (recordId, values, curLaneId) {
                _this.fullApi.partRecordViewer._onParticipatingRecordUpdated(recordId, values);
                return values;
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
        pipelineRecordsFetchXmlResponse.ForecastConfigurationColumns.forEach(function (item, index) {
            if (!_this.IsForecastConfigColumnInfoValid(item)) {
            }
            var fetchXmlUpdated = item.FetchXml.replace("_recordid_", ownerId);
            if (!fiId.endsWith(KanbanConstants.Heirarchy_Node_Identifier)) {
                fetchXmlUpdated = fetchXmlUpdated.replace(KanbanConstants.Heirarchy_Operator, "eq-or-under");
            }
            else {
                fetchXmlUpdated = fetchXmlUpdated.replace(KanbanConstants.Heirarchy_Operator, "eq");
            }
            var itemFieldsDict = item.Fields;
            var laneFields = [];
            laneFields.push({
                attributeName: "ownerid",
                isVisible: true
            });
            laneFields.push({
                attributeName: forecastConfigInfo.forecastCategoryAttribute,
                isVisible: false
            });
            Object.keys(itemFieldsDict).forEach(function (laneField) {
                laneFields.push({
                    attributeName: laneField,
                    isVisible: itemFieldsDict[laneField]
                });
            });
            kanbanProps.lanes.push({
                laneId: item.ColumnOptionSetValue,
                laneDisplayName: item.ColumnName,
                fields: laneFields,
                fetchXml: fetchXmlUpdated,
                laneIdentifyingColor: KanbanConstants.colors[index % KanbanConstants.colors.length],
                aggregateProps: {
                    showAggregatedValue: true,
                    type: "sum",
                    attribute: item.AggregatingAttribute
                },
                isDropDisabled: forecastConfigInfo.forecastCategoryAttribute === "msdyn_forecastcategory" && (item.ColumnOptionSetValue === "100000005" || item.ColumnOptionSetValue === "100000006")
            });
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
var NearRealTimeApiImpl = (function (_super) {
    __extends(NearRealTimeApiImpl, _super);
    function NearRealTimeApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.isGridPage = true;
        _this.wasRecomputeTriggeredByCurrentUser = false;
        _this.context.forecastServices.forecastNavigationManager.listenToPageUnloadEvent(_this.onPageUnload.bind(_this));
        _this.stateManager = context.stateManager.nrt;
        return _this;
    }
    NearRealTimeApiImpl.prototype._onFrChange = function (args) {
        this.showPlainRibbon();
        this._InvokeRecomputeValidation(args);
        this._InvokeSignalRSubscribe(args);
    };
    NearRealTimeApiImpl.prototype._InvokeSignalRSubscribe = function (_a) {
        var newId = _a.newId, oldFrId = _a.oldFrId;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.context.forecastServices.recomputeNotificationsProvider.unsubscribeOldAndsubscribeNew(oldFrId, newId, this.onNotificationRecieved.bind(this));
                return [2];
            });
        });
    };
    NearRealTimeApiImpl.prototype._InvokeRecomputeValidation = function (_a) {
        var newId = _a.newId;
        return __awaiter(this, void 0, void 0, function () {
            var fcId, recomputeStatus;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        return [4, this.context.forecastServices.forecastDataAccess.invokeRecomputeValidator(fcId, newId)];
                    case 1:
                        recomputeStatus = _b.sent();
                        this.logInfo("NRT", "Recompute status recieved", { newId: newId, recomputeStatus: recomputeStatus });
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
    NearRealTimeApiImpl.prototype.onRecomputeClick = function () {
        this._InvokeManualRecalculate();
    };
    NearRealTimeApiImpl.prototype._InvokeManualRecalculate = function () {
        var _this = this;
        var fcId = this.fullApi.fcfrManager.getActiveFCId();
        var frId = this.fullApi.fcfrManager.getActiveFRId();
        this._showInprogressToast();
        this.showInProgressRibbon();
        this.logInfo("NRT", "FR recalculate request start", { fcId: fcId, frId: frId });
        this.context.forecastServices.forecastDataAccess.recalculateHierarchy(fcId, [frId]).then(function () {
            _this.wasRecomputeTriggeredByCurrentUser = true;
            _this.logInfo("NRT", "FR recalculate request complete", { fcId: fcId, frId: frId });
        }).catch(function (error) {
            _this.logError("NRT.FrRecalculateRequest", error, "Please contact D365 Sales Forecasting team.");
            _this.context.forecastServices.forecastDialogsManager.openRecalculateErrorMessageDialog();
            _this.showPlainRibbon();
        });
    };
    NearRealTimeApiImpl.prototype.onNotificationRecieved = function (message) {
        this.logInfo("NRT", "Recompute notification message recieved", message);
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
        var notifObj = {
            messageType: "error",
            message: notificationMessage,
            isButtonRequired: false,
            buttonName: "",
            handler: ""
        };
        this.stateManager.setMessageBarNotification(notifObj);
    };
    NearRealTimeApiImpl.prototype.onRefreshClickedFromToast = function () {
        this.fullApi.fiGrid.onRefresh();
    };
    NearRealTimeApiImpl.prototype.onRedirectClickedFromToast = function () {
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
        this._onCellSelect(cell.rowId, cell.colId);
    };
    PartRecordGridApiImpl.prototype.onRecordSaved = function (recordId) {
        this.fullApi.partRecordViewer._onParticipatingRecordUpdated(recordId);
    };
    PartRecordGridApiImpl.prototype._onCellSelect = function (rowId, colId) {
        return __awaiter(this, void 0, void 0, function () {
            var fc, activeViewId, isAgg, rowType, fiId, colInfo, colIdForFetch, partFetchXml, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!rowId || !colId)
                            return [2];
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
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4, this.context.forecastServices.forecastDataAccess.ParticipatingRecordsFetchXml(fiId, colIdForFetch, activeViewId, rowType)];
                    case 4:
                        partFetchXml = _a.sent();
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
                        if (fcList && fcList.length > 0) {
                            this.stateManager.setActiveViewId(fcList[0].id);
                        }
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
    PartRecordGridApiImpl.prototype.shouldFetchViewDefinitions = function (fc) {
        return fc && fc.rollupEntity && this.stateManager.getViewDefsList(fc.rollupEntity).length == 0;
    };
    return PartRecordGridApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.PartRecordGridApiImpl = PartRecordGridApiImpl;
var NullCrmDatasetInfo = {
    fetchXml: "",
    layoutXml: "",
    entityName: ""
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
var PartRecordViewerApiImpl = (function (_super) {
    __extends(PartRecordViewerApiImpl, _super);
    function PartRecordViewerApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.partRecordViewer;
        _this.containerWrapper = new kanbanWrapper_1.KanbanWrapperContainer(_this.context.forecastServices.hostContext);
        return _this;
    }
    PartRecordViewerApiImpl.prototype.isViewerOpened = function () {
        return !this.context.stateManager.snapshot.isInDFMode()
            && !this.fullApi.snapshots.getActiveMainSnapshotId()
            && this.stateManager.getIsOpened();
    };
    PartRecordViewerApiImpl.prototype.isInKanbanMode = function () {
        return this.stateManager.getIsKanbanMode();
    };
    PartRecordViewerApiImpl.prototype.isExpanded = function () {
        return this.stateManager.getIsExpanded();
    };
    PartRecordViewerApiImpl.prototype.getViewerTitle = function () {
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
        outP.ownerName = fi.HierarchyEntityData.recordName;
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
        this.stateManager.setIsKanbanMode(!this.isInKanbanMode());
    };
    PartRecordViewerApiImpl.prototype.onCloseClick = function () {
        this.logUsage("PartRecordViewer", "Close button clicked", {});
        this.stateManager.setIsOpened(false);
        this.stateManager.setIsExpanded(false);
    };
    PartRecordViewerApiImpl.prototype.onExpandCollapseClick = function () {
        this.logUsage("PartRecordViewer", "Expand/collapse button clicked", {});
        this.stateManager.setIsExpanded(!this.isExpanded());
    };
    PartRecordViewerApiImpl.prototype.getSelectedCellId = function () {
        return this.context.stateManager.fiGrid.getSelectedCell();
    };
    PartRecordViewerApiImpl.prototype._onCellSelect = function (rowId, colId) {
        if (!rowId)
            this.stateManager.setIsOpened(false);
        if (!this.isValidColumnForPartRecordViewing(colId))
            return;
        this.stateManager.setIsOpened(true);
        this.fullApi.partRecordGrid._onCellSelect(rowId, colId);
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
    PartRecordViewerApiImpl.prototype.fetchPartFetchXMLs = function (frId) {
        return __awaiter(this, void 0, void 0, function () {
            var fcId, resp, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        return [4, this.context.forecastServices.forecastDataAccess.GetPipelineRecordsMetadata(fcId, frId)];
                    case 1:
                        resp = _a.sent();
                        this.isCurrentFR(frId);
                        {
                            this.stateManager.setFetchXmlResponse(resp);
                            this.stateManager.setIsPartRecFetchXmlLoaded(true);
                        }
                        return [3, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.context.errorHandler.handleError("Error while loading Kanban fetchXml template. Kanban control might not load.", 2, e_1);
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

Object.defineProperty(exports, "__esModule", { value: true });
var sharedEnums_1 = __webpack_require__(/*! ../../Interface/sharedEnums */ "./src/Interface/sharedEnums.ts");
var RibbonApiImpl = (function () {
    function RibbonApiImpl(context, fullApi) {
        this.context = context;
        this.fullApi = fullApi;
    }
    RibbonApiImpl.prototype.getRibbonConfiguration = function () {
        return this.context.stateManager.nrt.getRibbonConfig();
    };
    RibbonApiImpl.prototype.getLastRecalculateTimeForCurrentFR = function () {
        var fr = this.fullApi.fcfrManager.getActiveFR();
        return fr.lastRecalculatedDateTime;
    };
    RibbonApiImpl.prototype.onRibbonRefreshClick = function () {
        this.fullApi.fiGrid.onRefresh();
    };
    RibbonApiImpl.prototype.onRibbonRecomputeClick = function () {
        this.fullApi.nearRealTime.onRecomputeClick();
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
}());
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
var SnapshotApiImpl = (function (_super) {
    __extends(SnapshotApiImpl, _super);
    function SnapshotApiImpl(context, fullApi) {
        var _this = _super.call(this, context, fullApi) || this;
        _this.stateManager = context.stateManager.snapshot;
        _this.isSnapshotEnabled = context.forecastServices.featureSwtichProvider.isFeatureEnabled("isSnapshotEnabled");
        return _this;
    }
    SnapshotApiImpl.prototype.isSnapshotFeatureEnabled = function () {
        return this.isSnapshotEnabled;
    };
    SnapshotApiImpl.prototype.getMainSnapshotList = function () {
        var allSnaps = this.stateManager.getSnapshotList();
        var snList = allSnaps.map(function (sn) {
            return {
                id: sn.snapshotID,
                title: sn.snapshotName
            };
        });
        return __spreadArrays([{ id: "", title: "Select" }], snList);
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
        return [{ id: "", title: "Select" }];
    };
    SnapshotApiImpl.prototype.getActiveMainSnapshotId = function () {
        return this.stateManager.getActiveMainSnapshotId();
    };
    SnapshotApiImpl.prototype.getActiveSecondSnapshotId = function () {
        return this.stateManager.getSecondSnapshotId();
    };
    SnapshotApiImpl.prototype.isInDealFlowMode = function () {
        return this.stateManager.isInDFMode();
    };
    SnapshotApiImpl.prototype.shouldRenderSecondSnapshotSelector = function () {
        return this.isInDealFlowMode();
    };
    SnapshotApiImpl.prototype.getDealFlowChartData = function () {
        var chartData = this.stateManager.getChartData();
        return chartData;
    };
    SnapshotApiImpl.prototype.getDealFlowGridRows = function () {
        var _this = this;
        return this.stateManager.getDfGridData().map(function (row) {
            return __assign(__assign({}, row), { Snapshot1Amount: _this.getBaseCurrencyFormattedValue(row.Snapshot1Amount), Snapshot2Amount: _this.getBaseCurrencyFormattedValue(row.Snapshot2Amount) });
        });
    };
    SnapshotApiImpl.prototype.onMainSnapshotChange = function (newId) {
        this.stateManager.setActiveMainSnapShot(newId);
        if (!this.stateManager.isInDFMode()) {
            var frId = this.fullApi.fcfrManager.getActiveFRId();
            this.fullApi.fiGrid._onFrChange({ newId: frId, oldFrId: frId });
        }
        else {
        }
        this.stateManager.set2ndSnapshotId("");
    };
    SnapshotApiImpl.prototype.onSecondSnapshotChange = function (newId) {
        this.stateManager.set2ndSnapshotId(newId);
        this.stateManager.setEdgeInfo(snapshotsStateManager_1.nullEdgeInfo);
        this.stateManager.setCurrentPage(-1);
        this._triggerChartDataFetch();
        this._triggerGridDataFetch();
    };
    SnapshotApiImpl.prototype.onSnapshotFeatureChange = function () {
        this.stateManager.toggleDFMode();
        if (!this.isInDealFlowMode()) {
            this.onMainSnapshotChange("");
        }
    };
    SnapshotApiImpl.prototype.onDealFlowLinkClick = function (edgeInfo) {
        this.stateManager.setEdgeInfo(edgeInfo);
        this.stateManager.setCurrentPage(-1);
        this._triggerGridDataFetch();
    };
    SnapshotApiImpl.prototype.isDealFlowChartVisible = function () {
        return this.isInDealFlowMode() && this.getActiveMainSnapshotId() != "" && this.getActiveSecondSnapshotId() != "";
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
    SnapshotApiImpl.prototype._onFrChange = function (_a) {
        var newId = _a.newId;
        return __awaiter(this, void 0, void 0, function () {
            var fcId, snapshots;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isSnapshotFeatureEnabled())
                            return [2];
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        this.stateManager.setActiveMainSnapShot("");
                        this.stateManager.set2ndSnapshotId("");
                        this.stateManager.updateSnapshots([]);
                        return [4, this.context.forecastServices.forecastDataAccess.fetchSnapshotList(newId, fcId)];
                    case 1:
                        snapshots = _b.sent();
                        this.stateManager.updateSnapshots(snapshots);
                        return [2];
                }
            });
        });
    };
    SnapshotApiImpl.prototype._triggerChartDataFetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fcId, frId, mainSnapId, secondSnapId, chartData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        frId = this.fullApi.fcfrManager.getActiveFRId();
                        mainSnapId = this.getActiveMainSnapshotId();
                        secondSnapId = this.getActiveSecondSnapshotId();
                        this.stateManager.setChartData({ Nodes: [], Edges: [] });
                        return [4, this.context.forecastServices.forecastDataAccess.fetchDeaFlowData(frId, fcId, mainSnapId, secondSnapId)];
                    case 1:
                        chartData = _a.sent();
                        this.stateManager.setChartData(chartData);
                        return [2];
                }
            });
        });
    };
    SnapshotApiImpl.prototype._triggerGridDataFetch = function (pageOffset) {
        if (pageOffset === void 0) { pageOffset = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var fcId, mainSnapId, secondSnapId, edgeInfo, pageInfo, srcCategoryDetails, destCategoryDetails, dfEntityDataRequest, gridData, expectedCurrentSize, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fcId = this.fullApi.fcfrManager.getActiveFCId();
                        mainSnapId = this.getActiveMainSnapshotId();
                        secondSnapId = this.getActiveSecondSnapshotId();
                        edgeInfo = this.stateManager.getEdgeInfo();
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
                        return [4, this.context.forecastServices.forecastDataAccess.fetchCategoryDealFlowData(fcId, dfEntityDataRequest)];
                    case 2:
                        gridData = _b.sent();
                        expectedCurrentSize = (pageOffset) * sharedEnums_1.DEALFLOW_PAGE_SIZE;
                        if (expectedCurrentSize !== this.stateManager.getDfGridData().length
                            || edgeInfo !== this.stateManager.getEdgeInfo()) {
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
                        return [3, 4];
                    case 3:
                        _a = _b.sent();
                        this.stateManager.setIsDFGridLoading(false);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    SnapshotApiImpl.prototype.isDealFlowGridLoading = function () {
        return this.stateManager.isDFGridLoading();
    };
    return SnapshotApiImpl;
}(baseUiApi_1.BaseUiApi));
exports.SnapshotApiImpl = SnapshotApiImpl;


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
    ForecastColumnType[ForecastColumnType["Quota"] = 2] = "Quota";
    ForecastColumnType[ForecastColumnType["Predictive"] = 3] = "Predictive";
    ForecastColumnType[ForecastColumnType["HierarchyPrimary"] = 4] = "HierarchyPrimary";
    ForecastColumnType[ForecastColumnType["HierarchySecondary"] = 5] = "HierarchySecondary";
})(ForecastColumnType = exports.ForecastColumnType || (exports.ForecastColumnType = {}));
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
var RealtimeNotificationTypes;
(function (RealtimeNotificationTypes) {
    RealtimeNotificationTypes[RealtimeNotificationTypes["None"] = 1] = "None";
    RealtimeNotificationTypes[RealtimeNotificationTypes["Initial"] = 2] = "Initial";
    RealtimeNotificationTypes[RealtimeNotificationTypes["InProgressNotification"] = 3] = "InProgressNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["FreshDataNotification"] = 4] = "FreshDataNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["ServerErrorNotification"] = 5] = "ServerErrorNotification";
    RealtimeNotificationTypes[RealtimeNotificationTypes["TableHasChanged"] = 6] = "TableHasChanged";
})(RealtimeNotificationTypes = exports.RealtimeNotificationTypes || (exports.RealtimeNotificationTypes = {}));
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
var ILogLevel;
(function (ILogLevel) {
    ILogLevel[ILogLevel["Debug"] = 0] = "Debug";
    ILogLevel[ILogLevel["Info"] = 1] = "Info";
    ILogLevel[ILogLevel["Warning"] = 2] = "Warning";
    ILogLevel[ILogLevel["Usage"] = 3] = "Usage";
    ILogLevel[ILogLevel["Error"] = 4] = "Error";
})(ILogLevel = exports.ILogLevel || (exports.ILogLevel = {}));
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
var ForecastColumnType;
(function (ForecastColumnType) {
    ForecastColumnType[ForecastColumnType["Rollup"] = 0] = "Rollup";
    ForecastColumnType[ForecastColumnType["Calculated"] = 1] = "Calculated";
    ForecastColumnType[ForecastColumnType["Quota"] = 2] = "Quota";
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
        var frs = fc.recurrences.filter(function (frr) { return frr.id != fr.id; });
        frs.push(fr);
        var newFc = __assign(__assign({}, fc), { recurrences: frs });
        this.forecastConfigurations = __assign(__assign({}, this.forecastConfigurations), { byId: __assign(__assign({}, this.forecastConfigurations.byId), (_a = {}, _a[fc.id] = newFc, _a)) });
        this.reRender();
    };
    FcFrStateManager.prototype.getActiveFc = function () {
        var fcId = this.getActiveFcId();
        return this.forecastConfigurations.byId[fcId];
    };
    return FcFrStateManager;
}(baseStateManager_1.BaseStateManager));
exports.FcFrStateManager = FcFrStateManager;


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
        _this.cellIdWithError = { cellId: types_1.NULL_CELLINFO, errorMessage: "" };
        _this.newlyAdjustedValue = "";
        _this.isHistoryLoading = false;
        _this.cellHistory = [];
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
                    if (newFi.AggregateColumnData[cid].rawValue != fi.AggregateColumnData[cid].rawValue) {
                        cells.push({ rowId: id, colId: cid, isAgg: true });
                    }
                }
                if (fi.RollUpColumnData && newFi.RollUpColumnData && newFi.RollUpColumnData[cid] && fi.RollUpColumnData[cid]) {
                    if (newFi.RollUpColumnData[cid].rawValue != fi.RollUpColumnData[cid].rawValue) {
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
    FiGridStateManager.prototype.updateFIRollupData = function (frId, newFiList) {
        var _a;
        var curState = this.getState().fiGrid;
        var newById = __assign({}, curState.fiListByFr[frId].byId);
        newFiList.map(function (newFi) {
            var _a, _b;
            var id = stringUtility_1.normalizeGuid(newFi.id);
            if (!newById[id])
                return;
            newById = __assign(__assign({}, newById), (_a = {}, _a[id] = __assign(__assign({}, newById[id]), { RollUpColumnData: newFi.RollUpColumnData }), _a));
            newById = __assign(__assign({}, newById), (_b = {}, _b[id] = __assign(__assign({}, newById[id]), { AggregateColumnData: newFi.AggregateColumnData }), _b));
        });
        var fiListByFr = __assign(__assign({}, curState.fiListByFr), (_a = {}, _a[frId] = __assign(__assign({}, curState.fiListByFr[frId]), { byId: newById }), _a));
        var fiGrid = __assign(__assign({}, curState), { fiListByFr: fiListByFr });
        this.setState({ fiGrid: fiGrid });
    };
    FiGridStateManager.prototype.clearExpandedDict = function () {
        var fiGrid = __assign(__assign({}, this.getState().fiGrid), { expandedRows: {} });
        this.setState({ fiGrid: fiGrid });
    };
    FiGridStateManager.prototype.getQuotaColumnIdForCurrentFC = function () {
        var fc = this.all.fcFr.getActiveFc();
        var col = fc.gridMetadata.columnDefinitions.find(function (c) { return c.forecastColumnType == __1.ForecastColumnType.Quota; });
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
var GlobalStateManager = (function (_super) {
    __extends(GlobalStateManager, _super);
    function GlobalStateManager(onReRender, all) {
        var _this = _super.call(this, onReRender, all) || this;
        _this.all = all;
        _this.baseCurrencySymbol = "";
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
        _this.IsOpened = false;
        _this.IsKanbanMode = false;
        _this.IsPartRecFetchXmlLoaded = false;
        _this.ActiveViewId = "";
        _this.ViewDefsList = {};
        _this.IsPartEditGridLoadingDict = {};
        _this.IsViewSelectorLoading = false;
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
exports.nullEdgeInfo = {
    SourceCategoryId: sharedEnums_1.EMPTY_GUID,
    DestinationCategoryId: sharedEnums_1.EMPTY_GUID,
    SourceCategoryName: "",
    DestinationCategoryName: ""
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
        _this.chartData = { Nodes: [], Edges: [] };
        _this.selectedEdge = exports.nullEdgeInfo;
        _this.secondSnapshotId = "";
        _this.isDFMode = false;
        _this.mainSnapshotId = "";
        _this.snapshots = [];
        _this.baseCurrencySymbol = "";
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
    SnapshotsStateManager.prototype.setEdgeInfo = function (edge) {
        this.selectedEdge = edge;
        this.reRender();
    };
    SnapshotsStateManager.prototype.getEdgeInfo = function () {
        return this.selectedEdge;
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
        logger: logger
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
        return currencySymbol + " " + value.toFixed(2);
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
            id: "advancedFind"
        });
        outP.push({
            fetchXml: OptyAdvFindFetchXml_1.OptyAdvFindFetchXml,
            layoutXml: OptyOnlyNameLayoutXml_1.OptyOnlyNameLayoutXml,
            title: "Only name",
            id: "onlyName"
        });
        outP.push({
            fetchXml: OptyAdvFindFetchXml_1.OptyAdvFindFetchXml,
            layoutXml: OptyOnlyNameLayoutXml_1.OptyOnlyNameLayoutXml,
            title: "Only name - 2",
            id: "onlyName2"
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
function createFakeFCColumns(fcid) {
    var outP = [];
    addColumnToFC(outP, fcid, "User", sharedEnums_1.ForecastColumnType.HierarchyPrimary);
    addColumnToFC(outP, fcid, "Quota", sharedEnums_1.ForecastColumnType.Quota);
    addColumnToFC(outP, fcid, "Won", sharedEnums_1.ForecastColumnType.Rollup, false, true, true);
    addColumnToFC(outP, fcid, "Bestcase", sharedEnums_1.ForecastColumnType.Rollup, true);
    addColumnToFC(outP, fcid, "Pipeline", sharedEnums_1.ForecastColumnType.Rollup, true);
    addColumnToFC(outP, fcid, "Omitted", sharedEnums_1.ForecastColumnType.Rollup, true, false);
    addColumnToFC(outP, fcid, "Manager", sharedEnums_1.ForecastColumnType.HierarchySecondary, false, true);
    addColumnToFC(outP, fcid, "Sum", sharedEnums_1.ForecastColumnType.Calculated, false, true);
    return outP;
}
exports.createFakeFCColumns = createFakeFCColumns;
function addColumnToFC(outP, fcid, title, type, isEditable, isVisible, showProg) {
    if (isVisible === void 0) { isVisible = true; }
    if (showProg === void 0) { showProg = false; }
    outP.push(__assign(__assign({}, emptyFCC()), { id: fcid + "_" + title.toLocaleLowerCase(), localizedHeaderTitle: fcid + "_" + title, forecastColumnType: type, isEditable: isEditable,
        isVisible: isVisible, showProgressComparedToQuota: showProg }));
}
function emptyFCC() {
    return {
        id: "",
        localizedHeaderTitle: "",
        forecastColumnType: sharedEnums_1.ForecastColumnType.Rollup,
        isVisible: true
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
function GetFakeForecastConfigList(num, numFr) {
    if (num === void 0) { num = 1; }
    if (numFr === void 0) { numFr = 3; }
    var outP = [];
    for (var j = 0; j < num; j++) {
        outP.push(CreateForecastConfigWithRecurrences(j, numFr));
    }
    return outP;
}
exports.GetFakeForecastConfigList = GetFakeForecastConfigList;
function CreateForecastConfigWithRecurrences(i, num) {
    if (num === void 0) { num = 2; }
    var recurrences = [];
    var fcid = "fc_" + i;
    for (var j = 0; j < num; j++) {
        recurrences.push(CreateForecastRecurrence(j, fcid));
    }
    var outP = {
        id: fcid,
        name: "ForecastConfig_" + i,
        rollupEntity: "opportunity",
        forecastCategoryAttribute: "msdyn_forecastcategory",
        recurrences: recurrences,
        gridMetadata: {
            columnDefinitions: FCcolumnGenerator_1.createFakeFCColumns(fcid)
        }
    };
    return outP;
}
function CreateForecastRecurrence(i, fcId) {
    var outP = {
        id: fcId + "_fr_" + i,
        name: "ForecastRecurrence_" + i + "_" + fcId,
        rootForecastInstanceId: "",
        lastRecalculatedDateTime: "2019-10-22T00:00:00.0Z",
        lastRecalculatedStatus: 0
    };
    return outP;
}
function CreateForecastRecurrenceWithId(id) {
    var outP = {
        id: "" + id,
        name: "ForecastRecurrence_" + id,
        rootForecastInstanceId: "",
        lastRecalculatedDateTime: "2019-10-22T00:00:00.0Z",
        lastRecalculatedStatus: 0
    };
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
    }
    FakeFIGenerator.prototype.createFakeFI = function (title, parentId, hasAggregateData) {
        if (hasAggregateData === void 0) { hasAggregateData = true; }
        var outP = {
            id: this.createId(title),
            parentId: this.createId(parentId),
            HierarchyEntityData: {
                id: "" + title.toLocaleLowerCase(),
                recordName: this.frId + "_" + title + (this.snapNo != -1 ? "_snap" + this.snapNo : ""),
                numberOfChildren: 2,
                entityType: "systemuser"
            },
            RollUpColumnData: hasAggregateData ? this.createRollupData() : null,
            AggregateColumnData: this.createRollupData(true),
            hasSelfAggregateNode: hasAggregateData
        };
        this.updateDb && this.updateDb(outP);
        return outP;
    };
    FakeFIGenerator.prototype.createRollupData = function (isAgg) {
        if (isAgg === void 0) { isAgg = false; }
        var dF = isAgg ? 2 : 1;
        var outP = {};
        this.addCellInfo(outP, "bestcase", 20 / dF);
        this.addCellInfo(outP, "won", 30 / dF);
        this.addCellInfo(outP, "pipeline", 40 / dF);
        this.addCellInfo(outP, "quota", 100 / dF);
        this.addCellInfo(outP, "manager", "Manager_X");
        this.addCellInfo(outP, "sum", 1000 / dF);
        return outP;
    };
    FakeFIGenerator.prototype.addCellInfo = function (outP, colId, rawValue) {
        var cid = this.createColId(colId);
        outP[cid] = {
            displayValue: "" + rawValue,
            isManualAdjusted: false,
            isRollupAdjusted: false,
            rawValue: typeof rawValue != "number" ? 0 : rawValue,
            originalValue: typeof rawValue != "number" ? 0 : rawValue,
            isEditable: false,
            showHistory: false,
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
        { name: "Best case", color: "#3049AD", key: "42d408cc-8c83-4d3c-b745-f53605a71ba6" },
        { name: "Committed", color: "#118DFF", key: "6760f59f-0464-428a-8c0d-e901a64b320c" },
        { name: "Lost", color: "#C83D95", key: "5f35c872-cd78-4cee-98c5-837db0c086db" },
        { name: "Pipeline", color: "#E04854", key: "ffdbc5ea-7624-4ea9-b711-11aa7c3aa54c" },
        { name: "Won", color: "#FFADC1", key: "da233e18-379d-4aef-a66d-4a355ab0c9f7" },
        { name: "Best case", color: "#3049AD", key: "42d408cc-8c83-4d3c-b745-f53605a71ba6" },
        { name: "Committed", color: "#118DFF", key: "6760f59f-0464-428a-8c0d-e901a64b320c" },
        { name: "Lost", color: "#C83D95", key: "5f35c872-cd78-4cee-98c5-837db0c086db" },
        { name: "Pipeline", color: "#E04854", key: "ffdbc5ea-7624-4ea9-b711-11aa7c3aa54c" },
        { name: "Won", color: "#FFADC1", key: "da233e18-379d-4aef-a66d-4a355ab0c9f7" }
    ],
    Edges: [
        { source: 0, target: 5, value: 37912570 },
        { source: 3, target: 8, value: 37294340 },
        { source: 1, target: 6, value: 60549016 },
        { source: 4, target: 9, value: 26445640 },
        { source: 2, target: 7, value: 21900000 }
    ]
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
        Name: idx + " - SN " + id1 + " to SN " + id2 + ", " + cat1 + ":" + cat2,
        Owner: 'OwnerX',
        Snapshot1Amount: 100,
        Snapshot2Amount: 500
    };
}
exports.createDFGridRow = createDFGridRow;


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
        var name_1 = generateSnapName(frId, i);
        outP.push({
            snapshotID: name_1.toLowerCase(),
            snapshotName: name_1,
            createdOn: ''
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
var FakeForecastDataAccess = (function () {
    function FakeForecastDataAccess(config) {
        this.config = config;
        this.recalcShouldFail = false;
        this.extraFiRequestTime = 0;
        this.networkDelay = 0;
        this.isPipelineMetadataCallInstant = false;
        this.isPipelineMetadataCallDone = false;
        this.numCallsCompleted = 0;
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
        }
        catch (_a) { }
    }
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
            var configs = FcFrGenerator_1.GetFakeForecastConfigList(_this.config.numFCs, _this.config.numFrPerFc);
            setTimeout(function () {
                if (!_this.config.shouldFcFetchFail)
                    resolve(configs);
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
    FakeForecastDataAccess.prototype.resetNumNetworkCalls = function () {
        this.numCallsCompleted = 0;
    };
    FakeForecastDataAccess.prototype.onNetworkCallComplete = function () {
        this.numCallsCompleted++;
    };
    FakeForecastDataAccess.prototype.updateFI = function (fi) {
        this.fiDb[fi.id] = fi;
    };
    FakeForecastDataAccess.prototype.fetchForecastInstances = function (forecastRecurrenceId, fcId, parentIds, pagesInfo, snapshotId) {
        var _this = this;
        this.onFetchFiSPY && this.onFetchFiSPY(forecastRecurrenceId, fcId, parentIds[0], pagesInfo[parentIds[0]], snapshotId);
        this.fetchCnt++;
        return new Promise(function (resolve, reject) {
            var fr = __assign(__assign({}, FcFrGenerator_1.CreateForecastRecurrenceWithId(forecastRecurrenceId)), { lastRecalculatedDateTime: "2019-10-1" + _this.fetchCnt + "T0" + _this.fetchCnt + ":00:00.0Z" });
            var FiGenerator = new FiGenerator_1.FakeFIGenerator(_this.config, forecastRecurrenceId, fcId, _this.updateFI.bind(_this), snapshotId != sharedEnums_1.EMPTY_GUID ? snapshotId.split("_")[5] : -1);
            var parent = parentIds[0];
            var forecastInstances = [];
            var hasMoreChildren = false;
            if (parent == "")
                forecastInstances.push(FiGenerator.createFakeFI("R", ""));
            if (parent == forecastRecurrenceId + "_r") {
                forecastInstances.push(FiGenerator.createFakeFI("R.C0", "R", false));
                forecastInstances.push(FiGenerator.createFakeFI("R.C1", "R", true));
                forecastInstances.push(FiGenerator.createFakeFI("R.C2", "R", false));
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
    FakeForecastDataAccess.prototype.fetchCategoryDealFlowData = function (forecastConfigurationId, dfEntityDataRequest) {
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
    FakeForecastDataAccess.prototype.ParticipatingRecordsFetchXml = function (forecastInstanceId, forecastConfigurationColumnId, viewId, recordsType) {
        var _this = this;
        this.partFetchXmlSpy && this.partFetchXmlSpy(forecastInstanceId, forecastConfigurationColumnId, viewId, recordsType);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(OptyAdvFindFetchXml_1.OptyAdvFindFetchXml);
                _this.onNetworkCallComplete();
            }, _this.networkDelay);
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
                    }, 200, 20)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.waitFor = waitFor;


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