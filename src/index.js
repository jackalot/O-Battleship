const playerOneDomBoard = document.querySelector('#playerOneBoard');
const playerTwoDomBoard = document.querySelector('#playerTwoBoard');
const playerFile = require('./player');

const playerOne = playerFile('player 1', 0);
const playerTwo = playerFile('CPU', 1);
playerOne.ourBoard.placeShip({ x: 1, y: 1 }, { x: 1, y: 7 });
playerTwo.ourBoard.placeShip({ x: 2, y: 2 }, { x: 8, y: 2 });
function populateBoard(board, player) {
    while(board.firstChild)
    {
        board.removeChild(board.firstChild);
    }
    const table = document.querySelector()
board.append(player.ourBoard.)
}
