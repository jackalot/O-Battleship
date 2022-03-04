import './style.css';

const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');
const domBoardFile = require('./updateDOMBoard');
const attackDomFile = require('./attackDomManager');

const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
//  console.log(playerOne.ourBoard);
//  console.log(playerTwo.ourBoard);

const p1DomBoardManager = domBoardFile(playerOne, 'P1Box', playerTwo, false);
const p2DomBoardManager = domBoardFile(playerTwo, 'P2Box', playerOne, true);
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerTwo.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerOne.ourBoard.placeShip({ x: 2, y: 1 }, { x: 8, y: 1 });
playerTwo.ourBoard.placeShip({ x: 2, y: 1 }, { x: 8, y: 1 });
playerOne.ourBoard.placeShip({ x: 9, y: 3 }, { x: 9, y: 9 });
playerTwo.ourBoard.placeShip({ x: 9, y: 3 }, { x: 9, y: 9 });
playerOne.ourBoard.placeShip({ x: 1, y: 10 }, { x: 10, y: 10 });
playerTwo.ourBoard.placeShip({ x: 1, y: 10 }, { x: 10, y: 10 });
p1DomBoardManager.sendNextCollumn();
p2DomBoardManager.sendNextCollumn();
// Manages every attack and calls sendNextCollumn again after an attackIs confirmed
const attackManager = attackDomFile(playerOne, playerTwo, p1DomBoardManager, p2DomBoardManager);
// Confirms attacks when clicked
const confirmAttackBtn = document.querySelector('.confirmAttackBtn');
confirmAttackBtn.addEventListener('click', () => {
  attackManager.findUnconfirmedAttacks();
});
