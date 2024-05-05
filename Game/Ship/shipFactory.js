import EnemyShip2 from "./EnemyShip2.js"
import EnemyShip from "./EnemyShip.js"
import PlayerShip from "./PlayerShip.js"

export default class shipFactory {
  createPlayer(color) {
    return new PlayerShip(color)
  }

  createEnemy(positionX, positionY, color) {
    return new EnemyShip(positionX, positionY, color)
  }

  createEnemy2(positionX, positionY, color) {
    return new EnemyShip2(positionX, positionY, color)
  }
}
