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

// Uses BFS
// There can be multiple valid solutions, any are acceptable providing they return the shortest possible path
// Start and end position inclusive
function knightMoves(startPos, endPos) {
  const graph = buildGraph();
  const queue = [];
  const visited = [];

  // Push an object into the queue that has current position and its previous move
  queue.push({ position: startPos, prev: null });

  // Search for the target endPos square and use an array to keep track of all the squares visited, not allowing duplictes means we only need to find a square to get its previous move, a while loop allows us to trace the route back through all previous moves
  while (queue.length) {
    const currentPos = queue.shift();
    visited.push(currentPos);

    // Once we find the target end square begin building the path
    if (
      currentPos.position[0] === endPos[0] &&
      currentPos.position[1] === endPos[1]
    ) {
      const shortestPath = [];
      shortestPath.push(currentPos.position);
      let previousMove = currentPos.prev;

      while (previousMove) {
        shortestPath.unshift(previousMove);
        previousMove = visited.find(
          (visitedPos) =>
            visitedPos.position[0] === previousMove[0] &&
            visitedPos.position[1] === previousMove[1]
        ).prev;
      }

      console.log(`Travelling from ${startPos} to ${endPos}...`);
      console.log(
        `You made it in ${shortestPath.length - 1} ${
          shortestPath.length - 1 === 1 ? "move" : "moves"
        }!`
      );
      console.log(`Your path is:`);
      for (let i = 0; i < shortestPath.length; i++) {
        console.log(shortestPath[i]);
      }
      return shortestPath;
    }

    // If we haven't visited the end square yet, get all valid board moves from the current position and add them to the queue
    const validMoves =
      graph[currentPos.position[0] + currentPos.position[1] * 8];

    validMoves.forEach((move) => {
      const hasVisited = visited.find(
        (visitedPos) =>
          visitedPos.position[0] === move[0] &&
          visitedPos.position[1] === move[1]
      );

      if (!hasVisited) {
        queue.push({ position: move, prev: currentPos.position });
      }
    });
  }
}

knightMoves([0, 0], [3, 3]);
