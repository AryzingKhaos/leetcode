/**
 * 2023-12-18
 * 2015年时用C++做过的一道题
 * 看着不太难，不知道有没有坑
 * 
 * 确实有坑，直接把l1和l2当做数组提交是不行的，因为必须用链表的方式计算。思路完全一样，就是贼麻烦
 */

const { log } = console;

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
  const l1Reverse = l1;
  const l2Reverse = l2;
  let isCarry = 0;
  const length = l1Reverse.length > l2Reverse.length ? l1Reverse.length : l2Reverse.length;
  const sumArray = [];
  for (let i = 0; i < length; i++) {
    const l1Item = l1Reverse[i] !== undefined ? l1Reverse[i] : 0;
    const l2Item = l2Reverse[i] !== undefined ? l2Reverse[i] : 0;
    const sum = l1Item + l2Item + isCarry;
    if (sum >= 10) {
      sumArray.push(sum - 10);
      isCarry = 1;
    } else {
      sumArray.push(sum);
      isCarry = 0;
    }
  }
  if (isCarry) {
    sumArray.push(1);
  }
  return sumArray;
};

(() => {
  log(addTwoNumbers([2,4,3], [5,6,4]));
  log(addTwoNumbers([0], [0]));
  log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
})()
