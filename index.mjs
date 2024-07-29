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

const adjacencyList = [];

// 64 cell graph represented by an adjacency list, stored in an array
// for(let i = 0; i < 8; i++){
//   for(let j = 0; j < 8; j++){
//     let row = j;
//     let col = i;
//     const neighbours = []
//     knight.moves.forEach(move => {
//       if(row + move[0] >= 0 && row + move[0] <= 7 &&
//          col + move[1] >= 0 && col + move[1] <= 7){
//         neighbours.push([row + move[0], col + move[1]])
//       }
//     })
//     adjacencyList.push(neighbours)
//   }
// }
// const x = 1;
// const y = 0;
// console.log(adjacencyList[x * 8 + y])

// 2d array 8x8 adjacency list of each cell's valid connecting knight move positions
// i corresponds to the rows, therefore the Y dimension on a chess board
// j corresponds to the cols, therefore the X dimension on a chess board
// for (let i = 0; i < 8; i++) {
//   const row = [];
//   let yPos = i;
//   for (let j = 0; j < 8; j++) {
//     const col = [];
//     let xPos = j;

//     // Check if knight moves are in the bounds of the board for each cell, if so push knight move adjacent cell into array
//     knight.moves.forEach((move) => {
//       if (
//         xPos + move[0] >= 0 &&
//         xPos + move[0] <= 7 &&
//         yPos + move[1] >= 0 &&
//         yPos + move[1] <= 7
//       ) {
//         col.push([xPos + move[0], yPos + move[1]]);
//       }
//     });

//     row.push(col);
//   }

//   adjacencyList.push(row);
// }
// const pos = [1,0]
// let x = pos[1]
// let y = pos[0]

// console.log(adjacencyList[x][y])
