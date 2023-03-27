// // 优化前
// var removeDuplicates = function(nums) {
//   let index = -1, length = nums.length;
//   while(++index < length) {
//     if (nums[index] === nums[index + 1]) {
//       nums.splice(index, 1)
//       --index;
//       --length;
//     }
//   }
//   return nums.length
// };

// 优化后（双指针）
var removeDuplicates = function(nums) {
  let right = 1, left = 0 ,length = nums.length;
  while(right < length) {
    if (nums[right] === nums[left]) {
      ++right;
    } else {
      ++left
      nums[left] = nums[right]
    }
  }
  console.log(nums)
  return left + 1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))