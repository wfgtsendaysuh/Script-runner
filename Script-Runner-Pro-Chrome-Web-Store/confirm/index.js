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
/******/ 		3: 0
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
/******/ 	deferredModules.push([228,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(12);

// EXTERNAL MODULE: ./src/common/index.js
var common = __webpack_require__(0);

// EXTERNAL MODULE: ./src/common/handlers.js
var handlers = __webpack_require__(34);

// EXTERNAL MODULE: ./src/common/options.js
var options = __webpack_require__(1);

// EXTERNAL MODULE: ./src/common/ui/style/index.js
var style = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/confirm/views/app.vue?vue&type=template&id=28642c95&
var appvue_type_template_id_28642c95_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-confirm frame flex flex-col h-100"},[_c('md-app',{attrs:{"md-waterfall":"","md-mode":"fixed"}},[_c('md-app-toolbar',{staticClass:"md-primary"},[_c('div',{staticClass:"md-toolbar-row"},[_c('div',{staticClass:"md-toolbar-section-start"},[_c('span',{staticClass:"md-title",domProps:{"textContent":_vm._s(_vm.i18n('labelInstall'))}}),_c('span',{staticClass:"md-title",domProps:{"textContent":_vm._s(_vm.i18n('extName'))}})]),_c('div',{staticClass:"md-toolbar-section-end"},[_c('md-button',{attrs:{"disabled":!_vm.installable},on:{"click":_vm.installScript}},[_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('buttonConfirmInstallation'))}})]),_c('md-button',{on:{"click":_vm.close}},[_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('buttonClose'))}})]),_c('md-button',{staticClass:"md-icon-button"},[_c('md-menu',{attrs:{"md-dense":"","md-offset-x":-90}},[_c('md-button',{attrs:{"md-menu-trigger":""}},[_c('md-icon',[_vm._v("more_vert")])],1),_c('md-menu-content',[_c('div',{staticClass:"full-control"},[_c('md-list',[_c('md-subheader',[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('sideMenuSettings'))}})]),_c('md-list-item',[_c('md-icon',[_vm._v("done_all")]),_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('installOptionClose'))}}),_c('setting-check',{attrs:{"name":"closeAfterInstall"},on:{"change":_vm.checkClose}})],1),_c('md-list-item',{attrs:{"disabled":_vm.closeAfterInstall}},[_c('md-icon',[_vm._v("track_changes")]),_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('installOptionTrack'))}}),_c('setting-check',{attrs:{"name":"trackLocalFile","disabled":_vm.closeAfterInstall}})],1)],1)],1)])],1)],1)],1)])])],1),_c('div',{staticClass:"frame-block flex-auto pos-rel"},[_c('vm-code',{staticClass:"abs-full",attrs:{"readonly":"","value":_vm.code,"commands":_vm.commands}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/confirm/views/app.vue?vue&type=template&id=28642c95&

// EXTERNAL MODULE: ./node_modules/vueleton/lib/dropdown/index.js
var dropdown = __webpack_require__(63);
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown);

// EXTERNAL MODULE: ./src/common/cache.js
var cache = __webpack_require__(61);

// EXTERNAL MODULE: ./src/common/ui/code.vue + 9 modules
var code = __webpack_require__(64);

// EXTERNAL MODULE: ./src/common/ui/setting-check.vue + 4 modules
var setting_check = __webpack_require__(18);

// EXTERNAL MODULE: ./src/common/router.js
var router = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/confirm/views/app.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var appvue_type_script_lang_js_cache = Object(cache["a" /* default */])({});
/* harmony default export */ var appvue_type_script_lang_js_ = ({
  components: {
    Dropdown: dropdown_default.a,
    VmCode: code["a" /* default */],
    SettingCheck: setting_check["a" /* default */]
  },

  data() {
    return {
      installable: false,
      dependencyOK: false,
      closeAfterInstall: options["a" /* default */].get('closeAfterInstall'),
      message: '',
      code: '',
      commands: {
        close: this.close
      },
      info: {}
    };
  },

  computed: {
    isLocal() {
      return !Object(common["l" /* isRemote */])(this.info.url);
    }

  },

  mounted() {
    var _this = this;

    this.message = this.i18n('msgLoadingData');
    this.loadInfo().then(function () {
      var id = router["a" /* route */].paths[0];
      _this.guard = setInterval(function () {
        Object(common["q" /* sendMessage */])({
          cmd: 'CacheHit',
          data: {
            key: `confirm-${id}`
          }
        });
      }, 5000);
    }, function () {
      _this.close();

      return Promise.reject();
    }).then(this.loadData).then(this.parseMeta);
  },

  beforeDestroy() {
    if (this.guard) {
      clearInterval(this.guard);
      this.guard = null;
    }
  },

  methods: {
    loadInfo() {
      var _this2 = this;

      var id = router["a" /* route */].paths[0];
      return Object(common["q" /* sendMessage */])({
        cmd: 'CacheLoad',
        data: `confirm-${id}`
      }).then(function (info) {
        if (!info) return Promise.reject();
        _this2.info = info;
      });
    },

    loadData(changedOnly) {
      var _this3 = this;

      this.installable = false;
      var oldCode = this.code;
      return this.getScript(this.info.url).then(function (code) {
        if (changedOnly && oldCode === code) return Promise.reject();
        _this3.code = code;
      });
    },

    parseMeta() {
      var _this4 = this;

      return Object(common["q" /* sendMessage */])({
        cmd: 'ParseMeta',
        data: this.code
      }).then(function (script) {
        var urls = Object.keys(script.resources).map(function (key) {
          return script.resources[key];
        });
        var length = script.require.length + urls.length;
        if (!length) return;
        var finished = 0;
        var error = [];

        var updateStatus = function updateStatus() {
          _this4.message = _this4.i18n('msgLoadingDependency', [finished, length]);
        };

        updateStatus();
        _this4.require = {};
        _this4.resources = {};

        var promises = script.require.map(function (url) {
          var fullUrl = Object(common["f" /* getFullUrl */])(url, _this4.info.url);
          return _this4.getFile(fullUrl, {
            useCache: true
          }).then(function (res) {
            _this4.require[fullUrl] = res;
          });
        }).concat(urls.map(function (url) {
          var fullUrl = Object(common["f" /* getFullUrl */])(url, _this4.info.url);
          return _this4.getFile(fullUrl, {
            isBlob: true,
            useCache: true
          }).then(function (res) {
            _this4.resources[fullUrl] = res;
          });
        })).map(function (promise) {
          return promise.then(function () {
            finished += 1;
            updateStatus();
          }, function (url) {
            error.push(url);
          });
        });

        return Promise.all(promises).then(function () {
          if (error.length) return Promise.reject(error.join('\n'));
          _this4.dependencyOK = true;
        });
      }).then(function () {
        _this4.message = _this4.i18n('msgLoadedData');
        _this4.installable = true;
      }, function (err) {
        _this4.message = _this4.i18n('msgErrorLoadingDependency', [err]);
        return Promise.reject();
      });
    },

    close() {
      Object(common["q" /* sendMessage */])({
        cmd: 'TabClose'
      });
    },

    getFile(url) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          isBlob = _ref.isBlob,
          useCache = _ref.useCache;

      var cacheKey = isBlob ? `blob+${url}` : `text+${url}`;

      if (useCache && appvue_type_script_lang_js_cache.has(cacheKey)) {
        return Promise.resolve(appvue_type_script_lang_js_cache.get(cacheKey));
      }

      return Object(common["p" /* request */])(url, {
        responseType: isBlob ? 'arraybuffer' : null
      }).then(function (_ref2) {
        var data = _ref2.data;
        return isBlob ? window.btoa(Object(common["a" /* buffer2string */])(data)) : data;
      }).then(function (data) {
        if (useCache) appvue_type_script_lang_js_cache.put(cacheKey, data);
        return data;
      });
    },

    getScript(url) {
      var _this5 = this;

      return Object(common["q" /* sendMessage */])({
        cmd: 'CacheLoad',
        data: url
      }).then(function (text) {
        return text || Promise.reject();
      }).catch(function () {
        return _this5.getFile(url);
      }).catch(function () {
        _this5.message = _this5.i18n('msgErrorLoadingData');
        throw url;
      });
    },

    getTimeString() {
      var now = new Date();
      return `${Object(common["m" /* leftpad */])(now.getHours(), 2)}:${Object(common["m" /* leftpad */])(now.getMinutes(), 2)}:${Object(common["m" /* leftpad */])(now.getSeconds(), 2)}`;
    },

    installScript() {
      var _this6 = this;

      this.installable = false;
      Object(common["q" /* sendMessage */])({
        cmd: 'ParseScript',
        data: {
          code: this.code,
          url: this.info.url,
          from: this.info.from,
          require: this.require,
          resources: this.resources
        }
      }).then(function (result) {
        _this6.message = `${result.update.message}[${_this6.getTimeString()}]`;
        if (_this6.closeAfterInstall) _this6.close();else if (_this6.isLocal && options["a" /* default */].get('trackLocalFile')) _this6.trackLocalFile();
      }, function (err) {
        _this6.message = `${err}`;
        _this6.installable = true;
      });
    },

    trackLocalFile() {
      var _this7 = this;

      new Promise(function (resolve) {
        setTimeout(resolve, 2000);
      }).then(function () {
        return _this7.loadData(true);
      }).then(this.parseMeta).then(function () {
        var track = options["a" /* default */].get('trackLocalFile');
        if (track) _this7.installScript();
      }, function () {
        _this7.trackLocalFile();
      });
    },

    checkClose(value) {
      this.closeAfterInstall = value;
      if (value) options["a" /* default */].set('trackLocalFile', false);
    }

  }
});
// CONCATENATED MODULE: ./src/confirm/views/app.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_appvue_type_script_lang_js_ = (appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/confirm/views/app.vue?vue&type=style&index=0&lang=css&
var appvue_type_style_index_0_lang_css_ = __webpack_require__(222);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/confirm/views/app.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_appvue_type_script_lang_js_,
  appvue_type_template_id_28642c95_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var app = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-material/dist/vue-material.js
var vue_material = __webpack_require__(30);
var vue_material_default = /*#__PURE__*/__webpack_require__.n(vue_material);

// EXTERNAL MODULE: ./node_modules/vue-material/dist/vue-material.min.css
var vue_material_min = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/vue-material/dist/theme/default.css
var theme_default = __webpack_require__(82);

// EXTERNAL MODULE: ./src/confirm/style.css
var confirm_style = __webpack_require__(223);

// CONCATENATED MODULE: ./src/confirm/index.js










vue_runtime_esm["default"].use(vue_material_default.a);
vue_runtime_esm["default"].prototype.i18n = common["j" /* i18n */];
document.title = `${Object(common["j" /* i18n */])('labelInstall')} - ${Object(common["j" /* i18n */])('extName')}`;
options["a" /* default */].ready(function () {
  var el = document.createElement('div');
  document.body.appendChild(el);
  new vue_runtime_esm["default"]({
    render: function render(h) {
      return h(app);
    }
  }).$mount(el);
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });