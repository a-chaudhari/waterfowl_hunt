#include <Bounce2.h>

const int PIN = 0;
const int LED_PIN = 13;
Bounce pushbutton = Bounce(PIN, 10);

void setup() {
  pinMode(PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
 } 

void loop() {
  pushbutton.update();
  if(pushbutton.fallingEdge()){
    Keyboard.print("z");
    digitalWrite(LED_PIN, HIGH);
  }
  else if(pushbutton.risingEdge()){
    digitalWrite(LED_PIN, LOW);
  }
}
