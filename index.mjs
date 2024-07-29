// Moves the knight makes by moving along the x and y axis of the board (8x8)
const knight = {
  moves: [
    [1, 2],
    [2, 1],

    [2, -1],
    [1, -2],

    [-1, -2],
    [-2, -1],

    [-2, 1],
    [-1, 2],
  ],
};

function knightMoves(startPos, endPos) {
  // knightMoves([0,0], [3,3])
  // returns array of the path co-ords, start and end inclusive, [[0,0], [1,2], [3,3]]
  // sometimes there will be more than 1 solution, all are correct as long as it has the same least amount of moves
}
