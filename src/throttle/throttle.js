const throttle = (fn, limit) => {
  let running;
  return function() {
    if (!running) {
      fn.apply(this, arguments);
      running = true;
      setTimeout(() => (running = false), limit);
    }
  };
};

module.exports = throttle;
