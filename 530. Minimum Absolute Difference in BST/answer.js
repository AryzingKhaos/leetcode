/**
 * 需要预先知道二叉树搜索树的一个性质：即中序遍历一定是大小差距最小的值相邻的
 * 如果只是直接对比root和root的左右的话，和root最小差距的值可能是root.left.right，这样是对比不到的
 * 但是中序遍历可以解决这个问题。
 * 所以这题直接中序遍历即可
 */

var getMinimumDifference = function(root) {
  let ans = Number.MAX_SAFE_INTEGER, pre = -1;
  const dfs = (root) => {
      if (root === null) {
          return;
      }
      dfs(root.left);
      if (pre == -1) {
          pre = root.val;
      } else {
          ans = Math.min(ans, root.val - pre);
          pre = root.val;
      }
      dfs(root.right);
  }
  dfs(root);
  return ans;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/minimum-absolute-difference-in-bst/solutions/443276/er-cha-sou-suo-shu-de-zui-xiao-jue-dui-chai-by-lee/