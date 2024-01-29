

/**
 * 答案的写法优雅和简洁了很多
 * class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int Max = amount + 1;
        vector<int> dp(amount + 1, Max);
        dp[0] = 0;
        for (int i = 1; i <= amount; ++i) {
            for (int j = 0; j < (int)coins.size(); ++j) {
                if (coins[j] <= i) {
                    dp[i] = min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
};
https://leetcode.cn/problems/coin-change/solution/322-ling-qian-dui-huan-by-leetcode-solution/


【AC】 64% 71%
*/

const { log } = console;

const coinChange = (coins, amount) => {
  let max = amount + 1;
  const dp = new Array(amount + 1).fill(max);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  // log(dp);
  return dp[amount] > amount ? -1 : dp[amount];
}


(() => {
  log(coinChange([3,2,5], 11));
})();

