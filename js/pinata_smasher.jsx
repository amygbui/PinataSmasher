import Pinata from './pinata';
import Projectile from './projectile';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

  const projectile = new Projectile(canvas, stage);
  const projectile2 = new Projectile(canvas, stage);
  const projectile3 = new Projectile(canvas, stage);
});
