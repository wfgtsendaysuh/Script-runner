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
/******/ 	return __webpack_require__(__webpack_require__.s = 225);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return normalizeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return initHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return debounce; });
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return leftpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getRnd4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getUniqId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getLocaleString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return request; });
/* unused harmony export setRequestHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buffer2string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFullUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cache2blobUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return verbose; });
/* unused harmony export enableVerbose */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return delay; });
/* unused harmony export assertTestMode */
var config = {
  requestHandler: requestXhr,
  verbose: "production" === 'development'
};
function i18n(name, args) {
  return browser.i18n.getMessage(name, args) || name;
}
var defaultImage = '/public/images/icon128.png';
function normalizeKeys(key) {
  if (key == null) return [];
  if (Array.isArray(key)) return key;
  return `${key}`.split('.').filter(Boolean);
}
function initHooks() {
  var hooks = [];

  function fire(data) {
    hooks.slice().forEach(function (cb) {
      cb(data);
    });
  }

  function hook(callback) {
    hooks.push(callback);
    return function () {
      var i = hooks.indexOf(callback);
      if (i >= 0) hooks.splice(i, 1);
    };
  }

  return {
    hook,
    fire
  };
}
function sendMessage(payload) {
  var promise = browser.runtime.sendMessage(payload).then(function (res) {
    var _ref = res || {},
        data = _ref.data,
        error = _ref.error;

    if (error) return Promise.reject(error);
    return data;
  });
  promise.catch(function (err) {
    if (process.env.DEBUG) console.warn(err, payload);
  });
  return promise;
}
function debounce(func, time) {
  var timer;

  function run(thisObj, args) {
    timer = null;
    func.apply(thisObj, args);
  }

  return function debouncedFunction() {
    if (timer) clearTimeout(timer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    timer = setTimeout(run, time, this, args);
  };
}
function throttle(func, time) {
  var timer;

  function run(thisObj, args) {
    timer = null;
    func.apply(thisObj, args);
  }

  return function throttledFunction() {
    if (!timer) {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      timer = setTimeout(run, time, this, args);
    }
  };
}
function noop() {}
function leftpad(input, length) {
  var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var num = input.toString();

  while (num.length < length) {
    num = `${pad}${num}`;
  }

  return num;
}
function getRnd4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).slice(-4);
}
function getUniqId(prefix) {
  return (prefix || '') + Date.now().toString(36) + getRnd4();
}
/**
 * Get locale attributes such as `@name:zh-CN`
 */

function getLocaleString(meta, key) {
  var localeMeta = navigator.languages // Use `lang.toLowerCase()` since v2.6.5
  .map(function (lang) {
    return meta[`${key}:${lang}`] || meta[`${key}:${lang.toLowerCase()}`];
  }).find(Boolean);
  return localeMeta || meta[key] || '';
}
var binaryTypes = ['blob', 'arraybuffer'];

function requestXhr(url, options) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var responseType = options.responseType;
    xhr.open(options.method || 'GET', url, true);
    if (binaryTypes.includes(responseType)) xhr.responseType = responseType;
    var headers = Object.assign({}, options.headers);
    var body = options.body;

    if (body && Object.prototype.toString.call(body) === '[object Object]') {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(body);
    }

    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });

    xhr.onload = function () {
      var res = getResponse(xhr, {
        // status for `file:` protocol will always be `0`
        status: xhr.status || 200
      });
      if (res.status > 300) reject(res);else resolve(res);
    };

    xhr.onerror = function () {
      var res = getResponse(xhr, {
        status: -1
      });
      reject(res);
    };

    xhr.onabort = xhr.onerror;
    xhr.ontimeout = xhr.onerror;
    xhr.send(body);
  });

  function getResponse(xhr, extra) {
    var responseType = options.responseType;
    var data;

    if (binaryTypes.includes(responseType)) {
      data = xhr.response;
    } else {
      data = xhr.responseText;
    }

    if (responseType === 'json') {
      try {
        data = JSON.parse(data);
      } catch (e) {// Ignore invalid JSON
      }
    }

    return Object.assign({
      url,
      data,
      xhr
    }, extra);
  }
}
/**
 * Make a request.
 * @param {String} url
 * @param {Object} headers
 * @return Promise
 */


