# J5Redux example app

This is a pieman game using J5Redux boilerplate for managing global state and a Tessel.

Simple Pieman game set up to run on a Tessel board
See fritzing diagram:
![fritzing diagram for pieman](https://raw.githubusercontent.com/j5js/j5-redux-example/master/pieman_bb.png)

Note: Pieman is Simon without the sound.

This is a proof of concept application for johnny five and redux as a global state manager.

Please submit PRs for suggestions on improvement.

#### Setup
All the components for this game come in the sparkfun j5 Inventor's kit, but they can also be purchased by themselves.
You can substitute based on how comfortable you are with hardware & using J5. For example, if you want to use an Arduino board, you will have to update the J5 code to remove the Tessel.io board and remap the pins. If you want to use a solderable breadboard, by all means practice those soldering skills (make sure you do it in a well ventillated space!)

#####You will need the following:
- tessel
- non solder breadboard
- 4 colored buttons (or buttons you can paint)
- 1 RGB LED
- colored wire (14)
- 4 resistors (I used 100 ohm resistors)

####Using a tessel
If you use a tessel make sure that you have the tessel cli installed globally `npm install -g t2-cli`.  This code was written under version
`
t2-cli: 0.1.4
t2-firmware: 0.0.16
Node.js: 4.5.0
`

#####Running the Program:
- run `npm install`
- run `NODE_ENV=production t2 run index.js --lan` To push code to your tessel.
  - Note: The `--lan` tag lets you be able to use the console as if you are ssh'd into the board. With that tag, anything you pass to the repl can be accessed.  For this app, I have added the redux store to the repl.
  - `NODE_ENV=production` is there to run the minified version of redux. Without it, we are in lag city, population  ...  <long delay> ... us
- Troubleshooting:  When in doubt, reset your tessel.


##### Pins matter:
The pins in the fritzing diagram are the ones used in the code.  If you decide to switch pins in the code & on the hardware, there are a couple things to consider.

RGB LEDs require PWM pins (which are denoted with a ~ on many boards)
 * Tessel's PWM pins are a5, a6, b5, and b6

See: https://tessel.gitbooks.io/t2-docs/content/API/Hardware_API.html#analog-pins

#### Game mechanics:
Starting the game,  the console will output:
`>> Press any button to start a game.`

Pressing any button will start a new game and a new color sequence will be generated based on the number of rounds the game is instantiated with. The default is 5.

The console will output:
>> Playing sequence, listener off...`
A color sequence will flash on an rgb led

When the sequence is complete, the console will output:
`>> Listening to input now ...`
Player hits button according to each color in sequence

For each correct button press the console will log out:
`>> Correct! [color] is [wantedColor]! Advanced game!!`

continue until the last round, adding one color to the sequence every round

If order is incorrect, game will be over and the console will output:
`>> Oh No! [color] is not [wantedColor]. ~Game over~`

On Game Over / Win: press any button to continue.
Rounds will be incremented by one.
