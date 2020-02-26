const isomorphic = require('./isomorphic');

describe('isomorphic', () => {
  test('is method defined', () => {
    expect(isomorphic).toBeDefined();
  });

  test('check if arrays are isomophic', () => {
    expect(isomorphic('ABC', 'XYZ')).toBeTruthy();
    expect(isomorphic('ABCCBA', 'XYZZYX')).toBeTruthy();
    expect(isomorphic('ABCABC', 'XYXXYX')).toBeFalsy();
  });
});
