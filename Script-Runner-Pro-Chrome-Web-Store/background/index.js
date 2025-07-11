/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([148,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNotification; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var openers = {};
browser.notifications.onClicked.addListener(function (id) {
  var openerId = openers[id];

  if (openerId) {
    browser.tabs.sendMessage(openerId, {
      cmd: 'NotificationClick',
      data: id
    }).catch(_common__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "n"]);
  }
});
browser.notifications.onClosed.addListener(function (id) {
  var openerId = openers[id];

  if (openerId) {
    browser.tabs.sendMessage(openerId, {
      cmd: 'NotificationClose',
      data: id
    }).catch(_common__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "n"]);
    delete openers[id];
  }
});
function createNotification(data, src) {
  var srcTab = src.tab || {};
  return browser.notifications.create({
    type: 'basic',
    title: data.title || Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('extName'),
    message: data.text,
    iconUrl: data.image || _common__WEBPACK_IMPORTED_MODULE_0__[/* defaultImage */ "d"]
  }).then(function (notificationId) {
    openers[notificationId] = srcTab.id;
    return notificationId;
  });
}

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(100);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(101);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/common/events.js



var events_EventEmitter = /*#__PURE__*/function () {
  function EventEmitter(allowed) {
    classCallCheck_default()(this, EventEmitter);

    this.events = {};
    this.allowed = allowed;
  }

  createClass_default()(EventEmitter, [{
    key: "checkType",
    value: function checkType(type) {
      if (this.allowed && !this.allowed.includes(type)) {
        throw new Error(`Unknown event type: ${type}`);
      }
    }
  }, {
    key: "on",
    value: function on(type, handle) {
      var _this = this;

      this.checkType(type);
      var events = this.events;
      var handlers = events[type];

      if (!handlers) {
        handlers = [];
        events[type] = handlers;
      }

      return function () {
        return _this.off(type, handle);
      };
    }
  }, {
    key: "off",
    value: function off(type, handle) {
      this.checkType(type);
      var handlers = this.events[type];

      if (handlers) {
        var i = handlers.indexOf(handle);
        if (i >= 0) handlers.splice(i, 1);
      }
    }
  }, {
    key: "emit",
    value: function emit(type, data) {
      this.checkType(type);
      var handlers = this.events[type];

      if (handlers) {
        var evt = {
          type,
          data,
          defaultPrevented: false,

          preventDefault() {
            evt.defaultPrevented = true;
          }

        };
        handlers.some(function (handle) {
          handle(evt);
          return evt.defaultPrevented;
        });
      }
    }
  }]);

  return EventEmitter;
}();


// CONCATENATED MODULE: ./src/background/plugin/events.js

/* harmony default export */ var events = __webpack_exports__["a"] = (new events_EventEmitter(['scriptEdit', 'scriptChanged']));

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isUserScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return parseMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return newScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNameURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return makeScriptId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compareVersion; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var metaStart = '==UserScript==';
var metaEnd = '==/UserScript==';
function isUserScript(text) {
  if (/^\s*</.test(text)) return false; // HTML

  if (text.indexOf(metaStart) < 0) return false; // Lack of meta block

  return true;
}
var arrayType = {
  default: function _default() {
    return [];
  },
  transform: function transform(res, val) {
    res.push(val);
    return res;
  }
};
var defaultType = {
  default: function _default() {
    return null;
  },
  transform: function transform(res, val) {
    return res == null ? val : res;
  }
};
var metaTypes = {
  include: arrayType,
  exclude: arrayType,
  match: arrayType,
  excludeMatch: arrayType,
  require: arrayType,
  resource: {
    default: function _default() {
      return {};
    },
    transform: function transform(res, val) {
      var pair = val.match(/^(\w\S*)\s+(.*)/);
      if (pair) res[pair[1]] = pair[2];
      return res;
    }
  },
  grant: arrayType,
  noframes: {
    default: function _default() {
      return false;
    },
    transform: function transform() {
      return true;
    }
  }
};
function parseMeta(code) {
  // initialize meta
  var meta = Object.keys(metaTypes).reduce(function (res, key) {
    return Object.assign(res, {
      [key]: metaTypes[key].default()
    });
  }, {});
  var flag = -1;
  code.replace(/(?:^|\n)\s*\/\/\s*([@=]\S+)(.*)/g, function (_match, group1, group2) {
    if (flag < 0 && group1 === metaStart) {
      // start meta
      flag = 1;
    } else if (flag > 0 && group1 === metaEnd) {
      // end meta
      flag = 0;
    }

    if (flag === 1 && group1[0] === '@') {
      var _group1$slice$split = group1.slice(1).split(':'),
          _group1$slice$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_group1$slice$split, 2),
          keyName = _group1$slice$split2[0],
          locale = _group1$slice$split2[1];

      var camelKey = keyName.replace(/[-_](\w)/g, function (m, g) {
        return g.toUpperCase();
      });
      var key = locale ? `${camelKey}:${locale.toLowerCase()}` : camelKey;
      var val = group2.trim();
      var metaType = metaTypes[key] || defaultType;
      var oldValue = meta[key];
      if (typeof oldValue === 'undefined') oldValue = metaType.default();
      meta[key] = metaType.transform(oldValue, val);
    }
  });
  meta.resources = meta.resource;
  delete meta.resource; // @homepageURL: compatible with @homepage

  if (!meta.homepageURL && meta.homepage) meta.homepageURL = meta.homepage;
  return meta;
}
function newScript(data) {
  var state = _objectSpread({
    url: '*://*/*'
  }, data);

  var code = Object(_options__WEBPACK_IMPORTED_MODULE_2__[/* getOption */ "c"])('scriptTemplate').replace(/{{(\w+)}}/g, function (str, name) {
    var value = state[name];
    return value == null ? str : value;
  });
  var script = {
    custom: {
      origInclude: true,
      origExclude: true,
      origMatch: true,
      origExcludeMatch: true
    },
    config: {
      enabled: 1,
      shouldUpdate: 1
    },
    meta: parseMeta(code)
  };
  return {
    script,
    code
  };
}
function getNameURI(script) {
  var ns = script.meta.namespace || '';
  var name = script.meta.name || '';
  var nameURI = `${escape(ns)}:${escape(name)}:`;
  if (!ns && !name) nameURI += script.props.id || '';
  return nameURI;
}
function makeScriptId(script) {
  var ns = script.meta.namespace || '';
  var name = script.meta.name || '';
  var scriptId = `${ns}/${name}`;
  if (!ns && !name) scriptId = `id:${script.props.id}` || '';
  return scriptId;
}
function compareVersion(ver1, ver2) {
  var parts1 = (ver1 || '').split('.');
  var parts2 = (ver2 || '').split('.');

  for (var i = 0; i < parts1.length || i < parts2.length; i += 1) {
    var delta = (parseInt(parts1[i], 10) || 0) - (parseInt(parts2[i], 10) || 0);
    if (delta) return delta < 0 ? -1 : 1;
  }

  return 0;
}

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _common_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _common_ua__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _utils_tampermonkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _utils_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(102);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var _utils_tester__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var _utils_values__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var _utils_engine_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38);




 // import * as news from './utils/news';

 // import * as statistics from './utils/statistics';







 // import options from '../common/options';

var VM_VER = browser.runtime.getManifest().version;
var NOTIFICATIONS_BUTTONS_SUPPORTED = _common_ua__WEBPACK_IMPORTED_MODULE_3__[/* isChrome */ "b"];
var registeredNotifications_ = {};
var contextMenuCreated = false; // Firefox Android does not support such APIs, use noop

var browserAction = ['setIcon', 'setBadgeText', 'setBadgeBackgroundColor'].reduce(function (actions, key) {
  var fn = browser.browserAction[key];
  actions[key] = fn ? fn.bind(browser.browserAction) : _common__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "n"];
  return actions;
}, {});
Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* hookOptions */ "k"])(function (changes) {
  if ('isApplied' in changes) setIcon(changes.isApplied);
  if ('autoUpdate' in changes) autoUpdate();
  if ('showBadge' in changes) updateBadges();
  var SCRIPT_TEMPLATE = 'scriptTemplate';

  if (SCRIPT_TEMPLATE in changes && !changes[SCRIPT_TEMPLATE]) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* setOption */ "r"])(SCRIPT_TEMPLATE, Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getDefaultOption */ "g"])(SCRIPT_TEMPLATE));
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* sendMessageOrIgnore */ "p"])({
    cmd: 'UpdateOptions',
    data: changes
  });
});

function onGlobalContextMenuClick(info, tab) {
  browser.tabs.sendMessage(tab.id, {
    cmd: 'WatchOnlineMenuClicked',
    data: {
      url: info.linkUrl
    }
  });
}

function createGlobalContextMenu() {
  if (contextMenuCreated) {
    return Promise.resolve();
  }

  contextMenuCreated = true;
  Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* verbose */ "r"])('bg:create context menu');
  return new Promise(function (resolve) {
    browser.contextMenus.create({
      id: 'awe-watch-online',
      title: 'Watch online',
      contexts: ['link'],
      onclick: onGlobalContextMenuClick
    }, function () {
      // check lastError to suppress errors on console
      browser.runtime.lastError; // eslint-disable-line no-unused-expressions

      resolve();
    });
  });
}

function checkUpdateAll() {
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* setOption */ "r"])('lastUpdate', Date.now());
  Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getScripts */ "j"])().then(function (scripts) {
    var toUpdate = scripts.filter(function (item) {
      return Object(_common_object__WEBPACK_IMPORTED_MODULE_2__[/* objectGet */ "a"])(item, 'config.shouldUpdate');
    });
    return Promise.all(toUpdate.map(_utils__WEBPACK_IMPORTED_MODULE_6__[/* checkUpdate */ "d"]));
  }).then(function (updatedList) {
    if (updatedList.some(Boolean)) _sync__WEBPACK_IMPORTED_MODULE_4__[/* sync */ "e"]();
  });
}

var autoUpdating;

function autoUpdate() {
  if (autoUpdating) return;
  autoUpdating = true;
  check();

  function check() {
    new Promise(function (resolve, reject) {
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getOption */ "i"])('autoUpdate')) return reject();
      if (Date.now() - Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getOption */ "i"])('lastUpdate') >= 864e5) resolve(checkUpdateAll());
    }).then(function () {
      return setTimeout(check, 36e5);
    }, function () {
      autoUpdating = false;
    });
  }
}

var commands = {
  Download(data) {
    if (data.link && data.filename) {
      chrome.downloads.download({
        url: data.link,
        filename: data.filename
      });
    }
  },

  NewScript(id) {
    return id && _utils__WEBPACK_IMPORTED_MODULE_6__[/* cache */ "c"].get(`new-${id}`) || Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* newScript */ "n"])();
  },

  CacheNewScript(data) {
    var id = Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* getUniqId */ "i"])();
    _utils__WEBPACK_IMPORTED_MODULE_6__[/* cache */ "c"].put(`new-${id}`, Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* newScript */ "n"])(data));
    return id;
  },

  RemoveScript(id) {
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* removeScript */ "o"])(id).then(function () {
      _sync__WEBPACK_IMPORTED_MODULE_4__[/* sync */ "e"]();
    });
  },

  GetData(clear) {
    return (clear ? Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* checkRemove */ "a"])() : Promise.resolve()).then(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getData */ "d"]).then(function (data) {
      data.sync = _sync__WEBPACK_IMPORTED_MODULE_4__[/* getStates */ "b"]();
      data.version = VM_VER;
      return data;
    });
  },

  GetInjected(_ref, src) {
    var url = _ref.url,
        reset = _ref.reset,
        isTop = _ref.isTop;
    var srcTab = src.tab || {};
    if (reset && srcTab.id) Object(_utils_values__WEBPACK_IMPORTED_MODULE_11__[/* resetValueOpener */ "b"])(srcTab.id);
    var data = {
      isApplied: Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getOption */ "i"])('isApplied'),
      version: VM_VER
    };
    if (!data.isApplied) return data;
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getScriptsByURL */ "k"])(url, isTop).then(function (res) {
      Object(_utils_values__WEBPACK_IMPORTED_MODULE_11__[/* addValueOpener */ "a"])(srcTab.id, Object.keys(res.values));
      return Object.assign(data, res);
    });
  },

  UpdateScriptInfo(_ref2) {
    var id = _ref2.id,
        config = _ref2.config;
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* updateScriptInfo */ "q"])(id, {
      config,
      props: {
        lastModified: Date.now()
      }
    }).then(function (_ref3) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 1),
          script = _ref4[0];

      _sync__WEBPACK_IMPORTED_MODULE_4__[/* sync */ "e"]();
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* sendMessageOrIgnore */ "p"])({
        cmd: 'UpdateScript',
        data: {
          where: {
            id: script.props.id
          },
          update: script
        }
      });
    });
  },

  GetValueStore(id) {
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getValueStoresByIds */ "l"])([id]).then(function (res) {
      return res[id] || {};
    });
  },

  SetValueStore(_ref5) {
    var where = _ref5.where,
        valueStore = _ref5.valueStore;
    // Value store will be replaced soon.
    return Object(_utils_values__WEBPACK_IMPORTED_MODULE_11__[/* setValueStore */ "c"])(where, valueStore);
  },

  UpdateValue(_ref6) {
    var id = _ref6.id,
        update = _ref6.update;
    // Value will be updated to store later.
    return Object(_utils_values__WEBPACK_IMPORTED_MODULE_11__[/* updateValueStore */ "d"])(id, update);
  },

  ExportZip(_ref7) {
    var ids = _ref7.ids,
        values = _ref7.values;
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getExportData */ "e"])(ids, values);
  },

  GetScriptCode(id) {
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getScriptCode */ "i"])(id);
  },

  GetMetas(ids) {
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getScriptByIds */ "h"])(ids);
  },

  Move(_ref8) {
    var id = _ref8.id,
        offset = _ref8.offset;
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* moveScript */ "m"])(id, offset).then(function () {
      _sync__WEBPACK_IMPORTED_MODULE_4__[/* sync */ "e"]();
    });
  },

  Vacuum: _utils_db__WEBPACK_IMPORTED_MODULE_9__[/* vacuum */ "r"],

  ParseScript(data) {
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* parseScript */ "n"])(data).then(function (res) {
      _sync__WEBPACK_IMPORTED_MODULE_4__[/* sync */ "e"]();
      return res.data;
    });
  },

  CheckUpdate(id) {
    Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getScript */ "g"])({
      id
    }).then(_utils__WEBPACK_IMPORTED_MODULE_6__[/* checkUpdate */ "d"]).then(function (updated) {
      if (updated) _sync__WEBPACK_IMPORTED_MODULE_4__[/* sync */ "e"]();
    });
  },

  CheckUpdateAll: checkUpdateAll,

  ParseMeta(code) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* parseMeta */ "o"])(code);
  },

  GetRequestId: _utils__WEBPACK_IMPORTED_MODULE_6__[/* getRequestId */ "j"],

  HttpRequest(details, src) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* httpRequest */ "l"])(details, function (res) {
      browser.tabs.sendMessage(src.tab.id, {
        cmd: 'HttpRequested',
        data: res
      }).catch(_common__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "n"]);
    });
  },

  AbortRequest: _utils__WEBPACK_IMPORTED_MODULE_6__[/* abortRequest */ "a"],
  SetBadge: setBadge,
  SyncAuthorize: _sync__WEBPACK_IMPORTED_MODULE_4__[/* authorize */ "a"],
  SyncRevoke: _sync__WEBPACK_IMPORTED_MODULE_4__[/* revoke */ "d"],
  SyncStart: _sync__WEBPACK_IMPORTED_MODULE_4__[/* sync */ "e"],

  CacheLoad(data) {
    return _utils__WEBPACK_IMPORTED_MODULE_6__[/* cache */ "c"].get(data) || null;
  },

  CacheHit(data) {
    _utils__WEBPACK_IMPORTED_MODULE_6__[/* cache */ "c"].hit(data.key, data.lifetime);
  },

  Notification: _utils_notifications__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
  SetClipboard: _utils__WEBPACK_IMPORTED_MODULE_6__[/* setClipboard */ "q"],
  TabOpen: _utils_tabs__WEBPACK_IMPORTED_MODULE_7__[/* tabOpen */ "b"],
  TabClose: _utils_tabs__WEBPACK_IMPORTED_MODULE_7__[/* tabClose */ "a"],
  GetAllOptions: _utils__WEBPACK_IMPORTED_MODULE_6__[/* getAllOptions */ "f"],

  GetOptions(data) {
    return data.reduce(function (res, key) {
      res[key] = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getOption */ "i"])(key);
      return res;
    }, {});
  },

  SetOptions(data) {
    var items = Array.isArray(data) ? data : [data];
    items.forEach(function (item) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* setOption */ "r"])(item.key, item.value);
    });
  },

  ConfirmInstall: _utils__WEBPACK_IMPORTED_MODULE_6__[/* confirmInstall */ "e"],

  CheckScript(_ref9) {
    var name = _ref9.name,
        namespace = _ref9.namespace;
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getScript */ "g"])({
      meta: {
        name,
        namespace
      }
    }).then(function (script) {
      return script ? script.meta.version : null;
    });
  },

  GetInstalledScripts() {
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* getInstalledScripts */ "f"])();
  },

  CheckPosition() {
    return Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* sortScripts */ "p"])();
  },

  GetEngineStatus() {
    return Object(_utils_engine_api__WEBPACK_IMPORTED_MODULE_12__[/* getEngineStatus */ "c"])();
  },

  GetAvailablePlayers(data) {
    return new Promise(function (resolve) {
      Object(_utils_engine_api__WEBPACK_IMPORTED_MODULE_12__[/* getAvailablePlayers */ "a"])(data.params, function (response) {
        return resolve(response);
      });
    });
  },

  OpenInPlayer(data) {
    return new Promise(function (resolve) {
      Object(_utils_engine_api__WEBPACK_IMPORTED_MODULE_12__[/* openInPlayer */ "d"])(data.params, data.playerId, function (response) {
        return resolve(response);
      });
    });
  },

  GetDeviceId() {
    return new Promise(function (resolve) {
      Object(_utils_engine_api__WEBPACK_IMPORTED_MODULE_12__[/* getDeviceId */ "b"])(function (response) {
        return resolve(response);
      });
    });
  },

  GetLocale() {
    return Promise.resolve(browser.i18n.getUILanguage());
  },

  GetConfig(data) {
    var values = {
      'remote-control-url': 'http://127.0.0.1:6878/remote-control',
      _a: null,
      mode: 0
    };
    return Promise.resolve(values[data.name]);
  },

  RegisterContextMenuCommand() {
    return createGlobalContextMenu();
  },

  StartEngine() {
    Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* verbose */ "r"])('bg: start engine');
    return new Promise(function (resolve) {
      browser.runtime.sendNativeMessage('org.teststream.engine', {
        method: 'start_engine'
      }, function (response) {
        var err = browser.runtime.lastError;

        if (err) {
          Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* verbose */ "r"])(`bg: start engine failed: err=${err}`);
          resolve(null);
        } else {
          Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* verbose */ "r"])('bg: start engine response', response);
          resolve(response);
        }
      });
    });
  }

}; // Import scripts from tampermonkey extension
// function importScripts() {
//   if (typeof chrome === 'undefined') {
//     // Not Chrome, do nothing
//     return Promise.resolve();
//   }
//   // Chrome, import scripts from tampermonkey database
//   return getInstalledScriptsTm().then(scripts => {
//     verbose('tm scripts', scripts);
//     getInstalledScripts().then(installed => {
//       verbose('bg:init: installed scripts', installed);
//       scripts.forEach(script => {
//         if (!installed.includes(script.scriptId)) {
//           verbose(`bg:init: install new script: id=${script.scriptId}`);
//           parseScript({
//             url: script.fileURL,
//             code: script.code,
//           });
//         } else {
//           verbose(`bg:init: script already installed: id=${script.scriptId}`);
//         }
//       });
//     });
//   });
// }

