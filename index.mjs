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

// Takes a position on the board and returns all valid accessible knight moves
function getValidMoves(position) {
  const [xPos, yPos] = position;
  const validMoves = [];

  knight.moves.forEach((move) => {
    const [xKnightMove, yKnightMove] = move;
    if (
      xPos + xKnightMove >= 0 &&
      xPos + xKnightMove < 8 &&
      yPos + yKnightMove >= 0 &&
      yPos + yKnightMove < 8
    ) {
      validMoves.push([xPos + xKnightMove, yPos + yKnightMove]);
    }
  });
  return validMoves;
}

// 64 item array(0-63 indexed) to represent the 8x8 board as a graph(adjacency list)
// Access desired x,y co-ordinates via graph[x + (y * 8)] because of 0 indexing a 1d array
function buildGraph() {
  const graph = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let xPos = j;
      let yPos = i;
      graph.push(getValidMoves([xPos, yPos]));
    }
  }
  return graph;
}

// knightMoves([0,0], [3,3])
// Returns array of the path co-ords, start and end inclusive, [[0,0], [1,2], [3,3]]
// Sometimes there will be more than 1 solution, all are correct as long as it has the same least amount of moves
function knightMoves(startPos, endPos) {
  const graph = buildGraph();
  const queue = [];
}
