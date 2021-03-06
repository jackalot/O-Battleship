const shipFile = require('./ship');
const { TestWatcher } = require("jest");
// vertical
const mockShip = shipFile(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7});
// vertical
const mockShip2 = shipFile(coord1 = {x: 9, y: 3}, coord2 = { x: 9, y: 9});
// horizontal
const horizontalShip = shipFile(coord1 = {x: 3, y: 3}, coord2 = { x: 9, y: 3});
// horizontal
// Made to test the outer limit of the board
const mockShip3 = shipFile(coord1 = {x: 1, y: 10}, coord2 = { x: 10, y: 10});
// vertical
// Made to test the outer limit of the board
const mockShip4 = shipFile(coord1 = {x: 10, y: 1}, coord2 = { x: 10, y: 10});
/*
    These tests will return every part of the ship and every coordinate 
    of the ship, they will also return if that part has sunk yet or not.
    These tests appear first due to the fact that, after each time the 
    function is called, it returns new parts, so even if the part has
    been hit before, it will still return 'hasSunk' === false.
*/
//--! the first part returns that hasSunk is false, even though we hit that coordinate earlier
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
test("mockShip3.shipParts will return every part", () => {
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
test("mockShip4.shipParts will return every part", () => {
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
/*
    The following tests are tests that return the ship as an object,
    they will return the ship's coordinates, and it's functions.
    For the test's, they only test the coordinate's returning.
*/
test("mockShip returns an object", () => {
    expect(mockShip).toMatchObject({ coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} });
})
test("mockShip2 returns an object", () => {
    expect(mockShip2).toMatchObject({ coord1: {x: 9, y: 3}, coord2: {x: 9, y: 9} })
})
test("horizontalShip returns an object", () => {
    expect(horizontalShip).toMatchObject({ coord1: {x: 3, y: 3}, coord2: {x: 9, y: 3} });
})
test("mockShip3 returns an object", () => {
    expect(mockShip3).toMatchObject({ coord1: {x: 1, y: 10}, coord2: { x: 10, y: 10} });
})
test("mockShip4 returns an object", () => {
    expect(mockShip4).toMatchObject({ coord1: {x: 10, y: 1}, coord2: { x: 10, y: 10} });
})
/*
    The following tests are tests that check to see how long the ship
    is, it's the lengthMeasurer test. It will only return the length
    according to the orientation of the ship.
*/
test("mockShip returns a length of 6", () => {
    expect(mockShip.lengthMeasurer(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7})).toBe(6);
})
test("mockShip2 returns a length of 6", () => {
    expect(mockShip2.lengthMeasurer(coord1 = {x: 9, y: 3}, coord2 = { x: 9, y: 9})).toBe(6);
})
test("horizontalShip returns a length of 6", () => {
    expect(horizontalShip.lengthMeasurer(coord1 = {x: 3, y: 3}, coord2 = {x: 9, y: 3})).toBe(6);
})
test("mockShip3 returns a length of 9", () => {
    expect(mockShip3.lengthMeasurer(coord1 = {x: 1, y: 10}, coord2 = { x: 10, y: 10})).toBe(9);
})
test("mockShip4 returns a length of 9", () => {
    expect(mockShip4.lengthMeasurer(coord1 = {x: 10, y: 1}, coord2 = { x: 10, y: 10})).toBe(9);
})
/*
    The following tests are hit() tests but at the beginning of the
    ship, for example, like at 9, 3 for mockShip2. This is to see if,
    at the bare start, we can get hit.
*/
test("mockShip will get hit at [1, 1]", () => {
    expect(mockShip.hit({x: 1, y: 1})).toBe(true);
})
test("mockShip2 will get hit at [9, 3]", () => {
    expect(mockShip2.hit({x: 9, y: 3})).toBe(true);
})
test("horizontalShip will get hit at [3, 3]", () => {
    expect(horizontalShip.hit({x: 3, y: 3})).toBe(true);
})
test("mockShip3 will get hit at [1, 10]", () => {
    expect(mockShip3.hit({x: 1, y: 10})).toBe(true);
})
test("mockShip4 will get hit at [10, 1]", () => {
    expect(mockShip4.hit({x: 10, y: 1})).toBe(true);
})
/*
    The following tests are hit() tests but at the mid point or 
    somewhere between the end points of the ship, like at 9, 6
    of mockShip2 for example. This is if to see if, at any point
    on the ship, we can get hit.
*/
test("mockShip will get hit at [1, 4]", () => {
    expect(mockShip.hit({x: 1, y: 4})).toBe(true);
})
test("mockShip2 will get hit at [9, 6]", () => {
    expect(mockShip2.hit({x: 9, y: 6})).toBe(true);
})
test("horizontalShip will get hit at [6, 3]", () => {
    expect(horizontalShip.hit({x: 6, y: 3})).toBe(true);
})
test("mockShip3 will get hit at [5, 10]", () => {
    expect(mockShip3.hit({x: 5, y: 10})).toBe(true);
})
test("mockShip4 will get hit at [10, 5]", () => {
    expect(mockShip4.hit({x: 10, y: 5})).toBe(true);
})
/*
    The following tests are hit() tests but at the end of the ship,
    for example, like at 9, 9 of mockShip2. This is if to see if,
    at the very end, we can get hit.
*/
test("mockShip will get hit at [1, 7]", () => {
    expect(mockShip.hit({x: 1, y: 7})).toBe(true);
})
test("mockShip2 will get hit at [9, 9]", () => {
    expect(mockShip2.hit({x: 9, y: 9})).toBe(true);
})
test("horizontalShip will get hit at [9, 3]", () => {
    expect(horizontalShip.hit({x: 9, y: 3})).toBe(true);
})
test("mockShip3 will get hit at [10, 10]", () => {
    expect(mockShip3.hit({x: 10, y: 10})).toBe(true);
})
test("mockShip4 will get hit at [10, 10]", () => {
    expect(mockShip4.hit({x: 10, y: 10})).toBe(true);
})
/*
    This section will be general hit tests, but to test 
    if it misses, no real direction or place, just a
    general coordinate.
*/
test("mockShip will not get hit at [9, 6]", () => {
    expect(mockShip.hit({x: 9, y: 6})).toBe(false);
})
test("mockShip2 will not get hit at [1, 8]", () => {
    expect(mockShip2.hit({x: 1, y: 8})).toBe(false);
})
test("horizontalShip will not get hit at [9, 4]", () => {
    expect(horizontalShip.hit({x: 9, y: 4})).toBe(false);
})
test("horizontalShip will not get hit at [7, 2]", () => {
    expect(horizontalShip.hit({x: 7, y: 2})).toBe(false);
})
test("mockShip3 will not get hit at [2, 5]", () => {
    expect(mockShip3.hit({x: 2, y: 5})).toBe(false);
})
test("mockShip3 will not get hit at [5, 5]", () => {
    expect(mockShip3.hit({x: 5, y: 5})).toBe(false);
})
test("mockShip4 will not get hit at [2, 5]", () => {
    expect(mockShip4.hit({x: 2, y: 5})).toBe(false);
})
test("mockShip4 will not get hit at [4, 6]", () => {
    expect(mockShip4.hit({x: 4, y: 6})).toBe(false);
})
/*
    This section will be misses specifically made to
    be made close to the ship, this is to test if the
    hit function would confuse our ships coordinate's 
    axis with close by coordinates.
*/
test("mockShip will not get hit at [2, 2]", () => {
    expect(mockShip.hit({x: 2, y: 2})).toBe(false);
})
test("mockShip2 will not get hit at [10, 3]", () => {
    expect(mockShip2.hit({x: 10, y: 3})).toBe(false);
})
test("horizontalShip will not get hit at [8, 5]", () => {
    expect(horizontalShip.hit({x: 8, y: 5})).toBe(false);
})
test("mockShip3 will not get hit at [8, 9]", () => {
    expect(mockShip3.hit({x: 8, y: 9})).toBe(false);
})
test("mockShip4 will not get hit at [8, 9]", () => {
    expect(mockShip4.hit({x: 8, y: 9})).toBe(false);
})
/*
    This section will be misses made to be 1 coordinate
    off the ship, this is to check if just one number
    off could break the entire function.
*/
test("mockShip will not get hit at [1, 8]", () => {
    expect(mockShip.hit({x: 1, y: 8})).toBe(false);
})
test("mockShip2 will not get hit at [9, 10]", () => {
    expect(mockShip2.hit({x: 9, y: 10})).toBe(false);
})
test("horizontalShip will not get hit at [8, 5]", () => {
    expect(horizontalShip.hit({x: 8, y: 5})).toBe(false);
})
test("horizontalShip will not get hit at [9, 4]", () => {
    expect(mockShip.hit({x: 9, y: 4})).toBe(false);
})
test("mockShip3 will not get hit at [9, 9]", () => {
    expect(mockShip3.hit({x: 9, y: 9})).toBe(false);
})
test("mockShip4 will not get hit at [9, 9]", () => {
    expect(mockShip4.hit({x: 9, y: 9})).toBe(false);
})
/*
    These are the sink tests that make sure, at this point, none
    of the ships have completely sunken and they still have parts
    left.
*/
test("mockShip will not sink", () => {
    expect(mockShip.sink()).toBe('I still have parts left');
})
test("mockShip2 will not sink", () => {
    expect(mockShip2.sink()).toBe('I still have parts left');
})
test("horizontalShip will not sink", () => {
    expect(horizontalShip.sink()).toBe('I still have parts left');
})
test("mockShip3 will not sink", () => {
    expect(mockShip3.sink()).toBe('I still have parts left');
})
test("mockShip4 will not sink", () => {
    expect(mockShip4.sink()).toBe('I still have parts left');
})
/*
    The following tests are the getAllCoordinates tests. They will
    all return coordinate objects in an array. The coordinates they
    return are the coordinates to each part of the the ship and
    each part.
*/
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
test("horizontalShip will return all of its coordinates, including the parts", () => {
    expect(horizontalShip.getAllCoordinates()).toMatchObject([
        {x:3,y:3},{x:4,y:3},
        {x:5,y:3},{x:6,y:3},
        {x:7,y:3},{x:8,y:3},
        {x:9,y:3}
    ])
})
test("mockShip3 will return all of its coordinates, including the parts", () => {
    expect(mockShip3.getAllCoordinates()).toMatchObject([
        {x:1,y:10}, {x:2,y:10},
        {x:3,y:10}, {x:4,y:10},
        {x:5,y:10}, {x:6,y:10},
        {x:7,y:10}, {x:8,y:10},
        {x:9,y:10}, {x:10,y:10},
    ])
})
test("mockShip4 will return all of its coordinates, including the parts", () => {
    expect(mockShip4.getAllCoordinates()).toMatchObject([
        {x:10,y:1}, {x:10,y:2},
        {x:10,y:3}, {x:10,y:4},
        {x:10,y:5}, {x:10,y:6},
        {x:10,y:7}, {x:10,y:8},
        {x:10,y:9}, {x:10,y:10},
    ])
})
/*
    These tests are just hit functions that are here to make the ships sink.
    This is so, at a later comment divider, we can test if sinking a ship
    works.
    Each ship so far:
const mockShip = shipFile(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7});
Already hit at: {1, 1}, {1, 4}, {1, 7};

const mockShip2 = shipFile(coord1 = {x: 9, y: 3}, coord2 = { x: 9, y: 9});
Already hit at: {9, 3}, {9, 6}, {9, 9};

const horizontalShip = shipFile(coord1 = {x: 3, y: 3}, coord2 = { x: 9, y: 3});
Already hit at: {3, 3}, {6, 3}, {9, 3};

const mockShip3 = shipFile(coord1 = {x: 1, y: 10}, coord2 = { x: 10, y: 10});
Already hit at: {1, 10}, {5, 10}, {10, 10};

const mockShip4 = shipFile(coord1 = {x: 10, y: 1}, coord2 = { x: 10, y: 10});
Already hit at: {10, 1}, {10, 5}, {10, 10};
*/
/*
Tests to hit mockShip
Already hit at: {1, 1}, {1, 4}, {1, 7};
*/
test("mockShip will get hit at [1, 2]", () => {
  expect(mockShip.hit({x: 1, y: 2})).toBe(true);
})
test("mockShip will get hit at [1, 3]", () => {
  expect(mockShip.hit({x: 1, y: 3})).toBe(true);
 })
 test("mockShip will get hit at [1, 5]", () => {
  expect(mockShip.hit({x: 1, y: 5})).toBe(true);
 })
test("mockShip will get hit at [1, 6]", () => {
 expect(mockShip.hit({x: 1, y: 6})).toBe(true);
})
/*
Tests to hit mockShip2
Already hit at: {9, 3}, {9, 6}, {9, 9};
*/
test("mockShip2 will get hit at [9, 4]", () => {
    expect(mockShip2.hit({x: 9, y: 4})).toBe(true);
})
test("mockShip2 will get hit at [9, 5]", () => {
    expect(mockShip2.hit({x: 9, y: 5})).toBe(true);
})
test("mockShip2 will get hit at [9, 7]", () => {
    expect(mockShip2.hit({x: 9, y: 7})).toBe(true);
})
test("mockShip2 will get hit at [9, 8]", () => {
    expect(mockShip2.hit({x: 9, y: 8})).toBe(true);
})
/*
tests to hit horizontalShip
Already hit at: {3, 3}, {6, 3}, {9, 3};
*/
test("horizontalShip will get hit at [4, 3]", () => {
    expect(horizontalShip.hit({x: 4, y: 3})).toBe(true);
})
test("horizontalShip will get hit at [5, 3]", () => {
    expect(horizontalShip.hit({x: 5, y: 3})).toBe(true);
})
test("horizontalShip will get hit at [7, 3]", () => {
    expect(horizontalShip.hit({x: 7, y: 3})).toBe(true);
})
test("horizontalShip will get hit at [8, 3]", () => {
    expect(horizontalShip.hit({x: 8, y: 3})).toBe(true);
})
/*
tests to hit mockShip3
Already hit at: {1, 10}, {5, 10}, {10, 10};
*/
test("mockShip3 will get hit at [2, 10]", () => {
    expect(mockShip3.hit({x: 2, y: 10})).toBe(true);
})
test("mockShip3 will get hit at [3, 10]", () => {
    expect(mockShip3.hit({x: 3, y: 10})).toBe(true);
})
test("mockShip3 will get hit at [4, 10]", () => {
    expect(mockShip3.hit({x: 4, y: 10})).toBe(true);
})
test("mockShip3 will get hit at [6, 10]", () => {
    expect(mockShip3.hit({x: 6, y: 10})).toBe(true);
})
test("mockShip3 will get hit at [7, 10]", () => {
    expect(mockShip3.hit({x: 7, y: 10})).toBe(true);
})
test("mockShip3 will get hit at [8, 10]", () => {
    expect(mockShip3.hit({x: 8, y: 10})).toBe(true);
})
test("mockShip3 will get hit at [9, 10]", () => {
    expect(mockShip3.hit({x: 9, y: 10})).toBe(true);
})
/*
tests to hit mockShip4
Already hit at: {10, 1}, {10, 5}, {10, 10};
*/
test("mockShip4 will get hit at [10, 2]", () => {
    expect(mockShip4.hit({x: 10, y: 2})).toBe(true);
})
test("mockShip4 will get hit at [10, 3]", () => {
    expect(mockShip4.hit({x: 10, y: 3})).toBe(true);
})
test("mockShip4 will get hit at [10, 4]", () => {
    expect(mockShip4.hit({x: 10, y: 4})).toBe(true);
})
test("mockShip4 will get hit at [10, 6]", () => {
    expect(mockShip4.hit({x: 10, y: 6})).toBe(true);
})
test("mockShip4 will get hit at [10, 7]", () => {
    expect(mockShip4.hit({x: 10, y: 7})).toBe(true);
})
test("mockShip4 will get hit at [10, 8]", () => {
    expect(mockShip4.hit({x: 10, y: 8})).toBe(true);
})
test("mockShip4 will get hit at [10, 9]", () => {
    expect(mockShip4.hit({x: 10, y: 9})).toBe(true);
})
/*
    The following tests will check that the ships above have been sunken.
    After the above hit tests, each part should be damaged, so the sink
    function should return 'you sunk my battle ship!'.
*/
test("mockShip will sink and return 'you sunk my battle ship'", () => {
    expect(mockShip.sink()).toBe('you sunk my battle ship!')
})
test("mockShip2 will sink and return 'you sunk my battle ship'", () => {
    expect(mockShip2.sink()).toBe('you sunk my battle ship!')
})
test("horizontalShip will sink and return 'you sunk my battle ship'", () => {
    expect(horizontalShip.sink()).toBe('you sunk my battle ship!')
})
test("mockShip3 will sink and return 'you sunk my battle ship'", () => {
    expect(mockShip3.sink()).toBe('you sunk my battle ship!')
})
test("mockShip4 will sink and return 'you sunk my battle ship'", () => {
    expect(mockShip4.sink()).toBe('you sunk my battle ship!')
})