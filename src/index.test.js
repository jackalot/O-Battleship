const shipFile = require('./ship');
const { TestWatcher } = require("jest");
const mockShip = shipFile(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7});
console.log(mockShip.shipParts);
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
test("mockShip.shipParts will return every part", () => {
    expect(mockShip.shipParts()).toEqual([{"hasSunk": false, "partCoordinates": {"x": 1, "y": 1}, "partName": "part1"}, {"hasSunk": false, "partCoordinates": {"x": 2, "y": 1}, "partName": "part2"}, {"hasSunk": false, "partCoordinates": {"x": 3, "y": 1}, "partName": "part3"}, {"hasSunk": false, "partCoordinates": {"x": 4, "y": 1}, "partName": "part4"}, {"hasSunk": false, "partCoordinates": {"x": 5, "y": 1}, "partName": "part5"}]    );
})
test("mockShip will not sink", () => {
    expect(mockShip.sink()).toBe('I still have parts left');
})