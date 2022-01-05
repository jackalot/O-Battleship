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
    return console.error('error');
  }
  //  Returns the orientation of the ship as a string
  function shipOrientation() {
    const yAxis = coord2.x - coord1.x;
    const xAxis = coord2.y - coord1.y;
    if (xAxis === 0) {
      return 'vertical';
    }
    if (yAxis === 0) {
      return 'horizontal';
    }
    return console.error('error');
  }
  this.coord1 = coord1;
  this.coord2 = coord2;
  // This is an object constructor for ship parts that makes each part for the ship
  function Part(partName, partCoordinates) {
    this.partName = partName;
    this.partCoordinates = partCoordinates;
    this.hasSunk = false;
  }
  // This gets the length, orientation, and then makes each part have its corresponding coordinate,
  //  then returns all of them in an array
  function shipParts() {
    const length = lengthMeasurer(coord1, coord2);
    const orientation = shipOrientation();
    const allParts = [];
    if (orientation === 'horizontal') {
      for (let i = coord1.x; i < length; i += 1) {
        const newPart = new Part(`part${i}`, { x: i, y: coord1.y });
        allParts.push(newPart);
      }
      return allParts;
    }
    if (orientation === 'vertical') {
      for (let i = coord1.y; i < length; i += 1) {
        const newPart = new Part(`part${i}`, { x: coord1.y, y: i });
        allParts.push(newPart);
      }
      return allParts;
    } return null;
  }
  const myParts = shipParts();
  // hit() Helper function
  //  we know its the same x, but now check if the same Y
  function guessXMinusCoordXIsZero(guessCoord) {
    if (guessCoord.y >= coord1.y || guessCoord.y <= coord2.y) {
      return true;
    }
    return false;
  }
  // hit() Helper function
  //  we know its the same y, but now check if the same X
  function guessYMinusCoordYIsZero(guessCoord) {
    if (guessCoord.x >= coord1.x || guessCoord.x <= coord2.x) {
      return true;
    }
    return false;
  }
  function hit(guessCoord) {
    if (guessCoord.x - coord1.x === 0) {
      const resultY = guessXMinusCoordXIsZero(guessCoord);
      return resultY;
    }
    if (guessCoord.y - coord1.y === 0) {
      const resultX = guessYMinusCoordYIsZero(guessCoord);
      return resultX;
    }
    return false;
  }
  function sink() {
    const length = lengthMeasurer(coord1, coord2);
    const orientation = shipOrientation();
    if (orientation === 'horizontal') {
      let sunkParts = 0;
      for (let i = coord1.x; i < length; i += 1) {
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
      for (let i = coord1.y; i < length; i += 1) {
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
    coord1, coord2, lengthMeasurer, hit, sink, shipParts,
  };
};
module.exports = shipFactory;