function request(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return config.requestHandler(url, options);
}
function setRequestHandler(handler) {
  config.requestHandler = handler;
}
function buffer2string(buffer) {
  var array = new window.Uint8Array(buffer);
  var sliceSize = 8192;
  var str = '';

  for (var i = 0; i < array.length; i += sliceSize) {
    str += String.fromCharCode.apply(null, array.subarray(i, i + sliceSize));
  }

  return str;
}
function getFullUrl(url, base) {
  var obj = new URL(url, base); // Use protocol whitelist to filter URLs

  if (!['http:', 'https:', 'ftp:', 'data:', 'file:'].includes(obj.protocol)) obj.protocol = 'http:';
  return obj.href;
}
function isRemote(url) {
  return url && !/^(file:|data:|https?:\/\/localhost[:/]|http:\/\/127\.0\.0\.1[:/])/.test(url);
}
function cache2blobUrl(raw) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      defaultType = _ref2.defaultType,
      overrideType = _ref2.type;

  if (raw) {
    var parts = `${raw}`.split(',');
    var length = parts.length;
    var b64 = parts[length - 1];
    var type = overrideType || parts[length - 2] || defaultType || ''; // Binary string is not supported by blob constructor,
    // so we have to transform it into array buffer.

    var bin = window.atob(b64);
    var arr = new window.Uint8Array(bin.length);

    for (var i = 0; i < bin.length; i += 1) {
      arr[i] = bin.charCodeAt(i);
    }

    var blob = new Blob([arr], {
      type
    });
    return URL.createObjectURL(blob);
  }
}
function verbose() {
  if (config.verbose) {
    var _console;

    (_console = console).info.apply(_console, arguments);
  }
}
function enableVerbose(value) {
  config.verbose = !!value;
} // export function isDomainAllowed(host) {
//   try {
//     const allowedDomains = [
//       'acestream.org',
//       'acestream.net',
//       'acestream.me',
//     ];
//     const targetHost = host.split('.').slice(-2).join('.');
//     return allowedDomains.includes(targetHost);
//   } catch (e) {
//     verbose(`isDomainAllowed: error: ${e}`);
//   }
// }

/**
* Function to include setTimeout in promise chain.
* Usage:
* delay(1000).then(() => { doSmth(); })
*
*/

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}
function assertTestMode() {
  if (true) {
    throw new Error(`Test mode expected: current=${"production"}`);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setClipboard; });
var clipboardData;

function onCopy(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  var _clipboardData = clipboardData,
      type = _clipboardData.type,
      data = _clipboardData.data;
  e.clipboardData.setData(type || 'text/plain', data);
}

