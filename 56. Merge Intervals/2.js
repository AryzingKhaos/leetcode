/**
 * 2023-12-07
 * 先根据第一个数的大小排序
 * 然后可以合并intervals[0]和intervals[1]
 * 重复即可
 * 对于下一个区间的开始已经不在上一个区间的数组，则将currentArr push到finalArray里，重置currentArr
 * 
 * 一次AC
 */

const { log } = console;

const merge = (intervals) => {
  const sortIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const finalArray = [];
  let currentArr = sortIntervals[0];
  for (let i = 1; i < sortIntervals.length; i++) {
    const item = sortIntervals[i];
    if (!currentArr) {
      currentArr = item;
      continue;
    } else {
      if (currentArr[1] < item[0]) { // 边界不重合
        finalArray.push(currentArr);
        currentArr = item;
      } else if (currentArr[1] >= item[0] && currentArr[1] <= item[1]) { // currentArr上边界落在item内
        currentArr = [currentArr[0], item[1]];
        continue;
      } else if (currentArr[1] > item[1]) {
        // currentArr = currentArr;
        continue;
      }
    }
  }
  finalArray.push(currentArr);
  return finalArray;
};

(() => {
  log(merge([[2,6],[1,3],[8,10],[15,18]]))
  log(merge([[1,4],[4,5]]))
})();
