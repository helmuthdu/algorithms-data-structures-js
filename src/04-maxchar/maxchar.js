// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = str => {
  let max = 0;
  let maxChar = '';
  let dict = {};

  for (let char of str) {
    dict[char] = (dict[char] || 0) + 1;

    if (dict[char] > max) {
      max = dict[char];
      maxChar = char;
    }
  }

  return maxChar;
};

module.exports = maxChar;
