import Projectile from './projectile';

class Game {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.generatePinatas = this.generatePinatas.bind(this);

    window.setInterval(this.generatePinatas, 3000);
  }

  generatePinatas() {
    const numPinatas = (Math.random() * 4) + 1;

    for (let i = 0; i < numPinatas; i++) {
      new Projectile(this.canvas, this.stage);
    }
  }
}

export default Game;
