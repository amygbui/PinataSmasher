const pinataImages = {
  0: './images/pinata.png',
  1: './images/pinata2.png',
  2: './images/pinata3.png',
  3: './images/pinata.png',
  4: './images/presentpink.png',
  5: './images/presentpurple.png'
}

const droppedCandies = {
  0: './images/candy1.png',
  1: './images/candy2.png',
  2: './images/candy3.png',
  3: './images/candy4.png'
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
    const randomKey = Math.floor(Math.random() * 6);
    const pinata = new createjs.Bitmap(pinataImages[randomKey]);

    if (randomKey === 4 || randomKey === 5) {
      pinata.type = "bomb";
      this.stats.increaseTotalPresents();
    } else {
      pinata.type = "pinata";
      this.stats.increaseTotalPinatas();
    }

    const hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 20, 90, 70);
    pinata.hitArea = hit;

    pinata.x = Math.round(Math.random() * this.canvas.width);
    pinata.y = 800;
    this.stage.addChild(this.pinata);

    pinata.addEventListener("mouseover", () => {
      this.score.updateScore(pinata.type);

      if (pinata.type === "pinata") {
        this.smashPinata(pinata);
        this.dropCandy(pinata);
        this.stats.increaseHitPinatas();
        const sound = new Audio('./sounds/pop.mp3');
        sound.currentTime = 0;
        sound.play();
      } else if (pinata.type === "bomb") {
        this.stats.increaseHitPresents();
        const boom = new createjs.Bitmap('./images/ouch.png');
        boom.x = 150;
        boom.y = 210;
        this.stage.addChild(boom);
        setTimeout(() => this.stage.removeChild(boom), 1500);
        const sound = new Audio('./sounds/clang.mp3')
        sound.currentTime = 0;
        sound.play();
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
    const randomKey = Math.floor(Math.random() * 4);
    const droppedCandy = new createjs.Bitmap(droppedCandies[randomKey]);
    droppedCandy.x = pinata.x;
    droppedCandy.y = (Math.random() * 30) + 680;
    this.stage.addChild(droppedCandy);
  }

  deletePinata(pinata, interval) {
    this.stage.removeChild(pinata);
    clearInterval(interval);
  }
}

export default Pinata;