function setClipboard(_ref) {
  var type = _ref.type,
      data = _ref.data;
  clipboardData = {
    type,
    data
  };
  document.addEventListener('copy', onCopy, false);
  var ret = document.execCommand('copy', false, null);
  document.removeEventListener('copy', onCopy, false);
  clipboardData = null;

  if (process.env.DEBUG && !ret) {
    console.warn('Copy failed!');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ initialize; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(9);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/common/index.js
var common = __webpack_require__(0);

// EXTERNAL MODULE: ./src/common/ua.js
var ua = __webpack_require__(19);

// EXTERNAL MODULE: ./src/injected/utils/index.js
var utils = __webpack_require__(8);

// CONCATENATED MODULE: ./src/injected/content/bridge.js
/* harmony default export */ var bridge = ({});
// CONCATENATED MODULE: ./src/injected/content/tabs.js



var tabIds = {};
var tabKeys = {};
function tabOpen(_ref) {
  var key = _ref.key,
      data = _ref.data;
  data.url = Object(common["f" /* getFullUrl */])(data.url, window.location.href);
  Object(utils["e" /* sendMessage */])({
    cmd: 'TabOpen',
    data
  }).then(function (_ref2) {
    var id = _ref2.id;
    tabIds[key] = id;
    tabKeys[id] = key;
  });
}
function tabClose(key) {
  var id = tabIds[key]; // !key => close current tab
  // id => close tab by id

  if (!key || id) Object(utils["e" /* sendMessage */])({
    cmd: 'TabClose',
    data: {
      id
    }
  });
}
function tabClosed(id) {
  var key = tabKeys[id];
  delete tabKeys[id];
  delete tabIds[key];

  if (key) {
    bridge.post({
      cmd: 'TabClosed',
      data: key
    });
  }
}
// CONCATENATED MODULE: ./src/injected/content/notifications.js


var notifications = {};
function onNotificationCreate(options) {
  Object(utils["e" /* sendMessage */])({
    cmd: 'Notification',
    data: options
  }).then(function (nid) {
    notifications[nid] = options.id;
  });
}
function onNotificationClick(nid) {
  var id = notifications[nid];
  if (id) bridge.post({
    cmd: 'NotificationClicked',
    data: id
  });
}
function onNotificationClose(nid) {
  var id = notifications[nid];

  if (id) {
    bridge.post({
      cmd: 'NotificationClosed',
      data: id
    });
    delete notifications[nid];
  }
}
// CONCATENATED MODULE: ./src/injected/content/requests.js


var requests = {};
function getRequestId() {
  Object(utils["e" /* sendMessage */])({
    cmd: 'GetRequestId'
  }).then(function (id) {
    requests[id] = 1;
    bridge.post({
      cmd: 'GotRequestId',
      data: id
    });
  });
}
function httpRequest(details) {
  Object(utils["e" /* sendMessage */])({
    cmd: 'HttpRequest',
    data: details
  });
}
function httpRequested(data) {
  if (requests[data.id]) {
    if (data.type === 'loadend') delete requests[data.id];
    bridge.post({
      cmd: 'HttpRequested',
      data
    });
  }
}
function abortRequest(id) {
  Object(utils["e" /* sendMessage */])({
    cmd: 'AbortRequest',
    data: id
  });
}
// EXTERNAL MODULE: ./src/injected/content/clipboard.js
var clipboard = __webpack_require__(103);

// CONCATENATED MODULE: ./src/injected/content/index.js









var IS_TOP = window.top === window;
var ids = [];
var enabledIds = [];
var menus = {};

function setBadge() {
  // delay setBadge in frames so that they can be added to the initial count
  new Promise(function (resolve) {
    return setTimeout(resolve, IS_TOP ? 0 : 300);
  }).then(function () {
    return Object(utils["e" /* sendMessage */])({
      cmd: 'SetBadge',
      data: {
        ids: enabledIds,
        reset: IS_TOP
      }
    });
  });
}

var bgHandlers = {
  Command(data) {
    bridge.post({
      cmd: 'Command',
      data
    });
  },

  GetPopup: getPopup,
  HttpRequested: httpRequested,
  TabClosed: tabClosed,

  UpdatedValues(data) {
    bridge.post({
      cmd: 'UpdatedValues',
      data
    });
  },

  NotificationClick: onNotificationClick,
  NotificationClose: onNotificationClose,

  WatchOnlineMenuClicked(data) {
    bridge.post({
      cmd: 'WatchOnlineMenuClicked',
      data
    });
  }

};
function initialize(contentId, webId) {
  bridge.post = Object(utils["b" /* bindEvents */])(contentId, webId, onHandle);
  bridge.destId = webId;
  browser.runtime.onMessage.addListener(function (req, src) {
    var handle = bgHandlers[req.cmd];
    if (handle) handle(req.data, src);
  });
  return Object(utils["e" /* sendMessage */])({
    cmd: 'GetInjected',
    data: {
      url: window.location.href,
      reset: IS_TOP,
      isTop: IS_TOP
    }
  }).then(function (data) {
    if (data.scripts) {
      data.scripts = data.scripts.filter(function (script) {
        ids.push(script.props.id);

        if ((IS_TOP || !script.meta.noframes) && script.config.enabled) {
          enabledIds.push(script.props.id);
          return true;
        }

        return false;
      });
    }

    getPopup();
    setBadge();
    var needInject = data.scripts && data.scripts.length;

    if (needInject) {
      bridge.ready.then(function () {
        bridge.post({
          cmd: 'LoadScripts',
          data
        });
      });
    }

    return needInject;
  });
}
var handlers = {
  GetRequestId: getRequestId,
  HttpRequest: httpRequest,
  AbortRequest: abortRequest,
  Inject: injectScript,
  TabOpen: tabOpen,
  TabClose: tabClose,

  Ready() {
    bridge.ready = Promise.resolve();
  },

  UpdateValue(data) {
    Object(utils["e" /* sendMessage */])({
      cmd: 'UpdateValue',
      data
    });
  },

  RegisterMenu(data) {
    if (IS_TOP) {
      var _data = slicedToArray_default()(data, 1),
          key = _data[0];

      menus[key] = data;
    }

    getPopup();
  },

  UnregisterMenu(data) {
    if (IS_TOP) {
      var _data2 = slicedToArray_default()(data, 1),
          key = _data2[0];

      delete menus[key];
    }

    getPopup();
  },

  AddStyle(_ref) {
    var css = _ref.css,
        callbackId = _ref.callbackId;
    var styleId = null;

    if (document.head) {
      styleId = Object(common["i" /* getUniqId */])('VMst');
      var style = document.createElement('style');
      style.id = styleId;
      style.textContent = css;
      document.head.appendChild(style);
    }

    bridge.post({
      cmd: 'Callback',
      data: {
        callbackId,
        payload: styleId
      }
    });
  },

  Notification: onNotificationCreate,

  SetClipboard(data) {
    if (ua["c" /* isFirefox */]) {
      // Firefox does not support copy from background page.
      // ref: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard
      // The dirty way will create a <textarea> element in web page and change the selection.
      Object(clipboard["a" /* default */])(data);
    } else {
      Object(utils["e" /* sendMessage */])({
        cmd: 'SetClipboard',
        data
      });
    }
  },

  PostCommand(_ref2) {
    var cmd = _ref2.cmd,
        requestId = _ref2.requestId,
        data = _ref2.data;
    Object(utils["e" /* sendMessage */])({
      cmd,
      data
    }).then(function (result) {
      bridge.post({
        cmd: 'CommandResponse',
        data: {
          result,
          requestId
        }
      });
    });
  }

};
bridge.ready = new Promise(function (resolve) {
  handlers.Ready = resolve;
});

function onHandle(req) {
  var handle = handlers[req.cmd];
  if (handle) handle(req.data);
}

function getPopup() {
  // XXX: only scripts run in top level window are counted
  if (IS_TOP) {
    Object(utils["e" /* sendMessage */])({
      cmd: 'SetPopup',
      data: {
        ids,
        menus: Object.values(menus)
      }
    });
  }
}

function injectScript(data) {
  var _data3 = slicedToArray_default()(data, 4),
      vId = _data3[0],
      wrapperKeys = _data3[1],
      code = _data3[2],
      vCallbackId = _data3[3];

  var func = function func(attach, id, cb, callbackId) {
    attach(id, cb);
    var callback = window[callbackId];
    if (callback) callback();
  };

  var args = [utils["a" /* attachFunction */].toString(), JSON.stringify(vId), `function(${wrapperKeys.join(',')}){${code}}`, JSON.stringify(vCallbackId)];
  var injectedCode = `!${func.toString()}(${args.join(',')})`;
  Object(utils["d" /* inject */])(injectedCode);
}

function watchDOM(func, retryCount, retryInterval) {
  if (!func()) {
    if (retryCount && retryCount > 0) {
      setTimeout(function () {
        watchDOM(func, retryCount - 1, retryInterval);
      }, retryInterval);
    }
  }
}

function checkStartEngineMarker() {
  // start engine if requested by this page
  var el = document.getElementById('x-acestream-awe-start-engine');

  if (!el) {
    return false;
  } // notify the marker owner that we have catched it


  Object(utils["e" /* sendMessage */])({
    cmd: 'StartEngine'
  }).then(function (response) {
    Object(common["r" /* verbose */])('Script Runner Pro: start engine: response', response);

    if (response) {
      el.setAttribute('data-status', 'started');
    } else {
      el.setAttribute('data-status', 'failed');
    }
  });
  return true;
}

function exposeVersion() {
  // set version in special container
  var el = document.getElementById('x-acestream-awe-version');

  if (!el) {
    return false;
  } // if (isDomainAllowed(window.location.host)) {
  //   el.setAttribute('data-vendor', getVendor());
  //   el.setAttribute('data-version', browser.runtime.getManifest().version);
  // }


  return true;
}

function exposeInstalledScripts() {
  // expose installed scripts to a limited set of domains
  var el = document.getElementById('x-acestream-awe-installed-scripts');

  if (!el) {
    return false;
  } // if (isDomainAllowed(window.location.host)) {
  //   sendMessage({ cmd: 'GetInstalledScripts' })
  //   .then(response => {
  //     if (response) {
  //       el.setAttribute('data-scripts', JSON.stringify(response));
  //     }
  //   });
  // }


  return true;
}

function onDOMContentLoaded() {
  watchDOM(checkStartEngineMarker, 60, 500); // if (isDomainAllowed(window.location.host)) {
  //   watchDOM(exposeVersion, 240, 500);
  //   watchDOM(exposeInstalledScripts, 60, 500);
  // }

  if (IS_TOP) {
    // check news for this site
    Object(utils["e" /* sendMessage */])({
      cmd: 'CheckNews',
      data: {
        url: window.location.href
      }
    });
  }
}

function validateJSON(str) {
  var regex = /\{.*\:\{.*\:.*\}\}/i;
  var m;

  if ((m = regex.exec(str)) !== null) {
    return m[0];
  }

  return false;
}

function receiveMessage(event) {
  // const validJson = validateJSON(event.data);
  if (event.data.indexOf("extId") > -1) {
    var json = JSON.parse(event.data);

    if (json.extId && json.extId === chrome.runtime.id) {
      window.postMessage(JSON.stringify({
        isValid: true
      }));
    } else {
      window.postMessage(JSON.stringify({
        isValid: false
      }));
    }
  } else if (event.data.indexOf("Download") > -1) {
    var _json = JSON.parse(event.data);

    Object(utils["e" /* sendMessage */])(_json);
  }
}

window.addEventListener("message", receiveMessage, false);
document.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);

/***/ }),

