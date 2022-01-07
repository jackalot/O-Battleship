const shipFactory = require('./ship');

const gameBoardFactory = (bottomLeftCorner, topRightCorner) => {
  //  checkValidCorner() helper function
  // checks if the coord is out of bounds of the bottomLeftCorner
  function checkBottomLeftCorner(coord) {
    if (coord.x > bottomLeftCorner.x) {
      if (coord.y > bottomLeftCorner.y) {
        return true;
      }
      return false;
    }
    if (coord.x === bottomLeftCorner.x) {
      if (coord.y === bottomLeftCorner.y) {
        return true;
      }
      return false;
    }
    return false;
  }
  //  checkValidCorner() helper function
  // checks if the coord is out of bounds of the topRightCorner
  function checkTopRightCorner(coord) {
    if (coord.x <= topRightCorner.x) {
      if (coord.y <= topRightCorner.y) {
        return true;
      }
      return false;
    }
    return false;
  }
  //  placeShip() helper function
  // This checks if its not out of bounds
  function checkValidCoord(coord) {
    console.log(bottomLeftCorner, topRightCorner);
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
    bottomLeftCorner, topRightCorner, placeShip, checkValidCoord, checkBottomLeftCorner,
  };
};
module.exports = gameBoardFactory;
