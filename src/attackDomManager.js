//    Manages all the attacks sent via clicking on the boards, whether that be player1
//    or player2
function attackDomManager(player1, player2, p1DomBoardManager, p2DomBoardManager) {
  // recieveDomAttack() helperFunction
// calls p1DomBoardManager and p2DomBoardManager functions
  function swapVisibility(defendingPlayer) {
    if (defendingPlayer === player1) {
      p1DomBoardManager.swapHideShips();
      p2DomBoardManager.swapHideShips();
      p1DomBoardManager.sendNextCollumn();
      p2DomBoardManager.sendNextCollumn();
    } else if (defendingPlayer === player2) {
      p2DomBoardManager.swapHideShips();
      p1DomBoardManager.swapHideShips();
      p2DomBoardManager.sendNextCollumn();
      p1DomBoardManager.sendNextCollumn();
    }
  }
  function endGame(defendingPlayer) {
    const gameStatus = document.querySelector('.gameStatus');
    gameStatus.textContent = `${defendingPlayer.playerName}, you lose! 
  All your battleships have been sunk! Play Again? Click the Play Again Button!`;

    if (p1DomBoardManager.hideShips === true) {
      p1DomBoardManager.swapHideShips();
      p1DomBoardManager.sendNextCollumn();
    }
    if (p2DomBoardManager.hideShips === true) {
      p2DomBoardManager.swapHideShips();
      p2DomBoardManager.sendNextCollumn();
    }
  }
  function recieveDomAttack(coordinate, defendingPlayer) {
    if (defendingPlayer === player1) {
      player2.sendAttack(player1, coordinate);
    }
    if (defendingPlayer === player2) {
      player1.sendAttack(player2, coordinate);
    }
    const sunkenResult = defendingPlayer.ourBoard.allShipsSunk();
    if (sunkenResult === false) {
      const gameStatus = document.querySelector('.gameStatus');
      gameStatus.textContent = "Click on a square to attack that board, then click below to confirm you're attack! ";
      swapVisibility(defendingPlayer);
    } else {
      endGame(defendingPlayer);
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
  // seperateIds() helper function
  // finds the y coordinate in the id
  function findYcoordinate(nonSeperatedId) {
    // sort through the loop, if this is 1,
    let hyphenCount = 0;
    // then add the numbers we find this string
    let stringifiedNumbers = '';
    for (let i = 0; i < nonSeperatedId.length; i += 1) {
      // example id: P1Box-10-10
      // when a hyphen is found, add one to hyphen count
      if (nonSeperatedId[i] === '-') {
        hyphenCount += 1;
      } else if (hyphenCount === 2) {
        stringifiedNumbers += nonSeperatedId[i];
      }
    }
    // eslint-disable-next-line radix
    const resultParsed = parseInt(stringifiedNumbers);
    return resultParsed;
  }
  // seperateIds() helper function
  // finds the x coordinate in the id
  function findXcoordinate(nonSeperatedId) {
    // sort through the loop, if this is 1,
    let hyphenCount = 0;
    // then add the numbers we find this string
    let stringifiedNumbers = '';
    for (let i = 0; i < nonSeperatedId.length; i += 1) {
      // example id: P1Box-10-10
      // when the - after the x is found, add 1 to hyphen count
      if (nonSeperatedId[i] === '-') {
        hyphenCount += 1;
      } else if (hyphenCount === 1) {
        stringifiedNumbers += nonSeperatedId[i];
      }
    }
    // eslint-disable-next-line radix
    const resultParsed = parseInt(stringifiedNumbers);
    return resultParsed;
  }
  // findUnconfirmedAttacks() helper function
  // will seperate the id into an object and will give each item
  function seperateIds(nonSeperatedId) {
    const playerNumber = findPlayerNumber(nonSeperatedId);
    const xCoordinate = findXcoordinate(nonSeperatedId);
    const yCoordinate = findYcoordinate(nonSeperatedId);
    return {
      playerNumber,
      coordinate: {
        x: xCoordinate,
        y: yCoordinate,
      },
    };
  }
  function findUnconfirmedAttacks() {
    const attackBox = document.querySelector('.unconfirmedAttack');
    if (attackBox) {
      const idSeperated = seperateIds(attackBox.id);
      if (idSeperated.playerNumber === 1) {
        recieveDomAttack(idSeperated.coordinate, player1);
      } else if (idSeperated.playerNumber === 2) {
        recieveDomAttack(idSeperated.coordinate, player2);
      }
    }
  }
  return {
    findUnconfirmedAttacks,
    seperateIds,
  };
}
module.exports = attackDomManager;
