import shipFactory from './ship';

const gameBoardFactory = (bottomLeftCorner, topRightCorner) => {
  //  checkValidCorner() helper function
  // checks if the coord is out of bounds of the bottomLeftCorner
  function checkBottomLeftCorner(coord) {
    if (coord.x >= bottomLeftCorner.x) {
      if (coord.y >= bottomLeftCorner.y) {
        return false;
      }
      return true;
    }
    return true;
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
    const CBLC = checkBottomLeftCorner(coord);
    const CTPRC = checkTopRightCorner(coord);
    if (CBLC === true && CTPRC === true) {
      return true;
    }
  }
  function placeShip(firstCoord, secondCoord) {
    const checkFirstCoord = checkValidCoord(checkValidCoord);
  }
  return { bottomLeftCorner, topRightCorner, placeShip };
};
module.exports = gameBoardFactory;
