const shipFile = require('./ship');
const { TestWatcher } = require("jest");
// These two are vertical
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
    expect(mockShip2.hit({x: 9, y: 6})).toBe(true);
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
    expect(mockShip.shipParts()).toEqual([
    {"hasSunk": false, "partCoordinates": {"x": 1, "y": 1}},
     {"hasSunk": false, "partCoordinates": {"x": 1, "y": 2}},
     {"hasSunk": false, "partCoordinates": {"x": 1, "y": 3}},
      {"hasSunk": false, "partCoordinates": {"x": 1, "y": 4}},
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 5}},
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 6}}, 
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 7}}]    );
})
test("mockShip2.shipParts will return every part", () => {
    expect(mockShip2.shipParts()).toEqual([
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 3}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 4}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 5}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 6}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 7}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 8}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 9}}]    );
})
test("mockShip will not sink", () => {
    expect(mockShip.sink()).toBe('I still have parts left');
})
test("mockShip2 will not sink", () => {
    expect(mockShip2.sink()).toBe('I still have parts left');
})
test("mockShip will return all of its coordinates, including the parts", () => {
    expect(mockShip.getAllCoordinates()).toMatchObject([
        {x:1,y:1},{x:1,y:2},
        {x:1,y:3},{x:1,y:4},
        {x:1,y:5},{x:1,y:6},
        {x:1,y:7}
    ])
})
test("mockShip2 will return all of its coordinates, including the parts", ()=> {
    expect(mockShip2.getAllCoordinates()).toMatchObject([
        {x: 9, y: 3}, {x: 9, y: 4},
        {x: 9, y: 5}, {x: 9, y: 6},
        {x: 9, y: 7}, {x: 9, y: 8},
        {x: 9, y: 9}
    ])
})
const horizontalShip = shipFile(coord1 = {x: 3, y: 3}, coord2 = { x: 9, y: 3});
test("horizontalShip returns an object", () => {
    expect(horizontalShip).toMatchObject({ coord1: {x: 3, y: 3}, coord2: {x: 9, y: 3} });
})
test("horizontalShip returns a length of 6", () => {
    expect(horizontalShip.lengthMeasurer(coord1 = {x: 3, y: 3}, coord2 = {x: 9, y: 3})).toBe(6);
})
//mid point
test("horizontalShip will get hit at [6, 3]", () => {
    expect(horizontalShip.hit({x: 6, y: 3})).toBe(true);
})
//start point
test("horizontalShip will get hit at [3, 3]", () => {
    expect(horizontalShip.hit({x: 3, y: 3})).toBe(true);
})
// end point
test("horizontalShip will get hit at [9, 3]", () => {
    expect(horizontalShip.hit({x: 9, y: 3})).toBe(true);
})
test("horizontalShip will not get hit at [9, 4]", () => {
    expect(horizontalShip.hit({x: 9, y: 4})).toBe(false);
})
test("horizontalShip.shipParts will return every part", () => {
    expect(horizontalShip.shipParts()).toEqual([
    {"hasSunk": false, "partCoordinates": {"x": 3, "y": 3}},
     {"hasSunk": false, "partCoordinates": {"x": 4, "y": 3}},
     {"hasSunk": false, "partCoordinates": {"x": 5, "y": 3}},
      {"hasSunk": false, "partCoordinates": {"x": 6, "y": 3}},
       {"hasSunk": false, "partCoordinates": {"x": 7, "y": 3}},
       {"hasSunk": false, "partCoordinates": {"x": 8, "y": 3}}, 
       {"hasSunk": false, "partCoordinates": {"x": 9, "y": 3}}]    );
})
test("horizontalShip will not sink", () => {
    expect(horizontalShip.sink()).toBe('I still have parts left');
})
test("horizontalShip will return all of its coordinates, including the parts", () => {
    expect(horizontalShip.getAllCoordinates()).toMatchObject([
        {x:3,y:3},{x:4,y:3},
        {x:5,y:3},{x:6,y:3},
        {x:7,y:3},{x:8,y:3},
        {x:9,y:3}
    ])
})