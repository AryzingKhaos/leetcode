/*
 * @Date: 2022-04-04 10:46:07
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-07 10:40:53
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/322. Coin Change/1.js
 */

/**
 * 这次应该就是个典型的无限背包问题
 * 这里主要是要背出递推公式
 * 步骤：
 * 1.使用一个二维数组记录，i就是1、2、5，j就是1、2、3、4、5、6……
 * 2.对于dp[i][j]来说，dp[i][j] = min(dp[i-1][j], dp[i][j-coins[i]] + 1)，解释说就是：要么不使用coins[i]，那就是dp[i-1]的j，要么使用coins[i]，那就是dp[i][j-coins[i]] + 1
 * 3.边界条件，需要dp[0]要根据这一位的数字计算可能的值，dp[i][0]都是0。
 * 4.同时，如果dp[i-1][j]是-1，那么一定使用dp[i][j - coins[i]] + 1。如果j - coins[i] < 1，那么这一位也是-1
 * 
 * 【AC】 23% 14%
 * 超过的比例有点小
*/

const { log } = console;

const coinChange = (coins, amount) => {
  const rows = coins.length;
  const columns = amount + 1;
  if (!rows || !columns) return 0;
  // const dp = new Array(rows).fill(new Array(columns).fill(-1)); // 发现一个坑点，这样写实际上所有二级数组都是一个地址。
  const dp = [];
  for (let i = 0; i < rows; i++) {
    dp.push(new Array(columns).fill(-1))
  }
  // 初始化数组
  for (let i = 0; i < rows; i++) {
    dp[i][0] = 0;
  }
  for (let j = 1; j <= amount; j++) {
    if (j % coins[0] === 0) dp[0][j] = j / coins[0];
    else dp[0][j] = -1;
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j <= amount; j++) {
      if (dp[i-1][j] === -1 && (j - coins[i] < 0 || dp[i][j - coins[i]] === -1)) {
        dp[i][j] = -1;
      } else if (j - coins[i] < 0 || dp[i][j - coins[i]] === -1) {
        dp[i][j] = dp[i-1][j];
      } else if (dp[i-1][j] === -1) {
        dp[i][j] = dp[i][j - coins[i]] + 1;
      } else {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j - coins[i]] + 1);
      }
    }
  }
  // log(dp);
  return dp[rows - 1][amount];
};

(() => {
  // log(coinChange([1,2,5], 11));
  // log(coinChange([3,2], 11));
  // log(coinChange([1,2], 2));
  log(coinChange([3,2,5], 11));
  // log(coinChange([3,2,5], 7));


})();

