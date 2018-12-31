module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./main-page.js": "./main-page.js",
	"./main-page.ts": "./main-page.ts",
	"./main-page.xml": "./main-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Frame defaultPage=\"main-page\" class=\"frame\" />\n";
    if (false) {}


/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#launch-screen {\n  background-color: #FFFFFF;\n  vertical-align: center;\n  horizontal-align: center;\n}\n", ""]);

// exports
;
    if (false) {}


/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
            if (false) {}
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        
tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["run"]({ moduleName: "app-root" });
// do not put anything after application.run

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = __webpack_require__("./main-view-model.ts");
var web_view_1 = __webpack_require__("../node_modules/tns-core-modules/ui/web-view/web-view.js");
function navigatingTo(args) {
    var page = args.object;
    page.backgroundSpanUnderStatusBar = true;
    page.bindingContext = new main_view_model_1.MainViewModel();
}
exports.navigatingTo = navigatingTo;
function onWebViewLoaded(args) {
    var webview = args.object;
    var page = args.object.page;
    var vm = page.bindingContext;
    // handle WebView load finish event
    webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
        if (!args.error) {
            webview.height = "auto";
            vm.set('webPageLoaded', true);
        }
        else {
            alert("Sorry, we're having issues connecting");
        }
    });
}
exports.onWebViewLoaded = onWebViewLoaded;


/***/ }),

/***/ "./main-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatingTo", function() { return navigatingTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWebViewLoaded", function() { return onWebViewLoaded; });
/* harmony import */ var _main_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./main-view-model.ts");
/* harmony import */ var tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/web-view/web-view.js");
/* harmony import */ var tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_1__);


function navigatingTo(args) {
    var page = args.object;
    page.backgroundSpanUnderStatusBar = true;
    page.bindingContext = new _main_view_model__WEBPACK_IMPORTED_MODULE_0__["MainViewModel"]();
}
function onWebViewLoaded(args) {
    var webview = args.object;
    var page = args.object.page;
    var vm = page.bindingContext;
    // handle WebView load finish event
    webview.on(tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_1__["WebView"].loadFinishedEvent, function (args) {
        if (!args.error) {
            webview.height = "auto";
            vm.set('webPageLoaded', true);
        }
        else {
            alert("Sorry, we're having issues connecting");
        }
    });
}
;
    if (false) {}


/***/ }),

/***/ "./main-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-statusbar", function() { return __webpack_require__("../node_modules/nativescript-statusbar/statusbar.js"); });global.registerModule("nativescript-statusbar/StatusBar", function() { return __webpack_require__("../node_modules/nativescript-statusbar/statusbar.js"); });global.registerModule("nativescript-statusbar", function() { return __webpack_require__("../node_modules/nativescript-statusbar/statusbar.js"); });global.registerModule("nativescript-statusbar/StatusBar", function() { return __webpack_require__("../node_modules/nativescript-statusbar/statusbar.js"); });
module.exports = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" loaded=\"onPageLoad\" navigatingTo=\"navigatingTo\" class=\"page\" actionBarHidden=\"true\" xmlns:x=\"nativescript-statusbar\">\n  <x:StatusBar ios:barStyle=\"light\" barColor=\"#222222\" />\n\n  <StackLayout backgroundColor>\n    <GridLayout rows=\"*\" columns=\"*\">\n      <GridLayout row=\"0\" col=\"0\" rows=\"*\" columns=\"*\" id=\"launch-screen\">\n\n      </GridLayout>\n\n      <WebView row=\"0\" col=\"0\" src=\"{{ src }}\" loaded=\"onWebViewLoaded\" id=\"main-web-view\" visibility=\"{{ webPageLoaded ? 'visible' : 'collapsed' }}\" />\n    </GridLayout>\n  </StackLayout>\n</Page>\n";
    if (false) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewModel", function() { return MainViewModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_observable_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/observable-decorator.ts");


var MainViewModel = /** @class */ (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this.src = "http://wardbulletin.com";
        _this.webPageLoaded = false;
        return _this;
    }
    __decorate([
        Object(_shared_observable_decorator__WEBPACK_IMPORTED_MODULE_1__["ObservableProperty"])(),
        __metadata("design:type", Boolean)
    ], MainViewModel.prototype, "webPageLoaded", void 0);
    return MainViewModel;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ }),

/***/ "./shared/observable-decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableProperty", function() { return ObservableProperty; });
/* harmony import */ var data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(data_observable__WEBPACK_IMPORTED_MODULE_0__);

function ObservableProperty() {
    return function (obj, key) {
        var storedValue = obj[key];
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function () { return storedValue; },
            set: function (value) {
                if (storedValue === value) {
                    return;
                }
                storedValue = value;
                this.notify({
                    eventName: data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].propertyChangeEvent,
                    propertyName: key,
                    object: this,
                    value: value,
                });
            }
        });
    };
}


/***/ })

/******/ });