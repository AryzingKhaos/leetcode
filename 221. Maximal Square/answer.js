/*
 * @Date: 2022-04-01 14:05:06
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-01 14:08:49
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/221. Maximal Square/answer.js
 */

/**
 * https://leetcode-cn.com/problems/maximal-square/solution/zui-da-zheng-fang-xing-by-leetcode-solution/
 * 官方答案跟1.js里的很像
 * 不太一样的是，在做转移方程的时候，其实可以通过依赖上方、左方、左上方三个点的dp值来决定当前的dp值
 * 具体的转移方程是：dp[i][j] = min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1
 * 
 * 【AC】79%，55%
*/

const { log } = console;

const maximalSquare = (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const columnsNum = matrix.length, rowsNum = matrix[0].length;
  const dp = new Array(columnsNum).fill(undefined).map(item => new Array(rowsNum).fill(0));
  dp[0][0] = Number(matrix[0][0]);
  let maxSquareSideLength = 0;
  for (let i = 0; i < columnsNum; i++) {
    for (let j = 0; j < rowsNum; j++) {
      if (matrix[i][j] === '1') {
        maxSquareSideLength = Math.max(maxSquareSideLength, 1);
        if (i === 0 || j === 0) {
          dp[i][j] = Number(matrix[i][j]);
        } else { // i、j都不为0
          dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1;
          maxSquareSideLength = Math.max(dp[i][j], maxSquareSideLength);
        }
      }
    }
  }

  // log(dp);
  return maxSquareSideLength * maxSquareSideLength;
};

(() => {
  // log(maximalSquare([
  //   ["1","0","1","0","0"],
  //   ["1","0","1","1","1"],
  //   ["1","1","1","1","1"],
  //   ["1","0","0","1","0"]
  // ]));

  // log(maximalSquare([
    // ["0","0","0","1"],
    // ["1","1","0","1"],
    // ["1","1","1","1"],
    // ["0","1","1","1"],
    // ["0","1","1","1"]
  // ]));

  log(maximalSquare([
    ["0","1","1","0","0","1","0","1","0","1"],
    ["0","0","1","0","1","0","1","0","1","0"],
    ["1","0","0","0","0","1","0","1","1","0"],
    ["0","1","1","1","1","1","1","0","1","0"],
    ["0","0","1","1","1","1","1","1","1","0"],
    ["1","1","0","1","0","1","1","1","1","0"],
    ["0","0","0","1","1","0","0","0","1","0"],
    ["1","1","0","1","1","0","0","1","1","1"],
    ["0","1","0","1","1","0","1","0","1","1"]
  ]));

  []

})();

