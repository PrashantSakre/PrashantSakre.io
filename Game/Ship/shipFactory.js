import EnemyShip from "./EnemyShip.js"
import PlayerShip from "./PlayerShip.js"

export default class shipFactory {
  // create(type, color) {
  //   if(type == 'player') return new PlayerShip(color)
  //   if(type == 'enemy') return new EnemyShip(200, 150, color)
  // }

  createPlayer(color) {
    return new PlayerShip(color)
  }

  createEnemy(positionX, positionY, color) {
    return new EnemyShip(positionX, positionY, color)
  }
}


// class Ship {
//   constructor(type, color) {
//     this.type = type
//     this.color = color
//   }
// }