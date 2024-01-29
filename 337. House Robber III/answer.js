/**
 * 神级答案。。。
 * https://leetcode-cn.com/problems/house-robber-iii/solution/da-jia-jie-she-iii-by-leetcode-solution/
 * 每一步的先后顺序都有讲究
 * 代码特别简练
 * f(node)是使用node节点能获得的最大值
 * g(node)是不使用node节点能获得的最大值
*/

var rob = function(root) {
  const f = new Map();
  const g = new Map();

  const dfs = (node) => {
    if (node === null) {
        return;
    }
    dfs(node.left);
    dfs(node.right);
    f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
    g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0));
  }

  dfs(root);
  return Math.max(f.get(root) || 0, g.get(root) || 0);
};

