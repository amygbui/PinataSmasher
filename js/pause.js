import { play, pause } from './text';

class Pause {
  constructor(game, stage) {
    this.game = game;
    this.stage = stage;

    this.pause = pause;
    this.play = play;
    game.stage.addChild(this.pause);

    this.pauseGame = this.pauseGame.bind(this);
    this.unpauseGame = this.unpauseGame.bind(this);
    this.addClick = this.addClick.bind(this);

    this.paused = false;
    this.addClick(this.play);
    this.addClick(this.pause);
  }

  addClick(button) {
    button.addEventListener("click", () => {
      if (this.paused) {
        this.unpauseGame();
      } else {
        this.pauseGame();
      }

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
    this.game.start();
  }
}

export default Pause;
