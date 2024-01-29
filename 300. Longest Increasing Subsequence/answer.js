/*
 * @Date: 2022-04-03 16:05:44
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-03 17:02:17
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/300. Longest Increasing Subsequence/answer.js
 */

/**
 * 不是自己想到的思路，但是也是半个多月前看到的答案了
 * 也是一个动态规划的思路，但是这个思路就比较复杂了。
 * 步骤：
 * 1.对于一个数组nums，对其遍历。使用dp记录下标i位置的子数组的最长子序列
 * 2.对于dp[i]，记录0到i的最长子序列。但是这个子序列不一定是真正的子序列，只是保证长度一样
 * 这个解法必须用示例才能说清楚，现在先假设有数组：[7,8,9,1,2]，遍历步骤如下：
 *  1.使用i遍历，使用arr记录子序列，final = arr.length - 1。对于nums[i]，如果nums[i] < arr[final]，说明可以直接nums.push(nums[i])
 *  2.重要的是对于nums[i] < arr[final]，都去寻找在arr中合适的位置，替换掉那个元素，保证arr递增。
 *  3.比如[7,8,9,1,2]，arr在前三位会变成[7,8,9]很好理解。遍历到1时，arr变成[1,8,9]；遍历到2时，arr变成[1,2,9]。但是到最后，arr的长度还是3，返回3即可
 *  4.比如[7,8,9,1,2,3,4]，arr在前三位会变成[7,8,9]，遍历到1、2时，变成[1,2,9]，到3时，变成[1,2,3]，到4时，变成[1,2,3,4]，返回4即可。
 * 时间复杂度应该是O(nlogn)，遍历用n，查找位置用二分查找
 * 
 * 【AC】
 * 实际写的时候，这种类型的二分查找还是比较难写的。
*/


const { log } = console;

const isDef = val => val !== undefined && val !== null;

const find = (arr, val) => {
  let length = arr.length, final = length - 1, left = 0, right = final, mid = Math.floor((left + right) / 2), finalVal;
  while (!isDef(finalVal)){
    // log(left,mid, right);
    if (arr[left] >= val) {
      finalVal = left;
      break;
    }
    if (arr[mid] >= val && arr[mid - 1] < val) {
      finalVal = mid;
      break;
    } else {
      if (left === right) finalVal = left;
      if (arr[mid] > val && arr[mid - 1] > val) {
        right = mid;
        mid = Math.floor((left + right) / 2);
      } else if (arr[mid] < val) {
        left = mid;
        mid = Math.ceil((left + right) / 2);
      }
    }
  };
  return finalVal;
}

const lengthOfLIS = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    const length = arr.length, final = length - 1;
    if (nums[i] > arr[final] || length === 0) arr.push(nums[i]);
    else {
      const index = find(arr, nums[i]);
      arr[index] = nums[i];
    }
    // log(arr);
  }
  return arr.length;
};

(() => {
  // log(find([1,6,7,9], 8));
  // log(find([1,6,7,9], 7));
  // log(find([1,6,7,8], 1));
  // log(find([1,6,7,8], 0));
  // log(find([1,6,7,8], 9));
  // log(find([2,5], 3));
  // log(lengthOfLIS([10,9,2,5,3,7,101,18]));
  // log(lengthOfLIS([0,1,0,3,2,3]));
  // log(lengthOfLIS([7,7,7,7,7,7,7]));
  log(lengthOfLIS([10,9,2,5,3,4]));
  
})();
