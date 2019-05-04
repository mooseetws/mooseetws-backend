'use strict';

class SmartLamp {
  constructor (lampID, lat, long) {
    this.id = lampID;
    this.lat = lat;
    this.long = long;
    this.vehicles = [];
  }
  addVehicle (vehicle = undefined) {
    if (!vehicle) {
      return;
    }
    this.vehicles.push(vehicle);
    return vehicle;
  }
}

module.exports = SmartLamp;
