const debounce = require('./debounce');

// tell jest to mock all timeout functions
jest.useFakeTimers();

describe('debounce', () => {
  let fn;
  let debounceFn;

  beforeEach(() => {
    fn = jest.fn();
    debounceFn = debounce(fn, 1000);
  });

  test('should not call callback immediately', () => {
    // Call it immediately
    debounceFn();
    expect(fn).toHaveBeenCalledTimes(0); // func not called
  });

  test('should call callback method once after time limit', () => {
    // Call it several times with 500ms between each call
    for (let i = 0; i < 10; i++) {
      jest.runTimersToTime(500);
      debounceFn();
    }
    expect(fn).toHaveBeenCalledTimes(0); // func not called
    // wait 1000ms
    jest.runTimersToTime(1000);
    expect(fn).toHaveBeenCalledTimes(1); // func called
  });
});
