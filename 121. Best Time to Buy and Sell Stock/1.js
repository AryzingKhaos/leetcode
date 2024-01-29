/*
 * @Date: 2022-03-30 13:00:07
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 13:12:56
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/121. Best Time to Buy and Sell Stock/1.js
 */

/**
 * 步骤：
 * 1.可以用两个数组，一个数组从左到右记录最小值；另一个数组从右到左记录最大值
 * 2.计算每个点买入可能获得的最大值，然后取整体的最大值即可
 * 
 * 简单题，一次【AC】
*/

const { log } = console;

const maxProfit = (prices) => {
  if (prices.length === 0) return 0;
  const leftMin = prices.reduce((arr, item, index) => {
    if (index === 0) return [item];
    else {
      if (item > arr[index - 1]) {
        arr.push(arr[index - 1]);
      } else {
        arr.push(item);
      }
      return arr;
    }
  }, []);
  const rightMax = prices.reverse().reduce((arr, item, index) => {
    if (index === 0) return [item];
    else {
      if (item < arr[index - 1]) {
        arr.push(arr[index - 1]);
      } else {
        arr.push(item);
      }
      return arr;
    }
  }, []).reverse();
  return leftMin.reduce((maxProfit, item, index) => {
    const right = rightMax[index];
    const left = item;
    const curProfit = right - left;
    return maxProfit > curProfit ? maxProfit : curProfit;
  }, 0);
};

(() => {
  log(maxProfit([7,1,5,3,6,4]));
  log(maxProfit([1,2,3,4,5]));
  log(maxProfit([7,6,4,3,1]));
  
})();
