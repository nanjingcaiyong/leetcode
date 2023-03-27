/**
 * 88. 合并两个有序数组
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
*/


// var merge = function(nums1, m, nums2, n) {
//     nums1.length = m;
//     nums2.length = n;
//     nums1.splice(m, m, ...nums2)
//     nums1 = nums1.sort((a, b) => a - b)
//     return nums1
// };


// var merge = function (nums1, m, nums2, n) {
//     let left = 0, right = 0, temp = [], index = -1, length = m + n;
//     while(++index < length) {
//         if (left === m) {
//             temp.push(nums2[right])
//             ++right
//         } else if (right ===n) {
//             temp.push(nums1[left])
//             ++left
//         } else if (nums1[left] < nums2[right]) {
//             temp.push(nums1[left])
//             ++left
//         } else {
//             temp.push(nums2[right])
//             ++right
//         }
//     }
//     temp.forEach((t, index) => {
//         nums1[index] = t
//     })
//     return nums1
// }


var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1, length = m + n - 1;
    while(p1 >= 0 || p2 >= 0) {
        if (p1 === -1){
            nums1[length--] = nums2[p2--]
        } else if (p2 === -1) {
            nums1[length--] = nums1[p1--]
        } else if (nums1[p1] <= nums2[p2]) {
            nums1[length--] = nums2[p2--]
        } else {
            nums1[length--] = nums1[p1--]
        }
    }
    return nums1
}

console.log(merge([1,2,3,0,0], 3, [2,5,6], 3))
// console.log(merge([0], 0, [1], 1))
