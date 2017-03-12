import * as Sprites from './sprites';

class Title{
  constructor(stage){
    this.stage = stage;
    this.titleCont = new createjs.Container();
    this.setUpTitleContainer();
    this.aboutMeCont = this.aboutMeContainer();
    this.start;
    this.count = 1;
  }

  beep(){
    createjs.Sound.play("menu-beep");
  }

  setUpTitleContainer(){
    const c = this.titleCont;
    c.addChild(this.titleImage());
    c.addChild(this.gunButton());
    c.addChild(this.startButton());
    c.addChild(this.startButtonTwo());
    c.addChild(this.aboutButton());
  }

  showTitle(start){
    this.start = start;
    this.stage.addChild(this.titleCont);
  }

  hideTitle(){
    this.stage.removeAllChildren();
  }

  gunButton(){
    const obj = new createjs.Shape();
    obj.graphics.beginFill("#fff").drawRect(0,0,550,50);
    const hit = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,550,50);
    obj.x = 110;
    obj.y = 582;
    obj.cursor = "pointer";
    obj.alpha = 0.0;
    obj.hitArea=hit;
    obj.on("click",this.lightGun.bind(this));
    return obj;
  }

  lightGun(){
    window.location = "https://github.com/a-chaudhari/waterfowl_hunt/blob/master/docs/lightgun.md";
    this.beep();
  }


  titleImage(){
    const obj = Sprites.titleScreen();
    obj.x = 0;
    obj.y = 0;
    obj.scaleX = 3.0;
    obj.scaleY = 3.0;
    return obj;
  }

  startButton(){
    const obj = new createjs.Shape();
    obj.graphics.beginFill("#fff").drawRect(0,0,365,50);
    const hit = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,365,50);
    obj.x = 210;
    obj.y = 395;
    obj.cursor = "pointer";
    obj.alpha = 0.0;
    obj.hitArea = hit;
    obj.on("click",this.startGame(1).bind(this))
    return obj;
  }

  startButtonTwo(){
    const obj = new createjs.Shape();
    obj.graphics.beginFill("#fff").drawRect(0,0,415,50);
    const hit = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,415,50);
    obj.x = 177;
    obj.y = 457;
    obj.cursor = "pointer";
    obj.alpha = 0.0;
    obj.hitArea = hit;
    obj.on("click",this.startGame(2).bind(this))
    return obj;
  }

  startGame(n){
    return()=>{
      this.count = n;
      this.beep();
      this.start();

    }
  }

  aboutButton(){
    const obj = new createjs.Shape();
    obj.graphics.beginFill("#fff").drawRect(0,0,340,50);
    const hit = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,340,50);
    obj.x = 220;
    obj.y = 520;
    obj.cursor = "pointer";
    obj.alpha = 0.0;
    obj.hitArea = hit;
    obj.on("click",this.aboutMe.bind(this))
    return obj;
  }

  aboutMeContainer(){
    const cont = new createjs.Container();

    const background = new Sprites.aboutMe();
    cont.addChild(background);
    cont.x = 0;
    cont.y = 0;

    const back_button  = new createjs.Shape();
    back_button.graphics.beginFill("#fff").drawRect(0,0,125,60);
    const hit  = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,125,60);
    back_button.x = 30;
    back_button.y =600;
    back_button.cursor = "pointer";
    back_button.alpha =0.0;
    back_button.hitArea=hit;
    back_button.on("click",this.backButton.bind(this))
    cont.addChild(back_button)

    const github_button  = new createjs.Shape();
    github_button.graphics.beginFill("#fff").drawRect(0,0,125,45);
    const gh_hit  = new createjs.Shape();
    gh_hit.graphics.beginFill("#fff").drawRect(0,0,125,45);
    github_button.x =485;
    github_button.y =355;
    github_button.cursor = "pointer";
    github_button.alpha =0.0;
    github_button.hitArea=gh_hit;
    github_button.on("click",this.github_link.bind(this))
    cont.addChild(github_button)

    const website_button  = new createjs.Shape();
    website_button.graphics.beginFill("#fff").drawRect(0,0,350,45);
    const w_hit  = new createjs.Shape();
    w_hit.graphics.beginFill("#fff").drawRect(0,0,350,45);
    website_button.x =350;
    website_button.cursor = "pointer";
    website_button.y =425;
    website_button.alpha =0.0;
    website_button.hitArea=w_hit;
    website_button.on("click",this.website_link.bind(this))
    cont.addChild(website_button)

    return cont;
  }

  github_link(){
    this.beep();
    window.location = "https://github.com/a-chaudhari/waterfowl_hunt";
  }

  website_link(){
    this.beep();
    window.location = "http://www.amitchaudhari.com";
  }

  backButton(){
    this.beep();
    this.stage.removeChild(this.aboutMeCont);
    this.stage.addChild(this.titleCont);
  }

  aboutMe(){
    this.beep();
    this.stage.removeChild(this.titleCont);
    this.stage.addChild(this.aboutMeCont);
  }
}
export default Title;
