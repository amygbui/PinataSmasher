class Pinata {
  constructor(canvas, stage, score) {
    this.canvas = canvas;
    this.stage = stage;
    this.score = score;

    this.deletePinata = this.deletePinata.bind(this);
  }

  generatePinata(interval) {
    const pinataImages = {
      0: './images/pinata.png',
      1: './images/pinata.png',
      2: './images/pinata.png',
      3: './images/pinata.png',
      4: './images/presentpink.png',
      5: './images/presentpurple.png'
    }

    const randomKey = Math.round(Math.random() * 6);
    const pinata = new createjs.Bitmap(pinataImages[randomKey]);
    pinata.type = "pinata";

    if (randomKey === 4 || randomKey === 5) {
      pinata.type = "bomb"
    }

    const hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, 90, 90);
    pinata.hitArea = hit;
    // update with pinata.width and height when get new images??

    pinata.x = Math.round(Math.random() * this.canvas.width);
    pinata.y = 750;
    this.stage.addChild(this.pinata);

    pinata.addEventListener("mouseover", () => {
      this.score.updateScore(pinata.type);

      if (pinata.type === "pinata") {
        this.smashPinata(pinata);
      }
      
      this.deletePinata(pinata, interval);
      this.stage.update();
    });

    return pinata;
  }

  smashPinata(pinata) {
    const candy = new createjs.Bitmap("./images/popcandy.png")
    candy.x = pinata.x;
    candy.y = pinata.y;
    this.stage.addChild(candy);
    setTimeout(() => this.stage.removeChild(candy), 750);
  }

  deletePinata(pinata, interval) {
    this.stage.removeChild(pinata);
    clearInterval(interval);
  }
}

export default Pinata;
