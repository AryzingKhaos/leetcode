
/**
 * 第一次思考的思路（大概思考3min）：
 * 1.层序遍历二叉树，使得二叉树的值push进一个数组中，保证每层一个数组
 *  格式大概如：[[1], [2, 3], [4, 5, null, 7]]
 * 2.计算每层中，去除左右的null结点后，数组的长度
 * 3.难点在保证每层一个数组。所以要使用另一个depth数组，维护深度
 * 
 * 本方法不使用递归（使用递归比较简单）
 * 
 * 然后想了一下，还需要插入一步：
 * 0.把root节点的value设为1， 把所有的节点的value值变成他的父节点的值x2（左子树再减1），值会变成这样
 *        1
 *    1       2
 *  1   2    3   4
 * 1 2 3 4  5 6 7 8
 * 就是方法transBinaryTree
 * 这样最每层的最左和最右的值相减+1，就是宽度
 * 
 * 此方法AC了110/113个案例，最后三个无法AC的案例需要用数组转二叉树调试
 * 【后来知道】标准答案的逻辑的js代码也是AC到110/113，推测这里js压根就是无法通过的。
 * 算是【AC】
 * 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { log } = console;

const transBinaryTree = (node, parentVal, isLeft) => {
  if (!node) return;
  node.val = parentVal * 2 - (isLeft ? 1 : 0);
  transBinaryTree(node.left, node.val, true);
  transBinaryTree(node.right, node.val, false);
}

const widthOfBinaryTree = (root) => {
  if (!root) return 0;
  let node = root;
  let depth = 0;
  const arr = [];
  const tempArr = [];
  const depthArr = [0];
  root.val = 1;
  transBinaryTree(root.left, root.val, true);
  transBinaryTree(root.right, root.val, false);
  while(node) {
    depth = depthArr.shift();
    arr.push({
      val: node.val,
      depth,
    });
    if (node.left) {
      tempArr.push(node.left);
      depthArr.push(depth+1);
    }
    if (node.right) {
      tempArr.push(node.right);
      depthArr.push(depth+1);
    }

    // 获取下一个node
    node = tempArr.shift();
  }
  
  let tempArr2 = [arr[0].val];
  const finalArr = [];
  for (let i = 1; i < arr.length; i++){
    if (arr[i - 1].depth !== arr[i].depth) {
      finalArr.push(tempArr2);
      tempArr2 = [];
    }
    tempArr2.push(arr[i].val);
  }
  finalArr.push(tempArr2);

  return finalArr.map(itemArr => {
    return itemArr[itemArr.length - 1] - itemArr[0];
  })
  .reduce((max, item) => Math.max(max, item), 0) + 1;
};

(() => {
  // log(widthOfBinaryTree({
  //   val: 1,
  //   left: {
  //     val: 3,
  //     left: {
  //       val: 5
  //     },
  //     right: {
  //       val: 3
  //     }
  //   },
  //   right: {
  //     val: 2,
  //     right: {
  //       val: 9
  //     }
  //   }
  // })); // 4

  // log(widthOfBinaryTree({
  //   val: 1,
  //   left: {
  //     val: 3,
  //     left: {
  //       val: 5
  //     },
  //     right: {
  //       val: 3,
  //     },
  //   },
  // })); // 2

  // log(widthOfBinaryTree({
  //   val: 1,
  //   left: {
  //     val: 3,
  //     left: {
  //       val: 5
  //     },
  //   },
  //   right: {
  //     val: 2,
  //   }
  // })); // 2

  log(widthOfBinaryTree({
    val: 1,
    left: {
      val: 3,
      left: {
        val: 5,
        left: {val: 6},
      },
    },
    right: {
      val: 2,
      right: {
        val: 9,
        right: {val: 7}
      }
    }
  })); // 2
})();
