/**
 * 思路上非常简单，无非是找到0，然后将同行和同列的都置为0
 * 当然这存在很多重复操作，因为如果置为0之后，需要标记这些地方是被置为0的，所以可能需要一个特殊字符来区分，比如#
 * 但实际上其他语言是不能这么切换的，所以特殊字符的方式也最好别用。
 * 原本以为很简单，现在看来并不简单。要求原地空间是最麻烦的
 * 
 * 我能想到一个用O(n)额外空间的方法：
 * 如果是当前行发现了0，只需要全行置为0即可。然后把当前这行给放到arr里。然后下一行遍历的时候，如果遍历的index存在arr里，那么直接置为0然后下一个
 * 
 * 
 * 原地的方法也想到了，其实还是需要区分新0和旧0。
 * 新0全部置为null，然后还是用相同的遍历方法。
 * 最后只要在遍历一次，将所有的null变成0即可。
 * 这个方法一次AC了
 */

const { log } = console;

const fillRowNull = (matrix, i) => {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = null;
    }
  }
}

const fillColNull = (matrix, j) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = null;
    }
  }
}

const setZeroes = (matrix) => {
  let rows = matrix.length, cols = matrix[0].length;
  for(let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0){
        fillRowNull(matrix, i);
        fillColNull(matrix, j);
      }
    }
  }
  for(let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === null){
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

(() => {
  // log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
  log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
})()