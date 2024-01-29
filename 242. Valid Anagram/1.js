/**
 * 简单题
 * 两个字母分别做hash，然后分别检测hash是否相互包含即可
 * 
 * 一次AC
 */

const { log } = console;

const getHash = (word) => {
  return word.split('').reduce((hash, item, index) => {
    if (hash[item]) {
      hash[item] += 1;
    } else {
      hash[item] = 1;
    }
    return hash;
  }, {});
}

const isHashIncludeWord = (hash, word) => {
  const wordArray = word.split('');
  for (let i = 0; i < word.length; i++) {
    const item = wordArray[i];
    if (hash[item] === 0 || hash[item] === undefined) {
      return false;
    } else {
      hash[item] -= 1;
    }
  }
  return true;
}

const isAnagram = (s, t) => {
  const sHash = getHash(s);
  const tHash = getHash(t);
  const sIncludeT = isHashIncludeWord(sHash, t);
  const tIncludeS = isHashIncludeWord(tHash, s);
  return sIncludeT && tIncludeS;
};

(() => {
  log(isAnagram('anagram', 'nagaram'));
  log(isAnagram('rat', 'car'));
})()