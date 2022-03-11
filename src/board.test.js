const { TestWatcher } = require("jest");
const boardFile = require('./board');
const shipFile = require('./ship');
const mockBoard = boardFile(coord1 = {x: 1, y: 1}, coord2 = {x: 10, y: 10})
/*
    The following tests will be tests to see if the coordinate
    is equal to the bottom left corner. function: checkEqualToBLC(coordinates)
*/
test("[1,1] is equal to the bottom left corner, [1, 1]", () => {
    expect(mockBoard.checkEqualToBLC({x: 1, y: 1})).toBe(true);
})
test("[1,7] is equal to the bottom left corner, [1, 1]", () => {
    expect(mockBoard.checkEqualToBLC({x: 1, y: 7})).toBe(false);
})
/*
    The following tests will be tests to see if the coordinate
    is greater than the bottom left Corner. function: checkGreaterThanBLC(coordinates)
*/
test("[1,1] is greater than the bottom left corner, [1, 1]", () => {
    expect(mockBoard.checkGreaterThanBLC({x: 1, y: 1})).toBe(false);
})
test("[1,7] is greater than the bottom left corner, [1, 1]", () => {
    expect(mockBoard.checkGreaterThanBLC({x: 1, y: 7})).toBe(true);
})
/*
    The following tests will be tests to see if the coordinate
    is equal to the top right corner. function: checkEqualToTRC(coordinates)
*/
test("[1,1] is not equal to the top right corner, [10, 10]", () => {
    expect(mockBoard.checkEqualToTRC({x:1, y: 1})).toBe(false);
})
test("[1,7] is not equal to the top right corner, [10, 10]", () => {
    expect(mockBoard.checkEqualToTRC({x:1, y: 7})).toBe(false);
})
test("[10,1] is on the line of the top right corner", () => {
    expect(mockBoard.checkEqualToTRC({x: 10, y: 1})).toBe(true);
})
/*
    The following tests will be tests to see if the coordinate
    is less than the top right corner. function: checkLessThanTRC(coordinates)
*/
test("[1,1] is not greater than the top right corner, [10, 10]", () => {
    expect(mockBoard.checkLessThanTRC({x:1, y: 1})).toBe(true);
})
test("[1,7] is not greater than the top right corner, [10, 10]", () => {
    expect(mockBoard.checkLessThanTRC({x:1, y: 7})).toBe(true);
})
/*
    The following tests will be tests to see if the coordinate
    is valid among the bottom left corner. function: checkBottomLeftCorner(coordinates)
*/
test("[1,1] is a valid according to the Bottom Left Corner", () => {
    expect(mockBoard.checkBottomLeftCorner({x: 1, y: 1})).toBe(true);
})
test("[1,7] is a valid according to the Bottom Left Corner", () => {
    expect(mockBoard.checkBottomLeftCorner({x: 1, y: 7})).toBe(true);
})
test("[10,1] is not out of bounds of the bottom left corner", () => {
    expect(mockBoard.checkBottomLeftCorner({x: 10, y: 1})).toBe(true);
})
/*
    The following tests will be tests to see if the coordinate
    is valid among the top right corner. function: checkTopRightCorner(coordinates)
*/
test("[1,1] is a valid according to the Top Right Corner", () => {
    expect(mockBoard.checkTopRightCorner({x: 1, y: 1})).toBe(true);
})
test("[1,7] is a valid according to the Top Right Corner", () => {
    expect(mockBoard.checkTopRightCorner({x: 1, y: 7})).toBe(true);
})
test("[10,1] is not out of bounds of the top right corner", () => {
    expect(mockBoard.checkTopRightCorner({x: 10, y: 1})).toBe(true);
})
/*
    The following tests will check that the coordinates, in general,
    are valid and can be placed on the board. The functions above are
     helper functions for this function. function: checkValidCoord(coordinates)
*/
test("[1,1] is a valid coordinate on the game board", () => {
    expect(mockBoard.checkValidCoord({x: 1, y: 1})).toBe(true);
})
test("[1,7] is a valid coordinate on the game board", () => {
    expect(mockBoard.checkValidCoord({x: 1, y: 7})).toBe(true);
})
test("[10,10] is a valid coordinate on the game board", () => {
    expect(mockBoard.checkValidCoord({x: 10, y: 10})).toBe(true);
})
test("[10,1] is a valid coordinate on the game board", () => {
    expect(mockBoard.checkValidCoord({x: 10, y: 1})).toBe(true);
})
/*
    The following tests will check if the ship we placed has the proper
    coordinates. function: placeShip(firstCoord, secondCoord)
*/

