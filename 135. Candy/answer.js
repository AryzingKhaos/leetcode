/**
 * 思路及解法

我们可以将「相邻的孩子中，评分高的孩子必须获得更多的糖果」这句话拆分为两个规则，分别处理。
左规则：当 ratings[i−1]<ratings[i]\textit{ratings}[i - 1] < \textit{ratings}[i]ratings[i−1]<ratings[i] 时，iii 号学生的糖果数量将比 i−1i - 1i−1 号孩子的糖果数量多。
右规则：当 ratings[i]>ratings[i+1]\textit{ratings}[i] > \textit{ratings}[i + 1]ratings[i]>ratings[i+1] 时，iii 号学生的糖果数量将比 i+1i + 1i+1 号孩子的糖果数量多。
我们遍历该数组两次，处理出每一个学生分别满足左规则或右规则时，最少需要被分得的糖果数量。每个人最终分得的糖果数量即为这两个数量的最大值。
具体地，以左规则为例：我们从左到右遍历该数组，假设当前遍历到位置 iii，如果有 ratings[i−1]<ratings[i]\textit{ratings}[i - 1] < \textit{ratings}[i]ratings[i−1]<ratings[i] 那么 iii 号学生的糖果数量将比 i−1i - 1i−1 号孩子的糖果数量多，我们令 left[i]=left[i−1]+1\textit{left}[i] = \textit{left}[i - 1] + 1left[i]=left[i−1]+1 即可，否则我们令 left[i]=1\textit{left}[i] = 1left[i]=1。
在实际代码中，我们先计算出左规则 left\textit{left}left 数组，在计算右规则的时候只需要用单个变量记录当前位置的右规则，同时计算答案即可。

作者：力扣官方题解
链接：https://leetcode.cn/problems/candy/solutions/533150/fen-fa-tang-guo-by-leetcode-solution-f01p/
 */


var candy = function(ratings) {
  const n = ratings.length;
  const left = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
      if (i > 0 && ratings[i] > ratings[i - 1]) {
          left[i] = left[i - 1] + 1;
      } else {
          left[i] = 1;
      }
  }

  let right = 0, ret = 0;
  for (let i = n - 1; i > -1; i--) {
      if (i < n - 1 && ratings[i] > ratings[i + 1]) {
          right++;
      } else {
          right = 1;
      }
      ret += Math.max(left[i], right);
  }
  return ret;
};
