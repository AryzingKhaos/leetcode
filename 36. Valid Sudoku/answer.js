/**
 * 答案还是非常优雅的
 * 虽然代码用的是数组记录，但是实际上可以用hash表记录
 * 需要3个hash表，分别记录row、col、subbox的1-9的出现次数
 * 只要有任意一个超过1，就return false
 */

var isValidSudoku = function(board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const c = board[i][j];
          if (c !== '.') {
              const index = c.charCodeAt() - '0'.charCodeAt() - 1;
              rows[i][index]++;
              columns[j][index]++;
              subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
              if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                  return false;
              }
          }
      }
  }
  return true;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/valid-sudoku/solutions/1001859/you-xiao-de-shu-du-by-leetcode-solution-50m6/
