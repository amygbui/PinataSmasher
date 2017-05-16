# Piñata Smasher

[Play Piñata Smasher](https://amygbui.github.io/PinataSmasher/)


Piñata Smasher is an interactive piñata-smashing game with one objective: smash as many piñatas as you can and stock up on candy. Inspired by Fruit Ninja, Piñata Smasher is built using Javascript, HTML5 Canvas, and CreateJS libraries to create an interactive game with intuitive user controls, smooth animations, and fun sound effects.

## How to Play
Click anywhere to start the timer, and then start smashing! Run your mouse over the flying piñatas. If you hit them just right, POP goes the piñata and out comes the candy. Whatever you do, don't hit the presents! It would be such a terrible end to the day if all the lovely presents were destroyed :(

You've got 60 seconds... Ready... Set... GO!!!

## Libraries/Assets
* [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [CreateJS](http://createjs.com/)
* [Graphics by Genie](www.instagram.com/genieart)

## Features
All moving objects in the game (pinatas and presents) are treated as projectiles. When the projectile object is first initialized, it is given a random internal x- and y-velocity. Every 25 milliseconds, its internal velocity (and thus its position on the canvas) is updated with respect to the time elapsed.

``` javascript
//projectile.js

setVelocity() {
  this.x_velocity = Math.random() * 12 * this.xDirection;
  this.y_velocity = (Math.random() * 10) + 33;
}

updateVelocity() {
  this.time += 25;

  const pinata = this.pinata;
  const time = (this.time) / 1000;

  pinata.y = pinata.y - (time * (this.y_velocity - (30 * time)));
  pinata.x += this.x_velocity;
  pinata.rotation += 3 * this.xDirection;
}
```

Like true projectile objects, the piñata's/present's x-velocity stays constant throughout its entire life cycle on the canvas. In order to create better gameplay, however, the speed at which the projectile falls vertically had to be modified.

## Future Directions
* [ ] Persisting high scores table (ideally with Node.js)
* [ ] Different speeds/difficulty settings
>>>>>>> gh-pages
