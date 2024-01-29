/*
 * @Date: 2022-04-01 17:18:31
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-01 17:28:27
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/256. Paint House/1.js
 */

/**
 * 动态规划
 * 看了一眼答案，只看了两句话，就有了思路
 * 1.维护三个dp数组，分别为dpRed、dpBlue、dpGreen。记录以下标i时，需要用红、蓝、绿粉刷需要的最小话费
 * 2.转移方程是：dpRed[i] = min(dpBlue[i-1] + cost[i][0], dpGreen[i-1] + cost[i][0])，dpBlue、dpGreen类似
 * 3.最后只要求出max(dpRed[i], dpBlue[i], dpGreen[i])即可
 * 
 * 【AC】85% 39%
 * 
*/

const { log } = console;

const minCost = (costs) => {
  const length = costs.length;
  if (length === 0) return 0;
  if (length === 1) return Math.min(...costs[0]);
  const dpRed = new Array(length).fill(0);
  const dpBlue= new Array(length).fill(0);
  const dpGreen = new Array(length).fill(0);
  dpRed[0] = costs[0][0];
  dpBlue[0] = costs[0][1];
  dpGreen[0] = costs[0][2];
  let finalVal;
  for (let i = 1; i < length; i++) {
    dpRed[i] = Math.min(dpBlue[i-1] + costs[i][0], dpGreen[i-1] + costs[i][0]);
    dpBlue[i] = Math.min(dpRed[i-1] + costs[i][1], dpGreen[i-1] + costs[i][1]);
    dpGreen[i] = Math.min(dpRed[i-1] + costs[i][2], dpBlue[i-1] + costs[i][2]);
    if (i === length - 1) {
      finalVal = Math.min(dpRed[i], dpBlue[i], dpGreen[i]);
    }
  }
  // log(dpRed);
  // log(dpBlue);
  // log(dpGreen);
  return finalVal;
};

(() => {
  log(minCost([
    [17,2,17],
    [16,16,5],
    [14,3,19]
  ]));
})();
