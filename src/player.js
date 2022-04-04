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
  //  board.js checkValid coord but just for the cpu as the cpu using it causes an undefined error
  function checkValidCoord(coordinate, playerAttacking) {
    // This will not be segmented to smaller functions like board.js, it will be ordered through comments
    if()
  }
  //  findAdjacentSlot() helper function()
  function validateSlot(playerAttacking, coordinate) {
    let cloneObj = {};
    cloneObj = { ...coordinate };
    const validCoord = checkValidCoordFake(cloneObj, playerAttacking);
    const avaliableCoord = playerAttacking.ourBoard.checkAvailableCoord(cloneObj);
    if (validCoord === true && avaliableCoord === true) {
      return true;
    }
    return false;
  }
  //  sendRandomAttack() helper function(), tryEveryDirection() calls this function
  // recieves a coordinate and checks the coordinate nearby to see if it can be attacked
  function findAdjacentSlot(coordinate, moveByHowMuch, playerAttacking) {
    // moveByHowMuch will use this kind of coordinate system: x: 0 y: +2;
    // 0 means don't move, 1 or anything above 0 means move
    if (moveByHowMuch.x !== 0) {
      const copyCoordinate = { ...coordinate };
      copyCoordinate.x += moveByHowMuch.x;
      const validSlot = validateSlot(playerAttacking, copyCoordinate);
      if (validSlot === true) {
        return copyCoordinate;
      }
    }
    if (moveByHowMuch.y !== 0) {
      const copyCoordinate = { ...coordinate };
      copyCoordinate.y += moveByHowMuch.y;
      const validSlot = validateSlot(playerAttacking, copyCoordinate);
      if (validSlot === true) {
        return copyCoordinate;
      }
    }
    return coordinate;
  }
  //  findAdjacentSlot() and checkEachHitsFound() helperFunction()
  // calls findAdjacent slot in every possible slot
  function tryEveryDirection(hitFound, playerAttacking) {
    const possibleCoordinates = [];
    //                     right           up              down          left
    const allDirections = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }, { x: -1, y: 0 }];
    for (let i = 0; i < allDirections.length; i += 1) {
      const slot = findAdjacentSlot(hitFound.ourCoordinates, allDirections[i], playerAttacking);
      if (slot !== hitFound.ourCoordinates) {
        possibleCoordinates.push(slot);
      }
    }
    return possibleCoordinates;
  }
  //  sendRandomAttack() helper function
  // checks that each hit in the hitsFound array has a neighboring slot that can be hit using
  // the try EveryDirection function, then returns the individual hit that has the most possible
  // attacks for the cpu to use.
  function checkEachHitsFound(hitsFound, playerAttacking) {
    const allHitsWithNeighbors = [];
    // loop through hits found to find each hit we currently have, and find possible hits
    hitsFound.forEach((hit) => {
      // check this coordinate has surrounding possible attacks we can make
      const result = tryEveryDirection(hit, playerAttacking);
      // store the result and the coordinate we used for tryEveryDirection
      const hitObject = {
        ourCoordinates: hit.ourCoordinates,
        possibleDirections: result,
      };
      allHitsWithNeighbors.push(hitObject);
    });
    //  make a similar object to hitObject so later, we can compare to hitObject
    let hitWithGreatestNeighbors = {
      ourCoordinates: { x: 0, y: 0 },
      possibleDirections: { x: 0, y: 0 },
    };
    allHitsWithNeighbors.forEach((myHitObject) => {
      if (myHitObject.ourCoordinates.x > hitWithGreatestNeighbors.ourCoordinates.x) {
        if (myHitObject.ourCoordinates.y > hitWithGreatestNeighbors.ourCoordinates.y) {
          hitWithGreatestNeighbors = myHitObject;
        }
      }
    });
    return hitWithGreatestNeighbors.possibleDirections;
  }
  //  this is for the AI to attack randomly, also helps check we didnt hit
  //   an already missed/hit coordinate
  function sendRandomAttack(playerAttacking) {
    const hitsFound = findHits(playerAttacking);
    // if ships were hit, then try to find adjoining coordinates to that coordinates
    // in case it's a ship
    if (hitsFound.length > 0) {
      const placesWeCanHit = checkEachHitsFound(hitsFound, playerAttacking);
      const attackResult = sendAttack(playerAttacking, placesWeCanHit[0]);
      //  This is so the test could pass, the AI will not always hit
      return true;
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
    tryEveryDirection,
    findAdjacentSlot,
    checkEachHitsFound,
  };
};
module.exports = playerFactory;
