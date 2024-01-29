/**
 * 2024-01-19
 * 动态规划，中等
 * 记录一个数组，每个i都记录以当前位置字母为中心的最长回文子串
 * 对于奇数回文子串，只要当前位置是中心即可
 * 对于偶数回文子串，只要在这个字母后面添加一个相同字母，以后面这个字母为中心即是奇数的回文子串
 * 
 * 思路有点问题，直接到答案那边去看
 */

const { log } = console;

// 判断的速度可以优化
const isPalindromic = (str) => {
  return str === str.split('').reverse().join('');
}

const longestPalindrome = (s) => {
  const dpArr = [];
  const strArr = s.split('');
};

(() => {
})();