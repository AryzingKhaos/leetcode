/**
 * https://leetcode.cn/problems/longest-palindromic-substring/solutions/255195/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/?envType=study-plan-v2&envId=top-interview-150
 * 2024-01-22
 * 事实是答案一都很难看懂
 * 但是答案二就很好理解，这里用的是答案二
 * 
 * 我们对每个中心的字母做扩展，先讨论奇数的回文情况：
 * 一个字母（假设为s[i]）它本身就是一个回文串
 * 只要s[i-1]和s[i+1]相同，那么新的字符串也是一个回文串，可以继续讨论s[i-2]到s[i+2]，以此类推
 * 对于偶数的情况，可以认为中心点是两个字母，且这两个字母需要相同，才能扩展。后面扩展的步骤跟奇数的一样。
 * 
 * 代码原文是java，我这里改成JavaScript
 */


const { log } = console;


// 用来打印多个变量。
const logObject = (obj) => {
  if (typeof obj !== 'object') {
    throw 'params is not an obj';
  }

  const logArray = Object.keys(obj).reduce((arr, key) => {
    const value = obj[key];
    arr.push(`${key}:`);
    if (typeof value === 'object') {
      arr.push(`${JSON.stringify(value)};`);
    } else {
      arr.push(`${value};`);
    }
    return arr;
  }, []);

  const { log } = console;
  // log(logArray);
  log(...logArray);
}

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
      --left;
      ++right;
  }
  return {left: left + 1, right: right - 1};
}

const longestPalindrome = (s) => {
  if (s == null || s.length < 1) {
    return "";
  }
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    const {left: left1, right: right1} = expandAroundCenter(s, i, i);
    const {left: left2, right: right2} = expandAroundCenter(s, i, i + 1);
    // const len = Math.max(len1, len2);
    if (right1 - left1 > end - start) {
      start = left1;
      end = right1;
    }
    if (right2 - left2 > end - start) {
      start = left2;
      end = right2;
    }

  }
  return s.substring(start, end + 1);
};




(() => {
  // log(expandAroundCenter('ababa', 2, 2));
  log(longestPalindrome("babab"))
  log(longestPalindrome("cbbd"))
})();