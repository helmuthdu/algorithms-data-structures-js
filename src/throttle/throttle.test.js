const throttle = require('./throttle');

// tell jest to mock all timeout functions
jest.useFakeTimers();

describe('throttle', () => {
  let fn;
  let throttleFn;

  beforeEach(() => {
    fn = jest.fn();
    throttleFn = throttle(fn, 1000);
  });

  test('should call callback immediately', () => {
    // Call it immediately
    throttleFn();
    expect(fn).toHaveBeenCalledTimes(1); // func not called
  });

  test('should call callback method after time limit', () => {
    // Call it several times with 500ms between each call
    for (let i = 0; i < 10; i++) {
      jest.runTimersToTime(500);
      throttleFn();
    }
    expect(fn).toHaveBeenCalledTimes(5); // func called
    // wait 1000ms
    jest.runTimersToTime(1000);
    expect(fn).toHaveBeenCalledTimes(5); // func not called
  });
});
