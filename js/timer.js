class Timer {
  constructor(stage) {
    this.stage = stage;
    this.timeLeft = 60;
    this.time =  new createjs.Text("60", "bold 35px Gloria Hallelujah", "#000000");
    this.time.x = 840;
    this.time.y = 670;
    this.stage.addChild(this.time);
  }

  start() {
    this.timer = setInterval(() => {
      this.timeLeft -= 1;
      this.time.text = this.timeLeft;
      this.stage.addChild(this.time);
      this.stage.update();
    }, 1000);
  }

  reset() {
    clearInterval(this.timer);
    this.timeLeft = 60;
    this.time.text = this.timeLeft;
  }

  pause() {
    clearInterval(this.timer);
  }
}

export default Timer;
