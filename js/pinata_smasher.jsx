import Projectile from './projectile';

import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

    // const projectile = new Projectile(canvas, stage);
    // const projectile2 = new Projectile(canvas, stage);
    // const projectile3 = new Projectile(canvas, stage);

  const game = new Game(canvas, stage);

  const score = new createjs.Text(`Score: ${game.score}`, "bold 40px Arial", "#000000");
  score.x = 50;
  score.y = 30;
  stage.addChild(score);

  const start = new createjs.Text("Click here to start", "bold 30px Arial", "#000000");
  start.addEventListener("click", (e) => {
    stage.removeChild(start);
    game.start();
    stage.update();
  });

  start.x = 350;
  start.y = 300;
  stage.addChild(start);

  stage.update();


  window.setTimeout(game.end, 60000);
});
