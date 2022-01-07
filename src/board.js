const shipFactory = require('./ship');

const gameBoardFactory = (bottomLeftCorner, topRightCorner) => {
  // checkBottomLeftCorner() helper function
  // checks if the coord is greater than the bottemLeftCorener
  function checkGreaterThanBLC(coord) {
    if (coord.x > bottomLeftCorner.x) {
      if (coord.y > bottomLeftCorner.y) {
        return true;
      }
      return false;
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
    if (coord.x === topRightCorner.x) {
      if (coord.y === topRightCorner.y) {
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
    if (checkEqual === true) {
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
      return ourShip;
    }
    return null;
  }
  return {
    bottomLeftCorner,
    topRightCorner,
    placeShip,
    checkValidCoord,
    checkBottomLeftCorner,
    checkEqualToBLC,
    checkGreaterThanBLC,
    checkTopRightCorner,
    checkEqualToTRC,
  };
};
module.exports = gameBoardFactory;
