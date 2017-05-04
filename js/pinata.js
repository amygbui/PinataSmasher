class Pinata {
  constructor(canvas, stage, score) {
    this.canvas = canvas;
    this.stage = stage;
    this.score = score;

    this.deletePinata = this.deletePinata.bind(this);
  }

  generatePinata(interval) {
    const pinataImages = {
      0: './images/pinatas/vonroo.gif',
      1: './images/pinatas/pantdevil.gif',
      2: './images/pinatas/llama.gif',
      3: './images/pinatas/vira.gif'
    }

    const randomKey = Math.round(Math.random() * 4);
    const pinata = new createjs.Bitmap(pinataImages[randomKey]);
    const hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
    // update with pinata.width and height when get new images??
    pinata.hitArea = hit;

    pinata.x = Math.round(Math.random() * this.canvas.width);
    pinata.y = 750;
    this.stage.addChild(this.pinata);

    const score = this.score

    pinata.addEventListener("mouseover", () => {
      this.score.updateScore();
      this.deletePinata(pinata, );
      this.stage.update();
    });

    return pinata;
  }

  deletePinata(pinata, interval) {
    this.stage.removeChild(pinata);
    clearInterval(interval);
  }
}

export default Pinata;
