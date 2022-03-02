//    Manages all the attacks sent via clicking on the boards, whether that be player1
//    or player2
function attackDomManager(player1, player2, callItAgain) {
  //  console.log(player1.ourboard);
  function recieveDomAttack(coordinate, defendingPlayer, domBox) {
    const result = defendingPlayer.ourBoard.recieveAttack(coordinate);
    console.log(result);
    if (result === true) {
      domBox.classList.remove('unconfirmedAttack');
      domBox.classList.add('hit');
    } else if (result === false) {
      domBox.classList.remove('unconfirmedAttack');
      domBox.classList.add('miss');
    }
  }
  function findUnconfirmedAttacks() {
    const attackBox = document.querySelector('.unconfirmedAttack');
    const playerString = attackBox.id[1];
    const xString = attackBox.id[6];
    const yString = attackBox.id[8];
    const playerInt = parseInt(playerString);
    const xInt = parseInt(xString);
    const yInt = parseInt(yString);
    const coordinate = { x: xInt, y: yInt };
    if (playerInt === 1) {
      recieveDomAttack(coordinate, player1, attackBox);
    } else if (playerInt === 2) {
      recieveDomAttack(coordinate, player2, attackBox);
    }
  }
  return {
    findUnconfirmedAttacks,
  };
}
module.exports = attackDomManager;
