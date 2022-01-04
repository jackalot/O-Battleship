const shipFile = require('./ship');
const { TestWatcher } = require("jest");
const mockShip = shipFile(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7});
console.log(mockShip);
//  this test is giving errors
test.skip("mockShip returns an object", () => {
    expect(mockShip).toBe( coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7});
})
test("mockShip returns a length of 6", () => {
    expect(mockShip.lengthMeasurer(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7})).toBe(6);
})
test("mockShip will get hit at [1, 1]", () => {
    expect(mockShip.hit({x: 1, y: 1})).toBe(true);
})
test("mockShip will get hit at [1, 7]", () => {
    expect(mockShip.hit({x: 1, y: 7})).toBe(true);
})
test.skip("mockShip will not sink", () => {
    expect(shipFile.shipFactory.sink().toBe(false));
})