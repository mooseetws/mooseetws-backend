var express = require('express');
var router = express.Router();

const {
  getMobileData
} = require('./../data/data');

/***
 * API endpoint -
 * Provide a list of co-ordinates where moose are detencted
 */
const smartStore = require('./../db/simplestore');
router.get('/', function (req, res, next) {
  const data = getMobileData();
  res.status(200).json(data);
});

/***
 * API endpoint -
 * Update a registration.
 */
router.post('/', function (req, res, next) {
  const data = req.body;
  console.warn('data', data);
  let status = smartStore.addOrUpdatePerson(data);
  return res.status(200).send(status);
});

module.exports = router;
