import './style.css';

const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');

const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerOne.ourBoard.placeShip({ x: 8, y: 2 }, { x: 8, y: 8 });
playerTwo.ourBoard.placeShip({ x: 2, y: 2 }, { x: 8, y: 2 });
playerTwo.ourBoard.placeShip({ x: 9, y: 9 }, { x: 1, y: 9 });
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
      const hitOrMiss = player.ourBoard.checkMissesAndHits({ x: i, y: 1 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${i}, y: 1`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      if (hitOrMiss === 'Hit') {
        box.classList.add('hit');
      }
      if (hitOrMiss === 'Miss') {
        box.classList.add('miss');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: i, y: 1 });
      });
    }
    //  this is x 10
    if (i < 20) {
      const xAxis = i - 10;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 2 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 2`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: xAxis, y: 2 });
      });
    }
    if (i < 30) {
      const xAxis = i - 20;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 3 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 3`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: xAxis, y: 3 });
      });
    }
    if (i < 40) {
      const xAxis = i - 30;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 4 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 4`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: xAxis, y: 4 });
      });
    }
    if (i < 50) {
      const xAxis = i - 40;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 5 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 5`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: xAxis, y: 5 });
      });
    }
    if (i < 60) {
      const xAxis = i - 50;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 6 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 6`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: xAxis, y: 6 });
      });
    }
    if (i < 70) {
      const xAxis = i - 60;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 7 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 7`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: xAxis, y: 7 });
      });
    }
    if (i < 80) {
      const xAxis = i - 70;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 8 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 8`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        const xAxis = i - 70;
        attackBox(player, { x: xAxis, y: 8 });
      });
    }
    if (i < 90) {
      const xAxis = i - 80;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 9 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 9`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: xAxis, y: 9 });
      });
    }
    if (i < 100) {
      const xAxis = i - 90;
      const possibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 10 });
      console.log(`possibleShip is ${possibleShip} and the coordinates are x: ${xAxis}, y: 10`);
      if (possibleShip === true) {
        box.classList.add('containsShip');
      }
      box.addEventListener('click', () => {
        attackBox(player, { x: xAxis, y: 10 });
      });
    }
    box.classList.add('box');
    board.appendChild(box);
  }
}
populateBoard(playerOneDomBoard, playerOne);
populateBoard(playerTwoDomBoard, playerTwo);
