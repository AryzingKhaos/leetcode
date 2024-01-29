// 作者：代码随想录
// 链接：https://leetcode.cn/problems/minimum-size-subarray-sum/solutions/1706223/by-carlsun-2-iiee/

const { log } = console;

function minSubArrayLen(target, nums) {
  let left = 0, right = 0;
  let res = nums.length + 1;
  let sum = 0;
  while (right < nums.length) {
      sum += nums[right];
      if (sum >= target) {
          // 不断移动左指针，直到不能再缩小为止
          while (sum - nums[left] >= target) {
              sum -= nums[left++];
          }
          res = Math.min(res, right - left + 1);
      }
      right++;
      // log('one:', sum, left, right);
  }
  return res === nums.length + 1 ? 0 : res;
};

(() => {
  log(minSubArrayLen(11, [1,2,3,4,5]));
})()
