var WebPlayerSDKOrchestrator =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/promise-polyfill/src/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
});


/***/ }),

/***/ "../../node_modules/promise-polyfill/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/promise-polyfill/src/finally.js");


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/webpack/buildin/global.js"), __webpack_require__("../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./IMessageHandler.ts":
/***/ (function(module, exports) {

//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!


/***/ }),

/***/ "./IResourceDownloader.ts":
/***/ (function(module, exports) {

//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!


/***/ }),

/***/ "./ISDKMetadata.ts":
/***/ (function(module, exports) {

//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!


/***/ }),

/***/ "./ISDKTelemetryLogger.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./ITelemetryMessage.ts":
/***/ (function(module, exports) {

//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!


/***/ }),

/***/ "./MessageHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHandler", function() { return MessageHandler; });
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var MessageHandler = /** @class */ (function () {
    function MessageHandler() {
    }
    MessageHandler.prototype.addMessageListener = function (listener) {
        window.addEventListener("message", listener);
    };
    MessageHandler.prototype.removeMessageListener = function (listener) {
        window.removeEventListener("message", listener);
    };
    MessageHandler.prototype.sendMessageReply = function (originalEvent, messageReply) {
        originalEvent.source.postMessage(messageReply, originalEvent.origin);
    };
    MessageHandler.prototype.sendMessageToParent = function (message, targetOrigin) {
        window.parent.postMessage(message, targetOrigin);
    };
    return MessageHandler;
}());



/***/ }),

/***/ "./ResourceData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceData", function() { return ResourceData; });
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var ResourceData = /** @class */ (function () {
    function ResourceData(filename, fileContent) {
        this.filename = filename;
        this.fileContent = fileContent;
        this.isValid = false;
        if (filename && fileContent) {
            this.isValid = true;
        }
    }
    return ResourceData;
}());



/***/ }),

/***/ "./ResourceDownloader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDownloader", function() { return ResourceDownloader; });
/* harmony import */ var _ResourceData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./ResourceData.ts");
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!

var ResourceDownloader = /** @class */ (function () {
    function ResourceDownloader(_packageData, _logger) {
        this._packageData = _packageData;
        this._logger = _logger;
        this._resourcePromisesDictionary = Object.create(null);
    }
    ResourceDownloader.prototype.getAppFiles = function () {
        return this._packageData.appFiles;
    };
    ResourceDownloader.prototype.downloadResourceAsync = function (resourceName) {
        if (!this._resourcePromisesDictionary[resourceName]) {
            this._resourcePromisesDictionary[resourceName] = this._downloadResourceAsync(resourceName, "blob");
        }
        return this._resourcePromisesDictionary[resourceName];
    };
    ResourceDownloader.prototype.downloadStringResourceAsync = function (resourceName) {
        if (!this._resourcePromisesDictionary[resourceName]) {
            this._resourcePromisesDictionary[resourceName] = this._downloadResourceAsync(resourceName, "text");
        }
        return this._resourcePromisesDictionary[resourceName];
    };
    ResourceDownloader.prototype._downloadResourceAsync = function (resourceName, resourceType) {
        var url = this._packageData.cachedFileUrlTemplate.replace(ResourceDownloader._fileNamePlaceholder, resourceName);
        var getResourcePromise = this._getResource(resourceName, url, resourceType)
            .then(function (response) {
            if (resourceType === "text")
                return response;
            var resourceData = new _ResourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceData"](resourceName, response);
            return resourceData;
        })
            .catch(function (_err) {
            var errResponse = (resourceType === "text") ? "" : new _ResourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceData"]();
            return errResponse;
        });
        return getResourcePromise;
    };
    ResourceDownloader.prototype._getResource = function (resourceName, url, responseType) {
        var logger = this._logger;
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.onload = function () {
                var message = {
                    operationName: "SDKOrchestrator._getResource",
                    data: {
                        resourceName: resourceName,
                        status: this.status,
                        statusText: this.statusText,
                        url: url
                    }
                };
                if (performance && performance.getEntriesByName) {
                    var perfData = performance.getEntriesByName(url);
                    if (perfData && perfData.length > 0) {
                        // take the last one
                        message.data.resourceTiming = JSON.stringify(perfData[perfData.length - 1]);
                    }
                }
                logger.logTelemetry(message);
                if (this.status === 200) {
                    resolve(this.response);
                }
                else {
                    reject(new Error(this.statusText));
                }
            };
            var onErrorFunc = function () {
                var message = {
                    operationName: "SDKOrchestrator._getResource",
                    data: {
                        resourceName: resourceName,
                        status: this.status,
                        statusText: this.statusText,
                        url: url
                    }
                };
                if (performance && performance.getEntriesByName) {
                    var perfData = performance.getEntriesByName(url);
                    if (perfData && perfData.length > 0) {
                        message.data.resourceTiming = JSON.stringify(perfData);
                    }
                }
                logger.logTelemetry(message);
                reject(new Error("XMLHttpRequest Error: " + this.status + " - " + this.statusText));
            };
            // register error handlers
            request.onerror = onErrorFunc;
            request.ontimeout = onErrorFunc;
            request.onabort = onErrorFunc;
            request.open("GET", url);
            request.responseType = responseType;
            request.send();
        });
    };
    ResourceDownloader._fileNamePlaceholder = "{0}";
    return ResourceDownloader;
}());



/***/ }),

