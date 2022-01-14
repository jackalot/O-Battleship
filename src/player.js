const boardFile = require('./board');

const playerFactory = (playerName, playerTurn) => {
  const ourBoard = boardFile({ x: 1, y: 1 }, { x: 10, y: 10 });
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
    const result = playerAttacking.ourBoard.recieveAttack(coordinates);
    return result;
  }
  // calls the players board to place a ship at the desired coordinates
  function placeShip(coord1, coord2) {
    const result = ourBoard.placeShip(coord1, coord2);
    return result;
  }
  function sayHi() {
    console.log('hi');
  }
  sayHi();
  return {
    playerName, playerTurn, ourBoard, sendAttack, placeShip, swapTurn,
  };
};
module.exports = playerFactory;
