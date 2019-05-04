'use strict';

const THRESHOLD = 3;

const getNearestLampList = (lampId, allLamps = []) => {
  let lampLists = [];
  for (let i = 0; i < THRESHOLD; i += 1) {
    let back = lampId - i - 1;
    let frw = lampId + i;
    if (back >= 0) {
      lampLists.push(allLamps[back]);
    }
    if (frw < allLamps.length) {
      lampLists.push(allLamps[frw]);
    }
  }
  return lampLists;
};

exports.getNearestLampList = getNearestLampList;
