function updateDOMBoard(myPlayer, searchQuery, callItAgain, otherPlayer) {
  function recieveDomAttack(coordinate, defendingPlayer) {
    otherPlayer.ourBoard.recieveAttack(coordinate);
    // callItAgain(otherPlayer);
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
    return result;
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
  function checkBox(coordinate, temporaryBox) {
    //  After this function, Other player becomes undefined
    const hitResult = searchHit(coordinate);
    const missResult = searchMiss(coordinate);
    const shipResult = searchShip(coordinate);
    if (hitResult === true) {
      temporaryBox.classList.add('hit');
      // remove the click event
      temporaryBox.removeEventListener('click', recieveDomAttack(coordinate, otherPlayer));
    } else if (missResult === true) {
      temporaryBox.classList.add('miss');
      //  remove the click event
      temporaryBox.removeEventListener('click', recieveDomAttack(coordinate, otherPlayer));
    } else if (shipResult === true) {
      temporaryBox.classList.add('containsShip');
      //  Add recieveDomAttack
      temporaryBox.addEventListener('click', recieveDomAttack(coordinate, otherPlayer));
    } else if (hitResult === false && missResult === false && shipResult === false) {
      //  Add recieveDomAttack
      console.log('Hit result is false, miss result false, ship result false, coordinates:');
      console.log(coordinate);
      temporaryBox.addEventListener('click', recieveDomAttack(coordinate, otherPlayer));
    }
  }
  function findInRow(collumn) {
    for (let i = 1; i < 10; i += 1) {
      const currentBox = document.querySelector(`#${searchQuery}-${collumn}-${i}`);
      checkBox({ x: collumn, y: i }, currentBox);
    }
  }
  function sendNextCollumn() {
    //  this funcions main purpose is to send a collumn to findInRow();
    for (let i = 1; i < 10; i += 1) {
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
