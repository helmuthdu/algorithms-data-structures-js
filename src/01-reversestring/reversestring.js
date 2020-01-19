// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverseStringLoop = str => {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
};

const reverseStringArray = str =>
  str
    .split('')
    .reverse()
    .join('');

const reverseStringReduce = str => str.split('').reduce((acc, char) => char + acc, '');

const reverseStringRecursion = str => (str ? reverseStringRecursion(str.substr(1)) + str[0] : str);

module.exports = {
  reverseStringLoop,
  reverseStringArray,
  reverseStringReduce,
  reverseStringRecursion,
};
