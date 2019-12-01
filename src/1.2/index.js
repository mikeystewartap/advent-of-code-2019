const _ = require("lodash");

module.exports = function answer(input) {

  var totalFuelAmount = 0;
  _.split(input, "\n").map(mass => {
    var moduleFuelAmount = calculateFuel(mass);
    totalFuelAmount += additionalFuel(moduleFuelAmount);
    totalFuelAmount += moduleFuelAmount;
  });

  function calculateFuel(mass) {
    return Math.floor(mass / 3 - 2);
  }

  function additionalFuel(mass) {
    var additionalFuel = 0;
    var additionalFuelRequired = true;

    while (additionalFuelRequired) {
      var fuelRequired = calculateFuel(mass);
      if (fuelRequired > 0) {
        additionalFuel += fuelRequired;
      } else {
        additionalFuelRequired = false;
      }

      mass = fuelRequired;
    }

    return additionalFuel;
  }

  return totalFuelAmount;
};
