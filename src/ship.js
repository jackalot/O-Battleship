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
  this.coord1 = coord1;
  this.coord2 = coord2;
  //  we know its the same x, but now check if the same Y
  function guessXMinusCoordXIsZero(guessCoord) {
    if (guessCoord.y > coord1.y || guessCoord.y < coord2.y) {
      return true;
    }
    console.log(`guessCoord.y is ${guessCoord.y}and coord1 is ${coord1.y}`);
    if (guessCoord.y === coord1.y || guessCoord.y === coord2.y) {
      return true;
    }
    return false;
  }
  function hit(guessCoord) {
    if (guessCoord.x - coord1.x === 0) {
      console.log('this is a test');
      const result = guessXMinusCoordXIsZero(guessCoord);
      return result;
    }
    return false;
  }
  return {
    coord1, coord2, lengthMeasurer, hit,
  };
};
module.exports = shipFactory;