function getInstalledScriptsTm() {
  return new Promise(function (resolve) {
    var rea = _utils_tampermonkey__WEBPACK_IMPORTED_MODULE_5__[/* getRea */ "a"]();
    var registry = _utils_tampermonkey__WEBPACK_IMPORTED_MODULE_5__[/* getRegistry */ "b"]();
    var storage = registry.get('storage');
    var installedScripts = [];
    storage.init().then(function () {
      storage.listValues().forEach(function (e) {
        if (e.match(`^${rea.FEATURES.CONSTANTS.PREFIX.META}`)) {
          var s = storage.getValue(e);
          var scriptId = '';

          if (s.namespace) {
            scriptId = `${s.namespace}/`;
          }

          scriptId += s.name;
          s.scriptId = scriptId;
          installedScripts.push(s);
        }
      }); // get code

      installedScripts.forEach(function (script) {
        script.code = storage.getValue(rea.FEATURES.CONSTANTS.PREFIX.SCRIPT + script.uuid); // cleanup (we need to import scripts only once)

        storage.deleteValue(rea.FEATURES.CONSTANTS.PREFIX.META + script.uuid);
        storage.deleteValue(rea.FEATURES.CONSTANTS.PREFIX.SCRIPT + script.uuid);
      });
      resolve(installedScripts);
    });
  });
}

Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* initialize */ "m"])().then(function () {
  browser.runtime.onMessage.addListener(function (req, src) {
    console.log(req, src);
    var func = commands[req.cmd];
    var res;

    if (func) {
      res = func(req.data, src);

      if (typeof res !== 'undefined') {
        // If res is not instance of native Promise, browser APIs will not wait for it.
        res = Promise.resolve(res).then(function (data) {
          return {
            data
          };
        }, function (error) {
          if (process.env.DEBUG) console.error(error);
          return {
            error
          };
        });
      }
    } // undefined will be ignored


    return res || null;
  });
  setTimeout(autoUpdate, 2e4);
  _sync__WEBPACK_IMPORTED_MODULE_4__[/* initialize */ "c"]();
  Object(_utils_tester__WEBPACK_IMPORTED_MODULE_10__[/* resetBlacklist */ "a"])();
  Object(_utils_db__WEBPACK_IMPORTED_MODULE_9__[/* checkRemove */ "a"])();
}); // Common functions

var badges = {};

function setBadge(_ref10, src) {
  var ids = _ref10.ids,
      reset = _ref10.reset;
  var srcTab = src.tab || {};
  var data = !reset && badges[srcTab.id];

  if (!data) {
    data = {
      number: 0,
      unique: 0,
      idMap: {}
    };
    badges[srcTab.id] = data;
  }

  data.number += ids.length;

  if (ids) {
    ids.forEach(function (id) {
      data.idMap[id] = 1;
    });
    data.unique = Object.keys(data.idMap).length;
  }

  browserAction.setBadgeBackgroundColor({
    color: '#808',
    tabId: srcTab.id
  });
  updateBadge(srcTab.id);
}

function updateBadge(tabId) {
  var data = badges[tabId];

  if (data) {
    var showBadge = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getOption */ "i"])('showBadge');
    var text;
    if (showBadge === 'total') text = data.number;else if (showBadge) text = data.unique;
    browserAction.setBadgeText({
      text: `${text || ''}`,
      tabId
    });
  }
}

function updateBadges() {
  browser.tabs.query({}).then(function (tabs) {
    tabs.forEach(function (tab) {
      updateBadge(tab.id);
    });
  });
}

browser.tabs.onRemoved.addListener(function (id) {
  delete badges[id];
});

function setIcon(isApplied) {
  browserAction.setIcon({
    path: {
      19: `/public/images/icon19${isApplied ? '' : 'w'}.png`,
      38: `/public/images/icon38${isApplied ? '' : 'w'}.png`
    }
  });
}

setIcon(Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getOption */ "i"])('isApplied'));
browser.notifications.onClicked.addListener(function (id) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* broadcast */ "b"])({
    cmd: 'NotificationClick',
    data: id
  });

  if (registeredNotifications_[id] && typeof registeredNotifications_[id].onClicked === 'function') {
    registeredNotifications_[id].onClicked();
  }
});
browser.notifications.onClosed.addListener(function (id) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* broadcast */ "b"])({
    cmd: 'NotificationClose',
    data: id
  });

  if (registeredNotifications_[id]) {
    delete registeredNotifications_[id];
  }
});
browser.tabs.onRemoved.addListener(function (id) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* broadcast */ "b"])({
    cmd: 'TabClosed',
    data: id
  });
}); // statistics.init();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return broadcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sendMessageOrIgnore; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

function notify(options) {
  browser.notifications.create(options.id || 'Script', {
    type: 'basic',
    iconUrl: _common__WEBPACK_IMPORTED_MODULE_0__[/* defaultImage */ "d"],
    title: `${options.title} - ${Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('extName')}`,
    message: options.body,
    isClickable: options.isClickable
  });
}
function broadcast(data) {
  browser.tabs.query({}).then(function (tabs) {
    tabs.forEach(function (tab) {
      browser.tabs.sendMessage(tab.id, data).catch(_common__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "n"]);
    });
  });
}
function sendMessageOrIgnore() {
  var _browser$runtime;

  return (_browser$runtime = browser.runtime).sendMessage.apply(_browser$runtime, arguments).catch(_common__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "n"]);
}

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["a"] = (Object(_common_cache__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  lifetime: 10 * 1000
}));

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ initialize; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ sync; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getStates; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ authorize; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ revoke; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(13);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(9);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/common/index.js
var common = __webpack_require__(0);

// EXTERNAL MODULE: ./src/common/object.js
var object = __webpack_require__(2);

// EXTERNAL MODULE: ./src/background/utils/index.js + 2 modules
var utils = __webpack_require__(4);

// EXTERNAL MODULE: ./src/background/utils/db.js
var db = __webpack_require__(5);

// CONCATENATED MODULE: ./src/background/plugin/index.js
 // eslint-disable-next-line import/prefer-default-export

var plugin_script = {
  update(data) {
    // Update an existing script by ID
    // data: {
    //   id, code, message, isNew, config, custom, props, update,
    // }
    return Object(db["n" /* parseScript */])(data);
  },

  list() {
    // List all available scripts, without script code
    return Object(db["j" /* getScripts */])();
  },

  get(id) {
    // Get script code of an existing script
    return Object(db["i" /* getScriptCode */])(id);
  },

  remove(id) {
    // Remove script by id
    return Object(db["o" /* removeScript */])(id);
  }

};
// CONCATENATED MODULE: ./src/background/sync/base.js







var serviceNames = [];
var serviceClasses = [];
var services = {};
var autoSync = Object(common["c" /* debounce */])(sync, 60 * 60 * 1000);
var working = Promise.resolve();
var syncConfig;
function getItemFilename(_ref) {
  var filename = _ref.name,
      uri = _ref.uri;
  return uri ? getFilename(uri) : filename;
}
function getFilename(uri) {
  return `vm-${encodeURIComponent(uri)}`;
}
function isScriptFile(name) {
  return /^vm-/.test(name);
}
function getURI(name) {
  return decodeURIComponent(name.slice(3));
}

function initConfig() {
  function get(key, def) {
    var keys = Object(common["o" /* normalizeKeys */])(key);
    keys.unshift('sync');
    return Object(utils["i" /* getOption */])(keys, def);
  }

  function set(key, value) {
    var keys = Object(common["o" /* normalizeKeys */])(key);
    keys.unshift('sync');
    Object(utils["r" /* setOption */])(keys, value);
  }

  function init() {
    var config = Object(utils["i" /* getOption */])('sync');

    if (!config || !config.services) {
      config = {
        services: {}
      };
      set([], config);
    }
  }

  init();
  return {
    get,
    set
  };
}

function serviceConfig(name) {
  function getKeys(key) {
    var keys = Object(common["o" /* normalizeKeys */])(key);
    keys.unshift('services', name);
    return keys;
  }

  function get(key, def) {
    return syncConfig.get(getKeys(key), def);
  }

  function set(key, val) {
    if (typeof key === 'object') {
      var data = key;
      Object.keys(data).forEach(function (k) {
        syncConfig.set(getKeys(k), data[k]);
      });
    } else {
      syncConfig.set(getKeys(key), val);
    }
  }

  function clear() {
    syncConfig.set(getKeys(), {});
  }

  return {
    get,
    set,
    clear
  };
}

function serviceState(validStates, initialState, onChange) {
  var state = initialState || validStates[0];

  function get() {
    return state;
  }

  function set(newState) {
    if (validStates.includes(newState)) {
      state = newState;
      if (onChange) onChange();
    } else {
      console.warn('Invalid state:', newState);
    }

    return get();
  }

  function is(states) {
    var stateArray = Array.isArray(states) ? states : [states];
    return stateArray.includes(state);
  }

  return {
    get,
    set,
    is
  };
}

function getStates() {
  return serviceNames.map(function (name) {
    var service = services[name];
    return {
      name: service.name,
      displayName: service.displayName,
      authState: service.authState.get(),
      syncState: service.syncState.get(),
      lastSync: service.config.get('meta', {}).lastSync,
      progress: service.progress
    };
  });
}

function getScriptData(script, syncVersion, extra) {
  var data;

  if (syncVersion === 2) {
    data = {
      version: syncVersion,
      custom: script.custom,
      config: script.config,
      props: Object(object["b" /* objectPick */])(script.props, ['lastUpdated'])
    };
  } else if (syncVersion === 1) {
    data = {
      version: syncVersion,
      more: {
        custom: script.custom,
        enabled: script.config.enabled,
        update: script.config.shouldUpdate,
        lastUpdated: script.props.lastUpdated
      }
    };
  }

  return Object.assign(data, extra);
}

function parseScriptData(raw) {
  var data = {};

  try {
    var obj = JSON.parse(raw);
    data.code = obj.code;

    if (obj.version === 2) {
      data.config = obj.config;
      data.custom = obj.custom;
      data.props = obj.props;
    } else if (obj.version === 1) {
      if (obj.more) {
        data.custom = obj.more.custom;
        data.config = Object(object["c" /* objectPurify */])({
          enabled: obj.more.enabled,
          shouldUpdate: obj.more.update
        });
        data.props = Object(object["c" /* objectPurify */])({
          lastUpdated: obj.more.lastUpdated
        });
      }
    }
  } catch (e) {
    data.code = raw;
  }

  return data;
}

function serviceFactory(base) {
  var Service = function constructor() {
    this.initialize();
  };

  Service.prototype = base;
  Service.extend = extendService;
  return Service;
}

function extendService(options) {
  return serviceFactory(Object.assign(Object.create(this.prototype), options));
}

var onStateChange = Object(common["c" /* debounce */])(function () {
  Object(utils["p" /* sendMessageOrIgnore */])({
    cmd: 'UpdateSync',
    data: getStates()
  });
});
var BaseService = serviceFactory({
  name: 'base',
  displayName: 'BaseService',
  delayTime: 1000,
  urlPrefix: '',
  metaFile: 'TestScript',

  initialize() {
    var _this = this;

    this.progress = {
      finished: 0,
      total: 0
    };
    this.config = serviceConfig(this.name);
    this.authState = serviceState(['idle', 'initializing', 'authorizing', // in case some services require asynchronous requests to get access_tokens
    'authorized', 'unauthorized', 'error'], null, onStateChange);
    this.syncState = serviceState(['idle', 'ready', 'syncing', 'error'], null, onStateChange);
    this.lastFetch = Promise.resolve();
    this.startSync = this.syncFactory();
    var events = Object(utils["h" /* getEventEmitter */])();
    ['on', 'off', 'fire'].forEach(function (key) {
      _this[key] = function () {
        events[key].apply(events, arguments);
      };
    });
  },

  log() {
    var _console;

    (_console = console).log.apply(_console, arguments); // eslint-disable-line no-console

  },

  syncFactory() {
    var _this2 = this;

    var promise;
    var debouncedResolve;

    var shouldSync = function shouldSync() {
      return _this2.authState.is('authorized') && getCurrent() === _this2.name;
    };

    var getReady = function getReady() {
      if (!shouldSync()) return Promise.resolve();

      _this2.log('Ready to sync:', _this2.displayName);

      _this2.syncState.set('ready');

      working = working.then(function () {
        return new Promise(function (resolve) {
          debouncedResolve = Object(common["c" /* debounce */])(resolve, 10 * 1000);
          debouncedResolve();
        });
      }).then(function () {
        if (shouldSync()) return _this2.sync();

        _this2.syncState.set('idle');
      }).catch(function (err) {
        console.error(err);
      }).then(function () {
        promise = null;
        debouncedResolve = null;
      });
      promise = working;
    };

    function startSync() {
      if (!promise) getReady();
      if (debouncedResolve) debouncedResolve();
      return promise;
    }

    return startSync;
  },

  prepareHeaders() {
    this.headers = {};
  },

  prepare() {
    var _this3 = this;

    this.authState.set('initializing');
    return (this.initToken() ? Promise.resolve(this.user()) : Promise.reject({
      type: 'unauthorized'
    })).then(function () {
      _this3.authState.set('authorized');
    }, function (err) {
      if (err && err.type === 'unauthorized') {
        _this3.authState.set('unauthorized');
      } else {
        console.error(err);

        _this3.authState.set('error');
      }

      _this3.syncState.set('idle');

      throw err;
    });
  },

  checkSync() {
    var _this4 = this;

    return this.prepare().then(function () {
      return _this4.startSync();
    });
  },

  user: common["n" /* noop */],

  handleMetaError(err) {
    throw err;
  },

  getMeta() {
    var _this5 = this;

    return this.get({
      name: this.metaFile
    }).then(function (data) {
      return JSON.parse(data);
    }).catch(function (err) {
      return _this5.handleMetaError(err);
    });
  },

  initToken() {
    this.prepareHeaders();
    var token = this.config.get('token');
    this.headers.Authorization = token ? `Bearer ${token}` : null;
    return !!token;
  },

  loadData(options) {
    var _this6 = this;

    var progress = this.progress;
    var delay = options.delay;

    if (delay == null) {
      delay = this.delayTime;
    }

    var lastFetch = Promise.resolve();

    if (delay) {
      lastFetch = this.lastFetch.then(function (ts) {
        return new Promise(function (resolve) {
          var delta = delay - (Date.now() - ts);

          if (delta > 0) {
            setTimeout(resolve, delta);
          } else {
            resolve();
          }
        });
      }).then(function () {
        return Date.now();
      });
      this.lastFetch = lastFetch;
    }

    progress.total += 1;
    onStateChange();
    return lastFetch.then(function () {
      var prefix = options.prefix;
      if (prefix == null) prefix = _this6.urlPrefix;
      var headers = Object.assign({}, _this6.headers, options.headers);
      var url = options.url;
      if (url.startsWith('/')) url = prefix + url;
      return Object(common["p" /* request */])(url, {
        headers,
        method: options.method,
        body: options.body,
        responseType: options.responseType
      });
    }).then(function (_ref2) {
      var data = _ref2.data;
      return {
        data
      };
    }, function (error) {
      return {
        error
      };
    }).then(function (_ref3) {
      var data = _ref3.data,
          error = _ref3.error;
      progress.finished += 1;
      onStateChange();
      if (error) return Promise.reject(error);
      return data;
    });
  },

  getLocalData() {
    return plugin_script.list();
  },

  getSyncData() {
    var _this7 = this;

    return this.getMeta().then(function (remoteMetaData) {
      return Promise.all([{
        name: _this7.metaFile,
        data: remoteMetaData
      }, _this7.list(), _this7.getLocalData()]);
    });
  },

  sync() {
    var _this8 = this;

    this.progress = {
      finished: 0,
      total: 0
    };
    this.syncState.set('syncing'); // Avoid simultaneous requests

    return this.prepare().then(function () {
      return _this8.getSyncData();
    }).then(function (_ref4) {
      var _ref5 = slicedToArray_default()(_ref4, 3),
          remoteMeta = _ref5[0],
          remoteData = _ref5[1],
          localData = _ref5[2];

      var remoteMetaData = remoteMeta.data;
      var remoteMetaInfo = remoteMetaData.info || {};
      var remoteTimestamp = remoteMetaData.timestamp || 0;
      var remoteChanged = !remoteTimestamp || Object.keys(remoteMetaInfo).length !== remoteData.length;
      var now = Date.now();
      var globalLastModified = Object(utils["i" /* getOption */])('lastModified');
      var remoteItemMap = {};

      var localMeta = _this8.config.get('meta', {});

      var firstSync = !localMeta.timestamp;
      var outdated = firstSync || remoteTimestamp > localMeta.timestamp;

      _this8.log('First sync:', firstSync);

      _this8.log('Outdated:', outdated, '(', 'local:', localMeta.timestamp, 'remote:', remoteTimestamp, ')');

      var putLocal = [];
      var putRemote = [];
      var delRemote = [];
      var delLocal = [];
      var updateLocal = [];
      remoteMetaData.info = remoteData.reduce(function (info, item) {
        remoteItemMap[item.uri] = item;
        var itemInfo = remoteMetaInfo[item.uri];

        if (!itemInfo) {
          itemInfo = {};
          remoteChanged = true;
        }

        info[item.uri] = itemInfo;

        if (!itemInfo.modified) {
          itemInfo.modified = now;
          remoteChanged = true;
        }

        return info;
      }, {});
      localData.forEach(function (item) {
        var _item$props = item.props,
            uri = _item$props.uri,
            position = _item$props.position,
            lastModified = _item$props.lastModified;
        var remoteInfo = remoteMetaData.info[uri];

        if (remoteInfo) {
          var remoteItem = remoteItemMap[uri];

          if (firstSync || !lastModified || remoteInfo.modified > lastModified) {
            putLocal.push({
              local: item,
              remote: remoteItem,
              info: remoteInfo
            });
          } else {
            if (remoteInfo.modified < lastModified) {
              putRemote.push({
                local: item,
                remote: remoteItem
              });
              remoteInfo.modified = lastModified;
              remoteChanged = true;
            }

            if (remoteInfo.position !== position) {
              if (remoteInfo.position && globalLastModified <= remoteTimestamp) {
                updateLocal.push({
                  local: item,
                  remote: remoteItem,
                  info: remoteInfo
                });
              } else {
                remoteInfo.position = position;
                remoteChanged = true;
              }
            }
          }

          delete remoteItemMap[uri];
        } else if (firstSync || !outdated || lastModified > remoteTimestamp) {
          putRemote.push({
            local: item
          });
        } else {
          delLocal.push({
            local: item
          });
        }
      });
      Object.keys(remoteItemMap).forEach(function (uri) {
        var item = remoteItemMap[uri];
        var info = remoteMetaData.info[uri];

        if (outdated) {
          putLocal.push({
            remote: item,
            info
          });
        } else {
          delRemote.push({
            remote: item
          });
        }
      });
      var promiseQueue = [].concat(toConsumableArray_default()(putLocal.map(function (_ref6) {
        var remote = _ref6.remote,
            info = _ref6.info;

        _this8.log('Download script:', remote.uri);

        return _this8.get(remote).then(function (raw) {
          var data = parseScriptData(raw); // Invalid data

          if (!data.code) return;
          if (info.modified) Object(object["d" /* objectSet */])(data, 'props.lastModified', info.modified);
          var position = +info.position;
          if (position) data.position = position;

          if (!Object(utils["i" /* getOption */])('syncScriptStatus') && data.config) {
            delete data.config.enabled;
          }

          return plugin_script.update(data);
        });
      })), toConsumableArray_default()(putRemote.map(function (_ref7) {
        var local = _ref7.local,
            remote = _ref7.remote;

        _this8.log('Upload script:', local.props.uri);

        return plugin_script.get(local.props.id).then(function (code) {
          // XXX use version 1 to be compatible with Violentmonkey on other platforms
          var data = getScriptData(local, 1, {
            code
          });
          remoteMetaData.info[local.props.uri] = {
            modified: local.props.lastModified,
            position: local.props.position
          };
          remoteChanged = true;
          return _this8.put(Object.assign({}, remote, {
            uri: local.props.uri
          }), JSON.stringify(data));
        });
      })), toConsumableArray_default()(delRemote.map(function (_ref8) {
        var remote = _ref8.remote;

        _this8.log('Remove remote script:', remote.uri);

        delete remoteMetaData.info[remote.uri];
        remoteChanged = true;
        return _this8.remove(remote);
      })), toConsumableArray_default()(delLocal.map(function (_ref9) {
        var local = _ref9.local;

        _this8.log('Remove local script:', local.props.uri);

        return plugin_script.remove(local.props.id);
      })), toConsumableArray_default()(updateLocal.map(function (_ref10) {
        var local = _ref10.local,
            info = _ref10.info;
        var updates = {};

        if (info.position) {
          updates.props = {
            position: info.position
          };
        }

        return Object(db["q" /* updateScriptInfo */])(local.props.id, updates);
      })));
      promiseQueue.push(Promise.all(promiseQueue).then(function () {
        return Object(db["p" /* sortScripts */])();
      }).then(function (changed) {
        if (!changed) return;
        remoteChanged = true;
        return plugin_script.list().then(function (scripts) {
          scripts.forEach(function (script) {
            var remoteInfo = remoteMetaData.info[script.props.uri];
            if (remoteInfo) remoteInfo.position = script.props.position;
          });
        });
      }));
      promiseQueue.push(Promise.all(promiseQueue).then(function () {
        var promises = [];

        if (remoteChanged) {
          remoteMetaData.timestamp = Date.now();
          promises.push(_this8.put(remoteMeta, JSON.stringify(remoteMetaData)));
        }

        localMeta.timestamp = remoteMetaData.timestamp;
        localMeta.lastSync = Date.now();

        _this8.config.set('meta', localMeta);

        return Promise.all(promises);
      })); // ignore errors to ensure all promises are fulfilled

      return Promise.all(promiseQueue.map(function (promise) {
        return promise.then(common["n" /* noop */], function (err) {
          return err || true;
        });
      })).then(function (errors) {
        return errors.filter(Boolean);
      }).then(function (errors) {
        if (errors.length) throw errors;
      });
    }).then(function () {
      _this8.syncState.set('idle');
    }, function (err) {
      _this8.syncState.set('error');

      _this8.log('Failed syncing:', _this8.name);

      _this8.log(err);
    });
  }

});
function register(Factory) {
  serviceClasses.push(Factory);
}

