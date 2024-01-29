/*
 * @Date: 2022-03-23 10:51:21
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-29 16:38:22
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/56. Merge Intervals/1.js
 */
/**
 * 自己想到的思路是：
 * 1.排序，以左边界为准，递增排序
 * 2.用两个数组分别记录左边界、右边界
 * 3.使用两个指针，left和right分别指向两个数组的开始点。
 * 4.准备一个栈stack，对于left <= right，都将left push到stack里，然后left++；否则stack pop，同时right++。
 * 5.如果stack pop之后没有值了，说明和当前的right组成了一个闭合区间。这个闭合区间放到最终数组里。继续3和4。
 * 
 * 目前边界条件有问题
 * 【未完成】
 * 
*/

const { log } = console;

const merge = (intervals) => {
  const sortArr = intervals.sort((a, b) => a[0] - b[0]);
  const intervalsLength = intervals.length;
  const leftArr = sortArr.map(item => item[0]);
  const rightArr = sortArr.map(item => item[1]);
  const stack = []; // 只能用shift和unshift方法
  const mergeArr = [];
  let tempArr = [leftArr[0]];
  let left = 0, right = 0;
  let maxRight = 0;
  while(left < intervalsLength && right < intervalsLength){
    // if (left === intervalsLength - 1) {
    //   maxRight = rightArr.slice(right, intervalsLength).reduce((max, item) => Math.max(max, item), 0);
    //   tempArr.push(maxRight);
    //   mergeArr.push(tempArr);
    //   break;
    // }
    if (leftArr[left] <= rightArr[right]) {
      left++;
    }
    if (leftArr[left] > rightArr[right]) {
      maxRight = rightArr.slice(right, left).reduce((max, item) => Math.max(max, item), 0);
      // log('maxRight', maxRight);
      tempArr.push(maxRight);
      mergeArr.push(tempArr);
      tempArr = [leftArr[left]];
      right=left;
    }

    log(mergeArr, '|', tempArr);
    log('=======================');
  }

  // 为了闭合，需要push最后一次
  tempArr.push(maxRight);
  mergeArr.push(tempArr);

  return mergeArr;
};

(() => {
  log(merge([[2,6],[1,3],[8,10],[15,18]]));
  // log(merge([[1,4],[4,5]]));
  // log(merge([[1,4],[4,5],[6,8]]));
  // log(merge([[1,4],[4,5],[6,8],[9,15]]));
  // log(merge([[1,4],[1,9],[2,3]]));
})();


