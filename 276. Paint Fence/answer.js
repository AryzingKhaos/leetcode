/*
 * @Date: 2022-04-03 13:57:59
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-03 14:11:23
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/276. Paint Fence/answer.js
 */

/**
 * 动态规划方法。
 * 对于dp[i]，只要分两种情况考虑：
 * 1.和上一个栅栏涂不一样的颜色，那么dp[i]有k-1种涂法，也就是dp[i-1] * (k-1)
 * 2.和上一个栅栏涂一样的颜色，这样意味着和上上个栅栏不能一样（否则就三连一样了），也是k-1种涂法，也就是dp[i-2] * (k-1)
 * 3.得到递推方程：dp[i] = dp[i-1] * (k-1) + dp[i-2] * (k-1)
 * 
 * 【AC】
*/

const { log } = console;

const numWays = (n, k) => {
  if (k === 0 || n === 0) return 0;
  if (k === 1 && n >= 3) return 0;
  if (k === 1) return 1;
  if (n === 1) return k;
  if (n === 2) return k * k;
  const dp = new Array(n).fill(k);
  dp[1] = k * k;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i-1] * (k-1) + dp[i-2] * (k-1)
  }
  // log(dp);
  return dp[n-1];
};

(() => {
  // log(numWays(3, 2));
  // log(numWays(7, 2));
  log(numWays(3, 1));
})();

