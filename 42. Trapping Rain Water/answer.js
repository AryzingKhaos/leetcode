/*
 * @Date: 2022-03-21 10:45:16
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:27:14
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/42. Trapping Rain Water/answer.js
 */

/**
 * 暴力法：
 * 对于每个位置arr[i]，都可以求这个位置向左和向右的最大值，取min值，然后减掉arr[i]的值，就是这个位置可以乘的雨水量
 * 
 * 动态规划，步骤如下:
 * 1.从左起，记录一个leftMax数组，记录到位置i为止，最高的高度
 * 2.从右起，记录rightMax数组，记录从右到位置i为止，最高的高度
 * 3.记录一个数组arr，每个位置i记录的是每个位置可以接到的雨水量。
 * 4.对arr求和即可
 * 
 * 这题属于不知道方法可能完全无解，知道方法就很容易解的题。
 * 思路是答案给的，解法是自己写的
 * 【AC】
*/

const { log } = console;

const trap = (heightArr) => {
  const leftMax = [], rightMax = [];
  heightArr.forEach((item, index) => {
    if (index === 0) {
      leftMax.push(item);
      return;
    }
    leftMax.push(Math.max(item, leftMax[index - 1]))
  });
  heightArr.reverse().forEach((item, index) => {
    if (index === 0) {
      rightMax.push(item);
      return;
    }
    rightMax.push(Math.max(item, rightMax[index - 1]))
  });
  rightMax.reverse();
  const arr = heightArr.map((item , index) => {
    return Math.min(leftMax[index], rightMax[index]) - item;
  });
  return arr.reduce((sum, item) => sum += item, 0);
};

(() => {
  log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
  log(trap([4,2,0,3,2,5]));
})();

