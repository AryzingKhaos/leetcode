/**
 * 2023-12-29
 * 我直接用一个hasVisited记录是否访问过某个节点
 * 如果没访问过，对这个节点的所有邻居做dfs，同时复制这个节点
 * 
 * hasVisited 应当记录的是Node，所以还是用 newNodeMap 吧
 * 
 * AC了，这种题在JS里还是比较难本地验证的
 */

const { log } = console;

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

const print = (node) => {
  log(node.val, node.neighbors.map(item => item.val));
}

const dfs = (node, newNodeMap) => {
  if (newNodeMap[node.val]) {
    return;
  }
  newNodeMap[node.val] = node;
  const oldNeighbors = node.neighbors;
  node.neighbors = [];
  for (let i = 0; i < oldNeighbors.length; i++) {
    const item = oldNeighbors[i];
    let newNode;
    if (newNodeMap[item.val]) {
      newNode = newNodeMap[item.val];
    } else {
      newNode = new Node(item.val, item.neighbors);
    }
    node.neighbors.push(newNode);
    dfs(newNode, newNodeMap);
  }
}

const cloneGraph = (node) => {
  if (!node) {
    return null;
  }
  const newNode = new Node(node.val, node.neighbors);
  const newNodeMap = {};
  dfs(newNode, newNodeMap);
  return newNode;
};

(() => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];
  print(cloneGraph(node1));
  print(cloneGraph(node2));
  print(cloneGraph(node3));
  print(cloneGraph(node4));
})();
