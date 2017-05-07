const pinataImages = {
  0: './images/pinata.png',
  1: './images/pinata.png',
  2: './images/pinata.png',
  3: './images/pinata.png',
  4: './images/presentpink.png',
  5: './images/presentpurple.png'
}

const droppedCandies = {
  0: './images/candy1.png',
  1: './images/candy2.png',
  2: './images/candy2.png',
  3: './images/candy1.png'
}

class Pinata {
  constructor(canvas, stage, score, stats) {
    this.canvas = canvas;
    this.stage = stage;
    this.score = score;
    this.stats = stats;

    this.generatePinata = this.generatePinata.bind(this);
    this.smashPinata = this.smashPinata.bind(this);
    this.dropCandy = this.dropCandy.bind(this);
    this.deletePinata = this.deletePinata.bind(this);
  }

  generatePinata(interval) {
    const randomKey = Math.round(Math.random() * 6);
    const pinata = new createjs.Bitmap(pinataImages[randomKey]);

    if (randomKey === 4 || randomKey === 5) {
      pinata.type = "bomb";
      this.stats.increaseTotalPresents();
    } else {
      pinata.type = "pinata";
      this.stats.increaseTotalPinatas();
    }

    const hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, 90, 90);
    pinata.hitArea = hit;

    pinata.x = Math.round(Math.random() * this.canvas.width);
    pinata.y = 750;
    this.stage.addChild(this.pinata);

    pinata.addEventListener("mouseover", () => {
      this.score.updateScore(pinata.type);

      if (pinata.type === "pinata") {
        this.smashPinata(pinata);
        this.dropCandy(pinata);
        this.stats.increaseHitPinatas();
      } else if (pinata.type === "bomb") {
        this.stats.increaseHitPresents();
      }

      this.deletePinata(pinata, interval);
      this.stage.update();
    });

    return pinata;
  }

  smashPinata(pinata) {
    const candy = new createjs.Bitmap("./images/popcandy.png");
    candy.x = pinata.x;
    candy.y = pinata.y;
    this.stage.addChild(candy);
    setTimeout(() => this.stage.removeChild(candy), 750);
  }

  dropCandy(pinata) {
    const randomKey = Math.round(Math.random() * 4);
    const droppedCandy = new createjs.Bitmap(droppedCandies[randomKey]);
    droppedCandy.x = pinata.x;
    droppedCandy.y = (Math.random() * 30) + 700;
    // Fix dropped candy heights once candy images come in
    this.stage.addChild(droppedCandy);
  }

  deletePinata(pinata, interval) {
    this.stage.removeChild(pinata);
    clearInterval(interval);
  }
}

export default Pinata;
