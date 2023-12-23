import rectangle from "../Rectangle/rectangle.js";

export default class DrawLaser {
  #SPEED = 5;
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.laser = new rectangle(5, 15, 'red');
  }

  draw() {
    this.laser.draw(this.positionX, this.positionY);
    this.#moveLaserUp();
  }

  getLaserPosition() {
    return {x: this.positionX, y: this.positionY}
  }

  #moveLaserUp() {
    this.positionY -= this.#SPEED;
  }
}