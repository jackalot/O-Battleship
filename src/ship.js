const shipFactory = (coord1, coord2) => {
  function lengthMeasurer(newCoord1, newCoord2) {
    const yAxis = newCoord2.x - newCoord1.x;
    const xAxis = newCoord2.y - newCoord1.y;
    if (xAxis === 0) {
      return yAxis;
    }
    if (yAxis === 0) {
      return xAxis;
    }
    return null;
  }
  //  Returns the orientation of the ship as a string
  function shipOrientation() {
    const yAxis = coord2.x - coord1.x;
    const xAxis = coord2.y - coord1.y;
    if (xAxis === 0) {
      return 'horizontal';
    }
    if (yAxis === 0) {
      return 'vertical';
    }
    return null;
  }
  this.coord1 = coord1;
  this.coord2 = coord2;
  // This is an object constructor for ship parts that makes each part for the ship
  function Part(partCoordinates) {
    this.partCoordinates = partCoordinates;
    this.hasSunk = false;
  }
  // shipParts() helper function
  // returns all the parts that are horizontal on this ship if its orientation is horizontal.
  function getHorizontalParts() {
    const toReturn = [];
    // add 1 to coord2.x
    const limit = coord2.x + 1;
    for (let i = coord1.x; i < limit; i += 1) {
      const newPart = new Part({ x: i, y: coord1.y });
      toReturn.push(newPart);
    }
    return toReturn;
  }
  // shipParts() helper function
  // returns all the parts that are Vertical on this ship if its orientation is Vertical.
  function getVerticalParts() {
    const toReturn = [];
    // add 1 to coord2.y
    const limit = coord2.y + 1;
    /*
    Reasoning:
    the for loop would go up create the following array elements if we didn't (say coord1.y is 3
      and coord2.y is 9):
    { x: 9, y: 3}, { x: 9, y: 4}, { x: 9, y: 5}, { x: 9, y: 6}, { x: 9, y: 7},{ x: 9, y: 8}
    */
    for (let i = coord1.y; i < limit; i += 1) {
      const newPart = new Part({ x: coord1.x, y: i });
      toReturn.push(newPart);
    }
    return toReturn;
  }
  // This gets the length, orientation, and then makes each part have its corresponding coordinate,
  //  then returns all of them in an array
  function shipParts() {
    const length = lengthMeasurer(coord1, coord2);
    const orientation = shipOrientation();
    if (orientation === 'horizontal') {
      const result = getHorizontalParts(length);
      return result;
    }
    if (orientation === 'vertical') {
      const result = getVerticalParts(length);
      return result;
    }
    return null;
  }
  const myParts = shipParts();
  // Helper function for anything that requires coordinates
  function getAllCoordinates() {
    const coordinateArray = [];
    for (let i = 0; i < myParts.length; i += 1) {
      coordinateArray.push(myParts[i].partCoordinates);
    }
    return coordinateArray;
  }
  // hit() helper function
  // finds a given coordinate and see's if its in the coordinate Array from
  // getAllCoordinates
  function findCoordinate(guessCoord) {
    const coordinateArray = getAllCoordinates();
    const failCase = -1;
    for (let i = 0; i < coordinateArray.length; i += i) {
      if (coordinateArray[i].x === guessCoord.x) {
        if (coordinateArray[i].y === guessCoord.y) {
          return i;
        }
      }
    }
    return failCase;
  }
  function hit(guessCoord) {
    const result = findCoordinate(guessCoord);
  }
  function sink() {
    const length = lengthMeasurer(coord1, coord2);
    const orientation = shipOrientation();
    if (orientation === 'horizontal') {
      let sunkParts = 0;
      for (let i = coord1.x; i < length - 1; i += 1) {
        if (myParts[i].hasSunk === true) {
          sunkParts += 1;
        }
      }
      if (sunkParts === length) {
        return 'you sunk my battle ship!';
      }
      return 'I still have parts left';
    }
    if (orientation === 'vertical') {
      let sunkParts = 0;
      for (let i = coord1.y; i < length - 1; i += 1) {
        if (myParts[i].hasSunk === true) {
          sunkParts += 1;
        }
      }
      if (sunkParts === length) {
        return 'you sunk my battle ship!';
      }
      return 'I still have parts left';
    }
    return 'error';
  }
  return {
    coord1, coord2, lengthMeasurer, hit, sink, getAllCoordinates, shipParts,
  };
};
module.exports = shipFactory;
