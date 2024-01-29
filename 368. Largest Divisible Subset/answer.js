/**
 * https://leetcode-cn.com/problems/largest-divisible-subset/solution/zui-da-zheng-chu-zi-ji-by-leetcode-solut-t4pz/
 * 从题目1 <= nums.length <= 1000就应该知道，这是一个O(n2)的解法
 * 
 * 步骤
 * 1.先对数组排序
 * 2.对于nums[i]，都有一个对应的dp[i]，用于记录这个位置的最大size
 * 3.对于每一个nums[i]，都要遍历nums[j]（范围0 <= j < i），一旦num[i] % nums[j] === 0，dp[i] = max(nums[j]+1, dp[i])
 * 4.记录maxSize、及其对应的maxVal
 * 5.对nums数组倒推遍历（nums[k]），首先从后找到一个maxSize（如果有多个，直接使用第一个就行），把他push到最终数组res中，更新maxVal为nums[k]，maxSize--
 * 6.返回得到的res
 * 
 * 下面的代码是答案的代码，不是自己写的
 * 
*/

const largestDivisibleSubset = (nums) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);

  // 第 1 步：动态规划找出最大子集的个数、最大子集中的最大整数
  const dp = new Array(len).fill(1);
  let maxSize = 1;
  let maxVal = dp[0];
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    if (dp[i] > maxSize) {
      maxSize = dp[i];
      maxVal = nums[i];
    }
  }

  // 第 2 步：倒推获得最大子集
  if (maxSize === 1) return [nums[0]];

  const res = [];
  for (let k = len - 1; k >= 0 && maxSize > 0; k--) {
    if (dp[k] === maxSize && maxVal % nums[k] === 0) {
      res.push(nums[k]);
      maxVal = nums[k];
      maxSize--;
    }
  }
  return res;
};
