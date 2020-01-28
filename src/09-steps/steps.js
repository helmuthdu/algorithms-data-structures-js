// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const _steps = (number, row = 0, stair = '', stairs = '') => {
  if (row === number) return stairs;

  if (stair.length === number) {
    return _steps(number, row + 1, '', stairs + stair + '\n');
  }

  return _steps(number, row, stair + (stair.length <= row ? '#' : ' '), stairs);
};

const steps = number => {
  let stairs = '';

  for (let row = 0; row < number; row++) {
    let stair = '';

    for (let column = 0; column < number; column++) {
      stair += column <= row ? '#' : ' ';
    }

    stairs += stair + '\n';
  }

  return stairs;
};

module.exports = steps;
