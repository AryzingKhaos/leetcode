/**
 * 简单题
 * 看起来不难，但似乎是On方的
 * 两次AC
 * 
 * 看了一下答案，最短都是O(mn)的，m是字符串长度，跟我这个时长一致。
 */

const { log } = console;

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let finalStr = strs[0];
  let cutStrArray = finalStr.split('');
  strs.forEach((item, index) => {
    if (index === 0) {
      return;
    }
    if (item.length < cutStrArray.length) {
      cutStrArray = cutStrArray.slice(0, item.length);
    }
    const itemArray = item.split('');
    itemArray.forEach((item2, index2) => {
      if (index2 >= cutStrArray) { // 超出上界
        return;
      }
      if (cutStrArray[index2] !== item2) {
        cutStrArray = cutStrArray.slice(0, index2);
      }
    })
  })
  return cutStrArray.join('');
};

(() => {
  // log(longestCommonPrefix(["flower","flow","flight"]))
  // log(longestCommonPrefix(["dog","racecar","car"]))
  // log(longestCommonPrefix(["ddog","ddracecar","ddcar"]))
  log(longestCommonPrefix(["ab","a"]))
  log(longestCommonPrefix(["abbbbbbbbbbbb","a"]))
})()