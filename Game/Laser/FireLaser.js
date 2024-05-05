import DrawLaser from "../DrawLaser/DrawLaser.js";

export default class FireLaser {
  constructor(ship_positionX, ship_positionY, direction, color) {
    this.ship_positionX = ship_positionX;
    this.ship_positionY = ship_positionY;
    this.direction = direction;
    this.lasers_fired = [];
    this.color = color;
  }

  draw() {
    this.draw_fired_lasers();
  }

  update_ship_position(ship_positionX, ship_positionY) {
    this.ship_positionX = ship_positionX;
    this.ship_positionY = ship_positionY;
  }

  get_lasers() {
    return this.lasers_fired;
  }

  set_lasers(lasers) {
    this.lasers_fired = lasers
  }

  get_laser_release_position() {
    if (this.direction === "up") {
      return { x: this.ship_positionX + 21, y: this.ship_positionY }
    }
    if (this.direction === "down") {
      return { x: this.ship_positionX + 25, y: this.ship_positionY + 40 }
    }
  }

  fire_laser() {
    const laser = new DrawLaser(this.get_laser_release_position().x - 3, this.get_laser_release_position().y - 15, this.direction, this.color);
    this.lasers_fired.push(laser);
  }

  draw_fired_lasers() {
    for (const laser of this.lasers_fired) {
      // Remove lasers which are off the canvas otherwise array is filled with laser objects
      if (this.direction === "up" && laser.getLaserPosition().y < 0) {
        this.lasers_fired.splice(this.lasers_fired.indexOf(laser), 1)
      } else if (this.direction === "down" && laser.getLaserPosition().y > (window.innerHeight - 20)) {
        this.lasers_fired.splice(this.lasers_fired.indexOf(laser), 1)
      }
      laser.draw()
    }
  }
}
