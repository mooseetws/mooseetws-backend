'use strict';

// dummy vehicles list
const Person = require('./../../db/person');
const DATA_COUNT = 10;

const getPeopleList = () => {
  let peopleList = [];
  for (let i = 0; i < DATA_COUNT; i += 1) {
    peopleList.push(new Person(i, i));
  }
  return peopleList;
};

exports.getPeopleList = getPeopleList;
