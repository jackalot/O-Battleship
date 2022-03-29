const boardFile = require('./board');

const playerFactory = (playerName, playerTurn) => {
  const ourBoard = boardFile({ x: 1, y: 1 }, { x: 10, y: 10 });
  function callBoardRecieveAttack(coordinates) {
    const result = ourBoard.recieveAttack(coordinates);
    return result;
  }
  // sendRandomAttack() helper function
  // CPU function, finds a hit in the player we are attacking so we can later find a nearby target
  function findHits(playerAttacking) {
    const hitsFound = [];
    if (playerAttacking.ourBoard.hitOrMissedCoords.length !== 0) {
      for (let i = 0; i < playerAttacking.ourBoard.hitOrMissedCoords.length; i += 1) {
        if (playerAttacking.ourBoard.hitOrMissedCoords[i].coordType === 'Hit') {
          hitsFound.push(playerAttacking.ourBoard.hitOrMissedCoords[i]);
        }
      }
      return hitsFound;
    }
    return hitsFound;
  }
  function createRandomCoordinate(playerAttacking) {
    let x = Math.floor(Math.random() * 10);
    x += 1;
    let y = Math.floor(Math.random() * 10);
    y += 1;
    const coordinate = {
      x, y,
    };
    if (playerAttacking.ourBoard.checkMissesAndHits(coordinate) === 'Miss') {
      const recall = createRandomCoordinate(playerAttacking);
      return recall;
    }
    return coordinate;
  }
  //  validateSlot() helper function()
  function validateSlot(playerAttacking, coordinate) {
    const validCoord = playerAttacking.ourBoard.checkValidCoord(coordinate);
    const avaliableCoord = playerAttacking.ourBoard.checkAvailableCoord(coordinate);
    if (validCoord === true && avaliableCoord === true) {
      return true;
    }
    return false;
  }
  //  sendRandomAttack() helper function()
  function findAdjacentSlot(coordinate, moveByHowMuch, playerAttacking) {
    // moveByHowMuch will use this kind of coordinate system: x: 0 y: +2;
    // 0 means don't move, 1 or anything above 0 means move
    if (moveByHowMuch.x > 0) {
      let copyCoordinate = { ...coordinate };
      copyCoordinate += moveByHowMuch.x;
      const validSlot = validateSlot(playerAttacking, copyCoordinate);
      if (validSlot === true) {
        return copyCoordinate;
      }
    }
    if (moveByHowMuch.y > 0) {
      let copyCoordinate = { ...coordinate };
      copyCoordinate += moveByHowMuch.y;
      const validSlot = validateSlot(playerAttacking, copyCoordinate);
      if (validSlot === true) {
        return copyCoordinate;
      }
    }
    return coordinate;
  }
  //  this is for the AI to attack randomly, also helps check we didnt hit
  //   an already missed/hit coordinate
  function sendRandomAttack(playerAttacking) {
    const hitsFound = findHits(playerAttacking);
    // if ships were hit, then try to find adjoining coordinates to that coordinates
    // in case it's a ship
    if (hitsFound.length > 0) {
      const newSlot = findAdjacentSlot(
        hitsFound[0].ourCoordinates,
        { x: 1, y: 0 },
        playerAttacking,
      );
      console.log(newSlot);
    }
    // if no ships were harmed, fire a random attack at any coordinate
    if (hitsFound.length === 0) {
      const coordinate = createRandomCoordinate(playerAttacking);
      sendAttack(playerAttacking, coordinate);
      return true;
    }
    return false;
  }
  function swapTurn() {
    // eslint doesnt like this function but its the easiest
    //  solution other than true or false
    if (playerTurn === 0) {
      playerTurn++;
      return playerTurn;
    }
    if (playerTurn === 1) {
      playerTurn--;
      return playerTurn;
    }
    return null;
  }
  function sendAttack(playerAttacking, coordinates) {
    const result = playerAttacking.callBoardRecieveAttack(coordinates);

    if (playerTurn === 0) { playerTurn = 1; }
    if (playerAttacking.playerTurn === 1) { playerAttacking.playerTurn = 0; }
    return result;
  }
  // calls the players board to place a ship at the desired coordinates
  function placeShip(coord1, coord2) {
    const result = ourBoard.placeShip(coord1, coord2);
    return result;
  }
  return {
    playerName,
    playerTurn,
    ourBoard,
    sendAttack,
    placeShip,
    swapTurn,
    sendRandomAttack,
    callBoardRecieveAttack,
  };
};
module.exports = playerFactory;
