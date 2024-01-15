import DrawEnemyLaser from "../DrawLaser/DrawEnemyLaser.js";
import DrawShip from "../DrawShip/DrawShip.js";
import DrawEnemyShip from "../DrawShip/DrawEnemyShip.js";

export default class EnemyShip {
  #SPEED = 1;
  #STEP = -100;
  #ANIMATION_EXPRESSION = -30;

  constructor(positionX, positionY, color) {
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;

    // this.enemy_lasers_fired = [];

  }

  draw() {
    const ship = new DrawEnemyShip(this.positionX, this.positionY, this.color);
    ship.draw(this.#ANIMATION_EXPRESSION);
    this.ship_movement();

    // this.#draw_fired_lasers();
  }

  get_corner_coordinates() {
    return [{x: this.positionX, y: this.positionY}, {x: this.positionX + 70, y: this.positionY}, {x: this.positionX + 70, y: this.positionY + 36}, {x: this.positionX, y: this.positionY + 36}]
  }

  update_position(positionX, positionY) {
    this.positionX = positionX
    this.positionY = positionY
  }

  move_right() {
    this.positionX += this.#SPEED
  }

  move_left() {
    this.positionX -= this.#SPEED
  }

  get_position() {
    return {x: this.positionX, y: this.positionY}
  }

  ship_movement() {
    this.#STEP++;
    this.#ANIMATION_EXPRESSION++;
    if(this.#STEP <= 0) {
      this.move_right();
    } 
    if(this.#STEP > 0) {
      this.move_left();
    }
    if(this.#STEP === 100) this.#STEP = -100
    if(this.#ANIMATION_EXPRESSION === 20) this.#ANIMATION_EXPRESSION = -20
  }

  // #fire_laser() {
  //   const laser = new DrawEnemyLaser(this.get_corner_coordinates()[3].x -35, this.get_corner_coordinates()[3].y - 35)
  //   this.enemy_lasers_fired.push(laser);
  // }

  // #draw_fired_lasers() {
  //   this.enemy_lasers_fired.forEach(laser => {

  //     // Remove lasers which are off the canvas otherwise array is filled with laser objects
  //     if(laser.getLaserPosition().y < 0) {
  //       this.enemy_lasers_fired.splice(this.enemy_lasers_fired.indexOf(laser), 1)
  //     }
  //     laser.draw()
  //   });
  //   this.random()
  // }

  // random() {
  //   const no = Math.random();
  //   if(no > 0.0050 && no < .0052) {
  //     this.#fire_laser()
  //   };
  // }

}
