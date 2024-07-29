# knights-travails

Given enough turns, a knight on a standard 8x8 chess board can move from any square to any other square. Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction.

You can think of the board as having 2-dimensional coordinates. Such that [0,0] refers to the x and y axis respectively.

This project is to build a function 'knightMoves' that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

E.g.
knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]]
or
knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]

Sometimes there is more than one solution that provides the shortest possible path, any answer is correct as long as it provies the shortest possible path.
