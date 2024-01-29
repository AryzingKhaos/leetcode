/*
 * @Date: 2022-03-24 19:26:57
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:27:16
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/53. Maximum Subarray/answer.js
 */


/**
 * 
 * 
 * 动态规划：
 * 1.对于数组arr的每个点i，都可以求出以arr[i]为结尾的的最大子数组maxSubArr，设其值为sum[i]
 * 2.对于sum[i+1]，要么sum[i+1] === arr[i+1]，要么sum[i+1] === sum[i] + arr[i+1]
 * 3.得到转移方程: sum[i+1] = max(sum[i] + arr[i+1], arr[i+1]);
 * 4.遍历sum数组，得到最大的sum，获取其记录的子数组信息即可
 * 
 * 【未完成】
*/




