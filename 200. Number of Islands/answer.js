/*
 * @Date: 2022-03-19 16:27:42
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-30 10:29:56
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/200. Number of Islands/answer.js
 */

/**
 * 答案跟1.js里的思路相近，本题主要考查的是图的遍历。
 * 可以使用深度优先和广度优先遍历法来遍历图。
 * 运行了一下标准答案，使用的内存达到了12Mb之多。使用js会用到45.5MB，感觉也差不多。。。
 * 因为算法跟1.js过于相像，这里记录c++的解法
 * 【AC】
 */

 class Solution {
  private:
      void dfs(vector<vector<char>>& grid, int r, int c) {
          int nr = grid.size();
          int nc = grid[0].size();
  
          grid[r][c] = '0';
          if (r - 1 >= 0 && grid[r-1][c] == '1') dfs(grid, r - 1, c);
          if (r + 1 < nr && grid[r+1][c] == '1') dfs(grid, r + 1, c);
          if (c - 1 >= 0 && grid[r][c-1] == '1') dfs(grid, r, c - 1);
          if (c + 1 < nc && grid[r][c+1] == '1') dfs(grid, r, c + 1);
      }
  
  public:
      int numIslands(vector<vector<char>>& grid) {
          int nr = grid.size();
          if (!nr) return 0;
          int nc = grid[0].size();
  
          int num_islands = 0;
          for (int r = 0; r < nr; ++r) {
              for (int c = 0; c < nc; ++c) {
                  if (grid[r][c] == '1') {
                      ++num_islands;
                      dfs(grid, r, c);
                  }
              }
          }
  
          return num_islands;
      }
  };
  