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
/******/ 		5: 0
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
/******/ 	deferredModules.push([226,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(12));

var VlModal$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.transition, "appear": "" }, on: { "after-leave": _vm.onAfterLeave } }, [_vm.visible ? _c('div', { staticClass: "vl-modal" }, [_vm.backdrop ? _c('div', { staticClass: "vl-modal-backdrop", on: { "click": _vm.onBackdropClick } }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2) : _vm._e()]);
  }, staticRenderFns: [],
  props: {
    transition: String,
    visible: {
      type: Boolean,
      default: false
    },
    backdrop: {
      type: [Object, Boolean],
      default: function _default() {
        return { close: true };
      }
    }
  },
  methods: {
    onBackdropClick: function onBackdropClick() {
      if (this.backdrop === true || this.backdrop.close) {
        this.$emit('close', {
          source: 'backdrop'
        });
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('after-leave');
    }
  }
};

VlModal$1.show = function (message, props) {
  var data = {
    props: Object.assign({}, props, { visible: true }),
    on: {
      close: close,
      'after-leave': destroy
    }
  };
  var vm = new Vue({
    data: data.props,
    render: function render(h) {
      var child = typeof message === 'function' ? message(h) : message;
      // Must be wrapped for vm.$el to find the element,
      // perhaps due to bug of <transition>
      return h('div', [h(VlModal$1, data, [child])]);
    }
  });
  var el = document.createElement('div');
  document.body.appendChild(el);
  vm.$mount(el);
  return { close: close };

  function close() {
    data.props.visible = false;
  }
  function destroy() {
    if (vm) {
      var _vm = vm,
          $el = _vm.$el;

      $el.parentNode.removeChild($el);
      vm.$destroy();
      vm = null;
    }
  }
};

module.exports = VlModal$1;


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(12);

// EXTERNAL MODULE: ./src/common/index.js
var common = __webpack_require__(0);

// EXTERNAL MODULE: ./src/common/options.js
var options = __webpack_require__(1);

// EXTERNAL MODULE: ./src/common/handlers.js
var handlers = __webpack_require__(34);

// EXTERNAL MODULE: ./src/common/ui/style/index.js
var style = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vueleton/lib/modal/index.js
var lib_modal = __webpack_require__(62);
var modal_default = /*#__PURE__*/__webpack_require__.n(lib_modal);

// EXTERNAL MODULE: ./src/common/router.js
var router = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/message.vue?vue&type=template&id=1fc97542&
var messagevue_type_template_id_1fc97542_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"message modal-content"},[(_vm.message.text)?_c('div',{staticClass:"mb-1",domProps:{"textContent":_vm._s(_vm.message.text)}}):_vm._e(),(_vm.message.buttons)?_c('form',{on:{"submit":function($event){$event.preventDefault();}}},[(_vm.message.input !== false)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.message.input),expression:"message.input"}],staticClass:"mb-1",attrs:{"type":"text"},domProps:{"value":(_vm.message.input)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.message, "input", $event.target.value)}}}):_vm._e(),_c('div',_vm._l((_vm.message.buttons),function(button){return _c('button',{staticClass:"mr-1",attrs:{"type":button.type || 'button'},domProps:{"textContent":_vm._s(button.text)},on:{"click":function($event){return _vm.onButtonClick(button)}}})}),0)]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/message.vue?vue&type=template&id=1fc97542&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/message.vue?vue&type=script&lang=js&
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
var dismissers = [];
window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27 && dismissers.length) {
    e.stopImmediatePropagation();
    dismissers.pop()();
  }
}, true);
/* harmony default export */ var messagevue_type_script_lang_js_ = ({
  props: ['message'],

  created() {
    dismissers.push(this.dismiss);
  },

  mounted() {
    var input = this.$el.querySelector('input');
    if (input) input.focus();
  },

  beforeDestroy() {
    var i = dismissers.indexOf(this.dismiss);
    if (i >= 0) dismissers.splice(i, 1);
  },

  methods: {
    onButtonClick(button) {
      var onClick = button.onClick;

      if (onClick) {
        if (onClick(this.message.input) !== false) this.dismiss();
      }
    },

    onBackdropClick() {
      var onBackdropClick = this.message.onBackdropClick;

      if (onBackdropClick) {
        if (onBackdropClick() !== false) this.dismiss();
      }
    },

    dismiss() {
      this.$emit('dismiss');
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/message.vue?vue&type=style&index=0&lang=css&
var messagevue_type_style_index_0_lang_css_ = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/options/views/message.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_messagevue_type_script_lang_js_,
  messagevue_type_template_id_1fc97542_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var views_message = (component.exports);
// CONCATENATED MODULE: ./src/options/utils/index.js



var store = {
  route: router["a" /* route */]
};
function showMessage(message) {
  var modal = modal_default.a.show(function (h) {
    return h(views_message, {
      props: {
        message
      },
      on: {
        dismiss() {
          modal.close();
        }

      }
    });
  }, {
    transition: 'in-out'
  });

  if (!message.buttons) {
    setTimeout(function () {
      modal.close();
    }, 2000);
  }
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/app.vue?vue&type=template&id=04ce050a&
var appvue_type_template_id_04ce050a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-container md-layout-row h-100"},[_c('md-app',{staticClass:"h-100"},[_c('md-app-drawer',{attrs:{"md-permanent":"full"}},[_c('md-toolbar',{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[_c('md-list',[_c('md-list-item',[_c('md-avatar',[_c('img',{attrs:{"src":"/public/images/icon128.png"}})]),_c('h1',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('extName'))}})],1),_c('md-divider',{staticClass:"md-inset"})],1)],1),_c('md-list',[_c('md-list-item',{attrs:{"href":"#scripts"}},[_c('md-icon',[_vm._v("cloud_done")]),_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('sideMenuInstalled'))}})],1),_c('md-list-item',{attrs:{"href":"#settings"}},[_c('md-icon',[_vm._v("settings")]),_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('sideMenuSettings'))}})],1)],1)],1),_c('md-app-content',{staticClass:"no-padding"},[_c(_vm.tabComponent,{tag:"component"})],1)],1)],1)}
var appvue_type_template_id_04ce050a_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/app.vue?vue&type=template&id=04ce050a&

// EXTERNAL MODULE: ./src/common/ui/icon.vue + 4 modules
var ui_icon = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-installed.vue?vue&type=template&id=e640f6d0&
var tab_installedvue_type_template_id_e640f6d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-installed"},[_c('md-app-toolbar',{staticClass:"md-primary"},[_c('div',{staticClass:"md-toolbar-row"},[_c('md-menu',{attrs:{"md-size":"huge","md-offset-x":10}},[_c('md-button',{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[_c('md-icon',[_vm._v("add")]),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonNew'))}})])],1),_c('md-menu-content',[_c('div',[_c('md-list',{staticClass:"md-dense"},[_c('md-list-item',{on:{"click":function($event){$event.preventDefault();return _vm.onEditScript('_new')}}},[_c('md-icon',[_vm._v("create")]),_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('buttonNew'))}})],1),_c('md-list-item',{attrs:{"href":"https://openuserjs.org/","target":"_blank"}},[_c('md-icon',[_vm._v("language")]),_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('installFrom', 'OpenUserJS'))}})],1),_c('md-list-item',{attrs:{"href":"https://greasyfork.org/scripts","target":"_blank"}},[_c('md-icon',[_vm._v("language")]),_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('installFrom', 'GreasyFork'))}})],1),_c('md-list-item',{on:{"click":function($event){$event.preventDefault();return _vm.installFromURL($event)}}},[_c('md-icon',[_vm._v("link")]),_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('buttonInstallFromURL'))}})],1)],1)],1)])],1),_c('md-button',{staticClass:"md-icon-button",on:{"click":_vm.updateAll}},[_c('md-icon',[_vm._v("autorenew")]),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonUpdateAll'))}})])],1),_c('div',{staticClass:"md-toolbar-section-end"},[_c('md-autocomplete',{staticClass:"search",attrs:{"md-options":[],"md-layout":"box"},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}},[_c('label',[_vm._v("Search...")])]),_c('md-button',{staticClass:"md-icon-button"},[_c('md-menu',{attrs:{"md-size":"huge","md-offset-x":-90}},[_c('md-button',{attrs:{"md-menu-trigger":""}},[_c('md-icon',[_vm._v("sort")]),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonFilter'))}})])],1),_c('md-menu-content',[_c('md-list',{staticClass:"md-dense"},[_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelFilterSort'))}}),_c('md-select',{attrs:{"md-dense":""},on:{"change":_vm.onOrderChange},model:{value:(_vm.filters.sort.value),callback:function ($$v) {_vm.$set(_vm.filters.sort, "value", $$v)},expression:"filters.sort.value"}},_vm._l((_vm.filterOptions.sort),function(option){return _c('md-option',{key:option.title,attrs:{"value":option.value}},[_vm._v(_vm._s(option.title))])}),1)],1)],1),(_vm.filters.sort.value === 'alpha')?_c('md-list-item',[_c('setting-check',{attrs:{"name":"filters.showEnabledFirst"},on:{"change":_vm.updateLater}}),_c('span',{staticClass:"md-list-item-text no-wrap",domProps:{"textContent":_vm._s(_vm.i18n('optionShowEnabledFirst'))}})],1):_vm._e()],1)],1)],1)],1)],1)],1)]),_c('div',{staticClass:"scripts"},_vm._l((_vm.store.filteredScripts),function(script){return _c('item',{key:script.props.id,attrs:{"script":script,"draggable":_vm.filters.sort.value === 'exec' && !script.config.removed},on:{"edit":_vm.onEditScript,"move":_vm.moveScript}})}),1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.message),expression:"message"}],staticClass:"backdrop",class:{mask: _vm.store.loading}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]),(_vm.script)?_c('edit',{attrs:{"initial":_vm.script},on:{"close":function($event){return _vm.onEditScript()}}}):_vm._e()],1)}
var tab_installedvue_type_template_id_e640f6d0_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-installed.vue?vue&type=template&id=e640f6d0&

// EXTERNAL MODULE: ./node_modules/vueleton/lib/dropdown/index.js
var dropdown = __webpack_require__(63);
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown);

// EXTERNAL MODULE: ./node_modules/vueleton/lib/tooltip/index.js
var tooltip = __webpack_require__(27);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip);

// EXTERNAL MODULE: ./src/common/object.js
var object = __webpack_require__(2);

// EXTERNAL MODULE: ./src/common/ui/setting-check.vue + 4 modules
var setting_check = __webpack_require__(18);

// EXTERNAL MODULE: ./src/common/hook-setting.js
var hook_setting = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/ui/locale-group.vue?vue&type=template&id=6438a14a&
var locale_groupvue_type_template_id_6438a14a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._v("\n  "+_vm._s(_vm.parts[0])+"\n  "),_vm._t("default"),_vm._v("\n  "+_vm._s(_vm.parts[1])+"\n")],2)}
var locale_groupvue_type_template_id_6438a14a_staticRenderFns = []


