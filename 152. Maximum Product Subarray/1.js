/*
 * @Date: 2022-03-31 20:54:27
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-31 21:29:20
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/152. Maximum Product Subarray/1.js
 */

/**
 * 典型动态规划题
 * 步骤：
 * 1.用一个数组dp，记录以下标i数字为结尾的子数组的最大乘积。
 * 2.对于i，转移方程是dp[i] = max(dp[i-1] * nums[i], nums[i]);
 * 
 * 上面的思路有问题，如果所有的元素都大于等于0，那么是没问题的。一旦出现了偶数个负数，最大子数组的乘积大小会发生突变
 * 所以我们还需要一个dp2来记录绝对值和符号。
 * 
 * 3.用dp2来记录以下标i数字为结尾的子数组的最大绝对值乘积，转移方程为dp2[i] = max(abs(dp[i-1] * nums[i], abs(nums[i])));
 * 4.同时用数组dpSigh记录下标为i时的符号。用1和-1表示。如果nums[i]为0，那doSign[i]也为0
 * 5.遍历dp，获取最大值dpMax。遍历dp2，获取符号为正的最大值dp2Max。对比dpMax和dp2Max，返回大的值。
 * 
 * 【WA】
 * 经过自测（没提交），可能有更好的思路来解决。请见2.js
 * 
 * 
*/

const { log } = console;

const getSign = (num) => {
  if (num === 0) return 0;
  if (num > 0) return 1;
  if (num < 0) return -1;
}

const maxProduct = (nums) => {
  const dp = new Array(nums.length).fill(0);
  const dp2 = new Array(nums.length).fill(0);
  const dpSign = new Array(nums.length).fill(1);
  const { max, abs } = Math;
  dp[0] = nums[0];
  dp2[0] = abs(nums[0]);
  dpSign[0] = getSign(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    dp[i] = max(dp[i-1] * nums[i], nums[i]);
    dp2[i] = max(abs(dp2[i-1] * nums[i]), abs(nums[i]));
    if (dp2[i] === abs(nums[i])) {
      dpSign[i] = getSign(nums[i])
    } else {
      dpSign[i] = getSign(dpSign[i-1] * nums[i]);
    }
  }
  let maxNum = 0, maxPositiveNum = 0;
  for (let i = 0; i < dp.length; i++) {
    maxNum = max(dp[i], maxNum);
    maxPositiveNum = max(dp2[i] * dpSign[i], maxPositiveNum);
  }
  log(dp);
  log(dp2);
  log(dpSign);
  log(maxNum, maxPositiveNum);
  return max(maxNum, maxPositiveNum);
};

(() => {
  // log(maxProduct([2,3,-2,4]));
  // log(maxProduct([-2,0,-1]));
  // log(maxProduct([-2,-3, -1, -4]));
  log(maxProduct([-2, -3, -4]));
})();
