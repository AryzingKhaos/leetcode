/**
 * 很容易想到递归，只要root和root.left、root.right满足，那么当前就满足
 * 实际上递归并不满足，因为root.left.right也必须小于root，但是用递归是检查不出来的。
 * 所以还是中序遍历吧
 * 
 * 一次AC了。。看来二叉搜索树大部分题目的重点就是中序遍历
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

const validate = (arr) => {
  for (let i = 0; i < arr.length - 1; i++){
    const item = arr[i];
    const nextItem = arr[i+1];
    if (item >= nextItem) {
      return false;
    }
  }
  return true;
}

const isValidBST = (root) => {
  const arr = dfsMiddle(root);
  return validate(arr);
};