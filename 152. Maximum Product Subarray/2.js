/*
 * @Date: 2022-03-31 21:29:24
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-31 21:36:22
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/152. Maximum Product Subarray/2.js
 */

/**
 * 步骤：
 * 1.用dp和dp2分别记录以nums[i]为结尾的最大乘积、最小乘积
 * 2.dp转移方程为：dp[i] = max(dp[i-1] * nums[i], dp2[i-1] * nums[i], nums[i]);
 * 3.dp2转移方程为：dp2[i] = min(dp[i-1] * nums[i], dp2[i-1] * nums[i], nums[i]);
 * 
 * 【AC】
*/


const { log } = console;

const maxProduct = (nums) => {
  const length = nums.length;
  if (length === 1) return nums[0];
  const dp = new Array(length).fill(0);
  const dp2 = new Array(length).fill(0);
  const { max, min } = Math;
  dp[0] = dp2[0] = nums[0];
  for (let i = 1; i < length; i++) {
    dp[i] = max(dp[i-1] * nums[i], dp2[i-1] * nums[i], nums[i]);
    dp2[i] = min(dp[i-1] * nums[i], dp2[i-1] * nums[i], nums[i]);
  }
  let maxNum = 0;
  for (let i = 0; i < length; i++) {
    maxNum = max(dp[i], dp2[i], maxNum);
  }
  // log(dp);
  // log(dp2);
  // log(maxNum);
  return maxNum;
};

(() => {
  log(maxProduct([2,3,-2,4]));
  log(maxProduct([-2,0,-1]));
  log(maxProduct([-2,-3, -1, -4]));
  log(maxProduct([-2, -3, -4]));
})();



