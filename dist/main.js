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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rapidApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rapidApi.js */ \"./src/rapidApi.js\");\n\r\n\r\n(0,_rapidApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://js-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/rapidApi.js":
/*!*************************!*\
  !*** ./src/rapidApi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst cards = document.getElementById('cards');\r\n\r\nconst getShazamTracks = async () => {\r\n  const url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';\r\n  const options = {\r\n    method: 'GET',\r\n    headers: {\r\n      'x-rapidapi-key': 'd0af0bcdb1msh4547e68b9e65aa2p16dec0jsnbc6afde93c67',\r\n      'x-rapidapi-host': 'shazam.p.rapidapi.com',\r\n    },\r\n  };\r\n\r\n  try {\r\n    const response = await fetch(url, options);\r\n    const result = await response.json();\r\n\r\n    const songs = result.tracks;\r\n\r\n    let htmlToAppend = '';\r\n\r\n    songs.forEach((data) => {\r\n      const card = `\r\n                     \r\n              <div\r\n            class=\"flex flex-col gap-2 p-4 h-full rounded-2xl bg-[#1C1F26] drop-shadow-md border-2 border-[#a8b3cf33;] hover:border-[#a8b3cf50;]\"\r\n          >\r\n            <div class=\"w-full h-[250px] rounded-lg\">\r\n            <img class=\"h-[250px] w-auto mx-auto\" src=\"${\r\n  data.images.coverart\r\n    ? data.images.coverart\r\n    : data.images.background\r\n}\" />\r\n            </div>\r\n            <div class=\"flex flex-col gap-2 justify-between\">\r\n              <h2 class=\"font-semibold capitalize\">${\r\n  data.title.length < 30\r\n    ? data.title\r\n    : `${data.title.slice(0, 27)}...`\r\n}</h2>\r\n              <div class=\"flex flex-col gap-1 justify-between\">\r\n                <div class=\"flex justify-between p-1 items-center\">\r\n                  <img\r\n                    class=\"h-[20px] color-white\"\r\n                    src=\"./assets/adore.svg\"\r\n                    alt=\"\"\r\n                  />\r\n                  <span class=\"text-sm\">no likes</span>\r\n                </div>\r\n                <button\r\n                  class=\"flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]\"\r\n                >\r\n                  <img\r\n                    class=\"h-[20px] color-white\"\r\n                    src=\"./assets/comment.svg\"\r\n                    alt=\"\"\r\n                  />\r\n                  <span class=\"text-sm\">no comment</span>\r\n                </button>\r\n                <button\r\n                  class=\"bg-[#ffffff10] p-1 rounded text-center cursor-pointer hover:bg-[#ffffff20]\"\r\n                >\r\n                  order now\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        `;\r\n      htmlToAppend += card;\r\n    });\r\n\r\n    cards.innerHTML = htmlToAppend;\r\n  } catch (error) {\r\n    throw new Error(error);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShazamTracks);\r\n\n\n//# sourceURL=webpack://js-capstone-project/./src/rapidApi.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;