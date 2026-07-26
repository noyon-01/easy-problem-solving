//! leetcode_problem_no_028 !//

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) {
    return -1;
  }
  for (let i = 0; i < haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    } else {
      return -1;
    }
  }
};

const haystack = "sadbutsad";
const needle = "sad";

console.log(strStr(haystack, needle));
