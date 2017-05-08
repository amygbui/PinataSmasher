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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pinata = __webpack_require__(2);

var _pinata2 = _interopRequireDefault(_pinata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Projectile = function () {
  function Projectile(canvas, stage, score, stats) {
    _classCallCheck(this, Projectile);

    this.canvas = canvas;
    this.stage = stage;
    this.tick = this.tick.bind(this);
    this.delete = this.delete.bind(this);

    this.interval = setInterval(this.tick, 25);
    this.time = 0;

    this.PinataClass = new _pinata2.default(canvas, stage, score, stats);
    this.pinata = this.PinataClass.generatePinata();
    this.xDirection = this.pinata.x > canvas.width / 2 ? -1 : 1;
    this.setVelocity();

    stage.addChild(this.pinata);
  }

  _createClass(Projectile, [{
    key: 'setVelocity',
    value: function setVelocity() {
      this.x_velocity = Math.random() * 12 * this.xDirection;
      this.y_velocity = Math.random() * 12 + 33;
    }
  }, {
    key: 'tick',
    value: function tick(event) {
      this.time += 25;

      var pinata = this.pinata;
      var time = this.time / 1000;

      pinata.y = pinata.y - time * (this.y_velocity - 30 * time);
      pinata.x = pinata.x + this.x_velocity;

      if (pinata.y > 800) {
        this.delete();
      }

      this.stage.update(event);
    }
  }, {
    key: 'delete',
    value: function _delete() {
      this.PinataClass.deletePinata(this.pinata, this.interval);
    }
  }]);

  return Projectile;
}();

exports.default = Projectile;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _score = __webpack_require__(4);

var _score2 = _interopRequireDefault(_score);

var _stats = __webpack_require__(5);

var _stats2 = _interopRequireDefault(_stats);

var _timer = __webpack_require__(7);

var _timer2 = _interopRequireDefault(_timer);

var _projectile = __webpack_require__(0);

var _projectile2 = _interopRequireDefault(_projectile);

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

    this.start = this.start.bind(this);
    this.generatePinatas = this.generatePinatas.bind(this);
    this.end = this.end.bind(this);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      this.beginGame = setInterval(this.generatePinatas, 2000);
      this.timer.start();
    }
  }, {
    key: 'generatePinatas',
    value: function generatePinatas() {
      var numPinatas = Math.random() * 4 + 1;
      for (var i = 0; i < numPinatas; i++) {
        new _projectile2.default(this.canvas, this.stage, this.score, this.stats);
      }
    }
  }, {
    key: 'end',
    value: function end() {
      this.score.reset();
      this.stats.reset();
      this.timer.reset();

      this.stage.removeAllChildren();
      this.stage.addChild(this.score.scoreText, this.timer.time);
      clearInterval(this.beginGame);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    this.smashPinata = this.smashPinata.bind(this);
    this.dropCandy = this.dropCandy.bind(this);
    this.deletePinata = this.deletePinata.bind(this);
  }

  _createClass(Pinata, [{
    key: 'generatePinata',
    value: function generatePinata(interval) {
      var _this = this;

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
      this.stage.addChild(this.pinata);

      pinata.addEventListener("mouseover", function () {
        _this.score.updateScore(pinata.type);

        if (pinata.type === "pinata") {
          _this.smashPinata(pinata);
          _this.dropCandy(pinata);
          _this.stats.increaseHitPinatas();
          var sound = new Audio('./sounds/pop.mp3');
          sound.currentTime = 0;
          sound.play();
        } else if (pinata.type === "bomb") {
          _this.stats.increaseHitPresents();
          var boom = new createjs.Bitmap('./images/ouch.png');
          boom.x = 150;
          boom.y = 210;
          _this.stage.addChild(boom);
          setTimeout(function () {
            return _this.stage.removeChild(boom);
          }, 1500);
          var _sound = new Audio('./sounds/clang.mp3');
          _sound.currentTime = 0;
          _sound.play();
        }

        _this.deletePinata(pinata, interval);
        _this.stage.update();
      });

      return pinata;
    }
  }, {
    key: 'smashPinata',
    value: function smashPinata(pinata) {
      var _this2 = this;

      var candy = new createjs.Bitmap("./images/popcandy.png");
      candy.x = pinata.x;
      candy.y = pinata.y;
      this.stage.addChild(candy);
      setTimeout(function () {
        return _this2.stage.removeChild(candy);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _text = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  window.stage = stage;
  var canvas = document.getElementById('pinata');
  var stage = new createjs.Stage(canvas);
  var game = new _game2.default(canvas, stage);
  var score = game.score,
      stats = game.stats;

  stage.enableMouseOver(20);

  var hit = new createjs.Shape();
  hit.graphics.beginFill("#000").drawRect(0, -270, canvas.width, canvas.height);
  _text.start.hitArea = hit;

  resize(_text.restart, _text.start, _text.pinataHitPercentage, _text.presentHitPercentage);
  stage.addChild(_text.start, _text.restart, _text.pinataHitPercentage, _text.presentHitPercentage);
  stage.update();

  _text.start.addEventListener("click", function (e) {
    stage.removeChild(_text.start, _text.restart, _text.pinataHitPercentage, _text.presentHitPercentage);
    _text.restart.text = "(Click anywhere to restart)";

    game.start();
    stage.update();

    setTimeout(function () {
      _text.start.text = 'Game over! Your score was ' + score.score;
      _text.pinataHitPercentage.text = 'Pinatas Hit: ' + stats.pinataHitPercentage() + '%';
      _text.presentHitPercentage.text = 'Presents Avoided: ' + (100 - stats.presentHitPercentage()) + '%';
      game.end();
      resize(_text.start, _text.pinataHitPercentage, _text.presentHitPercentage);
      stage.addChild(_text.start, _text.restart, _text.pinataHitPercentage, _text.presentHitPercentage);
    }, 61000);
    // change time back to 61 seconds when in production
  });
});

function resize() {
  for (var _len = arguments.length, texts = Array(_len), _key = 0; _key < _len; _key++) {
    texts[_key] = arguments[_key];
  }

  texts.forEach(function (text) {
    var width = text.getBounds().width;
    text.x = (900 - width) / 2;
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _projectile = __webpack_require__(0);

var _projectile2 = _interopRequireDefault(_projectile);

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

    this.scoreText = new createjs.Text("Score: " + this.score, "bold 45px Gloria Hallelujah", "#000000");
    this.scoreText.y = 15;
    this.fixWidth();

    stage.addChild(this.scoreText);
  }

  _createClass(Score, [{
    key: "fixWidth",
    value: function fixWidth() {
      var startWidth = this.scoreText.getBounds().width;
      this.scoreText.x = (900 - startWidth) / 2;
    }
  }, {
    key: "updateScore",
    value: function updateScore(type) {
      if (type === "pinata") {
        this.score += 10;
      } else {
        this.score -= 50;
        this.stage.removeAllChildren();
        this.stage.addChild(this.scoreText);
        this.stage.addChild(this.timer.time);
      }

      this.scoreText.text = "Score: " + this.score;
      this.fixWidth();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.score = 0;
      this.scoreText.text = "Score: " + this.score;
    }
  }]);

  return Score;
}();

exports.default = Score;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var restart = exports.restart = new createjs.Text("(Click anywhere to start)", "bold 25px Gloria Hallelujah", "#000000");
restart.y = 480;

var start = exports.start = new createjs.Text("Welcome to Pinata Smasher!", "bold 35px Gloria Hallelujah", "#000000");
start.y = 270;

var pinataHitPercentage = exports.pinataHitPercentage = new createjs.Text("Hit as many pinatas as you can,", "bold 35px Gloria Hallelujah", "#000000");
pinataHitPercentage.y = 350;

var presentHitPercentage = exports.presentHitPercentage = new createjs.Text("but don't destroy any presents!", "bold 35px Gloria Hallelujah", "#000000");
presentHitPercentage.y = 400;

/***/ }),
/* 7 */
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
  }]);

  return Timer;
}();

exports.default = Timer;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map