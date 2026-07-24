//! leetcode_problem_no_383 !//

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let magazineCharacter = magazine.split("");

  for (let letter of ransomNote) {
    let position = magazineCharacter.indexOf(letter);

    if (position === -1) {
      return false;
    } else {
      magazineCharacter.splice(position, 1);
    }
  }
  return true;
};
