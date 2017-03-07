import Duck from './duck';
import * as Sprites from './sprites';
import UI from './ui';
import { registerSounds, sound } from './sound';

class Board{
  constructor(stage, title){
      this.stage = stage;
      this.title = title;
      this.background_color = new createjs.Shape();
      this.background_color.graphics.beginFill("#3fbfff").drawRect(0,0,786,720);
      // this.background_color.addEventListener("click",this.handleMissClick.bind(this));
      // this.stage.on("click",this.handleClick.bind(this))
      this.stage.addChild(this.background_color)
      this.background = this.background();
      this.stage.addChild(this.background)
      this.ui = new UI(this.stage);
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
      this.dog.y=445;
      this.stage.addChild(this.dog);

      //cycle variables
      this.bulletsLeft = 3;
      this.numBirds = 0;
      this.birdsLaunched = 0;
      this.flewAway=false;

      //round variables
      this.birdsLaunched = 0;
      this.killCount = 0;
      this.threshhold = 5;
      this.finishedPost=false;

      //game variables
      this.round = 1;
      this.score = 0;
      this.duckCount = 1;
      // this.intro();
  };

  handleClick(x,y){
    // debugger
    // console.log(e)
    const tgt =this.stage.getObjectUnderPoint(x,y);
    if(tgt.dh_type === true){
      console.log("DUCK")
      // console.log(tgt)
      tgt.dh_obj.handleClick();
    }
    else{
      this.handleMissClick();
      console.log("no")
    }

  }

  birdsOnScreen(){
    return Object.keys(this.activeBirds).length;
  }

  keyPressed(e){
    //used as alternate fire input for Leap mode.
    // console.log("button")
    if(e.key ==="z"){
      if(this.cursor.alpha === 1.0){
        this.fire(this.cursor.x,this.cursor.y)
      }
    }
  }

  changeAnimation(obj,ani){
    return(e)=>{obj.gotoAndPlay(ani)}
  };

  playSound(snd,props){
    return(e)=>{sound(snd,props)}
  }

  intro(){
    this.stage.removeChild(this.dog);
    this.dog.alpha=0.0;
    this.stage.addChild(this.dog);
    this.dog.x = 15;
    this.dog.y=445;
    this.dog.gotoAndPlay("walk")
    const ppc = new createjs.PlayPropsConfig().set({loop: 2, duration: 259})

    const obj = createjs.Tween.get(this.dog);
    if(this.round === 1){
      sound("intro")
      this.dog.alpha=1.0;
      obj.to({x:150},2000)
    }
    else{
      obj.to({x:150, alpha:1.0})
      // this.dog.alpha=1.0;
    }
    obj.call(this.changeAnimation(this.dog,"sniff"))
      .wait(1000)
      .to({x:300},2000)
      .call(this.changeAnimation(this.dog,"sniff"))
      .wait(1000)
      .call(this.changeAnimation(this.dog,"happy"))
      .call(this.playSound("bark",ppc))
      .wait(500)
      .call(this.changeAnimation(this.dog,"jumping"))
      .to({x: 350, y:300},500)
      .call(this.shiftToBehindBackground(this.dog).bind(this))
      .call(this.changeAnimation(this.dog,"landing"))
      .to({x:400, y:500},500)
      .to({x:350,y:500})
      .call(this.gameLoop.bind(this))
    // .to({alpha:0})



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
    // if(frame.hands.length>0){
    //   this.cursor.alpha=1;

    // console.log("hi")
    if(frame.pointables.length > 0){
      this.cursor.alpha=1;
      const pointer = frame.pointables[0];
      const pos = pointer.stabilizedTipPosition;
      const norm = frame.interactionBox.normalizePoint(pos)
      this.cursor.x = (786) * norm[0];
      this.cursor.y = (720) * (1-norm[1]);
    }
    else{
      this.cursor.alpha=0;
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

  fire(x,y){
    console.log("BANG")
    const objs = this.stage.getObjectsUnderPoint(x,y,2)
    console.log(objs);
    if(objs.length>0 && objs[0].dh_type !== undefined){
      for(let i = 0 ; i < objs.length ; i++){
        if (objs[i].dh_type === true){
          this.handleDuckShot(objs[i])
          return;
        }
      }
      // console.log(d)

    }
    this.handleMissClick();
  }

  handleDuckShot(duck){
    console.log(duck.id)
    console.log(this)
    if(!this.allowClick) return;
    // debugger
    // console.log(activeBirds)

    this.activeBirds[duck.dh_id].handleClick(null);
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
        [0, 0, 256, 240] //240
        // [0, 0, 256, 190] //240
      ]
    }

    const spriteSheet = new createjs.SpriteSheet(data);
    const sprite = new createjs.Sprite(spriteSheet);
    sprite.dh_type= "background"
    sprite.scaleX=3.0;
    sprite.scaleY=3.0;
    // sprite.mouseEnabled = false;
    // sprite.addEventListener("click",this.handleMissClick.bind(this));
    return sprite;
  }

