import * as Sprites from './sprites';

class Title{
  constructor(stage){
    this.stage = stage;
    this.start;
    this.aboutMeCont = this.aboutMeContainer();
    this.title = this.titleImage();
  }

  beep(){
    createjs.Sound.play("menu-beep");
  }

  showTitle(start){
    console.log("showing")
    this.start = start;
    this.stage.addChild(this.title);
    this.startButton();
    this.aboutButton();
    this.gunButton();
  }

  gunButton(){
    const obj = new createjs.Shape();
    obj.graphics.beginFill("#fff").drawRect(0,0,550,60);
    const hit = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,550,60);
    obj.x = 110;
    obj.y = 545;
    obj.alpha = 0.0;
    obj.hitArea=hit;
    obj.on("click",this.lightGun.bind(this));
    this.stage.addChild(obj);
  }

  lightGun(){
    console.log("light gun");
    this.beep();
  }

  hideTitle(){
    this.stage.removeChild(this.title)
  }

  titleImage(){
    const obj = Sprites.titleScreen();
    obj.x = 0;
    obj.y = 0;
    obj.scaleX = 3.0;
    obj.scaleY = 3.0;
    return obj;
    // obj.graphics.g
  }

  startButton(){
    const obj = new createjs.Shape();
    obj.graphics.beginFill("#fff").drawRect(0,0,350,50);
    const hit = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,350,50);
    obj.x = 200;
    obj.y = 400;
    obj.alpha = 0.0;
    obj.hitArea = hit;
    obj.on("click",this.startGame.bind(this))
    this.stage.addChild(obj);
  }

  startGame(){
    console.log("starting");
    this.beep();
    this.start();
  }

  aboutButton(){
    const obj = new createjs.Shape();
    obj.graphics.beginFill("#fff").drawRect(0,0,350,50);
    const hit = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,350,50);
    obj.x = 200;
    obj.y = 470;
    obj.alpha = 0.0;
    obj.hitArea = hit;
    obj.on("click",this.aboutMe.bind(this))
    this.stage.addChild(obj);
  }

  aboutMeContainer(){
    const cont = new createjs.Container();

    const background = new Sprites.aboutMe();
    cont.addChild(background);
    // cont.a
    cont.x = 0;
    cont.y = 0;

    const back_button  = new createjs.Shape();
    back_button.graphics.beginFill("#fff").drawRect(0,0,125,60);
    const hit  = new createjs.Shape();
    hit.graphics.beginFill("#fff").drawRect(0,0,125,60);
    back_button.x = 30;
    back_button.y =600;
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
    github_button.alpha =0.0;
    github_button.hitArea=gh_hit;
    github_button.on("click",this.github_link.bind(this))
    cont.addChild(github_button)

    const website_button  = new createjs.Shape();
    website_button.graphics.beginFill("#fff").drawRect(0,0,350,45);
    const w_hit  = new createjs.Shape();
    w_hit.graphics.beginFill("#fff").drawRect(0,0,350,45);
    website_button.x =350;
    website_button.y =425;
    website_button.alpha =0.0;
    website_button.hitArea=w_hit;
    website_button.on("click",this.website_link.bind(this))
    cont.addChild(website_button)

    return cont;
  }

  github_link(){
    console.log("gh link")
    this.beep();
    window.location = "https://github.com/a-chaudhari/waterfowl_hunt";

  }

  website_link(){
    console.log("website")
    this.beep();
    window.location = "http://www.amitchaudhari.com";
  }

  backButton(){
    this.beep();
    this.stage.removeChild(this.aboutMeCont);
  }

  aboutMe(){
    console.log("about me")
    this.stage.addChild(this.aboutMeCont);
    this.beep();


  }


}
export default Title;
