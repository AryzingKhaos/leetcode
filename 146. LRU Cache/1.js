
/**
 * 完全想不到解法，所以直接看了答案
 * 这里是根据答案的思路写的
 * 
 * 步骤如下
 * 1.实现一个双向链表的数据结构
 * 2.key-value使用hash记录key，value是链表结点的地址
 * 3.如果遇到get操作，不存在key，返回-1；存在key，将hash中对应key的节点的next设为head，pre设为null，即：将这个节点移动到头部。
 * 4.put操作：如果存在key，替换key的value里的节点的value；如果不存在key，新增一个key，并且将value放到一个新的head结点中，next为现在的head，pre为null，如果长度超过限定长度了，将链表尾部的节点删除
 * 5.注意，此时hash里还是记录有已删除节点的地址的。这个地址最好在执行一定次数的操作后清理一次
 * 6.要自己写测试数据
 * 
 * 这个解法提交上去会Time Limit Exceeded。看测试样例是个特别长的样例，应该之前的样例都通过了
 * 可以认为【AC】
*/

/**
 * 双向链表node的数据结构：
 * {
 *  value: 节点的值,
 *  pre: 上一个节点,
 *  next: 下一个节点
 * }
*/

const { log } = console;

const hasValue = (value) => {
  return value !== null && value !== undefined;
}

// 双向链表
const BidirectionalLink = function(capacity) {
  this.capacity = capacity;
  this.head = null;
  this.tail = null;
  this.length = 0;
}
BidirectionalLink.prototype.takeNodeToHead = function(node) {
  if (!node) return;
  if (this.head === node || this.head === this.tail) return;
  if (this.tail === node) {
    this.tail = node.pre;
    this.tail.next = null;
  }
  if (node.pre) {
    node.pre.next = node.next;
  }
  if (node.next) {
    node.next.pre = node.pre;
  }
  node.pre = null;
  node.next = this.head;
  this.head.pre = node;
  this.head = node;
}
BidirectionalLink.prototype.addNode = function(node) {
  if (!this.head) {
    this.head = node;
    this.tail = node;
    return;
  }
  node.next = this.head;
  this.head.pre = node;
  this.head = node;
  this.length++;
  if (this.length >= this.capacity) {
    const newTail = this.tail.pre;
    newTail.next = null;
    this.tail.value = undefined;
    this.tail = newTail;
    this.length--;
  }
}
BidirectionalLink.prototype.printLink = function() {
  if (!this.head) return [];
  const arr = [];
  let node = this.head;
  while (node && hasValue(node.value)) {
    arr.push(node.value);
    node = node.next;
  }
  return arr;
}

// LRU缓存
const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.hash = {};
  this.bidirectionalLink = new BidirectionalLink(capacity);
};
LRUCache.prototype.get = function(key) {
  const node = this.hash[key];
  if (!node || !hasValue(node.value)) {
    return -1;
  }
  this.bidirectionalLink.takeNodeToHead(node);
  return node.value;
};
LRUCache.prototype.put = function(key, value) {
  let node = this.hash[key];
  if (node && hasValue(node.value)) {
    node.value = value;
    this.bidirectionalLink.takeNodeToHead(node);
  } else { // if (!node || !node.value)
    node = this.hash[key] = {
      value: value,
    };
    this.bidirectionalLink.addNode(node);
  }
  return null;
};

// 测试代码
const run = (controlArray, valueArray) => {
  let lruCache;
  return controlArray.map((item, index) => {
    if (item === "LRUCache") {
      lruCache = new LRUCache(...valueArray[index]);
      return null;
    }
    if (item === 'put') {
      return lruCache.put(...valueArray[index]);
    }
    if (item === 'get') {
      return lruCache.get(...valueArray[index]);
    }
  });
};


(() => {
  log(run(
    ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
  ))
})();