test("gameBoard has placed a ship from [1,1] to [1,7]", () => {
    expect(mockBoard.placeShip({x: 1, y: 1}, {x: 1, y: 7})).toMatchObject({ coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} });
})
test("gameBoard has placed a ship from [9,3] to [9,9]", () => {
    expect(mockBoard.placeShip({x: 9, y: 3}, {x: 9, y: 9})).toMatchObject({ coord1: {x: 9, y: 3}, coord2: {x: 9, y: 9} });
})
//  This ship is so we know the board supports the limits of the board.
test("gameBoard has placed a ship from [10,1] to [10,10]", () => {
    expect(mockBoard.placeShip({x: 10, y: 1}, {x: 10, y: 10})).toMatchObject({ coord1: {x: 10, y: 1}, coord2: {x: 10, y: 10} });
})
/*
    The following tests will check if the board either recieves a hit or miss
    after an attack is recieved. function: function recieveAttack(coordinate) 
*/
//it also sends the hit() function to the corresponding ship
test("gameBoard recieves an attack at [1, 1] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 1})).toBe(true);
})
//it also keeps track of the missed attacks
test("gameBoard recieves an attack at [2, 6] and it misses due to no ship there", () => {
    expect(mockBoard.recieveAttack({x: 2, y: 6})).toBe(false);
})
test("[10,1] will return a hit as there is a ship there", () => {
    expect(mockBoard.recieveAttack({x: 10, y: 1})).toBe(true);
})
test("[10,2] will return a hit as there is a ship there", () => {
    expect(mockBoard.recieveAttack({x: 10, y: 2})).toBe(true);
})
test("[10,3] will return a hit as there is a ship there", () => {
    expect(mockBoard.recieveAttack({x: 10, y: 3})).toBe(true);
})
test("[5,5] will return a miss as there is not a ship there", () => {
    expect(mockBoard.recieveAttack({x: 5, y: 5})).toBe(false);
})
/*
    This allShipsSunk test will return false as none of the ships
    have sunken yet. At a later point in the test suite, we will
    hit each ship's point and then sink them one by one, to then
    test this function and see if it returns true. function: allShipsSunk()
*/
test("gameBoard checks if all ships have sunk, and returns false as theres still one ship up", () => {
    expect(mockBoard.allShipsSunk()).toBe(false);
})
/*
    This test is to see if theres a hit or miss in this specifice coordinate
    so that we can place a ship, hit, or miss in that coordinate.
    function: checkAvailableCoord(coordinates);
*/
test("gameBoard checks if 2, 5 has a hit or miss on it already", () => {
    expect(mockBoard.checkAvailableCoord({x: 2, y: 5})).toBe(true);
})
/*
    These tests find the first ship within a given coordinate
    and return the ship's coordinates. Also a helper function
    for recieveAttack. function: findFirstShip(coordinates)
*/
test("gameBoard checks if a ship is at 1,1 and returns its coordinates as there is a ship there", () => {
    expect(mockBoard.findFirstShip({x:1, y:1})).toMatchObject({coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7}});
})
test("gameBoard checks if a ship is at 9,3 and returns true as there is a ship there", () => {
    expect(mockBoard.findFirstShip({x:9, y:3})).toMatchObject({ coord1: {x: 9, y: 3}, coord2: {x: 9, y: 9}});
})
/*
    These tests check if whether the given coordinate has a hit or a miss.
    Whichever it finds it returns, if none is found it returns 'none'
    function checkMissesAndHits(coordinates)
*/
test("[10,3] will return a Hit as there is a hit there", () => {
    expect(mockBoard.checkMissesAndHits({x: 10, y: 3})).toBe("Hit");
})
test("[5, 5] will return a Miss as there is a Miss there", () => {
    expect(mockBoard.checkMissesAndHits({x: 5, y: 5})).toBe("Miss");
})
/*
    function: recieveAttack(coordinates)
    Theses tests will sink each ship, heres the coordinates to each ship
    and where they've been hit thus far:
    ship1 placed: { coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} }
    ship1 hits: {x: 1, y: 1}, 
    ship2 placed: { coord1: {x: 9, y: 3}, coord2: {x: 9, y: 9} }
    ship3 placed: { coord1: {x: 10, y: 1}, coord2: {x: 10, y: 10} }
    ship3 hits: {x: 10, y: 1}, {x: 10, y: 2}, {x: 10, y: 3}
    firstShip to sink is ship1, here are those tests
*/
//  This now makes it, ship1 hits: {x: 1, y: 1}, {x: 1, y: 2}
test("gameBoard recieves an attack at [1, 2] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 2})).toBe(true);
})
//  This now makes it,
// ship1 hits: {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}
test("gameBoard recieves an attack at [1, 3] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 3})).toBe(true);
})
//  This now makes it,
// ship1 hits: {x: 1, y: 1}, {x: 1, y: 2},
//  {x: 1, y: 3}, {x: 1, y: 4}
test("gameBoard recieves an attack at [1, 4] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 4})).toBe(true);
})
//  This now makes it,
// ship1 hits: {x: 1, y: 1}, {x: 1, y: 2},
//  {x: 1, y: 3}, {x: 1, y: 4}, {x: 1, y: 5}
test("gameBoard recieves an attack at [1, 5] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 5})).toBe(true);
})
//  This now makes it,
// ship1 hits: {x: 1, y: 1}, {x: 1, y: 2},
//  {x: 1, y: 3}, {x: 1, y: 4}, {x: 1, y: 5}, {x: 1, y: 6}
test("gameBoard recieves an attack at [1, 6] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 6})).toBe(true);
})
//  This now makes it,
// ship1 hits: {x: 1, y: 1}, {x: 1, y: 2},
//  {x: 1, y: 3}, {x: 1, y: 4}, {x: 1, y: 5},
//   {x: 1, y: 6}, {x: 1, y: 6}, {x: 1, y: 7}, its now sunken 
test("gameBoard recieves an attack at [1, 7] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 7})).toBe(true);
})