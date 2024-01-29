/**
 * 也是以前写的答案
 * 
 */

var max = (a,b) => a >= b ? a : b
var min = (a,b) => a <= b ? a : b
var maxArea = function(height) {
    let maxarea = 0, l = 0, r = height.length - 1;
    while(l < r){
        maxarea = max(maxarea, min(height[l], height[r]) * (r-l));
        if(height[l] < height[r]) l++;
        else r--;
    }
    return maxarea;
};

