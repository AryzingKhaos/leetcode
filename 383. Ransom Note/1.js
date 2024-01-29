/**
 * hash的简单题
 */

const { log } = console;

const checkHash = (hash, ransomNote) => {
  const noteArray = ransomNote.split('');
  for (let i = 0; i < noteArray.length; i++) {
    const item = noteArray[i];
    if (hash[item] > 0) {
      hash[item] -= 1;
    } else if (hash[item] === 0 || hash[item] === undefined) {
      return false;
    }
  }
  return true;
}

const canConstruct = (ransomNote, magazine) => {
  const hash = magazine.split('').reduce((hash, item, index) => {
    if (hash[item]) {
      hash[item] += 1;
    } else {
      hash[item] = 1;
    }
    return hash;
  }, {});
  return checkHash(hash, ransomNote);
};

(() => {
  log(canConstruct('a', 'b'));
  log(canConstruct('aa', 'aab'))
})();