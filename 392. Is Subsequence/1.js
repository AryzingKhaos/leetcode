/*
 * @Date: 2022-03-26 16:03:55
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:30:21
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/392. Is Subsequence/1.js
 */


/**
 * easy题，模拟面试
 * 
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * 进阶：
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
 * 
 * 
 * 想到的是一个递归的方法
 * 
 * 【AC】
*/

const { log } = console;

const findCharAtStrIndex = (char, str) => {
  return str.indexOf(char);
}

const isSubsequence = (s, t) => {
  let text = t;
  return s.split('').reduce((flag, char) => {
    const index = findCharAtStrIndex(char, text);
    if (index === -1) return false && flag;
    else {
      text = text.slice(index+1);
      return true && flag;
    }
  }, true);
};

(() => {
  // log(isSubsequence('abc', "ahbgdc"));
  // log(isSubsequence('axc', "ahbgdc"));
  // log(isSubsequence('aab', "aaaaa"));
  log(isSubsequence('aab', "aaaab"));
})();


