import Duck from './duck';
import * as Sprites from './sprites';
import UI from './ui';

class Board{
  constructor(rootEl){
      this.stage = new createjs.Stage("demoCanvas");
      this.background_color = new createjs.Shape();
      this.background_color.graphics.beginFill("#3fbfff").drawRect(0,0,786,720);
      this.background_color.addEventListener("click",this.handleMissClick.bind(this));

      this.stage.addChild(this.background_color)
      this.stage.addChild(this.background())
      this.ui = new UI(this.stage);
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
      this.flewAway=false;

      //round variables
      this.birdsLaunched = 0;
      this.killCount = 0;
      this.threshhold = 5;

      //game variables
      this.round = 1;
      this.score = 0;
  };

  birdsOnScreen(){
    return Object.keys(this.activeBirds).length;
  }

  keyPressed(e){
    //used as alternate fire input for Leap mode.
    if(e.key ===" "){
      if(this.cursor.alpha === 1.0){
        this.fire(this.cursor.x,this.cursor.y)
      }
    }
  }

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
    // if(frame.hands.length>0){
    //   const hand = frame.hands[0];
    // }
    if(frame.hands.length>0){
      this.cursor.alpha=1;

    }
    else{
      this.cursor.alpha = 0;

      return
    }
    if(frame.pointables.length > 0){
      // this.tCursor.alpha=0;
      const palm = frame.hands[0]
      const posH = palm.stabilizedPalmPosition;
      const normP = frame.interactionBox.normalizePoint(posH);

      const indexF = frame.pointables[frame.pointables.length-1];
      const posF = indexF.stabilizedTipPosition;
      const normalized = frame.interactionBox.normalizePoint(posF)


      this.cursor.x = 786 * normP[0]
      this.cursor.y = 720 * (1-normP[1])
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
      console.log(frame.pointables.length)
      if(frame.pointables.length > 1){
        // this.tCursor.alpha=1;
        const thumb = frame.pointables[0]
        const posT = thumb.stabilizedTipPosition;
        const normT = frame.interactionBox.normalizePoint(posT)
        // console.log(posT)
        const dist = Leap.vec3.dist([posT[0],posT[1],0], [posF[0],posF[1],0]);
        // const dist = Leap.vec3.dist(posT,posF);
        console.log(dist)
        if( dist < 10 && !this.trigger){
          this.trigger = true;
          const x = this.cursor.x
          const y = this.cursor.y
          this.fire(x,y);
        }else if(dist > 15){
          this.trigger = false;
        }

        // this.tCursor.x = 786*normT[0];
        // this.tCursor.y = 720 * (1-normT[1]);
      }

      // this.cursor.x = 786 * normalized[0]
      // this.cursor.y = 720 * (1-normalized[1])
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
    const objs = this.stage.getObjectsUnderPoint(x,y,2)
    console.log(objs);
    if(objs.length>0){
      // console.log(d)
      this.handleDuckShot(objs[0])
    }
  }

  handleDuckShot(duck){
    console.log(duck.id)
    this.activeBirds[duck.id].handleClick(null);
    // createjs.Tween.removeTweens(duck)
    // duck.gotoAndPlay("hit")
    // createjs.Tween.get(duck).wait(500).to({y:1600},1000)
  }

  redBackground(){
    this.background_color.graphics.clear;
    this.background_color.graphics.beginFill("#ffbfb3").drawRect(0,0,786,720);
  }

  blueBackground(){
    this.background_color.graphics.clear;
    this.background_color.graphics.beginFill("#3fbfff").drawRect(0,0,786,720);
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
    sprite.dh_type= "background"
    sprite.scaleX=3.0;
    sprite.scaleY=3.0;
    // sprite.mouseEnabled = false;
    sprite.addEventListener("click",this.handleMissClick.bind(this));
    return sprite;
  }

  handleMissClick(e){
    console.log("miss");
    if(this.bulletsLeft === 0){
      return;
    }
    this.ui.firedShot();
    this.bulletsLeft--;
    this.gameLoop();
  }

