import Board from './board';
import Title from './title';
// import {registerSounds} from './sound';

document.addEventListener('DOMContentLoaded', ()=>{
  // registerSounds();
  const canvas = document.getElementById('demoCanvas');
  const stage = new createjs.Stage("demoCanvas");
  let board;
  const title = new Title(stage)
  let titleMusic;

  const handleTick = (event) => {
      stage.update(event);
  }
  createjs.Ticker.on("tick", handleTick.bind(this));

  const preload = new createjs.LoadQueue();
  preload.addEventListener("complete", loadComplete);
  preload.installPlugin(createjs.Sound);
  preload.loadManifest([
    {id:"intro", src:"/audio/02-duck-hunt-intro.mp3"},
    {id:"shot", src:"/audio/shot.mp3"},
    {id:"wing_flap", src:"/audio/99-duck-flapping-sfx-.mp3"},
    {id:"falling", src:"/audio/falling.mp3"},
    {id:"bark", src:"/audio/99-bark-sfx-.mp3"},
    {id:"ground_thud", src:"audio/ground_thud.mp3"},
    {id:"laugh", src:"/audio/99-laugh-sfx-.mp3"},
    {id:"got_one", src:"/audio/04-got-duck-s-.mp3"},
    {id:"hit_count", src:"/audio/99-counting-hits-sfx-.mp3"},
    {id:"round-clear",src:"/audio/05-round-clear.mp3"},
    {id:"perfect",src:"/audio/06-perfect.mp3"},
    {id:"you-failed",src:"/audio/07-you-failed.mp3"},
    {id:"game-over",src:"/audio/08-game-over.mp3"},
    {id:"menu-beep",src:"/audio/menu_sound.mp3"},
    {id:"title_music",src:"/audio/01-title-screen.mp3"}

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
    titleScreen();
    // board.intro();
  }
  // cursor.x = 300;
  // board.drawDucks();
  // board.gameLoop();
})
