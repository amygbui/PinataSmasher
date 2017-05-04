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

    // pinata.x = Math.round(Math.random() * this.canvas.width);
    pinata.x = 100;
    pinata.y = 650;
    return pinata;
  }
}

export default Pinata;
