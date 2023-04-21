# Node JS Rubik's Cube Solver

First, **install the dependencies**:

```bash
npm install
```

Fill the **objCubeState** object on index.js file, according to your cube state.

Then, run the following command to generate the solve algorithm:

```bash
npm run dev
```

Follow the algorithm, with blue face frontwards and white face upwards.

## Example

Scramble your cube with this algorithm (blue frontwards and white upwards):

```
F U R B L D F' U' R' B' L' D'
```

The solving algorithm, following the Fridrich Method, will be (blue frontwards 
and white upwards):

```
--> White Cross:
B'  L   U   F   U'  F   U2  R  U2  D2  F'  U'  R   U   

--> F2L (First Two Layers):
R   D   R'  B   D'  B'  D2  F'  D   F
B   D   B'  F   D   F'  D'  L'  D'  L   
D2  R   D2  R'  D'  R   D   R'  
D'  F2  D2  F'  D'  F   D'  F2  

--> OLL & PLL (Orientation Last Layer & Permutation Last Layer):
L   D   L'  D'  B'  L'  F   L   
B   D'  F'  D'  F   D   F   U   
F'  D'  F   U'  F'  D2  F'  D
```