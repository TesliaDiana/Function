'use strict';

const random = (min, max) => {
  if (typeof max === 'undefined') {
    max = min;
    min = 0;
  }
  return Math.floor((Math.random() * (max - min)) + min);
};

module.exports = { random };
