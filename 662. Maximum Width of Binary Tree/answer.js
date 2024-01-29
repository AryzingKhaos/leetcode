/*
 * @Date: 2022-03-21 01:39:33
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:31:10
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/662. Maximum Width of Binary Tree/answer.js
 */

/**
 * https://leetcode-cn.com/problems/maximum-width-of-binary-tree/solution/er-cha-shu-zui-da-kuan-du-by-leetcode/
 * 答案跟我想的思路差不多，不过简单很多
 * 主要是：1.利用递归
 * 2.利用一个节点直接记录了node、depth、pos
 * 3.不需要记录每层的depth，只需要遇到更大的depth就更新最大值即可
 * 
 * 这个照着答案写的逻辑，也无法完全AC，也是110/113，输出NaN
 * 可能js的数据结构就是没法通过的。
 * 算是【AC】
 * 
*/

const { log } = console;

const widthOfBinaryTree = (root) => {
  const queue = [{node: root, depth: 0, pos: 0}];
  let curDepth = 0, left = 0, answer = 0, index = 0;
  while (index < queue.length){
    if (!queue[index].node){
      index++;
      continue;
    }
    queue.push({node: queue[index].node.left, depth: queue[index].depth+1, pos: queue[index].pos*2});
    queue.push({node: queue[index].node.right, depth: queue[index].depth+1, pos: queue[index].pos*2 + 1});
    if (curDepth !== queue[index].depth) { // 如果不等于，说明是该行的第一个元素
      left = queue[index].pos;
      curDepth = queue[index].depth;
    };
    answer = Math.max(answer, queue[index].pos - left + 1);
    index ++;
  }
  return answer;
}


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

  log(widthOfBinaryTree({
    val: 1,
    left: {
      val: 3,
      left: {
        val: 5
      },
      right: {
        val: 3,
      },
    },
  })); // 2

  log(widthOfBinaryTree({
    val: 1,
    left: {
      val: 3,
      left: {
        val: 5
      },
    },
    right: {
      val: 2,
    }
  })); // 2

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
  })); // 8
})();





