/**
 * 简单题
 * 第一个想到的就是递归
 * 不过写基本函数比较费时
 * 
 * 可以认为是一次AC，只不过为空时规定必须return null而不是undefined
 */

const { log } = console;

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

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

(() => {
  log(invertTree(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
})()
