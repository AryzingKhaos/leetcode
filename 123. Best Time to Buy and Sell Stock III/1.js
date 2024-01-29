/*
 * @Date: 2022-03-30 13:23:47
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 13:35:36
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/123. Best Time to Buy and Sell Stock III/1.js
 */

/**
 * 困难题
 * 步骤：
 * 1.因为只能交易两次，所以只要想明白这个数组在哪里“分割”，就可以了
 * 2.用一个数组记录，在每个分割点i，对[0, i]和[i+1, final]两个区间分别形成数组
 *  这一步需要121题目里的那个函数
 * 3.两个数组都求可以获得的最大收益，想加，就是总收益。时间复杂度O(n2)
 * 
 * 超时了。。。可能O(n2)的无法满足要求
 * 但是算法没错，前面的用例都通过了。
 * 算法没错，但是【TLE】
 * 
*/

const { log } = console;

const maxProfitArr1 = (prices) => {
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

const maxProfit = (prices) => {
  return prices.reduce((max, _, index) => {
    const curProfit =  maxProfitArr1(prices.slice(0, index + 1)) + maxProfitArr1(prices.slice(index + 1, prices.length));
    return max > curProfit ? max : curProfit;
  }, 0);
};


(() => {
  log(maxProfit([3,3,5,0,0,3,1,4]));
  log(maxProfit([1,2,3,4,5]));
})();
