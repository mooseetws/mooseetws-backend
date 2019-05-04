'use strict';

class Person {
  constructor (licensePlate = '', registrationID = '') {
    this.name = 'Person';
    this.licensePlate = licensePlate;
    this.registrationID = registrationID;
  }

  toJSON () {
    return {
      licensePlate: this.licensePlate,
      registrationID: this.registrationID
    };
  }
}

module.exports = Person;
