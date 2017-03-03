import * as Sprites from './sprites';
import {sound} from './sound';

class Duck{
  constructor(id,birdDied,birdLived,removeBird){
    this.duck = Sprites.black_duck();
    this.duck.scaleX = 2.0;
    this.duck.scaleY = 2.0;
    this.duck.alpha = 0;
    this.duck.dh_id = id;
    this.duck.dh_type = true;
    this.alive = true;
    this.birdLived = birdLived;
    this.birdDied = birdDied;
    this.removeBird = removeBird;
    this.handleClick = this.handleClick.bind(this)
    this.dh_type = "duck";
    this.clicked=false;

    this.flapping_sound;
    this.lastSound = null;
    // debugger
    let hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(0, 0, 40, 40);
		this.duck.hitArea = hit;

    this.duck.addEventListener("click", this.handleClick)
    // this.duck.addEventListener("animationend", (event)=>(console.log("ended")))
    // this.moveDuck();
  }

  playSound(snd,stop=false){
    return (e)=>{
      if(stop) this.lastSound.stop();
       this.lastSound=sound(snd)};
  }

  handleClick(e){
    console.log("clicked");
    // createjs.Sound.play("shot");
    sound("shot");
    if(e !== null) e.stopPropagation();
    if(this.clicked){
      return;
    }
    this.clicked=true;
    console.log("past clicked")

    createjs.Tween.removeTweens(this.duck)
    this.duck.removeEventListener("click",this.handleClick)
    this.duck.gotoAndPlay("hit")
    this.alive=false;
    createjs.Tween.get(this.duck)
      .call(this.birdDied)
      .call(this.stopSound(this.flapping_sound))
      .wait(500)
      .call(this.playSound("falling"))
      .to({y:480},1000)
      .call(this.playSound('ground_thud',true))
      .wait(1000)
      .call(this.removeBird)
    // this.duck.removeAllTweens();
  }



  rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  randMovement(){
    return()=>{

      const x = this.duck.x;
      const y = this.duck.y;
      console.log("x: " + x + " y: " + y);
      return {x: (this.rand(100,200)+x), y: (this.rand(100,200)+y)}

    }
  }

  flyaway(){
    createjs.Tween.removeTweens(this.duck)
    this.duck.removeEventListener("click",this.handleClick)
    // this.duck.gotoAndPlay("hit")
    // this.alive=true;
    createjs.Tween.get(this.duck)
          .call(this.birdLived)
          .call(this.changeAnimation("up"))
          .call(this.stopSound(this.flapping_sound))
          .to({y:-100},1000)
          .wait(1000)
          .call(this.removeBird)
  }

  stopSound(snd){
    return(e)=>{snd.stop()}
  }

  genRandomPath(range){
    const MAX_WIDTH = 730;
    const MAX_HEIGHT = 400;
    let xrow = [];
    let yrow=[];
    // let abs_coords = [{params:{alpha:1.0, x:this.rand(0,MAX_WIDTH),y:this.rand(0,MAX_HEIGHT)}}];
    let abs_coords = [{params:{alpha:1.0, x:this.rand(0,MAX_WIDTH),y:450}}];

    //generate relative coord pairs
    for(let i = 0;i< 10;i++){
      const last_x = abs_coords[0].params.x
      const last_y = abs_coords[0].params.y
      let x = 0;
      let y = 0;

      //make sure the point falls on the board.
      while(true){
        let done = true;
        x =Math.floor(((Math.random() * (range * 2)) - range));
        y =Math.floor(((Math.random() * (range * 2)) - range));

        if((x+last_x) > MAX_WIDTH || (x+last_x) < 0)
          done = false;
        else if ((y+last_y) > MAX_HEIGHT || (y+last_y) < 0) {
          done = false
        }
        if(done) break;
      }

      //we now have a relative pair that is sure to be on the grid.
      //{params:{x: 123, y:456, alpha: 1.0}, speed: 789, reverse:false,  animation:"fly_up"}

      //need to now find the angle of movement...
      const angleDeg = Math.atan2(Math.abs(y),Math.abs(x)) * (180 / Math.PI);
      // Math.atan2()
      // const a =
      // const dist = Math.sqrt(())
      // console.log(angleDeg)
      let animation = "fly_up"
      if(angleDeg < 40) animation="fly_side";

      abs_coords.unshift({ params: {alpha: 1.0, x:(last_x + x), y: (last_y + y)}, speed: 1500, reverse:(x<0), reverseY:(y<0), animation: animation });
      // abs_coords.unshift({alpha: 1, x: (last_x + x), y: (last_y + y)})
    }
    abs_coords.reverse()
    console.log(abs_coords);
    return abs_coords;

  }

  changeAnimation(ani){
    return()=>(this.duck.gotoAndPlay(ani))
  }

  moveDuck(){
    const obj = createjs.Tween.get(this.duck, { loop: false })
    const dirs = this.genRandomPath(250);
    const ppc = new createjs.PlayPropsConfig().set({loop: -1, startTime: 25, duration:178,volume: 0.5 })
    this.flapping_sound = sound("wing_flap",ppc)


    for(let i  = 0; i< 10;i++){
      const dir = dirs[i];
      let duration = 1000;
      if (i === 0){
        duration = 0;
      }
      obj.call(this.changeAnimation(dir.animation))
          .to({scaleX:(dir.reverse ? -2.0 : 2.0)},0)
          .to(dir.params,duration);
    }

    obj.call(this.birdLived)
      .call(this.changeAnimation("up"))
      .call(this.stopSound(this.flapping_sound))
      .to({y:-100},1000)
      .wait(1000)
      .call(this.removeBird)
  }

}

export default Duck;
