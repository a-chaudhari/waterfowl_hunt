import Board from './board';
import Title from './title';

document.addEventListener('DOMContentLoaded', ()=>{
  const canvas = document.getElementById('demoCanvas');
  canvas.addEventListener("click",(e)=>getPosition(e))
  const stage = new createjs.Stage("demoCanvas");
  stage.enableMouseOver();
  stage.mouseChildren = true;
  let board;
  let title
  let titleMusic;
  let load_percent;
  let titleDisplayed=false;

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
      x = event.clientX + document.body.scrollLeft +
          document.documentElement.scrollLeft;
      y = event.clientY + document.body.scrollTop +
          document.documentElement.scrollTop;
    }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    if(!titleDisplayed) board.handleClick(x,y);
  }
  let ticker;

  const handleTick = (event) => {
      stage.update(event);
  }
  createjs.Ticker.on("tick", handleTick.bind(this));
  setupLoadingScreen()

  const preload = new createjs.LoadQueue();
  window.preload = preload;
  preload.addEventListener("complete", loadComplete);
  preload.addEventListener("progress", preloadProgess);
  preload.installPlugin(createjs.Sound);
  preload.loadManifest([
    {id:"intro", src:"audio/02-duck-hunt-intro.mp3"},
    {id:"shot", src:"audio/99-gunshot-sfx-.mp3"},
    {id:"wing_flap", src:"audio/99-duck-flapping-sfx-.mp3"},
    {id:"falling", src:"audio/99-dead-duck-falls-sfx-.mp3"},
    {id:"bark", src:"audio/99-bark-sfx-.mp3"},
    {id:"ground_thud", src:"audio/99-dead-duck-lands-sfx-.mp3"},
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
  ])

  function preloadProgess(e){
    load_percent.text = "Loading " + Math.floor(e.progress * 100) + "% Complete"
  }

  function setupLoadingScreen(){
    load_percent = new createjs.Text(`Loading 0% Complete`, "30px 'Press Start 2P'", "#000000");
    load_percent.x = 70;
    load_percent.y = 350;
    load_percent.textBaseline="alphabetic";
    stage.addChild(load_percent)
  }

  const titleScreen = () =>{
    titleDisplayed=true;
    stage.removeAllChildren();
    board = null;
    createjs.Sound.stop();
    createjs.Tween.removeAllTweens();
    titleMusic = createjs.Sound.play("title_music")
    title.showTitle(start.bind(this))
  }
  const start = () =>{
    titleDisplayed=false;
    const count = title.count;
    title.hideTitle();
    titleMusic.stop();
    board= new Board(stage, titleScreen.bind(this),count);
    board.intro();
  }
  function loadComplete(){
    stage.removeAllChildren();
    title = new Title(stage)
    titleScreen();
  }
})
