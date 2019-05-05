'use strict';

/***
 * #todo moved to database
 * Dummy data generator
 * @type {number} lamp post id
 * @type {array} a list of all lamp-post
 * @return {array} a list of nearby lamppost from the given lamppost
 */
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

// list of person to those we will send notification
const getNotificationIds = (lampList = []) => {
  let retval = [];
  for (let i = 0; i < lampList.length; i += 1) {
    let { personList } = lampList[i];
    for (let curPerson of personList) {
      retval.push(curPerson);
    }
  }
  // console.warn(retval);
  return retval;
};

exports.getNearestLampList = getNearestLampList;
exports.getNotificationIds = getNotificationIds;
