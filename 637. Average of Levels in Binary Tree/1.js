/**
 * 简单题，很容易有思路
 * 主要是两个数组分别记录当前层和下一层
 * 
 * 一次AC
 */
const { log } = console;

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const calcAverage = (arr) => {
  return arr.reduce((sum, item) => {
    return sum += item;
  }, 0) / arr.length
}

const averageOfLevels = (root) => {
  let level = [root];
  let i = 0;
  let nextLevel = [];
  let calc = [];
  const finalArray = [];
  while (level[i]){
    const item = level[i];
    calc.push(item.val);
    if (item.left) {
      nextLevel.push(item.left);
    }
    if (item.right) {
      nextLevel.push(item.right);
    }
    if (i === level.length - 1) {
      finalArray.push(calcAverage(calc));
      calc = [];
      level = nextLevel;
      nextLevel = [];
      i = 0;
      continue;
    }
    i ++;
  }
  return finalArray;
};

(() => {
  log(averageOfLevels(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    )
  ));

  log(averageOfLevels(
    new TreeNode(
      3,
      new TreeNode(9, new TreeNode(15), new TreeNode(7)),
      new TreeNode(20),
    )
  ));
})()
