/**
 * 2024-01-14
 * 试试parseInt
 * 
 * 对于特别大的数就不行了，因为有安全数限制
 */

const { log } = console;

const addBinary = (a, b) => {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

(() => {
  log(addBinary('11', '1'));
  log(addBinary('1010', '1011'));
})()


