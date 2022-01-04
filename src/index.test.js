const shipFile = require('./ship');
const { TestWatcher } = require("jest");
const mockShip = shipFile(coord1 = [1, 1], coord2 = [1, 7]);
console.log(mockShip);
test.only("mockShip returns an object", () => {
    expect(mockShip).toStrictEqual({ coord1: [1, 1], coord2: [1, 7]});
})
test("ship factory return a length of 6", () => {
    expect(shipFile[0].lengthMeasurer(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7})).toBe(6);
})
test("ship factory will get hit at [1, 1]", () => {
    expect(shipFile.shipFactory.hit([1, 1], { coord1: [1, 1], coord2: [1, 7]})).toBe(true);
})
test("ship factory will not sink", () => {
    expect(shipFile.shipFactory.sink().toBe(false));
})