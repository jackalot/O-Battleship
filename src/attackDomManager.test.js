const attackDomManagerFile = require('./attackDomManager');
const playerFile = require("./player");
const player1 = playerFile("Player 1", 0);
const player2 = playerFile("CPU", 1);
const mockAttackDomManager = attackDomManagerFile(player1, player2);