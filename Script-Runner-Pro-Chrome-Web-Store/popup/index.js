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
/******/ 		6: 0
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
/******/ 	deferredModules.push([227,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 227:
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

// EXTERNAL MODULE: ./src/common/tld.js
var tld = __webpack_require__(28);

// EXTERNAL MODULE: ./src/common/ui/style/index.js
var style = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/views/app.vue?vue&type=template&id=0daa132b&
var appvue_type_template_id_0daa132b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('md-card',{staticClass:"popup-card"},[_c('md-card-header',[_c('md-card-header-text',[_c('div',{staticClass:"md-title",domProps:{"textContent":_vm._s(_vm.i18n('extName'))}})]),_c('md-card-media',[_c('img',{attrs:{"src":"/public/images/icon128.png","alt":"logo"}})])],1),_c('div',{staticClass:"full-control"},[_c('div',{staticClass:"list"},[_c('md-list',{staticClass:"md-dense"},[_c('md-list-item',{class:{disabled:!_vm.options.isApplied},on:{"click":_vm.onToggle}},[_c('md-icon',{class:_vm.getSymbolCheck(_vm.options.isApplied),domProps:{"textContent":_vm._s(_vm.getSymbolCheck(_vm.options.isApplied))}}),_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.options.isApplied ? _vm.i18n('menuScriptEnabled') : _vm.i18n('menuScriptDisabled'))}})],1),_c('md-list-item',{attrs:{"md-dense":""},on:{"click":_vm.onManage}},[_c('md-icon',[_vm._v("settings")]),_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('menuDashboard'))}})],1),_c('md-list-item',{on:{"click":_vm.onCreateScript}},[_c('md-icon',[_vm._v("code")]),_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('menuNewScript'))}})],1),_c('md-list-item',{on:{"click":_vm.onFindSameDomainScripts}},[_c('md-icon',[_vm._v("search")]),_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('menuFindScripts'))}})],1),_c('md-list-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.commands.length),expression:"commands.length"}],attrs:{"md-expand":"","md-expanded":_vm.activeMenu === 'commands'}},[_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('menuCommands'))}}),_c('md-list',{attrs:{"slot":"md-expand"},slot:"md-expand"},_vm._l((_vm.commands),function(item){return _c('md-list-item',{key:item.name,staticClass:"md-inset",domProps:{"textContent":_vm._s(item.name)},on:{"click":function($event){return _vm.onCommand(item)}}})}),1)],1),_c('md-list-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.scripts.length),expression:"scripts.length"}],attrs:{"md-expand":"","md-expanded":_vm.activeMenu === 'scripts'}},[_c('span',{staticClass:"md-list-item-text",domProps:{"textContent":_vm._s(_vm.i18n('menuMatchedScripts'))}}),_c('md-list',{attrs:{"slot":"md-expand"},slot:"md-expand"},_vm._l((_vm.scripts),function(item){return _c('md-list-item',{key:item.name},[_c('md-button',{staticClass:"md-icon-button",on:{"click":function($event){return _vm.onToggleScript(item)}}},[_c('md-icon',{class:_vm.getSymbolCheck(item.data.config.enabled),domProps:{"textContent":_vm._s(_vm.getSymbolCheck(item.data.config.enabled))}}),_c('md-tooltip',{attrs:{"md-direction":"top"},domProps:{"textContent":_vm._s(item.data.config.enabled ? _vm.i18n('menuScriptEnabled') : _vm.i18n('menuScriptDisabled'))}})],1),_c('span',{staticClass:"md-list-item-text flex-auto ellipsis",attrs:{"title":item.name},domProps:{"textContent":_vm._s(item.name)}}),_c('md-button',{staticClass:"md-icon-button",on:{"click":function($event){return _vm.onEditScript(item)}}},[_c('md-icon',{staticClass:"md-size-1x"},[_vm._v("edit")]),_c('md-tooltip',{attrs:{"md-direction":"top"},domProps:{"textContent":_vm._s(_vm.i18n('buttonEdit'))}})],1)],1)}),1)],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/popup/views/app.vue?vue&type=template&id=0daa132b&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(9);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/common/options.js
var options = __webpack_require__(1);

// EXTERNAL MODULE: ./src/common/ui/icon.vue + 4 modules
var icon = __webpack_require__(14);

