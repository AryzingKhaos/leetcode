/**
 * 如果不要求常量级的额外空间，这题非常简单，一个hash表即可。key是值，value是下标index
 * 如果暴力解，就是On2的时间暴力搜索
 * 
 * 但是因为是排好序的，所以二分查找还是最快的。
 * 对于numbers[0]，搜索target - numbers[0]二分查找即可
 * 这样时间复杂都就是nlogn
 * 
 * 再优化一下，实际上numbers[1]对应的数字一定在numbers[0]对应的数字左边，所以其实双指针更快
 * 时间复杂度On
 * 一次AC，挺爽的
 */

const { log } = console;

const twoSum = (numbers, target) => {
  let left = 0, right = numbers.length - 1;
  let roundRight = right;
  let sum = numbers[left] + numbers[right];
  while(sum !== target) {
    sum = numbers[left] + numbers[right];
    if (sum > target && numbers[left] + numbers[right-1] < target) {
      roundRight = right;
    }
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
      right = roundRight;
    }
  }
  return [left+1, right+1];
}

(() => {
  log(twoSum([2,7,11,15], 9));
  log(twoSum([2,3,4], 6));
  log(twoSum([-1, 0], -1));
})()