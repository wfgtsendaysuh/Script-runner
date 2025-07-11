window.VMInitInjection = function () {
  var module = { exports: {} };
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Promise; });
/* unused harmony export isFinite */
/* unused harmony export Uint8Array */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return map; });
/* unused harmony export indexOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return includes; });
/* unused harmony export toString */
/* unused harmony export keys */
/* unused harmony export assign */
/* unused harmony export isArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return encodeBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return utf8decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return jsonLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return jsonDump; });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  load: _utils_helpers__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "j"]
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export i18n */
/* unused harmony export defaultImage */
/* unused harmony export normalizeKeys */
/* unused harmony export initHooks */
/* unused harmony export sendMessage */
/* unused harmony export debounce */
/* unused harmony export throttle */
/* unused harmony export noop */
/* unused harmony export leftpad */
/* unused harmony export getRnd4 */
/* unused harmony export getUniqId */
/* unused harmony export getLocaleString */
/* unused harmony export request */
/* unused harmony export setRequestHandler */
/* unused harmony export buffer2string */
/* unused harmony export getFullUrl */
/* unused harmony export isRemote */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cache2blobUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return verbose; });
/* unused harmony export enableVerbose */
/* unused harmony export delay */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export postData */
/* unused harmony export inject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUniqId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bindEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachFunction; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["a"]; });



function postData(destId, data) {
  // Firefox issue: data must be stringified to avoid cross-origin problem
  var e = new _helpers__WEBPACK_IMPORTED_MODULE_0__[/* CustomEvent */ "a"](destId, {
    detail: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* jsonDump */ "g"])(data)
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
    var data = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* jsonLoad */ "h"])(e.detail);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onRequestCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return onRequestStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onRequestCallback; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



var map = {};
var queue = [];
function onRequestCreate(details) {
  var req = {
    details,
    req: {
      abort: reqAbort
    }
  };
  details.url = getFullUrl(details.url);
  queue.push(req);
  _bridge__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].post({
    cmd: 'GetRequestId'
  });
  return req.req;
}
function onRequestStart(id) {
  var req = queue.shift();
  start(req, id);
}
function onRequestCallback(res) {
  var req = map[res.id];
  if (req) callback(req, res);
}

function reqAbort() {
  _bridge__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].post({
    cmd: 'AbortRequest',
    data: this.id
  });
}

function parseData(req, details) {
  if (req.resType) {
    // blob or arraybuffer
    var response = req.data.response;

    if (response) {
      var data = response.split(',');
      var matches = data[0].match(/^data:(.*?);base64$/);

      if (!matches) {
        // invalid
        req.data.response = null;
      } else {
        var raw = window.atob(data[1]);
        var arr = new window.Uint8Array(raw.length);

        for (var i = 0; i < raw.length; i += 1) {
          arr[i] = raw.charCodeAt(i);
        }

        if (details.responseType === 'blob') {
          // blob
          return new Blob([arr], {
            type: matches[1]
          });
        } // arraybuffer


        return arr.buffer;
      }
    }
  } else if (details.responseType === 'json') {
    // json
    return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[/* jsonLoad */ "h"])(req.data.response);
  } else {
    // text
    return req.data.response;
  }
} // request object functions


function callback(req, res) {
  var cb = req.details[`on${res.type}`];

  if (cb) {
    if (res.data.response) {
      if (!req.data) req.data = [parseData(res, req.details)];

      var _req$data = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(req.data, 1);

      res.data.response = _req$data[0];
    }

    res.data.context = req.details.context;
    cb(res.data);
  }

  if (res.type === 'loadend') delete map[req.id];
}

function start(req, id) {
  var details = req.details;
  var payload = {
    id,
    method: details.method,
    url: details.url,
    user: details.user,
    password: details.password,
    headers: details.headers,
    timeout: details.timeout,
    overrideMimeType: details.overrideMimeType
  };
  req.id = id;
  map[id] = req;
  var responseType = details.responseType;

  if (responseType) {
    if (Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[/* includes */ "f"])(['arraybuffer', 'blob'], responseType)) {
      payload.responseType = 'arraybuffer';
    } else if (!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[/* includes */ "f"])(['json'], responseType)) {
      console.warn(`[Violentmonkey] Unknown responseType "${responseType}", see https://violentmonkey.github.io/api/gm/#gm_xmlhttprequest for more detail.`);
    }
  }

  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[/* encodeBody */ "d"])(details.data).then(function (body) {
    payload.data = body;
    _bridge__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].post({
      cmd: 'HttpRequest',
      data: payload
    });
  });
}

