# Waterfowl Hunt

## Background
This is a clone off of the popular NES classic Duck Hunt. one or more ducks will fly around on the screen.  The user must click on them to shoot them down.  Each consecutive stage will be harder by adding more ducks and having them fly around in a more erratic manner.

## Functionality and MVP

1. display a game screen. and have ducks fly around
1. be able to shoot ducks
1. duck movement difficulty should be variable.

## Wireframes

The app will consist of one screen and a modal.  the screen will have the game area, along with counters showing score and game statuses.  the modal will be either a "you lost, play again?" or an info box with a short description and various links.

## Architecture and Technologies

The app will use Easel.js along with HTML5 Canvas to handle the rendering.

The game logic will be in Javascript.

board.js will hold the board object and will handle rendering and logic.  duck.js will represent a single duck in the board.

## Implementation Timeline

Day 1: Set up the project basics and get an entry file made.  Render an empty board on the screen using easel.js.  Have ducks and be able to click on ducks.

Day2: Be able to have ducks fly around in a variable manner. core functionality should work.

Day 3: style the game and use proper sprites and animations.  create the modals.

Day 4: bug fixes and bonus ideas if I have time.
