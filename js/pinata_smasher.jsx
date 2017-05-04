import Projectile from './projectile';

import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

    // const projectile = new Projectile(canvas, stage);
    // const projectile2 = new Projectile(canvas, stage);
    // const projectile3 = new Projectile(canvas, stage);

  const game = new Game(canvas, stage);
  window.stage = stage;
});
