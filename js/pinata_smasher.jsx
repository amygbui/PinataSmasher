import Pinata from './pinata';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

  const pinata = new Pinata(canvas, stage).random();
  stage.addChild(pinata);

  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.setFPS(40);

  // const y_velocity = Math.random() * 14;
  // const x_velocity = Math.random() * 10;

  const x_velocity = 5;
  let y_velocity = Math.random() * 14;
  while (y_velocity < 8) {
    y_velocity = Math.random() * 14;
  }

  function tick(event) {
    const time = createjs.Ticker.getTime(true) / 1000;
    pinata.y = pinata.y - ((y_velocity * time) - (0.5 * 9.8 * time * time))
    pinata.x = pinata.x + x_velocity
    stage.update(event);
  }

});
