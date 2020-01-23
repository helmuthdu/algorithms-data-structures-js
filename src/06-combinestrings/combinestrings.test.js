const combine = require('./combinestrings');

describe('reverse int', () => {
  test('method exists', () => {
    expect(combine).toBeDefined();
  });

  test('handles 0 as an input', () => {
    expect(combine('abc')).toEqual(
      expect.arrayContaining(['a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']),
    );
  });
});
