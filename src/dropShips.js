const playerFile = require('./player');
const domBoardFile = require('./updateDOMBoard');

function dropShip() {
  function hideButton(buttonClass) {
    const button = document.querySelector(`.${buttonClass}`);
  }
  // createShipObject() helper function
  function findStartPoint(orientation, allUnconfirmedCoords) {
    if (orientation === 'horizontal') {
      let smallHNum = 10;
      for (let i = 0; i < allUnconfirmedCoords.length; i += 1) {
        if (allUnconfirmedCoords[i].x <= smallHNum) {
          smallHNum = allUnconfirmedCoords[i].x;
        }
      }
      return { x: smallHNum, y: allUnconfirmedCoords[0].y };
    }
    if (orientation === 'vertical') {
      let smallVNum = 10;
      for (let i = 0; i < allUnconfirmedCoords.length; i += 1) {
        if (allUnconfirmedCoords[i].y <= smallVNum) {
          smallVNum = allUnconfirmedCoords[i].y;
        }
      }
      return { x: allUnconfirmedCoords[0].x, y: smallVNum };
    }
    return { x: -1, y: -1 };
  }
  function findEndPoint(orientation, allUnconfirmedCoords) {
    if (orientation === 'horizontal') {
      let bigHNum = 0;
      for (let i = 0; i < allUnconfirmedCoords.length; i += 1) {
        if (allUnconfirmedCoords[i].x >= bigHNum) {
          bigHNum = allUnconfirmedCoords[i].x;
        }
      }
      return { x: bigHNum, y: allUnconfirmedCoords[0].y };
    }
    if (orientation === 'vertical') {
      let bigVNum = 0;
      for (let i = 0; i < allUnconfirmedCoords.length; i += 1) {
        if (allUnconfirmedCoords[i].y >= bigVNum) {
          bigVNum = allUnconfirmedCoords[i].y;
        }
      }
      return { x: allUnconfirmedCoords[0].x, y: bigVNum };
    }
    return { x: -1, y: -1 };
  }
  // createShipObject() helper function
  function findOrientation(allUnconfirmedCoords) {
    let yMatches = 0;
    // when looping, if something matches this y coordinate,
    // add 1 to yMatches
    const yMatcher = allUnconfirmedCoords[0].y;
    let xMatches = 0;
    const xMatcher = allUnconfirmedCoords[0].x;
    for (let i = 1; i < allUnconfirmedCoords.length; i += 1) {
      if (allUnconfirmedCoords[i].x === xMatcher) {
        xMatches += 1;
      }
      if (allUnconfirmedCoords[i].y === yMatcher) {
        yMatches += 1;
      }
    }
    if (xMatches === allUnconfirmedCoords.length - 1) {
      return 'vertical';
    }
    if (yMatches === allUnconfirmedCoords.length - 1) {
      return 'horizontal';
    }
    return 'none';
  }
  // confirmPlacedShips() helper function
  function createShipObject(allUnconfirmedCoords) {
    //  This orientation helps the startPoint and endPoint
    const shipOrietation = findOrientation(allUnconfirmedCoords);
    // gets the start of the ship's coordinates
    const startPoint = findStartPoint(shipOrietation, allUnconfirmedCoords);
    // gets the end of the ship's coordinates
    const endPoint = findEndPoint(shipOrietation, allUnconfirmedCoords);
    const shipCoordinates = { startPoint, endPoint };
    return shipCoordinates;
  }
  // getShipCoordinates() helper function
  function findXcoordinate(nonSeperatedId) {
  // sort through the loop, if this is 1,
    let hyphenCount = 0;
    // then add the numbers we find this string
    let stringifiedNumbers = '';
    for (let i = 0; i < nonSeperatedId.length; i += 1) {
    // example id: P1Box-10-10
    // when the - after the x is found, add 1 to hyphen count
      if (nonSeperatedId[i] === '-') {
        hyphenCount += 1;
      } else if (hyphenCount === 1) {
        stringifiedNumbers += nonSeperatedId[i];
      }
    }
    // eslint-disable-next-line radix
    const resultParsed = parseInt(stringifiedNumbers);
    return resultParsed;
  }
  //  getShipCoordinates() helper function
  function findYcoordinate(nonSeperatedId) {
  // sort through the loop, if this is 1,
    let hyphenCount = 0;
    // then add the numbers we find this string
    let stringifiedNumbers = '';
    for (let i = 0; i < nonSeperatedId.length; i += 1) {
    // example id: P1Box-10-10
    // when a hyphen is found, add one to hyphen count
      if (nonSeperatedId[i] === '-') {
        hyphenCount += 1;
      } else if (hyphenCount === 2) {
        stringifiedNumbers += nonSeperatedId[i];
      }
    }
    // eslint-disable-next-line radix
    const resultParsed = parseInt(stringifiedNumbers);
    return resultParsed;
  }
  function getShipCoordinates(allUnconfirmedShips) {
    const unconfirmedCoords = [];
    allUnconfirmedShips.forEach((ship) => {
      const xResult = findXcoordinate(ship.id);
      const yResult = findYcoordinate(ship.id);
      const ourCoordinate = {
        x: xResult,
        y: yResult,
      };
      unconfirmedCoords.push(ourCoordinate);
    });
    return unconfirmedCoords;
  }
  function findUnconfirmedShips() {
    const allUnconfirmedShips = document.querySelectorAll('.confirmShip');
    return allUnconfirmedShips;
  }
  function createPlayers(playerCount) {
    if (playerCount === 1) {
      const playerOne = playerFile('player 1', 0);
      const playerTwo = playerFile('CPU', 1);
      return { playerOne, playerTwo };
    }
    if (playerCount === 2) {
      const playerOne = playerFile('player 1', 0);
      const playerTwo = playerFile('player 2', 1);
      return { playerOne, playerTwo };
    }
    return null;
  }
  function askPlayerCount() {
    const windowResult = Number(window.prompt('How many players will be playing? For one player, please type 1, for two players, please type 2', ''));
    // eslint-disable-next-line radix
    const result = parseInt(windowResult);
    return result;
  }
  const playerCount = askPlayerCount();
  const ourPlayers = createPlayers(playerCount);

  function placeAShip(myPlayerNumber, boxID) {
    if (myPlayerNumber === 1) {
      const box = document.querySelector(`#${boxID}`);
      if (!box.classList.contains('containsShip')) {
        if (box.classList.contains('confirmShip')) {
          box.classList.remove('confirmShip');
        } else {
          box.classList.add('confirmShip');
        }
      }
    }
  }
  // addToEachBox() helper function
  // finds the player number in the id
  function findPlayerNumber(nonSeperatedId) {
    const numberAsAString = nonSeperatedId[1];
    if (numberAsAString === '1') {
      return 1;
    } if (numberAsAString === '2') {
      return 2;
    }
    return false;
  }
  function revealBoard(currentPlayer, otherPlayer) {
    const allBoxes = document.querySelectorAll('.confirmShip');
    //  The ship has been confirmed, remove the confirmShip class
    allBoxes.forEach((box) => {
      box.classList.remove('confirmShip');
    });
    const domBoardManager = domBoardFile(currentPlayer, 'P1Box', otherPlayer, false);
    domBoardManager.sendNextCollumn();
    clearBoards(true);
  }
  function confirmPlacedShips() {
    const allUnconfirmedShips = findUnconfirmedShips();
    const unconfirmedCoordinates = getShipCoordinates(allUnconfirmedShips);
    const shipObject = createShipObject(unconfirmedCoordinates);
    if (playerCount === 1) {
      ourPlayers.playerOne.ourBoard.placeShip(shipObject.startPoint, shipObject.endPoint);
      revealBoard(ourPlayers.playerOne, ourPlayers.playerTwo);
    }
  }
  // adds an event listener to each box
  function addToEachBox() {
    const allBoxes = document.querySelectorAll('.box');
    const gameStatus = document.querySelector('.gameStatus');
    gameStatus.textContent = 'Click a vertical or horizontal line for where you want your ship to be, you can click a square again to remove it. When you like that ship, click "Confirm Ship PlaceMent" to confirm that ship.';
    allBoxes.forEach((box) => {
      const result = findPlayerNumber(box.id);
      box.addEventListener('click', () => {
        placeAShip(result, box.id);
      });
    });
  }
  // clears the board of all event listeners
  function clearBoards(callNextFunction) {
    if (playerCount === 1) {
      const allBoxes = document.querySelectorAll('.box');
      allBoxes.forEach((box) => {
        //  This will clone the box with itself, thus removing every event listener
        box.replaceWith(box.cloneNode(true));
      });
    }
    // this is so we can use the clear boards function multiple times
    // without rewriting it.
    if (callNextFunction === true) {
      addToEachBox(playerCount);
    }
  }
  clearBoards(true);
  return { askPlayerCount, confirmPlacedShips };
}
module.exports = dropShip;