// CONCATENATED MODULE: ./src/common/ui/locale-group.vue?vue&type=template&id=6438a14a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/common/ui/locale-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

var SEP = '￥￥';
/* harmony default export */ var locale_groupvue_type_script_lang_js_ = ({
  props: ['i18nKey'],
  computed: {
    parts() {
      return Object(common["j" /* i18n */])(this.i18nKey, [SEP]).split(SEP);
    }

  }
});
// CONCATENATED MODULE: ./src/common/ui/locale-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_locale_groupvue_type_script_lang_js_ = (locale_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/common/ui/locale-group.vue





/* normalize component */

var locale_group_component = Object(componentNormalizer["a" /* default */])(
  ui_locale_groupvue_type_script_lang_js_,
  locale_groupvue_type_template_id_6438a14a_render,
  locale_groupvue_type_template_id_6438a14a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var locale_group = (locale_group_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/script-item.vue?vue&type=template&id=70588209&
var script_itemvue_type_template_id_70588209_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('md-card',{staticClass:"mt-16",attrs:{"md-with-hover":""}},[_c('md-card-header',{staticClass:"pb-0"},[_c('md-avatar',[_c('img',{attrs:{"src":_vm.safeIcon}})]),(_vm.script.config.removed)?_c('div',{domProps:{"textContent":_vm._s(_vm.i18n('labelRemoved'))}}):_vm._e(),_c('div',{staticClass:"md-title",domProps:{"textContent":_vm._s(_vm.script.$cache.name)}}),_c('div',{staticClass:"md-subhead"},[(_vm.author)?_c('span',[_c('md-icon',[_vm._v("person")]),(_vm.author.email)?_c('a',{staticClass:"ellipsis ml-1",attrs:{"href":("mailto:" + (_vm.author.email))},domProps:{"textContent":_vm._s(_vm.author.name)}}):_c('span',{staticClass:"ellipsis ml-1",domProps:{"textContent":_vm._s(_vm.author.name)}}),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelAuthor') + _vm.script.meta.author)}})])],1):_vm._e(),_c('div',[_c('span',{domProps:{"textContent":_vm._s(_vm.script.meta.version ? ("v" + (_vm.script.meta.version) + " - ") : '')}}),_c('span',[_c('span',{domProps:{"textContent":_vm._s(_vm.lastUpdated.show)}}),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.lastUpdated.title)}})])],1)])])],1),_c('md-card-actions',{attrs:{"md-alignment":"left"}},[_c('md-button',{staticClass:"md-icon-button",on:{"click":_vm.onEdit}},[_c('md-icon',[_vm._v("code")]),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonEdit'))}})])],1),_c('md-button',{staticClass:"md-icon-button",on:{"click":_vm.onEnable}},[_c('md-icon',{class:("toggle_" + (_vm.script.config.enabled ? 'on' : 'off')),domProps:{"textContent":_vm._s(("toggle_" + (_vm.script.config.enabled ? 'on' : 'off')))}}),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.labelEnable)}})])],1),_c('md-button',{staticClass:"md-icon-button",on:{"click":_vm.onUpdate}},[_c('md-icon',[_vm._v("refresh")]),_c('md-tooltip',{attrs:{"md-direction":"bottom","disabled":!_vm.canUpdate || _vm.script.checking}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonUpdate'))}})])],1),_c('md-button',{staticClass:"md-icon-button",attrs:{"href":_vm.homepageURL,"target":"_blank"}},[_c('md-icon',[_vm._v("home")]),_c('md-tooltip',{attrs:{"md-direction":"bottom","disabled":!_vm.homepageURL}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonHome'))}})])],1),_c('md-button',{staticClass:"md-icon-button"},[_c('md-icon',[_vm._v("info")]),_c('md-tooltip',{attrs:{"md-direction":"bottom","disabled":!_vm.description}},[_c('span',{domProps:{"textContent":_vm._s(_vm.description)}})])],1),_c('md-button',{staticClass:"md-icon-button",attrs:{"href":_vm.script.meta.supportURL,"target":"_blank"}},[_c('md-icon',[_vm._v("help")]),_c('md-tooltip',{attrs:{"md-direction":"bottom","disabled":!_vm.script.meta.supportURL}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonSupport'))}})])],1),_c('md-button',{staticClass:"md-icon-button",on:{"click":function($event){return _vm.onRemove(1)}}},[_c('md-icon',[_vm._v("delete")]),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonRemove'))}})])],1),(_vm.script.config.removed)?_c('md-button',{staticClass:"md-icon-button",on:{"click":function($event){return _vm.onRemove(0)}}},[_c('md-icon',[_vm._v("undo")]),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonUndo'))}})])],1):_vm._e()],1)],1)}
var script_itemvue_type_template_id_70588209_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/script-item.vue?vue&type=template&id=70588209&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/script-item.vue?vue&type=script&lang=js&
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





var DEFAULT_ICON = '/public/images/icon48.png';
var PADDING = 10;
var SCROLL_GAP = 10;
var script_itemvue_type_script_lang_js_images = {};

function loadImage(url) {
  if (!url) return Promise.reject();
  var promise = script_itemvue_type_script_lang_js_images[url];

  if (!promise) {
    var cache = store.cache[url];
    promise = cache ? Promise.resolve(cache) : new Promise(function (resolve, reject) {
      var img = new Image();

      img.onload = function () {
        return resolve(url);
      };

      img.onerror = function () {
        return reject(url);
      };

      img.src = url;
    });
    script_itemvue_type_script_lang_js_images[url] = promise;
  }

  return promise;
}

/* harmony default export */ var script_itemvue_type_script_lang_js_ = ({
  props: ['script', 'draggable'],
  components: {
    Icon: ui_icon["a" /* default */],
    Tooltip: tooltip_default.a
  },

  data() {
    return {
      safeIcon: DEFAULT_ICON
    };
  },

  computed: {
    canUpdate() {
      var script = this.script;
      return script.config.shouldUpdate && (script.custom.updateURL || script.meta.updateURL || script.custom.downloadURL || script.meta.downloadURL || script.custom.lastInstallURL);
    },

    homepageURL() {
      var script = this.script;
      return script.custom.homepageURL || script.meta.homepageURL || script.meta.homepage;
    },

    author() {
      var text = this.script.meta.author;
      if (!text) return;
      var matches = text.match(/^(.*?)\s<(\S*?@\S*?)>$/);
      return {
        email: matches && matches[2],
        name: matches ? matches[1] : text
      };
    },

    labelEnable() {
      return this.script.config.enabled ? this.i18n('buttonDisable') : this.i18n('buttonEnable');
    },

    description() {
      return this.script.custom.description || Object(common["g" /* getLocaleString */])(this.script.meta, 'description');
    },

    lastUpdated() {
      var props = this.script.props; // XXX use `lastModified` as a fallback for scripts without `lastUpdated`

      var lastUpdated = props.lastUpdated || props.lastModified;
      var ret = {};

      if (lastUpdated) {
        var delta = (Date.now() - lastUpdated) / 1000 / 60;
        var units = [['min', 60], ['h', 24], ['d', 1000, 365], ['y']];
        var unitInfo = units.find(function (item) {
          var max = item[1];
          if (!max || delta < max) return true;
          var step = item[2] || max;
          delta /= step;
          return false;
        });
        var date = new Date(lastUpdated);
        ret.title = this.i18n('labelLastUpdatedAt', date.toLocaleString());
        ret.show = `${delta | 0}${unitInfo[0]}`;
      }

      return ret;
    }

  },

  mounted() {
    var _this = this;

    var icon = this.script.meta.icon;

    if (icon && icon !== this.safeIcon) {
      var pathMap = Object(object["a" /* objectGet */])(this.script, 'custom.pathMap') || {};
      var fullUrl = pathMap[icon] || icon;
      loadImage(fullUrl).then(function (url) {
        _this.safeIcon = url;
      }, function () {
        _this.safeIcon = DEFAULT_ICON;
      });
    }
  },

  methods: {
    onEdit() {
      this.$emit('edit', this.script.props.id);
    },

    onRemove(remove) {
      Object(common["q" /* sendMessage */])({
        cmd: 'UpdateScriptInfo',
        data: {
          id: this.script.props.id,
          config: {
            removed: remove ? 1 : 0
          }
        }
      });
    },

    onEnable() {
      Object(common["q" /* sendMessage */])({
        cmd: 'UpdateScriptInfo',
        data: {
          id: this.script.props.id,
          config: {
            enabled: this.script.config.enabled ? 0 : 1
          }
        }
      });
    },

    onUpdate() {
      Object(common["q" /* sendMessage */])({
        cmd: 'CheckUpdate',
        data: this.script.props.id
      });
    },

    onDragStart(e) {
      var el = e.currentTarget;
      var parent = el.parentNode;
      var rect = el.getBoundingClientRect();
      var next = el.nextElementSibling;
      var dragging = {
        el,
        offset: {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        },
        delta: (next ? next.getBoundingClientRect().top : parent.offsetHeight) - rect.top,
        index: [].indexOf.call(parent.children, el),
        elements: [].filter.call(parent.children, function (child) {
          return child !== el;
        }),
        dragged: el.cloneNode(true)
      };
      this.dragging = dragging;
      dragging.lastIndex = dragging.index;
      var dragged = dragging.dragged;
      dragged.classList.add('dragging');
      dragged.style.left = `${rect.left}px`;
      dragged.style.top = `${rect.top}px`;
      dragged.style.width = `${rect.width}px`;
      parent.appendChild(dragged);
      el.classList.add('dragging-placeholder');
      document.addEventListener('mousemove', this.onDragMouseMove, false);
      document.addEventListener('mouseup', this.onDragMouseUp, false);
    },

    onDragMouseMove(e) {
      var dragging = this.dragging;
      var el = dragging.el,
          dragged = dragging.dragged,
          offset = dragging.offset,
          elements = dragging.elements,
          lastIndex = dragging.lastIndex;
      dragged.style.left = `${e.clientX - offset.x}px`;
      dragged.style.top = `${e.clientY - offset.y}px`;
      var hoveredIndex = elements.findIndex(function (item) {
        if (!item || item.classList.contains('dragging-moving')) return false;
        var rect = item.getBoundingClientRect();
        return e.clientX >= rect.left + PADDING && e.clientX <= rect.left + rect.width - PADDING && e.clientY >= rect.top + PADDING && e.clientY <= rect.top + rect.height - PADDING;
      });

      if (hoveredIndex >= 0) {
        var hoveredEl = elements[hoveredIndex];
        var isDown = hoveredIndex >= lastIndex;
        var delta = dragging.delta;

        if (isDown) {
          hoveredIndex += 1;
          hoveredEl.parentNode.insertBefore(el, hoveredEl.nextElementSibling);
        } else {
          delta = -delta;
          hoveredEl.parentNode.insertBefore(el, hoveredEl);
        }

        dragging.lastIndex = hoveredIndex;
        this.onDragAnimate(dragging.elements.slice(isDown ? lastIndex : hoveredIndex, isDown ? hoveredIndex : lastIndex), delta);
      }

      this.onDragScrollCheck(e.clientY);
    },

    onDragMouseUp() {
      document.removeEventListener('mousemove', this.onDragMouseMove, false);
      document.removeEventListener('mouseup', this.onDragMouseUp, false);
      var dragging = this.dragging;
      this.dragging = null;
      dragging.dragged.remove();
      dragging.el.classList.remove('dragging-placeholder');
      this.$emit('move', {
        from: dragging.index,
        to: dragging.lastIndex
      });
    },

    onDragAnimate(elements, delta) {
      elements.forEach(function (el) {
        if (!el) return;
        el.classList.add('dragging-moving');
        el.style.transition = 'none';
        el.style.transform = `translateY(${delta}px)`;
        el.addEventListener('transitionend', endAnimation, false);
        setTimeout(function () {
          el.style.transition = '';
          el.style.transform = '';
        });
      });

      function endAnimation(e) {
        e.target.classList.remove('dragging-moving');
        e.target.removeEventListener('transitionend', endAnimation, false);
      }
    },

    onDragScrollCheck(y) {
      var dragging = this.dragging;
      var scrollSpeed = 0;
      var offset = dragging.el.parentNode.getBoundingClientRect();
      var delta = (y - (offset.bottom - SCROLL_GAP)) / SCROLL_GAP;

      if (delta > 0) {
        // scroll down
        scrollSpeed = 1 + Math.min(delta * 5 | 0, 10);
      } else {
        // scroll up
        delta = (offset.top + SCROLL_GAP - y) / SCROLL_GAP;
        if (delta > 0) scrollSpeed = -1 - Math.min(delta * 5 | 0, 10);
      }

      dragging.scrollSpeed = scrollSpeed;
      if (scrollSpeed) this.onDragScroll();
    },

    onDragScroll() {
      var _this2 = this;

      var scroll = function scroll() {
        var dragging = _this2.dragging;
        if (!dragging) return;

        if (dragging.scrollSpeed) {
          dragging.el.parentNode.scrollTop += dragging.scrollSpeed;
          setTimeout(scroll, 32);
        } else dragging.scrolling = false;
      };

      if (this.dragging && !this.dragging.scrolling) {
        this.dragging.scrolling = true;
        scroll();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/script-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_script_itemvue_type_script_lang_js_ = (script_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/script-item.vue?vue&type=style&index=0&lang=css&
var script_itemvue_type_style_index_0_lang_css_ = __webpack_require__(194);

// CONCATENATED MODULE: ./src/options/views/script-item.vue






/* normalize component */

var script_item_component = Object(componentNormalizer["a" /* default */])(
  views_script_itemvue_type_script_lang_js_,
  script_itemvue_type_template_id_70588209_render,
  script_itemvue_type_template_id_70588209_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var script_item = (script_item_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/index.vue?vue&type=template&id=2ef9476b&
var editvue_type_template_id_2ef9476b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"edit frame flex flex-col fixed-full"},[_c('md-app',{attrs:{"md-waterfall":"","md-mode":"fixed"}},[_c('md-app-toolbar',{staticClass:"md-primary"},[_c('div',{staticClass:"md-toolbar-row"},[_c('div',{staticClass:"md-toolbar-section-start"},[_c('span',{staticClass:"md-title",domProps:{"textContent":_vm._s(_vm.i18n('labelEditing'))}}),_c('em',{staticClass:"md-title",domProps:{"textContent":_vm._s(_vm.scriptName)}})]),_c('md-tabs',{staticClass:"md-primary",attrs:{"md-alignment":"centered"}},[_c('md-tab',{attrs:{"id":"tab-code","md-icon":"code","md-label":_vm.i18n('editNavCode')},on:{"click":function($event){_vm.nav = 'code'}}}),_c('md-tab',{attrs:{"id":"tab-setting","md-icon":"settings","md-label":_vm.i18n('editNavSettings')},on:{"click":function($event){_vm.nav = 'settings'}}}),_c('md-tab',{attrs:{"id":"tab-value","md-icon":"home","md-disabled":!(this.script && this.script.props),"md-label":_vm.i18n('editNavValues')},on:{"click":function($event){_vm.nav = 'values'}}})],1),_c('md-snackbar',{staticClass:"edit",attrs:{"md-position":"center","md-duration":3000,"md-active":_vm.tooLarge,"md-persistent":""}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('warnScriptLongLines'))}})]),_c('div',{staticClass:"md-toolbar-section-end"},[_c('md-button',{class:("md-icon-button " + (!_vm.canSave ? 'disable' : '')),attrs:{"disabled":!_vm.canSave},on:{"click":_vm.save}},[_c('md-icon',[_vm._v("check")]),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonSave'))}})])],1),_c('md-button',{staticClass:"md-icon-button",on:{"click":_vm.close}},[_c('md-icon',[_vm._v("close")]),_c('md-tooltip',{attrs:{"md-direction":"bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonClose'))}})])],1)],1)],1)])],1),_c('div',{staticClass:"frame-block flex-auto pos-rel"},[_c('vm-code',{directives:[{name:"show",rawName:"v-show",value:(_vm.nav === 'code'),expression:"nav === 'code'"}],staticClass:"abs-full",attrs:{"commands":_vm.commands},on:{"warnLarge":_vm.onWarnLarge},model:{value:(_vm.code),callback:function ($$v) {_vm.code=$$v},expression:"code"}}),_c('vm-settings',{directives:[{name:"show",rawName:"v-show",value:(_vm.nav === 'settings'),expression:"nav === 'settings'"}],staticClass:"abs-full edit-body",attrs:{"value":_vm.script,"settings":_vm.settings}}),_c('vm-values',{staticClass:"abs-full edit-body",attrs:{"show":_vm.nav === 'values',"script":_vm.script}})],1)],1)}
var editvue_type_template_id_2ef9476b_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/edit/index.vue?vue&type=template&id=2ef9476b&

