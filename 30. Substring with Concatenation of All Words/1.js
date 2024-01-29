/**
 * 当年C++没解出来的一道题，困难题
 * 当年是超出空间限制
 * 
 * JS似乎查找字符串还比较好写，indexOf即可
 * 但是要遍历所有的排列组合的字符串也不容易
 * 
 * 枚举所有字符串的子串的方法：
 * 1. 递归，对于['a', 'b']，只要返回['ab', 'ba']即可
 * 2. 需要对每个地方的元素都做一遍
 * 
 * 可以发现，这个方法枚举出来的值增加得太快。3个是6,4个是24，5个就有120个了
 * 这是O(n!)的复杂度，太恐怖了
 * 这个方法理论上是可行的，但是时间复杂度不允许
 * 【所以肯定不能用这个方法来解】
 * 
 */
const { log } = console;

const subArrayWithOutIndex = (array, index) => {
  const length = array.length;
  if (index === 0) {
    return array.slice(1, length);
  }
  if (index === length - 1) {
    return array.slice(0, length - 1);
  }
  return array.slice(0, index).concat(array.slice(index+1, length));
}

const getSubString = (words) => {
  if (words.length === 0) {
    return [];
  }
  if (words.length === 1) {
    return words;
  }
  if (words.length === 2) {
    return [words[0]+words[1], words[1]+words[0]];
  }
  const finalArray = [];
  words.forEach((item, index) => {
    const subArray = subArrayWithOutIndex(words, index);
    getSubString(subArray).forEach(item2 => {
      finalArray.push(item + item2);
    })
  });
  return finalArray;
}


const findSubstring = (s, words) => {

};

(() => {
  log(getSubString(['ab', 'cd', 'ef', 'gh']));
})()