// CONCATENATED MODULE: ./src/popup/utils/index.js
/* eslint-disable import/prefer-default-export */
var store = {
  scripts: [],
  commands: [],
  domain: ''
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/views/app.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var optionsData = {
  isApplied: options["a" /* default */].get('isApplied')
};
options["a" /* default */].hook(function (changes) {
  if ('isApplied' in changes) {
    optionsData.isApplied = changes.isApplied;
  }
});
/* harmony default export */ var appvue_type_script_lang_js_ = ({
  components: {
    Icon: icon["a" /* default */]
  },

  data() {
    return {
      store: store,
      options: optionsData,
      activeMenu: 'scripts'
    };
  },

  computed: {
    commands() {
      return this.store.commands.map(function (item) {
        var _item = slicedToArray_default()(item, 2),
            key = _item[0],
            name = _item[1];

        return {
          name,
          key
        };
      });
    },

    scripts() {
      return this.store.scripts.map(function (script) {
        return {
          name: script.custom.name || Object(common["g" /* getLocaleString */])(script.meta, 'name'),
          data: script
        };
      });
    }

  },
  methods: {
    toggleMenu(name) {
      this.activeMenu = this.activeMenu === name ? null : name;
    },

    getSymbolCheck(bool) {
      return `toggle_${bool ? 'on' : 'off'}`;
    },

    onToggle() {
      options["a" /* default */].set('isApplied', !this.options.isApplied);
      this.checkReload();
    },

    onManage() {
      browser.runtime.openOptionsPage();
      window.close();
    },

    onEditScript(item) {
      browser.tabs.create({
        url: browser.runtime.getURL(`/options/index.html#scripts/${item.data.props.id}`)
      });
      window.close();
    },

    onFindSameDomainScripts() {
      browser.tabs.create({
        // OpenUserJS engine (which we use) doesn't support searcing by domain currently
        url: `https://greasyfork.org/scripts/by-site/${encodeURIComponent(this.store.domain)}` // url: 'http://awe.acestream.me',

      });
    },

    onCommand(item) {
      browser.tabs.sendMessage(this.store.currentTab.id, {
        cmd: 'Command',
        data: item.key
      });
    },

    onToggleScript(item) {
      var _this = this;

      var data = item.data;
      var enabled = !data.config.enabled;
      Object(common["q" /* sendMessage */])({
        cmd: 'UpdateScriptInfo',
        data: {
          id: data.props.id,
          config: {
            enabled
          }
        }
      }).then(function () {
        data.config.enabled = enabled;

        _this.checkReload();
      });
    },

    checkReload() {
      if (options["a" /* default */].get('autoReload')) browser.tabs.reload(this.store.currentTab.id);
    },

    onCreateScript() {
      var _this$store = this.store,
          currentTab = _this$store.currentTab,
          domain = _this$store.domain;
      (domain ? Object(common["q" /* sendMessage */])({
        cmd: 'CacheNewScript',
        data: {
          url: currentTab.url.split('#')[0].split('?')[0]
        }
      }) : Promise.resolve()).then(function (id) {
        var path = ['scripts', '_new', id].filter(Boolean).join('/');
        browser.tabs.create({
          url: browser.runtime.getURL(`/options/index.html#${path}`)
        });
        window.close();
      });
    }

  }
});
// CONCATENATED MODULE: ./src/popup/views/app.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_appvue_type_script_lang_js_ = (appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/popup/style.css?vue&type=style&index=0&lang=css&
var stylevue_type_style_index_0_lang_css_ = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/popup/views/app.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_appvue_type_script_lang_js_,
  appvue_type_template_id_0daa132b_render,
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

// CONCATENATED MODULE: ./src/popup/index.js











vue_runtime_esm["default"].use(vue_material_default.a);
tld["c" /* initTLD */]();
vue_runtime_esm["default"].prototype.i18n = common["j" /* i18n */];
var el = document.createElement('div');
document.body.appendChild(el);
new vue_runtime_esm["default"]({
  render: function render(h) {
    return h(app);
  }
}).$mount(el);
Object.assign(handlers["a" /* default */], {
  SetPopup(data, src) {
    if (store.currentTab.id !== src.tab.id) return;
    store.commands = data.menus;
    ;
    Object(common["q" /* sendMessage */])({
      cmd: 'GetMetas',
      data: data.ids
    }).then(function (scripts) {
      store.scripts = scripts;
    });
  }

});
browser.tabs.query({
  currentWindow: true,
  active: true
}).then(function (tabs) {
  var currentTab = {
    id: tabs[0].id,
    url: tabs[0].url
  };
  store.currentTab = currentTab;
  browser.tabs.sendMessage(currentTab.id, {
    cmd: 'GetPopup'
  });

  if (/^https?:\/\//i.test(currentTab.url)) {
    var matches = currentTab.url.match(/:\/\/([^/]*)/);
    var domain = matches[1];
    store.domain = tld["a" /* getDomain */](domain) || domain;
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });