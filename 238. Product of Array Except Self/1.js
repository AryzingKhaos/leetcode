/**
 * 题目说不要使用除法，我寻思不用除法用与、或也是一样的吧
 * 然后看了一下答案，跟与或没关系。。
 * 用的是前缀乘积和后缀乘积的计算方法，记录两个数组arrLeft和arrRight
 * arrLeft[0] = 1, arrLeft[1] = nums[0] * 1, arrLeft[2] = nums[0] * nums[1] = arrLeft[1] * nums[1]
 * 一次AC了
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const length = nums.length;
  const arrLeft = new Array(length).fill(1)
  for (let i = 0; i < arrLeft.length; i++) {
    if (i === 0) {
      arrLeft[i] = 1;
      continue;
    }
    arrLeft[i] = nums[i - 1] * arrLeft[i - 1]
  }

  const arrRight = new Array(length).fill(1);
  for (let i = arrRight.length - 1; i >= 0; i--) {
    if (i === arrRight.length - 1) {
      arrRight[i] = 1;
      continue;
    }
    arrRight[i] = nums[i + 1] * arrRight[i + 1];
  }
  console.log(arrLeft, arrRight);
  const finalArr = new Array(length).fill(1).map((item, index) => {
    const res = arrLeft[index] * arrRight[index];
    if (res === 0) {
      return 0; // 防止返回-0
    }
    return res;
  })
  return finalArr;
};

(() => {
  console.log(productExceptSelf([1,2,3,4]))
  console.log(productExceptSelf([-1,1,0,-3,3]))
})()