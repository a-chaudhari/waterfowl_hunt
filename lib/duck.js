import * as Sprites from './sprites';
import {sound} from './sound';

class Duck{
  constructor(id,birdDied,birdLived,removeBird,round){
    this.duck = Sprites.black_duck();
    this.duck.scaleX = 2.0;
    this.duck.scaleY = 2.0;
    this.duck.alpha = 0;

    this.duck.dh_id = id;
    this.duck.dh_type = true;
    this.duck.dh_obj = this;

    this.active = true;
    this.alive = true;
    this.birdLived = birdLived;
    this.birdDied = birdDied;
    this.removeBird = removeBird;
    this.handleClick = this.handleClick.bind(this)
    this.dh_type = "duck";
    this.round = round;
    this.flapping_sound;
    this.lastSound = null;
    let hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(-5, -5, 40, 40);
		this.duck.hitArea = hit;
  }

  playSound(snd,stop=false){
    return (e)=>{
      if(stop) this.lastSound.stop();
       this.lastSound=sound(snd)};
  }

  handleClick(e){
    sound("shot");
    if(!this.active){
      return;
    }

    createjs.Tween.removeTweens(this.duck)
    this.duck.gotoAndPlay("hit")
    this.alive=false;
    this.active = false;
    createjs.Tween.get(this.duck)
      .call(this.birdDied)
      .call(this.stopSound(this.flapping_sound))
      .wait(500)
      .call(this.playSound("falling"))
      .to({y:480},1000)
      .call(this.playSound('ground_thud',true))
      .wait(1000)
      .call(this.removeBird)
  }

  rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  randMovement(){
    return()=>{
      const x = this.duck.x;
      const y = this.duck.y;
      return {x: (this.rand(100,200)+x), y: (this.rand(100,200)+y)}
    }
  }

  flyaway(){
    if(!this.alive) return;
    this.active = false;
    createjs.Tween.removeTweens(this.duck)
    createjs.Tween.get(this.duck)
          .call(this.setInactive.bind(this))
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

  getDiffCoeff(){
    switch(this.round){
      case 1:
        return 0.15;
      case 2:
        return 0.2;
      default:
        return (this.round/100*2 + 0.18)
    }
  }

  genRandomPath(range){
    const MAX_WIDTH = 730;
    const MAX_HEIGHT = 400;
    let xrow = [];
    let yrow=[];
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
      //calc the distance to ensure a fixed speed across tweens
      const dist = Math.floor(Math.sqrt(Math.pow(y,2)+Math.pow(x,2)));
      //need to now find the angle of movement to link the correct animation
      const angleDeg = Math.atan2(Math.abs(y),Math.abs(x)) * (180 / Math.PI);
      const animation = (angleDeg < 40 ? "fly_side" : "fly_up")

      abs_coords.unshift({ params: {alpha: 1.0, x:(last_x + x), y: (last_y + y)},
                          speed: (dist/this.getDiffCoeff()),
                          reverse:(x<0),
                          reverseY:(y<0),
                          animation: animation });
    }
    abs_coords.reverse()
    return abs_coords;
  }

  changeAnimation(ani){
    return()=>(this.duck.gotoAndPlay(ani))
  }

  setInactive(){
      this.active=false;
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
          .to(dir.params,dir.speed);
    }

    obj.call(this.setInactive.bind(this))
      .call(this.birdLived)
      .call(this.changeAnimation("up"))
      .call(this.stopSound(this.flapping_sound))
      .to({y:-100},1000)
      .wait(1000)
      .call(this.removeBird)
  }
}

export default Duck;
