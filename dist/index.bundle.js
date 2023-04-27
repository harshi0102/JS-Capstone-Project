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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\n.pop,\\n.reserv-pop {\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 1000;\\n  backdrop-filter: blur(5px);\\n  padding: 3%;\\n}\\n\\n.popup {\\n  background-color: rgba(0, 0, 0, 0.5);\\n  padding: 1.25em;\\n  width: 70%;\\n  max-height: 95%;\\n  overflow-y: auto;\\n  border-radius: 5px;\\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.popup::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.img-container {\\n  overflow: hidden;\\n  max-height: 45vh;\\n}\\n\\n.img-container img {\\n  width: 100%;\\n}\\n\\n.popup-content {\\n  background-color: black;\\n  padding: 10px;\\n  display: flex !important;\\n  flex-direction: column !important;\\n  justify-content: center !important;\\n  border-style: solid;\\n  border-width: 2px;\\n  border-color: white;\\n  text-align: center;\\n  gap: 3px;\\n}\\n\\n.h3class {\\n  text-align: center;\\n}\\n\\n.addh3comment {\\n  text-align: center;\\n}\\n\\n.comment-input {\\n  color: black;\\n  width: 50%;\\n  height: 5vh;\\n}\\n\\n.name-input {\\n  color: black;\\n  width: 50%;\\n  height: 30vh;\\n}\\n\\n.comment-list {\\n  text-align: center;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 13px;\\n  margin-left: 2%;\\n}\\n\\nform > button {\\n  width: 30%;\\n  border: 1px solid white;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Modules/addLike.js":
/*!********************************!*\
  !*** ./src/Modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"fetchLikes\": () => (/* binding */ fetchLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst updateLikes = async (key, likes) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/likes/';\n  const res = await fetch(url);\n  const data = await res.json();\n\n  data.filter((item) => {\n    if (item.item_id === `${key}`) {\n      likes.innerHTML = `${item.likes} likes`;\n    }\n    return '';\n  });\n};\n\nconst addLike = async (key, likes) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/likes/';\n  await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: `${key}`,\n    }),\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  });\n\n  updateLikes(key, likes);\n};\n\nconst fetchLikes = async () => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zRod3rPxBRjxEDaYzujw/likes/';\n  const res = await fetch(url);\n  const data = await res.json();\n  return data;\n};\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/addLike.js?");

/***/ }),

/***/ "./src/Modules/apiConsts.js":
/*!**********************************!*\
  !*** ./src/Modules/apiConsts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"options\": () => (/* binding */ options),\n/* harmony export */   \"url\": () => (/* binding */ url)\n/* harmony export */ });\nconst url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';\nconst options = {\n  method: 'GET',\n  headers: {\n    'X-RapidAPI-Key': '36333753fcmsh2c569f6a18ea132p116dc2jsn138253265de7',\n    'x-rapidapi-host': 'shazam.p.rapidapi.com',\n  },\n};\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/apiConsts.js?");

/***/ }),