// EXTERNAL MODULE: ./src/common/ui/code.vue + 9 modules
var code = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/settings.vue?vue&type=template&id=e9080c28&
var settingsvue_type_template_id_e9080c28_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"edit-settings"},[_c('div',{staticClass:"setting"},[_c('md-list',[_c('md-subheader',{domProps:{"textContent":_vm._s(_vm.i18n('editLabelSettings'))}}),_c('md-list-item',[_c('md-checkbox',{staticClass:"md-primary",model:{value:(_vm.config.shouldUpdate),callback:function ($$v) {_vm.$set(_vm.config, "shouldUpdate", $$v)},expression:"config.shouldUpdate"}}),_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('labelAllowUpdate'))}})],1),_c('md-subheader',{domProps:{"textContent":_vm._s(_vm.i18n('editLabelMeta'))}}),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelName'))}}),_c('md-input',{attrs:{"placeholder":_vm.placeholders.name},model:{value:(_vm.custom.name),callback:function ($$v) {_vm.$set(_vm.custom, "name", $$v)},expression:"custom.name"}})],1)],1),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelRunAt'))}},[_vm._v("Movie")]),_c('md-select',{attrs:{"placeholder":_vm.i18n('labelRunAtDefault')},model:{value:(_vm.custom.runAt),callback:function ($$v) {_vm.$set(_vm.custom, "runAt", $$v)},expression:"custom.runAt"}},[_c('md-option',{attrs:{"value":"document-start"}},[_vm._v("document-start")]),_c('md-option',{attrs:{"value":"document-end"}},[_vm._v("document-end")]),_c('md-option',{attrs:{"value":"document-idle"}},[_vm._v("document-idle")])],1)],1)],1),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelHomepageURL'))}}),_c('md-input',{attrs:{"placeholder":_vm.placeholders.homepageURL},model:{value:(_vm.custom.homepageURL),callback:function ($$v) {_vm.$set(_vm.custom, "homepageURL", $$v)},expression:"custom.homepageURL"}})],1)],1),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelUpdateURL'))}}),_c('md-input',{attrs:{"placeholder":_vm.placeholders.updateURL},model:{value:(_vm.custom.updateURL),callback:function ($$v) {_vm.$set(_vm.custom, "updateURL", $$v)},expression:"custom.updateURL"}})],1)],1),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelDownloadURL'))}}),_c('md-input',{attrs:{"placeholder":_vm.placeholders.downloadURL},model:{value:(_vm.custom.downloadURL),callback:function ($$v) {_vm.$set(_vm.custom, "downloadURL", $$v)},expression:"custom.downloadURL"}})],1)],1),_c('md-checkbox',{staticClass:"md-primary",model:{value:(_vm.custom.origInclude),callback:function ($$v) {_vm.$set(_vm.custom, "origInclude", $$v)},expression:"custom.origInclude"}},[_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('labelKeepOriginal'))}})]),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelInclude'))}}),_c('md-textarea',{model:{value:(_vm.custom.include),callback:function ($$v) {_vm.$set(_vm.custom, "include", $$v)},expression:"custom.include"}})],1)],1),_c('md-checkbox',{staticClass:"md-primary",model:{value:(_vm.custom.origMatch),callback:function ($$v) {_vm.$set(_vm.custom, "origMatch", $$v)},expression:"custom.origMatch"}},[_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('labelKeepOriginal'))}})]),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelMatch'))}}),_c('md-textarea',{model:{value:(_vm.custom.match),callback:function ($$v) {_vm.$set(_vm.custom, "match", $$v)},expression:"custom.match"}})],1)],1),_c('md-checkbox',{staticClass:"md-primary",model:{value:(_vm.custom.origExclude),callback:function ($$v) {_vm.$set(_vm.custom, "origExclude", $$v)},expression:"custom.origExclude"}},[_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('labelKeepOriginal'))}})]),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelExclude'))}}),_c('md-textarea',{model:{value:(_vm.custom.exclude),callback:function ($$v) {_vm.$set(_vm.custom, "exclude", $$v)},expression:"custom.exclude"}})],1)],1),_c('md-checkbox',{staticClass:"md-primary",model:{value:(_vm.custom.origExcludeMatch),callback:function ($$v) {_vm.$set(_vm.custom, "origExcludeMatch", $$v)},expression:"custom.origExcludeMatch"}},[_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('labelKeepOriginal'))}})]),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelExcludeMatch'))}}),_c('md-textarea',{model:{value:(_vm.custom.excludeMatch),callback:function ($$v) {_vm.$set(_vm.custom, "excludeMatch", $$v)},expression:"custom.excludeMatch"}})],1)],1)],1)],1)])}
var settingsvue_type_template_id_e9080c28_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/edit/settings.vue?vue&type=template&id=e9080c28&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/settings.vue?vue&type=script&lang=js&
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



