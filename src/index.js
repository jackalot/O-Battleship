import './style.css';

const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');

const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerTwo.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerOne.ourBoard.placeShip({ x: 2, y: 1 }, { x: 8, y: 1 });
playerTwo.ourBoard.placeShip({ x: 2, y: 1 }, { x: 8, y: 1 });
playerOne.ourBoard.placeShip({ x: 9, y: 3 }, { x: 9, y: 9 });
playerTwo.ourBoard.placeShip({ x: 9, y: 3 }, { x: 9, y: 9 });
// clears all the boxes and their event listeners
function clearBoxes(player) {

}
//  When a box is clicked, send it to this function
function attackBox(playerDefending, coordinates) {
  console.log(`playerDefending is ${playerDefending.playerName} and the coordinates are ${coordinates.x}, ${coordinates.y}`);
  // if playerOne is defending and their turn is 1 (meaning they can't attack)
  if (playerOne === playerDefending && playerOne.playerTurn === 1) {
    playerOne.ourBoard.recieveAttack(coordinates);
    playerOne.swapTurn();
    playerTwo.swapTurn();
    // eslint-disable-next-line no-use-before-define
    populateBoard(playerOneDomBoard, playerOne);
    console.log(playerOne.playerTurn);
    console.log(playerTwo.playerTurn);
  }
  // if playerTwo is defending and their turn is 1 (meaning they can't attack)
  if (playerTwo === playerDefending && playerTwo.playerTurn === 1) {
    playerTwo.ourBoard.recieveAttack(coordinates);
    playerTwo.swapTurn();
    playerOne.swapTurn();
    // eslint-disable-next-line no-use-before-define
    populateBoard(playerTwoDomBoard, playerTwo);
    console.log(playerOne.playerTurn);
    console.log(playerTwo.playerTurn);
  }
}
function boxEvent(box, player, coordinate) {
  const coordAvailable = player.ourBoard.checkAvailableCoord(coordinate);
  if (coordAvailable === true) {
    box.addEventListener('click', () => {
      attackBox(player, coordinate);
    });
  }
}
//  This is a populateBoard() Helperfunction
// creates a box and applies its needed styles
function createBox(queryString, player, coordinate) {
  const selectedBox = document.querySelector(queryString);
  const possibleHitOrMiss = player.ourBoard.checkMissesAndHits(coordinate);
  const possibleShip = player.ourBoard.findFirstShip(coordinate);
  if (possibleHitOrMiss === 'Hit') {
    selectedBox.classList.add('hit');
  }
  if (possibleHitOrMiss === 'Miss') {
    selectedBox.classList.add('miss');
  }
  if (possibleShip === true) {
    selectedBox.classList.add('containsShip');
    boxEvent(selectedBox, player, coordinate);
  }
  if (possibleHitOrMiss === 'none') {
    boxEvent(selectedBox, player, coordinate);
  }
}
// Loops through the board and gets the needed xAxis for each row
// Then sends to createBox the queryString, player, and coordinates
function populateBoard(board, player) {
  for (let i = 1; i < 100; i += 1) {
    //  row 1
    if (i < 11) {
      if (player === playerOne) {
        createBox(`#P1Box-${i}-1`, player, { x: i, y: 1 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${i}-1`, player, { x: i, y: 1 });
      }
    } //  10 - 21 is the second row
    if (i < 21 && i > 10) {
      const xAxis = Math.floor(i / 10);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-2`, player, { x: xAxis, y: 2 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-2`, player, { x: xAxis, y: 2 });
      }
    }
    //  20 - 31 is the third row
    if (i < 31 && i > 20) {
      const xAxis = Math.floor(i / 20);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-3`, player, { x: xAxis, y: 3 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-3`, player, { x: xAxis, y: 3 });
      }
    }
    // 30 - 41 is the fourth row
    if (i < 41 && i > 30) {
      const xAxis = Math.floor(i / 30);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-4`, player, { x: xAxis, y: 4 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-4`, player, { x: xAxis, y: 4 });
      }
    }
    // 40 - 51 is the fifth row
    if (i < 51 && i > 40) {
      const xAxis = Math.floor(i / 40);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-5`, player, { x: xAxis, y: 5 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-5`, player, { x: xAxis, y: 5 });
      }
    }
    // 50 - 61 is the sixth row
    if (i < 61 && i > 50) {
      const xAxis = Math.floor(i / 50);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-6`, player, { x: xAxis, y: 6 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-6`, player, { x: xAxis, y: 6 });
      }
    }
    // 60 - 71 is the seventh row
    if (i < 71 && i > 60) {
      const xAxis = Math.floor(i / 60);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-7`, player, { x: xAxis, y: 7 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-7`, player, { x: xAxis, y: 7 });
      }
    }
    // 70 - 81 is the eigth row
    if (i < 81 && i > 70) {
      const xAxis = Math.floor(i / 70);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-8`, player, { x: xAxis, y: 8 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-8`, player, { x: xAxis, y: 8 });
      }
    }
    // 80 - 91 is the ninth row
    if (i < 91 && i > 80) {
      const xAxis = Math.floor(i / 80);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-9`, player, { x: xAxis, y: 9 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-9`, player, { x: xAxis, y: 9 });
      }
    }
    // 90 - 101 is the tenth row
    if (i < 101 && i > 90) {
      const xAxis = Math.floor(i / 90);
      if (player === playerOne) {
        createBox(`#P1Box-${xAxis}-10`, player, { x: xAxis, y: 10 });
      } else if (player === playerTwo) {
        createBox(`#P2Box-${xAxis}-10`, player, { x: xAxis, y: 10 });
      }
    }
  }
}
populateBoard(playerOneDomBoard, playerOne);
populateBoard(playerTwoDomBoard, playerTwo);
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
