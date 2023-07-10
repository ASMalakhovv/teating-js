const delay = (callback, ms) => {
  return new Promise((resolve) => {
      return setTimeout(() => resolve(callback()), ms);
  });
};

module.exports = delay;
