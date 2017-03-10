# Duck Hunt
Duck Hunt is a JavaScript clone of the original Duck Hunt game by Nintendo.  This uses Canvas, the CreateJS library, and the LeapJS library.

![alt](/docs/dhunt.gif)

# Implementation
This game is powered using the CreateJS library.  CreateJS is a library that automates and abstracts many routine tasks with Canvas such as creating tweens, manipulating objects on the canvas, and animating sprites. Chaining together various calls can even allow scripted sequences, such as the following sequence that animates the dog during the intro sequence.
```` JavaScript
obj.call(this.changeAnimation(this.dog,"sniff"))
  .wait(1000)
  .to({x:300},2000)
  .call(this.changeAnimation(this.dog,"sniff"))
  .wait(1000)
  .call(this.changeAnimation(this.dog,"happy"))
  .call(this.playSound("bark",ppc))
  .wait(500)
  .call(this.changeAnimation(this.dog,"jumping"))
  .to({x: 350, y:300},500)
  .call(this.shiftToBehindBackground(this.dog).bind(this))
  .call(this.changeAnimation(this.dog,"landing"))
  .to({x:400, y:500},500)
  .to({x:350,y:500})
  .call(this.gameLoop.bind(this))
````

The Leap Motion Controller provides "virtual light gun" support.  The Leap Motion Controller has a driver component that interprets the video stream from the hardware and outputs 3d vectors.  The driver also runs a local websocket server that allow Leap's JavaScript library (LeapJS) to easily access tracking data without any complicated setup or browser plugins. The LeapJS library then exposes these 3d vectors to the running JavaScript application at 30 frames per second.

Duck Hunt registers a callback with LeapJS and receives every frame that is processed by the driver.  Various control schemes were tried to allow full game control with only hand gestures.  However, all were rejected due to feedback from alpha testers.  

The gestures were either uncomfortable over extended periods or the hardware had difficulty interpreting the gestures accurately.  Eventually the full-gesture control strategy was dropped in favor of a gesture + keyboard control scheme.

```` JavaScript
frameCallback(frame){
  if(frame.pointables.length > 0){
    this.cursor.alpha=1;
    const pointer = frame.pointables[0];
    const pos = pointer.stabilizedTipPosition;
    const norm = frame.interactionBox.normalizePoint(pos)
    this.cursor.x = (786) * norm[0];
    this.cursor.y = (720) * (1-norm[1]);
  }
  else{
    this.cursor.alpha=0;
  }
}

keyPressed(e){
  if(e.key ==="z"){
    if(this.cursor.alpha === 1.0){
      this.fire(this.cursor.x,this.cursor.y)
    }
  }
}
````

## Operation
Directly opening the file in a browser will not work due to XHR loading being unavailable. It needs be served off a server to function.  A live version is hosted [here](http://www.amitchaudhari.com/waterfowl_hunt/).


## Virtual/Physical "Light Gun"

See [here](docs/lightgun.md)








*This project was created strictly for non-commercial educational purposes only.*
