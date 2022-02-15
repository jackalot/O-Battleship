//    Manages all the attacks sent via clicking on the boards, whether that be player1
//    or player2
function attackDomManager(player1, player2, callItAgain) {
  console.log(player1.ourboard);
  function recieveDomAttack(coordinate, attackingPlayer, defendingPlayer) {
    if (attackingPlayer === player1) {
      defendingPlayer.ourboard.recieveAttack(coordinate);
      callItAgain();
    } else if (attackingPlayer === player2) {
      defendingPlayer.ourboard.recieveAttack(coordinate);
      callItAgain();
    }
  }
  return {
    recieveDomAttack,
  };
}
module.exports = attackDomManager;
