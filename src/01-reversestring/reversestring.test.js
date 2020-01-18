const { reverseLoop, reverseArray, reverseReduce, reverseRecursion } = require('./reversestring');

describe('reverse string', () => {
  test.each([[reverseLoop], [reverseArray], [reverseReduce], [reverseRecursion]])('should exists', reverse => {
    expect(reverse).toBeDefined();
  });

  test.each([[reverseLoop], [reverseArray], [reverseReduce], [reverseRecursion]])(
    'should reverse a string',
    reverse => {
      expect(reverse('abcd')).toEqual('dcba');
    },
  );

  test.each([[reverseLoop], [reverseArray], [reverseReduce], [reverseRecursion]])(
    'should reverse a string with spaces',
    reverse => {
      expect(reverse('  abcd')).toEqual('dcba  ');
    },
  );
});
