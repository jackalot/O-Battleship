const attackDomManagerFile = require('./attackDomManager');
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const player2 = playerFile("CPU", 1);
const mockAttackDomManager = attackDomManagerFile(player1, player2);

test("seperateIds will seperate the Id 'P1Box-10-10' into an object", () => {
    mockAttackDomManager.seperateIds("P1Box-10-10").toMatchObject({
        playerNumber: 1,
        coordinates: {
            x: 10,
            y: 10,
        }
    })
})
test("seperateIds will seperate the Id 'P2Box-5-10' into an object", () => {
    mockAttackDomManager.seperateIds("P2Box-5-10").toMatchObject({
        playerNumber: 2,
        coordinates: {
            x: 5,
            y: 10,
        }
    })
})
test("seperateIds will seperate the Id 'P1Box-10-5' into an object", () => {
    mockAttackDomManager.seperateIds("P2Box-10-5").toMatchObject({
        playerNumber: 1,
        coordinates: {
            x: 10,
            y: 5,
        }
    })
})