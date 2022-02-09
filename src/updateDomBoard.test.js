const updateDOMBoardFile = require("./updateDOMBoard.js");
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const p1DomBoardManager = updateDOMBoardFile(player1, 'P1Box');
player1.placeShip({ x: 1, y: 1 }, { x: 1, y: 2 });
p1DomBoardManager.sendNextCollumn();
const tempBox = getByTestId(`P1Box-1-1`);
test("temp box with the id of 'P1Box-1-1' has the classname of hit", () => {
    expect(p1DomBoardManager.checkForClass(tempBox, "hit")).toBe(true);
})