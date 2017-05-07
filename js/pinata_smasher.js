import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  window.stage = stage;
  const canvas = document.getElementById('pinata');
  const stage = new createjs.Stage(canvas);
  const game = new Game(canvas, stage);
  const { score, stats } = game;
  stage.enableMouseOver(20);

  const restart = new createjs.Text("(Click anywhere to start)", "bold 25px Gloria Hallelujah", "#000000");
  restart.y = 480;
  const start = new createjs.Text("Welcome to Pinata Smasher!", "bold 35px Gloria Hallelujah", "#000000");
  const hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(0, -270, canvas.width, canvas.height);
	start.hitArea = hit;
  start.y = 270;
  const pinataHitPercentage = new createjs.Text("Hit as many pinatas as you can,", "bold 35px Gloria Hallelujah", "#000000");
  pinataHitPercentage.y = 350;
  const presentHitPercentage = new createjs.Text("but don't destroy any presents!", "bold 35px Gloria Hallelujah", "#000000");
  presentHitPercentage.y = 400;

  const timeLeft = new createjs.Text("60", "bold 35px Gloria Hallelujah", "#000000");
  timeLeft.x = 840;
  timeLeft.y = 670;

  resize(restart, start, pinataHitPercentage, presentHitPercentage);
  stage.addChild(start, restart, pinataHitPercentage, presentHitPercentage, timeLeft);
  stage.update();

  start.addEventListener("click", (e) => {
    stage.removeChild(start, restart, pinataHitPercentage, presentHitPercentage);
    score.scoreText.text = `Score: ${score.score}`;
    restart.text = "(Click anywhere to restart)";

    game.start();
    stage.update();

    let time = 60;
    const timer = setInterval(() => {
      time -= 1;
      timeLeft.text = time;
      stage.update();
    }, 1000)

    setTimeout(() => {
      clearInterval(timer);
      start.text = `Game over! Your score was ${score.score}`;
      pinataHitPercentage.text = `Pinatas Hit: ${stats.pinataHitPercentage()}%`;
      presentHitPercentage.text = `Presents Avoided: ${100 - stats.presentHitPercentage()}%`;
      timeLeft.text = 60;
      game.end();
      resize(start, pinataHitPercentage, presentHitPercentage);
      stage.addChild(
        start, restart, score.scoreText, timeLeft,
        pinataHitPercentage, presentHitPercentage,
      );
    }, 61000);
    // change time back to 60 seconds when in production
  });
});

function resize(...texts) {
  texts.forEach(text => {
    const width = text.getBounds().width;
    text.x = (900 - width) / 2;
  })
}
