const shipFactory = (coord1, coord2) => {
  this.lengthMeasurer = (newCoord1, newCoord2) => {
    const yAxis = newCoord2.x - newCoord1.x;
    const xAxis = newCoord2.y - newCoord1.y;
    if (xAxis === 0) {
      return yAxis;
    }
    if (yAxis === 0) {
      return xAxis;
    }
    return console.error('error');
  };
  return { coord1, coord2 };
};
module.exports = shipFactory;
