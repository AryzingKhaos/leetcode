/**
 * 一次AC，重点是nums.splice(i, 1);
*/


const { log } = console;

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let i = 0;
  while(i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  // log(nums);
};

(() => {
  removeElement([3,2,2,3], 3);
  removeElement([0,1,2,2,3,0,4,2], 2);
})();
  




