/**
 * 2023-12-26
 * 答案的方法1还是用了额外空间
 * 方法2优化额外空间，简单说就是第x层为第x+1层建立next指针，就是:
 * x[i].left.next = x[i].right;
 * x[i].right.next = x[i+1].left;
 * 难点在于处理null
 */

let last = null, nextStart = null;
const handle = (p) => {
    if (last !== null) {
        last.next = p;
    } 
    if (nextStart === null) {
        nextStart = p;
    }
    last = p;
}
var connect = function(root) {
    if (root === null) {
        return null;
    }
    let start = root;
    while (start != null) {
        last = null;
        nextStart = null;
        for (let p = start; p !== null; p = p.next) {
            if (p.left !== null) {
                handle(p.left);
            }
            if (p.right !== null) {
                handle(p.right);
            }
        }
        start = nextStart;
    }
    return root;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/solutions/429828/tian-chong-mei-ge-jie-dian-de-xia-yi-ge-you-ce-15/