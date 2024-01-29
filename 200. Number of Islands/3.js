/*
 * @Date: 2022-03-19 16:40:54
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:29:42
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/200. Number of Islands/3.js
 */

/**
 * 并查集的解法，思路：
 * 1.对于每个为1的节点，记录当前节点的i * n + j作为其的秩
 * 2.对这个节点的上下左右查询，如果发现任何一个点为1，那么联合这两个并查集，对比秩，使用较小的秩
 * 3.进行完所有节点的遍历后，岛屿数量就是秩的数量，统计秩的数量，就可以计算岛屿数量了。
 * 
 * 这是看了答案之后想到的解法
 * 但是这个算法会超时，因为union函数还有优化空间
 * 【未完成】
 */

const { log } = console;

// 这里等于是每一次union都全部遍历了一次，成本太高了
const updateParent = (gridObj, originValue, targetValue) => {
  gridObj.forEach((row, i) => {
    row.forEach((obj, j) => {
      if (obj.parent === originValue) {
        obj.parent = targetValue;
      }
    })
  })
}

// union函数、updateParent函数还有优化空间
const union = (gridObj, a, b) => {
  if (a.parent <= b.parent) updateParent(gridObj, b.parent, a.parent);
  else updateParent(gridObj, a.parent, b.parent);
}

const unionAround = (gridObj, obj, i, j) => {
  if (gridObj[i+1] && gridObj[i+1][j] && gridObj[i+1][j].value === '1') union(gridObj, gridObj[i+1][j], obj)
  if (gridObj[i-1] && gridObj[i-1][j] && gridObj[i-1][j].value === '1') union(gridObj, gridObj[i-1][j], obj)
  if (gridObj[i][j+1] && gridObj[i][j+1].value === '1') union(gridObj, gridObj[i][j+1], obj)
  if (gridObj[i][j-1] && gridObj[i][j-1].value === '1') union(gridObj, gridObj[i][j-1], obj)
}

const numIslands = (grid) => {
  if (!grid || !grid[0] || !grid[0].length) return 0;
  const n = grid[0].length;
  // 改造grid为对象
  const gridObj = grid.map((row, i) => {
    return row.map((item, j) => {
      return {
        value: item,
        parent: item === '1' ?  n * i + j + 1 : null,
      }
    })
  })

  // 构造并查集
  gridObj.forEach((row, i) => {
    row.forEach((obj, j) => {
      if (obj.value === '1') {
        unionAround(gridObj, obj, i, j);
      }
    })
  });

  const islandsNumObj = {};
  gridObj.forEach((row, i) => {
    row.forEach((obj, j) => {
      if (obj.parent) {
        islandsNumObj[obj.parent] = true;
      }
    })
  })

  return Object.keys(islandsNumObj).length;
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
  log(numIslands([
    ["1","0","1","1","1"],
    ["1","0","1","0","1"],
    ["1","1","1","0","1"]
  ]));
})();