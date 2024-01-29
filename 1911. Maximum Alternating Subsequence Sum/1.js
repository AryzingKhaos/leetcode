/**
 * 记录两个数组，数组A(numsA)是记录子序列元素为偶数个的时候，能记录的最大子序列
 * 数组B(numsB)是记录子序列元素为奇数个的时候，能记录的最大子序列
 * 累加公式是：numsEven[index] = max(numsOdd[index - 1] - item, numsEven[index - 1]); numsOdd[index] = max(numsEven[index - 1] + item, numsOdd[index - 1], item)
 * 
 * AC了，但是为啥时间复杂度这么高？明明是个O(n)
*/

const { log } = console;


/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAlternatingSum = (nums) => {
  const length = nums.length;
  const numsEven = new Array(length).fill(undefined);
  const numsOdd = new Array(length).fill(undefined);
  const { max } = Math;
  nums.forEach((item, index) => {
    if (index === 0) {
      numsEven[0] = 0;
      numsOdd[0] = item;
      return;
    }
    if (index === 1) {
      numsEven[1] = nums[0] - nums[1];
      numsOdd[1] = max(nums[0], nums[1]);
      return;
    }
    numsEven[index] = max(numsOdd[index - 1] - item, numsEven[index - 1]);
    numsOdd[index] = max(numsEven[index - 1] + item, numsOdd[index - 1], item);
    // log(numsEven, numsOdd);
  });
  return max(numsEven[length - 1], numsOdd[length - 1]);
};



(() => {
	log(maxAlternatingSum([4,2,5,3]));
	log(maxAlternatingSum([5,6,7,8]));
	log(maxAlternatingSum([6,2,1,2,4,5]));
})();
