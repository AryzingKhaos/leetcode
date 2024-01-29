/**
 * 感觉和30题差不多
 * 滑动窗口，hash表
 * left和right指针，判断区间是否满足，如果满足就left++，否则就right++
 * 关键是hash的判断方法的速度
 * 
 * 思路完全没问题，但是第265个case超时了（总共267个）
 * 实在不想写优化了，hash那里的增减可以优化一下
 * left++就是左边减少了一个，只要确认这个字母是否影响t的hash即可
 * right++就是右边多了一个，只要确认这个字母是否影响t的hash即可
 */

const { log } = console;

const isDef = val => val !== undefined && val !== null;

const initHash = (t) => {
  return t.split('').reduce((hash, item, index) => {
    if (isDef(hash[item])) {
      hash[item] += 1;
    } else {
      hash[item] = 1;
    }
    return hash;
  }, {})
}

const isContained = (subStrHash, hash) => {
  const hashKeyArray = Object.keys(hash);
  for(let i = 0; i < hashKeyArray.length; i++) {
    const key = hashKeyArray[i];
    if (!subStrHash[key] || subStrHash[key] < hash[key]) {
      return false;
    }
  }
  return true;
}

const minWindow = (s, t) => {
  if (t.length > s.length) {
    return "";
  }
  if (s === t) {
    return t;
  }
  const tHash = initHash(t);
  let left = 0, right = 1;
  let subStr;
  let minStr = s;
  let isMinStrUpdated = false;
  while (left < s.length && right <= s.length) {
    subStr = s.slice(left, right);
    // log('subStr', subStr, left, right);
    const subStrHash = initHash(subStr);
    const isContain = isContained(subStrHash, tHash);
    if (isContain) {
      left++;
    } else {
      right++;
    }
    if (isContain && subStr.length <= minStr.length) {
      minStr = subStr;
      isMinStrUpdated = true;
    }
  }
  return isMinStrUpdated ? minStr : "";
};

(() => {
  // log(initHash('ABC'));
  // log(isContained(initHash("ADOBECODEBANC"), initHash('ABC')));
  // log(isContained(initHash("A"), initHash('ABC')));
  // log(minWindow("ADOBECODEBANC", 'ABC'));
  // log(minWindow("ADOBECODEBANDDDDDDDDDC", 'ABC'));
  log(minWindow("abc", 'ac'));
})()
