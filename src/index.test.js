const { TestWatcher } = require("jest");
const boardFile = require('./board');
const shipFile = require('./ship');
test("gameBoard has placed a ship from [1,1] to [1,1]", () => {
    //so if game board has a function called placeShip, and it places a ship that will have a return function, it will return its coordinates?
    expect(boardFile.placeShip(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7})).toBe(coord1 = {x: 1, y: 1}, coord2 = {x: 1, y: 7});
})