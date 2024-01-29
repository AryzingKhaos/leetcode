/**
 * 2024-01-14
 * 简单题
 * 
 * 写了一坨垃圾
 */


const { log } = console;

const logObject = (obj) => {
  if (typeof obj !== 'object') {
    throw 'params is not an obj';
  }

  const logArray = Object.keys(obj).reduce((arr, key) => {
    const value = obj[key];
    arr.push(`${key}:`);
    if (typeof value === 'object') {
      arr.push(`${JSON.stringify(value)};`);
    } else {
      arr.push(`${value};`);
    }
    return arr;
  }, []);

  const { log } = console;
  // log(logArray);
  log(...logArray);
}

const searchInsert = (nums, target) => {
  let left = 0, right = nums.length - 1, mid;
  if (target >= nums[nums.length - 1]) {
    return nums.length - 1;
  }

  let i = 0;
  while (!(nums[mid] < target && nums[mid+1] > target)) {
    mid = Math.floor((left + right) / 2);
    logObject({left, mid, right, target, numsMid: nums[mid], numsMidOne: nums[mid+1]});
    if (nums[mid] < target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] === target) {
      return mid;
    }
    i++;
    if (i === 10){
      break;
    }
  }
  return mid;
};

(() => {
  // log(searchInsert([1,3,5,6], 5))
  log(searchInsert([1,3,5,6], 2))
  // log(searchInsert([1,3,5,6], 7))
})();



