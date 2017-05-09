import Game from './game';
import Pause from './pause';
import {
  restart, start, resize,
  pinataHitPercentage, presentHitPercentage
} from './text';

document.addEventListener('DOMContentLoaded', () => {
  window.stage = stage;
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);
  const game = new Game(canvas, stage);
  const { score, stats } = game;
  const pause = new Pause(game, stage);
  stage.enableMouseOver(20);

  const hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(0, -270, canvas.width, canvas.height);
	start.hitArea = hit;

  resize(restart, start, pinataHitPercentage, presentHitPercentage);
  stage.addChild(start, restart, pinataHitPercentage, presentHitPercentage);
  stage.update();

  start.addEventListener("click", (e) => {
    stage.removeChild(start, restart, pinataHitPercentage, presentHitPercentage);
    restart.text = "(Click anywhere to restart)";
    game.start();
  });
});
