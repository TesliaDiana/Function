'use strict';

const random = (min, max) => {
  if (typeof max === 'undefined') {
    max = min;
    min = 0;
  }
  return Math.floor((Math.random() * (max - min)) + min);
};

const generateKey = (length, possible) => {
  let strng = '';
  for (let i = 0; i < length; i++) {
    strng += possible[random(possible.length - 1)];
  }
  return strng;
};
module.exports = { generateKey };
