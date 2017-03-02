// import * as Sprites from './sprites';
class Duck{
  constructor(id){
    // this.duck = Sprites.animation;
    // let data = {
    //   images: ["./sprites/duckhunt.png"],
    //   frames: {width:64, height:64, count:9, regX: 32, regY:64, spacing:0, margin:0},
    //   animations:{
    //     fly:[0,1,2]
    //   },
    //   framerate:7
    // }
    let data = {
      images: ["./sprites/duckhunt.png"],
      frames: [
        [266, 115, 27, 31],
        [297, 117, 32, 29],
        [331, 117, 25, 31],
        [367, 121, 34, 29],
        [405, 131, 34, 20],
        [442, 129, 34, 24],
        [484, 124, 31, 29],
        [525, 123, 18, 31],
        [549, 123, 18, 31]

      ],
      animations:{
        fly_up:[0,2],
        fly_side:[3,5],
        hit: [6,6,"fall", 0.5],
        fall:[7,8]
      },
      framerate:7
    }

    


    const spriteSheet = new createjs.SpriteSheet(data);
    this.duck = new createjs.Sprite(spriteSheet,"fly_up")
    this.duck.scaleX = 2.0;
    this.duck.scaleY = 2.0;
    this.duck.id = id;

    // debugger
    let hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(0, 0, 30, 30);
		this.duck.hitArea = hit;

    this.duck.addEventListener("click", (event)=>(this.handleClick(event)))
    // this.moveDuck();
  }

  handleClick(e){
    console.log("clicked");
    createjs.Tween.removeTweens(this.duck)
    this.duck.gotoAndPlay("hit")
    createjs.Tween.get(this.duck).wait(500).to({y:1600},1000)
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

  // nextRandomStep(){
  //   createjs.Tween.get(this.duck, { loop: false })
  //   .to(this.randMovement()(),1000).call(this.nextRandomStep())
  // }



  genRandomPath(range){
    const MAX_WIDTH = 450;
    const MAX_HEIGHT = 300;
    let xrow = [];
    let yrow=[];
    let abs_coords = [{x:this.rand(0,MAX_WIDTH),y:this.rand(0,MAX_HEIGHT)}];

    //generate absolute coord paths
    for(let i = 0;i< 10;i++){
      const last_x = abs_coords[0].x
      const last_y = abs_coords[0].y
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

      abs_coords.unshift({x: (last_x + x), y: (last_y + y)})
    }

    console.log(abs_coords);
    return abs_coords;

  }

  moveDuck(){
    const obj = createjs.Tween.get(this.duck, { loop: false })
    // .to(this.randMovement()(),1000)

    const dirs = this.genRandomPath(100);
    for(let i  = 0; i< 10;i++){
      let duration = 1000;
      if (i === 0){
        duration = 0;
      }
      obj.to(dirs[i],duration);
    }

    obj.to({y:-100},1000)
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

  static
  getCircle(){
    const circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    return circle;
  }



}

export default Duck;
