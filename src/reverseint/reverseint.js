// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = val => {
  const reversed = Math.abs(val)
    .toString()
    .split('')
    .reverse()
    .join('');

  return Number(reversed) * Math.sign(val);
};

module.exports = reverseInt;
