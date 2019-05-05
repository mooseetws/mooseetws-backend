'use strict';

class SmartLamp {
  constructor (lampID, lat, long) {
    this.id = lampID;
    this.lat = lat;
    this.lan = long;
    this.personList = [];
  }

  addPerson (person = undefined) {
    if (!person) {
      return;
    }
    this.personList.push(person);
    return person;
  }
}

module.exports = SmartLamp;
