const combine = require('./combinestrings');

describe('combine strings', () => {
  test('method exists', () => {
    expect(combine).toBeDefined();
  });

  test('has all possible combination', () => {
    expect(combine('abc')).toEqual(
      expect.arrayContaining(['a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']),
    );
  });
});
