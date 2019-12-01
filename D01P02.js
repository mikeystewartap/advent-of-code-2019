const _ = require('lodash');
const fs = require('fs');

const inputRaw = fs.readFileSync('input/D01.txt', 'utf8');

var totalFuelAmount = 0;
_.split(inputRaw, '\n').map((mass) => {
    var moduleFuelAmount = calculateFuel(mass);
    totalFuelAmount += additionalFuel(moduleFuelAmount);
    totalFuelAmount += moduleFuelAmount;
});

function calculateFuel(mass){
    return Math.floor((mass / 3) - 2);
}

function additionalFuel(mass){

    var additionalFuel = 0;
    var additionalFuelRequired = true;

    while(additionalFuelRequired){

        var fuelRequired = calculateFuel(mass);
        if(fuelRequired > 0){
            additionalFuel += fuelRequired;
        }else{        
            additionalFuelRequired = false;
        }
        
        mass = fuelRequired;
    }

    return additionalFuel;
};

console.log('Total Fuel Amount: ', totalFuelAmount);