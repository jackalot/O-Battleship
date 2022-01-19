const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');

const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerTwo.ourBoard.placeShip({ x: 2, y: 2 }, { x: 8, y: 2 });
function populateBoard(board, player) {
    for(let i = 0; i < player.ourBoard.topRightCorner.x; i += 1)
    {
        const square = document.createElement("p");
    }
board.append(player.ourBoard.)
}