/***/ "./src/Modules/commentsPopUp.js":
/*!**************************************!*\
  !*** ./src/Modules/commentsPopUp.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (itemId) => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kOjkqwEwPrgtqCjTWn0f/comments?item_id=${itemId}`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\nconst addComment = async (itemId, name, comment) => {\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kOjkqwEwPrgtqCjTWn0f/comments', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      item_id: itemId,\n      username: name,\n      comment,\n    }),\n  });\n};\n\nconst commentsPopUp = () => {\n  const likeBtns = Array.from(document.getElementsByClassName('btn'));\n  const pop = document.querySelector('.pop');\n  pop.setAttribute('style', 'display: none;');\n\n  const createPopup = async (data) => {\n    const popup = document.createElement('div');\n    popup.classList.add('popup');\n\n    const closeBtn = document.createElement('div');\n    closeBtn.classList.add('close-btn', 'text-4xl', 'py-2', 'cursor-pointer', 'text-right');\n    closeBtn.innerHTML = '&times;';\n    closeBtn.addEventListener('click', () => {\n      popup.remove();\n      pop.setAttribute('style', 'display: none;');\n    });\n\n    const popupImgContainer = document.createElement('div');\n    popupImgContainer.classList.add('img-container');\n\n    const popupImg = document.createElement('img');\n    popupImg.src = data.images?.coverart || data.images?.background;\n\n    const popupTitle = document.createElement('h3');\n    popupTitle.classList.add('text-3xl', 'font-bold');\n    popupTitle.innerHTML = data.title;\n\n    const commentsTitle = document.createElement('h3');\n    const comments = await getComments(data.key);\n    commentsTitle.textContent = `Comments (${comments.length})`;\n\n    const commentList = document.createElement('ul');\n    commentList.classList.add('comment-list');\n    if (comments.length > 0) {\n      comments.forEach((comment) => {\n        const commentItem = document.createElement('li');\n        commentItem.innerHTML = `${comment.creation_date} <strong>${comment.comment} : </strong>  ${comment.username}`;\n        commentList.appendChild(commentItem);\n      });\n    } else {\n      const noCommentItem = document.createElement('li');\n      noCommentItem.innerHTML = 'No comments yet';\n      commentList.appendChild(noCommentItem);\n    }\n\n    const formTitle = document.createElement('h3');\n    formTitle.innerHTML = 'Add a comment';\n\n    const commentInput = document.createElement('input');\n    commentInput.type = 'text';\n    commentInput.classList.add('comment-input');\n    commentInput.placeholder = 'Enter your name...';\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.classList.add('name-input');\n    nameInput.placeholder = 'Enter a comment...';\n\n    const submitBtn = document.createElement('button');\n    submitBtn.type = 'submit';\n    submitBtn.innerHTML = 'Comment';\n\n    const form = document.createElement('form');\n    form.addEventListener('submit', async (event) => {\n      event.preventDefault();\n      const commentInput = event.target.querySelector('.comment-input');\n      const comment = commentInput.value.trim();\n      const nameInput = event.target.querySelector('.name-input');\n      const name = nameInput.value.trim();\n      if (comment) {\n        addComment(data.key, name, comment);\n        const comments = await getComments(data.key);\n\n        const commentItem = document.createElement('li');\n        commentItem.innerHTML = `<strong>${comment}:</strong> ${name}`;\n        commentList.appendChild(commentItem);\n\n        commentsTitle.textContent = `Comments (${comments.length})`;\n        commentInput.value = '';\n        nameInput.value = '';\n      }\n    });\n\n    form.appendChild(commentInput);\n    form.appendChild(nameInput);\n    form.appendChild(submitBtn);\n\n    const popupHeader = document.createElement('div');\n    popupHeader.classList.add('popup-header');\n    popupHeader.appendChild(closeBtn);\n\n    const popupContent = document.createElement('div');\n    popupContent.classList.add('popup-content');\n    popupImgContainer.appendChild(popupImg);\n    popupContent.appendChild(popupImgContainer);\n    popupContent.appendChild(popupTitle);\n    popupContent.appendChild(commentsTitle);\n    popupContent.appendChild(commentList);\n    popupContent.appendChild(formTitle);\n    popupContent.appendChild(form);\n\n    popup.appendChild(popupHeader);\n    popup.appendChild(popupContent);\n    pop.appendChild(popup);\n  };\n\n  likeBtns.forEach((likeBtn) => {\n    likeBtn.addEventListener('click', async () => {\n      pop.setAttribute('style', 'display: block;');\n      const cardKey = likeBtn.parentNode.parentNode.parentNode.id;\n      const data = JSON.parse(localStorage.getItem('songs')).find((song) => song.key === cardKey);\n      createPopup(data);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopUp);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/commentsPopUp.js?");

/***/ }),

