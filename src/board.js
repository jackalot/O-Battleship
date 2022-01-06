import shipFactory from './ship';

const gameBoardFactory = (bottomLeftCorner, topRightCorner) => {
  //  placeShip() helper function
  // This checks if its not out of bounds
  function checkValidCoord(coord) {
    if (coord.x >= bottomLeftCorner.x) {
      if (coord.y >= bottomLeftCorner.y) {
        if (coord.y <= topRightCorner.x) {
          if (coord.y <= topRightCorner) {
            return true;
          }
          return false;
        }
        return false;
      }
      return false;
    }
    return false;
  }
  function placeShip(firstCoord, secondCoord) {
    const checkFirstCoord = checkValidCoord(checkValidCoord);
  }
  return { bottomLeftCorner, topRightCorner, placeShip };
};
module.exports = gameBoardFactory;
