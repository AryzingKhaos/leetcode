/*
 * @Date: 2022-03-29 14:53:03
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-29 16:36:19
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/120. Triangle/1.js
 */

/**
 * 一眼动态规划，记录到每个点的最短路径即可
 * 
 * 进阶：你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？
 * 进阶也很简单，只要记录一行的三角形每个点的记录即可，每次都用上一行来确定当前行。
 * 
 * 看了一下答案，基本就是这个思路，不写了，因为这样的题目太多了。注意边界条件就能ac
 * 【不写了】
 * 
 * 2024-01-19
 * 为了AC率还是写一下吧
 * 一次AC
*/

const { log } = console;

const findMin = (arr) => {
  let min = Infinity
  arr.forEach(item => {
    if (item < min) {
      min = item;
    }
  })
  return min;
}

const minimumTotal = (triangle) => {
  const triangleSum = [];
  for (let i = 0; i < triangle.length; i++) {
    if (i === 0) {
      triangleSum.push(triangle[0]);
      continue;
    }
    const arr = [];
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        arr.push(triangleSum[i-1][j] + triangle[i][j]);
        continue;
      }
      if (j === triangle[i].length - 1) {
        arr.push(triangleSum[i-1][j-1] + triangle[i][j]);
        continue;
      }
      arr.push(Math.min(triangleSum[i-1][j] + triangle[i][j], triangleSum[i-1][j-1] + triangle[i][j]))
    }
    triangleSum.push(arr);
  }
  // log(triangleSum);
  return findMin(triangleSum[triangleSum.length - 1]);
};

(() => {
  // log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));
  log(minimumTotal([[-10]]));
})()

