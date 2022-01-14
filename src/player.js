const boardFile = require('./board');

const playerFactory = (playerName, playerTurn) => {
  const ourBoard = boardFile({ x: 1, y: 1 }, { x: 10, y: 10 });
  function sayHi() {
    console.log('hi');
  }
  sayHi();
  return {
    playerName, playerTurn, ourBoard,
  };
};
module.exports = playerFactory;
