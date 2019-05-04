'use strict';

// dummy smart lamp locations, with lap id
const SmartLamp = require('./../../db/smartlamp');
const DATA_COUNT = 100;
const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
};

const getLampList = () => {
  let lampList = [];
  for (let i = 0; i < DATA_COUNT; i += 1) {
    let lat = getRandomInRange(-180, 180, 2);
    let lon = getRandomInRange(-180, 180, 2);
    lampList.push(new SmartLamp(i, lat, lon));
  }
  return lampList;
};

exports.getLampList = getLampList;
