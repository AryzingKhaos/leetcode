/*
 * @Date: 2022-03-31 20:23:55
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-31 20:50:12
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/139. Word Break/2.js
 */

/**
 * 动态规划思想
 * 步骤：
 * 1.从0开始，对于字符串的每一位i，都可以计算s.slice(0, i)是否可以用字典中的单词满足，如果满足，就在dp数组的i下标记录true，否则false
 * 2.对于s.slice(0,i)这串字符串来说，他可以是s.slice(0, i-1)和一个字典中的单词来满足，也可能是s.slice(0, i-j)和一个字典中的单词来满足
 * 3.用一个wordLengthHash记录这个字典中可能的长度，为k，计算这些可能长度当中，s.slice(0, i-k)是否为true，以及s.slice(i-k, i)是否是wordDict中的单词
 * 4.在3中，只要有任一满足，返回true；否则返回false。
 * 
 * 【AC】
*/

const { log } = console;

const wordBreak = (s, wordDict) => {
  if (!wordDict || !wordDict.length || !s) return false;

  const hash = wordDict.reduce((obj, item) => {
    obj[item] = true;
    return obj;
  }, {});
  const wordLengthHash = wordDict.reduce((obj, item) => {
    if (!obj[item.length]) obj[item.length] = true;
    return obj;
  }, {});
  const wordLengthArr = Object.keys(wordLengthHash);
  const dp = new Array(s.length+1).fill(false);
  dp[0] = true;
  // s字符串的下标从1开始
  for (let i = 1; i <= s.length; i++) {
    const curStr = s.slice(0, i);
    // log(curStr);
    for (let j = 0; j < wordLengthArr.length; j++){
      if (i - wordLengthArr[j] < 0) continue;
      const preStr = curStr.slice(0, i - wordLengthArr[j]);
      const curWord = curStr.slice(i - wordLengthArr[j], i);
      if (dp[preStr.length] && hash[curWord]) dp[i] = true;
    }
  }
  // log(dp);
  // log('================');
  return dp[s.length];
};

(() => {
  // log(wordBreak('applepenapple', ["apple", "pen"]));
  // log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
  // log(wordBreak('leetcode', ["leet", "code"]));
  // log(wordBreak('aaaaaaa', ["aaaa", "aaa"]));
  log(wordBreak('aaaaaaa', ["aaaa"]));
  
})();