function getCurrent() {
  return syncConfig.get('current');
}

function getService(name) {
  return services[name || getCurrent()];
}

function initialize() {
  if (!syncConfig) {
    syncConfig = initConfig();
    serviceClasses.forEach(function (Factory) {
      var service = new Factory();
      var name = service.name;
      serviceNames.push(name);
      services[name] = service;
    });
  }

  var service = getService();
  if (service) service.checkSync();
}

function syncOne(service) {
  if (service.syncState.is(['ready', 'syncing'])) return;
  if (service.authState.is(['idle', 'error'])) return service.checkSync();
  if (service.authState.is('authorized')) return service.startSync();
}

function sync() {
  var service = getService();
  return service && Promise.resolve(syncOne(service)).then(autoSync);
}
function checkAuthUrl(url) {
  return serviceNames.some(function (name) {
    var service = services[name];
    var authorized = service.checkAuth && service.checkAuth(url);
    return authorized;
  });
}
function authorize() {
  var service = getService();
  if (service) service.authorize();
}
function revoke() {
  var service = getService();
  if (service) service.revoke();
}
Object(utils["k" /* hookOptions */])(function (data) {
  var value = Object(object["a" /* objectGet */])(data, 'sync.current');
  if (value) initialize();
});
// CONCATENATED MODULE: ./src/background/sync/index.js
 // import './dropbox';
// import './onedrive';
// import './googledrive';

browser.tabs.onUpdated.addListener(function (tabId, changes) {
  if (changes.url && checkAuthUrl(changes.url)) browser.tabs.remove(tabId);
});


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDefaultOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hookOptions; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _common_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);



var defaults = {
  isApplied: true,
  autoUpdate: true,
  // ignoreGrant: false,
  lastUpdate: 0,
  lastModified: 0,
  showBadge: 'unique',
  // '' | 'unique' | 'total'
  exportValues: true,
  closeAfterInstall: true,
  trackLocalFile: false,
  autoReload: false,
  features: null,
  blacklist: null,
  syncScriptStatus: true,
  sync: null,
  customCSS: null,
  importSettings: true,
  notifyUpdates: false,
  version: null,
  filters: {
    sort: 'exec'
  },
  editor: {
    lineWrapping: false,
    indentUnit: 2
  },
  scriptTemplate: `\
// ==UserScript==
// @name New Script
// @namespace Script Runner Pro
// @match {{url}}
// @grant none
// ==/UserScript==
`
};
var changes = {};
var hooks = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* initHooks */ "k"])();
var callHooksLater = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* debounce */ "c"])(callHooks, 100);
var options = {};
var ready = false;
var init = browser.storage.local.get('options').then(function (_ref) {
  var data = _ref.options;
  if (data && typeof data === 'object') options = data;

  if (process.env.DEBUG) {
    console.log('options:', options); // eslint-disable-line no-console
  }

  if (!Object(_common_object__WEBPACK_IMPORTED_MODULE_1__[/* objectGet */ "a"])(options, 'version')) {
    // v2.8.0+ stores options in browser.storage.local
    // Upgrade from v2.7.x
    if (process.env.DEBUG) {
      console.log('Upgrade options...'); // eslint-disable-line no-console
    }

    try {
      if (localStorage.length) {
        Object.keys(defaults).forEach(function (key) {
          var value = localStorage.getItem(key);

          if (value) {
            try {
              value = JSON.parse(value);
            } catch (e) {
              value = null;
            }
          }

          if (value) {
            if (process.env.DEBUG) {
              console.log('Upgrade option:', key, value); // eslint-disable-line no-console
            }

            setOption(key, value);
          }
        });
      }
    } catch (e) {// ignore security issue in Firefox
    }

    setOption('version', 1);
  }
}).then(function () {
  ready = true;
});
Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* register */ "b"])(init);

function fireChange(keys, value) {
  Object(_common_object__WEBPACK_IMPORTED_MODULE_1__[/* objectSet */ "d"])(changes, keys, value);
  callHooksLater();
}

function callHooks() {
  hooks.fire(changes);
  changes = {};
}

function getOption(key, def) {
  var keys = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* normalizeKeys */ "o"])(key);
  var mainKey = keys[0];
  var value = options[mainKey];
  if (value == null) value = defaults[mainKey];
  if (value == null) value = def;
  return keys.length > 1 ? Object(_common_object__WEBPACK_IMPORTED_MODULE_1__[/* objectGet */ "a"])(value, keys.slice(1), def) : value;
}
function getDefaultOption(key) {
  return Object(_common_object__WEBPACK_IMPORTED_MODULE_1__[/* objectGet */ "a"])(defaults, key);
}
function setOption(key, value) {
  if (!ready) {
    init.then(function () {
      setOption(key, value);
    });
    return;
  }

  var keys = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* normalizeKeys */ "o"])(key);
  var optionKey = keys.join('.');
  var optionValue = value;
  var mainKey = keys[0];

  if (mainKey in defaults) {
    if (keys.length > 1) {
      optionValue = Object(_common_object__WEBPACK_IMPORTED_MODULE_1__[/* objectSet */ "d"])(getOption(mainKey), keys.slice(1), value);
    }

    options[mainKey] = optionValue;
    browser.storage.local.set({
      options
    });
    fireChange(keys, value);

    if (process.env.DEBUG) {
      console.log('Options updated:', optionKey, value, options); // eslint-disable-line no-console
    }
  }
}
function getAllOptions() {
  return Object.keys(defaults).reduce(function (res, key) {
    res[key] = getOption(key);
    return res;
  }, {});
}
var hookOptions = hooks.hook;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialize; });
var initializers = [];
function register(init) {
  initializers.push(init);
}
function initialize() {
  return Promise.all(initializers.map(function (init) {
    if (typeof init === 'function') return init();
    return init;
  })).then(function () {});
}

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export testGlob */
/* unused harmony export testMatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return testScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return testBlacklist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resetBlacklist; });
/* harmony import */ var _common_tld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);



_common_tld__WEBPACK_IMPORTED_MODULE_0__[/* initTLD */ "c"](true);
var RE_MATCH_PARTS = /(.*?):\/\/([^/]*)\/(.*)/;
var blacklistRules = [];
Object(_options__WEBPACK_IMPORTED_MODULE_2__[/* hookOptions */ "d"])(function (changes) {
  if ('blacklist' in changes) resetBlacklist(changes.blacklist || '');
});
var RE_HTTP_OR_HTTPS = /^https?$/i;
/**
 * Test glob rules like `@include` and `@exclude`.
 */

function testGlob(url, rules) {
  var lifetime = 60 * 1000;
  return rules.some(function (rule) {
    var key = `re:${rule}`;
    var re = _cache__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(key);

    if (re) {
      _cache__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].hit(key, lifetime);
    } else {
      re = autoReg(rule);
      _cache__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].put(key, re, lifetime);
    }

    return re.test(url);
  });
}
/**
 * Test match rules like `@match` and `@exclude_match`.
 */

function testMatch(url, rules) {
  var lifetime = 60 * 1000;
  return rules.some(function (rule) {
    var key = `match:${rule}`;
    var matcher = _cache__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(key);

    if (matcher) {
      _cache__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].hit(key, lifetime);
    } else {
      matcher = matchTester(rule);
      _cache__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].put(key, matcher, lifetime);
    }

    return matcher.test(url);
  });
}
function testScript(url, script) {
  var custom = script.custom,
      meta = script.meta;
  var mat = mergeLists(custom.origMatch && meta.match, custom.match);
  var inc = mergeLists(custom.origInclude && meta.include, custom.include);
  var exc = mergeLists(custom.origExclude && meta.exclude, custom.exclude);
  var excMat = mergeLists(custom.origExcludeMatch && meta.excludeMatch, custom.excludeMatch); // match all if no @match or @include rule

  var ok = !mat.length && !inc.length; // @match

  ok = ok || testMatch(url, mat); // @include

  ok = ok || testGlob(url, inc); // @exclude-match

  ok = ok && !testMatch(url, excMat); // @exclude

  ok = ok && !testGlob(url, exc);
  return ok;
}

function mergeLists() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (res, item) {
    return item ? res.concat(item) : res;
  }, []);
}

function str2RE(str) {
  var re = str.replace(/([.?+[\]{}()|^$])/g, '\\$1').replace(/\*/g, '.*?');
  return `^${re}$`;
}

function autoReg(str) {
  if (str.length > 1 && str[0] === '/' && str[str.length - 1] === '/') {
    return new RegExp(str.slice(1, -1)); // Regular-expression
  }

  var reStr = str2RE(str);
  var re = new RegExp(reStr); // String with wildcards

  var tests = [function (tstr) {
    return re.test(tstr);
  }];

  if (_common_tld__WEBPACK_IMPORTED_MODULE_0__[/* isReady */ "d"]() && str.includes('.tld/')) {
    var reTldStr = reStr.replace('\\.tld/', '((?:\\.\\w+)+)/');
    tests.push(function (tstr) {
      var matches = tstr.match(reTldStr);

      if (matches) {
        var suffix = matches[1].slice(1);
        if (_common_tld__WEBPACK_IMPORTED_MODULE_0__[/* getPublicSuffix */ "b"](suffix) === suffix) return true;
      }

      return false;
    });
  }

  return {
    test: function test(tstr) {
      return tests.some(function (test) {
        return test(tstr);
      });
    }
  };
}

function matchScheme(rule, data) {
  // exact match
  if (rule === data) return 1; // * = http | https

  if (rule === '*' && RE_HTTP_OR_HTTPS.test(data)) return 1;
  return 0;
}

function hostMatcher(rule) {
  var reRule = new RegExp(str2RE(rule));
  return function (data) {
    // * matches all
    if (rule === '*') return 1; // exact match

    if (rule === data) return 1; // *.example.com

    if (/^\*\.[^*]*$/.test(rule)) {
      // matches the specified domain
      if (rule.slice(2) === data) return 1; // matches subdomains

      if (reRule.test(data)) return 1;
    }

    return 0;
  };
}

function pathMatcher(rule) {
  var iHash = rule.indexOf('#');
  var iQuery = rule.indexOf('?');
  var strRe = str2RE(rule);
  if (iQuery > iHash) iQuery = -1;
  if (iQuery < 0 && iHash < 0) strRe = `${strRe.slice(0, -1)}(?:[?#]|$)`;else if (iHash < 0) strRe = `${strRe.slice(0, -1)}(?:#|$)`;
  var reRule = new RegExp(strRe);
  return function (data) {
    return reRule.test(data);
  };
}

function matchTester(rule) {
  var test;

  if (rule === '<all_urls>') {
    test = function test() {
      return true;
    };
  } else {
    var ruleParts = rule.match(RE_MATCH_PARTS);

    if (ruleParts) {
      var matchHost = hostMatcher(ruleParts[2]);
      var matchPath = pathMatcher(ruleParts[3]);

      test = function test(url) {
        var parts = url.match(RE_MATCH_PARTS);
        return !!ruleParts && !!parts && matchScheme(ruleParts[1], parts[1]) && matchHost(parts[2]) && matchPath(parts[3]);
      };
    } else {
      // Ignore invalid match rules
      test = function test() {
        return false;
      };
    }
  }

  return {
    test
  };
}

function checkPrefix(prefix, rule) {
  if (rule.startsWith(prefix)) {
    return rule.slice(prefix.length).trim();
  }
}

function testBlacklist(url) {
  for (var i = 0; i < blacklistRules.length; i += 1) {
    var _blacklistRules$i = blacklistRules[i],
        test = _blacklistRules$i.test,
        reject = _blacklistRules$i.reject;
    if (test(url)) return reject;
  }
}
function resetBlacklist(list) {
  var rules = list == null ? Object(_options__WEBPACK_IMPORTED_MODULE_2__[/* getOption */ "c"])('blacklist') : list;

  if (process.env.DEBUG) {
    console.info('Reset blacklist:', rules);
  } // XXX compatible with {Array} list in v2.6.1-


  blacklistRules = (Array.isArray(rules) ? rules : (rules || '').split('\n')).map(function (line) {
    var item = line.trim();
    if (!item || item.startsWith('#')) return null;
    /**
     * @include and @match rules are added for people who need a whitelist.
     */
    // @include

    var includeRule = checkPrefix('@include ', item);

    if (includeRule) {
      return {
        test: autoReg(includeRule).test,
        reject: false
      };
    } // @match


    var matchRule = checkPrefix('@match ', item);

    if (matchRule) {
      return {
        test: matchTester(matchRule).test,
        reject: false
      };
    } // @exclude


    var excludeRule = checkPrefix('@exclude ', item);

    if (excludeRule) {
      return {
        test: autoReg(excludeRule).test,
        reject: true
      };
    } // domains


    if (item.indexOf('/') < 0) {
      return {
        test: matchTester(`*://${item}/*`).test,
        reject: true
      };
    } // @exclude-match


    return {
      test: matchTester(item).test,
      reject: true
    };
  }).filter(Boolean);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateValueStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setValueStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetValueOpener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addValueOpener; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


var openers = {}; // scriptId: { openerId: 1, ... }

var tabScripts = {}; // openerId: { scriptId: 1, ... }

var cache;
var timer;
browser.tabs.onRemoved.addListener(function (id) {
  resetValueOpener(id);
});
function updateValueStore(id, update) {
  updateLater();
  var key = update.key,
      value = update.value;
  if (!cache) cache = {};
  var updates = cache[id];

  if (!updates) {
    updates = {};
    cache[id] = updates;
  }

  updates[key] = value || null;
}
function setValueStore(where, value) {
  return Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* dumpValueStore */ "b"])(where, value).then(broadcastUpdates);
}
function resetValueOpener(openerId) {
  var scriptMap = tabScripts[openerId];

  if (scriptMap) {
    Object.keys(scriptMap).forEach(function (scriptId) {
      var map = openers[scriptId];
      if (map) delete map[openerId];
    });
    delete tabScripts[openerId];
  }
}
function addValueOpener(openerId, scriptIds) {
  var scriptMap = tabScripts[openerId];

  if (!scriptMap) {
    scriptMap = {};
    tabScripts[openerId] = scriptMap;
  }

  scriptIds.forEach(function (scriptId) {
    scriptMap[scriptId] = 1;
    var openerMap = openers[scriptId];

    if (!openerMap) {
      openerMap = {};
      openers[scriptId] = openerMap;
    }

    openerMap[openerId] = 1;
  });
}

function updateLater() {
  if (!timer) {
    timer = Promise.resolve().then(doUpdate); // timer = setTimeout(doUpdate);
  }
}

function doUpdate() {
  var currentCache = cache;
  cache = null;
  var ids = Object.keys(currentCache);
  Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* getValueStoresByIds */ "l"])(ids).then(function (valueStores) {
    ids.forEach(function (id) {
      var valueStore = valueStores[id] || {};
      valueStores[id] = valueStore;
      var updates = currentCache[id] || {};
      Object.keys(updates).forEach(function (key) {
        var value = updates[key];
        if (!value) delete valueStore[key];else valueStore[key] = value;
      });
    });
    return Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* dumpValueStores */ "c"])(valueStores);
  }).then(broadcastUpdates).catch(function (err) {
    console.error('Values error:', err);
  }).then(function () {
    timer = null;
    if (cache) updateLater();
  });
}

