/**
 * 简单题
 * 根据二叉搜索树的性质直接做就行
 * 关键是这个最小值存在哪，毕竟是要递归的
 * 
 * 这个解法不对
 */

const { log } = console;

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


const getLeftOrRight = (root) => {
  if (!root.left && !root.right) {
    return Infinity;
  }
  if (!root.left && root.right) {
    return Math.abs(root.val - root.right.val);
  }
  if (root.left && !root.right) {
    return Math.abs(root.val - root.left.val);
  }
  return Math.min(Math.abs(root.val - root.left.val), Math.abs(root.val - root.right.val));
}

const getMinimumDifference = (root, min = Infinity) => {
  if (!root) {
    return min;
  }
  const leftOrRight = getLeftOrRight(root);
  if (leftOrRight < min) {
    min = leftOrRight;
  }
  return Math.min(min, getMinimumDifference(root.left, min), getMinimumDifference(root.right, min));
};

(() => {
  log(getMinimumDifference(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(6),
    )
  ));
  log(getMinimumDifference(
    new TreeNode(
      5,
      new TreeNode(0),
      new TreeNode(48, new TreeNode(12), new TreeNode(409)),
    )
  ));
})()