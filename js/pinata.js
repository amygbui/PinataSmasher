class Pinata {
  constructor() {
    this.pinatas = {
      0: './images/pinatas/vonroo.gif',
      1: './images/pinatas/pantdevil.gif',
      2: './images/pinatas/llama.gif',
      3: './images/pinatas/vira.gif'
    }
  }

  random() {
    const randomKey = Math.round(Math.random() * 4);
    return new createjs.Bitmap(this.pinatas[randomKey]);
  }
}

export default Pinata;
