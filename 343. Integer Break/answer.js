/**
 * 这不是官方答案
 * 但是比我的还狠
 * 直接根据3来
 * 
 * 
*/

const integerBreak = (n) => {
  if(n === 2)return 1;
  if(n === 3)return 2;
  const t = Math.floor(n/3);
  if(n%3 === 0) return Math.pow(3,t);
  if(n%3 === 1) return Math.pow(3,t-1) * 4;
  if(n%3 === 2) return Math.pow(3,t) * 2;
  return -1;
}

(() => {
  console.log(integerBreak(10));
})();

