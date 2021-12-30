function shipFactory(coord1, coord2) {
  function lengthMeasurer() {
    const yAxis = coord2.x - coord1.x;
    const xAxis = coord2.y - coord1.y;
    if (xAxis === 0) {
      return yAxis;
    }
    if (yAxis === 0) {
      return xAxis;
    }
  }
  const length = lengthMeasurer();
  return { coord1, coord2, length };
}
module.exports = shipFactory;
