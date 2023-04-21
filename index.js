import {
  WHITE,
  YELLOW,
  ORANGE,
  RED,
  BLUE,
  GREEN,
  solveCube
} from "./mySolver.js";

/*
Apply this algorithm to get to the following state:
(blue frontwards and white upwards)
F U R B L D F' U' R' B' L' D'
*/
const objCubeState = {
  blueFace: /* (white upwards) */
    [ORANGE, WHITE, RED, 
    RED, BLUE, ORANGE, 
    ORANGE, BLUE, ORANGE],

  orangeFace: /* (white upwards) */
    [BLUE, YELLOW, GREEN, 
    YELLOW, ORANGE, BLUE, 
    GREEN, ORANGE, GREEN],

  greenFace: /* (white upwards) */
    [RED, YELLOW, YELLOW, 
    WHITE, GREEN, GREEN, 
    RED, GREEN, YELLOW],

  redFace: /* (white upwards) */
    [BLUE, WHITE, WHITE, 
    WHITE, RED, GREEN, 
    BLUE, RED, WHITE],

  whiteFace: /* (green upwards) */
    [RED, RED, WHITE, 
    ORANGE, WHITE, GREEN, 
    GREEN, RED, WHITE],

  yellowFace: /* (blue upwards) */
    [BLUE, YELLOW, YELLOW, 
    BLUE, YELLOW, BLUE, 
    ORANGE, ORANGE, YELLOW],
};

const movesPerLine = 8;
const solveToPrint = solveCube(objCubeState, movesPerLine);

console.log(solveToPrint);

/*
Lib Information:
https://www.npmjs.com/package/rubiks-cube-solver

Rubik's Cube Move Notation
https://jperm.net/3x3/moves
*/