function broadcastUpdates(updates) {
  if (updates) {
    var updatedOpeners = Object.keys(updates).reduce(function (map, scriptId) {
      return Object.assign(map, openers[scriptId]);
    }, {});
    Object.keys(updatedOpeners).forEach(function (openerId) {
      browser.tabs.sendMessage(+openerId, {
        cmd: 'UpdatedValues',
        data: updates
      }).catch(_common__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "n"]);
    });
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEngineStatus; });
/* unused harmony export startJsPlayer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAvailablePlayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return openInPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDeviceId; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
 // TODO: register initiator before each play (engine can restart)

var gDeviceId = null;
var gInitiatorId = null;

function checkEngine(retryCount, retryInterval) {
  var url = 'http://127.0.0.1:6878/webui/api/service?method=get_version';

  if (gDeviceId === null) {
    url += '&params=device-id';
  }

  function makeResponse(requestResponse) {
    var errmsg = '';
    var engineRunning = false;
    var engineVersionString = null;
    var engineVersionCode = 0;

    if (requestResponse.status !== 200) {
      errmsg = `engine returned error: ${requestResponse.status}`;
    } else {
      var response = requestResponse.data;

      if (response.error) {
        engineVersionCode = 0;
        engineVersionString = null;
        errmsg = response.error;
      } else if (!response.result) {
        engineVersionCode = 0;
        engineVersionString = null;
        errmsg = 'malformed response from engine';
      } else {
        engineVersionCode = parseInt(response.result.code, 10);

        if (isNaN(engineVersionCode)) {
          // eslint-disable-line no-restricted-globals
          engineVersionCode = 0;
        }

        engineVersionString = response.result.version;

        if (response.result.device_id) {
          if (gDeviceId !== response.result.device_id) {
            gDeviceId = response.result.device_id;
          }
        }
      }
    }

    if (errmsg) {
      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])(`checkEngine: error: ${errmsg}`);
    }

    engineRunning = !!engineVersionCode;

    if (!engineRunning && retryCount !== undefined && retryCount > 0) {
      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])(`Script: check engine failed (${retryCount}), next try in ${retryInterval}`);
      return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* delay */ "e"])(retryInterval).then(function () {
        return checkEngine(retryCount - 1, retryInterval);
      });
    }

    return {
      running: !!engineVersionCode,
      versionCode: engineVersionCode,
      versionString: engineVersionString
    };
  }

  return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* request */ "p"])(url, {
    responseType: 'json'
  }).then(function (response) {
    return makeResponse(response);
  }).catch(function (response) {
    return makeResponse(response);
  });
}

function makeParams(params) {
  var value;
  var result = [];
  Object.keys(params).forEach(function (name) {
    value = params[name];
    result.push(`${name}=${encodeURIComponent(value)}`);
  });
  return result.join('&');
}

function sendRequest(details) {
  if (!details.method) {
    throw new Error('missing method');
  }

  if (!details.params) {
    details.params = {};
  }

  if (!details.api) {
    details.api = 'server';
  }

  details.params.method = details.method;
  var baseUrl;

  if (details.api === 'server') {
    baseUrl = 'http://127.0.0.1:6878/server/api';
  } else if (details.api === 'service') {
    baseUrl = 'http://127.0.0.1:6878/webui/api/service';
  } else {
    throw new Error(`unknown api: ${details.api}`);
  }

  var url = `${baseUrl}?${makeParams(details.params)}`;
  return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* request */ "p"])(url, {
    responseType: 'json',
    timeout: 10000
  }).then(function (response) {
    var err;

    if (response.status !== 200) {
      err = `Bad status code: ${response.status}`;
      throw err;
    }

    var data = response.data;

    if (data.error) {
      throw data.error;
    } else if (!data.result) {
      err = 'malformed response from engine';
      throw err;
    } else {
      return data.result;
    }
  });
}

function getEngineStatus(callback) {
  if (typeof callback !== 'undefined') {
    throw new Error('deprecated callback in getEngineStatus()');
  }

  return new Promise(function (resolve) {
    checkEngine().then(function (checkEngineResponse) {
      function _sendResponse(running, versionCode) {
        resolve({
          running,
          version: versionCode
        });
      }

      if (checkEngineResponse.running) {
        _sendResponse(checkEngineResponse.running, checkEngineResponse.versionCode);
      } else {
        // engine is not running, check it's version by native messaging
        browser.runtime.sendNativeMessage('org.teststream.engine', {
          method: 'get_version'
        }, function (nativeResponse) {
          if (typeof nativeResponse === 'undefined') {
            Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])(`Script: engine messaging host failed: ${browser.runtime.lastError}`);

            _sendResponse(false, 0);
          } else {
            Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])(`Script: got response from engine messaging host: ${JSON.stringify(nativeResponse)}`); // start engine

            browser.runtime.sendNativeMessage('org.teststream.engine', {
              method: 'start_engine'
            }, function (nativeResponse2) {
              if (typeof nativeResponse2 === 'undefined') {
                Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])('Script: failed to start engine');

                _sendResponse(false, 0);
              } else {
                // wait until engine is started
                var retryCount = 20;
                var retryInterval = 1000;
                checkEngine(retryCount, retryInterval).then(function (checkEngineResponse2) {
                  Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])(`Script: engine status after starting: ${JSON.stringify(checkEngineResponse2)}`);

                  _sendResponse(checkEngineResponse2.running, checkEngineResponse2.versionCode);
                });
              }
            });
          }
        });
      }
    });
  });
}
function startJsPlayer(callback) {
  browser.runtime.sendNativeMessage('org.teststream.engine', {
    method: 'get_version'
  }, function (response1) {
    if (typeof response1 === 'undefined') {
      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])('Script:startJsPlayer: engine messaging host failed');
      callback(false);
    } else {
      Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])(`Script:startJsPlayer: got response from engine messaging host: ${JSON.stringify(response1)}`); // start js player

      browser.runtime.sendNativeMessage('org.teststream.engine', {
        method: 'start_js_player'
      }, function (response2) {
        if (typeof response2 === 'undefined') {
          Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* verbose */ "r"])('Script:startJsPlayer: failed to start js player');
          callback(false);
        } else {
          callback(response2);
        }
      });
    }
  });
}
function getAvailablePlayers(details, callback) {
  if (typeof callback !== 'function') {
    return;
  }

  var params = {};

  if (details.content_id) {
    params.content_id = details.content_id;
  } else if (details.transport_file_url) {
    params.url = details.transport_file_url;
  } else if (details.infohash) {
    params.infohash = details.infohash;
  } else {
    callback();
  }

  sendRequest({
    method: 'get_available_players',
    params
  }).then(function (data) {
    callback(data);
  }).catch(function () {
    callback();
  });
}
function openInPlayer(details, playerId, callback) {
  var params = {};

  if (gInitiatorId) {
    params.a = gInitiatorId;
  }

  if (details.content_id) {
    params.content_id = details.content_id;
  } else if (details.transport_file_url) {
    params.url = details.transport_file_url;
  } else if (details.infohash) {
    params.infohash = details.infohash;
  } else {
    callback();
  }

  if (playerId) {
    params.player_id = playerId;
  }

  sendRequest({
    method: 'open_in_player',
    params
  }).then(function (data) {
    if (typeof callback === 'function') {
      callback(data);
    }
  }).catch(function () {
    if (typeof callback === 'function') {
      callback();
    }
  });
}
function getDeviceId(callback) {
  sendRequest({
    api: 'service',
    method: 'get_public_user_key'
  }).then(function (data) {
    if (typeof callback === 'function') {
      callback(data);
    }
  }).catch(function () {
    if (typeof callback === 'function') {
      callback();
    }
  });
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ cache["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ clipboard["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ update["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ events["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ script["f" /* parseMeta */]; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ script["e" /* newScript */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ options["c" /* getOption */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ options["b" /* getDefaultOption */]; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ options["e" /* setOption */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ options["a" /* getAllOptions */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ options["d" /* hookOptions */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ getRequestId; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ httpRequest; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ abortRequest; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ confirmInstall; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ init["a" /* initialize */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ message["a" /* broadcast */]; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ message["c" /* sendMessageOrIgnore */]; });

// UNUSED EXPORTS: isUserScript, getNameURI, makeScriptId, compareVersion, loadQuery, dumpQuery, notify

// EXTERNAL MODULE: ./src/background/utils/cache.js
var cache = __webpack_require__(20);

// EXTERNAL MODULE: ./src/background/utils/clipboard.js
var clipboard = __webpack_require__(92);

// EXTERNAL MODULE: ./src/background/utils/update.js
var update = __webpack_require__(93);

// EXTERNAL MODULE: ./src/background/utils/events.js
var events = __webpack_require__(44);

// EXTERNAL MODULE: ./src/background/utils/script.js
var script = __webpack_require__(11);

// EXTERNAL MODULE: ./src/background/utils/options.js
var options = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(9);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/common/index.js
var common = __webpack_require__(0);

// CONCATENATED MODULE: ./src/background/utils/requests.js




var requests = {};
var verify = {};
var specialHeaders = ['user-agent', 'referer', 'origin', 'host', 'cookie']; // const tasks = {};

function getRequestId() {
  var id = Object(common["i" /* getUniqId */])();
  requests[id] = {
    id,
    xhr: new XMLHttpRequest()
  };
  return id;
}

function xhrCallbackWrapper(req) {
  var lastPromise = Promise.resolve();
  var xhr = req.xhr;
  return function (evt) {
    var res = {
      id: req.id,
      type: evt.type,
      resType: xhr.responseType
    };
    var data = {
      finalUrl: xhr.responseURL,
      readyState: xhr.readyState,
      responseHeaders: xhr.getAllResponseHeaders(),
      status: xhr.status,
      statusText: xhr.statusText
    };
    res.data = data;

    try {
      data.responseText = xhr.responseText;
    } catch (e) {// ignore if responseText is unreachable
    }

    if (evt.type === 'progress') {
      ['lengthComputable', 'loaded', 'total'].forEach(function (key) {
        data[key] = evt[key];
      });
    }

    if (evt.type === 'loadend') clearRequest(req);
    lastPromise = lastPromise.then(function () {
      if (xhr.response && xhr.responseType === 'arraybuffer') {
        var contentType = xhr.getResponseHeader('Content-Type') || 'application/octet-stream';
        var binstring = Object(common["a" /* buffer2string */])(xhr.response);
        data.response = `data:${contentType};base64,${window.btoa(binstring)}`;
      } else {
        // default `null` for blob and '' for text
        data.response = xhr.response;
      }
    }).then(function () {
      if (req.cb) req.cb(res);
    });
  };
}

function httpRequest(details, cb) {
  var req = requests[details.id];
  if (!req || req.cb) return;
  req.cb = cb;
  var xhr = req.xhr;

  try {
    xhr.open(details.method, details.url, true, details.user || '', details.password || '');
    xhr.setRequestHeader('VM-Verify', details.id);

    if (details.headers) {
      Object.keys(details.headers).forEach(function (key) {
        var lowerKey = key.toLowerCase(); // `VM-` headers are reserved

        if (lowerKey.startsWith('vm-')) return;
        xhr.setRequestHeader(specialHeaders.includes(lowerKey) ? `VM-${key}` : key, details.headers[key]);
      });
    }

    if (details.timeout) xhr.timeout = details.timeout;
    if (details.responseType) xhr.responseType = 'arraybuffer';
    if (details.overrideMimeType) xhr.overrideMimeType(details.overrideMimeType);
    var callback = xhrCallbackWrapper(req);
    ['abort', 'error', 'load', 'loadend', 'progress', 'readystatechange', 'timeout'].forEach(function (evt) {
      xhr[`on${evt}`] = callback;
    }); // req.finalUrl = details.url;

    var data = details.data;
    var body = data ? decodeBody(data) : null;
    xhr.send(body);
  } catch (e) {
    console.warn(e);
  }
}

function clearRequest(req) {
  if (req.coreId) delete verify[req.coreId];
  delete requests[req.id];
}

function abortRequest(id) {
  var req = requests[id];

  if (req) {
    req.xhr.abort();
    clearRequest(req);
  }
}

function decodeBody(obj) {
  var cls = obj.cls,
      value = obj.value;

  if (cls === 'formdata') {
    var result = new FormData();

    if (value) {
      Object.keys(value).forEach(function (key) {
        value[key].forEach(function (item) {
          result.append(key, decodeBody(item));
        });
      });
    }

    return result;
  }

  if (['blob', 'file'].includes(cls)) {
    var type = obj.type,
        name = obj.name,
        lastModified = obj.lastModified;
    var array = new Uint8Array(value.length);

    for (var i = 0; i < value.length; i += 1) {
      array[i] = value.charCodeAt(i);
    }

    var data = [array.buffer];
    if (cls === 'file') return new File(data, name, {
      type,
      lastModified
    });
    return new Blob(data, {
      type
    });
  }

  if (value) return JSON.parse(value);
} // Watch URL redirects
// browser.webRequest.onBeforeRedirect.addListener(details => {
//   const reqId = verify[details.requestId];
//   if (reqId) {
//     const req = requests[reqId];
//     if (req) req.finalUrl = details.redirectUrl;
//   }
// }, {
//   urls: ['<all_urls>'],
//   types: ['xmlhttprequest'],
// });
// Modifications on headers


browser.webRequest.onBeforeSendHeaders.addListener(function (details) {
  var headers = details.requestHeaders;
  var newHeaders = [];
  var vmHeaders = {};
  headers.forEach(function (header) {
    // if (header.name === 'VM-Task') {
    //   tasks[details.requestId] = header.value;
    // } else
    if (header.name.startsWith('VM-')) {
      vmHeaders[header.name.slice(3)] = header.value;
    } else {
      newHeaders.push(header);
    }
  });
  var reqId = vmHeaders.Verify;

  if (reqId) {
    var req = requests[reqId];

    if (req) {
      delete vmHeaders.Verify;
      verify[details.requestId] = reqId;
      req.coreId = details.requestId;
      Object.keys(vmHeaders).forEach(function (name) {
        if (specialHeaders.includes(name.toLowerCase())) {
          newHeaders.push({
            name,
            value: vmHeaders[name]
          });
        }
      });
    }
  }

  return {
    requestHeaders: newHeaders
  };
}, {
  urls: ['<all_urls>'],
  types: ['xmlhttprequest']
}, ['blocking', 'requestHeaders']); // tasks are not necessary now, turned off
// Stop redirects
// browser.webRequest.onHeadersReceived.addListener(details => {
//   const task = tasks[details.requestId];
//   if (task) {
//     delete tasks[details.requestId];
//     if (task === 'Get-Location' && [301, 302, 303].includes(details.statusCode)) {
//       const locationHeader = details.responseHeaders.find(
//         header => header.name.toLowerCase() === 'location');
//       const base64 = locationHeader && locationHeader.value;
//       return {
//         redirectUrl: `data:text/plain;charset=utf-8,${base64 || ''}`,
//       };
//     }
//   }
// }, {
//   urls: ['<all_urls>'],
//   types: ['xmlhttprequest'],
// }, ['blocking', 'responseHeaders']);
// browser.webRequest.onCompleted.addListener(details => {
//   delete tasks[details.requestId];
// }, {
//   urls: ['<all_urls>'],
//   types: ['xmlhttprequest'],
// });
// browser.webRequest.onErrorOccurred.addListener(details => {
//   delete tasks[details.requestId];
// }, {
//   urls: ['<all_urls>'],
//   types: ['xmlhttprequest'],
// });

function confirmInstall(info) {
  return (info.code ? Promise.resolve(info.code) : Object(common["p" /* request */])(info.url).then(function (_ref) {
    var data = _ref.data;
    if (!Object(script["c" /* isUserScript */])(data)) return Promise.reject(Object(common["j" /* i18n */])('msgInvalidScript'));
    return data;
  })).then(function (code) {
    cache["a" /* default */].put(info.url, code, 3000);
    var confirmKey = Object(common["i" /* getUniqId */])();
    cache["a" /* default */].put(`confirm-${confirmKey}`, {
      url: info.url,
      from: info.from
    });
    var optionsURL = browser.runtime.getURL('/confirm/index.html');
    browser.tabs.create({
      url: `${optionsURL}#${confirmKey}`
    });
  });
}
var reUserScript = /\.(user|acestream)\.js([?#]|$)/;
var whitelist = ['^https://greasyfork.org/scripts/[^/]*/code/[^/]*?\\.user\\.js([?#]|$)', '^https://openuserjs.org/install/[^/]*/[^/]*?\\.user\\.js([?#]|$)', '^https://github.com/[^/]*/[^/]*/raw/[^/]*/[^/]*?\\.user\\.js([?#]|$)', '^https://gist.github.com/.*?/[^/]*?.user.js([?#]|$)'].map(function (re) {
  return new RegExp(re);
});
var blacklist = ['//(?:(?:gist.|)github.com|greasyfork.org|openuserjs.org)/'].map(function (re) {
  return new RegExp(re);
});
var bypass = {};
browser.webRequest.onBeforeRequest.addListener(function (req) {
  // onBeforeRequest fired for `file:`
  // - works on Chrome
  // - does not work on Firefox
  var url = req.url;

  if (req.method === 'GET' && reUserScript.test(url)) {
    if (!bypass[url] && (whitelist.some(function (re) {
      return re.test(url);
    }) || !blacklist.some(function (re) {
      return re.test(url);
    }))) {
      Promise.all([Object(common["p" /* request */])(url).catch(function () {
        return {
          data: ''
        };
      }), req.tabId < 0 ? Promise.resolve() : browser.tabs.get(req.tabId)]).then(function (_ref2) {
        var _ref3 = slicedToArray_default()(_ref2, 2),
            code = _ref3[0].data,
            tab = _ref3[1];

        var meta = Object(script["f" /* parseMeta */])(code);

        if (meta.name) {
          confirmInstall({
            code,
            url,
            from: tab && tab.url
          });
        } else {
          if (!bypass[url]) {
            bypass[url] = {
              timer: setTimeout(function () {
                delete bypass[url];
              }, 10000)
            };
          }

          if (tab && tab.id) {
            browser.tabs.update(tab.id, {
              url
            });
          }
        }
      }); // { cancel: true } will redirect to a blocked view

      return {
        redirectUrl: 'javascript:history.back()'
      }; // eslint-disable-line no-script-url
    }
  }
}, {
  urls: ['<all_urls>'],
  types: ['main_frame']
}, ['blocking']);
// CONCATENATED MODULE: ./src/background/utils/search.js
function loadQuery(string) {
  return string.split('&').reduce(function (data, piece) {
    var parts = piece.split('=');
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    return data;
  }, {});
}
function dumpQuery(dict) {
  return Object.keys(dict).map(function (key) {
    return `${encodeURIComponent(key)}=${encodeURIComponent(dict[key])}`;
  }).join('&');
}
// EXTERNAL MODULE: ./src/background/utils/init.js
var init = __webpack_require__(29);

// EXTERNAL MODULE: ./src/background/utils/message.js
var message = __webpack_require__(15);

// CONCATENATED MODULE: ./src/background/utils/index.js











/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEventEmitter; });
function getEventEmitter() {
  var events = {};
  return {
    on,
    off,
    fire
  };

  function on(type, func) {
    var list = events[type];

    if (!list) {
      list = [];
      events[type] = list;
    }

    list.push(func);
  }

  function off(type, func) {
    var list = events[type];

    if (list) {
      var i = list.indexOf(func);
      if (i >= 0) list.splice(i, 1);
    }
  }

  function fire(type, data) {
    var list = events[type];

    if (list) {
      list.forEach(function (func) {
        func(data, type);
      });
    }
  }
}

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export eventEmitter */
/* unused harmony export normalizePosition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return sortScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getInstalledScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getScriptByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getScriptCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getValueStoresByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dumpValueStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dumpValueStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getScriptsByURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return removeScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return moveScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return updateScriptInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getExportData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return parseScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return vacuum; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _common_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _tester__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _patch_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _plugin_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(105);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44);












var eventEmitter = Object(_events__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();

function cacheOrFetch(handle) {
  var requests = {};
  return function cachedHandle(url) {
    var promise = requests[url];

    if (!promise) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      promise = handle.call.apply(handle, [this, url].concat(args)).catch(function (err) {
        console.error(`Error fetching: ${url}`, err);
      }).then(function () {
        delete requests[url];
      });
      requests[url] = promise;
    }

    return promise;
  };
}

function ensureListArgs(handle) {
  return function handleList(data) {
    var items = Array.isArray(data) ? data : [data];
    items = items.filter(Boolean);
    if (!items.length) return Promise.resolve();
    return handle.call(this, items);
  };
}

var store = {};
var storage = {
  base: {
    prefix: '',

    getKey(id) {
      return `${this.prefix}${id}`;
    },

    getOne(id) {
      var key = this.getKey(id);
      return browser.storage.local.get(key).then(function (data) {
        return data[key];
      });
    },

    getMulti(ids, def) {
      var _this = this;

      return browser.storage.local.get(ids.map(function (id) {
        return _this.getKey(id);
      })).then(function (data) {
        var result = {};
        ids.forEach(function (id) {
          result[id] = data[_this.getKey(id)] || def;
        });
        return result;
      });
    },

    set(id, value) {
      if (!id) return Promise.resolve();
      return browser.storage.local.set({
        [this.getKey(id)]: value
      });
    },

    remove(id) {
      if (!id) return Promise.resolve();
      return browser.storage.local.remove(this.getKey(id));
    },

    removeMulti(ids) {
      var _this2 = this;

      return browser.storage.local.remove(ids.map(function (id) {
        return _this2.getKey(id);
      }));
    }

  }
};
storage.script = Object.assign({}, storage.base, {
  prefix: 'scr:',
  dump: ensureListArgs(function dump(items) {
    var _this3 = this;

    var updates = {};
    items.forEach(function (item) {
      updates[_this3.getKey(item.props.id)] = item;
      store.scriptMap[item.props.id] = item;
    });
    return browser.storage.local.set(updates).then(function () {
      return items;
    });
  })
});
storage.code = Object.assign({}, storage.base, {
  prefix: 'code:'
});
storage.value = Object.assign({}, storage.base, {
  prefix: 'val:',

  dump(dict) {
    var _this4 = this;

    var updates = {};
    Object.keys(dict).forEach(function (id) {
      var value = dict[id];
      updates[_this4.getKey(id)] = value;
    });
    return browser.storage.local.set(updates);
  }

});
storage.require = Object.assign({}, storage.base, {
  prefix: 'req:',
  fetch: cacheOrFetch(function fetch(uri) {
    var _this5 = this;

    return Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* request */ "p"])(uri).then(function (_ref) {
      var data = _ref.data;
      return _this5.set(uri, data);
    });
  })
});
storage.cache = Object.assign({}, storage.base, {
  prefix: 'cac:',
  fetch: cacheOrFetch(function fetch(uri, check) {
    var _this6 = this;

    return Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* request */ "p"])(uri, {
      responseType: 'arraybuffer'
    }).then(function (_ref2) {
      var buffer = _ref2.data,
          xhr = _ref2.xhr;
      var contentType = (xhr.getResponseHeader('content-type') || '').split(';')[0];
      var data = {
        contentType,
        buffer,
        blob: function blob(options) {
          return new Blob([buffer], Object.assign({
            type: contentType
          }, options));
        },
        string: function string() {
          return Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* buffer2string */ "a"])(buffer);
        },
        base64: function base64() {
          return window.btoa(data.string());
        }
      };
      return (check ? Promise.resolve(check(data)) : Promise.resolve()).then(function () {
        return _this6.set(uri, `${contentType},${data.base64()}`);
      });
    });
  })
});
Object(_init__WEBPACK_IMPORTED_MODULE_6__[/* register */ "b"])(initialize());

