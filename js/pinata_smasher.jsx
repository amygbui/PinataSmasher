import Projectile from './projectile';

import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

    // const projectile = new Projectile(canvas, stage);
    // const projectile2 = new Projectile(canvas, stage);
    // const projectile3 = new Projectile(canvas, stage);

  const game = new Game(canvas, stage);

  const score = new createjs.Text(`Score: ${game.score}`, "bold 40px Arial", "#000000")
  score.x = 50;
  score.y = 30;
  stage.addChild(score);

  window.stage = stage;
});
