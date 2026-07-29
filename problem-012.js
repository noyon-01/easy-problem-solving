//! leetcode_problem_no_125 !//
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const cleaned = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