  mkCursor(){
    let box = new createjs.Shape();
    box.graphics.beginFill("#000").drawRect(0, 0, 10, 10);
    box.mouseEnabled=false;
    this.stage.addChild(box);
    return box;
  }

  birdGone(id){

    return ()=>{
      console.log("bird: " + id + (this.activeBirds[id].alive ? " is alive" : " is dead"))
      if(this.activeBirds[id].alive)
      {
        this.flewAway = true;
        this.ui.regMiss();
        this.numBirds--;
      }
      else{
        this.numBirds--;
        this.killCount++;
        this.ui.regHit();
      }
      // this.ui.resetCycle()
      // this.ui.firedShot();
      this.stage.removeChild(this.activeBirds[id].duck)
      delete this.activeBirds[id]
      if(Object.keys(this.activeBirds).length === 0){
        this.allBirdsGone();
      }
    }

  }

  allBirdsGone(){
    console.log("all birds are gone :(")
    // this.ui.resetCycle();
    // this.drawDucks();
    this.gameLoop();
  }

  startCycle(){
    this.bulletsLeft=3;
    const n = 1
    this.numBirds=1;
    this.blueBackground();
    this.drawDucks(n)
    this.ui.resetCycle();
    this.ui.launchDucks(n)
  }

  startRound(){

  }

  gameLoop(){

    //birdslaunched == how many birds have been sent, at most 10
    //activeBirds == number of birds in the air,
    //bulletLeft
    console.log(this.bulletsLeft)
    //all birds launched, and none on screen
    if(this.birdsLaunched === 10 && this.birdsOnScreen() ===0){
      //round end, test kill count
      console.log("round end!")
      if(this.killCount >=  this.threshhold){
        //restart loop and counters
        this.birdsLaunched  = 0;
        this.killCount = 0
        this.threshhold = 5 //TODO should increment as needed!
        this.ui.resetRound();
        this.blueBackground();
        this.drawDucks() //TODO intelegently send 1 or 2 ducks
      }
      else{
        console.log("game over :(")
        //TODO do other game over stuff, a modal?
      }
    }
    else{
      console.log("inside else")
      //round is still ongoing.  test the cycle
      if(this.birdsOnScreen() !== 0 && this.bulletsLeft === 0){
        console.log("missed all shots")
        this.redBackground();
        this.ui.showFlewAway();
        //still a bird in the air, let it be.
        //I guess do nothing?
        Object.keys(this.activeBirds).forEach((bird_key)=>{

          this.activeBirds[bird_key].flyaway();
        })
      }
      else if(this.birdsOnScreen() !== 0){
        //do nothing
      }
      // else if(this.bulletsLeft === 0){
      //   console.log("ran out of bullets")
      //
      //   // this.drawDucks();
      //   //last bird has left.
      //   Object.keys(this.activeBirds).forEach((bird)=>{
      //     bird.flyaway();
      //   })
      // }
      else{
          console.log("inside else")
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

  birdDied(id){
    return (e)=>{
      console.log("bird died")
      // this.numBirds--;
      this.killCount++;
      this.bulletsLeft--;
      this.ui.firedShot();
      // this.ui.regHit();
      this.ui.regHit();
    }
  }

  birdLived(id){
    return (e)=>{
      console.log("bird lived")
      this.flewAway = true;
      this.ui.regMiss();
      this.redBackground();
      this.ui.showFlewAway();
      // this.ui.flewAway();
      // this.numBirds--;
    }
  }

  removeBird(id){
    return (e)=>{
      console.log("removing bird")
      this.numBirds--;
      this.stage.removeChild(this.activeBirds[id].duck)
      delete this.activeBirds[id]
      this.gameLoop();
    }
  }

  drawDucks(n=1){
    this.birdsLaunched += n;
    for(let i =0;i< n;i++){
      const duck = new Duck(i,this.birdDied(i).bind(this), this.birdLived(i).bind(this), this.removeBird(i).bind(this))
      this.activeBirds[i]=duck;
      this.stage.addChild(duck.duck)
      duck.moveDuck();
    }
  }

  handleTick(event) {
      this.stage.update(event);
  }


}

export default Board;
