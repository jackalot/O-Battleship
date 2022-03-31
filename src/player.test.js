const { TestWatcher } = require("jest");
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const player2 = playerFile("CPU", 1);
test("player1 places a ship from [1, 1] to [1,7]", () => {
    expect(player1.placeShip( {x: 1, y: 1}, {x: 1, y: 7})).toMatchObject({ coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} });
})
test("player2 places a ship from [2, 2] to [2, 6]", () => {
    expect(player2.placeShip( {x: 2, y: 2}, {x: 2, y: 6})).toMatchObject({ coord1: {x: 2, y: 2}, coord2: {x: 2, y: 6} });
})
test("player1 sends an attack to player2's board at [2,2] and it hits", () => {
    expect(player1.sendAttack(player2, {x: 2, y: 2})).toBe(true);
})
//swapTurn tests will break if used with other tests, skip otherwise
test.skip("player2 will now have the player turn 0 (meaning its their turn)", () => {
    expect(player2.swapTurn()).toBe(0);
})
test.skip("player1 will now have the player turn 1 (meaning its not their turn)", () => {
    expect(player1.swapTurn()).toBe(1);
})
/*
testing the findAdjacentSlot function
*/
test("player2 will be able to send an attack 1 slot above 1, 1", () => {
    expect(player2.findAdjacentSlot({x: 1, y: 1 }, {x: 0, y: 1}, player2)).toMatchObject({x: 1, y: 2 });
})
test("player2 will be able to send an attack 1 slot to the right of 1, 1", () => {
    expect(player2.findAdjacentSlot({x: 1, y: 1 }, {x: 1, y: 0}, player2)).toMatchObject({x: 2, y: 1 });
})
test("player2 will not be able to send an attack 1 slot below 1, 1", () => {
    expect(player2.findAdjacentSlot({x: 1, y: 1 }, {x: 0, y: -1}, player2)).toMatchObject({x: 1, y: 1 });
})
test("player2 will be able to send an attack 1 slot to the right of 1, 1", () => {
    expect(player2.findAdjacentSlot({x: 1, y: 1 }, {x: -1, y: 0}, player2)).toMatchObject({x: 1, y: 1 });
})
/*
testing the tryEveryDirection function
*/
test("When it comes to 1-1, player2 can only move up and right", () => {
    expect(player2.tryEveryDirection({x: 1, y: 1 }, player2)).toMatchObject([{x: 1, y: 2 }, {x: 2, y: 1 }]);
})
// true in this case means that after sending random attacks it managed to attack a valid coordinate
test("player2(CPU) sends a random attack to player1's board and it will return true, it can either miss or hit", ()=> {
expect(player2.sendRandomAttack(player1)).toBe(true);
})
// this is so that we can have some hits on the board and test checking for possible more hits
test("player2(CPU) sends a direct attack to player1's ship and it will return true", ()=> {
    expect(player2.sendAttack(player1, {x: 1, y: 1})).toBe(true);
    })
// thanks to previously hitting a ship, we now have a ship. this will now check for adjoining coords to hit
test.skip("player2(CPU) sends a random attack to player1's board and it will return true, it can either miss or hit", ()=> {
    expect(player2.sendRandomAttack(player1)).toBe(true);
})