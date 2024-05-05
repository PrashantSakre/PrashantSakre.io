import rectangle from "../Rectangle/rectangle.js";

export default class DrawEnemyShip {
  constructor (positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.rect_base = new rectangle(40, 8, color);
    this.rect_body = new rectangle(25, 8, color);
    this.rect_gun = new rectangle(7, 8, color);

    this.l1 = new rectangle(30, 4, color)
    this.l2 = new rectangle(50, 4, color)
    this.l10 = new rectangle(10, 4, color)
    this.l20 = new rectangle(20, 4, color)
    this.l15 = new rectangle(15, 4, color)
    this.logRect = new rectangle(70, 4, color)
    this.l30 = new rectangle(30, 4, color)
    this.l5 = new rectangle(5, 4, color)
    this.blackRect = new rectangle(5, 5, 'black');
  }

  draw(animation_expression) {
    this.animate_expression(animation_expression)
  }

  animate_expression(steps) {
    if(steps <= -15) {
      this.getEnemyLayer('enemyLayer3');
    }
    if(steps <= 0 && steps > -15) {
      this.getEnemyLayer('enemyLayer2');
    }
    if(steps > 0 && steps <= 30) {
      this.getEnemyLayer('enemyLayer1');
    }
  }

  getEnemyLayer(layer) {
    switch (layer) {

      case 'enemyLayer1':
        this.l1.draw(this.positionX + 20, this.positionY)

        this.l2.draw(this.positionX + 10, this.positionY + 4)

        this.l20.draw(this.positionX, this.positionY + 8)
        this.blackRect.draw(this.positionX + 20, this.positionY + 8)
        this.l20.draw(this.positionX + 25, this.positionY + 8)
        this.blackRect.draw(this.positionX + 45, this.positionY + 8)
        this.l20.draw(this.positionX + 50, this.positionY + 8)

        this.logRect.draw(this.positionX, this.positionY + 12)

        this.l30.draw(this.positionX, this.positionY + 16)
        this.blackRect.draw(this.positionX + 30, this.positionY + 16)
        this.blackRect.draw(this.positionX + 35, this.positionY + 16)
        this.l30.draw(this.positionX + 40, this.positionY + 16)

        this.logRect.draw(this.positionX, this.positionY + 20)

        this.l15.draw(this.positionX +5, this.positionY + 24)
        this.l10.draw(this.positionX +30, this.positionY + 24)
        this.l15.draw(this.positionX +50, this.positionY + 24)

        this.l10.draw(this.positionX +2, this.positionY + 28)
        this.l10.draw(this.positionX +58, this.positionY + 28)

        this.l5.draw(this.positionX + 10, this.positionY + 32)
        this.l5.draw(this.positionX + 54, this.positionY + 32)
        break;
      case 'enemyLayer2':
        this.l1.draw(this.positionX + 20, this.positionY)

        this.l2.draw(this.positionX + 10, this.positionY + 4)

        this.l20.draw(this.positionX, this.positionY + 8)
        this.blackRect.draw(this.positionX + 20, this.positionY + 8)
        this.l20.draw(this.positionX + 25, this.positionY + 8)
        this.blackRect.draw(this.positionX + 45, this.positionY + 8)
        this.l20.draw(this.positionX + 50, this.positionY + 8)

        this.logRect.draw(this.positionX, this.positionY + 12)

        this.l30.draw(this.positionX, this.positionY + 16)
        this.blackRect.draw(this.positionX + 30, this.positionY + 16)
        this.blackRect.draw(this.positionX + 35, this.positionY + 16)
        this.l30.draw(this.positionX + 40, this.positionY + 16)

        this.logRect.draw(this.positionX, this.positionY + 20)

        this.l15.draw(this.positionX +5, this.positionY + 24)
        this.l10.draw(this.positionX +30, this.positionY + 24)
        this.l15.draw(this.positionX +50, this.positionY + 24)

        this.l10.draw(this.positionX +2, this.positionY + 28)
        this.l10.draw(this.positionX +58, this.positionY + 28)

        this.l5.draw(this.positionX , this.positionY + 32)
        this.l5.draw(this.positionX + 64, this.positionY + 32)
        break;
      case 'enemyLayer3':
        this.l1.draw(this.positionX + 20, this.positionY)

        this.l2.draw(this.positionX + 10, this.positionY + 4)

        this.logRect.draw(this.positionX, this.positionY + 8)

        this.logRect.draw(this.positionX, this.positionY + 12)

        this.l30.draw(this.positionX, this.positionY + 16)
        this.blackRect.draw(this.positionX + 30, this.positionY + 16)
        this.blackRect.draw(this.positionX + 35, this.positionY + 16)
        this.l30.draw(this.positionX + 40, this.positionY + 16)

        this.logRect.draw(this.positionX, this.positionY + 20)

        this.l15.draw(this.positionX +5, this.positionY + 24)
        this.l10.draw(this.positionX +30, this.positionY + 24)
        this.l15.draw(this.positionX +50, this.positionY + 24)

        this.l10.draw(this.positionX +2, this.positionY + 28)
        this.l10.draw(this.positionX +58, this.positionY + 28)

        this.l5.draw(this.positionX , this.positionY + 32)
        this.l5.draw(this.positionX + 64, this.positionY + 32)
        break;

      default:
        break;
    }
  }

}
