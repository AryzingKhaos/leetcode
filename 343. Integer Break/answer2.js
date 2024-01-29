/**
 * 这道题就是各种数学方法，各显神通
*/

const integerBreak = (n) => {
  if (n < 4) return n - 1;
  let maxMul = 1;
  while (n > 4){
    maxMul *= 3;
    n -= 3;
  }
  maxMul *= n;
  return maxMul;
}

(() => {
  console.log(integerBreak(10));
})();