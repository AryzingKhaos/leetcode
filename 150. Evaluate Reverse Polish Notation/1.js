/**
 * 用栈即可，感觉是顺序完成
 * 一次AC
 * 思路跟答案一模一样
 */

const { log } = console;

const isNumber = (val) => val == +val;

const evalRPN = (tokens) => {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const item = tokens[i];
    if (isNumber(item)) {
      stack.push(item);
    } else {
      const second = stack.pop();
      const first = stack.pop();
      if (item === '+') {
        stack.push((+first) + (+second));
      } else if (item === '-') {
        stack.push(first - second);
      } else if (item === '*') {
        stack.push(first * second);
      } else if (item === '/') {
        stack.push(Math.trunc(first / second));
      }
    }
  }
  return stack[0];
};

(() => {
  // const arr = [1,2,3,4];
  // log(arr.pop(), arr.pop());
  log(evalRPN(["2","1","+","3","*"]))
  log(evalRPN(["4","13","5","/","+"]))
  log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
})();
