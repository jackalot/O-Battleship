const shipFile = require('./ship');
const { TestWatcher } = require("jest");
const mockShip = shipFile(coord1 = [1, 1], coord2 = [1, 7]);
console.log(mockShip);
test("mockShip returns an object", () => {
    expect(mockShip).toBe({ coord1: [1, 1], coord2: [1, 7]});
})
test("mockShip returns a length of 6", () => {
    expect(mockShip.lengthMeasurer(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7})).toBe(6);
})
test.only("mockShip will get hit at [1, 1], [1, 1]", () => {
    expect(mockShip.hit({x: 1, y: 1})).toBe(true);
})
test("mockShip will not sink", () => {
    expect(shipFile.shipFactory.sink().toBe(false));
})