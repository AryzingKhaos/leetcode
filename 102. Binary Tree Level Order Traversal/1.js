/**
 * 
 * 应当作为二叉树的基本函数
 * 
 * 一次AC了
 */

const { log } = console;

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const levelOrder = (root) => {
  let level = [root];
  let i = 0;
  let nextLevel = [];
  const finalArray = [];
  while (level[i]){
    const item = level[i];
    if (item.left) {
      nextLevel.push(item.left);
    }
    if (item.right) {
      nextLevel.push(item.right);
    }
    if (i === level.length - 1) {
      finalArray.push(level.map(item => item.val));
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
  log(levelOrder(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    )
  ));
})()