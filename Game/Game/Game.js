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
    this.player_ship.draw();
    this.level.draw();
  }

  #checkEnemyAndLaserCollision() {
    const playerLasers = this.player_ship.get_lasers();
    const Enemies = this.level.get_enemies();
    
    playerLasers.forEach(fired_laser => {
      
      const laser = fired_laser.getLaserPosition()
      
      this.level.get_enemies().forEach(enemy => {
        const Ene = enemy.get_corner_coordinates();

        if(this.#find_collision_with_bullet(Ene[3].x, Ene[3].y, Ene[1].x, Ene[1].y, laser.x, laser.y)) {
          Enemies.splice(Enemies.indexOf(enemy), 1)
          playerLasers.splice(playerLasers.indexOf(fired_laser), 1)
          this.level.set_enemies(Enemies)
          this.player_ship.set_lasers(playerLasers)
          this.scoreText.setScore(this.scoreText.getScore() + 1)
        }
      })
    })
  } 

  // #checkEnemyLaserCollisionWithPlayer() {
  //   const playerLasers = this.player_ship.get_lasers();
  //   const Enemies = this.level.get_enemies();
    
  //   playerLasers.forEach(fired_laser => {
      
  //     const laser = fired_laser.getLaserPosition()
      
  //     this.level.get_enemies().forEach(enemy => {
  //       const Ene = enemy.get_corner_coordinates();

  //       if(this.#find_collision_with_bullet(Ene[3].x, Ene[3].y, Ene[1].x, Ene[1].y, laser.x, laser.y)) {
  //         Enemies.splice(Enemies.indexOf(enemy), 1)
  //         playerLasers.splice(playerLasers.indexOf(fired_laser), 1)
  //         this.level.set_enemies(Enemies)
  //         this.player_ship.set_lasers(playerLasers)
  //         this.scoreText.setScore(this.scoreText.getScore() + 1)
  //       }
  //     })
  //   })
  // } 


  #find_collision_with_bullet(x1, y1, x2, y2, x, y){ 
    if (x > x1 && x < x2 && y < y1 && y > y2) return true; 
    return false; 
  } 
}