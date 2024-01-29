/**
 * 非官方题解，但是确实有用
 */


var myPow = function(x, n) {
  if(n ==0 || n ==1) {
      return n ==0 ? 1: x
  }else if(n < 0){
      return myPow(1/x, Math.abs(n))
  }else{
      return n % 2 == 0 ? myPow(x * x , n/2) :  myPow(x * x ,Math.floor(n/2))* x
  }
};

// 作者：Romantic Ardinghellix4s
// 链接：https://leetcode.cn/problems/powx-n/solutions/1538132/jsjie-ti-si-lu-qing-xi-ming-liao-by-inte-iv1p/