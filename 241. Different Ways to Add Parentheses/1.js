/*
 * @Date: 2022-04-01 14:30:37
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-01 14:32:56
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/241. Different Ways to Add Parentheses/1.js
 */

/**
 * 对于题目其实可以分解成：先执行哪一步运算
 * 步骤
 * 1.先把字符串转化成数组，格式比如['23', '-', '15', '+', '2']这样
 * 2.获取计算符号的index，肯定分别为1、3、5等
 * 3.对[1,3,5……]这个数组做全排列，就能枚举所有的计算了。
 * 
 * 目前写算法有两个问题：
 * 1.怎么做全排列？
 * 2.全排列之后，怎么转换到计算上？
*/

