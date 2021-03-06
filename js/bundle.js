/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var resize = exports.resize = function resize() {
  for (var _len = arguments.length, texts = Array(_len), _key = 0; _key < _len; _key++) {
    texts[_key] = arguments[_key];
  }

  texts.forEach(function (text) {
    var width = text.getBounds().width;
    text.x = (900 - width) / 2;
  });
};

var restart = exports.restart = new createjs.Text("(Click anywhere to start)", "bold 25px Gloria Hallelujah", "#000000");
restart.y = 480;

var start = exports.start = new createjs.Text("Welcome to Pinata Smasher!", "bold 35px Gloria Hallelujah", "#000000");
start.y = 270;

var pinataHitPercentage = exports.pinataHitPercentage = new createjs.Text("Hit as many pinatas as you can,", "bold 35px Gloria Hallelujah", "#000000");
pinataHitPercentage.y = 350;

var presentHitPercentage = exports.presentHitPercentage = new createjs.Text("but don't destroy any presents!", "bold 35px Gloria Hallelujah", "#000000");
presentHitPercentage.y = 400;

var yikes = exports.yikes = new createjs.Text("", "bold 90px Gloria Hallelujah", "#000");
yikes.text = "YIKES!";
yikes.y = 270;

var beCareful = exports.beCareful = new createjs.Text("", "bold 40px Gloria Hallelujah", "#000");
beCareful.text = "Be careful!";
beCareful.y = 400;

resize(yikes, beCareful);

var pause = exports.pause = new createjs.Bitmap("./images/pause.png");
pause.y = 675;
pause.x = 15;

var play = exports.play = new createjs.Bitmap("./images/play.png");
play.y = 675;
play.x = 15;

var phit = new createjs.Shape();
phit.graphics.beginFill("#000").drawRect(0, 0, 53, 53);
pause.hitArea = phit;
play.hitArea = phit;

var endGameMessage = exports.endGameMessage = function endGameMessage(score, stats, game, stage, time) {
  setTimeout(function () {
    start.text = "Game over! Your score was " + score.score;
    pinataHitPercentage.text = "Pinatas Hit: " + stats.pinataHitPercentage() + "%";
    presentHitPercentage.text = "Presents Avoided: " + (100 - stats.presentHitPercentage()) + "%";
    game.end();
    resize(start, pinataHitPercentage, presentHitPercentage);
    stage.addChild(start, restart, pause, pinataHitPercentage, presentHitPercentage);
  }, time);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pinata = __webpack_require__(5);

var _pinata2 = _interopRequireDefault(_pinata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Projectile = function () {
  function Projectile(canvas, stage, score, stats, currentPTickers) {
    _classCallCheck(this, Projectile);

    this.canvas = canvas;
    this.stage = stage;
    this.currentPTickers = currentPTickers;

    this.tick = this.tick.bind(this);
    this.delete = this.delete.bind(this);
    this.setMotion = this.setMotion.bind(this);

    this.setMotion();
    this.time = 0;

    this.PinataClass = new _pinata2.default(canvas, stage, score, stats);
    this.pinata = this.PinataClass.generatePinata(this.interval);
    this.xDirection = this.pinata.x > canvas.width / 2 ? -1 : 1;
    this.setVelocity();

    stage.addChild(this.pinata);
  }

  _createClass(Projectile, [{
    key: 'setVelocity',
    value: function setVelocity() {
      this.x_velocity = Math.random() * 12 * this.xDirection;
      this.y_velocity = Math.random() * 10 + 33;
    }
  }, {
    key: 'setMotion',
    value: function setMotion() {
      this.interval = setInterval(this.tick, 25);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.time += 25;

      var pinata = this.pinata;
      var time = this.time / 1000;

      pinata.y = pinata.y - time * (this.y_velocity - 30 * time);
      pinata.x = pinata.x + this.x_velocity;
      pinata.rotation += 3 * this.xDirection;

      if (pinata.y > 800) {
        this.delete();
      }

      this.stage.update();
    }
  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      this.PinataClass.deletePinata(this.pinata, this.interval);
      var keys = Object.keys(this.currentPTickers);
      this.currentPTickers = keys.filter(function (a) {
        return a !== _this.interval;
      });
    }
  }]);

  return Projectile;
}();

exports.default = Projectile;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _score = __webpack_require__(7);

var _score2 = _interopRequireDefault(_score);

var _stats = __webpack_require__(8);

var _stats2 = _interopRequireDefault(_stats);

var _timer = __webpack_require__(9);

var _timer2 = _interopRequireDefault(_timer);

var _projectile = __webpack_require__(1);

var _projectile2 = _interopRequireDefault(_projectile);

var _text = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas, stage) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.stage = stage;
    this.timer = new _timer2.default(stage);
    this.score = new _score2.default(stage, this.timer);
    this.stats = new _stats2.default(stage);
    this.currentPTickers = {};
    this.started = false;

    this.start = this.start.bind(this);
    this.generatePinatas = this.generatePinatas.bind(this);
    this.end = this.end.bind(this);
    this.pause = this.pause.bind(this);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start(time) {
      var _this = this;

      this.started = true;
      this.beginGame = setInterval(this.generatePinatas, 2000);
      this.timer.start();
      this.stage.addChild(_text.pause);
      this.stage.update();

      this.endTimer = setTimeout(function () {
        _text.start.text = 'Game over! Your score was ' + _this.score.score;
        _text.pinataHitPercentage.text = 'Pinatas Hit: ' + _this.stats.pinataHitPercentage() + '%';
        _text.presentHitPercentage.text = 'Presents Avoided: ' + (100 - _this.stats.presentHitPercentage()) + '%';
        _this.end();
        (0, _text.resize)(_text.start, _text.pinataHitPercentage, _text.presentHitPercentage);
        _this.stage.addChild(_text.start, _text.restart, _text.pinataHitPercentage, _text.presentHitPercentage);
      }, time);
    }
  }, {
    key: 'generatePinatas',
    value: function generatePinatas() {
      var numPinatas = Math.random() * 4 + 1;
      for (var i = 0; i < numPinatas; i++) {
        var p = new _projectile2.default(this.canvas, this.stage, this.score, this.stats, this.currentPTickers);
        this.currentPTickers[p.interval] = p;
      }
    }
  }, {
    key: 'end',
    value: function end() {
      this.started = false;
      this.score.reset();
      this.stats.reset();
      this.timer.reset();

      this.stage.removeAllChildren();
      this.stage.addChild(this.score.scoreText, this.timer.time);
      clearInterval(this.beginGame);
    }
  }, {
    key: 'pause',
    value: function pause() {
      clearInterval(this.beginGame);
      clearInterval(this.endTimer);
      Object.keys(this.currentPTickers).forEach(function (int) {
        return clearInterval(int);
      });
      this.timer.pause();
    }
  }, {
    key: 'unpause',
    value: function unpause(time) {
      var pinatas = Object.values(this.currentPTickers);
      pinatas.forEach(function (pinata) {
        return pinata.setMotion();
      });
      this.start(time);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var registerListeners = function registerListeners(pause) {
  var modal = document.getElementById('modal');
  var instructions = document.getElementById('instructions');
  var instrBtn = document.getElementById('instrBtn');
  var close = document.getElementById('close');
  // const pauseModal = document.getElementById('pauseModal');
  var playBtn = document.getElementById('playBtn');

  instrBtn.onclick = function () {
    modal.style.display = "flex";
    instructions.style.display = "block";

    if (pause.game.started) {
      pause.pauseGame();
    }

    console.log(pause.game.started);
  };

  close.onclick = function () {
    if (!pause.paused) {
      modal.style.display = "none";
    }

    if (pause.game.started) {
      pause.unpauseGame();
    }

    instructions.style.display = "none";
  };

  playBtn.onclick = function () {
    modal.style.display = "none";
    pause.unpauseGame();
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";

      if (pause.paused) {
        pause.unpauseGame();
        playBtn.style.display = "none";
      }
    }
  };
};

exports.default = registerListeners;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pause = function () {
  function Pause(game, stage) {
    _classCallCheck(this, Pause);

    this.game = game;
    this.stage = stage;

    this.pause = _text.pause;
    this.play = _text.play;
    game.stage.addChild(this.pause);

    this.pauseGame = this.pauseGame.bind(this);
    this.unpauseGame = this.unpauseGame.bind(this);
    this.addClick = this.addClick.bind(this);

    this.paused = false;
    this.addClick(this.play);
    this.addClick(this.pause);
  }

  _createClass(Pause, [{
    key: 'addClick',
    value: function addClick(button) {
      var _this = this;

      button.addEventListener("click", function () {
        if (_this.paused) {
          _this.unpauseGame();
        } else {
          _this.pauseGame();
        }

        _this.stage.update();
      });
    }
  }, {
    key: 'pauseGame',
    value: function pauseGame() {
      this.stage.removeChild(this.pause);
      // this.stage.addChild(this.play);
      this.paused = true;
      this.game.pause();
      document.getElementById('modal').style.display = "flex";
      document.getElementById('playBtn').style.display = "block";
    }
  }, {
    key: 'unpauseGame',
    value: function unpauseGame() {
      // this.stage.removeChild(this.play);
      this.stage.addChild(this.pause);
      this.paused = false;
      this.game.unpause(this.game.timer.timeLeft * 1000);
      document.getElementById('modal').style.display = "none";
    }
  }]);

  return Pause;
}();

exports.default = Pause;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pinataImages = {
  0: './images/pinata.png',
  1: './images/pinata2.png',
  2: './images/pinata3.png',
  3: './images/pinata.png',
  4: './images/presentpink.png',
  5: './images/presentpurple.png'
};

var droppedCandies = {
  0: './images/candy1.png',
  1: './images/candy2.png',
  2: './images/candy3.png',
  3: './images/candy4.png'
};

var Pinata = function () {
  function Pinata(canvas, stage, score, stats) {
    _classCallCheck(this, Pinata);

    this.canvas = canvas;
    this.stage = stage;
    this.score = score;
    this.stats = stats;

    this.generatePinata = this.generatePinata.bind(this);
    this.pinataReaction = this.pinataReaction.bind(this);
    this.addListener = this.addListener.bind(this);

    this.smashPinata = this.smashPinata.bind(this);
    this.dropCandy = this.dropCandy.bind(this);
    this.deletePinata = this.deletePinata.bind(this);

    var dirs = [1, -1];
    this.direction = dirs[Math.floor(Math.random() * 2)];
  }

  _createClass(Pinata, [{
    key: 'generatePinata',
    value: function generatePinata(interval) {
      var randomKey = Math.floor(Math.random() * 6);
      var pinata = new createjs.Bitmap(pinataImages[randomKey]);

      if (randomKey === 4 || randomKey === 5) {
        pinata.type = "bomb";
        this.stats.increaseTotalPresents();
      } else {
        pinata.type = "pinata";
        this.stats.increaseTotalPinatas();
      }

      var hit = new createjs.Shape();
      hit.graphics.beginFill("#000").drawRect(0, 20, 90, 70);
      pinata.hitArea = hit;

      pinata.x = Math.round(Math.random() * this.canvas.width);
      pinata.y = 800;
      pinata.rotation = Math.random() * 360;
      this.stage.addChild(this.pinata);

      this.addListener(pinata, interval);
      return pinata;
    }
  }, {
    key: 'addListener',
    value: function addListener(pinata, interval) {
      var _this = this;

      pinata.addEventListener("mouseover", function () {
        var type = pinata.type;
        var sound = _this.music(type);
        sound.currentTime = 0;
        sound.play();

        _this.pinataReaction(pinata, type);
        _this.deletePinata(pinata, interval);
        _this.stage.update();
      });
    }
  }, {
    key: 'music',
    value: function music(type) {
      var pinataSound = new Audio('./sounds/pop.mp3');
      var presentSound = new Audio('./sounds/clang.mp3');
      return type === "pinata" ? pinataSound : presentSound;
    }
  }, {
    key: 'pinataReaction',
    value: function pinataReaction(pinata, type) {
      var _this2 = this;

      this.score.updateScore(type);

      if (type === "pinata") {
        this.smashPinata(pinata);
        this.dropCandy(pinata);
        this.stats.increaseHitPinatas();
      } else if (type === "bomb") {
        this.stats.increaseHitPresents();
        this.stage.addChild(_text.yikes, _text.beCareful);
        setTimeout(function () {
          return _this2.stage.removeChild(_text.yikes, _text.beCareful);
        }, 1500);
      }
    }
  }, {
    key: 'smashPinata',
    value: function smashPinata(pinata) {
      var _this3 = this;

      var candy = new createjs.Bitmap("./images/popcandy.png");
      candy.x = pinata.x;
      candy.y = pinata.y;
      this.stage.addChild(candy);
      setTimeout(function () {
        return _this3.stage.removeChild(candy);
      }, 750);
    }
  }, {
    key: 'dropCandy',
    value: function dropCandy(pinata) {
      var randomKey = Math.floor(Math.random() * 4);
      var droppedCandy = new createjs.Bitmap(droppedCandies[randomKey]);
      droppedCandy.x = pinata.x;
      droppedCandy.y = Math.random() * 30 + 680;
      this.stage.addChild(droppedCandy);
    }
  }, {
    key: 'deletePinata',
    value: function deletePinata(pinata, interval) {
      this.stage.removeChild(pinata);
      clearInterval(interval);
    }
  }]);

  return Pinata;
}();

exports.default = Pinata;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

var _pause = __webpack_require__(4);

var _pause2 = _interopRequireDefault(_pause);

var _text = __webpack_require__(0);

var _modal = __webpack_require__(3);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  window.stage = stage;
  var canvas = document.getElementById('pinata');
  var stage = new createjs.Stage(canvas);
  var game = new _game2.default(canvas, stage);
  var score = game.score,
      stats = game.stats;

  var pause = new _pause2.default(game, stage);
  stage.enableMouseOver(20);

  var hit = new createjs.Shape();
  hit.graphics.beginFill("#000").drawRect(-210, -270, canvas.width, canvas.height);

  _text.start.hitArea = hit;
  (0, _text.resize)(_text.start);
  (0, _text.resize)(_text.restart, _text.start, _text.pinataHitPercentage, _text.presentHitPercentage);
  stage.addChild(_text.start, _text.restart, _text.pinataHitPercentage, _text.presentHitPercentage);
  stage.update();

  _text.start.addEventListener("click", function (e) {
    stage.removeChild(_text.start, _text.restart, _text.pinataHitPercentage, _text.presentHitPercentage);
    _text.restart.text = "(Click anywhere to restart)";
    game.start(61000);
  });

  (0, _modal2.default)(pause);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _projectile = __webpack_require__(1);

var _projectile2 = _interopRequireDefault(_projectile);

var _text = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(stage, timer) {
    _classCallCheck(this, Score);

    this.stage = stage;
    this.timer = timer;
    this.score = 0;
    this.fixWidth = this.fixWidth.bind(this);
    this.updateScore = this.updateScore.bind(this);

    this.scoreText = new createjs.Text('Score: ' + this.score, "bold 45px Gloria Hallelujah", "#000000");
    this.scoreText.y = 15;
    this.fixWidth();

    stage.addChild(this.scoreText);
  }

  _createClass(Score, [{
    key: 'fixWidth',
    value: function fixWidth() {
      var startWidth = this.scoreText.getBounds().width;
      this.scoreText.x = (900 - startWidth) / 2;
    }
  }, {
    key: 'updateScore',
    value: function updateScore(type) {
      if (type === "pinata") {
        this.score += 10;
      } else {
        this.score -= 50;
        this.stage.removeAllChildren();
        this.stage.addChild(this.scoreText, this.timer.time, _text.pause);
      }

      this.scoreText.text = 'Score: ' + this.score;
      this.fixWidth();
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.score = 0;
      this.scoreText.text = 'Score: ' + this.score;
    }
  }]);

  return Score;
}();

