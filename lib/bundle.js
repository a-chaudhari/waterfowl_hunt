/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
var black_duck = exports.black_duck = function black_duck() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[266, 115, 27, 31], [297, 117, 32, 29], [331, 117, 25, 31], [367, 121, 34, 29], [405, 131, 34, 20], [442, 129, 34, 24], [484, 124, 31, 29], [525, 123, 18, 31], [549, 123, 18, 31], [147, 496, 24, 31], [183, 496, 32, 31], [224, 496, 30, 30]],
    animations: {
      fly_up: [0, 2],
      fly_side: [3, 5],
      hit: [6, 6, "fall", 0.5],
      fall: [7, 8],
      up: [9, 11]
    },
    framerate: 7
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet, "fly_up");
};

var titleScreen = exports.titleScreen = function titleScreen() {
  var data = {
    images: [window.preload.getResult('title_img')],
    frames: [[0, 0, 256, 244]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var cursor = exports.cursor = function cursor() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[435, 539, 25, 23]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var aboutMe = exports.aboutMe = function aboutMe() {
  var data = {
    images: [window.preload.getResult('aboutme_img')],
    frames: [[0, 0, 786, 720]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var duck_ui = exports.duck_ui = function duck_ui() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[117, 265, 7, 8], [117, 246, 7, 8], [109, 265, 7, 8], [117, 265, 7, 8]],
    animations: {
      red: 0,
      white: 1,
      black: 2,
      alt: [1, 2],
      flash: [2, 3]
    },
    framerate: 2
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet, "white");
};

var hit_ui = exports.hit_ui = function hit_ui() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[85, 245, 23, 7]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var main_menu_button = exports.main_menu_button = function main_menu_button() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[430, 331, 89, 8]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var pause_button = exports.pause_button = function pause_button() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[430, 307, 54, 9], [430, 319, 54, 9]],
    animations: {
      off: 0,
      on: [0, 1]
    },
    framerate: 2
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet, "off");
};

var flew_away_ui = exports.flew_away_ui = function flew_away_ui() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[312, 242, 73, 17]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var background = exports.background = function background() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[0, 0, 256, 240]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var bullet_ui = exports.bullet_ui = function bullet_ui() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[57, 253, 23, 8], //black clip
    [57, 272, 23, 8], //red clip
    [70, 210, 26, 17] //empty
    ],
    animations: {
      black: 0,
      red: 1,
      flash: [1, 2]
    },
    framerate: 2
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet, "black");
};

var bullet = exports.bullet = function bullet() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[75, 245, 4, 7], //black bullet
    [75, 264, 4, 7], //red bullet??
    [70, 210, 4, 7]],
    animations: {
      black: 0,
      red: 1,
      empty: 2
    },
    framerate: 2
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet, "black");
};

