export default class Expression {
  contructor() {
    this.animation_expression = -20;
  }

  draw() {
    this.animation_expression++;
    if (this.animation_expression === 20) this.animation_expression = -20
  }

  get_expresion() {
    return this.animation_expression
  }
}
