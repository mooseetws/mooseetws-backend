'use strict';

/***
 * Smart lamp object
 * represent a smart lamp. It will contain a list of person/object that will update realtime
 */
class SmartLamp {
  /***
   *
   * @param lampID - uniquely identifiable lamppost id
   * @param lat latitude of the lamp-post
   * @param long langitude of the lamp post
   */
  constructor (lampID, lat, long) {
    this.id = lampID;
    this.lat = lat;
    this.lan = long;
    this.personList = [];
    this.vehicleList = [];
  }

  /**
   *
   * @param person - a person object
   * @return {Person} - return the added person if successful
   */
  addPerson (person = undefined) {
    if (!person) {
      return;
    }
    this.personList.push(person);
    return person;
  }

  addCar (vehicle = undefined) {
    if (!vehicle) {
      return;
    }
    this.vehicleList.push(vehicle);
    return vehicle;
  }
}

module.exports = SmartLamp;
