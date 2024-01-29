/**
 * 2024-01-14
 * 只能一位一位地用加法进位，比较麻烦但是肯定可以AC
 * 
 * 一次AC了
 */

const { log } = console;

const addBinary = (a, b) => {
  const aArray = a.split('').reverse();
  const bArray = b.split('').reverse();
  const length = a.length > b.length ? a.length : b.length;
  let carry = 0;
  const result = [];
  for(let i = 0; i < length; i ++) {
    const aChar = aArray[i] || 0;
    const bChar = bArray[i] || 0;
    const sum = parseInt(aChar, 2) + parseInt(bChar, 2) + carry;
    // log('sum:', aChar, bChar, sum);
    carry = 0;
    if (sum >= 2) {
      result.push(sum - 2);
      carry = 1;
    } else {
      result.push(sum);
    }
  }
  if (carry === 1) {
    result.push(1);
  }
  return result.reverse().join('');
};
 
(() => {
  // log(addBinary('11', '1'));
  log(addBinary('1010', '1011'));
})()
 