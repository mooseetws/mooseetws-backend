'use strict';

// dummy vehicles list
const Person = require('./../../db/person');
const simpleStore = require('./../../db/simplestore');
const DATA_COUNT = 10;

const getPeopleList = () => {
  let peopleList = [];
  for (let i = 0; i < DATA_COUNT; i += 1) {
    peopleList.push(new Person(i, i));
  }

  // get data from simple store
  peopleList = [...simpleStore.getPerson(), ...peopleList];
  return peopleList;
};

exports.getPeopleList = getPeopleList;
