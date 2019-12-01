const _ = require('lodash');
const fs = require('fs');

const inputRaw = fs.readFileSync('input/01-input.txt', 'utf8');

var totalFuelAmount = 0;
_.split(inputRaw, '\n').map((mass) => {
    totalFuelAmount += (Math.floor(parseInt(mass) / 3) - 2);
});

console.log('Total Fuel Amount: ', totalFuelAmount);