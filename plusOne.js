/**
 *  66. 加一
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 */

// 需要考虑9+1,前面需要补位的情况

var plusOne = function(digits) {
  let length = digits.length
  while(length--) {
      if(digits[length] === 9) {
          digits[length] = 0
          continue;
      } else {
          ++digits[length]
          return digits
      }
  }
  digits.unshift(1); // 时间换空间
  return digits
};


var plusOne = function(digits) {
  let length = digits.length
  while(length--) {
      if(digits[length] !== 9) {
        ++digits[length]
        return digits             // step1
      } else {
        digits[length] = 0;
        continue
      }
  }
  // 走到这里必然全是9，不然在step1处就返回了
  digits = new Array(digits.length + 1).fill(0); // 空间换时间
  digits[0] = 1
  return digits
}
console.log(plusOne([9]))