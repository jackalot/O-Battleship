//    Manages all the attacks sent via clicking on the boards, whether that be player1
//    or player2
function attackDomManager(player1, player2) {
  function recieveDomAttack(coordinate, attackingPlayer) {
    if (attackingPlayer === player1) {
      player2.ourboard.recieveAttack(coordinate);
      p2DomBoardManager.sendNextCollumn();
    } else if (attackingPlayer === player2) {
      player1.ourboard.recieveAttack(coordinate);
      p1DomBoardManager.sendNextCollumn();
    }
  }
  return {
    recieveDomAttack, p1DomBoardManager, p2DomBoardManager,
  };
}
module.exports = attackDomManager;