function getFullUrl(url) {
  var a = document.createElement('a');
  a.setAttribute('href', url);
  return a.href;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(14);

var iterableToArray = __webpack_require__(15);

var unsupportedIterableToArray = __webpack_require__(10);

var nonIterableSpread = __webpack_require__(16);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return onNotificationCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onNotificationClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onNotificationClosed; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var lastId = 0;
var notifications = {};
function onNotificationCreate(options) {
  lastId += 1;
  notifications[lastId] = options;
  _bridge__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post({
    cmd: 'Notification',
    data: {
      id: lastId,
      text: options.text,
      title: options.title,
      image: options.image
    }
  });
}
function onNotificationClicked(id) {
  var options = notifications[id];

  if (options) {
    var onclick = options.onclick;
    if (onclick) onclick();
  }
}
function onNotificationClosed(id) {
  var options = notifications[id];

  if (options) {
    delete notifications[id];
    var ondone = options.ondone;
    if (ondone) ondone();
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onTabCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onTabClosed; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var lastId = 0;
var tabs = {};
function onTabCreate(data) {
  lastId += 1;
  var key = lastId;
  var item = {
    onclose: null,
    closed: false,

    close() {
      _bridge__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post({
        cmd: 'TabClose',
        data: key
      });
    }

  };
  tabs[key] = item;
  _bridge__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post({
    cmd: 'TabOpen',
    data: {
      key,
      data
    }
  });
  return item;
}
function onTabClosed(key) {
  var item = tabs[key];

  if (item) {
    item.closed = true;
    var onclose = item.onclose;
    if (onclose) onclose();
    delete tabs[key];
  }
}

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(18);

var iterableToArrayLimit = __webpack_require__(19);

var unsupportedIterableToArray = __webpack_require__(10);

var nonIterableRest = __webpack_require__(20);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ onDownload; });

// CONCATENATED MODULE: ./src/common/download.js
function downloadUrl(url, name, callback) {
  var a = document.createElement('a');
  a.style.display = 'none';
  document.body.appendChild(a);
  a.href = url;
  if (name) a.download = name;
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    if (callback) callback();
  }, 3000);
}
function downloadBlob(blob, name, callback) {
  var url = URL.createObjectURL(blob);
  downloadUrl(url, name, function () {
    URL.revokeObjectURL(url);
    if (callback) callback();
  });
}
// EXTERNAL MODULE: ./src/injected/web/requests.js
var requests = __webpack_require__(4);

// CONCATENATED MODULE: ./src/injected/web/download.js

 // eslint-disable-next-line import/prefer-default-export

function onDownload(arg1, arg2) {
  var options;

  if (typeof arg1 === 'string') {
    options = {
      url: arg1,
      name: arg2
    };
  } else {
    options = arg1;
  }

  if (!options || !options.url) {
    throw new Error('GM_download: Invalid parameter!');
  }

  return onDownloadBrowser(options);
}

function onDownloadBrowser(_ref) {
  var url = _ref.url,
      name = _ref.name,
      headers = _ref.headers,
      timeout = _ref.timeout,
      onerror = _ref.onerror,
      onload = _ref.onload,
      onprogress = _ref.onprogress,
      ontimeout = _ref.ontimeout;
  return Object(requests["b" /* onRequestCreate */])({
    method: 'GET',
    responseType: 'arraybuffer',
    url,
    headers,
    timeout,
    onerror,
    onprogress,
    ontimeout,

    onload(res) {
      var blob = new Blob([res.response], {
        type: 'application/octet-stream'
      });
      downloadBlob(blob, name, onload);
    }

  });
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initialize; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);









var state = 0;
function initialize(webId, contentId, props) {
  _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].props = props;
  _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* bindEvents */ "b"])(webId, contentId, onHandle);
  document.addEventListener('DOMContentLoaded', function () {
    state = 1; // Load scripts after being handled by listeners in web page

    _utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* Promise */ "b"].resolve().then(_bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].load);
  }, false);
  _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
    cmd: 'Ready'
  });
}
var store = {
  commands: {},
  values: {},
  callbacks: {},
  lastCallbackId: 0,
  contextMenuHandlers: []
};

