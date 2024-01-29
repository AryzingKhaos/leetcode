/**
 * 2023-12-24
 * 这题没写出来，属于是思路不懂就完全不懂的
 * 根据答案的描述：
 * 我们可以发现后序遍历的数组最后一个元素代表的即为根节点。
 * 知道这个性质后，我们可以利用已知的根节点信息在中序遍历的数组中找到根节点所在的下标，
 * 然后根据其将中序遍历的数组分成左右两部分，左边部分即左子树，右边部分为右子树，
 * 针对每个部分可以用同样的方法继续递归下去构造。
 * 
 */

 var buildTree = function(inorder, postorder) {
  let post_idx;
  const idx_map = new Map();
  const helper = (in_left, in_right) => {
      // 如果这里没有节点构造二叉树了，就结束
      if (in_left > in_right) {
          return null;
      }

      // 选择 post_idx 位置的元素作为当前子树根节点
      const root_val = postorder[post_idx];
      const root = new TreeNode(root_val);

      // 根据 root 所在位置分成左右两棵子树
      const index = idx_map.get(root_val);

      // 下标减一
      post_idx--;
      // 构造右子树
      root.right = helper(index + 1, in_right);
      // 构造左子树
      root.left = helper(in_left, index - 1);
      return root;
  }

  // 从后序遍历的最后一个元素开始
  post_idx = postorder.length - 1;

  // 建立（元素，下标）键值对的哈希表
  let idx = 0;
  inorder.forEach((val, idx) => {
      idx_map.set(val, idx);
  });
  return helper(0, inorder.length - 1);
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/426738/cong-zhong-xu-yu-hou-xu-bian-li-xu-lie-gou-zao-14/