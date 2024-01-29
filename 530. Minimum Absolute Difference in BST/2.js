/**
 * 2023-12-28
 * 这个解法是根据答案写的，不算自己的解法
 */


const { log } = console;

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const findMin = (array) => {
  let min = Infinity;
  for(let i = 0; i < array.length-1; i++ ){
    const item = array[i];
    const nextItem = array[i+1];
    min = Math.min(min, Math.abs(nextItem - item));
  }
  return min;
}

const getMinimumDifference = (root, min = Infinity) => {
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
  return findMin(finalArray);
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
