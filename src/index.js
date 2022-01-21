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
  1  2   3  4  5  6  7  8  9 10
  11 12 13 14 15 16 17 18 19 20
  21 22 23 24 25 26 27 28 29 30
  31 32 33 34 35 36 37 38 39 40
  41 42 43 44 45 46 47 48 49 50
  51 52 53 54 55 56 57 58 59 60
  61 62 63 64 65 66 67 68 69 70
  71 72 73 74 75 76 77 78 79 80
  81 82 83 84 85 86 87 88 89 90
  91 92 93 94 95 96 97 98 99 100
  */
  for (let i = 0; i < totalSlots; i += 1) {
    const box = document.createElement('div');
    //  this is x 10 or below, 10 is the limit of the board
    if (i > 11) {
      // find a ship on x = 1 - 10
    }
    //  this is x 10
    if (i < 21) {

    }
    box.classList.add('box');
    board.appendChild(box);
  }
}
populateBoard(playerOneDomBoard, playerOne);
populateBoard(playerTwoDomBoard, playerTwo);