/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  props: ['value', 'settings'],
  components: {
    Tooltip: tooltip_default.a
  },
  computed: {
    custom() {
      return this.settings.custom || {};
    },

    config() {
      return this.settings.config || {};
    },

    placeholders() {
      var value = this.value;
      return {
        name: Object(object["a" /* objectGet */])(value, 'meta.name'),
        homepageURL: Object(object["a" /* objectGet */])(value, 'meta.homepageURL'),
        updateURL: Object(object["a" /* objectGet */])(value, 'meta.updateURL') || Object(common["j" /* i18n */])('hintUseDownloadURL'),
        downloadURL: Object(object["a" /* objectGet */])(value, 'meta.downloadURL') || value.lastInstallURL
      };
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/edit/settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css&
var settingsvue_type_style_index_0_lang_css_ = __webpack_require__(211);

// CONCATENATED MODULE: ./src/options/views/edit/settings.vue






/* normalize component */

var settings_component = Object(componentNormalizer["a" /* default */])(
  edit_settingsvue_type_script_lang_js_,
  settingsvue_type_template_id_e9080c28_render,
  settingsvue_type_template_id_e9080c28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var settings = (settings_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/values.vue?vue&type=template&id=4c310775&
var valuesvue_type_template_id_4c310775_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"edit-values"},[_c('div',{staticClass:"page-container md-layout-column"},[_c('md-button',{staticClass:"md-icon-button md-raised md-primary",on:{"click":_vm.onNew}},[_c('md-icon',[_vm._v("add")])],1),(_vm.totalPages > 1)?_c('div',{staticClass:"inline-block ml-2"},[_c('button',{attrs:{"disabled":!_vm.hasPrevious},on:{"click":function($event){_vm.page -= 1}}},[_vm._v("←")]),_c('span',{staticClass:"mx-1",domProps:{"textContent":_vm._s(_vm.page)}}),_c('button',{attrs:{"disabled":!_vm.hasNext},on:{"click":function($event){_vm.page += 1}}},[_vm._v("→")])]):_vm._e(),_c('div',{staticClass:"margin-top"},_vm._l((_vm.currentPage),function(key){return _c('md-table',[_c('md-table-row',{on:{"click":function($event){return _vm.onEdit(key)}}},[_c('md-table-cell',[_c('span',{domProps:{"textContent":_vm._s(key)}}),_c('md-button',{staticClass:"md-icon-button md-list-action",on:{"click":function($event){$event.stopPropagation();return _vm.onRemove(key)}}},[_c('md-icon',{staticClass:"md-accent"},[_vm._v("delete")])],1)],1),_c('md-table-cell',[_c('span',{domProps:{"textContent":_vm._s(_vm.getValue(key, true))}})])],1)],1)}),1),(_vm.current)?_c('md-drawer',{staticClass:"md-right",attrs:{"md-active":_vm.current.isNew},on:{"update:mdActive":function($event){return _vm.$set(_vm.current, "isNew", $event)},"update:md-active":function($event){return _vm.$set(_vm.current, "isNew", $event)}}},[_c('md-toolbar',{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[_c('span',{staticClass:"md-title",domProps:{"textContent":_vm._s(_vm.i18n('labelEditValue'))}})]),_c('md-list',[_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('valueLabelKey'))}}),_c('md-input',{model:{value:(_vm.current.key),callback:function ($$v) {_vm.$set(_vm.current, "key", $$v)},expression:"current.key"}})],1)],1),_c('md-list-item',[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('valueLabelValue'))}}),_c('md-textarea',{model:{value:(_vm.current.value),callback:function ($$v) {_vm.$set(_vm.current, "value", $$v)},expression:"current.value"}})],1)],1)],1),_c('md-button',{staticClass:"md-raised md-primary",domProps:{"textContent":_vm._s(_vm.i18n('editValueSave'))},on:{"click":_vm.onSave}}),_c('md-button',{staticClass:"md-raised",domProps:{"textContent":_vm._s(_vm.i18n('editValueCancel'))},on:{"click":_vm.onCancel}})],1):_vm._e()],1)])}
var valuesvue_type_template_id_4c310775_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/edit/values.vue?vue&type=template&id=4c310775&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/values.vue?vue&type=script&lang=js&
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


var PAGE_SIZE = 25;
var MAX_LENGTH = 1024;
/* harmony default export */ var valuesvue_type_script_lang_js_ = ({
  props: ['show', 'script'],
  components: {
    Icon: ui_icon["a" /* default */]
  },

  data() {
    return {
      page: 1,
      current: null,
      keys: null,
      values: null
    };
  },

  computed: {
    totalPages() {
      if (!this.keys) return 0;
      return Math.floor(this.keys.length / PAGE_SIZE) + 1;
    },

    currentPage() {
      if (!this.keys) return null;
      this.page = Math.max(1, Math.min(this.page, this.totalPages));
      var offset = PAGE_SIZE * (this.page - 1);
      return this.keys.slice(offset, offset + PAGE_SIZE);
    },

    hasPrevious() {
      return this.page > 1;
    },

    hasNext() {
      return this.page < this.totalPages;
    }

  },
  watch: {
    show(show) {
      if (show && !this.keys) this.refresh();
    }

  },
  methods: {
    getValue(key, sliced) {
      var value = this.values[key];
      var type = value[0];
      value = value.slice(1);
      if (type === 's') value = JSON.stringify(value);

      if (sliced && value.length > MAX_LENGTH) {
        value = value.slice(0, MAX_LENGTH);
      }

      return value;
    },

    refresh() {
      var _this = this;

      Object(common["q" /* sendMessage */])({
        cmd: 'GetValueStore',
        data: this.script.props.id
      }).then(function (values) {
        _this.values = values;
        _this.keys = Object.keys(values).sort();
      });
    },

    updateValue(_ref) {
      var _this2 = this;

      var key = _ref.key,
          value = _ref.value,
          isNew = _ref.isNew;
      var rawValue = value ? `o${value}` : '';
      return Object(common["q" /* sendMessage */])({
        cmd: 'UpdateValue',
        data: {
          id: this.script.props.id,
          update: {
            key,
            value: rawValue
          }
        }
      }).then(function () {
        if (value) {
          _this2.values[key] = rawValue;
          if (isNew) _this2.keys.push(key);
        } else {
          var i = _this2.keys.indexOf(key);

          if (i >= 0) _this2.keys.splice(i, 1);
          delete _this2.values[key];
        }
      });
    },

    onNew() {
      this.current = {
        isNew: true,
        key: '',
        value: ''
      };
    },

    onRemove(key) {
      var _this3 = this;

      this.updateValue({
        key
      }).then(function () {
        if (_this3.current && _this3.current.key === key) {
          _this3.current = null;
        }
      });
    },

    onEdit(key) {
      this.current = {
        isNew: false,
        key,
        value: this.getValue(key)
      };
    },

    onSave() {
      var _this4 = this;

      this.updateValue(this.current).then(function () {
        _this4.current = null;
      });
    },

    onCancel() {
      this.current = null;
    }

  },

  created() {
    var _this5 = this;

    var unwatch;

    var init = function init() {
      if (_this5.show) {
        _this5.refresh();

        if (unwatch) unwatch();
      }
    };

    unwatch = this.$watch('show', init);
    init();
  }

});
// CONCATENATED MODULE: ./src/options/views/edit/values.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_valuesvue_type_script_lang_js_ = (valuesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css&
var valuesvue_type_style_index_0_lang_css_ = __webpack_require__(212);

// CONCATENATED MODULE: ./src/options/views/edit/values.vue






/* normalize component */

