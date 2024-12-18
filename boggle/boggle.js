/** Boggle word check.

Given a 5x5 boggle board, see if you can find a given word in it.

In Boggle, you can start with any letter, then move in any NEWS direction.
You can continue to change directions, but you cannot use the exact same
tile twice.

So, for example::

    N C A N E
    O U I O P
    Z Q Z O N
    F A D P L
    E D E A Z

In this grid, you could find `NOON* (start at the `N` in the top
row, head south, and turn east in the third row). You cannot find
the word `CANON` --- while you can find `CANO` by starting at the
top-left `C`, you can 't re-use the exact same `N` tile on the
front row, and there's no other `N` you can reach.

*/

function makeBoard(boardString) {
  /** Make a board from a string. */

  const letters = boardString.split(/\s+/);
  const board = [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];

  return board;
}

function find(board, word) {
  /** Can word be found in board? */

  // Loop through every cell to start the search
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (searchFrom(r, c, word, board, new Set())) {
        return true;
      }
    }
  }
  return false; // Word not found
}

function searchFrom(r, c, word, board, visited) {
  // Base case: word is empty -> found the word
  if (word.length === 0) return true;

  // Out of bounds, already visited, or mismatch
  if (
    r < 0 || r >= board.length ||
    c < 0 || c >= board[r].length ||
    visited.has(`${r},${c}`) ||
    board[r][c] !== word[0]
  ) {
    return false;
  }

  // Mark this cell as visited
  visited.add(`${r},${c}`);

  // Move in all 4 directions
  let directions = [
    [0, 1],  // right
    [0, -1], // left
    [1, 0],  // down
    [-1, 0], // up
  ];

  for (let [dr, dc] of directions) {
    if (searchFrom(r + dr, c + dc, word.slice(1), board, visited)) {
      return true;
    }
  }

  // Unmark this cell (backtrack)
  visited.delete(`${r},${c}`);
  return false;
}

module.exports = { makeBoard, find };
