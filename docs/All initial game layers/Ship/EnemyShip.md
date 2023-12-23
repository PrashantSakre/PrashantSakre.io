```js
export default class EnemyShip {
  #SPEED = 1;
  #STEP = -100;
  constructor(positionX, positionY, color) {
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  draw() {
    const ship = new DrawShip('enemy', this.positionX, this.positionY, this.color);
    ship.draw();
    this.ship_movement();
  }

  get_bottom_coordinates() {
    return [{x: this.positionX, y: this.positionY + 36}, {x: this.positionX + 36, y: this.positionY + 36}]
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
    const wave = Math.sin(this.#STEP);

    this.#STEP++;
    if(this.#STEP <= 0) {
      this.move_right();
    } 
    if(this.#STEP > 0) {
      this.move_left();
    }
    if(this.#STEP == 100) this.#STEP = -100
  }
}


```