const shipFactory = require('./ship');

const gameBoardFactory = (bottomLeftCorner, topRightCorner) => {
  const myShips = [];
  //  stores all the coords for hits and misses
  const hitOrMissedCoords = [];
  // hit or misses will store each item like this:
  /*
  {
    ourCoordinates: { x: 1, y: 1 },
    coordType: "Miss"
  }
  Other wise, coordType will be "Hit"
  */
  function checkGreaterThanBLC(coord) {
    if (coord.x > bottomLeftCorner.x) {
      return true;
    }
    // if x isnt greater, check if y is.
    if (coord.y > bottomLeftCorner.y) {
      return true;
    }
    return false;
  }
  function checkEqualToBLC(coord) {
    if (coord.x === bottomLeftCorner.x) {
      if (coord.y === bottomLeftCorner.y) {
        return true;
      }
      return false;
    }
    return false;
  }
  //  checkValidCorner() helper function
  // checks if the coord is out of bounds of the bottomLeftCorner
  function checkBottomLeftCorner(coord) {
    const greaterThan = checkGreaterThanBLC(coord);
    const equalTo = checkEqualToBLC(coord);
    // as long as one of the two are true, then it's valid
    if (greaterThan === true || equalTo === true) {
      return true;
    }
    return false;
  }
  // checkTopRightCorner() helper function
  // checks if the coord is equal to the top right corner
  function checkEqualToTRC(coord) {
    //  if the coordinate is on the border of the board its ok
    if (coord.x === topRightCorner.x) {
      // if its greater than the y though, than its out of bounds
      if (coord.y > topRightCorner.y) {
        return false;
      }
      return true;
    }
    //  if the coordinate is on the border of the board its ok
    if (coord.y === topRightCorner.y) {
      // if its greater than the x though, than its out of bounds
      if (coord.x > topRightCorner.x) {
        return false;
      }
      return true;
    }
    return false;
  }
  // checkTopRightCorner() helper function
  // checks if the coord is less than the top right corner
  function checkLessThanTRC(coord) {
    if (coord.x < topRightCorner.x) {
      if (coord.y < topRightCorner.y) {
        return true;
      }
      return false;
    }
    return false;
  }
  //  checkValidCorner() helper function
  // checks if the coord is out of bounds of the topRightCorner
  function checkTopRightCorner(coord) {
    const checkEqual = checkEqualToTRC(coord);
    const checkLess = checkLessThanTRC(coord);
    if (checkEqual === true || checkLess === true) {
      return true;
    }
    return false;
  }
  //  placeShip() helper function
  // This checks if its not out of bounds
  function checkValidCoord(coord) {
    const CBLC = checkBottomLeftCorner(coord);
    const CTPRC = checkTopRightCorner(coord);
    if (CBLC === true && CTPRC === true) {
      return true;
    }
    return false;
  }
  function placeShip(firstCoord, secondCoord) {
    const checkFirstCoord = checkValidCoord(firstCoord);
    const checkSecondCoord = checkValidCoord(secondCoord);
    if (checkFirstCoord === true && checkSecondCoord === true) {
      const ourShip = shipFactory(firstCoord, secondCoord);
      myShips.push(ourShip);
      return ourShip;
    }
    return null;
  }
  // findFirstShip() helper function
  // indexOf() doesn't work with objects, so this is indexOf() but for our coordinates
  function coordinateIndex(shipCoordinates, inputCoordinate) {
    //  Start at -1 so if no coordinates are found, it returns -1.
    let index = -1;
    for (let i = 0; i < shipCoordinates.length; i += 1) {
      if (shipCoordinates[i].x === inputCoordinate.x) {
        if (shipCoordinates[i].y === inputCoordinate.y) {
          index = i;
        }
      }
    }
    return index;
  }
  // recieveAttack Helper function()
  //  find the first ship according to the coordinate that is sent
  function findFirstShip(coordinate) {
    for (let i = 0; i < myShips.length; i += 1) {
      // call the ship function to get every coordinate from the ship function
      const shipCoordinates = myShips[i].getAllCoordinates();
      // call coordinateIndex(its like indexOf but for our coordinate objects)
      const index = coordinateIndex(shipCoordinates, coordinate);
      if (index > -1) {
        return myShips[i];
      }
    }
    return false;
  }
  function checkAvailableCoord(coordinate) {
    let matches = 0;
    for (let i = 0; i < hitOrMissedCoords.length; i += 1) {
      if (coordinate.x === hitOrMissedCoords[i].ourCoordinates.x) {
        if (coordinate.y === hitOrMissedCoords[i].ourCoordinates.y) {
          matches += 1;
        }
      }
    }
    if (matches > 0) {
      return false;
    }
    if (matches < 0) {
      return false;
    }
    return true;
  }
  // recieveAttack() helper function
  // finds the matching coordinate sent to it
  function findMatchingCoordinate(coord1, coord2) {
    for (let i = 0; i < myShips.length; i += 1) {
      if (myShips.coord1 === coord1) {
        if (myShips.coord2 === coord2) {

        }
      }
    }
  }
  function recieveAttack(coordinate) {
    const checkCoord = checkValidCoord(coordinate);
    if (checkCoord === true) {
      // returns the coordinates but the functions returns as
      //  hit [ Function: hit ]
      // and can't be called
      const returned = findFirstShip(coordinate);
      const index = findMatchingCoordinate(returned.coord1, returned.coord2);
    }
    return false;
  }
  function allShipsSunk() {
    let sunkShipsSum = 0;
    for (let i = 0; i < myShips.length; i += 1) {
      const result = myShips[i].sink();
      if (result === 'you sunk my battle ship!') {
        sunkShipsSum += 1;
      }
    }
    //  If the corresponding functions test uses an only method
    //  then myships would === 0 which means it would always return true
    if (myShips.length > 0) {
      if (sunkShipsSum === myShips.length) {
        return true;
      }
    }
    return false;
  }
  // Checks if theres a miss or hit on this coordinate
  function checkMissesAndHits(coordinate) {
    // loop through misses and hits and sort through each
    // to see if this coordinate has a miss or a hit
    for (let i = 0; i < hitOrMissedCoords.length; i += 1) {
      if (coordinate.x === hitOrMissedCoords[i].ourCoordinates.x) {
        if (coordinate.y === hitOrMissedCoords[i].ourCoordinates.y) {
          if (hitOrMissedCoords[i].coordType === 'Hit') {
            return 'Hit';
          }
          return 'Miss';
        }
      }
    }
    return 'none';
  }
  return {
    bottomLeftCorner,
    topRightCorner,
    placeShip,
    recieveAttack,
    checkValidCoord,
    checkBottomLeftCorner,
    checkEqualToBLC,
    checkGreaterThanBLC,
    checkTopRightCorner,
    checkEqualToTRC,
    checkLessThanTRC,
    allShipsSunk,
    checkAvailableCoord,
    findFirstShip,
    checkMissesAndHits,
    myShips,
  };
};
module.exports = gameBoardFactory;
