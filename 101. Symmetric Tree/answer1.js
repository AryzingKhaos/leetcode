/**
 * 答案的递归写得真简练精美呀
 */


const check = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}

const isSymmetric = (root) => {
  return check(root, root);
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/symmetric-tree/solutions/268109/dui-cheng-er-cha-shu-by-leetcode-solution/





