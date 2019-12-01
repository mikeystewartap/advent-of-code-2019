const _ = require("lodash");

module.exports = function answer(input) {
  var totalFuelAmount = 0;
  _.split(input, "\n").map(mass => {
    totalFuelAmount += Math.floor(parseInt(mass) / 3) - 2;
  });
  return totalFuelAmount;
};
