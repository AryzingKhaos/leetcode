/**
 * 2023-12-18
 * 纠结要不要再写一版能提交的
 * 纠结，细节太多了
 * 
 * 跑了一下还是出错，似乎链表的题编译器就是有点问题？
 */

const { log } = console;

const transArrayToLink = (arr) => {
  const link = {};
  let cur = link;
  arr.forEach((item, index) => {
    cur.val = item;
    if (index !== arr.length - 1) {
      cur.next = {};
    } else {
      cur.next = undefined;
    }
    cur = cur.next;
  });
  return link;
}

const printLink = (link) => {
  const arr = [];
  let cur = link;
  while(cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return arr;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let isCarry = 0;
  const sumArray = [];
  let l1Cur = l1, l2Cur = l2;
  while (l1Cur || l2Cur) {
    const l1Item = l1Cur !== undefined ? l1Cur.val : 0;
    const l2Item = l2Cur !== undefined ? l2Cur.val : 0;
    const sum = l1Item + l2Item + isCarry;
    if (sum >= 10) {
      sumArray.push(sum - 10);
      isCarry = 1;
    } else {
      sumArray.push(sum);
      isCarry = 0;
    }
    l1Cur = l1Cur?.next ? l1Cur?.next : undefined;
    l2Cur = l2Cur?.next ? l2Cur?.next : undefined;
  }
  if (isCarry) {
    sumArray.push(1);
  }
  return transArrayToLink(sumArray);
};

(() => {
  // log(addTwoNumbers({val: 2, next: {val: 4, next: {val:3, next: undefined}}}, {val: 5, next: {val: 6, next: {val:4, next: undefined}}}));
  // log(addTwoNumbers([0], [0]));
  log(printLink(addTwoNumbers(transArrayToLink([9,9,9,9,9,9,9]), transArrayToLink([9,9,9,9]))));
  // log(transArrayToLink([2,3,4]))
})()

