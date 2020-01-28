const steps = require('./steps');

describe('steps', () => {
  test('steps is a function', () => {
    expect(typeof steps).toEqual('function');
  });

  test('steps called with n = 3', () => {
    expect(steps(3)).toEqual('#  \n## \n###\n');
  });
});
