export const black_duck = () => {
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

export const duck_ui = () =>{
  let data = {
    images: ["./sprites/duckhunt.png"],
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
    images: ["./sprites/duckhunt.png"],
    frames: [
      [85, 245, 23, 7]
    ]
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet)
}

export const flew_away_ui = () =>{
  let data = {
    images: ["./sprites/duckhunt.png"],
    frames: [
      [312, 242, 73, 17]
    ]
  }

  const spriteSheet = new createjs.SpriteSheet(data);
  return new createjs.Sprite(spriteSheet)
}

export const bullet_ui = () =>{
  let data = {
    images: ["./sprites/duckhunt.png"],
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
    images: ["./sprites/duckhunt.png"],
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
