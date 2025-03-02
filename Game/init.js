import canvas from "./Canvas/Canvas.js";
import Game from "./Game/Game.js";
import { speedFactor } from "./SpeedFactor/SpeedFactor.js";

const game = new Game();

let lastTimestamp = performance.now();

function drawGame(timestamp) {
  speedFactor.setSpeedFactor(((timestamp - lastTimestamp) * 60) / 1000);
  lastTimestamp = timestamp;
  canvas.clear();
  game.start();
  requestAnimationFrame(drawGame);
}

console.log("game", game);

export default drawGame;
requestAnimationFrame(drawGame);