function addCallback(callback) {
  if (typeof callback !== 'function') {
    return -1;
  }

  var requestId = store.lastCallbackId + 1;
  store.lastCallbackId = requestId;
  store.callbacks[requestId] = callback;
  return requestId;
}

function handleCallback(requestId, result) {
  if (requestId && store.callbacks[requestId]) {
    var callback = store.callbacks[requestId];
    delete store.callbacks[requestId];
    callback(result);
  }
}

function postCommandWithCallback(cmd, callback, data) {
  var requestId = addCallback(callback);
  _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
    cmd: 'PostCommand',
    data: {
      cmd,
      requestId,
      data
    }
  });
}

var handlers = {
  LoadScripts: onLoadScripts,

  Command(data) {
    var func = store.commands[data];
    if (func) func();
  },

  Callback(_ref) {
    var callbackId = _ref.callbackId,
        payload = _ref.payload;
    var func = store.callbacks[callbackId];
    if (func) func(payload);
  },

  GotRequestId: _requests__WEBPACK_IMPORTED_MODULE_5__[/* onRequestStart */ "c"],
  HttpRequested: _requests__WEBPACK_IMPORTED_MODULE_5__[/* onRequestCallback */ "a"],
  TabClosed: _tabs__WEBPACK_IMPORTED_MODULE_7__[/* onTabClosed */ "a"],

  UpdatedValues(updates) {
    Object.keys(updates).forEach(function (id) {
      if (store.values[id]) store.values[id] = updates[id];
    });
  },

  NotificationClicked: _notifications__WEBPACK_IMPORTED_MODULE_6__[/* onNotificationClicked */ "a"],
  NotificationClosed: _notifications__WEBPACK_IMPORTED_MODULE_6__[/* onNotificationClosed */ "b"],

  ScriptChecked(data) {
    if (_bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].onScriptChecked) _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].onScriptChecked(data);
  },

  CommandResponse(_ref2) {
    var result = _ref2.result,
        requestId = _ref2.requestId;
    Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* verbose */ "b"])(`web:CommandResponse: requestId=${requestId} result`, result);
    handleCallback(requestId, result);
  },

  WatchOnlineMenuClicked(data) {
    Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* verbose */ "b"])('web:WatchOnlineMenuClicked: data', data);
    store.contextMenuHandlers.forEach(function (handler) {
      if (typeof handler === 'function') {
        handler(data.url);
      }
    });
  }

};

function registerCallback(callback) {
  var callbackId = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getUniqId */ "d"])('VMcb');

  store.callbacks[callbackId] = function (payload) {
    callback(payload);
    delete store.callbacks[callbackId];
  };

  return callbackId;
}

function onHandle(obj) {
  var handle = handlers[obj.cmd];
  if (handle) handle(obj.data);
}

function onLoadScripts(data) {
  var start = [];
  var idle = [];
  var end = [];
  _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].version = data.version;
  exposeAceScript(); // reset load and checkLoad

  _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].load = function () {
    run(end);
    setTimeout(run, 0, idle);
  };

  var listMap = {
    'document-start': start,
    'document-idle': idle,
    'document-end': end
  };

  if (data.scripts) {
    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* forEach */ "e"])(data.scripts, function (script) {
      // XXX: use camelCase since v2.6.3
      var runAt = script.custom.runAt || script.custom['run-at'] || script.meta.runAt || script.meta['run-at'];
      var list = listMap[runAt] || end;
      list.push(script);
      store.values[script.props.id] = data.values[script.props.id];
    });
    run(start);
  }

  if (!state && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* includes */ "f"])(['interactive', 'complete'], document.readyState)) {
    state = 1;
  }

  if (state) _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].load();

  function buildCode(script) {
    var requireKeys = script.meta.require || [];
    var pathMap = script.custom.pathMap || {};
    var code = data.code[script.props.id] || '';

    var _wrapGM = wrapGM(script, code, data.cache),
        wrapper = _wrapGM.wrapper,
        thisObj = _wrapGM.thisObj; // Must use Object.getOwnPropertyNames to list unenumerable properties


    var argNames = Object.getOwnPropertyNames(wrapper);
    var wrapperInit = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* map */ "i"])(argNames, function (name) {
      return `this["${name}"]=${name}`;
    }).join(';');
    var codeSlices = [`${wrapperInit};with(this)!function(define,module,exports){`];
    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* forEach */ "e"])(requireKeys, function (key) {
      var requireCode = data.require[pathMap[key] || key];

      if (requireCode) {
        codeSlices.push(requireCode); // Add `;` to a new line in case script ends with comment lines

        codeSlices.push(';');
      }
    }); // wrap code to make 'use strict' work

    codeSlices.push(`!function(){${code}\n}.call(this)`);
    codeSlices.push('}.call(this);');
    var codeConcat = codeSlices.join('\n');
    var name = script.custom.name || script.meta.name || script.props.id;
    var args = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* map */ "i"])(argNames, function (key) {
      return wrapper[key];
    });
    var id = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getUniqId */ "d"])('VMin');
    var fnId = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getUniqId */ "d"])('VMfn');
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* attachFunction */ "a"])(fnId, function () {
      var func = window[id];
      if (func) runCode(name, func, args, thisObj);
    });
    _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
      cmd: 'Inject',
      data: [id, argNames, codeConcat, fnId]
    });
  }

  function run(list) {
    while (list.length) {
      buildCode(list.shift());
    }
  }
}