/***/ "./SDKOrchestrator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKOrchestratorVersion", function() { return SDKOrchestratorVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKOrchestrator", function() { return SDKOrchestrator; });
/* harmony import */ var _ResourceDownloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./ResourceDownloader.ts");
/* harmony import */ var _MessageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./MessageHandler.ts");
/* harmony import */ var _SDKTelemetryLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./SDKTelemetryLogger.ts");
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!



var SDKOrchestratorVersion = "1.0";
var hostIframeName = "host-iframe";
var publishedAppIframeName = "publishedApp-iframe";
var defaultEntryPointHtmlFileName = "index.web.html";
var defaultManifestJsonFileName = "manifest.json";
var defaultInitialFiles = ["js/init.js"];
;
var SDKOrchestrator = /** @class */ (function () {
    function SDKOrchestrator(_containerElement, _hostIframeUrl, _sdkMetadata, cachedFileJson, _iframeWidth, _iframeHeight, _appId, _packagePropertiesJson, _paramsQuery, resourceDownloader, telemetryLogger) {
        this._containerElement = _containerElement;
        this._hostIframeUrl = _hostIframeUrl;
        this._sdkMetadata = _sdkMetadata;
        this._iframeWidth = _iframeWidth;
        this._iframeHeight = _iframeHeight;
        this._appId = _appId;
        this._packagePropertiesJson = _packagePropertiesJson;
        this._paramsQuery = _paramsQuery;
        this._initialFilesPromiseDictionary = {};
        this._logTelemetryMessages = this._logTelemetryMessages.bind(this);
        if (telemetryLogger) {
            this._logger = telemetryLogger;
        }
        else {
            this._logger = new _SDKTelemetryLogger__WEBPACK_IMPORTED_MODULE_2__["SDKTelemetryLogger"](this._logTelemetryMessages);
        }
        this._packageData = this._tryParsePackageCacheData(cachedFileJson);
        if (this._packageData) {
            // Modifiy host iframe url to add the flag indicating that we have valid cached files
            this._hostIframeUrl += "&hasCachedFiles=true";
            if (resourceDownloader) {
                this._resourceDownloader = resourceDownloader;
            }
            else {
                this._resourceDownloader = new _ResourceDownloader__WEBPACK_IMPORTED_MODULE_0__["ResourceDownloader"](this._packageData, this._logger);
            }
            // Start downloading resources that are needed to start the app as soon as we create the orchestrator.
            // Do not await for the results as we should not block the construction of the iframes.
            var manifestName = this._packageData.manifestJsonFileName ? this._packageData.manifestJsonFileName : defaultManifestJsonFileName;
            var htmlName = this._packageData.entryPointHtmlFileName ? this._packageData.entryPointHtmlFileName : defaultEntryPointHtmlFileName;
            this._manifestDownloadPromise = this._resourceDownloader.downloadStringResourceAsync(manifestName);
            this._entryPointDownloadPromise = this._resourceDownloader.downloadStringResourceAsync(htmlName);
            var initialFiles = this._packageData.initialFiles ? this._packageData.initialFiles : defaultInitialFiles;
            for (var i = 0; i < initialFiles.length; i++) {
                var fileName = initialFiles[i];
                this._initialFilesPromiseDictionary[fileName] = this._resourceDownloader.downloadResourceAsync(fileName);
            }
        }
        this._messageHandler = new _MessageHandler__WEBPACK_IMPORTED_MODULE_1__["MessageHandler"]();
        this._onMessageReceived = this._onMessageReceived.bind(this);
        this._messageHandler.addMessageListener(this._onMessageReceived);
        this._currentToastsHeight = 0;
        this._currentBannerHeight = 0;
        this._isReadyToSendCdpData = false;
        this._cdpDataQueue = [];
        this._sendCdpDataFailureTelemetrySent = false;
    }
    SDKOrchestrator.prototype.sendCdpData = function (cdpData, skipPackageVersionCheck) {
        var _this = this;
        if (skipPackageVersionCheck === void 0) { skipPackageVersionCheck = false; }
        var minPackageVersionApiSupport = 2.1;
        if (!skipPackageVersionCheck && this.packageVersion < minPackageVersionApiSupport) {
            if (!this._sendCdpDataFailureTelemetrySent) {
                var message = {
                    operationName: "SDKOrchestrator.operationFailure",
                    data: {
                        failureLevel: "warning",
                        functionName: "SDKOrchestrator.sendCdpData",
                        details: "sendCdpData API not supported for packageVersion: " + this.packageVersion + ". Only first incident will be logged.",
                    }
                };
                this._sendCdpDataFailureTelemetrySent = true;
                this._logger.logTelemetry(message);
            }
            return;
        }
        if (this._isReadyToSendCdpData) {
            var telemetryMessage = {
                operationName: "SDKOrchestrator.activityLog",
                data: {
                    activityId: "sendCdpData",
                    details: "itemId:" + cdpData.itemId
                }
            };
            this._logger.logTelemetry(telemetryMessage);
            cdpData.promise.then(function (response) {
                _this._sendCdpDataResponse(cdpData.itemId, response);
            }, function (error) { return _this._handleCdpDataPromiseFailure(error, cdpData); });
        }
        else {
            var telemetryMessage = {
                operationName: "SDKOrchestrator.activityLog",
                data: {
                    activityId: "cdpDataQueued",
                    details: "itemId:" + cdpData.itemId
                }
            };
            this._logger.logTelemetry(telemetryMessage);
            this._cdpDataQueue.push(cdpData);
        }
    };
    Object.defineProperty(SDKOrchestrator.prototype, "packageVersion", {
        get: function () {
            var noPackageVersion = 0;
            return this._packageVersion ? this._packageVersion : noPackageVersion;
        },
        enumerable: true,
        configurable: true
    });
    SDKOrchestrator.prototype._sendQueuedCdpData = function () {
        var _this = this;
        var telemetryMessage = {
            operationName: "SDKOrchestrator.activityLog",
            data: {
                activityId: "cdpDataFlushed",
                details: "queuedItems count: " + this._cdpDataQueue.length
            }
        };
        this._logger.logTelemetry(telemetryMessage);
        this._isReadyToSendCdpData = true;
        this._cdpDataQueue.forEach(function (cdpData) {
            cdpData.promise.then(function (response) {
                _this._sendCdpDataResponse(cdpData.itemId, response);
            }, function (error) { return _this._handleCdpDataPromiseFailure(error, cdpData); });
        });
        this._cdpDataQueue = [];
    };
    SDKOrchestrator.prototype._handleCdpDataPromiseFailure = function (error, cdpData) {
        var telemetryMessage = {
            operationName: "SDKOrchestrator.operationFailure",
            data: {
                failureLevel: "warning",
                functionName: "SDKOrchestrator._sendQueuedCdpData",
                details: "itemId: " + cdpData.itemId + ", error: " + error,
            }
        };
        this._logger.logTelemetry(telemetryMessage);
    };
    SDKOrchestrator.prototype._sendCdpDataResponse = function (itemId, response) {
        if (response.status === 200) {
            var cdpDataResponse = {
                messageType: "sendCdpData",
                iframeId: this._publishedAppIframeId,
                requestId: null,
                itemId: itemId,
                response: response
            };
            this._messageHandler.sendMessageReply(this._publishedAppMessageEvent, cdpDataResponse);
        }
        else {
            var telemetryMessage = {
                operationName: "SDKOrchestrator.operationFailure",
                data: {
                    failureLevel: "warning",
                    functionName: "SDKOrchestrator._sendCdpDataResponse",
                    details: "Http has failure status: " + response.status + ", itemId: " + itemId,
                }
            };
            this._logger.logTelemetry(telemetryMessage);
        }
    };
    SDKOrchestrator.prototype._tryParsePackageCacheData = function (packageCacheDataString) {
        var logError = null;
        if (packageCacheDataString && this._packagePropertiesJson) {
            // package properties must exist as we use this to determine if there is stale data
            try {
                var packageCacheData = JSON.parse(packageCacheDataString);
                if (packageCacheData.cachedFileUrlTemplate // Has a cache url template
                    && packageCacheData.cachedFileUrlTemplate.indexOf("https://") === 0 // starts with https
                    && packageCacheData.cachedFileUrlTemplate.indexOf("{0}") !== -1 // has to contain {0} so we can replace it
                    && packageCacheData.appFiles // has app files
                    && packageCacheData.appFiles.constructor === Array) { // app files is an array
                    var validPackageCacheData = {
                        cachedFileUrlTemplate: packageCacheData.cachedFileUrlTemplate,
                        appFiles: packageCacheData.appFiles,
                        cachedFileTimestamp: packageCacheData.cachedFileTimestamp
                    };
                    if (!this._parsedPackageProperties) {
                        this._parsedPackageProperties = JSON.parse(this._packagePropertiesJson);
                    }
                    // the id on the package properties is a timestamp
                    if (!this._parsedPackageProperties.id) {
                        // if there is no id on package props, we don't want to use the package cache data
                        // because there is no way to compare freshness of package cache
                        // This should never happen.
                        return null;
                    }
                    // The package properties id is a number that is too large for javascript to parse accurately.
                    // As a result the last two digits are always zero and the third to last could round up/down, so we will chop off the last three digits when doing the comparison
                    var packagePropertiesIdString = this._parsedPackageProperties.id.toString();
                    var shortenedPackagePropertiesId = packagePropertiesIdString.substring(0, packagePropertiesIdString.length - 3);
                    if (packageCacheData.cachedFileTimestamp) {
                        if (packageCacheData.cachedFileTimestamp.indexOf(shortenedPackagePropertiesId) === -1) {
                            // If these two ids are different, then that means either SPO's package props is stale
                            // or the cached file is stale, so we don't want to use the package cache data in this case
                            return null;
                        }
                    }
                    else {
                        // older package cache data, doesn't have the cached file timestamp on it
                        if (packageCacheData.cachedFileUrlTemplate.indexOf(shortenedPackagePropertiesId) === -1) {
                            // SPO file path contains the id as part of it, so we check if the url template contains it
                            // if it doesn't contain it, then the cached file is stale
                            return null;
                        }
                    }
                    if (packageCacheData.initialFiles && packageCacheData.initialFiles.constructor === Array) {
                        validPackageCacheData.initialFiles = packageCacheData.initialFiles;
                    }
                    if (packageCacheData.entryPointHtmlFileName) {
                        validPackageCacheData.entryPointHtmlFileName = packageCacheData.entryPointHtmlFileName;
                    }
                    if (packageCacheData.manifestJsonFileName) {
                        validPackageCacheData.manifestJsonFileName = packageCacheData.manifestJsonFileName;
                    }
                    return validPackageCacheData;
                }
            }
            catch (error) {
                logError = error;
            }
        }
        var telemetryMessage = {
            operationName: "SDKOrchestrator.operationFailure",
            data: {
                failureLevel: "warning",
                functionName: "SDKOrchestrator._tryParsePackageCacheData",
                details: "packageCacheData: " + packageCacheDataString + ", error: " + logError,
            }
        };
        this._logger.logTelemetry(telemetryMessage);
        return null;
    };
    SDKOrchestrator.prototype._constructPublishedAppIframeUrl = function () {
        var iframeMode = this._packageData ? "siblingWithPackageCacheData" : "sibling";
        var preloadIndex = null;
        var preloadIndexVersion = null;
        var cdnUrl = null;
        var packageProperties = null;
        if (this._packagePropertiesJson) {
            try {
                if (!this._parsedPackageProperties) {
                    this._parsedPackageProperties = JSON.parse(this._packagePropertiesJson);
                }
                packageProperties = this._parsedPackageProperties;
                // if package properties has a version, its can be supported by the sibling iframe flow
                if (packageProperties.v) {
                    this._packageVersion = packageProperties.v;
                    if (packageProperties.preLoadIdx) {
                        var uriParser = document.createElement('a');
                        uriParser.href = packageProperties.preLoadIdx;
                        if (this._sdkMetadata.validPreloadDomains.indexOf(uriParser.host) !== -1) {
                            // Only use the preload index if it is valid
                            preloadIndex = packageProperties.preLoadIdx;
                        }
                    }
                    else if (packageProperties.preloadindexversion) {
                        preloadIndexVersion = packageProperties.preloadindexversion;
                    }
                    if (packageProperties.cdnUrl) {
                        var uriParser = document.createElement('a');
                        uriParser.href = packageProperties.cdnUrl;
                        if (this._sdkMetadata.validPreloadDomains.indexOf(uriParser.host) !== -1) {
                            // Only use the cdn url if it is valid
                            cdnUrl = packageProperties.cdnUrl;
                        }
                    }
                }
            }
            catch (error) {
            }
        }
        var selectedTemplate = this._sdkMetadata.defaultPublishedAppUrlTemplate;
        var selectedInlinedLoaderTemplate = null;
        if (preloadIndex && cdnUrl) {
            selectedTemplate = this._sdkMetadata.preloadIndexPublishedAppUrlTemplate;
            selectedInlinedLoaderTemplate = this._sdkMetadata.preloadIndexWithInlinedLoaderUrlTemplate;
        }
        else if (preloadIndexVersion && cdnUrl) {
            selectedTemplate = this._sdkMetadata.preloadVersionPublishedAppUrlTemplate;
            selectedInlinedLoaderTemplate = this._sdkMetadata.preloadIndexWithInlinedLoaderUrlTemplate;
        }
        var hashParams = this._sdkMetadata.hashParamsTemplate;
        if (cdnUrl) {
            hashParams = hashParams.replace(/__cdnUrl__/g, cdnUrl);
        }
        else {
            hashParams = hashParams.replace(/"__cdnUrl__"/g, null);
        }
        hashParams = hashParams.replace(/__appId__/g, this._appId);
        hashParams = hashParams.replace(/__iframeMode__/g, iframeMode);
        if (this._paramsQuery) {
            hashParams = hashParams.replace(/__paramsQuery__/g, this._paramsQuery);
        }
        else {
            hashParams = hashParams.replace(/"__paramsQuery__"/g, null);
        }
        var publishedAppUrl = selectedTemplate;
        publishedAppUrl = publishedAppUrl.replace(/__hashParams__/g, encodeURIComponent(hashParams));
        publishedAppUrl = publishedAppUrl.replace(/__cdnUrl__/g, cdnUrl);
        publishedAppUrl = publishedAppUrl.replace(/__preloadIndex__/g, preloadIndex);
        publishedAppUrl = publishedAppUrl.replace(/__preloadIndexVersion__/g, preloadIndexVersion);
        if (selectedInlinedLoaderTemplate && packageProperties && packageProperties.v) {
            var publishedAppUrlParts = publishedAppUrl.split("?");
            var inlinedLoaderUrl = selectedInlinedLoaderTemplate;
            inlinedLoaderUrl = inlinedLoaderUrl.replace(/__encodedIndexUrl__/g, encodeURIComponent(publishedAppUrlParts[0]));
            var parameters = publishedAppUrlParts[1].split("#");
            var getParameters = parameters[0];
            var hashParameters = parameters[1];
            var getParameterList = getParameters.split("&");
            var addLoaderParameter = true;
            for (var i = 0; i < getParameterList.length; i++) {
                if (getParameterList[i].indexOf("loader=") > -1) {
                    getParameterList[i] = "loader=inline";
                    addLoaderParameter = false;
                    break;
                }
            }
            if (addLoaderParameter) {
                getParameterList.push("loader=inline");
            }
            getParameters = getParameterList.join("&");
            var finalParameters = getParameters + "#" + hashParameters;
            inlinedLoaderUrl = inlinedLoaderUrl.replace(/__otherParameters__/g, finalParameters);
            publishedAppUrl = inlinedLoaderUrl;
        }
        return publishedAppUrl;
    };
    SDKOrchestrator.prototype.setupIframes = function () {
        var iframeSetupStartTime = Date.now();
        this._iframeKey = this._appId + "-" + iframeSetupStartTime;
        this._hostIframeId = hostIframeName + "-" + this._iframeKey;
        this._publishedAppIframeId = publishedAppIframeName + "-" + this._iframeKey;
        this._hostIframe = this._createIframe(this._hostIframeId, this._hostIframeUrl);
        // Host-iframe always on top of publishedApp-iframe.
        this._hostIframe.style.zIndex = "999";
        this._resizeHostIframe = this._resizeHostIframe.bind(this);
        this._publishedAppIframeUrl = this._constructPublishedAppIframeUrl();
        this._publishedAppIframe = this._createIframe(this._publishedAppIframeId, this._publishedAppIframeUrl);
        this._publishedAppIframe.style.margin = "0px";
        var telemetryMessage = {
            operationName: "SDKOrchestrator.setupIframes",
            data: {
                time: iframeSetupStartTime,
                hostIframeId: this._hostIframeId,
                publishedAppIframeId: this._publishedAppIframeId,
                hostUrl: this._hostIframeUrl,
                publishedAppUrl: this._publishedAppIframeUrl,
                sdkOrchestratorVersion: SDKOrchestratorVersion
            }
        };
        this._logger.logTelemetry(telemetryMessage);
        return { publishedAppIframe: this._publishedAppIframe, hostIframe: this._hostIframe };
    };
    SDKOrchestrator.prototype.dispose = function () {
        if (this._hostIframe) {
            this._containerElement.removeChild(this._hostIframe);
            this._hostIframe = null;
        }
        if (this._publishedAppIframe) {
            this._containerElement.removeChild(this._publishedAppIframe);
            this._publishedAppIframe = null;
        }
        if (this._messageHandler) {
            this._messageHandler.removeMessageListener(this._onMessageReceived);
        }
    };
    SDKOrchestrator.prototype._logTelemetryMessages = function (messages) {
        var sendTelemetryMessage = {
            messageType: "sendTelemetry",
            requestId: "Telemetry",
            iframeId: this._hostIframeId,
            messages: messages
        };
        this._messageHandler.sendMessageReply(this._hostMessageEvent, sendTelemetryMessage);
    };
    SDKOrchestrator.prototype._initCommunication = function (messageData, fullEvent) {
        var iframeInitRequest = messageData;
        if (this._isFromHostIframe(messageData)) {
            this._hostMessageEvent = fullEvent;
            this._antiCSRFToken = iframeInitRequest.antiCSRFToken;
            var telemetryMessage = {
                operationName: "SDKOrchestrator._initCommunication",
                data: {
                    time: Date.now(),
                    fromHost: true
                }
            };
            this._logger.logTelemetry(telemetryMessage);
            this._logger.setHostInitialized();
        }
        else {
            var telemetryMessage = {
                operationName: "SDKOrchestrator._initCommunication",
                data: {
                    time: Date.now(),
                    fromHost: false
                }
            };
            this._logger.logTelemetry(telemetryMessage);
            this._publishedAppMessageEvent = fullEvent;
        }
        if (this._hostMessageEvent && this._publishedAppMessageEvent && this._publishedAppIframe) {
            var hostResponse = {
                messageType: "initCommunication",
                requestId: this._hostRequestId,
                iframeIdToSendMessagesTo: this._publishedAppIframeId,
                antiCSRFToken: this._antiCSRFToken,
                sdkOrchestratorVersion: SDKOrchestratorVersion,
                iframeId: this._hostIframeId
            };
            this._messageHandler.sendMessageReply(this._hostMessageEvent, hostResponse);
            var publishedAppResponse = {
                messageType: "initCommunication",
                requestId: this._publishedAppRequestId,
                iframeIdToSendMessagesTo: this._hostIframeId,
                antiCSRFToken: this._antiCSRFToken,
                sdkOrchestratorVersion: SDKOrchestratorVersion,
                iframeId: this._publishedAppIframeId
            };
            this._messageHandler.sendMessageReply(this._publishedAppMessageEvent, publishedAppResponse);
        }
    };
    SDKOrchestrator.prototype._isFromHostIframe = function (message) {
        return message.iframeId === this._hostIframeId;
    };
    SDKOrchestrator.prototype._isFromPublishedAppIframe = function (message) {
        return message.iframeId === this._publishedAppIframeId;
    };
    SDKOrchestrator.prototype._onMessageReceived = function (e) {
        var _this = this;
        var getResourceRequest;
        var startTime;
        var data = e.data;
        var messageData = data;
        if (messageData) {
            if (this._isFromHostIframe(messageData) || this._isFromPublishedAppIframe(messageData)) {
                switch (messageData.messageType) {
                    case ("initCommunication"):
                        this._initCommunication(messageData, e);
                        break;
                    case ("startCdpData"):
                        this._sendQueuedCdpData();
                        break;
                    case ("resizeHost"):
                        var resizeHostMessage = messageData;
                        this._resizeHostIframe(resizeHostMessage.info, resizeHostMessage.type);
                        break;
                    case ("clearPublishedApp"):
                        this._clearPublishedApp();
                        break;
                    case ("getResourceIndex"):
                        var resourceIndexReply = {
                            messageType: "getResourceIndex",
                            requestId: messageData.requestId,
                            appFiles: this._resourceDownloader.getAppFiles(),
                            iframeId: messageData.iframeId
                        };
                        this._messageHandler.sendMessageReply(e, resourceIndexReply);
                        break;
                    case ("getEntryPointHtml"):
                        startTime = Date.now();
                        this._entryPointDownloadPromise.then(function (entryPointHtml) {
                            var entryPointHtmlReply = {
                                messageType: "getEntryPointHtml",
                                requestId: messageData.requestId,
                                resourceData: entryPointHtml,
                                iframeId: messageData.iframeId
                            };
                            _this._messageHandler.sendMessageReply(e, entryPointHtmlReply);
                            _this._logResourceFetchTime(startTime);
                        });
                        break;
                    case ("getManifestJson"):
                        startTime = Date.now();
                        this._manifestDownloadPromise.then(function (manifestJsonString) {
                            var manifestJsonReply = {
                                messageType: "getManifestJson",
                                requestId: messageData.requestId,
                                resourceData: manifestJsonString,
                                iframeId: messageData.iframeId
                            };
                            _this._messageHandler.sendMessageReply(e, manifestJsonReply);
                            _this._logResourceFetchTime(startTime);
                        });
                        break;
                    case ("getResource"):
                        getResourceRequest = data;
                        startTime = Date.now();
                        var resourcePromise = void 0;
                        if (this._initialFilesPromiseDictionary[getResourceRequest.filePath]) {
                            resourcePromise = this._initialFilesPromiseDictionary[getResourceRequest.filePath];
                            delete this._initialFilesPromiseDictionary[getResourceRequest.filePath];
                        }
                        else {
                            resourcePromise = this._resourceDownloader.downloadResourceAsync(getResourceRequest.filePath);
                        }
                        resourcePromise.then(function (resourceData) {
                            var resourceReply = {
                                messageType: "getResource",
                                requestId: messageData.requestId,
                                resourceData: resourceData,
                                iframeId: messageData.iframeId
                            };
                            _this._messageHandler.sendMessageReply(e, resourceReply);
                            _this._logResourceFetchTime(startTime);
                        });
                        break;
                    default:
                        // unexpected message
                        var telemetryMessage = {
                            operationName: "SDKOrchestrator.unexpectedMessage",
                            data: {
                                iframeId: messageData.iframeId,
                                messageType: messageData.messageType
                            }
                        };
                        this._logger.logTelemetry(telemetryMessage);
                        break;
                }
            }
        }
    };
    SDKOrchestrator.prototype._clearPublishedApp = function () {
        if (this._publishedAppIframe) {
            this._containerElement.removeChild(this._publishedAppIframe);
            this._publishedAppIframe = null;
        }
    };
    SDKOrchestrator.prototype._logResourceFetchTime = function (startTime) {
        var endTime = Date.now();
        var telemetryMessage = {
            operationName: "SDKOrchestrator.fetchResource",
            data: {
                startTime: startTime,
                time: endTime,
                elapsedTime: endTime - startTime,
                fromHost: false
            }
        };
        this._logger.logTelemetry(telemetryMessage);
    };
    SDKOrchestrator.prototype._resizeHostIframe = function (resizeInfo, type) {
        switch (type) {
            case ("host"):
                if (resizeInfo === true) {
                    // Make host-iframe block to show disambiguation dialog or splash screen.
                    if (this._publishedAppIframe) {
                        this._hostIframe.style.height = this._publishedAppIframe.style.height.toString();
                        this._shouldBlockHost = true;
                    }
                }
                else {
                    // Hide host-iframe to show publishedapp-iframe.
                    this._hostIframe.style.height = Math.max(this._currentBannerHeight, this._currentToastsHeight).toString() + "px";
                    this._shouldBlockHost = false;
                }
                break;
            case ("toast"):
                if (typeof resizeInfo === "number") {
                    this._currentToastsHeight = resizeInfo;
                    this._hostIframe.style.height = this._currentToastsHeight.toString() + "px";
                }
                else {
                    if (resizeInfo) { // if 'true' is passed with the 'toast' message, it primes the hidden iframe to allow velocity to show the toast.
                        var hostHeight = parseInt(this._hostIframe.style.height.replace("px", ""), 10);
                        if (hostHeight <= 0) {
                            this._currentToastsHeight = 1;
                            this._hostIframe.style.height = "1px";
                        }
                    }
                }
                break;
            case ("banner"):
                if (typeof resizeInfo === "number")
                    this._currentBannerHeight = resizeInfo;
                break;
            default:
                break;
        }
        if (!this._shouldBlockHost) {
            // show/hide toast/incompatible control banner if there is no disambiguation dialog.
            this._hostIframe.style.height = Math.max(this._currentBannerHeight, this._currentToastsHeight).toString() + "px";
        }
    };
    SDKOrchestrator.prototype._createIframe = function (iframeId, iframeUrl) {
        var iframeElement = document.createElement("iframe");
        iframeElement.style.display = "none";
        iframeElement.addEventListener("load", function () {
            iframeElement.style.display = "";
        });
        iframeElement.src = iframeUrl;
        iframeElement.scrolling = "no";
        iframeElement.setAttribute("allow", "geolocation *; microphone *; camera *; fullscreen *");
        iframeElement.id = iframeId;
        iframeElement.name = iframeId;
        if (!window.showSideBySide) {
            iframeElement.setAttribute("style", "position:absolute;left:0;right:0;bottom:0;top:0;width:" + this._iframeWidth + ";height:" + this._iframeHeight);
        }
        iframeElement.allowFullscreen = true; // Not all browsers use the "allow" attribute for full screen
        if (!navigator.userAgent.match('Edge')) {
            // only add the sandboxing attribute on non Microsoft Edge browsers.
            // This is because Microsoft Edge prevents the pop ups of the disambiguation dialog if the sandboxing attribute is present.
            var sandboxProps = ["allow-popups", "allow-popups-to-escape-sandbox", "allow-same-origin", "allow-scripts", "allow-forms", "allow-orientation-lock"];
            if (iframeElement.sandbox && iframeElement.sandbox.add) {
                sandboxProps.forEach(function (prop) { return iframeElement.sandbox.add(prop); });
            }
            else {
                iframeElement.setAttribute("sandbox", sandboxProps.join(" "));
            }
        }
        // set box-sizing to border-box so it doesn't bleed outside container
        iframeElement.style.boxSizing = "border-box";
        // remove border
        iframeElement.style.border = "none";
        this._containerElement.appendChild(iframeElement);
        return iframeElement;
    };
    return SDKOrchestrator;
}());



/***/ }),

