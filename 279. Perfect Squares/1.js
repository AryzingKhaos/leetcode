/*
 * @Date: 2022-04-03 14:13:54
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-03 14:35:55
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/279. Perfect Squares/1.js
 */

/**
 * 这道题以前做过。
 * 动态规划，步骤：
 * 1.我们需要先维护一个完全平方数的数组，因为限定了n<=pow(10,4)，所以只要一万以内的完全平方数即可。即1-100
 * 2.对于每个数i，从1开始，先判断自己是不是完全平方数。可以把1中的数组hash化O(1)判断
 * 3.对于dp[i]，转移方程是dp[i] = Math.min(dp[i-1], dp[i-4], dp[i-9]……)
 * 4.由于3中的min行为是常数项，最大就是100，所以时间复杂度是O(100n) === O(n)
 * 
 * 一次【AC】
*/

const { log } = console;

const isSquare = (num, squaresHash) => {
  return squaresHash[num];
}

const numSquares = (n) => {
  if (n === 0) return 0;
  const squaresArr = [];
  for (let i = 1; i <= 100; i++) {
    squaresArr.push(Math.pow(i, 2));
  }
  const squaresHash = squaresArr.reduce((obj, item) => {
    obj[item] = true;
    return obj;
  }, {});

  const dp = new Array(n+1).fill(0);
  for (let i = 1; i <= n; i++) {
    if (isSquare(i, squaresHash)) {
      dp[i] = 1;
      continue;
    }
    let containSquares = [];
    // 这个循环最多100
    for (let j = 0; j < squaresArr.length; j++) {
      if (j + 1 > squaresArr.length) {
        containSquares = squaresArr;
        break;
      }
      if (squaresArr[j] < i && squaresArr[j+1] > i) containSquares = squaresArr.slice(0, j+1);
    }
    dp[i] = Math.min(...containSquares.map(item => dp[i - item] + 1));
  }
  // log(dp);
  return dp[n];
};

(() => {
  log(numSquares(12));
  log(numSquares(13));
})();

