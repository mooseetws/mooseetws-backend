'use strict';

const mobile = require('./test/mobile');
const pi = require('./test/pi');
const lamp = require('./lamp/lamp');
const person = require('./person/person');
const vehicle = require('./vehicle/vehicle');

const getMobileData = () => mobile;
const getPiData = () => pi;

exports.getMobileData = getMobileData;
exports.getPIData = getPiData;

exports.getLampList = lamp.getLampList;
exports.getPeopleList = person.getPeopleList;
exports.getVehicleList = vehicle.getVehicleList;

function isPrime (n) {
  if (n < 2) return false;
  if (n === 2) return true; // 2 is a special case
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    if (!isPrime(i)) continue;
    if (n % i === 0) return false;
  }
  return true;
}

// randomly assign vehicles to some light bulb that has id === prime
const generateTopology1 = () => {
  let smartLamps = lamp.getLampList();
  let peopleList = person.getPeopleList();

  let at = 0;
  for (let i = 0; i < smartLamps.length; i += 1) {
    let curLamp = smartLamps[i];
    if (isPrime(curLamp.id)) {
      let curPerson = at < peopleList.length ? peopleList[at] : undefined;
      at += 1;
      if (curPerson) {
        curLamp.addPerson(curPerson);
      }
    }
  }
  return smartLamps;
};

exports.generateTopology1 = generateTopology1;
