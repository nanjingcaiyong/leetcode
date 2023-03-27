// 优化前（暴力枚举法）
var twoSum = function(nums, target) {
  let index = -1, length = nums.length;
  while (++index < length) {
      let anthor = target - nums[index];
      let anthorIndex = nums.findIndex(t => t === anthor)
      if (anthorIndex !== -1 && anthorIndex !== index) {
          return [index, anthorIndex]
      }
  }
};

// 优化后
var twoSum = function(nums, target) {
  let index = 0, length = nums.length;
  let map = new Map()
  map.set(nums[0], 0)
  while (++index < length) {
    let anthor = target - nums[index]
    if (map.get(anthor) !== undefined) {
      return [map.get(anthor), index]
    }
    map.set(nums[index], index)
  }
};