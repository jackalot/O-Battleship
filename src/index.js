import './style.css';

const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');

const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerTwo.ourBoard.placeShip({ x: 2, y: 2 }, { x: 8, y: 2 });
function populateBoard(board, player) {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  const totalSlots = player.ourBoard.topRightCorner.x * player.ourBoard.topRightCorner.y;
  /*
  for loop values of the board
  The board is 10 wide and 10 tall
  and the loop creates it in this order
    0  1  2  3  4  5  6  7  8  9
   10 11 12 13 14 15 16 17 18 19
   20 21 22 23 24 25 26 27 28 29
   30 11 12 13 14 15 16 17 18 39
   40 11 12 13 14 15 16 17 18 49
   50 11 12 13 14 15 16 17 18 59
   60 11 12 13 14 15 16 17 18 69
   70 11 12 13 14 15 16 17 18 79
   80 11 12 13 14 15 16 17 18 89
   90 11 12 13 14 15 16 17 18 99
  */
  for (let i = 0; i < totalSlots; i += 1) {
    const box = document.createElement('div');
    //  this is x 10 or below, 10 is the limit of the board
    if (i < 10) {
      // find a ship on x = 1 - 10
      const possibleShip = player.ourBoard.findFirstShip({ x: i, y: 1 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${i}, y: 1`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
    }
    //  this is x 10
    if (i < 20) {
      const xAxis = i - 10;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 2 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 2`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
    }
    if (i < 30) {
      const xAxis = i - 20;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 3 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 3`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
    }
    box.classList.add('box');
    board.appendChild(box);
  }
}
populateBoard(playerOneDomBoard, playerOne);
populateBoard(playerTwoDomBoard, playerTwo);
