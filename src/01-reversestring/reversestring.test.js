const {
  reverseStringLoop,
  reverseStringArray,
  reverseStringReduce,
  reverseStringRecursion,
} = require('./reversestring');

describe('reverse string', () => {
  test.each([[reverseStringLoop], [reverseStringArray], [reverseStringReduce], [reverseStringRecursion]])(
    'should method exists',
    reverse => {
      expect(reverse).toBeDefined();
    },
  );

  test.each([[reverseStringLoop], [reverseStringArray], [reverseStringReduce], [reverseStringRecursion]])(
    'should reverse a string',
    reverse => {
      expect(reverse('abcd')).toEqual('dcba');
    },
  );

  test.each([[reverseStringLoop], [reverseStringArray], [reverseStringReduce], [reverseStringRecursion]])(
    'should reverse a string with spaces',
    reverse => {
      expect(reverse('  abcd')).toEqual('dcba  ');
    },
  );
});
