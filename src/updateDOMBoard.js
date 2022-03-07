/* eslint-disable no-param-reassign */
function updateDOMBoard(myPlayer, searchQuery, otherPlayer, hideShips) {
  function searchShip(coordinate) {
    const result = myPlayer.ourBoard.findFirstShip(coordinate);
    //  due to changes made to findFirstShip, now that the findFirst ship function no longer returns
    // true but returns coordinates, doing this is a simple work around.
    if (result !== false) {
      return true;
    }
    return false;
  }
  function searchMiss(coordinate) {
    const result = myPlayer.ourBoard.checkMissesAndHits(coordinate);
    if (result === 'Miss') {
      return true;
    }
    return false;
  }
  function searchHit(coordinate) {
    const result = myPlayer.ourBoard.checkMissesAndHits(coordinate);
    if (result === 'Hit') {
      return true;
    }
    return false;
  }
  function unconfirmedAttack(temporaryBox) {
    console.log(myPlayer.playerTurn);
    if (myPlayer.playerTurn === 1) {
      // in the case this function is called more than once, get all cases of the class
      const anyPreviousAttacks = document.querySelectorAll('.unconfirmedAttack');
      // if there isn't any, move on
      if (anyPreviousAttacks.length === 0) {
        console.log(temporaryBox);
        temporaryBox.classList.add('unconfirmedAttack');
        const gameStatus = document.querySelector('.gameStatus');
        gameStatus.textContent = `${otherPlayer.playerName}, please confirm attack`;
      } else { // remove the last unconfirmed attacks, then continue out
        anyPreviousAttacks.forEach((element) => {
          element.classList.remove('unconfirmedAttack');
        });
        temporaryBox.classList.add('unconfirmedAttack');
        const gameStatus = document.querySelector('.gameStatus');
        gameStatus.textContent = `${otherPlayer.playerName}, please confirm attack`;
      }
    }
  }
  function checkBox(coordinate, temporaryBox) {
    const hitResult = searchHit(coordinate);
    const missResult = searchMiss(coordinate);
    const shipResult = searchShip(coordinate);
    if (hitResult === true) {
      temporaryBox.classList.add('hit');
      // remove the click event
      temporaryBox.removeEventListener('click', () => {
        unconfirmedAttack(temporaryBox, coordinate);
      });
    } else if (missResult === true) {
      temporaryBox.classList.add('miss');
      //  remove the click event
      temporaryBox.removeEventListener('click', () => {
        unconfirmedAttack(temporaryBox, coordinate);
      });
    } else if (shipResult === true && hideShips === false) {
      //  its our turn, display the ships
      temporaryBox.classList.add('containsShip');
      //  Add unconfirmedAttack
      temporaryBox.addEventListener('click', () => {
        unconfirmedAttack(temporaryBox, coordinate);
      });
    } else if (shipResult === true && hideShips === true) {
      //  Its the other players turn, hide our ships
      temporaryBox.classList.remove('containsShip');
      // thanks to this event listener, unconfirmed attacks should still work
      temporaryBox.addEventListener('click', () => {
        unconfirmedAttack(temporaryBox, coordinate);
      });
    } else if (hitResult === false && missResult === false && shipResult === false) {
      //  This is an empty spot, the other player wouldn't know that
      //  Add unconfirmedAttack
      temporaryBox.addEventListener('click', () => {
        unconfirmedAttack(temporaryBox, coordinate);
      });
    }
  }
  function findInRow(collumn) {
    for (let i = 1; i < 11; i += 1) {
      const currentBox = document.querySelector(`#${searchQuery}-${collumn}-${i}`);
      checkBox({ x: collumn, y: i }, currentBox);
    }
  }
  function sendNextCollumn() {
    //  this funcions main purpose is to send a collumn to findInRow();
    for (let i = 1; i < 11; i += 1) {
      findInRow(i);
    }
  }
  //  attackDomManager.swapVisibility() helperFunction()
  //  changes the hideShips variable
  function swapHideShips() {
    if (hideShips === true) {
      hideShips = false;
    } else if (hideShips === false) {
      hideShips = true;
    }
  }
  //  These are tests
  function checkForClass(element, className) {
    if (element.classList.contains(className)) {
      return true;
    }
    return false;
  }
  return {
    sendNextCollumn, checkForClass, searchShip, searchMiss, searchHit, swapHideShips,
  };
}
module.exports = updateDOMBoard;
