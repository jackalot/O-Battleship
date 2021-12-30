function shipFactory(coord1, coord2) {
  const lengthMeasurer = (newCoord1, newCoord2) => {
    const yAxis = newCoord2.x - newCoord1.x;
    const xAxis = newCoord2.y - newCoord1.y;
    if (xAxis === 0) {
      return yAxis;
    }
    if (yAxis === 0) {
      return xAxis;
    }
    return undefined;
  };
  return { coord1, coord2, lengthMeasurer };
}
module.exports = shipFactory;