/***/ "./src/Modules/renderCards.js":
/*!************************************!*\
  !*** ./src/Modules/renderCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLike.js */ \"./src/Modules/addLike.js\");\n\n\nconst cards = document.getElementById('cards');\n\nconst renderCards = (array) => {\n  let htmlToAppend = '';\n  array.forEach((data) => {\n    const card = `\n          <div id=\"${\n  data.key\n}\" class=\"flex flex-col gap-2 p-4 h-full rounded-2xl bg-[#1C1F26] drop-shadow-md border-2 border-[#a8b3cf33;] hover:border-[#a8b3cf50;]\">\n            <div class=\"w-full h-[250px] rounded-lg\">\n              <img class=\"h-[250px] w-auto mx-auto\" src=\"${\n  data.images?.coverart || data.images?.background\n}\" />\n            </div>\n            <div class=\"flex flex-col gap-2 justify-between\">\n              <h2 class=\"font-semibold capitalize custom-title\">${\n  data.title.length < 28 ? data.title : `${data.title.substring(0, 25)}...`\n}</h2>\n              <div class=\"flex flex-col gap-1 justify-between\">\n                <div class=\"flex justify-between p-1 items-center\">\n                  <img class=\"h-[20px] color-white\" src=\"./assets/adore.svg\" alt=\"\" />\n                  <span id=\"like-${data.key}\" class=\"text-sm\">no likes</span>\n                </div>\n                <button class=\"btn flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]\">\n                  <img class=\"h-[20px] color-white\" src=\"./assets/comment.svg\" alt=\"\" />\n                  <span class=\"text-sm\">no comment</span>\n                </button>\n                <button class=\"btn-2 bg-[#ffffff10] p-1 rounded text-center cursor-pointer hover:bg-[#ffffff20]\">\n                  order now\n                </button>\n              </div>\n            </div>\n          </div>\n        `;\n    htmlToAppend += card;\n  });\n\n  cards.innerHTML = htmlToAppend;\n\n  (0,_addLike_js__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)().then((showLikes) => {\n    array.forEach((data) => {\n      const likeNbr = document.getElementById(`like-${data.key}`);\n\n      const item = showLikes.find((item) => item.item_id === data.key);\n      likeNbr.innerHTML = item ? `${item.likes} likes` : 'No like yet';\n    });\n  });\n\n  array.forEach((data) => {\n    const { key } = data;\n    const likeNbr = document.getElementById(`like-${key}`);\n    const likeBtn = likeNbr.parentElement.querySelector('img');\n\n    likeBtn.addEventListener('click', () => {\n      (0,_addLike_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(key, likeNbr);\n      likeBtn.setAttribute('src', './assets/adoreRed.svg');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/renderCards.js?");

/***/ }),

