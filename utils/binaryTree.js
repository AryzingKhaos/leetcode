/**
 * 二叉树相关的基础函数
 */



const { log } = console;

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


// 翻转二叉树
const invertTree = (root) => {
  if (!root) {
    return null;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};


// 层序遍历
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


// 中序遍历
const dfsMiddle = (root) => {
  const finalArray = [];
  const dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    finalArray.push(root.val);
    dfs(root.right);
  }
  dfs(root);
  return finalArray;
}


(() => {
  log(dfsMiddle(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(6),
    )
  ));
})()