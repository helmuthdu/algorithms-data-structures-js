// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverseLoop = str => {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
};

const reverseArray = str =>
  str
    .split('')
    .reverse()
    .join('');

const reverseReduce = str => str.split('').reduce((acc, char) => char + acc, '');

const reverseRecursion = str => (str ? reverseRecursion(str.substr(1)) + str[0] : str);

module.exports = { reverseLoop, reverseArray, reverseReduce, reverseRecursion };
