/*
 * @Date: 2022-04-01 12:41:39
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-01 12:57:15
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/198. House Robber/2.js
 */

/**
 * 动态规划
 * 步骤：
 * 1.用dp记录到下标i位置为止的最大收益
 * 2.转移方程为：dp[i] = max(dp[i-2] + nums[i], dp[i-1])
 * 
 * 【AC】
*/

const { log } = console;

const rob = (nums) => {
  const length = nums.length;
  if (length === 0) return 0;
  if (length === 1) return nums[0];
  const dp = new Array(length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
  }
  return dp[length - 1];
};

(() => {
  log(rob([1,2,3,1]));
  log(rob([2,7,9,3,1]));
  log(rob([2,1,1,2]))
})();
