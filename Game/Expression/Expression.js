import { speedFactor } from "../SpeedFactor/SpeedFactor.js";

export default class Expression {
  animate = -20;
  contructor() {}

  run() {
    this.animate += speedFactor.getSpeedFactor();
    if (this.animate >= 20) this.animate = -20;
  }

  get_expresion() {
    return this.animate;
  }
}
