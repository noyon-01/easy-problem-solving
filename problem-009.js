//! leetcode_problem_no_258 !//

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

let str1 = "Hello World";
let str2 = "   fly me   to   the moon  ";
let str3 = "luffy is still joyboy";

console.log(lengthOfLastWord(str3));