var values_component = Object(componentNormalizer["a" /* default */])(
  edit_valuesvue_type_script_lang_js_,
  valuesvue_type_template_id_4c310775_render,
  valuesvue_type_template_id_4c310775_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var values = (values_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/index.vue?vue&type=script&lang=js&
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








function fromList(list) {
  return (list || []).join('\n');
}

function toList(text) {
  return text.split('\n').map(function (line) {
    return line.trim();
  }).filter(Boolean);
}

/* harmony default export */ var editvue_type_script_lang_js_ = ({
  props: ['initial'],
  components: {
    VmCode: code["a" /* default */],
    VmSettings: settings,
    VmValues: values
  },

  data() {
    return {
      nav: 'code',
      canSave: false,
      script: null,
      tooLarge: false,
      code: '',
      settings: {},
      commands: {
        save: this.save,
        close: this.close
      }
    };
  },

  computed: {
    scriptName() {
      var _ref = this.script || {},
          custom = _ref.custom,
          meta = _ref.meta;

      return custom && custom.name || meta && meta.name;
    }

  },
  watch: {
    code() {
      this.canSave = true;
    },

    settings: {
      deep: true,

      handler() {
        this.canSave = true;
      }

    }
  },

  created() {
    this.script = this.initial;
  },

  mounted() {
    var _this = this;

    var id = Object(object["a" /* objectGet */])(this.script, 'props.id');
    (id ? Object(common["q" /* sendMessage */])({
      cmd: 'GetScriptCode',
      data: id
    }) : Object(common["q" /* sendMessage */])({
      cmd: 'NewScript',
      data: router["a" /* route */].paths[2]
    }).then(function (_ref2) {
      var script = _ref2.script,
          code = _ref2.code;
      _this.script = script;
      return code;
    })).then(function (code) {
      _this.code = code;
      var settings = {};
      var _this$script = _this.script,
          custom = _this$script.custom,
          config = _this$script.config;
      settings.config = {
        shouldUpdate: config.shouldUpdate
      };
      settings.custom = ['name', 'homepageURL', 'updateURL', 'downloadURL', 'origInclude', 'origExclude', 'origMatch', 'origExcludeMatch'].reduce(function (value, key) {
        value[key] = custom[key];
        return value;
      }, {
        include: fromList(custom.include),
        match: fromList(custom.match),
        exclude: fromList(custom.exclude),
        excludeMatch: fromList(custom.excludeMatch),
        runAt: custom.runAt || custom['run-at'] || ''
      });
      _this.settings = settings;

      _this.$nextTick(function () {
        _this.canSave = false;
      });
    });
  },

  methods: {
    save() {
      var _this2 = this;

      var _this$settings = this.settings,
          config = _this$settings.config,
          rawCustom = _this$settings.custom;
      var custom = ['name', 'runAt', 'homepageURL', 'updateURL', 'downloadURL', 'origInclude', 'origExclude', 'origMatch', 'origExcludeMatch'].reduce(function (val, key) {
        val[key] = rawCustom[key];
        return val;
      }, {
        include: toList(rawCustom.include),
        match: toList(rawCustom.match),
        exclude: toList(rawCustom.exclude),
        excludeMatch: toList(rawCustom.excludeMatch)
      });
      var id = Object(object["a" /* objectGet */])(this.script, 'props.id');
      return Object(common["q" /* sendMessage */])({
        cmd: 'ParseScript',
        data: {
          id,
          custom,
          config,
          code: this.code,
          // User created scripts MUST be marked `isNew` so that
          // the backend is able to check namespace conflicts,
          // otherwise the script with same namespace will be overridden
          isNew: !id,
          message: ''
        }
      }).then(function (res) {
        _this2.canSave = false;
        if (Object(object["a" /* objectGet */])(res, 'where.id')) _this2.script = res.update;
      }, function (err) {
        showMessage({
          text: err
        });
      });
    },

    close() {
      var _this3 = this;

      (this.canSave ? Promise.reject() : Promise.resolve()).catch(function () {
        return new Promise(function (resolve, reject) {
          showMessage({
            input: false,
            text: Object(common["j" /* i18n */])('confirmNotSaved'),
            buttons: [{
              text: Object(common["j" /* i18n */])('buttonOK'),
              onClick: resolve
            }, {
              text: Object(common["j" /* i18n */])('buttonCancel'),
              onClick: reject
            }],
            onBackdropClick: reject
          });
        });
      }).then(function () {
        return _this3.$emit('close');
      }, common["n" /* noop */]);
    },

    saveClose() {
      this.save().then(this.close);
    },

    onWarnLarge(tooLarge) {
      this.tooLarge = tooLarge;
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/edit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css&
var editvue_type_style_index_0_lang_css_ = __webpack_require__(213);

// CONCATENATED MODULE: ./src/options/views/edit/index.vue






/* normalize component */

var edit_component = Object(componentNormalizer["a" /* default */])(
  views_editvue_type_script_lang_js_,
  editvue_type_template_id_2ef9476b_render,
  editvue_type_template_id_2ef9476b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var edit = (edit_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-installed.vue?vue&type=script&lang=js&
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













var filterOptions = {
  sort: [{
    value: 'exec',
    title: Object(common["j" /* i18n */])('filterExecutionOrder')
  }, {
    value: 'alpha',
    title: Object(common["j" /* i18n */])('filterAlphabeticalOrder')
  }]
};
var filters = {
  sort: {
    value: null,
    title: null,

    set(value) {
      var option = filterOptions.sort.find(function (item) {
        return item.value === value;
      });
      var sort = filters.sort;

      if (!option) {
        sort.set(filterOptions.sort[0].value);
        return;
      }

      sort.value = option && option.value;
      sort.title = option && option.title;
    }

  }
};
Object(hook_setting["a" /* default */])('filters.sort', function (value) {
  filters.sort.set(value);
});
options["a" /* default */].ready(function () {
  filters.sort.set(options["a" /* default */].get('filters.sort'));
});
/* harmony default export */ var tab_installedvue_type_script_lang_js_ = ({
  components: {
    Item: script_item,
    Edit: edit,
    Tooltip: tooltip_default.a,
    SettingCheck: setting_check["a" /* default */],
    LocaleGroup: locale_group,
    Dropdown: dropdown_default.a,
    Icon: ui_icon["a" /* default */]
  },

  data() {
    return {
      store: store,
      filterOptions,
      filters,
      script: null,
      search: null,
      modal: null,
      menuNewActive: false
    };
  },

  watch: {
    search: 'updateLater',
    'filters.sort.value': 'updateLater',

    'store.scripts'() {
      this.onUpdate();
      this.onHashChange();
    },

    'store.route.paths.1': 'onHashChange'
  },
  computed: {
    message() {
      if (this.store.loading) {
        return Object(common["j" /* i18n */])('msgLoading');
      }

      if (!this.store.scripts.length) {
        return Object(common["j" /* i18n */])('labelNoScripts');
      }

      if (!Object(object["a" /* objectGet */])(this.store, 'filteredScripts.length')) {
        return Object(common["j" /* i18n */])('labelNoSearchScripts');
      }
    }

  },
  methods: {
    onUpdate() {
      var search = this.search,
          sort = this.filters.sort;
      var lowerSearch = (search || '').toLowerCase();
      var scripts = this.store.scripts;
      var filteredScripts = search ? scripts.filter(function (script) {
        return script.$cache.search.includes(lowerSearch);
      }) : scripts.slice();

      if (sort.value === 'alpha') {
        var showEnabledFirst = options["a" /* default */].get('filters.showEnabledFirst');

        var getSortKey = function getSortKey(item) {
          var keys = [];

          if (showEnabledFirst) {
            keys.push(item.config.enabled ? 0 : 1);
          }

          keys.push(item.$cache.lowerName);
          return keys.join('');
        };

        filteredScripts.sort(function (a, b) {
          var nameA = getSortKey(a);
          var nameB = getSortKey(b);
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      }

      this.store.filteredScripts = filteredScripts;
    },

    updateLater() {
      this.debouncedUpdate();
    },

    updateAll() {
      Object(common["q" /* sendMessage */])({
        cmd: 'CheckUpdateAll'
      });
    },

    installFromURL() {
      new Promise(function (resolve, reject) {
        showMessage({
          text: Object(common["j" /* i18n */])('hintInputURL'),
          onBackdropClick: reject,
          buttons: [{
            type: 'submit',
            text: Object(common["j" /* i18n */])('buttonOK'),
            onClick: resolve
          }, {
            text: Object(common["j" /* i18n */])('buttonCancel'),
            onClick: reject
          }]
        });
      }).then(function (url) {
        if (url && url.includes('://')) return Object(common["q" /* sendMessage */])({
          cmd: 'ConfirmInstall',
          data: {
            url
          }
        });
      }, common["n" /* noop */]).catch(function (err) {
        if (err) showMessage({
          text: err
        });
      });
    },

    moveScript(data) {
      var _this = this;

      if (data.from === data.to) return;
      Object(common["q" /* sendMessage */])({
        cmd: 'Move',
        data: {
          id: this.store.scripts[data.from].props.id,
          offset: data.to - data.from
        }
      }).then(function () {
        var scripts = _this.store.scripts;
        var i = Math.min(data.from, data.to);
        var j = Math.max(data.from, data.to);
        var seq = [scripts.slice(0, i), scripts.slice(i, j + 1), scripts.slice(j + 1)];

        if (i === data.to) {
          seq[1].unshift(seq[1].pop());
        } else {
          seq[1].push(seq[1].shift());
        }

        _this.store.scripts = seq.concat.apply([], seq);
      });
    },

    onOrderChange(e) {
      console.log(e.target.value);
      options["a" /* default */].set('filters.sort', e.target.value);
    },

    onStateChange(active) {
      this.menuNewActive = active;
    },

    onEditScript(id) {
      Object(router["b" /* setRoute */])(['scripts', id].filter(Boolean).join('/'), true);
    },

    onHashChange() {
      var id = this.store.route.paths[1];

      if (id === '_new') {
        this.script = {};
      } else {
        var nid = id && +id || null;
        this.script = nid && this.store.scripts.find(function (script) {
          return script.props.id === nid;
        });
      }
    }

  },

  created() {
    this.debouncedUpdate = Object(common["c" /* debounce */])(this.onUpdate, 200);
    this.onUpdate();
  }

});
// CONCATENATED MODULE: ./src/options/views/tab-installed.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_tab_installedvue_type_script_lang_js_ = (tab_installedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css&
var tab_installedvue_type_style_index_0_lang_css_ = __webpack_require__(214);

// CONCATENATED MODULE: ./src/options/views/tab-installed.vue






/* normalize component */

var tab_installed_component = Object(componentNormalizer["a" /* default */])(
  views_tab_installedvue_type_script_lang_js_,
  tab_installedvue_type_template_id_e640f6d0_render,
  tab_installedvue_type_template_id_e640f6d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_installed = (tab_installed_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/index.vue?vue&type=template&id=a3a7a914&
var tab_settingsvue_type_template_id_a3a7a914_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-settings"},[_c('h1',{domProps:{"textContent":_vm._s(_vm.i18n('labelSettings'))}}),_c('section',[_c('h3',{domProps:{"textContent":_vm._s(_vm.i18n('labelGeneral'))}}),_c('div',{staticClass:"mb-1"},[_c('setting-check',{attrs:{"name":"autoUpdate"}}),_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelAutoUpdate'))}})],1),_c('div',{staticClass:"mb-1"},[_c('setting-check',{attrs:{"name":"autoReload"}}),_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelAutoReloadCurrentTab'))}})],1),_c('div',{staticClass:"mb-1"},[_c('setting-check',{attrs:{"name":"notifyUpdates"}}),_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelNotifyUpdates'))}})],1),_c('div',{staticClass:"mb-1"},[_c('div',{staticClass:"md-layout-item full-control"},[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelBadge'))}}),_c('md-select',{model:{value:(_vm.showBadge),callback:function ($$v) {_vm.showBadge=$$v},expression:"showBadge"}},[_c('md-option',{attrs:{"value":"none"}},[_vm._v(_vm._s(_vm.i18n('labelBadgeNone')))]),_c('md-option',{attrs:{"value":"unique"}},[_vm._v(_vm._s(_vm.i18n('labelBadgeUnique')))]),_c('md-option',{attrs:{"value":"total"}},[_vm._v(_vm._s(_vm.i18n('labelBadgeTotal')))])],1)],1)],1)])]),_c('vm-import'),_c('vm-export'),_c('vm-sync'),_c('div',{staticClass:"show-advanced"},[_c('md-button',{staticClass:"md-raised md-primary",on:{"click":function($event){_vm.showAdvanced = !_vm.showAdvanced}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelAdvanced'))}}),_c('md-icon',{domProps:{"textContent":_vm._s(("keyboard_arrow_" + (_vm.showAdvanced ? 'down' : 'right')))}})],1)],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showAdvanced),expression:"showAdvanced"}]},[_c('section',[_c('h3',{domProps:{"textContent":_vm._s(_vm.i18n('labelEditor'))}}),_c('div',{staticClass:"mb-1 "},[_c('setting-check',{attrs:{"name":"editor.lineWrapping"}}),_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelLineWrapping'))}})],1),_c('div',{staticClass:"mb-1 full-control"},[_c('md-field',[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelIndentUnit'))}}),_c('md-input',{attrs:{"type":"number"},model:{value:(_vm.indentUnit),callback:function ($$v) {_vm.indentUnit=$$v},expression:"indentUnit"}})],1)],1)]),_c('vm-template'),_c('vm-blacklist'),_c('vm-css')],1)],1)}
var tab_settingsvue_type_template_id_a3a7a914_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-settings/index.vue?vue&type=template&id=a3a7a914&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-import.vue?vue&type=template&id=a576af10&
var vm_importvue_type_template_id_a576af10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',{domProps:{"textContent":_vm._s(_vm.i18n('labelDataImport'))}}),_c('md-button',{staticClass:"md-dense md-raised md-primary",on:{"click":_vm.importFile}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonImportData'))}})]),_c('md-button',{staticClass:"md-dense md-raised md-primary",attrs:{"disabled":_vm.vacuuming,"title":_vm.i18n('hintVacuum')},on:{"click":_vm.vacuum}},[_c('span',{domProps:{"textContent":_vm._s(_vm.labelVacuum)}})]),_c('div',{staticClass:"mt-1"},[_c('setting-check',{attrs:{"name":"importSettings"}}),_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelImportSettings'))}})],1)],1)}
var vm_importvue_type_template_id_a576af10_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-import.vue?vue&type=template&id=a576af10&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-import.vue?vue&type=script&lang=js&
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




/* harmony default export */ var vm_importvue_type_script_lang_js_ = ({
  components: {
    SettingCheck: setting_check["a" /* default */]
  },

  data() {
    return {
      vacuuming: false,
      labelVacuum: this.i18n('buttonVacuum')
    };
  },

  methods: {
    importFile() {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.zip';

      input.onchange = function () {
        if (input.files && input.files.length) importData(input.files[0]);
      };

      input.click();
    },

    vacuum() {
      var _this = this;

      this.vacuuming = true;
      this.labelVacuum = this.i18n('buttonVacuuming');
      Object(common["q" /* sendMessage */])({
        cmd: 'Vacuum'
      }).then(function () {
        _this.vacuuming = false;
        _this.labelVacuum = _this.i18n('buttonVacuumed');
      });
    }

  }
});

function forEachItem(obj, cb) {
  if (obj) {
    Object.keys(obj).forEach(function (key) {
      cb(obj[key], key);
    });
  }
}

function getVMConfig(text) {
  var vm;

  try {
    vm = JSON.parse(text);
  } catch (e) {
    console.warn('Error parsing ViolentMonkey configuration.');
  }

  return vm || {};
}

function getVMFile(entry, vmFile) {
  if (!entry.filename.endsWith('.user.js')) return;
  var vm = vmFile || {};
  return new Promise(function (resolve) {
    var writer = new zip.TextWriter();
    entry.getData(writer, function (text) {
      var data = {
        code: text
      };

      if (vm.scripts) {
        var more = vm.scripts[entry.filename.slice(0, -8)];

        if (more) {
          data.custom = more.custom;
          data.config = more.config || {};
          data.position = more.position; // Import data from older version

          if ('enabled' in more) data.config.enabled = more.enabled;
          if ('update' in more) data.config.shouldUpdate = more.update;
        }
      }

      Object(common["q" /* sendMessage */])({
        cmd: 'ParseScript',
        data
      }).then(function () {
        return resolve(true);
      }, function () {
        return resolve();
      });
    });
  });
}

function getVMFiles(entries) {
  return new Promise(function (resolve) {
    var data = {
      entries
    };
    var i = entries.findIndex(function (entry) {
      return entry.filename && entry.filename.toLowerCase() === 'violentmonkey';
    });

    if (i < 0) {
      data.vm = {};
      return resolve(data);
    }

    var writer = new zip.TextWriter();
    entries[i].getData(writer, function (text) {
      entries.splice(i, 1);
      data.vm = getVMConfig(text);
      resolve(data);
    });
  });
}

function readZip(file) {
  return new Promise(function (resolve, reject) {
    zip.createReader(new zip.BlobReader(file), function (res) {
      res.getEntries(function (entries) {
        resolve(entries);
      });
    }, function (err) {
      reject(err);
    });
  });
}

function importData(file) {
  readZip(file).then(getVMFiles).then(function (data) {
    var vm = data.vm,
        entries = data.entries;

    if (options["a" /* default */].get('importSettings')) {
      var ignoreKeys = ['sync'];
      forEachItem(vm.settings, function (value, key) {
        if (ignoreKeys.includes(key)) return;
        options["a" /* default */].set(key, value);
      });
    }

    return Promise.all(entries.map(function (entry) {
      return getVMFile(entry, vm);
    })).then(function (res) {
      return res.filter(Boolean).length;
    }).then(function (count) {
      forEachItem(vm.values, function (valueStore, key) {
        if (valueStore) {
          Object(common["q" /* sendMessage */])({
            cmd: 'SetValueStore',
            data: {
              where: {
                uri: key
              },
              valueStore
            }
          });
        }
      });
      showMessage({
        text: Object(common["j" /* i18n */])('msgImported', [count])
      });
      Object(common["q" /* sendMessage */])({
        cmd: 'CheckPosition'
      });
    });
  });
}
// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-import.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_settings_vm_importvue_type_script_lang_js_ = (vm_importvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-import.vue





/* normalize component */

var vm_import_component = Object(componentNormalizer["a" /* default */])(
  tab_settings_vm_importvue_type_script_lang_js_,
  vm_importvue_type_template_id_a576af10_render,
  vm_importvue_type_template_id_a576af10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vm_import = (vm_import_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-export.vue?vue&type=template&id=fd99e178&
var vm_exportvue_type_template_id_fd99e178_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',{domProps:{"textContent":_vm._s(_vm.i18n('labelDataExport'))}}),_c('div',{staticClass:"export-list ellipsis"},_vm._l((_vm.items),function(item){return _c('md-checkbox',{key:_vm.getName(item),staticClass:"md-primary",on:{"click":function($event){item.active = !item.active}},model:{value:(item.active),callback:function ($$v) {_vm.$set(item, "active", $$v)},expression:"item.active"}},[_vm._v(_vm._s(_vm.getName(item)))])}),1),_c('md-button',{staticClass:"md-dense md-raised md-primary",on:{"click":function($event){return _vm.toggleSelection()}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonAllNone'))}})]),_c('md-button',{staticClass:"md-dense md-raised md-primary",attrs:{"disabled":_vm.exporting},on:{"click":_vm.exportData}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonExportData'))}})]),_c('span',{staticClass:"ml-1"},[_c('setting-check',{attrs:{"name":"exportValues"}}),_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelExportScriptData'))}})],1),(_vm.store.ffDownload)?_c('modal',{attrs:{"transition":"in-out","visible":!!_vm.store.ffDownload.url},on:{"close":function($event){_vm.store.ffDownload = {}}}},[_c('div',{staticClass:"export-modal modal-content"},[_c('a',{attrs:{"download":_vm.store.ffDownload.name,"href":_vm.store.ffDownload.url}},[_vm._v("\n        Right click and save as"),_c('br'),_c('strong',[_vm._v("scripts.zip")])])])]):_vm._e()],1)}
var vm_exportvue_type_template_id_fd99e178_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-export.vue?vue&type=template&id=fd99e178&

