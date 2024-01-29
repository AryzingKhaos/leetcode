/*
 * @Date: 2022-03-28 16:55:54
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:25:38
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/22. Generate Parentheses/answer.js
 */

/**
 * https://leetcode-cn.com/problems/generate-parentheses/solution/gua-hao-sheng-cheng-by-leetcode-solution/
 * 题解过于抽象
 * 建议直接参考这个解法：
 * class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> list = new ArrayList<>();
        dfs(n, list, "", 0);
        return list;
    }

    private void dfs(int n, List<String> list, String str, int count) {
        int len = str.length();
        if (len == 2 * n) {
            if (count == 0) {
                list.add(str);
            }
            return;
        }
        //  避免左括号的数量大于右括号的数量
        if (count + 1 <= n&& count + 1 < 2 * n - len) {
            dfs(n, list, str + "(", count + 1);
        }
        //  有左括号时，再添加右括号
        if (count > 0) {
            dfs(n, list, str + ")", count - 1);
        }

    }
}
【AC】
*/


const { log } = console;

const generateParenthesis = (n) => {
  const list = [];
  dfs(n, list, "", 0);
  return list;
};

const dfs = (n, list, str, count) => {
  let len = str.length;
  if (len === 2 * n) {
      if (count === 0) {
          list.push(str);
      }
      return;
  }
  //  避免左括号的数量大于右括号的数量
  if (count + 1 <= n && count + 1 < 2 * n - len) {
      dfs(n, list, str + "(", count + 1);
  }
  //  有左括号时，再添加右括号
  if (count > 0) {
      dfs(n, list, str + ")", count - 1);
  }
}


(() => {
  log(generateParenthesis(3))
})()
