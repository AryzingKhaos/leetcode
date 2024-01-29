/*
 * @Date: 2022-03-18 16:17:59
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-19 15:02:35
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/199. Binary Tree Right Side View/1.js
 */
/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * 可以说是作弊解法，压根不管是不是二叉树
 * 不知道为什么这个解法在这里打印出来的，跟在系统中打印出来的不一样。【后来知道】：题目的输入输出不严谨。输入并不是数组，而是根节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 层序遍历法
 */
const { log } = console;

const divideBinaryArray = (root) => {
  // 因为传入的数组长度一定为1、3、7、15、31……（pow(2, n+1) - 1）,所以可以分割数组
  const floorArr = [];
  let tempArr = [];
  let n = 0;
  root.forEach((item, index) => {
    tempArr.push(item);
    if (index + 1 === Math.pow(2, n+1) - 1) {
      floorArr.push(tempArr);
      tempArr = [];
      n++;
    }
  });
  // 返回的数据类似[ [1], [2, 3], [null, 5, null, 4] ]
  return floorArr;
}

const getRightSideViewByDivideBinaryArray = (floorArr) => {
  const rightView = [];
  // 这里虽然是个双循环，但是次数依然是n。时间复杂度不是n2.
  for(let i = 0; i < floorArr.length; i++){
    for (let j = floorArr[i].length - 1; j >=0; j--){
      if (floorArr[i][j]){
        rightView.push(floorArr[i][j]);
        break;
      }
    }
  }
  return rightView;
}

const rightSideView = function(root) {
  if (!root || !root.length) return [];
  const floorArr = divideBinaryArray(root);
  return getRightSideViewByDivideBinaryArray(floorArr);
};

const run = () => {
  log(rightSideView([1,2,3,null,5,null,4]));
  log(rightSideView([1,2,3]));
  log(rightSideView([]));
}

run();

