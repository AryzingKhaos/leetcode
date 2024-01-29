/*
 * @Date: 2022-03-29 10:38:04
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-29 16:38:44
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/97. Interleaving String/1.js
 */

/**
 * 首先想到的是双指针
 * 要处理几种情况：
 * 1.如果是拼接的
 * 
 * 3.如果一个字符，可以是s1，也可以是s2，那么用哪个？判断s1[i] + s2[j] === s3[k] + s3[k+1]
 * 
 * 然后看了答案，说双指针是一个特别典型的“反例”。。。
 * 就是说双指针怎么都解不出来。（但是有回复说双指针+回溯可以解）
 * 【未完成】
*/

const { log } = console;

const isInterleave = (s1, s2, targetStr) => {
  if (s1.length + s2.length !== targetStr.length) return false;
  if ([s1.length, s2.length, targetStr.length].every(item => item === 0)) return true;
  let index1 = 0, index2 = 0, indexTarget = 0;
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const targetArr = targetStr.split('');
  while(index1 < s1Arr.length || index2 < s2Arr.length) {
    if (s1Arr[index1] === s2Arr[index2]) {
      log('s1Arr[index1] === s2Arr[index2]');
      log(index1, index2, indexTarget);
      log('=================================');
      if (s1Arr[index1] + s2Arr[index2] === targetArr[indexTarget] + targetArr[indexTarget + 1]) {
        index1++;
        index2++;
        indexTarget += 2;
      } else {
        return false;
      }
    } else {
      log('else', s1Arr[index1], s2Arr[index2]);
      log(index1, index2, indexTarget);
      log('=================================');
      if (s1Arr[index1] === targetArr[indexTarget]) {
        index1++;
        indexTarget++;
      } else if (s2Arr[index2] === targetArr[indexTarget]) {
        index2++;
        indexTarget++;
      } else { // 普通情况：两个都不等于indexTarget的值，false
        return false;
      }
      // 如果某一个时刻，index1或index2为0，另一个已经遍历完了，那么就是拼接
      if ((index1 === s1Arr.length && index2 === 0) || (index2 === s2Arr.length && index1 === 0)) {
        return false;
      }
    }
  }
  return true;
};

(() => {
  log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
})();

