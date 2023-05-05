/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.todolistbody {\\r\\n  width: 90%;\\r\\n  margin: 0 auto;\\r\\n  font-family: Arial, sans-serif;\\r\\n  font-size: 1rem;\\r\\n  background-color: white;\\r\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\\r\\n}\\r\\n\\r\\n.todolist {\\r\\n  width: 100%;\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.todoListli {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  border-bottom: 1px solid #f5f5f5df;\\r\\n  padding: 0;\\r\\n  width: 100%;\\r\\n  height: 2rem;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.todolist li label {\\r\\n  width: 98%;\\r\\n}\\r\\n\\r\\n.listinput {\\r\\n  width: 90%;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  display: flex;\\r\\n  border-bottom: 1px solid #f5f5f5df;\\r\\n  padding-left: 1.5rem;\\r\\n  height: 2rem;\\r\\n  margin-top: 0.5rem;\\r\\n}\\r\\n\\r\\n#addlistitem {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  margin-left: 1.5rem;\\r\\n  height: 2rem;\\r\\n}\\r\\n\\r\\n#addlistitem::placeholder {\\r\\n  font-style: italic;\\r\\n  font-size: 0.7rem;\\r\\n}\\r\\n\\r\\n.clearCompleted {\\r\\n  background-color: #f5f5f5df;\\r\\n  text-align: center;\\r\\n  color: #747272;\\r\\n  height: 2rem;\\r\\n  line-height: 2rem;\\r\\n  width: 100%;\\r\\n  border: #747272;\\r\\n}\\r\\n\\r\\n.action {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.dot {\\r\\n  width: 3px;\\r\\n  height: 3px;\\r\\n  margin-bottom: 2px;\\r\\n  border-radius: 50%;\\r\\n  background-color: #525252;\\r\\n}\\r\\n\\r\\n.editbut,\\r\\n.delete {\\r\\n  margin-right: 0.5rem;\\r\\n  height: 1.3rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nconst addTodoItem = __webpack_require__(/*! ./module/add.js */ \"./src/module/add.js\");\r\n\r\nconst removeTodoItem = __webpack_require__(/*! ./module/remove.js */ \"./src/module/remove.js\");\r\n\r\nconst updateTodoStatus = __webpack_require__(/*! ./module/update.js */ \"./src/module/update.js\");\r\n\r\nconst Clearcomplete = __webpack_require__(/*! ./module/clearcompleted.js */ \"./src/module/clearcompleted.js\");\r\n\r\nconst todoListContainer = document.querySelector('.todolistbody');\r\n\r\nconst todosData = JSON.parse(localStorage.getItem('todosData')) || [];\r\n\r\nconst loadTodos = () => {\r\n  if (todosData.length > 0) {\r\n    todosData.forEach((todo) => {\r\n      const todoListItem = document.createElement('li');\r\n      todoListItem.classList.add('todoListli');\r\n      todoListItem.setAttribute('data-id', todo.index);\r\n      todoListItem.setAttribute('data-completed', todo.completed);\r\n\r\n      const label = document.createElement('label');\r\n      label.setAttribute('for', todo.index);\r\n\r\n      const checkbox = document.createElement('input');\r\n      checkbox.setAttribute('type', 'checkbox');\r\n      checkbox.setAttribute('id', todo.index);\r\n      checkbox.setAttribute('value', todo.id);\r\n      checkbox.setAttribute('class', 'checkboxinput');\r\n      if (todo.completed) {\r\n        checkbox.setAttribute('checked', '');\r\n      }\r\n\r\n      const textInput = document.createElement('input');\r\n      textInput.setAttribute('class', 'listinput');\r\n      textInput.setAttribute('type', 'text');\r\n      textInput.setAttribute('value', todo.description);\r\n      textInput.setAttribute('readonly', '');\r\n\r\n      label.appendChild(checkbox);\r\n      label.appendChild(textInput);\r\n\r\n      const actionDiv = document.createElement('div');\r\n      actionDiv.classList.add('action');\r\n\r\n      const dot1 = document.createElement('span');\r\n      dot1.classList.add('dot');\r\n\r\n      const dot2 = document.createElement('span');\r\n      dot2.classList.add('dot');\r\n\r\n      const dot3 = document.createElement('span');\r\n      dot3.classList.add('dot');\r\n\r\n      actionDiv.appendChild(dot1);\r\n      actionDiv.appendChild(dot2);\r\n      actionDiv.appendChild(dot3);\r\n\r\n      todoListItem.appendChild(label);\r\n      todoListItem.appendChild(actionDiv);\r\n\r\n      todoListContainer.querySelector('.todolist').appendChild(todoListItem);\r\n\r\n      checkbox.addEventListener('change', () => {\r\n        const isChecked = checkbox.checked;\r\n        const itemId = checkbox.id;\r\n        updateTodoStatus(todosData, itemId, isChecked);\r\n        // eslint-disable-next-line no-restricted-globals\r\n        location.reload();\r\n      });\r\n\r\n      // add event listener to the action div\r\n      actionDiv.addEventListener('click', (event) => {\r\n        // add delete button\r\n        const deleteButton = document.createElement('button');\r\n        deleteButton.innerText = 'Delete';\r\n        deleteButton.classList.add('delete');\r\n        event.currentTarget.parentElement.appendChild(deleteButton);\r\n\r\n        // add edit button\r\n        const editButton = document.createElement('button');\r\n        editButton.innerText = 'Edit';\r\n        editButton.classList.add('editbut');\r\n        event.currentTarget.parentElement.appendChild(editButton);\r\n\r\n        // remove the action div\r\n        event.currentTarget.remove();\r\n\r\n        editButton.addEventListener('click', () => {\r\n          const li = editButton.closest('li');\r\n          const textInput = li.querySelector('.listinput');\r\n          if (textInput.hasAttribute('readonly')) {\r\n            textInput.removeAttribute('readonly');\r\n            editButton.innerHTML = 'Save';\r\n          } else {\r\n            const newValue = textInput.value;\r\n            const todoIndex = todosData.findIndex((item) => item.index === todo.index);\r\n            todosData[todoIndex].description = newValue;\r\n            textInput.setAttribute('readonly', '');\r\n            editButton.innerHTML = 'Edit';\r\n            localStorage.setItem('todosData', JSON.stringify(todosData));\r\n          }\r\n        });\r\n      });\r\n    });\r\n    const clear = document.createElement('button');\r\n    clear.classList.add('clearCompleted');\r\n    clear.innerText = 'Clear All Completed';\r\n    todoListContainer.querySelector('.todolist').appendChild(clear);\r\n\r\n    clear.addEventListener('click', () => {\r\n      Clearcomplete(todosData);\r\n      // eslint-disable-next-line no-restricted-globals\r\n      location.reload();\r\n    });\r\n  }\r\n};\r\n\r\n// add a todo task\r\nconst newTaskInput = document.querySelector('#addlistitem');\r\n\r\nnewTaskInput.addEventListener('keydown', (event) => {\r\n  if (event.key === 'Enter') {\r\n    const newTask = newTaskInput.value.trim();\r\n    if (newTask !== '') {\r\n      addTodoItem(todosData, newTask, loadTodos);\r\n      newTaskInput.value = '';\r\n      // eslint-disable-next-line no-restricted-globals\r\n      location.reload();\r\n    }\r\n  }\r\n});\r\n\r\n// delete a todo task\r\ntodoListContainer.addEventListener('click', (event) => {\r\n  if (event.target.classList.contains('delete')) {\r\n    const itemId = event.target.dataset.id;\r\n    const itemIndex = todosData.findIndex((item) => item.id === itemId);\r\n    removeTodoItem(todosData, itemIndex);\r\n    // eslint-disable-next-line no-restricted-globals\r\n    location.reload();\r\n  }\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n  const savedTodosData = JSON.parse(localStorage.getItem('todosData'));\r\n  if (savedTodosData) {\r\n    loadTodos();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/module/add.js":
/*!***************************!*\
  !*** ./src/module/add.js ***!
  \***************************/
/***/ ((module) => {

eval("const addTodoItem = (todos, description) => {\n  const newTodo = {\n    index: todos.length,\n    description,\n    completed: false,\n  };\n  todos.push(newTodo);\n  localStorage.setItem('todosData', JSON.stringify(todos));\n};\n\nmodule.exports = addTodoItem;\n\n//# sourceURL=webpack://to-do-list/./src/module/add.js?");

/***/ }),

/***/ "./src/module/clearcompleted.js":
/*!**************************************!*\
  !*** ./src/module/clearcompleted.js ***!
  \**************************************/
/***/ ((module) => {

eval("const clearCompleted = (todosData) => {\n  const newTodosData = todosData.filter((todo) => !todo.completed);\n  localStorage.setItem('todosData', JSON.stringify(newTodosData));\n};\n\nmodule.exports = clearCompleted;\n\n//# sourceURL=webpack://to-do-list/./src/module/clearcompleted.js?");

/***/ }),

/***/ "./src/module/remove.js":
/*!******************************!*\
  !*** ./src/module/remove.js ***!
  \******************************/
/***/ ((module) => {

eval("const removeTodoItem = (todos, index) => {\n  todos.splice(index, 1);\n  todos.forEach((todo, i) => {\n    todo.index = i;\n  });\n  localStorage.setItem('todosData', JSON.stringify(todos));\n};\n\nmodule.exports = removeTodoItem;\n\n\n//# sourceURL=webpack://to-do-list/./src/module/remove.js?");

/***/ }),

/***/ "./src/module/update.js":
/*!******************************!*\
  !*** ./src/module/update.js ***!
  \******************************/
/***/ ((module) => {

eval("const updateTodoStatus = (todosData, id, isChecked) => {\n  if (isChecked) {\n    todosData[id].completed = true;\n    localStorage.setItem('todosData', JSON.stringify(todosData));\n  } else {\n    todosData[id].completed = false;\n    localStorage.setItem('todosData', JSON.stringify(todosData));\n  }\n};\n\nmodule.exports = updateTodoStatus;\n\n\n//# sourceURL=webpack://to-do-list/./src/module/update.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);