import DrawEnemyShip from "../DrawShip/DrawEnemyShip.js";
import { ShipMotion } from "../ShipMotion/ShipMotion.js";

export default class EnemyShip {
  ANIMATION_EXPRESSION = -20;

  constructor(positionX, positionY, color) {
    this.shipMotion = new ShipMotion(positionX, positionY, color, "horizontal");
    this.positionX = this.shipMotion.get_positionX();
    this.positionY = this.shipMotion.get_positionY();
    this.color = color;
  }

  draw() {
    const ship = new DrawEnemyShip(this.positionX, this.positionY, this.color);
    ship.draw(this.ANIMATION_EXPRESSION);
    this.ship_motion_draw();

    this.expression_move();
  }

  ship_motion_draw() {
    this.shipMotion.draw();
    this.positionX = this.shipMotion.get_positionX();
    this.positionY = this.shipMotion.get_positionY();
  }

  get_corner_coordinates() {
    return [
      { x: this.positionX, y: this.positionY },
      { x: this.positionX + 70, y: this.positionY },
      { x: this.positionX + 70, y: this.positionY + 36 },
      { x: this.positionX, y: this.positionY + 36 }
    ]
  }

  expression_move() {
    this.ANIMATION_EXPRESSION++;
    if (this.ANIMATION_EXPRESSION === 20) this.ANIMATION_EXPRESSION = -20
  }
}
