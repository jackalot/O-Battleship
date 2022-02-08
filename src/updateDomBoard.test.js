const updateDOMBoardFile = require("./updateDOMBoard.js");
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const p1DomBoardManager = updateDOMBoardFile(player1, 'P1Box');
import '@testing-library/jest-dom';
player1.placeShip({ x: 1, y: 1 });