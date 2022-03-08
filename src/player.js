const boardFile = require('./board');

const playerFactory = (playerName, playerTurn) => {
  const ourBoard = boardFile({ x: 1, y: 1 }, { x: 10, y: 10 });
  function callBoardRecieveAttack(coordinates) {
    const result = ourBoard.recieveAttack(coordinates);
    swapTurn();
    return result;
  }
  //  this is for the AI to attack randomly, also helps check we didnt hit
  //   an already missed/hit coordinate
  function sendRandomAttack(playerAttacking) {
    const x = Math.floor(Math.random() * playerAttacking.ourBoard.topRightCorner.x);
    const y = Math.floor(Math.random() * playerAttacking.ourBoard.topRightCorner.y);
    const coordinates = { x, y };
    const fitsBoard = playerAttacking.ourBoard.checkValidCoord(coordinates);
    if (fitsBoard === true) {
      // check if these coordinates on the boord have a miss or hit checked already.
      const openCoordinate = playerAttacking.ourBoard.checkAvailableCoord(coordinates);
      if (openCoordinate === true) {
        sendAttack(playerAttacking, coordinates);
      }
      return openCoordinate;
    }
    return false;
  }
  function swapTurn() {
    // eslint doesnt like this function but its the easiest
    //  solution other than true or false
    if (playerTurn === 0) {
      playerTurn++;
      return playerTurn;
    }
    if (playerTurn === 1) {
      playerTurn--;
      return playerTurn;
    }
    return null;
  }
  function sendAttack(playerAttacking, coordinates) {
    const result = playerAttacking.callBoardRecieveAttack(coordinates);
    swapTurn();
    return result;
  }
  // calls the players board to place a ship at the desired coordinates
  function placeShip(coord1, coord2) {
    const result = ourBoard.placeShip(coord1, coord2);
    return result;
  }
  return {
    playerName,
    playerTurn,
    ourBoard,
    sendAttack,
    placeShip,
    swapTurn,
    sendRandomAttack,
    callBoardRecieveAttack,
  };
};
module.exports = playerFactory;
