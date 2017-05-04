import Projectile from './projectile';
import Score from './score';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

  const score = new Score(stage);
  const game = new Game(canvas, stage, score);

  const start = new createjs.Text("Click anywhere to start", "bold 30px Arial", "#000000");
  const hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(-300, -300, canvas.width, canvas.height);
	start.hitArea = hit;

  start.addEventListener("click", (e) => {
    stage.removeChild(start);
    score.score = 0;
    score.scoreText.text = `Score: ${score.score}`;
    game.start();
    stage.update();
  });

  start.x = 300;
  start.y = 300;
  stage.addChild(start);

  stage.update();

  setTimeout(() => {
    game.end();
    stage.addChild(start);
  }, 60000);
});
