import rectangle from "../Rectangle/rectangle.js";
import { speedFactor } from "../SpeedFactor/SpeedFactor.js";

export default class DrawLaser {
  #SPEED = 5;
  constructor(positionX, positionY, direction, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.laser = new rectangle(5, 15, color);
    this.direction = direction;
  }

  draw() {
    this.laser.draw(this.positionX, this.positionY);
    if (this.direction === "up") {
      this.#moveLaserUp();
    } else if (this.direction === "down") {
      this.#moveLaserDown();
    }
  }

  getLaserPosition() {
    return { x: this.positionX, y: this.positionY };
  }

  #moveLaserUp() {
    this.positionY -= this.#SPEED * speedFactor.getSpeedFactor();
  }

  #moveLaserDown() {
    this.positionY += this.#SPEED * speedFactor.getSpeedFactor();
  }
}
