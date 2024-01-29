/**
 * 似乎是挺经典的一道题，medium题
 * 题目要求O(n)时间复杂度。我先思考不止O(n)的
 * 我们记录一个hash，然后用一个数组记录到当前位置为止，这个数字的相邻数字（比如3的相邻数字是2和4）在hash里记录的长度
 * 注意数字3是可能重复的
 * 
 * 这个方法就是更新的时候要用while更新，while肯定不止O(n)了
 * 但是O(n)的方法肯定也是这种并查集思路，关键是怎么优化了
 * 当然如果不考虑O(n)，先排序（ nlogn）再找可能都很快
 */

const { log } = console;

const longestConsecutive = (nums) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (hash[item]) {
      continue;
    }
    if (hash[item-1] || hash[item+1]) {
      const pre = hash[item - 1] || 0;
      const next = hash[item + 1] || 0;
      const sum = pre + 1 + next;
      hash[item] = sum;
      if (hash[item - 1]) {
        let preUpdate = item - 1;
        while(hash[preUpdate]) {
          hash[preUpdate] = sum;
          preUpdate--;
        }
      }
      if (hash[item + 1]) {
        let nextUpdate = item + 1;
        while(hash[nextUpdate]) {
          hash[nextUpdate] = sum;
          nextUpdate++;
        }
      }

    } else if (!hash[item]) {
      hash[item] = 1;
    }
    log('hash:', hash);
  }
  let max = 0;
  for (let i in hash) {
    if (max < hash[i]) {
      max = hash[i];
    }
  }
  return max;
};

(() => {
  // log(longestConsecutive([100,4,200,1,3,2]));
  log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
})();