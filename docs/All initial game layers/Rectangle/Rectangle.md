```js
export default class canvas {
  constructor() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  clear() {
    console.log(this.canvas.width, this.canvas.height);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default class rectangle extends canvas {

  constructor(width = 10, height = 10, color) {
    super()
    this.width = width
    this.height = height
    this.color = color
  }

  draw(positionX, positionY) {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(positionX, positionY, this.width, this.height )
  }
}

```