//! leetcode_problem_no_2704 !//
/**
 * @param {*} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (expected) => {
      if (val === expected) {
        return true;
      } else {
        return "Not Equal";
      }
    },
    notToBe: (expected) => {
      if (val !== expected) {
        return true;
      } else {
        return "Equal";
      }
    },
  };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(2));
