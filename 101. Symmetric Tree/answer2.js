/**
 * 迭代用的方法就公式化，必须用队列
 */

 const check = (u, v) => {
  const q = [];
  q.push(u),q.push(v);

  while (q.length) {
      u = q.shift();
      v = q.shift();

      if (!u && !v) continue;
      if ((!u || !v) || (u.val !== v.val)) return false;

      q.push(u.left); 
      q.push(v.right);

      q.push(u.right); 
      q.push(v.left);
  }
  return true;
}
var isSymmetric = function(root) {
  return check(root, root);
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/symmetric-tree/solutions/268109/dui-cheng-er-cha-shu-by-leetcode-solution/