function initialize() {
  return browser.storage.local.get('version').then(function (_ref3) {
    var lastVersion = _ref3.version;

    var _browser$runtime$getM = browser.runtime.getManifest(),
        version = _browser$runtime$getM.version;

    return (lastVersion ? Promise.resolve() : Object(_patch_db__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])()).then(function () {
      if (version !== lastVersion) return browser.storage.local.set({
        version
      });
    });
  }).then(function () {
    return browser.storage.local.get();
  }).then(function (data) {
    var scripts = [];
    var storeInfo = {
      id: 0,
      position: 0
    };
    Object.keys(data).forEach(function (key) {
      var value = data[key];

      if (key.startsWith('scr:')) {
        // {
        //   meta,
        //   custom,
        //   props: { id, position, uri },
        //   config: { enabled, shouldUpdate },
        // }
        scripts.push(value);
        storeInfo.id = Math.max(storeInfo.id, getInt(Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(value, 'props.id')));
        storeInfo.position = Math.max(storeInfo.position, getInt(Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(value, 'props.position')));
      }
    });
    Object.assign(store, {
      scripts,
      storeInfo,
      scriptMap: scripts.reduce(function (map, item) {
        map[item.props.id] = item;
        return map;
      }, {})
    });

    if (process.env.DEBUG) {
      console.log('store:', store); // eslint-disable-line no-console
    }

    return sortScripts();
  });
}

function getInt(val) {
  return +val || 0;
}

function updateLastModified() {
  Object(_options__WEBPACK_IMPORTED_MODULE_8__[/* setOption */ "e"])('lastModified', Date.now());
}

function normalizePosition() {
  var updates = [];
  var positionKey = 'props.position';
  store.scripts.forEach(function (item, index) {
    var position = index + 1;

    if (Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(item, positionKey) !== position) {
      Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectSet */ "d"])(item, positionKey, position);
      updates.push(item);
    } // XXX patch v2.8.0


    if (typeof item.custom.origInclude === 'undefined') {
      item.custom = Object.assign({
        origInclude: true,
        origExclude: true,
        origMatch: true,
        origExcludeMatch: true
      }, item.custom);
      if (!updates.includes(item)) updates.push(item);
    }
  });
  store.storeInfo.position = store.scripts.length;
  var length = updates.length;
  if (!length) return Promise.resolve();
  return storage.script.dump(updates).then(function () {
    updateLastModified();
    return length;
  });
}
function sortScripts() {
  store.scripts.sort(function (a, b) {
    var _map = [a, b].map(function (item) {
      return getInt(Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(item, 'props.position'));
    }),
        _map2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_map, 2),
        pos1 = _map2[0],
        pos2 = _map2[1];

    return pos1 - pos2;
  });
  return normalizePosition().then(function (changed) {
    Object(_message__WEBPACK_IMPORTED_MODULE_9__[/* sendMessageOrIgnore */ "c"])({
      cmd: 'ScriptsUpdated'
    });
    return changed;
  });
}
function getScript(where) {
  var script;

  if (store.scripts) {
    if (where.id) {
      script = store.scriptMap[where.id];
    } else {
      var uri = where.uri || Object(_script__WEBPACK_IMPORTED_MODULE_4__[/* getNameURI */ "b"])({
        meta: where.meta,
        id: '@@should-have-name'
      });

      var predicate = function predicate(item) {
        return uri === Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(item, 'props.uri');
      };

      script = store.scripts.find(predicate);
    }
  }

  return Promise.resolve(script);
}
function getScripts() {
  return Promise.resolve(store.scripts).then(function (scripts) {
    return scripts.filter(function (script) {
      return !script.config.removed;
    });
  });
}
function getInstalledScripts() {
  return new Promise(function (resolve) {
    var installed = [];
    getScripts().then(function (scripts) {
      if (scripts) {
        scripts.forEach(function (script) {
          installed.push(script.props.scriptId);
        });
      }

      resolve(installed);
    });
  });
}
function getScriptByIds(ids) {
  return Promise.all(ids.map(function (id) {
    return getScript({
      id
    });
  })).then(function (scripts) {
    return scripts.filter(Boolean);
  });
}
function getScriptCode(id) {
  return storage.code.getOne(id);
}
/**
 * @desc Load values for batch updates.
 * @param {Array} ids
 */

function getValueStoresByIds(ids) {
  return storage.value.getMulti(ids);
}
/**
 * @desc Dump values for batch updates.
 * @param {Object} valueDict { id1: value1, id2: value2, ... }
 */

function dumpValueStores(valueDict) {
  if (process.env.DEBUG) {
    console.info('Update value stores', valueDict);
  }

  return storage.value.dump(valueDict).then(function () {
    return valueDict;
  });
}
function dumpValueStore(where, valueStore) {
  return (where.id ? Promise.resolve(where.id) : getScript(where).then(function (script) {
    return Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(script, 'props.id');
  })).then(function (id) {
    if (id) return dumpValueStores({
      [id]: valueStore
    });
  });
}
/**
 * @desc Get scripts to be injected to page with specific URL.
 */

function getScriptsByURL(url) {
  var isTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var scripts = Object(_tester__WEBPACK_IMPORTED_MODULE_5__[/* testBlacklist */ "b"])(url) ? [] : store.scripts.filter(function (script) {
    if (script.config.removed) {
      return false;
    }

    if (!Object(_tester__WEBPACK_IMPORTED_MODULE_5__[/* testScript */ "c"])(url, script)) {
      return false;
    }

    if ('noframes' in script.meta && !isTop) {
      return false;
    }

    return true;
  });
  var reqKeys = {};
  var cacheKeys = {};
  scripts.forEach(function (script) {
    if (script.config.enabled) {
      if (!script.custom.pathMap) buildPathMap(script);
      var pathMap = script.custom.pathMap;

      script.meta.require.forEach(function (key) {
        reqKeys[pathMap[key] || key] = 1;
      });

      Object.values(script.meta.resources).forEach(function (key) {
        cacheKeys[pathMap[key] || key] = 1;
      });
    }
  });
  var enabledScripts = scripts.filter(function (script) {
    return script.config.enabled;
  });
  var gmValues = {
    GM_getValue: 1,
    GM_setValue: 1,
    GM_listValues: 1,
    GM_deleteValue: 1
  };
  var scriptsWithValue = enabledScripts.filter(function (script) {
    var grant = Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(script, 'meta.grant');
    return grant && grant.some(function (gm) {
      return gmValues[gm];
    });
  });
  return Promise.all([storage.require.getMulti(Object.keys(reqKeys)), storage.cache.getMulti(Object.keys(cacheKeys)), storage.value.getMulti(scriptsWithValue.map(function (script) {
    return script.props.id;
  }), {}), storage.code.getMulti(enabledScripts.map(function (script) {
    return script.props.id;
  }))]).then(function (_ref4) {
    var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, 4),
        require = _ref5[0],
        cache = _ref5[1],
        values = _ref5[2],
        code = _ref5[3];

    return {
      scripts,
      require,
      cache,
      values,
      code
    };
  });
}
/**
 * @desc Get data for dashboard.
 */

function getData() {
  var cacheKeys = {};
  var scripts = store.scripts;
  scripts.forEach(function (script) {
    var icon = Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(script, 'meta.icon');

    if (Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* isRemote */ "l"])(icon)) {
      var pathMap = Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(script, 'custom.pathMap') || {};
      var fullUrl = pathMap[icon] || icon;
      cacheKeys[fullUrl] = 1;
    }
  });
  return storage.cache.getMulti(Object.keys(cacheKeys)).then(function (cache) {
    return {
      scripts,
      cache
    };
  });
}
function checkRemove() {
  var toRemove = store.scripts.filter(function (script) {
    return script.config.removed;
  });

  if (toRemove.length) {
    store.scripts = store.scripts.filter(function (script) {
      return !script.config.removed;
    });
    var ids = toRemove.map(function (script) {
      return script.props.id;
    });
    storage.script.removeMulti(ids);
    storage.code.removeMulti(ids);
    storage.value.removeMulti(ids);
  }

  return Promise.resolve(toRemove.length);
}
function removeScript(id) {
  var scriptId = null;
  var i = store.scripts.findIndex(function (item) {
    return id === Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(item, 'props.id');
  });

  if (i >= 0) {
    scriptId = store.scripts[i].props.scriptId;
    store.scripts.splice(i, 1);
    storage.script.remove(id);
    storage.code.remove(id);
    storage.value.remove(id);
  }

  if (scriptId) {
    eventEmitter.fire('scriptRemoved', scriptId);
  }

  Object(_message__WEBPACK_IMPORTED_MODULE_9__[/* sendMessageOrIgnore */ "c"])({
    cmd: 'RemoveScript',
    data: id
  });
  return Promise.resolve();
}
function moveScript(id, offset) {
  var index = store.scripts.findIndex(function (item) {
    return id === Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(item, 'props.id');
  });
  var step = offset > 0 ? 1 : -1;
  var indexStart = index;
  var indexEnd = index + offset;
  var offsetI = Math.min(indexStart, indexEnd);
  var offsetJ = Math.max(indexStart, indexEnd);
  var updated = store.scripts.slice(offsetI, offsetJ + 1);

  if (step > 0) {
    updated.push(updated.shift());
  } else {
    updated.unshift(updated.pop());
  }

  store.scripts = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(store.scripts.slice(0, offsetI)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(updated), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(store.scripts.slice(offsetJ + 1)));
  return normalizePosition();
}

function getUUID(id) {
  var idSec = (id + 0x10bde6a2).toString(16).slice(-8);
  return `${idSec}-${Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getRnd4 */ "h"])()}-${Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getRnd4 */ "h"])()}-${Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getRnd4 */ "h"])()}-${Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getRnd4 */ "h"])()}${Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getRnd4 */ "h"])()}${Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getRnd4 */ "h"])()}`;
}

function saveScript(script, code) {
  var config = script.config || {};
  config.enabled = getInt(config.enabled);
  config.shouldUpdate = getInt(config.shouldUpdate);
  var props = script.props || {};
  var oldScript;

  if (!props.id) {
    store.storeInfo.id += 1;
    props.id = store.storeInfo.id;
  } else {
    oldScript = store.scriptMap[props.id];
  }

  props.uri = Object(_script__WEBPACK_IMPORTED_MODULE_4__[/* getNameURI */ "b"])(script);
  props.scriptId = Object(_script__WEBPACK_IMPORTED_MODULE_4__[/* makeScriptId */ "d"])(script);
  props.uuid = props.uuid || getUUID(props.id);
  props.extId = chrome.runtime.id; // Do not allow script with same name and namespace

  if (store.scripts.some(function (item) {
    var itemProps = item.props || {};
    return props.id !== itemProps.id && props.uri === itemProps.uri;
  })) {
    throw Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* i18n */ "j"])('msgNamespaceConflict');
  }

  if (oldScript) {
    script.config = Object.assign({}, oldScript.config, config);
    script.props = Object.assign({}, oldScript.props, props);
    var index = store.scripts.indexOf(oldScript);
    store.scripts[index] = script;
  } else {
    if (!props.position) {
      store.storeInfo.position += 1;
      props.position = store.storeInfo.position;
    } else if (store.storeInfo.position < props.position) {
      store.storeInfo.position = props.position;
    }

    script.config = config;
    script.props = props;
    store.scripts.push(script);
  }

  return Promise.all([storage.script.dump(script), storage.code.set(props.id, code)]).then(function () {
    eventEmitter.fire('scriptSaved', props.scriptId);
  });
}

function updateScriptInfo(id, data) {
  var script = store.scriptMap[id];
  if (!script) return Promise.reject();
  script.props = Object.assign({}, script.props, data.props);
  script.config = Object.assign({}, script.config, data.config);
  eventEmitter.fire('scriptUpdated', script.props.scriptId); // script.custom = Object.assign({}, script.custom, data.custom);

  return storage.script.dump(script);
}
function getExportData(ids, withValues) {
  var availableIds = ids.filter(function (id) {
    var script = store.scriptMap[id];
    return script && !script.config.removed;
  });
  return Promise.all([Promise.all(availableIds.map(function (id) {
    return getScript({
      id
    });
  })), storage.code.getMulti(availableIds)]).then(function (_ref6) {
    var _ref7 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref6, 2),
        scripts = _ref7[0],
        codeMap = _ref7[1];

    var data = {};
    data.items = scripts.map(function (script) {
      return {
        script,
        code: codeMap[script.props.id]
      };
    });

    if (withValues) {
      return storage.value.getMulti(ids).then(function (values) {
        data.values = values;
        return data;
      });
    }

    return data;
  });
}
var CMD_UPDATE = 'UpdateScript';
var CMD_ADD = 'AddScript';
function parseScript(data) {
  var id = data.id,
      code = data.code,
      message = data.message,
      isNew = data.isNew,
      config = data.config,
      custom = data.custom,
      props = data.props,
      update = data.update;
  var meta = Object(_script__WEBPACK_IMPORTED_MODULE_4__[/* parseMeta */ "f"])(code);
  if (!meta.name) return Promise.reject(Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* i18n */ "j"])('msgInvalidScript'));
  var result = {
    cmd: CMD_UPDATE,
    data: {
      update: {
        message: message == null ? Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* i18n */ "j"])('msgUpdated') : message || ''
      }
    }
  };
  return getScript({
    id,
    meta
  }).then(function (oldScript) {
    var script;

    if (oldScript) {
      if (isNew) throw Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* i18n */ "j"])('msgNamespaceConflict');
      script = Object.assign({}, oldScript);
    } else {
      var _newScript = Object(_script__WEBPACK_IMPORTED_MODULE_4__[/* newScript */ "e"])();

      script = _newScript.script;
      result.cmd = CMD_ADD;
      result.data.isNew = true;
      result.data.update.message = Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* i18n */ "j"])('msgInstalled');
    }

    script.config = Object.assign({}, script.config, config, {
      removed: 0 // force reset `removed` since this is an installation

    });
    script.custom = Object.assign({}, script.custom, custom);
    script.props = Object.assign({}, script.props, {
      lastModified: Date.now(),
      lastUpdated: Date.now()
    }, props);
    script.meta = meta;

    if (!meta.homepageURL && !script.custom.homepageURL && Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* isRemote */ "l"])(data.from)) {
      script.custom.homepageURL = data.from;
    }

    if (Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* isRemote */ "l"])(data.url)) script.custom.lastInstallURL = data.url;
    var position = +data.position;
    if (position) Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectSet */ "d"])(script, 'props.position', position);
    buildPathMap(script, data.url);
    return saveScript(script, code).then(function () {
      return script;
    });
  }).then(function (script) {
    fetchScriptResources(script, data);
    Object.assign(result.data.update, script, update);
    result.data.where = {
      id: script.props.id
    };
    Object(_message__WEBPACK_IMPORTED_MODULE_9__[/* sendMessageOrIgnore */ "c"])(result);
    _plugin_events__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].emit('scriptChanged', result.data);
    return result;
  });
}

