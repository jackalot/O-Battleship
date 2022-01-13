const playerFactory = (playerName, playerTurn) => {
  function sayHi() {
    console.log('hi');
  }
  sayHi();
  return {
    playerName, playerTurn,
  };
};
module.exports = playerFactory;
