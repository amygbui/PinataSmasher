export const resize = (...texts) => {
  texts.forEach(text => {
    const width = text.getBounds().width;
    text.x = (900 - width) / 2;
  })
}

export const restart = new createjs.Text("(Click anywhere to start)", "bold 25px Gloria Hallelujah", "#000000");
restart.y = 480;

export const start = new createjs.Text("Welcome to Pinata Smasher!", "bold 35px Gloria Hallelujah", "#000000");
start.y = 270;

export const pinataHitPercentage = new createjs.Text("Hit as many pinatas as you can,", "bold 35px Gloria Hallelujah", "#000000");
pinataHitPercentage.y = 350;

export const presentHitPercentage = new createjs.Text("but don't destroy any presents!", "bold 35px Gloria Hallelujah", "#000000");
presentHitPercentage.y = 400;

export const yikes = new createjs.Text("", "bold 90px Gloria Hallelujah", "#000");
yikes.text = "YIKES!";
yikes.y = 270;

export const beCareful = new createjs.Text("", "bold 40px Gloria Hallelujah", "#000");
beCareful.text = "Be careful!";
beCareful.y = 400;

resize(yikes, beCareful);
