import Board from './board';
import Title from './title';
// import {registerSounds} from './sound';



document.addEventListener('DOMContentLoaded', ()=>{
  // registerSounds();
  const canvas = document.getElementById('demoCanvas');
  canvas.addEventListener("click",(e)=>getPosition(e))
  const stage = new createjs.Stage("demoCanvas");
  stage.enableMouseOver();
  stage.mouseChildren = true;
  // stage.on("click",console.log)
  let board;
  let title
  let titleMusic;

  const getPosition= (event)=>{
    let x = new Number();
    let y = new Number();

    if (event.x != undefined && event.y != undefined)
    {
      x = event.pageX;
      y = event.pageY;
    }
    else // Firefox method to get the position
    {
      console.log("ff method")
      x = event.clientX + document.body.scrollLeft +
          document.documentElement.scrollLeft;
      y = event.clientY + document.body.scrollTop +
          document.documentElement.scrollTop;
    }
    // debugger

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    console.log("x: " + x + "  y: " + y);
    board.handleClick(x,y)
  }
  let ticker;

  // const enableTick = ()=>{
  //   // ticker = createjs.Ticker.on("tick", handleTick.bind(this));
  //   createjs.Ticker.paused = true;
  // }
  //
  // const disableTick = ()=>{
  //   createjs.Ticker.paused = false;
  //
  //   // createjs.Ticker.off(ticker)
  // }

  const handleTick = (event) => {
      stage.update(event);
  }
  createjs.Ticker.on("tick", handleTick.bind(this));

  const preload = new createjs.LoadQueue();
  window.preload = preload;
  preload.addEventListener("complete", loadComplete);
  preload.installPlugin(createjs.Sound);
  preload.loadManifest([
    {id:"intro", src:"audio/02-duck-hunt-intro.mp3"},
    {id:"shot", src:"audio/shot.mp3"},
    {id:"wing_flap", src:"audio/99-duck-flapping-sfx-.mp3"},
    {id:"falling", src:"audio/falling.mp3"},
    {id:"bark", src:"audio/99-bark-sfx-.mp3"},
    {id:"ground_thud", src:"audio/ground_thud.mp3"},
    {id:"laugh", src:"audio/99-laugh-sfx-.mp3"},
    {id:"got_one", src:"audio/04-got-duck-s-.mp3"},
    {id:"hit_count", src:"audio/99-counting-hits-sfx-.mp3"},
    {id:"round-clear",src:"audio/05-round-clear.mp3"},
    {id:"perfect",src:"audio/06-perfect.mp3"},
    {id:"you-failed",src:"audio/07-you-failed.mp3"},
    {id:"game-over",src:"audio/08-game-over.mp3"},
    {id:"menu-beep",src:"audio/menu_sound.mp3"},
    {id:"title_music",src:"audio/01-title-screen.mp3"},
    {id:"title_img",src:"sprites/dhunttitle.png"},
    {id:"duckhunt_img",src:"sprites/duckhunt.png"},
    {id:"aboutme_img",src:"sprites/aboutme.png"}

    // {id:"dh_sprites", src:"/sprites/duckhunt.png", type:"spritesheet"}
  ])
  // window.preload = preload;
  // preload.loadFile("assets/preloadjs-bg-center.png");

  const titleScreen = () =>{
    stage.removeAllChildren();
    titleMusic = createjs.Sound.play("title_music")
    title.showTitle(start.bind(this))
  }
  const start = () =>{
    title.hideTitle();
    titleMusic.stop();
    board= new Board(stage, titleScreen.bind(this));
    board.intro();
  }
  function loadComplete(){
    // board.gameLoop();
    // console.log
    // title.titleScreen(start.bind(this));
    title = new Title(stage)
    titleScreen();
    // board= new Board(stage, titleScreen.bind(this));
    // board.intro();
    // board.intro();
  }
  // cursor.x = 300;
  // board.drawDucks();
  // board.gameLoop();
})
