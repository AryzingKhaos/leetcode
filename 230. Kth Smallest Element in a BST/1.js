/**
 * 中序遍历，就一定是按照排序的数组
 * 排序数组找第K个即可。
 * 
 * 一次AC了
 * 题目要求“如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？”
 * 具体看题解吧。不算很优雅。
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/solutions/
 */

const { log } = console;

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

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

const kthSmallest = (root, k) => {
  const arr = dfsMiddle(root);
  return arr[k-1];
};

(() => {
  log(kthSmallest(
    new TreeNode(
      3,
      new TreeNode(1, null, new TreeNode(2)),
      new TreeNode(4),
    ), 1
  ));

  log(kthSmallest(
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2, new TreeNode(1), null), new TreeNode(4)),
      new TreeNode(6),
    ), 3
  ));
})()
