import './style.css';

const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');
const domBoardFile = require('./updateDOMBoard');
const attackDomFile = require('./attackDomManager');

function callItAgain(defendingPlayer) {
  console.log(defendingPlayer);
  if (defendingPlayer === playerOne) {
    p1DomBoardManager.sendNextCollumn();
  } else if (defendingPlayer === playerTwo) {
    p2DomBoardManager.sendNextCollumn();
  }
}
const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
//  console.log(playerOne.ourBoard);
//  console.log(playerTwo.ourBoard);
const attackManager = attackDomFile(playerOne, playerTwo, callItAgain);

const p1DomBoardManager = domBoardFile(playerOne, 'P1Box', callItAgain, playerTwo);
const p2DomBoardManager = domBoardFile(playerTwo, 'P2Box', callItAgain, playerOne);
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerTwo.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerOne.ourBoard.placeShip({ x: 2, y: 1 }, { x: 8, y: 1 });
playerTwo.ourBoard.placeShip({ x: 2, y: 1 }, { x: 8, y: 1 });
playerOne.ourBoard.placeShip({ x: 9, y: 3 }, { x: 9, y: 9 });
playerTwo.ourBoard.placeShip({ x: 9, y: 3 }, { x: 9, y: 9 });
playerOne.ourBoard.placeShip({ x: 1, y: 10 }, { x: 10, y: 10 });
p1DomBoardManager.sendNextCollumn();
p2DomBoardManager.sendNextCollumn();
