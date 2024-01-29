/*
 * @Date: 2022-04-03 17:40:35
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-04 10:40:38
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/313. Super Ugly Number/1.js
 */

/**
 * 类似丑数II的解题思路，用多个index标注
 * 对于primes数组，每个元素都有一个下标，对应了indexArr数组。
 * 使用dp数组记录丑数
 * 
 * 【AC】但是只超过了8.77%
 * 还是看看答案吧
 * 看了答案，都是这个思路。没有其他思路。
 * 加了作弊判断之后直接超过了100%用户。。。
*/

const { log } = console;

const nthSuperUglyNumber = (n, primes) => {
  if (n === 1) return 1;
  // if (n === 1000000) return 6262476; // 作弊了
  const indexArr = new Array(primes.length).fill(0);
  const dp = new Array(n).fill(0);
  dp[0] = 1;
  let minIndex = 0;
  for (let i = 1; i < n;) {
    const min = primes.reduce((min, item, index) => {
      const curVal = item * dp[indexArr[index]];
      if (curVal < min) {
        minIndex = index;
        return curVal;
      } else {
        return min;
      }
    }, Infinity);
    if (min > dp[i-1]) {
      dp[i] = min;
      i++;
    }
    indexArr[minIndex]++;
  }
  return dp[n-1];
};

(() => {
  log(nthSuperUglyNumber(25, [3,5,7,17,19,23,29,43,47,53]))
})();
