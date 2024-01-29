/**
 * 一个想法是：查找边缘上的O，对每个O都做深度优先遍历，将这些值都改成另一个值比如D，
 * 然后将其他所有非D的地方都填充成X，剩下所有D替换成O即可。
 * 
 * 思路完全没问题，就是细节太容易出错了
 * 跑了5次才AC
 */

const { log } = console;

const dfsDeep = (board, i, j) => {
  board[i][j] = 'D';
  const lower = 0;
  const upperCol = board.length;
  const upperVol = board[0].length;
  const direction = [[0,-1],[0,1],[-1,0],[1,0]];
  for(let d = 0; d < direction.length; d++) {
    const curDirection = direction[d];
    const yMove = i + curDirection[0];
    const xMove = j + curDirection[1];
    if (
      xMove >= lower && xMove < upperVol &&
      yMove >= lower && yMove < upperCol &&
      board[yMove][xMove] === 'O'
    ) {
      dfsDeep(board, yMove, xMove);
    }
  }
}

const solve = (board) => {
  for (let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if ((i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1) && board[i][j] === 'O') {
        dfsDeep(board, i, j);
      } else {
        continue;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'D') {
        board[i][j] = 'O'
      }
    }
  }
  return board;
};

(() => {
  // log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]));
  // log(solve([["O","O","O"],["O","O","O"],["O","O","O"]]));
  log(solve([
    ["X","O","X","O","X","O"],
    ["O","X","O","X","O","X"],
    ["X","O","X","O","X","O"],
    ["O","X","O","X","O","X"]
  ]));
})()
