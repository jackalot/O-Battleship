function dropShip() {
  function askPlayerCount() {
    const windowResult = Number(window.prompt('How many players will be playing? For one player, please type 1, for two players, please type 2', ''));
    const result = parseInt(windowResult);
    if (result === 1) {
      console.log(result);
    }
  }
  return { askPlayerCount };
}
module.exports = dropShip;
