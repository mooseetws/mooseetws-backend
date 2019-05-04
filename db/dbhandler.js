'use strict';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');

class DBHandler {
  constructor () {
    this.name = 'DBHandler';
    this.db = low(adapter);
    this.db.defaults({ mobile: [], pi: [] })
      .write();
  }

  addMobile (data = {}) {
    try {
      this.db.get('mobile')
        .push(data).write();
      return data;
    } catch (e) {
      return false;
    }
  }

  addPiData (data = {}) {
    try {
      this.db.get('pi')
        .push(data).write();
      return data;
    } catch (e) {
      return false;
    }
  }

  getMobile (data) {
    return this.db.get('mobile');
  }

  getPiData (data) {
    return this.db.get('pi');
  }
}

module.exports = new DBHandler();
