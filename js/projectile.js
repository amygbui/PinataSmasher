import Pinata from './pinata';

class Projectile {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.tick = this.tick.bind(this);

    this.pinata = new Pinata(canvas, stage).random();
    this.xDirection = this.pinata.x > canvas.width / 2 ? -1 : 1;
    stage.addChild(this.pinata);
    createjs.Ticker.addEventListener("tick", this.tick);
    createjs.Ticker.setFPS(40);

    this.setVelocity();
  }

  setVelocity() {
    this.x_velocity = Math.random() * 8 * this.xDirection;
    this.y_velocity = Math.random() * 14;

    while (this.y_velocity < 8) {
      this.y_velocity = Math.random() * 14;
    }
  }

  tick(event) {
    const pinata = this.pinata;
    const time = createjs.Ticker.getTime(true) / 1000;
    pinata.y = pinata.y - (time * (this.y_velocity - (4.9 * time)));
    pinata.x = pinata.x + this.x_velocity;
    this.stage.update(event);
  }
}

export default Projectile;
