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
  board.drawDucks();
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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(rootEl) {
    _classCallCheck(this, Board);

    this.stage = new createjs.Stage("demoCanvas");
    this.stage.addChild(this.background());
    this.initLeap();
    this.cursor = this.mkCursor();
    this.trigger = false;
    // this.tCursor= this.mkCursor();
    // this.stage = rootEl;
    this.activeBirds = {};
  }

  _createClass(Board, [{
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
      if (frame.pointables.length > 0) {
        this.cursor.alpha = 1;
        // this.tCursor.alpha=0;
        var indexF = frame.pointables[frame.pointables.length - 1];
        var posF = indexF.stabilizedTipPosition;
        var normalized = frame.interactionBox.normalizePoint(posF);

        // if(frame.gestures.length > 0){
        //   console.log("gesture detected")
        // }
        // let thumb = null;
        if (frame.pointables.length > 1) {
          // this.tCursor.alpha=1;
          var thumb = frame.pointables[0];
          var posT = thumb.stabilizedTipPosition;
          var normT = frame.interactionBox.normalizePoint(posT);
          // console.log(posT)
          var dist = Leap.vec3.dist([posT[0], posT[1], 0], [posF[0], posF[1], 0]);
          // const dist = Leap.vec3.dist(posT,posF);
          if (dist < 20 && !this.trigger) {
            this.trigger = true;
            var x = 786 * normalized[0];
            var y = 720 * (1 - normalized[1]);
            this.fire(x, y);
          } else if (dist > 25) {
            this.trigger = false;
          }

          // this.tCursor.x = 786*normT[0];
          // this.tCursor.y = 720 * (1-normT[1]);
        }

        this.cursor.x = 786 * normalized[0];
        this.cursor.y = 720 * (1 - normalized[1]);
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
      var objs = this.stage.getObjectsUnderPoint(x, y, 1);
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
      createjs.Tween.removeTweens(duck);
      duck.gotoAndPlay("hit");
      createjs.Tween.get(duck).wait(500).to({ y: 1600 }, 1000);
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
      sprite.scaleX = 3.0;
      sprite.scaleY = 3.0;
      sprite.mouseEnabled = false;
      return sprite;
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
    key: 'drawDucks',
    value: function drawDucks() {
      // const circle = Duck.getCircle();
      var d1 = new _duck2.default(1);
      var d2 = new _duck2.default(2);
      var d3 = new _duck2.default(3);
      // this.stage.addChild(circle);
      // this.stage.update();
      this.stage.addChild(d1.duck);
      this.stage.addChild(d2.duck);
      this.stage.addChild(d3.duck);

      d1.moveDuck();
      d2.moveDuck();
      d3.moveDuck();

      // this.stage.addChild(Sprites.animation)
      createjs.Ticker.on("tick", this.handleTick.bind(this));
    }
  }, {
    key: 'handleTick',
    value: function handleTick(event) {
      // console.log("tick")
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import * as Sprites from './sprites';
var Duck = function () {
  function Duck(id) {
    var _this = this;

    _classCallCheck(this, Duck);

    // this.duck = Sprites.animation;
    // let data = {
    //   images: ["./sprites/duckhunt.png"],
    //   frames: {width:64, height:64, count:9, regX: 32, regY:64, spacing:0, margin:0},
    //   animations:{
    //     fly:[0,1,2]
    //   },
    //   framerate:7
    // }
    var data = {
      images: ["./sprites/duckhunt.png"],
      frames: [[266, 115, 27, 31], [297, 117, 32, 29], [331, 117, 25, 31], [367, 121, 34, 29], [405, 131, 34, 20], [442, 129, 34, 24], [484, 124, 31, 29], [525, 123, 18, 31], [549, 123, 18, 31]],
      animations: {
        fly_up: [0, 2],
        fly_side: [3, 5],
        hit: [6, 6, "fall", 0.5],
        fall: [7, 8]
      },
      framerate: 7
    };

    var spriteSheet = new createjs.SpriteSheet(data);
    this.duck = new createjs.Sprite(spriteSheet, "fly_up");
    this.duck.scaleX = 2.0;
    this.duck.scaleY = 2.0;
    this.duck.id = id;

    // debugger
    var hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, 30, 30);
    this.duck.hitArea = hit;

    this.duck.addEventListener("click", function (event) {
      return _this.handleClick(event);
    });
    // this.moveDuck();
  }

  _createClass(Duck, [{
    key: "handleClick",
    value: function handleClick(e) {
      console.log("clicked");
      createjs.Tween.removeTweens(this.duck);
      this.duck.gotoAndPlay("hit");
      createjs.Tween.get(this.duck).wait(500).to({ y: 1600 }, 1000);
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
      var _this2 = this;

      return function () {

        var x = _this2.duck.x;
        var y = _this2.duck.y;
        console.log("x: " + x + " y: " + y);
        return { x: _this2.rand(100, 200) + x, y: _this2.rand(100, 200) + y };
      };
    }

    // nextRandomStep(){
    //   createjs.Tween.get(this.duck, { loop: false })
    //   .to(this.randMovement()(),1000).call(this.nextRandomStep())
    // }


  }, {
    key: "genRandomPath",
    value: function genRandomPath(range) {
      var MAX_WIDTH = 450;
      var MAX_HEIGHT = 300;
      var xrow = [];
      var yrow = [];
      var abs_coords = [{ x: this.rand(0, MAX_WIDTH), y: this.rand(0, MAX_HEIGHT) }];

      //generate absolute coord paths
      for (var i = 0; i < 10; i++) {
        var last_x = abs_coords[0].x;
        var last_y = abs_coords[0].y;
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

        abs_coords.unshift({ x: last_x + x, y: last_y + y });
      }

      console.log(abs_coords);
      return abs_coords;
    }
  }, {
    key: "moveDuck",
    value: function moveDuck() {
      var obj = createjs.Tween.get(this.duck, { loop: false });
      // .to(this.randMovement()(),1000)

      var dirs = this.genRandomPath(100);
      for (var i = 0; i < 10; i++) {
        var duration = 1000;
        if (i === 0) {
          duration = 0;
        }
        obj.to(dirs[i], duration);
      }

      obj.to({ y: -100 }, 1000);
      // .call(this.moveDuck())
      // createjs.Tween.get(this.duck, { loop: false })
      // .to(this.randMovement()(),1000)
      // .to(this.randMovement()(),1000)
      // .to(this.randMovement()(),1000)
      // .to(this.randMovement()(),1000)
      //
      // console.log(this.duck.x)
      // .to({x: (this.rand(100,200)+this.duck.x), y: (this.rand(100,200)+this.duck.y)}, 1000)
      // .to({x: (this.rand(100,200)+this.duck.x), y: (this.rand(100,200)+this.duck.y)}, 1000)
      // .to({x: (this.rand(100,200)+this.duck.x), y: (this.rand(100,200)+this.duck.y)}, 1000)
      // .to({x: (this.rand(100,200)+this.duck.x), y: (this.rand(100,200)+this.duck.y)}, 1000);
      // debugger
      // .to({x:100,y:100}, 1000)
      // .to({x:"+75",y:"+75"},1000)
      // .to({x:"+100",y:"+100"}, 1000)
      // .to({x:"+34",y:"+56"}, 1000)
      // .to({x:"+23",y:"+67"}, 1000)

      // const relativeTween = new createjs.Tween(this.duck).to({x:"+100"});
      //
      // relativeTween.start();


      // .to({y: "+100"}, 400)
      // .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
      // .to({ y: 175 }, 500, createjs.Ease.getPowInOut(2))
      // .to({ y: 225 }, 100)
      // .to({ y: 200 }, 500, createjs.Ease.getPowInOut(2))
      // .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
    }
  }], [{
    key: "getCircle",
    value: function getCircle() {
      var circle = new createjs.Shape();
      circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
      circle.x = 100;
      circle.y = 100;
      return circle;
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
var data = {
  images: ["./sprites/duckhunt.png"],
  frames: [[263, 110, 36, 36], [297, 110, 36, 36], [333, 110, 36, 36]],
  animations: {
    fly: [0, 1, 2]
  },
  framerate: 7
};

var spriteSheet = exports.spriteSheet = new createjs.SpriteSheet(data);
var animation = exports.animation = new createjs.Sprite(spriteSheet, "run");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map