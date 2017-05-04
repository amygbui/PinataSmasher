class Projectile {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.tick = this.tick.bind(this);

    this.generatePinata();
    this.xDirection = this.pinata.x > canvas.width / 2 ? -1 : 1;
    this.setVelocity();

    stage.addChild(this.pinata);
    window.setInterval(this.tick, 25);
    this.time = 0;
  }

  generatePinata() {
    const pinataImages = {
      0: './images/pinatas/vonroo.gif',
      1: './images/pinatas/pantdevil.gif',
      2: './images/pinatas/llama.gif',
      3: './images/pinatas/vira.gif'
    }

    const randomKey = Math.round(Math.random() * 4);
    const pinata = new createjs.Bitmap(pinataImages[randomKey]);

    pinata.x = Math.round(Math.random() * this.canvas.width);
    pinata.y = 650;
    this.pinata = pinata;
  }

  setVelocity() {
    this.x_velocity = Math.random() * 8 * this.xDirection;
    this.y_velocity = Math.random() * 14;

    while (this.y_velocity < 8) {
      this.y_velocity = Math.random() * 14;
    }
  }

  tick(event) {
    this.time += 25;

    const pinata = this.pinata;
    const time = (this.time) / 1000;

    pinata.y = pinata.y - (time * (this.y_velocity - (4.9 * time)));
    pinata.x = pinata.x + this.x_velocity;

    if (pinata.y > 950) {
      this.stage.removeChild(pinata);
    }

    this.stage.update(event);
  }
}

export default Projectile;
