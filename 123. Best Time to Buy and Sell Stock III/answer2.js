/*
 * @Date: 2022-03-30 14:15:50
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 14:29:53
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/123. Best Time to Buy and Sell Stock III/answer2.js
 */


/**
 * 在answer.js中，可以看到，buy1、sell1、buy2、sell2都只用到了i和i-1的值，所以其实可以只用4个值就可以记录状态了。
*/


const { log } = console;

const maxProfit = (prices) => {
  const length = prices;
  if (length <= 1) return 0;
  
  let buy1 = 0 - prices[0];
  let sell1 = 0;
  let buy2 = 0 - prices[0];
  let sell2 = 0;
  const { max } = Math;

  return prices.reduce((profit, item, i) => {
    if (i === 0) return;
    buy1 = max(buy1, 0 - item);
    sell1 = max(sell1, buy1 + item); // 这里为什么可以用i的buy1，以及后面为什么可以用sell1[i]、buy2[i]来计算，没明白。
    buy2 = max(buy2, sell1 - item);
    sell2 = max(sell2, buy2 + item);
    return sell2;
  }, 0)
}

(() => {
  // log(maxProfit1([3,3,5,0,0,3,1,4]));
  log(maxProfit([1,2,3,4,5]));
})();
