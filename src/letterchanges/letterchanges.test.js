const letterChanges = require('./letterchanges');

describe('letterChanges', () => {
  test('method exists', () => {
    expect(letterChanges).toBeDefined();
  });

  test('Replace char to the next char', () => {
    expect(letterChanges('fun times!')).toEqual('gvO Ujnft!');
  });

  test('Works with numbers in the string', () => {
    expect(letterChanges('hello*3')).toEqual('Ifmmp*3');
  });
});
