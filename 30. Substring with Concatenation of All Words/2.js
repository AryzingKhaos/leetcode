/**
 * 经过了1.js后，我意识到，其实只要从words[0]开始，查找所有符合的下标i
 * 然后从下标i开始左右延伸，在同一个时间内，只要对于words中有符合的，就将词同时从words和s中删去
 * 直到words中的最后一个单词final。此时s对应words[final]就是当前这一次要查找的下标。
 * 
 * 第二次，从匹配的第二个对应words[0]的位置开始向左和向右查找。
 * 
 * 到最后还是有些问题，但是已经想了太久了还是不想了
 * 到最后也没AC
 * 
 * 这个思路不是滑动窗口
 * 
 */


const { log } = console;
// const log = () => {}

const getIndexFroms = (s, words0) => {
  const finalArray = [];
  let str = s;
  let condition = 0;
  while(true) {
    const index = str.indexOf(words0);
    if (index === -1) {
      break;
    }
    // log('index:', str, index, condition);
    finalArray.push(index+condition);
    str = str.substr(index+1, str.length);
    condition += index+1;
  }
  return finalArray;
}

const isCompleteMatch = (str, _words, index, isLeftFirst) => {
  const words = _words.concat([]).slice(1); // 浅拷贝
  const wordLength = words[0].length;
  let left, right;
  if (index !== 0) {
    left = index - wordLength;
  }
  if (index !== str.length - wordLength) {
    right = index + wordLength;
  }
  let wordPosition = index;
  while(left >=0 || right < str.length) {
    const leftWord = str.substr(left, wordLength);
    const rightWord = str.substr(right, wordLength);
    log('once:', leftWord, rightWord, left, right);

    let positionLeft = words.indexOf(leftWord);
    if (isLeftFirst && positionLeft > -1) {
      wordPosition = left;
      words.splice(positionLeft, 1);
      log('once-words-left:', words);
      if (left - wordLength >= 0) {
        left -= wordLength;
      }
      continue;
    } else {
      isLeftFirst = false;
    }

    let positionRight = words.indexOf(rightWord);
    if (positionRight > -1) {
      words.splice(positionRight, 1);
      log('once-words-right:', words);
      if (right + wordLength < str.length - 1) {
        right += wordLength;
      }
      continue;
    } else {
      isLeftFirst = true;
    }

    log('once2:', words, wordPosition);
    if (positionLeft === -1 && positionRight === -1 && words.length !== 0) {
      return false;
    }
    if (words.length === 0) {
      return wordPosition;
    }
  }
}

const findSubstring = (s, words) => {
  const subIndexArray = getIndexFroms(s, words[0]); // 获取所有words[0]在s中的下标
  log('subIndexArray:', subIndexArray)
  const finalArrayLeft = [];
  const finalArrayRight = [];
  subIndexArray.forEach((item) => {
    const wordPositionLeft = isCompleteMatch(s, words, item, true);
    // const wordPositionRight = isCompleteMatch(s, words, item, false);
    if (!!wordPositionLeft || wordPositionLeft === 0) {
      finalArrayLeft.push(wordPositionLeft);
    }
    // if (!!wordPositionRight || wordPositionRight === 0) {
    //   finalArrayRight.push(wordPositionRight);
    // }
  })
  return [...new Set(finalArrayLeft.concat(finalArrayRight))];
};


(() => {
  // log(getIndexFroms('barfoothefoobarmanfoo', 'foo'));
  // log(isCompleteMatch('barfoothefoobarmanfoo', ['foo', 'bar'], 9));
  // log(isCompleteMatch('barfoothefoobarmanfoo', ['bar', 'foo', "the"], 0));
  // log(isCompleteMatch('barfoothefoobarmanfoo', ['bar', 'foo', "the"], 0));
  // log(findSubstring("barfoothefoobarman", ["foo","bar"]))
  // log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]))
  // log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]))
  // log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]))
  log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]))
})();



