/**
 * 2023-12-08
 * 可以直接服用56题的解法
 * 实际上，只要插入的地方依然有序，就可以直接用56题的解法
 */

const { log } = console;

const merge = (intervals) => {
  // const sortIntervals = intervals.sort((a, b) => a[0] - b[0]); // 和56题的区别，这里不需要排序
  const sortIntervals = intervals;
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

const insert = (intervals, newInterval) => {
  if (intervals.length === 0) {
    return [newInterval];
  }
  if (intervals.length === 1) {
    if (newInterval[0] >= intervals[0][0]) {
      return merge(intervals.concat([newInterval]));
    } else {
      return merge([newInterval].concat(intervals));
    }
  }
  // 遍历intervals，查找newInterval的插入点
  for (let i = 0; i < intervals.length; i++) {
    const item = intervals[i];
    if (i === 0 && newInterval[0] <= item[0]) {
      return merge([newInterval].concat(intervals));
    }
    if (i === intervals.length - 1) { // 到达边界
      if (newInterval[0] >= item[0]) {
        return merge(intervals.concat([newInterval]));
      }
    }
    const nextItem = intervals[i+1];
    if (item[0] < newInterval[0] && newInterval[0] <= nextItem[0]) {
      intervals.splice(i+1, 0, newInterval);
      break;
    }
  }
  return merge(intervals);
};


(() => {
  // log(insert([[1,3],[6,9]], [2,5]));
  // log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
  // log(insert([], [5,7]));
  // log(insert([[1,5]], [2,3]));
  // log(insert([[1,5]], [2,7]));
  log(insert([[1,5]], [1,7]));
  log(insert([[2,5]], [1,7]));
  log(insert([[1,5],[6,8]], [0,9]));
})()
