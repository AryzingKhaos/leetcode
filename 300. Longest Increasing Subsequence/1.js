/*
 * @Date: 2022-04-03 15:58:07
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-03 16:05:06
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/300. Longest Increasing Subsequence/1.js
 */

/**
 * 思路基本是动态规划：
 * 1.对于每个dp[i]，记录以这个位置为结尾的递增子序列
 * 2.对于位置i，要么nums[i]对于dp[i-1]的数组是递增的，要么不是
 * 3.对于是递增的nums[i]，push到dp[i-1]的数组里，变成dp[i]的子序列
 * 4.对于不是递增的，变成新的数组dp[i] = [nums[i]]
 * 
 * 然后发现这个思路完全是错的。子序列不一定是连续的，这个思路只能解子数组（连续的）。
 * 【WA】
*/



