import Game from './game';
import {
  restart, start, pinataHitPercentage, presentHitPercentage
} from './text';

document.addEventListener('DOMContentLoaded', () => {
  window.stage = stage;
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);
  const game = new Game(canvas, stage);
  const { score, stats } = game;
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
    stage.update();

    setTimeout(() => {
      start.text = `Game over! Your score was ${score.score}`;
      pinataHitPercentage.text = `Pinatas Hit: ${stats.pinataHitPercentage()}%`;
      presentHitPercentage.text = `Presents Avoided: ${100 - stats.presentHitPercentage()}%`;
      game.end();
      resize(start, pinataHitPercentage, presentHitPercentage);
      stage.addChild(
        start, restart,
        pinataHitPercentage, presentHitPercentage,
      );
    }, 61000);
    // change time back to 61 seconds when in production
  });
});

function resize(...texts) {
  texts.forEach(text => {
    const width = text.getBounds().width;
    text.x = (900 - width) / 2;
  })
}
