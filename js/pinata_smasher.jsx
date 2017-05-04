import Pinata from './pinata';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

  const text = new createjs.Text("Piñata Smasher", "36px Rock Salt", "#000");
  text.x = 275;
  text.y = 100;

  const pinata = new Pinata().random();
  // debugger
  pinata.x = 100;
  const yPos = Math.round(Math.random() * canvas.height);
  console.log(yPos)
  pinata.y = yPos;


  stage.addChild(pinata);
  stage.addChild(text);

  stage.update();

  createjs.Ticker.on("tick", stage);
});
