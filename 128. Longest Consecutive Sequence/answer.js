/**
 * 太精妙了！
 * 竟然先查找一个没有前驱数的数字，就不存在重复合并的问题了，因为不需要向两边扩散
 * 因为回避了前驱数，所以时间复杂度一定是O(n)
 * 
 * 答案在讲的时候也说到了如果每个数作为起点都要考虑的话，确实增加了很多不必要的检索
 */

var longestConsecutive = function (nums) {
  let num_set = new Set();
  for (const num of nums) {
    num_set.add(num);
  }

  let longestStreak = 0;

  for (const num of num_set) {
    if (!num_set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (num_set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/longest-consecutive-sequence/solutions/276931/zui-chang-lian-xu-xu-lie-by-leetcode-solution/