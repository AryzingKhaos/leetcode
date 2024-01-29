
/**
 * 可以用一个窗口的方式来做
 * 具体就是左右指针
 * 注意使用hash表去重
 * 因为指针都只遍历一次，所以时间复杂度On
 * 
 * 步骤如下：
 * 1.建立两个指针，分别为left和right，都指向0。left指针永远不大于right
 * 2.建立一个哈希表hash，先执行right右移，把字符逐一传入hash表中。一旦Object.keys(hash)的长度小于right - left，就认为有重复
 * 3.否则继续右移right，直到right+1会导致重复，就开始left右移。
 * 4.使用一个变量maxLength（初始值为0）记录最长的情况，一旦right右移满足条件，刷新了最大长度，就更新maxLength
 */

const { log } = console;

// 这个查重方法可以优化一下，用hash记录boolean值。但是实际并不太好用
const checkIsRepeat = (substrArray) => {
  const setArray = [...new Set(substrArray)];
  if (substrArray.length === setArray.length) return false;
  return true;
}

const lengthOfLongestSubstring = (str) => {
  let left = 0, right = 0;
  const strArray = str.split('');
  let maxLength = 0;
  while(right <= strArray.length) {
    const subStrPlusOneArray = strArray.slice(left, right+1);
    if (!checkIsRepeat(subStrPlusOneArray)) {
      right++;
      if (maxLength < subStrPlusOneArray.length) maxLength = subStrPlusOneArray.length;
    } else {
      left++;
    }
  }
  return maxLength;
};

(() => {
  // log(lengthOfLongestSubstring("abcabcbb"));
  // log(lengthOfLongestSubstring("bbbbb"));
  // log(lengthOfLongestSubstring("pwwkew"));
  log(lengthOfLongestSubstring("pwwkewasbwwwwwwwwww"));
})();




