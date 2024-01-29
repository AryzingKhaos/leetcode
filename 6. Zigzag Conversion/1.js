/**
 * 初步看就是总结规律
 * 第一行的上间隔是0，下间隔是：numRows-1 + numRows-2，记为startSpace
 * 第二行的上间隔是：startSpace+2，下间隔是：startSpace-2
 * 第三行的上间隔是：startSpace + 2x2，下间隔是：startSpace - 2x2
 * 递推公式是：上间隔startSpace + (rows-1)x2，下间隔是：startSpace - (rows-1)x2
 * 
 * 其实可以稍微简单一点
 * 先算出第一行的下标
 * 逻辑是一次AC了，也确实是O(n)的
 */

const { log } = console;

const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }
  if (numRows === s.length) {
    return s;
  }
  let firstLineStr = '';
  const firstLineIndexArray = s.split('').reduce((array, item, index) => {
    if (index % (2 * (numRows - 1)) === 0) {
      array.push(index);
      firstLineStr += item;
    }
    return array;
  }, []);

  let lineNum = 1; // 下标为1是第二行
  const lineStrArray = [firstLineStr];
  let lineStr = '';
  while(lineNum < numRows) {
    // log('lineNum:', lineNum, numRows, lineNum === numRows - 1);
    if (lineNum === numRows - 1) { // 最后一行特殊处理
      let index = firstLineIndexArray[0] + (numRows - 1); // 最后一行的第一个字母
      // log('final index:',index);
      while (index < s.length) {
        lineStr += s[index];
        index += 2 * (numRows - 1);
      }
      lineStrArray.push(lineStr);
      lineStr = '';
      break;
    } else { // 非最后一行
      let index = firstLineIndexArray[0];
      while (index < s.length) {
        const nextIndex = index + (numRows - 1) * 2;
        // log('index:',index, nextIndex);
        if (index + lineNum < s.length) {
          lineStr += s[index + lineNum]
        }
        if (nextIndex - lineNum < s.length) {
          lineStr += s[nextIndex - lineNum];
        }
        index += (numRows - 1) * 2;
      }
      lineStrArray.push(lineStr);
      lineStr = '';
      lineNum++;
    }
  }
  return lineStrArray.join('');
};


(() => {
  // log(convert("PAYPALISHIRING", 3));
  // log(convert("PAYPALISHIRING", 4));
  log(convert("ABCD", 3));
})()