function wrapGM(script, code, cache) {
  // Add GM functions
  // Reference: http://wiki.greasespot.net/Greasemonkey_Manual:API
  var gm = {};
  var grant = script.meta.grant || [];
  var urls = {};
  var unsafeWindow = window;
  var thisObj = gm;

  if (!grant.length || grant.length === 1 && grant[0] === 'none') {
    // @grant none
    grant.pop();
    gm.window = unsafeWindow;
  } else {
    thisObj = getWrapper(unsafeWindow);
    gm.window = thisObj;
  }

  if (!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* includes */ "f"])(grant, 'unsafeWindow')) grant.push('unsafeWindow');
  if (!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* includes */ "f"])(grant, 'GM_info')) grant.push('GM_info');
  if (Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* includes */ "f"])(grant, 'window.close')) gm.window.close = function () {
    _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
      cmd: 'TabClose'
    });
  };
  var resources = script.meta.resources || {};
  var dataDecoders = {
    o: function o(val) {
      return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* jsonLoad */ "h"])(val);
    },
    // deprecated
    n: function n(val) {
      return Number(val);
    },
    b: function b(val) {
      return val === 'true';
    }
  };
  var pathMap = script.custom.pathMap || {};
  var matches = code.match(/\/\/\s+==UserScript==\s+([\s\S]*?)\/\/\s+==\/UserScript==\s/);
  var metaStr = matches ? matches[1] : '';
  var gmInfo = {
    extId: script.props.extId,
    uuid: script.props.uuid,
    scriptMetaStr: metaStr,
    scriptWillUpdate: !!script.config.shouldUpdate,
    scriptHandler: 'Script',
    version: _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].version,
    script: {
      description: script.meta.description || '',
      excludes: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(script.meta.exclude),
      includes: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(script.meta.include),
      matches: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(script.meta.match),
      name: script.meta.name || '',
      namespace: script.meta.namespace || '',
      resources: Object.keys(resources).map(function (name) {
        return {
          name,
          url: resources[name]
        };
      }),
      runAt: script.meta.runAt || '',
      unwrap: false,
      // deprecated, always `false`
      version: script.meta.version || ''
    }
  };
  var gmFunctions = {
    unsafeWindow: {
      value: unsafeWindow
    },
    GM_info: {
      value: gmInfo
    },
    GM_deleteValue: {
      value(key) {
        var value = loadValues();
        delete value[key];
        dumpValue(key);
      }

    },
    GM_getValue: {
      value(key, def) {
        var value = loadValues();
        var raw = value[key];

        if (raw) {
          var type = raw[0];
          var handle = dataDecoders[type];
          var val = raw.slice(1);

          try {
            if (handle) val = handle(val);
          } catch (e) {
            if (process.env.DEBUG) _utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* console */ "c"].warn(e);
          }

          return val;
        }

        return def;
      }

    },
    GM_listValues: {
      value() {
        return Object.keys(loadValues());
      }

    },
    GM_setValue: {
      value(key, val) {
        var dumped = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* jsonDump */ "g"])(val);
        var raw = dumped ? `o${dumped}` : null;
        var value = loadValues();
        value[key] = raw;
        dumpValue(key, raw);
      }

    },
    GM_getResourceText: {
      value(name) {
        if (name in resources) {
          var key = resources[name];
          var raw = cache[pathMap[key] || key];
          var text = raw && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* utf8decode */ "k"])(window.atob(raw.split(',').pop()));
          return text;
        }
      }

    },
    GM_getResourceURL: {
      value(name) {
        if (name in resources) {
          var key = resources[name];
          var blobUrl = urls[key];

          if (!blobUrl) {
            var raw = cache[pathMap[key] || key];

            if (raw) {
              blobUrl = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* cache2blobUrl */ "c"])(raw);
              urls[key] = blobUrl;
            } else {
              blobUrl = key;
            }
          }

          return blobUrl;
        }
      }

    },
    GM_addStyle: {
      value(css) {
        var callbacks = [];
        var el = false;
        var callbackId = registerCallback(function (styleId) {
          el = document.getElementById(styleId);
          callbacks.splice().forEach(function (callback) {
            return callback(el);
          });
        });
        _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
          cmd: 'AddStyle',
          data: {
            css,
            callbackId
          }
        }); // Mock a Promise without the need for polyfill

        return {
          then(callback) {
            if (el !== false) callback(el);else callbacks.push(callback);
          }

        };
      }

    },
    GM_log: {
      value() {// eslint-disable-next-line no-console
        // console.log(`[AceScript][${script.meta.name || 'No name'}]`, ...args);
      }

    },
    GM_openInTab: {
      value(url, options) {
        var data = options && typeof options === 'object' ? options : {
          active: !options
        };
        data.url = url;
        return Object(_tabs__WEBPACK_IMPORTED_MODULE_7__[/* onTabCreate */ "b"])(data);
      }

    },
    GM_registerMenuCommand: {
      value(cap, func) {
        var id = script.props.id;
        var key = `${id}:${cap}`;
        store.commands[key] = func;
        _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
          cmd: 'RegisterMenu',
          data: [key, cap]
        });
      }

    },
    GM_unregisterMenuCommand: {
      value(cap) {
        var id = script.props.id;
        var key = `${id}:${cap}`;
        delete store.commands[key];
        _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
          cmd: 'UnregisterMenu',
          data: [key, cap]
        });
      }

    },
    GM_xmlhttpRequest: {
      value: _requests__WEBPACK_IMPORTED_MODULE_5__[/* onRequestCreate */ "b"]
    },
    GM_download: {
      value: _download__WEBPACK_IMPORTED_MODULE_8__[/* onDownload */ "a"]
    },
    GM_notification: {
      value(text, title, image, onclick) {
        var options = typeof text === 'object' ? text : {
          text,
          title,
          image,
          onclick
        };

        if (!options.text) {
          throw new Error('GM_notification: `text` is required!');
        }

        Object(_notifications__WEBPACK_IMPORTED_MODULE_6__[/* onNotificationCreate */ "c"])(options);
      }

    },
    GM_setClipboard: {
      value(data, type) {
        _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
          cmd: 'SetClipboard',
          data: {
            type,
            data
          }
        });
      }

    },
    AWE_engineStatus: {
      value(callback) {
        postCommandWithCallback('GetEngineStatus', callback);
      }

    },
    AWE_startJsPlayer: {
      value() {
        throw new Error('not implemented');
      }

    },
    AWE_getAvailablePlayers: {
      value(params, callback) {
        postCommandWithCallback('GetAvailablePlayers', callback, {
          params
        });
      }

    },
    AWE_openInPlayer: {
      value(params, playerId, callback) {
        postCommandWithCallback('OpenInPlayer', callback, {
          params,
          playerId
        });
      }

    },
    AWE_getDeviceId: {
      value(callback) {
        postCommandWithCallback('GetDeviceId', callback);
      }

    },
    AWE_registerContextMenuCommand: {
      // eslint-disable-next-line no-unused-vars
      value(caption, commandFunc, accessKey, filterFunc) {
        postCommandWithCallback('RegisterContextMenuCommand', function () {
          store.contextMenuHandlers.push(commandFunc);
        });
      }

    },
    AWE_getLocale: {
      value(callback) {
        postCommandWithCallback('GetLocale', callback);
      }

    },
    AWE_getConfig: {
      value(name, callback) {
        postCommandWithCallback('GetConfig', callback, {
          name
        });
      }

    }
  };
  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* forEach */ "e"])(grant, function (name) {
    var prop = gmFunctions[name];
    if (prop) addProperty(name, prop, gm);
  });
  return {
    thisObj,
    wrapper: gm
  };

  function loadValues() {
    return store.values[script.props.id];
  }

  function propertyToString() {
    return '[Script property]';
  }

  function addProperty(name, prop, obj) {
    if ('value' in prop) prop.writable = false;
    prop.configurable = false;
    Object.defineProperty(obj, name, prop);
    if (typeof obj[name] === 'function') obj[name].toString = propertyToString;
  }

  function dumpValue(key, value) {
    _bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].post({
      cmd: 'UpdateValue',
      data: {
        id: script.props.id,
        update: {
          key,
          value
        }
      }
    });
  }
}
/**
 * @desc Wrap helpers to prevent unexpected modifications.
 */


