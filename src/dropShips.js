function dropShip() {
  function clearBoards(playerCount) {
    if (playerCount === 1) {
      const playerOneBoard = document.querySelector('#playerOneBoard');
      const allBoxes = playerOneBoard.getElementsByClassName('box');
      console.log(allBoxes);
      allBoxes.forEach((box) => {
        box.replaceWith(box.cloneNode(true));
      });
    }
  }
  function askPlayerCount() {
    const windowResult = Number(window.prompt('How many players will be playing? For one player, please type 1, for two players, please type 2', ''));
    // eslint-disable-next-line radix
    const result = parseInt(windowResult);
    if (result === 1) {
      clearBoards(1);
    }
  }
  return { askPlayerCount };
}
module.exports = dropShip;