/***/ "./SDKTelemetryLogger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKTelemetryLogger", function() { return SDKTelemetryLogger; });
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var SDKTelemetryLogger = /** @class */ (function () {
    function SDKTelemetryLogger(_logMethod) {
        this._logMethod = _logMethod;
        this._logQueue = [];
        this._isHostInitialized = false;
    }
    SDKTelemetryLogger.prototype.setHostInitialized = function () {
        this._isHostInitialized = true;
        this._logMethod(this._logQueue);
        this._logQueue = [];
    };
    SDKTelemetryLogger.prototype.logTelemetry = function (message) {
        if (this._isHostInitialized) {
            this._logMethod([message]);
        }
        else {
            this._logQueue.push(message);
        }
    };
    return SDKTelemetryLogger;
}());



/***/ }),

/***/ "./index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/promise-polyfill/src/index.js");
/* harmony import */ var _ResourceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./ResourceData.ts");
/* harmony import */ var _IResourceDownloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./IResourceDownloader.ts");
/* harmony import */ var _IResourceDownloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_IResourceDownloader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SDKOrchestrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./SDKOrchestrator.ts");
/* harmony import */ var _ISDKTelemetryLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./ISDKTelemetryLogger.ts");
/* harmony import */ var _ISDKTelemetryLogger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ISDKTelemetryLogger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ITelemetryMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./ITelemetryMessage.ts");
/* harmony import */ var _ITelemetryMessage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ITelemetryMessage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceData", function() { return _ResourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IResourceDownloader", function() { return _IResourceDownloader__WEBPACK_IMPORTED_MODULE_2__["IResourceDownloader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKOrchestrator", function() { return _SDKOrchestrator__WEBPACK_IMPORTED_MODULE_3__["SDKOrchestrator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICdpData", function() { return _SDKOrchestrator__WEBPACK_IMPORTED_MODULE_3__["ICdpData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISDKOrchestatorIframes", function() { return _SDKOrchestrator__WEBPACK_IMPORTED_MODULE_3__["ISDKOrchestatorIframes"]; });

/* harmony import */ var _ISDKMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./ISDKMetadata.ts");
/* harmony import */ var _ISDKMetadata__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ISDKMetadata__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ISDKMetadata__WEBPACK_IMPORTED_MODULE_6__) if(["ResourceData","IResourceDownloader","SDKOrchestrator","ICdpData","ISDKOrchestatorIframes","ISDKTelemetryLogger","ITelemetryMessage","IActivityLog","IOperationFailure","IMessageHandler","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ISDKMetadata__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISDKTelemetryLogger", function() { return _ISDKTelemetryLogger__WEBPACK_IMPORTED_MODULE_4__["ISDKTelemetryLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITelemetryMessage", function() { return _ITelemetryMessage__WEBPACK_IMPORTED_MODULE_5__["ITelemetryMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IActivityLog", function() { return _ITelemetryMessage__WEBPACK_IMPORTED_MODULE_5__["IActivityLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IOperationFailure", function() { return _ITelemetryMessage__WEBPACK_IMPORTED_MODULE_5__["IOperationFailure"]; });

/* harmony import */ var _IMessageHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./IMessageHandler.ts");
/* harmony import */ var _IMessageHandler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_IMessageHandler__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMessageHandler", function() { return _IMessageHandler__WEBPACK_IMPORTED_MODULE_7__["IMessageHandler"]; });

//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
// Promise polyfill

promise_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].resolve();














/***/ })

/******/ });
//# sourceMappingURL=D:/Git3/PowerApps-Client/obj/Assets/js/WebPlayerSDKOrchestrator/WebPlayerSDKOrchestrator.js.map
﻿"use strict";
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
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Core;
(function (Core) {
    var Embedding;
    (function (Embedding) {
        var CoreEmbedding = /** @class */ (function () {
            function CoreEmbedding(embeddingOptions, hostWindow) {
                this.embeddingOptions = embeddingOptions;
                this.hostWindow = hostWindow;
                if (!embeddingOptions) {
                    throw new Embedding.EmbeddingError("Options cannot be empty");
                }
                this.embeddingOptions.hostName = this.embeddingOptions.hostName ? this.ensureTrailingSlash(embeddingOptions.hostName) : this.getHostName();
                // TODO: this  if/else can be deleted when SF conversion is completed.
                if (this.embeddingOptions.endpoint && this.embeddingOptions.endpoint === "INT") {
                    this.webplayerPathSegmentToUse = CoreEmbedding.WebplayerCommonPathSegmentForInt;
                }
                else {
                    this.webplayerPathSegmentToUse = CoreEmbedding.WebplayerCommonPathSegment;
                }
                if (this.embeddingOptions.getAccessToken) {
                    if (!hostWindow) {
                        throw new Embedding.EmbeddingError("Host window must be specified when using delegated token authentication");
                    }
                    this._authHandler = this._accessTokenRequestHandler.bind(this);
                    this.hostWindow.addEventListener("message", this._authHandler);
                }
                // extract the domain of the host name
                var match = embeddingOptions.hostName.match(/https:\/\/([a-z0-9\-\.]*[:0-9]*)/i);
                if (!match || match.length < 2) {
                    throw new Embedding.EmbeddingError("Host name is not of the correct format");
                }
                var domain = match[1]; // The domain is the 2nd item in the array of the match
                var subDomainRegExpString = "https:\/\/(?:([^\s\\\/]*)\.)?" + domain; // matches the domain + sub domains
                this.subDomainRegex = new RegExp(subDomainRegExpString, "i"); // ignore case
            }
            // Disposes the object, and thus releases any resource being used
            CoreEmbedding.prototype.dispose = function () {
                if (this._authHandler) {
                    this.hostWindow.removeEventListener("message", this._authHandler);
                    this._authHandler = undefined;
                }
            };
            // Handles access token request
            CoreEmbedding.prototype._accessTokenRequestHandler = function (event) {
                if (!this.validateMessageOrigin(event)) {
                    return;
                }
                var input = event.data;
                if (input && input.api !== undefined) {
                    switch (input.api) {
                        case Embedding.RuntimeToSdkApi.GetAccessToken:
                            var getAccessTokenInput = event.data;
                            var response_1 = {
                                id: getAccessTokenInput.id,
                                api: getAccessTokenInput.api,
                                success: false,
                                accessToken: null,
                                errorMessage: null,
                                parentRequestId: ""
                            };
                            var successCallback = function (token, parentRequestId) {
                                if (parentRequestId === void 0) { parentRequestId = ""; }
                                response_1.success = true;
                                response_1.accessToken = token;
                                response_1.parentRequestId = parentRequestId;
                                if (event.source) {
                                    event.source.postMessage(response_1, event.origin);
                                }
                            };
                            var errorCallback = function (errorMessage, parentRequestId) {
                                if (parentRequestId === void 0) { parentRequestId = ""; }
                                response_1.success = false;
                                response_1.errorMessage = errorMessage;
                                response_1.parentRequestId = parentRequestId;
                                if (event.source) {
                                    event.source.postMessage(response_1, event.origin);
                                }
                            };
                            this.embeddingOptions.getAccessToken(getAccessTokenInput.audience, successCallback, errorCallback, getAccessTokenInput.clientRequestId);
                            break;
                        default:
                            // Invalid API.
                            break;
                    }
                }
            };
            CoreEmbedding.prototype.ensureTrailingSlash = function (url) {
                if (url.charAt(url.length - 1) !== "/") {
                    return url + "/";
                }
                return url;
            };
            CoreEmbedding.prototype.validateMessageOrigin = function (event) {
                var isInAllowList = false;
                CoreEmbedding.HostNameAllowList.forEach(function (domain) {
                    if (event.origin === domain) {
                        isInAllowList = true;
                    }
                });
                return isInAllowList || !!this.subDomainRegex.exec(event.origin);
            };
            CoreEmbedding.prototype.getHostName = function () {
                var endpoint;
                switch (this.embeddingOptions.endpoint) {
                    case Embedding.Endpoint.PROD:
                        endpoint = "https://web.powerapps.com/";
                        break;
                    case Embedding.Endpoint.INT:
                        endpoint = "https://tip1.web.powerapps.com/";
                        break;
                    case Embedding.Endpoint.TEST:
                        endpoint = "https://tip1.web.powerapps.com/";
                        break;
                    case Embedding.Endpoint.DEV:
                        endpoint = "https://webplayer-test.cloudapp.net:44390/";
                        break;
                    default:
                        endpoint = "https://web.powerapps.com/";
                        break;
                }
                return endpoint;
            };
            CoreEmbedding.prototype.constructBaseUrl = function (pathSegment) {
                var url = this.embeddingOptions.hostName + this.webplayerPathSegmentToUse + "/" + pathSegment;
                return this.appendCoreEmbeddingParams(url);
            };
            // TODO: test this, and the above
            CoreEmbedding.prototype.appendCoreEmbeddingParams = function (url) {
                var params = [];
                if (this.embeddingOptions.source) {
                    params.push("source=" + this.embeddingOptions.source);
                }
                if (this.embeddingOptions.locale) {
                    params.push("locale=" + this.embeddingOptions.locale);
                }
                if (this.embeddingOptions.externalCorrelationId) {
                    params.push("correlationId=" + encodeURIComponent(this.embeddingOptions.externalCorrelationId));
                }
                if (this.embeddingOptions.enableOnBehalfOf) {
                    params.push("enableOnBehalfOf=true");
                }
                var queryString = params.join("&");
                if (!!queryString) {
                    // only add an & if there is an existing query
                    if (url.indexOf("?") !== -1) {
                        return url + "&" + queryString;
                    }
                    else {
                        return url + "?" + queryString;
                    }
                }
                else {
                    return url;
                }
            };
            CoreEmbedding.WebplayerCommonPathSegment = "webplayer";
            CoreEmbedding.WebplayerCommonPathSegmentForInt = "webplayer-int";
            CoreEmbedding.HostNameAllowList = [
                "https://apps.powerapps.com",
                "https://apps.preview.powerapps.com",
                "https://apps.preprod.powerapps.com",
                "https://apps.int.powerapps.com",
                "https://apps.test.powerapps.com",
                "https://apps.dev.powerapps.com",
                "https://apps.local.powerapps.com:44329",
                "https://apps.local.powerapps.com:44328",
            ];
            return CoreEmbedding;
        }());
        Embedding.CoreEmbedding = CoreEmbedding;
    })(Embedding = Core.Embedding || (Core.Embedding = {}));
})(Core || (Core = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Core;
(function (Core) {
    var Embedding;
    (function (Embedding) {
        // Different endpoint switches to configure the hostname
        var Endpoint;
        (function (Endpoint) {
            Endpoint["DEV"] = "DEV";
            Endpoint["TEST"] = "TEST";
            Endpoint["PROD"] = "PROD";
            Endpoint["INT"] = "INT";
        })(Endpoint = Embedding.Endpoint || (Embedding.Endpoint = {}));
        // DO NOT CHANGE
        // Changing these values will cause a breaking change.
        // If you need to add values, add them at end and be sure to
        // set a fixed numerical value.
        /** @internal */
        var RuntimeToSdkApi;
        (function (RuntimeToSdkApi) {
            RuntimeToSdkApi[RuntimeToSdkApi["GetAccessToken"] = 0] = "GetAccessToken";
            // Don't allocate any number without making sure that it doesn't conflict in derived SDKs
        })(RuntimeToSdkApi = Embedding.RuntimeToSdkApi || (Embedding.RuntimeToSdkApi = {}));
        /** @internal */
        function isRuntimeToSdkRequest(request) {
            return typeof request === "object" &&
                typeof request.api === "number" &&
                (typeof request.id === "string" || typeof request.id === "undefined");
        }
        Embedding.isRuntimeToSdkRequest = isRuntimeToSdkRequest;
        /** @internal */
        /// <summary>
        /// Sends an XHR (XMLHttpRequest) according to the specified parameters
        /// </summary>
        /// <param name='method' type='string' />HTTP request method</param>
        /// <param name='url' type='string' />HTTP request URL</param>
        /// <param name='headers' type='{ [key: string]: string; }' />mapping of HTTP request header names and values</param>
        /// <param name='body' type='string' />string representing the JSON of the body information to be passed</param>
        function sendXhr(method, url, headers, body) {
            // Create the XHR request and return it as a Promise
            var xhr = new XMLHttpRequest();
            return new Promise(function (resolve, reject) {
                // Listen for completed requests
                xhr.onreadystatechange = function () {
                    // Return if the request has not completed
                    if (xhr.readyState !== 4) {
                        return;
                    }
                    // Process the response
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // If successful, yield the XHR
                        resolve(xhr);
                    }
                    else {
                        // If failed, yield failure info
                        reject({ status: xhr.status, statusText: xhr.statusText });
                    }
                };
                // Setup our HTTP request: open it and add headers
                xhr.open(method, url, true);
                if (headers) {
                    Object.keys(headers).forEach(function (key) { return xhr.setRequestHeader(key, headers[key]); });
                }
                // Send the request
                if (method === "POST" && body) {
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.send(body);
                }
                else {
                    xhr.send();
                }
            });
        }
        Embedding.sendXhr = sendXhr;
        var EmbeddingError = /** @class */ (function (_super) {
            __extends(EmbeddingError, _super);
            function EmbeddingError(message) {
                return _super.call(this, message) || this;
            }
            return EmbeddingError;
        }(Error));
        Embedding.EmbeddingError = EmbeddingError;
        // Represents different uber kinds of data that can be supplied from an embedded context
        var DataKind;
        (function (DataKind) {
            DataKind["Table"] = "Table";
            DataKind["Record"] = "Record";
        })(DataKind = Embedding.DataKind || (Embedding.DataKind = {}));
        var DataType;
        (function (DataType) {
            DataType["String"] = "s";
            DataType["Number"] = "n";
            DataType["Boolean"] = "b";
            DataType["Date"] = "d";
            DataType["DateTime"] = "D";
        })(DataType = Embedding.DataType || (Embedding.DataType = {}));
    })(Embedding = Core.Embedding || (Core.Embedding = {}));
})(Core || (Core = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var WebPlayer;
(function (WebPlayer) {
    var Sdk;
    (function (Sdk) {
        // DO NOT CHANGE
        // Changing these values will cause a breaking change.
        // If you need to add values, add them at end and be sure to
        // set a fixed numerical value.
        /** @internal */
        var PowerAppsEmbeddingCallbackApi;
        (function (PowerAppsEmbeddingCallbackApi) {
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["GetAccessToken"] = 0] = "GetAccessToken";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["AppLoaded"] = 1] = "AppLoaded";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["AppClosed"] = 2] = "AppClosed";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["AppFailed"] = 3] = "AppFailed";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["RequestHide"] = 4] = "RequestHide";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["EnableSave"] = 5] = "EnableSave";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["NewItem"] = 6] = "NewItem";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["EditItem"] = 7] = "EditItem";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["ViewItem"] = 8] = "ViewItem";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["SaveItem"] = 9] = "SaveItem";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["CancelEditItem"] = 10] = "CancelEditItem";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["SetProperty"] = 20] = "SetProperty";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["VisibilityChanged"] = 21] = "VisibilityChanged";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["ReadyToHandleMessages"] = 22] = "ReadyToHandleMessages";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["InteractionRequired"] = 23] = "InteractionRequired";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["SendTrigger"] = 30] = "SendTrigger";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["SendTriggerResponse"] = 31] = "SendTriggerResponse";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["SendTelemetryEvent"] = 40] = "SendTelemetryEvent";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["Log"] = 41] = "Log";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["DelegateLaunchUrl"] = 42] = "DelegateLaunchUrl";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["OpenConsentPage"] = 43] = "OpenConsentPage";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["CloseConsentPage"] = 44] = "CloseConsentPage";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["SetConsentResult"] = 45] = "SetConsentResult";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["OpenConnectorAuthPopup"] = 46] = "OpenConnectorAuthPopup";
            PowerAppsEmbeddingCallbackApi[PowerAppsEmbeddingCallbackApi["SetConnectorAuthResult"] = 47] = "SetConnectorAuthResult";
        })(PowerAppsEmbeddingCallbackApi = Sdk.PowerAppsEmbeddingCallbackApi || (Sdk.PowerAppsEmbeddingCallbackApi = {}));
        /** @internal */
        function isDelegateLaunchUrlEventCallBackParams(params) {
            return typeof params.url === "string";
        }
        Sdk.isDelegateLaunchUrlEventCallBackParams = isDelegateLaunchUrlEventCallBackParams;
        /** @internal */
        function isAppToHostFunctionsEventCallBackParams(params) {
            return typeof params.requestParameters.url === "string" &&
                typeof params.requestParameters.method === "string" &&
                (!params.requestParameters.headers || typeof params.requestParameters.headers === "object") &&
                (!params.requestParameters.retryable || typeof params.requestParameters.retryable === "object") &&
                (!params.requestParameters.bodyData || typeof params.requestParameters.bodyData === "string") &&
                Core.Embedding.isRuntimeToSdkRequest(params);
        }
        Sdk.isAppToHostFunctionsEventCallBackParams = isAppToHostFunctionsEventCallBackParams;
        /** @internal */
        function isAppToHostTelemetryEventCallBackParams(params) {
            return typeof params.message === "string" &&
                params.message !== "" &&
                params.message !== null &&
                (params.data === null || typeof params.data === "object") &&
                Core.Embedding.isRuntimeToSdkRequest(params);
        }
        Sdk.isAppToHostTelemetryEventCallBackParams = isAppToHostTelemetryEventCallBackParams;
    })(Sdk = WebPlayer.Sdk || (WebPlayer.Sdk = {}));
})(WebPlayer || (WebPlayer = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var WebPlayer;
(function (WebPlayer) {
    var Sdk;
    (function (Sdk) {
        var IframeDimensions = /** @class */ (function () {
            function IframeDimensions() {
            }
            return IframeDimensions;
        }());
        /* Embed a power app */
        var PowerAppsEmbedding = /** @class */ (function (_super) {
            __extends(PowerAppsEmbedding, _super);
            function PowerAppsEmbedding(options, hostWindow) {
                var _this = _super.call(this, options, hostWindow || window) || this;
                _this.sdkVersion = "1.3.26";
                _this.appIdConst = "/providers/Microsoft.PowerApps/apps/";
                _this.eventListeners = {};
                _this.params = "";
                if (!options.appId) {
                    throw new Sdk.PowerAppsEmbeddingError("App Id cannot be empty");
                }
                else if (options.appId.indexOf(_this.appIdConst) === -1) {
                    // check if /providers/Microsoft.PowerApps/apps/ is at the front to be more resilient to other inputs
                    options.appId = _this.appIdConst + options.appId;
                }
                if (!options.containerId) {
                    throw new Sdk.PowerAppsEmbeddingError("Container Id cannot be empty");
                }
                _this.containerElement = document.getElementById(options.containerId);
                if (!_this.containerElement) {
                    throw new Sdk.PowerAppsEmbeddingError("Container div does not exist");
                }
                if (options.standAloneConsent && !options.consentContainerId) {
                    throw new Sdk.PowerAppsEmbeddingError("Container Id for consent service cannot be empty");
                }
                if (options.consentContainerId) {
                    _this.consentContainerElement = document.getElementById(options.consentContainerId);
                    if (!_this.consentContainerElement) {
                        throw new Sdk.PowerAppsEmbeddingError("Container div for consent service does not exist");
                    }
                }
                _this.options = options;
                _this._onMessageReceived = _this._onMessageReceived.bind(_this);
                _this._processConnectorAuthResult = _this._processConnectorAuthResult.bind(_this);
                _this.queuedCdpData = [];
                return _this;
            }
            /**
             *  @param itemId The id value of the item being sent.
             *  @param promise This promise resolves when your call is finished. Important: Caller must return same object type for both success and reject. Just modify the status
             */
            PowerAppsEmbedding.prototype.sendCdpData = function (itemId, promise) {
                if (!promise) {
                    return;
                }
                var cdpData = {
                    itemId: itemId,
                    promise: promise
                };
                if (!this.sdkOrchestrator) {
                    this.queuedCdpData.push(cdpData);
                    return;
                }
                this._sendCdpData(cdpData);
            };
            /**
             * Executes an action in the embedded app. This is used by Sharepoint forms integration.
             * This can only be called after the load event is fired.
             *
             * Available actions:
             *  - new : Create a new record in the current list. Does not require options.
             *  - edit : Edit an existing record in the current list. Requires itemId in options.
             *  - view : View an existing record in the current list. Requires itemId in options.
             *  - save : Save the currently selected record. Does not require options.
             *  - cancel : Cancel editing/creating the current record. This resets the form. Does not require options.
             *  - log : Log data with a correlate parentRequestId. Requires options in the form of a single depth object.
             *
             * @example
             * var powerAppsEmbedding = new WebPlayer.Sdk.PowerAppsEmbedding(options);
             * powerAppsEmbedding.addEventListener("load", function () {
             *     powerAppsEmbedding.executeAction("edit", { itemId: "5" });
             * });
             * powerAppsEmbedding.renderApp();
             *
             * @param action A string representing the action to execute
             * @param options An object with the options the action requires to execute
             */
            PowerAppsEmbedding.prototype.executeAction = function (action, options) {
                if (options === void 0) { options = {}; }
                if (!this.iframe) {
                    throw new Error("renderApp must be called before executeAction");
                }
                var itemId = options && options.itemId;
                var params;
                switch (action) {
                    case "new":
                        params = {
                            api: Sdk.PowerAppsEmbeddingCallbackApi.NewItem,
                            originalClickTime: options.originalClickTime
                        };
                        break;
                    case "edit":
                        if (!itemId) {
                            throw new TypeError("options must contain itemId");
                        }
                        params = {
                            api: Sdk.PowerAppsEmbeddingCallbackApi.EditItem,
                            itemId: itemId
                        };
                        break;
                    case "view":
                        if (!itemId) {
                            throw new TypeError("options must contain itemId");
                        }
                        params = {
                            api: Sdk.PowerAppsEmbeddingCallbackApi.ViewItem,
                            itemId: itemId,
                            originalClickTime: options.originalClickTime
                        };
                        break;
                    case "save":
                        params = { api: Sdk.PowerAppsEmbeddingCallbackApi.SaveItem };
                        break;
                    case "cancel":
                        params = { api: Sdk.PowerAppsEmbeddingCallbackApi.CancelEditItem };
                        break;
                    case "set-data":
                        params = {
                            api: Sdk.PowerAppsEmbeddingCallbackApi.SetProperty,
                            hostType: "dynamic",
                            propertyName: "Data",
                            value: options.data
                        };
                        break;
                    case "log":
                        if (!options && !options.parentRequestId) {
                            throw new TypeError("data must contain parentRequestId");
                        }
                        params = {
                            api: Sdk.PowerAppsEmbeddingCallbackApi.Log,
                            data: options
                        };
                        break;
                    default:
                        throw new RangeError("Invalid action");
                }
                // Send the message to the app host
                this.iframe.contentWindow.postMessage(params, "*");
            };
            PowerAppsEmbedding.prototype._constructUrl = function (isConsentService) {
                if (isConsentService === void 0) { isConsentService = false; }
                var url = "";
                if (this._isCallingServiceFabricEndpoint()) {
                    // strip the prefix from the url for service fabric
                    var appGuid = decodeURIComponent(this.options.appId).replace(this.appIdConst, "");
                    var routeName = isConsentService ? "consent" : "play";
                    if (this.options.appEnvironmentId) {
                        if (this.options.logicalAppName) {
                            url = "" + this.options.hostName + routeName + "/e/" + this.options.appEnvironmentId + "/an/" + this.options.logicalAppName;
                        }
                        else {
                            url = "" + this.options.hostName + routeName + "/e/" + this.options.appEnvironmentId + "/a/" + appGuid;
                        }
                    }
                    else {
                        // default url
                        url = "" + this.options.hostName + routeName + "/" + appGuid;
                    }
                    url = this.appendCoreEmbeddingParams(url);
                    var authMode = "default";
                    if (this.options.enableAuthFlowProxy) {
                        authMode = "authflowproxy";
                    }
                    else if (this.options.getAccessToken) {
                        if (this.options.enableOnBehalfOf) {
                            authMode = "onbehalfof";
                        }
                        else {
                            authMode = "override";
                        }
                    }
                    // only add an & if there is an existing query
                    var delimiter = url.indexOf("?") !== -1 ? "&" : "?";
                    url = "" + url + delimiter + "authMode=" + authMode;
                    if (!isConsentService && this.options.standAloneConsent) {
                        url += "&standAloneConsent=true";
                    }
                    if (isConsentService && typeof this.options.openConnectorAuthPopup === "function") {
                        var connectorAuthCallbackUrl = encodeURIComponent(window.location.protocol + "//" + window.location.host + "/webplayer/webClientAuthRedirect.html");
                        url += "&openPopupByHost=true&connectorAuthCallbackUrl=" + connectorAuthCallbackUrl;
                    }
                }
                else {
                    // TODO: The webPlayerAppSegment will become obsolete with the move to WebPlayer Service Fabric (as will this else block).
                    var webPlayerAppSegment = "iframeapp";
                    if (this.options.getAccessToken) {
                        webPlayerAppSegment = "embedapp";
                    }
                    url = this.constructBaseUrl(webPlayerAppSegment);
                    // only add an & if there is an existing query
                    var delimiter = url.indexOf("?") !== -1 ? "&" : "?";
                    var encodedAppId = encodeURIComponent(this.options.appId);
                    url = "" + url + delimiter + "appId=" + encodedAppId;
                }
                url += "&hideNavBar=true";
                if (this.options.tenantId) {
                    url += "&tenantId=" + this.options.tenantId;
                }
                if (this.options.appInfo && this.options.appInfo.properties && this.options.appInfo.properties.backgroundColor) {
                    url += "&screenColor=" + encodeURIComponent(this.options.appInfo.properties.backgroundColor);
                }
                else if (this.options.splashScreenCssColor) {
                    url += "&screenColor=" + encodeURIComponent(this.options.splashScreenCssColor);
                }
                if (this.options.delegateLaunchUrl) {
                    url += "&delegatelaunchurl=true";
                }
                if (this.options.hideAppSplashScreen) {
                    url += "&hideAppSplash=true";
                }
                if (this.options.packagePropertiesJson) {
                    url += "&packageProperties=" + encodeURIComponent(this.options.packagePropertiesJson);
                }
                if (this.options.cachedFilesJson) {
                    url += "&skipIframeCreation=true";
                }
                url += "&sdkVersion=" + this.sdkVersion;
                url += "&iframeContainerId=" + this.options.containerId;
                if (this.options.locale) {
                    url += "&locale=" + this.options.locale;
                }
                if (this.options.parameters) {
                    for (var paramKey in this.options.parameters) {
                        if (this.options.parameters.hasOwnProperty(paramKey)) {
                            this.params += "&" + paramKey + "=" + encodeURIComponent(this.options.parameters[paramKey]);
                        }
                    }
                    url += this.params;
                }
                if (this.options.useIntegrationEnvironment) {
                    url += "&overrideEnvironment=Tip1&overridePackager=Int";
                }
                return url;
            };
            PowerAppsEmbedding.prototype._generateIframeSize = function () {
                if (this.options.appInfo && this.options.appInfo.tags && this.options.appInfo.tags.primaryDeviceWidth && this.options.appInfo.tags.primaryDeviceHeight) {
                    var aspectRatio = this.options.appInfo.tags.primaryDeviceHeight / this.options.appInfo.tags.primaryDeviceWidth;
                    if (aspectRatio > 0) {
                        // Aspect ratio is a valid value
                        if (this.options.maxWidth) {
                            // Max width is set
                            var width = parseInt(this.options.maxWidth, 10);
                            var height = width * aspectRatio;
                            if (this.options.maxHeight) {
                                // max height is set
                                var maxHeight = parseInt(this.options.maxHeight, 10);
                                if (height > maxHeight) {
                                    // the height we calculated is greater than max height so we need to calculate the width based on the height
                                    width = maxHeight / aspectRatio;
                                    height = maxHeight;
                                }
                            }
                            return {
                                width: width + "px",
                                height: height + "px"
                            };
                        }
                        else {
                            // Max width is not set
                            if (this.options.maxHeight) {
                                // Max height is set so calculate width based on that
                                var height = parseInt(this.options.maxHeight, 10);
                                var width = height / aspectRatio;
                                return {
                                    width: width + "px",
                                    height: height + "px"
                                };
                            }
                            else {
                                // Max height is also not set
                                if (aspectRatio > 1) {
                                    // Height > width
                                    var width = 100 / aspectRatio;
                                    return {
                                        height: "100%",
                                        width: width + "%"
                                    };
                                }
                                else {
                                    // width > height
                                    var height = 100 * aspectRatio;
                                    return {
                                        width: "100%",
                                        height: height + "%"
                                    };
                                }
                            }
                        }
                    }
                    else {
                        // Got a weird number for the aspect ratio so treating as if there is no aspect ratio
                        console.log("Aspect ratio is: " + aspectRatio);
                        return this._generateIframeSizeWithNoAspectRatio();
                    }
                }
                else {
                    // we don't have the data to determine the aspect ratio
                    return this._generateIframeSizeWithNoAspectRatio();
                }
            };
            PowerAppsEmbedding.prototype._generateIframeSizeWithNoAspectRatio = function () {
                var height;
                var width;
                if (this.options.maxWidth) {
                    // max width is set so force the width to be that
                    width = parseInt(this.options.maxWidth, 10) + "px";
                }
                else {
                    // Set to to fill 100% of container div
                    width = "100%";
                }
                if (this.options.maxHeight) {
                    // max width is set so force the width to be that
                    height = parseInt(this.options.maxHeight, 10) + "px";
                }
                else {
                    // Set to to fill 100% of container div
                    height = "100%";
                }
                return {
                    width: width,
                    height: height
                };
            };
            // This is used by our test page as we have to be able to support webplayer-int paths
            PowerAppsEmbedding.prototype.overrideWebPlayerPathSegment = function (pathSegment) {
                this.webplayerPathSegmentToUse = pathSegment;
            };
            PowerAppsEmbedding.prototype._fetchSDKMetadataAndLoad = function () {
                var url = "";
                if (this._isCallingServiceFabricEndpoint()) {
                    url = this.options.hostName + "sdk/metadata";
                }
                else {
                    url = this.options.hostName + this.webplayerPathSegmentToUse + "/SDKMetadata";
                }
                var injectSDKOrchestratorScript = this._injectSDKOrchestratorScriptAndRenderApp.bind(this);
                var renderAppWithoutSdkOrchestrator = this._renderWebPlayerApp.bind(this);
                var renderAppWithSdkOrchestrator = this._renderAppWithSdkOrchestrator.bind(this);
                var request = new XMLHttpRequest();
                request.onload = function () {
                    var notRendered = true;
                    if (this.status === 200) {
                        var metadataString = request.responseText;
                        try {
                            var parsedMetadata = JSON.parse(metadataString);
                            if (parsedMetadata.defaultPublishedAppUrlTemplate && parsedMetadata.orchestratorScriptLocation) {
                                if (typeof WebPlayerSDKOrchestrator !== "undefined") {
                                    // script has already been injected
                                    notRendered = false;
                                    renderAppWithSdkOrchestrator(parsedMetadata);
                                }
                                else {
                                    notRendered = false;
                                    injectSDKOrchestratorScript(parsedMetadata, parsedMetadata.orchestratorScriptLocation);
                                }
                            }
                        }
                        catch (error) {
                        }
                    }
                    if (notRendered) {
                        renderAppWithoutSdkOrchestrator();
                    }
                };
                request.onerror = function () {
                    renderAppWithoutSdkOrchestrator();
                };
                request.open("GET", url);
                request.send();
            };
            PowerAppsEmbedding.prototype._injectSDKOrchestratorScriptAndRenderApp = function (sdkMetadata, orchestratorScriptLocation) {
                // Create a Script tag.
                var scriptTag = document.createElement("SCRIPT");
                scriptTag.setAttribute("crossorigin", "anonymous");
                scriptTag.type = "text/javascript";
                scriptTag.async = false; // Disabling async for modern browsers to ensure that the scripts load in the correct order.
                var renderAppWithoutSdkOrchestrator = this._renderWebPlayerApp.bind(this);
                var renderAppWithSdkOrchestrator = this._renderAppWithSdkOrchestrator.bind(this);
                scriptTag.addEventListener("error", function (ev) {
                    renderAppWithoutSdkOrchestrator();
                });
                scriptTag.addEventListener("load", function (ev) {
                    renderAppWithSdkOrchestrator(sdkMetadata);
                });
                document.head.appendChild(scriptTag);
                // Setting the Script "src" property should happen after appending the element to the DOM, otherwise the "load" event is not going to fire correctly.
                scriptTag.src = orchestratorScriptLocation;
            };
            PowerAppsEmbedding.prototype._renderAppWithSdkOrchestrator = function (sdkMetadata) {
                var _this = this;
                window.addEventListener("message", this._onMessageReceived);
                var iframeDimensions = this._generateIframeSize();
                this.sdkOrchestrator = new WebPlayerSDKOrchestrator.SDKOrchestrator(this.containerElement, this._constructUrl(false), sdkMetadata, this.options.cachedFilesJson, iframeDimensions.width, iframeDimensions.height, this.options.appId, this.options.packagePropertiesJson, this.params);
                var sdkOrchestratorIframes = this.sdkOrchestrator.setupIframes();
                this.iframe = sdkOrchestratorIframes.hostIframe;
                this.queuedCdpData.forEach(function (cdpData) {
                    _this._sendCdpData(cdpData);
                });
                this.queuedCdpData = [];
            };
            PowerAppsEmbedding.prototype._sendCdpData = function (cdpData) {
                this.sdkOrchestrator.sendCdpData(cdpData, this.options.overrideSendCdpDataApiEnabled);
            };
            PowerAppsEmbedding.prototype._renderWebPlayerApp = function () {
                var url = this._constructUrl(false);
                this.iframe = this._createFrame(url);
                window.addEventListener("message", this._onMessageReceived);
                this.options.cachedFilesJson = null; // clear cached file json if any
                this.iframe.name = "webPlayer-iFrame";
                this.containerElement.appendChild(this.iframe);
                if (this.options.perceivedNodeQuerySelector) {
                    this.preceivedNodeToWatch = document.querySelector(this.options.perceivedNodeQuerySelector);
                    this._trackEmbeddedPlayerVisibility();
                }
            };
            PowerAppsEmbedding.prototype._renderConsentPage = function () {
                var url = this._constructUrl(true);
                this.consentIframe = this._createFrame(url);
                this.consentIframe.name = "consentService-iFrame";
                this.consentContainerElement.appendChild(this.consentIframe);
            };
            PowerAppsEmbedding.prototype._createFrame = function (url) {
                var iframeElement = document.createElement("iframe");
                iframeElement.src = url;
                iframeElement.scrolling = "no";
                iframeElement.setAttribute("allow", "geolocation *; microphone *; camera *; fullscreen *;");
                iframeElement.allowFullscreen = true; // Not all browsers use the "allow" attribute for full screen
                if (!navigator.userAgent.match('Edge')) {
                    // only add the sandboxing attribute on non Microsoft Edge browsers.
                    // This is because Microsoft Edge prevents the pop ups of the disambiguation dialog if the sandboxing attribute is present.
                    var sandboxProps = ["allow-popups", "allow-popups-to-escape-sandbox", "allow-same-origin", "allow-scripts", "allow-forms", "allow-orientation-lock"];
                    if (iframeElement.sandbox && iframeElement.sandbox.add) {
                        sandboxProps.forEach(function (prop) { return iframeElement.sandbox.add(prop); });
                    }
                    else {
                        iframeElement.setAttribute("sandbox", sandboxProps.join(" "));
                    }
                }
                var iframeDimensions = this._generateIframeSize();
                iframeElement.width = iframeDimensions.width;
                iframeElement.height = iframeDimensions.height;
                // set box-sizing to border-box so it doesn't bleed outside container
                iframeElement.style.boxSizing = "border-box";
                // remove border
                iframeElement.style.border = "none";
                return iframeElement;
            };
            /* Creates an iframe for the app */
            PowerAppsEmbedding.prototype.renderApp = function () {
                if (this.options.cachedFilesJson && !this.sdkOrchestrator) {
                    this._fetchSDKMetadataAndLoad();
                }
                else if (!this.iframe && !this.options.cachedFilesJson) {
                    this._renderWebPlayerApp();
                }
            };
            PowerAppsEmbedding.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                if (this.iframe && !this.sdkOrchestrator) {
                    this.containerElement.removeChild(this.iframe);
                    this.iframe = null;
                }
                if (this.sdkOrchestrator) {
                    this.sdkOrchestrator.dispose();
                }
                this._disposeConsentPage();
                this.eventListeners = {};
                window.removeEventListener("message", this._onMessageReceived);
            };
            PowerAppsEmbedding.prototype._disposeConsentPage = function () {
                if (this.consentIframe) {
                    this.consentContainerElement.removeChild(this.consentIframe);
                    this.consentIframe = null;
                }
            };
            /**
             * Listen to events on the app. Events support multiple listeners. Available events:
             *  - load : Fired when app is sucessfully loaded.
             *  - unload: Fired when the app is closed. This can happen before load is fired.
             *            It happens when user does not agree to consent dialog or when the app calls Exit().
             *  - error: Fired when the app does not load due to an error.
             *  - delegateLaunchUrl: Fired when the app requests the host to launch a url
             *  - requestHide: Fired when the app requests the embedder to be hidden, such as when a call to executeAction("save") completes.
             *  - enableSave: For an embedded form, fired when form validation determines the Save button can be enabled by the embedder.
             *  - sendTrigger: Fired when the app transmits information to the host in order to trigger an action
             *
             * @param eventName The name of the event to listen to
             * @param listener A function to call when the event is fired
             */
            PowerAppsEmbedding.prototype.addEventListener = function (eventName, listener) {
                if (typeof listener !== "function") {
                    throw new TypeError("Event listener must be a function");
                }
                if (this.eventListeners.hasOwnProperty(eventName)) {
                    this.eventListeners[eventName].push(listener);
                }
                else {
                    this.eventListeners[eventName] = [listener];
                }
            };
            /**
             * Removes a listener for an event. The function passed must be the exact same function passed to addEventListener.
             *
             * @example <caption>Wrong usage</caption>
             * powerAppsEmbedding.addEventListener("load", onload.bind(this));
             * powerAppsEmbedding.removeEventListener("load", onload.bind(this));
             *
             * @example <caption>Correct usage</caption>
             * var onloadHandler = onload.bind(this);
             * powerAppsEmbedding.addEventListener("load", onloadHandler);
             * powerAppsEmbedding.removeEventListener("load", onloadHandler);
             *
             * @param eventName Name of the event on which you want to remove the listener
             * @param listener Function to be removed as the listener. Must be the exact same function passed to addEventListener
             */
            PowerAppsEmbedding.prototype.removeEventListener = function (eventName, listener) {
                if (this.eventListeners.hasOwnProperty(eventName)) {
                    var index = this.eventListeners[eventName].indexOf(listener);
                    if (index !== -1) {
                        this.eventListeners[eventName].splice(index, 1);
                    }
                }
            };
            PowerAppsEmbedding.prototype._fireEvent = function (eventName, appId, containerId, data) {
                if (this.eventListeners.hasOwnProperty(eventName)) {
                    var fullAppId_1 = appId;
                    appId = fullAppId_1.substring(fullAppId_1.lastIndexOf("/") + 1);
                    this.eventListeners[eventName].forEach(function (e) { return e(appId, fullAppId_1, containerId, data); });
                }
            };
            PowerAppsEmbedding.prototype._onMessageReceived = function (e) {
                if (!this.validateMessageOrigin(e)) {
                    return;
                }
                var input = e.data;
                if (input && input.api !== undefined) {
                    var eventName = "";
                    switch (input.api) {
                        case Sdk.PowerAppsEmbeddingCallbackApi.AppLoaded:
                            eventName = "load";
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.AppClosed:
                            eventName = "unload";
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.AppFailed:
                            eventName = "error";
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.EnableSave:
                            eventName = "enableSave";
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.DelegateLaunchUrl:
                            if (Sdk.isDelegateLaunchUrlEventCallBackParams(input)) {
                                eventName = "delegateLaunchUrl";
                            }
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.RequestHide:
                            eventName = "requestHide";
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.SendTrigger:
                            if (Sdk.isAppToHostFunctionsEventCallBackParams(input)) {
                                eventName = "sendTrigger";
                            }
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.ReadyToHandleMessages:
                            if (this.preceivedNodeToWatch) { // only report if we have a mutation observer in place
                                this._reportEmbeddedPlayerVisibility();
                            }
                            return;
                        case Sdk.PowerAppsEmbeddingCallbackApi.SendTelemetryEvent:
                            if (Sdk.isAppToHostTelemetryEventCallBackParams(input)) {
                                eventName = "telemetry";
                            }
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.InteractionRequired:
                            eventName = "interactionRequired";
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.OpenConsentPage:
                            this._renderConsentPage();
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.CloseConsentPage:
                            this._disposeConsentPage();
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.SetConsentResult:
                            var consentResultParams = { api: Sdk.PowerAppsEmbeddingCallbackApi.SetConsentResult, data: input.data };
                            this.iframe.contentWindow.postMessage(consentResultParams, "*");
                            break;
                        case Sdk.PowerAppsEmbeddingCallbackApi.OpenConnectorAuthPopup:
                            this.options.openConnectorAuthPopup(input.data, this._processConnectorAuthResult);
                            break;
                        default:
                            // Invalid API.
                            break;
                    }
                    if (eventName
                        && (!input.appId || input.appId.toLowerCase() === this.options.appId.toLowerCase())
                        && (!input.containerId || input.containerId === this.options.containerId)) {
                        this._fireEvent(eventName, input.appId, input.containerId, input);
                    }
                }
            };
            PowerAppsEmbedding.prototype._processConnectorAuthResult = function (authResult) {
                if (authResult && authResult.result) {
                    var authResultParam = { api: Sdk.PowerAppsEmbeddingCallbackApi.SetConnectorAuthResult, data: authResult };
                    this.consentIframe.contentWindow.postMessage(authResultParam, "*");
                }
            };
            PowerAppsEmbedding.prototype._trackEmbeddedPlayerVisibility = function () {
                var _this = this;
                if (typeof MutationObserver === "undefined") {
                    return;
                }
                var mutationObserver = new MutationObserver(function (changed, observer) {
                    var ancestorOrSelfChanged = changed.some(function (change) { return [_this.containerElement, _this.iframe].some(function (target) { return change.target.contains(target) || change.target === target; }); });
                    if (!ancestorOrSelfChanged) {
                        return;
                    }
                    _this._reportEmbeddedPlayerVisibility(observer);
                });
                mutationObserver.observe(this.preceivedNodeToWatch, {
                    attributes: true,
                    subtree: false
                });
            };
            PowerAppsEmbedding.prototype._reportEmbeddedPlayerVisibility = function (observer) {
                var isPlayerVisible = PowerAppsEmbedding._isElementOnScreen(this.iframe);
                if (this.isPlayerVisible !== isPlayerVisible && this.iframe) {
                    this.isPlayerVisible = isPlayerVisible;
                    this.iframe.contentWindow.postMessage({
                        api: Sdk.PowerAppsEmbeddingCallbackApi.VisibilityChanged,
                        visible: this.isPlayerVisible
                    }, "*");
                    if (observer) {
                        observer.disconnect();
                    }
                }
            };
            PowerAppsEmbedding._isElementOnScreen = function (element) {
                if (element) {
                    var containsRect = function (container, rect) {
                        return container.top <= rect.top
                            && container.bottom >= rect.bottom
                            && container.left <= rect.left
                            && container.right >= rect.right;
                    };
                    var hasDimensions = element.offsetWidth + element.offsetHeight;
                    var isCssVisible = ["hidden", "collapsed"].indexOf(getComputedStyle(element).visibility) === -1;
                    var isDisplayedOnScreen = containsRect(document.body.getBoundingClientRect(), element.getBoundingClientRect());
                    return !!hasDimensions && isCssVisible && isDisplayedOnScreen;
                }
                return false;
            };
            PowerAppsEmbedding.prototype._isCallingServiceFabricEndpoint = function () {
                return (!!this.options.hostName && /https:\/\/apps(\.\w+)?\.powerapps\.com/.test(this.options.hostName));
            };
            return PowerAppsEmbedding;
        }(Core.Embedding.CoreEmbedding));
        Sdk.PowerAppsEmbedding = PowerAppsEmbedding;
    })(Sdk = WebPlayer.Sdk || (WebPlayer.Sdk = {}));
})(WebPlayer || (WebPlayer = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var WebPlayer;
(function (WebPlayer) {
    var Sdk;
    (function (Sdk) {
        var PowerAppsEmbeddingError = /** @class */ (function (_super) {
            __extends(PowerAppsEmbeddingError, _super);
            function PowerAppsEmbeddingError() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PowerAppsEmbeddingError;
        }(Error));
        Sdk.PowerAppsEmbeddingError = PowerAppsEmbeddingError;
    })(Sdk = WebPlayer.Sdk || (WebPlayer.Sdk = {}));
})(WebPlayer || (WebPlayer = {}));
//# sourceMappingURL=../../../../../../obj/Assets/js/WebPlayer.Sdk/index.js.map