'use strict';

const methods = (iface) => {
  const result = [];
  for (const keyOfiface in iface) {
    const func = iface[keyOfiface];
    if (typeof func === 'function') {
      result.push([func.name, func.length]);
    }
  }
  return result;
};

module.exports = { methods };
