class Canvas {
  constructor() {
    this.canvas = document.getElementById("game-canvs");
    this.canvas.width = window.innerWidth - 5;
    this.canvas.height = window.innerHeight - 7;
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  clear() {
    // console.log(this.canvas.width, this.canvas.height);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

const canvas = new Canvas()

export default canvas
