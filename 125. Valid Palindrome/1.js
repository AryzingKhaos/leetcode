/**
 * 题目很简单，以前写过答案
 */

var isPalindrome = function(s) {
  console.log(s);
  let _s = s.toLowerCase().replace(/[^0-9a-z]/gi,'');
  console.log(_s);
  let arr1 = _s.split('');
  let arr2 = arr1.concat([]).reverse();
  console.log(arr1);
  console.log(arr2);
  return arr1.every((item, index) => {
      return item === arr2[index];
  })
};