exports.default = Score;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stats = function () {
  function Stats(stage) {
    _classCallCheck(this, Stats);

    this.stage = stage;
    this.totalPinatas = 0;
    this.hitPinatas = 0;
    this.totalPresents = 0;
    this.hitPresents = 0;
  }

  _createClass(Stats, [{
    key: "increaseTotalPinatas",
    value: function increaseTotalPinatas() {
      this.totalPinatas += 1;
    }
  }, {
    key: "increaseHitPinatas",
    value: function increaseHitPinatas() {
      this.hitPinatas += 1;
    }
  }, {
    key: "increaseTotalPresents",
    value: function increaseTotalPresents() {
      this.totalPresents += 1;
    }
  }, {
    key: "increaseHitPresents",
    value: function increaseHitPresents() {
      this.hitPresents += 1;
    }
  }, {
    key: "pinataHitPercentage",
    value: function pinataHitPercentage() {
      return Math.round(this.hitPinatas / this.totalPinatas * 10000) / 100;
    }
  }, {
    key: "presentHitPercentage",
    value: function presentHitPercentage() {
      return Math.round(this.hitPresents / this.totalPresents * 10000) / 100;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.totalPinatas = 0;
      this.hitPinatas = 0;
      this.totalPresents = 0;
      this.hitPresents = 0;
    }
  }]);

  return Stats;
}();

exports.default = Stats;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  function Timer(stage) {
    _classCallCheck(this, Timer);

    this.stage = stage;
    this.timeLeft = 60;
    this.time = new createjs.Text("60", "bold 35px Gloria Hallelujah", "#000000");
    this.time.x = 840;
    this.time.y = 670;
    this.stage.addChild(this.time);
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.timer = setInterval(function () {
        _this.timeLeft -= 1;
        _this.time.text = _this.timeLeft;
        _this.stage.addChild(_this.time);
        _this.stage.update();
      }, 1000);
    }
  }, {
    key: "reset",
    value: function reset() {
      clearInterval(this.timer);
      this.timeLeft = 60;
      this.time.text = this.timeLeft;
    }
  }, {
    key: "pause",
    value: function pause() {
      clearInterval(this.timer);
    }
  }]);

  return Timer;
}();

exports.default = Timer;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map