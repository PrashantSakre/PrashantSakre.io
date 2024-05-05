import canvas from "../Canvas/Canvas.js";
import shipFactory from "../Ship/shipFactory.js";

export default class Level {
  constructor() {
    this.canvas = canvas;
    this.enemies = [];
    this.generateLevel1Enemies();
    this.level = 1;
  }

  draw() {
    for (const ene of this.enemies) {
      ene.draw();
    }

    if (this.enemies.length === 0) {
      this.generateLevel2Enemies();
      this.level = 2;
    }
  }

  get_level() {
    return this.level;
  }

  generateLevel2Enemies() {
    this.generate_row_of_enemy2Ships(100)
    this.generate_row_of_enemy2Ships(200);
  }

  generateLevel1Enemies() {
    this.generate_row_of_enemy1Ships(70)
    this.generate_row_of_enemy1Ships(150);
    this.generate_row_of_enemy1Ships(230);
  }

  generate_row_of_enemy2Ships(axisY) {
    for (let i = 0; i < 5; i++) {
      const EnemyShip = new shipFactory().createEnemy2((Math.abs(this.canvas.width / 2) - 290) + (i * 100), axisY, '#3F704D')
      this.enemies.push(EnemyShip)
    }
  }

  generate_row_of_enemy1Ships(axisY) {
    for (let i = 0; i < 5; i++) {
      const EnemyShip = new shipFactory().createEnemy((Math.abs(this.canvas.width / 2) - 300) + (i * 100), axisY, '#d89054')
      this.enemies.push(EnemyShip)
    }
  }

  reset_game() {
    this.enemies = [];
    this.level = 1;
    this.generateLevel1Enemies();
  }

  get_enemies() {
    return this.enemies
  }

  set_enemies(enemies) {
    this.enemies = enemies
  }
}
