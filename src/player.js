const boardFile = require('./board');

const playerFactory = (playerName, playerTurn) => {
  const ourBoard = boardFile({ x: 1, y: 1 }, { x: 10, y: 10 });
  function sendAttack(playerAttacking, coordinates) {
    const result = playerAttacking.ourBoard.recieveAttack(coordinates);
    return result;
  }
  // calls the players board to place a ship at the desired coordinates
  function placeShip(coordinates) {
    const result = ourBoard.placeShip(coordinates);
    return result;
  }
  function sayHi() {
    console.log('hi');
  }
  sayHi();
  return {
    playerName, playerTurn, ourBoard, sendAttack, placeShip,
  };
};
module.exports = playerFactory;
