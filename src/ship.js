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
  // this function will get the length of the ship and make a object for each part. Then return
  function shipParts() {
    return 'success';
  }
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
  }
  return {
    coord1, coord2, lengthMeasurer, hit, sink, shipParts,
  };
};
module.exports = shipFactory;
