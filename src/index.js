import './style.css';

const dropShipFile = require('./dropShips');

const dropShip = dropShipFile();
const confirmPlaceShipsBtn = document.querySelector('.confirm-place-ships');
confirmPlaceShipsBtn.addEventListener('click', dropShip.confirmPlacedShips);
