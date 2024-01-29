/**
 * 只能看答案
 * n! 尾零的数量即为 n!n!n! 中因子 101010 的个数，而 10=2×510=2\times 510=2×5，因此转换成求 n!n!n! 中质因子 222 的个数和质因子 555 的个数的较小值。
由于质因子 555 的个数不会大于质因子 222 的个数（具体证明见方法二），我们可以仅考虑质因子 555 的个数。
而 n!n!n! 中质因子 555 的个数等于 [1,n][1,n][1,n] 的每个数的质因子 555 的个数之和，我们可以通过遍历 [1,n][1,n][1,n] 的所有 555 的倍数求出。

 */


var trailingZeroes = function(n) {
  let ans = 0;
  for (let i = 5; i <= n; i += 5) {
      for (let x = i; x % 5 == 0; x /= 5) {
          ++ans;
      }
  }
  return ans;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/factorial-trailing-zeroes/solutions/1360892/jie-cheng-hou-de-ling-by-leetcode-soluti-1egk/