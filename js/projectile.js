import Pinata from './pinata';

class Projectile {
  constructor(canvas, stage, score, stats, currentPTickers, timer) {
    this.canvas = canvas;
    this.stage = stage;
    this.currentPTickers = currentPTickers;
    this.timer = timer;

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
    this.y_velocity = (Math.random() * 10) + 33;
    this.x_velocity = Math.random() * 12 * this.xDirection;
    this.fallRate = 30;

    if (this.timer.timeLeft < 20) {
      this.y_velocity += 20;
      this.x_velocity += (4 * this.xDirection);
      this.fallRate = 53;
    } else if (this.timer.timeLeft < 40) {
      this.y_velocity += 15;
      this.x_velocity += (2 * this.xDirection);
      this.fallRate = 45;
    }
  }

  setMotion() {
    this.interval = setInterval(this.tick, 25);
  }

  tick() {
    this.time += 25;

    const pinata = this.pinata;
    const time = (this.time) / 1000;
    const movement = this.fallRate * time

    pinata.y = pinata.y - (time * (this.y_velocity - (movement)));
    pinata.x = pinata.x + this.x_velocity;
    pinata.rotation += 3.5 * this.xDirection;

    if (pinata.y > 820) {
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
