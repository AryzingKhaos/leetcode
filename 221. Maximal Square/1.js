/*
 * @Date: 2022-04-01 13:26:28
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-01 14:03:40
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/221. Maximal Square/1.js
 */

/**
 * 步骤：
 * 1.使用一个二维数组dp记录
 * 2.对于每个位置，如果是0，那么dp[i][j] = 0
 * 3.如果是1，且i === 0 || j === 0 ,以这个点为右下点的最大正方形边长为1。
 * 4.如果i > 0 && j > 0，同时这里的值是1，那么查看dp[i-1][j-1]的最大边长是多少。
 * 5.如果为0，那么这里置为1；如果是一个不为0的数字k，查看dp[i][j-1]……dp[i][j-k]以及dp[i-1][j]……dp[i-k][j]的这些所有位置是不是都是1
 * 6.使用l逐个遍历，如果每次循环，两边都是1，那么这里的值为l+1；如果一旦有任何一个不为1，中断循环。
 * 
 * 一些细节处理起来还是挺麻烦的，比如：
 * ["0","0","0","1"],
    ["1","1","0","1"],
    ["1","1","1","1"],
    ["0","1","1","1"],
    ["0","1","1","1"]
    这里有两个连续的正方形
 * 
 * 
 * 【AC】
*/

const { log } = console;

const maximalSquare = (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const columnsNum = matrix.length, rowsNum = matrix[0].length;
  const dp = new Array(columnsNum).fill(undefined).map(item => new Array(rowsNum).fill(0));
  dp[0][0] = Number(matrix[0][0]);
  for (let i = 0; i < columnsNum; i++) {
    for (let j = 0; j < rowsNum; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = Number(matrix[i][j]);
        } else { // i、j都不为0
          dp[i][j] = Number(matrix[i][j]);
          if (dp[i-1][j-1] > 0) {
            const k = dp[i-1][j-1];
            let subSquareLength = 1;
            for (let l = 1; l <= k; l++) {
              if (matrix[i][j-l] === '1' && matrix[i-l][j] === '1') subSquareLength = l + 1;
              if (matrix[i][j-l] !== '1' || matrix[i-l][j] !== '1') break;
            }
            if (subSquareLength) {
              dp[i][j] = subSquareLength;
            }
          }
        }
      }
    }
  }

  // 为了方便理解，获取最大边长的过长写在下面。实际是可以放到上面的循环里一块写的。实测放在上面写也提升不了多少速度。
  let maxSquareSideLength = 0;
  dp.forEach(arr => arr.forEach(item => maxSquareSideLength = Math.max(maxSquareSideLength, item)))

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

