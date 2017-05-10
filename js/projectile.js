import Pinata from './pinata';

class Projectile {
  constructor(canvas, stage, score, stats, currentPTickers) {
    this.canvas = canvas;
    this.stage = stage;
    this.currentPTickers = currentPTickers;

    this.tick = this.tick.bind(this);
    this.delete = this.delete.bind(this);
    this.setMotion = this.setMotion.bind(this);

    this.setMotion();
    this.time = 0;

    this.PinataClass = new Pinata(canvas, stage, score, stats);
    this.pinata = this.PinataClass.generatePinata(this.interval);
    this.xDirection = this.pinata.x > canvas.width / 2 ? -1 : 1;
    this.setVelocity();

    stage.addChild(this.pinata);
  }

  setVelocity() {
    this.x_velocity = Math.random() * 12 * this.xDirection;
    this.y_velocity = (Math.random() * 10) + 33;
  }

  setMotion() {
    this.interval = setInterval(this.tick, 25);
  }

  tick() {
    this.time += 25;

    const pinata = this.pinata;
    const time = (this.time) / 1000;

    pinata.y = pinata.y - (time * (this.y_velocity - (30 * time)));
    pinata.x = pinata.x + this.x_velocity;
    pinata.rotation += 3 * this.xDirection;

    if (pinata.y > 800) {
      this.delete();
    }

    this.stage.update();
  }

  delete() {
    this.PinataClass.deletePinata(this.pinata, this.interval);
    const keys = Object.keys(this.currentPTickers);
    this.currentPTickers = keys.filter(a => a !== this.interval);
  }
}

export default Projectile;
