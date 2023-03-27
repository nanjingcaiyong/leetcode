// 双指针
var removeElement = function(nums, val) {
  let right = 0, left = 0, length = nums.length;
  while(right < length) {
    if (nums[right] !== val) {
      nums[left] = nums[right]
      ++left
    }
    ++right
  }
  return left
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))