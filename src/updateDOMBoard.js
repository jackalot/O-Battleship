function updateDOMBoard(myPlayer, searchQuery) {
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
    const hitResult = searchHit(coordinate);
    const missResult = searchMiss(coordinate);
    const shipResult = searchShip(coordinate);
    if (hitResult === true) {
      temporaryBox.classList.add('.hit');
      //  The below function requires another function that may not be done yet
      // removeClickEvent();
    } else if (missResult === true) {
      temporaryBox.classList.add('.miss');
      //  The below function requires another function that may not be done yet
      //  removeClickEvent();
    } else if (shipResult === true) {
      temporaryBox.classList.add('.containsShip');
      //  The below function requires another function that may not be done yet
      // applyClickEvent();
    } else if (hitResult === false && missResult === false && shipResult === false) {
      // applyClickEvent();
      console.log('this would be a empty effect but there is nothing for it yet, coordinate:');
      console.log(coordinate);
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
    for (let i = 0; i < 10; i += 1) {
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
