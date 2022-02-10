const shipFile = require('./ship');
const { TestWatcher } = require("jest");
const mockShip = shipFile(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7});
const mockShip2 = shipFile(coord1 = {x: 9, y: 3}, coord2 = { x: 9, y: 9});
//  this test is giving errors
test("mockShip returns an object", () => {
    expect(mockShip).toMatchObject({ coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} });
})
test("mockShip2 returns an object", () => {
    expect(mockShip2).toMatchObject({ coord1: {x: 9, y: 3}, coord2: {x: 9, y: 9} })
})
test("mockShip returns a length of 6", () => {
    expect(mockShip.lengthMeasurer(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7})).toBe(6);
})
test("mockShip2 returns a length of 6", () => {
    expect(mockShip2.lengthMeasurer(coord1 = {x: 9, y: 3}, coord2 = { x: 9, y: 9})).toBe(6);
})
test("mockShip will get hit at [1, 4]", () => {
    expect(mockShip.hit({x: 1, y: 4})).toBe(true);
})
test("mockShip2 will get hit at [9, 6]", () => {
    expect(mockShip.hit({x: 9, y: 6})).toBe(true);
})
test("mockShip will get hit at [1, 1]", () => {
    expect(mockShip.hit({x: 1, y: 1})).toBe(true);
})
test("mockShip2 will get hit at [9, 3]", () => {
    expect(mockShip2.hit({x: 9, y: 3})).toBe(true);
})
test("mockShip will get hit at [1, 7]", () => {
    expect(mockShip.hit({x: 1, y: 7})).toBe(true);
})
test("mockShip2 will get hit at [9, 9]", () => {
    expect(mockShip.hit({x: 1, y: 7})).toBe(true);
})
test("mockShip.shipParts will return every part", () => {
    expect(mockShip.shipParts()).toEqual([{"hasSunk": false, "partCoordinates": {"x": 1, "y": 1},
     "partName": "part1"}, {"hasSunk": false, "partCoordinates": {"x": 1, "y": 2}, "partName": "part2"},
     {"hasSunk": false, "partCoordinates": {"x": 1, "y": 3}, "partName": "part3"},
      {"hasSunk": false, "partCoordinates": {"x": 1, "y": 4}, "partName": "part4"},
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 5}, "partName": "part5"},
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 6}, "partName": "part6"}, 
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 7}, "partName": "part7"}]    );
})
test("mockSHip.shipParts will return every part", () => {
    expect(mockShip2.shipParts()).toEqual([{"hasSunk": false, "partCoordinate": {"x": 9, "y": 3}, "partName": "part1"},
    {"hasSunk": false, "partCoordinate": {"x": 9, "y": 4}, "partName": "part2"},
    {"hasSunk": false, "partCoordinate": {"x": 9, "y": 5}, "partName": "part3"},
    {"hasSunk": false, "partCoordinate": {"x": 9, "y": 6}, "partName": "part5"},
    {"hasSunk": false, "partCoordinate": {"x": 9, "y": 7}, "partName": "part6"},
    {"hasSunk": false, "partCoordinate": {"x": 9, "y": 8}, "partName": "part7"},
    {"hasSunk": false, "partCoordinate": {"x": 9, "y": 9}, "partName": "part8"}]    );
})
test("mockShip will not sink", () => {
    expect(mockShip.sink()).toBe('I still have parts left');
})
test("mockShip2 will not sink", () => {
    expect(mockShip2.sink()).toBe('I still have parts left');
})
test("mockShip will return all of its coordinates, including the parts", () => {
    expect(mockShip.getAllCoordinates()).toMatchObject([{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:1,y:4},{x:1,y:5},{x:1,y:6},{x:1,y:7}])
})