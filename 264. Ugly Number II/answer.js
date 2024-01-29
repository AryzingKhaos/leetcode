/*
 * @Date: 2022-03-28 15:29:53
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:30:14
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/264. Ugly Number II/answer.js
 */

/**
 * 包含质因子是2,3,5的数
 * 【AC】
*/

const { log } = console;

const nthUglyNumber = (n) => {
  const dp = [0, 1];
  let index2 = 1, index3 = 1, index5 = 1;
  for (let i = 2; i <= 1690; i++) {
    const min = Math.min(dp[index2] * 2, dp[index3] * 3, dp[index5] * 5);
    if (min === dp[index2] * 2) index2++;
    if (min === dp[index3] * 3) index3++;
    if (min === dp[index5] * 5) index5++;
    dp.push(min);
  }
  return dp[n];
}

(() => {
  log(nthUglyNumber22(1690));
})();

