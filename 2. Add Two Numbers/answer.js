/**
 * 去stack overflow抄了个答案
 * https://stackoverflow.com/questions/69904886/add-two-numbers-javascript-leetcode-error
 * 原来可以直接new ListNode，而且好像不允许直接用对象。。。
 */

var addTwoNumbers = function(l1, l2) {
  let k=new ListNode(0,null);
  let k1= k;
  let x,y,c=0;
  while(l1!=null || l2!=null){
      x = l1!=null?l1.val:0;
      y = l2!=null?l2.val:0;
      c=x+y+c;
      k1.next =new ListNode(c%10,null);
      k1 = k1.next ;
      c=parseInt(c/10);
      if(l1!=null) l1=l1.next ;
      if(l2!=null) l2=l2.next ;
  }
  
  if(c>0) {
      k1.next=new ListNode(c,null);
      k1=k1.next ;
  }

  return k.next;

};