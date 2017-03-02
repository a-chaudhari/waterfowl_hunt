let data = {
  images: ["./sprites/duckhunt.png"],
  frames: [
    [263, 110, 36, 36],
    [297, 110, 36, 36],
    [333, 110, 36, 36]
  ],
  animations:{
    fly:[0,1,2]
  },
  framerate:7
}

export const spriteSheet = new createjs.SpriteSheet(data);
export const animation = new createjs.Sprite(spriteSheet,"run")