/***/ "./src/Modules/reservationPopUp.js":
/*!*****************************************!*\
  !*** ./src/Modules/reservationPopUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reservationPopUp = () => {\n  const reservBtn = Array.from(document.getElementsByClassName('btn-2'));\n  const comments = JSON.parse(localStorage.getItem('comments')) || {};\n  const pop = document.querySelector('.reserv-pop');\n  pop.setAttribute('style', 'display: none;');\n\n  const createPopup = (data) => {\n    const popup = document.createElement('div');\n    popup.classList.add('popup');\n\n    const closeBtn = document.createElement('div');\n    closeBtn.classList.add('close-btn', 'text-4xl', 'py-2', 'cursor-pointer', 'text-right');\n    closeBtn.innerHTML = '&times;';\n    closeBtn.addEventListener('click', () => {\n      popup.remove();\n      pop.setAttribute('style', 'display: none;');\n    });\n\n    const popupImgContainer = document.createElement('div');\n    popupImgContainer.classList.add('img-container');\n\n    const popupImg = document.createElement('img');\n    popupImg.src = data.images?.coverart || data.images?.background;\n\n    const popupTitle = document.createElement('h3');\n    popupTitle.classList.add('text-3xl', 'font-bold');\n    popupTitle.innerHTML = data.title;\n\n    const commentsTitle = document.createElement('h3');\n    commentsTitle.textContent = `Comments (${comments[data.title] ? comments[data.title].length : 0})`;\n\n    const commentList = document.createElement('ul');\n    commentList.classList.add('comment-list');\n    if (comments[data.title]) {\n      comments[data.title].forEach((comment) => {\n        const commentItem = document.createElement('li');\n        commentItem.innerHTML = `<strong>${comment.comment} : </strong>  ${comment.name}`;\n        commentList.appendChild(commentItem);\n      });\n    } else {\n      const noCommentItem = document.createElement('li');\n      noCommentItem.innerHTML = 'No comments yet';\n      commentList.appendChild(noCommentItem);\n    }\n\n    const formTitle = document.createElement('h3');\n    formTitle.innerHTML = 'Add a comment';\n\n    const commentInput = document.createElement('input');\n    commentInput.type = 'text';\n    commentInput.classList.add('comment-input');\n    commentInput.placeholder = 'Enter your name...';\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.classList.add('name-input');\n    nameInput.placeholder = 'Enter a comment...';\n\n    const submitBtn = document.createElement('button');\n    submitBtn.type = 'submit';\n    submitBtn.innerHTML = 'Comment';\n\n    const form = document.createElement('form');\n    form.addEventListener('submit', (event) => {\n      event.preventDefault();\n      const commentInput = event.target.querySelector('.comment-input');\n      const comment = commentInput.value.trim();\n      const nameInput = event.target.querySelector('.name-input');\n      const name = nameInput.value.trim();\n      if (comment) {\n        if (!comments[data.title]) {\n          comments[data.title] = [];\n        }\n        comments[data.title].push({ name, comment });\n        localStorage.setItem('comments', JSON.stringify(comments));\n\n        const commentItem = document.createElement('li');\n        commentItem.innerHTML = `<strong>${name}:</strong> ${comment}`;\n        commentList.appendChild(commentItem);\n\n        commentsTitle.textContent = `Comments (${comments[data.title].length})`;\n        commentInput.value = '';\n        nameInput.value = '';\n      }\n    });\n\n    form.appendChild(commentInput);\n    form.appendChild(nameInput);\n    form.appendChild(submitBtn);\n\n    const popupHeader = document.createElement('div');\n    popupHeader.classList.add('popup-header');\n    popupHeader.appendChild(closeBtn);\n\n    const popupContent = document.createElement('div');\n    popupContent.classList.add('popup-content');\n    popupImgContainer.appendChild(popupImg);\n    popupContent.appendChild(popupImgContainer);\n    popupContent.appendChild(popupTitle);\n    popupContent.appendChild(commentsTitle);\n    popupContent.appendChild(commentList);\n    popupContent.appendChild(formTitle);\n    popupContent.appendChild(form);\n\n    popup.appendChild(popupHeader);\n    popup.appendChild(popupContent);\n    pop.appendChild(popup);\n  };\n\n  reservBtn.forEach((likeBtn) => {\n    likeBtn.addEventListener('click', async () => {\n      pop.setAttribute('style', 'display: block;');\n      const title = likeBtn.parentNode.parentNode.querySelector('h2').textContent;\n      const data = JSON.parse(localStorage.getItem('songs')).find((song) => song.title === title);\n      createPopup(data);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationPopUp);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/Modules/reservationPopUp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _rapidApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rapidApi.js */ \"./src/rapidApi.js\");\n\n\n\n\n(0,_rapidApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://js-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/rapidApi.js":
/*!*************************!*\
  !*** ./src/rapidApi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Modules_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/commentsPopUp.js */ \"./src/Modules/commentsPopUp.js\");\n/* harmony import */ var _Modules_reservationPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/reservationPopUp.js */ \"./src/Modules/reservationPopUp.js\");\n/* harmony import */ var _Modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/renderCards.js */ \"./src/Modules/renderCards.js\");\n/* harmony import */ var _Modules_apiConsts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/apiConsts.js */ \"./src/Modules/apiConsts.js\");\n\n\n\n\n\nconst getShazamTracks = async () => {\n  if (localStorage.getItem('songs')) {\n    const localStorageItem = localStorage.getItem('songs');\n    const songs = JSON.parse(localStorageItem);\n\n    (0,_Modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(songs);\n    (0,_Modules_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_Modules_reservationPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  } else {\n    try {\n      const response = await fetch(_Modules_apiConsts_js__WEBPACK_IMPORTED_MODULE_3__.url, _Modules_apiConsts_js__WEBPACK_IMPORTED_MODULE_3__.options);\n      const result = await response.json();\n      if (result && result.tracks) {\n        const songs = result.tracks;\n        localStorage.setItem('songs', JSON.stringify(songs));\n\n        (0,_Modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(songs);\n        (0,_Modules_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_Modules_reservationPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      } else {\n        throw new Error('Failed to get Shazam tracks');\n      }\n    } catch (error) {\n      throw new Error(error);\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShazamTracks);\n\n\n//# sourceURL=webpack://js-capstone-project/./src/rapidApi.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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