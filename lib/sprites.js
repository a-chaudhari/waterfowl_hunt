export const black_duck = () => {
  let data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [
      [266, 115, 27, 31],
      [297, 117, 32, 29],
      [331, 117, 25, 31],
      [367, 121, 34, 29],
      [405, 131, 34, 20],
      [442, 129, 34, 24],
      [484, 124, 31, 29],
      [525, 123, 18, 31],
      [549, 123, 18, 31],
      [147, 496, 24, 31],
      [183, 496, 32, 31],
      [224, 496, 30, 30]
    ],
    animations:{
      fly_up:[0,2],
      fly_side:[3,5],
      hit: [6,6,"fall", 0.5],
      fall:[7,8],
      up: [9,11]
    },
    framerate:7
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet,"fly_up")
}

export const titleScreen = () =>{
  // debugger
  let data = {
    // images: ["sprites/dhunttitle.png"],
    images: [window.preload.getResult('title_img')],
    frames: [
      [0,0,256,244]
    ]
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet)
}
export const aboutMe = () =>{
  let data = {
    images: [window.preload.getResult('aboutme_img')],
    frames: [
      [0,0,786,720]
    ]
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet)
}

export const duck_ui = () =>{
  let data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [
      [117, 265, 7, 8],
      [117, 246, 7, 8],
      [109, 265, 7, 8],
      [117, 265, 7, 8]
    ],
    animations:{
      red:0,
      white:1,
      black: 2,
      alt:[1,2],
      flash:[2,3]
    },
    framerate:2
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet,"white")
}

export const hit_ui = () =>{
  let data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [
      [85, 245, 23, 7]
    ]
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet)
}
export const pause_button = () =>{
  let data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [
      [430, 307, 54, 9],
      [430, 319, 54, 9]
    ],
    animations:{
      off: 0,
      on:[0,1]
    },
    framerate: 2
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet,"off")
}

export const flew_away_ui = () =>{
  let data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [
      [312, 242, 73, 17]
    ]
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet)
}

export const bullet_ui = () =>{
  let data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [
      [57, 253, 23, 8], //black clip
      [57, 272, 23, 8], //red clip
      [70,210, 26, 17] //empty
    ],
    animations:{
      black:0,
      red:1,
      flash:[1,2]
    },
    framerate:2
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet, "black")
}

export const bullet = () =>{
  let data = {
    images: [window.preload.getResult('duckhunt_img')],
    frames: [
      [75, 245, 4, 7], //black bullet
      [75, 264, 4, 7], //red bullet??
      [70, 210, 4, 7]
    ],
    animations:{
      black:0,
      red:1,
      empty: 2
    },
    framerate:2
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet,"black")
}

export const dog_intro = () =>{
  let data = {
    images: [window.preload.getResult('duckhunt_img')],
    // frames: {width:60, height:43, count:5, regX: 17, regY:300},
    frames:[
      [17, 300, 53, 43],
      [78, 300, 53, 43],
      [138, 300, 53, 43],
      [196, 300, 55, 43],
      [257, 300, 53, 43],//sniff
      [196, 300, 55, 43],
      [257, 300, 53, 43],//sniff
      [196, 300, 55, 43],
      [257, 300, 53, 43],//sniff
      [196, 300, 55, 43],//9
      [257, 300, 53, 43],//sniff,
      [17, 358, 53, 48], //excited
      [86, 359, 35, 46], //jumping
      [147, 366, 33, 32],//landing
      [209,362,29,39],  //14
      [269,362,29,39],
      [344,302,43,39],
      [331,362,56,39] //17
    ],
    animations:{
      walk:[0,3],
      sniff:[3,10,"walk"],
      happy:11,
      jumping:12,
      landing: 13,
      laughing: [14,15],
      one: 16,
      two: 17
    },
    framerate:8
  }
  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet,"walk");

}
