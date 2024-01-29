/**
 * 看题目显然是可以用链表做的
 * 但是我不太想用链表做
 * 
 * 提示说至少有三种方法
 * 提示2说事实用O(1)的方法做
*/

const { log } = console;


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const length = nums.length;
  const position = k % length;
  const headArr = nums.slice(length - position);
  const tailArr = nums.slice(0, length - position);
  headArr.forEach((item, index) => {
    nums[index] = item;
  })
  tailArr.forEach((item, index) => {
    nums[index + (length - position - 1)] = item;
  });
  log(headArr, tailArr, nums);
  // return headArr.concat(tailArr);
};

(() => {
	// rotate([1,2,3,4,5,6,7], 3);
	log(rotate([-1,-100,3,99], 3));
})();
