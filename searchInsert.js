/**
 * 35. 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会* 被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length, res = right;
    while(left <= right) {
        let mid = ((right - left) >> 1) + left; // “+left”让left作为基数，让两个指针可以交叉
        if (target <= nums[mid]) {
            right = mid - 1;
            res = mid
        } else {
            left = mid + 1
        }
    }
    return res
};

console.log(searchInsert([1, 3, 5, 6, 8], 7))



