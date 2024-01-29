/*
 * @Date: 2022-03-19 14:05:33
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-19 14:36:18
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/199. Binary Tree Right Side View/2.js
 */
/**
 * 比较正统的解法：
 * 1.数组转成二叉树
 * 2.递归遍历，先遍历右子树，然后遍历左子树。
 * 3.遍历的时候，如果当前深度没有值，那么优先push右边的。如果有值，那么不做任何操作
 * 
 * 这个解法的优势是：如果改成左视图，只要改一下第二步的递归顺序（先左子树，后右子树）即可
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 层序遍历法
 */
const { log } = console;

// 数组转成二叉树
const transArrayToBinary = (array) => {
  const tree = {};
  const floor = [tree];
  array.forEach((item, index) => {
    const node = floor.shift();
    node.left = {};
    node.right = {};
    floor.push(node.left);
    floor.push(node.right);
    node.val = item;
  });
  return tree;
}

const viewTree = (tree, rightView, depth) => {
  if (!tree) return;
  if (!rightView[depth] && tree.val) {
    rightView[depth] = tree.val;
  }
  if (tree.right) viewTree(tree.right, rightView, depth + 1);
  if (tree.left) viewTree(tree.left, rightView, depth + 1);
};

const rightSideView = function(root) {
  if (!root || !root.length) return [];
  const tree = transArrayToBinary(root);
  const rightView = [];
  viewTree(tree, rightView, 0);
  return rightView;
};

(() => {
  // log(transArrayToBinary([1,2,3,null,5,null,4]));
  // log(transArrayToBinary([1,2,3]));
  // log(transArrayToBinary([]));

  log(rightSideView([1,2,3,null,5,null,4]));
  log(rightSideView([1,2,3]));
  log(rightSideView([]));
})();
