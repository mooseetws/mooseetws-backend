var express = require('express');
var router = express.Router();

// const smartStore = require('./../db/simplestore');

// todo unimplemented
/**
 * Should register a person with registration plate, and fcm ID
 */
router.post('/', function (req, res, next) {
  const data = req.body;
  // let status = smartStore.addOrUpdatePerson(data);
  console.log('->', data);
  return res.status(200).send(data);
});

module.exports = router;
