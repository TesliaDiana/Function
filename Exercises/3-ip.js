'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.').map((v) => Number(v)
  .valueOf()).reduce((a, v) => ((a << 8) + v), 0);

module.exports = { ipToInt };