var dog_intro = exports.dog_intro = function dog_intro() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    // frames: {width:60, height:43, count:5, regX: 17, regY:300},
    frames: [[17, 300, 53, 43], [78, 300, 53, 43], [138, 300, 53, 43], [196, 300, 55, 43], [257, 300, 53, 43], //sniff
    [196, 300, 55, 43], [257, 300, 53, 43], //sniff
    [196, 300, 55, 43], [257, 300, 53, 43], //sniff
    [196, 300, 55, 43], //9
    [257, 300, 53, 43], //sniff,
    [17, 358, 53, 48], //excited
    [86, 359, 35, 46], //jumping
    [147, 366, 33, 32], //landing
    [209, 362, 29, 39], //14
    [269, 362, 29, 39], [344, 302, 43, 39], [331, 362, 56, 39] //17
    ],
    animations: {
      walk: [0, 3],
      sniff: [3, 10, "walk"],
      happy: 11,
      jumping: 12,
      landing: 13,
      laughing: [14, 15],
      one: 16,
      two: 17
    },
    framerate: 8
  };
  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet, "walk");
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sound = exports.sound = function sound() {
  var _createjs$Sound;

  return (_createjs$Sound = createjs.Sound).play.apply(_createjs$Sound, arguments);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _duck = __webpack_require__(4);

var _duck2 = _interopRequireDefault(_duck);

var _sprites = __webpack_require__(0);

var Sprites = _interopRequireWildcard(_sprites);

var _ui = __webpack_require__(5);

var _ui2 = _interopRequireDefault(_ui);

var _sound = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(stage, title) {
    var dcount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Board);

    this.stage = stage;
    this.title = title;
    this.background_color = new createjs.Shape();
    this.background_color.graphics.beginFill("#3fbfff").drawRect(0, 0, 786, 720);

    this.stage.addChild(this.background_color);
    this.background = this.background();
    this.stage.addChild(this.background);
    this.ui = new _ui2.default(this.stage);
    this.initLeap();
    this.cursor = this.mkCursor();
    this.allowClick = false;
    this.trigger = false;
    this.activeBirds = {};
    document.onkeydown = this.keyPressed.bind(this);

    this.dog = Sprites.dog_intro();
    this.dog.scaleX = 2.8;
    this.dog.scaleY = 2.8;
    this.dog.x = 15;
    this.dog.y = 445;
    this.stage.addChild(this.dog);

    //cycle variables
    this.cycleKillCount = 0;
    this.bulletsLeft = 3;
    this.numBirds = 0;
    this.birdsLaunched = 0;
    this.flewAway = false;

    //round variables
    this.birdsLaunched = 0;
    this.killCount = 0;
    this.threshhold = 5;
    this.finishedPost = false;

    //game variables
    this.round = 1;
    this.score = 0;
    this.duckCount = dcount;
  }

  _createClass(Board, [{
    key: 'handleClick',
    value: function handleClick(x, y) {
      var tgt = this.stage.getObjectUnderPoint(x, y, 1);

      if (tgt.dh_type === true) {
        tgt.dh_obj.handleClick();
      } else if (tgt.dh_button === true) {
        if (tgt.dh_btn_name === "pause") this.togglePause();else if (tgt.dh_btn_name === 'menu') this.title();
      } else {
        this.handleMissClick();
      }
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      createjs.Ticker.setPaused(!createjs.Ticker.paused);
      createjs.Sound.muted = !createjs.Sound.muted;
      if (createjs.Ticker.paused) {
        this.ui.pause_button.gotoAndPlay("on");
      } else {
        this.ui.pause_button.gotoAndPlay("off");
      }
    }
  }, {
    key: 'birdsOnScreen',
    value: function birdsOnScreen() {
      return Object.keys(this.activeBirds).length;
    }
  }, {
    key: 'keyPressed',
    value: function keyPressed(e) {
      if (e.key === "z") {
        if (this.cursor.alpha === 1.0) {
          this.handleClick(this.cursor.x, this.cursor.y);
        }
      }
    }
  }, {
    key: 'changeAnimation',
    value: function changeAnimation(obj, ani) {
      return function (e) {
        obj.gotoAndPlay(ani);
      };
    }
  }, {
    key: 'playSound',
    value: function playSound(snd, props) {
      return function (e) {
        (0, _sound.sound)(snd, props);
      };
    }
  }, {
    key: 'intro',
    value: function intro() {
      this.stage.removeChild(this.dog);
      this.dog.alpha = 0.0;
      this.stage.addChild(this.dog);
      this.dog.x = 15;
      this.dog.y = 445;
      this.dog.gotoAndPlay("walk");
      var ppc = new createjs.PlayPropsConfig().set({ loop: 2, duration: 259 });

      var obj = createjs.Tween.get(this.dog);
      if (this.round === 1) {
        (0, _sound.sound)("intro");
        this.dog.alpha = 1.0;
        obj.to({ x: 150 }, 2000);
      } else {
        obj.to({ x: 150, alpha: 1.0 });
      }
      obj.call(this.changeAnimation(this.dog, "sniff")).wait(1000).to({ x: 300 }, 2000).call(this.changeAnimation(this.dog, "sniff")).wait(1000).call(this.changeAnimation(this.dog, "happy")).call(this.playSound("bark", ppc)).wait(500).call(this.changeAnimation(this.dog, "jumping")).to({ x: 350, y: 300 }, 500).call(this.shiftToBehindBackground(this.dog).bind(this)).call(this.changeAnimation(this.dog, "landing")).to({ x: 400, y: 500 }, 500).to({ x: 350, y: 500 }).call(this.gameLoop.bind(this));
    }
  }, {
    key: 'initLeap',
    value: function initLeap() {
      var _this = this;

      var leap = new Leap.Controller({
        host: '127.0.0.1',
        port: 6437,
        frameEventName: 'animationFrame',
        useAllPlugins: true
      });
      this.leap = leap;
      leap.on('frame', function (frame) {
        return _this.frameCallback(frame);
      });
      leap.connect();
    }
  }, {
    key: 'frameCallback',
    value: function frameCallback(frame) {
      if (frame.pointables.length > 0) {
        this.cursor.alpha = 1;
        var pointer = frame.pointables[0];
        var pos = pointer.stabilizedTipPosition;
        var norm = frame.interactionBox.normalizePoint(pos);
        this.cursor.x = 786 * norm[0];
        this.cursor.y = 720 * (1 - norm[1]);
      } else {
        this.cursor.alpha = 0;
      }
    }
  }, {
    key: 'redBackground',
    value: function redBackground() {
      this.background_color.graphics.clear;
      this.background_color.graphics.beginFill("#ffbfb3").drawRect(0, 0, 786, 720);
    }
  }, {
    key: 'blueBackground',
    value: function blueBackground() {
      this.background_color.graphics.clear;
      this.background_color.graphics.beginFill("#3fbfff").drawRect(0, 0, 786, 720);
    }
  }, {
    key: 'background',
    value: function background() {
      var sprite = Sprites.background();
      sprite.dh_type = "background";
      sprite.scaleX = 3.0;
      sprite.scaleY = 3.0;
      return sprite;
    }
  }, {
    key: 'handleMissClick',
    value: function handleMissClick(e) {
      if (!this.allowClick) return;
      if (this.bulletsLeft === 0) return;

      (0, _sound.sound)("shot");
      this.ui.firedShot();
      this.bulletsLeft--;
      this.gameLoop();
    }
  }, {
    key: 'mkCursor',
    value: function mkCursor() {
      // let box = new createjs.Shape();
      // box.graphics.beginFill("#000").drawRect(0, 0, 10, 10);
      var box = Sprites.cursor();
      box.mouseEnabled = false;
      box.regX = 13;
      box.regY = 12;
      box.alpha = 0;
      this.stage.addChild(box);
      return box;
    }
  }, {
    key: 'startCycle',
    value: function startCycle() {
      this.bulletsLeft = 3;
      var n = this.duckCount;
      this.numBirds = n;
      this.cycleKillCount = 0;
      this.blueBackground();
      this.drawDucks(n);
      this.ui.resetCycle();
      this.ui.launchDucks(n);
    }
  }, {
    key: 'playEndingMusic',
    value: function playEndingMusic() {
      // first check the score and treshho
      if (this.killCount >= this.threshhold) {
        //you win!
        if (this.killCount === 10) {
          //perfect score!
          var soundHandle = createjs.Sound.play("perfect");
          soundHandle.on("complete", this.gameLoop.bind(this));
        } else {
          var _soundHandle = createjs.Sound.play("round-clear");
          _soundHandle.on("complete", this.gameLoop.bind(this));
        }
      } else {
        var _soundHandle2 = createjs.Sound.play("you-failed");
        _soundHandle2.on("complete", this.gameLoop.bind(this));
      }
    }
  }, {
    key: 'anyLivingBirdsOnScreen',
    value: function anyLivingBirdsOnScreen() {
      var _this2 = this;

      var res = false;
      Object.keys(this.activeBirds).forEach(function (key, idx) {
        var bird = _this2.activeBirds[key];
        if (bird.alive) {
          res = true;
        }
      });
      return res;
    }
  }, {
    key: 'anyActiveBirdsOnScreen',
    value: function anyActiveBirdsOnScreen() {
      var _this3 = this;

      var res = false;
      Object.keys(this.activeBirds).forEach(function (key, idx) {
        var bird = _this3.activeBirds[key];
        if (bird.active) {
          res = true;
        }
      });
      return res;
    }
  }, {
    key: 'gameLoop',
    value: function gameLoop() {
      var _this4 = this;

      //all birds launched, and none on screen
      if (this.birdsLaunched === 10 && this.birdsOnScreen() === 0) {
        //round end, test kill count so see round outcome
        if (!this.finishedPost) {
          //need to play the music before moving to next round
          this.finishedPost = true;
          this.ui.shiftDucks(this.playEndingMusic.bind(this));
          return;
        }
        if (this.killCount >= this.threshhold) {
          //yay you won the round, off to the next one. play correct sound
          //restart loop and counters
          this.birdsLaunched = 0;
          this.killCount = 0;
          this.cycleKillCount = 0;
          this.threshhold = 5; //TODO should increment as needed!
          this.ui.resetRound();
          this.blueBackground();
          this.round++;
          this.finishedPost = false;
          this.intro();
        } else {
          //game over :(
          this.title();
        }
      } else {
        //round is still ongoing.  test the cycle
        if (this.anyLivingBirdsOnScreen() && this.bulletsLeft === 0) {
          //but did we kill any?
          if (this.cycleKillCount > 0) {
            //yes, so not a total fail
          } else {
            //total fail
            this.redBackground();
            this.ui.showFlewAway();
          }
          Object.keys(this.activeBirds).forEach(function (bird_key) {
            _this4.activeBirds[bird_key].flyaway();
          });
        } else if (this.birdsOnScreen() !== 0) {
          //do nothing
        } else {
          this.startCycle();
        }
      }
    }
  }, {
    key: 'cycleEndAnimation',
    value: function cycleEndAnimation() {
      //3 possible animations, laughing, happy 1 or happy 2
      //all shots fired, both birds alive
      if (!this.anyActiveBirdsOnScreen() && this.cycleKillCount === 0) {
        this.redBackground();
        this.ui.showFlewAway();
      }
      if (this.numBirds > 0) {
        return;
      }
      if (this.cycleKillCount === 0 && !this.anyActiveBirdsOnScreen()) {
        //laughing dog
        this.laughingDog();
      } else if (!this.anyActiveBirdsOnScreen()) {
        this.happyDog();
      }
    }
  }, {
    key: 'happyDog',
    value: function happyDog() {
      var ani = this.cycleKillCount === 1 ? "one" : "two";
      this.dog.gotoAndPlay(ani);
      var obj = createjs.Tween.get(this.dog);
      obj.call(this.playSound("got_one")).to({ y: 375 }, 500).wait(500).to({ y: 600 }, 1000).call(this.gameLoop.bind(this));
    }
  }, {
    key: 'birdDied',
    value: function birdDied(id) {
      var _this5 = this;

      return function (e) {
        _this5.cycleKillCount++;
        _this5.killCount++;
        _this5.bulletsLeft--;
        _this5.ui.firedShot();
        _this5.ui.regHit();
      };
    }
  }, {
    key: 'laughingDog',
    value: function laughingDog() {
      this.dog.gotoAndPlay("laughing");
      var ppc = new createjs.PlayPropsConfig().set({ delay: 500 });
      var obj = createjs.Tween.get(this.dog);
      obj.call(this.playSound("laugh", ppc).bind(this)).to({ y: 375 }, 1000).wait(1000).to({ y: 600 }, 1000).call(this.gameLoop.bind(this));
    }
  }, {
    key: 'birdLived',
    value: function birdLived(id) {
      var _this6 = this;

      return function (e) {
        _this6.flewAway = true;
        _this6.ui.regMiss();
        _this6.allowClick = false;
        _this6.cycleEndAnimation();
      };
    }
  }, {
    key: 'removeBird',
    value: function removeBird(id) {
      var _this7 = this;

      return function (e) {
        _this7.numBirds--;
        _this7.stage.removeChild(_this7.activeBirds[id].duck);
        if (!_this7.anyLivingBirdsOnScreen()) _this7.allowClick = false;
        delete _this7.activeBirds[id];
        _this7.cycleEndAnimation();
      };
    }
  }, {
    key: 'shiftBackgroundToFront',
    value: function shiftBackgroundToFront() {
      this.stage.setChildIndex(this.background, this.stage.numChildren - 1);
    }
  }, {
    key: 'shiftToBehindBackground',
    value: function shiftToBehindBackground(obj) {
      var _this8 = this;

      return function (e) {
        _this8.stage.setChildIndex(obj, _this8.stage.getChildIndex(_this8.background));
      };
    }
  }, {
    key: 'drawDucks',
    value: function drawDucks() {
      var _this9 = this;

      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.birdsLaunched += n;
      for (var i = 0; i < n; i++) {
        var duck = new _duck2.default(i, this.birdDied(i).bind(this), this.birdLived(i).bind(this), this.removeBird(i).bind(this), this.round);
        this.activeBirds[i] = duck;
        this.stage.addChild(duck.duck);
        this.shiftToBehindBackground(duck.duck)();
      }
      this.allowClick = true;
      Object.keys(this.activeBirds).forEach(function (key) {
        _this9.activeBirds[key].moveDuck();
      });
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprites = __webpack_require__(0);

var Sprites = _interopRequireWildcard(_sprites);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Title = function () {
  function Title(stage) {
    _classCallCheck(this, Title);

    this.stage = stage;
    this.titleCont = new createjs.Container();
    this.setUpTitleContainer();
    this.aboutMeCont = this.aboutMeContainer();
    this.start;
    this.count = 1;
  }

  _createClass(Title, [{
    key: "beep",
    value: function beep() {
      createjs.Sound.play("menu-beep");
    }
  }, {
    key: "setUpTitleContainer",
    value: function setUpTitleContainer() {
      var c = this.titleCont;
      c.addChild(this.titleImage());
      c.addChild(this.gunButton());
      c.addChild(this.startButton());
      c.addChild(this.startButtonTwo());
      c.addChild(this.aboutButton());
    }
  }, {
    key: "showTitle",
    value: function showTitle(start) {
      this.start = start;
      this.stage.addChild(this.titleCont);
    }
  }, {
    key: "hideTitle",
    value: function hideTitle() {
      this.stage.removeAllChildren();
    }
  }, {
    key: "gunButton",
    value: function gunButton() {
      var obj = new createjs.Shape();
      obj.graphics.beginFill("#fff").drawRect(0, 0, 550, 50);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#fff").drawRect(0, 0, 550, 50);
      obj.x = 110;
      obj.y = 582;
      obj.cursor = "pointer";
      obj.alpha = 0.0;
      obj.hitArea = hit;
      obj.on("click", this.lightGun.bind(this));
      return obj;
    }
  }, {
    key: "lightGun",
    value: function lightGun() {
      window.location = "https://github.com/a-chaudhari/waterfowl_hunt/blob/master/docs/lightgun.md";
      this.beep();
    }
  }, {
    key: "titleImage",
    value: function titleImage() {
      var obj = Sprites.titleScreen();
      obj.x = 0;
      obj.y = 0;
      obj.scaleX = 3.0;
      obj.scaleY = 3.0;
      return obj;
    }
  }, {
    key: "startButton",
    value: function startButton() {
      var obj = new createjs.Shape();
      obj.graphics.beginFill("#fff").drawRect(0, 0, 365, 50);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#fff").drawRect(0, 0, 365, 50);
      obj.x = 210;
      obj.y = 395;
      obj.cursor = "pointer";
      obj.alpha = 0.0;
      obj.hitArea = hit;
      obj.on("click", this.startGame(1).bind(this));
      return obj;
    }
  }, {
    key: "startButtonTwo",
    value: function startButtonTwo() {
      var obj = new createjs.Shape();
      obj.graphics.beginFill("#fff").drawRect(0, 0, 415, 50);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#fff").drawRect(0, 0, 415, 50);
      obj.x = 177;
      obj.y = 457;
      obj.cursor = "pointer";
      obj.alpha = 0.0;
      obj.hitArea = hit;
      obj.on("click", this.startGame(2).bind(this));
      return obj;
    }
  }, {
    key: "startGame",
    value: function startGame(n) {
      var _this = this;

      return function () {
        _this.count = n;
        _this.beep();
        _this.start();
      };
    }
  }, {
    key: "aboutButton",
    value: function aboutButton() {
      var obj = new createjs.Shape();
      obj.graphics.beginFill("#fff").drawRect(0, 0, 340, 50);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#fff").drawRect(0, 0, 340, 50);
      obj.x = 220;
      obj.y = 520;
      obj.cursor = "pointer";
      obj.alpha = 0.0;
      obj.hitArea = hit;
      obj.on("click", this.aboutMe.bind(this));
      return obj;
    }
  }, {
    key: "aboutMeContainer",
    value: function aboutMeContainer() {
      var cont = new createjs.Container();

      var background = new Sprites.aboutMe();
      cont.addChild(background);
      cont.x = 0;
      cont.y = 0;

      var back_button = new createjs.Shape();
      back_button.graphics.beginFill("#fff").drawRect(0, 0, 125, 60);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#fff").drawRect(0, 0, 125, 60);
      back_button.x = 30;
      back_button.y = 600;
      back_button.cursor = "pointer";
      back_button.alpha = 0.0;
      back_button.hitArea = hit;
      back_button.on("click", this.backButton.bind(this));
      cont.addChild(back_button);

      var github_button = new createjs.Shape();
      github_button.graphics.beginFill("#fff").drawRect(0, 0, 125, 45);
      var gh_hit = new createjs.Shape();
      gh_hit.graphics.beginFill("#fff").drawRect(0, 0, 125, 45);
      github_button.x = 485;
      github_button.y = 355;
      github_button.cursor = "pointer";
      github_button.alpha = 0.0;
      github_button.hitArea = gh_hit;
      github_button.on("click", this.github_link.bind(this));
      cont.addChild(github_button);

      var website_button = new createjs.Shape();
      website_button.graphics.beginFill("#fff").drawRect(0, 0, 350, 45);
      var w_hit = new createjs.Shape();
      w_hit.graphics.beginFill("#fff").drawRect(0, 0, 350, 45);
      website_button.x = 350;
      website_button.cursor = "pointer";
      website_button.y = 425;
      website_button.alpha = 0.0;
      website_button.hitArea = w_hit;
      website_button.on("click", this.website_link.bind(this));
      cont.addChild(website_button);

      return cont;
    }
  }, {
    key: "github_link",
    value: function github_link() {
      this.beep();
      window.location = "https://github.com/a-chaudhari/waterfowl_hunt";
    }
  }, {
    key: "website_link",
    value: function website_link() {
      this.beep();
      window.location = "http://www.amitchaudhari.com";
    }
  }, {
    key: "backButton",
    value: function backButton() {
      this.beep();
      this.stage.removeChild(this.aboutMeCont);
      this.stage.addChild(this.titleCont);
    }
  }, {
    key: "aboutMe",
    value: function aboutMe() {
      this.beep();
      this.stage.removeChild(this.titleCont);
      this.stage.addChild(this.aboutMeCont);
    }
  }]);

  return Title;
}();

exports.default = Title;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprites = __webpack_require__(0);

var Sprites = _interopRequireWildcard(_sprites);

var _sound = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Duck = function () {
  function Duck(id, birdDied, birdLived, removeBird, round) {
    _classCallCheck(this, Duck);

    this.duck = Sprites.black_duck();
    this.duck.scaleX = 2.0;
    this.duck.scaleY = 2.0;
    this.duck.alpha = 0;

    this.duck.dh_id = id;
    this.duck.dh_type = true;
    this.duck.dh_obj = this;

    this.active = true;
    this.alive = true;
    this.birdLived = birdLived;
    this.birdDied = birdDied;
    this.removeBird = removeBird;
    this.handleClick = this.handleClick.bind(this);
    this.dh_type = "duck";
    this.round = round;
    this.flapping_sound;
    this.lastSound = null;
    var hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(-5, -5, 40, 40);
    this.duck.hitArea = hit;
  }

  _createClass(Duck, [{
    key: 'playSound',
    value: function playSound(snd) {
      var _this = this;

      var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return function (e) {
        if (stop) _this.lastSound.stop();
        _this.lastSound = (0, _sound.sound)(snd);
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      (0, _sound.sound)("shot");
      if (!this.active) {
        return;
      }

      createjs.Tween.removeTweens(this.duck);
      this.duck.gotoAndPlay("hit");
      this.alive = false;
      this.active = false;
      createjs.Tween.get(this.duck).call(this.birdDied).call(this.stopSound(this.flapping_sound)).wait(500).call(this.playSound("falling")).to({ y: 480 }, 1000).call(this.playSound('ground_thud', true)).wait(1000).call(this.removeBird);
    }
  }, {
    key: 'rand',
    value: function rand(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }, {
    key: 'randMovement',
    value: function randMovement() {
      var _this2 = this;

      return function () {
        var x = _this2.duck.x;
        var y = _this2.duck.y;
        return { x: _this2.rand(100, 200) + x, y: _this2.rand(100, 200) + y };
      };
    }
  }, {
    key: 'flyaway',
    value: function flyaway() {
      if (!this.alive) return;
      this.active = false;
      createjs.Tween.removeTweens(this.duck);
      createjs.Tween.get(this.duck).call(this.setInactive.bind(this)).call(this.birdLived).call(this.changeAnimation("up")).call(this.stopSound(this.flapping_sound)).to({ y: -100 }, 1000).wait(1000).call(this.removeBird);
    }
  }, {
    key: 'stopSound',
    value: function stopSound(snd) {
      return function (e) {
        snd.stop();
      };
    }
  }, {
    key: 'getDiffCoeff',
    value: function getDiffCoeff() {
      switch (this.round) {
        case 1:
          return 0.15;
        case 2:
          return 0.2;
        default:
          return this.round / 100 * 2 + 0.18;
      }
    }
  }, {
    key: 'genRandomPath',
    value: function genRandomPath(range) {
      var MAX_WIDTH = 730;
      var MAX_HEIGHT = 400;
      var xrow = [];
      var yrow = [];
      var abs_coords = [{ params: { alpha: 1.0, x: this.rand(0, MAX_WIDTH), y: 450 } }];

      //generate relative coord pairs
      for (var i = 0; i < 10; i++) {
        var last_x = abs_coords[0].params.x;
        var last_y = abs_coords[0].params.y;
        var x = 0;
        var y = 0;

        //make sure the point falls on the board.
        while (true) {
          var done = true;
          x = Math.floor(Math.random() * (range * 2) - range);
          y = Math.floor(Math.random() * (range * 2) - range);
          if (x + last_x > MAX_WIDTH || x + last_x < 0) done = false;else if (y + last_y > MAX_HEIGHT || y + last_y < 0) {
            done = false;
          }
          if (done) break;
        }

        //we now have a relative pair that is sure to be on the grid.
        //calc the distance to ensure a fixed speed across tweens
        var dist = Math.floor(Math.sqrt(Math.pow(y, 2) + Math.pow(x, 2)));
        //need to now find the angle of movement to link the correct animation
        var angleDeg = Math.atan2(Math.abs(y), Math.abs(x)) * (180 / Math.PI);
        var animation = angleDeg < 40 ? "fly_side" : "fly_up";

        abs_coords.unshift({ params: { alpha: 1.0, x: last_x + x, y: last_y + y },
          speed: dist / this.getDiffCoeff(),
          reverse: x < 0,
          reverseY: y < 0,
          animation: animation });
      }
      abs_coords.reverse();
      return abs_coords;
    }
  }, {
    key: 'changeAnimation',
    value: function changeAnimation(ani) {
      var _this3 = this;

      return function () {
        return _this3.duck.gotoAndPlay(ani);
      };
    }
  }, {
    key: 'setInactive',
    value: function setInactive() {
      this.active = false;
    }
  }, {
    key: 'moveDuck',
    value: function moveDuck() {
      var obj = createjs.Tween.get(this.duck, { loop: false });
      var dirs = this.genRandomPath(250);
      var ppc = new createjs.PlayPropsConfig().set({ loop: -1, startTime: 25, duration: 178, volume: 0.5 });
      this.flapping_sound = (0, _sound.sound)("wing_flap", ppc);

      for (var i = 0; i < 10; i++) {
        var dir = dirs[i];
        var duration = 1000;
        if (i === 0) {
          duration = 0;
        }
        obj.call(this.changeAnimation(dir.animation)).to({ scaleX: dir.reverse ? -2.0 : 2.0 }, 0).to(dir.params, dir.speed);
      }

      obj.call(this.setInactive.bind(this)).call(this.birdLived).call(this.changeAnimation("up")).call(this.stopSound(this.flapping_sound)).to({ y: -100 }, 1000).wait(1000).call(this.removeBird);
    }
  }]);

  return Duck;
}();

exports.default = Duck;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprites = __webpack_require__(0);

var Sprites = _interopRequireWildcard(_sprites);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
  function UI(stage) {
    _classCallCheck(this, UI);

    this.stage = stage;

    this.shot_text = Sprites.bullet_ui();
    this.shot_text.scaleX = 3.0;
    this.shot_text.scaleY = 3.0;
    this.shot_text.x = 72;
    this.shot_text.y = 649;

    this.hits = 0;
    this.misses = 0;
    this.shotsLeft = 3;
    this.round = 1;
    this.duckStatus = [];
    var duck_x_pos = 295;
    for (var i = 0; i < 10; i++) {
      var sprite = Sprites.duck_ui();
      sprite.x = duck_x_pos;
      duck_x_pos += 23;
      sprite.y = 625;
      sprite.scaleY = 2.8;
      sprite.scaleX = 2.8;
      this.stage.addChild(sprite);
      this.duckStatus.push(sprite);
    }
    this.duckIndex = 0;
    this.duckCount = 1;

    this.bulletStatus = [];
    var bullet_x_pos = 80;
    for (var _i = 0; _i < 3; _i++) {
      var _sprite = Sprites.bullet();
      _sprite.x = bullet_x_pos;
      bullet_x_pos += 20;
      _sprite.y = 625;
      _sprite.scaleX = 2.8;
      _sprite.scaleY = 2.8;
      this.stage.addChild(_sprite);
      this.bulletStatus.push(_sprite);
    }

    this.menu_button = Sprites.main_menu_button();
    this.menu_button.x = 580;
    this.menu_button.y = 690;
    this.menu_button.scaleX = 1.5;
    this.menu_button.scaleY = 1.5;
    var menu_hit = new createjs.Shape();
    menu_hit.graphics.beginFill("#fff").drawRect(0, 0, 134, 12);
    this.menu_button.dh_button = true;
    this.menu_button.dh_btn_name = 'menu';
    this.menu_button.hitArea = menu_hit;
    this.menu_button.cursor = "pointer";

    this.pause_button = Sprites.pause_button();
    this.pause_button.x = 67;
    this.pause_button.y = 690;
    this.pause_button.scaleX = 1.5;
    this.pause_button.scaleY = 1.5;
    var pause_hit = new createjs.Shape();
    pause_hit.graphics.beginFill("#fff").drawRect(0, 0, 81, 14);
    this.pause_button.dh_button = true;
    this.pause_button.dh_btn_name = 'pause';
    this.pause_button.cursor = "pointer";
    this.pause_button.hitArea = pause_hit;

    this.hit_text = Sprites.hit_ui();
    this.hit_text.x = 195;
    this.hit_text.y = 625;
    this.hit_text.scaleX = 2.8;
    this.hit_text.scaleY = 2.8;

    this.flew_away_text = Sprites.flew_away_ui();
    this.flew_away_text.x = 275;
    this.flew_away_text.y = 225;
    this.flew_away_text.scaleX = 3.0;
    this.flew_away_text.scaleY = 3.0;
    this.flew_away_text.alpha = 0;

    this.roundCount = new createjs.Text('R = ' + this.round.toString(), "20px Arial", "#ffffff");
    this.roundCount.x = 80;
    this.roundCount.y = 595;
    this.roundCount.textBaseline = "alphabetic";

    this.stage.addChild(this.shot_text);
    this.stage.addChild(this.flew_away_text);
    this.stage.addChild(this.hit_text);
    this.stage.addChild(this.roundCount);
    this.stage.addChild(this.pause_button);
    this.stage.addChild(this.menu_button);
  }

  _createClass(UI, [{
    key: 'redraw',
    value: function redraw() {
      this.roundCount.text = 'R = ' + this.round.toString();
      this.setBullets();
    }
  }, {
    key: 'drawHitBox',
    value: function drawHitBox() {
      var x_pos = void 0;
      for (var i = 0; i < this.duckStatus.length; i++) {
        var status = this.duckStatus[i];
      }
    }
  }, {
    key: 'resetDuckStatus',
    value: function resetDuckStatus() {
      this.duckIndex = 0;
      this.duckStatus.forEach(function (status) {
        return status.gotoAndPlay("white");
      });
    }
  }, {
    key: 'launchDucks',
    value: function launchDucks() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.duckCount == n;
      for (var i = 0; i < n; i++) {
        this.duckStatus[this.duckIndex + i].gotoAndPlay("alt");
      }
    }
  }, {
    key: 'areDucksAligned',
    value: function areDucksAligned() {
      var foundWhite = false;
      for (var i = 0; i < 10; i++) {
        var duck = this.duckStatus[i];
        if (duck.currentAnimation === "red" && foundWhite) {
          return false;
        } else if (duck.currentAnimation === "white") {
          foundWhite = true;
        }
      }
      return true;
    }
  }, {
    key: 'shiftDucks',
    value: function shiftDucks(callback) {
      var _this = this;

      var loopingFunct = function loopingFunct() {
        if (_this.shiftDucksOnce()) {
          var ppc = new createjs.PlayPropsConfig().set({ duration: 300 });
          var soundHandle = createjs.Sound.play("hit_count", ppc);
          soundHandle.on("complete", loopingFunct);
        } else {
          _this.flashDucks(callback);
        }
      };
      loopingFunct();
    }
  }, {
    key: 'flashDucks',
    value: function flashDucks(callback) {
      this.duckStatus.forEach(function (status) {
        if (status.currentAnimation === "red") {
          status.gotoAndPlay("flash");
        }
      });
      callback();
    }
  }, {
    key: 'shiftDucksOnce',
    value: function shiftDucksOnce() {
      for (var i = 9; i >= 0; i--) {
        var duck = this.duckStatus[i];
        if (duck.currentAnimation === "white") {
          continue;
        } else if (duck.currentAnimation === "red") {
          for (var j = i - 1; j >= 0; j--) {
            var duckTwo = this.duckStatus[j];
            if (duckTwo.currentAnimation === "white") {
              //lets swap these two!
              duckTwo.gotoAndPlay("red");
              duck.gotoAndPlay("white");
              return true;
            }
          }
        }
      }
      return false;
    }
  }, {
    key: 'setBullets',
    value: function setBullets() {
      var _this2 = this;

      this.bulletStatus.forEach(function (bullet, idx) {
        if (_this2.shotsLeft > idx) {
          bullet.gotoAndPlay("black");
        } else {
          bullet.gotoAndPlay("empty");
        }
      });
    }
  }, {
    key: 'resetRound',
    value: function resetRound() {
      this.misses = 0;
      this.hits = 0;
      this.flew_away_text.alpha = 0.0;
      this.shotsLeft = 3;
      this.round++;
      this.resetDuckStatus();
      this.redraw();
    }
  }, {
    key: 'resetCycle',
    value: function resetCycle() {
      this.flew_away_text.alpha = 0.0;
      this.shotsLeft = 3;
      this.duckStatus[this.duckIndex].gotoAndPlay("alt");
      this.redraw();
    }
  }, {
    key: 'showFlewAway',
    value: function showFlewAway() {
      this.flew_away_text.alpha = 1;
    }
  }, {
    key: 'firedShot',
    value: function firedShot() {
      this.shotsLeft--;
      this.redraw();
    }
  }, {
    key: 'regMiss',
    value: function regMiss() {
      var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.misses++;
      var targetDuck = this.duckStatus[this.duckIndex];
      //used for double-duck cycles,  if the first duck is already flagged as dead, try the next one
      if (targetDuck.currentAnimation !== "alt") {
        targetDuck = this.duckStatus[this.duckIndex + 1];
      }
      targetDuck.gotoAndPlay("white");
      this.duckIndex++;
      this.redraw();
    }
  }, {
    key: 'regHit',
    value: function regHit() {
      var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.hits++;
      var targetDuck = this.duckStatus[this.duckIndex];
      //used for double-duck cycles,  if the first duck is already flagged as dead, try the next one
      if (targetDuck.currentAnimation !== "alt") {
        targetDuck = this.duckStatus[this.duckIndex + 1];
      }
      targetDuck.gotoAndPlay("red");
      this.duckIndex++;
      this.redraw();
    }
  }]);

  return UI;
}();

exports.default = UI;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

var _title = __webpack_require__(3);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('demoCanvas');
  canvas.addEventListener("click", function (e) {
    return getPosition(e);
  });
  var stage = new createjs.Stage("demoCanvas");
  stage.enableMouseOver();
  stage.mouseChildren = true;
  var board = void 0;
  var title = void 0;
  var titleMusic = void 0;
  var load_percent = void 0;
  var titleDisplayed = false;

  var getPosition = function getPosition(event) {
    var x = new Number();
    var y = new Number();

    if (event.x != undefined && event.y != undefined) {
      x = event.pageX;
      y = event.pageY;
    } else // Firefox method to get the position
      {
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    if (!titleDisplayed) board.handleClick(x, y);
  };
  var ticker = void 0;

  var handleTick = function handleTick(event) {
    stage.update(event);
  };
  createjs.Ticker.on("tick", handleTick.bind(undefined));
  setupLoadingScreen();

  var preload = new createjs.LoadQueue();
  window.preload = preload;
  preload.addEventListener("complete", loadComplete);
  preload.addEventListener("progress", preloadProgess);
  preload.installPlugin(createjs.Sound);
  preload.loadManifest([{ id: "intro", src: "audio/02-duck-hunt-intro.mp3" }, { id: "shot", src: "audio/99-gunshot-sfx-.mp3" }, { id: "wing_flap", src: "audio/99-duck-flapping-sfx-.mp3" }, { id: "falling", src: "audio/99-dead-duck-falls-sfx-.mp3" }, { id: "bark", src: "audio/99-bark-sfx-.mp3" }, { id: "ground_thud", src: "audio/99-dead-duck-lands-sfx-.mp3" }, { id: "laugh", src: "audio/99-laugh-sfx-.mp3" }, { id: "got_one", src: "audio/04-got-duck-s-.mp3" }, { id: "hit_count", src: "audio/99-counting-hits-sfx-.mp3" }, { id: "round-clear", src: "audio/05-round-clear.mp3" }, { id: "perfect", src: "audio/06-perfect.mp3" }, { id: "you-failed", src: "audio/07-you-failed.mp3" }, { id: "game-over", src: "audio/08-game-over.mp3" }, { id: "menu-beep", src: "audio/menu_sound.mp3" }, { id: "title_music", src: "audio/01-title-screen.mp3" }, { id: "title_img", src: "sprites/dhunttitle.png" }, { id: "duckhunt_img", src: "sprites/duckhunt.png" }, { id: "aboutme_img", src: "sprites/aboutme.png" }]);

  function preloadProgess(e) {
    load_percent.text = "Loading " + Math.floor(e.progress * 100) + "% Complete";
  }

  function setupLoadingScreen() {
    load_percent = new createjs.Text('Loading 0% Complete', "30px 'Press Start 2P'", "#000000");
    load_percent.x = 70;
    load_percent.y = 350;
    load_percent.textBaseline = "alphabetic";
    stage.addChild(load_percent);
  }

  var titleScreen = function titleScreen() {
    titleDisplayed = true;
    stage.removeAllChildren();
    board = null;
    createjs.Sound.stop();
    createjs.Tween.removeAllTweens();
    titleMusic = createjs.Sound.play("title_music");
    title.showTitle(start.bind(undefined));
  };
  var start = function start() {
    titleDisplayed = false;
    var count = title.count;
    title.hideTitle();
    titleMusic.stop();
    board = new _board2.default(stage, titleScreen.bind(undefined), count);
    board.intro();
  };
  function loadComplete() {
    stage.removeAllChildren();
    title = new _title2.default(stage);
    titleScreen();
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map