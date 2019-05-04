'use strict';

class Vehicle {
  constructor (plateID) {
    this.plateID = plateID;
    this.belongsTo = [];
  }

  addPerson (person = undefined) {
    if (!person) {
      return;
    }
    this.belongsTo.push(person);
  }
}

module.exports = Vehicle;
