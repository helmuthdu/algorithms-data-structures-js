const maxPathFromTheLeftTopCorner = require('./maxpathfromthelefttopcorner');

describe('maxPathFromTheLeftTopCorner', () => {
  test('method exists', () => {
    expect(maxPathFromTheLeftTopCorner).toBeDefined();
  });

  test('find bigger number', () => {
    expect(
      maxPathFromTheLeftTopCorner([
        [9, 9, 7],
        [9, 7, 2],
        [6, 9, 5],
        [9, 1, 2],
      ]),
    ).toEqual('997952');
  });

  test('array with same values', () => {
    expect(
      maxPathFromTheLeftTopCorner([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]),
    ).toEqual('111111');
  });

  test('one line', () => {
    expect(
      maxPathFromTheLeftTopCorner([[1, 4, 5, 6]]),
    ).toEqual('1456');
  });
});
