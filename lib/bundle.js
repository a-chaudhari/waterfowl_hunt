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
  // debugger
  var data = {
    // images: ["sprites/dhunttitle.png"],
    images: [window.preload.getResult('title_img')],
    frames: [[0, 0, 256, 244]]
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

var flew_away_ui = exports.flew_away_ui = function flew_away_ui() {
  var data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [[312, 242, 73, 17]]
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
var registerSounds = exports.registerSounds = function registerSounds() {
  createjs.Sound.registerSound('audio/02-duck-hunt-intro.mp3', "intro");
  createjs.Sound.registerSound('audio/99-duck-flapping-sfx-.mp3', "wing_flap");
  createjs.Sound.registerSound('audio/shot.mp3', "shot");
  createjs.Sound.registerSound('audio/falling.mp3', "falling");
  createjs.Sound.registerSound('audio/ground_thud.mp3', "ground_thud");

  // createjs.Sound.registerSound('audio/bark.mp3',"bark");
  // createjs.Sound.registerSound('audio/game_over.mp3',"game_over");
  // createjs.Sound.registerSound('audio/missed.mp3',"missed");
  // createjs.Sound.registerSound('audio/quack.mp3',"quack");
  // createjs.Sound.registerSound('audio/caught_one.mp3',"caught_one");
  // createjs.Sound.registerSound('audio/points.mp3',"points");
  // createjs.Sound.registerSound('audio/menu_sound.mp3',"menu_sound");
  // createjs.Sound.registerSound('audio/bark.mp3',"bark");
  // createjs.Sound.registerSound('audio/bark.mp3',"bark");
};

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
    _classCallCheck(this, Board);

    this.stage = stage;
    this.title = title;
    this.background_color = new createjs.Shape();
    this.background_color.graphics.beginFill("#3fbfff").drawRect(0, 0, 786, 720);
    // this.background_color.addEventListener("click",this.handleMissClick.bind(this));
    // this.stage.on("click",this.handleClick.bind(this))
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
    // createjs.Ticker.on("tick", this.handleTick.bind(this));

    this.dog = Sprites.dog_intro();
    this.dog.scaleX = 2.8;
    this.dog.scaleY = 2.8;
    this.dog.x = 15;
    this.dog.y = 445;
    this.stage.addChild(this.dog);

    //cycle variables
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
    this.duckCount = 1;
    // this.intro();
  }

  _createClass(Board, [{
    key: 'handleClick',
    value: function handleClick(x, y) {
      // debugger
      // console.log(e)
      var tgt = this.stage.getObjectUnderPoint(x, y);
      if (tgt.dh_type === true) {
        console.log("DUCK");
        // console.log(tgt)
        tgt.dh_obj.handleClick();
      } else {
        this.handleMissClick();
        console.log("no");
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
      //used as alternate fire input for Leap mode.
      // console.log("button")
      if (e.key === "z") {
        if (this.cursor.alpha === 1.0) {
          this.fire(this.cursor.x, this.cursor.y);
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
        // this.dog.alpha=1.0;
      }
      obj.call(this.changeAnimation(this.dog, "sniff")).wait(1000).to({ x: 300 }, 2000).call(this.changeAnimation(this.dog, "sniff")).wait(1000).call(this.changeAnimation(this.dog, "happy")).call(this.playSound("bark", ppc)).wait(500).call(this.changeAnimation(this.dog, "jumping")).to({ x: 350, y: 300 }, 500).call(this.shiftToBehindBackground(this.dog).bind(this)).call(this.changeAnimation(this.dog, "landing")).to({ x: 400, y: 500 }, 500).to({ x: 350, y: 500 }).call(this.gameLoop.bind(this));
      // .to({alpha:0})

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
      // if(frame.hands.length>0){
      //   this.cursor.alpha=1;

      // console.log("hi")
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

      // return;
      //
      // if(frame.hands.length > 0){
      //   this.cursor.alpha=1;
      //   const h = frame.hands;
      //
      //   let leftH  = null;
      //   let rightH = null;
      //   for(let i = 0; i< h.length; i++){
      //     if( h[i].type=== "left"){
      //       leftH = h[i]
      //     }
      //     else{
      //       rightH=h[i]
      //     }
      //   }
      //
      //   if (rightH === null) return;
      //
      //   const indexF = rightH.indexFinger;
      //   const posF = indexF.stabilizedTipPosition;
      //   const normF = frame.interactionBox.normalizePoint(posF)
      //
      //   // console.log(posF)
      //   this.cursor.x = (786) * normF[0];
      //   this.cursor.y = (720) * (1-normF[1]);
      //
      //   if(leftH === null) return;
      //   // console.log(leftH.thumb)
      //   // console.log(leftH.indexFinger)\
      //   // console.log(leftH.fingers.length)
      //   // console.log(leftH.indexFinger.valid)
      //   const palm = leftH.palmPosition;
      //   const index = leftH.indexFinger.tipPosition;
      //   // const dist = Leap.vec3.dist([palm[0],palm[1],0], [index[0],index[1],0]);
      //   const dist3 = Leap.vec3.dist(palm, index);
      //   console.log(dist3)
      //   console.log(leftH.confidence)
      //   // if(dist3 < 60)
      //   if(dist3 < 60 && !this.trigger){
      //     console.log("BANG")
      //     console.log(leftH.confidence)
      //     const x = this.cursor.x
      //     const y = this.cursor.y
      //     this.fire(x,y);
      //     this.trigger = true;
      //   }else if(dist3 > 80 && this.trigger){
      //     console.log("reloaded");
      //     this.trigger=false;
      //   }
      // }
      // else{
      //   this.cursor.alpha=0;
      // }


      //intentionally skipping rest...
      // return;
      //
      // if(leftH.pointables.length < 1) return;
      // const lIndex = leftH.indexFinger;
      // const lThumb = leftH.thumb;
      // if(lIndex  === undefined || lThumb === undefined) return;
      // // console.log(lIndex.position + " " + lThumb.position)
      //
      // const lIndexPos = lIndex.tipPosition;
      // const lThumbPos = lThumb.tipPosition;
      //
      //
      // const dist = Leap.vec3.dist([lThumbPos[0],lThumbPos[1],0], [lIndexPos[0],lIndexPos[1],0]);
      // // console.log(dist);
      //
      // if(dist < 15 && !this.trigger){
      //   console.log("BANG")
      //   const x = this.cursor.x
      //   const y = this.cursor.y
      //   this.fire(x,y);
      //   this.trigger = true;
      //
      // }
      // else if(dist > 20 && this.trigger){
      //   console.log("reloaded");
      //   this.trigger=false;
      // }


      //
      // }
      // else{
      //   this.cursor.alpha = 0;
      //
      //   return
      // // }
      // if(frame.pointables.length > 0){
      //   // this.tCursor.alpha=0;
      //   this.cursor.alpha=1;
      //   const palm = frame.hands[0]
      //   const posH = palm.stabilizedPalmPosition;
      //   const normP = frame.interactionBox.normalizePoint(posH);
      //
      //   const indexF = frame.pointables[frame.pointables.length-1];
      //   const posF = indexF.stabilizedTipPosition;
      //   const normalized = frame.interactionBox.normalizePoint(posF)
      //
      //
      //   this.cursor.x = 786 * normalized[0]
      //   this.cursor.y = 720 * (1-normalized[1])
      // this.cursor.x = 786 * normP[0]
      // this.cursor.y = 720 * (1-normP[1])
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
      // console.log(frame.pointables.length)
      // if(frame.pointables.length > 1){
      //   // this.tCursor.alpha=1;
      //   const thumb = frame.pointables[0]
      //   const posT = thumb.stabilizedTipPosition;
      //   const normT = frame.interactionBox.normalizePoint(posT)
      //   // console.log(posT)
      //   const dist = Leap.vec3.dist([posT[0],posT[1],0], [posF[0],posF[1],0]);
      //   // const dist = Leap.vec3.dist(posT,posF);
      //   // console.log(dist)
      //   if( dist < 10 && !this.trigger){
      //     this.trigger = true;
      //     const x = this.cursor.x
      //     const y = this.cursor.y
      //     this.fire(x,y);
      //   }else if(dist > 15){
      //     this.trigger = false;
      //   }

      // this.tCursor.x = 786*normT[0];
      // this.tCursor.y = 720 * (1-normT[1]);
      //   }
      //
      //   // this.cursor.x = 786 * normalized[0]
      //   // this.cursor.y = 720 * (1-normalized[1])
      // }
      // else{
      //   this.cursor.alpha = 0;
      //   // this.tCursor.alpha = 0;
      // }
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
      if (objs.length > 0 && objs[0].dh_type !== undefined) {
        for (var i = 0; i < objs.length; i++) {
          if (objs[i].dh_type === true) {
            this.handleDuckShot(objs[i]);
            return;
          }
        }
        // console.log(d)
      }
      this.handleMissClick();
    }
  }, {
    key: 'handleDuckShot',
    value: function handleDuckShot(duck) {
      console.log(duck.id);
      console.log(this);
      if (!this.allowClick) return;
      // debugger
      // console.log(activeBirds)

      this.activeBirds[duck.dh_id].handleClick(null);
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
        frames: [[0, 0, 256, 240] //240
        // [0, 0, 256, 190] //240
        ]
      };

      var spriteSheet = new createjs.SpriteSheet(data);
      var sprite = new createjs.Sprite(spriteSheet);
      sprite.dh_type = "background";
      sprite.scaleX = 3.0;
      sprite.scaleY = 3.0;
      // sprite.mouseEnabled = false;
      // sprite.addEventListener("click",this.handleMissClick.bind(this));
      return sprite;
    }
  }, {
    key: 'handleMissClick',
    value: function handleMissClick(e) {
      console.log("miss");
      if (!this.allowClick) return;
      if (this.bulletsLeft === 0) {
        return;
      }
      (0, _sound.sound)("shot");
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
      box.alpha = 0;
      this.stage.addChild(box);
      return box;
    }
    //
    // birdGone(id){
    //
    //   return ()=>{
    //     console.log("bird: " + id + (this.activeBirds[id].alive ? " is alive" : " is dead"))
    //     if(this.activeBirds[id].alive)
    //     {
    //       this.flewAway = true;
    //       this.ui.regMiss();
    //       this.numBirds--;
    //     }
    //     else{
    //       this.numBirds--;
    //       this.killCount++;
    //       this.ui.regHit();
    //     }
    //     // this.ui.resetCycle()
    //     // this.ui.firedShot();
    //     this.stage.removeChild(this.activeBirds[id].duck)
    //     delete this.activeBirds[id]
    //     if(Object.keys(this.activeBirds).length === 0){
    //       this.allBirdsGone();
    //     }
    //   }
    //
    // }
    //
    // allBirdsGone(){
    //   console.log("all birds are gone :(")
    //   // this.ui.resetCycle();
    //   // this.drawDucks();
    //   this.gameLoop();
    // }

  }, {
    key: 'startCycle',
    value: function startCycle() {
      this.bulletsLeft = 3;
      var n = this.duckCount;
      this.numBirds = 1;
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
        if (!this.finishedPost) {
          this.finishedPost = true;
          this.ui.shiftDucks(this.playEndingMusic.bind(this));
          return;
        }
        if (this.killCount >= this.threshhold) {

          //yay you won. play correct sound

          //restart loop and counters
          this.birdsLaunched = 0;
          this.killCount = 0;
          this.threshhold = 5; //TODO should increment as needed!
          this.ui.resetRound();
          this.blueBackground();
          this.round++;
          this.finishedPost = false;
          this.intro();
          // this.drawDucks(this.duckCount) //TODO intelegently send 1 or 2 ducks
        } else {
          console.log("game over :(");
          this.title();
          //TODO do other game over stuff, a modal?
        }
      } else {
        console.log("inside else");
        //round is still ongoing.  test the cycle
        if (this.anyLivingBirdsOnScreen() && this.bulletsLeft === 0) {
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
    key: 'happyDog',
    value: function happyDog() {
      this.dog.gotoAndPlay("one");
      var obj = createjs.Tween.get(this.dog);
      obj.call(this.playSound("got_one")).to({ y: 375 }, 500).wait(500).to({ y: 600 }, 1000).call(this.gameLoop.bind(this));
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
        // sound("falling");
        // this.ui.regHit();
        // this.happyDog();
        _this4.ui.regHit();
      };
    }
  }, {
    key: 'laughingDog',
    value: function laughingDog() {
      this.dog.gotoAndPlay("laughing");
      var ppc = new createjs.PlayPropsConfig().set({ delay: 500 });
      var obj = createjs.Tween.get(this.dog);
      obj.wait(2000).call(this.playSound("laugh", ppc).bind(this)).to({ y: 375 }, 1000).wait(1000).to({ y: 600 }, 1000).call(this.gameLoop.bind(this));
    }
  }, {
    key: 'birdLived',
    value: function birdLived(id) {
      var _this5 = this;

      return function (e) {
        console.log("bird lived");
        _this5.flewAway = true;
        _this5.ui.regMiss();
        _this5.allowClick = false;
        _this5.redBackground();
        _this5.ui.showFlewAway();
        _this5.laughingDog();
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
        if (_this6.activeBirds[id].alive) {
          // this.laughingDog();
        } else {
          _this6.happyDog();
        }
        _this6.allowClick = false;
        delete _this6.activeBirds[id];
        // this.gameLoop();
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
      var _this7 = this;

      return function (e) {

        _this7.stage.setChildIndex(obj, _this7.stage.getChildIndex(_this7.background));
      };
    }
  }, {
    key: 'drawDucks',
    value: function drawDucks() {
      var _this8 = this;

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
        _this8.activeBirds[key].moveDuck();
      });
      // duck.moveDuck();
    }

    // handleTick(event) {
    //     this.stage.update(event);
    // }


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
    this.start;
    this.aboutMeCont = this.aboutMeContainer();
    this.title = this.titleImage();
  }

  _createClass(Title, [{
    key: "beep",
    value: function beep() {
      createjs.Sound.play("menu-beep");
    }
  }, {
    key: "showTitle",
    value: function showTitle(start) {
      console.log("showing");
      this.start = start;
      this.stage.addChild(this.title);
      this.startButton();
      this.aboutButton();
      this.gunButton();
    }
  }, {
    key: "gunButton",
    value: function gunButton() {
      var obj = new createjs.Shape();
      obj.graphics.beginFill("#fff").drawRect(0, 0, 550, 60);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#fff").drawRect(0, 0, 550, 60);
      obj.x = 110;
      obj.y = 545;
      obj.cursor = "pointer";
      obj.alpha = 0.0;
      obj.hitArea = hit;
      obj.on("click", this.lightGun.bind(this));
      this.stage.addChild(obj);
    }
  }, {
    key: "lightGun",
    value: function lightGun() {
      console.log("light gun");
      window.location = "https://github.com/a-chaudhari/waterfowl_hunt/blob/master/docs/lightgun.md";
      this.beep();
    }
  }, {
    key: "hideTitle",
    value: function hideTitle() {
      this.stage.removeChild(this.title);
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
      // obj.graphics.g
    }
  }, {
    key: "startButton",
    value: function startButton() {
      var obj = new createjs.Shape();
      obj.graphics.beginFill("#fff").drawRect(0, 0, 350, 50);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#fff").drawRect(0, 0, 350, 50);
      obj.x = 200;
      obj.y = 400;
      obj.cursor = "pointer";
      obj.alpha = 0.0;
      obj.hitArea = hit;
      obj.on("click", this.startGame.bind(this));
      this.stage.addChild(obj);
    }
  }, {
    key: "startGame",
    value: function startGame() {
      console.log("starting");
      this.beep();
      this.start();
    }
  }, {
    key: "aboutButton",
    value: function aboutButton() {
      var obj = new createjs.Shape();
      obj.graphics.beginFill("#fff").drawRect(0, 0, 350, 50);
      var hit = new createjs.Shape();
      hit.graphics.beginFill("#fff").drawRect(0, 0, 350, 50);
      obj.x = 200;
      obj.y = 470;
      obj.cursor = "pointer";
      obj.alpha = 0.0;
      obj.hitArea = hit;
      obj.on("click", this.aboutMe.bind(this));
      this.stage.addChild(obj);
    }
  }, {
    key: "aboutMeContainer",
    value: function aboutMeContainer() {
      var cont = new createjs.Container();

      var background = new Sprites.aboutMe();
      cont.addChild(background);
      // cont.a
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
      console.log("gh link");
      this.beep();
      window.location = "https://github.com/a-chaudhari/waterfowl_hunt";
    }
  }, {
    key: "website_link",
    value: function website_link() {
      console.log("website");
      this.beep();
      window.location = "http://www.amitchaudhari.com";
    }
  }, {
    key: "backButton",
    value: function backButton() {
      this.beep();
      this.stage.removeChild(this.aboutMeCont);
    }
  }, {
    key: "aboutMe",
    value: function aboutMe() {
      console.log("about me");
      this.stage.addChild(this.aboutMeCont);
      this.beep();
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
    this.alive = true;
    this.birdLived = birdLived;
    this.birdDied = birdDied;
    this.removeBird = removeBird;
    this.handleClick = this.handleClick.bind(this);
    this.dh_type = "duck";
    this.clicked = false;
    this.round = round;

    this.flapping_sound;
    this.lastSound = null;
    // debugger
    var hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(-5, -5, 40, 40);
    this.duck.hitArea = hit;

    // this.duck.addEventListener("click", this.handleClick)
    // this.duck.addEventListener("animationend", (event)=>(console.log("ended")))
    // this.moveDuck();
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
      console.log("clicked");
      // createjs.Sound.play("shot");
      (0, _sound.sound)("shot");
      // if(e !== null) e.stopPropagation();
      if (this.clicked) {
        return;
      }
      this.clicked = true;
      console.log("past clicked");

      createjs.Tween.removeTweens(this.duck);
      // this.duck.removeEventListener("click",this.handleClick)
      this.duck.gotoAndPlay("hit");
      this.alive = false;
      createjs.Tween.get(this.duck).call(this.birdDied).call(this.stopSound(this.flapping_sound)).wait(500).call(this.playSound("falling")).to({ y: 480 }, 1000).call(this.playSound('ground_thud', true)).wait(1000).call(this.removeBird);
      // this.duck.removeAllTweens();
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
        console.log("x: " + x + " y: " + y);
        return { x: _this2.rand(100, 200) + x, y: _this2.rand(100, 200) + y };
      };
    }
  }, {
    key: 'flyaway',
    value: function flyaway() {
      createjs.Tween.removeTweens(this.duck);
      // this.duck.removeEventListener("click",this.handleClick)
      // this.duck.gotoAndPlay("hit")
      // this.alive=true;
      createjs.Tween.get(this.duck).call(this.birdLived).call(this.changeAnimation("up")).call(this.stopSound(this.flapping_sound)).to({ y: -100 }, 1000).wait(1000).call(this.removeBird);
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
      // let abs_coords = [{params:{alpha:1.0, x:this.rand(0,MAX_WIDTH),y:this.rand(0,MAX_HEIGHT)}}];
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
        //{params:{x: 123, y:456, alpha: 1.0}, speed: 789, reverse:false,  animation:"fly_up"}

        var dist = Math.floor(Math.sqrt(Math.pow(y, 2) + Math.pow(x, 2)));
        //need to now find the angle of movement...
        console.log(dist);
        //dist/time = speed
        //dist/speed = time
        //lets say fixed speed of 100...
        var angleDeg = Math.atan2(Math.abs(y), Math.abs(x)) * (180 / Math.PI);
        // Math.atan2()
        // const a =
        // const dist = Math.sqrt(())
        // console.log(angleDeg)
        var animation = "fly_up";
        if (angleDeg < 40) animation = "fly_side";

        abs_coords.unshift({ params: { alpha: 1.0, x: last_x + x, y: last_y + y }, speed: dist / this.getDiffCoeff(), reverse: x < 0, reverseY: y < 0, animation: animation });
        // abs_coords.unshift({alpha: 1, x: (last_x + x), y: (last_y + y)})
      }
      abs_coords.reverse();
      console.log(abs_coords);
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

      obj.call(this.birdLived).call(this.changeAnimation("up")).call(this.stopSound(this.flapping_sound)).to({ y: -100 }, 1000).wait(1000).call(this.removeBird);
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

    this.roundCount = new createjs.Text("R = " + this.round.toString(), "20px Arial", "#ffffff");
    this.roundCount.x = 80;
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
    // this.dog = Sprites.dog();
    // this.dog.scaleX = 3.0;
    // this.dog.scaleY = 3.0;
    // this.dog.x = 300;
    // this.dog.y=300;
    // this.stage.addChild(this.dog);

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
      this.roundCount.text = "R = " + this.round.toString();
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
    key: "areDucksAligned",
    value: function areDucksAligned() {
      console.log("in are aligned?");
      var foundWhite = false;
      for (var i = 0; i < 10; i++) {
        var duck = this.duckStatus[i];
        if (duck.currentAnimation === "red" && foundWhite) {
          console.log("in aligned false");
          return false;
        } else if (duck.currentAnimation === "white") {
          foundWhite = true;
        }
      }
      console.log("returning aligned true");
      return true;
    }
  }, {
    key: "shiftDucks",
    value: function shiftDucks(callback) {
      var _this = this;

      // this.shiftDuckCallback =
      console.log("in lobby shift ducks");
      // let soundHandle;


      var loopingFunct = function loopingFunct() {
        console.log("in looping funct");
        console.log(_this);
        if (_this.shiftDucksOnce()) {
          var ppc = new createjs.PlayPropsConfig().set({ duration: 300 });
          var soundHandle = createjs.Sound.play("hit_count", ppc);
          soundHandle.on("complete", loopingFunct);
        } else {
          // return;
          _this.flashDucks(callback);
        }
      };
      loopingFunct();
      // if(this.shiftDucksOnce()){
      //   const ppc = new createjs.PlayPropsConfig().set({duration:300})
      //   const soundHandle = createjs.Sound.play("hit_count",ppc)
      //   soundHandle.on("complete", this.shiftDucks.bind(this));
      // }
      // else{
      //   // return;
      //   this.flashDucks(callback);
      // }
    }
  }, {
    key: "flashDucks",
    value: function flashDucks(callback) {
      this.duckStatus.forEach(function (status) {
        if (status.currentAnimation === "red") {
          status.gotoAndPlay("flash");
        }
      });
      callback();
      // status =>(
      //   if(status.currentAnimation === "red"){
      //     status.gotoAndPlay("flash")
      //   }
      // )

      // const ppc = new PlayPropsConfig().set({})
      // const soundHandle = createjs.Sound.play("hit_count",ppc)
      // soundHandle.on("complete", this.shiftDucks.bind(this));
    }
  }, {
    key: "shiftDucksOnce",
    value: function shiftDucksOnce() {
      console.log("in shift ducks");
      console.log(this.duckStatus);
      for (var i = 9; i >= 0; i--) {
        var duck = this.duckStatus[i];
        if (duck.currentAnimation === "white") {
          console.log("breaking because white " + i);
          continue;
        } else if (duck.currentAnimation === "red") {
          console.log("found a misplaced duck");
          for (var j = i - 1; j >= 0; j--) {
            var duckTwo = this.duckStatus[j];
            if (duckTwo.currentAnimation === "white") {
              //lets swap these two!
              duckTwo.gotoAndPlay("red");
              duck.gotoAndPlay("white");
              return true;
            }
          }
        } else {
          console.log("in else?");
          console.log(duck.currentAnimation);
        }
      }
      return false;
    }
  }, {
    key: "setBullets",
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
    key: "resetRound",
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

var _title = __webpack_require__(3);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {registerSounds} from './sound';


document.addEventListener('DOMContentLoaded', function () {
  // registerSounds();
  var canvas = document.getElementById('demoCanvas');
  canvas.addEventListener("click", function (e) {
    return getPosition(e);
  });
  var stage = new createjs.Stage("demoCanvas");
  stage.enableMouseOver();
  stage.mouseChildren = true;
  // stage.on("click",console.log)
  var board = void 0;
  var title = void 0;
  var titleMusic = void 0;

  var getPosition = function getPosition(event) {
    var x = new Number();
    var y = new Number();

    if (event.x != undefined && event.y != undefined) {
      x = event.x;
      y = event.y;
    } else // Firefox method to get the position
      {
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    console.log("x: " + x + "  y: " + y);
    board.handleClick(x, y);
  };

  var handleTick = function handleTick(event) {
    stage.update(event);
  };
  createjs.Ticker.on("tick", handleTick.bind(undefined));

  var preload = new createjs.LoadQueue();
  window.preload = preload;
  preload.addEventListener("complete", loadComplete);
  preload.installPlugin(createjs.Sound);
  preload.loadManifest([{ id: "intro", src: "audio/02-duck-hunt-intro.mp3" }, { id: "shot", src: "audio/shot.mp3" }, { id: "wing_flap", src: "audio/99-duck-flapping-sfx-.mp3" }, { id: "falling", src: "audio/falling.mp3" }, { id: "bark", src: "audio/99-bark-sfx-.mp3" }, { id: "ground_thud", src: "audio/ground_thud.mp3" }, { id: "laugh", src: "audio/99-laugh-sfx-.mp3" }, { id: "got_one", src: "audio/04-got-duck-s-.mp3" }, { id: "hit_count", src: "audio/99-counting-hits-sfx-.mp3" }, { id: "round-clear", src: "audio/05-round-clear.mp3" }, { id: "perfect", src: "audio/06-perfect.mp3" }, { id: "you-failed", src: "audio/07-you-failed.mp3" }, { id: "game-over", src: "audio/08-game-over.mp3" }, { id: "menu-beep", src: "audio/menu_sound.mp3" }, { id: "title_music", src: "audio/01-title-screen.mp3" }, { id: "title_img", src: "sprites/dhunttitle.png" }, { id: "duckhunt_img", src: "sprites/duckhunt.png" }, { id: "aboutme_img", src: "sprites/aboutme.png" }

  // {id:"dh_sprites", src:"/sprites/duckhunt.png", type:"spritesheet"}
  ]);
  // window.preload = preload;
  // preload.loadFile("assets/preloadjs-bg-center.png");

  var titleScreen = function titleScreen() {
    stage.removeAllChildren();
    titleMusic = createjs.Sound.play("title_music");
    title.showTitle(start.bind(undefined));
  };
  var start = function start() {
    title.hideTitle();
    titleMusic.stop();
    board = new _board2.default(stage, titleScreen.bind(undefined));
    board.intro();
  };
  function loadComplete() {
    // board.gameLoop();
    // console.log
    // title.titleScreen(start.bind(this));
    title = new _title2.default(stage);
    titleScreen();
    // board= new Board(stage, titleScreen.bind(this));
    // board.intro();
    // board.intro();
  }
  // cursor.x = 300;
  // board.drawDucks();
  // board.gameLoop();
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map