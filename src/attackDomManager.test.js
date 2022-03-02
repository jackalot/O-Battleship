const attackDomManagerFile = require('./attackDomManager');
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const player2 = playerFile("CPU", 1);
const mockAttackDomManager = attackDomManagerFile(player1, player2);
// testing if double digit axis works, and if player 1 returns
test("seperateIds will seperate the Id 'P1Box-10-10' into an object", () => {
    expect(mockAttackDomManager.seperateIds("P1Box-10-10")).toMatchObject({
        playerNumber: 1,
        coordinate: {
            x: 10,
            y: 10,
        }
    })
})
// testing if single digit axis works on the x axis, and if player 2 returns
test("seperateIds will seperate the Id 'P2Box-5-10' into an object", () => {
    expect(mockAttackDomManager.seperateIds("P2Box-5-10")).toMatchObject({
        playerNumber: 2,
        coordinate: {
            x: 5,
            y: 10,
        }
    })
})
// testing if single digit axis works on the y axis, and if player 2 returns
test("seperateIds will seperate the Id 'P2Box-10-5' into an object", () => {
    expect(mockAttackDomManager.seperateIds("P2Box-10-5")).toMatchObject({
        playerNumber: 2,
        coordinate: {
            x: 10,
            y: 5,
        }
    })
})