/***/ 16:
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

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAndroid; });
/* unused harmony export getVendor */
var _navigator = navigator,
    userAgent = _navigator.userAgent;
var isFirefox = /firefox\//i.test(userAgent);
var isChrome = /chrome\//i.test(userAgent);
var isAndroid = /android /i.test(userAgent);
function getVendor() {
  if (isFirefox) {
    return 'firefox';
  }

  if (isChrome) {
    return 'chrome';
  }

  return 'unknown';
}

/***/ }),

/***/ 22:
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);



(function main() {
  // Avoid running repeatedly due to new `document.documentElement`
  if (window.VM) return;
  window.VM = 1; // Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1408996

  var VMInitInjection = window["VMInitInjection"];

  function initBridge() {
    var contentId = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getUniqId */ "c"])();
    var webId = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getUniqId */ "c"])();
    Object(_content__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(contentId, webId).then(function (needInject) {
      if (needInject) {
        doInject(contentId, webId);
      }
    });
  }

  function doInject(contentId, webId) {
    var props = {};
    [Object.getOwnPropertyNames(window), Object.getOwnPropertyNames(global)].forEach(function (keys) {
      keys.forEach(function (key) {
        props[key] = 1;
      });
    });
    var args = [webId, contentId, Object.keys(props)]; // Avoid using Function::apply in case it is shimmed

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "d"])(`(${VMInitInjection.toString()}())(${args.map(function (arg) {
      return JSON.stringify(arg);
    }).join(',')})`);
  }

  initBridge(); // For installation
  // Firefox does not support `onBeforeRequest` for `file:`

  function checkJS() {
    if (!document.querySelector('title')) {
      // plain text
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* sendMessage */ "e"])({
        cmd: 'ConfirmInstall',
        data: {
          code: document.body.textContent,
          url: window.location.href,
          from: document.referrer
        }
      }).then(function () {
        if (window.history.length > 1) window.history.go(-1);else Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* sendMessage */ "e"])({
          cmd: 'TabClose'
        });
      });
    }
  }

  if (/\.(user|acestream)\.js$/.test(window.location.pathname)) {
    if (document.readyState === 'complete') checkJS();else window.addEventListener('load', checkJS, false);
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(43);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export console */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEvent; });
/* unused harmony export Promise */
/* unused harmony export isFinite */
/* unused harmony export Uint8Array */
/* unused harmony export forEach */
/* unused harmony export map */
/* unused harmony export indexOf */
/* unused harmony export includes */
/* unused harmony export toString */
/* unused harmony export keys */
/* unused harmony export assign */
/* unused harmony export isArray */
/* unused harmony export encodeBody */
/* unused harmony export noop */
/* unused harmony export utf8decode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return jsonLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return jsonDump; });
// cache native properties to avoid being overridden, see violentmonkey/violentmonkey#151
// Firefox sucks: `isFinite` is not defined on `window`, see violentmonkey/violentmonkey#300
// eslint-disable-next-line no-restricted-properties
var _global = global,
    console = _global.console,
    CustomEvent = _global.CustomEvent,
    Promise = _global.Promise,
    isFinite = _global.isFinite,
    Uint8Array = _global.Uint8Array;

var arrayProto = Array.prototype;
var objectProto = Object.prototype;

var bindThis = function bindThis(func) {
  return function (thisObj) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(thisObj, args);
  };
};

var forEach = bindThis(arrayProto.forEach);
var map = bindThis(arrayProto.map);
var indexOf = bindThis(arrayProto.indexOf);
var includes = arrayProto.includes ? bindThis(arrayProto.includes) : function (arr, item) {
  return indexOf(arr, item) >= 0;
};
var toString = bindThis(objectProto.toString);
var numberToString = bindThis(Number.prototype.toString);
var stringSlice = bindThis(String.prototype.slice);
var stringCharCodeAt = bindThis(String.prototype.charCodeAt);
var fromCharCode = String.fromCharCode;
var keys = Object.keys;

var assign = Object.assign || function (obj) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  forEach(args, function (arg) {
    if (arg) {
      forEach(keys(arg), function (key) {
        obj[key] = arg[key];
      });
    }
  });
  return obj;
};
var isArray = function isArray(obj) {
  return toString(obj) === '[object Array]';
};
function encodeBody(body) {
  var cls = getType(body);
  var result;

  if (cls === 'formdata') {
    // FormData#keys is supported in Chrome >= 50
    if (!body.keys) return {};
    var promises = [];
    var iterator = body.keys();

    var _loop = function _loop() {
      // eslint-disable-line no-constant-condition
      var item = iterator.next();
      if (item.done) return "break";
      var key = item.value;
      var promise = Promise.all(body.getAll(key).map(function (value) {
        return encodeBody(value);
      })).then(function (values) {
        return {
          key,
          values
        };
      });
      promises.push(promise);
    };

    while (1) {
      var _ret = _loop();

      if (_ret === "break") break;
    }

    result = Promise.all(promises).then(function (items) {
      return items.reduce(function (res, item) {
        res[item.key] = item.values;
        return res;
      }, {});
    }).then(function (value) {
      return {
        cls,
        value
      };
    });
  } else if (includes(['blob', 'file'], cls)) {
    result = new Promise(function (resolve) {
      var reader = new FileReader();

      reader.onload = function () {
        // In Firefox, Uint8Array cannot be sliced if its data is read by FileReader
        var array = new Uint8Array(reader.result);
        var value = '';

        for (var i = 0; i < array.length; i += 1) {
          value += fromCharCode(array[i]);
        }

        resolve({
          cls,
          value,
          type: body.type,
          name: body.name,
          lastModified: body.lastModified
        });
      };

      reader.readAsArrayBuffer(body);
    });
  } else if (body) {
    result = {
      cls,
      value: jsonDump(body)
    };
  }

  return Promise.resolve(result);
}

function getType(obj) {
  var type = typeof obj;
  if (type !== 'object') return type;
  var typeString = toString(obj); // [object TYPENAME]

  return typeString.slice(8, -1).toLowerCase();
}

function noop() {}
/**
 * http://www.webtoolkit.info/javascript-utf8.html
 */

