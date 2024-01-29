/*
 * @Date: 2022-03-30 17:26:28
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-31 20:33:08
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/139. Word Break/1.js
 */

/**
 * 想到一个递归的方法
 * 步骤：
 * 1.用hash记录字典，并记录最长字段的长度
 * 2.从0开始，用i遍历字符串，如果发现s.slice(0, i+1)是一个hash值，那么就递归继续查找
 * 3.可能会出现多次满足hash值的情况，注意i最大只能是最长字典值的长度的值
 * 4.任意一次匹配成功，都返回true。
 * 
 * 【TLE】了。。
*/

const { log } = console;

const findWorkBreak = (s, hash, wordLengthHash) => {
  // log(s);
  // log('================');
  if (s.length === 0) return true;
  let flag = false;
  const wordLengthArr = Object.keys(wordLengthHash);
  for (let i = 0; i < wordLengthArr.length; i++) {
    if (flag) return true;
    const slicePosition = Number(wordLengthArr[i]);
    if (hash[s.slice(0, slicePosition)]) flag = flag || findWorkBreak(s.slice(slicePosition), hash, wordLengthHash);
  }
  return flag;
};

const wordBreak = (s, wordDict) => {
  if (!wordDict || !wordDict.length || !s) return false;
  const hash = wordDict.reduce((obj, item) => {
    obj[item] = true;
    return obj;
  }, {});

  // 优化：记录字典中可能出现的字符长度
  const wordLengthHash = wordDict.reduce((obj, item) => {
    if (obj[item.length]) return obj;
    else {
      obj[item.length] = true;
      return obj;
    }
  }, {});
  return findWorkBreak(s, hash, wordLengthHash);
};

(() => {
  log(wordBreak('applepenapple', ["apple", "pen"]));
  log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
  log(wordBreak('leetcode', ["leet", "code"]));
  // log(wordBreak('aaaaaaa', ["aaaa", "aaa"]));
  // log(wordBreak('aaaaaaa', ["aaaa"]));
  
})();
