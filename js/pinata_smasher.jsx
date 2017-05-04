import Pinata from './pinata';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

  const pinata = new Pinata().random();
  // debugger
  pinata.x = 100;
  const yPos = Math.round(Math.random() * canvas.height);
  console.log(yPos)
  pinata.y = yPos;
  stage.addChild(pinata);

  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.setFPS(40);
  
  function tick(event) {
    pinata.x = pinata.x + 3;
    // if (pinata.x > stage.canvas.width) { pinata.x = 0; }
    stage.update(event);
  }

  // createjs.Ticker.on("tick", stage);
});
