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
      3: './images/pinatas/vira.gif',
      4: './images/pinatas/bomb.png'
    }

    const randomKey = Math.round(Math.random() * 5);
    const pinata = new createjs.Bitmap(pinataImages[randomKey]);
    pinata.type = "pinata";

    if (randomKey === 4) {
      pinata.type = "bomb"
    }

    const hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
    pinata.hitArea = hit;
    // update with pinata.width and height when get new images??

    pinata.x = Math.round(Math.random() * this.canvas.width);
    pinata.y = 750;
    this.stage.addChild(this.pinata);

    pinata.addEventListener("mouseover", () => {
      this.score.updateScore(pinata.type);
      this.deletePinata(pinata, interval);
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
