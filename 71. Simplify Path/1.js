/**
 * 2023-12-11
 * 用栈做的话，还是挺麻烦的。理论上还是正则最好用，但是先不用正则
 * 明确几个规则就行：
 * 1. 以目录名作为单位输入，形成一个目录名之后push一次
 * 2. 如果连续输入.和/，那么直接不push
 * 3. 如果连续输入../，那么需要原数组出栈
 * 4. 如果连续输入/，则视为输入一个/
 * 
 * 写了一些，发现太麻烦了
 * 然后去看答案，发现答案非常简洁
 */

const { log } = console;

const PathType = Object.freeze({
  BACK: 'back',
  CURRENT: 'current',
})

const checkPath = (singlePath) => {
  let modifySinglePath = singlePath.replace(/\/+/g, '/');
  const dotReg = new RegExp(/\.{3,}/g);
  if (!dotReg.test(modifySinglePath)) {
    if (modifySinglePath.indexOf('.') === -1) {
      return modifySinglePath;
    } else if (modifySinglePath.indexOf('..') !== -1) {
      return PathType.BACK;
    } else if (modifySinglePath.indexOf('.') !== -1) {
      return PathType.CURRENT;
    }
  }
  return modifySinglePath;
}

const simplifyPath = (path) => {
  const stack = [];
  const pathArray = path.split('');
  let currentFolder = '';
  for (let i = 0; i < pathArray.length - 1; i++) {
    const item = pathArray[i];
    if (i === 0 && item === '/') {
      stack.push('/');
      continue;
    }
    const nextItem = pathArray[i+1];
    const newCurrent = currentFolder + item;
    // log('newCurrent0:', newCurrent);
    if (item === '/' && nextItem !== '/') {
      log('newCurrent:', newCurrent);
      log(checkPath(newCurrent));
      currentFolder = '';
    }
    currentFolder += item;
  }
};

(() => {
  log(simplifyPath("/a/./b/../../c/"));
  // log(checkPath('aa///'));
})()