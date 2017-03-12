import * as Sprites from './sprites';

class UI {
  constructor(stage){
    this.stage = stage;

    this.shot_text = Sprites.bullet_ui();
    this.shot_text.scaleX=3.0;
    this.shot_text.scaleY=3.0;
    this.shot_text.x = 72;
    this.shot_text.y = 649;

    this.hits = 0;
    this.misses = 0;
    this.shotsLeft = 3;
    this.round = 1;
    this.duckStatus = [];
    let duck_x_pos=295;
    for(let i = 0;i<10;i++){
      const sprite = Sprites.duck_ui();
      sprite.x = duck_x_pos;
      duck_x_pos+= 23;
      sprite.y = 625;
      sprite.scaleY=2.8;
      sprite.scaleX=2.8;
      this.stage.addChild(sprite);
      this.duckStatus.push(sprite);
    }
    this.duckIndex=0;
    this.duckCount=1;

    this.bulletStatus = [];
    let bullet_x_pos = 80;
    for(let i = 0;i<3;i++){
      const sprite = Sprites.bullet();
      sprite.x = bullet_x_pos;
      bullet_x_pos+=20;
      sprite.y=625;
      sprite.scaleX = 2.8;
      sprite.scaleY = 2.8;
      this.stage.addChild(sprite);
      this.bulletStatus.push(sprite);
    }

    this.menu_button = Sprites.main_menu_button();
    this.menu_button.x = 580;
    this.menu_button.y = 690;
    this.menu_button.scaleX = 1.5;
    this.menu_button.scaleY = 1.5;
    const menu_hit = new createjs.Shape();
    menu_hit.graphics.beginFill("#fff").drawRect(0,0,134,12);
    this.menu_button.dh_button=true;
    this.menu_button.dh_btn_name = 'menu';
    this.menu_button.hitArea = menu_hit;
    this.menu_button.cursor= "pointer";

    this.pause_button = Sprites.pause_button();
    this.pause_button.x = 67;
    this.pause_button.y = 690;
    this.pause_button.scaleX = 1.5;
    this.pause_button.scaleY = 1.5;
    const pause_hit = new createjs.Shape();
    pause_hit.graphics.beginFill("#fff").drawRect(0,0,81,14)
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
    this.flew_away_text.alpha=0;


    this.roundCount = new createjs.Text(`R = ${this.round.toString()}`, "20px Arial", "#ffffff");
    this.roundCount.x = 80;
    this.roundCount.y = 595;
    this.roundCount.textBaseline="alphabetic";

    this.stage.addChild(this.shot_text)
    this.stage.addChild(this.flew_away_text);
    this.stage.addChild(this.hit_text);
    this.stage.addChild(this.roundCount);
    this.stage.addChild(this.pause_button);
    this.stage.addChild(this.menu_button);
  }

  redraw(){
    this.roundCount.text = `R = ${this.round.toString()}`;
    this.setBullets();
  }

  drawHitBox(){
    let x_pos;
    for(let i = 0; i< this.duckStatus.length; i++){
      const status = this.duckStatus[i];
    }
  }

  resetDuckStatus(){
    this.duckIndex=0;
    this.duckStatus.forEach((status)=>(
      status.gotoAndPlay("white")
    ))
  }

  launchDucks(n=1){
    this.duckCount == n;
    for(let i = 0;i< n;i++){
        this.duckStatus[this.duckIndex+i].gotoAndPlay("alt")
    }
  }

  areDucksAligned(){
    let foundWhite=false
    for(let i = 0;i< 10;i++){
      const duck = this.duckStatus[i]
      if(duck.currentAnimation === "red" && foundWhite){
        return false;
      }
      else if(duck.currentAnimation === "white"){
        foundWhite = true;
      }
    }
    return true;
  }

  shiftDucks(callback){
    const loopingFunct = () =>{
      if(this.shiftDucksOnce()){
        const ppc = new createjs.PlayPropsConfig().set({duration:300})
        const soundHandle = createjs.Sound.play("hit_count",ppc)
        soundHandle.on("complete", loopingFunct);
      }
      else{
        this.flashDucks(callback);
      }

    }
    loopingFunct();
  }

  flashDucks(callback){
    this.duckStatus.forEach(status=>{
      if(status.currentAnimation === "red"){
        status.gotoAndPlay("flash")
      }
    })
    callback();
  }

  shiftDucksOnce(){
    for(let i = 9 ; i>=0;i--){
      const duck = this.duckStatus[i];
      if(duck.currentAnimation === "white"){
        continue;
      }else if(duck.currentAnimation === "red"){
        for(let j = (i-1); j>=0;j--){
          const duckTwo = this.duckStatus[j]
          if(duckTwo.currentAnimation === "white"){
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

  setBullets(){
    this.bulletStatus.forEach((bullet,idx)=>{
      if(this.shotsLeft > idx){
        bullet.gotoAndPlay("black")
      }
      else{
        bullet.gotoAndPlay("empty")
      }
    });
  }

  resetRound(){
    this.misses=0;
    this.hits=0;
    this.flew_away_text.alpha = 0.0;
    this.shotsLeft=3;
    this.round++;
    this.resetDuckStatus();
    this.redraw();
  }

  resetCycle(){
    this.flew_away_text.alpha = 0.0;
    this.shotsLeft=3;
    this.duckStatus[this.duckIndex].gotoAndPlay("alt");
    this.redraw();
  }

  showFlewAway(){
    this.flew_away_text.alpha = 1;
  }

  firedShot(){
    this.shotsLeft--;
    this.redraw();
  }

  regMiss(second=false){
    this.misses++;
    let targetDuck = this.duckStatus[this.duckIndex]
    //used for double-duck cycles,  if the first duck is already flagged as dead, try the next one
    if(targetDuck.currentAnimation !==  "alt"){
      targetDuck = this.duckStatus[this.duckIndex + 1];
    }
    targetDuck.gotoAndPlay("white");
    this.duckIndex++;
    this.redraw();
  }

  regHit(second=false){
    this.hits++;
    let targetDuck = this.duckStatus[this.duckIndex]
    //used for double-duck cycles,  if the first duck is already flagged as dead, try the next one
    if(targetDuck.currentAnimation !==  "alt"){
      targetDuck = this.duckStatus[this.duckIndex + 1];
    }
    targetDuck.gotoAndPlay("red");
    this.duckIndex++;
    this.redraw();
  }
}

export default UI;
