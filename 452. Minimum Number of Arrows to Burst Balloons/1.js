/**
 * 2023-12-08
 * 初看以为56题一样，实际上不一样。56题是区间合并，这题是要找一个点，这个点被包含在尽量多的数组中
 * 想到是贪心的题，看了一下确实有贪心的标签
 * 第一步肯定是排序
 * 跟56题的区别是，56题是合并区间，这题是找公有区间。
 * 比如[[1,6],[2,8],[7,12],[10,16]]，可以看到[1,6],[2,8]的公有区间是[2,6]，然后[2,6]跟[7,12]没有公有区间，只能新开
 * 思路跟56题很相似
 * 
 * 一次AC了
 */

const { log } = console;

const findMinArrowShots = (points) => {
  const sortPoints = points.sort((a, b) => a[0] - b[0]);
  const finalArray = [];
  let currentArr = sortPoints[0];
  for (let i = 1; i < sortPoints.length; i++) {
    const item = sortPoints[i];
    if (!currentArr) {
      currentArr = item;
      continue;
    } else {
      if (currentArr[1] < item[0]) { // 边界不重合
        finalArray.push(currentArr);
        currentArr = item;
      } else {
        const lowerBound = currentArr[0] >= item[0] ? currentArr[0] : item[0];
        const upperBound = currentArr[1] >= item[1] ? item[1] : currentArr[1];
        currentArr = [lowerBound, upperBound];
      }
    }
  }
  finalArray.push(currentArr);
  return finalArray.length;
};

(() => {
  log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))
  log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]))
  log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))
})();
