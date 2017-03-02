import Duck from './duck';
import * as Sprites from './sprites';

class Board{
  constructor(rootEl){
      this.stage = new createjs.Stage("demoCanvas");
      this.stage.addChild(this.background())
      this.initLeap();
      this.cursor = this.mkCursor();
      this.trigger = false;
      // this.tCursor= this.mkCursor();
    // this.stage = rootEl;
      this.activeBirds = {};
  };

  initLeap(){
    const leap = new Leap.Controller({
      host: '127.0.0.1',
      port: 6437,
      frameEventName: 'animationFrame',
      useAllPlugins: true
    });
    this.leap = leap;
    leap.on('frame',(frame)=>(this.frameCallback(frame)));
    leap.connect();





  }

  frameCallback(frame){
    // console.log("frame")
    // debugger
    // console.log(frame.pointables.length)\
    if(frame.pointables.length > 0){
      this.cursor.alpha=1;
      // this.tCursor.alpha=0;
      const indexF = frame.pointables[frame.pointables.length-1];
      const posF = indexF.stabilizedTipPosition;
      const normalized = frame.interactionBox.normalizePoint(posF)


      // if(frame.gestures.length > 0){
      //   console.log("gesture detected")
      // }
      // let thumb = null;
      if(frame.pointables.length > 1){
        // this.tCursor.alpha=1;
        const thumb = frame.pointables[0]
        const posT = thumb.stabilizedTipPosition;
        const normT = frame.interactionBox.normalizePoint(posT)
        // console.log(posT)
        const dist = Leap.vec3.dist([posT[0],posT[1],0], [posF[0],posF[1],0]);
        // const dist = Leap.vec3.dist(posT,posF);
        if( dist < 20 && !this.trigger){
          this.trigger = true;
          const x = 786 * normalized[0];
          const y = 720 * (1-normalized[1]);
          this.fire(x,y);
        }else if(dist > 25){
          this.trigger = false;
        }

        // this.tCursor.x = 786*normT[0];
        // this.tCursor.y = 720 * (1-normT[1]);
      }

      this.cursor.x = 786 * normalized[0]
      this.cursor.y = 720 * (1-normalized[1])
    }
    else{
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

  fire(x,y){
    console.log("BANG")
    const objs = this.stage.getObjectsUnderPoint(x,y,1)
    console.log(objs);
    if(objs.length>0){
      // console.log(d)
      this.handleDuckShot(objs[0])
    }
  }

  handleDuckShot(duck){
    console.log(duck.id)
    createjs.Tween.removeTweens(duck)
    duck.gotoAndPlay("hit")
    createjs.Tween.get(duck).wait(500).to({y:1600},1000)
  }

  background(){
    let data = {
      images: ["./sprites/duckhunt.png"],
      frames: [
        [0, 0, 256, 240]
      ]
    }

    const spriteSheet = new createjs.SpriteSheet(data);
    const sprite = new createjs.Sprite(spriteSheet);
    sprite.scaleX=3.0;
    sprite.scaleY=3.0;
    sprite.mouseEnabled = false;
    return sprite;
  }

  mkCursor(){
    let box = new createjs.Shape();
    box.graphics.beginFill("#000").drawRect(0, 0, 10, 10);
    box.mouseEnabled=false;
    this.stage.addChild(box);
    return box;
  }



  drawDucks(){
    // const circle = Duck.getCircle();
    const d1 = new Duck(1);
    const d2 = new Duck(2);
    const d3 = new Duck(3);
    // this.stage.addChild(circle);
    // this.stage.update();
    this.stage.addChild(d1.duck)
    this.stage.addChild(d2.duck)
    this.stage.addChild(d3.duck)

    d1.moveDuck();
    d2.moveDuck();
    d3.moveDuck();



    // this.stage.addChild(Sprites.animation)
    createjs.Ticker.on("tick", this.handleTick.bind(this));

  }

  handleTick(event) {
    // console.log("tick")
      this.stage.update(event);
  }


}

export default Board;
