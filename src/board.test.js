const { TestWatcher } = require("jest");
const boardFile = require('./board');
const shipFile = require('./ship');
const mockBoard = boardFile(coord1 = {x: 1, y: 1}, coord2 = {x: 10, y: 10})
// checkValidCoord() helper functions marked with ![
// checkBottomLeftCorner() helper functions marked with ?[
test("[1,1] is equal to the bottom left corner, [1, 1]", () => {
    expect(mockBoard.checkEqualToBLC({x: 1, y: 1})).toBe(true);
})
test("[1,7] is equal to the bottom left corner, [1, 1]", () => {
    expect(mockBoard.checkEqualToBLC({x: 1, y: 7})).toBe(false);
})
test("[1,1] is greater than the bottom left corner, [1, 1]", () => {
    expect(mockBoard.checkGreaterThanBLC({x: 1, y: 1})).toBe(false);
})
test("[1,7] is greater than the bottom left corner, [1, 1]", () => {
    expect(mockBoard.checkGreaterThanBLC({x: 1, y: 7})).toBe(true);
})
// ]?
test("[1,1] is not equal to the top right corner, [10, 10]", () => {
    expect(mockBoard.checkEqualToTRC({x:1, y: 1})).toBe(false);
})
test("[1,7] is not equal to the top right corner, [10, 10]", () => {
    expect(mockBoard.checkEqualToTRC({x:1, y: 7})).toBe(false);
})
test("[1,1] is not greater than the top right corner, [10, 10]", () => {
    expect(mockBoard.checkLessThanTRC({x:1, y: 1})).toBe(true);
})
test("[1,7] is not greater than the top right corner, [10, 10]", () => {
    expect(mockBoard.checkLessThanTRC({x:1, y: 7})).toBe(true);
})
// ]!
test("[1,1] is a valid according to the Bottom Left Corner", () => {
    expect(mockBoard.checkBottomLeftCorner({x: 1, y: 1})).toBe(true);
})
test("[1,7] is a valid according to the Bottom Left Corner", () => {
    expect(mockBoard.checkBottomLeftCorner({x: 1, y: 7})).toBe(true);
})
test("[1,1] is a valid according to the Top Right Corner", () => {
    expect(mockBoard.checkTopRightCorner({x: 1, y: 1})).toBe(true);
})
test("[1,7] is a valid according to the Top Right Corner", () => {
    expect(mockBoard.checkTopRightCorner({x: 1, y: 7})).toBe(true);
})
test("[1,1] is a valid coordinate on the game board", () => {
    expect(mockBoard.checkValidCoord({x: 1, y: 1})).toBe(true);
})
test("[1,7] is a valid coordinate on the game board", () => {
    expect(mockBoard.checkValidCoord({x: 1, y: 7})).toBe(true);
})
test("gameBoard has placed a ship from [1,1] to [1,7]", () => {
    expect(mockBoard.placeShip({x: 1, y: 1}, {x: 1, y: 7})).toMatchObject({ coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} });
})
test("gameBoard has placed a ship from [9,3] to [9,9]", () => {
    expect(mockBoard.placeShip({x: 9, y: 3}, {x: 9, y: 3})).toMatchObject({ coord1: {x: 9, y: 3}, coord2: {x: 9, y: 3} });
})
//it also sends the hit() function to the corresponding ship
test("gameBoard recieves an attack at [1, 1] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 1})).toBe(true);
})
//it also keeps track of the missed attacks
test("gameBoard recieves an attack at [2, 6] and it misses due to no ship there", () => {
    expect(mockBoard.recieveAttack({x: 2, y: 6})).toBe(false);
})
test("gameBoard checks if all ships have sunk, and returns false as theres still one ship up", () => {
    expect(mockBoard.allShipsSunk()).toBe(false);
})
// checks if the specified coord has been hit or missed already
test("gameBoard checks if 2, 5 has a hit or miss on it already", () => {
    expect(mockBoard.checkAvailableCoord({x: 2, y: 5})).toBe(true);
})
// !needs fixing, skipping for now
test("gameBoard checks if a ship is at 1,1 and returns true as there is a ship there", () => {
    expect(mockBoard.findFirstShip({x:1, y:1})).toBe(true);
})
// !needs fixing, skipping for now
test("gameBoard checks if a ship is at 9,3 and returns true as there is a ship there", () => {
    expect(mockBoard.findFirstShip({x:9, y:3})).toBe(true);
})
/*
The following test is tests for testing the limits of the board, like seeing if we could
place ships there foer example
*/
test.skip("gameBoard has placed a ship from [10,1] to [10,10]", () => {
    expect(mockBoard.placeShip({x: 10, y: 1}, {x: 10, y: 10})).toMatchObject({ coord1: {x: 10, y: 1}, coord2: {x: 10, y: 10} });
})
test("[10,10] is a valid coordinate on the game board", () => {
    expect(mockBoard.checkValidCoord({x: 10, y: 10})).toBe(true);
})
test("[10,1] is a valid coordinate on the game board", () => {
    expect(mockBoard.checkValidCoord({x: 10, y: 1})).toBe(true);
})
test("[10,1] is not out of bounds of the bottom left corner", () => {
    expect(mockBoard.checkBottomLeftCorner({x: 10, y: 1})).toBe(true);
})
test("[10,1] is not out of bounds of the top right corner", () => {
    expect(mockBoard.checkTopRightCorner({x: 10, y: 1})).toBe(true);
})
test("[10,1] is on the line of the top right corner", () => {
    expect(mockBoard.checkEqualToTRC({x: 10, y: 1})).toBe(true);
})