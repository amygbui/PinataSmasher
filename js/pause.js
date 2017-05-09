class Pause {
  constructor(game, stage) {
    this.game = game;
    this.stage = stage;

    this.createButtons();
    game.stage.addChild(this.pause);

    this.pauseGame = this.pauseGame.bind(this);
    this.unpauseGame = this.unpauseGame.bind(this);
    this.addClick = this.addClick.bind(this);

    this.paused = false;
    this.addClick(this.play);
    this.addClick(this.pause);
  }

  createButtons() {
    this.pause = new createjs.Bitmap("./images/pause.png");
    this.pause.y = 675;
    this.pause.x = 15;

    this.play = new createjs.Bitmap("./images/play.png");
    this.play.y = 675;
    this.play.x = 15;

    const hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, 53, 53);
    this.stage.update();
    this.pause.hitArea = hit;
    this.play.hitArea = hit;
  }

  addClick(button) {
    console.log(this.paused);

    button.addEventListener("click", () => {
      if (this.paused) {
        this.unpauseGame();
      } else {
        this.pauseGame();
      }

      console.log(this.paused);
      this.stage.update();
    })
  }

  pauseGame() {
    this.stage.removeChild(this.pause);
    this.stage.addChild(this.play);
    this.paused = true;
    this.game.pause();
  }

  unpauseGame() {
    this.stage.removeChild(this.play);
    this.stage.addChild(this.pause);
    this.paused = false;
    this.game.unpause();
  }
}

export default Pause;