// EXTERNAL MODULE: ./src/common/ua.js
var ua = __webpack_require__(19);

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-export.vue?vue&type=script&lang=js&
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








/**
 * Note:
 * - Firefox does not support multiline <select>
 */

if (ua["c" /* isFirefox */]) store.ffDownload = {};
/* harmony default export */ var vm_exportvue_type_script_lang_js_ = ({
  components: {
    SettingCheck: setting_check["a" /* default */],
    Modal: modal_default.a
  },

  data() {
    return {
      isFirefox: ua["c" /* isFirefox */],
      store: store,
      exporting: false,
      items: []
    };
  },

  watch: {
    'store.scripts': 'initItems'
  },
  computed: {
    selectedIds() {
      return this.items.filter(function (item) {
        return item.active;
      }).map(function (item) {
        return item.script.props.id;
      });
    }

  },

  created() {
    this.initItems();
  },

  methods: {
    initItems() {
      this.items = (store.scripts || []).filter(function (_ref) {
        var removed = _ref.config.removed;
        return !removed;
      }).map(function (script) {
        return {
          script,
          active: true
        };
      });
    },

    toggleSelection() {
      if (!store.scripts.length) return;
      var active = this.selectedIds.length < store.scripts.length;
      this.items.forEach(function (item) {
        item.active = active;
      });
    },

    exportData() {
      var _this = this;

      this.exporting = true;
      Promise.resolve(exportData(this.selectedIds)).then(download).catch(function (err) {
        console.error(err);
      }).then(function () {
        _this.exporting = false;
      });
    },

    getName(item) {
      return item.script.custom.name || Object(common["g" /* getLocaleString */])(item.script.meta, 'name');
    }

  }
});

function getWriter() {
  return new Promise(function (resolve) {
    zip.createWriter(new zip.BlobWriter(), function (writer) {
      resolve(writer);
    });
  });
}

function addFile(writer, file) {
  return new Promise(function (resolve) {
    writer.add(file.name, new zip.TextReader(file.content), function () {
      resolve(writer);
    });
  });
}

function leftpad(src, length) {
  var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var str = `${src}`;

  while (str.length < length) {
    str = pad + str;
  }

  return str;
}

function getTimestamp() {
  var date = new Date();
  return `${date.getFullYear()}-${leftpad(date.getMonth() + 1, 2)}-${leftpad(date.getDate(), 2)}_${leftpad(date.getHours(), 2)}.${leftpad(date.getMinutes(), 2)}.${leftpad(date.getSeconds(), 2)}`;
}

function getExportname() {
  return `scripts_${getTimestamp()}.zip`;
}

function download(blob) {
  // Known issue: does not work on Firefox
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1331176
  if (ua["c" /* isFirefox */]) {
    var reader = new FileReader();

    reader.onload = function () {
      store.ffDownload = {
        name: getExportname(),
        url: reader.result
      };
    };

    reader.readAsDataURL(blob);
  } else {
    downloadBlob(blob, getExportname());
  }
}

function exportData(selectedIds) {
  var withValues = options["a" /* default */].get('exportValues');
  return (selectedIds.length ? Object(common["q" /* sendMessage */])({
    cmd: 'ExportZip',
    data: {
      values: withValues,
      ids: selectedIds
    }
  }) : Promise.resolve()).then(function (data) {
    var names = {};
    var vm = {
      scripts: {},
      settings: options["a" /* default */].get()
    };
    delete vm.settings.sync;
    if (withValues) vm.values = {};
    var files = (Object(object["a" /* objectGet */])(data, 'items') || []).map(function (_ref2) {
      var script = _ref2.script,
          code = _ref2.code;
      var name = script.custom.name || script.meta.name || script.props.id;

      if (names[name]) {
        names[name] += 1;
        name = `${name}_${names[name]}`;
      } else names[name] = 1;

      var info = {
        custom: script.custom,
        config: script.config,
        position: script.props.position
      };

      if (withValues) {
        // `values` are related to scripts by `props.id` in Violentmonkey,
        // but by the global `props.uri` when exported.
        var values = data.values[script.props.id];
        if (values) vm.values[script.props.uri] = values;
      }

      vm.scripts[name] = info;
      return {
        name: `${name}.user.js`,
        content: code
      };
    });
    files.push({
      name: 'violentmonkey',
      content: JSON.stringify(vm)
    });
    return files;
  }).then(function (files) {
    return files.reduce(function (result, file) {
      return result.then(function (writer) {
        return addFile(writer, file);
      });
    }, getWriter());
  }).then(function (writer) {
    return new Promise(function (resolve) {
      writer.close(function (blob) {
        resolve(blob);
      });
    });
  });
}
// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-export.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_settings_vm_exportvue_type_script_lang_js_ = (vm_exportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css&
var vm_exportvue_type_style_index_0_lang_css_ = __webpack_require__(215);

// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-export.vue






/* normalize component */

