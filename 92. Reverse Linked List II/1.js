/**
 * 主要是链表的一些基本方法比较重要，可以去看本项目虾的utils/link.js
 * 本题思路主要是直接给翻转链表的方法传入head和tail即可
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const { log } = console;
const stringifyLog = (val) => log(JSON.stringify(val));


// 数组转链表
const arrayToLink = (arr) => {
  const head = new ListNode(null, null);
  if (!arr || !arr.length) {
    return head;
  }
  let cur = head;
  arr.forEach((item, index) => {
    cur.val = item;
    const isFinal = index === arr.length - 1;
    if (isFinal) {
      cur.next = null;
    } else {
      cur.next = new ListNode(null, null);
      cur = cur.next;
    }
  })
  return head;
}

// 翻转链表（链表的中间一段的翻转，限定tail）
const reverseLink = (head, tail) => {
  const tailNext = tail.next;
  if (head === tail) {
    return head;
  }
  if (head.next === tail) {
    tail.next = head;
    head.next = tailNext;
    return tail;
  }
  let pre = head;
  let cur = head.next;
  let next = cur.next;
  while (cur !== tailNext) {
    cur.next = pre;

    // 更新
    pre = cur;
    cur = next;
    next = cur?.next;
  }
  head.next = tailNext;
  return tail;
}

// 翻转链表（链表的中间一段的翻转，限定num是从head开始数第几位为tail）
const reverseLinkByNum = (head, num) => {
  let index = num;
  let cur = head;
  while (index !== 0 && cur !== null) {
    cur = cur.next;
    index--;
  }
  const tail = cur;

  // 如果没数到num，那么返回null
  if (index !== 0) {
    return null;
  }
  return reverseLink(head, tail);
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  let reverseHead = head, reversedHeadPre;
  let index = left - 1;
  while (index !== 0) {
    reversedHeadPre = reverseHead;
    reverseHead = reverseHead.next;
    index--;
  }
  let reversedHead;
  if (left === right) {
    reversedHead = reverseHead;
  } else {
    const reverseNum = right - left;
    reversedHead = reverseLinkByNum(reverseHead, reverseNum);
  }

  // 处理左侧为开头的特殊情况
  if (left === 1) {
    return reversedHead;
  }
  reversedHeadPre.next = reversedHead;
  return head;
};


(() => {
  // stringifyLog(reverseBetween(arrayToLink([1,2,3,4,5]), 2, 4));
  // stringifyLog(reverseBetween(arrayToLink([1,2,3,4,5,6,7,8,9,10]), 3, 7));
  // stringifyLog(reverseBetween(arrayToLink([5]), 1, 1));
  // stringifyLog(reverseBetween(arrayToLink([3,5]), 1, 2));
  // stringifyLog(reverseBetween(arrayToLink([3,5]), 2, 2));
  stringifyLog(reverseBetween(arrayToLink([1,2,3]), 1, 3));
})()
