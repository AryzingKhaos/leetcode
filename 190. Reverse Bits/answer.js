var reverseBits = function(n) {
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
      rev |= (n & 1) << (31 - i);
      n >>>= 1;
  }
  return rev >>> 0;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/reverse-bits/solutions/685436/dian-dao-er-jin-zhi-wei-by-leetcode-solu-yhxz/



