document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);

  const text = new createjs.Text("Piñata Smasher", "36px Rock Salt", "#000");
  text.x = 275;
  text.y = 100;

  const pinata = new createjs.Bitmap('./images/pinatas/vonroo.gif');
  pinata.x = 100;
  pinata.y = 300;

  stage.addChild(pinata);
  stage.addChild(text);

  stage.update();

  createjs.Ticker.on("tick", stage);
});
