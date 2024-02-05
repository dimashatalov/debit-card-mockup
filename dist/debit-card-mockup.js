/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DebitCardMockup"] = factory();
	else
		root["DebitCardMockup"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DebitCardMockup)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/js/default-class.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ \"./src/js/card.js\");\n\r\n\r\n\r\nclass DebitCardMockup extends _default_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n\r\n    constructor(node, settings) {\r\n        super(node, settings);\r\n    }\r\n\r\n    draw() {\r\n\r\n        this.card = new _card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n        this.node.innerHTML = \"\";\r\n        this.node.appendChild(this.card.node);\r\n    }\r\n}\n\n//# sourceURL=webpack://DebitCardMockup/./src/js/app.js?");

/***/ }),

/***/ "./src/js/card-background.js":
/*!***********************************!*\
  !*** ./src/js/card-background.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardHolderName)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/js/default-class.js\");\n\r\n\r\nclass CardHolderName extends _default_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n\r\n    constructor() {\r\n        super();\r\n\r\n        this.makeTemplate();\r\n    }\r\n\r\n\r\n    makeTemplate() {\r\n        this.node = document.createElement(\"div\");\r\n        this.node.classList.add(\"debit-card-mockup__background\");\r\n    }\r\n}\n\n//# sourceURL=webpack://DebitCardMockup/./src/js/card-background.js?");

/***/ }),

/***/ "./src/js/card-expiration.js":
/*!***********************************!*\
  !*** ./src/js/card-expiration.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardExpiration)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/js/default-class.js\");\n\r\n\r\nclass CardExpiration extends _default_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n\r\n    constructor() {\r\n        super();\r\n\r\n        this.makeTemplate();\r\n    }\r\n\r\n\r\n    makeTemplate() {\r\n        this.node = document.createElement(\"div\");\r\n        this.node.classList.add(\"debit-card-mockup__expiration\");\r\n\r\n        this.node.innerHTML = `\r\n            <div class=\"debit-card-mockup__expiration__title\">expires</div>\r\n            <div class=\"debit-card-mockup__expiration__value\"></div>\r\n        `;\r\n\r\n        this.set(\"valueNode\", this.node.querySelector(\".debit-card-mockup__expiration__value\"));\r\n    }\r\n\r\n\r\n    setValue(originalString) {\r\n       \r\n        this.get(\"valueNode\").innerHTML = originalString;\r\n\r\n    }      \r\n}\n\n//# sourceURL=webpack://DebitCardMockup/./src/js/card-expiration.js?");

/***/ }),

/***/ "./src/js/card-holder-name.js":
/*!************************************!*\
  !*** ./src/js/card-holder-name.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardHolderName)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/js/default-class.js\");\n\r\n\r\nclass CardHolderName extends _default_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n\r\n    constructor() {\r\n        super();\r\n\r\n        this.makeTemplate();\r\n    }\r\n\r\n\r\n    makeTemplate() {\r\n        this.node = document.createElement(\"div\");\r\n        this.node.classList.add(\"debit-card-mockup__name\");\r\n\r\n        this.node.innerHTML = `\r\n            <div class=\"debit-card-mockup__name__title\">cardholder name</div>\r\n            <div class=\"debit-card-mockup__name__value\"></div>\r\n        `;\r\n\r\n        this.set(\"valueNode\", this.node.querySelector(\".debit-card-mockup__name__value\"));\r\n    }\r\n \r\n\r\n    setValue(originalString) {\r\n       \r\n        this.get(\"valueNode\").innerHTML = originalString;\r\n\r\n    }    \r\n} \n\n//# sourceURL=webpack://DebitCardMockup/./src/js/card-holder-name.js?");

/***/ }),

