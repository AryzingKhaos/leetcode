/*
 * @Date: 2022-03-31 14:07:33
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-03-31 15:00:16
 * @FilePath: /generationNovel/Users/luoxiongze/files/我的坚果云/代码库/leetcode/promise/Promise N Lines/1.js
 */

/**
 * 1.设一个请求队列queue，初始化的时候，将n个数据push到queue里。并且对每个请求，都需要返回result和这个请求在queue里的index
 * 2.我们可以用Promise.race来判断哪个请求先执行完，得到result和index
 * 3.获取index后，在queue[index]上更新这个index对应的Promise。这个promise同时也需要返回result和index。
*/

{
  // 以下代码需要在浏览器环境运行

  const { log } = console;

  const nLinesPromise = (pool, n) => {
    const queue = pool.slice(0, n+1).map((fn, index) => {
      return fn().then(res => {
        return {res, index};
      });
    });
    pool.slice(n+1).forEach(fn => {
      const { index } = Promise.race(queue);
      queue[index] = fn().then(res => {
        console.log('promise completed');
        return {res, index};
      });
    });

    return Promise.allSettled(pool.map(fn => fn()));
  }

  (() => {
    const pool = [
      "https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg",
      "https://www.kkkk1000.com/images/getImgData/gray.gif",
      "https://www.kkkk1000.com/images/getImgData/Particle.gif",
      "https://www.kkkk1000.com/images/getImgData/arithmetic.png",
      "https://www.kkkk1000.com/images/getImgData/arithmetic2.gif",
      "https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg",
      "https://www.kkkk1000.com/images/getImgData/arithmetic.gif",
      "https://www.kkkk1000.com/images/wxQrCode2.png",
    ].map(item => {
      return () => new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
          resolve(item);
        };
        img.onerror = reject;
        img.src = item;
      });
    })
    log(nLinesPromise(pool, 3));
  })();
}
