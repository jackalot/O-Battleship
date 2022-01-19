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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const playerOneDomBoard = document.querySelector('#playerOneBoard');\nconst playerTwoDomBoard = document.querySelector('#playerTwoBoard');\nconst playerFile = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nconst playerOne = playerFile('player 1', 0);\nconst playerTwo = playerFile('CPU', 1);\nplayerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });\nplayerTwo.ourBoard.placeShip({ x: 2, y: 2 }, { x: 8, y: 2 });\nfunction populateBoard(board, player) {\n  while (board.firstChild) {\n    board.removeChild(board.firstChild);\n  }\n  const table = document.createElement('table');\n  const totalSlots = player.ourBoard.topRightCorner.x * player.ourBoard.topRightCorner.y;\n  for (let i = 0; i < totalSlots; i += 1) {\n\n  }\n  board.append(table);\n}\npopulateBoard(playerOneDomBoard, playerOne);\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;