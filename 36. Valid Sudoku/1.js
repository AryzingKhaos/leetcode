/**
 * 还是比较快就有思路了
 * 主要是判断数字是否唯一的子函数，传入一个array，然后判断array中的1-9是否不重复，用hash判断
 * 父函数依次传入9行、9列、9个子宫格即可
 * 
 * 两次AC，需要注意的小细节实在太多了。可见人类的高维思维实在是差
 */

const { log } = console;

const isSolate = (array) => {
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item === '.') {
      continue;
    }
    if (hash[item] > 0) {
      return false;
    }
    hash[item] = 1;
  }
  return true;
}

const matrixTrans = (matrix) => {
  const newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    const sonArray = [];
    for (let j = 0; j < matrix[0].length; j++) {
      sonArray.push(matrix[j][i]);
    }
    newArray.push(sonArray);
  }
  return newArray;
}

// startPosition，endPosition是一个二维坐标数组
const getSubMatrixArray = (matrix, startPosition, endPosition) => {
  const startCol = startPosition[1]
  const endCol = endPosition[1]
  const startRow = startPosition[0];
  const endRow = endPosition[0];
  const finalArray = [];
  for (let i = startRow; i < endRow; i++) {
    for (let j = startCol; j < endCol; j++) {
      finalArray.push(matrix[i][j]);
    }
  }
  return finalArray;
}

const isValidSudoku = (board) => {
  const boardRow = board.concat([]);
  const boardCol = matrixTrans(board);
  const boardSon = board.map((_, index) => {
    const startCol = (index % 3) * 3;
    const endCol = (index % 3 + 1) * 3;
    const startRow = (Math.floor(index / 3)) * 3;
    const endRow = (Math.floor(index / 3) + 1) * 3;
    // log([startRow, startCol], [endRow, endCol]);
    return getSubMatrixArray(board, [startRow, startCol], [endRow, endCol])
  });
  // log(boardRow)
  // log(boardCol)
  // log(boardSon)
  for (let i = 0; i < board.length; i++) {
    if (!isSolate(boardRow[i]) || !isSolate(boardCol[i]) || !isSolate(boardSon[i])) {
      // log(isSolate(boardRow[i]), boardRow[i]);
      // log(isSolate(boardCol[i]), boardCol[i]);
      // log(isSolate(boardSon[i]), boardSon[i]);
      return false;
    }
  }
  return true;
};

(() => {
  // log(isSolate([1,2,3,4,5]))
  // log(isSolate([1,2,3,4,4,0,0]))
  // log(matrixTrans([[1,2,3], [4,5,6], [7,8,9]]))
  // log(getSubMatrixArray([[1,2,3], [4,5,6], [7,8,9]], [1,1], [2,2]))
  // log(isValidSudoku([[1,2,3], [4,5,6], [7,8,9]]))
  // log(isValidSudoku([[1,2,3,4,5,6,7,8,9],
  //   [1,2,3,4,5,6,7,8,9],
  //   [1,2,3,4,5,6,7,8,9],
  //   [1,2,3,4,5,6,7,8,9],
  //   [1,2,3,4,5,6,7,8,9],
  //   [1,2,3,4,5,6,7,8,9],
  //   [1,2,3,4,5,6,7,8,9],
  //   [1,2,3,4,5,6,7,8,9],
  //   [1,2,3,4,5,6,7,8,9],]))
  log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]))
  log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]))
  log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))
  // log(isSolate([
  //   '8', '6', '.',
  //   '8', '4', '7',
  //   '.', '.', '.'
  // ]));
})()