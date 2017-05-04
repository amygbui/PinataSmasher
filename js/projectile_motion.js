class ProjectileMotion {
  constructor() {
    this.xvi = Math.random() * 40;
    this.xv = this.x_velocity();
  }

  // vx = vt * 1/2 gt^2
  x_velocity() {
    this.xv = (this.xvi * timeElapsed) - 1/2(9.8)(timeElapsed)^2
  }

  y_velocity() {
    return Math.random() * 20;
  }
}
