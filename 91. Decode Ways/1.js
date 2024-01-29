/*
 * @Date: 2022-03-28 17:34:15
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-29 16:37:02
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/91. Decode Ways/1.js
 */

/**
 * 步骤：
 * 1.对于每个字符串位置i，都是由i-1和i-2变化而来的
 * 2.这样就可以构建一个数组dp，可以从0开始记录这个字符串每个位置可以包含的解码数。
 * 3.如果i-1和i-2带来的编码策略不同，那么dp[i] = dp[i-2] * 2
 * 【上面的思路是错的】
 * 
 * 后来抄了答案得到的下面的解法
 * 【AC】
*/

const { log } = console;

const numDecodings = (s) => {
  if (s === '0' || s.slice(0,1) === '0') return 0;
  if (s.length === 1) return 1;
  const dp = new Array(s.length).fill(0);
  const sArr = s.split('');
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 1; i < s.length; i++){
    if (sArr[i] === '0'){
      if (['1', '2'].includes(sArr[i-1])) dp[i+1] = dp[i-1];
      else return 0;
    } else {
      if (sArr[i-1] === '1' || (sArr[i-1] === '2' && sArr[i] >= 1 && sArr[i] <= 6)) {
        dp[i+1] = dp[i-1] + dp[i];
      } else {
        dp[i+1] = dp[i];
      }
    }
    log(dp);
    log('=============');
  }
  return dp[s.length];
};

(() => {
  log(numDecodings("2611055971756562"));
  // log(numDecodings("1201234"));
  // log(numDecodings("2101"));
  // log(numDecodings("226"));
})();