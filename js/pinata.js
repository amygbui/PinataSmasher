import { yikes, beCareful } from './text';

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
      const pinataSound = new Audio('./sounds/pop.mp3');
      const presentSound = new Audio('./sounds/clang.mp3');
      const sound = pinata.type === "pinata" ? pinataSound : presentSound;
      sound.currentTime = 0;
      sound.play();

      if (pinata.type === "pinata") {
        this.smashPinata(pinata);
        this.dropCandy(pinata);
        this.stats.increaseHitPinatas();
      } else if (pinata.type === "bomb") {
        this.stats.increaseHitPresents();

        // const ouch = new createjs.Text("", "bold 90px Gloria Hallelujah", "#000");
        // ouch.text = "YIKES!";
        // // ouch.y = 300;
        // ouch.y = 270;
        // ouch.x = (900 - ouch.getBounds().width) / 2;
        // const beCareful = new createjs.Text("", "bold 40px Gloria Hallelujah", "#000");
        // beCareful.text = "Be careful!";
        // beCareful.y = 400;
        // beCareful.x = (900 - beCareful.getBounds().width) / 2;

        this.stage.addChild(yikes, beCareful);
        setTimeout(() => this.stage.removeChild(yikes, beCareful), 1500);
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
