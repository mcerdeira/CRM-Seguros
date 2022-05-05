var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./PCFEmailValidatorControl/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./PCFEmailValidatorControl/index.ts":
/*!*******************************************!*\
  !*** ./PCFEmailValidatorControl/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar PCFEmailValidatorControl =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function PCFEmailValidatorControl() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  PCFEmailValidatorControl.prototype.init = function (context, notifyOutputChanged, state, container) {\n    var _this_1 = this; // Add control initialization code\n\n\n    this._context = context;\n    this._container = container;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._textElementChanged = this.emailAddressChanged.bind(this);\n    this._value = \"\";\n\n    if (context.parameters.emailProperty == null) {\n      this._value = \"\";\n    } else {\n      this._value = context.parameters.emailProperty.raw == null ? \"\" : context.parameters.emailProperty.raw;\n    }\n\n    if (context.parameters.apiProperty == null) {\n      this._apiKey = \"\";\n    } else {\n      this._apiKey = context.parameters.apiProperty.raw == null ? \"\" : context.parameters.apiProperty.raw;\n    }\n\n    this._textElement = document.createElement(\"input\");\n\n    this._textElement.setAttribute(\"type\", \"text\");\n\n    this._textElement.addEventListener(\"change\", this._textElementChanged);\n\n    this._textElement.setAttribute(\"value\", this._value);\n\n    this._textElement.setAttribute(\"class\", \"InputText\");\n\n    this._textElement.value = this._value;\n\n    this._textElement.addEventListener(\"focusin\", function () {\n      _this_1._textElement.className = \"InputTextFocused\";\n    });\n\n    this._textElement.addEventListener(\"focusout\", function () {\n      _this_1._textElement.className = \"InputText\";\n    });\n\n    this._breakElement = document.createElement(\"br\");\n    this._labelElement = document.createElement(\"label\");\n\n    this._labelElement.setAttribute(\"border\", \"2\");\n\n    this.CheckEmailValidity();\n\n    this._container.appendChild(this._textElement);\n\n    this._container.appendChild(this._breakElement);\n\n    this._container.appendChild(this._labelElement);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  PCFEmailValidatorControl.prototype.updateView = function (context) {\n    var readOnly = this._context.mode.isControlDisabled;\n    var masked = false;\n\n    if (this._context.parameters.emailProperty.security) {\n      readOnly = readOnly || !this._context.parameters.emailProperty.security.editable;\n      masked = !this._context.parameters.emailProperty.security.readable;\n    }\n\n    if (masked) this._textElement.setAttribute(\"placeholder\", \"*******\");else this._textElement.setAttribute(\"placeholder\", \"Insert an email address..\");\n    if (readOnly) this._textElement.readOnly = true;else this._textElement.readOnly = false;\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  PCFEmailValidatorControl.prototype.getOutputs = function () {\n    return {\n      emailProperty: this._value\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  PCFEmailValidatorControl.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n    this._textElement.removeEventListener(\"change\", this._textElementChanged);\n  };\n\n  PCFEmailValidatorControl.prototype.emailAddressChanged = function (evt) {\n    this._value = this._textElement.value;\n    this.CheckEmailValidity();\n\n    this._notifyOutputChanged();\n  };\n\n  PCFEmailValidatorControl.prototype.CheckEmailValidity = function () {\n    this._labelElement.innerText = \"loading..\";\n    var data = null;\n    var result = null;\n\n    if (this._textElement.value.length > 0) {\n      var xmlhttp = new XMLHttpRequest();\n      xmlhttp.withCredentials = true;\n\n      var _this = this;\n\n      xmlhttp.addEventListener(\"readystatechange\", function () {\n        if (this.readyState === this.DONE) {\n          var obj = JSON.parse(this.responseText);\n\n          if (obj != null && obj.isValid != null) {\n            if (obj.isValid === true) {\n              _this._labelElement.innerText = \"The email is valid !\";\n              _this._labelElement.style.color = \"white\";\n              _this._labelElement.style.backgroundColor = \"#4CAF50\";\n            } else {\n              _this._labelElement.innerText = \"The email is invalid !\";\n              _this._labelElement.style.color = \"white\";\n              _this._labelElement.style.backgroundColor = \"#f44336\";\n            }\n          } else {\n            _this._labelElement.innerText = 'Error occured. Please try again later !';\n            _this._labelElement.style.color = \"black\";\n            _this._labelElement.style.backgroundColor = \"#e7e7e7\";\n          }\n        }\n      });\n      xmlhttp.open('GET', 'https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/' + encodeURIComponent(this._textElement.value));\n      xmlhttp.setRequestHeader(\"x-rapidapi-host\", \"pozzad-email-validator.p.rapidapi.com\");\n      xmlhttp.setRequestHeader(\"x-rapidapi-key\", this._apiKey);\n      xmlhttp.send(data);\n    }\n  };\n\n  return PCFEmailValidatorControl;\n}();\n\nexports.PCFEmailValidatorControl = PCFEmailValidatorControl;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PCFEmailValidatorControl/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PCFControls.PCFEmailValidatorControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCFEmailValidatorControl);
} else {
	var PCFControls = PCFControls || {};
	PCFControls.PCFEmailValidatorControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCFEmailValidatorControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}