function getWrapper(unsafeWindow) {
  // http://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects
  // http://developer.mozilla.org/docs/Web/API/Window
  var wrapper = {}; // Block special objects

  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* forEach */ "e"])(['browser'], function (name) {
    wrapper[name] = undefined;
  });
  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* forEach */ "e"])([// `eval` should be called directly so that it is run in current scope
  'eval'], function (name) {
    wrapper[name] = unsafeWindow[name];
  });
  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* forEach */ "e"])([// 'uneval',
  'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'addEventListener', 'alert', 'atob', 'blur', 'btoa', 'clearInterval', 'clearTimeout', 'close', 'confirm', 'dispatchEvent', 'fetch', 'find', 'focus', 'getComputedStyle', 'getDefaultComputedStyle', // Non-standard, Firefox only, used by jQuery
  'getSelection', 'matchMedia', 'moveBy', 'moveTo', 'open', 'openDialog', 'postMessage', 'print', 'prompt', 'removeEventListener', 'requestAnimationFrame', 'resizeBy', 'resizeTo', 'scroll', 'scrollBy', 'scrollByLines', 'scrollByPages', 'scrollTo', 'setInterval', 'setTimeout', 'stop'], function (name) {
    var method = unsafeWindow[name];

    if (method) {
      wrapper[name] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return method.apply(unsafeWindow, args);
      };
    }
  });

  function defineProtectedProperty(name) {
    var modified = false;
    var value;
    Object.defineProperty(wrapper, name, {
      get() {
        if (!modified) value = unsafeWindow[name];
        return value === unsafeWindow ? wrapper : value;
      },

      set(val) {
        modified = true;
        value = val;
      }

    });
  }

  function defineReactedProperty(name) {
    Object.defineProperty(wrapper, name, {
      get() {
        var value = unsafeWindow[name];
        return value === unsafeWindow ? wrapper : value;
      },

      set(val) {
        unsafeWindow[name] = val;
      }

    });
  } // Wrap properties


  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* forEach */ "e"])(_bridge__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].props, function (name) {
    if (name in wrapper) return;
    if (name.slice(0, 2) === 'on') defineReactedProperty(name);else defineProtectedProperty(name);
  });
  return wrapper;
}

function runCode(name, func, args, thisObj) {
  if (process.env.DEBUG) {
    _utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* console */ "c"].log(`Run script: ${name}`); // eslint-disable-line no-console
  }

  try {
    func.apply(thisObj, args);
  } catch (e) {
    var msg = `Error running script: ${name}\n${e}`;
    if (e.message) msg = `${msg}\n${e.message}`;
    _utils_helpers__WEBPACK_IMPORTED_MODULE_3__[/* console */ "c"].error(msg);
  }
}

function exposeAceScript() {
  var ScriptRunnerPro = {}; // public methods (for all domains)

  Object.defineProperty(ScriptRunnerPro, 'startEngine', {
    value: function value(callback) {
      postCommandWithCallback('StartEngine', callback);
    }
  });
  Object.defineProperty(window.external, 'ScriptRunnerPro', {
    value: ScriptRunnerPro
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ })
/******/ ]);
  var exports = module.exports;
  return exports.__esModule ? exports['default'] : exports;
};0;