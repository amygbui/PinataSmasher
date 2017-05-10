import Score from './score';
import Stats from './stats';
import Timer from './timer';
import Projectile from './projectile';
import { start, restart, pause, resize,
  pinataHitPercentage, presentHitPercentage } from './text';

class Game {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.timer = new Timer(stage);
    this.score = new Score(stage, this.timer);
    this.stats = new Stats(stage);
    this.currentPTickers = {};

    this.start = this.start.bind(this);
    this.generatePinatas = this.generatePinatas.bind(this);
    this.end = this.end.bind(this);
    this.pause = this.pause.bind(this);
  }

  start(time) {
    // createjs.Ticker.addEventListener("tick", this.generatePinatas);

    this.beginGame = setInterval(this.generatePinatas, 2000);
    this.timer.start();
    this.stage.addChild(pause);
    this.stage.update();

    this.endTimer = setTimeout(() => {
      start.text = `Game over! Your score was ${this.score.score}`;
      pinataHitPercentage.text = `Pinatas Hit: ${this.stats.pinataHitPercentage()}%`;
      presentHitPercentage.text = `Presents Avoided: ${100 - this.stats.presentHitPercentage()}%`;
      this.end();
      resize(start, pinataHitPercentage, presentHitPercentage);
      this.stage.addChild(
        start, restart, //pause,
        pinataHitPercentage, presentHitPercentage
      );
    }, time);
  }

  generatePinatas() {
    const numPinatas = (Math.random() * 4) + 1;
    for (let i = 0; i < numPinatas; i++) {
      const p = new Projectile(this.canvas, this.stage, this.score, this.stats, this.currentPTickers);
      this.currentPTickers[p.interval] = p;
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
    clearInterval(this.endTimer);
    Object.keys(this.currentPTickers).forEach(int => clearInterval(int));
    this.timer.pause();
  }

  unpause(time) {
    const pinatas = Object.values(this.currentPTickers);
    pinatas.forEach(pinata => pinata.setMotion());
    this.start(time);
  }
}

export default Game;
