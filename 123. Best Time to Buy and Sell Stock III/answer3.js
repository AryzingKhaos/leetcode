/*
 * @Date: 2022-03-30 14:28:11
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 16:34:39
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/123. Best Time to Buy and Sell Stock III/answer3.js
 */

/**
 * 对于1.js，是一个O(n2)的解法
 * 但是其实是可以优化成O(n)的：
 * class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int minVal = prices[0], maxVal = prices[prices.length-1];
        int[] dp = new int[prices.length];//从低到高，dp[i]表示第i天以及之前的区间所获得的最大利润
        int[] dp2 = new int[prices.length];//从高到低，dp2[i]表示第i天开始直到最后一天期间所获得的最大利润
        dp[0] = -prices[0];
        for(int i=1;i<prices.length;++i){
            dp[i] = Math.max(dp[i-1], prices[i]-minVal);
            minVal = Math.min(prices[i], minVal);
        }
        for(int i=prices.length-2;i>=0;--i){
            dp2[i] = Math.max(dp2[i+1], maxVal-prices[i]);
            maxVal = Math.max(maxVal, prices[i]);
        }
        for(int i=1;i<=prices.length-1;++i){
            // System.out.println(dp[i-1]+","+dp2[i]);
            max = Math.max(dp[i-1]+dp2[i], max);
        }
        return Math.max(dp[prices.length-1], max);
    }
}
 * 
 * 但是边界条件比较麻烦。
 * 主要的思想是：
 * 遍历到i的时候，其实是可以根据之前leftMin记录，直接使用price[i-1]的值和leftMin记录来计算当前点拆分数组的左数组的最大profit
 *  (leftMin相当于上述java代码中的minVal，是一个值，不是数组。rightMax类似maxVal，也不是数组)
 * 同时利用price[i]到rightMax的值计算右数组的最大profit
 * 同时，用两个数组。dp1记录左侧最大的profit，dp2记录右侧最大的profit
 * 
*/


const maxProfit = (prices) => {
  let max = 0;
  let minVal = prices[0], maxVal = prices[prices.length-1];
  const dp = new Array(prices.length).fill(0);//从低到高，dp[i]表示第i天以及之前的区间所获得的最大利润
  const dp2 = new Array(prices.length).fill(0);//从高到低，dp2[i]表示第i天开始直到最后一天期间所获得的最大利润
  dp[0] = -prices[0];
  for(let i=1;i<prices.length;++i){
      dp[i] = Math.max(dp[i-1], prices[i]-minVal);
      minVal = Math.min(prices[i], minVal);
  }
  for(let i=prices.length-2;i>=0;--i){
      dp2[i] = Math.max(dp2[i+1], maxVal-prices[i]);
      maxVal = Math.max(maxVal, prices[i]);
  }
  for(let i=1;i<=prices.length-1;++i){
      max = Math.max(dp[i-1]+dp2[i], max);
  }
  return Math.max(dp[prices.length-1], max);
}
