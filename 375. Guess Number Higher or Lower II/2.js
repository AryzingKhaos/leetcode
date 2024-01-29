/**
 * 从博弈论的角度，可以很明显发现一个规律：
 * 如果猜一个数字之后，左右两边的子数组的最大期望值差异最小，那么得到的结果是最小的
 * 这样可以正序遍历一次、逆序遍历一次
 * dp1[i]是从1开始，到i为止，需要的最小的钱
 * dp2[j]是从n开始，到n-j位置，需要的最小的钱
 * 递归解决即可
 * 极限的情况是：upper - lower为0、1、2时分别对应的情况
*/

const { log } = console;

const getMoneyAmountByUpperAndLower = (upper, lower) => {

}


const getMoneyAmount = (n) => {
}

(() => {
  log(getMoneyAmount(10));
  log(getMoneyAmount(15));
})();
