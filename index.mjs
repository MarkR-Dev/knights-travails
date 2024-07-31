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
  const adjacencyList = [];
  const queue = [];
}

function getValidMoves(position) {
  const xPos = position[0];
  const yPos = position[1];
  const validMoves = [];

  knight.moves.forEach((move) => {
    if (
      xPos + move[0] >= 0 &&
      xPos + move[0] <= 7 &&
      yPos + move[1] >= 0 &&
      yPos + move[1] <= 7
    ) {
      validMoves.push([xPos + move[0], yPos + move[1]]);
    }
  });
  return validMoves;
}

// 64 item array(0-63 indexed) to represent the 8x8 board as a graph(adjacency list)
// Access desired x,y co-ordinates via graph[x * 7 + y] because of 0 indexing
function buildGraph() {
  const graph = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      let row = i;
      let col = j;
      graph.push(getValidMoves([row, col]));
    }
  }
  return graph;
}
