function updateDOMBoard(myPlayer, searchQuery, callItAgain, otherPlayer) {
  function recieveDomAttack(coordinate, defendingPlayer) {
    const result = defendingPlayer.ourBoard.recieveAttack(coordinate);
    console.log(result);
    callItAgain(defendingPlayer);
  }
  //  Allows you to apply any click EventListener to any function
  function applyClickEvent(element, paramFunction) {
    element.addEventListener('click', paramFunction);
  }
  //  Allows you to remove any Click EventListener from any element
  function removeClickEvent(element, paramFunction) {
    element.removeEventListener('click', paramFunction);
  }
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
    console.log(result);
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
  function unconfirmedAttack(temporaryBox, coordinate) {
    const anyPreviousAttacks = document.querySelectorAll('.unconfirmedAttack');
    if (anyPreviousAttacks.length === 0) {
      console.log(temporaryBox);
      temporaryBox.classList.add('unconfirmedAttack');
      const gameStatus = document.querySelector('.gameStatus');
      gameStatus.textContent = `${otherPlayer.playerName}, please confirm attack`;
    } else { // remove the last unconfirmed attack, then continue out
      anyPreviousAttacks.forEach((element) => {
        element.classList.remove('unconfirmedAttack');
      });
      temporaryBox.classList.add('unconfirmedAttack');
      const gameStatus = document.querySelector('.gameStatus');
      gameStatus.textContent = `${otherPlayer.playerName}, please confirm attack`;
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
    } else if (shipResult === true) {
      temporaryBox.classList.add('containsShip');
      //  Add unconfirmedAttack
      temporaryBox.addEventListener('click', () => {
        unconfirmedAttack(temporaryBox, coordinate);
      });
    } else if (hitResult === false && missResult === false && shipResult === false) {
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
  //  These are tests
  function checkForClass(element, className) {
    if (element.classList.contains(className)) {
      return true;
    }
    return false;
  }
  return {
    sendNextCollumn, checkForClass, searchShip, searchMiss, searchHit,
  };
}
module.exports = updateDOMBoard;
