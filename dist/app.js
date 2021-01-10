/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form-populator.js":
/*!*******************************!*\
  !*** ./src/form-populator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ FormPopulator\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar config = {\n  framework: 'bootstrap-5',\n  mode: 'inline'\n};\n/*\r\n// Sample data structure\r\n[\r\n    {\r\n        input: input = 'input',\r\n        type: text = 'text',\r\n        title: title,\r\n        name: name,\r\n        placeholder: placeholder,\r\n        class: class_name = null,\r\n        id: id_name = null,\r\n        value: null\r\n    }\r\n]\r\n*/\n\nfunction generateBootstrap5Form(data) {\n  var template = \"\";\n  data.forEach(function (item) {\n    var input;\n\n    switch (item.input) {\n      case 'textarea':\n        input = \"<textarea name=\\\"\".concat(item.name, \"\\\" placeholder=\\\"\").concat(item.placeholder, \"\\\" class=\\\"form-control\\\">\").concat(item.value, \"</textarea>\");\n        break;\n\n      default:\n        input = \"<input type=\\\"\".concat(item.type ? item.type : 'text', \"\\\" name=\\\"\").concat(item.name, \"\\\" value=\\\"\").concat(item.value, \"\\\" class=\\\"form-control\\\">\");\n        break;\n    }\n\n    template += \"<div class=\\\"form-group row mt-3\\\">\\n            <label class=\\\"col-md-3\\\">\".concat(item.title, \"</label>\\n            <div class=\\\"col-md-9\\\">\\n                \").concat(input, \"\\n            </div>\\n        </div>\");\n  });\n  console.log(template);\n  return template;\n}\n\nvar FormPopulator = /*#__PURE__*/function () {\n  function FormPopulator(el, data) {\n    var _this = this;\n\n    var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n    _classCallCheck(this, FormPopulator);\n\n    this.el = document.querySelector(el);\n\n    if (!this.el) {\n      throw Error(\"Element not avaiable in DOM\");\n    }\n\n    this.config = config;\n\n    if (conf && _typeof(conf) === 'object') {\n      Object.keys(conf).forEach(function (key) {\n        _this.config[key] = conf[key];\n      });\n    }\n\n    this.data = data;\n    this.initializeData();\n  }\n\n  _createClass(FormPopulator, [{\n    key: \"initializeData\",\n    value: function initializeData() {\n      var template;\n\n      if (this.config.framework === 'bootstrap-5') {\n        console.log(\"i'm here\");\n        template = generateBootstrap5Form(this.data);\n      }\n\n      this.el.innerHTML = template;\n    }\n  }]);\n\n  return FormPopulator;\n}();\n\n\n\n//# sourceURL=webpack://@tyson_tlo/bootstrap-form-populator/./src/form-populator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _form_populator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-populator */ \"./src/form-populator.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_form_populator__WEBPACK_IMPORTED_MODULE_0__.default); // window.FormPop = FormPopulator\n\n//# sourceURL=webpack://@tyson_tlo/bootstrap-form-populator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;