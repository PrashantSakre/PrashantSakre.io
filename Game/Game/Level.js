import canvas from "../Canvas/Canvas.js";
import shipFactory from "../Ship/shipFactory.js";

export default class Level {
  constructor() {
    this.canvas = canvas;
    this.level1_Enemies = [];
    this.generateEnemies()
  }

  draw() {
    for (const ene of this.level1_Enemies) {
      ene.draw();
    }

    if(this.level1_Enemies.length === 0 ) {
      this.generateEnemies()
    }
  }

  generateEnemies() {
    for (let i = 0; i < 5; i++) {
      const EnemyShip = new shipFactory().createEnemy((Math.abs(this.canvas.width/2) - 350) + (i * 100), 100, '#d89054' )
      this.level1_Enemies.push(EnemyShip)
    }
    for (let i = 0; i < 5; i++) {
      const EnemyShip = new shipFactory().createEnemy((Math.abs(this.canvas.width/2) - 350) + (i * 100), 150, '#d89054' )
      this.level1_Enemies.push(EnemyShip)
    }
    for (let i = 0; i < 5; i++) {
      const EnemyShip = new shipFactory().createEnemy((Math.abs(this.canvas.width/2) - 350) + (i * 100), 200, '#d89054' )
      this.level1_Enemies.push(EnemyShip)
    }
  }

  get_enemies() {
    return this.level1_Enemies
  }

  set_enemies(enemies) {
    this.level1_Enemies = enemies
  }
}