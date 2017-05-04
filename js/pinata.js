class Pinata {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;

    this.pinatas = {
      0: './images/pinatas/vonroo.gif',
      1: './images/pinatas/pantdevil.gif',
      2: './images/pinatas/llama.gif',
      3: './images/pinatas/vira.gif'
    }
  }

  random() {
    const randomKey = Math.round(Math.random() * 4);
    const pinata = new createjs.Bitmap(this.pinatas[randomKey]);

    pinata.x = 100;
    pinata.y = Math.round(Math.random() * this.canvas.height);
    return pinata;
  }
}

export default Pinata;
