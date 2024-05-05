
export class ShipMotion {
  #MOTION_RADIUS = 100
  constructor(positionX, positionY, color, motion) {
    this.degree = 0;
    this.positionX = positionX + this.#MOTION_RADIUS * Math.cos(this.degree);
    this.positionY = positionY + this.#MOTION_RADIUS * Math.sin(this.degree);
    this.centerX = positionX;
    this.centerY = positionY;
    this.color = color;
    this.motion = motion;
  }

  draw() {
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
    return Number.parseInt(this.positionX)
  }

  get_positionY() {
    return Number.parseInt(this.positionY)
  }

  get_position() {
    return { x: this.positionX, y: this.positionY }
  }

  #SHIP_MOVE_CIRCLE() {
    this.degree = this.degree + 0.02;
    const sin_x = this.#MOTION_RADIUS * Math.sin(this.degree);
    const cos_y = this.#MOTION_RADIUS * Math.cos(this.degree);

    this.positionX = this.centerX + cos_y
    this.positionY = this.centerY + sin_x
    if (this.degree === 360) this.degree = 0
  }

  ship_movement() {
    this.degree = this.degree + 0.02;
    // const sin_x = this.#MOTION_RADIUS * Math.sin(this.degree);
    const cos_y = this.#MOTION_RADIUS * Math.cos(this.degree);

    this.positionX = this.centerX + cos_y
    if (this.degree === 360) this.degree = 0
  }
}
