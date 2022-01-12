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
    //so if game board has a function called placeShip, and it places a ship that will have a return function, it will return its coordinates?
    expect(mockBoard.placeShip({x: 1, y: 1}, {x: 1, y: 7})).toMatchObject({ coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} });
})
//it also sends the hit() function to the corresponding ship
test("gameBoard recieves an attack at [1, 1] and it hits due to the ship there", () => {
    expect(mockBoard.recieveAttack({x: 1, y: 1})).toBe(true);
})
//it also keeps track of the missed attacks
test.skip("gameBoard recieves an attack at [2, 6] and it misses due to no ship there", () => {
    expect(boardFile.recieveAttack(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7})).toBe(true);
})
test.skip("gameBoard checks if all ships have sunk, and returns false as theres still one ship up", () => {
    expect(boardFile.allShipsSunk()).toBe(false);
})