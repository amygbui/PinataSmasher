import Projectile from './projectile';
import Score from './score';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);
  stage.enableMouseOver(10);

  window.stage = stage;

  const score = new Score(stage, game);
  const game = new Game(canvas, stage, score);

  const start = new createjs.Text("Click anywhere to start", "bold 35px Gloria Hallelujah", "#000000");
  const hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(-300, -300, canvas.width, canvas.height);
	start.hitArea = hit;

  start.addEventListener("click", (e) => {
    stage.removeChild(start);
    score.score = 0;
    score.scoreText.text = `Score: ${score.score}`;
    game.start();
    stage.update(event);

    setTimeout(() => {
      start.text = `Game over! Your score was ${score.score}`
      start.x = resize(start);

      const restart = new createjs.Text("(Click anywhere to restart)", "bold 25px Gloria Hallelujah", "#000000");
      restart.x = resize(restart);
      restart.y = start.y + 50;

      game.end();
      stage.addChild(score.scoreText);
      stage.addChild(start);
      stage.addChild(restart);
    }, 60000);
  });

  start.x = resize(start);
  start.y = 350;
  stage.addChild(start);

  stage.update();
});

function resize(text) {
  const width = text.getBounds().width;
  return (900 - width) / 2;
}