function buildPathMap(script, base) {
  var meta = script.meta;
  var baseUrl = base || script.custom.lastInstallURL;
  var pathMap = baseUrl ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(meta.require), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object.values(meta.resources)), [meta.icon]).reduce(function (map, key) {
    if (key) {
      var fullUrl = Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getFullUrl */ "f"])(key, baseUrl);
      if (fullUrl !== key) map[key] = fullUrl;
    }

    return map;
  }, {}) : {};
  script.custom.pathMap = pathMap;
  return pathMap;
}

function fetchScriptResources(script, cache) {
  var meta = script.meta,
      pathMap = script.custom.pathMap; // @require

  meta.require.forEach(function (key) {
    var fullUrl = pathMap[key] || key;
    var cached = Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(cache, ['require', fullUrl]);

    if (cached) {
      storage.require.set(fullUrl, cached);
    } else {
      storage.require.fetch(fullUrl);
    }
  }); // @resource


  Object.values(meta.resources).forEach(function (url) {
    var fullUrl = pathMap[url] || url;
    var cached = Object(_common_object__WEBPACK_IMPORTED_MODULE_3__[/* objectGet */ "a"])(cache, ['resources', fullUrl]);

    if (cached) {
      storage.cache.set(fullUrl, cached);
    } else {
      storage.cache.fetch(fullUrl);
    }
  }); // @icon

  if (Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* isRemote */ "l"])(meta.icon)) {
    var fullUrl = pathMap[meta.icon] || meta.icon;
    storage.cache.fetch(fullUrl, function (_ref8) {
      var getBlob = _ref8.blob;
      return new Promise(function (resolve, reject) {
        var blob = getBlob();
        var url = URL.createObjectURL(blob);
        var image = new Image();

        var free = function free() {
          return URL.revokeObjectURL(url);
        };

        image.onload = function () {
          free();
          resolve();
        };

        image.onerror = function () {
          free();
          reject({
            type: 'IMAGE_ERROR',
            url
          });
        };

        image.src = url;
      });
    });
  }
}

