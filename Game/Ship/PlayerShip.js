import canvas from "../Canvas/Canvas.js";
import DrawLaser from "../DrawLaser/DrawLaser.js";
import DrawShip from "../DrawShip/DrawShip.js";
import DrawPlayerShip from "../DrawShip/DrawPlayerShip.js";
// import rectangle from "../Rectangle/rectangle.js";

export default class PlayerShip {
  constructor(color) {
    this.canvas = canvas;
    this.color = color
    this.positionX = 200;
    this.positionY = this.canvas.height - 30;
    this.event = window.document.addEventListener('keydown', this);
    // this.event = window.document.addEventListener('keyup', this);
    this.event = window.document.addEventListener('mousemove', this);
    // this.event = window.document.addEventListener('mousedown', this);
    this.lasers_fired = [];
  }

  draw() {
    const ship = new DrawPlayerShip(this.positionX, this.positionY, this.color);
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

  get_lasers() {
    return this.lasers_fired;
  }

  set_lasers(lasers) {
    this.lasers_fired = lasers
  }
  
  handleEvent (event) {
    const LEFT_KEY = 37;  
    const RIGHT_KEY = 39;
    const SPACE_KEY = 32;
    const keyPressed = event.keyCode;
    
    if(!event.repeat && keyPressed) {
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
    if(event.type === 'mousemove') {
      this.update_ship_position(event.clientX, this.positionY)
    }
    // if(event.type === 'mousedown') {
    //   this.#debounce(this.#fire_laser());
    // }
  }
  
  // #debounce = (func, wait = 1000) => {
  //   let timeout;

  //   return function executedFunction(...args) {
  //     const later = () => {
  //       clearTimeout(timeout);
  //       func();
  //       console.log('df', func);
  //     };
  
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // };
  
  
  #get_laser_release_position() {
    return { x: this.positionX + 21, y: this.positionY }
  }
  
  #fire_laser() {
    const laser = new DrawLaser(this.#get_laser_release_position().x -3, this.#get_laser_release_position().y - 15)
    this.lasers_fired.push(laser);
  }

  #draw_fired_lasers() {
    this.lasers_fired.forEach(laser => {

      // Remove lasers which are off the canvas otherwise array is filled with laser objects
      if(laser.getLaserPosition().y < 0) {
        this.lasers_fired.splice(this.lasers_fired.indexOf(laser), 1)
      }
      laser.draw()
    });
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