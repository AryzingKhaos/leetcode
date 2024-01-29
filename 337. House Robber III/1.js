/*
 * @Date: 2022-04-12 14:47:27
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 11:10:57
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/337. House Robber III/1.js
 */

/**
 * 一眼动态规划：
 * 1.对每个结点都记录parent值
 * 2.在每个结点都记录到这个节点为止能获取的最大金额
 * 3.对于每个结点，其最大金额的值 = max(parent的最大金额, parent.parent的最大金额 + 当前金额)
 * 
 * 仔细思考之后：
 * 这是一个自底向上的方法
 * 1.先给每个node都添加parent属性
 * 2.获取到所有的叶子节点，push到一个数组leafArr中
 * 3.对于leafArr，遍历它，对每个节点都获取useSelfSum和unUseSelfSum，分别是使用到自己结点的值的时候，以这个结点为根结点的树，所能获取的最大值
 * useSelfSum是使用到当前结点能获取的最大值，unUseSelfSum是未使用自己能获取的最大值
 * 4.最后返回max(useSelfSum, unUseSelfSum)即可
 * 
 * 【AC】
*/

const { log } = console;

const isLeaf = (root) => !root.left && !root.right;

const addParent = (root) => {
  if (root.left) {
    root.left.parent = root;
    addParent(root.left);
  }
  if (root.right) {
    root.right.parent = root;
    addParent(root.right);
  }
}

const collectLeafNode = (root, leafArr) => {
  if (isLeaf(root)) {
    leafArr.push(root);
    return;
  }
  if (root.left) collectLeafNode(root.left, leafArr);
  if (root.right) collectLeafNode(root.right, leafArr);
}

const initNodeArr = (nodeArr) => {
  let i = 0;
  while(i < nodeArr.length) {
    if (nodeArr[i].parent) nodeArr.push(nodeArr[i].parent);
    i++;
    if (i > 1000000) break;
  }
}

const traverseNode = (nodeArr) => {
  nodeArr.forEach(item => {
    if (!item.useSelfSum && !item.unUseSelfSum) {
      if (item.left && !item.right) {
        item.useSelfSum = item.left.unUseSelfSum + item.val;
        item.unUseSelfSum = Math.max(item.left.useSelfSum, item.left.unUseSelfSum);
      }
      if (!item.left && item.right) {
        item.useSelfSum = item.right.unUseSelfSum + item.val;
        item.unUseSelfSum = Math.max(item.right.useSelfSum, item.right.unUseSelfSum);
      }
      if (item.left && item.right) {
        item.useSelfSum = item.left.unUseSelfSum + item.right.unUseSelfSum + item.val;
        item.unUseSelfSum = Math.max(item.left.unUseSelfSum, item.left.useSelfSum) + Math.max(item.right.unUseSelfSum, item.right.useSelfSum);
      }
    }
  })
}

const rob = (root) => {
  addParent(root);
  const leafArr = [];
  collectLeafNode(root, leafArr);
  leafArr.forEach(item => {
    item.useSelfSum = item.val;
    item.unUseSelfSum = 0;
  });
  const nodeArr = leafArr.concat([]); // 浅拷贝
  initNodeArr(nodeArr);
  traverseNode(nodeArr);
  // log(nodeArr);
  return Math.max(root.useSelfSum, root.unUseSelfSum);
};

(() => {
  const node1 = { left: null, right: null, val: 1 };
  const node2 = { left: null, right: null, val: 2 };
  const node3 = { left: null, right: null, val: 3 };
  const node4 = { left: null, right: null, val: 4 };
  const node5 = { left: null, right: null, val: 5 };
  const node6 = { left: null, right: null, val: 6 };
  const node7 = { left: null, right: null, val: 7 };
  const node8 = { left: null, right: null, val: 8 };

  const node21 = { left: node1, right: node2, val: 3};
  const node22 = { left: node3, right: node4, val: 1};

  const node31 = { left: node21, right: node22, val: 4};
  log(rob(node31));
})();


