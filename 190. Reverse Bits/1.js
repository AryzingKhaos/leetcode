/**
 * 2024-01-29
 * 简单题，随便写写
 * 
 * 有点问题
 */

const { log } = console;

const reverseBits = (n) => {
  const reverse = n.toString(2).split('').reverse().join('');
  return reverse;
};

(() => {
  // log(reverseBits(00000010100101000001111010011100));
  log(01111.toString())
})()