function utf8decode(utftext) {
  /* eslint-disable no-bitwise */
  var string = '';
  var i = 0;
  var c1 = 0;
  var c2 = 0;
  var c3 = 0;

  while (i < utftext.length) {
    c1 = stringCharCodeAt(utftext, i);

    if (c1 < 128) {
      string += fromCharCode(c1);
      i += 1;
    } else if (c1 > 191 && c1 < 224) {
      c2 = stringCharCodeAt(utftext, i + 1);
      string += fromCharCode((c1 & 31) << 6 | c2 & 63);
      i += 2;
    } else {
      c2 = stringCharCodeAt(utftext, i + 1);
      c3 = stringCharCodeAt(utftext, i + 2);
      string += fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      i += 3;
    }
  }

  return string;
  /* eslint-enable no-bitwise */
} // Reference: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON#Polyfill

var escMap = {
  '"': '\\"',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t'
};
var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g; // eslint-disable-line no-control-regex

var escFunc = function escFunc(m) {
  return escMap[m] || `\\u${stringSlice(numberToString(stringCharCodeAt(m, 0) + 0x10000, 16), 1)}`;
};

var jsonLoad = JSON.parse;
function jsonDump(value) {
  if (value == null) return 'null';
  var type = typeof value;

  if (type === 'number') {
    return isFinite(value) ? `${value}` : 'null';
  }

  if (type === 'boolean') return `${value}`;

  if (type === 'object') {
    if (isArray(value)) {
      var res = '[';
      forEach(value, function (item, i) {
        if (i) res += ',';
        res += jsonDump(item);
      });
      res += ']';
      return res;
    }

    if (toString(value) === '[object Object]') {
      var _res = '{';
      forEach(keys(value), function (key, i) {
        if (i) _res += ',';
        _res += `${jsonDump(key)}:${jsonDump(value[key])}`;
      });
      _res += '}';
      return _res;
    }
  }

  var escaped = `${value}`.replace(escRE, escFunc);
  return `"${escaped}"`;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export postData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUniqId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bindEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachFunction; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["q"]; });



