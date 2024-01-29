/*
 * @Date: 2022-03-19 15:18:13
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:29:21
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/200. Number of Islands/1.js
 */

/**
 * 第一个想到的解法步骤如下：
 * 1.改造数据，加上“已遍历”的boolean属性
 * 2.遍历grid，如果遇到0，不做任何事
 * 3.遇到1，总岛屿数量+1，递归做修改，保证跟1接壤的1全都变成“已遍历”
 * 4.继续遍历，如果遇到1，且没有遍历过，则进行3那步。
 * 5.直到遍历grid结束。
 * 
 * AC了，但是看运行，这个解法的时间复杂度、空间复杂度都很高，偏暴力
 * 【AC】
 */
const { log } = console;

const getTraveralBool = (grid) => {
  return grid.reduce((arr, item) => {
    arr.push(item.map(() => {
      return false;
    }));
    return arr;
  }, [])
}

const travelIsland = (grid, gridBool, i, j) => {
  if (!grid[i] || !grid[i][j] || grid[i][j] === '0' || gridBool[i][j]) return;
  gridBool[i][j] = true;
  travelIsland(grid, gridBool, i+1, j);
  travelIsland(grid, gridBool, i, j+1);
  travelIsland(grid, gridBool, i-1, j);
  travelIsland(grid, gridBool, i, j-1);
}

const numIslands = (grid) => {
  if (!grid || !grid.length || !grid[0].length) return 0;
  const gridBool = getTraveralBool(grid);
  let islandsNum = 0;
  grid.forEach((row, i) => {
    row.forEach((item, j) => {
      if (item === '1' && !gridBool[i][j]) {
        islandsNum++;
        travelIsland(grid, gridBool, i, j);
      }
    })
  })
  return islandsNum;
};

(() => {
  // log(numIslands([
  //   ["1","1","1","1","0"],
  //   ["1","1","0","1","0"],
  //   ["1","1","0","0","0"],
  //   ["0","0","0","0","0"]
  // ]));
  // log(numIslands([
  //   ["1","1","0","0","0"],
  //   ["1","1","0","0","0"],
  //   ["0","0","1","0","0"],
  //   ["0","0","0","1","1"]
  // ]));
  log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]));
})();