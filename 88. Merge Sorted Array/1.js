/** 
 * 一次AC，js写这种题还是太作弊了
 * 难点只在排序
*/



const { log } = console;

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  nums1.length = m;
  nums2.forEach(item => nums1.push(item));
  nums1.sort((a, b) => a - b);
  // log(nums1);
};

(() => {
  merge([1,2,3,0,0,0], 3, [2,5,6], 3);
})();
