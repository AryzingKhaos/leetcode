/*
 * @Date: 2022-03-30 13:13:00
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 13:19:40
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/122. Best Time To Buy And Sell Stock II/1.js
 */

/**
 * 
 * 步骤：
 * 1.对于每个时间点，如果对于前一个时间点，是递增的，那么计入总收益
 * 2.如果是递减、不变的，不计算
 * 3.最后就是结果
 * 
 * 一次【AC】
 * 感觉比121的那道easy还要简单
 * 跟答案也一样
 * 
*/

const { log } = console;

const maxProfit = (prices) => {
  if (prices.length === 0) return 0;
  return prices.reduce((profit, item, index) => {
    if (index === 0) return 0;
    const pre = prices[index - 1];
    if (item > pre) return profit += item - pre;
    return profit;
  }, 0);
};

(() => {
  log(maxProfit([7,1,5,3,6,4]))
  log(maxProfit([1,2,3,4,5]))
  log(maxProfit([7,6,4,3,1]))
})();
