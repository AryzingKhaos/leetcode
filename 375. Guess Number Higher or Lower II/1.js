/**
 * 想用数学方法解
 * 从案例中，可以看出，应该是猜2/3处是最解约成本的
 * 而我们只需要计算最大的成本即可
 * 
 * 计算了一下，发现这不太可能。
 * 【WA】
*/

const { log } = console;

const guess = (sum, lower, upper) => {
  if (lower > upper || lower === upper || upper - lower === 1) return sum;
  const guessNum = Math.round((upper - lower + 1) * (2 / 3));
  sum += guessNum;
  return sum;
}

const getMoneyAmount = (n) => {
  let lower = 1;
  let upper = n;
  let sum = 0;
  let guessNum = 0;
  while(!(lower > upper || lower === upper)) {
    if (upper - lower === 1) {
      sum += lower;
      break;
    } else if (upper - lower === 2) {
      sum += lower + 1;
      break;
    }
    guessNum = Math.round((upper - guessNum) * (2 / 3)) + guessNum;
    lower = guessNum + 1
    sum += guessNum;
  }
  return sum;
}

(() => {
  log(getMoneyAmount(10));
  log(getMoneyAmount(15));
})();