/**
 * 这题的关键是把一般的字符串输入转换成逆波兰式表达式
 * 转换成功之后直接套150那题就行
 * 
 * 转换的过程难点是括号，遇到括号用递归就行
 * 
 * 看了一眼答案，答案取巧了，没转成逆波兰式。不太喜欢答案
 * 
 * 艹，跑了一下，发现数字可能是多位的，分隔符没法用啊
 * 搞了3个小时，不行，词法分析太难写了。果断放弃吧
 */

const { log } = console;

const isNumber = (val) => val == +val;

const getStrArray = (s) => {
  const strArray = s.split('').filter(item => item !== ' ' || item !== '');
  const finalArray = [];
  // log('start strArray:', strArray);
  let tempStr = '';
  for (let i = 0; i < strArray.length; i++) {
    const item = strArray[i];
    const preItem = strArray[i-1];
    const prePreItem = strArray[i-2];
    const nextItem = strArray[i+1];
    if (i === 0) {
      if (isNumber(item)) {
        if (item === '-') {
          tempStr = item;
          continue;
        }
        if (isNumber(nextItem)) {
          tempStr = item;
        } else {
          finalArray.push(item);
        }
      } else {
        finalArray.push(item);
      }
      continue;
    }
    if (i === strArray.length - 1) {
      if (!isNumber(preItem)) {
        if (preItem === '-' && !isNumber(prePreItem)) {
          tempStr += item;
        }
        finalArray.push(item);
      } else {
        tempStr += item;
        finalArray.push(tempStr);
      }
      continue;
    }
    if (item === '-') {
      if (isNumber(preItem) && isNumber(nextItem)) {
        finalArray.push(item);
      } else if (isNumber(preItem) && !isNumber(nextItem)) {
        // 比如'1-(2+3)'
        finalArray.push(item);
      } else if (!isNumber(preItem) && isNumber(nextItem)) {
        tempStr = item;
      } else if (!isNumber(preItem) && !isNumber(nextItem)) {
        // 比如'(3+2)-(2+3)'
        finalArray.push(item);
      }
      // log('item-:',finalArray, tempStr);
      continue;
    } else if (isNumber(item)) {
      if (isNumber(preItem) && isNumber(nextItem)) {
        tempStr += item;
      } else if (isNumber(preItem) && !isNumber(nextItem)) {
        tempStr += item;
        finalArray.push(tempStr);
        tempStr = '';
      } else if (!isNumber(preItem) && isNumber(nextItem)) {
        tempStr += item;
      } else if (!isNumber(preItem) && !isNumber(nextItem)) {
        if (preItem === '-' && !isNumber(prePreItem)) {
          tempStr += item;
        }
        finalArray.push(tempStr);
        tempStr = '';
      }
      // log('item number:', finalArray, tempStr);
      continue;
    } else {
      finalArray.push(item);
    }
  }
  return finalArray.map(item => item.trim());
}

const getFlatArray = (strArray) => {
  const stack = [];
  const finalArray = [];
  for (let i = 0; i < strArray.length;) {
    const item = strArray[i];
    if (item === '(') {
      stack.push('(');
      let subStringArray = [];
      let whileIndex = i+1;
      let whileItem;
      while (stack.length > 0) {
        whileItem = strArray[whileIndex];
        if (whileItem === '(') {
          stack.push(whileItem);
        } else if (whileItem === ')') {
          stack.pop();
        }
        subStringArray.push(whileItem);
        whileIndex++;
      }
      subStringArray = subStringArray.slice(0, subStringArray.length - 1);
      // log('subStringArray:', subStringArray);
      const subStringEvalArr = getFlatArray(subStringArray);
      finalArray.push(subStringEvalArr);
      i = whileIndex;
    } else {
      finalArray.push(item);
      i += 1;
    }
  }
  return finalArray;
}

const transFlatArrayToEval = (_strArray) => {
  let strArray = _strArray;
  // if (_strArray.length === 2) {
  //   strArray = [0].concat(_strArray);
  // }
  const finalArray = [];
  for (let i = 0; i < strArray.length;) {
    const item = strArray[i];
    if (Array.isArray(item)) {
      if (item.length === 2) {
        finalArray.push(transFlatArrayToEval(item));
      } else {
        finalArray.push(transFlatArrayToEval(item));
      }
      i += 1;
    } else {
      if (!isNumber(item) && !Array.isArray(item)) {
        finalArray.push(Array.isArray(strArray[i+1]) ? transFlatArrayToEval(strArray[i+1]) : strArray[i+1]);
        finalArray.push(strArray[i]);
        i += 2;
        continue;
      } else {
        finalArray.push(item);
        i += 1;
      }
    }
  }
  return finalArray;
}


const evalRPN = (tokens) => {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const item = tokens[i];
    if (isNumber(item) || Array.isArray(item)) {
      stack.push(item);
    } else {
      let second = stack.pop();
      let first = stack.pop();
      second = Array.isArray(second) ? evalRPN(second) : second;
      first = Array.isArray(first) ? evalRPN(first) : first;
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

const calculate = (s) => {
  const strArray = getStrArray(s);
  log('strArray:', strArray);
  const flatArray = getFlatArray(strArray);
  log('flatArray:', flatArray);
  const transArray = transFlatArrayToEval(flatArray);
  log('transArray:', transArray);
  const final = evalRPN(transArray);
  return final;
};

(() => {
  // log(calculate("1+2"));
  // log(calculate("1 + 1"));
  // log(calculate('2147483647'));
  // log(calculate("2-1 + 2"));
  log(calculate("(1+(4+5+2)-3)+(6+8)"));
  // log(getStrArray("(113143+(45555+5777+2)-3)+(68+8)"));
  // log(calculate("(113143+(45555+5777+2)-3)+(68+8)"));
  // log(getStrArray('22 + (33 + 42224) + 5566666'));
  // log(calculate("1-(     -2)"));
})();