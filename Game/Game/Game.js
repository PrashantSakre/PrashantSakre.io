import shipFactory from "../Ship/shipFactory.js";
import Level from "./Level.js";
import Stats from "./stats.js";

export default class Game {
  constructor() {
    this.scoreText = new Stats();
    this.player_ship = new shipFactory().createPlayer('white');
    this.level = new Level();
  }

  start() {
    this.#checkEnemyAndLaserCollision();
    this.#checkEnemyLaserCollisionWithPlayer();
    this.player_ship.draw();
    this.level.draw();
  }

  #checkEnemyAndLaserCollision() {
    const playerLasers = this.player_ship.get_lasers();
    const Enemies = this.level.get_enemies();

    for (const fired_laser of playerLasers) {
      const laser = fired_laser.getLaserPosition()

      for (const enemy of this.level.get_enemies()) {
        const Ene = enemy.get_corner_coordinates();

        if (this.#find_collision_with_bullet(Ene[3].x, Ene[3].y, Ene[1].x, Ene[1].y, laser.x, laser.y)) {
          Enemies.splice(Enemies.indexOf(enemy), 1)
          playerLasers.splice(playerLasers.indexOf(fired_laser), 1)
          this.level.set_enemies(Enemies)
          this.player_ship.set_lasers(playerLasers)
          this.scoreText.setScore(this.scoreText.getScore() + 1)
        }
      }
    }
  }

  #checkEnemyLaserCollisionWithPlayer() {
    const { x, y } = this.player_ship.get_ship_position();
    const enemies = this.level.get_enemies();

    if (this.level.get_level() === 2) {
      for (const enemy of enemies) {
        const fired_lasers = enemy.get_laser_fired()
        if (fired_lasers.length > 0) {
          for (const laser of fired_lasers) {
            const { x:l_x, y:l_y } = laser.getLaserPosition()
            if(this.#find_collision_with_bullet(x, y+24, x + 40, y, l_x, l_y+10)) {
              console.log( l_x, l_y, x, y)
              console.log("colloid")
              fired_lasers.splice(fired_lasers.indexOf(laser), 1)
              enemy.set_laser_fired(fired_lasers)
              this.scoreText.setScore(0);
              this.level.reset_game();
            }
          }
        }
      }
    }
  }


  #find_collision_with_bullet(x1, y1, x2, y2, x, y) {
    if (x > x1 && x < x2 && y < y1 && y > y2) return true;
    return false;
  }
}
