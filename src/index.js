import StartGame from './game/main';

var game = null;

document.addEventListener('DOMContentLoaded', () => {

    game = StartGame('game-container');

});