function vacuum() {
  var valueKeys = {};
  var cacheKeys = {};
  var requireKeys = {};
  var codeKeys = {};
  var mappings = [[storage.value, valueKeys], [storage.cache, cacheKeys], [storage.require, requireKeys], [storage.code, codeKeys]];
  return browser.storage.local.get().then(function (data) {
    Object.keys(data).forEach(function (key) {
      mappings.some(function (_ref9) {
        var _ref10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref9, 2),
            substore = _ref10[0],
            map = _ref10[1];

        var prefix = substore.prefix;

        if (key.startsWith(prefix)) {
          // -1 for untouched, 1 for touched, 2 for missing
          map[key.slice(prefix.length)] = -1;
          return true;
        }

        return false;
      });
    });

    var touch = function touch(obj, key) {
      if (obj[key] < 0) obj[key] = 1;else if (!obj[key]) obj[key] = 2;
    };

    store.scripts.forEach(function (script) {
      var id = script.props.id;
      touch(codeKeys, id);
      touch(valueKeys, id);
      if (!script.custom.pathMap) buildPathMap(script);
      var pathMap = script.custom.pathMap;

      script.meta.require.forEach(function (url) {
        touch(requireKeys, pathMap[url] || url);
      });

      Object.values(script.meta.resources).forEach(function (url) {
        touch(cacheKeys, pathMap[url] || url);
      });
      var icon = script.meta.icon;

      if (Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* isRemote */ "l"])(icon)) {
        var fullUrl = pathMap[icon] || icon;
        touch(cacheKeys, fullUrl);
      }
    });
    mappings.forEach(function (_ref11) {
      var _ref12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref11, 2),
          substore = _ref12[0],
          map = _ref12[1];

      Object.keys(map).forEach(function (key) {
        var value = map[key];

        if (value < 0) {
          // redundant value
          substore.remove(key);
        } else if (value === 2 && substore.fetch) {
          // missing resource
          substore.fetch(key);
        }
      });
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRegistry; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


// Module to access tampermonkey database (used for migration)
(function (h) {
  h.rea = {
    globals: window,

    extend(a) {
      var c = function c(a, d) {
        for (var b in a) {
          if (a.hasOwnProperty(b)) {
            if (Object.getOwnPropertyDescriptor(a, b).get) d.__defineGetter__(b, a.__lookupGetter__(b));else {
              var e = a[b],
                  f = typeof e;
              f != 'undefined' && (e === null ? d[b] = e : f == 'object' ? (d[b] = d[b] || {}, c(e, d[b])) : f == 'array' ? (d[b] = d[b] || [], c(e, d[b])) : d[b] = e);
            }
          }
        }
      };

      c(a, h.rea);
    }

  };
  h.rea.extend({
    content: {
      onReady(a) {
        var c = function c() {
          document.webkitVisibilityState !== 'prerender' && (document.removeEventListener('webkitvisibilitychange', c, !1), a());
        };

        document.webkitVisibilityState !== 'prerender' ? a() : document.addEventListener('webkitvisibilitychange', c, !1);
      }

    },
    runtime: function () {
      var a = {};

      a.__defineGetter__('lastError', function () {
        return chrome.runtime.lastError;
      });

      a.__defineGetter__('id', function () {
        return chrome.runtime.id;
      });

      a.__defineGetter__('short_id', function () {
        return a.id.replace(/[^0-9a-zA-Z]/g, '').substr(0, 4);
      });

      return a;
    }(),
    extension: {
      getURL(a) {
        return chrome.runtime.getURL(a);
      },

      sendMessage(a, c) {
        return chrome.runtime.sendMessage(a, c);
      },

      onMessage: {
        addListener(a) {
          return chrome.runtime.onMessage.addListener(a);
        }

      },

      connect(a) {
        return chrome.runtime.connect(a);
      }

    }
  });
  h.rea.extend(function () {
    var a = 20,
        c = '537.33',
        g = !1;

    try {
      g = navigator.userAgent.search('OPR/') != -1;
    } catch (d) {}

    try {
      c = parseInt(navigator.userAgent.match(/AppleWebKit\/([0-9]+\.[0-9]+)/)[1]);
    } catch (b) {}

    try {
      a = parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]);
    } catch (e) {}

    var f = {
      CONSTANTS: {
        STORAGE: {
          SCHEMA: '#schema',
          TYPE: '#storage',
          CONFIG: '#config',
          VERSION: '#version',
          LEGACY_VERSION: 'AWE_version',
          LAST_START: '#laststart',
          UPDATE: '#update',
          BEGGING: '#begging'
        },
        PREFIX: {
          SCRIPT_UID: '@uid#',
          COND: '@re#',
          STORE: '@st#',
          SCRIPT: '@source#',
          EXTERNAL: '@ext#',
          META: '@meta#'
        }
      },
      RUNTIME: {
        BROWSER: g ? 'opera' : 'chrome',
        CHROME: !g,
        OPERA: g,
        BROWSER_VERSION: a,
        WEBKIT_VERSION: c,
        ALLOWS_FAST_DOCUMENT_START: !0,
        ALLOWS_FILE_SCHEME_ACCESS: null,
        MAX_SCRIPTS: 1E3,
        CAN_SAVEAS_ZIP: !0,
        CONTEXT_MENU: !0,
        INCOGNITO_MODE: !0
      },
      ACTIONMENU: {
        COLUMNS: 3,
        CLOSE_ALLOWED: !0
      },
      OPTIONPAGE: {
        CLOSE_ALLOWED: !1
      },
      DB: {
        USE: null,
        DEFAULT: 'chromeStorage'
      },
      XMLHTTPREQUEST: {
        RETRIES: 0,
        PARTIAL_SIZE: 16777216
      },
      DOWNLOAD: {
        SUPPORTED: a >= 31
      },
      SCRIPT_DOWNLOAD: {
        TIMEOUT: 15
      },
      PINGPONG: {
        RETRIES: 10
      },
      MISC: {
        TIMEOUT: 1,
        IDLE_TIMEOUT: 30,
        DISTURBANCE_ALLOWED: 60
      },
      WEBREQUEST: {
        use: !0,
        headers: !0,
        id: 0,
        prefix: 'TM_'
      },
      SYNC: {
        GOOGLE_DRIVE: {
          SUPPORTED: !1,
          HAS_SERVICE_STATUS: !1
        }
      },
      HTML5: {
        LOCALSTORAGE: null
      },
      LOCALE: {
        DEFAULT: null
      },
      REQUESTS: {
        HAS_SENDER_ID: !0,
        INTERNAL_PAGE_PROTOCOL: 'chrome-extension:',

        GET_INTERNAL_PATH_REGEXP(a, b) {
          var c = /(\/|\.|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g;
          return RegExp(`${`${f.REQUESTS.INTERNAL_PAGE_PROTOCOL}//${rea.runtime.id}/`.replace(c, '\\$1')}([a-zA-Z${a ? '\\/' : ''}]*)${(b || '').replace(c, '\\$1')}`);
        },

        GET_INTERNAL_PAGE_REGEXP() {
          return f.REQUESTS.GET_INTERNAL_PATH_REGEXP(!1, '.html');
        }

      },
      OPTIONS: {
        HAS_CSP: !0,
        HAS_TESLA: !g,
        HAS_DOWNLOADS: !0,
        NATIVE_SCRIPT_IMPORT: !0,
        CAN_DOWNLOAD: !0
      }
    };
    return {
      FEATURES: f
    };
  }());
})(window);

(function (g) {
  var d = g.FEATURES;
  g.extend({
    extension: {
      onConnect: {
        addListener(a) {
          return chrome.runtime.onConnect.addListener(a);
        }

      },
      onConnectExternal: {
        addListener(a) {
          return chrome.runtime.onConnectExternal.addListener(a);
        }

      },
      manifest: chrome.runtime.getManifest(),
      inIncognitoContext: chrome.extension.inIncognitoContext,

      getViews(a) {
        return chrome.extension.getViews(a);
      },

      isAllowedFileSchemeAccess(a) {
        return chrome.extension.isAllowedFileSchemeAccess(a);
      },

      urls: {
        prepareForReport(a) {
          return a;
        }

      }
    },
    runtime: {
      onInstalled: {
        addListener(a) {
          chrome.runtime.onInstalled && chrome.runtime.onInstalled.addListener(a);
        }

      },
      onUpdateAvailable: {
        addListener(a) {
          chrome.runtime.onUpdateAvailable && chrome.runtime.onUpdateAvailable.addListener(a);
        }

      }
    },
    tabs: {
      onActivated: {
        addListener(a) {
          return chrome.tabs.onActivated.addListener(a);
        }

      },
      onUpdated: {
        addListener(a) {
          return chrome.tabs.onUpdated.addListener(a);
        }

      },
      onReplaced: {
        addListener(a) {
          if (chrome.tabs.onReplaced) return chrome.tabs.onReplaced.addListener(a);
        }

      },
      onRemoved: {
        addListener(a) {
          return chrome.tabs.onRemoved.addListener(a);
        }

      },

      create(a, b) {
        return chrome.tabs.create(a, b);
      },

      update(a, b, c) {
        return chrome.tabs.update(a, b, c);
      },

      remove(a, b) {
        return chrome.tabs.remove(a, b);
      },

      highlight(a, b) {
        if (a && a.tabs) {
          a.tabs instanceof Array || (a.tabs = [a.tabs]);

          var c = [],
              d,
              f = function f() {
            if (a.tabs.length) {
              var e = a.tabs.pop();
              chrome.tabs.get(e, function (a) {
                void 0 === d && (d = a.windowId);
                a.windowId === d && c.push(a.index);
                f();
              });
            } else {
              return chrome.tabs.highlight({
                windowId: d,
                tabs: c
              }, b);
            }
          };

          f();
        } else b && b();
      },

      getSelected(a, b) {
        return chrome.tabs.getSelected(a, b);
      },

      query(a, b) {
        return chrome.tabs.query(a, b);
      },

      sendMessage(a, b, c) {
        return chrome.tabs.sendMessage(a, b, c);
      }

    },
    webRequest: {
      headerModificationSupported: !0,
      onBeforeRequest: {
        addListener(a, b, c) {
          return chrome.webRequest.onBeforeRequest.addListener(a, b, c);
        },

        removeListener(a) {
          return chrome.webRequest.onBeforeRequest.removeListener(a);
        }

      },
      onBeforeSendHeaders: {
        addListener(a, b, c) {
          return chrome.webRequest.onBeforeSendHeaders.addListener(a, b, c);
        },

        removeListener(a) {
          return chrome.webRequest.onBeforeSendHeaders.removeListener(a);
        }

      },
      onHeadersReceived: {
        addListener(a, b, c) {
          return chrome.webRequest.onHeadersReceived.addListener(a, b, c);
        },

        removeListener(a) {
          return chrome.webRequest.onHeadersReceived.removeListener(a);
        }

      },
      onCompleted: {
        addListener(a, b, c) {
          return chrome.webRequest.onCompleted.addListener(a, b, c);
        },

        removeListener(a) {
          return chrome.webRequest.onCompleted.removeListener(a);
        }

      },

      handlerBehaviorChanged(a) {
        return chrome.webRequest.handlerBehaviorChanged(a);
      }

    },
    webNavigation: {
      supported: !!chrome.webNavigation,
      onCommitted: {
        addListener(a) {
          if (chrome.webNavigation.onCommitted) return chrome.webNavigation.onCommitted.addListener(a);
        }

      }
    },
    browserAction: {
      setIcon(a, b) {
        return chrome.browserAction.setIcon(a, b);
      },

      setTitle(a) {
        return chrome.browserAction.setTitle(a);
      },

      setBadgeText(a) {
        return chrome.browserAction.setBadgeText(a);
      },

      setBadgeBackgroundColor(a) {
        return chrome.browserAction.setBadgeBackgroundColor(a);
      },

      setPopup(a) {
        return chrome.browserAction.setPopup(a);
      }

    },
    storage: {
      onChanged: {
        addListener(a) {
          return chrome.storage.onChanged.addListener(a);
        }

      },
      local: {
        set(a, b) {
          return chrome.storage.local.set(a, b);
        },

        get(a, b) {
          return chrome.storage.local.get(a, b);
        },

        remove(a, b) {
          return chrome.storage.local.remove(a, b);
        },

        clear(a) {
          return chrome.storage.local.clear(a);
        }

      },
      sync: {
        set(a, b) {
          return chrome.storage.sync.set(a, b);
        },

        get(a, b) {
          return chrome.storage.sync.get(a, b);
        },

        remove(a, b) {
          return chrome.storage.sync.remove(a, b);
        },

        clear(a) {
          return chrome.storage.sync.clear(a);
        }

      }
    },
    syncFileSystem: {
      onFileStatusChanged: {
        addListener(a) {
          return chrome.syncFileSystem.onFileStatusChanged.addListener(a);
        }

      },
      onServiceStatusChanged: {
        addListener(a) {
          return chrome.syncFileSystem.onServiceStatusChanged.addListener(a);
        }

      },
      supported: !!chrome.syncFileSystem
    },
    contentSettings: {
      javascript: {
        set(a, b) {
          return chrome.contentSettings.javascript.set(a, b);
        },

        get(a, b) {
          return chrome.contentSettings.javascript.get(a, b);
        },

        clear(a, b) {
          return chrome.contentSettings.javascript.clear(a, b);
        }

      }
    },
    downloads: {
      onChanged: {
        addListener(a) {
          return chrome.downloads.onChanged.addListener(a);
        }

      },

      download(a, b) {
        return chrome.downloads.download(a, b);
      }

    },
    commands: {
      supported: !(!chrome.commands || !chrome.commands.onCommand),
      onCommand: {
        addListener(a) {
          return chrome.commands.onCommand.addListener(a);
        }

      }
    },
    management: {
      getAll(a) {
        return chrome.management.getAll(a);
      },

      setEnabled(a, b, c) {
        return chrome.management.setEnabled(a, b, c);
      },

      uninstall(a, b, c) {
        return chrome.management.uninstall(a, b, c);
      }

    },
    notifications: {
      onPermissionLevelChanged: {
        addListener(a) {
          return chrome.notifications.onPermissionLevelChanged.addListener(a);
        }

      },
      onClicked: {
        addListener(a) {
          return chrome.notifications.onClicked.addListener(a);
        }

      },
      onClosed: {
        addListener(a) {
          return chrome.notifications.onClosed.addListener(a);
        }

      },
      supported: !!(chrome.notifications && chrome.notifications.getPermissionLevel && chrome.notifications.onPermissionLevelChanged && chrome.notifications.onClicked),

      getPermissionLevel(a) {
        return chrome.notifications.getPermissionLevel(a);
      },

      create(a, b, c) {
        return chrome.notifications.create(a, b, c);
      },

      clear(a, b) {
        return chrome.notifications.clear(a, b);
      }

    },
    contextMenus: function () {
      var a = !!(d.RUNTIME.CONTEXT_MENU && chrome.contextMenus && chrome.contextMenus.create && chrome.contextMenus.update && chrome.contextMenus.remove);
      return a ? {
        supported: a,

        create(a, c) {
          return chrome.contextMenus.create(a, c);
        },

        update(a, c, d) {
          return chrome.contextMenus.update(a, c, d);
        },

        remove(a, c) {
          return chrome.contextMenus.remove(a, c);
        },

        removeAll(a) {
          return chrome.contextMenus.removeAll(a);
        },

        onClicked: {
          addListener(a) {
            return chrome.contextMenus.onClicked.addListener(a);
          }

        }
      } : {
        supported: !1
      };
    }(),
    permissions: {
      supported: !0,

      getAll(a) {
        return chrome.permissions.getAll(a);
      },

      request(a, b) {
        return chrome.permissions.request(a, b);
      },

      remove(a, b) {
        return chrome.permissions.remove(a, b);
      }

    },
    i18n: {
      native_support: !0,

      getMessage() {
        return chrome.i18n.getMessage.apply(this, arguments);
      },

      getUILanguage() {
        return chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : null;
      },

      getAcceptLanguages(a) {
        return chrome.i18n.getAcceptLanguages ? chrome.i18n.getAcceptLanguages(a) : a([]);
      }

    },
    idle: {
      queryState(a, b) {
        return chrome.idle.queryState(a, b);
      }

    },
    other: function () {
      var a = {
        openDatabase(a, c, d, f) {
          var e = window.openDatabase;
          if (e) return e(a, c, d, f);
        },

        requestFileSystem(a, c, d, f) {
          var e = window.requestFileSystem || window.webkitRequestFileSystem;
          if (e) return e(a, c, d, f);
          f('not supported');
        }

      };

      a.__defineGetter__('webkitNotifications', function () {
        return window.webkitNotifications;
      });

      return a;
    }()
  });

  (function () {
    try {
      d.HTML5.LOCALSTORAGE = window.localStorage;
    } catch (a) {
      console.warn('prep: window.localStorage will be unavailable');
    }

    d.DB.USE = d.DB.DEFAULT;

    try {
      d.HTML5.LOCALSTORAGE && (d.DB.NO_WARNING = d.HTML5.LOCALSTORAGE.getItem('#brokenprofile') === 'nowarning', d.DB.USE = d.HTML5.LOCALSTORAGE.getItem(d.CONSTANTS.STORAGE.TYPE) || d.DB.DEFAULT);
    } catch (b) {
      console.warn('prep: error at storage type detection', b);
    }

    g.extension.isAllowedFileSchemeAccess(function (a) {
      d.RUNTIME.ALLOWS_FILE_SCHEME_ACCESS = a;
      d.INITIALIZED = !0;
    });
  })();
})(window.rea); // registry.js


(function (m) {
  var e = function () {
    var k = [],
        e = function e(a, c, b) {
      a = typeof a === 'string' ? [a] : a;

      var g = 1,
          d = function d() {
        return a.every(function (a) {
          return !!h[a];
        });
      },
          e = function e() {
        k.push(function () {
          d() ? b() : e();
        });
      },
          f = function f(a) {
        --g == 0 && b && (c || d() ? b() : e());
      };

      a.forEach(function (a) {
        void 0 === h[a] && (h[a] = null, l.loadFile(rea.extension.getURL(`${a}.js`), function () {
          f(a);
        }), g++);
      });
      f();
    },
        h = {},
        d = {},
        f = {},
        l = {
      init() {},

      verify(a) {
        var c = [],
            b;

        for (b in d) {
          d.hasOwnProperty(b) && (d[b].length > 3 && d[b].substr(0, 3) === '###' ? console.debug(`self.verify: development version detected @ ${b}`) : d[b] !== a && (console.warn(`self.verify: expected version ${a} and detected ${d[b]} @ ${b}`), c.push({
            name: b,
            version: d[b],
            expected: a
          })));
        }

        return c;
      },

      register(a, c, b, g) {
        if (!h[a] || g) {
          for (d[a] = c, h[a] = b, a = k, k = []; a.length;) {
            a.pop()();
          }
        }
      },

      registerRaw(a, c, b, g) {
        if (!f[a] || g) d[a] = c, f[a] = b;
      },

      vendor(a, c) {
        return e(a, !0, c);
      },

      require(a, c) {
        return e(a, !1, c);
      },

      getRaw(a) {
        var c = null;
        if (void 0 !== f[a]) c = f[a];else {
          var b = rea.extension.getURL(a);

          try {
            var _d = new XMLHttpRequest();

            _d.open('GET', b, !1);

            _d.send(null);

            (c = _d.responseText) || console.log(`WARN: content of ${a} is null!`);
          } catch (e) {
            console.log(`getRawContent ${e}`);
          }
        }
        return c;
      },

      loadFile(a, c) {
        try {
          var b = document.createElement('script');
          b.setAttribute('src', a);

          b.onload = function () {
            c && c(a);
          };

          (document.head || document.body || document.documentElement || document).appendChild(b);
        } catch (d) {
          console.log(`Error: self.load ${a} failed! ${d.message}`);
        }
      },

      isDevVersion(a) {
        return d[a] && d[a].substr(0, 3) === '###';
      },

      get(a) {
        var c,
            b = h[a];
        typeof b === 'function' ? (c = Array.prototype.slice.call(arguments, 1), c = b.apply(this, c)) : b && (c = b);
        return c;
      }

    };

    return l;
  }();

  window.setTimeout(e.init, 1);
  m.Registry = e;
})(typeof rea !== 'undefined' ? rea.globals : window); // promise.js


(function (k) {
  var c = function c(a) {
    var b = function () {
      var b,
          a,
          d = [];

      d.notify = function (b) {
        d.forEach(function (a) {
          a(b);
        });
      };

      var e = [];
      e._push = e.push;

      e.push = function () {
        e._push.apply(e, arguments);

        e.check();
      };

      e.check = function () {
        if (void 0 !== b) {
          for (var f; e.length;) {
            if (f = e.shift(), void 0 === f.state || f.state === b) a = (typeof f.f === 'function' ? f.f.call(g, a) : f.f) || a;
          }
        }
      };

      var g = {
        promise() {
          return g;
        },

        done(b) {
          e.push({
            state: !0,
            f: b
          });
          return g;
        },

        fail(b) {
          e.push({
            state: !1,
            f: b
          });
          return g;
        },

        always(b) {
          e.push({
            f: b
          });
          return g;
        },

        progress(b) {
          d.push(b);
          return g;
        },

        then(b, d, e) {
          return c(function (c) {
            [{
              fn: 'done',
              forward: 'resolve',
              f: b
            }, {
              fn: 'fail',
              forward: 'reject',
              f: d
            }, {
              fn: 'progress',
              forward: 'notify',
              f: e
            }].forEach(function (b) {
              g[b.fn](function () {
                var d = typeof b.f === 'function',
                    f = d ? b.f(a) : void 0;
                f && typeof f.promise === 'function' ? f.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[b.forward].apply(c, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(d ? [f] : arguments));
              });
            });
          }).promise();
        },

        each(b) {
          return g.then(function (a) {
            a instanceof Array || (a = arguments);
            return c.when(a.map(function (a) {
              return b(a);
            }));
          });
        },

        iterate(b) {
          return g.then(function (a) {
            a instanceof Array || (a = arguments);

            var d = 0,
                e = c(),
                h = function h() {
              if (d < a.length) {
                var _c = a[d++];
                (_c = b(_c)) && _c.promise ? _c.promise().done(h).fail(e.reject) : h();
              } else e.resolve(a);
            };

            h();
            return e.promise();
          });
        }

      };
      return {
        get() {
          return g;
        },

        try_resolve(c) {
          void 0 === b && (b = !0, a = c);
          e.check();
        },

        try_reject(c) {
          void 0 === b && (b = !1, a = c);
          e.check();
        },

        do_notify(b) {
          d.notify(b);
        }

      };
    }(),
        d = {
      promise() {
        return b.get();
      },

      resolve() {
        return b.try_resolve.apply(this, arguments);
      },

      reject() {
        return b.try_reject.apply(this, arguments);
      },

      notify() {
        return b.do_notify.apply(this, arguments);
      }

    };

    a && a(d);
    return d;
  };

  c.Pledge = function (a) {
    var b = c();
    b.resolve(a);
    return b.promise();
  };

  c.Breach = function (a) {
    var b = c();
    b.reject(a);
    return b.promise();
  };

  c.onebyone = function (a) {
    var b = [];
    return a.reduce(function (a, c) {
      return a.then(c).done(function (a) {
        b = b.concat(a instanceof Array ? a : [a]);
      });
    }, c.Pledge()).then(function () {
      return b;
    });
  };

  c.sidebyside = function (a) {
    a instanceof Array || (a = arguments);
    var b = c(),
        d = a.length;
    d ? a.forEach(function (a) {
      a && a.promise && a.promise().always(function () {
        --d === 0 && b.resolve();
      });
    }) : b.resolve();
    return b.promise();
  };

  c.when = function (a) {
    a instanceof Array || (a = arguments);
    var b = c(),
        d = a.length,
        h = [];
    d ? a.forEach(function (a) {
      a && a.promise && a.promise().fail(function () {
        b.reject(h);
        d = -1;
      }).done(function (a) {
        h.push(a);
        --d === 0 && b.resolve(h);
      });
    }) : b.resolve(h);
    return b.promise();
  };

  k.Registry ? k.Registry.register('promise', '58', function () {
    return c;
  }) :  true ? module.exports.Deferred = c : undefined;
})(typeof window !== 'undefined' ? window : GLOBAL); // storage.js


(function () {
  Registry.require(['promise'], function () {
    var g = rea.FEATURES,
        e = Registry.get('promise'),
        t = !0,
        h = !1,
        w = [],
        m = !0,
        v = function () {
      var a = [g.CONSTANTS.STORAGE.VERSION, g.CONSTANTS.STORAGE.TYPE],
          b = {};
      a.forEach(function (a) {
        b[a] = !0;
      });
      return {
        keys: a,

        has(a) {
          return !!b[a];
        }

      };
    }(),
        n = g.HTML5.LOCALSTORAGE,
        C = function C() {
      return rea.other.openDatabase('tmStorage', '1.0', 'TM Storage', 31457280);
    },
        D = function D(a) {
      return a;
    },
        x = function x(a, b) {
      if (!a) return b;
      var c = a[0];
      a = a.substring(1);

      switch (c) {
        case 'b':
          return a == 'true';

        case 'n':
          return Number(a);

        case 'o':
          try {
            return JSON.parse(a);
          } catch (e) {
            console.error(`Storage: getValue ERROR: ${e.message}`);
          }

          return b;

        default:
          return a;
      }
    },
        y = function y(a) {
      var b = (typeof a)[0];

      switch (b) {
        case 'o':
          try {
            a = b + JSON.stringify(a);
          } catch (c) {
            console.error(`Storage: setValue ERROR: ${c.message}`);
            return;
          }

          break;

        default:
          a = b + a;
      }

      return a;
    },
        r = function r(a, b) {
      var c = e(),
          d = Array.prototype.slice.call(arguments, 2),
          f;
      typeof a === 'string' ? a == g.DB.USE && b == 'clean' ? console.warn("Storage: can't clean currently active storage") : f = l.implementations[a][b] : f = a[b];

      if (f) {
        if (d = f.apply(this, d), typeof d === 'object' && d.then) {
          d.then(function () {
            c.resolve.apply(this, arguments);
          }, function (a) {
            c.reject();
          });
        } else return d;
      } else c.resolve();

      return c.promise();
    },
        z = function z(a, b) {
      var c = e(),
          d = [];
      Object.getOwnPropertyNames(b).forEach(function (c) {
        void 0 !== b[c] && d.push(r(a, 'setValue', c, b[c]));
      });
      e.when(d).done(function () {
        c.resolve();
      });
      return c.promise();
    },
        A = function A(a, b) {
      var c = {};
      b.forEach(function (b) {
        c[b] = r(a, 'getValue', b);
      });
      return c;
    },
        l = {
      implementations: {
        localStorage: function () {
          var a = {
            setValue(a, c) {
              var d = e();
              h && console.log(`localStorage: setValue -> ${a}`);
              var f = y(c);
              m && n.setItem(a, f);
              d.resolve();
              return d.promise();
            },

            getValue(a, c) {
              h && console.log(`Storage: getValue -> ${a}`);
              return x(n.getItem(a, c), c);
            },

            deleteAll() {
              var b = e();
              h && console.log('localStorage: deleteAll()');
              m && a.listValues().forEach(function (a) {
                v.has(a) || n.removeItem(a);
              });
              b.resolve();
              return b.promise();
            },

            deleteValue(a) {
              var c = e();
              h && console.log(`localStorage: deleteValue -> ${a}`);
              m && n.removeItem(a);
              c.resolve();
              return c.promise();
            },

            listValues() {
              h && console.log('localStorage: listValues');

              for (var a = [], c = 0; c < n.length; c++) {
                a.push(D(n.key(c)));
              }

              return a;
            }

          };
          return {
            options: {},
            methods: a
          };
        }(),
        sql: function () {
          var a = null,
              b = null,
              c = function c() {
            var a = e();
            b.db.transaction(function (c) {
              c.executeSql('CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)', [], a.resolve, b.onError);
            });
            return a.promise();
          },
              d = function d() {
            var a = e();
            b = {
              db: C(),

              onSuccess(a, b) {
                h && console.log('webSQL: localDB Success ');
              },

              onError(a, b) {
                console.error('webSQL: localDB Error ', b);
              }

            };
            b.db ? c().done(a.resolve) : (b = null, a.reject());
            return a.promise();
          },
              f = {
            setValue(c, p) {
              var q = e();
              h && console.log(`Storage: setValue -> ${c}`);
              var d = y(p);
              m && (a[c] ? b.db.transaction(function (a) {
                a.executeSql('UPDATE config SET value=? WHERE name=?', [d, c], function () {
                  rea.runtime.lastError && console.warn(rea.runtime.lastError);
                  q.resolve();
                }, b.onError);
              }) : b.db.transaction(function (a) {
                a.executeSql('INSERT INTO config(name, value) VALUES (?,?)', [c, d], function () {
                  rea.runtime.lastError && console.warn(rea.runtime.lastError);
                  q.resolve();
                }, b.onError);
              }));
              a[c] = d;
              m || q.resolve();
              return q.promise();
            },

            getValue(b, c) {
              h && console.log(`webSQL: getValue -> ${b}`);
              return x(a[b], c);
            },

            deleteAll() {
              var d = e();
              h && console.log('webSQL: deleteAll()');
              var p = A(f, v.keys);
              a = p;
              m ? b.db.transaction(function (a) {
                a.executeSql('DROP TABLE config', [], function () {
                  c().done(function () {
                    z(f, p).done(d.resolve);
                  });
                }, b.onError);
              }) : d.resolve();
              return d.promise();
            },

            deleteValue(c) {
              var p = e();
              h && console.log(`webSQL: deleteValue -> ${c}`);
              delete a[c];
              m ? b.db.transaction(function (a) {
                a.executeSql('DELETE FROM config WHERE name=?', [c], p.resolve, b.onError);
              }) : p.resolve();
              return p.promise();
            },

            listValues() {
              h && console.log('webSQL: listValues');
              var b = [];
              Object.getOwnPropertyNames(a).forEach(function (a) {
                b.push(a);
              });
              return b;
            },

            isWorking() {
              return e.Pledge();
            }

          };

          return {
            init() {
              var c = e(),
                  p = function p(b, k) {
                a = {};

                if (k) {
                  for (var s = 0; s < k.rows.length; s++) {
                    a[k.rows.item(s).name] = k.rows.item(s).value;
                  }
                }

                c.resolve();
              },
                  q = function q() {
                a ? c.resolve() : b.db.transaction(function (a) {
                  a.executeSql('SELECT * FROM config', [], p, b.onError);
                });
              };

              b ? q() : d().done(q).fail(c.reject);
              return c.promise();
            },

            clean() {
              a = null;
              return e.Pledge();
            },

            options: {},
            methods: f
          };
        }(),
        chromeStorage: function () {
          var a = null,
              b = !1,
              c = !1,
              d = rea.extension.inIncognitoContext ? 'incognito' : 'normal',
              f = function f(b, e) {
            if (m && c && e == 'local') {
              for (var _f in b) {
                var k = b[_f];
                h && console.log('si: local storage key', _f, '@', e, 'changed:', k);
                k.newValue ? k.newValue.origin !== d && (a[_f] = k.newValue.value, l.notifyDifferentOriginChangeListeners(_f, k.newValue)) : delete a[_f];
              }
            }
          },
              g = {
            setValue(b, c) {
              var f = e();
              h && console.log('chromeStorage: setValue -> ', b, c);
              a[b] = c;

              if (m) {
                var k = {};
                k[b] = {
                  origin: d,
                  value: c
                };
                rea.storage.local.set(k, f.resolve);
              } else f.resolve();

              return f.promise();
            },

            getValue(b, c) {
              var e = void 0 === a[b] ? c : a[b];
              h && console.log('chromeStorage: getValue -> ', b, e);
              return e;
            },

            deleteAll() {
              var b = e();
              h && console.log('chromeStorage: deleteAll()');
              var c = A(g, v.keys);
              a = c;
              m ? rea.storage.local.clear(function () {
                z(g, c).done(b.resolve);
              }) : b.resolve();
              return b.promise();
            },

            deleteValue(b) {
              var c = e();
              h && console.log(`chromeStorage: deleteValue -> ${b}`);
              delete a[b];
              m ? rea.storage.local.remove(b, c.resolve) : c.resolve();
              return c.promise();
            },

            listValues() {
              h && console.log('chromeStorage: listValues');
              var b = [];
              Object.getOwnPropertyNames(a).forEach(function (a) {
                b.push(a);
              });
              return b;
            },

            setTemporary(a) {
              m = !a;
              c = !0;
            },

            isSupported() {
              return e.Pledge();
            },

            isWorking() {
              var a = e(),
                  b = 0,
                  c = new Date().getTime(),
                  k = {};
              k.foo = c;

              var s = function s(c) {
                ++b <= 5 ? (console.warn('storage:', c || 'storage set/get test failed!'), window.setTimeout(d, b * b * 100)) : (console.warn('storage: storage set/get test finally failed!'), u && (window.clearTimeout(u), u = null, a.reject()));
              },
                  u = window.setTimeout(function () {
                u = null;
              }, 18E4),
                  d = function d() {
                t && console.log('Storage: test -> start');
                var b = new Date().getTime();
                rea.storage.local.set(k, function () {
                  t && console.log(`Storage: test -> set after ${new Date().getTime() - b}ms`);
                  rea.storage.local.get('foo', function (k) {
                    t && console.log(`Storage: test -> get after ${new Date().getTime() - b}ms`);

                    if (k) {
                      if (k.foo !== c) return s(`read value is different ${JSON.stringify(k.foo)} != ${JSON.stringify(c)}`);
                      if (rea.runtime.lastError) return s(rea.runtime.lastError && rea.runtime.lastError.message || 'lastError is set');
                    } else return s(`read value is${k}`);

                    rea.storage.local.remove('foo', function () {
                      t && console.log(`Storage: test -> remove after ${new Date().getTime() - b}ms`);
                      u && (window.clearTimeout(u), u = null, a.resolve());
                    });
                  });
                });
              };

              d();
              return a.promise();
            }

          };

          return {
            init() {
              var c = e();
              a ? c.resolve() : rea.storage.local.get(null, function (e) {
                a = {};

                for (var _d2 in e) {
                  var k = e[_d2];
                  a[_d2] = k && k.hasOwnProperty('origin') && k.hasOwnProperty('value') ? k.value : k;
                }

                b || (rea.storage.onChanged.addListener(f), b = !0);
                c.resolve();
              });
              return c.promise();
            },

            clean() {
              var b = e();
              a = null;
              b.resolve();
              return b.promise();
            },

            options: {},
            methods: g
          };
        }(),
        file: function () {
          var a = null,
              b = null,
              c = function c() {
            var a = e(),
                c = function c(b) {
              console.warn('fileStorage: listFiles() error:', b);
              a.reject();
            };

            b.root.getDirectory('data', {
              create: !0
            }, function (b) {
              var e = b.createReader(),
                  d = [],
                  f = function f() {
                e.readEntries(function (b) {
                  b.length ? (d = d.concat(b), f()) : a.resolve(d);
                }, c);
              };

              f();
            }, c);
            return a.promise();
          },
              d = function d(a, c) {
            var d = e(),
                f = function f(b) {
              console.warn('fileStorage: writeFileData(', a, ') error:', b);
              d.reject();
            };

            b.root.getDirectory('data', {
              create: !0
            }, function (b) {
              b.getFile(a, {
                create: !0
              }, function (a) {
                a.createWriter(function (a) {
                  a.onwriteend = function (b) {
                    a.onwriteend = function (a) {
                      d.resolve();
                    };

                    a.onerror = f;
                    b = new Blob([c], {
                      type: 'text/plain'
                    });
                    a.write(b);
                  };

                  a.truncate(0);
                }, f);
              }, f);
            }, f);
            return d.promise();
          },
              f = function f(a) {
            var c = e(),
                d = function d(b) {
              console.warn('fileStorage: getFileData(', a, ') error:', b);
              c.reject();
            },
                f = function f(a) {
              var b = new FileReader();

              b.onloadend = function () {
                c.resolve(this.result);
              };

              b.onerror = d;
              b.onabort = d;
              b.readAsText(a);
            };

            b.root.getDirectory('data', {
              create: !0
            }, function (b) {
              b.getFile(a, {}, function (a) {
                a.file(function (a) {
                  f(a);
                }, d);
              }, d);
            }, d);
            return c.promise();
          },
              g = function g(a) {
            var c = e(),
                d = function d(b) {
              console.warn('fileStorage: deleteFile(', a, ') error:', b);
              c.reject();
            };

            b.root.getDirectory('data', {
              create: !0
            }, function (b) {
              b.getFile(a, {
                create: !1
              }, function (a) {
                a.remove(c.resolve, d);
              }, d);
            }, d);
            return c.promise();
          },
              l = function l() {
            var a = e(),
                c = function c(b) {
              console.warn('fileStorage: removeDir() error:', b);
              a.reject();
            };

            b.root.getDirectory('data', {
              create: !0
            }, function (b) {
              b.removeRecursively(a.resolve, c);
            }, c);
            return a.promise();
          },
              q = function q() {
            var b = e();
            a = {};
            var d = [];
            c().done(function (c) {
              c.forEach(function (b) {
                typeof b !== 'string' && (b = b.name);
                d.push(f(b).always(function (c) {
                  a[b] = c;
                }));
              });
              e.when(d).always(function () {
                b.resolve();
              });
            }).fail(b.resolve);
            return b.promise();
          },
              B = {
            isSupported() {
              var a = e();
              window.File && window.FileReader && window.FileList && window.Blob ? a.resolve() : a.reject();
              return a.promise();
            },

            isWorking() {
              return e.Pledge();
            },

            setValue(b, c) {
              var f = e();
              h && console.log(`fileStorage: setValue -> ${b}`);
              var g = y(c);
              a[b] = g;
              m ? d(b, g).always(f.resolve) : f.resolve();
              return f.promise();
            },

            getValue(b, c) {
              h && console.log(`fileStorage: getValue -> ${b}`);
              return x(a[b], c);
            },

            deleteAll() {
              var b = e();
              h && console.log('fileStorage: deleteAll()');
              var c = A(B, v.keys);
              a = c;
              m ? l().always(function () {
                z(B, c).always(b.resolve);
              }) : b.resolve();
              return b.promise();
            },

            deleteValue(b) {
              var c = e();
              h && console.log(`fileStorage: deleteValue -> ${b}`);
              delete a[b];
              m ? g(b).always(c.resolve) : c.resolve();
              return c.promise();
            },

            listValues() {
              h && console.log('fileStorage: listValues');
              var b = [];
              Object.getOwnPropertyNames(a).forEach(function (a) {
                b.push(a);
              });
              return b;
            }

          };

          return {
            init() {
              var c = e();
              a ? c.resolve() : rea.other.requestFileSystem(window.PERSISTENT, 31457280, function (a) {
                b = a;
                q().done(c.resolve);
              }, function (a) {
                a && console.warn('fileStorage: ', a);
                c.reject();
              });
              return c.promise();
            },

            clean() {
              a = null;
              return e.Pledge();
            },

            options: {},
            methods: B
          };
        }()
      },

      migrate(a, b, c) {
        var d = e(),
            f = l.implementations[a],
            g = l.implementations[b];
        c = c || {};
        f && g ? (h && console.log('Migration: from', a, 'to', b), r(a, 'init').then(function () {
          return r(b, 'init');
        }).then(function () {
          var a = e(),
              b = [];
          f.methods.listValues().forEach(function (a) {
            var d = f.methods.getValue(a);
            c.drop && b.push(f.methods.deleteValue(a));
            h && console.log(`Migration: copy value of ${a}`);
            b.push(g.methods.setValue(a, d));
          });
          e.when(b).done(function () {
            a.resolve();
          });
          return a.promise();
        }).then(function () {
          return r(b, 'clean');
        }).then(function () {
          return r(a, 'clean');
        }).done(function () {
          d.resolve();
        }).fail(function () {
          d.reject();
        })) : (console.error('Migration: unknown storage implementation(s) ', a, b), d.reject());
        return d.promise();
      },

      isSupported() {
        return e.Pledge();
      },

      isWorking() {
        return e.Pledge();
      },

      setTemporary(a) {
        m = !a;
      },

      init() {
        t && console.log(`Storage: use ${g.DB.USE}`);
        Object.getOwnPropertyNames(l.implementations[g.DB.USE].methods).forEach(function (a) {
          l.__defineGetter__(a, function () {
            return l.implementations[g.DB.USE].methods[a];
          });
        });
        return l.implementations[g.DB.USE].init ? l.implementations[g.DB.USE].init() : e.Pledge();
      },

      getValues(a, b) {
        var c = {};
        b || (b = {});
        Object.getOwnPropertyNames(a).forEach(function (a) {
          c[a] = l.implementations[g.DB.USE].getValue(a, b[a]);
        });
        return c;
      },

      factoryReset() {
        n.removeItem(g.CONSTANTS.STORAGE.LEGACY_VERSION);
        return l.deleteAll();
      },

      isWiped() {
        if (g.DB.USE === 'localStorage') return e.Pledge(!1);
        var a = e(),
            b = l.getValue(g.CONSTANTS.STORAGE.VERSION),
            c = !1;
        n.getItem(g.CONSTANTS.STORAGE.LEGACY_VERSION) && !b && (l.listValues().length ? console.warn('storage: unable to find version information') : c = !0);
        a.resolve(c);
        return a.promise();
      },

      setVersion(a, b) {
        var c = e();
        m ? (n.setItem(g.CONSTANTS.STORAGE.LEGACY_VERSION, a), l.setValue(g.CONSTANTS.STORAGE.VERSION, a).then(function () {
          return b ? l.setValue(g.CONSTANTS.STORAGE.SCHEMA, b) : e.Pledge();
        }).always(c.resolve)) : c.resolve();
        return c.promise();
      },

      getVersion(a) {
        var b = e(),
            c = l.getValue(g.CONSTANTS.STORAGE.VERSION) || l.getValue(g.CONSTANTS.STORAGE.LEGACY_VERSION) || n.getItem(g.CONSTANTS.STORAGE.LEGACY_VERSION);
        c ? b.resolve(c) : r('sql', 'init').then(function (b) {
          c = l.implementations.sql.methods.getValue(g.CONSTANTS.STORAGE.LEGACY_VERSION) || a;
          return r('sql', 'clean');
        }).always(function () {
          b.resolve(c || a);
        });
        return b.promise();
      },

      getSchemaVersion() {
        return l.getValue(g.CONSTANTS.STORAGE.SCHEMA, '3.5');
      },

      debug(a, b) {
        h |= b;
        t |= a;
      },

      addDifferentOriginChangeListener(a, b) {
        w.push({
          search: a,
          cb: b
        });
      },

      notifyDifferentOriginChangeListeners(a, b) {
        for (var c in w) {
          var d = w[c];
          a.search(d.search) == 0 && d.cb(a, b);
        }
      },

      recover(a, b) {
        typeof a === 'string' && (a = {
          method: a,
          storages: ['sql', 'chromeStorage']
        });
        var c = {};
        a.storages.forEach(function (a) {
          c[a] = !0;
        });

        if (a.method == 'log') {
          var d = null,
              f,
              e,
              g = [{
            method: 'sql',

            fn(a) {
              console.debug('check sql storage for data...');

              try {
                e = C();
                if (rea.runtime.lastError || !e) return d = rea.runtime.lastError, a();
                e.transaction(function (b) {
                  b.executeSql('CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)', [], function () {
                    console.debug('sql table found/created');
                    a();
                  }, function (b, c) {
                    d = c;
                    a();
                  });
                });
              } catch (b) {
                d = b, window.setTimeout(a, 1);
              }
            }

          }, {
            method: 'sql',

            fn(a) {
              var b = {};
              e.transaction(function (c) {
                c.executeSql('SELECT * FROM config', [], function (c, d) {
                  if (d) {
                    for (var _e = 0; _e < d.rows.length; _e++) {
                      b[d.rows.item(_e).name] = d.rows.item(_e).value;
                    }
                  }

                  f = b;
                  window.setTimeout(a, 1);
                }, function (b, c) {
                  d = c;
                  a();
                });
              });
            }

          }, {
            method: 'sql',

            fn(a) {
              var b = f ? Object.getOwnPropertyNames(f) : [];
              f && b.length ? (console.debug('found values:'), b.forEach(function (a) {
                console.debug('    ', a, f[a] && f[a].length > 30 ? f[a].substr(0, 30) : f[a]);
              })) : (console.warn('no data found'), c.sql = !1);
              window.setTimeout(a, 1);
            }

          }, {
            method: 'chromeStorage',

            fn(a) {
              console.debug('check chromeStorage for data...');
              rea.storage.local.get(null, function (b) {
                f = b;
                a();
              });
            }

          }, {
            method: 'chromeStorage',

            fn(a) {
              var b = f ? Object.getOwnPropertyNames(f) : [];
              f && b.length ? (console.debug('found values:'), b.forEach(function (a) {
                console.debug('    ', a, f[a] && f[a].length > 30 ? f[a].substr(0, 30) : f[a]);
              })) : (console.warn('no data found'), c.chromeStorage = !1, window.setTimeout(a, 1));
            }

          }],
              h = 0,
              l = function l() {
            if (d) console.warn('error:', d);else {
              for (; g[h];) {
                if (c[g[h].method]) {
                  g[h].fn(l);
                  h++;
                  return;
                }

                h++;
              }
            }
            b && b();
          };

          l();
        }
      }

    };

    Registry.register('storage', '58', function () {
      return l;
    });
  });
})();

function getRea() {
  return window.rea;
}
function getRegistry() {
  return window.Registry;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(167)(module)))

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tabOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tabClose; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _common_ua__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);


