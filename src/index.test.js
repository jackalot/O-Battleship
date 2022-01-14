const { TestWatcher } = require("jest");
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const player2 = playerFile("Player 2", 1);
test.only("player1 places a ship from [1, 1] to [1,7]", () => {
    expect(player1.placeShip( {x: 1, y: 1}, {x: 1, y: 7})).toMatchObject({ coord1: {x: 1, y: 1}, coord2: {x: 1, y: 7} });
})
test.only("player2 places a ship from [2, 2] to [2, 6]", () => {
    expect(player2.placeShip( {x: 2, y: 2}, {x: 2, y: 6})).toMatchObject({ coord1: {x: 2, y: 2}, coord2: {x: 2, y: 6} });
})
test.only("player1 sends an attack to player2's board at [2,2] and it hits", () => {
    expect(player1.sendAttack(player2, {x: 2, y: 2})).toBe(true);
})
// true in this case means that after sending random attacks it managed to attack a valid coordinate
test.skip("player2(CPU) sends a random attack to player1's board and it will return true", ()=> {
expect(player2.sendRandomAttack(player1)).toBe(true);
})