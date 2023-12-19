const convertToCelsius = function() {
  let FTemp = arguments[0];
  const FACTOR = 5/9;
  let CTemp = (FTemp - 32) * FACTOR;
  CTemp = +CTemp.toFixed(1);
  return CTemp;
};

const convertToFahrenheit = function() {
  let CTemp = arguments[0];
  const FACTOR = 9/5;
  let FTemp = (CTemp * FACTOR) + 32;
  FTemp = +FTemp.toFixed(1);
  return FTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
