/**
 * hash表的题还是比较容易想到思路
 * 一个想法是，把单词按照字典序排序，然后用hash表记录位置，push到对应数组里
 * 
 * 一次AC
 */

const { log } = console;

const isDef = val => val !== null && val !== undefined;

const groupAnagrams = (strs) => {
  const hash = {};
  const finalArray = [];
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const sortWord = word.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
    if (isDef(hash[sortWord])) {
      finalArray[hash[sortWord]].push(word)
    } else {
      hash[sortWord] = finalArray.length;
      finalArray.push([word]);
    }
  }
  return finalArray;
};

(() => {
  // log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
  // log(groupAnagrams(["eat","tea","tan","ate","nat","bat",'','']))
  log(groupAnagrams(['']))
  log(groupAnagrams(['a']))
})()
