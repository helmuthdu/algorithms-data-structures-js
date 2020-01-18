const { reverseOne, reverseTwo, reverseThird } = require('./reversestring');

describe('reverse string', () => {
  test.each([[reverseOne], [reverseTwo], [reverseThird]])('should exists', reverse => {
    expect(reverse).toBeDefined();
  });

  test.each([[reverseOne], [reverseTwo], [reverseThird]])('should reverse a string', reverse => {
    expect(reverse('abcd')).toEqual('dcba');
  });

  test.each([[reverseOne], [reverseTwo], [reverseThird]])('should reverse a string with spaces', reverse => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
});
