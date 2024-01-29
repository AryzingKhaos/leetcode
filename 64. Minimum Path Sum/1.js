/*
 * @Date: 2022-03-28 17:15:56
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-29 16:37:12
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/64. Minimum Path Sum/1.js
 */

/**
 * 典型的动态规划题
 * 用一个二维数组记录到目前的点需要的最短路径的值，下一个节点就是dp[i][j] = min(dp[i-1][j], dp[i][j-1])
 * 
 * 后来看了答案，就一个解法，跟这个一样
 * 【AC】
*/

const {log} = console;

const minPathSum = (grid) => {
  const dp = [];
  // 初始化dp全部为0
  grid.forEach(item => {
    dp.push(grid[0].map(_ => 0));
  })
  dp[0][0] = grid[0][0];

  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if (i === 0 && j === 0) continue;
      else if (i === 0) dp[i][j] = dp[i][j-1] + grid[i][j];
      else if (j === 0) dp[i][j] = dp[i-1][j] + grid[i][j];
      else dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};

(() => {
  // minPathSum([[1,3,1],[1,5,1],[4,2,1]]);
  log(minPathSum([[1,2,3],[4,5,6]]));
  
})();
