import './style.css';

const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');
const domBoardFile = require('./updateDOMBoard');

const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
const p1DomBoardManager = domBoardFile(playerOne, 'P1Box');
p1DomBoardManager.sendNextCollumn();
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerTwo.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerOne.ourBoard.placeShip({ x: 2, y: 1 }, { x: 8, y: 1 });
playerTwo.ourBoard.placeShip({ x: 2, y: 1 }, { x: 8, y: 1 });
playerOne.ourBoard.placeShip({ x: 9, y: 3 }, { x: 9, y: 9 });
playerTwo.ourBoard.placeShip({ x: 9, y: 3 }, { x: 9, y: 9 });
