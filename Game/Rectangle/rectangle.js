import canvas from "../Canvas/Canvas.js";

export default class rectangle {

  constructor(width = 10, height = 10, color) {
    this.canvas = canvas
    this.width = width
    this.height = height
    this.color = color
  }

  draw(positionX, positionY) {
    this.canvas.ctx.fillStyle = this.color;
    this.canvas.ctx.fillRect(positionX, positionY, this.width, this.height )
  }
}
