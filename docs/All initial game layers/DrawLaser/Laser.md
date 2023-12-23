```js
import canvas from "../Canvas/Canvas.js";
import DrawLaser from "../DrawLaser/DrawLaser.js";

export default class Laser {
  constructor(positionX, positionY) {
    const canvas = new canvas()
    this.positionX = positionX
    this.positionY = positionY
  }

  drawLaser(position) {  
    const laser = new DrawLaser(100, 300);
    laser.draw();
  }
}
```