/**
 * 根据answer.js，对1.js进行的优化，主要是使用set来判断重复
*/

const { log } = console;

const lengthOfLongestSubstring = (str) => {
  if (!str || !str.length) return 0;
  let left = 0, right = 0;
  
  // 初始化
  const set = new Set();
  set.add(str.charAt(0));
  let maxLength = 1;

  // 开始右移
  while(right <= str.length) {
    const nextChar = str.charAt(right + 1);
    if (!nextChar) break;
    if (!set.has(nextChar)) {
      right++;
      set.add(nextChar);
      maxLength = Math.max(maxLength, set.size);
    } else {
      set.delete(str.charAt(left));
      left++;
    }
  }
  return maxLength;
};

(() => {
  // log(lengthOfLongestSubstring("abcabcbb"));
  log(lengthOfLongestSubstring(" "));
  log(lengthOfLongestSubstring("a"));
  // log(lengthOfLongestSubstring("bbbbb"));
  // log(lengthOfLongestSubstring("pwwkew"));
})();
