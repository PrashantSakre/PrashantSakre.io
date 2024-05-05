export default class Stats {
  constructor() {
    this.lives = document.getElementById('lives');
    this.score = document.getElementById('score');
    this.max_score = document.getElementById('max_score');
    this.max_score.innerText = this.getLocalMaxScore();
  }

  setLives(lives) {
    this.lives.innerText = lives
  }

  getLives() {
    return Number.parseInt(this.lives.innerText)
  }

  setMaxScore(score) {
    this.max_score.innerText = score
  }

  setScore(score) {
    if(this.getLocalMaxScore() < score) {
      this.setLocalMaxScore(score)
      this.setMaxScore(score)
    }
    this.score.innerText = score
  }

  getScore() {
    return Number.parseInt(this.score.innerText)
  }

  setLocalMaxScore(value) {
    localStorage.setItem('max_score', value)
  }

  getLocalMaxScore() {
    return Number.parseInt(localStorage.getItem('max_score') || 0)
  }
}
