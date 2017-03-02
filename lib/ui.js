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
    // this.duckStatus = ['M','M','M','M','M','M','M','M','M','M'];
    // this.duckStatus = ['M','M','M','M','M','M','M','M','M','M'];
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


    this.roundCount = new createjs.Text(this.round.toString(), "20px Arial", "#ffffff");
    this.roundCount.x = 100;
    this.roundCount.y = 595;
    this.roundCount.textBaseline="alphabetic";

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

    this.stage.addChild(this.shot_text)
    this.stage.addChild(this.flew_away_text);
    this.stage.addChild(this.hit_text);
    this.stage.addChild(this.roundCount);
    // this.stage.addChild(this.shotCount);
    // this.stage.addChild(this.hitCount);
    // this.stage.addChild(this.missCount);

  }

  redraw(){
    // debugger
    // this.hitCount.text = this.hits.toString();
    // this.missCount.text = this.misses.toString();
    // this.shotCount.text = (this.shotsLeft < 0 ? "0" : this.shotsLeft.toString())
    this.setBullets();
  }

  drawHitBox(){
    // this.duckStatus
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
    this.shotsLeft=3;
    this.roundCount++;
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
    // this.background_color
  }

  firedShot(){
    this.shotsLeft--;
    this.redraw();
  }

  regMiss(second=false){
    this.misses++;
    // this.shotsLeft--;
    let targetDuck = this.duckStatus[this.duckIndex]
    //used for double-duck cycles,  if the first duck is already flagged as dead, try the next one
    if(targetDuck.currentAnimation !==  "alt"){
      console.log("2nd miss")
      targetDuck = this.duckStatus[this.duckIndex + 1];
    }
    targetDuck.gotoAndPlay("white");
    this.duckIndex++;
    this.redraw();
  }

  regHit(second=false){
    this.hits++;
    // this.shotsLeft--;
    // this.duckStatus[this.duckIndex].gotoAndPlay("red");
    let targetDuck = this.duckStatus[this.duckIndex]
    //used for double-duck cycles,  if the first duck is already flagged as dead, try the next one
    if(targetDuck.currentAnimation !==  "alt"){
      console.log("2nd miss")

      targetDuck = this.duckStatus[this.duckIndex + 1];
    }
    targetDuck.gotoAndPlay("red");
    this.duckIndex++;
    this.redraw();
  }

}

export default UI;