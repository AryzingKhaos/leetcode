/**
 * 解法没问题，通过301/306个了，但是超时了
 * 估计必须用logN的方法
 * 
 * 注意：小数后面确实会有误差，但是leetcode判题把误差去掉了，所以不用考虑
 */

const { log } = console;

const myPow = (x, n) => {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  let mul = 1;
  for (let i = 0; i < n; i++) {
    mul *= x;
  }
  return mul;
};

(() => {
  log(myPow(2, 10));
  log(myPow(2.1, 3));
  log(myPow(2, -2));
})()