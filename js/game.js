import Score from './score';
import Stats from './stats';
import Timer from './timer';
import Projectile from './projectile';
import { pause } from './text';

class Game {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.timer = new Timer(stage);
    this.score = new Score(stage, this.timer);
    this.stats = new Stats(stage);

    this.start = this.start.bind(this);
    this.generatePinatas = this.generatePinatas.bind(this);
    this.end = this.end.bind(this);
  }

  start() {
    this.beginGame = setInterval(this.generatePinatas, 2000);
    this.timer.start();
    this.stage.addChild(pause.pause);
    this.stage.update();
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
    this.timer.reset();

    this.stage.removeAllChildren();
    this.stage.addChild(this.score.scoreText, this.timer.time);
    clearInterval(this.beginGame);
  }

  pause() {
    clearInterval(this.beginGame);
    this.timer.pause();
  }

  unpause() {
    this.timer.unpause();
    this.start();
  }
}

export default Game;
