import Projectile from './projectile';
import Score from './score';
import Game from './game';
import Stats from './stats';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);
  stage.enableMouseOver(10);

  window.stage = stage;

  const score = new Score(stage, game);
  const stats = new Stats(stage);
  const game = new Game(canvas, stage, score, stats);

  const start = new createjs.Text("Click anywhere to start", "bold 35px Gloria Hallelujah", "#000000");
  const hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(-300, -300, canvas.width, canvas.height);
	start.hitArea = hit;

  const restart = new createjs.Text("", "bold 25px Gloria Hallelujah", "#000000");
  const pinataHitPercentage = new createjs.Text(`Pinatas Hit: ${stats.pinataHitPercentage()}`, "bold 35px Gloria Hallelujah", "#000000");
  pinataHitPercentage.y = 350;
  const presentHitPercentage = new createjs.Text(`Presents Hit: ${stats.presentHitPercentage()}`, "bold 35px Gloria Hallelujah", "#000000");
  presentHitPercentage.y = 400;

  start.addEventListener("click", (e) => {
    stage.removeChild(start);
    stage.removeChild(restart);
    stage.removeChild(pinataHitPercentage);
    stage.removeChild(presentHitPercentage);

    score.score = 0;
    score.scoreText.text = `Score: ${score.score}`;

    restart.text = "(Click anywhere to restart)"
    restart.x = resize(restart);
    restart.y = 450;

    game.start();
    stage.update(event);

    setTimeout(() => {
      start.text = `Game over! Your score was ${score.score}`;
      start.x = resize(start);
      start.y = 270;

      pinataHitPercentage.text = `Pinatas Hit: ${stats.pinataHitPercentage()}%`;
      pinataHitPercentage.x = resize(pinataHitPercentage);
      presentHitPercentage.text = `Presents Hit: ${stats.presentHitPercentage()}%`;
      presentHitPercentage.x = resize(presentHitPercentage);

      game.end();
      stage.addChild(score.scoreText);
      stage.addChild(start);
      stage.addChild(restart);
      stage.addChild(pinataHitPercentage);
      stage.addChild(presentHitPercentage);
      console.log(restart.y);
    }, 3000);
    // change time back to 60 seconds when in production
  });

  start.x = resize(start);
  start.y = 350;
  stage.addChild(start);
  stage.addChild(restart);
  stage.update();
});

function resize(text) {
  const width = text.getBounds().width;
  return (900 - width) / 2;
}

function reset(score, stats) {
  score.score = 0;
  stats.hitPinatas = 0;
  stats.totalPinatas = 0;
  stats.hitPresents = 0;
  stats.totalPresents = 0;
}
