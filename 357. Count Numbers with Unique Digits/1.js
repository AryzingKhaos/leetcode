/**
 * 从示例中可以看出，0-99中一共有100个数字，有91个满足
 * 也就是‘00’算是0
 * 这样，n===1时，x为10（0-9）
 * 
 * 用动态规划和数学应该都可以解
 * 我想用数学
 * 
 * 我们用一个数组dp记录当前下标位数的值如果符合条件，可以有多少个数字
 * 比如dp[2]代表严格的两位数如果满足各个位都不同，有多少个。应该是81个，因为dp[1] = 10
 * 91 - 10 === 81
 * 所以dp[3] = dp[2] * (10 - 2)
 * 所以递推公式是dp[i] = dp[i-1] * (10 - i + 1)
 * dp[0] === 1
 * 所以结果就是sumArr(dp.slice(1, n+1))，因为dp[0]是不需要的。
 * 
 * 【AC】80.14% 7.5%
*/

const { log } = console;

const initDp = () => {
  const dp = new Array(9).fill(1);
  dp[0] = 1;
  dp[1] = 10;
  dp[2] = 81;
  for (let i = 3; i <= 8; i++) {
    dp[i] = dp[i-1] * (10 - i + 1)
  }
  return dp;
}

const sumArr = (arr) => arr.reduce((sum, item) => sum + item, 0);

const countNumbersWithUniqueDigits = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 10;
  const dp = initDp();
  return sumArr(dp.slice(1, n+1));
}

(() => {
  log(countNumbersWithUniqueDigits(0));
  log(countNumbersWithUniqueDigits(1));
  log(countNumbersWithUniqueDigits(2));
  log(countNumbersWithUniqueDigits(3));
  log(countNumbersWithUniqueDigits(4));
  log(countNumbersWithUniqueDigits(5));
  log(countNumbersWithUniqueDigits(6));
  log(countNumbersWithUniqueDigits(7));
  log(countNumbersWithUniqueDigits(8));
})();

