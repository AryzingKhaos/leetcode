/*
 * @Date: 2022-04-01 16:45:49
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-01 17:08:35
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/241. Different Ways to Add Parentheses/answer.js
 */

/**
 * https://leetcode-cn.com/problems/different-ways-to-add-parentheses/solution/pythongolang-fen-zhi-suan-fa-by-jalan/
 * 这不是官方答案。
 * 主要思路是递归。对字符串expression进行遍历，如果遇到+-*，就让left = diffWaysToCompute前面的字符，right = diffWaysToCompute后面的字符
 * 递归解决问题
 * 对于边界情况：
 * 1.字符串里没有+-*了，就直接返回字符
 * 
 * 【未完成】
 * 这个属于答案都看不懂
*/