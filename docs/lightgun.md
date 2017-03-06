# Light Gun Mode
This port of Duck Hunt has support for the Leap Motion Controller.  The Leap Motion Controller is lets you use your fingers as a virtual cursor to aim your gun.

Simply install the drivers for the Leap Controller and plug it in.  The game will automatically detect the device and request positional data. Aim with your finger and press the `z` button on your keyboard to fire.

The detection logic is intentionally simple. The game will use the position of the first finger, or finger-like object, it sees. So pick a finger, or pencil, place it above the Leap's field-of-view and enjoy!

## Physical Light Gun

Those with wood-working skills or access to a 3d printer can take this one step further and create a physical light gun!

### Components required:
* Teensy controller
* pushbutton momentary switch
* micro-usb cable

I Provided a STL file for use in 3d printers, but the design is specific to the components I had on hand. But the idea is pretty simple.  The teensy controller emulates a standard USB keyboard and fires a `z` when it detects a falling edge on a GPIO pin.  That way the gun can work on any computer without the need for any complicated setup or drivers.  The light gun's barrel should be long, straight, and thinner than an adult finger.  It should also be printed in white plastic or another bright material for best tracking accuracy.

The model I provided assumes the following components:
1. Teensy 3.2 controller
1. Panel mount pushbutton switch with diameter of 10mm.  Panel mount diameter of 8mm.
1. 3mm thick microusb cable.  (I used a white samsung branded cable)
