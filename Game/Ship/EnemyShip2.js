import DrawEnemyShip2 from "../DrawShip/DrawEnemyShip2.js";
import Expression from "../Expression/Expression.js";
import FireLaser from "../Laser/FireLaser.js";
import { ShipMotion } from "../ShipMotion/ShipMotion.js";

export default class EnemyShip2 {
  #laser = new FireLaser(this.positionX, this.positionY, "down", "red");
  #expression = new Expression();
  constructor(positionX, positionY, color) {
    this.shipMotion = new ShipMotion(positionX, positionY, color, "circle");
    this.positionX = this.shipMotion.get_positionX();
    this.positionY = this.shipMotion.get_positionY();
    this.color = color;
  }

  draw() {
    const ship = new DrawEnemyShip2(this.positionX, this.positionY, this.color);
    ship.draw(this.#expression.get_expresion());
    this.ship_motion_draw();

    this.#laser.draw();
    this.random_laser_fire();

    this.#expression.run();
  }

  ship_motion_draw() {
    this.shipMotion.draw();
    this.positionX = this.shipMotion.get_positionX();
    this.positionY = this.shipMotion.get_positionY();
  }

  get_corner_coordinates() {
    return [
      { x: this.positionX, y: this.positionY },
      { x: this.positionX + 50, y: this.positionY },
      { x: this.positionX + 50, y: this.positionY + 36 },
      { x: this.positionX, y: this.positionY + 36 },
    ];
  }

  random_laser_fire() {
    const no = Math.random();
    if (no > 0.0049 && no < 0.0052) {
      this.#laser.update_ship_position(this.positionX, this.positionY);
      this.#laser.fire_laser();
    }
  }

  get_laser_fired() {
    return this.#laser.get_lasers();
  }

  set_laser_fired(lasers) {
    this.#laser.set_lasers(lasers);
  }
}
