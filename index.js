const drivers = ["Antonia", "Nuru", "Amari", "Mo"]; 

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
function fareDoubler(value) {
    return value * 2;
}
function fareTripler(value) {
    return value * 3;
}
function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }