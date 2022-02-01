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
//  This is a populateBoard() Helperfunction
// creates a box and applies its needed styles
function createBox(queryString, player, coordinate) {
  const selectedBox = document.querySelector(queryString);
  const possibleHitOrMiss = player.ourBoard.checkMissesAndHits(coordinate);
  const possibleShip = player.ourBoard.findFirstShip(coordinate);
  if (possibleHitOrMiss === 'Hit') {
    selectedBox.classList('hit');
  }
  if (possibleHitOrMiss === 'Miss') {
    selectedBox.classList.add('miss');
  }
  if (possibleShip === true) {
    selectedBox.classList.add('containsShip');
  }
  selectedBox.addEventListener('click', () => {
    attackBox(player, coordinate);
  });
}
// Will populate the board will the appropiate color
function populateBoard(board, player) {
  for (let i = 1; i < 100; i += 1) {
    //  row 1
    if (i < 11) {
      // do whats needed on row 1.
      if (player === playerOne) {
        const selectedBox = document.querySelector(`#P1Box-${i}-1`);
        const possibleHitOrMiss = player.ourBoard.checkMissesAndHits({ x: i, y: 1 });
        const PossibleShip = player.ourBoard.findFirstShip({ x: i, y: 1 });
        if (possibleHitOrMiss === 'Hit') {
          selectedBox.classList('hit');
        }
        if (possibleHitOrMiss === 'Miss') {
          selectedBox.classList.add('miss');
        }
        if (PossibleShip === true) {
          selectedBox.classList.add('containsShip');
        }
        selectedBox.addEventListener('click', () => {
          attackBox(playerOne, { x: i, y: 1 });
        });
      } else if (player === playerTwo) {
        const selectedBox = document.querySelector(`#P2Box-${i}-1`);
        const possibleHitOrMiss = player.ourBoard.checkMissesAndHits({ x: i, y: 1 });
        const PossibleShip = player.ourBoard.findFirstShip({ x: i, y: 1 });
        if (possibleHitOrMiss === 'Hit') {
          selectedBox.classList('hit');
        }
        if (possibleHitOrMiss === 'Miss') {
          selectedBox.classList.add('miss');
        }
        if (PossibleShip === true) {
          selectedBox.classList.add('containsShip');
        }
        selectedBox.addEventListener('click', () => {
          attackBox(playerTwo, { x: i, y: 1 });
        });
      }
    } //  10 - 21 is the second row
    if (i < 21 && i > 10) {
      const xAxis = Math.floor(i / 10);
      // do whats needed on row 2.
      if (player === playerOne) {
        console.log(xAxis);
        createBox(`#P1Box-${xAxis}-2`, player, { x: xAxis, y: 2 });
      } else if (player === playerTwo) {
        const selectedBox = document.querySelector(`#P2Box-${xAxis}-1`);
        const possibleHitOrMiss = player.ourBoard.checkMissesAndHits({ x: xAxis, y: 1 });
        const PossibleShip = player.ourBoard.findFirstShip({ x: xAxis, y: 1 });
        if (possibleHitOrMiss === 'Hit') {
          selectedBox.classList('hit');
        }
        if (possibleHitOrMiss === 'Miss') {
          selectedBox.classList.add('miss');
        }
        if (PossibleShip === true) {
          selectedBox.classList.add('containsShip');
        }
        selectedBox.addEventListener('click', () => {
          attackBox(playerTwo, { x: i, y: 1 });
        });
      }
    }
  }
}
populateBoard(playerOneDomBoard, playerOne);
// populateBoard(playerTwoDomBoard, playerTwo);
//  Due to a weird DOM bug where similar cases couldnt be found online on how to fix
// where the boxTypes div moved into the playerTwo Div upon start Up of
// index.html, causing the boxTypes div to wrap around the playerTwo board.
// This function will fix that.
function createBoxTypesDiv() {
  const body = document.querySelector('body');
  const boxTypesDiv = document.createElement('div');
  boxTypesDiv.classList.add('boxTypes');
  body.append(boxTypesDiv);
  const missText = document.createElement('p');
  missText.textContent = 'Miss';
  boxTypesDiv.append(missText);
  const missDiv = document.createElement('div');
  missDiv.classList.add('box');
  missDiv.classList.add('miss');
  boxTypesDiv.append(missDiv);
  const hitText = document.createElement('p');
  hitText.textContent = 'Hit';
  boxTypesDiv.append(hitText);
  const hitDiv = document.createElement('div');
  hitDiv.classList.add('box');
  hitDiv.classList.add('hit');
  boxTypesDiv.append(hitDiv);
  const containsShipText = document.createElement('p');
  containsShipText.textContent = 'Contains Ship';
  boxTypesDiv.append(containsShipText);
  const containsShipDiv = document.createElement('div');
  containsShipDiv.classList.add('box');
  containsShipDiv.classList.add('containsShip');
  boxTypesDiv.append(containsShipDiv);
  const hoveringText = document.createElement('p');
  hoveringText.textContent = 'Currently Hovering';
  boxTypesDiv.append(hoveringText);
  const hoveringDiv = document.createElement('div');
  hoveringDiv.classList.add('box');
  hoveringDiv.classList.add('fakeHoverBox');
  boxTypesDiv.append(hoveringDiv);
}
createBoxTypesDiv();
