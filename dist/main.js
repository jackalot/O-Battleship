/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".box {\\n background-color: blue;\\n width: 30px;\\n}\\n.board {\\n    display: grid;\\n    grid-template-columns: repeat(16, minimax(0, 5px));\\n    background-color: green;\\n}\\n.box {\\n    background-color: white;\\n    border: 1px solid rgba(0, 0, 0, 0.8);\\n    padding: 5px;\\n    text-align: center;\\n}\\nbody {\\n    grid-template-columns: green;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://O-Forms-Practice/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://O-Forms-Practice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://O-Forms-Practice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://O-Forms-Practice/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://O-Forms-Practice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://O-Forms-Practice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://O-Forms-Practice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://O-Forms-Practice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const shipFactory = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst gameBoardFactory = (bottomLeftCorner, topRightCorner) => {\n  // checkBottomLeftCorner() helper function\n  // checks if the coord is greater than the bottemLeftCorner\n  const myShips = [];\n  //  stores all the coords for hits and misses\n  const hitOrMissedCoords = [];\n  function checkGreaterThanBLC(coord) {\n    if (coord.x > bottomLeftCorner.x) {\n      return true;\n    }\n    // if x isnt greater, check if y is.\n    if (coord.y > bottomLeftCorner.y) {\n      return true;\n    }\n    return false;\n  }\n  function checkEqualToBLC(coord) {\n    if (coord.x === bottomLeftCorner.x) {\n      if (coord.y === bottomLeftCorner.y) {\n        return true;\n      }\n      return false;\n    }\n    return false;\n  }\n  //  checkValidCorner() helper function\n  // checks if the coord is out of bounds of the bottomLeftCorner\n  function checkBottomLeftCorner(coord) {\n    const greaterThan = checkGreaterThanBLC(coord);\n    const equalTo = checkEqualToBLC(coord);\n    // as long as one of the two are true, then it's valid\n    if (greaterThan === true || equalTo === true) {\n      return true;\n    }\n    return false;\n  }\n  // checkTopRightCorner() helper function\n  // checks if the coord is equal to the top right corner\n  function checkEqualToTRC(coord) {\n    if (coord.x === topRightCorner.x) {\n      if (coord.y === topRightCorner.y) {\n        return true;\n      }\n      return false;\n    }\n    return false;\n  }\n  // checkTopRightCorner() helper function\n  // checks if the coord is less than the top right corner\n  function checkLessThanTRC(coord) {\n    if (coord.x < topRightCorner.x) {\n      if (coord.y < topRightCorner.y) {\n        return true;\n      }\n      return false;\n    }\n    return false;\n  }\n  //  checkValidCorner() helper function\n  // checks if the coord is out of bounds of the topRightCorner\n  function checkTopRightCorner(coord) {\n    const checkEqual = checkEqualToTRC(coord);\n    const checkLess = checkLessThanTRC(coord);\n    if (checkEqual === true || checkLess === true) {\n      return true;\n    }\n    return false;\n  }\n  //  placeShip() helper function\n  // This checks if its not out of bounds\n  function checkValidCoord(coord) {\n    const CBLC = checkBottomLeftCorner(coord);\n    const CTPRC = checkTopRightCorner(coord);\n    if (CBLC === true && CTPRC === true) {\n      return true;\n    }\n    return false;\n  }\n  function placeShip(firstCoord, secondCoord) {\n    const checkFirstCoord = checkValidCoord(firstCoord);\n    const checkSecondCoord = checkValidCoord(secondCoord);\n    if (checkFirstCoord === true && checkSecondCoord === true) {\n      const ourShip = shipFactory(firstCoord, secondCoord);\n      myShips.push(ourShip);\n      return ourShip;\n    }\n    return null;\n  }\n  function checkAvailableCoord(coordinate) {\n    let matches = 0;\n    for (let i = 0; i < hitOrMissedCoords.length; i += 1) {\n      if (coordinate.x === hitOrMissedCoords[i].x) {\n        if (coordinate.y === hitOrMissedCoords[i].y) {\n          matches += 1;\n        }\n      }\n    }\n    if (matches > 0) {\n      return false;\n    }\n    if (matches < 0) {\n      return false;\n    }\n    return true;\n  }\n  function recieveAttack(coordinate) {\n    const checkCoord = checkValidCoord(coordinate);\n    if (checkCoord === true) {\n      for (let i = 0; i < myShips.length; i += 1) {\n        const result = myShips[i].hit(coordinate);\n        if (result === true) {\n          hitOrMissedCoords.push(coordinate);\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n  function allShipsSunk() {\n    let sunkShipsSum = 0;\n    for (let i = 0; i < myShips.length; i += 1) {\n      const result = myShips[i].sink();\n      if (result === 'you sunk my battle ship!') {\n        sunkShipsSum += 1;\n      }\n    }\n    //  If the corresponding functions test uses an only method\n    //  then myships would === 0 which means it would always return true\n    if (myShips.length > 0) {\n      if (sunkShipsSum === myShips.length) {\n        return true;\n      }\n    }\n    return false;\n  }\n  return {\n    bottomLeftCorner,\n    topRightCorner,\n    placeShip,\n    recieveAttack,\n    checkValidCoord,\n    checkBottomLeftCorner,\n    checkEqualToBLC,\n    checkGreaterThanBLC,\n    checkTopRightCorner,\n    checkEqualToTRC,\n    checkLessThanTRC,\n    allShipsSunk,\n    checkAvailableCoord,\n  };\n};\nmodule.exports = gameBoardFactory;\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst playerOneDomBoard = document.querySelector('#playerOneBoard');\nconst playerTwoDomBoard = document.querySelector('#playerTwoBoard');\nconst playerFile = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nconst playerOne = playerFile('player 1', 0);\nconst playerTwo = playerFile('CPU', 1);\nplayerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });\nplayerTwo.ourBoard.placeShip({ x: 2, y: 2 }, { x: 8, y: 2 });\nfunction populateBoard(board, player) {\n  while (board.firstChild) {\n    board.removeChild(board.firstChild);\n  }\n  const totalSlots = player.ourBoard.topRightCorner.x * player.ourBoard.topRightCorner.y;\n  for (let i = 0; i < totalSlots; i += 1) {\n    const box = document.createElement('div');\n    box.classList.add('box');\n    board.appendChild(box);\n  }\n}\npopulateBoard(playerOneDomBoard, playerOne);\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const boardFile = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\nconst playerFactory = (playerName, playerTurn) => {\n  const ourBoard = boardFile({ x: 1, y: 1 }, { x: 10, y: 10 });\n  //  this is for the AI to attack randomly, also helps check we didnt hit\n  //   an already missed/hit coordinate\n  function sendRandomAttack(playerAttacking) {\n    const x = Math.floor(Math.random() * playerAttacking.ourBoard.topRightCorner.x);\n    const y = Math.floor(Math.random() * playerAttacking.ourBoard.topRightCorner.y);\n    const coordinates = { x, y };\n    const fitsBoard = playerAttacking.ourBoard.checkValidCoord(coordinates);\n    if (fitsBoard === true) {\n      // check if these coordinates on the boord have a miss or hit checked already.\n      const openCoordinate = playerAttacking.ourBoard.checkAvailableCoord(coordinates);\n      if (openCoordinate === true) {\n        sendAttack(playerAttacking, coordinates);\n      }\n      return openCoordinate;\n    }\n    return false;\n  }\n  function swapTurn() {\n    // eslint doesnt like this function but its the easiest\n    //  solution other than true or false\n    if (playerTurn === 0) {\n      playerTurn++;\n      return playerTurn;\n    }\n    if (playerTurn === 1) {\n      playerTurn--;\n      return playerTurn;\n    }\n    return null;\n  }\n  function sendAttack(playerAttacking, coordinates) {\n    const result = playerAttacking.ourBoard.recieveAttack(coordinates);\n    swapTurn();\n    playerAttacking.swapTurn();\n    return result;\n  }\n  // calls the players board to place a ship at the desired coordinates\n  function placeShip(coord1, coord2) {\n    const result = ourBoard.placeShip(coord1, coord2);\n    return result;\n  }\n  return {\n    playerName, playerTurn, ourBoard, sendAttack, placeShip, swapTurn, sendRandomAttack,\n  };\n};\nmodule.exports = playerFactory;\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ (function(module) {