var openers = {};
browser.tabs.onRemoved.addListener(function (id) {
  var openerId = openers[id];

  if (openerId) {
    browser.tabs.sendMessage(openerId, {
      cmd: 'TabClosed',
      data: id
    }).catch(_common__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "n"]);
    delete openers[id];
  }
});
function tabOpen(data, src) {
  var url = data.url,
      active = data.active;
  var srcTab = src.tab || {};
  var options = {
    url,
    active,
    windowId: srcTab.windowId,
    index: srcTab.index + 1
  }; // Firefox Android does not support `openerTabId` field, it fails if this field is passed

  if (!_common_ua__WEBPACK_IMPORTED_MODULE_1__[/* isFirefox */ "c"] || !_common_ua__WEBPACK_IMPORTED_MODULE_1__[/* isAndroid */ "a"]) {
    options.openerTabId = srcTab.id;
  }

  return browser.tabs.create(options).then(function (tab) {
    var id = tab.id;
    openers[id] = srcTab.id;
    return {
      id
    };
  });
}
function tabClose(data, src) {
  var tabId = data && data.id || src.tab && src.tab.id;
  if (tabId) browser.tabs.remove(tabId);
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setClipboard; });
var textarea = document.createElement('textarea');
document.body.appendChild(textarea);
var clipboardData;

function onCopy(e) {
  e.preventDefault();
  var _clipboardData = clipboardData,
      type = _clipboardData.type,
      data = _clipboardData.data;
  e.clipboardData.setData(type || 'text/plain', data);
}

document.addEventListener('copy', onCopy, false);
function setClipboard(data) {
  clipboardData = data;
  textarea.focus();
  var ret = document.execCommand('copy', false, null);

  if (!ret && process.env.DEBUG) {
    console.warn('Copy failed!');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkUpdate; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);





var processes = {};

function doCheckUpdate(script) {
  var update = {
    checking: true
  };
  var res = {
    cmd: 'UpdateScript',
    data: {
      where: {
        id: script.props.id
      },
      update
    }
  };
  var downloadURL = script.custom.downloadURL || script.meta.downloadURL || script.custom.lastInstallURL;
  var updateURL = script.custom.updateURL || script.meta.updateURL || downloadURL;

  var okHandler = function okHandler(_ref) {
    var data = _ref.data;
    var meta = Object(_script__WEBPACK_IMPORTED_MODULE_2__[/* parseMeta */ "f"])(data);
    if (Object(_script__WEBPACK_IMPORTED_MODULE_2__[/* compareVersion */ "a"])(script.meta.version, meta.version) < 0) return Promise.resolve();
    update.checking = false;
    update.message = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('msgNoUpdate');
    Object(_message__WEBPACK_IMPORTED_MODULE_4__[/* sendMessageOrIgnore */ "c"])(res);
    return Promise.reject();
  };

  var errHandler = function errHandler() {
    update.checking = false;
    update.message = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('msgErrorFetchingUpdateInfo');
    Object(_message__WEBPACK_IMPORTED_MODULE_4__[/* sendMessageOrIgnore */ "c"])(res);
    return Promise.reject();
  };

  var doUpdate = function doUpdate() {
    if (!downloadURL) {
      update.message = `<span class="new">${Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('msgNewVersion')}</span>`;
      Object(_message__WEBPACK_IMPORTED_MODULE_4__[/* sendMessageOrIgnore */ "c"])(res);
      return Promise.reject();
    }

    update.message = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('msgUpdating');
    Object(_message__WEBPACK_IMPORTED_MODULE_4__[/* sendMessageOrIgnore */ "c"])(res);
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* request */ "p"])(downloadURL).then(function (_ref2) {
      var data = _ref2.data;
      return data;
    }, function () {
      update.checking = false;
      update.message = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('msgErrorFetchingScript');
      Object(_message__WEBPACK_IMPORTED_MODULE_4__[/* sendMessageOrIgnore */ "c"])(res);
      return Promise.reject();
    });
  };

  if (!updateURL) return Promise.reject();
  update.message = Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('msgCheckingForUpdate');
  Object(_message__WEBPACK_IMPORTED_MODULE_4__[/* sendMessageOrIgnore */ "c"])(res);
  return Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* request */ "p"])(updateURL, {
    headers: {
      Accept: 'text/x-userscript-meta'
    }
  }).then(okHandler, errHandler).then(doUpdate);
}

function checkUpdate(script) {
  var id = script.props.id;
  var promise = processes[id];

  if (!promise) {
    var updated = false;
    promise = doCheckUpdate(script).then(function (code) {
      return Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* parseScript */ "n"])({
        id,
        code,
        update: {
          checking: false
        }
      });
    }).then(function (res) {
      var update = res.data.update;
      updated = true;

      if (Object(_options__WEBPACK_IMPORTED_MODULE_3__[/* getOption */ "c"])('notifyUpdates')) {
        Object(_message__WEBPACK_IMPORTED_MODULE_4__[/* notify */ "b"])({
          title: Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('titleScriptUpdated'),
          body: Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('msgScriptUpdated', [update.meta.name || Object(_common__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "j"])('labelNoName')])
        });
      }
    }).catch(function (err) {
      if (process.env.DEBUG) console.error(err);
    }).then(function () {
      delete processes[id];
      return updated;
    });
    processes[id] = promise;
  }

  return promise;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return new Promise(function (resolve, reject) {
    console.info('Upgrade database...');
    init();

    function init() {
      var req = indexedDB.open('AceScript', 1);

      req.onsuccess = function () {
        try {
          transform(req.result);
        } catch (err) {
          // This should not happen, but did happen in Firefox.
          reject(err);
        }
      };

      req.onerror = reject;

      req.onupgradeneeded = function (e) {
        // No available upgradation
        e.target.transaction.abort();
        reject();
      };
    }

    function transform(db) {
      var tx = db.transaction(['scripts', 'require', 'cache', 'values']);
      var updates = {};
      var processing = 3;

      var onCallback = function onCallback() {
        processing -= 1;
        if (!processing) resolve(browser.storage.local.set(updates));
      };

      getAllScripts(tx, function (items) {
        var uriMap = {};
        items.forEach(function (_ref) {
          var script = _ref.script,
              code = _ref.code;
          updates[`scr:${script.props.id}`] = script;
          updates[`code:${script.props.id}`] = code;
          uriMap[script.props.uri] = script.props.id;
        });
        getAllValues(tx, function (data) {
          data.forEach(function (_ref2) {
            var id = _ref2.id,
                values = _ref2.values;
            updates[`val:${id}`] = values;
          });
          onCallback();
        }, uriMap);
      });
      getAllCache(tx, function (cache) {
        cache.forEach(function (_ref3) {
          var uri = _ref3.uri,
              data = _ref3.data;
          updates[`cac:${uri}`] = data;
        });
        onCallback();
      });
      getAllRequire(tx, function (data) {
        data.forEach(function (_ref4) {
          var uri = _ref4.uri,
              code = _ref4.code;
          updates[`req:${uri}`] = code;
        });
        onCallback();
      });
    }

    function getAllScripts(tx, callback) {
      var os = tx.objectStore('scripts');
      var list = [];
      var req = os.openCursor();

      req.onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
          var value = cursor.value;
          list.push(transformScript(value));
          cursor.continue();
        } else {
          callback(list);
        }
      };

      req.onerror = reject;
    }

    function getAllCache(tx, callback) {
      var os = tx.objectStore('cache');
      var list = [];
      var req = os.openCursor();

      req.onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
          var _cursor$value = cursor.value,
              uri = _cursor$value.uri,
              data = _cursor$value.data;
          list.push({
            uri,
            data
          });
          cursor.continue();
        } else {
          callback(list);
        }
      };

      req.onerror = reject;
    }

    function getAllRequire(tx, callback) {
      var os = tx.objectStore('require');
      var list = [];
      var req = os.openCursor();

      req.onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
          var _cursor$value2 = cursor.value,
              uri = _cursor$value2.uri,
              code = _cursor$value2.code;
          list.push({
            uri,
            code
          });
          cursor.continue();
        } else {
          callback(list);
        }
      };

      req.onerror = reject;
    }

    function getAllValues(tx, callback, uriMap) {
      var os = tx.objectStore('values');
      var list = [];
      var req = os.openCursor();

      req.onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
          var _cursor$value3 = cursor.value,
              uri = _cursor$value3.uri,
              values = _cursor$value3.values;
          var id = uriMap[uri];
          if (id) list.push({
            id,
            values
          });
          cursor.continue();
        } else {
          callback(list);
        }
      };

      req.onerror = reject;
    }

    function transformScript(script) {
      var item = {
        script: {
          meta: Object(_script__WEBPACK_IMPORTED_MODULE_0__[/* parseMeta */ "f"])(script.code),
          custom: Object.assign({
            origInclude: true,
            origExclude: true,
            origMatch: true,
            origExcludeMatch: true
          }, script.custom),
          props: {
            id: script.id,
            uri: script.uri,
            position: script.position
          },
          config: {
            enabled: script.enabled,
            shouldUpdate: script.update
          }
        },
        code: script.code
      };
      return item;
    }
  }) // Ignore error
  .catch(function () {});
});

/***/ })

/******/ });