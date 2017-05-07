 import Projectile from './projectile';

class Score {
  constructor(stage) {
    this.stage = stage;
    this.score = 0;
    this.fixWidth = this.fixWidth.bind(this);
    this.updateScore = this.updateScore.bind(this);

    this.scoreText = new createjs.Text(`Score: ${this.score}`, "bold 45px Gloria Hallelujah", "#000000");
    this.scoreText.y = 15;
    this.fixWidth();

    stage.addChild(this.scoreText);
  }

  fixWidth() {
    const startWidth = this.scoreText.getBounds().width;
    this.scoreText.x = (900 - startWidth) / 2;
  }

  updateScore(type) {
    if (type === "pinata") {
      this.score += 10;
    } else {
      this.score -= 50;
      this.stage.removeAllChildren();
      this.stage.addChild(this.scoreText);
    }

    this.scoreText.text = `Score: ${this.score}`;
    this.fixWidth();
  }

  reset() {
    this.score = 0;
  }
}

export default Score;