eval("const shipFactory = (coord1, coord2) => {\n  function lengthMeasurer(newCoord1, newCoord2) {\n    const yAxis = newCoord2.x - newCoord1.x;\n    const xAxis = newCoord2.y - newCoord1.y;\n    if (xAxis === 0) {\n      return yAxis;\n    }\n    if (yAxis === 0) {\n      return xAxis;\n    }\n    return null;\n  }\n  //  Returns the orientation of the ship as a string\n  function shipOrientation() {\n    const yAxis = coord2.x - coord1.x;\n    const xAxis = coord2.y - coord1.y;\n    if (xAxis === 0) {\n      return 'horizontal';\n    }\n    if (yAxis === 0) {\n      return 'vertical';\n    }\n    return null;\n  }\n  this.coord1 = coord1;\n  this.coord2 = coord2;\n  // This is an object constructor for ship parts that makes each part for the ship\n  function Part(partName, partCoordinates) {\n    this.partName = partName;\n    this.partCoordinates = partCoordinates;\n    this.hasSunk = false;\n  }\n  // This gets the length, orientation, and then makes each part have its corresponding coordinate,\n  //  then returns all of them in an array\n  function shipParts() {\n    const length = lengthMeasurer(coord1, coord2);\n    const orientation = shipOrientation();\n    const allParts = [];\n    if (orientation === 'horizontal') {\n      for (let i = coord1.x; i < length + 2; i += 1) {\n        const newPart = new Part(`part${i}`, { x: i, y: coord1.y });\n        allParts.push(newPart);\n      }\n      return allParts;\n    }\n    if (orientation === 'vertical') {\n      for (let i = coord1.y; i < length + 2; i += 1) {\n        const newPart = new Part(`part${i}`, { x: coord1.y, y: i });\n        allParts.push(newPart);\n      }\n      return allParts;\n    } return null;\n  }\n  const myParts = shipParts();\n  // hit() Helper function\n  //  we know its the same x, but now check if the same Y\n  function guessXMinusCoordXIsZero(guessCoord) {\n    if (guessCoord.y >= coord1.y || guessCoord.y <= coord2.y) {\n      for (let i = 0; i < myParts; i += 1) {\n        if (guessCoord.y === myParts[i].partCoordinates.y) {\n          myParts[i].hasSunk = true;\n        }\n      }\n      return true;\n    }\n    return false;\n  }\n  // hit() Helper function\n  //  we know its the same y, but now check if the same X\n  function guessYMinusCoordYIsZero(guessCoord) {\n    if (guessCoord.x >= coord1.x || guessCoord.x <= coord2.x) {\n      for (let i = 0; i < myParts; i += 1) {\n        if (guessCoord.x === myParts[i].partCoordinates.x) {\n          myParts[i].hasSunk = true;\n        }\n      }\n      return true;\n    }\n    return false;\n  }\n  function hit(guessCoord) {\n    if (guessCoord.x - coord1.x === 0) {\n      const resultY = guessXMinusCoordXIsZero(guessCoord);\n      return resultY;\n    }\n    if (guessCoord.y - coord1.y === 0) {\n      const resultX = guessYMinusCoordYIsZero(guessCoord);\n      return resultX;\n    }\n    return false;\n  }\n  function sink() {\n    const length = lengthMeasurer(coord1, coord2);\n    const orientation = shipOrientation();\n    if (orientation === 'horizontal') {\n      let sunkParts = 0;\n      for (let i = coord1.x; i < length - 1; i += 1) {\n        if (myParts[i].hasSunk === true) {\n          sunkParts += 1;\n        }\n      }\n      if (sunkParts === length) {\n        return 'you sunk my battle ship!';\n      }\n      return 'I still have parts left';\n    }\n    if (orientation === 'vertical') {\n      let sunkParts = 0;\n      for (let i = coord1.y; i < length - 1; i += 1) {\n        if (myParts[i].hasSunk === true) {\n          sunkParts += 1;\n        }\n      }\n      if (sunkParts === length) {\n        return 'you sunk my battle ship!';\n      }\n      return 'I still have parts left';\n    }\n    return 'error';\n  }\n  return {\n    coord1, coord2, lengthMeasurer, hit, sink, shipParts,\n  };\n};\nmodule.exports = shipFactory;\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/ship.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;