/***/ "./src/js/card-number.js":
/*!*******************************!*\
  !*** ./src/js/card-number.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardNumber)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/js/default-class.js\");\n\r\n\r\nclass CardNumber extends _default_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n\r\n    constructor() {\r\n        super();\r\n\r\n        this.makeTemplate();\r\n        this.setValue(\"0000000000000000\");\r\n    }\r\n\r\n\r\n    makeTemplate() {\r\n        this.node = document.createElement(\"div\");\r\n        this.node.classList.add(\"debit-card-mockup__number\");\r\n\r\n        this.node.innerHTML = `\r\n            <div class=\"debit-card-mockup__number__title\">card number</div>\r\n            <div class=\"debit-card-mockup__number__value\"></div>\r\n        `;\r\n\r\n        this.set(\"valueNode\", this.node.querySelector(\".debit-card-mockup__number__value\"));\r\n    }\r\n\r\n\r\n    setValue(originalString) {\r\n        const splitString = originalString.match(/.{1,4}/g) || [];\r\n\r\n        // Create a container element\r\n        const container = document.createElement(\"div\");\r\n        \r\n        let html = '';\r\n        // Iterate over the split string and create a span for each group\r\n        splitString.forEach(group => {\r\n\r\n            html += `<span>` + group + `</span>`;\r\n        });        \r\n\r\n        this.get(\"valueNode\").innerHTML = html;\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://DebitCardMockup/./src/js/card-number.js?");

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _default_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-class.js */ \"./src/js/default-class.js\");\n/* harmony import */ var _card_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-number.js */ \"./src/js/card-number.js\");\n/* harmony import */ var _card_expiration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-expiration.js */ \"./src/js/card-expiration.js\");\n/* harmony import */ var _card_holder_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-holder-name.js */ \"./src/js/card-holder-name.js\");\n/* harmony import */ var _card_background_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-background.js */ \"./src/js/card-background.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Card extends _default_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n\r\n    constructor() {\r\n        super();\r\n\r\n        this.makeTemplate();\r\n \r\n    }\r\n \r\n    makeTemplate() {\r\n        this.node = document.createElement(\"div\");\r\n        this.node.classList.add(\"debit-card-mockup\");\r\n\r\n        this.cardNumber = new _card_number_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        this.node.appendChild(this.cardNumber.node);\r\n\r\n        this.cardExpiration = new _card_expiration_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        this.node.appendChild(this.cardExpiration.node);\r\n        \r\n        this.cardHolderName = new _card_holder_name_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n        this.node.appendChild(this.cardHolderName.node);     \r\n            \r\n    }\r\n\r\n    setType(type) {\r\n        this.addClassModificator(type);\r\n    }\r\n\r\n    addClassModificator(mod) {\r\n        this.removeClassMofificators();\r\n        this.node.classList.add(\"debit-card-mockup--\" + mod);\r\n    }\r\n\r\n    removeClassMofificators() {\r\n        const classNames = this.node.classList;\r\n\r\n        // Iterate over the class names and remove those containing '--'\r\n        for (const className of classNames) {\r\n            if (className.includes('--')) {\r\n                this.node.classList.remove(className);\r\n            }\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://DebitCardMockup/./src/js/card.js?");

/***/ }),

/***/ "./src/js/default-class.js":
/*!*********************************!*\
  !*** ./src/js/default-class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DefaultClass)\n/* harmony export */ });\nclass DefaultClass {\r\n    constructor(node, settings) {\r\n        this.args = {};\r\n\r\n        if (typeof node != \"undefined\") {\r\n            this.node = node;\r\n        }\r\n\r\n        if (typeof settings != \"undefined\") {\r\n            this.applySettings(settings);\r\n        }\r\n    }\r\n\r\n    applySettings(settings) {\r\n        for (let i in settings) {\r\n            this.set(i, settings[i]);\r\n        }\r\n    }\r\n\r\n    set(k, v) {\r\n        this.args[k] = v;\r\n    }\r\n\r\n\r\n    get(k) {\r\n        if (typeof this.args[k] == \"undefined\") {\r\n            return false;\r\n        }\r\n        else {\r\n            return this.args[k];\r\n        }\r\n    }\r\n}\r\n\r\n \n\n//# sourceURL=webpack://DebitCardMockup/./src/js/default-class.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});