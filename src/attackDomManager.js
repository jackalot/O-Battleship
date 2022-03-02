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
  // seperateIds() helper function
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
  // findUnconfirmedAttacks() helper function
  // will seperate the id into an object and will give each item
  function seperateIds(nonSeperatedId) {
    const playerNumber = findPlayerNumber(nonSeperatedId);
    return {
      playerNumber,
    };
  }
  function findUnconfirmedAttacks() {
    const attackBox = document.querySelector('.unconfirmedAttack');
    //! Warning, this doesn't account for 10s, IE P1Box 10
    //  gets the 1 or 2 in the player id, example:
    // out of id: P1Box-6-7, it gets 1 after the P
    const playerString = attackBox.id[1];
    //  xString and y string get the coordinates from the id, example:
    // out of id: P2Box-4-3, xString gets 4, yString gets 3
    const xString = attackBox.id[6];
    const yString = attackBox.id[8];
    // parses all the strings and turns them into integers
    // as they are currently strins and not integers
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
    seperateIds,
  };
}
module.exports = attackDomManager;