var vm_export_component = Object(componentNormalizer["a" /* default */])(
  tab_settings_vm_exportvue_type_script_lang_js_,
  vm_exportvue_type_template_id_fd99e178_render,
  vm_exportvue_type_template_id_fd99e178_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vm_export = (vm_export_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-sync.vue?vue&type=template&id=69571d9a&
var vm_syncvue_type_template_id_69571d9a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',{domProps:{"textContent":_vm._s(_vm.i18n('labelSync'))}}),(_vm.state)?_c('div',[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelSyncService'))}}),_c('select',{staticClass:"mx-1",domProps:{"value":_vm.syncConfig.current},on:{"change":_vm.onSyncChange}},_vm._l((_vm.syncServices),function(service){return _c('option',{domProps:{"value":service.name,"textContent":_vm._s(service.displayName)}})}),0),(_vm.service.name)?_c('button',{attrs:{"disabled":!_vm.state.canAuthorize},domProps:{"textContent":_vm._s(_vm.state.label)},on:{"click":_vm.onAuthorize}}):_vm._e(),(_vm.service.name)?_c('button',{attrs:{"disabled":!_vm.state.canSync},on:{"click":_vm.onSync}},[_c('icon',{attrs:{"name":"refresh"}})],1):_vm._e()]):_vm._e(),(_vm.state)?_c('p',{staticClass:"mt-1",domProps:{"textContent":_vm._s(_vm.state.message)}}):_vm._e(),_c('div',{staticClass:"mt-1"},[_c('setting-check',{attrs:{"name":"syncScriptStatus"}}),_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('labelSyncScriptStatus'))}})],1)])}
var vm_syncvue_type_template_id_69571d9a_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-sync.vue?vue&type=template&id=69571d9a&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(13);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-sync.vue?vue&type=script&lang=js&

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






var SYNC_CURRENT = 'sync.current';
var syncConfig = {
  current: ''
};
Object(hook_setting["a" /* default */])(SYNC_CURRENT, function (value) {
  syncConfig.current = value || '';
});
/* harmony default export */ var vm_syncvue_type_script_lang_js_ = ({
  components: {
    SettingCheck: setting_check["a" /* default */],
    Icon: ui_icon["a" /* default */]
  },

  data() {
    return {
      syncConfig,
      store: store
    };
  },

  computed: {
    syncServices() {
      var states = this.store.sync;

      if (states && states.length) {
        return [{
          displayName: this.i18n('labelSyncDisabled'),
          name: ''
        }].concat(toConsumableArray_default()(states));
      }
    },

    service() {
      if (this.syncServices) {
        var current = this.syncConfig.current || '';
        var service = this.syncServices.find(function (item) {
          return item.name === current;
        });

        if (!service) {
          console.warn('Invalid current service:', current);
          service = this.syncServices[0];
        }

        return service;
      }
    },

    state() {
      var service = this.service;

      if (service) {
        var canAuthorize = ['unauthorized', 'error', 'authorized'].includes(service.authState) && ['idle', 'error'].includes(service.syncState);
        var canSync = canAuthorize && service.authState === 'authorized';
        return {
          message: this.getMessage(),
          label: this.getLabel(),
          canAuthorize,
          canSync
        };
      }
    }

  },
  methods: {
    onSyncChange(e) {
      var value = e.target.value;
      options["a" /* default */].set(SYNC_CURRENT, value);
    },

    onAuthorize() {
      var service = this.service;

      if (['authorized'].includes(service.authState)) {
        // revoke
        Object(common["q" /* sendMessage */])({
          cmd: 'SyncRevoke'
        });
      } else if (['unauthorized', 'error'].includes(service.authState)) {
        // authorize
        Object(common["q" /* sendMessage */])({
          cmd: 'SyncAuthorize'
        });
      }
    },

    onSync() {
      Object(common["q" /* sendMessage */])({
        cmd: 'SyncStart'
      });
    },

    getMessage() {
      var service = this.service;
      if (service.authState === 'initializing') return this.i18n('msgSyncInit');
      if (service.authState === 'error') return this.i18n('msgSyncInitError');
      if (service.syncState === 'error') return this.i18n('msgSyncError');
      if (service.syncState === 'ready') return this.i18n('msgSyncReady');

      if (service.syncState === 'syncing') {
        var progress = '';

        if (service.progress && service.progress.total) {
          progress = ` (${service.progress.finished}/${service.progress.total})`;
        }

        return this.i18n('msgSyncing') + progress;
      }

      if (service.lastSync) {
        var lastSync = new Date(service.lastSync).toLocaleString();
        return this.i18n('lastSync', lastSync);
      }
    },

    getLabel() {
      var service = this.service;
      if (service.authState === 'authorizing') return this.i18n('labelSyncAuthorizing');
      if (service.authState === 'authorized') return this.i18n('labelSyncRevoke');
      return this.i18n('labelSyncAuthorize');
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-sync.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_settings_vm_syncvue_type_script_lang_js_ = (vm_syncvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-sync.vue





/* normalize component */

var vm_sync_component = Object(componentNormalizer["a" /* default */])(
  tab_settings_vm_syncvue_type_script_lang_js_,
  vm_syncvue_type_template_id_69571d9a_render,
  vm_syncvue_type_template_id_69571d9a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vm_sync = (vm_sync_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-template.vue?vue&type=template&id=3c36f537&
var vm_templatevue_type_template_id_3c36f537_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',{domProps:{"textContent":_vm._s(_vm.i18n('labelScriptTemplate'))}}),_c('setting-text',{ref:"template",staticClass:"mb-0",attrs:{"name":"scriptTemplate"}}),_c('md-button',{staticClass:"md-dense md-raised md-primary",on:{"click":_vm.onSave}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonSave'))}})]),_c('md-button',{staticClass:"md-dense md-raised md-primary",on:{"click":_vm.onReset}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonReset'))}})])],1)}
var vm_templatevue_type_template_id_3c36f537_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-template.vue?vue&type=template&id=3c36f537&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/ui/setting-text.vue?vue&type=template&id=1aca25ba&
var setting_textvue_type_template_id_1aca25ba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('md-field',[_c('md-textarea',{attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)}
var setting_textvue_type_template_id_1aca25ba_staticRenderFns = []


// CONCATENATED MODULE: ./src/common/ui/setting-text.vue?vue&type=template&id=1aca25ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/common/ui/setting-text.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var setting_textvue_type_script_lang_js_ = ({
  props: {
    name: String,
    disabled: Boolean,
    sync: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      value: null
    };
  },

  created() {
    var _this = this;

    // XXX compatible with old data format
    var handle = function handle(value) {
      return Array.isArray(value) ? value.join('\n') : value || '';
    };

    this.value = handle(options["a" /* default */].get(this.name));
    this.revoke = Object(hook_setting["a" /* default */])(this.name, function (value) {
      _this.value = handle(value);
    });
  },

  beforeDestroy() {
    this.revoke();
  },

  methods: {
    onChange() {
      if (this.sync) {
        options["a" /* default */].set(this.name, this.value);
      }

      this.$emit('change', this.value);
    }

  }
});
// CONCATENATED MODULE: ./src/common/ui/setting-text.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_setting_textvue_type_script_lang_js_ = (setting_textvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/common/ui/setting-text.vue





/* normalize component */

var setting_text_component = Object(componentNormalizer["a" /* default */])(
  ui_setting_textvue_type_script_lang_js_,
  setting_textvue_type_template_id_1aca25ba_render,
  setting_textvue_type_template_id_1aca25ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var setting_text = (setting_text_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-template.vue?vue&type=script&lang=js&
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




/* harmony default export */ var vm_templatevue_type_script_lang_js_ = ({
  components: {
    SettingText: setting_text
  },
  methods: {
    onSave() {
      this.setTemplate(this.$refs.template.value);
    },

    onReset() {
      this.setTemplate('');
    },

    setTemplate(value) {
      options["a" /* default */].set('scriptTemplate', value);
      showMessage({
        text: Object(common["j" /* i18n */])('msgSavedScriptTemplate')
      });
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-template.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_settings_vm_templatevue_type_script_lang_js_ = (vm_templatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/tab-settings/vm-template.vue?vue&type=style&index=0&lang=css&
var vm_templatevue_type_style_index_0_lang_css_ = __webpack_require__(216);

// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-template.vue






/* normalize component */

var vm_template_component = Object(componentNormalizer["a" /* default */])(
  tab_settings_vm_templatevue_type_script_lang_js_,
  vm_templatevue_type_template_id_3c36f537_render,
  vm_templatevue_type_template_id_3c36f537_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vm_template = (vm_template_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-blacklist.vue?vue&type=template&id=394244e0&
var vm_blacklistvue_type_template_id_394244e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',{domProps:{"textContent":_vm._s(_vm.i18n('labelBlacklist'))}}),_c('p',[_vm._v("\n    "+_vm._s(_vm.i18n('descBlacklist'))+"\n    "),_c('a',{attrs:{"href":"https://violentmonkey.github.io/2017/04/15/Smart-rules-for-blacklist/#blacklist-patterns","target":"_blank"},domProps:{"textContent":_vm._s(_vm.i18n('learnBlacklist'))}})]),_c('setting-text',{ref:"blacklist",staticClass:"mb-0",attrs:{"name":"blacklist"}}),_c('md-button',{staticClass:"md-dense md-raised md-primary",on:{"click":_vm.onSave}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonSaveBlacklist'))}})])],1)}
var vm_blacklistvue_type_template_id_394244e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-blacklist.vue?vue&type=template&id=394244e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-blacklist.vue?vue&type=script&lang=js&
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




