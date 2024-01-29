/**
 * 对于js来说很简单
 * 错了两次都是因为很简单的语法错误，思路可以说是1次AC
 */
const { log } = console;

const reverseWords = (s) => {
  const sArray = s.split(' ');
  const removeSpaceArray = [];
  sArray.forEach(item => {
    if (item !== '') {
      removeSpaceArray.push(item);
    }
  })
  return removeSpaceArray.reverse().join(' ');
};

(() => {
  log(reverseWords("the sky is blue"))
  log(reverseWords("  hello world  "))
  log(reverseWords("a good   example"))
  log(reverseWords(""))
})()