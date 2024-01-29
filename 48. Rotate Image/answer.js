/**
 * 题目要求不能使用额外空间，不使用额外空间我想不到好办法就直接看了答案
 * 答案的思路非常优雅：先水平反转，然后对角线翻转。
 * 思路很好理解，代码也非常优雅，解构赋值直接连temp值都省了
 * 
 */

var rotate = function(matrix) {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n; j++) {
          [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
      }
  }
  // 主对角线翻转
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
  }
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/rotate-image/solutions/526980/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/