function postData(destId, data) {
  // Firefox issue: data must be stringified to avoid cross-origin problem
  var e = new _helpers__WEBPACK_IMPORTED_MODULE_0__[/* CustomEvent */ "a"](destId, {
    detail: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* jsonDump */ "b"])(data)
  });
  document.dispatchEvent(e);
}

function removeElement(id) {
  var el = document.querySelector(`#${id}`);

  if (el) {
    el.parentNode.removeChild(el);
    return true;
  }
}

function inject(code) {
  var script = document.createElement('script');
  var id = getUniqId('VM-');
  script.id = id;
  script.textContent = `!${removeElement.toString()}(${JSON.stringify(id)});${code}`;
  document.documentElement.appendChild(script); // in case the script is blocked by CSP

  removeElement(id);
}
function getUniqId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function bindEvents(srcId, destId, handle) {
  document.addEventListener(srcId, function (e) {
    var data = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* jsonLoad */ "c"])(e.detail);
    handle(data);
  }, false);
  return function (data) {
    postData(destId, data);
  };
}
function attachFunction(id, cb) {
  Object.defineProperty(window, id, {
    value() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      cb.apply(this, args);
      delete window[id];
    },

    configurable: true
  });
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(77);

var iterableToArrayLimit = __webpack_require__(78);

var unsupportedIterableToArray = __webpack_require__(42);

var nonIterableRest = __webpack_require__(79);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ })

/******/ });