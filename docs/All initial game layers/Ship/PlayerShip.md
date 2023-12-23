```js
import canvas from "../Canvas/Canvas.js";
import DrawLaser from "../DrawLaser/DrawLaser.js";
import DrawShip from "../DrawShip/DrawShip.js";
// import rectangle from "../Rectangle/rectangle.js";

export default class PlayerShip {
  constructor(color) {
    this.canvas = new canvas();
    this.color = color
    this.positionX = 200;
    this.positionY = this.canvas.height - 24;
    this.event = window.document.addEventListener('keydown', this);
    this.lasers_fired = [];
  }

  draw() {
    const ship = new DrawShip('player', this.positionX, this.positionY, this.color);
    ship.draw();
    this.#draw_fired_lasers();
  }

  update_ship_position(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  get_ship_position() {
    return {x: this.positionX, y: this.positionY}
  }

  
  handleEvent (event) {
    console.log('my component element is clicked', event)
    const LEFT_KEY = 37;  
    const RIGHT_KEY = 39;
    const SPACE_KEY = 32;
    const keyPressed = event.keyCode;
    
    if(event.repeat || keyPressed) {
      if(keyPressed === RIGHT_KEY) {
        if(this.#isShipCanMoveRight()) this.#moveShipRight();
      }
      if(keyPressed === LEFT_KEY) {
        if(this.#isShipCanMoveLeft()) this.#moveShipLeft();
      }
      if(keyPressed === SPACE_KEY) {
        this.#fire_laser();
      }
    }
  }
  
  #get_laser_release_position() {
    return { x: this.positionX + 21, y: this.positionY }
  }
  
  #fire_laser() {
    console.log('laser', this.#get_laser_release_position());
    const laser = new DrawLaser(this.#get_laser_release_position().x -3, this.#get_laser_release_position().y - 15)
    this.lasers_fired.push(laser);
  }

  #draw_fired_lasers() {
    this.lasers_fired.forEach(laser => laser.draw());
  }

  #isShipCanMoveRight() {
    return !(this.get_ship_position().x >= this.canvas.width - 50)
  }

  #isShipCanMoveLeft() {
    return this.get_ship_position().x > 10 && this.canvas.width - 40
  }
  
  #moveShipRight() {
    this.positionX += 14
  }
  
  #moveShipLeft() {
    this.positionX -= 14
  }

}
```