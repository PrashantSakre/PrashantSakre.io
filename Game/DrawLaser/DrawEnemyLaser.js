import rectangle from "../Rectangle/rectangle.js";

export default class DrawEnemyLaser {
  #SPEED = 5;
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.laser = new rectangle(5, 15, 'pink');
  }

  draw() {
    this.laser.draw(this.positionX, this.positionY);
    this.#moveLaserDown();
  }

  getLaserPosition() {
    return {x: this.positionX, y: this.positionY}
  }

  #moveLaserDown() {
    this.positionY += this.#SPEED;
  }
}