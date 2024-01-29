/*
 * @Date: 2022-03-26 15:48:49
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-26 19:55:24
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/697. Degree of an Array/1.js
 */

/**
 * 题目
 * https://leetcode.cn/contest/hhrc2022/problems/o0Ma2v/
 * 
 * 实验室内有一些化学反应物，其中的任意两种反应物之间都能发生反应，且质量的消耗量为 1:1

已知初始 material[i] 表示第 i 种反应物的质量，每次进行实验时，会选出当前 质量最大 的两种反应物进行反应，假设反应物的重量分别为 i 和 j ，且 i <= j。反应的结果如下：

如果 i == j，那么两种化学反应物都将被消耗完；
如果 i < j，那么质量为 i 的反应物将会完全消耗，而质量为 j 的反应物质量变为 j - i 。
最后，最多只会剩下一种反应物，返回此反应物的质量。如果没有反应物剩下，返回 0。
*/

const { log } = console;


const lastMaterial = (material) => {
  const sortMaterial = material.sort((a, b) => b - a);
  let arr = sortMaterial.concat([]);
  while(arr.length > 1) {
    if (!arr[1]) break;
    arr[1] = Math.abs(arr[0] - arr[1]);
    arr = arr.slice(1);
    arr = arr.sort((a, b) => b - a);
  }
  return arr[0];
}

(() => {
  log(lastMaterial([10,2,9,1]));
  log(lastMaterial([10,2,6,1]));
  log(lastMaterial([7,6,7,6,5]));
  
})();

