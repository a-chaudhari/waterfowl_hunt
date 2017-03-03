export const registerSounds=()=>{
  createjs.Sound.registerSound('audio/02-duck-hunt-intro.mp3',"intro");
  createjs.Sound.registerSound('audio/99-duck-flapping-sfx-.mp3',"wing_flap");
  createjs.Sound.registerSound('audio/shot.mp3',"shot");
  createjs.Sound.registerSound('audio/falling.mp3',"falling");
  createjs.Sound.registerSound('audio/ground_thud.mp3',"ground_thud");

  // createjs.Sound.registerSound('audio/bark.mp3',"bark");
  // createjs.Sound.registerSound('audio/game_over.mp3',"game_over");
  // createjs.Sound.registerSound('audio/missed.mp3',"missed");
  // createjs.Sound.registerSound('audio/quack.mp3',"quack");
  // createjs.Sound.registerSound('audio/caught_one.mp3',"caught_one");
  // createjs.Sound.registerSound('audio/points.mp3',"points");
  // createjs.Sound.registerSound('audio/menu_sound.mp3',"menu_sound");
  // createjs.Sound.registerSound('audio/bark.mp3',"bark");
  // createjs.Sound.registerSound('audio/bark.mp3',"bark");
}

export const sound=(...args)=>{
  return createjs.Sound.play(...args);
}
