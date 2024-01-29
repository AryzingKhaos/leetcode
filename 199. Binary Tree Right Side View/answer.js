/*
 * @Date: 2022-03-19 14:38:28
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-19 15:41:15
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/199. Binary Tree Right Side View/answer.js
 */

/**
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/er-cha-shu-de-you-shi-tu-by-leetcode-solution/
 * leetcodeCn的官方答案，原语言是c++
 * 这里改写成JavaScript
 * 这个方法跟2.js里的类似，不过感觉比2.js繁琐、难理解。
 * 思路如下：
 * 传入的是根节点
 * 1.将二叉树转换成数组nodeStack，并且额外记录一个数组depthStack用于记录深度，下面是一个数组变化的例子
 * 对于二叉树：
 *    [1]
 *    [2, 3]
 *    [null, 5, null, 4] 
 * 变化如下：
 *    [1]                   [0]
 *    [3, 2]                [1, 1]
 *    [4, null, 5, null]    [2, 2, 2, 2]
 *    思路依然是用层序遍历的方法逐一遍历每个结点，并且记住每个结点的深度。
 *    注意这里遍历的时候是先把right结点放到队列中。这也是跟c++答案代码不太一样的地方。
 * 2.用一个数组rightmostValueAtDepth记录每个深度最右侧的元素
 */
const { log } = console;
const rightSideView = (root) => {
  const rightmostValueAtDepth = [];
  let max_depth = -1;

  const nodeStack = [];
  const depthStack = [];
  nodeStack.push(root);
  depthStack.push(0);

  while (nodeStack.length) {
    const node = nodeStack.shift();
    const depth = depthStack.shift();

    if (node !== null) {
      // 维护二叉树的最大深度
      max_depth = Math.max(max_depth, depth);

      // 如果不存在对应深度的节点我们才插入
      if (!rightmostValueAtDepth[depth]) {
        rightmostValueAtDepth[depth] = node.val;
      }

      if (node) {
        if (node.right){
          nodeStack.push(node.right);
          depthStack.push(depth + 1);
        }
        if (node.left) {
          nodeStack.push(node.left);
          depthStack.push(depth + 1);
        }
      }
    }
  }

  const rightView = [];
  for (let depth = 0; depth <= max_depth; ++depth) {
      rightView.push(rightmostValueAtDepth[depth]);
  }

  return rightView;
}

(() => {
  // log(rightSideView([1,2,3,null,5,null,4]));
  // log(rightSideView([1,2,3]));
  // log(rightSideView([]));

  log(rightSideView({
    val: 1,
    left: {
      val: 2,
      left: {
        val: null,
      },
      right: {
        val: 5,
      },
    },
    right: {
      val: 3,
      left: {
        val: null,
      },
      right: {
        val: 4,
      },
    },
  }));
  // log(rightSideView([1,2,3]));
  // log(rightSideView([]));
})();
