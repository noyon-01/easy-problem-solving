//! leetcode_problem_no_066 !//

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

const digits1 = [1, 2, 3];
const digits2 = [4, 3, 2, 1];
const digits3 = [9];
console.log(plusOne(digits3));
