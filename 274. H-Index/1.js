/**
 * 2023-11-18
 * 很容易想到先排序
 * 然后根据情况来遍历查找就行了
 * 
 * 最优解法：https://leetcode.cn/problems/h-index/solutions/2502896/gong-shui-san-xie-cong-po-ti-dao-zhu-bu-7sug6/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 因为我没理解题目意思，所以不写了
 * 下面是答案，原文是typescript的
 */
const check = function (cs, x) {
  let cnt = 0;
  for (let c of cs) {
    if (c >= x) cnt++;
  }
  return cnt >= x;
}

function hIndex(cs) {
  const n = cs.length;
  let l = 0, r = n;
  while (l < r) {
    const mid = Math.floor((l + r + 1) / 2);
    if (check(cs, mid)) l = mid;
    else r = mid - 1;
  }
  return r;
};
