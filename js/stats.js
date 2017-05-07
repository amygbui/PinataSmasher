class Stats {
  constructor(stage) {
    this.stage = stage
    this.totalPinatas = 0;
    this.hitPinatas = 0;
    this.totalPresents = 0;
    this.hitPresents = 0;
  }

  increaseTotalPinatas() {
    this.totalPinatas += 1;
  }

  increaseHitPinatas() {
    this.hitPinatas += 1;
  }

  increaseTotalPresents() {
    this.totalPresents += 1;
  }

  increaseHitPresents() {
    this.hitPinatas += 1;
  }

  pinataHitPercentage() {
    return Math.round(this.hitPinatas / this.totalPinatas * 10000) / 100;
  }

  presentHitPercentage() {
    return Math.round(this.hitPresents / this.totalPresents * 10000) / 100;
  }
}

export default Stats;
