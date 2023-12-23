"use strict";

import canvas from "./Canvas/Canvas.js";
import Game from "./Game/Game.js";

const game = new Game();

function drawGame(timestamp){
  canvas.clear();
  game.start();
  requestAnimationFrame(drawGame);
}

console.log("game", game);

export default drawGame;
requestAnimationFrame(drawGame);