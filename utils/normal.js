
// 用来打印多个变量。
const logObject = (obj) => {
  if (typeof obj !== 'object') {
    throw 'params is not an obj';
  }

  const logArray = Object.keys(obj).reduce((arr, key) => {
    const value = obj[key];
    arr.push(`${key}:`);
    if (typeof value === 'object') {
      arr.push(`${JSON.stringify(value)};`);
    } else {
      arr.push(`${value};`);
    }
    return arr;
  }, []);

  const { log } = console;
  // log(logArray);
  log(...logArray);
}

(() => {
  const a = 1, b = 2, c = 'c', d = 'string', e = [1,2,3], f = {eft: 'ccc'};
  logObject({a,b,c,d,e,f});
  // logObject(111);
})();