/*
 * @Date: 2022-03-30 13:35:44
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 14:24:46
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/123. Best Time to Buy and Sell Stock III/answer.js
 */

/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-iii-by-wrnt/
 * 这题的难点在于，对于每个点，你并不知道他依赖的是什么
 * 但是看完答案，我们知道，每个点的状态，其实只依赖于上一个点的状态。
 * 对于prices，每个点的状态只能是这5种情况：
 * 1.没有进行任何操作
 * 2.买了一次，未卖出
 * 3.买了一次，卖了一次
 * 4.买了一次，卖了一次，再买了一次
 * 5.买了一次，卖了一次，再买了一次，在卖了一次
 * 
 * 又由于“1.没有进行任何操作”没有意义，所以不需要记录。
 * 我们只需要判断相较于上一个点，这个点的这四种状态，所获得的收益最大是多少，即可。
 * 
 * 在分解之前，我们先引入一个“钱包”的改变。假设我们现有钱包的钱是0，最后获得收益之后，钱包是profit。
 * 如果我们买入一支股票，那么要花费price的钱，钱包的值就变为-price（负price）。
 * 
 * 下面开始分解
 * 对于情况“2.买了一次，未卖出”，设为buy1[i]
 *  buy1[i] = max(buy1[i-1], -price[i])
 * 这里要注意，buy1[i]一定为负值。我们只是知道这里付出了多少，要尽可能付出得少。
 * 
 * 对于情况“3.买了一次，卖了一次”，设为sell1[i]
 *  sell1[i] = max(sell1[i-1], buy1[i-1] + price[i])
 * 因为sell1要么是跟sell1[i-1]一样，要么是在i这个位置卖了股票。buy1[i] + price[i]的概念是钱包目前的余额。
 * 
 * 对于情况“4.买了一次，卖了一次，再买了一次”，设为buy2[i]
 * 因为没有限定买卖，所以可以当天卖，当天买。但是这样没有意义，所以一定是要对比前一天卖，今天买。
 * 且buy2要跟sell1有关。
 *  buy2[i] = max(buy[i-1], sell1[i-1] - price[i])
 * 
 * 对于情况“5.买了一次，卖了一次，再买了一次，在卖了一次”，设为sell2[i]
 *  sell2[i] = max(sell2[i-1], buy2[i-1] + price[i]);
 * 
 * 最后，需要注意边界条件，即位置0的情况
 * 【AC】
 * 
 * 
*/

const { log } = console;

const maxProfit = (prices) => {
  const length = prices;
  if (length <= 1) return 0;
  const buy1 = new Array(length).fill(0);
  const sell1 = new Array(length).fill(0);
  const buy2 = new Array(length).fill(0);
  const sell2 = new Array(length).fill(0);
  
  buy1[0] = 0 - prices[0];
  sell1[0] = 0;
  buy2[0] = 0 - prices[0];
  sell2[0] = 0;
  
  const { max } = Math;

  return prices.reduce((profit, item, i) => {
    if (i === 0) return;
    buy1[i] = max(buy1[i-1], 0 - item);
    sell1[i] = max(sell1[i-1], buy1[i-1] + item);
    buy2[i] = max(buy2[i-1], sell1[i-1] - item);
    sell2[i] = max(sell2[i-1], buy2[i-1] + item);
    // log(buy1);
    // log(sell1);
    // log(buy2);
    // log(sell2);
    // log('=============')
    return sell2[i];
  }, 0)
}



(() => {
  // log(maxProfit1([3,3,5,0,0,3,1,4]));
  log(maxProfit1([1,2,3,4,5]));
})();
