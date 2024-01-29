/**
 * 很容易想到，对于每一个数n，都可以是n-k和k组成的，k同时也可以是k-x和x组成的
 * 这样的形成了一条拆分的链条
 * 对于任意一个数，如果拆分里面必须带1，那么一定不值得拆。比如3 = 2 + 1，这不值得拆。而4 = 2 + 2，拆和不拆一样。
 * 也就是必须大于4才需要拆，否则不拆。
 * 
 * 从数学的角度，当前一定是减掉3或者减掉4（减4和减2一样）
 * 递归解决
 * integerBreakCanNotBeBreak是指，当前这个数也可以不分解，因为之前分解过一次了
 * 【AC】 53.69% 14.88%
 * 
*/

const { log } = console;

const integerBreakCanNotBeBreak = (n) => {
  if (n < 2) return 0;
  if (n === 2) return 2;
  if (n === 3) return 3;
  if (n === 4) return 4;
  if (n === 5) return 6;
  return Math.max(integerBreakCanNotBeBreak(n-4) * 4, integerBreakCanNotBeBreak(n-3) * 3);
}

const integerBreak = (n) => {
  if (n < 2) return 0;
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;
  if (n === 5) return 6;
  return Math.max(integerBreakCanNotBeBreak(n-4) * 4, integerBreakCanNotBeBreak(n-3) * 3);
};

(() => {
  // log(integerBreak(10));
  // log(integerBreak(11));
  // log(integerBreak(12));
  // log(integerBreak(13));
  log(integerBreak(58));
})();
