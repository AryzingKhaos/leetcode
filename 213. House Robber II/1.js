/*
 * @Date: 2022-04-01 12:58:17
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-01 13:22:50
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/213. House Robber II/1.js
 */

/**
 * 题目类似198.打家劫舍1
 * 解法也可以类似，只是要增加一个考虑条件：是否同时使用了头尾元素。
 * 
 * 然后发现一个漏洞：当测试用例为[2,2,4,3,2,5]时，我们需要一个策略：能不用第一个数，尽量不用。
 * 
 * 可以用一个数组dp2记录到下标i为止，不使用nums[0]的最大值
 * 转移方程和dp一样。
 * 在结尾的时候，设final = length - 1，数组的最后的值finalVal = max(dp2[i-2] + nums[final], dp[i-1])
 * 
 * 【AC】
*/


const { log } = console;

const rob = (nums) => {
  const length = nums.length;
  if (length === 0) return 0;
  if (length === 1) return nums[0];
  if (length === 2) return Math.max(nums[0], nums[1]);
  const dp = new Array(length).fill(0);
  const dp2 = new Array(length).fill(0); // 记录有没有使用头元素，使用的话为true
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  dp2[0] = 0;
  dp2[1] = nums[1];
  let final = length - 1, finalVal;
  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    dp2[i] = Math.max(dp2[i-2] + nums[i], dp2[i-1]);
    if (i === final) {
      finalVal = Math.max(dp2[i-2] + nums[length - 1], dp[i-1])
    }
  }
  // log(dp);
  // log(dp2);
  return finalVal;
};

(() => {
  log(rob([1,2,3,1]));
  log(rob([2,7,9,3,1]));
  log(rob([2,1,1,2]));
  log(rob([1,2,3,1]));
  log(rob([2,3,2]));
  log(rob([2,2,4,3,2,5]));
})();
