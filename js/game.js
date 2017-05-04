import Projectile from './projectile';

class Game {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.score = 0;

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
      new Projectile(this.canvas, this.stage);
    }
  }

  end() {
    clearInterval(this.beginGame);
  }
}

export default Game;
