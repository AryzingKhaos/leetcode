/**
 * 图相关基础函数
 */


// 数组构成的图的深度优先遍历
const dfsDeep = (board, i, j) => {
  // 这里有一行标注节点已访问的逻辑没写，根据需求写
  const lower = 0;
  const upperCol = board.length;
  const upperVol = board[0].length;
  const direction = [[0,-1],[0,1],[-1,0],[1,0]];
  for(let d = 0; d < direction.length; d++) {
    const curDirection = direction[i];
    const yMove = i + curDirection[0];
    const xMove = j + curDirection[1];
    if (
      xMove >= lower && xMove < upperVol &&
      yMove >= lower && yMove < upperCol
      // 这里还有一个条件
    ) {
      dfsDeep(board, yMove, xMove);
    }
  }
}

