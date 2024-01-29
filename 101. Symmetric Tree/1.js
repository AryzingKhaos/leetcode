/**
 * 思路就是先翻转然后对比，如果一样就继续对比子树
 * 
 * 一次AC，不过题目要求用递归+迭代，去答案看看迭代
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

const compare = (root1, root2) => {
  if (!root1 && !root2) {
    return true;
  }
  if ((root1 && !root2) || (!root1 && root2)) {
    return false;
  }
  if (root1.val !== root2.val) {
    return false;
  }
  return compare(root1.left, root2.left) && compare(root1.right, root2.right);
}

const isSymmetric = (root) => {
  if (!root) {
    return true;
  }
  const invertLeft = invertTree(root.left);
  return compare(invertLeft, root.right);
};

(() => {
  log(isSymmetric(new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3)),
  )));
})()
