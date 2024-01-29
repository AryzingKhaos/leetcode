var searchInsert = function(nums, target) {
  const n = nums.length;
  let left = 0, right = n - 1, ans = n;
  while (left <= right) {
      let mid = ((right - left) >> 1) + left;
      if (target <= nums[mid]) {
          ans = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return ans;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/search-insert-position/solutions/333632/sou-suo-cha-ru-wei-zhi-by-leetcode-solution/