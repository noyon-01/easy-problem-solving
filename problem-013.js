//! leetcode_problem_no_136 !//
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;

  for (let num of nums) {
    result = result ^ num;
  }

  return result;
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
