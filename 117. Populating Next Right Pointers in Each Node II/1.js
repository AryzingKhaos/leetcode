/**
 * 2023-12-26
 * 感觉跟637很像，可以先用数组存储一层，然后对每一层都填充next
 * 
 * 方法是可以一次AC的，但是题目里要求使用常量级额外空间（递归的隐式栈空间不计入额外空间复杂度）
 * 所以还是要看看答案，请见answer.js
 * 
 */

const { log } = console;

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

const fillNext = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const nextItem = arr[i+1];
    if (i === arr.length - 1) {
      item.next = null;
      break;
    }
    item.next = nextItem;
  }
}

const connect = (root) => {
  let level = [root];
  let i = 0;
  let nextLevel = [];
  let fillNextLevel = [];
  while (level[i]){
    const item = level[i];
    fillNextLevel.push(item);
    if (item.left) {
      nextLevel.push(item.left);
    }
    if (item.right) {
      nextLevel.push(item.right);
    }
    if (i === level.length - 1) {
      fillNext(fillNextLevel);
      fillNextLevel = [];
      level = nextLevel;
      nextLevel = [];
      i = 0;
      continue;
    }
    i ++;
  }
  return root;
};

(() => {
  log(connect(
    new Node(
      1,
      new Node(2, new Node(4), new Node(5)),
      new Node(3, null, new Node(7)),
    )
  ));

  // log(connect(
  //   new Node(
  //     3,
  //     new Node(9, new Node(15), new Node(7)),
  //     new Node(20),
  //   )
  // ));
})()