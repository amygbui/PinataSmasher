import Score from './score';
import Stats from './stats'
import Projectile from './projectile';

class Game {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.score = new Score(stage);
    this.stats = new Stats(stage);

    this.start = this.start.bind(this);
    this.generatePinatas = this.generatePinatas.bind(this);
    this.end = this.end.bind(this);
  }

  start() {
    this.beginGame = setInterval(this.generatePinatas, 3000);
  }

  generatePinatas() {
    const numPinatas = (Math.random() * 4) + 1;
    for (let i = 0; i < numPinatas; i++) {
      new Projectile(this.canvas, this.stage, this.score, this.stats);
    }
  }

  end() {
    this.score.reset();
    this.stats.reset();
    this.stage.removeAllChildren();
    clearInterval(this.beginGame);
  }
}

export default Game;
