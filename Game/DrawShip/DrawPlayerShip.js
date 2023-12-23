import rectangle from "../Rectangle/rectangle.js";

export default class DrawPlayerShip {
  constructor (positionX, positionY, color) {
    this.type = 'player';
    this.positionX = positionX;
    this.positionY = positionY;
    this.rect_base = new rectangle(40, 8, color);
    this.rect_body = new rectangle(25, 8, color);
    this.rect_gun = new rectangle(7, 8, color);

    this.l1 = new rectangle(30, 4, color)
    this.l2 = new rectangle(50, 4, color)
    this.l10 = new rectangle(10, 4, color)
    this.l20 = new rectangle(20, 4, color)
    this.l15 = new rectangle(15, 4, color)
    this.logRect = new rectangle(70, 4, color)
    this.l30 = new rectangle(30, 4, color)
    this.l5 = new rectangle(5, 4, color)
    this.blackRect = new rectangle(5, 5, 'black');
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
