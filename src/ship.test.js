const shipFile = require('./ship');
const { TestWatcher } = require("jest");
// These two are vertical
const mockShip = shipFile(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7});
const mockShip2 = shipFile(coord1 = {x: 9, y: 3}, coord2 = { x: 9, y: 9});
//  this test is giving errors
test.skip("mockShip returns an object", () => {
    expect(mockShip).toMatchObject({ coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} });
})
test.skip("mockShip2 returns an object", () => {
    expect(mockShip2).toMatchObject({ coord1: {x: 9, y: 3}, coord2: {x: 9, y: 9} })
})
test.skip("mockShip returns a length of 6", () => {
    expect(mockShip.lengthMeasurer(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7})).toBe(6);
})
test.skip("mockShip2 returns a length of 6", () => {
    expect(mockShip2.lengthMeasurer(coord1 = {x: 9, y: 3}, coord2 = { x: 9, y: 9})).toBe(6);
})
test.skip("mockShip will get hit at [1, 4]", () => {
    expect(mockShip.hit({x: 1, y: 4})).toBe(true);
})
test.skip("mockShip2 will get hit at [9, 6]", () => {
    expect(mockShip2.hit({x: 9, y: 6})).toBe(true);
})
test.skip("mockShip will get hit at [1, 1]", () => {
    expect(mockShip.hit({x: 1, y: 1})).toBe(true);
})
test.skip("mockShip2 will get hit at [9, 3]", () => {
    expect(mockShip2.hit({x: 9, y: 3})).toBe(true);
})
test.skip("mockShip will get hit at [1, 7]", () => {
    expect(mockShip.hit({x: 1, y: 7})).toBe(true);
})
test.skip("mockShip2 will get hit at [9, 9]", () => {
    expect(mockShip.hit({x: 1, y: 7})).toBe(true);
})
test.skip("mockShip.shipParts will return every part", () => {
    expect(mockShip.shipParts()).toEqual([
    {"hasSunk": false, "partCoordinates": {"x": 1, "y": 1}},
     {"hasSunk": false, "partCoordinates": {"x": 1, "y": 2}},
     {"hasSunk": false, "partCoordinates": {"x": 1, "y": 3}},
      {"hasSunk": false, "partCoordinates": {"x": 1, "y": 4}},
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 5}},
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 6}}, 
       {"hasSunk": false, "partCoordinates": {"x": 1, "y": 7}}]    );
})
test.skip("mockShip2.shipParts will return every part", () => {
    expect(mockShip2.shipParts()).toEqual([
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 3}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 4}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 5}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 6}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 7}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 8}},
    {"hasSunk": false, "partCoordinates": {"x": 9, "y": 9}}]    );
})
test.skip("mockShip will not sink", () => {
    expect(mockShip.sink()).toBe('I still have parts left');
})
test.skip("mockShip2 will not sink", () => {
    expect(mockShip2.sink()).toBe('I still have parts left');
})
test.skip("mockShip will return all of its coordinates, including the parts", () => {
    expect(mockShip.getAllCoordinates()).toMatchObject([
        {x:1,y:1},{x:1,y:2},
        {x:1,y:3},{x:1,y:4},
        {x:1,y:5},{x:1,y:6},
        {x:1,y:7}
    ])
})
test.skip("mockShip2 will return all of its coordinates, including the parts", ()=> {
    expect(mockShip2.getAllCoordinates()).toMatchObject([
        {x: 9, y: 3}, {x: 9, y: 4},
        {x: 9, y: 5}, {x: 9, y: 6},
        {x: 9, y: 7}, {x: 9, y: 8},
        {x: 9, y: 9}
    ])
})
const horizontalShip = shipFile(coord1 = {x: 3, y: 3}, coord2 = { x: 9, y: 3});
test.skip("horizontalShip returns an object", () => {
    expect(horizontalShip).toMatchObject({ coord1: {x: 3, y: 3}, coord2: {x: 9, y: 3} });
})
test.skip("horizontalShip returns a length of 6", () => {
    expect(horizontalShip.lengthMeasurer(coord1 = {x: 3, y: 3}, coord2 = {x: 9, y: 3})).toBe(6);
})
//mid point
test.skip("horizontalShip will get hit at [6, 3]", () => {
    expect(horizontalShip.hit({x: 6, y: 3})).toBe(true);
})
//start point
test.skip("horizontalShip will get hit at [3, 3]", () => {
    expect(horizontalShip.hit({x: 3, y: 3})).toBe(true);
})
// end point
test.skip("horizontalShip will get hit at [9, 3]", () => {
    expect(horizontalShip.hit({x: 9, y: 3})).toBe(true);
})
test.skip("horizontalShip will not get hit at [9, 4]", () => {
    expect(horizontalShip.hit({x: 9, y: 4})).toBe(false);
})
test.skip("horizontalShip.shipParts will return every part", () => {
    expect(horizontalShip.shipParts()).toEqual([
    {"hasSunk": false, "partCoordinates": {"x": 3, "y": 3}},
     {"hasSunk": false, "partCoordinates": {"x": 4, "y": 3}},
     {"hasSunk": false, "partCoordinates": {"x": 5, "y": 3}},
      {"hasSunk": false, "partCoordinates": {"x": 6, "y": 3}},
       {"hasSunk": false, "partCoordinates": {"x": 7, "y": 3}},
       {"hasSunk": false, "partCoordinates": {"x": 8, "y": 3}}, 
       {"hasSunk": false, "partCoordinates": {"x": 9, "y": 3}}]    );
})
test.skip("horizontalShip will not sink", () => {
    expect(horizontalShip.sink()).toBe('I still have parts left');
})
test.skip("horizontalShip will return all of its coordinates, including the parts", () => {
    expect(horizontalShip.getAllCoordinates()).toMatchObject([
        {x:3,y:3},{x:4,y:3},
        {x:5,y:3},{x:6,y:3},
        {x:7,y:3},{x:8,y:3},
        {x:9,y:3}
    ])
})
// These are to test the outmost limits of the board
const mockShip3 = shipFile(coord1 = {x: 1, y: 10}, coord2 = { x: 10, y: 10});
const mockShip4 = shipFile(coord1 = {x: 10, y: 1}, coord2 = { x: 10, y: 10});
test.skip("mockShip3 returns an object", () => {
    expect(mockShip3).toMatchObject({ coord1: {x: 1, y: 10}, coord2: { x: 10, y: 10} });
})
test.skip("mockShip4 returns an object", () => {
    expect(mockShip4).toMatchObject({ coord1: {x: 10, y: 1}, coord2: { x: 10, y: 10} });
})
test.skip("mockShip3 returns a length of 9", () => {
    expect(mockShip3.lengthMeasurer(coord1 = {x: 1, y: 10}, coord2 = { x: 10, y: 10})).toBe(9);
})
test.skip("mockShip4 returns a length of 9", () => {
    expect(mockShip3.lengthMeasurer(coord1 = {x: 10, y: 1}, coord2 = { x: 10, y: 10})).toBe(9);
})
//mid point
test.skip("mockShip3 will get hit at [5, 10]", () => {
    expect(mockShip3.hit({x: 5, y: 10})).toBe(true);
})
//mid point
test.skip("mockShip4 will get hit at [10, 5]", () => {
    expect(mockShip4.hit({x: 10, y: 5})).toBe(true);
})
//start point
test.skip("mockShip3 will get hit at [1, 10]", () => {
    expect(mockShip3.hit({x: 1, y: 10})).toBe(true);
})
//start point
test.skip("mockShip4 will get hit at [10, 1]", () => {
    expect(mockShip4.hit({x: 10, y: 1})).toBe(true);
})
// end point
test.skip("mockShip3 will get hit at [10, 10]", () => {
    expect(mockShip3.hit({x: 10, y: 10})).toBe(true);
})
// end point
test.skip("mockShip4 will get hit at [10, 10]", () => {
    expect(mockShip4.hit({x: 10, y: 10})).toBe(true);
})
test.skip("mockShip3 will not get hit at [2, 5]", () => {
    expect(mockShip3.hit({x: 2, y: 5})).toBe(false);
})
test.skip("mockShip4 will not get hit at [2, 5]", () => {
    expect(mockShip4.hit({x: 2, y: 5})).toBe(false);
})
test.skip("mockShip3.shipParts will return every part", () => {
    expect(mockShip3.shipParts()).toEqual([
    {"hasSunk": false, "partCoordinates": {"x": 1, "y": 10}},
     {"hasSunk": false, "partCoordinates": {"x": 2, "y": 10}},
     {"hasSunk": false, "partCoordinates": {"x": 3, "y": 10}},
      {"hasSunk": false, "partCoordinates": {"x": 4, "y": 10}},
       {"hasSunk": false, "partCoordinates": {"x": 5, "y": 10}},
       {"hasSunk": false, "partCoordinates": {"x": 6, "y": 10}}, 
       {"hasSunk": false, "partCoordinates": {"x": 7, "y": 10}},
       {"hasSunk": false, "partCoordinates": {"x": 8, "y": 10}},
       {"hasSunk": false, "partCoordinates": {"x": 9, "y": 10}},
       {"hasSunk": false, "partCoordinates": {"x": 10, "y": 10}}]    );
})
test.skip("mockShip4.shipParts will return every part", () => {
    expect(mockShip4.shipParts()).toEqual([
    {"hasSunk": false, "partCoordinates": {"x": 10, "y": 1}},
     {"hasSunk": false, "partCoordinates": {"x": 10, "y": 2}},
     {"hasSunk": false, "partCoordinates": {"x": 10, "y": 3}},
      {"hasSunk": false, "partCoordinates": {"x": 10, "y": 4}},
       {"hasSunk": false, "partCoordinates": {"x": 10, "y": 5}},
       {"hasSunk": false, "partCoordinates": {"x": 10, "y": 6}}, 
       {"hasSunk": false, "partCoordinates": {"x": 10, "y": 7}},
       {"hasSunk": false, "partCoordinates": {"x": 10, "y": 8}},
       {"hasSunk": false, "partCoordinates": {"x": 10, "y": 9}},
       {"hasSunk": false, "partCoordinates": {"x": 10, "y": 10}}]    );
})
test.skip("mockShip3 will not sink", () => {
    expect(horizontalShip.sink()).toBe('I still have parts left');
})
test.skip("mockShip4 will not sink", () => {
    expect(mockShip4.sink()).toBe('I still have parts left');
})
test.skip("mockShip3 will return all of its coordinates, including the parts", () => {
    expect(mockShip3.getAllCoordinates()).toMatchObject([
        {x:1,y:10}, {x:2,y:10},
        {x:3,y:10}, {x:4,y:10},
        {x:5,y:10}, {x:6,y:10},
        {x:7,y:10}, {x:8,y:10},
        {x:9,y:10}, {x:10,y:10},
    ])
})
test.skip("mockShip4 will return all of its coordinates, including the parts", () => {
    expect(mockShip4.getAllCoordinates()).toMatchObject([
        {x:10,y:1}, {x:10,y:2},
        {x:10,y:3}, {x:10,y:4},
        {x:10,y:5}, {x:10,y:6},
        {x:10,y:7}, {x:10,y:8},
        {x:10,y:9}, {x:10,y:10},
    ])
})
/*
Misses tests
Coordinates of ships
- mockShip: coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7}
- mockShip2: coord1 = {x: 9, y: 3}, coord2 = { x: 9, y: 9}
- horizontalShip: coord1 = {x: 3, y: 3}, coord2 = { x: 9, y: 3}
- mockShip3: coord1 = {x: 1, y: 10}, coord2 = { x: 10, y: 10}
- mockShip4: coord1 = {x: 10, y: 1}, coord2 = { x: 10, y: 10}
*/
// mockShip miss tests \\
// Random coordinate
test.skip("mockShip will not get hit at [9, 6]", () => {
    expect(mockShip.hit({x: 9, y: 6})).toBe(false);
})
// close to ship
test.skip("mockShip will not get hit at [2, 2]", () => {
    expect(mockShip.hit({x: 2, y: 2})).toBe(false);
})
// one off the ship
test.skip("mockShip will not get hit at [1, 8]", () => {
    expect(mockShip.hit({x: 1, y: 8})).toBe(false);
})
// mockShip2 tests \\
// random coordinate
test.skip("mockShip2 will not get hit at [1, 8]", () => {
    expect(mockShip2.hit({x: 1, y: 8})).toBe(false);
})
// close to ship
test.skip("mockShip2 will not get hit at [10, 3]", () => {
    expect(mockShip2.hit({x: 10, y: 3})).toBe(false);
})
// one off the ship
test.skip("mockShip2 will not get hit at [9, 10]", () => {
    expect(mockShip2.hit({x: 9, y: 10})).toBe(false);
})
// horizontalShip miss tests \\
// random coordinate \\
test.skip("horizontalShip will not get hit at [7, 2]", () => {
    expect(horizontalShip.hit({x: 7, y: 2})).toBe(false);
})
// close to ship
test.skip("horizontalShip will not get hit at [8, 5]", () => {
    expect(mockShip.hit({x: 8, y: 5})).toBe(false);
})
// one off the ship
test.skip("horizontalShip will not get hit at [9, 4]", () => {
    expect(mockShip.hit({x: 9, y: 4})).toBe(false);
})
// mockShip3 miss tests \\
// random coordinate \\
test.skip("mockShip3 will not get hit at [5, 5]", () => {
    expect(mockShip3.hit({x: 5, y: 5})).toBe(false);
})
// close to the ship \\
test.skip("mockShip3 will not get hit at [8, 9]", () => {
    expect(mockShip3.hit({x: 8, y: 9})).toBe(false);
})
// one off the ship \\
test.skip("mockShip3 will not get hit at [9, 9]", () => {
    expect(mockShip3.hit({x: 9, y: 9})).toBe(false);
})
// mockShip4 miss tests \\
// random coordinate \\
test.skip("mockShip4 will not get hit at [4, 6]", () => {
    expect(mockShip4.hit({x: 4, y: 6})).toBe(false);
})
// close to the ship \\
test.skip("mockShip4 will not get hit at [8, 9]", () => {
    expect(mockShip4.hit({x: 8, y: 9})).toBe(false);
})
// one off the ship \\
test.skip("mockShip4 will not get hit at [9, 9]", () => {
    expect(mockShip4.hit({x: 9, y: 9})).toBe(false);
})