  handleMissClick(e){
    console.log("miss");
    if(!this.allowClick) return;
    if(this.bulletsLeft === 0){
      return;
    }
    sound("shot");
    this.ui.firedShot();
    this.bulletsLeft--;
    this.gameLoop();
  }

  mkCursor(){
    let box = new createjs.Shape();
    box.graphics.beginFill("#000").drawRect(0, 0, 10, 10);
    box.mouseEnabled=false;
    box.alpha=0;
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

  startCycle(){
    this.bulletsLeft=3;
    const n = this.duckCount;
    this.numBirds=1;
    this.blueBackground();
    this.drawDucks(n)
    this.ui.resetCycle();
    this.ui.launchDucks(n)
  }

  playEndingMusic(){
    // first check the score and treshho
    if(this.killCount >= this.threshhold){
      //you win!
      if(this.killCount === 10){
        //perfect score!
        const soundHandle = createjs.Sound.play("perfect")
        soundHandle.on("complete", this.gameLoop.bind(this));
      }else{
        const soundHandle = createjs.Sound.play("round-clear")
        soundHandle.on("complete", this.gameLoop.bind(this));
      }
    }else{
      const soundHandle = createjs.Sound.play("you-failed")
      soundHandle.on("complete", this.gameLoop.bind(this));
    }
  }

  anyLivingBirdsOnScreen(){
    let res = false;
    Object.keys(this.activeBirds).forEach((key,idx)=>{
      const bird = this.activeBirds[key];
      if(bird.alive){
        res = true;
      }
    });
    return res;
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
      if(!this.finishedPost){
        this.finishedPost=true;
        this.ui.shiftDucks(this.playEndingMusic.bind(this));
        return;
      }
      if(this.killCount >=  this.threshhold){

        //yay you won. play correct sound

        //restart loop and counters
        this.birdsLaunched  = 0;
        this.killCount = 0
        this.threshhold = 5 //TODO should increment as needed!
        this.ui.resetRound();
        this.blueBackground();
        this.round++;
        this.finishedPost=false;
        this.intro();
        // this.drawDucks(this.duckCount) //TODO intelegently send 1 or 2 ducks
      }
      else{
        console.log("game over :(")
        this.title();
        //TODO do other game over stuff, a modal?
      }
    }
    else{
      console.log("inside else")
      //round is still ongoing.  test the cycle
      if(this.anyLivingBirdsOnScreen() && this.bulletsLeft === 0){
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

  happyDog(){
    this.dog.gotoAndPlay("one");
    const obj = createjs.Tween.get(this.dog);
    obj.call(this.playSound("got_one")).
        to({y:375},500)
        .wait(500)
        .to({y:600},1000)
        .call(this.gameLoop.bind(this))
  }

  birdDied(id){
    return (e)=>{
      console.log("bird died")
      // this.numBirds--;
      this.killCount++;
      this.bulletsLeft--;
      this.ui.firedShot();
      // sound("falling");
      // this.ui.regHit();
      // this.happyDog();
      this.ui.regHit();
    }
  }

  laughingDog(){
    this.dog.gotoAndPlay("laughing");
    const ppc = new createjs.PlayPropsConfig().set({delay:500});
    const obj = createjs.Tween.get(this.dog);
    obj.wait(2000).call(this.playSound("laugh",ppc).bind(this))
      .to({y:375},1000)
      .wait(1000)
      .to({y:600},1000)
      .call(this.gameLoop.bind(this))
  }

  birdLived(id){
    return (e)=>{
      console.log("bird lived")
      this.flewAway = true;
      this.ui.regMiss();
      this.allowClick = false;
      this.redBackground();
      this.ui.showFlewAway();
      this.laughingDog();
      // this.ui.flewAway();
      // this.numBirds--;
    }
  }

  removeBird(id){
    return (e)=>{
      console.log("removing bird")

      this.numBirds--;
      this.stage.removeChild(this.activeBirds[id].duck)
      if(this.activeBirds[id].alive){
        // this.laughingDog();
      }else{
        this.happyDog();
      }
      this.allowClick= false;
      delete this.activeBirds[id]
      // this.gameLoop();
    }
  }

  shiftBackgroundToFront(){
    this.stage.setChildIndex(this.background,this.stage.numChildren-1)
  }

  shiftToBehindBackground(obj){
    return(e)=>{

      this.stage.setChildIndex(obj, this.stage.getChildIndex(this.background));
    }
  }

  drawDucks(n=1){
    this.birdsLaunched += n;
    for(let i =0;i< n;i++){
      const duck = new Duck(i,this.birdDied(i).bind(this), this.birdLived(i).bind(this), this.removeBird(i).bind(this), this.round)
      this.activeBirds[i]=duck;
      this.stage.addChild(duck.duck)
      this.shiftToBehindBackground(duck.duck)();
    }
    this.allowClick = true;
    Object.keys(this.activeBirds).forEach(key=>{
      this.activeBirds[key].moveDuck();
    })
    // duck.moveDuck();
  }

  // handleTick(event) {
  //     this.stage.update(event);
  // }


}

export default Board;
