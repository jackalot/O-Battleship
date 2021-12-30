function shipFactory(coord1, coord2) {
  function lengthMeasurer() {
    let xAxis = 0;
    for (let i = coord1[0]; i < coord2[0]; i++) {
      xAxis += 1;
    }
    return xAxis;
  }
  const length = lengthMeasurer();
  return { coord1, coord2, length };
}
module.exports = shipFactory;