/* harmony default export */ var vm_blacklistvue_type_script_lang_js_ = ({
  components: {
    SettingText: setting_text
  },
  methods: {
    onSave() {
      options["a" /* default */].set('blacklist', this.$refs.blacklist.value);
      showMessage({
        text: Object(common["j" /* i18n */])('msgSavedBlacklist')
      });
      Object(common["q" /* sendMessage */])({
        cmd: 'BlacklistReset'
      });
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-blacklist.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_settings_vm_blacklistvue_type_script_lang_js_ = (vm_blacklistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/tab-settings/vm-blacklist.vue?vue&type=style&index=0&lang=css&
var vm_blacklistvue_type_style_index_0_lang_css_ = __webpack_require__(217);

// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-blacklist.vue






/* normalize component */

var vm_blacklist_component = Object(componentNormalizer["a" /* default */])(
  tab_settings_vm_blacklistvue_type_script_lang_js_,
  vm_blacklistvue_type_template_id_394244e0_render,
  vm_blacklistvue_type_template_id_394244e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vm_blacklist = (vm_blacklist_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-css.vue?vue&type=template&id=45534c8a&
var vm_cssvue_type_template_id_45534c8a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',{domProps:{"textContent":_vm._s(_vm.i18n('labelCustomCSS'))}}),_c('p',{domProps:{"innerHTML":_vm._s(_vm.i18n('descCustomCSS'))}}),_c('setting-text',{ref:"css",staticClass:"mb-0",attrs:{"name":"customCSS"}}),_c('md-button',{staticClass:"md-dense md-raised md-primary",on:{"click":_vm.onSave}},[_c('span',{domProps:{"textContent":_vm._s(_vm.i18n('buttonSaveCustomCSS'))}})])],1)}
var vm_cssvue_type_template_id_45534c8a_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-css.vue?vue&type=template&id=45534c8a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-css.vue?vue&type=script&lang=js&
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




/* harmony default export */ var vm_cssvue_type_script_lang_js_ = ({
  components: {
    SettingText: setting_text
  },
  methods: {
    onSave() {
      options["a" /* default */].set('customCSS', this.$refs.css.value);
      showMessage({
        text: Object(common["j" /* i18n */])('msgSavedCustomCSS')
      });
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-css.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_settings_vm_cssvue_type_script_lang_js_ = (vm_cssvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/tab-settings/vm-css.vue?vue&type=style&index=0&lang=css&
var vm_cssvue_type_style_index_0_lang_css_ = __webpack_require__(218);

// CONCATENATED MODULE: ./src/options/views/tab-settings/vm-css.vue






/* normalize component */

var vm_css_component = Object(componentNormalizer["a" /* default */])(
  tab_settings_vm_cssvue_type_script_lang_js_,
  vm_cssvue_type_template_id_45534c8a_render,
  vm_cssvue_type_template_id_45534c8a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vm_css = (vm_css_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//











var items = [{
  name: 'showBadge',

  normalize(value) {
    if (!value || value === "none") return '';
    return value === 'total' ? 'total' : 'unique';
  }

}, {
  name: 'indentUnit',
  key: 'editor.indentUnit',

  normalize(value) {
    return +value || 2;
  }

}];
var tab_settingsvue_type_script_lang_js_settings = {
  showAdvanced: false
};
items.forEach(function (_ref) {
  var name = _ref.name;
  tab_settingsvue_type_script_lang_js_settings[name] = null;
});
/* harmony default export */ var tab_settingsvue_type_script_lang_js_ = ({
  components: {
    Icon: ui_icon["a" /* default */],
    VmImport: vm_import,
    VmExport: vm_export,
    VmSync: vm_sync,
    VmTemplate: vm_template,
    VmBlacklist: vm_blacklist,
    VmCss: vm_css,
    SettingCheck: setting_check["a" /* default */]
  },

  data() {
    return tab_settingsvue_type_script_lang_js_settings;
  },

  methods: {
    getUpdater(_ref2) {
      var key = _ref2.key,
          name = _ref2.name,
          normalize = _ref2.normalize;
      return function (value, oldValue) {
        if (value !== oldValue) options["a" /* default */].set(key || name, normalize(value));
      };
    }

  },

  created() {
    var _this = this;

    options["a" /* default */].ready(function () {
      items.forEach(function (item) {
        var name = item.name,
            key = item.key,
            normalize = item.normalize;
        tab_settingsvue_type_script_lang_js_settings[name] = normalize(options["a" /* default */].get(key || name));
        Object(hook_setting["a" /* default */])(key, function (value) {
          tab_settingsvue_type_script_lang_js_settings[name] = value;
        });

        _this.$watch(name, Object(common["c" /* debounce */])(_this.getUpdater(item), 300));
      });
    });
  }

});
// CONCATENATED MODULE: ./src/options/views/tab-settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_tab_settingsvue_type_script_lang_js_ = (tab_settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css&
var tab_settingsvue_type_style_index_0_lang_css_ = __webpack_require__(219);

// CONCATENATED MODULE: ./src/options/views/tab-settings/index.vue






/* normalize component */

var tab_settings_component = Object(componentNormalizer["a" /* default */])(
  views_tab_settingsvue_type_script_lang_js_,
  tab_settingsvue_type_template_id_a3a7a914_render,
  tab_settingsvue_type_template_id_a3a7a914_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_settings = (tab_settings_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-about.vue?vue&type=template&id=46ca2c04&
var tab_aboutvue_type_template_id_46ca2c04_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-about"},[_c('h1',[_c('span',{staticClass:"mr-1",domProps:{"textContent":_vm._s(_vm.i18n('labelAbout'))}}),_c('small',{domProps:{"textContent":_vm._s(("v" + _vm.version))}})]),_c('p',{staticClass:"mb-2",domProps:{"textContent":_vm._s(_vm.i18n('extDescription'))}}),_c('div',{staticClass:"mb-1"},[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelRelated'))}}),_c('a',{attrs:{"href":"https://github.com/acestream/webextension","target":"_blank"}},[_vm._v("Source code")]),_vm._v("\n    | "),_c('a',{attrs:{"href":"http://acestream.org/about/privacy-policy","target":"_blank"}},[_vm._v("Privacy policy")])]),_c('div',{staticClass:"mb-1"},[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelAuthor'))}}),_c('span',{domProps:{"innerHTML":_vm._s(_vm.i18n('anchorAuthor'))}}),_vm._v(" | "),_c('a',{attrs:{"href":"https://violentmonkey.github.io/donate/","target":"_blank"},domProps:{"textContent":_vm._s(_vm.i18n('labelDonate'))}}),_c('span',{staticClass:"text-red"},[_vm._v(" ♥")])]),_c('div',{staticClass:"mb-1"},[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelTranslator'))}}),_c('span',{domProps:{"innerHTML":_vm._s(_vm.i18n('anchorTranslator'))}})]),_c('div',{staticClass:"mb-1"},[_c('label',{domProps:{"textContent":_vm._s(_vm.i18n('labelCurrentLang'))}}),_c('span',{staticClass:"text-green",domProps:{"textContent":_vm._s(_vm.language)}}),_vm._v(" |\n    "),_c('a',{attrs:{"href":"https://violentmonkey.github.io/localization/","target":"_blank"},domProps:{"textContent":_vm._s(_vm.i18n('labelHelpTranslate'))}})])])}
var tab_aboutvue_type_template_id_46ca2c04_staticRenderFns = []


// CONCATENATED MODULE: ./src/options/views/tab-about.vue?vue&type=template&id=46ca2c04&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-about.vue?vue&type=script&lang=js&
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
var tab_aboutvue_type_script_lang_js_data = {
  version: browser.runtime.getManifest().version,
  language: navigator.language
};
/* harmony default export */ var tab_aboutvue_type_script_lang_js_ = ({
  data() {
    return tab_aboutvue_type_script_lang_js_data;
  }

});
// CONCATENATED MODULE: ./src/options/views/tab-about.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_tab_aboutvue_type_script_lang_js_ = (tab_aboutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/options/views/tab-about.vue





/* normalize component */

var tab_about_component = Object(componentNormalizer["a" /* default */])(
  views_tab_aboutvue_type_script_lang_js_,
  tab_aboutvue_type_template_id_46ca2c04_render,
  tab_aboutvue_type_template_id_46ca2c04_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_about = (tab_about_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/app.vue?vue&type=script&lang=js&
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
//
//





var tabs = {
  scripts: tab_installed,
  settings: tab_settings,
  about: tab_about
};
/* harmony default export */ var appvue_type_script_lang_js_ = ({
  components: {
    Icon: ui_icon["a" /* default */]
  },

  data() {
    return {
      aside: false,
      store: store
    };
  },

  computed: {
    tab() {
      var tab = this.store.route.paths[0];
      if (!tabs[tab]) tab = 'scripts';
      return tab;
    },

    tabComponent() {
      return tabs[this.tab];
    }

  }
});
// CONCATENATED MODULE: ./src/options/views/app.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_appvue_type_script_lang_js_ = (appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/options/style.css?vue&type=style&index=0&lang=css&
var stylevue_type_style_index_0_lang_css_ = __webpack_require__(220);

// CONCATENATED MODULE: ./src/options/views/app.vue






/* normalize component */

var app_component = Object(componentNormalizer["a" /* default */])(
  views_appvue_type_script_lang_js_,
  appvue_type_template_id_04ce050a_render,
  appvue_type_template_id_04ce050a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var app = (app_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-material/dist/vue-material.js
var vue_material = __webpack_require__(30);
var vue_material_default = /*#__PURE__*/__webpack_require__.n(vue_material);

// EXTERNAL MODULE: ./node_modules/vue-material/dist/vue-material.min.css
var vue_material_min = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/vue-material/dist/theme/default.css
var theme_default = __webpack_require__(82);

// EXTERNAL MODULE: ./src/options/style.css
var options_style = __webpack_require__(221);

// CONCATENATED MODULE: ./src/options/index.js











vue_runtime_esm["default"].use(vue_material_default.a);
vue_runtime_esm["default"].prototype.i18n = common["j" /* i18n */];
Object.assign(store, {
  loading: false,
  cache: {},
  scripts: [],
  sync: [],
  filteredScripts: []
});
zip.workerScriptsPath = '/public/lib/zip.js/';
initialize();

function initialize() {
  document.title = Object(common["j" /* i18n */])('extName');
  initMain();
  options["a" /* default */].ready(function () {
    var el = document.createElement('div');
    document.body.appendChild(el);
    new vue_runtime_esm["default"]({
      render: function render(h) {
        return h(app);
      }
    }).$mount(el);
  });
}

function initScript(script) {
  var meta = script.meta || {};
  var localeName = Object(common["g" /* getLocaleString */])(meta, 'name');
  var search = [meta.name, localeName, meta.description, Object(common["g" /* getLocaleString */])(meta, 'description'), script.custom.name, script.custom.description].filter(Boolean).join('\n').toLowerCase();
  var name = script.custom.name || localeName;
  var lowerName = name.toLowerCase();
  script.$cache = {
    search,
    name,
    lowerName
  };
}

function loadData(clear) {
  Object(common["q" /* sendMessage */])({
    cmd: 'GetData',
    data: clear
  }).then(function (data) {
    var oldCache = store.cache || {};
    store.cache = null;
    ['cache', 'scripts', 'sync'].forEach(function (key) {
      vue_runtime_esm["default"].set(store, key, data[key]);
    });

    if (store.scripts) {
      store.scripts.forEach(initScript);
    }

    if (store.cache) {
      Object.keys(store.cache).forEach(function (url) {
        var raw = store.cache[url];

        if (oldCache[url]) {
          store.cache[url] = oldCache[url];
          delete oldCache[url];
        } else {
          store.cache[url] = Object(common["b" /* cache2blobUrl */])(raw, {
            defaultType: 'image/png'
          });
        }
      });
    }

    Object.values(oldCache).forEach(function (blobUrl) {
      URL.revokeObjectURL(blobUrl);
    });
    store.loading = false;
  });
}

function initMain() {
  store.loading = true;
  loadData(true);
  Object.assign(handlers["a" /* default */], {
    ScriptsUpdated() {
      loadData();
    },

    UpdateSync(data) {
      store.sync = data;
    },

    AddScript(_ref) {
      var update = _ref.update;
      update.message = '';
      initScript(update);
      store.scripts.push(update);
    },

    UpdateScript(data) {
      if (!data) return;
      var index = store.scripts.findIndex(function (item) {
        return item.props.id === data.where.id;
      });

      if (index >= 0) {
        var updated = Object.assign({}, store.scripts[index], data.update);
        vue_runtime_esm["default"].set(store.scripts, index, updated);
        initScript(updated);
      }
    },

    RemoveScript(id) {
      var i = store.scripts.findIndex(function (script) {
        return script.props.id === id;
      });
      if (i >= 0) store.scripts.splice(i, 1);
    }

  });
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);
module.exports = __webpack_require__(170);

/***/ })

/******/ });