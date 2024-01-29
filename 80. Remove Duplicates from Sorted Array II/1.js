/**
 * 一次AC
 * 看题解，大部分是快慢指针的思想
*/

const { log } = console;

const isTwice = (times, num) => {
  if (times[0] === num && times[1] === num) {
    return true;
  }

  if (times[0] !== num && times[1] !== num) {
    times[0] = num;
  } else if (times[0] === num && times[1] !== num) {
    times[1] = num;
  }
  return false;
}

const removeDuplicates = (nums) => {
  const times = [null, null];
  for(let i = 0; i < nums.length;) {
    if (isTwice(times, nums[i])) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  // log(nums);
};

(() => {
  removeDuplicates([1,1,1,2,2,3]);
  removeDuplicates([0,0,1,1,1,1,2,3,3]);
})();