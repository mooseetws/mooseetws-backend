'use strict';

const mobile = require('./test/mobile');
const pi = require('./test/pi');

const getMobileData = () => mobile;
const getPiData = () => pi;

exports.getMobileData = getMobileData;
exports.getPIData = getPiData;
