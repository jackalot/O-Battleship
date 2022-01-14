const { TestWatcher } = require("jest");
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const player2 = playerFile("Player 2", 1);
test("sample test", () => {
    expect(2 + 2).toBe(4);
})
