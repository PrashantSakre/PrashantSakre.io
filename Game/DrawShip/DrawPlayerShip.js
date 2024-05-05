import rectangle from "../Rectangle/rectangle.js";

export default class DrawPlayerShip {
  constructor (positionX, positionY, color) {
    this.type = 'player';
    this.positionX = positionX;
    this.positionY = positionY;
    this.rect_base = new rectangle(40, 8, color);
    this.rect_body = new rectangle(25, 8, color);
    this.rect_gun = new rectangle(7, 8, color);
  }

  draw() {
    this.#player()
  }

  #player() {
    this.rect_gun.draw(this.positionX + 17, this.positionY)
    this.rect_body.draw(this.positionX + 8, this.positionY + 8)
    this.rect_base.draw(this.positionX, this.positionY + 16)
  }
}
