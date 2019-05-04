var express = require('express');
var router = express.Router();

const {
  getPIData
} = require('./../data/data');

router.get('/', function (req, res, next) {
  const data = getPIData();
  res.status(200).json(data);
});

router.post('/', function (req, res, next) {
  const data = req.body;
  return res.status(200).send(data);
});

module.exports = router;
