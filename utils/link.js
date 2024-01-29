/**
 * 这里写的是有关链表的工具函数
 * 注意节点必须用 new ListNode()
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const { log } = console;
const stringifyLog = (val) => log(JSON.stringify(val));

// 链表转数组
const linkToArray = (link) => {
  const arr = [];
  let cur = link;
  while(cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return arr;
}

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

// 翻转链表（链表的中间一段的翻转，限定num是从head开始数第几位为tail。注意下标从0开始，部分链表题下标从1开始的）
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

(() => {
  // stringifyLog(arrayToLink([1,2,3,4,5]));
  stringifyLog(reverseLinkByNum(arrayToLink([1,2,3,4,5]), 4));
})()

