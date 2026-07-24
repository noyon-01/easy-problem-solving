//! leetcode_problem_no_009 !//

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  const reverse = parseFloat(x.toString().split("").reverse().join(""));
  return reverse === x;
};

const result = isPalindrome(121);
console.log(result);
