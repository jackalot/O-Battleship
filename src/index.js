import './style.css';

const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');

const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerTwo.ourBoard.placeShip({ x: 2, y: 2 }, { x: 7, y: 2 });
console.log('player one topRight corner(Limit):');
console.log(playerOne.ourBoard.topRightCorner);
console.log(`player one bottomLeftCorner(Limit):${playerOne.ourBoard.bottomLeftCorner}`);
console.log(playerOne.ourBoard.bottomLeftCorner);
console.log(`player two topRightCorner(Limit): ${playerTwo.ourBoard.topRightCorner}`);
console.log(playerTwo.ourBoard.bottomLeftCorner);
console.log(`player two bottomLeftCorner(Limit): ${playerTwo.ourBoard.bottomLeftCorner}`);
console.log(playerTwo.ourBoard.bottomLeftCorner);
//  When a box is clicked, send it to this function
function attackBox(playerDefending, coordinates) {
  console.log('hi');
  // if playerOne is defending and their turn is 1 (meaning they can't attack)
  if (playerOne === playerDefending && playerOne.playerTurn === 1) {
    playerOne.ourBoard.recieveAttack(coordinates);
    // eslint-disable-next-line no-use-before-define
    populateBoard(playerOneDomBoard, playerOne);
  }
  // if playerTwo is defending and their turn is 1 (meaning they can't attack)
  if (playerTwo === playerDefending && playerTwo.playerTurn === 1) {
    playerTwo.ourBoard.recieveAttack(coordinates);
    // eslint-disable-next-line no-use-before-define
    populateBoard(playerTwoDomBoard, playerTwo);
  }
}
// Will populate the board will the appropiate color
function populateBoard(board, player) {
  for (let i = 0; i < 100; i += 1) {
    //  row 1
    if (i < 11) {
      // do whats needed on row 1.
    }
  }
}
populateBoard(playerOneDomBoard, playerOne);
populateBoard(playerTwoDomBoard, playerTwo);
