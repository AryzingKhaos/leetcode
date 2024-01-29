/*
 * @Date: 2022-04-01 12:35:45
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-01 12:47:12
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/198. House Robber/1.js
 */


/**
 * 又是一道一眼动态规划的题
 * 但是我想先不用动归解决：
 * 1.因为是非负的，那么只要考虑偶数位的和，或者奇数位的和就可以了啊。。
 * 试一下
 * 
 * 【WA】
 * 这个解法的问题是，比如[2,1,1,2]这样的数组，这个解法只能得到3，实际应该是4。
*/

const { log } = console;

const rob = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const even = nums.filter((item, index) => index % 2 === 0).reduce((sum, item) => sum += item, 0);
  const odd = nums.filter((item, index) => index % 2 !== 0).reduce((sum, item) => sum += item, 0);
  return Math.max(even, odd);
};

(() => {
  log(rob([1,2,3,1]));
  log(rob([2,7,9,3,1]));
  log(rob([2,1,1,2]))
})();
