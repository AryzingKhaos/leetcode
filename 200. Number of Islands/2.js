/*
 * @Date: 2022-03-19 15:46:49
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:29:30
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/200. Number of Islands/2.js
 */

/**
 * 这是想到的优化解法。因为对于每一次1的接壤，都会减少一个岛屿。
 * 步骤如下：
 * 1.先计算1的数量oneNum
 * 2.遍历grid，如果一个1，他的右边也是1，那么oneNum--
 * 3.如果一个1，他的下面也是1，那么oneNum--
 * 4.如果一个1，他的上面、左边都是1，那么证明这个1被多减了一次，需要oneNum++
 * 不需要递归，两次遍历grid即可。
 * 
 * 上面的思路是错的。
 * 
 * 
 */
const { log } = console;

const calcOneNum = (grid) => {
  return grid.reduce((oneNum, row, i) => {
    row.forEach((item, j) => {
      if (item === '1') oneNum++;
    });
    return oneNum;
  }, 0)
}

const numIslands = (grid) => {
  let islandsNum = calcOneNum(grid);
  grid.forEach((row, i) => {
    row.forEach((item, j) => {
      if (item === '1' && (grid[i+1] && grid[i+1][j] === '1')) islandsNum--;
      if (item === '1' && grid[i][j+1] === '1') islandsNum--;
      if (item === '1' && (grid[i-1] && grid[i-1][j] === '1') && grid[i][j-1] === '1' && grid[i-1][j-1] === '1') islandsNum++;
    })
  })
  return islandsNum;
}

(() => {
  log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]))
  log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))
  log(numIslands([
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]
  ]));
  log(numIslands([
    ["1","1","1"],
    ["1","0","1"],
    ["1","1","1"]
  ]));
})();