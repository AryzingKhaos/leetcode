

var simplifyPath = function(path) {
  const names = path.split("/");
  const stack = [];
  for (const name of names) {
      if (name === "..") {
          if (stack.length) {
              stack.pop();
          } 
      } else if (name.length && name !== ".") {
          stack.push(name);
      }
  }
  
  return "/" + stack.join("/");
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/simplify-path/solutions/1193258/jian-hua-lu-jing-by-leetcode-solution-aucq/