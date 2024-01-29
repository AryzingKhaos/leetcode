/**
 * 跟102很像，102略加修改即可
 * 
 * 两次AC
 */


const { log } = console;

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// 这个不对
// const zigzagLevelOrder = (root) => {
//   let level = [root];
//   let i = 0;
//   let nextLevel = [];
//   const finalArray = [];
//   while (level[i]){
//     let isEvenLevel = finalArray.length % 2 === 0;
//     const item = level[i];
//     if (item.left) {
//       nextLevel.push(item.left);
//     }
//     if (item.right) {
//       nextLevel.push(item.right);
//     }
//     if (isEvenLevel) {
//       if (i === level.length - 1) {
//         finalArray.push(level.map(item => item.val));
//         level = nextLevel;
//         nextLevel = [];
//         i = 0;
//         continue;
//       }
//     } else {
//       if (i === 0) {
//         finalArray.push(level.map(item => item.val));
//         level = nextLevel;
//         nextLevel = [];
//         i = level.length - 1;
//         continue;
//       }
//     }
//     if (isEvenLevel) {
//       i++;
//     } else {
//       i--;
//     }
//   }
//   return finalArray;
// };

const zigzagReverseArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const isOdd = i % 2 === 1;
    if (isOdd) {
      array[i] = item.reverse();
    }
  }
  return array;
}

// 直接获取finalArray后，处理finalArray更简单一些
const zigzagLevelOrder = (root) => {
  let level = [root];
  let i = 0;
  let nextLevel = [];
  const finalArray = [];
  while (level[i]){
    const item = level[i];
    if (item.left) {
      nextLevel.push(item.left);
    }
    if (item.right) {
      nextLevel.push(item.right);
    }
    if (i === level.length - 1) {
      finalArray.push(level.map(item => item.val));
      level = nextLevel;
      nextLevel = [];
      i = 0;
      continue;
    }
    i ++;
  }
  return zigzagReverseArray(finalArray);
};

(() => {
  log(zigzagLevelOrder(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    )
  ));
})()