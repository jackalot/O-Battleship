const { TestWatcher } = require("jest");
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const player2 = playerFile("Player 2", 1);
test.only("player1 sends an attack to player2's board at [2,2] and it hits", () => {
    expect(player1.sendAttack(player2, {x: 2, y: 2})).toBe(true);
})
// true in this case means that after sending random attacks it managed to attack a valid coordinate
test.skip("player2(CPU) sends a random attack to player1's board and it will return true", ()=> {
expect(player2.sendRandomAttack(player1)).toBe(true);
})