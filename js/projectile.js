import Pinata from './pinata';

class Projectile {
  constructor(canvas, stage, score, stats) {
    this.canvas = canvas;
    this.stage = stage;
    this.tick = this.tick.bind(this);
    this.delete = this.delete.bind(this);

    this.interval = setInterval(this.tick, 25);
    this.time = 0;

    this.PinataClass = new Pinata(canvas, stage, score, stats);
    this.pinata = this.PinataClass.generatePinata(this.interval);
    this.xDirection = this.pinata.x > canvas.width / 2 ? -1 : 1;
    this.setVelocity();

    stage.addChild(this.pinata);
  }

  setVelocity() {
    this.x_velocity = Math.random() * 12 * this.xDirection;
    this.y_velocity = (Math.random() * 12) + 33;
  }

  tick(event) {
    this.time += 25;

    const pinata = this.pinata;
    const time = (this.time) / 1000;

    pinata.y = pinata.y - (time * (this.y_velocity - (30 * time)));
    pinata.x = pinata.x + this.x_velocity;

    if (pinata.y > 800) {
      this.delete();
    }

    this.stage.update(event);
  }

  delete() {
    this.PinataClass.deletePinata(this.pinata, this.interval);
  }
}

export default Projectile;
