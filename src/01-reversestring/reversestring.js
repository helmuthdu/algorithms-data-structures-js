// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverseOne = str => {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
};

const reverseTwo = str =>
  str
    .split('')
    .reverse()
    .join('');

const reverseThird = str => str.split('').reduce((acc, char) => char + acc, '');

module.exports = { reverseOne, reverseTwo, reverseThird };
