/*
 * @Date: 2022-03-26 16:16:41
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:30:05
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/205. Isomorphic Strings/1.js
 */

/**
 * easy题，模拟面试
 * 
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 * 
 * 【AC】
*/


const { log } = console;

const oneDef = (a, b) => {
  return (a && !b) || (!a && b);
}

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  const hash1 = {}, hash2 = {};
  const sArr = s.split('');
  const tArr = t.split('');
  return sArr.reduce((flag, item, index) => {
    if (!hash1[item] && !hash2[tArr[index]]) {
      hash1[item] = tArr[index];
      hash2[tArr[index]] = item;
      return true && flag;
    } else if (oneDef(hash1[item], hash2[tArr[index]])) {
      return false && flag; // 等于是全false了
    } else {
      return flag && hash1[item] === tArr[index] && hash2[tArr[index]] === item;
    }
  }, true);
};

(() => {
  // log(isIsomorphic('add', 'egg'));
  // log(isIsomorphic('foo', 'bar'));
  // log(isIsomorphic('badc', 'baba'));
  log(isIsomorphic('leet', 'code'));
})();



