export default class Stats {
  constructor() {
    this.lives = document.getElementById('lives');
    this.score = document.getElementById('score');
  }

  setLives(lives) {
    this.lives.innerText = lives
  }

  getLives() {
    return parseInt(this.lives.innerText)
  }

  setScore(score) {
    this.score.innerText = score
  }

  getScore() {
    return parseInt(this.score.innerText)
  }
}