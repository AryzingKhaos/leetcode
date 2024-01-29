/*
 * @Date: 2022-03-26 15:48:49
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-26 19:55:24
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/697. Degree of an Array/1.js
 */

/**
 * 题目
 * https://leetcode.cn/contest/hhrc2022/problems/0Wx4Pc/
 * 
 * 给你一份销售数量表 sales，上面记录着某一位销售员每天成功推销的产品数目。

我们认为当销售员同一天推销的产品数目大于 8 个的时候，那么这一天就是「成功销售的一天」。

所谓「销售出色区间」，意味在这段时间内，「成功销售的天数」是严格 大于「未成功销售的天数」。

请你返回「销售出色区间」的最大长度。
*/

/**
 * 思路是用两个下标，分别标记开始和结束点位。
 * 但是这样的流程过于复杂，所以这个方案应该是不可行的。
*/

const { log } = console;

const isValid = (arr) => {
  let succussNum = 0, failNum = 0;
  arr.forEach(item => {
    if (item > 8) succussNum++;
    else failNum++;
  })
  return succussNum > failNum;
}

const checkLongest = (sales) => {
  let longest = 0;
  let start = 0, end = 1;
  while(true) {
    let subArr = sales.slice(start, end);
    // log(subArr);
    if (isValid(subArr)) {
      if (longest < subArr.length) longest = subArr.length;
      if (end < sales.length) end+=2;
      else break;
    } else {
      start++;
      if (start === sales.length) break;
      if (end <= start && end < sales.length - 1) end++;
    }
  }
  // log('============');
  return longest;
}

const longestESR = (sales) => {
  const a = checkLongest(sales);
  const b = checkLongest(sales.reverse());
  return a > b ? a : b;
};

(() => {
  // log(longestESR([10,2,1,4,3,9,6,9,9]));
  log(longestESR([6,9,9, 6]));
  // log(longestESR([9,6,9,6,9,6,9,6,9]));
  
})();

