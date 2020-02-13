// --- Directions
// Have the function LetterChanges(str) take the str parameter
// being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following
// it in the alphabet (ie. c becomes d, z becomes a). Then capitalize
// every vowel in this new string (a, e, i, o, u) and finally return
// this modified string.
// --- Examples
// letterChanges("hello*3") === "Ifmmp*3"
// letterChanges("fun times!") === "gvO Ujnft!"

const letterChanges = str => {
  const letter = /[a-zA-Z]/gi;
  const vowels = /[aeiou]/gi;
  const number = /[0-9]/gi;
  let out = '';
  for (let char of str) {
    const nextChar = char.match(number) || !char.match(letter) ? char : String.fromCharCode(char.charCodeAt(0) + 1);
    out = out + (String(nextChar).match(vowels) ? nextChar.toUpperCase() : nextChar);
  }
  return out;
};

module.exports = letterChanges;
