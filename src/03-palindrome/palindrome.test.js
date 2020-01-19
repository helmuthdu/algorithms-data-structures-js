const palindrome = require('./palindrome');

describe('palindrome', () => {
  test('method exists', () => {
    expect(palindrome).toBeDefined();
  });

  test('"aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
  });

  test('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
  });

  test('"aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
  });

  test('"greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
  });

  test('"1000000001" a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
  });

  test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy();
  });

  test('"pennep" a palindrome', () => {
    expect(palindrome('pennep')).toBeTruthy();
  });
});
