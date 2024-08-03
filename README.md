# knights-travails

Given enough turns, a knight on a standard 8x8 chess board can move from any square to any other square. Its basic move is two steps forward and one step to the side, or one step forward and two steps to the side. It can face any direction.

You can think of the board as having 2-dimensional coordinates. Such that [0,0] refers to the x and y-axis respectively.

This project is to build a function 'knightMoves' that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

E.g.
knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]]
or
knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]

Sometimes there is more than one solution that provides the shortest possible path, any answer is correct as long as it provides the shortest possible path.

Initial improvements could be made after a brief review:

- Although planning before beginning to code was fairly decent this time, more time could be spent to iron out a few bugs and misconceptions I had.
- Better code organisation i.e. classes/modules (although for a project this size it's a small issue).
- Use a map/set to store the visited positions and graph representation for quicker access and better readability.
- Potential performance and space improvements would be to generate all the possible knight moves when visiting a square when I need to, rather than populating the entire graph with every square's adjacent moves, which results in a lot of unused storage of data.
- Alternatives to how I build the shortest path array. Currently, array.unshifting() is inefficient so I could look simply push and reverse the array once the complete path is built or look to maybe using nodes/linked lists
- As an aside: I discovered Dijkstra's algorithm once the project was completed, this seems very interesting to read about in the future.
