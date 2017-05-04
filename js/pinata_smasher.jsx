import Pinata from './pinata';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

  const pinata = new Pinata(canvas, stage).random();
  stage.addChild(pinata);

  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.setFPS(40);

  function tick(event) {
    pinata.x = pinata.x + 3;
    stage.update(event);
  }
});
