'use strict';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
const Person = require('./person');

/*
{
  objectType:
  confidence:
  poleId:
}
*/

db.defaults({ person: [] })
  .write();

class SimpleStore {
  constructor () {
    this.name = 'SimpleStore';
  }

  addOrUpdatePerson (data) {
    let { licensePlate, registrationID } = data;
    if (licensePlate && registrationID) {
      console.warn('->', licensePlate, registrationID);
      let person = new Person(licensePlate, registrationID);
      db.get('person')
        .push(person.toJSON())
        .write();

      return person;
    }
  }

  getPerson () {
    return db.get('person').value();
  }
}

module.exports = new SimpleStore();
