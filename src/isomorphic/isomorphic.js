// --- Directions
// Two strings str1 and str2 are called isomorphic if
// there is a one to one mapping possible for every
// character of str1 to every character of str2.
// And all occurrences of every character in ‘str1’ map
// to same character in ‘str2’
// --- Example
//   ('ABC','XYZ') //true
//   ('ABCCBA','XYZZYX') //true
//   ('ABCABC','XYXXYX') //false

const isomorphic = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = {};

  for (let i = 0; i < str1.length; i++) {
    const a = str1[i];
    const b = str2[i];

    if (typeof map[a] === 'undefined') {
      map[a] = b;
    } else if (map[a] !== b) {
      return false;
    }

    for (let key in map) {
      if (key !== a && b === map[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = isomorphic;
