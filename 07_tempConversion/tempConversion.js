const convertToCelsius = function(temp1) {
  return +(Number((temp1 - 32) * (5 / 9))).toFixed(1);
};

const convertToFahrenheit = function(temp2) {
  return +(Number((temp2 * (9 / 5)) + 32)).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
