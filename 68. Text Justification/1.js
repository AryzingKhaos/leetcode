/**
 * 困难题
 * 简直就是写一个word的核心功能之一啊。。
 * 还是要多写测试用例才行。能AC，但是细节很多很容易错。
 */
const { log } = console;

const addWord = (currentStr, word) => {
  if (typeof currentStr !== 'string' || typeof word !== 'string') {
    return '';
  }
  if (currentStr === '') {
    return word;
  } else {
    return `${currentStr} ${word}`;
  }
}

const constructSpace = (num) => {
  return new Array(num).fill(' ').join('');
}

const constructRegSpace = (num) => {
  return new Array(num).fill('\\s').join('');
}

const isOnlyOneWord = (str) => {
  return str.split(' ').filter(item => item !== '').length === 1;
}

const formatSpace = (currentStr, maxWidth) => {
  if (currentStr.length === maxWidth) {
    return currentStr;
  }
  if (isOnlyOneWord(currentStr)) {
    return currentStr.padEnd(maxWidth, ' ');
  }
  const currentStrArray = currentStr.split(' ');
  const spaceTotalNum = currentStrArray.length - 1;
  let finalStr = currentStr;
  let spaceNum = 1;
  let index = 0;
  while(finalStr.length < maxWidth) {
    const reg = new RegExp(`(\\S)${constructRegSpace(spaceNum)}(\\S)`);
    finalStr = finalStr.replace(reg, `$1${constructSpace(spaceNum+1)}$2`);
    index++;
    if (index === spaceTotalNum) {
      spaceNum++;
      index = 0;
    }
    // log(finalStr);
  }
  return finalStr;
}

const fullJustify = (words, maxWidth) => {
  let currentStr = '';
  const finalArray = [];
  for(let index = 0; index < words.length; index++) {
    const item = words[index];
    const nextItem = !!words[index+1] ? words[index+1] : '';
    // log(item);
    if (index === words.length - 1) { // 最后一个单词
      if (addWord(currentStr, item).length <= maxWidth) {
        // log('finalAndex.finalArray.push1:', currentStr.padEnd(maxWidth));
        currentStr = addWord(currentStr, item);
        finalArray.push(currentStr.padEnd(maxWidth));
      } else {
        // log('finalAndex.finalArray.push2:', formatSpace(currentStr, maxWidth), item.padEnd(maxWidth));
        finalArray.push(formatSpace(currentStr, maxWidth));
        finalArray.push(item.padEnd(maxWidth));
      }
      continue;
    }
    if (addWord(currentStr, item).length <= maxWidth && addWord(addWord(currentStr, item), nextItem).length > maxWidth) {
      // log('finalArray.push:', formatSpace(addWord(currentStr, item), maxWidth));
      finalArray.push(formatSpace(addWord(currentStr, item), maxWidth));
      currentStr = '';
    } else {
      // log('addWord:', addWord(currentStr, item));
      currentStr = addWord(currentStr, item);
    }
  }
  return finalArray;
};

(() => {
  // 特殊情况太多了
  log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
  log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
  log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
  log(fullJustify(["Listen","to","many,","speak","to","a","few."], 6));
  log(fullJustify(["a"], 2));
  // log(formatSpace('listen', 6))
  // log(formatSpace('a', 16), 111);
})()

const testFn = () => {
  {
    const val = '\\s\\s';
    const reg = new RegExp(`\\S${val}\\S`);
    console.log(reg.test('a  b'));
    // true
  }

  {
    let finalStr = 'a b';
    const reg = new RegExp(`(\\S)\\s(\\S)`);
    // finalStr = finalStr.replace(reg, '  ');
    console.log(finalStr.replace(reg, '$1  $2'));
  }
}