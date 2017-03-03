import Board from './board';
// import {registerSounds} from './sound';

document.addEventListener('DOMContentLoaded', ()=>{
  // registerSounds();
  const canvas = document.getElementById('demoCanvas');
  const board = new Board(canvas);

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
    {id:"got_one", src:"/audio/04-got-duck-s-.mp3"}

    // {id:"dh_sprites", src:"/sprites/duckhunt.png", type:"spritesheet"}
  ])
  // window.preload = preload;
  // preload.loadFile("assets/preloadjs-bg-center.png");
  function loadComplete(){
    // board.gameLoop();
    board.intro();
  }
  // cursor.x = 300;
  // board.drawDucks();
  // board.gameLoop();
})
