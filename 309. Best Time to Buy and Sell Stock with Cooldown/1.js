/*
 * @Date: 2022-04-03 17:08:35
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-03 17:34:02
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/309. Best Time to Buy and Sell Stock with Cooldown/1.js
 */

/**
 * 动态规划思路，同时有第123题的当前状态概念、钱包概念，应该对于股票问题是万能的。
 * 步骤：
 * 1.对于每个时间i，都有可能是三种状态：
 *  ①持有股票状态：dp1[i] = max(dp1[i-1], dp2[i-1] - prices[i])
 *  ②不持有股票状态（非冷冻期）dp2[i] = max(dp2[i-1], dp3[i-1])
 *  ③不持有股票状态（冷冻期）dp3[i] = dp1[i-1] + prices[i]
 * 瞄了一眼答案，思路一模一样。但是对于“不持有股票状态（非冷冻期）”状态的理解，我有点问题。因为dp2[i]可能是dp2[i-1]而来，也可能是dp3[i-1]而来。
 * 
 * 【AC】
*/

const { log } = console;
const maxProfit = (prices) => {
  const length = prices.length, final = length - 1;
  if (length === 1) return 0;
  const dp1 = new Array(length).fill(0);
  const dp2 = new Array(length).fill(0);
  const dp3 = new Array(length).fill(0);
  dp1[0] = 0 - prices[0];
  dp2[0] = 0;
  dp3[0] = 0;
  for (let i = 1; i < length; i++) {
    dp1[i] = Math.max(dp1[i-1], dp2[i-1] - prices[i]);
    dp2[i] = Math.max(dp2[i-1], dp3[i-1]);
    dp3[i] = dp1[i-1] + prices[i];
  }
  // log(dp1);
  // log(dp2);
  // log(dp3);
  return Math.max(dp1[final], dp2[final], dp3[final]);
};

(() => {
  log(maxProfit([1,2,3,0,2]));
})();
