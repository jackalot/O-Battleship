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
  function hit(guessCoord) {
    //  test x axis on our ship
    let matchesX = false;
    for (let i = coord1.x; i < coord2.x; i++) {
      if (guessCoord.x === i) {
        matchesX = true;
      }
    }
    // test y axis on our ship
    let matchesY = false;
    for (let i = coord1.y; i < coord2.x; i += 1) {
      if (guessCoord.y === i) {
        matchesY = true;
      }
    }
    if (matchesX === true && matchesY === true) {
      return true;
    }
    return false;
  }
  return {
    coord1, coord2, lengthMeasurer, hit,
  };
};
module.exports = shipFactory;
