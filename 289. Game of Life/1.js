/**
 * 拆分子函数拆好一点就行
 * 关键是如何用替代的方式改变值。其实可规定：2表示从0变成1，但目前还是0；3表示从1变成0，但目前还是1。
 * 其他状态不需要重新配置，最后整体替换一下就行
 * 
 * 一次AC，就是细节比较多，不是很难吧
 * 看看答案有什么精妙解答
 * 
 * 看了一下答案，答案的最优思路跟我完全一致，不过在计算calcTotalLiveAround的时候答案更优一些
 * 计算calcTotalLiveAround的时候，用了一个neighbors数组，分别是[0,1,-1]，然后用i和j循环0-2去加，就分别得到了对应点位的周围8个位置的值
 * 比我的8个方向全都if了一遍更优雅了。具体看答案
 * https://leetcode.cn/problems/game-of-life/solutions/179750/sheng-ming-you-xi-by-leetcode-solution/?envType=study-plan-v2&envId=top-interview-150
 */

const { log } = console;

const calcTotalLiveAround = (board, row, col) => {
  const rowLength = board.length;
  const colLength = board[0].length;
  const positionVal = []; // 记录周围8个地方的值，顺时针一周，分别是左上、上、右上、右、右下、下、左下、左
  const existVal = {
    0: 0,
    1: 1,
    2: 0,
    3: 1,
  }

  // 左上
  if (row - 1 >= 0 && col - 1 >= 0) {
    positionVal.push(existVal[board[row-1][col-1]]);
  } else {
    positionVal.push(0);
  }

  // 上
  if (row - 1 >= 0 && col >= 0) {
    positionVal.push(existVal[board[row-1][col]]);
  } else {
    positionVal.push(0);
  }

  // 右上
  if (row - 1 >= 0 && col + 1 < colLength) {
    positionVal.push(existVal[board[row-1][col+1]]);
  } else {
    positionVal.push(0);
  }

  // 右
  if (col + 1 < colLength) {
    positionVal.push(existVal[board[row][col+1]]);
  } else {
    positionVal.push(0);
  }

  // 右下
  if (row + 1 < rowLength && col + 1 < colLength) {
    positionVal.push(existVal[board[row+1][col+1]]);
  } else {
    positionVal.push(0);
  }

  // 下
  if (row + 1 < rowLength) {
    positionVal.push(existVal[board[row+1][col]]);
  } else {
    positionVal.push(0);
  }

  // 左下
  if (row + 1 < rowLength && col - 1 >= 0) {
    positionVal.push(existVal[board[row+1][col-1]]);
  } else {
    positionVal.push(0);
  }

  // 左
  if (col - 1 >= 0) {
    positionVal.push(existVal[board[row][col-1]]);
  } else {
    positionVal.push(0);
  }

  return positionVal.reduce((sum, item) => {
    return sum+=item;
  }, 0);
}

const gameOfLife = (board) => {
  const rowLength = board.length;
  const colLength = board[0].length;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      // log(calcTotalLiveAround(board, i, j));
      const sumAround = calcTotalLiveAround(board, i, j);
      if (sumAround < 2 && board[i][j] === 1) {
        board[i][j] = 3;
      }
      if (sumAround > 3 && board[i][j] === 1) {
        board[i][j] = 3;
      }
      if (sumAround === 3 && board[i][j] === 0) {
        board[i][j] = 2;
      }
    }
  }

  // 替换
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (board[i][j] === 3) {
        board[i][j] = 0;
      }
      if (board[i][j] === 2) {
        board[i][j] = 1;
      }
    }
  }
  return board;
};

(() => {
  // log(calcTotalLiveAround([[0,1,0],[0,0,1],[1,1,1],[0,0,0]], 1,1));
  log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));
  log(gameOfLife([[1,1],[1,0]]));
})()