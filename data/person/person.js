'use strict';

// dummy vehicles list
const Person = require('./../../db/person');
const DATA_COUNT = 10;

const getPeopleList = () => {
  let peopleList = [];
  for (let i = 0; i < DATA_COUNT; i += 1) {
    let phnNumber = i;
    peopleList.push(new Person(phnNumber));
  }
  return peopleList;
};

exports.getPeopleList = getPeopleList;
