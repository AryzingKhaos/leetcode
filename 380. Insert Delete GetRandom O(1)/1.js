/**
 * 似乎不太难
 * 维护一个对象即可
 * AC了，不过确实没用O(1)的时间
 * O1时间可以考虑同时用数组和对象维护
 */


function RandomizedSet() {
  this.randomSet = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.randomSet[val]) {
    // console.log(this.randomSet);
    return false;
  } else {
    this.randomSet[val] = true;
    // console.log(this.randomSet);
    return true;
  }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.randomSet[val]) {
    delete this.randomSet[val];
    // console.log(this.randomSet);
    return true;
  } else {
    // console.log(this.randomSet);
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const arr = Object.keys(this.randomSet);
  const random = arr[Math.floor(Math.random() * arr.length)];
  // console.log(random);
  return random;
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

(() => {
  randomizedSet = new RandomizedSet();
  randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
  randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
  randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
  randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
  randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
  randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
  randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
})()




