/**
 * 明示了是一道滑动窗口题，双下标left和right
 * 这题的关键在于，何时更新left和right
 * 我写个简单的来试试
 * 
 * 被坑了一下，大于或者等于target都可以
 * 
 * 极大用例会超时，但是代码随想录的是可以过的。估计是arraySum函数的问题
 */

const { log } = console;

const arraySum = (array) => {
  return array.reduce((sum, item, index) => {
    return sum += item;
  }, 0);
}

const minSubArrayLen = (target, nums) => {
  let left = 0, right = 0, min = Infinity;
  while(left < nums.length && right < nums.length) {
    const subArray = nums.slice(left, right+1);
    // log('subArray:', subArray, arraySum(subArray));
    if (arraySum(subArray) < target) {
      right++;
      continue;
    }
    if (arraySum(subArray) >= target) {
      if (min > subArray.length) {
        min = subArray.length;
      }
      left++;
    }
  }
  return min === Infinity ? 0 : min;
};

(() => {
  log(minSubArrayLen(7, [2,3,1,2,4,3]));
  log(minSubArrayLen(4, [1,4,4]));
  log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));
  log(minSubArrayLen(11, [1,2,3,4,5]));
})()