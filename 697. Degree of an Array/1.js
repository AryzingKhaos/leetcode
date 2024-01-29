/*
 * @Date: 2022-03-26 15:48:49
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-26 19:55:24
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/697. Degree of an Array/1.js
 */

/**
 * easy题，模拟面试
 * 
 * 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
*/

const { log } = console;

const isDef = (value) => value !== undefined && value !== null;

const findShortestSubArray = (nums) => {
  const hash = nums.reduce((hash, item) => {
    if (hash[item]) hash[item] += 1;
    else hash[item] = 1;
    return hash;
  }, {});
  const maxNumLength = Object.keys(hash).reduce((max, item) => {
    return Math.max(hash[item], max);
  }, 0);

  if (maxNumLength === 1) return 1;

  const maxArr = Object.keys(hash).filter(item => {
    return hash[item] === maxNumLength;
  }).map(item => Number(item));

  return maxArr.reduce((min, item) => {
    let startIndex, endIndex;
    nums.forEach((_item, index) => {
      if (_item === item) {
        if (!isDef(startIndex)) startIndex = index;
        else endIndex = index;
      }
    })
    // log(startIndex, endIndex);
    // log('=============');
    return Math.min(min, endIndex - startIndex + 1);
  }, Infinity);
};

(() => {
  log(findShortestSubArray([1,2,2,3,1]));
  log(findShortestSubArray([1,2,2,3,1,4,2]));
  
})();

