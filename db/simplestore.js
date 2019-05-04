'use strict';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
const Person = require('./person');

db.defaults({ person: [] })
  .write();

class SimpleStore {
  constructor () {
    this.name = 'SimpleStore';
  }

  addOrUpdatePerson (data) {
    let { licensePlate, registrationID } = data;
    if (licensePlate && registrationID) {
      let person = new Person(licensePlate, registrationID);
      let value = db.get('person')
        .find({ 'registrationID': person.registrationID })
        .value();

      if (!value) {
        db.get('person')
          .push(person.toJSON())
          .write();
      }
      return person;
    }
  }
}

module.exports = new SimpleStore();
