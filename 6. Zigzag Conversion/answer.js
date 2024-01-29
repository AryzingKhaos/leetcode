/**
 * 答案给的这种C++的写法确实很妙，主要是flag的定义。
 */

class Solution {
  public:
      string convert(string s, int numRows) {
          if (numRows < 2)
              return s;
          vector<string> rows(numRows);
          int i = 0, flag = -1;
          for (char c : s) {
              rows[i].push_back(c);
              if (i == 0 || i == numRows -1)
                  flag = - flag;
              i += flag;
          }
          string res;
          for (const string &row : rows)
              res += row;
          return res;
      }
  };
  
  作者：Krahets
  链接：https://leetcode.cn/problems/zigzag-conversion/solutions/21610/zzi-xing-bian-huan-by-jyd/
  来源：力扣（LeetCode）
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。