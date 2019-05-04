var express = require('express');
var router = express.Router();
const dbHandler = require('./../db/dbhandler');

const {
  getMobileData
} = require('./../data/data');

router.get('/', function (req, res, next) {
  const data = getMobileData();
  res.status(200).json(data);
});

router.post('/', function (req, res, next) {
  const data = req.body;
  let success = dbHandler.addMobile(data);
  if (success === false) {
    return res.status(500).send('');
  }
  return res.status(200).send(success);
});

module.exports = router;
