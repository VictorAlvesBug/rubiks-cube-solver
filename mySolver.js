import solver from 'rubiks-cube-solver';

function solveCube(objCubeState, movesPerLine = 8) {
  const strCubeState = getStrCubeState(objCubeState);

  const solveMoves = solver(strCubeState);
  
  const solveToPrint = solveMoves
    // Changing "prime" to "'", representing counterclockwise
    // Ex: Rprime --> R'
    .replaceAll('prime', "'")
    // Every move must have 2 characters, even clockwise moves
    // Ex: "R" --> "R "; "R2" --> "R2"; "R'" --> "R'"
    .split(' ')
    .map((move) => move.padEnd(2, ' '))
    .join('  ')
    // Splits 8 moves per line
    .split('')
    .reduce((acc, character, index) => {
      const moveLength = 4;
      if (index % (movesPerLine * moveLength) === 0) {
          return acc + '\n' + character;
        }
      return acc + character;
    }, '');

  return solveToPrint;
}

function getStrCubeState({
  blueFace: frontFace,
  orangeFace: rightFace,
  whiteFace: upFace,
  yellowFace: downFace,
  redFace: leftFace,
  greenFace: backFace,
}) {
  const centerIndex = 4;
  const frontColor = frontFace[centerIndex];
  const rightColor = rightFace[centerIndex];
  const upColor = upFace[centerIndex];
  const downColor = downFace[centerIndex];
  const leftColor = leftFace[centerIndex];
  const backColor = backFace[centerIndex];

  const convertColorToDirection = (squareColor) => {
    switch (squareColor) {
      case frontColor:
        return 'f';
      case rightColor:
        return 'r';
      case upColor:
        return 'u';
      case downColor:
        return 'd';
      case leftColor:
        return 'l';
      case backColor:
        return 'b';
    }
  };

  const strFrontFace = frontFace.map(convertColorToDirection).join('');
  const strRightFace = rightFace.map(convertColorToDirection).join('');
  const strUpFace = upFace.map(convertColorToDirection).join('');
  const strDownFace = downFace.map(convertColorToDirection).join('');
  const strLeftFace = leftFace.map(convertColorToDirection).join('');
  const strBackFace = backFace.map(convertColorToDirection).join('');

  return (
    strFrontFace +
    strRightFace +
    strUpFace +
    strDownFace +
    strLeftFace +
    strBackFace
  );
}

const WHITE = 'W';
const YELLOW = 'Y';
const ORANGE = 'O';
const RED = 'R';
const BLUE = 'B';
const GREEN = 'G';

export { WHITE, YELLOW, ORANGE, RED, BLUE, GREEN, solveCube };
