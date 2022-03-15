const playerFile = require('./player');

function dropShip() {
  function createPlayers(playerCount) {
    if (playerCount === 1) {
      const playerOne = playerFile('player 1', 0);
      const playerTwo = playerFile('CPU', 1);
      return { playerOne, playerTwo };
    }
    if (playerCount === 2) {
      const playerOne = playerFile('player 1', 0);
      const playerTwo = playerFile('player 2', 1);
      return { playerOne, playerTwo };
    }
    return null;
  }
  const playerCount = askPlayerCount();
  const ourPlayers = createPlayers(playerCount);
  function placeAShip(myPlayerNumber) {
    console.log(ourPlayers);
    console.log(myPlayerNumber);
  }
  // addToEachBox() helper function
  // finds the player number in the id
  function findPlayerNumber(nonSeperatedId) {
    const numberAsAString = nonSeperatedId[1];
    if (numberAsAString === '1') {
      return 1;
    } if (numberAsAString === '2') {
      return 2;
    }
    return false;
  }
  function addToEachBox() {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach((box) => {
      const result = findPlayerNumber(box.id);
      box.addEventListener('click', () => {
        placeAShip(result);
      });
    });
  }
  function clearBoards() {
    if (playerCount === 1) {
      const allBoxes = document.querySelectorAll('.box');
      allBoxes.forEach((box) => {
        //  This will clone the box with itself, thus removing every event listener
        box.replaceWith(box.cloneNode(true));
      });
    }
    addToEachBox(playerCount);
  }
  clearBoards(playerCount);
  function askPlayerCount() {
    const windowResult = Number(window.prompt('How many players will be playing? For one player, please type 1, for two players, please type 2', ''));
    // eslint-disable-next-line radix
    const result = parseInt(windowResult);
    return result;
  }
  return { askPlayerCount };
}
module.exports = dropShip;
