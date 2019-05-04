var express = require('express');
var router = express.Router();

const {
  getMobileData
} = require('./../data/data');

const smartStore = require('./../db/simplestore');
router.get('/', function (req, res, next) {
  const data = getMobileData();
  res.status(200).json(data);
});

router.post('/', function (req, res, next) {
  const data = req.body;
  let status = smartStore.addOrUpdatePerson(data);
  return res.status(200).send(status);
});

module.exports = router;
