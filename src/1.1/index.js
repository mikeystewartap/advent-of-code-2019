const _ = require('lodash');

console.log(input);

const totalFuelAmount = 0;
_.split(input, '\n').map((mass) => {
    totalFuelAmount += (Math.floor(parseInt(mass) / 3) - 2);
});

module.exports = totalFuelAmount;