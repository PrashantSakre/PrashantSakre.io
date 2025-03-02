import { speedFactor } from "../SpeedFactor/SpeedFactor.js";

export class ShipMotion {
  #MOTION_RADIUS = 100;
  #SPEED = 1.2;
  constructor(positionX, positionY, color, motion) {
    this.degree = 0;
    this.radian;
    this.positionX = positionX + this.#MOTION_RADIUS * Math.cos(this.degree);
    this.positionY = positionY + this.#MOTION_RADIUS * Math.sin(this.degree);
    this.centerX = positionX;
    this.centerY = positionY;
    this.color = color;
    this.motion = motion;
  }

  draw() {
    this.#convert_radian();
    this.motion_draw();
  }

  motion_draw() {
    switch (this.motion) {
      case "circle":
        this.#SHIP_MOVE_CIRCLE();
        break;
      case "horizontal":
        this.ship_movement();
        break;
    }
  }

  get_positionX() {
    return Number.parseInt(this.positionX);
  }

  get_positionY() {
    return Number.parseInt(this.positionY);
  }

  get_position() {
    return { x: this.positionX, y: this.positionY };
  }

  #convert_radian() {
    this.degree += this.#SPEED * speedFactor.getSpeedFactor();
    this.degree %= 360;
    this.radian = (this.degree * Math.PI) / 180;
  }

  #SHIP_MOVE_CIRCLE_WITH_FORWARD() {
    const sin_x = this.#MOTION_RADIUS * Math.sin(this.radian);
    const cos_y = this.#MOTION_RADIUS * Math.cos(this.radian);

    this.positionX = this.centerX + cos_y;
    this.positionY = this.centerY + sin_x;
    this.centerY += 0.1;
  }

  #SHIP_MOVE_CIRCLE() {
    // this.degree = time.getTime() / 750;
    const sin_x = this.#MOTION_RADIUS * Math.sin(this.radian);
    const cos_y = this.#MOTION_RADIUS * Math.cos(this.radian);

    this.positionX = this.centerX + cos_y;
    this.positionY = this.centerY + sin_x;
    // if (this.degree === 360) this.degree = 0
  }

  ship_movement() {
    // this.degree = this.degree + 0.02;
    // const sin_x = this.#MOTION_RADIUS * Math.sin(this.degree);
    // this.degree = time.getTime() / 750;
    // console.log(this.degree)
    const cos_y = this.#MOTION_RADIUS * Math.cos(this.radian);

    this.positionX = this.centerX + cos_y;
    // if (this.degree === 360) this.degree = 0
  }
}
