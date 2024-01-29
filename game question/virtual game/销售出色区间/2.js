
/**
 * 思路是：
 * 1. 先找到一组严格的、最长的超过8的数组
 * 2. 利用1里的数组的，采用扩散法寻找这个区间
 * 
 * todos 没写完
*/

const { log } = console;

const isValid = (arr) => {
  let succussNum = 0, failNum = 0;
  arr.forEach(item => {
    if (item > 8) succussNum++;
    else failNum++;
  })
  return succussNum > failNum;
}

const isDef = (value) => value !== undefined && value !== null;

const findLongestBig8SubArr = (arr) => {
  let longest = 0;
  let start, end, finalStart = 0, finalEnd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 8) {
      if (!isDef(start)) start = i;
      end = i;
      if (end - start + 1 > longest){
        longest = end - start + 1;
        finalStart = start;
        finalEnd = end;
      }
    } else {
      start = undefined;
      end = undefined;
    }
  }
  return {finalStart, finalEnd}
}

const longestESR = (sales) => {
  const {finalStart: big8Start, finalEnd: big8End} = findLongestBig8SubArr(sales);
  let start = big8Start, end = big8End;
};

(() => {
  // log(longestESR([10,2,1,4,3,9,6,9,9]));
  // log(longestESR([6,9,9, 6]));
  // log(longestESR([9,6,9,6,9,6,9,6,9]));
  log(longestESR([8,12,7,6,10,10,9,11,12,6]));
  
})();

