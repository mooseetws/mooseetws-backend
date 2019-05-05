'use strict';

/***
 * Person object
 */
class Person {
  /**
   *
   * @param licensePlate - license plate of the given person
   * @param registrationID - firebase notification id/registration number
   */
  constructor (licensePlate = '', registrationID = '') {
    this.name = 'Person';
    this.licensePlate = licensePlate;
    this.registrationID = registrationID;
  }

  /***
   * JSON representation of the person
   * @return {{licensePlate: string, registrationID: string}}
   */
  toJSON () {
    return {
      licensePlate: this.licensePlate,
      registrationID: this.registrationID
    };
  }
}

module.exports = Person;
