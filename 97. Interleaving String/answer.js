/*
 * @Date: 2022-03-30 10:36:17
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 13:01:35
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/97. Interleaving String/answer.js
 */


/**
 * https://leetcode-cn.com/problems/interleaving-string/solution/jiao-cuo-zi-fu-chuan-by-leetcode-solution/
 * 
 * 必须用动态规划，双指针不行
 * 
 * 步骤：
 * 1.判断s1.length + s2.length 是否等于 s3.length，如果不等，一定是false
 * 2.定义fun(i, j)为s1的前i个元素 和 s2的前j个元素 是否能交织成 s3的前i+j个元素（boolean值）
 * 3.如果字符s1[i] === s3[i+j]，那么能否交织，取决于fun(i-1, j)
 * 4.如果字符s2[j] === s3[i+j]，那么能否交织，取决于fun(i, j-1)
 * 5.得到方程：fun(i, j) = ((fun(i-1, j) && s1[i-1] === s3[i+j-1]]) || (fun(i, j-1) && s2[j-1] === s3[i+j-1]))
 *    （下标i-1表示第i个元素，下标（i+j-1）表示第i+j个元素）
 * 6.fun(i, j)实际是一个dp二维数组，里面存的是boolean值
 * 
 * 【AC】
 * 
*/

const { log } = console;

const isInterleave = (s1, s2, s3) => {
  const length1 = s1.length, length2 = s2.length, length3 = s3.length;
  if (length1 + length2 !== length3) return false;
  const dp = new Array(length1 + 1).fill(false).map(item => new Array(length2 + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i <= length1; i++) {
    for (let j = 0; j <= length2; j++) {
      const position = i + j - 1;
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i-1][j] && s1[i-1] === s3[position]);
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j-1] && s2[j-1] === s3[position]);
      }
    }
  }
  return dp[length1][length2];
};

(() => {
  log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
  log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
  
})();
