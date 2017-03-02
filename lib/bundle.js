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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(1);

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('demoCanvas');
  var board = new _board2.default(canvas);

  // cursor.x = 300;
  // board.drawDucks();
  board.gameLoop();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _duck = __webpack_require__(5);

var _duck2 = _interopRequireDefault(_duck);

var _sprites = __webpack_require__(6);

var Sprites = _interopRequireWildcard(_sprites);

var _ui = __webpack_require__(7);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(rootEl) {
    _classCallCheck(this, Board);

    this.stage = new createjs.Stage("demoCanvas");
    this.background_color = new createjs.Shape();
    this.background_color.graphics.beginFill("#3fbfff").drawRect(0, 0, 786, 720);
    this.background_color.addEventListener("click", this.handleMissClick.bind(this));

    this.stage.addChild(this.background_color);
    this.stage.addChild(this.background());
    this.ui = new _ui2.default(this.stage);
    this.initLeap();
    this.cursor = this.mkCursor();
    this.trigger = false;
    this.activeBirds = {};
    document.onkeydown = this.keyPressed.bind(this);
    createjs.Ticker.on("tick", this.handleTick.bind(this));

    //cycle variables
    this.bulletsLeft = 3;
    this.numBirds = 0;
    this.birdsLaunched = 0;
    this.flewAway = false;

    //round variables
    this.birdsLaunched = 0;
    this.killCount = 0;
    this.threshhold = 5;

    //game variables
    this.round = 1;
    this.score = 0;
  }

  _createClass(Board, [{
    key: 'birdsOnScreen',
    value: function birdsOnScreen() {
      return Object.keys(this.activeBirds).length;
    }
  }, {
    key: 'keyPressed',
    value: function keyPressed(e) {
      //used as alternate fire input for Leap mode.
      if (e.key === " ") {
        if (this.cursor.alpha === 1.0) {
          this.fire(this.cursor.x, this.cursor.y);
        }
      }
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
      // console.log("frame")
      // debugger
      // console.log(frame.pointables.length)\
      // if(frame.hands.length>0){
      //   const hand = frame.hands[0];
      // }
      if (frame.hands.length > 0) {
        this.cursor.alpha = 1;
      } else {
        this.cursor.alpha = 0;

        return;
      }
      if (frame.pointables.length > 0) {
        // this.tCursor.alpha=0;
        var palm = frame.hands[0];
        var posH = palm.stabilizedPalmPosition;
        var normP = frame.interactionBox.normalizePoint(posH);

        var indexF = frame.pointables[frame.pointables.length - 1];
        var posF = indexF.stabilizedTipPosition;
        var normalized = frame.interactionBox.normalizePoint(posF);

        this.cursor.x = 786 * normP[0];
        this.cursor.y = 720 * (1 - normP[1]);
        // if(frame.gestures.length > 0){
        //   console.log("gesture detected")
        // }
        // let thumb = null;
        // console.log(frame.hands.position)
        // if(frame.hands.length > 0){
        //   // console.log(frame.hands[0].palmPosition)
        // }
        // else{
        //   return
        // }
        console.log(frame.pointables.length);
        if (frame.pointables.length > 1) {
          // this.tCursor.alpha=1;
          var thumb = frame.pointables[0];
          var posT = thumb.stabilizedTipPosition;
          var normT = frame.interactionBox.normalizePoint(posT);
          // console.log(posT)
          var dist = Leap.vec3.dist([posT[0], posT[1], 0], [posF[0], posF[1], 0]);
          // const dist = Leap.vec3.dist(posT,posF);
          console.log(dist);
          if (dist < 10 && !this.trigger) {
            this.trigger = true;
            var x = this.cursor.x;
            var y = this.cursor.y;
            this.fire(x, y);
          } else if (dist > 15) {
            this.trigger = false;
          }

          // this.tCursor.x = 786*normT[0];
          // this.tCursor.y = 720 * (1-normT[1]);
        }

        // this.cursor.x = 786 * normalized[0]
        // this.cursor.y = 720 * (1-normalized[1])
      } else {
        this.cursor.alpha = 0;
        // this.tCursor.alpha = 0;
      }
      // frame.pointables.forEach(function(pointable) {
      //   var position = pointable.stabilizedTipPosition;
      //   var normalized = frame.interactionBox.normalizePoint(position);
      //
      //   var x = ctx.canvas.width * normalized[0];
      //   var y = ctx.canvas.height * (1 - normalized[1]);
      //
      //   // ctx.beginPath();
      //   // ctx.rect(x, y, 20, 20);
      //   // ctx.fill();
      // });
    }
  }, {
    key: 'fire',
    value: function fire(x, y) {
      console.log("BANG");
      var objs = this.stage.getObjectsUnderPoint(x, y, 2);
      console.log(objs);
      if (objs.length > 0) {
        // console.log(d)
        this.handleDuckShot(objs[0]);
      }
    }
  }, {
    key: 'handleDuckShot',
    value: function handleDuckShot(duck) {
      console.log(duck.id);
      this.activeBirds[duck.id].handleClick(null);
      // createjs.Tween.removeTweens(duck)
      // duck.gotoAndPlay("hit")
      // createjs.Tween.get(duck).wait(500).to({y:1600},1000)
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
      var data = {
        images: ["./sprites/duckhunt.png"],
        frames: [[0, 0, 256, 240]]
      };

      var spriteSheet = new createjs.SpriteSheet(data);
      var sprite = new createjs.Sprite(spriteSheet);
      sprite.dh_type = "background";
      sprite.scaleX = 3.0;
      sprite.scaleY = 3.0;
      // sprite.mouseEnabled = false;
      sprite.addEventListener("click", this.handleMissClick.bind(this));
      return sprite;
    }
  }, {
    key: 'handleMissClick',
    value: function handleMissClick(e) {
      console.log("miss");
      if (this.bulletsLeft === 0) {
        return;
      }
      this.ui.firedShot();
      this.bulletsLeft--;
      this.gameLoop();
    }
  }, {
    key: 'mkCursor',
    value: function mkCursor() {
      var box = new createjs.Shape();
      box.graphics.beginFill("#000").drawRect(0, 0, 10, 10);
      box.mouseEnabled = false;
      this.stage.addChild(box);
      return box;
    }
  }, {
    key: 'birdGone',
    value: function birdGone(id) {
      var _this2 = this;

      return function () {
        console.log("bird: " + id + (_this2.activeBirds[id].alive ? " is alive" : " is dead"));
        if (_this2.activeBirds[id].alive) {
          _this2.flewAway = true;
          _this2.ui.regMiss();
          _this2.numBirds--;
        } else {
          _this2.numBirds--;
          _this2.killCount++;
          _this2.ui.regHit();
        }
        // this.ui.resetCycle()
        // this.ui.firedShot();
        _this2.stage.removeChild(_this2.activeBirds[id].duck);
        delete _this2.activeBirds[id];
        if (Object.keys(_this2.activeBirds).length === 0) {
          _this2.allBirdsGone();
        }
      };
    }
  }, {
    key: 'allBirdsGone',
    value: function allBirdsGone() {
      console.log("all birds are gone :(");
      // this.ui.resetCycle();
      // this.drawDucks();
      this.gameLoop();
    }
  }, {
    key: 'startCycle',
    value: function startCycle() {
      this.bulletsLeft = 3;
      var n = 1;
      this.numBirds = 1;
      this.blueBackground();
      this.drawDucks(n);
      this.ui.resetCycle();
      this.ui.launchDucks(n);
    }
  }, {
    key: 'startRound',
    value: function startRound() {}
  }, {
    key: 'gameLoop',
    value: function gameLoop() {
      var _this3 = this;

      //birdslaunched == how many birds have been sent, at most 10
      //activeBirds == number of birds in the air,
      //bulletLeft
      console.log(this.bulletsLeft);
      //all birds launched, and none on screen
      if (this.birdsLaunched === 10 && this.birdsOnScreen() === 0) {
        //round end, test kill count
        console.log("round end!");
        if (this.killCount >= this.threshhold) {
          //restart loop and counters
          this.birdsLaunched = 0;
          this.killCount = 0;
          this.threshhold = 5; //TODO should increment as needed!
          this.ui.resetRound();
          this.blueBackground();
          this.drawDucks(); //TODO intelegently send 1 or 2 ducks
        } else {
          console.log("game over :(");
          //TODO do other game over stuff, a modal?
        }
      } else {
        console.log("inside else");
        //round is still ongoing.  test the cycle
        if (this.birdsOnScreen() !== 0 && this.bulletsLeft === 0) {
          console.log("missed all shots");
          this.redBackground();
          this.ui.showFlewAway();
          //still a bird in the air, let it be.
          //I guess do nothing?
          Object.keys(this.activeBirds).forEach(function (bird_key) {

            _this3.activeBirds[bird_key].flyaway();
          });
        } else if (this.birdsOnScreen() !== 0) {}
        //do nothing

        // else if(this.bulletsLeft === 0){
        //   console.log("ran out of bullets")
        //
        //   // this.drawDucks();
        //   //last bird has left.
        //   Object.keys(this.activeBirds).forEach((bird)=>{
        //     bird.flyaway();
        //   })
        // }
        else {
            console.log("inside else");
            this.startCycle();
            // this.ui.launchDucks(1)
            // this.drawDucks(1);
          }
      }
      // if(this.birdsLaunched === 10){
      //   console.log("round over")
      //   this.ui.resetRound()
      //   this.round++;
      //   this.birdsLaunched=0;
      //   this.bulletsLeft=3;
      //   //eventually do game win/loss checking
      // }
      // else{
      //   // if(this.bulletsLeft == 0)
      //   this.ui.resetCycle();
      // }
      // this.drawDucks();

    }
  }, {
    key: 'birdDied',
    value: function birdDied(id) {
      var _this4 = this;

      return function (e) {
        console.log("bird died");
        // this.numBirds--;
        _this4.killCount++;
        _this4.bulletsLeft--;
        _this4.ui.firedShot();
        // this.ui.regHit();
        _this4.ui.regHit();
      };
    }
  }, {
    key: 'birdLived',
    value: function birdLived(id) {
      var _this5 = this;

      return function (e) {
        console.log("bird lived");
        _this5.flewAway = true;
        _this5.ui.regMiss();
        _this5.redBackground();
        _this5.ui.showFlewAway();
        // this.ui.flewAway();
        // this.numBirds--;
      };
    }
  }, {
    key: 'removeBird',
    value: function removeBird(id) {
      var _this6 = this;

      return function (e) {
        console.log("removing bird");
        _this6.numBirds--;
        _this6.stage.removeChild(_this6.activeBirds[id].duck);
        delete _this6.activeBirds[id];
        _this6.gameLoop();
      };
    }
  }, {
    key: 'drawDucks',
    value: function drawDucks() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.birdsLaunched += n;
      for (var i = 0; i < n; i++) {
        var duck = new _duck2.default(i, this.birdDied(i).bind(this), this.birdLived(i).bind(this), this.removeBird(i).bind(this));
        this.activeBirds[i] = duck;
        this.stage.addChild(duck.duck);
        duck.moveDuck();
      }
    }
  }, {
    key: 'handleTick',
    value: function handleTick(event) {
      this.stage.update(event);
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprites = __webpack_require__(6);

var Sprites = _interopRequireWildcard(_sprites);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Duck = function () {
  function Duck(id, birdDied, birdLived, removeBird) {
    _classCallCheck(this, Duck);

    this.duck = Sprites.black_duck();
    this.duck.scaleX = 2.0;
    this.duck.scaleY = 2.0;
    this.duck.alpha = 0;
    this.duck.id = id;
    this.alive = true;
    this.birdLived = birdLived;
    this.birdDied = birdDied;
    this.removeBird = removeBird;
    this.handleClick = this.handleClick.bind(this);
    this.dh_type = "duck";
    this.clicked = false;

    // debugger
    var hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, 40, 40);
    this.duck.hitArea = hit;

    this.duck.addEventListener("click", this.handleClick);
    // this.duck.addEventListener("animationend", (event)=>(console.log("ended")))
    // this.moveDuck();
  }

  _createClass(Duck, [{
    key: "handleClick",
    value: function handleClick(e) {
      console.log("clicked");
      if (e !== null) e.stopPropagation();
      if (this.clicked) {
        return;
      }
      this.clicked = true;
      console.log("past clicked");

      createjs.Tween.removeTweens(this.duck);
      this.duck.removeEventListener("click", this.handleClick);
      this.duck.gotoAndPlay("hit");
      this.alive = false;
      createjs.Tween.get(this.duck).call(this.birdDied).wait(500).to({ y: 900 }, 1000).wait(1000).call(this.removeBird);
      // this.duck.removeAllTweens();
    }
  }, {
    key: "rand",
    value: function rand(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }, {
    key: "randMovement",
    value: function randMovement() {
      var _this = this;

      return function () {

        var x = _this.duck.x;
        var y = _this.duck.y;
        console.log("x: " + x + " y: " + y);
        return { x: _this.rand(100, 200) + x, y: _this.rand(100, 200) + y };
      };
    }
  }, {
    key: "flyaway",
    value: function flyaway() {
      createjs.Tween.removeTweens(this.duck);
      this.duck.removeEventListener("click", this.handleClick);
      // this.duck.gotoAndPlay("hit")
      // this.alive=true;
      createjs.Tween.get(this.duck).call(this.birdLived).call(this.changeAnimation("up")).to({ y: -100 }, 1000).wait(1000).call(this.removeBird);
    }
  }, {
    key: "genRandomPath",
    value: function genRandomPath(range) {
      var MAX_WIDTH = 730;
      var MAX_HEIGHT = 400;
      var xrow = [];
      var yrow = [];
      var abs_coords = [{ params: { alpha: 1.0, x: this.rand(0, MAX_WIDTH), y: this.rand(0, MAX_HEIGHT) } }];

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
        //{params:{x: 123, y:456, alpha: 1.0}, speed: 789, reverse:false,  animation:"fly_up"}

        //need to now find the angle of movement...
        var angleDeg = Math.atan2(Math.abs(y), Math.abs(x)) * (180 / Math.PI);
        // Math.atan2()
        // const a =
        // const dist = Math.sqrt(())
        // console.log(angleDeg)
        var animation = "fly_up";
        if (angleDeg < 40) animation = "fly_side";

        abs_coords.unshift({ params: { alpha: 1.0, x: last_x + x, y: last_y + y }, speed: 1500, reverse: x < 0, reverseY: y < 0, animation: animation });
        // abs_coords.unshift({alpha: 1, x: (last_x + x), y: (last_y + y)})
      }
      abs_coords.reverse();
      console.log(abs_coords);
      return abs_coords;
    }
  }, {
    key: "changeAnimation",
    value: function changeAnimation(ani) {
      var _this2 = this;

      return function () {
        return _this2.duck.gotoAndPlay(ani);
      };
    }
  }, {
    key: "moveDuck",
    value: function moveDuck() {
      var obj = createjs.Tween.get(this.duck, { loop: false });
      var dirs = this.genRandomPath(250);
      for (var i = 0; i < 10; i++) {
        var dir = dirs[i];
        var duration = 1500;
        if (i === 0) {
          duration = 0;
        }
        obj.call(this.changeAnimation(dir.animation)).to({ scaleX: dir.reverse ? -2.0 : 2.0 }, 0).to(dir.params, duration);
      }

      obj.call(this.birdLived).call(this.changeAnimation("up")).to({ y: -100 }, 1000).wait(1000).call(this.removeBird);
    }
  }]);

  return Duck;
}();

exports.default = Duck;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var black_duck = exports.black_duck = function black_duck() {
  var data = {
    images: ["./sprites/duckhunt.png"],
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

var duck_ui = exports.duck_ui = function duck_ui() {
  var data = {
    images: ["./sprites/duckhunt.png"],
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
    images: ["./sprites/duckhunt.png"],
    frames: [[85, 245, 23, 7]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var flew_away_ui = exports.flew_away_ui = function flew_away_ui() {
  var data = {
    images: ["./sprites/duckhunt.png"],
    frames: [[312, 242, 73, 17]]
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet);
};

var bullet_ui = exports.bullet_ui = function bullet_ui() {
  var data = {
    images: ["./sprites/duckhunt.png"],
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
    images: ["./sprites/duckhunt.png"],
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprites = __webpack_require__(6);

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
    // this.duckStatus = ['M','M','M','M','M','M','M','M','M','M'];
    // this.duckStatus = ['M','M','M','M','M','M','M','M','M','M'];
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

    this.roundCount = new createjs.Text(this.round.toString(), "20px Arial", "#ffffff");
    this.roundCount.x = 100;
    this.roundCount.y = 595;
    this.roundCount.textBaseline = "alphabetic";

    // this.shotCount=new createjs.Text(this.shotsLeft.toString(), "20px Arial", "#ffffff");
    // this.shotCount.x = 100;
    // this.shotCount.y = 650;
    // this.shotCount.textBaseline = "alphabetic";

    // this.hitCount = new createjs.Text(this.hits.toString(), "20px Arial", "#ffffff")
    // this.hitCount.x=200;
    // this.hitCount.y=600;
    // this.hitCount.textBaseline="alphabetic";
    //
    // this.missCount = new createjs.Text(this.misses.toString(),"20px Arial", "#ffffff")
    // this.missCount.x=400;
    // this.missCount.y = 600;
    // this.missCount.textBaseline="alphabetic";

    this.stage.addChild(this.shot_text);
    this.stage.addChild(this.flew_away_text);
    this.stage.addChild(this.hit_text);
    this.stage.addChild(this.roundCount);
    // this.stage.addChild(this.shotCount);
    // this.stage.addChild(this.hitCount);
    // this.stage.addChild(this.missCount);
  }

  _createClass(UI, [{
    key: "redraw",
    value: function redraw() {
      // debugger
      // this.hitCount.text = this.hits.toString();
      // this.missCount.text = this.misses.toString();
      // this.shotCount.text = (this.shotsLeft < 0 ? "0" : this.shotsLeft.toString())
      this.setBullets();
    }
  }, {
    key: "drawHitBox",
    value: function drawHitBox() {
      // this.duckStatus
      var x_pos = void 0;
      for (var i = 0; i < this.duckStatus.length; i++) {
        var status = this.duckStatus[i];
      }
    }
  }, {
    key: "resetDuckStatus",
    value: function resetDuckStatus() {
      this.duckIndex = 0;
      this.duckStatus.forEach(function (status) {
        return status.gotoAndPlay("white");
      });
    }
  }, {
    key: "launchDucks",
    value: function launchDucks() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.duckCount == n;
      for (var i = 0; i < n; i++) {
        this.duckStatus[this.duckIndex + i].gotoAndPlay("alt");
      }
    }
  }, {
    key: "setBullets",
    value: function setBullets() {
      var _this = this;

      this.bulletStatus.forEach(function (bullet, idx) {
        if (_this.shotsLeft > idx) {
          bullet.gotoAndPlay("black");
        } else {
          bullet.gotoAndPlay("empty");
        }
      });
    }
  }, {
    key: "resetRound",
    value: function resetRound() {
      this.misses = 0;
      this.hits = 0;
      this.shotsLeft = 3;
      this.roundCount++;
      this.resetDuckStatus();
      this.redraw();
    }
  }, {
    key: "resetCycle",
    value: function resetCycle() {
      this.flew_away_text.alpha = 0.0;
      this.shotsLeft = 3;
      this.duckStatus[this.duckIndex].gotoAndPlay("alt");
      this.redraw();
    }
  }, {
    key: "showFlewAway",
    value: function showFlewAway() {
      this.flew_away_text.alpha = 1;
      // this.background_color
    }
  }, {
    key: "firedShot",
    value: function firedShot() {
      this.shotsLeft--;
      this.redraw();
    }
  }, {
    key: "regMiss",
    value: function regMiss() {
      var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.misses++;
      // this.shotsLeft--;
      var targetDuck = this.duckStatus[this.duckIndex];
      //used for double-duck cycles,  if the first duck is already flagged as dead, try the next one
      if (targetDuck.currentAnimation !== "alt") {
        console.log("2nd miss");
        targetDuck = this.duckStatus[this.duckIndex + 1];
      }
      targetDuck.gotoAndPlay("white");
      this.duckIndex++;
      this.redraw();
    }
  }, {
    key: "regHit",
    value: function regHit() {
      var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.hits++;
      // this.shotsLeft--;
      // this.duckStatus[this.duckIndex].gotoAndPlay("red");
      var targetDuck = this.duckStatus[this.duckIndex];
      //used for double-duck cycles,  if the first duck is already flagged as dead, try the next one
      if (targetDuck.currentAnimation !== "alt") {
        console.log("2nd miss");

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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map