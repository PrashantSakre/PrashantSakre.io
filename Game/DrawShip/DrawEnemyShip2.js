import rectangle from "../Rectangle/rectangle.js";

export default class DrawEnemyShip2 {
  constructor(positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.rect_base = new rectangle(40, 8, color);
    this.rect_body = new rectangle(25, 8, color);
    this.rect_gun = new rectangle(7, 8, color);

    this.l1 = new rectangle(30, 5, color)
    this.l2 = new rectangle(50, 5, color)
    this.l10 = new rectangle(10, 5, color)
    this.l20 = new rectangle(20, 5, color)
    this.l15 = new rectangle(15, 5, color)
    this.logRect = new rectangle(50, 5, color)
    this.l30 = new rectangle(30, 5, color)
    this.l40 = new rectangle(40, 5, color)
    this.l5 = new rectangle(5, 5, color)
    this.blackRect = new rectangle(5, 5, 'black');
  }

  draw(animation_expression) {
    this.animate_expression(animation_expression)
  }

  animate_expression(steps) {
    if (steps <= -15) {
      this.getEnemyLayer('enemyLayer3');
    }
    if (steps <= 0 && steps > -15) {
      this.getEnemyLayer('enemyLayer2');
    }
    if (steps > 0 && steps <= 30) {
      this.getEnemyLayer('enemyLayer1');
    }
  }

  getEnemyLayer(layer) {
    switch (layer) {

      case 'enemyLayer1':
        this.l5.draw(this.positionX + 10, this.positionY)
        this.l5.draw(this.positionX + 35, this.positionY)

        this.l5.draw(this.positionX + 15, this.positionY + 5)
        this.l5.draw(this.positionX + 30, this.positionY + 5)

        this.l30.draw(this.positionX + 10, this.positionY + 10)

        this.l10.draw(this.positionX + 5, this.positionY + 15)
        this.l10.draw(this.positionX + 20, this.positionY + 15)
        this.l10.draw(this.positionX + 35, this.positionY + 15)

        this.logRect.draw(this.positionX, this.positionY + 20)

        this.l40.draw(this.positionX + 5, this.positionY + 25)

        this.l10.draw(this.positionX + 10, this.positionY + 30)
        this.l10.draw(this.positionX + 30, this.positionY + 30)

        this.l5.draw(this.positionX + 10, this.positionY + 35)
        this.l5.draw(this.positionX + 35, this.positionY + 35)

        break;
      case 'enemyLayer2':
        this.l5.draw(this.positionX + 20, this.positionY)
        this.l5.draw(this.positionX + 25, this.positionY)

        this.l5.draw(this.positionX + 15, this.positionY + 5)
        this.l5.draw(this.positionX + 30, this.positionY + 5)

        this.l30.draw(this.positionX + 10, this.positionY + 10)

        this.l10.draw(this.positionX + 5, this.positionY + 15)
        this.l10.draw(this.positionX + 20, this.positionY + 15)
        this.l10.draw(this.positionX + 35, this.positionY + 15)

        this.logRect.draw(this.positionX, this.positionY + 20)

        this.l40.draw(this.positionX + 5, this.positionY + 25)

        this.l10.draw(this.positionX + 10, this.positionY + 30)
        this.l10.draw(this.positionX + 30, this.positionY + 30)

        this.l5.draw(this.positionX + 10, this.positionY + 35)
        this.l5.draw(this.positionX + 35, this.positionY + 35)
        break;
      case 'enemyLayer3':
        this.l5.draw(this.positionX + 10, this.positionY)
        this.l5.draw(this.positionX + 35, this.positionY)

        this.l5.draw(this.positionX + 15, this.positionY + 5)
        this.l5.draw(this.positionX + 30, this.positionY + 5)

        this.l30.draw(this.positionX + 10, this.positionY + 10)

        this.l40.draw(this.positionX + 5, this.positionY + 15)
        // this.l10.draw(this.positionX + 20, this.positionY + 15)
        // this.l10.draw(this.positionX + 35, this.positionY + 15)

        this.logRect.draw(this.positionX, this.positionY + 20)

        this.l40.draw(this.positionX + 5, this.positionY + 25)

        this.l10.draw(this.positionX + 10, this.positionY + 30)
        this.l10.draw(this.positionX + 30, this.positionY + 30)

        this.l5.draw(this.positionX + 10, this.positionY + 35)
        this.l5.draw(this.positionX + 35, this.positionY + 35)
        break;

      default:
        break;
    }
  }

}
