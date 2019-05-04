'use strict';

// dummy vehicles list
const Vehicle = require('./../../db/vehicle');
const DATA_COUNT = 10;

const getVehicleList = () => {
  let vehicleList = [];
  for (let i = 0; i < DATA_COUNT; i += 1) {
    let numberPlate = i;
    vehicleList.push(new Vehicle(numberPlate));
  }
  return vehicleList;
};

exports.getVehicleList = getVehicleList;
