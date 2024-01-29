/**
 * 可以用一个hash表，记录key为当前节点，value为可以到达这个节点的节点
 * 从题干中看，能到某个节点的只有一个节点
 * 这样就必定可以找到一个起点，value值为undefined。
 * 再记录一个hash，用来记录每个节点是否遍历过。从每个起点出发，只要遍历的数量跟numCourses数量相等，就可以认为遍历完成了
 */

const { log } = console;

const isDef = val => val !== null && val !== undefined;

const reverseMap = (map) => {
  return Object.keys(map).reduce((hash, item) => {
    const key = item;
    const values = map[key];
    if (!values) {
      return hash;
    }
    for (let i = 0; i < values.length; i++) {
      const valueItem = values[i];
      if (hash[valueItem]) {
        hash[valueItem].push(key);
      } else {
        hash[valueItem] = [key];
      }
    }
    return hash;
  }, {});
}

const visitGraph = (num, map, mapReverse, visited) => {
  if (visited[num]) {
    return;
  }
  visited[num] = true;
  if (!mapReverse[num] || !Array.isArray(mapReverse[num])) {
    return;
  }
  for (let i = 0; i < mapReverse[num].length; i++) {
    const item = mapReverse[num][i];
    if (checkCanVisited(item, map, visited)) {
      visitGraph(item, map, mapReverse, visited);
    }
  }
}

const checkCanVisited = (num, map, visited) => {
  const arr = map[num];
  if (!arr) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!visited[item]) {
      return false;
    }
  }
  return true;
}

const checkVisited = (numCourses, visited) => {
  const arr = Object.keys(visited);
  for (let i = 0; i < numCourses; i++) {
    const key = i;
    if (!visited[key]) {
      return false;
    }
  }
  return true;
}

const canFinish = (numCourses, prerequisites) => {
  const map = {};
  const visited = {};
  const startArray = [];
  for (let i = 0; i < prerequisites.length; i++) {
    const item = prerequisites[i];
    if (!map[item[0]]) {
      map[item[0]] = [item[1]];
    } else {
      map[item[0]].push(item[1]);
    }
  }
  for (let i = 0; i < numCourses; i++) {
    if (!isDef(map[i])) {
      map[i] = null;
      startArray.push(i);
    }
  }
  const mapReverse = reverseMap(map);
  // log('canFinish', startArray, map, mapReverse);
  for (let i = 0; i < startArray.length; i++) {
    const item = startArray[i];
    visitGraph(item, map, mapReverse, visited);
  }

  return checkVisited(numCourses, visited);
};

(() => {
  // log(reverseMap({1:2, 3:4, 5:4}))
  log(canFinish(2, [[1,0]]))
  log(canFinish(2, [[1,0],[0,1]]))
  log(canFinish(3, [[1,0],[1,2],[0,1]]))
  log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]))
})()