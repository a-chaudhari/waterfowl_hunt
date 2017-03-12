import Duck from './duck';
import * as Sprites from './sprites';
import UI from './ui';
import { sound } from './sound';

class Board{
  constructor(stage, title, dcount=1){
      this.stage = stage;
      this.title = title;
      this.background_color = new createjs.Shape();
      this.background_color.graphics.beginFill("#3fbfff").drawRect(0,0,786,720);

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

      this.dog = Sprites.dog_intro();
      this.dog.scaleX = 2.8;
      this.dog.scaleY = 2.8;
      this.dog.x = 15;
      this.dog.y=445;
      this.stage.addChild(this.dog);

      //cycle variables
      this.cycleKillCount=0;
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
      this.duckCount = dcount;
  };

  handleClick(x,y){
    const tgt =this.stage.getObjectUnderPoint(x,y);

    if(tgt.dh_type === true){
      tgt.dh_obj.handleClick();
    }
    else if(tgt.dh_button === true){
      if(tgt.dh_btn_name === "pause") this.togglePause();
      else if(tgt.dh_btn_name === 'menu') this.title();
    }
    else{
      this.handleMissClick();
    }
  }

  togglePause(){
    createjs.Ticker.setPaused(!createjs.Ticker.paused)
    createjs.Sound.muted = !createjs.Sound.muted;
    if(createjs.Ticker.paused){
      this.ui.pause_button.gotoAndPlay("on")
    }
    else{
      this.ui.pause_button.gotoAndPlay("off")
    }
  }

  birdsOnScreen(){
    return Object.keys(this.activeBirds).length;
  }

  keyPressed(e){
    if(e.key ==="z"){
      if(this.cursor.alpha === 1.0){
        this.handleClick(this.cursor.x,this.cursor.y)
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
  }

  // fire(x,y){
  //   console.log("BANG")
  //   const objs = this.stage.getObjectsUnderPoint(x,y,1)
  //   console.log(objs);
  //   if(objs.length>0){
  //
  //     if (objs[0].dh_type === true){
  //       console.log("found duck to shoot")
  //       this.handleDuckShot(objs[0])
  //       return;
  //     }
  //   }
  //   this.handleMissClick();
  // }
  //
  // handleDuckShot(duck){
  //   console.log(duck.id)
  //   console.log(this)
  //   if(!this.allowClick) return;
  //
  //   console.log("in handle duck shot")
  //   this.activeBirds[duck.dh_id].handleClick(null);
  // }

  redBackground(){
    this.background_color.graphics.clear;
    this.background_color.graphics.beginFill("#ffbfb3").drawRect(0,0,786,720);
  }

  blueBackground(){
    this.background_color.graphics.clear;
    this.background_color.graphics.beginFill("#3fbfff").drawRect(0,0,786,720);
  }

  background(){
    const sprite = Sprites.background();
    sprite.dh_type= "background"
    sprite.scaleX=3.0;
    sprite.scaleY=3.0;
    return sprite;
  }

  handleMissClick(e){
    if(!this.allowClick) return;
    if(this.bulletsLeft === 0) return;

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

  startCycle(){
    this.bulletsLeft=3;
    const n = this.duckCount;
    this.numBirds=n;
    this.cycleKillCount = 0;
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

  anyActiveBirdsOnScreen(){
    let res = false;
    Object.keys(this.activeBirds).forEach((key,idx)=>{
      const bird = this.activeBirds[key];
      if(bird.active){
        res = true;
      }
    });
    return res;
  }

  gameLoop(){
    //all birds launched, and none on screen
    if(this.birdsLaunched === 10 && this.birdsOnScreen() ===0){
      //round end, test kill count so see round outcome
      if(!this.finishedPost){
        //need to play the music before moving to next round
        this.finishedPost=true;
        this.ui.shiftDucks(this.playEndingMusic.bind(this));
        return;
      }
      if(this.killCount >=  this.threshhold){
        //yay you won the round, off to the next one. play correct sound
        //restart loop and counters
        this.birdsLaunched  = 0;
        this.killCount = 0
        this.cycleKillCount=0;
        this.threshhold = 5 //TODO should increment as needed!
        this.ui.resetRound();
        this.blueBackground();
        this.round++;
        this.finishedPost=false;
        this.intro();
      }
      else{
        //game over :(
        this.title();
      }
    }
    else{
      //round is still ongoing.  test the cycle
      if(this.anyLivingBirdsOnScreen() && this.bulletsLeft === 0){
        //but did we kill any?
        if(this.cycleKillCount > 0){
          //yes, so not a total fail
        }else{
          //total fail
          this.redBackground();
          this.ui.showFlewAway();
        }
        Object.keys(this.activeBirds).forEach((bird_key)=>{
          this.activeBirds[bird_key].flyaway();
        })
      }
      else if(this.birdsOnScreen() !== 0){
        //do nothing
      }
      else{
          this.startCycle();
      }
    }
  }

  cycleEndAnimation(){
    //3 possible animations, laughing, happy 1 or happy 2
    //all shots fired, both birds alive
    if(!this.anyActiveBirdsOnScreen() && this.cycleKillCount===0){
      this.redBackground();
      this.ui.showFlewAway();
    }
    if(this.numBirds > 0){
      return
    }
    if(this.cycleKillCount === 0 && !this.anyActiveBirdsOnScreen()){
      //laughing dog
      this.laughingDog();
    }
    else if(!this.anyActiveBirdsOnScreen()){
      this.happyDog();
    }
  }

  happyDog(){
    const ani = (this.cycleKillCount === 1 ? "one" : "two")
    this.dog.gotoAndPlay(ani);
    const obj = createjs.Tween.get(this.dog);
    obj.call(this.playSound("got_one")).
        to({y:375},500)
        .wait(500)
        .to({y:600},1000)
        .call(this.gameLoop.bind(this))
  }

  birdDied(id){
    return (e)=>{
      this.cycleKillCount++;
      this.killCount++;
      this.bulletsLeft--;
      this.ui.firedShot();
      this.ui.regHit();
    }
  }

  laughingDog(){
    this.dog.gotoAndPlay("laughing");
    const ppc = new createjs.PlayPropsConfig().set({delay:500});
    const obj = createjs.Tween.get(this.dog);
    obj.call(this.playSound("laugh",ppc).bind(this))
      .to({y:375},1000)
      .wait(1000)
      .to({y:600},1000)
      .call(this.gameLoop.bind(this))
  }

  birdLived(id){
    return (e)=>{
      this.flewAway = true;
      this.ui.regMiss();
      this.allowClick = false;
      this.cycleEndAnimation();
    }
  }

  removeBird(id){
    return (e)=>{
      this.numBirds--;
      this.stage.removeChild(this.activeBirds[id].duck)
      if(!this.anyLivingBirdsOnScreen()) this.allowClick= false;
      delete this.activeBirds[id]
      this.cycleEndAnimation();
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
  }
}

export default Board;
