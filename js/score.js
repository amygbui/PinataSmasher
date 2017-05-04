import Projectile from './projectile';

class Score {
  constructor(stage) {
    this.stage = stage;
    this.score = 0;
    this.updateScore = this.updateScore.bind(this);

    this.scoreText = new createjs.Text(`Score: ${this.score}`, "bold 40px Arial", "#000000");
    this.scoreText.x = 50;
    this.scoreText.y = 30;

    stage.addChild(this.scoreText);
  }

  updateScore() {
    this.score += 10;
    this.scoreText.text = `Score: ${this.score}`;
  }
}

export default Score;
